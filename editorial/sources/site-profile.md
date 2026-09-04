# Site profile cache: thechinapath.com

Replaces the CreateArticle Step 0 fetch. Read this instead of fetching the site
on every run.

**Refresh on the first working day of each month.** Ask Claude:
`Refresh sources/site-profile.md from the repo and the live site.`

Last refreshed: 2026-09-04 (from the repo)
Next refresh due: 2026-10-01

## Positioning

TheChinaPath is the China commerce and market-entry practice of
BeyondBorderGroup (the old beyondbordergroup.com now redirects here). Offices
in Shanghai, Hong Kong and Paris. It sells getting a foreign brand into
China and running its commerce there: market-entry consulting, distributor
sourcing, cross-border store setup, branding and localisation, cross-border
ecommerce operations, social commerce, campaigns, media, and the Compass
distributor database.

Sister practices in the group: TheRedScroll (China social media agency) and
ChinaWebFoundry (China web, hosting, WeChat development). Hand off to them
per the territory rule in `CLAUDE.md`.

## What TheChinaPath sells, exactly as the site names it

Do not invent services. The service pages, English:

**Enter China** (`/enter-china`)
- Market entry consulting `/enter-china/market-entry-consulting`
- Distribution (distributor sourcing and management) `/enter-china/distribution`
- Cross-border setup `/enter-china/cross-border-setup`
- Branding and localisation `/enter-china/branding-localisation`

**Grow in China** (`/grow-in-china`)
- Cross-border ecommerce (store operations) `/grow-in-china/cross-border-ecommerce`
- Social commerce `/grow-in-china/social-commerce`
- Campaigns `/grow-in-china/campaigns`
- Media `/grow-in-china/media`
- Production studio `/grow-in-china/production-studio`
- Website `/grow-in-china/website`

**Hubs**: `/build-in-china`, `/social-in-china`, `/learn-china`
(`/learn-china/masterclass`, `/learn-china/learning-expeditions`,
`/learn-china/platforms`).

**Compass** (`/compass`): the vetted distributor and partner database.
`/compass/how-it-works`, `/compass/what-is-inside`, `/compass/why-vetted`,
`/compass/shortlist` (the CTA target), `/compass/partners`.

**Tools** (`/tools`): three live calculators.
- `/tools/tmall-global-setup-and-run`
- `/tools/jd-worldwide-setup-and-run`
- `/tools/douyin-cost-calculator`
Two more are announced, not live (Xiaohongshu campaign budget, livestream
and KOL ROI). Do not link to them.

**Work** (`/work/<brand>`): 23 case studies in `src/content/cases/`. The
only source for client figures.

**Insights** (`/insights/<slug>`): 74 articles as of Sept 4, 2026, in
`src/content/insights/`, with FR (`/fr/decryptages/`), DE (`/de/analysen/`)
and ES (`/es/analisis/`) siblings.

**Guides** (`/guides/<slug>`): the printable assets from this plan. Empty
until 03A publishes.

Other: `/about`, `/contact`, `/thank-you`, `/privacy-policy`,
`/cookie-policy`, `/terms-of-service`.

## Pricing

Nothing is published. Never quote a fee for TheChinaPath's services. Use
"project-based", "monthly retainer", or "quoted after the first call".

## Voice, as the site writes it

Operator voice. A senior person who has run stores says what it costs and
what breaks. Short sentences, concrete nouns, real figures with sources.
Reference: `.claude/anti-ai-writing-style.md`. No em dashes anywhere. No
numbered badges in cards. Body text never in brand blue.

## Insights frontmatter shape (what the publish step writes)

```yaml
title, description, pubDate, updatedDate, author (always TheChinaPath for pipeline pieces),
category (Platforms | E-Commerce | KOLs & Livestream | Brand & Localization | AI & Innovation | Market Strategy | Compliance & Setup),
platforms (WeChat | Douyin | Tmall | Taobao | JD | Xiaohongshu | Weibo | Kuaishou | Alipay),
tags, keyTakeaways, heroImage (/Images/insights/<slug>.webp), heroImageAlt, draft
```

The insights layout renders: hero image, eyebrow category, H1, byline with
author card (photo, role, LinkedIn) for the three known authors, published
and updated dates, key takeaways box, table of contents from H2/H3, the
body, a fixed CTA block at the end. Do not repeat the H1 as the first body
heading. Do not write a CTA button in the body; the CTA sentence links to
its target and the layout adds the block.

## Locale slugs

FR and ES content files are named by their native slug; DE files keep the
English filename and map to a German URL. All three maps live in
`src/i18n/insight-slugs.mjs` (`insightEnToFr`, `insightEnToDe`,
`insightEnToEs`). Every new post adds one entry per locale, or the hreflang
and `localizePath` break.

## Internal link targets for this plan

The list in `briefs/PREAMBLE.md`, plus `/work/<brand>` and
`/guides/<slug>`. `/compass/shortlist` is the Compass CTA target.
