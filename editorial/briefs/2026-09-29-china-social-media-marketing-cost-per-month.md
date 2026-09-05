---
brief_id: 04A
publish_date: 2026-09-29
week: 04
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "What Chinese social media costs a foreign brand per month"
slug: china-social-media-marketing-cost-per-month
primary_query: "china social media marketing cost per month"
difficulty: OPEN
word_count: "2,000 to 2,400"
status: not_started
---

# BRIEF 04A: What Chinese social media costs a foreign brand per month

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 04 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What Chinese social media costs a foreign brand per month |
| Slug | `/insights/china-social-media-marketing-cost-per-month/` |
| Output file | `output/china-social-media-marketing-cost-per-month.md` |
| Primary query | `china social media marketing cost per month` |
| Difficulty | OPEN |
| Body length | 2,000 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** What Chinese social media costs a foreign brand per month
**Query:** china social media marketing cost per month · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A credible presence on two platforms is a fixed monthly cost with three components, content, media and operations, and the media line is the one that decides whether the other two were worth spending.

**Why it is open.** The current top three are a Clutch directory, one agency page and Statista. Nobody publishes a monthly number.

**The table it must carry.** Monthly cost by platform, WeChat, Xiaohongshu, Douyin and Weibo, at three levels: maintain a presence, build an audience, and sell. Split each into content production, paid media floor, and operations. Show the total for the two most common combinations.

**The proprietary number.** The paid media floor below which organic reach on each platform does not move, from stores and accounts under management.

**Outline.**
1. Why nobody publishes this, and why the answer is not "it depends"
2. The three components, and which one people forget
3. The table
4. The platform floors: what happens below them
5. The two combinations that actually work for a brand in year one
6. What this does not buy you

**Internal links.** `/social-in-china`, `/grow-in-china/social-commerce`, `/grow-in-china/media`
**CTA.** Talk to us.
**Territory guard.** This is a cost piece, not a service piece. Content production and community management hand off to TheRedScroll with the canonical anchor text. Do not describe them as TheChinaPath services.

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
- [ ] File saved as `output/china-social-media-marketing-cost-per-month.md`
