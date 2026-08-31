/**
 * SEO and structured-data helpers shared across layouts and pages.
 *
 * Conventions:
 *  - All schema entities use stable @id URIs anchored on the canonical site,
 *    so they can be cross-referenced from any page (publisher, author, etc.).
 *  - Date inputs accept Date or ISO string; output is always ISO 8601.
 *  - The Organization, WebSite, and Person entries are the spine of the graph;
 *    everything else references them by @id rather than inlining.
 */

export const SITE_URL = 'https://www.thechinapath.com';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ABOUT_PAGE_ID = `${SITE_URL}/about#webpage`;

export const PERSON_IDS = {
  cyril: `${SITE_URL}/about#cyril-drouin`,
  echo: `${SITE_URL}/about#echo-peng`,
  liyan: `${SITE_URL}/about#liyan-ye`,
} as const;

type SchemaObject = Record<string, unknown>;

function toIso(d?: Date | string): string | undefined {
  if (!d) return undefined;
  if (typeof d === 'string') return new Date(d).toISOString();
  return d.toISOString();
}

/**
 * Stable @id anchors for the three offices. Referenced from the
 * Organization graph via `subOrganization` so AI search and rich-result
 * pipelines see each location as its own LocalBusiness entity.
 *
 * Street addresses and geo coordinates are populated when finalised. The
 * fields below carry locality + country at minimum, which is enough to
 * resolve the entity in Google Knowledge Graph and Bing Copilot.
 */
export const OFFICE_IDS = {
  shanghai: `${SITE_URL}/#office-shanghai`,
  hongkong: `${SITE_URL}/#office-hongkong`,
  paris: `${SITE_URL}/#office-paris`,
} as const;

export function localBusinessSchemas(): SchemaObject[] {
  return [
    {
      '@type': ['LocalBusiness', 'MarketingAgency'],
      '@id': OFFICE_IDS.shanghai,
      name: 'TheChinaPath, Shanghai',
      parentOrganization: { '@id': ORG_ID },
      url: `${SITE_URL}/contact`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shanghai',
        addressRegion: 'Shanghai',
        addressCountry: 'CN',
      },
      areaServed: { '@type': 'Country', name: 'China' },
      availableLanguage: ['English', 'French'],
    },
    {
      '@type': ['LocalBusiness', 'MarketingAgency'],
      '@id': OFFICE_IDS.hongkong,
      name: 'TheChinaPath, Hong Kong',
      parentOrganization: { '@id': ORG_ID },
      url: `${SITE_URL}/contact`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hong Kong',
        addressCountry: 'HK',
      },
      areaServed: { '@type': 'Country', name: 'Hong Kong' },
      availableLanguage: ['English', 'French'],
    },
    {
      '@type': ['LocalBusiness', 'MarketingAgency'],
      '@id': OFFICE_IDS.paris,
      name: 'TheChinaPath, Paris',
      parentOrganization: { '@id': ORG_ID },
      url: `${SITE_URL}/contact`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      availableLanguage: ['English', 'French'],
    },
  ];
}

export function organizationSchema(): SchemaObject {
  return {
    '@type': ['Organization', 'MarketingAgency'],
    '@id': ORG_ID,
    name: 'TheChinaPath',
    // Old names kept as alternates so Google links the rebrand to the
    // existing entity and transfers its history.
    alternateName: ['The China Path', 'TheChinaPath', 'TheChinaPath'],
    url: SITE_URL,
    foundingDate: '2023',
    foundingLocation: { '@type': 'Place', name: 'Shanghai, China' },
    founder: {
      '@type': 'Person',
      '@id': PERSON_IDS.cyril,
      name: 'Cyril Drouin',
    },
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/Images/thechinapath-horizontal-light.png`,
      width: 1205,
      height: 518,
    },
    description:
      'B2B marketing and eCommerce agency helping global brands enter, grow, and win in China. Offices in Shanghai, Hong Kong, and Paris. Founded by Cyril Drouin, former CEO of Publicis Commerce and Performance Marketing for China and North Asia.',
    knowsAbout: [
      'China market entry',
      'Cross-border eCommerce',
      'Tmall Global',
      'JD Worldwide',
      'Douyin',
      'WeChat marketing',
      'Xiaohongshu',
      'Livestream commerce',
      'KOL marketing in China',
      'China brand localisation',
      'Baidu SEO',
      'ICP licensing',
    ],
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Shanghai', addressCountry: 'CN' },
      { '@type': 'PostalAddress', addressLocality: 'Hong Kong', addressCountry: 'HK' },
      { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
    ],
    location: [
      { '@id': OFFICE_IDS.shanghai },
      { '@id': OFFICE_IDS.hongkong },
      { '@id': OFFICE_IDS.paris },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${SITE_URL}/contact`,
      areaServed: ['CN', 'HK', 'FR', 'GB', 'US', 'DE', 'AU', 'ES'],
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      'https://www.linkedin.com/company/thechinapath/',
      'https://cyrildrouin.substack.com',
    ],
    subOrganization: [
      { '@type': 'Organization', name: 'Hub Studio', url: 'https://hubstudio.ai' },
      { '@type': 'Organization', name: 'ChinaWebFoundry', url: 'https://chinawebfoundry.com' },
      { '@type': 'Organization', name: 'NuvoraStudio', url: 'https://nuvora.studio' },
      { '@type': 'Organization', name: 'The Red Scroll', url: 'https://theredscroll.com' },
    ],
  };
}

