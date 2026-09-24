---
brief_id: P22
publish_date: 2026-11-23
week: 12
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors"]
title: "Choosing a pet food partner after China's 10% tariff"
slug: pet-food-distributor-china
primary_query: "pet food distributor china"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P22: Choosing a pet food partner after China's 10% tariff

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 12 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Choosing a pet food partner after China's 10% tariff |
| Slug | `/insights/pet-food-distributor-china/` |
| Output file | `output/pet-food-distributor-china.md` |
| Primary query | `pet food distributor china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Choosing a pet food partner after China's 10% tariff
**Query:** pet food distributor china · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** China raised the tariff on imported pet food from 4% to 10% in January 2025 and imports fell. The partners who still grow imported pet food hold registrations, cold or dry logistics and online pet-channel reach; check those three before price.

**The table it must carry.** Partner type (importer-distributor, online pet specialist, cross-border TP), what it holds, cost impact of the tariff, fit.

**The proprietary number.** TheChinaPath calculator data (pet food category fees). Interlink with 06L pet food cost.

**Leads (verify, cite primary).** Tariff change (财政部关税司 2025 tariff schedule); import volume 2024 (customs data).

**Internal links.** `/compass/find-a-distributor-in-china`, `/insights/cost-to-sell-pet-food-in-china` (when live), `/compass`
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
- [ ] File saved as `output/pet-food-distributor-china.md`
