---
brief_id: P12
publish_date: 2026-10-15
week: 06
weekday: Thu
slot: P
slot_name: Partner
content_type: Partner Case note
tags: ["Finding a partner","Contracts","Distributors"]
title: "China distributor price control: a clause that held"
slug: china-distributor-price-control-parallel
primary_query: "china distributor price control parallel"
word_count: "1,000 to 1,300"
status: not_started
---

# BRIEF P12: China distributor price control: a clause that held

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Thu of week 06 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | China distributor price control: a clause that held |
| Slug | `/insights/china-distributor-price-control-parallel/` |
| Output file | `output/china-distributor-price-control-parallel.md` |
| Primary query | `china distributor price control parallel` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,000 to 1,300 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Contracts`, `Distributors` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china` |

## The brief

**Title:** China distributor price control: a clause that held
**Query:** china distributor price control parallel · **Tags:** Contracts, Distributors
**Word count:** 1,000 to 1,300

**The answer, in one line.** A beauty brand's exclusive offline distributor scratched off traceability codes and sold online. The contract set a RMB 200,000 penalty and the brand won the lead case in June 2025; 14 related cases worth over RMB 6 million in total closed through mediation. Put a traceable code and a written penalty in every distribution contract.

**The table it must carry.** The control (traceability code, channel clause, per-breach penalty, audit right, platform complaint), what it does, how the case used it.

**The proprietary number.** Compass: share of distributors on file with a written price and channel policy. Fallback: log the gap.

**Outline.**
1. The case (Shanghai Fengxian court)
2. What 窜货 and 乱价 cost a brand
3. The table
4. What price control is still legal (Anti-Monopoly Law, 2022 amendment on resale prices)
5. The clauses to copy

**Leads (verify, cite primary).** court.gov.cn/zixun/xiangqing/507751.html; Anti-Monopoly Law 2022 text (npc.gov.cn).

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`
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
- [ ] File saved as `output/china-distributor-price-control-parallel.md`
