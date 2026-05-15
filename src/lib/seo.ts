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
 * Known team members map to a Person reference. Anything else falls back to
 * the Organization itself, which is valid Schema.org but signals weaker
 * E-E-A-T to AI search engines.
 */
export function resolveAuthor(name: string): SchemaObject {
  switch (name) {
    case 'Cyril Drouin':
      return { '@type': 'Person', '@id': PERSON_IDS.cyril, name: 'Cyril Drouin', url: `${SITE_URL}/about#cyril-drouin` };
    case 'Echo Peng':
      return { '@type': 'Person', '@id': PERSON_IDS.echo, name: 'Echo Peng', url: `${SITE_URL}/about#echo-peng` };
    case 'Liyan Ye':
      return { '@type': 'Person', '@id': PERSON_IDS.liyan, name: 'Liyan Ye', url: `${SITE_URL}/about#liyan-ye` };
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
