// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { insightEnToFr, insightEnToDe, insightEnToEs } from './src/i18n/insight-slugs.mjs';

/**
 * Legacy WordPress insight article slugs. On the old site every insight sat at
 * the root (`/<slug>/`). They now live under `/insights/<slug>`. Slugs are kept
 * identical to preserve external links and make the redirect 1:1.
 * Keep the order grouped by original listing page for easy review.
 */
const insightSlugs = [
  // Former listing page 1
  'foreign-brands-in-china-why-most-market-tests-fail',
  'science-emotion-chinas-new-brand-playbook',
  'douyin-live-commerce-2025-store-led-livestream-strategy',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans',
  'china-2026-8-ecommerce-marketing-predictions',
  'china-e-commerce-platforms-2025',
  'taobao-flash-sale-and-chinas-30-minute-retail',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands',
  'how-jd-mall-turns-offline-stores-into-experience-hubs',
  'what-taobao-instant-commerce-means-for-non-chinese-brands',
  'brand-localization-for-china-without-losing-your-dna',
  'double-11-2025-ai-ecommerce-efficiency-china',
  'double-11-2025-old-media-strategy-china-ecommerce',
  'double-11-2025-the-end-of-chinas-shopping-wars',
  'best-short-video-platforms-in-china',
  'how-to-localize-brand-content-for-china',
  'the-power-of-wechat-qr-codes-for-businesses-in-china',
  'how-to-apply-for-an-icp-license-for-your-website',
  'ultimate-guide-to-using-wordpress-in-china',
  'best-practices-to-launch-a-crm-program-in-china',
  // Former listing page 2
  'how-to-host-your-website-in-china-for-maximum-marketing-impact',
  'how-to-localize-your-website-for-china-tips-for-global-marketers',
  'ux-design-for-global-markets-chinese-vs-western-approaches',
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china',
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch',
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips',
  'top-5-video-and-livestreaming-platforms-in-china',
  'top-ecommerce-influencers-in-china-2024',
  'weibo-marketing-guide-mastering-social-commerce-in-china',
  'best-practices-for-koc-marketing-in-china',
  'best-practices-for-successful-e-commerce-livestreaming-in-china',
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights',
  'china-social-media-and-kol-strategies-for-ecommerce-brands',
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin',
  'the-ultimate-guide-to-wechat-channels-for-brands',
  'ultimate-guide-to-tmall-media-costs-in-china',
  'how-chinas-advertising-laws-impact-global-brands',
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide',
  'best-social-commerce-platforms-in-china-for-ecommerce-growth',
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies',
  // Former listing page 3
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event',
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024',
  'top-chinese-social-media-platforms-for-2024-marketing',
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce',
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china',
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china',
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers',
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers',
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment',
  'how-to-find-a-distributor-for-your-products-in-china-in-2024',
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights',
  'social-commerce-china-platforms-strategies-best-practices',
  'green-marketing-in-china-how-brands-are-embracing-sustainability',
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales',
  'empowering-women-in-chinas-digital-commerce-2024-trends',
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025',
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china',
  'luxury-brand-trends-mastering-social-media-in-china',
  'ai-revolutionizing-ecommerce-in-china',
  'transforming-brand-engagement-through-livestreaming-in-china',
  // Former listing page 4
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china',
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china',
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications',
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china',
  'how-to-localize-a-brand-for-china',
  'a-comparison-between-tmall-and-amazon',
];

/** `/<slug>` -> `/insights/<slug>` 301 map for the legacy article URLs. */
const insightRedirects = Object.fromEntries(
  insightSlugs.map((slug) => [
    `/${slug}`,
    { status: /** @type {const} */ (301), destination: `/insights/${slug}` },
  ]),
);

/**
 * Legacy WordPress case study slugs mapped to new Astro slugs under `/work/`.
 * The old site used `/case-study/<wp-slug>/`. The new site uses `/work/<slug>`.
 * Slugs were shortened and standardised during migration, so the mapping is
 * explicit rather than 1:1.
 */
