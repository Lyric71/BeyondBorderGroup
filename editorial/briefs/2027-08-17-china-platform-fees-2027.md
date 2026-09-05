---
brief_id: 50A
publish_date: 2027-08-17
week: 50
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "China marketplace fee benchmark, mid-year"
slug: china-platform-fees-2027
primary_query: "china platform fees 2027"
difficulty: HELD
word_count: "2,300 to 2,400, plus the gated report"
status: not_started
---

# BRIEF 50A: China marketplace fee benchmark, mid-year

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 50 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | China marketplace fee benchmark, mid-year |
| Slug | `/insights/china-platform-fees-2027/` |
| Output file | `output/china-platform-fees-2027.md` |
| Primary query | `china platform fees 2027` |
| Difficulty | HELD |
| Body length | 2,300 to 2,400, plus the gated report (body only, per the char-count rule) |

## The brief

**Title:** China marketplace fee benchmark, mid-year
**Query:** china platform fees 2027 · **Difficulty:** HELD (TMO Group holds the query with a 10,000-word page)
**Word count:** 2,300 to 2,400, plus the gated report

**The answer, in one line.** Twelve months after the first edition, the headline is not the level of platform fees but the movement, and this edition publishes both: the current deposit, annual fee and commission by category across three cross-border platforms, and what each of those changed by since the first benchmark.

**The table it must carry.** The benchmark table itself, one row per category, at least 20 categories, and it must be a real HTML table in a scrollable container so an assistant can lift it. Columns grouped by platform, Tmall Global, JD Worldwide, Douyin cross-border, each showing deposit, annual fee and commission, plus a change column against the first edition, marked as up, down or unchanged with the figure. A final column gives the resulting first-year fixed cost for a single store in that category, which is the number TMO's page does not compute. Every figure carries a source note: platform published policy with an access date, or TheChinaPath calculator data with the version date. Any category where the figure could not be verified gets an explicit "not verified this edition" rather than last year's number carried forward.

**The proprietary number.** From the three calculators plus stores under management: the count of category-level fee changes recorded across the three platforms in the twelve months since the first edition, with the direction split, and the median change size where a change occurred. State the number of categories tracked and the tracking method. That change count is the headline nobody else can publish, because it requires having recorded the starting position a year ago.

**Outline.**
1. What moved in twelve months, in one paragraph and one number
2. How to read the table, and what a deposit actually is
3. The benchmark table
4. Where the three platforms diverged most, by category
5. What a fee change actually does to a running store's P&L
6. The categories where the cheapest platform is not the right platform
7. Method, sources and what this benchmark does not cover

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /insights
**CTA.** Download the full mid-year fee benchmark, or run your category in the calculators.
**Do not.** Do not out-length TMO; the win is that every figure is dated, sourced and comparable to a prior edition, and their page is not. Do not carry any figure forward from the first edition without re-verifying it against the platform's current published policy this cycle; a stale number in a benchmark destroys the asset.

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
- [ ] File saved as `output/china-platform-fees-2027.md`
