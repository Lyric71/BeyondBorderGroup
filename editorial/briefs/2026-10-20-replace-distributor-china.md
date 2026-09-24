---
brief_id: P15
publish_date: 2026-10-20
week: 07
weekday: Tue
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Managing a partner","Distributors","Contracts"]
title: "How to replace a China distributor without losing the shelf"
slug: replace-distributor-china
primary_query: "replace distributor china"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P15: How to replace a China distributor without losing the shelf

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Tue of week 07 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to replace a China distributor without losing the shelf |
| Slug | `/insights/replace-distributor-china/` |
| Output file | `output/replace-distributor-china.md` |
| Primary query | `replace distributor china` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Managing a partner`, `Distributors`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** How to replace a China distributor without losing the shelf
**Query:** replace distributor china · **Tags:** Managing a partner, Distributors, Contracts
**Word count:** 1,600 to 2,400

**The answer, in one line.** Line up the new partner before you give notice, send written notice under the contract, buy back or sell through the old stock, and move every registration, label, listing and authorization to the new partner in one plan. Brands lose the shelf when they switch in the wrong order.

**The table it must carry.** Asset to move (stock, retail listings, product registrations, responsible person, labels, trademark licence, Tmall and Douyin authorizations, customer data), who holds it, how it moves, typical time.

**The proprietary number.** Compass: median months from first meeting to a signed replacement. Fallback: log the gap.

**Outline.**
1. Why switches fail
2. Notice: the Beijing case where missed targets did not end exclusivity without written notice
3. The table
4. Stock: buy-back, sell-off period, price discipline
5. Registrations and the responsible person (link P02)
6. A switch calendar

**Leads (verify, cite primary).** Beijing No. 1 Intermediate Court (2015)一中民(商)终字第7955号 (tiantailaw.com, lead; cite the judgment); NMPA Announcement No. 70 of 2026.

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
- [ ] File saved as `output/replace-distributor-china.md`
