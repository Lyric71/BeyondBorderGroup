---
brief_id: 47A
publish_date: 2027-07-27
week: 47
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "The twelve-month China launch timeline"
slug: china-launch-timeline-brands
primary_query: "china launch timeline brands"
difficulty: OPEN
word_count: "2,200 to 2,400, plus the Gantt asset"
asset: "The twelve-month China launch timeline"
asset_format: "Gantt, with dependencies"
status: not_started
---

# BRIEF 47A: The twelve-month China launch timeline

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 47 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The twelve-month China launch timeline |
| Slug | `/insights/china-launch-timeline-brands/` |
| Output file | `output/china-launch-timeline-brands.md` |
| Primary query | `china launch timeline brands` |
| Difficulty | OPEN |
| Body length | 2,200 to 2,400, plus the Gantt asset (body only, per the char-count rule) |
| Asset | `output/guides/china-launch-timeline-brands.md`, publishes to `/guides/china-launch-timeline-brands/` (Gantt, with dependencies) |

## The brief

**Title:** The twelve-month China launch timeline
**Query:** china launch timeline brands · **Difficulty:** OPEN
**Word count:** 2,200 to 2,400, plus the Gantt asset

**The answer, in one line.** A cross-border China launch takes nine to twelve months from decision to first order for most consumer categories, and the timeline is set by four things that cannot be run in parallel, trademark, product compliance, platform account approval and inventory into a bonded warehouse, so the only real acceleration available is starting the trademark earlier.

**The table it must carry.** A dependency table sitting behind the Gantt, one row per workstream, 14 to 18 rows. Columns: workstream, earliest start month, typical duration in weeks, what must be finished before it can start (name the specific predecessor, not "planning"), what it blocks downstream, who owns it (brand, agency, distributor, third party lab, platform), and whether the duration is under your control or the counterparty's. The critical path must be visually and textually marked. The Gantt asset renders the same data with the dependency arrows drawn, months on the horizontal axis, and a shaded band showing where the Chinese New Year shutdown lands.

**The proprietary number.** From the stores under management: median elapsed weeks from engagement start to first order, split by route (cross-border versus general trade) and by whether the brand arrived with a Chinese trademark already registered. State the number of launches in the sample and the period covered. That trademark split is the number the whole piece hangs on.

**Outline.**
1. Why launches slip, and the four blockers that cause most of it
2. Months one to three: trademark, route decision, category compliance scoping
3. Months three to six: testing, registration, label and artwork
4. Months five to nine: platform application, store build, localisation
5. Months eight to twelve: inventory, logistics, soft open and the first festival
6. The dependency table and the critical path
7. What actually compresses a timeline, and what only looks like it does

**Internal links.** /enter-china/market-entry-consulting, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /enter-china/distribution, /grow-in-china/cross-border-ecommerce
**CTA.** Download the twelve-month launch Gantt with dependencies.
**Do not.** Do not present the timeline as universal; state the category assumption in the opening and mark the rows where a regulated category doubles a duration. Do not assert platform approval times or regulatory review periods from experience alone; where the timeline depends on an official processing period, instruct the writer to cite the published figure and separately label what the stores under management actually observed.

## Slot spec

```
Every Anchor must carry:
1. A title that is the query a buyer types, or its answer. No "Ultimate",
   no "Complete Guide", no brand name in front.
2. The answer inside the first 60 words.
3. One real HTML table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such.
5. A named human byline, published date and updated date.
6. Three to five internal links, at least one to a service page and one
   to a calculator or Compass.
7. One CTA. Never "learn more".
```

## Definition of done

- [ ] The answer lands inside the first 60 words
- [ ] Every third-party figure carries a dated, linked citation
- [ ] The proprietary number is present and labelled as ours
- [ ] Byline `TheChinaPath`, published date and updated date in frontmatter
- [ ] One real table with real figures, in the scrollable wrapper
- [ ] Three to five internal links from the target list, one to a service page and one to a calculator or Compass
- [ ] One CTA, never "learn more"
- [ ] No pricing for TheChinaPath's own services
- [ ] Zero em dashes, no banned vocabulary, no three-item rhetorical lists
- [ ] Territory rule respected, hand-offs use the canonical anchor text
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] New figures appended to `sources/verified-sources.md` with both check dates
- [ ] Feature image block appended with the correct slug path
- [ ] File saved as `output/china-launch-timeline-brands.md`