const caseStudyRedirectPairs = [
  ['how-camper-grew-335-on-chinese-social-media', 'camper'],
  ['case-study-roc-skincares-china-market-success', 'roc'],
  ['case-study-master-martinis-social-media-success', 'master-martini'],
  ['case-study-iguzzinis-luxury-lighting-success-in-china', 'iguzzini'],
  [
    'chery-automotive-with-chery-with-love-co-create-friday-campaign-cross-border-marketing',
    'chery',
  ],
  ['case-study-valios-successful-entry-into-china', 'valio'],
  ['case-study-marriotts-super-brand-day-huge-success-in-china', 'marriott'],
  ['viessmann-tmall-ecommerce-in-china-for-heating-boiling-solutions', 'viessmann'],
  ['case-study-jacs-pixel-perfect-global-asset-production', 'jac'],
  ['langnese-china-reversing-sales-decline', 'langnese'],
  ['case-study-blue-insurances-digital-success-in-hk', 'blue-insurance'],
  ['age-20s-little-milk-brick-launch-campaign-china', 'age-20s'],
  ['jac-automobile-campaign-and-content-on-wechat-red-weibo-powered-by-ai', 'jac-automobile'],
  ['how-mission-foods-nailed-digital-marketing-in-china', 'mission-foods'],
  ['case-study-chery-groups-exlantix-branding-success', 'exlantix'],
  ['jaguar-land-rover-annual-social-media-integrated-marketing-services', 'jaguar-land-rover'],
  ['wordpress-china-migration-bassetti-case-study', 'bassetti'],
  ['pierre-fabre-china-masterclass-digital-ecomm', 'pierre-fabre'],
  ['shiseido-rq-pyology-china-brand-launch-case-study', 'shiseido-rq-pyology'],
  ['case-study-beyondtiktoks-dedicated-tiktok-success', 'beyondtiktok'],
  [
    'kerry-food-ecommerce-china-tmalfor-davinci-gourmet-syrups-sauces-and-smoothies',
    'kerry-davinci',
  ],
  ['case-study-exeeds-successful-global-pr-launch', 'exeed'],
  ['case-study-sohomds-digital-health-transformation', 'sohomd'],
];

const caseStudyRedirects = Object.fromEntries(
  caseStudyRedirectPairs.map(([wpSlug, astroSlug]) => [
    `/case-study/${wpSlug}`,
    { status: /** @type {const} */ (301), destination: `/work/${astroSlug}` },
  ]),
);

/**
 * Legacy WordPress service pages (English). Each long marketing slug maps to
 * the closest intent match on the new site. Where multiple legacy pages cover
 * the same intent (e.g. Tmall, JD, and "ecommerce-agency"), they all land on
 * the same hub to consolidate equity.
 */
const enServiceRedirectPairs = [
  ['/wordpress-agency-in-china-design-coding-content-hosting', '/grow-in-china/website'],
  ['/website', '/grow-in-china/website'],
  ['/wechat-marketing-agency-in-china-content-advertising-mini-program', '/grow-in-china/website'],
  [
    '/red-little-red-book-marketing-agency-in-china-content-commerce-influencers',
    '/grow-in-china/influencers-kols',
  ],
  ['/influencer-agency-in-china-campaigns-and-ecommerce', '/grow-in-china/influencers-kols'],
  ['/social-media-agency-in-china-kols-and-brand-content', '/grow-in-china/influencers-kols'],
  ['/douyin-marketing-agency-in-china-content-ads-influencers', '/grow-in-china/social-commerce'],
  ['/social-commerce-in-china', '/grow-in-china/social-commerce'],
  ['/media-and-marketing-agency-in-china', '/grow-in-china/media'],
  ['/pr', '/grow-in-china/media'],
  ['/creative-agency-china-production-studio-content-factory', '/grow-in-china/production-studio'],
  [
    '/artificial-intelligence-generated-content-for-marketing-in-china',
    '/grow-in-china/production-studio',
  ],
  ['/event-trade-show-agency-in-china', '/grow-in-china/campaigns'],
  [
    '/tmall-ecommerce-agency-in-china-sell-your-products-in-china',
    '/grow-in-china/cross-border-ecommerce',
  ],
  ['/jd-ecommerce-agency-in-china-cross-border-ecommerce', '/grow-in-china/cross-border-ecommerce'],
  [
    '/ecommerce-agency-in-china-sell-your-products-in-china',
    '/grow-in-china/cross-border-ecommerce',
  ],
  ['/branding-and-design-agency-in-china', '/enter-china/branding-localisation'],
  ['/offline-product-distribution-services-in-china', '/enter-china/distribution'],
  ['/china-learning-expeditions-ecommerce-digital-ai', '/learn-china/learning-expeditions'],
  ['/who-we-are-agency-china-digital-commerce-branding', '/about'],
  ['/contact-us-to-enter-the-chinese-market-marketing-communication-commerce', '/contact'],
];

