---
brief_id: P04
publish_date: 2026-10-05
week: 05
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Douyin Partners"]
title: "What a Douyin Partner costs: retainers, commission and creators"
slug: douyin-agency-cost
primary_query: "douyin agency cost"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P04: What a Douyin Partner costs: retainers, commission and creators

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 05 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a Douyin Partner costs: retainers, commission and creators |
| Slug | `/insights/douyin-agency-cost/` |
| Output file | `output/douyin-agency-cost.md` |
| Primary query | `douyin agency cost` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** What a Douyin Partner costs: retainers, commission and creators
**Query:** douyin agency cost · **Tags:** Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** Most Douyin Partners charge a monthly retainer plus a commission on GMV, and the brand funds Qianchuan ads and creator commission on top. Price the whole stack at a stated GMV before comparing quotes, because commission ladders move the total more than the retainer does.

**The table it must carry.** Cost line (retainer, GMV commission, creator commission, slot fees, Qianchuan, co-fund), how it is charged, a typical range with source, what to watch. Then one worked year at a stated GMV.

**The proprietary number.** TheChinaPath Douyin calculator data (retainer tiers, commission, cost per kept order).

**Outline.**
1. The fee models in use (base plus commission, commission only, tiered ladders)
2. The table
3. A worked year at a stated GMV
4. Commission on gross or on net of returns
5. What the retainer should buy (live hours, videos, service)
6. How to compare three quotes on one page

**Leads (verify, cite primary).** Douyin 精选联盟 commission rules (jinritemai); 纯佣 commission settings (5% to 80%, platform rule); a tiered ladder reported by IT之家 (ithome.com/0/943/132.htm, lead); settlement T+7 or T+15 (platform rules).

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
- [ ] File saved as `output/douyin-agency-cost.md`
