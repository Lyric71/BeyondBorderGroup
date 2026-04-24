import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Beyond Border Group'),
    category: z.string().default('Insights'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string().default(''),
    legacyUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
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
  }),
});

export const collections = { insights, cases };
