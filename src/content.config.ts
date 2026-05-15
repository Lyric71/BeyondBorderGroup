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

const insightSchema = z.object({
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
  legacyUrl: z.string().optional(),
  draft: z.boolean().default(false),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: insightSchema,
});

const insightsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-fr' }),
  schema: insightSchema,
});

const caseSchema = z.object({
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
  legacyUrl: z.string().optional(),
  order: z.number().default(100),
  draft: z.boolean().default(false),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: caseSchema,
});

const casesFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases-fr' }),
  schema: caseSchema,
});

export const collections = { insights, insightsFr, cases, casesFr };
