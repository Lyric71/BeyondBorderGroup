---
brief_id: 29A
publish_date: 2027-03-23
week: 29
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell health supplements in China without a Blue Hat"
slug: sell-supplements-china-cross-border
primary_query: "sell supplements china cross-border"
difficulty: HELD
word_count: "2,100 to 2,400"
status: not_started
---

# BRIEF 29A: How to sell health supplements in China without a Blue Hat

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 29 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell health supplements in China without a Blue Hat |
| Slug | `/insights/sell-supplements-china-cross-border/` |
| Output file | `output/sell-supplements-china-cross-border.md` |
| Primary query | `sell supplements china cross-border` |
| Difficulty | HELD |
| Body length | 2,100 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell health supplements in China without a Blue Hat
**Query:** sell supplements china cross-border · **Difficulty:** HELD
**Word count:** 2,100 to 2,400

**The answer, in one line.** A foreign supplement brand can sell in China without a Blue Hat by staying on the cross-border channel, where the product ships as a personal import and the health food registration does not apply, but the trade is real: no health claims, no offline retail, no general trade distribution, and a permanent ceiling on where the product can be sold.

**The table it must carry.** One route comparison, four columns, five rows. Columns: Route, What you may claim on pack and on the detail page, Approval or filing required, Realistic timeline, Channels this opens and closes. Rows: (1) Cross-border ecommerce, bonded, (2) Cross-border ecommerce, direct mail, (3) General trade as ordinary food, (4) Health food filing route, (5) Health food registration route, the Blue Hat. Writer must verify and cite the current distinction between the filing route and the registration route, the current ingredient list position for each, and current cross-border positive list coverage for supplement categories, and must date every regulatory claim.

**The proprietary number.** From the Compass distributor database: how many distributors in Compass carry imported supplements, how many of those hold a health food registration record on at least one product they distribute, and the ratio. That ratio is the piece's argument for why the offline route is slower than brands assume.

**Outline.**
1. What a Blue Hat is, and what it costs you in time to get one
2. The cross-border exemption: what it covers, what it does not
3. What you cannot say: claims language on a cross-border listing
4. The ceiling: three things you give up by staying cross-border
5. When to start the Blue Hat clock, and what triggers it
6. Running both at once: the split-SKU approach and where it breaks
7. A decision test in five questions

**Internal links.** /enter-china/cross-border-setup, /enter-china/distribution, /compass, /grow-in-china/cross-border-ecommerce, /tools/tmall-global-setup-and-run
**CTA.** Shortlist distributors in Compass who already hold registration records in your subcategory.
**Do not.** Do not state any ingredient or claim rule as settled fact. Every regulatory line in this piece is the writer's to verify, cite and date. Do not imply cross-border is a loophole; frame it as a channel with a defined boundary.

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
- [ ] File saved as `output/sell-supplements-china-cross-border.md`
