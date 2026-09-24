---
brief_id: P38
publish_date: 2026-12-07
week: 14
weekday: Mon
slot: P
slot_name: Partner
content_type: Partner Case note
tags: ["Finding a partner","Due diligence"]
title: "China eCommerce agency scams, and the checks that stop them"
slug: china-ecommerce-agency-scam
primary_query: "china ecommerce agency scam"
word_count: "1,000 to 1,300"
status: not_started
---

# BRIEF P38: China eCommerce agency scams, and the checks that stop them

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Mon of week 14 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | China eCommerce agency scams, and the checks that stop them |
| Slug | `/insights/china-ecommerce-agency-scam/` |
| Output file | `output/china-ecommerce-agency-scam.md` |
| Primary query | `china ecommerce agency scam` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,300 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Due diligence` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** China eCommerce agency scams, and the checks that stop them
**Query:** china ecommerce agency scam · **Tags:** Due diligence
**Word count:** 1,000 to 1,300

**The answer, in one line.** In November 2023 Shenzhen police broke up an operating-agency fraud ring, arresting more than 40 people. The pattern is the same every time: a large upfront fee, a guarantee and a company too young to have a record. Three checks catch it.

**The table it must carry.** Warning sign, how the scam uses it, the check.

**Leads (verify, cite primary).** 澎湃 (m.thepaper.cn/newsDetail_forward_27211721); Taobao service-market listing rules (RMB 50,000 deposit, six months' registration, three contracts; open.alitrip.com).

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
- [ ] File saved as `output/china-ecommerce-agency-scam.md`