export function websiteSchema(): SchemaObject {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'TheChinaPath',
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'fr', 'de', 'es'],
  };
}

export interface PersonInput {
  id: string;
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[];
  workLocations?: string[];
}

export function personSchema(p: PersonInput): SchemaObject {
  return {
    '@type': 'Person',
    '@id': p.id,
    name: p.name,
    jobTitle: p.jobTitle,
    ...(p.description ? { description: p.description } : {}),
    worksFor: { '@id': ORG_ID },
    ...(p.workLocations && p.workLocations.length
      ? {
          workLocation: p.workLocations.map((loc) => ({ '@type': 'Place', name: loc })),
        }
      : {}),
    ...(p.sameAs && p.sameAs.length ? { sameAs: p.sameAs } : {}),
    ...(p.image ? { image: p.image.startsWith('http') ? p.image : SITE_URL + p.image } : {}),
  };
}

/**
 * Resolve an author string (from content frontmatter) to a schema object.
 * Known team members map to a full Person reference with sameAs LinkedIn (and
 * other profile links where applicable) so AI search engines can disambiguate
 * the entity. Anything else falls back to the Organization, which is valid
 * Schema.org but a weaker E-E-A-T signal.
 */
export function resolveAuthor(name: string): SchemaObject {
  switch (name) {
    case 'Cyril Drouin':
      return {
        '@type': 'Person',
        '@id': PERSON_IDS.cyril,
        name: 'Cyril Drouin',
        url: `${SITE_URL}/about#cyril-drouin`,
        sameAs: [
          'https://www.linkedin.com/in/cyril-d-68835729/',
          'https://twitter.com/CyrilDrouin',
          'https://cyrildrouin.substack.com',
        ],
      };
    case 'Echo Peng':
      return {
        '@type': 'Person',
        '@id': PERSON_IDS.echo,
        name: 'Echo Peng',
        url: `${SITE_URL}/about#echo-peng`,
        sameAs: ['https://www.linkedin.com/in/echo-peng-aa241751/'],
      };
    case 'Liyan Ye':
      return {
        '@type': 'Person',
        '@id': PERSON_IDS.liyan,
        name: 'Liyan Ye',
        url: `${SITE_URL}/about#liyan-ye`,
        sameAs: ['https://www.linkedin.com/in/liyanye/'],
      };
    default:
      return { '@id': ORG_ID };
  }
}

export interface ArticleInput {
  url: string;
  title: string;
  description: string;
  image?: string;
  pubDate?: Date | string;
  updatedDate?: Date | string;
  author: string;
  inLanguage: 'en' | 'fr' | 'de' | 'es';
  category?: string;
  breadcrumb?: BreadcrumbItem[];
}

export function articleSchema(a: ArticleInput): SchemaObject {
  const absoluteUrl = a.url.startsWith('http') ? a.url : SITE_URL + a.url;
  const absoluteImage = a.image
    ? a.image.startsWith('http')
      ? a.image
      : SITE_URL + a.image
    : undefined;
  const published = toIso(a.pubDate);
  const modified = toIso(a.updatedDate) ?? published;
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl}#article`,
    headline: a.title,
    description: a.description,
    url: absoluteUrl,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    ...(absoluteImage
      ? { image: { '@type': 'ImageObject', url: absoluteImage, width: 1200, height: 675 } }
      : {}),
    author: resolveAuthor(a.author),
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: a.inLanguage,
    ...(a.category ? { about: { '@type': 'Thing', name: a.category } } : {}),
    ...(a.breadcrumb ? { breadcrumb: breadcrumbList(a.breadcrumb) } : {}),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbList(items: BreadcrumbItem[]): SchemaObject {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : SITE_URL + item.url,
    })),
  };
}

export interface ServiceInput {
  url: string;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
  inLanguage: 'en' | 'fr' | 'de' | 'es';
  breadcrumb?: BreadcrumbItem[];
}

/**
 * Per-path service metadata. Keyed by canonical English path. Each entry
 * defines the Schema.org `Service` payload for both the EN and FR twin (the
 * FR title/description come from the same source unless overridden per-page).
 * Adding a new service page means: ship the .astro file, add an entry here,
 * and pass `getServicePageSchema(currentPath, locale)` into Layout's schema
 * prop. No per-page schema construction code required.
 */
