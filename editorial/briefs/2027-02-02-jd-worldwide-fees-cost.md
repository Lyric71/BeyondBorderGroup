---
brief_id: 22A
publish_date: 2027-02-02
week: 22
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a JD Worldwide store costs in year one"
slug: jd-worldwide-fees-cost
primary_query: "jd worldwide fees cost"
difficulty: MED
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 22A: What a JD Worldwide store costs in year one

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 22 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a JD Worldwide store costs in year one |
| Slug | `/insights/jd-worldwide-fees-cost/` |
| Output file | `output/jd-worldwide-fees-cost.md` |
| Primary query | `jd worldwide fees cost` |
| Difficulty | MED |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** What a JD Worldwide store costs in year one
**Query:** jd worldwide fees cost · **Difficulty:** MEDIUM
**Word count:** 2,000 to 2,400

**The answer, in one line.** A JD Worldwide store's year-one cost is built from a refundable deposit, a fixed annual fee and a category commission, and the number that actually decides the budget is the traffic spend needed to make a store visible on a platform where the buyer arrives with intent and compares on price and delivery speed.

**The table it must carry.** One year-one cost table with fourteen or so rows and three columns: line item, lean budget, competitive budget. Rows: deposit by store type, annual platform usage fee, commission by category band, store setup and document preparation, Chinese trademark and authorization costs, listing build and translation, imagery and detail pages, JD logistics and warehousing model, per-order fulfillment, returns, customer service staffing, in-platform advertising, promotional event participation, and operating headcount or agency retainer. Commission and fee rows carry a citation to JD's published merchant terms with a check date. Add a fourth column only if the writer can source the equivalent Tmall Global line, and if so, label it clearly as a cross-reference.

**The proprietary number.** From the JD Worldwide calculator: the median year-one total across completed sessions, the median share of that total sitting in platform fees versus traffic, and how those two shares compare with the same medians from the Tmall Global calculator. Give the session counts.

**Outline.**
1. What JD Worldwide charges, line by line
2. The deposit question, and when you get it back
3. Commission by category, and where the bands actually sit
4. Logistics: what choosing JD's warehouse changes about your cost per order
5. The traffic budget nobody plans for
6. Lean store versus competitive store, side by side
7. Whether JD should be your first store or your second

**Internal links.** /tools/jd-worldwide-setup-and-run, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /grow-in-china/media
**CTA.** Run the JD Worldwide first-year calculator with your category and target GMV.
**Do not.** Do not carry any deposit, annual fee or commission figure over from an older TheChinaPath piece or a competitor page. Pull them from JD's current published terms, cite them, and stamp the check date on the table. Do not let the piece become a JD versus Tmall comparison; that is the week 26 anchor, and this one links to it rather than duplicating it.

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
- [ ] File saved as `output/jd-worldwide-fees-cost.md`
