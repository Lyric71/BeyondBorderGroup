import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const INSIGHT_CATEGORIES = [
  'Platforms',
  'E-Commerce',
  'KOLs & Livestream',
  'Brand & Localization',
  'AI & Innovation',
  'Market Strategy',
  'Compliance & Setup',
] as const;

export const INSIGHT_PLATFORMS = [
  'WeChat',
  'Douyin',
  'Tmall',
  'Taobao',
  'JD',
  'Xiaohongshu',
  'Weibo',
  'Kuaishou',
  'Alipay',
] as const;

// Shared base fields for insights. The only locale-specific field is
// `legacyUrl`: it preserves the old WordPress URL (always English) for
// documentation and to power the 301 redirect plan. Carrying it on FR
// frontmatter would point a French page at an English URL, which is
// confusing for future editors. EN-only.
const insightBaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('Beyond Border Group'),
  category: z.enum(INSIGHT_CATEGORIES),
  platforms: z.array(z.enum(INSIGHT_PLATFORMS)).default([]),
  tags: z.array(z.string()).default([]),
  /** Short bullet list rendered above the article body. AI engines extract these. */
  keyTakeaways: z.array(z.string()).default([]),
  heroImage: z.string(),
  heroImageAlt: z.string().default(''),
  draft: z.boolean().default(false),
});

const insightEnSchema = insightBaseSchema.extend({
  /** Original WordPress URL. Used only for documentation; redirects live in astro.config.mjs. */
  legacyUrl: z.string().optional(),
});

const insightFrSchema = insightBaseSchema;

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: insightEnSchema,
});

const insightsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-fr' }),
  schema: insightFrSchema,
});

const insightsDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-de' }),
  schema: insightFrSchema,
});

const insightsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-es' }),
  schema: insightFrSchema,
});

const caseBaseSchema = z.object({
  brand: z.string(),
  title: z.string(),
  summary: z.string(),
  category: z.enum([
    'Brand & Design',
    'Social & Content',
    'eCommerce',
    'Website',
    'Distribution',
    'Training',
  ]),
  services: z.array(z.string()).default([]),
  /** Short outcome line shown on /work cards. Specific numbers preferred. */
  metric: z.string().optional(),
  heroImage: z.string(),
  heroImageAlt: z.string().default(''),
  images: z
    .array(
      z.object({
        src: z.string(),
        alt: z.string().default(''),
        caption: z.string().optional(),
      })
    )
    .default([]),
  order: z.number().default(100),
  draft: z.boolean().default(false),
});

const caseEnSchema = caseBaseSchema.extend({
  /** Original WordPress `/case-study/<slug>` URL. EN-only, doc-only. */
  legacyUrl: z.string().optional(),
});

const caseFrSchema = caseBaseSchema;

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: caseEnSchema,
});

const casesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-fr' }),
  schema: caseFrSchema,
});

const casesDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-de' }),
  schema: caseFrSchema,
});

const casesEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-es' }),
  schema: caseFrSchema,
});

export const collections = { insights, insightsFr, insightsDe, insightsEs, cases, casesFr, casesDe, casesEs };