type ServiceLocaleCopy = { name: string; description: string };
type ServicePageEntry = {
  serviceType: string;
  areaServed?: string;
  en: ServiceLocaleCopy;
  fr: ServiceLocaleCopy;
  de?: ServiceLocaleCopy;
  es?: ServiceLocaleCopy;
};

const SERVICE_PAGE_DATA: Record<string, ServicePageEntry> = {
  '/enter-china/market-entry-consulting': {
    serviceType: 'Market Entry Consulting',
    areaServed: 'China',
    en: {
      name: 'China Market Entry Consulting',
      description:
        'Strategic consulting covering channel selection, business model design, distributor mapping, and regulatory setup for foreign brands entering China.',
    },
    fr: {
      name: 'Conseil en entrée de marché Chine',
      description:
        "Conseil stratégique couvrant le choix des canaux, le modèle économique, la cartographie des distributeurs et la conformité réglementaire pour les marques étrangères qui s'implantent en Chine.",
    },
    de: {
      name: 'Markteintrittsberatung China',
      description:
        'Strategische Beratung zu Kanalwahl, Geschäftsmodell, Vertriebspartner-Kartierung und regulatorischer Einrichtung für ausländische Marken, die in China starten.',
    },
    es: {
      name: 'Consultoría de estrategia de entrada en China',
      description:
        'Consultoría estratégica sobre selección de canales, modelo de negocio, mapeo de distribuidores y cumplimiento normativo para marcas extranjeras que se implantan en China.',
    },
  },
  '/enter-china/cross-border-setup': {
    serviceType: 'Cross-Border eCommerce Setup',
    areaServed: 'China',
    en: {
      name: 'Cross-Border eCommerce Setup',
      description:
        'End-to-end setup of Tmall Global or JD Worldwide storefronts, including bonded warehouse, customs clearance, and platform compliance. No Chinese entity required.',
    },
    fr: {
      name: 'Lancement cross-border eCommerce',
      description:
        'Mise en place complète de boutiques Tmall Global ou JD Worldwide : entrepôt sous douane, dédouanement et conformité plateforme. Sans entité chinoise.',
    },
    de: {
      name: 'Cross-Border-eCommerce-Aufbau',
      description:
        'Schlüsselfertiger Aufbau von Tmall-Global- oder JD-Worldwide-Shops: Zolllager, Verzollung und Plattform-Compliance. Ohne Gründung einer chinesischen Gesellschaft.',
    },
    es: {
      name: 'Lanzamiento Cross-Border eCommerce',
      description:
        'Apertura llave en mano de tiendas Tmall Global o JD Worldwide: depósito aduanero, despacho de aduana y cumplimiento de la plataforma. Sin necesidad de entidad china.',
    },
  },
  '/enter-china/distribution': {
    serviceType: 'Distribution Services',
    areaServed: 'China',
    en: {
      name: 'China Distribution',
      description:
        'B2B and DTC distribution in China. We source and vet distributors by category and region, or act as the distributor directly.',
    },
    fr: {
      name: 'Distribution en Chine',
      description:
        'Distribution B2B et DTC en Chine. Nous sourçons et qualifions les distributeurs par catégorie et région, ou prenons directement le rôle de distributeur.',
    },
    de: {
      name: 'Vertrieb in China',
      description:
        'B2B- und DTC-Vertrieb in China. Wir identifizieren und prüfen Vertriebspartner nach Kategorie und Region, oder übernehmen den Vertrieb selbst.',
    },
    es: {
      name: 'Distribución en China',
      description:
        'Distribución B2B y DTC en China. Identificamos y cualificamos a los distribuidores por categoría y región, o asumimos directamente el papel de distribuidor.',
    },
  },
  '/enter-china/branding-localisation': {
    serviceType: 'Brand Localisation',
    areaServed: 'China',
    en: {
      name: 'Branding and Localisation for China',
      description:
        'Chinese brand naming, visual identity adaptation, packaging, and tone of voice for the Chinese market.',
    },
    fr: {
      name: 'Marque et localisation pour la Chine',
      description:
        "Nom chinois, adaptation de l'identité visuelle, packaging et ton pour le marché chinois.",
    },
    de: {
      name: 'Marke und Lokalisierung für China',
      description:
        'Chinesischer Markenname, Anpassung der visuellen Identität, Verpackung und Tonalität für den chinesischen Markt.',
    },
    es: {
      name: 'Marca y localización para China',
      description:
        'Nombre chino, adaptación de la identidad visual, packaging y tono de voz pensados para el consumidor chino.',
    },
  },
  '/grow-in-china/cross-border-ecommerce': {
    serviceType: 'eCommerce Operations',
    areaServed: 'China',
    en: {
      name: 'Cross-Border eCommerce Operations',
      description:
        'Day-to-day operations of Tmall Global and JD Worldwide stores: listings, content, customer service, media buying, livestream, and reporting.',
    },
    fr: {
      name: 'Opérations eCommerce transfrontalier',
      description:
        'Pilotage quotidien des boutiques Tmall Global et JD Worldwide : fiches produits, contenus, service client, achat média, livestream et reporting.',
    },
    de: {
      name: 'Cross-Border-eCommerce-Betrieb',
      description:
        'Tägliche Steuerung der Tmall-Global- und JD-Worldwide-Shops: Produktseiten, Inhalte, Kundenservice, Media-Einkauf, Livestream und Reporting.',
    },
    es: {
      name: 'Operaciones eCommerce transfronterizo',
      description:
        'Operación diaria de las tiendas Tmall Global y JD Worldwide: fichas de producto, contenidos, atención al cliente, compra de medios, livestream y reporting.',
    },
  },
  '/grow-in-china/social-commerce': {
    serviceType: 'Social Commerce',
    areaServed: 'China',
    en: {
      name: 'Social Commerce on Douyin, WeChat and RED',
      description:
        'Livestream selling, KOL partnerships, and in-app shop management on Douyin, WeChat, and Xiaohongshu (RED). DP and Distributor commercial models available.',
    },
    fr: {
      name: 'Social commerce sur Douyin, WeChat et RED',
      description:
        'Livestream commercial, partenariats KOL et pilotage des boutiques in-app sur Douyin, WeChat et Xiaohongshu (RED). Modèles DP et Distributeur disponibles.',
    },
    de: {
      name: 'Social Commerce auf Douyin, WeChat und RED',
      description:
        'Livestream-Verkauf, KOL-Partnerschaften und Steuerung der In-App-Shops auf Douyin, WeChat und Xiaohongshu (RED). DP- und Distributor-Modelle verfügbar.',
    },
    es: {
      name: 'Social Commerce en Douyin, WeChat y RED',
      description:
        'Venta en livestream, acuerdos con KOL y gestión de tiendas in-app en Douyin, WeChat y Xiaohongshu (RED). Modelos comerciales DP y Distribuidor disponibles.',
    },
  },
  '/grow-in-china/campaigns': {
    serviceType: 'Campaign Management',
    areaServed: 'China',
    en: {
      name: 'China Shopping Festival Campaigns',
      description:
        "Campaign planning and execution for China's major shopping festivals: 618, Double 11, and Chinese New Year. Strategy, KOL, paid media, creative, and reporting.",
    },
    fr: {
      name: 'Campagnes festivals e-commerce Chine',
      description:
        'Stratégie et exécution des campagnes pour les grands rendez-vous chinois : 618, Double 11, Nouvel An chinois. Plan KOL, achat média, création et reporting.',
    },
    de: {
      name: 'Kampagnen für die grossen E-Commerce-Festivals in China',
      description:
        'Planung und Umsetzung von Kampagnen für die grossen chinesischen Shopping-Termine: 618, Double 11 und Chinesisches Neujahr. Strategie, KOL, Media-Einkauf, Kreation und Reporting.',
    },
    es: {
      name: 'Campañas para los grandes festivales del eCommerce chino',
      description:
        'Planificación y ejecución de campañas para las grandes citas del eCommerce chino: 618, Double 11 y Año Nuevo Chino. Estrategia, KOL, compra de medios, creatividad y reporting.',
    },
  },
  '/grow-in-china/media': {
    serviceType: 'Paid Media',
    areaServed: 'China',
    en: {
      name: 'Paid Media on Chinese Platforms',
      description:
        'Performance and brand media buying on Tencent, ByteDance, Alibaba and Xiaohongshu platforms, with reporting your team can actually read.',
    },
    fr: {
      name: 'Achat média sur les plateformes chinoises',
      description:
        'Achat média performance et marque sur les plateformes Tencent, ByteDance, Alibaba et Xiaohongshu, avec un reporting lisible par vos équipes.',
    },
    de: {
      name: 'Media-Einkauf auf chinesischen Plattformen',
      description:
        'Performance- und Marken-Media-Einkauf auf den Plattformen von Tencent, ByteDance, Alibaba und Xiaohongshu. Mit Reportings, die Ihr Team auch wirklich lesen kann.',
    },
    es: {
      name: 'Compra de medios en las plataformas chinas',
      description:
        'Compra de medios de rendimiento y de marca en las plataformas de Tencent, ByteDance, Alibaba y Xiaohongshu, con un reporting que su equipo puede leer de verdad.',
    },
  },
  '/grow-in-china/influencers-kols': {
    serviceType: 'Influencer Marketing',
    areaServed: 'China',
    en: {
      name: 'KOL and Influencer Marketing in China',
      description:
        'KOL and KOC casting, briefing, paid drops, and performance reporting from our proprietary China influencer database.',
    },
    fr: {
      name: 'Marketing KOL et influence en Chine',
      description:
        'Casting KOL et KOC, briefs, opérations payées et reporting performance, depuis notre base influence Chine en propre.',
    },
    de: {
      name: 'Influencer- und KOL-Marketing in China',
      description:
        'KOL- und KOC-Casting, Briefings, bezahlte Aktivierungen und Performance-Reporting aus unserer eigenen China-Influencer-Datenbank.',
    },
    es: {
      name: 'Marketing de influencia y KOL en China',
      description:
        'Casting de KOL y KOC, briefings, activaciones pagadas y reporting de rendimiento desde nuestra base propia de influencia en China.',
    },
  },
  '/grow-in-china/production-studio': {
    serviceType: 'Content Production',
    areaServed: 'China',
    en: {
      name: 'Content Production Studio (Hub Studio)',
      description:
        'In-China content production: photo, film, livestream rooms, packaging, OOH, and AI-generated content. Crews in Shanghai, Shenzhen, Changsha and Hangzhou.',
    },
    fr: {
      name: 'Studio de production de contenu (Hub Studio)',
      description:
        'Production de contenu en Chine : photo, film, plateaux livestream, packaging, OOH et AIGC. Équipes à Shanghai, Shenzhen, Changsha et Hangzhou.',
    },
    de: {
      name: 'Content-Produktionsstudio (Hub Studio)',
      description:
        'Content-Produktion vor Ort in China: Foto, Film, Livestream-Studios, Packaging, OOH und KI-generierte Inhalte. Teams in Shanghai, Shenzhen, Changsha und Hangzhou.',
    },
    es: {
      name: 'Estudio de producción de contenido (Hub Studio)',
      description:
        'Producción de contenido en China: foto, vídeo, platós de livestream, packaging, OOH y contenidos generados con IA. Equipos en Shanghái, Shenzhen, Changsha y Hangzhou.',
    },
  },
  '/grow-in-china/website': {
    serviceType: 'Web Development',
    areaServed: 'China',
    en: {
      name: 'China Website Build and Hosting',
      description:
        'Websites built for the Chinese internet: ICP licensing, in-country hosting, Baidu SEO, and integration with WeChat mini-programs.',
    },
    fr: {
      name: 'Création et hébergement de sites web en Chine',
      description:
        "Sites web pensés pour l'internet chinois : licence ICP, hébergement local, SEO Baidu et intégration aux mini-programmes WeChat.",
    },
    de: {
      name: 'Website-Aufbau und Hosting in China',
      description:
        'Websites, gebaut für das chinesische Internet: ICP-Lizenz, lokales Hosting, Baidu-SEO und Anbindung an WeChat-Mini-Programme.',
    },
    es: {
      name: 'Creación y alojamiento de sitios web en China',
      description:
        'Sitios web concebidos para el internet chino: licencia ICP, alojamiento local, posicionamiento en Baidu e integración con mini-programas de WeChat.',
    },
  },
  '/learn-china/platforms': {
    serviceType: 'Platform Education',
    areaServed: 'China',
    en: {
      name: 'China Platforms Tour',
      description:
        'Platform-by-platform briefings on Tmall, JD, Douyin, WeChat, RED and Pinduoduo. How each one works, who it is for, and where the budget belongs.',
    },
    fr: {
      name: 'Panorama des plateformes chinoises',
      description:
        'Briefings plateforme par plateforme sur Tmall, JD, Douyin, WeChat, RED et Pinduoduo. Comment chacune fonctionne, à qui elle parle, et où placer le budget.',
    },
    de: {
      name: 'Überblick über die chinesischen Plattformen',
      description:
        'Plattform für Plattform: Tmall, JD, Douyin, WeChat, RED und Pinduoduo. Wie jede funktioniert, an wen sie sich richtet und wo das Budget hingehört.',
    },
    es: {
      name: 'Panorama de las plataformas chinas',
      description:
        'Sesiones plataforma a plataforma sobre Tmall, JD, Douyin, WeChat, RED y Pinduoduo. Cómo funciona cada una, a quién va dirigida y dónde colocar el presupuesto.',
    },
  },
  '/learn-china/masterclass': {
    serviceType: 'Executive Training',
    areaServed: 'China',
    en: {
      name: 'China Marketing Masterclass',
      description:
        'Half-day workshops led by senior operators on China commerce, content, KOL strategy, and AIGC. Built around live case studies from the market.',
    },
    fr: {
      name: 'Masterclass marketing Chine',
      description:
        "Ateliers d'une demi-journée animés par des opérateurs seniors : commerce, contenu, stratégie KOL et AIGC en Chine. Construits autour d'études de cas issues du marché.",
    },
    de: {
      name: 'Masterclass China-Marketing',
      description:
        'Halbtägige Workshops, geleitet von erfahrenen Operatoren: Handel, Content, KOL-Strategie und KI-Inhalte in China. Aufgebaut um aktuelle Fallstudien aus dem Markt.',
    },
    es: {
      name: 'Masterclass de marketing en China',
      description:
        'Talleres de media jornada impartidos por operadores sénior: comercio, contenido, estrategia KOL y contenidos generados con IA en China. Apoyados en casos reales del mercado.',
    },
  },
  '/learn-china/learning-expeditions': {
    serviceType: 'On-Site Programmes',
    areaServed: 'China',
    en: {
      name: 'China Learning Expeditions',
      description:
        'On-the-ground programmes in Shanghai, Shenzhen and beyond. Bring your team, walk the market, meet platform partners and operators.',
    },
    fr: {
      name: 'Expéditions terrain en Chine',
      description:
        'Programmes immersifs à Shanghai, Shenzhen et au-delà. Sur le terrain avec vos équipes, au contact des plateformes, des opérateurs et des distributeurs.',
    },
    de: {
      name: 'China-Studienreisen',
      description:
        'Programme vor Ort in Shanghai, Shenzhen und darüber hinaus. Im Markt mit Ihrem Team, im direkten Austausch mit Plattformen, Operatoren und Vertriebspartnern.',
    },
    es: {
      name: 'Programas de inmersión en China',
      description:
        'Programas sobre el terreno en Shanghái, Shenzhen y más allá. Visita del mercado con su equipo, encuentros con plataformas, operadores y distribuidores.',
    },
  },
};

