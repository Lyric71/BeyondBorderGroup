---
brief_id: 02A
publish_date: 2026-09-15
week: 02
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a livestream room actually costs"
slug: china-livestream-cost-for-brands
primary_query: "china livestream cost for brands"
difficulty: OPEN
word_count: "1,900 to 2,300"
status: not_started
---

# BRIEF 02A: What a livestream room actually costs

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 02 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a livestream room actually costs |
| Slug | `/insights/china-livestream-cost-for-brands/` |
| Output file | `output/china-livestream-cost-for-brands.md` |
| Primary query | `china livestream cost for brands` |
| Difficulty | OPEN |
| Body length | 1,900 to 2,300 (body only, per the char-count rule) |

## The brief

**Title:** What a livestream room actually costs
**Query:** china livestream cost for brands · **Difficulty:** OPEN
**Word count:** 1,900 to 2,300

**The answer, in one line.** A branded livestream room is a fixed monthly cost, not a campaign cost, and the room is cheaper than most brands expect while the traffic to fill it is not.

**Why this is the second piece.** The current top three results are 2023 journalism. Nobody has published a cost breakdown. This is the single most open high-intent query on the board.

**The table it must carry.** Cost per hour of broadcast, broken into: studio and set, host and co-host, operator and moderator, paid traffic to fill the room, platform commission, KOL or MCN cut where used, and product samples and giveaway. Give a monthly total at three levels of ambition: a store-led room running daily, a room running three days a week, and a one-off event with an external host.

**The proprietary number.** Cost per order from a store-led room against a celebrity event, from stores under management. This is the number that makes the piece.

**Outline.**
1. The question nobody answers, and why: agencies quote projects, not rates
2. The two models: store-led rooms and celebrity events, and why they are different businesses
3. The cost table
4. Where the money actually goes, which is traffic, not production
5. What a room returns at each level, with the cost-per-order comparison
6. When not to build one

**Internal links.** `/grow-in-china/social-commerce`, `/tools/douyin-cost-calculator`, `/social-in-china`
**CTA.** Douyin calculator.
**Do not.** Quote TheChinaPath's own rates. Market cost ranges are the subject, agency pricing is not.

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
- [ ] File saved as `output/china-livestream-cost-for-brands.md`
