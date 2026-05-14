/**
 * Translation dictionary for shared UI (Header, Footer, Layout defaults).
 *
 * Page-level content (hero copy, section bodies, etc.) lives inside each
 * locale's `src/pages/<locale>/*.astro` file so editorial work stays
 * page-adjacent instead of being scattered across one giant JSON.
 *
 * Rules when extending:
 *  - English is the source of truth for the key names.
 *  - Every other locale must define the same keys.
 *  - No em dashes anywhere in user-visible strings.
 *  - Run the project translation rule for any non-English value.
 */

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
};

export const localeNamesNative: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
};

export const ui = {
  en: {
    // Layout / meta
    'site.title': 'BeyondBorderGroup | China Market Entry, eCommerce & Distribution',
    'site.description':
      'We help global brands enter China, grow sales on Tmall, JD, Douyin, WeChat and RED, and find the right distributor. Shanghai, Hong Kong, Paris.',
    'skipLink': 'Skip to content',

    // Header / nav
    'nav.aria.primary': 'Primary',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.allServices': 'All {section} services',
    'nav.opensInNewTab': '{name} (opens in new tab): {desc}',

    'nav.section.enter': 'Enter China',
    'nav.section.grow': 'Grow in China',
    'nav.section.learn': 'Learn China',
    'nav.work': 'Our Work',
    'nav.about': 'Who We Are',

    'nav.enter.intro': 'Launch in China with the right model, the right partner, the right plan.',
    'nav.grow.intro': 'Operations, media and creative. One team running your stores, your channels, your brand.',
    'nav.learn.intro': 'Understand the market before you bet on it. Programmes built by people who run China every day.',

    'nav.enter.marketEntry.label': 'Market Entry Consulting',
    'nav.enter.marketEntry.desc': 'Strategy, business model and partner selection before launch.',
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce Setup',
    'nav.enter.crossBorder.desc': 'Tmall Global and JD Worldwide. No Chinese entity needed.',
    'nav.enter.distribution.label': 'Distribution',
    'nav.enter.distribution.desc': 'Find the right distributor for your category and channel.',
    'nav.enter.branding.label': 'Branding & Localisation',
    'nav.enter.branding.desc': 'Your brand, sharpened for the Chinese consumer.',

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc': 'Run your Tmall Global and JD Worldwide stores end-to-end.',
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc': 'Sales on Douyin, WeChat and RED. Livestream and KOL.',
    'nav.grow.campaigns.label': 'Campaigns',
    'nav.grow.campaigns.desc': '618, Double 11, CNY. Multi-channel festival campaigns, warm-up to peak.',
    'nav.grow.media.label': 'Media',
    'nav.grow.media.desc': 'Performance and brand media across Chinese platforms.',
    'nav.grow.kols.label': 'Influencers & KOLs',
    'nav.grow.kols.desc': 'KOL casting and paid campaigns across Douyin, RED and WeChat.',

    'nav.learn.platforms.label': 'Platforms',
    'nav.learn.platforms.desc': 'Tmall, JD, Douyin, WeChat, RED, Pinduoduo. How each one works and who it is for.',
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc': 'Workshops led by people who run China every day.',
    'nav.learn.expeditions.label': 'Learning Expeditions',
    'nav.learn.expeditions.desc': 'On-the-ground programmes in Shanghai and beyond.',
    'nav.learn.insights.label': 'Insights',
    'nav.learn.insights.desc': 'Articles, reports and analysis from the frontlines.',

    'nav.feature.beyondcompass.desc':
      'Database of vetted China distributors, Tmall partners and channel operators.',
    'nav.feature.chinawebfoundry.desc': 'A website built in Shanghai for China.',
    'nav.feature.hubstudio.desc': 'The creative production house.',

    // Language switcher
    'lang.switch.aria': 'Change language',
    'lang.current': 'Language',

    // Footer
    'footer.aria.brand': 'Beyond Border Group Home',
    'footer.pitch':
      'We help brands Enter China, Grow in China, and Learn China. 20 years of doing the work, not pitching it.',
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'Beyond Border Group on LinkedIn',
    'footer.col.enter': 'Enter China',
    'footer.col.grow': 'Grow in China',
    'footer.col.learn': 'Learn China',
    'footer.col.company': 'The Company',
    'footer.network.label': 'Our Network',
    'footer.network.aria': 'Our network',
    'footer.parent.eyebrow': 'Parent Group',
    'footer.parent.name': 'BeyondBorderGroup.org',
    'footer.parent.desc': 'The umbrella group connecting our specialised China agencies.',
    'footer.parent.cta': 'Visit',
    'footer.copyright': '© Beyond Border Group {year}. All rights reserved.',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.cookie': 'Cookie Policy',

    // Footer network descriptions
    'footer.net.nuvora.desc': 'LinkedIn presence built daily. Content, ads, executive branding.',
    'footer.net.chinawebfoundry.desc': 'Websites built for the Chinese internet. ICP, Baidu SEO, hosting.',
    'footer.net.beyondcompass.desc': 'Vetted distributor and Tmall partner introductions in China.',
    'footer.net.redscroll.desc': 'Daily WeChat, Douyin, RedNote and Weibo operations from the ground.',
    'footer.net.hubstudio.desc': 'The creative production house.',
  },

  fr: {
    // Layout / meta
    'site.title': 'BeyondBorderGroup | Implantation, e-commerce et distribution en Chine',
    'site.description':
      "Nous accompagnons les marques internationales en Chine : implantation, ventes sur Tmall, JD, Douyin, WeChat et RED, choix du distributeur. Shanghai, Hong Kong, Paris.",
    'skipLink': 'Aller au contenu',

    // Header / nav
    'nav.aria.primary': 'Principale',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.allServices': 'Voir tous les services',
    'nav.opensInNewTab': "{name} : {desc}. S'ouvre dans un nouvel onglet.",

    'nav.section.enter': 'Entrer en Chine',
    'nav.section.grow': 'Se développer en Chine',
    'nav.section.learn': 'Comprendre la Chine',
    'nav.work': 'Réalisations',
    'nav.about': 'À propos',

    'nav.enter.intro':
      "Démarrer en Chine sur des bases solides. Le bon modèle, le partenaire qu'il faut, un calendrier qui tient.",
    'nav.grow.intro':
      "Boutiques, médias, création : une équipe intégrée, du brief au reporting.",
    'nav.learn.intro':
      "Lire le marché chinois avant d'y engager le moindre euro. Des formats animés par des opérationnels, pas par des consultants.",

    'nav.enter.marketEntry.label': "Stratégie d'implantation",
    'nav.enter.marketEntry.desc':
      "Le modèle, les partenaires, la feuille de route. Tout caler avant le premier yuan.",
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce',
    'nav.enter.crossBorder.desc':
      'Tmall Global, JD Worldwide. Sans monter de structure en Chine.',
    'nav.enter.distribution.label': 'Distribution',
    'nav.enter.distribution.desc':
      'Le distributeur taillé pour votre catégorie, sur le bon canal.',
    'nav.enter.branding.label': 'Marque et localisation',
    'nav.enter.branding.desc': 'Une marque qui parle juste au consommateur chinois.',

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc':
      'Vos boutiques Tmall Global et JD Worldwide, pilotées de A à Z.',
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc':
      'Vendre sur Douyin, WeChat, RED. Livestream et KOL au cœur du dispositif.',
    'nav.grow.campaigns.label': 'Campagnes',
    'nav.grow.campaigns.desc':
      '618, Double 11, Nouvel An chinois. De la chauffe au jour J, sur tous les canaux.',
    'nav.grow.media.label': 'Média',
    'nav.grow.media.desc':
      'Plans média performance et marque, sur toutes les plateformes chinoises.',
    'nav.grow.kols.label': 'Influence et KOL',
    'nav.grow.kols.desc':
      "Casting de KOL et campagnes payantes, de Douyin à RED en passant par WeChat.",

    'nav.learn.platforms.label': 'Plateformes',
    'nav.learn.platforms.desc':
      "Tmall, JD, Douyin, WeChat, RED, Pinduoduo. À qui chacune parle, comment elle se gagne.",
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc':
      'Des sessions animées par des opérationnels. Formats courts, exemples du jour.',
    'nav.learn.expeditions.label': 'Expéditions terrain',
    'nav.learn.expeditions.desc':
      "Shanghai, Shenzhen, Hangzhou : voir l'écosystème de l'intérieur.",
    'nav.learn.insights.label': 'Décryptages',
    'nav.learn.insights.desc':
      'Articles, notes et analyses, signés depuis le terrain.',

    'nav.feature.beyondcompass.desc':
      'Distributeurs, TP Tmall, opérateurs de canaux : notre base, tous vérifiés.',
    'nav.feature.chinawebfoundry.desc':
      "Un site fait à Shanghai, qui tient sur l'internet chinois.",
    'nav.feature.hubstudio.desc': 'Notre studio création et production, sur place.',

    // Language switcher
    'lang.switch.aria': 'Changer de langue',
    'lang.current': 'Langue',

    // Footer
    'footer.aria.brand': "Accueil Beyond Border Group",
    'footer.pitch':
      "Entrer en Chine, s'y développer, la comprendre. Vingt ans à faire le métier, plutôt qu'à le vendre.",
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'Beyond Border Group sur LinkedIn',
    'footer.col.enter': 'Entrer en Chine',
    'footer.col.grow': 'Se développer en Chine',
    'footer.col.learn': 'Comprendre la Chine',
    'footer.col.company': 'Le groupe',
    'footer.network.label': 'Notre réseau',
    'footer.network.aria': 'Notre réseau',
    'footer.parent.eyebrow': 'Maison mère',
    'footer.parent.name': 'BeyondBorderGroup.org',
    'footer.parent.desc':
      "Le toit commun de nos agences spécialistes de la Chine.",
    'footer.parent.cta': 'Découvrir',
    'footer.copyright': '© Beyond Border Group {year}. Tous droits réservés.',
    'footer.legal.terms': "Conditions d'utilisation",
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.legal.cookie': 'Politique de cookies',

    // Footer network descriptions
    'footer.net.nuvora.desc':
      'LinkedIn travaillé au quotidien. Contenus, campagnes payantes, image des dirigeants.',
    'footer.net.chinawebfoundry.desc':
      "Des sites taillés pour l'internet chinois. ICP, SEO Baidu, hébergement local.",
    'footer.net.beyondcompass.desc':
      'Des distributeurs et partenaires Tmall vérifiés, présentés au cas par cas.',
    'footer.net.redscroll.desc':
      "WeChat, Douyin, RedNote, Weibo : nos équipes pilotent au jour le jour, depuis Shanghai.",
    'footer.net.hubstudio.desc': 'Notre studio création et production, sur place.',
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
