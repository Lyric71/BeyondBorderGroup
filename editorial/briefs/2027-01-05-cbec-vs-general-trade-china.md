---
brief_id: 18A
publish_date: 2027-01-05
week: 18
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Cross-border or general trade: the decision that sets your cost base"
slug: cbec-vs-general-trade-china
primary_query: "cbec vs general trade china"
difficulty: WEAK
word_count: "2,100 to 2,400"
status: not_started
---

# BRIEF 18A: Cross-border or general trade: the decision that sets your cost base

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 18 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Cross-border or general trade: the decision that sets your cost base |
| Slug | `/insights/cbec-vs-general-trade-china/` |
| Output file | `output/cbec-vs-general-trade-china.md` |
| Primary query | `cbec vs general trade china` |
| Difficulty | WEAK |
| Body length | 2,100 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Cross-border or general trade: the decision that sets your cost base
**Query:** cbec vs general trade china · **Difficulty:** WEAK
**Word count:** 2,100 to 2,400

**The answer, in one line.** Cross-border lets a foreign brand sell into China without a Chinese entity, a domestic licence or a Chinese label on the pack, and it costs more per unit forever; general trade costs months and fees up front and then makes every unit cheaper, so the switch point is a volume number, not a strategy preference.

**The table it must carry.** One comparison table, twelve to fourteen rows, three columns: cross-border eCommerce, general trade import, and "what decides it". Rows must be operational, not conceptual: legal entity required, product registration and licence required, Chinese physical label required, duty and tax treatment (verify and cite current CBEC tax handling and the annual and per-transaction limits), positive list dependency, inventory location, replenishment lead time, minimum viable order volume, ability to sell offline, ability to sell to other retailers, invoicing and fapiao, returns handling, price flexibility, and time to first sale. The tax and limit rows must carry a live citation to the issuing ministry, and the writer states the date checked.

**The proprietary number.** The monthly unit volume at which the team's own modeling flips general trade cheaper than cross-border, derived from the calculators, expressed as a range across three representative categories, with the assumptions listed underneath. Label it as TheChinaPath modeling and show the inputs so a reader can argue with it.

**Outline.**
1. The one-line difference, then the fourteen-line difference
2. What cross-border actually exempts you from, and what it does not
3. The positive list, and how to check your own HS code against it
4. What general trade costs before you sell a single unit
5. The volume where the math flips
6. The hybrid most brands end up running, and why
7. How to decide this month rather than next quarter

**Internal links.** /enter-china/cross-border-setup, /enter-china/distribution, /grow-in-china/cross-border-ecommerce, /tools/tmall-global-setup-and-run, /enter-china/market-entry-consulting
**CTA.** Run the first-year calculator for your category under both routes.
**Do not.** Do not state the cross-border transaction and annual purchase limits, the composite tax rate, or the positive list category count from memory or from a competitor page. Each one is verified live and cited, with the check date visible. Do not present cross-border as the beginner option and general trade as the grown-up one; the piece is a cost comparison and the recommendation has to fall out of the numbers.

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
- [ ] File saved as `output/cbec-vs-general-trade-china.md`
