---
brief_id: 16A
publish_date: 2026-12-22
week: 16
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Asset
title: "Chinese New Year: what to lock before the country closes"
slug: cny-ecommerce-planning
primary_query: "cny ecommerce planning"
difficulty: SEAS
word_count: "2,000 to 2,400"
asset: "Chinese New Year cut-off calendar"
asset_format: "Dated calendar, four workstreams"
status: not_started
---

# BRIEF 16A: Chinese New Year: what to lock before the country closes

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 16 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Chinese New Year: what to lock before the country closes |
| Slug | `/insights/cny-ecommerce-planning/` |
| Output file | `output/cny-ecommerce-planning.md` |
| Primary query | `cny ecommerce planning` |
| Difficulty | SEAS |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |
| Asset | `output/guides/cny-ecommerce-planning.md`, publishes to `/guides/cny-ecommerce-planning/` (Dated calendar, four workstreams) |

## The brief

**Title:** Chinese New Year: what to lock before the country closes
**Query:** cny ecommerce planning · **Difficulty:** SEASONAL
**Word count:** 2,000 to 2,400

**The answer, in one line.** China does not slow down for Chinese New Year, it stops, and the brands that come through it intact are the ones that locked stock, freight bookings, staffing cover and media spend against dated cut-offs counted backward from New Year's Eve rather than forward from today.

**The table it must carry.** The asset itself, built as a real HTML table: a dated cut-off calendar with one row per working day band across the window running from roughly eight weeks before New Year's Eve to three weeks after, and four columns, one per workstream: stock, logistics, staffing, media. Each cell holds the specific action that has to be done by that date, written as an operator instruction ("last day to release a bonded replenishment PO", "last outbound pickup before the courier network thins", "confirm which team covers customer service and on which days", "last day to book platform media before rate cards move"). The writer must build the dates from the current year's official holiday schedule and cite the State Council announcement, because the dates move each year and the surrounding weekend swap days are the part people get wrong. Add a short note above the table saying which figures are fixed by the official calendar and which are platform or vendor dependent.

**The proprietary number.** From the stores under management: the number of consecutive days last CNY that bonded warehouse outbound was effectively paused, and the average slip in order-to-delivery days for orders placed in the week before New Year's Eve versus a normal week. State the store count and the year.

**Outline.**
1. What actually closes, and for how long
2. Stock: the last replenishment that lands in time
3. Logistics: bonded, direct mail and domestic courier all stop on different days
4. Staffing: who answers a customer at 11pm on day three
5. Media: why the rate card and the approval queue both move before the holiday
6. The cut-off calendar
7. The first week back, which is where the damage usually shows

**Internal links.** /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /tools/tmall-global-setup-and-run, /enter-china/cross-border-setup, /insights
**CTA.** Download the cut-off calendar and check it against your own stock plan.
**Do not.** Do not write a cultural explainer about the holiday. No red envelope symbolism, no zodiac paragraph, no gifting-culture section. Do not print a single date without sourcing it to the official holiday announcement for the year the piece is published, and add a visible last-updated line because this piece is refreshed annually.

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
- [ ] File saved as `output/cny-ecommerce-planning.md`
