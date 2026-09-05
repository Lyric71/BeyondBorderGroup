---
brief_id: 09A
publish_date: 2026-11-03
week: 09
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "RedNote seeding: what it costs and what comes back"
slug: xiaohongshu-koc-seeding-cost
primary_query: "xiaohongshu koc seeding cost"
difficulty: WEAK
word_count: "1,900 to 2,300"
status: not_started
---

# BRIEF 09A: RedNote seeding: what it costs and what comes back

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 09 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | RedNote seeding: what it costs and what comes back |
| Slug | `/insights/xiaohongshu-koc-seeding-cost/` |
| Output file | `output/xiaohongshu-koc-seeding-cost.md` |
| Primary query | `xiaohongshu koc seeding cost` |
| Difficulty | WEAK |
| Body length | 1,900 to 2,300 (body only, per the char-count rule) |

## The brief

**Title:** RedNote seeding: what it costs and what comes back
**Query:** xiaohongshu koc seeding cost · **Difficulty:** WEAK
**Word count:** 1,900 to 2,300

**The answer, in one line.** Seeding on RedNote is priced per post by follower tier, the rates are public enough to publish, and the return depends almost entirely on whether the notes are searchable six months later.

**Why it is winnable.** The current top two are a New Zealand agency blog. No mainland operator owns this.

**The table it must carry.** Rate by tier: KOC, micro, mid, top. Cost per post, typical volume in a campaign, and what a campaign at each tier costs in total.

**The proprietary number.** What share of seeded notes are still surfacing in RedNote search after six months, from campaigns run. That reframes seeding from reach to search, which is the correct frame and nobody uses it.

**Outline.**
1. What seeding is on RedNote, and why it is not influencer marketing
2. The rate card by tier
3. What a campaign actually costs at each tier
4. The measurement mistake: reach instead of search presence
5. What comes back, and over what period
6. When seeding is the wrong tool

**Internal links.** `/social-in-china`, `/grow-in-china/social-commerce`
**CTA.** Talk to us.
**Territory guard.** This is a cost and measurement piece. Running seeding is TheRedScroll's service. Hand off explicitly.

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
- [ ] File saved as `output/xiaohongshu-koc-seeding-cost.md`
