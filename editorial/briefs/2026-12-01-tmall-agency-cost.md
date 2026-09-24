---
brief_id: P31
publish_date: 2026-12-01
week: 13
weekday: Tue
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Tmall Partners"]
title: "What a Tmall Partner costs: retainer, commission and extras"
slug: tmall-agency-cost
primary_query: "tmall agency cost"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P31: What a Tmall Partner costs: retainer, commission and extras

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Tue of week 13 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a Tmall Partner costs: retainer, commission and extras |
| Slug | `/insights/tmall-agency-cost/` |
| Output file | `output/tmall-agency-cost.md` |
| Primary query | `tmall agency cost` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** What a Tmall Partner costs: retainer, commission and extras
**Query:** tmall agency cost · **Tags:** Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A Tmall Partner usually charges a monthly retainer plus a commission on sales, and the extras (design, content, media management, warehousing) decide the real bill. Compare quotes on total cost at your expected sales, not on the retainer.

**The table it must carry.** Fee line (retainer, sales commission, performance bonus, setup, design and content, media management fee, warehousing and fulfillment), how it is usually charged, what to negotiate.

**The proprietary number.** TheChinaPath Tmall Global calculator (year-one partner cost at three sales levels, and the cash committed before the first order).

**Outline.**
1. How Tmall Partners charge
2. The table
3. What a year costs at three sales levels
4. What to negotiate, and what not to

**Leads (verify, cite primary).** Tmall Global service market (服务市场) public listings for fee models; Tmall Global partner program rules; dated Chinese business media on 代运营 fee models (界面, 36氪, 第一财经). No store operator's own filings or blog. Interlink with P04 (Douyin Partner cost) and P08 (TP contract terms).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass`
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
- [ ] File saved as `output/tmall-agency-cost.md`
