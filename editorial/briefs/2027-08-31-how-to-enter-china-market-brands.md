---
brief_id: 52A
publish_date: 2027-08-31
week: 52
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "The year-one China channel decision, revisited"
slug: how-to-enter-china-market-brands
primary_query: "how to enter china market brands"
difficulty: HELD
word_count: "2,300 to 2,400"
status: not_started
---

# BRIEF 52A: The year-one China channel decision, revisited

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 52 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The year-one China channel decision, revisited |
| Slug | `/insights/how-to-enter-china-market-brands/` |
| Output file | `output/how-to-enter-china-market-brands.md` |
| Primary query | `how to enter china market brands` |
| Difficulty | HELD |
| Body length | 2,300 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** The year-one China channel decision, revisited
**Query:** how to enter china market brands · **Difficulty:** HELD
**Word count:** 2,300 to 2,400

**The answer, in one line.** After a year of publishing our own cost and store data, the year-one answer has narrowed: for most consumer brands the first channel is a cross-border marketplace store or a distributor, not both, and the choice turns on three inputs, your category's compliance load, your unit economics at Chinese landed cost, and whether you have anyone who can operate in Chinese working hours.

**The table it must carry.** The decision table behind the tree, one row per route, 6 to 8 rows: cross-border marketplace flagship, cross-border on a social commerce platform, distributor with cross-border stock, distributor on general trade, general trade with your own entity, partner-operated store through a TP, and marketplace plus distributor in parallel. Columns: first-year fixed cost band with the basis stated, months to first order, who holds the customer relationship, who holds the inventory risk, the category conditions that make this route correct, and the single condition that rules it out. Cross-reference each row to the piece published this year that covers it in full, with the internal link inside the table cell.

**The proprietary number.** The year's own accumulated data, presented as a short summary block: total calculator runs completed across the three tools during the year with the median first-year cost by route, the number of category-level fee changes recorded across the two fee benchmark editions, the median weeks to first order from the launch timeline piece, and the store count behind the 618 report. Every figure carries the sample size and links to the piece it came from. This is the capstone's proprietary number and it is cumulative by design.

**Outline.**
1. What we published this year, and what it changed about the standard answer
2. The three inputs that decide the route
3. The decision table
4. Where the answer differs by category, with the ledger pages as evidence
5. What the cost data says a year later
6. The two routes we now recommend less often than we did
7. How to run this decision on your own numbers

**Internal links.** /enter-china/market-entry-consulting, /compass/shortlist, /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /grow-in-china/cross-border-ecommerce (plus in-table links to the year's category and cost pieces, which do not count against the 3 to 5 body links)
**CTA.** Request a Compass shortlist, or run your route in the market entry calculator.
**Do not.** Do not write this as a year in review; it is a decision page that happens to be evidenced by a year of publishing, and the first sixty words must contain the decision, not the retrospective. Do not restate any regulatory point from the year's pieces; link to the piece that carries the sourced version instead.

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
- [ ] File saved as `output/how-to-enter-china-market-brands.md`
