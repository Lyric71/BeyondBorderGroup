---
brief_id: 25A
publish_date: 2027-02-23
week: 25
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What a China distribution agreement actually contains"
slug: china-distribution-agreement-terms
primary_query: "china distribution agreement terms"
difficulty: OPEN
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 25A: What a China distribution agreement actually contains

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 25 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What a China distribution agreement actually contains |
| Slug | `/insights/china-distribution-agreement-terms/` |
| Output file | `output/china-distribution-agreement-terms.md` |
| Primary query | `china distribution agreement terms` |
| Difficulty | OPEN |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** What a China distribution agreement actually contains
**Query:** china distribution agreement terms · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A China distribution agreement lives or dies on four clauses, territory and channel definition, minimum purchase commitments, IP and trademark ownership, and termination, and a foreign brand that signs a template without rewriting those four has usually given away its own market for the length of the term.

**The table it must carry.** One clause-by-clause table, roughly sixteen rows, four columns: clause, what a distributor typically proposes, what a brand should push for, and the failure this clause causes when it is left loose. Rows: territory, channel scope including whether eCommerce is carved out, exclusivity and its conditions, term length, minimum purchase volumes and what happens when they are missed, pricing and margin structure, payment terms and currency, trademark registration and ownership, product registration ownership where a Chinese licence is required, marketing spend and who owns the assets, customer and distributor data, stock and returns, quality and recall responsibility, audit rights, governing law and dispute forum, termination and post-termination stock. The eCommerce carve-out row is the one most readers arrive for and it should be written first.

**The proprietary number.** From the Compass distributor database and the team's own deal work: the share of distributor-proposed agreements reviewed that requested exclusivity covering online channels as well as offline, and the median term length proposed versus the median actually signed. State the sample and the period.

**Outline.**
1. The four clauses that decide the deal
2. Territory and channel: why online has to be carved out separately
3. Exclusivity, and how to make it conditional on performance
4. Minimum purchase volumes that mean something
5. Who owns your trademark, your registrations and your Chinese social accounts
6. Termination, and the stock sitting in their warehouse on day one after
7. How to run the negotiation without losing the relationship

**Internal links.** /enter-china/distribution, /compass, /compass/how-it-works, /enter-china/market-entry-consulting, /compass/shortlist
**CTA.** Request a Compass shortlist before you sign anything exclusive.
**Do not.** Do not give legal advice or draft clause language. The piece explains what each clause does commercially and tells the reader to have a China-qualified lawyer draft and review, and it says so in the first section rather than in a footer disclaimer. Do not treat the distributor as an adversary throughout; the honest position is that a well-drafted agreement protects both sides and a one-sided one gets ignored in practice.

## Slot spec

```
Every Anchor must carry:
1. A title that is the query a buyer types, or its answer. No "Ultimate",
   no "Complete Guide", no brand name in front.
2. The answer inside the first 60 words.
3. One real HTML table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such.
5. A named human byline, published date and updated date.
6. Three to five internal links, at least one to a service page and one
   to a calculator or Compass.
7. One CTA. Never "learn more".
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
- [ ] File saved as `output/china-distribution-agreement-terms.md`
