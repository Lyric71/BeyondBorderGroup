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

export const SITE_URL = 'https://www.beyondbordergroup.com';

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

export function organizationSchema(): SchemaObject {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Beyond Border Group',
    alternateName: 'BBG',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/Images/Logo-horizontal-light.svg`,
      width: 1448,
      height: 563,
    },
    description:
      'B2B marketing and eCommerce agency helping global brands enter, grow, and win in China. Offices in Shanghai, Hong Kong, and Paris.',
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Shanghai', addressCountry: 'CN' },
      { '@type': 'PostalAddress', addressLocality: 'Hong Kong', addressCountry: 'HK' },
      { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${SITE_URL}/contact`,
      areaServed: ['CN', 'HK', 'FR', 'GB', 'US', 'DE', 'AU'],
      availableLanguage: ['English', 'French', 'Chinese'],
    },
    sameAs: ['https://www.linkedin.com/company/beyondbordergroup/'],
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'BeyondCompass',
        url: 'https://beyondcompass.beyondbordergroup.com',
      },
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
    name: 'Beyond Border Group',
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'fr'],
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
  inLanguage: 'en' | 'fr';
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
  inLanguage: 'en' | 'fr';
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
const SERVICE_PAGE_DATA: Record<string, {
  enName: string;
  frName: string;
  enDescription: string;
  frDescription: string;
  serviceType: string;
  areaServed?: string;
}> = {
  '/enter-china/market-entry-consulting': {
    enName: 'China Market Entry Consulting',
    frName: 'Conseil en entrée de marché Chine',
    enDescription:
      "Strategic consulting covering channel selection, business model design, distributor mapping, and regulatory setup for foreign brands entering China.",
    frDescription:
      "Conseil stratégique couvrant le choix des canaux, le modèle économique, la cartographie des distributeurs et la conformité réglementaire pour les marques étrangères qui s'implantent en Chine.",
    serviceType: 'Market Entry Consulting',
    areaServed: 'China',
  },
  '/enter-china/cross-border-setup': {
    enName: 'Cross-Border eCommerce Setup',
    frName: 'Lancement cross-border eCommerce',
    enDescription:
      'End-to-end setup of Tmall Global or JD Worldwide storefronts, including bonded warehouse, customs clearance, and platform compliance. No Chinese entity required.',
    frDescription:
      "Mise en place complète de boutiques Tmall Global ou JD Worldwide : entrepôt sous douane, dédouanement et conformité plateforme. Sans entité chinoise.",
    serviceType: 'Cross-Border eCommerce Setup',
    areaServed: 'China',
  },
  '/enter-china/distribution': {
    enName: 'China Distribution',
    frName: 'Distribution en Chine',
    enDescription:
      'B2B and DTC distribution in China. We source and vet distributors by category and region, or act as the distributor directly.',
    frDescription:
      "Distribution B2B et DTC en Chine. Nous sourçons et qualifions les distributeurs par catégorie et région, ou prenons directement le rôle de distributeur.",
    serviceType: 'Distribution Services',
    areaServed: 'China',
  },
  '/enter-china/branding-localisation': {
    enName: 'Branding and Localisation for China',
    frName: 'Marque et localisation pour la Chine',
    enDescription:
      'Chinese brand naming, visual identity adaptation, packaging, and tone of voice for the Chinese market.',
    frDescription:
      "Nom chinois, adaptation de l'identité visuelle, packaging et ton pour le marché chinois.",
    serviceType: 'Brand Localisation',
    areaServed: 'China',
  },
  '/grow-in-china/cross-border-ecommerce': {
    enName: 'Cross-Border eCommerce Operations',
    frName: 'Opérations eCommerce transfrontalier',
    enDescription:
      'Day-to-day operations of Tmall Global and JD Worldwide stores: listings, content, customer service, media buying, livestream, and reporting.',
    frDescription:
      "Pilotage quotidien des boutiques Tmall Global et JD Worldwide : fiches produits, contenus, service client, achat média, livestream et reporting.",
    serviceType: 'eCommerce Operations',
    areaServed: 'China',
  },
  '/grow-in-china/social-commerce': {
    enName: 'Social Commerce on Douyin, WeChat and RED',
    frName: 'Social commerce sur Douyin, WeChat et RED',
    enDescription:
      'Livestream selling, KOL partnerships, and in-app shop management on Douyin, WeChat, and Xiaohongshu (RED). DP and Distributor commercial models available.',
    frDescription:
      "Livestream commercial, partenariats KOL et pilotage des boutiques in-app sur Douyin, WeChat et Xiaohongshu (RED). Modèles DP et Distributeur disponibles.",
    serviceType: 'Social Commerce',
    areaServed: 'China',
  },
  '/grow-in-china/campaigns': {
    enName: 'China Shopping Festival Campaigns',
    frName: 'Campagnes festivals e-commerce Chine',
    enDescription:
      "Campaign planning and execution for China's major shopping festivals: 618, Double 11, and Chinese New Year. Strategy, KOL, paid media, creative, and reporting.",
    frDescription:
      "Stratégie et exécution des campagnes pour les grands rendez-vous chinois : 618, Double 11, Nouvel An chinois. Plan KOL, achat média, création et reporting.",
    serviceType: 'Campaign Management',
    areaServed: 'China',
  },
  '/grow-in-china/media': {
    enName: 'Paid Media on Chinese Platforms',
    frName: 'Achat média sur les plateformes chinoises',
    enDescription:
      'Performance and brand media buying on Tencent, ByteDance, Alibaba and Xiaohongshu platforms, with reporting your team can actually read.',
    frDescription:
      "Achat média performance et marque sur les plateformes Tencent, ByteDance, Alibaba et Xiaohongshu, avec un reporting lisible par vos équipes.",
    serviceType: 'Paid Media',
    areaServed: 'China',
  },
  '/grow-in-china/influencers-kols': {
    enName: 'KOL and Influencer Marketing in China',
    frName: 'Marketing KOL et influence en Chine',
    enDescription:
      'KOL and KOC casting, briefing, paid drops, and performance reporting from our proprietary China influencer database.',
    frDescription:
      "Casting KOL et KOC, briefs, opérations payées et reporting performance, depuis notre base influence Chine en propre.",
    serviceType: 'Influencer Marketing',
    areaServed: 'China',
  },
  '/grow-in-china/production-studio': {
    enName: 'Content Production Studio (Hub Studio)',
    frName: 'Studio de production de contenu (Hub Studio)',
    enDescription:
      'In-China content production: photo, film, livestream rooms, packaging, OOH, and AI-generated content. Crews in Shanghai, Shenzhen, Changsha and Hangzhou.',
    frDescription:
      "Production de contenu en Chine : photo, film, plateaux livestream, packaging, OOH et AIGC. Équipes à Shanghai, Shenzhen, Changsha et Hangzhou.",
    serviceType: 'Content Production',
    areaServed: 'China',
  },
  '/grow-in-china/website': {
    enName: 'China Website Build and Hosting',
    frName: 'Création et hébergement de sites web en Chine',
    enDescription:
      'Websites built for the Chinese internet: ICP licensing, in-country hosting, Baidu SEO, and integration with WeChat mini-programs.',
    frDescription:
      "Sites web pensés pour l'internet chinois : licence ICP, hébergement local, SEO Baidu et intégration aux mini-programmes WeChat.",
    serviceType: 'Web Development',
    areaServed: 'China',
  },
  '/learn-china/platforms': {
    enName: 'China Platforms Tour',
    frName: 'Panorama des plateformes chinoises',
    enDescription:
      'Platform-by-platform briefings on Tmall, JD, Douyin, WeChat, RED and Pinduoduo. How each one works, who it is for, and where the budget belongs.',
    frDescription:
      "Briefings plateforme par plateforme sur Tmall, JD, Douyin, WeChat, RED et Pinduoduo. Comment chacune fonctionne, à qui elle parle, et où placer le budget.",
    serviceType: 'Platform Education',
    areaServed: 'China',
  },
  '/learn-china/masterclass': {
    enName: 'China Marketing Masterclass',
    frName: 'Masterclass marketing Chine',
    enDescription:
      'Half-day workshops led by senior operators on China commerce, content, KOL strategy, and AIGC. Built around live case studies from the market.',
    frDescription:
      "Ateliers d'une demi-journée animés par des opérateurs seniors : commerce, contenu, stratégie KOL et AIGC en Chine. Construits autour d'études de cas issues du marché.",
    serviceType: 'Executive Training',
    areaServed: 'China',
  },
  '/learn-china/learning-expeditions': {
    enName: 'China Learning Expeditions',
    frName: 'Expéditions terrain en Chine',
    enDescription:
      'On-the-ground programmes in Shanghai, Shenzhen and beyond. Bring your team, walk the market, meet platform partners and operators.',
    frDescription:
      "Programmes immersifs à Shanghai, Shenzhen et au-delà. Sur le terrain avec vos équipes, au contact des plateformes, des opérateurs et des distributeurs.",
    serviceType: 'On-Site Programmes',
    areaServed: 'China',
  },
};