/** Forward EN path -> per-locale absolute path prefix (within site root). */
const SERVICE_PATH_BY_LOCALE: Record<'fr' | 'de' | 'es', Record<string, string>> = {
  fr: {
    '/enter-china/market-entry-consulting': '/fr/entrer-en-chine/conseil-en-entree-de-marche',
    '/enter-china/cross-border-setup': '/fr/entrer-en-chine/lancement-cross-border',
    '/enter-china/distribution': '/fr/entrer-en-chine/distribution',
    '/enter-china/branding-localisation': '/fr/entrer-en-chine/marque-et-localisation',
    '/grow-in-china/cross-border-ecommerce': '/fr/se-developper-en-chine/ecommerce-transfrontalier',
    '/grow-in-china/social-commerce': '/fr/se-developper-en-chine/commerce-social',
    '/grow-in-china/campaigns': '/fr/se-developper-en-chine/campagnes',
    '/grow-in-china/media': '/fr/se-developper-en-chine/medias',
    '/grow-in-china/influencers-kols': '/fr/se-developper-en-chine/influence-et-kol',
    '/grow-in-china/production-studio': '/fr/se-developper-en-chine/studio-de-production',
    '/grow-in-china/website': '/fr/se-developper-en-chine/site-web',
    '/learn-china/platforms': '/fr/comprendre-la-chine/plateformes',
    '/learn-china/masterclass': '/fr/comprendre-la-chine/masterclass',
    '/learn-china/learning-expeditions': '/fr/comprendre-la-chine/expeditions-terrain',
  },
  de: {
    '/enter-china/market-entry-consulting': '/de/nach-china/markteintrittsberatung',
    '/enter-china/cross-border-setup': '/de/nach-china/cross-border-aufbau',
    '/enter-china/distribution': '/de/nach-china/vertrieb',
    '/enter-china/branding-localisation': '/de/nach-china/marke-und-lokalisierung',
    '/grow-in-china/cross-border-ecommerce': '/de/in-china-wachsen/cross-border-ecommerce',
    '/grow-in-china/social-commerce': '/de/in-china-wachsen/social-commerce',
    '/grow-in-china/campaigns': '/de/in-china-wachsen/kampagnen',
    '/grow-in-china/media': '/de/in-china-wachsen/media',
    '/grow-in-china/influencers-kols': '/de/in-china-wachsen/influencer-und-kol',
    '/grow-in-china/production-studio': '/de/in-china-wachsen/produktionsstudio',
    '/grow-in-china/website': '/de/in-china-wachsen/website',
    '/learn-china/platforms': '/de/china-verstehen/plattformen',
    '/learn-china/masterclass': '/de/china-verstehen/masterclass',
    '/learn-china/learning-expeditions': '/de/china-verstehen/studienreisen',
  },
  es: {
    '/enter-china/market-entry-consulting': '/es/entrar-en-china/estrategia-de-entrada',
    '/enter-china/cross-border-setup': '/es/entrar-en-china/lanzamiento-cross-border',
    '/enter-china/distribution': '/es/entrar-en-china/distribucion',
    '/enter-china/branding-localisation': '/es/entrar-en-china/marca-y-localizacion',
    '/grow-in-china/cross-border-ecommerce': '/es/crecer-en-china/ecommerce-transfronterizo',
    '/grow-in-china/social-commerce': '/es/crecer-en-china/comercio-social',
    '/grow-in-china/campaigns': '/es/crecer-en-china/campanas',
    '/grow-in-china/media': '/es/crecer-en-china/medios',
    '/grow-in-china/influencers-kols': '/es/crecer-en-china/influencia-y-kol',
    '/grow-in-china/production-studio': '/es/crecer-en-china/estudio-de-produccion',
    '/grow-in-china/website': '/es/crecer-en-china/sitio-web',
    '/learn-china/platforms': '/es/conocer-china/plataformas',
    '/learn-china/masterclass': '/es/conocer-china/masterclass',
    '/learn-china/learning-expeditions': '/es/conocer-china/inmersion-china',
  },
};

