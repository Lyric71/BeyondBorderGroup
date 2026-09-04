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

export const locales = ['en', 'fr', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  es: 'ES',
};

export const localeNamesNative: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
};

export const ui = {
  en: {
    // Layout / meta
    'site.title': 'TheChinaPath | China Market Entry, eCommerce & Distribution',
    'site.description':
      'We help global brands enter China, grow sales on Tmall, JD, Douyin, WeChat and RED, and find the right distributor. Shanghai, Hong Kong, Paris.',
    skipLink: 'Skip to content',

    // Header / nav
    'nav.aria.primary': 'Primary',
    'nav.contact': 'Contact',
    'nav.calculator': 'Cost calculators',
    'nav.menu': 'Menu',
    'nav.allServices': 'All {section} services',
    'nav.opensInNewTab': '{name} (opens in new tab): {desc}',

    'nav.section.enter': 'Enter China',
    'nav.section.grow': 'Grow in China',
    'nav.section.learn': 'Learn China',
    'nav.work': 'Our Work',
    'nav.about': 'Who We Are',

    'nav.enter.intro': 'Launch in China with the right model, the right partner, the right plan.',
    'nav.grow.intro':
      'Operations, media and creative. One team running your stores, your channels, your brand.',
    'nav.learn.intro':
      'Understand the market before you bet on it. Programmes built by people who run China every day.',

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
    'nav.grow.campaigns.desc':
      '618, Double 11, CNY. Multi-channel festival campaigns, warm-up to peak.',
    'nav.grow.media.label': 'Media',
    'nav.grow.media.desc': 'Performance and brand media across Chinese platforms.',
    'nav.grow.kols.label': 'Influencers & KOLs',
    'nav.grow.kols.desc': 'KOL casting and paid campaigns across Douyin, RED and WeChat.',

    'nav.learn.platforms.label': 'Platforms',
    'nav.learn.platforms.desc':
      'Tmall, JD, Douyin, WeChat, RED, Pinduoduo. How each one works and who it is for.',
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


    // WO-1.1: the five top-level groups. Labels name the visitor's need, not
    // the brand, so the nav reads as a set of questions rather than an org chart.
    'nav.talkToUs': 'Talk to us',
    'nav.cta.sell': 'Everything we run for you in China',
    'nav.cta.learn': 'All programmes and research',
    'nav.section.find': 'Find a partner',
    'nav.section.sell': 'Sell in China',
    'nav.section.web': 'Website and social',

    'nav.find.intro':
      'The right distributor, the right platform partner, the right operator. Chosen from people we have actually met.',
    'nav.sell.intro':
      'Stores, campaigns and media. One team running your Tmall, JD, Douyin and WeChat commerce.',
    'nav.web.intro':
      'Your site, your accounts, your content. Built and run by the two teams down the hall.',

    'nav.find.compass.label': 'Compass, the partner database',
    'nav.find.compass.desc':
      'Vetted China distributors, Tmall TPs and Douyin partners, met in person.',
    'nav.find.shortlist.label': 'How a shortlist is built',
    'nav.find.shortlist.desc': 'From the first brief to a warm introduction, in weeks not months.',

    'nav.sell.tmalljd.label': 'Tmall and JD operations',
    'nav.sell.tmalljd.desc': 'Run your Tmall Global and JD Worldwide stores end-to-end.',
    'nav.sell.campaigns.label': 'Campaigns and media',
    'nav.sell.campaigns.desc': '618, Double 11, CNY, and the media buying that feeds the store.',

    'nav.web.website.label': 'Website, WeChat and mini program',
    'nav.web.website.desc': 'Baidu, ICP filing and the five gaps that keep foreign sites invisible.',
    'nav.web.social.label': 'Chinese social media',
    'nav.web.social.desc': 'WeChat, RedNote, Douyin and Weibo. What each one is actually for.',
    'nav.web.production.label': 'Content production',
    'nav.web.production.desc': 'hubStudio, the creative production house.',

    'footer.col.find': 'Find a partner',
    'footer.col.sell': 'Sell in China',
    'footer.col.web': 'Website and social',
    'footer.partners': 'Become a Compass partner',
    'footer.signin': 'Partner sign-in',


    // Mega panel: the promise on the spine, one line per group.
    'nav.sell.title': 'Your stores, run by the people who opened them.',
    'nav.web.title': 'Two teams, one floor, in Shanghai.',
    'nav.find.title': 'The shortlist comes from people we have met.',
    'nav.learn.title': 'Read the market before you bet on it.',

    // Mega panel: feature card
    'nav.feature.platforms.label': 'Where we operate',
    'nav.feature.platforms.note':
      'Storefronts, content commerce and livestream, on the platforms that carry the volume.',
    'nav.feature.teams.label': 'Who does the work',
    'nav.feature.cwf.line':
      'ChinaWebFoundry, our web team in Shanghai. Baidu, ICP filing, WeChat and mini programs.',
    'nav.feature.trs.line':
      'TheRedScroll, our social agency. Daily content, community and KOL work in Chinese.',
    'nav.feature.compass.label': 'Compass',
    'nav.feature.compass.title': 'A database, not another directory',
    'nav.feature.compass.line':
      'Fifteen years of distributor meetings, written down and kept current.',
    'nav.feature.compass.cta': 'See how it works',
    'nav.feature.compass.alt':
      'Two managers walking a distribution warehouse in Shanghai, mid-conversation',
    'nav.feature.learn.label': 'Masterclass',
    'nav.feature.learn.title': 'Taught by people who run China every day',
    'nav.feature.learn.line': 'A working session, not a keynote. Recent cases, real numbers.',
    'nav.feature.learn.cta': 'See the programme',
    'nav.feature.learn.alt': 'A masterclass session in progress with the room facing the speaker',


    'footer.call.eyebrow': 'Next step',
    'footer.call.title': 'Tell us where you are, and where you want to be.',
    'footer.call.note':
      'A senior partner will write back inside one working day, not a form-letter from an intake bot.',

    // Language switcher
    'lang.switch.aria': 'Change language',
    'lang.current': 'Language',

    // Footer
    'footer.aria.brand': 'TheChinaPath Home',
    'footer.pitch':
      'We help brands Enter China, Grow in China, and Learn China. 15 years of doing the work, not pitching it.',
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath on LinkedIn',
    'footer.col.enter': 'Enter China',
    'footer.col.grow': 'Grow in China',
    'footer.col.learn': 'Learn China',
    'footer.col.company': 'The Company',
    'footer.col.tools': 'Free tools',
    'work.strip.eyebrow': 'Client work',
    'work.strip.title': 'Brands we have done this for',
    'work.strip.all': 'See all case studies',
    'footer.tools.douyin': 'Douyin cost calculator',
    'footer.tools.tmall': 'Tmall Global setup and run',
    'footer.tools.jd': 'JD Worldwide setup and run',
    'footer.network.label': 'Part of',
    'footer.network.aria': 'Our network',
    'footer.parent.eyebrow': 'Parent Group',
    'footer.parent.name': 'TheChinaPath',
    'footer.parent.desc': 'The umbrella group connecting our specialised China agencies.',
    'footer.parent.cta': 'Visit',
    'footer.copyright': '© TheChinaPath {year}. All rights reserved.',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.cookie': 'Cookie Policy',

    // Footer network descriptions
    'footer.net.beyondbridge.desc': 'The full pipeline for Chinese brands going overseas.',
    'footer.net.bearingbridgeai.desc': 'AI adoption consulting. East and West, on your data.',
    'footer.net.nuvora.desc': 'LinkedIn-only B2B. Strategy, content, ads.',
    'footer.net.chinawebfoundry.desc': 'Websites built for the Chinese web. Baidu, ICP, AI engines.',
    'footer.net.beyondcompass.desc':
      'A private database of vetted China distributors, Tmall TPs, and Douyin partners.',
    'footer.net.redscroll.desc': 'Chinese social media. WeChat, Douyin, RedNote, Weibo.',
    'footer.net.hubstudio.desc': 'The creative production house.',
  },

  fr: {
    // Layout / meta
    'site.title': 'TheChinaPath | Implantation, e-commerce et distribution en Chine',
    'site.description':
      'Nous accompagnons les marques internationales en Chine : implantation, ventes sur Tmall, JD, Douyin, WeChat et RED, choix du distributeur. Shanghai, Hong Kong, Paris.',
    skipLink: 'Aller au contenu',

    // Header / nav
    'nav.aria.primary': 'Principale',
    'nav.contact': 'Contact',
    // Kept in English on purpose: the CTA label stays "Budget Calculator" in
    // every locale, only its link is localized.
    'nav.calculator': 'Calculateurs de coûts',
    'nav.menu': 'Menu',
    'nav.allServices': 'Voir tous les services',
    'nav.opensInNewTab': "{name} : {desc}. S'ouvre dans un nouvel onglet.",

    'nav.section.enter': 'Entrer en Chine',
    'nav.section.grow': 'Se développer en Chine',
    'nav.section.learn': 'Comprendre la Chine',
    'nav.work': 'Réalisations',
    'nav.about': 'À propos',

    'nav.enter.intro':
      "S'implanter sur le marché chinois exige un modèle économique adapté, des partenaires qualifiés et un calendrier maîtrisé.",
    'nav.grow.intro':
      'Une équipe intégrée pilote vos boutiques, vos plans média et votre production créative, de la conception au suivi des performances.',
    'nav.learn.intro':
      'Comprendre le marché chinois avant tout investissement. Des programmes conduits par des praticiens en activité sur le terrain.',

    'nav.enter.marketEntry.label': "Stratégie d'implantation",
    'nav.enter.marketEntry.desc':
      'Modèle économique, sélection des partenaires, feuille de route opérationnelle. Un dispositif arrêté en amont du lancement.',
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce',
    'nav.enter.crossBorder.desc':
      "Tmall Global, JD Worldwide. Sans création d'entité juridique en Chine.",
    'nav.enter.distribution.label': 'Distribution',
    'nav.enter.distribution.desc':
      'Identifier le distributeur adapté à votre catégorie et au canal pertinent.',
    'nav.enter.branding.label': 'Marque et localisation',
    'nav.enter.branding.desc':
      'Une identité de marque ajustée aux attentes du consommateur chinois.',

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc': 'Gestion intégrale de vos boutiques Tmall Global et JD Worldwide.',
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc':
      'Convertir sur Douyin, WeChat et RED. Livestream et KOL au centre du dispositif.',
    'nav.grow.campaigns.label': 'Campagnes',
    'nav.grow.campaigns.desc':
      "618, Double 11, Nouvel An chinois. Pilotage multicanal, de la phase d'amorçage au pic des ventes.",
    'nav.grow.media.label': 'Média',
    'nav.grow.media.desc':
      "Plans média de notoriété et de performance, sur l'ensemble des plateformes chinoises.",
    'nav.grow.kols.label': 'Influence et KOL',
    'nav.grow.kols.desc': 'Sélection des KOL et activations payantes sur Douyin, RED et WeChat.',

    'nav.learn.platforms.label': 'Plateformes',
    'nav.learn.platforms.desc':
      'Tmall, JD, Douyin, WeChat, RED, Pinduoduo. Audience, mécaniques et conditions de réussite, plateforme par plateforme.',
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc':
      'Sessions courtes conduites par des opérationnels, appuyées sur des cas récents.',
    'nav.learn.expeditions.label': 'Expéditions terrain',
    'nav.learn.expeditions.desc':
      "Shanghai, Shenzhen, Hangzhou : observer l'écosystème depuis le terrain chinois.",
    'nav.learn.insights.label': 'Décryptages',
    'nav.learn.insights.desc': 'Articles, notes et analyses produits depuis le terrain chinois.',

    'nav.feature.beyondcompass.desc':
      'Notre vivier de distributeurs, partenaires Tmall et opérateurs de canaux. Chaque profil vérifié en amont.',
    'nav.feature.chinawebfoundry.desc':
      "Des sites pensés à Shanghai pour l'écosystème internet chinois.",
    'nav.feature.hubstudio.desc': 'Studio de création et de production, installé en Chine.',


    // WO-1.1
    'nav.talkToUs': 'Parlons-en',
    'nav.cta.sell': 'Tout ce que nous pilotons pour vous en Chine',
    'nav.cta.learn': 'Tous les programmes et analyses',
    'nav.section.find': 'Trouver un partenaire',
    'nav.section.sell': 'Vendre en Chine',
    'nav.section.web': 'Site et réseaux sociaux',

    'nav.find.intro':
      'Le bon distributeur, le bon opérateur de plateforme. Des partenaires que nous avons rencontrés nous-mêmes, sur place.',
    'nav.sell.intro':
      'Boutiques, campagnes et plans média. Une seule équipe pilote vos ventes sur Tmall, JD, Douyin et WeChat.',
    'nav.web.intro':
      'Votre site, vos comptes, vos contenus. Deux équipes du groupe, à Shanghai, les prennent en charge.',

    'nav.find.compass.label': 'Compass, la base de partenaires',
    'nav.find.compass.desc':
      'Distributeurs, TP Tmall et partenaires Douyin qualifiés, rencontrés un par un.',
    'nav.find.shortlist.label': 'Comment se construit une short-list',
    'nav.find.shortlist.desc':
      "Du premier brief à la mise en relation, en quelques semaines plutôt qu'un trimestre.",

    'nav.sell.tmalljd.label': 'Opérations Tmall et JD',
    'nav.sell.tmalljd.desc': 'Gestion intégrale de vos boutiques Tmall Global et JD Worldwide.',
    'nav.sell.campaigns.label': 'Campagnes et média',
    'nav.sell.campaigns.desc':
      '618, Double 11, Nouvel An chinois, et les achats média qui alimentent la boutique.',

    'nav.web.website.label': 'Site web, WeChat et mini-programme',
    'nav.web.website.desc':
      'Baidu, licence ICP et les cinq écarts qui rendent un site étranger invisible en Chine.',
    'nav.web.social.label': 'Réseaux sociaux chinois',
    'nav.web.social.desc': 'WeChat, RED, Douyin, Weibo. À quoi sert vraiment chaque plateforme.',
    'nav.web.production.label': 'Production de contenus',
    'nav.web.production.desc': 'hubStudio, la maison de production créative.',

    'footer.col.find': 'Trouver un partenaire',
    'footer.col.sell': 'Vendre en Chine',
    'footer.col.web': 'Site et réseaux sociaux',
    'footer.partners': 'Devenir partenaire Compass',
    'footer.signin': 'Espace partenaires',


    // Mega panel
    'nav.sell.title': 'Vos boutiques, tenues par ceux qui les ont ouvertes.',
    'nav.web.title': 'Deux équipes, un même étage, à Shanghai.',
    'nav.find.title': 'La short-list vient de gens que nous avons rencontrés.',
    'nav.learn.title': 'Lire le marché avant de miser dessus.',

    'nav.feature.platforms.label': 'Nos terrains',
    'nav.feature.platforms.note':
      'Boutiques, commerce de contenu et livestream, sur les plateformes qui font le volume.',
    'nav.feature.teams.label': 'Qui exécute',
    'nav.feature.cwf.line':
      'ChinaWebFoundry, notre équipe web à Shanghai. Baidu, licence ICP, WeChat et mini-programmes.',
    'nav.feature.trs.line':
      'TheRedScroll, notre agence social. Contenu quotidien, communauté et KOL, en chinois.',
    'nav.feature.compass.label': 'Compass',
    'nav.feature.compass.title': 'Une base de données, pas un annuaire',
    'nav.feature.compass.line':
      'Quinze ans de rendez-vous avec des distributeurs, consignés et tenus à jour.',
    'nav.feature.compass.cta': 'Voir le fonctionnement',
    'nav.feature.compass.alt':
      'Deux responsables traversent un entrepôt de distribution à Shanghai en discutant',
    'nav.feature.learn.label': 'Masterclass',
    'nav.feature.learn.title': 'Animé par des praticiens en activité',
    'nav.feature.learn.line': 'Une session de travail, pas une conférence. Cas récents, chiffres réels.',
    'nav.feature.learn.cta': 'Voir le programme',
    'nav.feature.learn.alt': "Une session de masterclass en cours, la salle tournée vers l'intervenant",


    'footer.call.eyebrow': 'Prochaine étape',
    'footer.call.title': 'Dites-nous où vous en êtes, et où vous voulez aller.',
    'footer.call.note':
      'Un associé vous répond personnellement sous un jour ouvré. Pas un accusé de réception automatique.',

    // Language switcher
    'lang.switch.aria': 'Changer de langue',
    'lang.current': 'Langue',

    // Footer
    'footer.aria.brand': 'Accueil TheChinaPath',
    'footer.pitch':
      "S'implanter en Chine, s'y développer, la décrypter. Quinze années d'opérations conduites depuis le terrain.",
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath sur LinkedIn',
    'footer.col.enter': 'Entrer en Chine',
    'footer.col.grow': 'Se développer en Chine',
    'footer.col.learn': 'Comprendre la Chine',
    'footer.col.company': 'Le groupe',
    'footer.col.tools': 'Outils gratuits',
    'work.strip.eyebrow': 'Réalisations',
    'work.strip.title': 'Des marques pour qui nous l\x27avons déjà fait',
    'work.strip.all': 'Voir toutes les études de cas',
    'footer.tools.douyin': 'Calculateur de coûts Douyin',
    'footer.tools.tmall': 'Tmall Global : lancement et exploitation',
    'footer.tools.jd': 'JD Worldwide : lancement et exploitation',
    'footer.network.label': 'Membre du groupe',
    'footer.network.aria': 'Notre réseau',
    'footer.parent.eyebrow': 'Maison mère',
    'footer.parent.name': 'TheChinaPath',
    'footer.parent.desc':
      "L'entité qui réunit l'ensemble de nos agences spécialistes du marché chinois.",
    'footer.parent.cta': 'Découvrir',
    'footer.copyright': '© TheChinaPath {year}. Tous droits réservés.',
    'footer.legal.terms': "Conditions d'utilisation",
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.legal.cookie': 'Politique de cookies',

    // Footer network descriptions
    'footer.net.nuvora.desc':
      "Présence LinkedIn pilotée au quotidien. Production éditoriale, campagnes payantes et travail d'image des dirigeants.",
    'footer.net.chinawebfoundry.desc':
      "Sites web conçus pour l'internet chinois. ICP, référencement Baidu, hébergement local.",
    'footer.net.beyondcompass.desc':
      'Distributeurs et partenaires Tmall qualifiés, sélectionnés au cas par cas selon votre catégorie.',
    'footer.net.redscroll.desc':
      'WeChat, Douyin, RedNote, Weibo : pilotage quotidien assuré par nos équipes basées à Shanghai.',
    'footer.net.hubstudio.desc': 'Studio de création et de production, installé en Chine.',
  },

  de: {
    // Layout / meta
    'site.title': 'TheChinaPath | Markteintritt, E-Commerce und Vertrieb in China',
    'site.description':
      'Wir begleiten internationale Marken beim Eintritt in den chinesischen Markt: Umsätze auf Tmall, JD, Douyin, WeChat und RED, passende Vertriebspartner. Shanghai, Hongkong, Paris.',
    skipLink: 'Zum Inhalt springen',

    // Header / nav
    'nav.aria.primary': 'Hauptnavigation',
    'nav.contact': 'Kontakt',
    'nav.calculator': 'Kostenrechner',
    'nav.menu': 'Menü',
    'nav.allServices': 'Alle Leistungen ansehen',
    'nav.opensInNewTab': '{name}: {desc}. Öffnet in einem neuen Tab.',

    'nav.section.enter': 'Nach China',
    'nav.section.grow': 'In China wachsen',
    'nav.section.learn': 'China verstehen',
    'nav.work': 'Referenzen',
    'nav.about': 'Über uns',

    'nav.enter.intro':
      'Der Eintritt in den chinesischen Markt verlangt das passende Geschäftsmodell, geprüfte Partner und einen belastbaren Fahrplan.',
    'nav.grow.intro':
      'Ein eingespieltes Team führt Ihre Shops, Mediapläne und Kreativproduktion. Vom Konzept bis zur Performance-Kontrolle.',
    'nav.learn.intro':
      'Den chinesischen Markt verstehen, bevor Sie investieren. Programme, geleitet von Praktikern, die täglich vor Ort arbeiten.',

    'nav.enter.marketEntry.label': 'Markteintrittsberatung',
    'nav.enter.marketEntry.desc':
      'Geschäftsmodell, Partnerwahl, operativer Fahrplan. Alles abgestimmt, bevor der erste Yuan fließt.',
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce',
    'nav.enter.crossBorder.desc':
      'Tmall Global und JD Worldwide. Ohne Gründung einer chinesischen Gesellschaft.',
    'nav.enter.distribution.label': 'Vertrieb',
    'nav.enter.distribution.desc':
      'Der richtige Vertriebspartner für Ihre Kategorie und Ihren Kanal.',
    'nav.enter.branding.label': 'Marke und Lokalisierung',
    'nav.enter.branding.desc':
      'Eine Markenidentität, abgestimmt auf die Erwartungen chinesischer Verbraucher.',

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc': 'Ihre Tmall-Global- und JD-Worldwide-Shops, von A bis Z geführt.',
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc': 'Verkaufen auf Douyin, WeChat und RED. Livestream und KOL im Zentrum.',
    'nav.grow.campaigns.label': 'Kampagnen',
    'nav.grow.campaigns.desc':
      '618, Double 11, Chinesisches Neujahr. Mehrkanal-Steuerung vom Aufwärmen bis zum Verkaufspeak.',
    'nav.grow.media.label': 'Media',
    'nav.grow.media.desc':
      'Marken- und Performance-Media auf allen relevanten chinesischen Plattformen.',
    'nav.grow.kols.label': 'Influencer und KOL',
    'nav.grow.kols.desc': 'KOL-Auswahl und bezahlte Aktivierungen auf Douyin, RED und WeChat.',

    'nav.learn.platforms.label': 'Plattformen',
    'nav.learn.platforms.desc':
      'Tmall, JD, Douyin, WeChat, RED, Pinduoduo. Zielgruppe, Mechanik, Erfolgsbedingungen, Plattform für Plattform.',
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc': 'Kurze Sessions von Operatoren, gestützt auf laufende Mandate.',
    'nav.learn.expeditions.label': 'Studienreisen',
    'nav.learn.expeditions.desc':
      'Shanghai, Shenzhen, Hangzhou. Den chinesischen Markt vom Boden aus beobachten.',
    'nav.learn.insights.label': 'Analysen',
    'nav.learn.insights.desc': 'Artikel, Notizen und Untersuchungen, erstellt vor Ort in China.',

    'nav.feature.beyondcompass.desc':
      'Unser Pool aus geprüften Vertriebspartnern, Tmall-Partneragenturen und Kanalbetreibern in China.',
    'nav.feature.chinawebfoundry.desc':
      'Websites, in Shanghai gebaut für das chinesische Internet.',
    'nav.feature.hubstudio.desc': 'Studio für Kreation und Produktion, ansässig in China.',


    // WO-1.1
    'nav.talkToUs': 'Sprechen wir',
    'nav.cta.sell': 'Alles, was wir für Sie in China betreiben',
    'nav.cta.learn': 'Alle Programme und Analysen',
    'nav.section.find': 'Partner finden',
    'nav.section.sell': 'In China verkaufen',
    'nav.section.web': 'Website und Social Media',

    'nav.find.intro':
      'Der passende Distributor, der passende Plattformpartner. Ausgewählt aus Unternehmen, die wir persönlich kennen.',
    'nav.sell.intro':
      'Shops, Kampagnen, Media. Ein Team führt Ihr Geschäft auf Tmall, JD, Douyin und WeChat.',
    'nav.web.intro':
      'Ihre Website, Ihre Accounts, Ihre Inhalte. Zwei Teams der Gruppe in Shanghai übernehmen das.',

    'nav.find.compass.label': 'Compass, die Partnerdatenbank',
    'nav.find.compass.desc':
      'Geprüfte China-Distributoren, Tmall TPs und Douyin-Partner. Jeder persönlich getroffen.',
    'nav.find.shortlist.label': 'So entsteht eine Shortlist',
    'nav.find.shortlist.desc':
      'Vom ersten Briefing bis zur Empfehlung, in Wochen statt in einem Quartal.',

    'nav.sell.tmalljd.label': 'Tmall- und JD-Betrieb',
    'nav.sell.tmalljd.desc': 'Wir führen Ihre Stores auf Tmall Global und JD Worldwide komplett.',
    'nav.sell.campaigns.label': 'Kampagnen und Media',
    'nav.sell.campaigns.desc':
      '618, Double 11, Neujahrsfest, dazu der Mediaeinkauf, der den Store versorgt.',

    'nav.web.website.label': 'Website, WeChat und Mini-Programm',
    'nav.web.website.desc':
      'Baidu, ICP-Lizenz und die fünf Lücken, an denen ausländische Websites in China scheitern.',
    'nav.web.social.label': 'Chinesische Social Media',
    'nav.web.social.desc': 'WeChat, RedNote, Douyin, Weibo. Wofür jede Plattform wirklich taugt.',
    'nav.web.production.label': 'Content-Produktion',
    'nav.web.production.desc': 'hubStudio, das Kreativstudio der Gruppe.',

    'footer.col.find': 'Partner finden',
    'footer.col.sell': 'In China verkaufen',
    'footer.col.web': 'Website und Social Media',
    'footer.partners': 'Compass-Partner werden',
    'footer.signin': 'Partner-Login',


    // Mega panel
    'nav.sell.title': 'Ihre Stores, geführt von denen, die sie eröffnet haben.',
    'nav.web.title': 'Zwei Teams, eine Etage, in Shanghai.',
    'nav.find.title': 'Die Shortlist kommt von Leuten, die wir kennen.',
    'nav.learn.title': 'Den Markt lesen, bevor Sie auf ihn setzen.',

    'nav.feature.platforms.label': 'Wo wir arbeiten',
    'nav.feature.platforms.note':
      'Stores, Content Commerce und Livestream, auf den Plattformen mit dem Volumen.',
    'nav.feature.teams.label': 'Wer es umsetzt',
    'nav.feature.cwf.line':
      'ChinaWebFoundry, unser Web-Team in Shanghai. Baidu, ICP-Lizenz, WeChat und Mini-Programme.',
    'nav.feature.trs.line':
      'TheRedScroll, unsere Social-Agentur. Tägliche Inhalte, Community und KOL, auf Chinesisch.',
    'nav.feature.compass.label': 'Compass',
    'nav.feature.compass.title': 'Eine Datenbank, kein weiteres Verzeichnis',
    'nav.feature.compass.line':
      'Fünfzehn Jahre Distributorentermine, aufgeschrieben und aktuell gehalten.',
    'nav.feature.compass.cta': 'So funktioniert es',
    'nav.feature.compass.alt':
      'Zwei Manager gehen im Gespräch durch ein Distributionslager in Shanghai',
    'nav.feature.learn.label': 'Masterclass',
    'nav.feature.learn.title': 'Von Praktikern, die China täglich betreiben',
    'nav.feature.learn.line': 'Eine Arbeitssitzung, keine Keynote. Aktuelle Fälle, echte Zahlen.',
    'nav.feature.learn.cta': 'Zum Programm',
    'nav.feature.learn.alt': 'Eine laufende Masterclass, der Raum dem Referenten zugewandt',


    'footer.call.eyebrow': 'Nächster Schritt',
    'footer.call.title': 'Sagen Sie uns, wo Sie stehen und wohin Sie wollen.',
    'footer.call.note':
      'Ein Partner antwortet Ihnen persönlich innerhalb eines Werktags. Keine automatische Eingangsbestätigung.',

    // Language switcher
    'lang.switch.aria': 'Sprache wechseln',
    'lang.current': 'Sprache',

    // Footer
    'footer.aria.brand': 'TheChinaPath Startseite',
    'footer.pitch':
      'Nach China kommen, in China wachsen, China verstehen. Fünfzehn Jahre operative Arbeit vor Ort, nicht aus dem Pitch-Deck.',
    'footer.cities': 'Shanghai · Hongkong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath auf LinkedIn',
    'footer.col.enter': 'Nach China',
    'footer.col.grow': 'In China wachsen',
    'footer.col.learn': 'China verstehen',
    'footer.col.company': 'Die Gruppe',
    'footer.col.tools': 'Kostenlose Tools',
    'work.strip.eyebrow': 'Referenzen',
    'work.strip.title': 'Marken, für die wir das schon umgesetzt haben',
    'work.strip.all': 'Alle Fallstudien ansehen',
    'footer.tools.douyin': 'Douyin-Kostenrechner',
    'footer.tools.tmall': 'Tmall Global: Aufbau und Betrieb',
    'footer.tools.jd': 'JD Worldwide: Aufbau und Betrieb',
    'footer.network.label': 'Teil von',
    'footer.network.aria': 'Unser Netzwerk',
    'footer.parent.eyebrow': 'Muttergesellschaft',
    'footer.parent.name': 'TheChinaPath',
    'footer.parent.desc':
      'Die Dachgesellschaft hinter unseren Spezialagenturen für den chinesischen Markt.',
    'footer.parent.cta': 'Mehr erfahren',
    'footer.copyright': '© TheChinaPath {year}. Alle Rechte vorbehalten.',
    'footer.legal.terms': 'Nutzungsbedingungen',
    'footer.legal.privacy': 'Datenschutz',
    'footer.legal.cookie': 'Cookie-Richtlinie',

    // Footer network descriptions
    'footer.net.nuvora.desc':
      'LinkedIn-Präsenz, täglich gesteuert. Redaktionelle Arbeit, bezahlte Kampagnen, Profilarbeit für Führungskräfte.',
    'footer.net.chinawebfoundry.desc':
      'Websites, gebaut für das chinesische Internet. ICP, Baidu-SEO, lokales Hosting.',
    'footer.net.beyondcompass.desc':
      'Geprüfte Vertriebspartner und Tmall-Spezialagenturen in China, fallweise ausgewählt nach Ihrer Kategorie.',
    'footer.net.redscroll.desc':
      'WeChat, Douyin, RedNote, Weibo: tägliche Steuerung durch unsere Teams in Shanghai.',
    'footer.net.hubstudio.desc': 'Studio für Kreation und Produktion, ansässig in China.',
  },

  es: {
    // Layout / meta
    'site.title': 'TheChinaPath | Implantación, eCommerce y distribución en China',
    'site.description':
      'Acompañamos a marcas internacionales en China. Implantación, ventas en Tmall, JD, Douyin, WeChat y RED, y selección del distribuidor adecuado. Shanghái, Hong Kong, París.',
    skipLink: 'Saltar al contenido',

    // Header / nav
    'nav.aria.primary': 'Principal',
    'nav.contact': 'Contacto',
    'nav.calculator': 'Calculadoras de costes',
    'nav.menu': 'Menú',
    'nav.allServices': 'Ver todos los servicios',
    'nav.opensInNewTab': '{name}: {desc}. Se abre en una pestaña nueva.',

    'nav.section.enter': 'Entrar en China',
    'nav.section.grow': 'Crecer en China',
    'nav.section.learn': 'Conocer China',
    'nav.work': 'Proyectos',
    'nav.about': 'Quiénes somos',

    'nav.enter.intro':
      'Implantarse en China exige un modelo de negocio bien calibrado, los socios correctos y un calendario realista.',
    'nav.grow.intro':
      'Un equipo integrado gestiona sus tiendas, sus planes de medios y su producción creativa, del diseño al seguimiento de resultados.',
    'nav.learn.intro':
      'Conozca el mercado chino antes de apostar por él. Programas dirigidos por profesionales que operan en China cada día.',

    'nav.enter.marketEntry.label': 'Estrategia de entrada',
    'nav.enter.marketEntry.desc':
      'Modelo de negocio, selección de socios y hoja de ruta operativa. Todo definido antes del lanzamiento.',
    'nav.enter.crossBorder.label': 'Cross-Border eCommerce',
    'nav.enter.crossBorder.desc':
      'Tmall Global y JD Worldwide. Sin necesidad de crear una entidad jurídica en China.',
    'nav.enter.distribution.label': 'Distribución',
    'nav.enter.distribution.desc':
      'Identificamos al distribuidor adecuado para su categoría y su canal.',
    'nav.enter.branding.label': 'Marca y localización',
    'nav.enter.branding.desc':
      'Una identidad de marca ajustada a las expectativas del consumidor chino.',

    'nav.grow.ecommerce.label': 'Cross-Border eCommerce',
    'nav.grow.ecommerce.desc': 'Gestión integral de sus tiendas Tmall Global y JD Worldwide.',
    'nav.grow.social.label': 'Social Commerce',
    'nav.grow.social.desc':
      'Vender en Douyin, WeChat y RED. Livestream y KOL en el centro del dispositivo.',
    'nav.grow.campaigns.label': 'Campañas',
    'nav.grow.campaigns.desc':
      '618, Double 11, Año Nuevo Chino. Campañas multicanal, del calentamiento al pico de ventas.',
    'nav.grow.media.label': 'Medios',
    'nav.grow.media.desc':
      'Compra de medios de marca y de rendimiento en todas las plataformas chinas.',
    'nav.grow.kols.label': 'Influencia y KOL',
    'nav.grow.kols.desc': 'Selección de KOL y activaciones pagadas en Douyin, RED y WeChat.',

    'nav.learn.platforms.label': 'Plataformas',
    'nav.learn.platforms.desc':
      'Tmall, JD, Douyin, WeChat, RED, Pinduoduo. Cómo funciona cada una y a quién va dirigida.',
    'nav.learn.masterclass.label': 'Masterclass',
    'nav.learn.masterclass.desc':
      'Talleres breves impartidos por profesionales que operan China a diario.',
    'nav.learn.expeditions.label': 'Inmersión China',
    'nav.learn.expeditions.desc':
      'Shanghái, Shenzhen, Hangzhou: leer el mercado desde el propio terreno.',
    'nav.learn.insights.label': 'Análisis',
    'nav.learn.insights.desc': 'Artículos, informes y análisis escritos desde el terreno chino.',

    'nav.feature.beyondcompass.desc':
      'Nuestra base de distribuidores, socios Tmall y operadores de canal. Cada perfil verificado uno a uno.',
    'nav.feature.chinawebfoundry.desc': 'Sitios web pensados en Shanghái para el internet chino.',
    'nav.feature.hubstudio.desc': 'Estudio creativo y de producción, con sede en China.',


    // WO-1.1
    'nav.talkToUs': 'Hablemos',
    'nav.cta.sell': 'Todo lo que gestionamos por usted en China',
    'nav.cta.learn': 'Todos los programas y análisis',
    'nav.section.find': 'Encontrar un socio',
    'nav.section.sell': 'Vender en China',
    'nav.section.web': 'Web y redes sociales',

    'nav.find.intro':
      'El distribuidor adecuado, el operador de plataforma adecuado. Elegidos entre empresas que hemos visitado en persona.',
    'nav.sell.intro':
      'Tiendas, campañas y medios. Un mismo equipo gestiona sus ventas en Tmall, JD, Douyin y WeChat.',
    'nav.web.intro':
      'Su web, sus cuentas, sus contenidos. Los llevan dos equipos del grupo en Shanghái.',

    'nav.find.compass.label': 'Compass, la base de socios',
    'nav.find.compass.desc':
      'Distribuidores, TP de Tmall y socios de Douyin verificados, uno a uno y en persona.',
    'nav.find.shortlist.label': 'Cómo se arma una lista corta',
    'nav.find.shortlist.desc':
      'Del primer briefing a la presentación, en semanas y no en un trimestre.',

    'nav.sell.tmalljd.label': 'Operación de Tmall y JD',
    'nav.sell.tmalljd.desc':
      'Gestionamos sus tiendas de Tmall Global y JD Worldwide de principio a fin.',
    'nav.sell.campaigns.label': 'Campañas y medios',
    'nav.sell.campaigns.desc':
      '618, Doble 11, Año Nuevo chino, y la compra de medios que alimenta la tienda.',

    'nav.web.website.label': 'Web, WeChat y mini programa',
    'nav.web.website.desc':
      'Baidu, licencia ICP y las cinco brechas que dejan invisible a una web extranjera.',
    'nav.web.social.label': 'Redes sociales chinas',
    'nav.web.social.desc': 'WeChat, RedNote, Douyin y Weibo. Para qué sirve realmente cada una.',
    'nav.web.production.label': 'Producción de contenidos',
    'nav.web.production.desc': 'hubStudio, la productora creativa del grupo.',

    'footer.col.find': 'Encontrar un socio',
    'footer.col.sell': 'Vender en China',
    'footer.col.web': 'Web y redes sociales',
    'footer.partners': 'Ser socio de Compass',
    'footer.signin': 'Acceso de socios',


    // Mega panel
    'nav.sell.title': 'Sus tiendas, en manos de quienes las abrieron.',
    'nav.web.title': 'Dos equipos, una misma planta, en Shanghai.',
    'nav.find.title': 'La lista corta sale de gente que hemos visitado.',
    'nav.learn.title': 'Leer el mercado antes de apostar por él.',

    'nav.feature.platforms.label': 'Dónde operamos',
    'nav.feature.platforms.note':
      'Tiendas, comercio de contenido y livestream, en las plataformas que mueven el volumen.',
    'nav.feature.teams.label': 'Quién lo ejecuta',
    'nav.feature.cwf.line':
      'ChinaWebFoundry, nuestro equipo web en Shanghai. Baidu, licencia ICP, WeChat y mini programas.',
    'nav.feature.trs.line':
      'TheRedScroll, nuestra agencia social. Contenido diario, comunidad y KOL, en chino.',
    'nav.feature.compass.label': 'Compass',
    'nav.feature.compass.title': 'Una base de datos, no otro directorio',
    'nav.feature.compass.line':
      'Quince años de reuniones con distribuidores, anotadas y mantenidas al día.',
    'nav.feature.compass.cta': 'Ver cómo funciona',
    'nav.feature.compass.alt':
      'Dos responsables recorren un almacén de distribución en Shanghai mientras conversan',
    'nav.feature.learn.label': 'Masterclass',
    'nav.feature.learn.title': 'Impartida por gente que opera China a diario',
    'nav.feature.learn.line': 'Una sesión de trabajo, no una conferencia. Casos recientes, cifras reales.',
    'nav.feature.learn.cta': 'Ver el programa',
    'nav.feature.learn.alt': 'Una masterclass en curso, la sala orientada hacia el ponente',


    'footer.call.eyebrow': 'Siguiente paso',
    'footer.call.title': 'Cuéntenos dónde está y adónde quiere llegar.',
    'footer.call.note':
      'Un socio le responde personalmente en un día hábil. No un acuse de recibo automático.',

    // Language switcher
    'lang.switch.aria': 'Cambiar de idioma',
    'lang.current': 'Idioma',

    // Footer
    'footer.aria.brand': 'Inicio TheChinaPath',
    'footer.pitch':
      'Implantarse en China, crecer en China, entender China. Quince años de operaciones desde el terreno.',
    'footer.cities': 'Shanghái · Hong Kong · París',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath en LinkedIn',
    'footer.col.enter': 'Entrar en China',
    'footer.col.grow': 'Crecer en China',
    'footer.col.learn': 'Conocer China',
    'footer.col.company': 'El grupo',
    'footer.col.tools': 'Herramientas gratuitas',
    'work.strip.eyebrow': 'Proyectos',
    'work.strip.title': 'Marcas para las que ya lo hemos hecho',
    'work.strip.all': 'Ver todos los casos',
    'footer.tools.douyin': 'Calculadora de costes Douyin',
    'footer.tools.tmall': 'Tmall Global: apertura y gestión',
    'footer.tools.jd': 'JD Worldwide: apertura y gestión',
    'footer.network.label': 'Parte del grupo',
    'footer.network.aria': 'Nuestra red',
    'footer.parent.eyebrow': 'Grupo matriz',
    'footer.parent.name': 'TheChinaPath',
    'footer.parent.desc': 'La entidad que reúne a nuestras agencias especializadas en China.',
    'footer.parent.cta': 'Descubrir',
    'footer.copyright': '© TheChinaPath {year}. Todos los derechos reservados.',
    'footer.legal.terms': 'Condiciones de uso',
    'footer.legal.privacy': 'Política de privacidad',
    'footer.legal.cookie': 'Política de cookies',

    // Footer network descriptions
    'footer.net.nuvora.desc':
      'Presencia en LinkedIn gestionada cada día. Producción editorial, campañas pagadas y trabajo de imagen para directivos.',
    'footer.net.chinawebfoundry.desc':
      'Sitios web concebidos para el internet chino. ICP, posicionamiento en Baidu, alojamiento local.',
    'footer.net.beyondcompass.desc':
      'Distribuidores y socios Tmall cualificados, seleccionados uno a uno según su categoría.',
    'footer.net.redscroll.desc':
      'WeChat, Douyin, RedNote, Weibo: operación diaria a cargo de nuestros equipos en Shanghái.',
    'footer.net.hubstudio.desc': 'Estudio creativo y de producción, con sede en China.',
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