/**
 * Legacy WordPress service pages (French). The old site mixed English and
 * French slugs at the root; the new site uses native French slugs under /fr/.
 */
const frServiceRedirectPairs = [
  ['/agence-marketing-et-ecommerce-en-chine-20-ans-dexperience', '/fr'],
  ['/agence-marketing-chine-bonne-pratiques-et-analyses-digital-et-commerce', '/fr/decryptages'],
  ['/agence-marketing-digitale-media-et-ecommerce-en-chine', '/fr/se-developper-en-chine/medias'],
  ['/agence-de-relations-presse-en-chine-rp-medias', '/fr/se-developper-en-chine/medias'],
  [
    '/agence-de-social-media-en-chine-kols-et-contenu-de-marque',
    '/fr/se-developper-en-chine/influence-et-kol',
  ],
  ['/agence-evenementielle-salons-en-chine', '/fr/se-developper-en-chine/campagnes'],
  [
    '/agence-creative-chine-studio-de-production-usine-de-contenu',
    '/fr/se-developper-en-chine/studio-de-production',
  ],
  [
    '/agence-wordpress-en-chine-design-dev-contenu-hebergement',
    '/fr/se-developper-en-chine/site-web',
  ],
  ['/agence-web-et-mini-programme-wechat-en-chine', '/fr/se-developper-en-chine/site-web'],
  [
    '/agence-ecommerce-en-chine-vendez-vos-produits-en-chine',
    '/fr/se-developper-en-chine/ecommerce-transfrontalier',
  ],
  [
    '/agence-ecommerce-tmall-en-chine-vendez-vos-produits-en-chine',
    '/fr/se-developper-en-chine/ecommerce-transfrontalier',
  ],
  [
    '/agence-ecommerce-jd-en-chine-cross-border-ecommerce',
    '/fr/se-developper-en-chine/ecommerce-transfrontalier',
  ],
  [
    '/ecommerce-transfrontalier-en-chine-strategie-dentree-sur-le-marche',
    '/fr/entrer-en-chine/lancement-cross-border',
  ],
  ['/agence-branding-et-design-en-chine', '/fr/entrer-en-chine/marque-et-localisation'],
  ['/formation-au-digital-et-a-lecommerce-en-chine', '/fr/comprendre-la-chine/masterclass'],
  ['/learning-expedition-chine-ecommerce-ia', '/fr/comprendre-la-chine/expeditions-terrain'],
  // FR privacy policy: native slug now lives at /fr/politique-de-confidentialite.
  ['/politique-de-confidentialite-beyondbordergroup', '/fr/politique-de-confidentialite'],
];

/**
 * Legacy WordPress insight slugs (French). The old site published the French
 * version at a native slug at the root. The new site uses a different native
 * French slug under `/fr/decryptages/`, mapped from the EN slug via
 * `insightEnToFr`. Resolving destinations through the shared map means a
 * future slug rename only needs a single edit in `src/i18n/insight-slugs.mjs`.
 *
 * Two legacy URLs land on the same destination because both old articles
 * cover the same intent (`foreign-brands-in-china-why-most-market-tests-fail`).
 */
