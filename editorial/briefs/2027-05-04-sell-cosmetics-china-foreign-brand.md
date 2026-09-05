---
brief_id: 35A
publish_date: 2027-05-04
week: 35
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell beauty and skincare in China in 2027"
slug: sell-cosmetics-china-foreign-brand
primary_query: "sell cosmetics china foreign brand"
difficulty: HELD
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 35A: How to sell beauty and skincare in China in 2027

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 35 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell beauty and skincare in China in 2027 |
| Slug | `/insights/sell-cosmetics-china-foreign-brand/` |
| Output file | `output/sell-cosmetics-china-foreign-brand.md` |
| Primary query | `sell cosmetics china foreign brand` |
| Difficulty | HELD |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell beauty and skincare in China in 2027
**Query:** sell cosmetics china foreign brand · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Beauty is not one category in China, it is five with different rules, and the first decision a foreign brand makes is which of its own SKUs to launch, because a facial serum, a sunscreen, a lipstick, an anti-dandruff shampoo and a fragrance each carry a different filing burden, a different lead time and a different first platform.

**The table it must carry.** One subcategory grid, five rows, six columns. Columns: Subcategory, Filing or registration path, Realistic lead time in weeks, Cross-border eligible, Recommended first platform, Launch cost band per SKU. Rows: facial skincare, colour cosmetics, sun care, hair care, fragrance. Every regulatory cell must be verified and cited by the writer with a date checked, including the current distinction between general cosmetics filing and special cosmetics registration, which of these five falls where, the current animal testing exemption conditions, and whether the cross-border channel alters the obligation.

**The proprietary number.** From TheChinaPath's calculator runs plus the store portfolio: the median year one cost per SKU modelled for a foreign beauty brand launching cross-border, broken into compliance, platform, inventory and marketing, with the run count stated, plus the median number of SKUs those brands actually launched with.

**Outline.**
1. Pick your launch SKUs before you pick your platform
2. The five subcategories and what each one costs you in time
3. Cross-border first: what it buys you and what it costs you later
4. Platform order: Tmall Global, Douyin, JD Worldwide, RedNote, and why the sequence matters
5. Year one, priced: compliance, inventory, store, media
6. The move onshore, and the three signals that say it is time
7. What kills foreign beauty brands in year two

**Internal links.** /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/social-commerce
**CTA.** Price your own SKU set with the Tmall Global setup and run calculator, then compare against Douyin.
**Do not.** Do not open with market size or a growth statistic; the incumbent at position one owns that framing and it is a research page, not an operator page. Do not treat beauty as one category anywhere in the piece. Link back to the W2 ledger for the facial skincare cost detail rather than repeating it, and forward to the W27 colour cosmetics ledger and the W36 sun care ledger.
**Territory guard.** Creator seeding and content production appear only as budget lines in section five, with a hand-off to TheRedScroll. One line.

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
- [ ] File saved as `output/sell-cosmetics-china-foreign-brand.md`
