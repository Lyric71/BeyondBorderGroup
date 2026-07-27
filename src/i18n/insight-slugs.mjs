/**
 * Canonical English insight slug -> native French slug.
 * Shared by `src/i18n/utils.ts` (for `localizePath` + hreflang) and
 * `astro.config.mjs` (for the @astrojs/sitemap serialize hook + 301 redirects).
 *
 * Brand and platform names stay canonical per CLAUDE.md §6.8.
 * When adding a new FR-translated insight, append it here and rebuild.
 *
 * @type {Record<string, string>}
 */
export const insightEnToFr = {
  'tmall-2026-strategy-foreign-brands': 'tmall-2026-strategie-marques-etrangeres',
  'china-cross-border-ecommerce-140-million-shoppers':
    'e-commerce-transfrontalier-chine-140-millions-acheteurs',
  'china-platform-trends-2026-foreign-brands': 'plateformes-chinoises-2026-marques-etrangeres',
  'ai-brand-micro-drama-china': 'micro-series-ia-marques-chine',
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event':
    'singles-day-11-11-e-commerce-chinois',
  'a-comparison-between-tmall-and-amazon': 'tmall-amazon-deux-modeles',
  'ai-revolutionizing-ecommerce-in-china': 'ia-moteur-e-commerce-chinois',
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications':
    'alibaba-pousse-1688-sur-taobao',
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china': 'trouver-nom-chinois-marque',
  'best-practices-for-koc-marketing-in-china': 'koc-en-chine-methode-campagnes',
  'best-practices-for-successful-e-commerce-livestreaming-in-china':
    'livestream-e-commerce-chine-methode',
  'best-practices-to-launch-a-crm-program-in-china': 'lancer-programme-crm-chine',
  'best-short-video-platforms-in-china': 'video-courte-chine-douyin-kuaishou-bilibili',
  'best-social-commerce-platforms-in-china-for-ecommerce-growth':
    'social-commerce-chine-cinq-plateformes',
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide':
    'kuaishou-chine-guide-video-courte',
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024':
    'moteurs-recherche-chinois-2024',
  'brand-localization-for-china-without-losing-your-dna': 'localiser-marque-chine-sans-diluer-adn',
  'china-2026-8-ecommerce-marketing-predictions':
    'chine-2026-huit-predictions-e-commerce-marketing',
  'china-e-commerce-platforms-2025': 'e-commerce-chinois-2025-plateformes',
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025':
    'chine-marche-unique-paris-locaux-2025',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans':
    'chine-pari-local-vs-plan-national',
  'china-social-media-and-kol-strategies-for-ecommerce-brands': 'kol-chinois-commerce-digital',
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch':
    'commerce-chinois-ia-tendances-innovations',
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales':
    'tech-beaute-luxe-6-18-e-commerce-chinois',
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china':
    'humain-numerique-livestream-ia-chine',
  'double-11-2025-ai-ecommerce-efficiency-china': 'double-11-2025-gmv-discipline-ia',
  'double-11-2025-old-media-strategy-china-ecommerce': 'double-11-2025-retour-vieux-medias',
  'double-11-2025-the-end-of-chinas-shopping-wars': 'double-11-2025-fin-guerres-shopping',
  'douyin-live-commerce-2025-store-led-livestream-strategy': 'douyin-live-commerce-studios-marque',
  'empowering-women-in-chinas-digital-commerce-2024-trends':
    'entrepreneures-e-commerce-chinois-2024',
  'foreign-brands-in-china-why-most-market-tests-fail':
    'marques-etrangeres-chine-tests-marche-echouent',
  'green-marketing-in-china-how-brands-are-embracing-sustainability':
    'marketing-vert-chine-campagnes',
  'how-chinas-advertising-laws-impact-global-brands':
    'lois-publicitaires-chinoises-marques-internationales',
  'how-jd-mall-turns-offline-stores-into-experience-hubs':
    'jd-mall-magasins-plateformes-experience',
  'how-to-apply-for-an-icp-license-for-your-website': 'licence-icp-site-chine-procedure',
  'how-to-find-a-distributor-for-your-products-in-china-in-2024': 'trouver-distributeur-chine-2024',
  'how-to-host-your-website-in-china-for-maximum-marketing-impact':
    'hebergement-web-chine-impact-marketing',
  'how-to-localize-a-brand-for-china': 'localiser-marque-pour-chine-feuille-de-route',
  'how-to-localize-brand-content-for-china': 'localiser-contenus-marque-chine',
  'how-to-localize-your-website-for-china-tips-for-global-marketers':
    'localiser-site-chine-guide-directions-marketing',
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies':
    'vendre-sur-douyin-marques-etrangeres-2024',
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china':
    'xianyu-side-hustles-jeunesse-chinoise',
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights':
    'createurs-chinois-independants-mode-2024',
  'jd-double-subsidy-plan-supply-chain-play': 'jd-double-subvention-chaine-logistique',
  'luxury-brand-trends-mastering-social-media-in-china': 'luxe-en-chine-tendances-sociales',
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china': 'pc-ia-chine-marketing',
  'meituan-instant-retail-china-ecommerce-strategy': 'meituan-commerce-instantane-e-commerce-chinois',
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin':
    'cyril-drouin-live-commerce-cross-border',
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china':
    'marketing-influence-casting-2024',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands':
    'pipl-affaire-dior-marques-etrangeres',
  'science-emotion-chinas-new-brand-playbook': 'science-emotion-grammaire-marques-chine',
  'social-commerce-china-platforms-strategies-best-practices':
    'social-commerce-chine-plateformes-strategies',
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china':
    'storytelling-b2b-marques-chine',
  'taobao-flash-sale-and-chinas-30-minute-retail': 'taobao-flash-sale-commerce-30-minutes',
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china':
    'alibaba-taobao-tmall-ia-e-commerce',
  'tmall-global-2025-overseas-brands': 'tmall-global-2025-marques-etrangeres',
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights':
    'prix-kol-chinois-grilles-tarifaires',
  'the-power-of-wechat-qr-codes-for-businesses-in-china': 'qr-codes-wechat-marques-chine',
  'the-ultimate-guide-to-wechat-channels-for-brands': 'wechat-channels-guide-marques',
  'top-5-video-and-livestreaming-platforms-in-china': 'top-5-plateformes-video-live-commerce-chine',
  'top-chinese-social-media-platforms-for-2024-marketing':
    'reseaux-sociaux-chinois-cartographie-2024',
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers':
    'voyageurs-chinois-haut-de-gamme-guide-strategique',
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips':
    'calendrier-2025-rendez-vous-e-commerce-chinois',
  'top-ecommerce-influencers-in-china-2024': 'kol-e-commerce-chinois-2024',
  'transforming-brand-engagement-through-livestreaming-in-china':
    'patrons-chinois-livestream-comite-direction',
  'ultimate-guide-to-tmall-media-costs-in-china': 'couts-media-tmall-chine',
  'ultimate-guide-to-using-wordpress-in-china': 'wordpress-en-chine-guide-complet',
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment':
    'voyage-de-luxe-marche-chinois-2024',
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers':
    'voyageurs-chinois-haut-de-gamme-preferences',
  'ux-design-for-global-markets-chinese-vs-western-approaches':
    'design-ux-chine-occident-deux-ecoles',
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce':
    'wechat-pay-vs-alipay-e-commerce-chinois',
  'weibo-marketing-guide-mastering-social-commerce-in-china': 'guide-weibo-social-commerce-chine',
  'what-taobao-instant-commerce-means-for-non-chinese-brands':
    'taobao-instant-commerce-marques-non-chinoises',
  'what-a-pinduoduo-fine-says-about-doing-business-in-china':
    'amende-pinduoduo-faire-des-affaires-en-chine',
};

