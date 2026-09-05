---
brief_id: 08A
publish_date: 2026-10-27
week: 08
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "Double 11: the last fourteen days"
slug: double-11-last-minute-checklist
primary_query: "double 11 last minute checklist"
difficulty: SEAS
word_count: "1,500 to 1,900, plus the run sheet asset"
asset: "Double 11: the last fourteen days"
asset_format: "Day-by-day run sheet"
status: not_started
---

# BRIEF 08A: Double 11: the last fourteen days

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 08 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Double 11: the last fourteen days |
| Slug | `/insights/double-11-last-minute-checklist/` |
| Output file | `output/double-11-last-minute-checklist.md` |
| Primary query | `double 11 last minute checklist` |
| Difficulty | SEAS |
| Body length | 1,500 to 1,900, plus the run sheet asset (body only, per the char-count rule) |
| Asset | `output/guides/double-11-last-minute-checklist.md`, publishes to `/guides/double-11-last-minute-checklist/` (Day-by-day run sheet) |

## The brief

**Title:** Double 11: the last fourteen days
**Query:** double 11 last minute checklist · **Difficulty:** SEASONAL
**Word count:** 1,500 to 1,900, plus the run sheet asset

**The table.** Day by day, 28 October to 11 November: the task, the owner role, and the cut-off after which it cannot be changed.
**The proprietary number.** The last day a price or a mechanic can actually be changed on each platform, from operations.
**Asset.** The run sheet in `/guides`.
**Do not.** Publish later than 27 October.

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
- [ ] File saved as `output/double-11-last-minute-checklist.md`