/**
 * Per-locale labels for the three top-level service hubs. Used by the
 * breadcrumb generator so a path like
 * `/grow-in-china/social-commerce` shows the right native parent name in
 * each locale.
 */
const HUB_LABELS: Record<
  'en' | 'fr' | 'de' | 'es',
  Record<'/enter-china' | '/grow-in-china' | '/learn-china', string>
> = {
  en: {
    '/enter-china': 'Enter China',
    '/grow-in-china': 'Grow in China',
    '/learn-china': 'Learn China',
  },
  fr: {
    '/enter-china': 'Entrer en Chine',
    '/grow-in-china': 'Se développer en Chine',
    '/learn-china': 'Comprendre la Chine',
  },
  de: {
    '/enter-china': 'Nach China',
    '/grow-in-china': 'In China wachsen',
    '/learn-china': 'China verstehen',
  },
  es: {
    '/enter-china': 'Entrar en China',
    '/grow-in-china': 'Crecer en China',
    '/learn-china': 'Conocer China',
  },
};

const HOME_LABELS: Record<'en' | 'fr' | 'de' | 'es', string> = {
  en: 'Home',
  fr: 'Accueil',
  de: 'Startseite',
  es: 'Inicio',
};

/** Resolve the locale-aware URL for a canonical English path. */
function localizeUrl(canonicalPath: string, inLanguage: 'en' | 'fr' | 'de' | 'es'): string {
  if (inLanguage === 'en') return SITE_URL + canonicalPath;
  const map = SERVICE_PATH_BY_LOCALE[inLanguage];
  return SITE_URL + (map[canonicalPath] ?? canonicalPath);
}

