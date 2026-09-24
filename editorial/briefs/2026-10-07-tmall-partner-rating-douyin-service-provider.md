---
brief_id: P06
publish_date: 2026-10-07
week: 05
weekday: Wed
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Due diligence","Tmall Partners","Douyin Partners"]
title: "Tmall and Douyin partner ratings: what the stars mean"
slug: tmall-partner-rating-douyin-service-provider
primary_query: "tmall partner rating douyin service provider"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P06: Tmall and Douyin partner ratings: what the stars mean

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Wed of week 05 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Tmall and Douyin partner ratings: what the stars mean |
| Slug | `/insights/tmall-partner-rating-douyin-service-provider/` |
| Output file | `output/tmall-partner-rating-douyin-service-provider.md` |
| Primary query | `tmall partner rating douyin service provider` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Due diligence`, `Tmall Partners`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Tmall and Douyin partner ratings: what the stars mean
**Query:** tmall partner rating douyin service provider · **Tags:** Due diligence, Tmall Partners, Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Tmall Global scores its partners quarterly out of 12 points and grades them three to five stars; Douyin grades rated providers Diamond, Gold or Silver. The badge tells you scale and platform standing. It says nothing about your category, so use it to build a long list and nothing more.

**The table it must carry.** Platform, rating scale, how it is scored and how often, what a top rating gets the partner, what it does not tell you.

**The proprietary number.** Compass: rating mix of TPs and DPs on file. Fallback: log the gap.

**Outline.**
1. Why platforms rate partners at all
2. Tmall Global TP stars (12-point score, quarterly; only 4 and 5 stars meet brands at recruitment events)
3. Domestic Tmall's v-partner list
4. Douyin Diamond, Gold, Silver
5. The table
6. How to check a claimed rating yourself

**Leads (verify, cite primary).** tmall.hk/wow/import/act/tpgrowth (official); v-partner list, 腾讯新闻 Dec 27, 2024 (news.qq.com/rain/a/20241227A067I400); Douyin H2 2023 ratings (news.qq.com/rain/a/20230915A02JQI00); 1,500 registered and 350 rated providers (网易 Jan 7, 2026, c.m.163.com/news/a/KIM90VO8055684L8.html).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
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
- [ ] File saved as `output/tmall-partner-rating-douyin-service-provider.md`
