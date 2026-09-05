---
brief_id: 51A
publish_date: 2027-08-24
week: 51
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Double 11 2027: the 80-day plan"
slug: double-11-2027-preparation
primary_query: "double 11 2027 preparation"
difficulty: SEAS
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 51A: Double 11 2027: the 80-day plan

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 51 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Double 11 2027: the 80-day plan |
| Slug | `/insights/double-11-2027-preparation/` |
| Output file | `output/double-11-2027-preparation.md` |
| Primary query | `double 11 2027 preparation` |
| Difficulty | SEAS |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Double 11 2027: the 80-day plan
**Query:** double 11 2027 preparation · **Difficulty:** SEASONAL
**Word count:** 2,200 to 2,400

**The answer, in one line.** Eighty days out is the last point at which a brand can still change its Double 11 outcome, because after roughly day 45 the inventory is committed, the platform submissions are locked and everything left is execution, so this plan is organised around the deadlines that close rather than around tasks.

**The table it must carry.** An 80-day run table, one row per working milestone, 24 to 30 rows, in reverse-countdown order. Columns: days out, the milestone, the deadline type (platform-imposed, supplier-imposed or self-imposed), owner, what is irreversible after it, and what it costs to miss it stated concretely. Platform-imposed deadlines must be visually separated from the ones a brand sets for itself, because that distinction is what the year-one checklist got wrong. Mark the point of no return for inventory and the point of no return for promotion submissions.

**The proprietary number.** From the stores under management: the share of Double 11 GMV attributable to presale deposits versus the main window, and the median day count before the event at which stores that hit their target had inventory landed in the bonded warehouse, compared with stores that missed. State the sample size, platforms and period. That comparison is the argument for the 80-day start.

**Outline.**
1. What changed since last year's checklist, and why 80 days replaced 60
2. Days 80 to 60: pricing, assortment, inventory commitment
3. Days 60 to 45: platform submissions and the deadlines that close
4. Days 45 to 20: presale, traffic buying, creative and store build
5. Days 20 to 1: the presale window and the rehearsal nobody runs
6. The event days, in operating order
7. The 80-day run table

**Internal links.** /grow-in-china/campaigns, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/media, /insights
**CTA.** Run your Double 11 window cost in the Tmall Global calculator.
**Do not.** Do not republish the year-one checklist with a new year in the title; the improvement is the deadline typing, the point-of-no-return marking and the cost of missing each one, and the piece must visibly carry both the original publication date and this year's update date. Do not state platform submission deadlines as fact this far out; instruct the writer to give last cycle's dates as the planning basis, cite them, and tell the reader to confirm against the platform's own merchant calendar when it is published.
**Territory guard.** Creator briefing and content production schedules appear in the run table as dependencies with owners and dates. How to run them is TheRedScroll's, one link, no section.

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
- [ ] File saved as `output/double-11-2027-preparation.md`
