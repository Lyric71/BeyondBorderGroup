---
brief_id: P32
publish_date: 2026-12-11
week: 14
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Distributors","Tmall Partners","Douyin Partners"]
title: "Choosing a China partner for a beauty brand"
slug: cosmetics-distributor-china
primary_query: "cosmetics distributor china"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P32: Choosing a China partner for a beauty brand

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 14 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Choosing a China partner for a beauty brand |
| Slug | `/insights/cosmetics-distributor-china/` |
| Output file | `output/cosmetics-distributor-china.md` |
| Primary query | `cosmetics distributor china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Tmall Partners`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Choosing a China partner for a beauty brand
**Query:** cosmetics distributor china · **Tags:** Distributors, Tmall Partners, Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** A beauty brand's partner choice starts with registration: general trade needs an NMPA filing and a domestic responsible person, cross-border does not. From there, a TP for search-led categories, a DP for demonstration-led ones, a distributor for department stores and Watsons-type chains.

**The table it must carry.** Route, registration, partner type, channels, cash, time.

**The proprietary number.** TheChinaPath calculator data (skincare, colour cosmetics). Interlink with 35A and 02L.

**Internal links.** all three guides, `/compass`
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
- [ ] File saved as `output/cosmetics-distributor-china.md`