const frInsightDest = (/** @type {string} */ enSlug) => `/fr/decryptages/${insightEnToFr[enSlug]}`;
const frInsightRedirectPairs = [
  [
    '/marques-etrangeres-en-chine-pourquoi-ca-echoue',
    frInsightDest('foreign-brands-in-china-why-most-market-tests-fail'),
  ],
  [
    '/defis-et-opportunites-du-e-commerce-pour-les-marques-francaises-en-chine',
    frInsightDest('foreign-brands-in-china-why-most-market-tests-fail'),
  ],
  [
    '/pipl-chine-loi-protection-donnees-conformite-marques',
    frInsightDest('pipl-compliance-in-china-diors-wake-up-call-for-global-brands'),
  ],
  [
    '/qr-codes-wechat-loutil-clef-succes-garanti-en-chine',
    frInsightDest('the-power-of-wechat-qr-codes-for-businesses-in-china'),
  ],
  [
    '/les-influenceurs-e-commerce-incontournables-en-chine-en-2025',
    frInsightDest('top-ecommerce-influencers-in-china-2024'),
  ],
  [
    '/les-reseaux-sociaux-les-plus-influents-en-chine-en-2025',
    frInsightDest('top-chinese-social-media-platforms-for-2024-marketing'),
  ],
  [
    '/top-5-plateformes-video-et-livestreaming-chine',
    frInsightDest('top-5-video-and-livestreaming-platforms-in-china'),
  ],
  [
    '/guide-du-marketing-sur-weibo-maitriser-le-social-commerce-en-chine',
    frInsightDest('weibo-marketing-guide-mastering-social-commerce-in-china'),
  ],
  [
    '/xianyu-plateforme-ideale-pour-jeunes-entrepreneurs-en-chine',
    frInsightDest('how-xianyu-powers-young-entrepreneurs-side-hustles-in-china'),
  ],
  [
    '/trouver-un-distributeur-en-chine-guide-pratique-2025',
    frInsightDest('how-to-find-a-distributor-for-your-products-in-china-in-2024'),
  ],
  [
    '/le-cout-des-kol-chinois-etudes-de-cas-et-tendances-marketing',
    frInsightDest('the-cost-of-chinese-kols-case-studies-and-marketing-insights'),
  ],
  [
    '/une-comparaison-entre-tmall-et-amazon',
    frInsightDest('a-comparison-between-tmall-and-amazon'),
  ],
  [
    '/creation-de-contenu-marketing-assiste-par-intelligence-artificielle-en-chine',
    frInsightDest('ai-revolutionizing-ecommerce-in-china'),
  ],
  // Qixi article was not ported. Falls back to the FR insights listing until
  // the article is rewritten in French.
  ['/qixi-2025-strategie-marques-luxe-chine-post-romantisme', '/fr/decryptages'],
];

/**
 * Legacy WordPress case study slugs (French). The new site reuses the English
 * case slug under /fr/nos-realisations/. Macusee was not ported, so its FR URL
 * falls back to the listing.
 */
const frCaseStudyRedirectPairs = [
  ['/case-study/roc-soins-de-la-peau-premium-de-la-france-a-la-chine', '/fr/nos-realisations/roc'],
  [
    '/case-study/campagne-du-super-brand-day-pour-les-hotels-marriot-en-chine',
    '/fr/nos-realisations/marriott',
  ],
  ['/case-study/chery-automobile-campagne-with-chery-with-love', '/fr/nos-realisations/chery'],
  ['/case-study/pierre-fabre-masterclass-chine-digital-aigc', '/fr/nos-realisations/pierre-fabre'],
  ['/case-study/langnese-chine-stopper-le-declin-commercial', '/fr/nos-realisations/langnese'],
  [
    '/case-study/croissance-des-reseaux-sociaux-chinois-pour-land-rover',
    '/fr/nos-realisations/jaguar-land-rover',
  ],
  ['/case-study/macusee-cross-border-ecommerce-et-sante-oculaire-en-chine', '/fr/nos-realisations'],
  // EN Macusee case was also not ported.
  ['/case-study/macusee-capturing-a-2b-white-space-in-chinas-eye-health-market', '/work'],
];

const enServiceRedirects = Object.fromEntries(
  enServiceRedirectPairs.map(([from, to]) => [
    from,
    { status: /** @type {const} */ (301), destination: to },
  ]),
);
const frServiceRedirects = Object.fromEntries(
  frServiceRedirectPairs.map(([from, to]) => [
    from,
    { status: /** @type {const} */ (301), destination: to },
  ]),
);
/**
 * Resolve an `/fr/decryptages/<en-slug>` destination from the legacy WP map
 * to its new FR slug, so legacy redirects 301 directly to the final URL
 * (no chained redirect). Returns the destination unchanged if it isn't an
 * `/fr/decryptages/<en-slug>` pointer.
 */
const resolveFrInsightDest = (/** @type {string} */ dest) => {
  const prefix = '/fr/decryptages/';
  if (!dest.startsWith(prefix)) return dest;
  const tail = dest.slice(prefix.length);
  const frSlug = insightEnToFr[tail];
  return frSlug ? `${prefix}${frSlug}` : dest;
};

/**
 * Static EN -> FR slug pairs for the sitemap serialize hook. Mirrors the
 * `slugMap` in `src/i18n/utils.ts`; kept duplicated here because importing
 * the .ts file from the config is not portable across Astro's loader.
 */
