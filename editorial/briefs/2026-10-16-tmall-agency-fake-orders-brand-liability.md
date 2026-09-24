---
brief_id: P13
publish_date: 2026-10-16
week: 06
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Case note
tags: ["Finding a partner","Due diligence","Tmall Partners","Douyin Partners"]
title: "When a Tmall agency fakes orders, the brand pays"
slug: tmall-agency-fake-orders-brand-liability
primary_query: "tmall agency fake orders brand liability"
word_count: "1,000 to 1,300"
status: not_started
---

# BRIEF P13: When a Tmall agency fakes orders, the brand pays

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 06 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | When a Tmall agency fakes orders, the brand pays |
| Slug | `/insights/tmall-agency-fake-orders-brand-liability/` |
| Output file | `output/tmall-agency-fake-orders-brand-liability.md` |
| Primary query | `tmall agency fake orders brand liability` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,300 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Due diligence`, `Tmall Partners`, `Douyin Partners` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** When a Tmall agency fakes orders, the brand pays
**Query:** tmall agency fake orders brand liability · **Tags:** Due diligence, Tmall Partners, Douyin Partners
**Word count:** 1,000 to 1,300

**The answer, in one line.** In a case the Supreme People's Court released in August 2026, an operating agency faked group-buy orders on a local-services platform and paid with its own RMB 50,000 deposit and a RMB 100,000 fine. On Tmall and Douyin, the merchant agreements treat what is done through the store account as the merchant's act, and the 2025 Anti-Unfair Competition Law reaches the seller whose sales were inflated. Ban fake orders in writing and audit the traffic.

**The table it must carry.** Consequence (platform deposit, store penalties and delisting, regulator fines, criminal exposure), who bears it, the source.

**The proprietary number.** Compass: share of candidates declined over data integrity. Fallback: log the gap.

**Outline.**
1. The case
2. How fake orders (刷单炒信) are run and detected
3. The table
4. Why the brand carries the risk
5. Contract and audit steps

**Leads (verify, cite primary).** court.gov.cn/zixun/xiangqing/507731.html (typical cases, case 4); spp.gov.cn/llyj/201704/t20170424_188821.shtml; Anti-Unfair Competition Law.

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
- [ ] File saved as `output/tmall-agency-fake-orders-brand-liability.md`