/**
 * Build a service-page breadcrumb (Home > Hub > Service) from the canonical
 * English path. Returns `undefined` for paths that do not nest under a known
 * hub, so callers can omit the breadcrumb on standalone pages.
 */
function serviceBreadcrumb(
  canonicalPath: string,
  inLanguage: 'en' | 'fr' | 'de' | 'es',
  serviceName: string,
): BreadcrumbItem[] | undefined {
  const hubs: ('/enter-china' | '/grow-in-china' | '/learn-china')[] = [
    '/enter-china',
    '/grow-in-china',
    '/learn-china',
  ];
  const hub = hubs.find((h) => canonicalPath.startsWith(`${h}/`));
  if (!hub) return undefined;
  const homeUrl = inLanguage === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${inLanguage}`;
  return [
    { name: HOME_LABELS[inLanguage], url: homeUrl },
    {
      name: HUB_LABELS[inLanguage][hub],
      url: localizeUrl(hub, inLanguage),
    },
    {
      name: serviceName,
      url: localizeUrl(canonicalPath, inLanguage),
    },
  ];
}

/**
 * Build the Service schema for a service page given the locale and path.
 * `path` is the canonical English path; the helper looks up the locale's
 * native URL when one exists. Returns `null` for paths that are not service
 * pages, so callers can fall through to the default Layout schema. Locales
 * without a translated name/description for a given entry fall back to
 * English copy on that field, which keeps the schema valid until the
 * editorial team ships the localised version.
 */
export function getServicePageSchema(
  canonicalPath: string,
  inLanguage: 'en' | 'fr' | 'de' | 'es',
): SchemaObject | null {
  const data = SERVICE_PAGE_DATA[canonicalPath];
  if (!data) return null;
  const url = localizeUrl(canonicalPath, inLanguage);
  const copy = (data[inLanguage] ?? data.en) as ServiceLocaleCopy;
  return serviceSchema({
    url,
    name: copy.name,
    description: copy.description,
    serviceType: data.serviceType,
    areaServed: data.areaServed,
    inLanguage,
    breadcrumb: serviceBreadcrumb(canonicalPath, inLanguage, copy.name),
  });
}

/**
 * Hub-page metadata for the three service hubs (`/enter-china`,
 * `/grow-in-china`, `/learn-china`). Returns a CollectionPage + BreadcrumbList
 * pair so AI search engines see the hub as its own entity with a clear
 * parent (the home page) and a clear set of child services. Returns `null`
 * for any other path.
 */
const HUB_DESCRIPTIONS: Record<
  '/enter-china' | '/grow-in-china' | '/learn-china',
  Record<'en' | 'fr' | 'de' | 'es', string>
> = {
  '/enter-china': {
    en: 'Market entry, cross-border eCommerce setup, distribution and brand localisation for foreign brands launching in China.',
    fr: 'Implantation en Chine : conseil en entrée de marché, lancement cross-border, distribution et localisation de marque pour les marques étrangères.',
    de: 'Markteintritt, Cross-Border-eCommerce-Aufbau, Vertrieb und Markenlokalisierung für ausländische Marken, die in China starten.',
    es: 'Entrada en el mercado chino: consultoría estratégica, lanzamiento cross-border, distribución y localización de marca para marcas extranjeras.',
  },
  '/grow-in-china': {
    en: 'eCommerce operations, social commerce, paid media, campaigns and content production for brands already selling in China.',
    fr: 'Opérations eCommerce, social commerce, achat média, campagnes et production de contenu pour les marques déjà présentes en Chine.',
    de: 'eCommerce-Betrieb, Social Commerce, Media-Einkauf, Kampagnen und Content-Produktion für Marken, die bereits in China verkaufen.',
    es: 'Operaciones eCommerce, social commerce, compra de medios, campañas y producción de contenido para marcas que ya venden en China.',
  },
  '/learn-china': {
    en: 'China platforms tour, marketing masterclasses and on-the-ground learning expeditions for international leadership teams.',
    fr: 'Panorama des plateformes chinoises, masterclass marketing et expéditions terrain pour les dirigeants internationaux.',
    de: 'Überblick über chinesische Plattformen, Marketing-Masterclasses und Studienreisen vor Ort für internationale Führungsteams.',
    es: 'Panorama de las plataformas chinas, masterclasses de marketing y programas de inmersión sobre el terreno para equipos directivos internacionales.',
  },
};

export function getServiceHubSchema(
  canonicalPath: string,
  inLanguage: 'en' | 'fr' | 'de' | 'es',
): SchemaObject[] | null {
  if (
    canonicalPath !== '/enter-china' &&
    canonicalPath !== '/grow-in-china' &&
    canonicalPath !== '/learn-china'
  ) {
    return null;
  }
  const url = localizeUrl(canonicalPath, inLanguage);
  const homeUrl = inLanguage === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${inLanguage}`;
  const name = HUB_LABELS[inLanguage][canonicalPath];
  return [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name,
      description: HUB_DESCRIPTIONS[canonicalPath][inLanguage],
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      inLanguage,
      breadcrumb: breadcrumbList([
        { name: HOME_LABELS[inLanguage], url: homeUrl },
        { name, url },
      ]),
    },
  ];
}