const staticEnToFr = {
  '/': '/fr',
  '/about': '/fr/qui-nous-sommes',
  '/contact': '/fr/nous-contacter',
  '/thank-you': '/fr/merci',
  '/privacy-policy': '/fr/politique-de-confidentialite',
  '/enter-china': '/fr/entrer-en-chine',
  '/enter-china/market-entry-consulting': '/fr/entrer-en-chine/conseil-en-entree-de-marche',
  '/enter-china/cross-border-setup': '/fr/entrer-en-chine/lancement-cross-border',
  '/enter-china/distribution': '/fr/entrer-en-chine/distribution',
  '/enter-china/branding-localisation': '/fr/entrer-en-chine/marque-et-localisation',
  '/grow-in-china': '/fr/se-developper-en-chine',
  '/grow-in-china/cross-border-ecommerce': '/fr/se-developper-en-chine/ecommerce-transfrontalier',
  '/grow-in-china/social-commerce': '/fr/se-developper-en-chine/commerce-social',
  '/grow-in-china/campaigns': '/fr/se-developper-en-chine/campagnes',
  '/grow-in-china/media': '/fr/se-developper-en-chine/medias',
  '/grow-in-china/influencers-kols': '/fr/se-developper-en-chine/influence-et-kol',
  '/grow-in-china/production-studio': '/fr/se-developper-en-chine/studio-de-production',
  '/grow-in-china/website': '/fr/se-developper-en-chine/site-web',
  '/learn-china': '/fr/comprendre-la-chine',
  '/learn-china/platforms': '/fr/comprendre-la-chine/plateformes',
  '/learn-china/masterclass': '/fr/comprendre-la-chine/masterclass',
  '/learn-china/learning-expeditions': '/fr/comprendre-la-chine/expeditions-terrain',
  '/work': '/fr/nos-realisations',
  '/insights': '/fr/decryptages',
  '/cookie-policy': '/fr/politique-de-cookies',
  '/terms-of-service': '/fr/conditions-d-utilisation',
};
const staticFrToEn = Object.fromEntries(Object.entries(staticEnToFr).map(([en, fr]) => [fr, en]));

/**
 * Static EN -> DE slug pairs for the sitemap serialize hook. Mirrors the
 * `slugMap.de` block in `src/i18n/utils.ts`. Native German slugs per CLAUDE.md §6.11
 * (umlauts replaced ae/oe/ue/ss).
 */
const staticEnToDe = {
  '/': '/de',
  '/about': '/de/ueber-uns',
  '/contact': '/de/kontakt',
  '/thank-you': '/de/danke',
  '/privacy-policy': '/de/datenschutz',
  '/enter-china': '/de/nach-china',
  '/enter-china/market-entry-consulting': '/de/nach-china/markteintrittsberatung',
  '/enter-china/cross-border-setup': '/de/nach-china/cross-border-aufbau',
  '/enter-china/distribution': '/de/nach-china/vertrieb',
  '/enter-china/branding-localisation': '/de/nach-china/marke-und-lokalisierung',
  '/grow-in-china': '/de/in-china-wachsen',
  '/grow-in-china/cross-border-ecommerce': '/de/in-china-wachsen/cross-border-ecommerce',
  '/grow-in-china/social-commerce': '/de/in-china-wachsen/social-commerce',
  '/grow-in-china/campaigns': '/de/in-china-wachsen/kampagnen',
  '/grow-in-china/media': '/de/in-china-wachsen/media',
  '/grow-in-china/influencers-kols': '/de/in-china-wachsen/influencer-und-kol',
  '/grow-in-china/production-studio': '/de/in-china-wachsen/produktionsstudio',
  '/grow-in-china/website': '/de/in-china-wachsen/website',
  '/learn-china': '/de/china-verstehen',
  '/learn-china/platforms': '/de/china-verstehen/plattformen',
  '/learn-china/masterclass': '/de/china-verstehen/masterclass',
  '/learn-china/learning-expeditions': '/de/china-verstehen/studienreisen',
  '/work': '/de/referenzen',
  '/insights': '/de/analysen',
  '/cookie-policy': '/de/cookie-richtlinie',
  '/terms-of-service': '/de/nutzungsbedingungen',
};
const staticDeToEn = Object.fromEntries(Object.entries(staticEnToDe).map(([en, de]) => [de, en]));

/**
 * Static EN -> ES slug pairs for the sitemap serialize hook. Mirrors the
 * `slugMap.es` block in `src/i18n/utils.ts`. Native Spanish slugs per CLAUDE.md §6.11
 * (ñ → n, accents stripped on slug, kept in body copy).
 */
