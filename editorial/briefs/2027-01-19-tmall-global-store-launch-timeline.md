---
brief_id: 20A
publish_date: 2027-01-19
week: 20
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Month one on Tmall Global: what actually happens"
slug: tmall-global-store-launch-timeline
primary_query: "tmall global store launch timeline"
difficulty: OPEN
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 20A: Month one on Tmall Global: what actually happens

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 20 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Month one on Tmall Global: what actually happens |
| Slug | `/insights/tmall-global-store-launch-timeline/` |
| Output file | `output/tmall-global-store-launch-timeline.md` |
| Primary query | `tmall global store launch timeline` |
| Difficulty | OPEN |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Month one on Tmall Global: what actually happens
**Query:** tmall global store launch timeline · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** Month one on Tmall Global is a documentation and integration project, not a sales month, and the brands that hit their launch date are the ones that had the trademark, the corporate documents and the first inbound shipment ready before the application was ever submitted.

**The table it must carry.** A day-by-day run table across the first 30 days, roughly fifteen rows grouped by week. Columns: day range, what the platform is doing, what the brand has to deliver that week, what blocks the next step if it slips, and who owns it (brand, TP or operator, logistics partner). Rows must be concrete: document pack submitted, trademark verification, deposit and annual fee paid, store shell created, category and product qualification, listing build and Chinese copy, image and detail page approval, warehouse and inbound booking, first inbound received and put away, payment and settlement account verified, customer service account staffed and hours set, soft launch, first paid traffic. Do not smooth this into four tidy weeks; the point of the piece is that it is uneven.

**The proprietary number.** Across every Tmall Global store the team has opened: the median number of days from document submission to storefront live, the range between the fastest and slowest, and the single most common cause of delay, with the count of stores behind the figure and the period it covers.

**Outline.**
1. The two things that decide your launch date, and both happen before day one
2. Week one: documents, deposit, and the verification queue
3. Week two: category qualification and the listings nobody budgeted time for
4. Week three: inventory, inbound, and the first thing that always slips
5. Week four: soft launch, first orders, and what the data does not tell you yet
6. What month one costs
7. Month two, so you know what you are walking into

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /enter-china/branding-localisation, /work
**CTA.** Run the Tmall Global first-year calculator before you commit to a launch date.
**Do not.** Do not present the timeline as a guarantee. Say which steps are inside the brand's control and which sit in a platform review queue whose duration nobody outside Alibaba can promise. Do not describe the store opening as a marketing launch; the marketing sequence is a separate piece and this one stops at first orders.

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
- [ ] File saved as `output/tmall-global-store-launch-timeline.md`
