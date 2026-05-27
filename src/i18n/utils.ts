import { defaultLocale, locales, ui, type Locale, type TranslationKey } from './ui';
import {
  insightEnToFr,
  insightFrToEn,
  insightEnToDe,
  insightDeToEn,
  insightEnToEs,
  insightEsToEn,
} from './insight-slugs.mjs';

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
    '/insights': '/decryptages',
    '/contact': '/nous-contacter',
    '/thank-you': '/merci',
    '/privacy-policy': '/politique-de-confidentialite',
    '/cookie-policy': '/politique-de-cookies',
    '/terms-of-service': '/conditions-d-utilisation',
  },
  de: {
    '/about': '/ueber-uns',
    '/enter-china': '/nach-china',
    '/enter-china/market-entry-consulting': '/nach-china/markteintrittsberatung',
    '/enter-china/cross-border-setup': '/nach-china/cross-border-aufbau',
    '/enter-china/distribution': '/nach-china/vertrieb',
    '/enter-china/branding-localisation': '/nach-china/marke-und-lokalisierung',
    '/learn-china': '/china-verstehen',
    '/learn-china/platforms': '/china-verstehen/plattformen',
    '/learn-china/masterclass': '/china-verstehen/masterclass',
    '/learn-china/learning-expeditions': '/china-verstehen/studienreisen',
    '/grow-in-china': '/in-china-wachsen',
    '/grow-in-china/cross-border-ecommerce': '/in-china-wachsen/cross-border-ecommerce',
    '/grow-in-china/social-commerce': '/in-china-wachsen/social-commerce',
    '/grow-in-china/campaigns': '/in-china-wachsen/kampagnen',
    '/grow-in-china/media': '/in-china-wachsen/media',
    '/grow-in-china/influencers-kols': '/in-china-wachsen/influencer-und-kol',
    '/grow-in-china/production-studio': '/in-china-wachsen/produktionsstudio',
    '/grow-in-china/website': '/in-china-wachsen/website',
    '/work': '/referenzen',
    '/insights': '/analysen',
    '/contact': '/kontakt',
    '/thank-you': '/danke',
    '/privacy-policy': '/datenschutz',
    '/cookie-policy': '/cookie-richtlinie',
    '/terms-of-service': '/nutzungsbedingungen',
  },
  es: {
    '/about': '/quienes-somos',
    '/enter-china': '/entrar-en-china',
    '/enter-china/market-entry-consulting': '/entrar-en-china/estrategia-de-entrada',
    '/enter-china/cross-border-setup': '/entrar-en-china/lanzamiento-cross-border',
    '/enter-china/distribution': '/entrar-en-china/distribucion',
    '/enter-china/branding-localisation': '/entrar-en-china/marca-y-localizacion',
    '/learn-china': '/conocer-china',
    '/learn-china/platforms': '/conocer-china/plataformas',
    '/learn-china/masterclass': '/conocer-china/masterclass',
    '/learn-china/learning-expeditions': '/conocer-china/inmersion-china',
    '/grow-in-china': '/crecer-en-china',
    '/grow-in-china/cross-border-ecommerce': '/crecer-en-china/ecommerce-transfronterizo',
    '/grow-in-china/social-commerce': '/crecer-en-china/comercio-social',
    '/grow-in-china/campaigns': '/crecer-en-china/campanas',
    '/grow-in-china/media': '/crecer-en-china/medios',
    '/grow-in-china/influencers-kols': '/crecer-en-china/influencia-y-kol',
    '/grow-in-china/production-studio': '/crecer-en-china/estudio-de-produccion',
    '/grow-in-china/website': '/crecer-en-china/sitio-web',
    '/work': '/proyectos',
    '/insights': '/analisis',
    '/contact': '/contacto',
    '/thank-you': '/gracias',
    '/privacy-policy': '/politica-de-privacidad',
  },
};

/**
 * Per-locale path prefixes. Used for nested routes whose tail segment is a
 * brand or content slug that stays identical across locales (e.g. case study
 * URLs under /work and /fr/nos-realisations). Listing the prefix here lets the
 * language switcher round-trip the full path without enumerating every leaf.
 *
 * Note: /insights/ is NOT in this map because each FR insight has a fully
 * native French slug. Insight pairs are resolved via `insightSlugFrToEn` below.
 */
const prefixMap: Record<Exclude<Locale, typeof defaultLocale>, Record<string, string>> = {
  fr: {
    '/work/': '/nos-realisations/',
  },
  de: {
    '/work/': '/referenzen/',
  },
  es: {
    '/work/': '/proyectos/',
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
  // FR insight reverse lookup: /fr/decryptages/<fr-slug> -> /insights/<en-slug>
  if (sourceLocale === 'fr' && stripped.startsWith('/decryptages/')) {
    const frSlug = stripped.slice('/decryptages/'.length);
    const enSlug = insightFrToEn[frSlug];
    if (enSlug) return `/insights/${enSlug}`;
  }
  // DE insight reverse lookup: /de/analysen/<de-slug> -> /insights/<en-slug>
  if (sourceLocale === 'de' && stripped.startsWith('/analysen/')) {
    const deSlug = stripped.slice('/analysen/'.length);
    const enSlug = insightDeToEn[deSlug];
    if (enSlug) return `/insights/${enSlug}`;
  }
  // ES insight reverse lookup: /es/analisis/<es-slug> -> /insights/<en-slug>
  if (sourceLocale === 'es' && stripped.startsWith('/analisis/')) {
    const esSlug = stripped.slice('/analisis/'.length);
    const enSlug = insightEsToEn[esSlug];
    if (enSlug) return `/insights/${enSlug}`;
  }
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
  // FR insight forward lookup: /insights/<en-slug> -> /fr/decryptages/<fr-slug>
  if (locale === 'fr' && canonical.startsWith('/insights/')) {
    const enSlug = canonical.slice('/insights/'.length);
    const frSlug = insightEnToFr[enSlug];
    if (frSlug) return `/fr/decryptages/${frSlug}`;
  }
  // DE insight forward lookup: /insights/<en-slug> -> /de/analysen/<de-slug>
  if (locale === 'de' && canonical.startsWith('/insights/')) {
    const enSlug = canonical.slice('/insights/'.length);
    const deSlug = insightEnToDe[enSlug];
    if (deSlug) return `/de/analysen/${deSlug}`;
  }
  // ES insight forward lookup: /insights/<en-slug> -> /es/analisis/<es-slug>
  if (locale === 'es' && canonical.startsWith('/insights/')) {
    const enSlug = canonical.slice('/insights/'.length);
    const esSlug = insightEnToEs[enSlug];
    if (esSlug) return `/es/analisis/${esSlug}`;
  }
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
