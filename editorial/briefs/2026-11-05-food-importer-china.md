---
brief_id: P33
publish_date: 2026-11-05
week: 09
weekday: Thu
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Distributors"]
title: "Choosing a food and drink importer in China"
slug: food-importer-china
primary_query: "food importer china"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P33: Choosing a food and drink importer in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Thu of week 09 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Choosing a food and drink importer in China |
| Slug | `/insights/food-importer-china/` |
| Output file | `output/food-importer-china.md` |
| Primary query | `food importer china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Choosing a food and drink importer in China
**Query:** food importer china · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** An importer for food and drink must handle GACC registration of your factory, Chinese labelling that holds up in court, and the cold or dry chain your product needs. The label alone can cost ten times the price in damages, so check the importer's label review before its sales pitch.

**The table it must carry.** Check, why it matters, the rule, the red flag.

**Leads (verify, cite primary).** GACC Decree 248 (gov.cn); Food Safety Law Art. 148 (npc.gov.cn). Spring Chengdu fair hook.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
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
- [ ] File saved as `output/food-importer-china.md`
