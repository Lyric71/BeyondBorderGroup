---
brief_id: P01
publish_date: 2026-09-30
week: 04
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors"]
title: "Where to meet China distributors this season"
slug: china-trade-fairs-find-distributor
primary_query: "china trade fairs find distributor"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P01: Where to meet China distributors this season

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 04 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Where to meet China distributors this season |
| Slug | `/insights/china-trade-fairs-find-distributor/` |
| Output file | `output/china-trade-fairs-find-distributor.md` |
| Primary query | `china trade fairs find distributor` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Where to meet China distributors this season
**Query:** china trade fairs find distributor · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** The fairs that put a foreign brand in front of working Chinese distributors are the China Food and Drinks Fair (autumn in Nanjing, spring in Chengdu), CIIE and FHC in Shanghai for importers, CBE for beauty and SIAL China for food. Go with a shortlist of stands, not a bag of business cards.

**The table it must carry.** Fair, city and 2026/2027 dates, who walks the floor (distributors, importers, retail buyers), categories it suits, what to book before you fly. Dates from the organisers' own sites, re-checked on the day of drafting.

**The proprietary number.** Compass: share of partners on file first met at a fair vs through referral. Fallback: none from the calculators applies, so log the gap and use a published case page only if one fits.

**Outline.**
1. Why a fair is a filter, not a search
2. The table
3. Who is actually on the stand, and who you need to meet
4. Booking meetings in advance (WeChat, the organiser's matchmaking desk)
5. What to bring: price list in RMB, registration status, a one-page brand sheet in Chinese
6. After the fair: the check that separates a buyer from a trader

**Leads (verify, cite primary).** 糖酒会 official site tjhui.cn (115th autumn fair, Nanjing, Oct 15 to 17, 2026); ciie.org (Nov 5 to 10, 2026); FHC and ProWine Shanghai (Nov 10 to 12, 2026); CBE China Beauty Expo (May 12 to 14, 2027); SIAL China (May 18 to 20, 2027); Canton Fair phase 3 (Oct 31 to Nov 4, 2026).

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`, `/enter-china/distribution`
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
- [ ] File saved as `output/china-trade-fairs-find-distributor.md`
