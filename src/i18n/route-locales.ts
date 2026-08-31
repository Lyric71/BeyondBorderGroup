/**
 * Per-route locale sets (WO-2.3).
 *
 * Recon found that locales on this site are a single global constant, read by
 * the language switcher, the hreflang builder and the sitemap serializer. Adding
 * `zh` to that constant would offer Chinese on every page of the site and emit a
 * `zh` hreflang everywhere, which is exactly the failure the work order calls
 * out: a brand clicks 中文 from the homepage and lands on a distributor sign-up
 * form.
 *
 * So the global list stays at EN, FR, DE, ES, and routes that ship a different
 * set declare it here. Today that is one route family: the Compass partner
 * pages, which are English and Chinese only.
 *
 * The pattern is lifted from the Compass repo, which solved the same problem
 * with PARTNER_LOCALES + isPartnerLocale() in src/lib/site.ts.
 */
import { locales as siteLocales, type Locale } from './ui';

/** Chinese exists only on the partner routes, so it is not part of `Locale`. */
export type ExtraLocale = 'zh';
export type AnyLocale = Locale | ExtraLocale;

export const localeLabelsExtra: Record<ExtraLocale, string> = { zh: '中文' };
export const localeNamesNativeExtra: Record<ExtraLocale, string> = { zh: '简体中文' };

/**
 * Routes whose locale set differs from the site-wide one, keyed by canonical
 * English path. `exact: false` matches the path and anything beneath it, which
 * is what lets /compass/partners/thank-you inherit the partner set.
 */
const ROUTE_LOCALES: { path: string; locales: readonly AnyLocale[] }[] = [
  { path: '/compass/partners', locales: ['en', 'zh'] },
];

/** ZH slugs, keyed by canonical English path. Kept tiny on purpose. */
const ZH_PATHS: Record<string, string> = {
  '/compass/partners': '/zh/compass/partners',
  '/compass/partners/thank-you': '/zh/compass/partners/thank-you',
};

const ZH_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ZH_PATHS).map(([en, zh]) => [zh, en]),
);

/** True for any path that lives under a route with its own locale set. */
export function hasRouteLocales(path: string): boolean {
  const en = toEnglishPath(path);
  return ROUTE_LOCALES.some((r) => en === r.path || en.startsWith(r.path + '/'));
}

/**
 * The locale set a given path should offer. Falls back to the site-wide list,
 * so every existing page keeps exactly the behaviour it has today.
 */
export function localesForPath(path: string): readonly AnyLocale[] {
  const en = toEnglishPath(path);
  const match = ROUTE_LOCALES.find((r) => en === r.path || en.startsWith(r.path + '/'));
  return match ? match.locales : siteLocales;
}

/** Normalise a `/zh/...` path back to its canonical English form. */
export function toEnglishPath(path: string): string {
  const clean = path === '/' ? '/' : path.replace(/\/$/, '');
  return ZH_TO_EN[clean] ?? clean;
}

/** Resolve the URL for one locale of a route that declares its own set. */
export function routeLocalePath(path: string, locale: AnyLocale): string | null {
  const en = toEnglishPath(path);
  if (locale === 'zh') return ZH_PATHS[en] ?? null;
  if (locale === 'en') return en;
  // FR, DE and ES do not exist on these routes by design.
  return null;
}

/** True when the given path is one of the Chinese partner pages. */
export function isZhPath(path: string): boolean {
  const clean = path === '/' ? '/' : path.replace(/\/$/, '');
  return clean in ZH_TO_EN;
}

/** Every ZH path the site publishes. Used by the sitemap and by tests. */
export const ZH_URLS = Object.values(ZH_PATHS);
