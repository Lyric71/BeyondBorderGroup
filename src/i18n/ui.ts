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

    // Language switcher
    'lang.switch.aria': 'Change language',
    'lang.current': 'Language',

    // Footer
    'footer.aria.brand': 'TheChinaPath Home',
    'footer.pitch':
      'We help brands Enter China, Grow in China, and Learn China. 20 years of doing the work, not pitching it.',
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath on LinkedIn',
    'footer.col.enter': 'Enter China',
    'footer.col.grow': 'Grow in China',
    'footer.col.learn': 'Learn China',
    'footer.col.company': 'The Company',
    'footer.network.label': 'Our Network',
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

    // Language switcher
    'lang.switch.aria': 'Changer de langue',
    'lang.current': 'Langue',

    // Footer
    'footer.aria.brand': 'Accueil TheChinaPath',
    'footer.pitch':
      "S'implanter en Chine, s'y développer, la décrypter. Vingt années d'opérations conduites depuis le terrain.",
    'footer.cities': 'Shanghai · Hong Kong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath sur LinkedIn',
    'footer.col.enter': 'Entrer en Chine',
    'footer.col.grow': 'Se développer en Chine',
    'footer.col.learn': 'Comprendre la Chine',
    'footer.col.company': 'Le groupe',
    'footer.network.label': 'Notre réseau',
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

    // Language switcher
    'lang.switch.aria': 'Sprache wechseln',
    'lang.current': 'Sprache',

    // Footer
    'footer.aria.brand': 'TheChinaPath Startseite',
    'footer.pitch':
      'Nach China kommen, in China wachsen, China verstehen. Zwanzig Jahre operative Arbeit vor Ort, nicht aus dem Pitch-Deck.',
    'footer.cities': 'Shanghai · Hongkong · Paris',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath auf LinkedIn',
    'footer.col.enter': 'Nach China',
    'footer.col.grow': 'In China wachsen',
    'footer.col.learn': 'China verstehen',
    'footer.col.company': 'Die Gruppe',
    'footer.network.label': 'Unser Netzwerk',
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

    // Language switcher
    'lang.switch.aria': 'Cambiar de idioma',
    'lang.current': 'Idioma',

    // Footer
    'footer.aria.brand': 'Inicio TheChinaPath',
    'footer.pitch':
      'Implantarse en China, crecer en China, entender China. Veinte años de operaciones desde el terreno.',
    'footer.cities': 'Shanghái · Hong Kong · París',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.linkedinAria': 'TheChinaPath en LinkedIn',
    'footer.col.enter': 'Entrar en China',
    'footer.col.grow': 'Crecer en China',
    'footer.col.learn': 'Conocer China',
    'footer.col.company': 'El grupo',
    'footer.network.label': 'Nuestra red',
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
