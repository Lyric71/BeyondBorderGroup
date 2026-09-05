---
brief_id: 17A
publish_date: 2026-12-29
week: 17
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell coffee and specialty food in China"
slug: sell-coffee-specialty-food-china
primary_query: "sell coffee specialty food china"
difficulty: WEAK
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 17A: How to sell coffee and specialty food in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 17 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell coffee and specialty food in China |
| Slug | `/insights/sell-coffee-specialty-food-china/` |
| Output file | `output/sell-coffee-specialty-food-china.md` |
| Primary query | `sell coffee specialty food china` |
| Difficulty | WEAK |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell coffee and specialty food in China
**Query:** sell coffee specialty food china · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** Food is the category where the paperwork comes before the platform: no coffee or specialty food brand sells legally into China until its overseas facility is registered with customs and its Chinese label is right, and the choice between cross-border and general trade mostly comes down to how much shelf life the product has left when it lands.

**The table it must carry.** One table, seven rows, one row per product type: whole bean and ground coffee, instant and drip bags, ready-to-drink coffee, chocolate and confectionery, sauces and condiments, snacks and biscuits, supplements-adjacent functional food. Columns: product type, typical remaining shelf life at landing, whether cross-border or general trade fits better and why, the registration and label items the writer must verify (overseas manufacturer registration, import record filing, Chinese label content, nutrition panel), and the storage requirement that drives warehouse cost. The registration column is written as a verify-and-cite instruction referencing GACC decrees by number only if the writer confirms them live.

**The proprietary number.** From the stores under management: the median number of days between submitting a food import document pack and receiving the first cleared inbound shipment, across the food and beverage clients the team has onboarded, plus the share of those first shipments that needed a label correction before release. State the sample size.

**Outline.**
1. The registration that has to happen before anything else
2. Chinese labels: what has to be on the pack and who signs off
3. Shelf life is the real channel decision
4. Coffee specifically: roast date, freshness claims, and what Chinese buyers compare you to
5. What a food listing costs to run for a year
6. Cross-border to test, general trade to scale
7. The sequence, start to first order

**Internal links.** /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /compass, /enter-china/distribution
**CTA.** Run the Tmall Global first-year calculator with food and beverage selected.
**Do not.** Do not state any GACC decree number, registration validity period, or minimum remaining shelf life percentage as fact. Every one of those is an instruction to the writer to verify with the current official source and cite it inline. Do not write health or functional claims into example listing copy, because food advertising claims in China are regulated and an illustrative line can become a compliance problem when a reader copies it.

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
- [ ] File saved as `output/sell-coffee-specialty-food-china.md`
