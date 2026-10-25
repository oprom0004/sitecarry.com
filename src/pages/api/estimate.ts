import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // 1. Anti-spam honeypot check
    if (body.website_trap_field) {
      return new Response(JSON.stringify({ error: "Spam detected." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. Field validation
    const { name, email, website_url, primary_goal, details } = body;

    if (!name || !email || !website_url || !primary_goal || !details) {
      return new Response(JSON.stringify({ error: "Required fields missing." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validate URL format
    try {
      new URL(website_url);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid website URL format (must include http:// or https://)." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. Generate or preserve tracking reference
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const trackingId = body.trackingId || `SC-${today}-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log(`[SiteCarry Inquiry Received] ${trackingId}:`, {
      name,
      email,
      website_url,
      primary_goal,
      budget: body.budget,
      timeline: body.timeline,
      receivedAt: new Date().toISOString(),
    });

    return new Response(JSON.stringify({
      success: true,
      trackingId,
      message: "Inquiry registered successfully."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