const staticEnToEs = {
  '/': '/es',
  '/about': '/es/quienes-somos',
  '/contact': '/es/contacto',
  '/thank-you': '/es/gracias',
  '/privacy-policy': '/es/politica-de-privacidad',
  '/enter-china': '/es/entrar-en-china',
  '/enter-china/market-entry-consulting': '/es/entrar-en-china/estrategia-de-entrada',
  '/enter-china/cross-border-setup': '/es/entrar-en-china/lanzamiento-cross-border',
  '/enter-china/distribution': '/es/entrar-en-china/distribucion',
  '/enter-china/branding-localisation': '/es/entrar-en-china/marca-y-localizacion',
  '/grow-in-china': '/es/crecer-en-china',
  '/grow-in-china/cross-border-ecommerce': '/es/crecer-en-china/ecommerce-transfronterizo',
  '/grow-in-china/social-commerce': '/es/crecer-en-china/comercio-social',
  '/grow-in-china/campaigns': '/es/crecer-en-china/campanas',
  '/grow-in-china/media': '/es/crecer-en-china/medios',
  '/grow-in-china/influencers-kols': '/es/crecer-en-china/influencia-y-kol',
  '/grow-in-china/production-studio': '/es/crecer-en-china/estudio-de-produccion',
  '/grow-in-china/website': '/es/crecer-en-china/sitio-web',
  '/learn-china': '/es/conocer-china',
  '/learn-china/platforms': '/es/conocer-china/plataformas',
  '/learn-china/masterclass': '/es/conocer-china/masterclass',
  '/learn-china/learning-expeditions': '/es/conocer-china/inmersion-china',
  '/work': '/es/proyectos',
  '/insights': '/es/analisis',
  '/cookie-policy': '/es/politica-de-cookies',
  '/terms-of-service': '/es/condiciones-de-uso',
};
const staticEsToEn = Object.fromEntries(Object.entries(staticEnToEs).map(([en, es]) => [es, en]));

/**
 * Reduce a built page path to its canonical English equivalent.
 * Returns `null` for paths with no resolvable canonical (e.g. orphan FR/DE
 * pages with no EN twin), so the sitemap hook can skip them.
 */
const canonicalize = (/** @type {string} */ path) => {
  if (!path) return '/';
  if (path === '/' || path === '') return '/';
  if (path.startsWith('/fr')) {
    if (path.startsWith('/fr/decryptages/')) {
      const tail = path.slice('/fr/decryptages/'.length);
      if (!tail) return '/insights';
      const enSlug = Object.entries(insightEnToFr).find(([, fr]) => fr === tail)?.[0];
      return enSlug ? `/insights/${enSlug}` : null;
    }
    if (path.startsWith('/fr/nos-realisations/')) {
      return '/work/' + path.slice('/fr/nos-realisations/'.length);
    }
    if (path === '/fr/nos-realisations') return '/work';
    return staticFrToEn[path] ?? null;
  }
  if (path.startsWith('/de')) {
    if (path.startsWith('/de/analysen/')) {
      const tail = path.slice('/de/analysen/'.length);
      if (!tail) return '/insights';
      const enSlug = Object.entries(insightEnToDe).find(([, de]) => de === tail)?.[0];
      return enSlug ? `/insights/${enSlug}` : null;
    }
    if (path.startsWith('/de/referenzen/')) {
      return '/work/' + path.slice('/de/referenzen/'.length);
    }
    if (path === '/de/referenzen') return '/work';
    return staticDeToEn[path] ?? null;
  }
  if (path.startsWith('/es')) {
    if (path.startsWith('/es/analisis/')) {
      const tail = path.slice('/es/analisis/'.length);
      if (!tail) return '/insights';
      const enSlug = Object.entries(insightEnToEs).find(([, es]) => es === tail)?.[0];
      return enSlug ? `/insights/${enSlug}` : null;
    }
    if (path.startsWith('/es/proyectos/')) {
      return '/work/' + path.slice('/es/proyectos/'.length);
    }
    if (path === '/es/proyectos') return '/work';
    return staticEsToEn[path] ?? null;
  }
  return path;
};

