---
brief_id: P40
publish_date: 2026-11-07
week: 09
weekday: Sat
slot: P
slot_name: Partner
content_type: Partner Explainer
tags: ["Finding a partner","Contracts"]
title: "Chinese-language contracts: chops, language, arbitration"
slug: china-distribution-contract-chinese-language-arbitration
primary_query: "china distribution contract chinese language arbitration"
word_count: "1,300 to 1,800"
status: not_started
---

# BRIEF P40: Chinese-language contracts: chops, language, arbitration

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Sat of week 09 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Chinese-language contracts: chops, language, arbitration |
| Slug | `/insights/china-distribution-contract-chinese-language-arbitration/` |
| Output file | `output/china-distribution-contract-chinese-language-arbitration.md` |
| Primary query | `china distribution contract chinese language arbitration` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,300 to 1,800 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Chinese-language contracts: chops, language, arbitration
**Query:** china distribution contract chinese language arbitration · **Tags:** Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Sign a bilingual contract that names the Chinese version as controlling, check the company chop against the licence, and choose arbitration your partner's assets can be reached by. A contract a Chinese court cannot read or enforce protects nobody.

**The table it must carry.** Choice (language, chop, signatory, governing law, CIETAC, HKIAC, courts), what to choose, why.

**Leads (verify, cite primary).** Civil Code contract provisions; CIETAC and HKIAC rules; the mainland-Hong Kong arbitration arrangement. Interlink with 25A.

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
- [ ] File saved as `output/china-distribution-contract-chinese-language-arbitration.md`
