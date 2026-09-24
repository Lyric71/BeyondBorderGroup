---
brief_id: P48
publish_date: 2026-12-23
week: 16
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Asset
tags: ["Finding a partner","Managing a partner","Tmall Partners"]
title: "Switching Tmall Partners: the handover checklist"
slug: switch-tmall-partner
primary_query: "switch tmall partner"
word_count: "1,000 to 1,400"
asset: "Switching Tmall Partners: the handover checklist"
asset_format: "printable page"
status: not_started
---

# BRIEF P48: Switching Tmall Partners: the handover checklist

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 16 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Switching Tmall Partners: the handover checklist |
| Slug | `/insights/switch-tmall-partner/` |
| Output file | `output/switch-tmall-partner.md` |
| Primary query | `switch tmall partner` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Managing a partner`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |
| Asset | `output/guides/switch-tmall-partner.md`, publishes to `/guides/switch-tmall-partner/` (printable page) |

## The brief

**Title:** Switching Tmall Partners: the handover checklist
**Query:** switch tmall partner · **Tags:** Managing a partner, Tmall Partners
**Word count:** 1,000 to 1,400

**The answer, in one line.** A clean TP switch moves the store, the accounts, the data, the content and the customer service history in one planned window outside a festival, with the old partner paid through the handover.

**The table it must carry.** Item, owner before, owner after, deadline, check.

**Asset.** Printable handover checklist. Interlink with P08 and P05.

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
- [ ] File saved as `output/switch-tmall-partner.md`
