---
brief_id: 34A
publish_date: 2027-04-27
week: 34
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Tmall Partner, in-house or agency: who should run the store"
slug: tmall-partner-vs-in-house-team
primary_query: "tmall partner vs in house team"
difficulty: HELD
word_count: "2,100 to 2,400"
status: not_started
---

# BRIEF 34A: Tmall Partner, in-house or agency: who should run the store

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 34 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Tmall Partner, in-house or agency: who should run the store |
| Slug | `/insights/tmall-partner-vs-in-house-team/` |
| Output file | `output/tmall-partner-vs-in-house-team.md` |
| Primary query | `tmall partner vs in house team` |
| Difficulty | HELD |
| Body length | 2,100 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Tmall Partner, in-house or agency: who should run the store
**Query:** tmall partner vs in house team · **Difficulty:** HELD
**Word count:** 2,100 to 2,400

**The answer, in one line.** The right model is set by annual GMV and by how much of the pricing decision you are willing to give away, not by capability: below a certain revenue line a TP is the only model that pays for itself, above it an in-house team is cheaper per dollar of GMV, and the middle is where most brands sit and where the hybrid earns its keep.

**The table it must carry.** Two tables. First, a function ownership grid: eight rows, four columns. Columns: Function, Typical TP model, In-house, Agency. Rows: store operations and listings, pricing and promotion decisions, inventory and forecasting, customer service, livestream and content scheduling, paid media buying on platform ad tools, data access and reporting, brand assets and guideline enforcement. Cells state who holds it and, critically, who holds the decision when the two disagree. Second, a cost model comparison: three columns, one per model, rows for fee structure, commission or margin taken, headcount required, fixed monthly cost band, the GMV level at which this model becomes the cheapest option.

**The proprietary number.** From the stores TheChinaPath runs: the annual GMV level at which cost per dollar of GMV crosses over between models in the portfolio, with the store count stated, plus the median headcount actually required to run one flagship in-house across those stores.

**Outline.**
1. The two questions that settle this, before any model comparison
2. What a TP actually is, and what a TP contract usually takes
3. The in-house model: headcount, tooling, and the two roles brands always forget
4. The agency model and where it differs from a TP in practice
5. The crossover: GMV levels and the cost per dollar at each
6. The hybrid that most mid-size brands end up with
7. Nine questions to put to a TP before signing, and the three answers that end the conversation

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/market-entry-consulting, /work
**CTA.** Model your own crossover point with the Tmall Global setup and run calculator.
**Do not.** Do not write an anti-TP piece; the incumbents at one and two are TPs and the honest answer is that TPs win below the crossover. Do not quote fee percentages without sourcing them or presenting them as observed bands.

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
- [ ] File saved as `output/tmall-partner-vs-in-house-team.md`