/** Forward EN path -> FR path (mirror of the static map in localizePath). */
const SERVICE_PATH_TO_FR: Record<string, string> = {
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
};

/**
 * Build the Service schema for a service page given the locale and path.
 * `path` is the canonical English path; the helper handles FR by looking up
 * the FR mirror. Returns `null` for paths that are not service pages, so
 * callers can fall through to the default Layout schema.
 */
export function getServicePageSchema(canonicalPath: string, inLanguage: 'en' | 'fr'): SchemaObject | null {
  const data = SERVICE_PAGE_DATA[canonicalPath];
  if (!data) return null;
  const url = inLanguage === 'fr'
    ? SITE_URL + (SERVICE_PATH_TO_FR[canonicalPath] ?? canonicalPath)
    : SITE_URL + canonicalPath;
  return serviceSchema({
    url,
    name: inLanguage === 'fr' ? data.frName : data.enName,
    description: inLanguage === 'fr' ? data.frDescription : data.enDescription,
    serviceType: data.serviceType,
    areaServed: data.areaServed,
    inLanguage,
  });
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
  inLanguage: 'en' | 'fr';
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

export function aboutPageSchema(inLanguage: 'en' | 'fr'): SchemaObject {
  const url = inLanguage === 'fr' ? `${SITE_URL}/fr/qui-nous-sommes` : `${SITE_URL}/about`;
  return {
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: inLanguage === 'fr' ? 'Qui nous sommes' : 'About Beyond Border Group',
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
