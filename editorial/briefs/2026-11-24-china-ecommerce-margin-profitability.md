---
brief_id: 12A
publish_date: 2026-11-24
week: 12
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a China eCommerce P&L actually looks like"
slug: china-ecommerce-margin-profitability
primary_query: "china ecommerce margin profitability"
difficulty: OPEN
word_count: "2,200 to 2,600"
status: not_started
---

# BRIEF 12A: What a China eCommerce P&L actually looks like

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 12 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a China eCommerce P&L actually looks like |
| Slug | `/insights/china-ecommerce-margin-profitability/` |
| Output file | `output/china-ecommerce-margin-profitability.md` |
| Primary query | `china ecommerce margin profitability` |
| Difficulty | OPEN |
| Body length | 2,200 to 2,600 (body only, per the char-count rule) |

## The brief

**Title:** What a China eCommerce P&L actually looks like
**Query:** china ecommerce margin profitability · **Difficulty:** OPEN
**Word count:** 2,200 to 2,600

**The answer, in one line.** Revenue to contribution has eleven lines in China against six in most Western markets, and the four extra ones are where brands who modelled it on their home P&L lose the money.

**The table it must carry.** The full P&L, line by line, from GMV down to contribution, with a typical percentage band for each line. Mark the four lines that do not exist in a Western P&L.

**The proprietary number.** The line that most often comes in over plan, from stores under management, with by how much.

**Outline.**
1. Why the home-market model breaks
2. The eleven lines
3. The four that are new
4. The table
5. Where the money actually goes at three GMV levels
6. What breakeven looks like, and when it arrives

**Internal links.** All three calculators, `/grow-in-china/cross-border-ecommerce`, `/enter-china/market-entry-consulting`
**CTA.** All three calculators.
**Note.** This piece is the natural pillar for the whole COST cluster. Every later cost anchor should link back to it.

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
- [ ] File saved as `output/china-ecommerce-margin-profitability.md`
