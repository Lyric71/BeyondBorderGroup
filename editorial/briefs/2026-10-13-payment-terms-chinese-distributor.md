---
brief_id: P10
publish_date: 2026-10-13
week: 06
weekday: Tue
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Distributors","Contracts"]
title: "Payment terms with a Chinese distributor"
slug: payment-terms-chinese-distributor
primary_query: "payment terms chinese distributor"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P10: Payment terms with a Chinese distributor

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Tue of week 06 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Payment terms with a Chinese distributor |
| Slug | `/insights/payment-terms-chinese-distributor/` |
| Output file | `output/payment-terms-chinese-distributor.md` |
| Primary query | `payment terms chinese distributor` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Distributors`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** Payment terms with a Chinese distributor
**Query:** payment terms chinese distributor · **Tags:** Distributors, Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Ask for prepayment or a confirmed letter of credit on the first orders, move to open terms only after a payment track record, and insure the receivable when you do. Chinese distributors are short of cash, so terms are part of the negotiation, not an afterthought.

**The table it must carry.** Term (prepayment, deposit plus balance, LC, open account with credit insurance, consignment), risk to the brand, cost, when it fits.

**The proprietary number.** Compass: typical first-order terms on file. Fallback: log the gap.

**Outline.**
1. Why cash is tight downstream (the 2025 distributor survey)
2. The table
3. Letters of credit in practice
4. Credit insurance (Sinosure and private insurers)
5. Currency, RMB vs USD, and who carries FX
6. When to move to open terms

**Leads (verify, cite primary).** Over 40% of distributors under cash pressure (界面新闻 2025, jiemian.com/article/13003026.html, citing the China Liquor Flow Association); Sinosure product pages.

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
- [ ] File saved as `output/payment-terms-chinese-distributor.md`
