---
brief_id: 19A
publish_date: 2027-01-12
week: 19
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a Douyin cross-border store costs in year one"
slug: douyin-cross-border-store-cost
primary_query: "douyin cross border store cost"
difficulty: WEAK
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 19A: What a Douyin cross-border store costs in year one

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 19 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a Douyin cross-border store costs in year one |
| Slug | `/insights/douyin-cross-border-store-cost/` |
| Output file | `output/douyin-cross-border-store-cost.md` |
| Primary query | `douyin cross border store cost` |
| Difficulty | WEAK |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** What a Douyin cross-border store costs in year one
**Query:** douyin cross border store cost · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** A Douyin cross-border store is cheap to open and expensive to run, because the platform fees are the small part and the content and live selling operation that makes the store move is a monthly cost the brand carries whether or not anything sells that week.

**The table it must carry.** One year-one cost table, twelve to fifteen line items down the rows, three columns: lean setup, typical setup, and what drives the number up. Rows: deposit, annual technical service fee, commission by category band (verify the current published rate card and cite it), store setup and certification documents, product listing and Chinese copy, imagery and short-form video production, live room hours, host and operator staffing, paid traffic, sample and gifting cost, logistics per order, returns, and platform tools. Every fee row that comes from Douyin's published rules is cited; every operating row is presented as a range with the assumption stated.

**The proprietary number.** From the Douyin calculator: the median year-one total across all completed sessions, the median split between platform fees and content and traffic spend, and the single line item that most often surprises operators, taken from the aggregate. Say how many sessions the figures come from.

**Outline.**
1. What Douyin actually charges you
2. The costs that are not on Douyin's rate card
3. Content is a fixed cost, not a campaign
4. What a live selling hour costs to staff and stock
5. Two budgets: the lean store and the one that competes
6. When Douyin should be the first store and when it should be the third
7. What breakeven looks like on this platform

**Internal links.** /tools/douyin-cost-calculator, /grow-in-china/social-commerce, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run
**CTA.** Run the Douyin cost calculator with your category and target GMV.
**Do not.** Do not quote deposit or commission figures without pulling them from Douyin's current published merchant rules and citing them, with a visible check date, because these move.
**Territory guard.** Creator seeding, agency-run KOL programs and daily content production belong to TheRedScroll, so the content cost section prices the work as a line item and links to /social-in-china instead of pitching it.

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
- [ ] File saved as `output/douyin-cross-border-store-cost.md`
