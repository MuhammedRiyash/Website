/**
 * URL helpers. The site is built with `build.format: 'file'` under the `/Website` base,
 * so every page lives at `/Website/<path>.html` (the home page at `/Website/`).
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const SITE_ORIGIN = 'https://muhammedriyash.github.io';

/** Internal page link: `href('services/shopify-development#faq')` → `/Website/services/shopify-development.html#faq`. */
export function href(path = ''): string {
  const [rawPath, hash] = path.split('#');
  const clean = rawPath.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '');
  const page = clean === '' || clean === 'index' ? `${BASE}/` : `${BASE}/${clean}.html`;
  return hash ? `${page}#${hash}` : page;
}

/** File in `public/`: `asset('favicon.ico')` → `/Website/favicon.ico`. */
export function asset(file: string): string {
  return `${BASE}/${file.replace(/^\/+/, '')}`;
}

/** Absolute URL for canonical / Open Graph / JSON-LD. */
export function absolute(pathOrHref: string): string {
  const path = pathOrHref.startsWith('/') ? pathOrHref : href(pathOrHref);
  return new URL(path, SITE_ORIGIN).toString();
}

/** True when `current` (Astro.url.pathname) is the given section or one of its children. */
export function isActive(current: string, path: string): boolean {
  const target = href(path).replace(/\.html$/, '');
  const now = current.replace(/\.html$/, '').replace(/\/+$/, '');
  return now === target || now.startsWith(`${target}/`);
}
