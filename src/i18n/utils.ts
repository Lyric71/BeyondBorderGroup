import { defaultLocale, locales, ui, type Locale, type TranslationKey } from './ui';

/**
 * Detect the active locale from a URL pathname.
 *
 * `/fr` and `/fr/anything` map to `fr`. Everything else falls back to the
 * default locale (English). The default locale stays at the URL root so
 * existing English URLs and the WordPress redirect map keep working.
 */
export function getLocaleFromUrl(url: URL): Locale {
  const first = url.pathname.split('/').filter(Boolean)[0];
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

/**
 * Strip the locale prefix from a path so we can rebuild it for another locale.
 * `'/fr/about'` -> `'/about'`, `'/about'` -> `'/about'`.
 */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (locales as readonly string[]).includes(parts[0])) {
    return '/' + parts.slice(1).join('/');
  }
  return pathname.startsWith('/') ? pathname : '/' + pathname;
}

/**
 * Build a path for a target locale. The default locale lives at the root.
 *
 * `localizePath('/about', 'fr')` -> `'/fr/about'`
 * `localizePath('/about', 'en')` -> `'/about'`
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === defaultLocale) return clean === '' ? '/' : clean;
  if (clean === '/' || clean === '') return `/${locale}`;
  return `/${locale}${clean}`;
}

/**
 * Translation function bound to a locale. Falls back to English if a key is
 * missing in the target locale (which should never happen in practice; the
 * dictionary is shared and we keep parity).
 *
 * Supports `{placeholder}` interpolation: `t('nav.allServices', { section: 'Enter China' })`.
 */
export function useTranslations(locale: Locale) {
  return function t(key: TranslationKey, vars?: Record<string, string | number>): string {
    const dict = ui[locale] as Record<string, string>;
    const fallback = ui[defaultLocale] as Record<string, string>;
    let value = dict[key] ?? fallback[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return value;
  };
}

export { locales, defaultLocale };
export type { Locale };
