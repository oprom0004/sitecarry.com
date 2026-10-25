import type { APIRoute } from 'astro';

export const prerender = false;

interface PhpAnalysis {
  version: string | null;
  branch: string | null;
  status: 'eol' | 'outdated_cve' | 'patched' | 'hidden';
  statusLabel: string;
  safeMinimum: string | null;
  advisory: string;
}

function analyzePhpVersion(rawVersion: string | null): PhpAnalysis {
  if (!rawVersion) {
    return {
      version: null,
      branch: null,
      status: 'hidden',
      statusLabel: 'Hidden from Public Headers',
      safeMinimum: '8.2.35 / 8.3.36 / 8.4.27 / 8.5.12',
      advisory:
        'The server does not broadcast an X-Powered-By PHP version header publicly. While hiding headers prevents trivial reconnaissance, if the site still runs dynamic PHP behind the scenes, verify internally that your runtime is patched to at least PHP 8.2.35, 8.3.36, 8.4.27, or 8.5.12.',
    };
  }

  const match = rawVersion.match(/(\d+)\.(\d+)(?:\.(\d+))?/);
  if (!match) {
    return {
      version: rawVersion,
      branch: null,
      status: 'outdated_cve',
      statusLabel: 'Unverified Custom Runtime',
      safeMinimum: '8.3.36+',
      advisory: `Detected header "${rawVersion}", which exposes runtime information publicly. Verify patch level against CVE-2026-109618.`,
    };
  }

  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);
  const patch = match[3] !== undefined ? parseInt(match[3], 10) : 0;
  const branch = `${major}.${minor}`;
  const full = `${major}.${minor}.${patch}`;

  // PHP <= 8.1 is End of Life
  if (major < 8 || (major === 8 && minor <= 1)) {
    return {
      version: full,
      branch,
      status: 'eol',
      statusLabel: `End-of-Life (PHP ${branch}) · Unpatched`,
      safeMinimum: 'Upgrade to PHP 8.3.36+ or Decouple to Static Edge',
      advisory: `PHP ${full} reached official End-of-Life and receives no security updates from the PHP Foundation. It is vulnerable to CVE-2026-109618 (PHP2shell) and often incurs legacy hosting surcharges.`,
    };
  }

  // Minimum patched versions for CVE-2026-109618 / CVE-2026-109619 (Oct 21, 2026)
  const minSafePatch: Record<string, number> = {
    '8.2': 35,
    '8.3': 36,
    '8.4': 27,
    '8.5': 12,
  };

  const requiredPatch = minSafePatch[branch];
  if (requiredPatch !== undefined) {
    if (patch < requiredPatch) {
      return {
        version: full,
        branch,
        status: 'outdated_cve',
        statusLabel: `Outdated Patch Level (Needs ${branch}.${requiredPatch}+)`,
        safeMinimum: `${branch}.${requiredPatch}`,
        advisory: `PHP ${full} is in an active branch (${branch}), but its patch level is prior to ${branch}.${requiredPatch}, leaving it exposed to CVE-2026-109618 / CVE-2026-109619 (PHP2shell). In addition, broadcasting the exact version via HTTP headers aids automated scanners.`,
      };
    } else {
      return {
        version: full,
        branch,
        status: 'patched',
        statusLabel: `Patched Branch (${branch}.${patch}) · Header Exposed`,
        safeMinimum: `${branch}.${requiredPatch}`,
        advisory: `PHP ${full} meets the patch requirement (${branch}.${requiredPatch}+) for CVE-2026-109618. However, your server is publicly broadcasting its PHP version in HTTP headers (expose_php = On), which we recommend disabling—or eliminating entirely via static edge migration.`,
      };
    }
  }

  return {
    version: full,
    branch,
    status: 'patched',
    statusLabel: `PHP ${full} Detected`,
    safeMinimum: 'Latest release',
    advisory: `Public PHP header (${full}) detected. Disable expose_php in php.ini to reduce fingerprinting.`,
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    let rawUrl = (body.url || '').trim();

    if (!rawUrl) {
      return new Response(JSON.stringify({ error: 'Please enter a valid website URL.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!/^https?:\/\//i.test(rawUrl)) {
      rawUrl = 'https://' + rawUrl;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid URL format. Example: https://example.com' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SSRF Protection: Block localhost and private IP ranges
    const host = parsedUrl.hostname.toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '0.0.0.0' ||
      host === '::1' ||
      host.startsWith('192.168.') ||
      host.startsWith('10.') ||
      host.startsWith('169.254.') ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)
    ) {
      return new Response(
        JSON.stringify({ error: 'Scanning internal or private network addresses is not permitted.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const startTime = Date.now();
    const response = await fetch(parsedUrl.toString(), {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(7000),
      headers: {
        'User-Agent': 'SiteCarry-HeaderInspector/1.0 (+https://sitecarry.com/php-version-checker/)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    const responseTimeMs = Date.now() - startTime;

    const xPoweredBy = response.headers.get('x-powered-by') || null;
    const serverHeader = response.headers.get('server') || null;
    const linkHeader = response.headers.get('link') || null;
    const xPingback = response.headers.get('x-pingback') || null;
    const xRedirectBy = response.headers.get('x-redirect-by') || null;
    const setCookie = response.headers.get('set-cookie') || '';
    const cfCache = response.headers.get('cf-cache-status') || null;
    const xVercel = response.headers.get('x-vercel-id') || null;

    // Read up to 24KB of HTML to check for WordPress / generator tags
    const htmlText = (await response.text()).slice(0, 24000);

    // Detect PHP version from X-Powered-By or Server header
    let detectedPhpString: string | null = null;
    const combinedHeader = `${xPoweredBy || ''} ${serverHeader || ''}`;
    const phpMatch = combinedHeader.match(/PHP\/([\d.]+(?:-[a-zA-Z0-9.+~]+)?)/i);
    if (phpMatch) {
      detectedPhpString = phpMatch[1];
    }

    // Detect WordPress / PHP signals
    const wpSignals: string[] = [];
    if (linkHeader && linkHeader.includes('api.w.org')) {
      wpSignals.push('WP REST API Link Header (api.w.org)');
    }
    if (xPingback) {
      wpSignals.push('X-Pingback XML-RPC Header');
    }
    if (xRedirectBy && /wordpress/i.test(xRedirectBy)) {
      wpSignals.push('X-Redirect-By: WordPress');
    }
    if (/\/wp-content\/|\/wp-includes\//i.test(htmlText)) {
      wpSignals.push('WordPress Asset Paths (/wp-content/)');
    }

    let wpVersion: string | null = null;
    const wpGenMatch = htmlText.match(/<meta[^>]+name=["']generator["'][^>]+content=["']WordPress\s*([\d.]+)?["']/i);
    if (wpGenMatch) {
      wpVersion = wpGenMatch[1] || 'Detected';
      wpSignals.push(`Meta Generator Tag (WordPress ${wpVersion})`);
    }

    const hasPhpSessionCookie = /PHPSESSID/i.test(setCookie);
    if (hasPhpSessionCookie) {
      wpSignals.push('PHPSESSID Dynamic Cookie');
    }

    const phpAnalysis = analyzePhpVersion(detectedPhpString);

    const isWordPress = wpSignals.some((s) => s.includes('WordPress') || s.includes('WP ') || s.includes('X-Pingback'));
    const impliesPhpRuntime = Boolean(detectedPhpString || isWordPress || hasPhpSessionCookie);

    return new Response(
      JSON.stringify({
        success: true,
        scannedUrl: parsedUrl.toString(),
        finalUrl: response.url || parsedUrl.toString(),
        statusCode: response.status,
        responseTimeMs,
        phpAnalysis,
        impliesPhpRuntime,
        isWordPress,
        wpVersion,
        signals: wpSignals,
        headers: {
          server: serverHeader || 'Not Disclosed',
          xPoweredBy: xPoweredBy || 'Hidden (Not Broadcast)',
          edgeCache: cfCache ? `Cloudflare (${cfCache})` : xVercel ? 'Vercel Edge' : 'Direct / Standard',
        },
        checkedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err: any) {
    const isTimeout = err?.name === 'TimeoutError' || err?.name === 'AbortError';
    return new Response(
      JSON.stringify({
        error: isTimeout
          ? 'The target website took longer than 7 seconds to respond. This often indicates heavy server-side PHP/database bottlenecks or firewall blocking.'
          : `Unable to reach target URL (${err?.message || 'Connection failed'}). Verify the domain is publicly accessible.`,
      }),
      {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
