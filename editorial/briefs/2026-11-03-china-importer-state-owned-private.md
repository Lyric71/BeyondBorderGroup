---
brief_id: P18
publish_date: 2026-11-03
week: 09
weekday: Tue
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors"]
title: "State-owned or private importer: which one to sign"
slug: china-importer-state-owned-private
primary_query: "china importer state owned private"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P18: State-owned or private importer: which one to sign

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Tue of week 09 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | State-owned or private importer: which one to sign |
| Slug | `/insights/china-importer-state-owned-private/` |
| Output file | `output/china-importer-state-owned-private.md` |
| Primary query | `china importer state owned private` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** State-owned or private importer: which one to sign
**Query:** china importer state owned private · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** State-owned importers bring licences, credit and access to state retail, and move slowly. Private importers move fast and sell harder, and carry more credit risk. Choose on the channel you need and the checks the importer passes, not on ownership alone.

**The table it must carry.** State-owned vs private: licences, speed, payment reliability, retail access, marketing effort, typical fit.

**The proprietary number.** Compass: ownership split of importers on file. Fallback: log the gap.

**Outline.** 1. Why the question comes up at CIIE 2. The table 3. Licences and registrations 4. Credit and payment 5. Channel access 6. Checks for both

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
- [ ] File saved as `output/china-importer-state-owned-private.md`