export function serviceSchema(s: ServiceInput): SchemaObject {
  const absoluteUrl = s.url.startsWith('http') ? s.url : SITE_URL + s.url;
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl}#service`,
    name: s.name,
    description: s.description,
    url: absoluteUrl,
    provider: { '@id': ORG_ID },
    ...(s.serviceType ? { serviceType: s.serviceType } : {}),
    ...(s.areaServed ? { areaServed: { '@type': 'Country', name: s.areaServed } } : {}),
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: s.inLanguage,
    ...(s.breadcrumb ? { breadcrumb: breadcrumbList(s.breadcrumb) } : {}),
  };
}

export interface CaseStudyInput {
  url: string;
  name: string;
  description: string;
  brand?: string;
  brandUrl?: string;
  image?: string;
  inLanguage: 'en' | 'fr' | 'de' | 'es';
  breadcrumb?: BreadcrumbItem[];
}

export function caseStudySchema(c: CaseStudyInput): SchemaObject {
  const absoluteUrl = c.url.startsWith('http') ? c.url : SITE_URL + c.url;
  const absoluteImage = c.image
    ? c.image.startsWith('http')
      ? c.image
      : SITE_URL + c.image
    : undefined;
  return {
    '@type': 'CreativeWork',
    '@id': `${absoluteUrl}#casestudy`,
    name: c.name,
    description: c.description,
    url: absoluteUrl,
    creator: { '@id': ORG_ID },
    ...(c.brand
      ? {
          about: {
            '@type': 'Brand',
            name: c.brand,
            ...(c.brandUrl ? { sameAs: c.brandUrl } : {}),
          },
        }
      : {}),
    ...(absoluteImage
      ? { image: { '@type': 'ImageObject', url: absoluteImage, width: 1200, height: 675 } }
      : {}),
    inLanguage: c.inLanguage,
    ...(c.breadcrumb ? { breadcrumb: breadcrumbList(c.breadcrumb) } : {}),
  };
}

const ABOUT_BY_LOCALE: Record<'en' | 'fr' | 'de' | 'es', { path: string; name: string }> = {
  en: { path: '/about', name: 'About TheChinaPath' },
  fr: { path: '/fr/qui-nous-sommes', name: 'Qui nous sommes' },
  de: { path: '/de/ueber-uns', name: 'Über uns' },
  es: { path: '/es/quienes-somos', name: 'Quiénes somos' },
};

export function aboutPageSchema(inLanguage: 'en' | 'fr' | 'de' | 'es'): SchemaObject {
  const entry = ABOUT_BY_LOCALE[inLanguage] ?? ABOUT_BY_LOCALE.en;
  const url = `${SITE_URL}${entry.path}`;
  return {
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: entry.name,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage,
  };
}

/**
 * Wrap any list of schema entities into a single @graph document for emission
 * as one <script type="application/ld+json"> block.
 */
export function schemaGraph(...entities: SchemaObject[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@graph': entities,
  };
}