/** Reverse lookup, built once. */
export const insightFrToEn = Object.fromEntries(
  Object.entries(insightEnToFr).map(([en, fr]) => [fr, en]),
);

/**
 * Canonical English insight slug -> native German slug.
 * Same routing convention as the FR table above. Umlauts replaced (ae, oe, ue, ss)
 * per CLAUDE.md §6.11. Brand and platform names stay canonical per §6.8.
 *
 * @type {Record<string, string>}
 */
export const insightEnToDe = {
  'tmall-2026-strategy-foreign-brands': 'tmall-2026-strategie-auslaendische-marken',
  'china-cross-border-ecommerce-140-million-shoppers':
    'grenzueberschreitender-e-commerce-china-140-millionen-kaeufer',
  'china-platform-trends-2026-foreign-brands': 'chinas-plattformtrends-2026-auslaendische-marken',
  'ai-brand-micro-drama-china': 'ki-mikrodrama-marken-china',
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event':
    'singles-day-11-11-e-commerce-china',
  'a-comparison-between-tmall-and-amazon': 'tmall-amazon-zwei-modelle',
  'ai-revolutionizing-ecommerce-in-china': 'ki-motor-chinesischer-e-commerce',
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications':
    'alibaba-bringt-1688-auf-taobao',
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china':
    'chinesischer-markenname-finden',
  'best-practices-for-koc-marketing-in-china': 'koc-china-methode-kampagnen',
  'best-practices-for-successful-e-commerce-livestreaming-in-china':
    'livestream-e-commerce-china-methode',
  'best-practices-to-launch-a-crm-program-in-china': 'crm-programm-china-aufbauen',
  'best-short-video-platforms-in-china': 'kurzvideo-china-douyin-kuaishou-bilibili',
  'best-social-commerce-platforms-in-china-for-ecommerce-growth':
    'social-commerce-china-fuenf-plattformen',
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide':
    'kuaishou-china-leitfaden-kurzvideo',
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024':
    'chinesische-suchmaschinen-2024',
  'brand-localization-for-china-without-losing-your-dna':
    'marke-fuer-china-ohne-identitaetsverlust',
  'china-2026-8-ecommerce-marketing-predictions': 'china-2026-acht-prognosen-e-commerce-marketing',
  'china-e-commerce-platforms-2025': 'chinesischer-e-commerce-2025-plattformen',
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025':
    'china-kein-einheitsmarkt-lokale-strategien-2025',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans':
    'china-lokale-wetten-statt-nationaler-pläne',
  'china-social-media-and-kol-strategies-for-ecommerce-brands': 'chinesische-kol-digitalhandel',
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch':
    'chinesischer-handel-ki-trends-innovationen',
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales':
    'tech-beauty-luxus-6-18-chinesischer-e-commerce',
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china':
    'digitaler-mensch-ki-livestream-china',
  'double-11-2025-ai-ecommerce-efficiency-china': 'double-11-2025-gmv-disziplin-ki',
  'double-11-2025-old-media-strategy-china-ecommerce': 'double-11-2025-rueckkehr-alte-medien',
  'double-11-2025-the-end-of-chinas-shopping-wars': 'double-11-2025-ende-shopping-kriege',
  'douyin-live-commerce-2025-store-led-livestream-strategy': 'douyin-live-commerce-markenstudios',
  'empowering-women-in-chinas-digital-commerce-2024-trends':
    'unternehmerinnen-chinesischer-e-commerce-2024',
  'foreign-brands-in-china-why-most-market-tests-fail':
    'auslaendische-marken-china-markttests-scheitern',
  'green-marketing-in-china-how-brands-are-embracing-sustainability':
    'gruenes-marketing-china-kampagnen',
  'how-chinas-advertising-laws-impact-global-brands':
    'chinesische-werbegesetze-internationale-marken',
  'how-jd-mall-turns-offline-stores-into-experience-hubs': 'jd-mall-laeden-erlebnisplattformen',
  'how-to-apply-for-an-icp-license-for-your-website': 'icp-lizenz-website-china-vorgehen',
  'how-to-find-a-distributor-for-your-products-in-china-in-2024':
    'vertriebspartner-china-2024-finden',
  'how-to-host-your-website-in-china-for-maximum-marketing-impact':
    'website-hosting-china-marketingwirkung',
  'how-to-localize-a-brand-for-china': 'marke-fuer-china-lokalisieren-fahrplan',
  'how-to-localize-brand-content-for-china': 'markeninhalte-china-lokalisieren',
  'how-to-localize-your-website-for-china-tips-for-global-marketers':
    'website-china-lokalisieren-leitfaden-marketing',
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies':
    'auf-douyin-verkaufen-auslaendische-marken-2024',
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china':
    'xianyu-nebenverdienst-junge-chinesen',
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights':
    'unabhaengige-chinesische-designer-mode-2024',
  'jd-double-subsidy-plan-supply-chain-play': 'jd-doppelsubvention-lieferketten-strategie',
  'luxury-brand-trends-mastering-social-media-in-china': 'luxus-china-social-media-trends',
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china': 'ki-pc-china-marketing',
  'meituan-instant-retail-china-ecommerce-strategy': 'meituan-instant-retail-china-e-commerce-strategie',
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin':
    'cyril-drouin-live-commerce-cross-border',
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china':
    'influencer-marketing-casting-china-2024',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands':
    'pipl-fall-dior-auslaendische-marken',
  'science-emotion-chinas-new-brand-playbook': 'wissenschaft-emotion-grammatik-marken-china',
  'social-commerce-china-platforms-strategies-best-practices':
    'social-commerce-china-plattformen-strategien',
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china':
    'b2b-storytelling-marken-china',
  'taobao-flash-sale-and-chinas-30-minute-retail': 'taobao-flash-sale-handel-30-minuten',
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china':
    'alibaba-taobao-tmall-ki-e-commerce',
  'tmall-global-2025-overseas-brands': 'tmall-global-2025-auslaendische-marken',
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights':
    'chinesische-kol-preise-tarifraster',
  'the-power-of-wechat-qr-codes-for-businesses-in-china': 'wechat-qr-codes-marken-china',
  'the-ultimate-guide-to-wechat-channels-for-brands': 'wechat-channels-leitfaden-marken',
  'top-5-video-and-livestreaming-platforms-in-china': 'top-5-video-livestream-plattformen-china',
  'top-chinese-social-media-platforms-for-2024-marketing':
    'chinesische-social-media-kartierung-2024',
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers':
    'chinesische-luxusreisende-strategischer-leitfaden',
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips':
    'kalender-2025-chinesischer-e-commerce-termine',
  'top-ecommerce-influencers-in-china-2024': 'chinesische-e-commerce-kol-2024',
  'transforming-brand-engagement-through-livestreaming-in-china':
    'chinesische-chefs-livestream-vorstand',
  'ultimate-guide-to-tmall-media-costs-in-china': 'media-kosten-tmall-china',
  'ultimate-guide-to-using-wordpress-in-china': 'wordpress-in-china-kompletter-leitfaden',
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment':
    'luxusreisen-chinesischer-markt-2024',
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers':
    'chinesische-luxusreisende-praeferenzen',
  'ux-design-for-global-markets-chinese-vs-western-approaches':
    'ux-design-china-westen-zwei-schulen',
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce':
    'wechat-pay-vs-alipay-chinesischer-e-commerce',
  'weibo-marketing-guide-mastering-social-commerce-in-china':
    'weibo-leitfaden-social-commerce-china',
  'what-taobao-instant-commerce-means-for-non-chinese-brands':
    'taobao-instant-commerce-nicht-chinesische-marken',
  'what-a-pinduoduo-fine-says-about-doing-business-in-china': 'pinduoduo-strafe-geschaeft-in-china',
};