/** Forward map an EN path to its FR twin, or null if none exists. */
const enToFr = (/** @type {string | null} */ enPath) => {
  if (!enPath) return null;
  if (enPath === '/') return '/fr';
  if (enPath.startsWith('/insights/')) {
    const enSlug = enPath.slice('/insights/'.length);
    const frSlug = insightEnToFr[enSlug];
    return frSlug ? `/fr/decryptages/${frSlug}` : null;
  }
  if (enPath === '/insights') return '/fr/decryptages';
  if (enPath.startsWith('/work/')) {
    return '/fr/nos-realisations/' + enPath.slice('/work/'.length);
  }
  if (enPath === '/work') return '/fr/nos-realisations';
  return staticEnToFr[enPath] ?? null;
};

/** Forward map an EN path to its DE twin, or null if none exists. */
const enToDe = (/** @type {string | null} */ enPath) => {
  if (!enPath) return null;
  if (enPath === '/') return '/de';
  if (enPath.startsWith('/insights/')) {
    const enSlug = enPath.slice('/insights/'.length);
    const deSlug = insightEnToDe[enSlug];
    return deSlug ? `/de/analysen/${deSlug}` : null;
  }
  if (enPath === '/insights') return '/de/analysen';
  if (enPath.startsWith('/work/')) {
    return '/de/referenzen/' + enPath.slice('/work/'.length);
  }
  if (enPath === '/work') return '/de/referenzen';
  return staticEnToDe[enPath] ?? null;
};

/** Forward map an EN path to its ES twin, or null if none exists. */
const enToEs = (/** @type {string | null} */ enPath) => {
  if (!enPath) return null;
  if (enPath === '/') return '/es';
  if (enPath.startsWith('/insights/')) {
    const enSlug = enPath.slice('/insights/'.length);
    const esSlug = insightEnToEs[enSlug];
    return esSlug ? `/es/analisis/${esSlug}` : null;
  }
  if (enPath === '/insights') return '/es/analisis';
  if (enPath.startsWith('/work/')) {
    return '/es/proyectos/' + enPath.slice('/work/'.length);
  }
  if (enPath === '/work') return '/es/proyectos';
  return staticEnToEs[enPath] ?? null;
};

const frInsightRedirects = Object.fromEntries(
  frInsightRedirectPairs.map(([from, to]) => [
    from,
    { status: /** @type {const} */ (301), destination: resolveFrInsightDest(to) },
  ]),
);
const frCaseStudyRedirects = Object.fromEntries(
  frCaseStudyRedirectPairs.map(([from, to]) => [
    from,
    { status: /** @type {const} */ (301), destination: to },
  ]),
);

/**
 * FR insight slug rename: the FR insight collection was originally shipped
 * under English slugs (e.g. /fr/decryptages/foreign-brands-...). Each FR
 * article now uses a native French slug per CLAUDE.md §6.11. Emit a 301 for
 * every renamed pair so any external link to the old FR URL still resolves.
 */
