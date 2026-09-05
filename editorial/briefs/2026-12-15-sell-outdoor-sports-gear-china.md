---
brief_id: 15A
publish_date: 2026-12-15
week: 15
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Selling outdoor and sports gear into China"
slug: sell-outdoor-sports-gear-china
primary_query: "sell outdoor sports gear china"
difficulty: OPEN
word_count: "1,900 to 2,300"
status: not_started
---

# BRIEF 15A: Selling outdoor and sports gear into China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 15 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Selling outdoor and sports gear into China |
| Slug | `/insights/sell-outdoor-sports-gear-china/` |
| Output file | `output/sell-outdoor-sports-gear-china.md` |
| Primary query | `sell outdoor sports gear china` |
| Difficulty | OPEN |
| Body length | 1,900 to 2,300 (body only, per the char-count rule) |

## The brief

**Title:** Selling outdoor and sports gear into China
**Query:** sell outdoor sports gear china · **Difficulty:** OPEN
**Word count:** 1,900 to 2,300

**The answer, in one line.** Outdoor and sports gear sells in China on the strength of a specific activity community rather than a broad category position, and the channel follows the product's compliance weight: apparel and soft goods go cross-border immediately, while anything with a battery, a radio, a fuel source or a protective claim needs its route checked before a single unit ships.

**The table it must carry.** One table, nine rows, one row per gear type: technical apparel, footwear, backpacks and packs, tents and shelters, sleeping bags, camping stoves and fuel, climbing and protective hardware, GPS watches and wearables, bicycles and e-mobility. Columns: gear type, cross-border route status the writer must verify against the current positive list, the compliance question to answer before shipping (textile safety standard, radio type approval, battery air freight classification, protective equipment certification), typical air freight cost band per unit, and whether the category rewards a marketplace store or a community-led launch first. Every compliance cell is written as an instruction to verify and cite.

**The proprietary number.** From the Compass distributor database: how many vetted distributors list outdoor or sports as an active category, how many of those already run a Tmall Global or JD Worldwide flagship, and the median number of provinces their offline coverage reaches. Name the database and the date the count was pulled.

**Outline.**
1. This page is about selling your gear in China, not sourcing it
2. Which outdoor segments are actually growing buyers, not just headlines
3. The compliance line that splits the category: battery, fuel, radio, protection
4. Cross-border for apparel and packs, general trade for hardware
5. Why the first 500 orders come from a community, not a category page
6. Distributor or your own store for technical hardware
7. The first ninety days, in order

**Internal links.** /tools/tmall-global-setup-and-run, /compass/shortlist, /enter-china/cross-border-setup, /grow-in-china/social-commerce, /enter-china/distribution
**CTA.** Request a Compass shortlist of outdoor and sports distributors.
**Do not.** Do not slide into sourcing language: the H1 and the first 20 words must state that the reader is selling gear into China, and no paragraph should describe Chinese manufacturing capacity. Do not write the community section as an influencer plan.
**Territory guard.** Seeding, creator relationships and community management sit with TheRedScroll, so this piece names the demand pattern and links to /social-in-china rather than describing seeding as a TheChinaPath service.

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
- [ ] File saved as `output/sell-outdoor-sports-gear-china.md`
