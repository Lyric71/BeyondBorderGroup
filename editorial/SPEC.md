# Article output spec

The contract every finished piece meets. `CLAUDE.md` covers voice, rules and
the pipeline. This file covers structure, format and the checks.

## File shape

Filename equals the slug. `output/<slug>.md`. Hard-wrap body lines at about 80
characters.

```markdown
---
title: <= 52 characters
slug: <slug>
description: <= 152 characters
excerpt: <= 25 words
template: insight
author: TheChinaPath
category: <one of the seven insight categories>
platforms: [Tmall, JD, Douyin]
tags: [..]
keyTakeaways:
  - <three to five one-line takeaways, the ones an AI engine would quote>
---

<!-- HERO SECTION -->

<H1 from the brief, rewritten if the finished piece needs it>

<the answer, inside the first 60 words>

<!-- INTRODUCTION -->

<200 words maximum. For cost pieces and every Ledger, the answer table goes
here, above everything else. A reader who leaves after this block should
already have what they came for.>

<!-- SECTION: <name> -->

<body>

<!-- SECTION: FAQ -->

<three to five questions, 40 to 70 words each; optional for Signals>

<!-- CTA -->

CTA: <label from the brief, linked to its target>

<!-- FEATURE IMAGE block, per createarticle -->
<!-- SCHEMA block, see below -->
<!-- ASSET BRIEF block, see below -->
```

`template` values: `insight` for `/insights/` (every Signal, Anchor, Ledger
and Teardown), `guide` for `/guides/` (the printable assets), `refresh` when
the output replaces an existing insight in place. Insights publish into the
`insights` collections (four locales). Guides publish into the `guides`
collection, English only.

The publish step (`createblogarticle`) maps this frontmatter onto the insights
schema in `src/content.config.ts`: `title`, `description` (the meta
description), `pubDate`, `updatedDate`, `author`, `category` (one of
Platforms, E-Commerce, KOLs & Livestream, Brand & Localization, AI &
Innovation, Market Strategy, Compliance & Setup), `platforms` (subset of
WeChat, Douyin, Tmall, Taobao, JD, Xiaohongshu, Weibo, Kuaishou, Alipay),
`tags`, `keyTakeaways`, `heroImage`, `heroImageAlt`. The `excerpt` feeds the
listing card where the layout uses one; otherwise it is dropped.

Guides take `title`, `description`, `pubDate`, `updatedDate`, `author`,
`format` (the asset format from the brief), `relatedInsight` (the Anchor's
slug) and `heroImage`.

## Slot shapes

**Signal.** Five parts in the template order: what changed (two sentences,
source linked), what it costs or saves with a worked figure at a stated GMV,
which budget line moves, what to do and by when, one internal link. No
summary of the announcement. If the change moves no number, the slot is
skipped; do not write a filler.

**Anchor.** The outline in the brief. The answer in the first 60 words. The
mandated table. The proprietary number, labelled. Three to five internal
links, at least one to a service page and one to a calculator or Compass.
One CTA.

**Ledger A.** Seven blocks in order, each under its own H2: the answer (60
words), the fee table, the route, unit economics, the verdict, proof or
honesty, the tool link. Block 2 uses the calculator's category data.

**Ledger B.** Same seven blocks with block 2 as the channel table, block 3 as
the regulatory constraint, block 4 as cost per qualified lead and sales
cycle, block 7 as the Compass or service link. Say early that the category
has no cross-border marketplace route.

**Teardown.** Six parts in the template order. Every claim sourced or
labelled an inference. "The storefront shows", "the filing states", never
"they decided".

**Refresh.** Not a new file. The existing `src/content/insights/<slug>.md`
(and its FR, DE, ES siblings) upgraded to the Anchor spec: answer in the
first 60 words, one rebuilt table, one proprietary number, byline and both
dates, three to five compliant internal links, citations on every
third-party figure, one line near the top saying what changed and when.
`updatedDate` moves to the publish day. The draft goes to
`output/<slug>.md` with `template: refresh` so the review window still
applies.

## Length

Word counts in briefs are body only. Exclude frontmatter and all HTML comments,
per the createarticle char-count rule. Report both prose-only and
body-with-tables counts at the end, then land on target.

Being 10% under is fine. Being 25% under means a section was skipped.

## Tables

Every Anchor and Ledger carries at least one real table with real figures.
Signals carry one when the worked figure benefits from it. Markdown tables,
wrapped so the layout can scroll them on a phone:

```markdown
<div class="table-scroll">

| Line | Tmall Global | JD Worldwide | Douyin cross-border |
|---|---|---|---|
| Deposit | ... | ... | ... |

</div>
```

The blank lines inside the wrapper are required; without them the table
renders as raw text. No nested tables, no merged cells, no more than six
columns. Currency and unit in the header cell, not repeated in every row.

## Citations

Blockquote format, consistently, every time.

```
> Figure and claim in one sentence.
> Source: Publisher, Month Year. https://url
```

Rules:

- A source with no date is not a source. Find the date or cut the claim.
- Research in Chinese first. The cited source may be Chinese-language; give
  the publisher name in English with the Chinese name in parentheses on first
  use, for example Ebrun (亿邦动力), or the General Administration of Customs
  (海关总署).
- Every source is validated twice: at research time and again in iteration 8
  by re-fetching the URL. Both dates go in the ledger.
- Never cite a competitor's blog for a platform fact. Go to the platform's
  merchant documentation, a regulator, or a dated trade publication.
- Never cite our own earlier article as the source for an external figure.
  Cite what that article cited.
- Where a figure is ours, label it: "From stores under management, January to
  June 2026, 11 stores." or "TheChinaPath calculator data, September 2026."

## Internal links

Markdown links are allowed in body copy, restricted to the target list in
`briefs/PREAMBLE.md` plus `/work/<brand>` case pages and `/guides/<slug>`
assets. Three to five per Anchor, at least one to a service page and one to
a calculator or Compass. Ledgers carry the tool deep link in block 7 and the
proof link in block 6. Anchor text is the page's subject in plain words,
never "here" or "learn more".

List every internal link again in the ASSET BRIEF block so the publish step
can verify each target exists. A link to a page that does not exist is a
build-time failure, not a style note.

Hand-offs to TheRedScroll and ChinaWebFoundry use the canonical anchor text in
`CLAUDE.md`, at most once per piece.

## The three appended blocks

All three are HTML comments. None render. None count toward the word target.

### 1. Feature image

Exactly as createarticle specifies. Path convention for this site:

```
Save to:    public/Images/insights/<slug>.webp
Reference:  /Images/insights/<slug>.webp
```