const frInsightSlugRenameRedirects = Object.fromEntries(
  Object.entries(insightEnToFr).map(([enSlug, frSlug]) => [
    `/fr/decryptages/${enSlug}`,
    { status: /** @type {const} */ (301), destination: `/fr/decryptages/${frSlug}` },
  ]),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thechinapath.com',
  // 'never' makes Vercel strip trailing slashes from incoming requests before
  // applying redirect rules. Without this, every legacy WP URL (all served
  // with trailing slash) misses the path-level 301 and 404s on www.
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),

  integrations: [
    sitemap({
      // Drop legacy or non-canonical destinations so they cannot enter the
      // index. The form thank-you pages and the API routes do not belong in
      // search results.
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/fr/merci') &&
        !page.includes('/de/danke') &&
        !page.includes('/es/gracias') &&
        !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      // Rewrite each URL into the locale pair the slugMap actually dictates.
      // @astrojs/sitemap's built-in i18n option only handles simple prefix
      // routing (e.g. /about -> /fr/about), which is wrong for this site:
      // /about pairs with /fr/qui-nous-sommes, /insights/<en> pairs with
      // /fr/decryptages/<fr>, etc. The hook below resolves both halves of
      // the pair via the insight + static slug maps.
      serialize: (item) => {
        const SITE = 'https://www.thechinapath.com';
        const url = new URL(item.url);
        const path = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
        const enPath = canonicalize(path);
        const frPath = enToFr(enPath);
        const dePath = enToDe(enPath);
        const esPath = enToEs(enPath);
        if (!enPath) return item;
        // Match the canonical URL convention from Layout.astro: no trailing
        // slash except root. The sitemap <loc> and xhtml:link href must agree
        // so Google does not see them as different URLs.
        const enHref = SITE + (enPath === '/' ? '' : enPath);
        const frHref = frPath ? SITE + frPath : null;
        const deHref = dePath ? SITE + dePath : null;
        const esHref = esPath ? SITE + esPath : null;
        const links = [{ lang: 'en', url: enHref }];
        if (frHref) links.push({ lang: 'fr', url: frHref });
        if (deHref) links.push({ lang: 'de', url: deHref });
        if (esHref) links.push({ lang: 'es', url: esHref });
        links.push({ lang: 'x-default', url: enHref });
        // Normalize the page URL itself to match the canonical convention.
        let currentLocaleHref = enHref;
        if (path.startsWith('/fr')) currentLocaleHref = frHref ?? enHref;
        else if (path.startsWith('/de')) currentLocaleHref = deHref ?? enHref;
        else if (path.startsWith('/es')) currentLocaleHref = esHref ?? enHref;
        return { ...item, url: currentLocaleHref ?? item.url, links };
      },
    }),
    // Runs AFTER @astrojs/sitemap on build:done and strips the trailing slash
    // that the sitemap library appends to xhtml:link hreflang hrefs for the
    // site root. The <loc> already lands without a trailing slash via the
    // serialize hook above; this rewrite makes the alternates match. Cosmetic
    // for Google (it normalises either way) but signals consistent intent.
    {
      name: 'bbg-sitemap-postprocess',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          const { readFile, writeFile, readdir } = await import('node:fs/promises');
          const { fileURLToPath } = await import('node:url');
          const path = await import('node:path');
          const root = fileURLToPath(dir);
          let files;
          try {
            files = (await readdir(root)).filter((f) => /^sitemap-\d+\.xml$/.test(f));
          } catch {
            return;
          }
          for (const f of files) {
            const filePath = path.join(root, f);
            const xml = await readFile(filePath, 'utf8');
            const fixed = xml.replace(
              /(<xhtml:link rel="alternate" hreflang="[^"]+" href="https:\/\/www.thechinapath.com)\/(")/g,
              '$1$2',
            );
            if (fixed !== xml) {
              await writeFile(filePath, fixed);
              logger.info(`normalised root xhtml:link in ${f}`);
            }
          }
        },
      },
    },
  ],

  // Multilingual setup. English stays at the root (/). FR under /fr/, DE under /de/.
  // Add new locales to the array as they ship. Keep `prefixDefaultLocale: false`
  // so existing English URLs and the WP redirect map continue to work as-is.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Legacy WordPress URL redirects. 301 to preserve SEO equity.
  // Mirror every entry in docs/redirection-plan.md for submission to Google.
  redirects: {
    '/china-digital-china-e-commerce-training-masterclass': {
      status: 301,
      destination: '/learn-china/masterclass',
    },

    // Legacy insights listing (paginated on WordPress) -> new collection index.
    '/insights-china-branding-marketing-commerce-digital': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/2': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/3': {
      status: 301,
      destination: '/insights',
    },
    '/insights-china-branding-marketing-commerce-digital/4': {
      status: 301,
      destination: '/insights',
    },

    // All 66 individual insight articles: /<slug> -> /insights/<slug>
    ...insightRedirects,

    // Case studies hub
    '/our-work-case-studies-business-expansion-china': {
      status: 301,
      destination: '/work',
    },

    // Market entry consulting service page (WP sales page -> Astro service page)
    '/china-cross-border-ecommerce-entry-consulting': {
      status: 301,
      destination: '/enter-china/market-entry-consulting',
    },

    // All 23 individual case studies: /case-study/<wp-slug> -> /work/<slug>
    ...caseStudyRedirects,

    // 21 EN service pages from the WordPress site (long marketing slugs) ->
    // closest intent match on the new site.
    ...enServiceRedirects,

    // 16 FR service pages.
    ...frServiceRedirects,

    // 14 FR insight articles from legacy WP -> /fr/decryptages/<new-fr-slug>.
    ...frInsightRedirects,

    // 66 FR insight slug renames (English-under-FR -> native French slug),
    // per CLAUDE.md §6.11.
    ...frInsightSlugRenameRedirects,

    // 8 FR case studies -> /fr/nos-realisations/<en-slug>.
    ...frCaseStudyRedirects,
  },
});
