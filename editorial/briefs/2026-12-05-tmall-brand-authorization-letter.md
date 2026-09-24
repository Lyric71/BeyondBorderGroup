---
brief_id: P39
publish_date: 2026-12-05
week: 13
weekday: Sat
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Contracts","Tmall Partners"]
title: "The authorization letter: your lever over Tmall resellers"
slug: tmall-brand-authorization-letter
primary_query: "tmall brand authorization letter"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P39: The authorization letter: your lever over Tmall resellers

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Sat of week 13 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The authorization letter: your lever over Tmall resellers |
| Slug | `/insights/tmall-brand-authorization-letter/` |
| Output file | `output/tmall-brand-authorization-letter.md` |
| Primary query | `tmall brand authorization letter` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Contracts`, `Tmall Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** The authorization letter: your lever over Tmall resellers
**Query:** tmall brand authorization letter · **Tags:** Contracts, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** On Tmall a flagship store needs your exclusive authorization, a specialty store a first-level one, and a multi-brand store accepts up to four levels. Every letter you sign is a store you will have to police, so issue them sparingly and with an end date.

**The table it must carry.** Store type, authorization needed, levels allowed, control the brand keeps.

**Leads (verify, cite primary).** Tmall store-type entry rules; Nike ending Topsports' online authorization from Jan 1, 2027 (36氪, 36kr.com/p/3913410529219721).

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
- [ ] File saved as `output/tmall-brand-authorization-letter.md`
