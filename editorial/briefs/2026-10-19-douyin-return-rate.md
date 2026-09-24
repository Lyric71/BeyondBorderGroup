---
brief_id: P14
publish_date: 2026-10-19
week: 07
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Douyin Partners"]
title: "Douyin return rates by category, and what they cost you"
slug: douyin-return-rate
primary_query: "douyin return rate"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P14: Douyin return rates by category, and what they cost you

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 07 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Douyin return rates by category, and what they cost you |
| Slug | `/insights/douyin-return-rate/` |
| Output file | `output/douyin-return-rate.md` |
| Primary query | `douyin return rate` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Douyin return rates by category, and what they cost you
**Query:** douyin return rate · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Returns on Douyin run far higher than on shelf eCommerce, and they vary by category from single digits in food to half of orders in women's apparel. Pay your partner on sales after returns, and budget cost per kept order, not per order.

**The table it must carry.** Category, reported return range, source and date, what it does to cost per kept order at a stated basket.

**The proprietary number.** TheChinaPath Douyin calculator (cost per kept order at 5%, 30%, 50% returns).

**Outline.**
1. Why live commerce returns more
2. The table
3. Douyin's own position on the numbers
4. Cost per kept order
5. Commission on gross vs net
6. What a partner can do to bring returns down

**Leads (verify, cite primary).** 人人都是产品经理 (woshipm.com/it/6128324.html, lead); 界面 (jiemian.com/article/9873801.html); Douyin rebuttal of the 90% story (新浪财经 June 13, 2025, finance.sina.cn/cj/2025-06-13/detail-inezxtpa5801214.d.html).

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
**CTA.** Compass shortlist.

## Slot spec

```
SLOT: Partner piece (Finding a partner cluster), weekday per schedule.csv
BRIEF: briefs/YYYY-MM-DD-<slug>.md

Every partner piece must carry:
1. A title that is the query a buyer types, or its answer.
2. The answer inside the first 60 words.
3. One real table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such
   (Compass figure, else calculator or case data, per the brief).
5. Byline TheChinaPath, published date and updated date.
6. Links: the guide it serves, /compass, and one other published
   partner piece when one exists. One CTA: the Compass shortlist.
7. Tags: "Finding a partner" plus the topic tags in the brief.
8. No competitor cited or named. Chinese primary sources first.

KILL CONDITION: none. Partner pieces always ship. If a proprietary
figure is missing, use the fallback and log it.
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
- [ ] File saved as `output/douyin-return-rate.md`
