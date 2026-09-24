---
brief_id: P21
publish_date: 2026-10-30
week: 08
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors","Tmall Partners"]
title: "Importer, distributor or TP: who you need for Tmall Global"
slug: tmall-global-importer-of-record
primary_query: "tmall global importer of record"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P21: Importer, distributor or TP: who you need for Tmall Global

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 08 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Importer, distributor or TP: who you need for Tmall Global |
| Slug | `/insights/tmall-global-importer-of-record/` |
| Output file | `output/tmall-global-importer-of-record.md` |
| Primary query | `tmall global importer of record` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Importer, distributor or TP: who you need for Tmall Global
**Query:** tmall global importer of record · **Tags:** Distributors, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Tmall Global runs on cross-border rules, so you need no Chinese importer of record, but you do need an overseas selling entity, a bonded or direct-mail logistics route and usually a TP to run the store. A distributor only enters when you move to general trade.

**The table it must carry.** Role (overseas entity, TP, logistics provider, importer, distributor), needed for Tmall Global? for general trade? who usually fills it.

**The proprietary number.** TheChinaPath Tmall Global calculator data.

**Outline.** 1. Cross-border vs general trade in one paragraph 2. The table 3. 1210 bonded vs 9610 direct mail 4. When a distributor comes in 5. Common set-ups by brand size

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/enter-china/cross-border-setup`
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
- [ ] File saved as `output/tmall-global-importer-of-record.md`
