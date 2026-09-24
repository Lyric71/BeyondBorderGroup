---
brief_id: P08
publish_date: 2026-10-09
week: 05
weekday: Fri
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Tmall Partners","Contracts"]
title: "The Tmall Partner contract: the clauses that decide your exit"
slug: tmall-partner-contract-terms
primary_query: "tmall partner contract terms"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P08: The Tmall Partner contract: the clauses that decide your exit

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Fri of week 05 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The Tmall Partner contract: the clauses that decide your exit |
| Slug | `/insights/tmall-partner-contract-terms/` |
| Output file | `output/tmall-partner-contract-terms.md` |
| Primary query | `tmall partner contract terms` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Tmall Partners`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china` |

## The brief

**Title:** The Tmall Partner contract: the clauses that decide your exit
**Query:** tmall partner contract terms · **Tags:** Tmall Partners, Contracts
**Word count:** 1,600 to 2,400

**The answer, in one line.** Seven clauses decide whether you can leave a Tmall Partner cleanly: store ownership, account and data handover, notice and transition period, KPIs that allow termination, the commission base, ad-spend control and a no-sabotage clause with a penalty. Settle them at signing; nobody negotiates them well at exit.

**The table it must carry.** Clause, what to write, what goes wrong without it (with the case or rule behind it).

**The proprietary number.** TheChinaPath Tmall Global calculator data (default retainer and commission) to price a transition month. Compass figure if available.

**Outline.**
1. The case: a TP deletes three best-selling links on its last day (Chongqing)
2. The table
3. Sub-accounts and 生意参谋 access: revocation dates
4. KPIs that let you leave, and KPI refunds courts have ordered
5. The commission base (gross, net, after returns)
6. A transition calendar that avoids Double 11 and 618

**Leads (verify, cite primary).** Chongqing No. 5 Intermediate Court judgment reported by 泰和泰 (tahota.com, lead; find the judgment on 裁判文书网); exit data practices (新浪 k.sina.cn/article_8424942191_1f62a6a6f00101hrvu.html, lead).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
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
- [ ] File saved as `output/tmall-partner-contract-terms.md`