**China rule, permanent.** Every hero image is visibly set in China and shows
the commerce surface the piece is about on a screen: a Tmall Global or JD
Worldwide store page, a Douyin store or livestream room, a Xiaohongshu note
grid, a WeChat mini programme storefront, a bonded-warehouse or ERP
dashboard, with recognisable Chinese interface and characters. Rotate through
typical Chinese cities and places (Hangzhou, Guangzhou, Shenzhen, Chengdu,
Wuhan, Ningbo, Chongqing, Nanjing, a bonded zone, a livestream studio, a
distributor's showroom, a wet market, a mall). Name the place in the prompt
and vary it across pieces. A generic desk, a globe, a handshake, a container
ship or a Western office fails the rule.

**People and look, permanent.** Only Chinese people in the image. Not a
perfect AI render: candid, normal-life photography with normal-life defects
(handheld feel, slight motion blur, uneven light, clutter, cables, a smudged
screen, someone mid-gesture). Write those imperfections into the prompt. No
studio polish, no cinematic grade, no diagrams, no infographics, no
watermark, no text overlays, no logos outside the app interfaces on screen.

The image is generated with the `generate-image-openai` skill in step 3 of
the pipeline: landscape 3:2, high quality, then converted to webp with sharp
(quality about 78, max width 2000, no enlargement). Intermediates stay in the
session scratchpad. The generated image is opened and checked before it is
saved to the repo. `heroImageAlt` describes the scene in one plain sentence.

### 2. Schema

```
<!-- SCHEMA
Type: Article
FAQPage: yes, <n> questions (or no)
Breadcrumb: Home > Insights > <title>
Author: TheChinaPath
datePublished: YYYY-MM-DD
dateModified: YYYY-MM-DD
-->
```

The insights layout already emits Article schema with the author resolved to
a Person entity. Match what is there. Do not invent new types.

### 3. Asset brief

Everything the designer and developer need, in one block.

```
<!-- ASSET BRIEF
TABLES: <list, with the data each needs>
CHARTS: <type, axes, data source, what it must show>
SCREENSHOTS: <what to capture, what to blur>
DOWNLOADS: <file, format, gate or no gate>
INTERNAL LINKS: <anchor text> -> <url>, one per line
PROPRIETARY NUMBER: <the figure, the label used, where it came from>
HAND-OFFS: <TheRedScroll / ChinaWebFoundry mentions and the anchor text used>
CLIENT SIGN-OFF NEEDED: <any client figure used, or none>
-->
```

## SEO

| Field | Ceiling | How |
|---|---|---|
| Title | 52 characters | Count it. Do not estimate. |
| Meta description | 152 characters | Count it. |
| Excerpt | 25 words | Count it. |

These ceilings also override the looser ones inside `content-quality-us`
(60 / 156). When that skill's iteration 8 or 17 proposes longer fields, trim
them back.

The title is the query a buyer types, or its answer. No "Ultimate", no
"Complete Guide", no brand name in front. Primary query appears in the H1, the
first 100 words, and one H2. Do not force it anywhere else.

## The iteration workflow

Run createarticle's 13 iterations in order. Print the tracker. State what
changed at each step. No approval pauses.

**Iteration 7 is a cadence pass.** Vary sentence length deliberately, break
at least three parallel structures, let one paragraph run long and the next
run to a single line. No planted errors. Say in your log that you ran the
cadence variant.

**Iteration 8** includes the second source validation: re-fetch every cited
URL.

**Iteration 13** produces five visual concepts, then one photorealistic feature
image prompt under the China rule.

Then run `content-quality-us` (18 passes) on the same file, in place, before
the image step.

## Status values in schedule.csv

| Status | Set when |
|---|---|
| `not_started` | Default |
| `drafted` | createarticle finished, `output/<slug>.md` saved |
| `quality_passed` | content-quality-us finished on the file |
| `image_ready` | hero image checked and saved to `public/Images/insights/` |
| `published` | createblogarticle finished, build passed, pushed, email sent |
| `blocked` | stopped on a flag condition, see `notes` |
| `skipped` | a kill condition fired (Signal, Ledger, Refresh, Teardown), see `notes` |

## Definition of done (steps 0 to 3)

Verify each by counting or checking, not by assuming.

- [ ] Research note written before drafting, Chinese sources first.
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger.
- [ ] The answer lands inside the first 60 words.
- [ ] Zero em dashes. Search the file for the character.
- [ ] Zero exclamation marks.
- [ ] Zero deliberate typos or planted errors.
- [ ] No summary or conclusion section. File ends on the CTA plus comment blocks.
- [ ] No banned vocabulary. No three-item rhetorical lists.
- [ ] No price, rate or fee for TheChinaPath's own services anywhere in the file.
- [ ] Every third-party statistic in a blockquote with a named source, a date and a URL.
- [ ] The proprietary number present and labelled, or `TODO: proprietary number` flagged.
- [ ] New figures appended to `sources/verified-sources.md`.
- [ ] Platform names as the house list on first mention.
- [ ] Title, meta and excerpt counted and inside ceilings, after the quality pass too.
- [ ] At least one wrapped table with real figures.
- [ ] Three to five internal links to existing targets, listed in the asset brief.
- [ ] Territory rule respected; hand-offs use the canonical anchor text.
- [ ] Feature image, schema and asset brief blocks all present.
- [ ] Body character count reported.
- [ ] Saved as `output/<slug>.md` (and `output/guides/<slug>.md` on an Asset week).
- [ ] content-quality-us run, all 18 passes shown.
- [ ] Hero image generated, checked visually, saved as `public/Images/insights/<slug>.webp`.
- [ ] `schedule.csv` row updated with status and the three dates.
- [ ] `logs/YYYY-MM-DD.md` written.

## When to stop and flag

Draft without pausing, with five exceptions. In each case, write the draft up
to that point, leave a clear marker, and flag it in the log.

1. **A required figure cannot be sourced.** Cut the claim, mark
   `TODO: unsourced claim removed`, and say which section is now thinner.
2. **A client number is needed and is not on the `/work` page.** Mark
   `TODO: client sign-off` and leave the sentence incomplete rather than
   estimating.
3. **A Teardown claim cannot be traced to the storefront or a filing.**
   Label it an inference or cut it. Never guess a number about a named brand.
4. **The brief conflicts with what the site actually says.** The site wins.
   Note the conflict so the brief can be corrected.
5. **A brief's internal link target does not exist in `src/pages/`.** Link
   to the nearest existing page and list the missing target in the log.
