---
brief_id: 37A
publish_date: 2027-05-18
week: 37
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "618: the last three weeks"
slug: 618-last-minute-strategy
primary_query: "618 last minute strategy"
difficulty: SEAS
word_count: "1,900 to 2,300"
status: not_started
---

# BRIEF 37A: 618: the last three weeks

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 37 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | 618: the last three weeks |
| Slug | `/insights/618-last-minute-strategy/` |
| Output file | `output/618-last-minute-strategy.md` |
| Primary query | `618 last minute strategy` |
| Difficulty | SEAS |
| Body length | 1,900 to 2,300 (body only, per the char-count rule) |

## The brief

**Title:** 618: the last three weeks
**Query:** 618 last minute strategy · **Difficulty:** SEASONAL
**Word count:** 1,900 to 2,300

**The answer, in one line.** In the last three weeks before 618 almost every strategic lever is already locked, so the work that still moves the number is narrow and operational: stock allocation between warehouses, the traffic mix you buy in the pre-sale window, livestream slot execution, and having enough customer service capacity to stop conversion leaking on the two peak nights.

**The table it must carry.** One time-window grid, five rows, five columns. Columns: Window, What you can still change, What is already locked, The one metric to watch in this window, The failure mode. Rows: (1) T-21 to T-15, (2) T-14 to T-8, (3) T-7 to T-1, (4) the sale windows themselves, (5) T+1 to T+14. The "already locked" column is the point of the table and must be specific: named registrations, price commitments and inbound cut-offs, not generalities. Writer to confirm current-year platform pre-sale and deposit mechanics against a cited source and to note that mechanics change annually.

**The proprietary number.** From the stores TheChinaPath runs: the share of full-festival GMV that landed in the pre-sale and first sale window versus the closing window across the portfolio, and the median change in cost per order between the pre-sale window and peak night. State the store count.

**Outline.**
1. What is already decided, and why arguing about it now costs you money
2. T-21 to T-15: stock allocation and the SKU list you actually push
3. T-14 to T-8: traffic mix, pre-sale, and the budget you hold back
4. T-7 to T-1: livestream execution, customer service staffing and the pre-flight checklist
5. On the night: the four numbers, and the two levers you still hold
6. The first fourteen days after: returns, reconciliation, and what the data is worth
7. The three things to fix now for next year, while it still hurts

**Internal links.** /grow-in-china/campaigns, /grow-in-china/cross-border-ecommerce, /tools/douyin-cost-calculator, /grow-in-china/media, /work
**CTA.** Run your peak-night cost per order against the Douyin cost calculator before you commit the closing budget.
**Do not.** Do not repeat the 100-day plan; link back to it and stay inside the three-week window. Do not promise recovery moves that require a platform registration that has already closed.
**Territory guard.** Livestream host booking and creator activation appear as execution dependencies with owners and deadlines. Creator relationships and content production hand off to TheRedScroll. One line, in section four.

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
- [ ] File saved as `output/618-last-minute-strategy.md`
