---
brief_id: 23A
publish_date: 2027-02-09
week: 23
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Report
title: "China platform fee benchmark 2027"
slug: china-marketplace-fees-comparison
primary_query: "china marketplace fees comparison"
difficulty: HELD
word_count: "2,200 to 2,400"
report: "China platform fee benchmark 2027"
report_format: "Gated sheet, every platform, every fee line"
status: not_started
---

# BRIEF 23A: China platform fee benchmark 2027

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 23 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | China platform fee benchmark 2027 |
| Slug | `/insights/china-marketplace-fees-comparison/` |
| Output file | `output/china-marketplace-fees-comparison.md` |
| Primary query | `china marketplace fees comparison` |
| Difficulty | HELD |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |
| Report | `output/reports/china-marketplace-fees-comparison.md`, gated PDF, assembled by a person (Gated sheet, every platform, every fee line) |

## The brief

**Title:** China platform fee benchmark 2027
**Query:** china marketplace fees comparison · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Published commission rates are the least interesting number on a China marketplace fee sheet, because the gap between platforms shows up in deposits, annual fees, mandatory promotional participation and the traffic cost needed to sell anything, and this benchmark puts all of it in one place and keeps it current.

**The table it must carry.** The report core: a fee matrix with one row per category, roughly eighteen to twenty categories running down the page, and grouped columns for Tmall Global, JD Worldwide and Douyin cross-border. Within each platform group: deposit, annual fee, and commission rate. Every cell is sourced from the platform's own published merchant terms with a footnote reference, and the sheet carries a visible "figures checked on" date plus a note naming which cells the platform publishes as ranges or negotiates case by case. Below the matrix, a second summary table with three rows, one per platform, showing the all-in year-one median from the corresponding calculator so a reader sees fees in the context of total cost. The gated version is the maintained sheet, updated on a stated cadence, with a changelog row at the top recording what moved and when.

**The proprietary number.** Aggregated calculator data across all three tools: median year-one total per platform, the fee-to-traffic ratio per platform, and the category with the widest spread between platforms. This is the section TMO cannot write, so it leads the page rather than closing it.

**Outline.**
1. What this benchmark covers and when it was last checked
2. How to read a China platform fee sheet without getting the wrong number
3. The fee matrix, by category and platform
4. Deposits: what you post, what you get back, and when
5. The costs that never appear on a rate card
6. What the same category costs across all three platforms, all in
7. What changed since the last update, and what we expect to move next

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /insights
**CTA.** Get the maintained fee sheet and the update notice when a platform moves a rate.
**Do not.** Do not publish a single fee figure without a footnote pointing at the platform's own current terms, and do not fill a gap with a competitor's number or an estimate; leave the cell marked "not published" instead. Do not write this as a one-time article. The page states its update cadence, carries a changelog, and every internal reference to it points here rather than restating the figures elsewhere.

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
- [ ] File saved as `output/china-marketplace-fees-comparison.md`
