---
brief_id: 03A
publish_date: 2026-09-22
week: 03
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "Double 11 2026: the 60-day operator checklist"
slug: double-11-preparation-checklist
primary_query: "double 11 preparation checklist"
difficulty: SEAS
word_count: "1,600 to 2,000, plus the checklist asset"
asset: "Double 11 2026: the 60-day operator checklist"
asset_format: "Printable checklist, owner per line"
status: not_started
---

# BRIEF 03A: Double 11 2026: the 60-day operator checklist

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 03 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Double 11 2026: the 60-day operator checklist |
| Slug | `/insights/double-11-preparation-checklist/` |
| Output file | `output/double-11-preparation-checklist.md` |
| Primary query | `double 11 preparation checklist` |
| Difficulty | SEAS |
| Body length | 1,600 to 2,000, plus the checklist asset (body only, per the char-count rule) |
| Asset | `output/guides/double-11-preparation-checklist.md`, publishes to `/guides/double-11-preparation-checklist/` (Printable checklist, owner per line) |

## The brief

**Title:** Double 11 2026: the 60-day operator checklist
**Query:** double 11 preparation checklist · **Difficulty:** SEASONAL
**Word count:** 1,600 to 2,000, plus the checklist asset

**The answer.** What has to be locked, and by when, counting back from 11 November.

**The table it must carry.** The checklist itself: 60 days out, 45, 30, 21, 14, 7, and the day. Each row carries the task, the owner role, and what breaks if it slips.

**The proprietary number.** The most common slip from stores under management, with how many days it typically costs. One line, sourced.

**Asset.** The same checklist as a printable page in `/guides`, one item per line, checkboxes, no marketing copy.

**Internal links.** `/grow-in-china/campaigns`, `/grow-in-china/cross-border-ecommerce`, `/tools/tmall-global-setup-and-run`
**CTA.** Talk to us, dated: this is the one week of the year where urgency is real.
**Do not.** Publish after 12 September. A 60-day checklist published at 45 days is worthless.

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
- [ ] File saved as `output/double-11-preparation-checklist.md`
