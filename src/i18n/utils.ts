import { translations, type Lang } from './translations';
import { siteConfig } from '../data/siteConfig';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ja' || lang === 'zh-tw') {
    return lang as Lang;
  }
  return 'en';
}

export function useTranslations(lang: Lang) {
  return translations[lang] || translations.en;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Normalize path without leading or trailing slash
  const cleanPath = path.replace(/^\/|\/$/g, '');
  
  // Remove existing lang prefix if any
  const parts = cleanPath.split('/');
  if (parts[0] === 'en' || parts[0] === 'ja' || parts[0] === 'zh-tw') {
    parts.shift();
  }
  const subPath = parts.join('/');
  
  // English is default at root (no /en/ prefix)
  if (lang === 'en') {
    return subPath === '' ? '/' : `/${subPath}/`;
  }

  if (subPath === '') {
    return `/${lang}/`;
  }
  return `/${lang}/${subPath}/`;
}

export function getCanonicalUrl(pathname: string): string {
  const clean = pathname.replace(/^\/|\/$/g, '');
  return `${siteConfig.canonicalUrl}/${clean}${clean ? '/' : ''}`;
}

export function getHreflangs(currentPath: string) {
  // get root relative path without lang prefix
  const clean = currentPath.replace(/^\/|\/$/g, '');
  const parts = clean.split('/');
  if (parts[0] === 'en' || parts[0] === 'ja' || parts[0] === 'zh-tw') {
    parts.shift();
  }
  const rel = parts.join('/');
  const sub = rel ? `${rel}/` : '';

  return [
    { lang: 'en', href: `${siteConfig.canonicalUrl}/${sub}` },
    { lang: 'ja', href: `${siteConfig.canonicalUrl}/ja/${sub}` },
    { lang: 'zh-TW', href: `${siteConfig.canonicalUrl}/zh-tw/${sub}` },
    { lang: 'x-default', href: `${siteConfig.canonicalUrl}/${sub}` },
  ];
}