/** Reverse lookup, built once. */
export const insightDeToEn = Object.fromEntries(
  Object.entries(insightEnToDe).map(([en, de]) => [de, en]),
);

/**
 * Canonical English insight slug -> native Spanish slug.
 * Brand and platform names stay canonical per CLAUDE.md §6.8.
 *
 * @type {Record<string, string>}
 */
export const insightEnToEs = {
  'tmall-2026-strategy-foreign-brands': 'tmall-2026-estrategia-marcas-extranjeras',
  'china-cross-border-ecommerce-140-million-shoppers':
    'ecommerce-transfronterizo-china-140-millones-compradores',
  'china-platform-trends-2026-foreign-brands': 'plataformas-chinas-2026-marcas-extranjeras',
  'ai-brand-micro-drama-china': 'microdramas-ia-marcas-china',
  '11-11-shopping-festival-in-china-brand-strategies-for-success-in-the-worlds-largest-e-commerce-event':
    'singles-day-11-11-marcas-globales',
  'a-comparison-between-tmall-and-amazon': 'tmall-vs-amazon-comparativa',
  'ai-revolutionizing-ecommerce-in-china': 'ia-revoluciona-ecommerce-chino',
  'alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications':
    'alibaba-1688-taobao-implicaciones',
  'best-practices-for-finding-a-chinese-name-for-a-brand-in-china': 'encontrar-nombre-chino-marca',
  'best-practices-for-koc-marketing-in-china': 'koc-marketing-china-buenas-practicas',
  'best-practices-for-successful-e-commerce-livestreaming-in-china':
    'livestreaming-ecommerce-china-buenas-practicas',
  'best-practices-to-launch-a-crm-program-in-china': 'lanzar-programa-crm-china',
  'best-short-video-platforms-in-china': 'mejores-plataformas-video-corto-china',
  'best-social-commerce-platforms-in-china-for-ecommerce-growth':
    'mejores-plataformas-social-commerce-china',
  'boost-your-brand-in-china-the-ultimate-kuaishou-short-video-marketing-guide':
    'kuaishou-china-guia-video-corto',
  'boost-your-marketing-with-the-best-chinese-search-engines-in-2024':
    'motores-busqueda-chinos-2024',
  'brand-localization-for-china-without-losing-your-dna': 'localizar-marca-china-sin-perder-adn',
  'china-2026-8-ecommerce-marketing-predictions':
    'china-2026-ocho-predicciones-ecommerce-marketing',
  'china-e-commerce-platforms-2025': 'ecommerce-chino-2025-plataformas',
  'china-is-no-longer-one-market-a-localized-growth-strategy-for-2025':
    'china-no-es-un-solo-mercado-estrategia-2025',
  'china-is-no-longer-one-market-why-local-bets-beat-national-plans':
    'china-apuesta-local-vs-plan-nacional',
  'china-social-media-and-kol-strategies-for-ecommerce-brands': 'kol-chinos-comercio-digital',
  'chinas-ai-powered-commerce-trends-and-innovations-to-watch':
    'comercio-chino-ia-tendencias-innovaciones',
  'chinas-consumer-trends-in-tech-beauty-and-luxury-insights-from-6-18-sales':
    'tech-belleza-lujo-6-18-ecommerce-chino',
  'digital-human-the-rise-of-ai-driven-live-streaming-in-china':
    'humano-digital-livestream-ia-china',
  'double-11-2025-ai-ecommerce-efficiency-china': 'double-11-2025-gmv-disciplina-ia',
  'double-11-2025-old-media-strategy-china-ecommerce': 'double-11-2025-vuelta-medios-tradicionales',
  'double-11-2025-the-end-of-chinas-shopping-wars': 'double-11-2025-fin-guerras-shopping',
  'douyin-live-commerce-2025-store-led-livestream-strategy': 'douyin-live-commerce-estudios-marca',
  'empowering-women-in-chinas-digital-commerce-2024-trends': 'emprendedoras-ecommerce-chino-2024',
  'foreign-brands-in-china-why-most-market-tests-fail':
    'marcas-extranjeras-china-tests-mercado-fracasan',
  'green-marketing-in-china-how-brands-are-embracing-sustainability':
    'marketing-verde-china-marcas-sostenibilidad',
  'how-chinas-advertising-laws-impact-global-brands': 'leyes-publicitarias-chinas-marcas-globales',
  'how-jd-mall-turns-offline-stores-into-experience-hubs': 'jd-mall-tiendas-fisicas-experiencia',
  'how-to-apply-for-an-icp-license-for-your-website': 'licencia-icp-sitio-web-china-procedimiento',
  'how-to-find-a-distributor-for-your-products-in-china-in-2024':
    'encontrar-distribuidor-china-2024',
  'how-to-host-your-website-in-china-for-maximum-marketing-impact':
    'alojamiento-web-china-impacto-marketing',
  'how-to-localize-a-brand-for-china': 'localizar-marca-china-hoja-de-ruta',
  'how-to-localize-brand-content-for-china': 'localizar-contenidos-marca-china',
  'how-to-localize-your-website-for-china-tips-for-global-marketers':
    'localizar-sitio-china-directores-marketing',
  'how-to-sell-on-douyin-boost-sales-with-effective-marketing-strategies':
    'vender-en-douyin-marcas-extranjeras-2024',
  'how-xianyu-powers-young-entrepreneurs-side-hustles-in-china':
    'xianyu-side-hustles-juventud-china',
  'independent-chinese-designers-2024-trends-marketing-and-commerce-insights':
    'disenadores-chinos-independientes-moda-2024',
  'jd-double-subsidy-plan-supply-chain-play': 'jd-doble-subvencion-cadena-suministro',
  'luxury-brand-trends-mastering-social-media-in-china': 'lujo-china-tendencias-redes-sociales',
  'marketing-strategies-revolutionizing-ai-integrated-pcs-in-china': 'pc-ia-china-marketing',
  'meituan-instant-retail-china-ecommerce-strategy': 'meituan-comercio-instantaneo-ecommerce-chino',
  'navigating-cross-border-commerce-insights-from-beyondbordergroups-ceo-cyril-drouin':
    'cyril-drouin-live-commerce-cross-border',
  'optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china':
    'marketing-influencia-casting-2024',
  'pipl-compliance-in-china-diors-wake-up-call-for-global-brands':
    'pipl-caso-dior-marcas-extranjeras',
  'science-emotion-chinas-new-brand-playbook': 'ciencia-emocion-gramatica-marcas-china',
  'social-commerce-china-platforms-strategies-best-practices':
    'social-commerce-china-plataformas-estrategias',
  'storytelling-in-b2b-marketing-enhancing-brand-connection-in-china':
    'storytelling-b2b-marcas-china',
  'taobao-flash-sale-and-chinas-30-minute-retail': 'taobao-flash-sale-comercio-30-minutos',
  'taobao-transforming-shopping-and-merchant-support-with-ai-in-ecommerce-china':
    'alibaba-taobao-tmall-ia-ecommerce',
  'tmall-global-2025-overseas-brands': 'tmall-global-2025-marcas-extranjeras',
  'the-cost-of-chinese-kols-case-studies-and-marketing-insights': 'precio-kol-chinos-tarifas',
  'the-power-of-wechat-qr-codes-for-businesses-in-china': 'qr-codes-wechat-marcas-china',
  'the-ultimate-guide-to-wechat-channels-for-brands': 'wechat-channels-guia-marcas',
  'top-5-video-and-livestreaming-platforms-in-china': 'top-5-plataformas-video-live-commerce-china',
  'top-chinese-social-media-platforms-for-2024-marketing': 'redes-sociales-chinas-mapa-2024',
  'top-digital-marketing-strategies-to-attract-chinese-luxury-travelers':
    'viajeros-chinos-alta-gama-guia-estrategica',
  'top-e-commerce-events-in-china-2025-dates-and-marketing-tips':
    'calendario-2025-citas-ecommerce-chino',
  'top-ecommerce-influencers-in-china-2024': 'kol-ecommerce-chino-2024',
  'transforming-brand-engagement-through-livestreaming-in-china':
    'directivos-chinos-livestream-comite-direccion',
  'ultimate-guide-to-tmall-media-costs-in-china': 'costes-media-tmall-china',
  'ultimate-guide-to-using-wordpress-in-china': 'wordpress-en-china-guia-completa',
  'unveiling-the-explosive-growth-of-the-chinese-luxury-travel-segment':
    'viajes-lujo-mercado-chino-2024',
  'unveiling-the-preferences-and-motivations-of-todays-luxury-chinese-travelers':
    'viajeros-chinos-alta-gama-preferencias',
  'ux-design-for-global-markets-chinese-vs-western-approaches':
    'diseno-ux-china-occidente-dos-escuelas',
  'wechat-pay-vs-alipay-best-mobile-payment-for-ecommerce': 'wechat-pay-vs-alipay-ecommerce-chino',
  'weibo-marketing-guide-mastering-social-commerce-in-china': 'guia-weibo-social-commerce-china',
  'what-taobao-instant-commerce-means-for-non-chinese-brands':
    'taobao-instant-commerce-marcas-no-chinas',
  'what-a-pinduoduo-fine-says-about-doing-business-in-china': 'multa-pinduoduo-negocios-en-china',
};

/** Reverse lookup, built once. */
export const insightEsToEn = Object.fromEntries(
  Object.entries(insightEnToEs).map(([en, es]) => [es, en]),
);
