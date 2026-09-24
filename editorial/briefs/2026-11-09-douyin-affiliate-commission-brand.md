---
brief_id: P35
publish_date: 2026-11-09
week: 10
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Douyin Partners"]
title: "What Douyin creator commission really costs a brand"
slug: douyin-affiliate-commission-brand
primary_query: "douyin affiliate commission brand"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P35: What Douyin creator commission really costs a brand

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 10 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What Douyin creator commission really costs a brand |
| Slug | `/insights/douyin-affiliate-commission-brand/` |
| Output file | `output/douyin-affiliate-commission-brand.md` |
| Primary query | `douyin affiliate commission brand` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** What Douyin creator commission really costs a brand
**Query:** douyin affiliate commission brand · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Creators on Douyin earn a commission on sales through the affiliate program (精选联盟), and head creators add a slot fee (坑位费). Your DP books them; you pay both, so ask for creator results on sales after returns and cost per kept order.

**The table it must carry.** Creator tier, commission range, slot fee, what it buys, source.

**The proprietary number.** TheChinaPath Douyin calculator data. Territory rule: transaction side only; seeding hands off to TheRedScroll.

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
- [ ] File saved as `output/douyin-affiliate-commission-brand.md`
