---
brief_id: 07A
publish_date: 2026-10-20
week: 07
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to tell a real China distributor from a trading company"
slug: find-distributor-china-verify
primary_query: "find distributor china verify"
difficulty: WEAK
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 07A: How to tell a real China distributor from a trading company

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 07 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to tell a real China distributor from a trading company |
| Slug | `/insights/find-distributor-china-verify/` |
| Output file | `output/find-distributor-china-verify.md` |
| Primary query | `find distributor china verify` |
| Difficulty | WEAK |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to tell a real China distributor from a trading company
**Query:** find distributor china verify · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** A distributor carries inventory, holds retail relationships and takes a position on your brand. A trading company takes an order and disappears. Eight checks separate them, and six of them can be run before a first call.

**The table it must carry.** Eight checks, three columns: what to ask, what a real answer sounds like, what the red flag sounds like.

**The proprietary number.** From Compass: what share of candidates fail verification, or how many are screened to produce a working shortlist. This is the single best use of Compass data on the whole calendar.

**Outline.**
1. Why the distinction matters more than category fit
2. The six checks you can run before you talk to anyone
3. The two you can only run on a call
4. The table
5. The three answers that end a conversation
6. What a vetted shortlist actually looks like

**Internal links.** `/compass`, `/compass/how-it-works`, `/enter-china/distribution`, `/work`
**CTA.** Compass shortlist.

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
- [ ] File saved as `output/find-distributor-china-verify.md`
