---
brief_id: 13A
publish_date: 2026-12-01
week: 13
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a Tmall Global store costs in year one"
slug: tmall-global-cost-fees
primary_query: "tmall global cost fees"
difficulty: HELD
word_count: "2,400 to 2,800"
status: not_started
---

# BRIEF 13A: What a Tmall Global store costs in year one

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 13 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a Tmall Global store costs in year one |
| Slug | `/insights/tmall-global-cost-fees/` |
| Output file | `output/tmall-global-cost-fees.md` |
| Primary query | `tmall global cost fees` |
| Difficulty | HELD |
| Body length | 2,400 to 2,800 (body only, per the char-count rule) |

## The brief

**Title:** What a Tmall Global store costs in year one
**Query:** tmall global cost fees · **Difficulty:** HELD
**Word count:** 2,400 to 2,800

**This is the first deliberate attack on defended ground.** Shanghai Jungle ranks with "Tmall costs explained, deposits, annual fees, commissions, agency fees, ad budgets." TMO has a 10,000-word marketplace fee page. Both are prose. This one arrives with a working calculator behind it and twelve published pieces of internal linking.

**The answer, in one line.** The deposit and the annual fee are the numbers everyone quotes and the smallest part of the bill. The first year is decided by media, the TP retainer, and fulfilment.

**The table it must carry.** Full first-year cost, line by line, in RMB and USD, at three GMV levels. Separate refundable from spent, because that distinction is the reason most published figures are wrong.

**The proprietary number.** Actual first-year cost against the deposit-and-commission figure commonly quoted, expressed as a multiple, from calculator runs and stores under management.

**Outline.**
1. The number everyone quotes, and why it is not the number
2. Refundable against spent
3. The four moving parts
4. The table at three GMV levels
5. What changes it: category, model, and who runs the store
6. Model your own

**Internal links.** `/tools/tmall-global-setup-and-run` (twice), W12 P&L piece, `/grow-in-china/cross-border-ecommerce`, `/enter-china/cross-border-setup`
**CTA.** Tmall calculator.
**Do not.** Attack the competing pages or reference them. Beat them by being the only one with a tool.

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
- [ ] File saved as `output/tmall-global-cost-fees.md`
