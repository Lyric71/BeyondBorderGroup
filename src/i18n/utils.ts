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
 * Per-locale slug table. Keys are canonical English paths (without locale
 * prefix). Values are the native-language slug to use under that locale's URL
 * tree, per the rule that every page under `/fr/`, `/de/`, `/es/`, `/zh/` must
 * read in the target language.
 *
 * Every page that exists in the target locale must be listed here so the
 * language switcher can both forward-map (EN -> native) and reverse-map
 * (native -> EN). Pages absent from this table fall back to the locale home.
 */
const slugMap: Record<Exclude<Locale, typeof defaultLocale>, Record<string, string>> = {
  fr: {
    '/about': '/qui-nous-sommes',
    '/enter-china': '/entrer-en-chine',
    '/enter-china/market-entry-consulting': '/entrer-en-chine/conseil-en-entree-de-marche',
    '/enter-china/cross-border-setup': '/entrer-en-chine/lancement-cross-border',
    '/enter-china/distribution': '/entrer-en-chine/distribution',
    '/enter-china/branding-localisation': '/entrer-en-chine/marque-et-localisation',
    '/learn-china': '/comprendre-la-chine',
    '/learn-china/platforms': '/comprendre-la-chine/plateformes',
    '/learn-china/masterclass': '/comprendre-la-chine/masterclass',
    '/learn-china/learning-expeditions': '/comprendre-la-chine/expeditions-terrain',
    '/grow-in-china': '/se-developper-en-chine',
    '/grow-in-china/cross-border-ecommerce': '/se-developper-en-chine/ecommerce-transfrontalier',
    '/grow-in-china/social-commerce': '/se-developper-en-chine/commerce-social',
    '/grow-in-china/campaigns': '/se-developper-en-chine/campagnes',
    '/grow-in-china/media': '/se-developper-en-chine/medias',
    '/grow-in-china/influencers-kols': '/se-developper-en-chine/influence-et-kol',
    '/grow-in-china/production-studio': '/se-developper-en-chine/studio-de-production',
    '/grow-in-china/website': '/se-developper-en-chine/site-web',
    '/work': '/nos-realisations',
  },
};

/**
 * Per-locale path prefixes. Used for nested routes whose tail segment is a
 * brand or content slug that stays identical across locales (e.g. case study
 * URLs under /work and /fr/nos-realisations). Listing the prefix here lets the
 * language switcher round-trip the full path without enumerating every leaf.
 */
const prefixMap: Record<Exclude<Locale, typeof defaultLocale>, Record<string, string>> = {
  fr: {
    '/work/': '/nos-realisations/',
  },
};

/**
 * Reverse the per-locale slug table so we can translate a native-language slug
 * back to its canonical English path. Built once at module load.
 */
const reverseSlugMap = Object.fromEntries(
  (Object.entries(slugMap) as [Exclude<Locale, typeof defaultLocale>, Record<string, string>][])
    .map(([loc, map]) => [loc, Object.fromEntries(Object.entries(map).map(([en, native]) => [native, en]))]),
) as Record<Exclude<Locale, typeof defaultLocale>, Record<string, string>>;

const reversePrefixMap = Object.fromEntries(
  (Object.entries(prefixMap) as [Exclude<Locale, typeof defaultLocale>, Record<string, string>][])
    .map(([loc, map]) => [loc, Object.fromEntries(Object.entries(map).map(([en, native]) => [native, en]))]),
) as Record<Exclude<Locale, typeof defaultLocale>, Record<string, string>>;

/**
 * Convert any path (canonical English or locale-prefixed native) to its
 * canonical English form. Unknown native slugs return `null` so callers can
 * fall back to the locale home rather than producing a 404.
 */
function toCanonical(path: string): string | null {
  const parts = path.split('/').filter(Boolean);
  if (!parts.length) return '/';
  const first = parts[0];
  if (!(locales as readonly string[]).includes(first)) {
    return path.startsWith('/') ? path : '/' + path;
  }
  const sourceLocale = first as Locale;
  const stripped = parts.length === 1 ? '/' : '/' + parts.slice(1).join('/');
  if (sourceLocale === defaultLocale) return stripped;
  if (stripped === '/') return '/';
  const reverse = reverseSlugMap[sourceLocale as Exclude<Locale, typeof defaultLocale>];
  const direct = reverse?.[stripped];
  if (direct) return direct;
  const prefixes = reversePrefixMap[sourceLocale as Exclude<Locale, typeof defaultLocale>];
  if (prefixes) {
    for (const [native, en] of Object.entries(prefixes)) {
      if (stripped.startsWith(native)) {
        return en + stripped.slice(native.length);
      }
    }
  }
  return null;
}

/**
 * Build a path for a target locale. Handles both directions, so it works
 * whether the input is `/about` (canonical) or `/fr/qui-nous-sommes` (native).
 *
 * `localizePath('/about', 'fr')` -> `'/fr/qui-nous-sommes'`
 * `localizePath('/fr/qui-nous-sommes', 'en')` -> `'/about'`
 *
 * When the source path has no equivalent in the target locale, falls back to
 * the target locale home so the switcher never lands on a 404.
 */
export function localizePath(path: string, locale: Locale): string {
  const canonical = toCanonical(path);
  if (locale === defaultLocale) {
    if (canonical === null) return '/';
    return canonical === '' ? '/' : canonical;
  }
  if (canonical === null) return `/${locale}`;
  if (canonical === '/' || canonical === '') return `/${locale}`;
  const map = slugMap[locale as Exclude<Locale, typeof defaultLocale>];
  const translated = map?.[canonical];
  if (translated) return `/${locale}${translated}`;
  const prefixes = prefixMap[locale as Exclude<Locale, typeof defaultLocale>];
  if (prefixes) {
    for (const [en, native] of Object.entries(prefixes)) {
      if (canonical.startsWith(en)) {
        return `/${locale}${native}${canonical.slice(en.length)}`;
      }
    }
  }
  return `/${locale}`;
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
