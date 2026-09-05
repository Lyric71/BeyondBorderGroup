---
brief_id: 01A
publish_date: 2026-09-08
week: 01
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Distributor or your own store in China: the honest comparison"
slug: china-distributor-vs-own-store
primary_query: "china distributor vs own store"
difficulty: OPEN
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 01A: Distributor or your own store in China: the honest comparison

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 01 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Distributor or your own store in China: the honest comparison |
| Slug | `/insights/china-distributor-vs-own-store/` |
| Output file | `output/china-distributor-vs-own-store.md` |
| Primary query | `china distributor vs own store` |
| Difficulty | OPEN |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Distributor or your own store in China: the honest comparison
**Query:** china distributor vs own store · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A distributor gets you into China with no working capital and no team, and you pay for it in margin, in data you never see, and in a brand position you cannot control. Your own store costs cash up front and buys back all three.

**The table it must carry.** Eight rows, two columns, distributor against own store: working capital required, gross margin retained, who owns the customer data, who controls pricing, who controls assortment, speed to first revenue, what happens if it fails, what you own after three years.

**The proprietary number.** At least one from Compass or from stores under management. Candidates: how long a distributor shortlist actually takes to build against the quarter most brands budget for it, or the share of first-year GMV a store retains against what a distributor arrangement returns. Label the source in the copy.

**Outline.**
1. Why the honest version is rare: both options are sold by people who only offer one
2. What a distributor actually does, and the four things they do not
3. What your own store actually costs, in cash and in headcount
4. The comparison table
5. The three conditions that decide it: category, cash, and how long you can wait
6. The hybrid nobody names, and when it is the right answer
7. What to do next

**Internal links.** `/enter-china/distribution`, `/compass`, `/grow-in-china/cross-border-ecommerce`, `/tools/tmall-global-setup-and-run`
**CTA.** Compass shortlist.
**Do not.** Sell against distributors. TheChinaPath sells distributor sourcing, so a piece that rubbishes the model reads as self-serving and contradicts the service page. The credibility comes from being the only one willing to name the cost of both.

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
- [ ] File saved as `output/china-distributor-vs-own-store.md`
