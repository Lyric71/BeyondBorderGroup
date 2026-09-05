---
brief_id: 26A
publish_date: 2027-03-02
week: 26
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "Tmall Global vs JD Worldwide vs Douyin: which store first"
slug: tmall-vs-jd-vs-douyin
primary_query: "tmall vs jd vs douyin"
difficulty: HELD
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 26A: Tmall Global vs JD Worldwide vs Douyin: which store first

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 26 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Tmall Global vs JD Worldwide vs Douyin: which store first |
| Slug | `/insights/tmall-vs-jd-vs-douyin/` |
| Output file | `output/tmall-vs-jd-vs-douyin.md` |
| Primary query | `tmall vs jd vs douyin` |
| Difficulty | HELD |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** Tmall Global vs JD Worldwide vs Douyin: which store first
**Query:** tmall vs jd vs douyin · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Open Tmall Global first if your category is bought by brand and researched before purchase, JD Worldwide first if it is bought on specification and delivery speed, and Douyin first if the product can be demonstrated in thirty seconds, and the deciding input is your category, not your budget.

**The table it must carry.** One decision table, three platform columns and roughly fourteen rows, built so a reader can score their own situation: buyer intent and how people arrive, category fit, year-one all-in cost band, deposit and annual fee, commission band, time from application to live, document and trademark requirements, logistics model, content and staffing load per month, paid traffic dependency, discovery versus search, offline and brand halo effect, what the platform is bad at, and the single condition that flips the recommendation. Every fee cell cites the platform's current published terms with a check date, and the cost band cells reference the corresponding calculator.

**The proprietary number.** Across the stores under management: how many opened on each of the three platforms first, and of the brands that opened a second store within eighteen months, which platform they added and how long the gap was. Give the store count and the period, and say plainly what the sample does and does not prove.

**Outline.**
1. The short answer, by category
2. How buyers arrive on each platform, and why that changes everything downstream
3. Cost and time to open, side by side
4. The monthly operating load each platform demands
5. The decision table
6. The three situations where the obvious answer is wrong
7. What a second store costs once the first one runs

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /grow-in-china/social-commerce
**CTA.** Run all three calculators with the same category and target GMV and compare the totals.
**Do not.** Do not declare an overall winner. This query is held by pages that hedge, and the way to beat them is to answer per category and per buyer behavior, with a named condition that flips each recommendation. Do not restate the fee tables from the week 19, 22 and 23 pieces at length; summarize, cite, and link, so the benchmark stays the single source that gets updated.

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
- [ ] File saved as `output/tmall-vs-jd-vs-douyin.md`
