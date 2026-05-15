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
    'site.title': 'Beyond Border Group | China Market Entry, eCommerce & Distribution',
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
    'site.title': 'Beyond Border Group | Implantation, e-commerce et distribution en Chine',
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
      "S'implanter sur le marché chinois exige un modèle économique adapté, des partenaires qualifiés et un calendrier maîtrisé.",
    'nav.grow.intro':
      "Une équipe intégrée pilote vos boutiques, vos plans média et votre production créative, de la conception au suivi des performances.",
    'nav.learn.intro':
      "Comprendre le marché chinois avant tout investissement. Des programmes conduits par des praticiens en activité sur le terrain.",

    'nav.enter.marketEntry.label': "Stratégie d'implantation",
    'nav.enter.marketEntry.desc':
      "Modèle économique, sélection des partenaires, feuille de route opérationnelle. Un dispositif arrêté en amont du lancement.",
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce',
    'nav.enter.crossBorder.desc':
      "Tmall Global, JD Worldwide. Sans création d'entité juridique en Chine.",
    'nav.enter.distribution.label': 'Distribution',
    'nav.enter.distribution.desc':
      "Identifier le distributeur adapté à votre catégorie et au canal pertinent.",
    'nav.enter.branding.label': 'Marque et localisation',
    'nav.enter.branding.desc':
      "Une identité de marque ajustée aux attentes du consommateur chinois.",

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc':
      "Gestion intégrale de vos boutiques Tmall Global et JD Worldwide.",
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc':
      "Convertir sur Douyin, WeChat et RED. Livestream et KOL au centre du dispositif.",
    'nav.grow.campaigns.label': 'Campagnes',
    'nav.grow.campaigns.desc':
      "618, Double 11, Nouvel An chinois. Pilotage multicanal, de la phase d'amorçage au pic des ventes.",
    'nav.grow.media.label': 'Média',
    'nav.grow.media.desc':
      "Plans média de notoriété et de performance, sur l'ensemble des plateformes chinoises.",
    'nav.grow.kols.label': 'Influence et KOL',
    'nav.grow.kols.desc':
      "Sélection des KOL et activations payantes sur Douyin, RED et WeChat.",

    'nav.learn.platforms.label': 'Plateformes',
    'nav.learn.platforms.desc':
      "Tmall, JD, Douyin, WeChat, RED, Pinduoduo. Audience, mécaniques et conditions de réussite, plateforme par plateforme.",
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc':
      "Sessions courtes conduites par des opérationnels, appuyées sur des cas récents.",
    'nav.learn.expeditions.label': 'Expéditions terrain',
    'nav.learn.expeditions.desc':
      "Shanghai, Shenzhen, Hangzhou : observer l'écosystème depuis le terrain chinois.",
    'nav.learn.insights.label': 'Décryptages',
    'nav.learn.insights.desc':
      "Articles, notes et analyses produits depuis le terrain chinois.",

    'nav.feature.beyondcompass.desc':
      "Notre vivier de distributeurs, partenaires Tmall et opérateurs de canaux. Chaque profil vérifié en amont.",
    'nav.feature.chinawebfoundry.desc':
      "Des sites pensés à Shanghai pour l'écosystème internet chinois.",
    'nav.feature.hubstudio.desc':
      "Studio de création et de production, installé en Chine.",

    // Language switcher
    'lang.switch.aria': 'Changer de langue',
    'lang.current': 'Langue',

    // Footer
    'footer.aria.brand': "Accueil Beyond Border Group",
    'footer.pitch':
      "S'implanter en Chine, s'y développer, la décrypter. Vingt années d'opérations conduites depuis le terrain.",
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
      "L'entité qui réunit l'ensemble de nos agences spécialistes du marché chinois.",
    'footer.parent.cta': 'Découvrir',
    'footer.copyright': '© Beyond Border Group {year}. Tous droits réservés.',
    'footer.legal.terms': "Conditions d'utilisation",
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.legal.cookie': 'Politique de cookies',

    // Footer network descriptions
    'footer.net.nuvora.desc':
      "Présence LinkedIn pilotée au quotidien. Production éditoriale, campagnes payantes et travail d'image des dirigeants.",
    'footer.net.chinawebfoundry.desc':
      "Sites web conçus pour l'internet chinois. ICP, référencement Baidu, hébergement local.",
    'footer.net.beyondcompass.desc':
      "Distributeurs et partenaires Tmall qualifiés, sélectionnés au cas par cas selon votre catégorie.",
    'footer.net.redscroll.desc':
      "WeChat, Douyin, RedNote, Weibo : pilotage quotidien assuré par nos équipes basées à Shanghai.",
    'footer.net.hubstudio.desc':
      "Studio de création et de production, installé en Chine.",
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
