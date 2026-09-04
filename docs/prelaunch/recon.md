# Pre-launch recon (Phase 0 of WO-P1 to WO-P7)

Answered against the repo on 2026-09-04 and checked against the live site the same day. Every answer names a file or says "not present".

## 1. Framework and version

Astro 7 (`astro ^7.0.6`) with `@astrojs/sitemap ^3.7.3` and the Vercel adapter (`@astrojs/vercel ^11.0.2`). The `sitemap-index.xml` plus `sitemap-0.xml` shape is that integration. Config file: `astro.config.mjs`. Integration block: `integrations: [ sitemap({ ... }), { name: 'bbg-sitemap-postprocess', ... } ]` starting at `astro.config.mjs:643`.

## 2. How the sitemap is generated

`sitemap()` in `astro.config.mjs` uses:

- `filter`: drops `/thank-you`, `/fr/merci`, `/de/danke`, `/es/gracias`, `/compass/partners/thank-you` and anything under `/api/`.
- `serialize`: rewrites each entry into its locale cluster. It resolves the English path with `canonicalize()`, looks up FR/DE/ES twins through `enToFr` / `enToDe` / `enToEs` (static slug tables in the same file plus the insight tables in `src/i18n/insight-slugs.mjs`), and writes `links` as en, fr, de, es, x-default. Partner routes get an EN/ZH pair only.
- No `customPages`. No `exclude`. No `lastmod` (the integration omits it by default).
- `changefreq: 'weekly'` and `priority: 0.7` were set. WO-P1 removes them.
- A second inline integration, `bbg-sitemap-postprocess`, runs on `astro:build:done` and strips the trailing slash the library appends to the root `xhtml:link`.

Live check, 2026-09-04: `sitemap-0.xml` carries 530 URLs and already contains `/tools`, the three calculators, `/work`, `/work/camper`, `/enter-china/market-entry-consulting`, `/enter-china/distribution`, `/de/referenzen` and `/de/rechner`. The "not in the sitemap" row of the spec's ground-truth table is stale.

## 3. Routing

File-based under `src/pages`. Static by default (no `output` key). Only the four API routes opt out with `export const prerender = false`: `src/pages/api/contact.ts`, `calculator-lead.ts`, `fx-rate.ts`, `generate-image.ts`. Everything else prerenders.

- `/work/[slug]`: `src/pages/work/[...slug].astro`, `getStaticPaths()` over the `cases` collection, drafts excluded. Locale twins: `src/pages/fr/nos-realisations/[...slug].astro`, `src/pages/de/referenzen/[...slug].astro`, `src/pages/es/proyectos/[...slug].astro`.
- `/tools/[slug]`: not dynamic. Three hand-written pages under `src/pages/tools/` plus `index.astro`, mirrored in `fr/outils/`, `de/rechner/`, `es/herramientas/`.
- Insights: `src/pages/insights/[...slug].astro` and the locale equivalents, over the `insights*` collections.
- `trailingSlash: 'never'`.

## 4. i18n mechanism

`i18n` in `astro.config.mjs`: `defaultLocale: 'en'`, `locales: ['en','fr','de','es']`, `prefixDefaultLocale: false`. Locale pages are separate files under `src/pages/<locale>/` with native slugs.

The slug mapping lives in two places:

- Static pages: `slugMap` in `src/i18n/utils.ts` (line 48), keyed by canonical English path, one block per locale. `localizePath(path, locale)` walks it in both directions. A `prefixMap` in the same file handles the `/work/` to `/referenzen/` family for dynamic routes.
- Insights: `insightEnToFr`, `insightEnToDe`, `insightEnToEs` in `src/i18n/insight-slugs.mjs`, keyed by English slug.
- The sitemap serialize hook keeps a duplicate of the static table in `astro.config.mjs` (lines 349 to 478) because the Astro config cannot import the `.ts` module.
- Per-route locale sets (the EN/ZH partner cluster) live in `src/i18n/route-locales.ts`.

So a mapping exists. WO-P2 does not need to create a `translationKey`; the canonical English path already is the stable key. The one known drift risk is the duplicated static table in `astro.config.mjs`, which must be edited alongside `utils.ts`.

## 5. Where copy lives

- Insights and case studies: Markdown with frontmatter in `src/content/insights`, `insights-fr`, `insights-de`, `insights-es`, `cases`, `cases-fr`, `cases-de`, `cases-es`. Schemas in `src/content.config.ts`. Insight frontmatter carries `title`, `description`, `pubDate`, `updatedDate`, `author` (defaults to "TheChinaPath"), `category`, `platforms`, `tags`, `keyTakeaways`, `heroImage`. Case frontmatter carries `brand`, `title`, `summary`, `category`, `services`, `metric`, `heroImage`, `images`, `order`.
- Service, hub, tool and door pages: inline in the `.astro` files.
- Nav, footer, shared microcopy: `src/i18n/ui.ts`.
- No CMS.

## 6. Head management

Exactly one: `src/layouts/Layout.astro`. It renders `<title>`, meta description, canonical, OG, hreflang alternates (self-referential, plus x-default on the English URL) and the JSON-LD graph through `src/components/SchemaGraph.astro`. Schema builders are in `src/lib/seo.ts` (`organizationSchema`, `websiteSchema`, `localBusinessSchemas`, `articleSchema`, `caseStudySchema`, `breadcrumbSchema`, `schemaGraph`).

`src/layouts/PartnerLayout.astro` is the second layout, used only by the two Compass partner routes, and writes its own EN/ZH cluster.

## 7. Form handling

- Contact form posts to `src/pages/api/contact.ts`, which calls `sendContactEmail` in `src/lib/resend.ts`.
- Calculator lead form posts to `src/pages/api/calculator-lead.ts`, which calls `sendCalculatorLead` in the same module.
- Both send through Resend (`resend ^6.16.0`). Submissions land in the inbox configured in `src/lib/resend.ts`; nothing is stored.
- No ESP list, no audience, no newsletter. Resend is the natural host for WO-P6 since it is already wired and has a contacts API.

## 8. Nav data structure

`src/components/Header.astro`. Four `NavItem[]` arrays (`findPartner`, `sellInChina`, `websiteAndSocial`, `learnChina`) and a `sections: NavSection[]` array that assembles the mega-menu. Labels come from `t('nav.*')` in `src/i18n/ui.ts`, one block per locale. Hrefs go through `lp()` (localized) except the Compass and door-page rows, which use `enPath()` on purpose per the header comment. That is the origin of the German nav "leak". Note that `src/pages/de/website-und-wechat-in-china.astro` and `src/pages/de/compass/` exist, so WO-P2 should re-check whether those rows still need the raw English path.

Footer links: `src/components/Footer.astro`, same `t()` mechanism.

## Corrections to the spec's ground-truth table

| Spec says | Repo and live site say |
|---|---|
| Nothing commercial in the sitemap | All of it is in the sitemap, 530 URLs, four locales |
| No hreflang anywhere | Every page emits en/fr/de/es plus x-default from `Layout.astro`; the sitemap carries `xhtml:link` too |
| No JSON-LD | One `@graph` per page with Organization, WebSite, LocalBusiness, BreadcrumbList, Article, CreativeWork |
| Case studies unindexable | 23 per locale, each with a unique title, description and metric |
| `/work` flat | Category filter already exists, full list is in the HTML |

Still true: no newsletter, `/insights` and `/de/analysen` titles are bare nouns, calculators carry no WebApplication schema, 50 of 74 English insights are credited to the organization, no service page links to a calculator, "Budget Calculator" is a secondary button.
