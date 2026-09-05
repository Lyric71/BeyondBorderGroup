---
brief_id: 11A
publish_date: 2026-11-17
week: 11
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor + Report
title: "Double 11 2026 from inside the stores we run"
slug: double-11-2026-brand-performance
primary_query: "double 11 2026 brand performance"
difficulty: OPEN
word_count: "2,200 to 2,600, plus the gated report"
report: "Double 11 2026 from inside the stores we run"
report_format: "Gated PDF, anonymised store-level figures"
status: not_started
---

# BRIEF 11A: Double 11 2026 from inside the stores we run

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 11 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Double 11 2026 from inside the stores we run |
| Slug | `/insights/double-11-2026-brand-performance/` |
| Output file | `output/double-11-2026-brand-performance.md` |
| Primary query | `double 11 2026 brand performance` |
| Difficulty | OPEN |
| Body length | 2,200 to 2,600, plus the gated report (body only, per the char-count rule) |
| Report | `output/reports/double-11-2026-brand-performance.md`, gated PDF, assembled by a person (Gated PDF, anonymised store-level figures) |

## The brief

**Title:** Double 11 2026 from inside the stores we run
**Query:** double 11 2026 brand performance · **Difficulty:** OPEN
**Word count:** 2,200 to 2,600, plus the gated report

**This is the first Report and the highest-leverage piece of Q1.** It is the WPIC play: first-party numbers nobody else can publish, feeding an article, a gated asset, and a press pitch at once.

**The table.** Anonymised store-level performance by category: GMV index against target, AOV movement year on year, share of sales from livestream against search against paid, and return rate.

**Rules on the data.** Anonymised, aggregated, no client identifiable, and cleared before publication. If clearance is not obtainable in time, publish the article with the categories where it is and say so, rather than delaying.

**Outline.**
1. What we saw, in one paragraph
2. Method and what is in the sample
3. Category by category
4. The three things that changed from last year
5. What it means for 2027 planning
6. Download the full read

**CTA.** Gated download.
**Distribution.** This is the piece that gets pitched. Trade press, LinkedIn, the newsletter.

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
- [ ] File saved as `output/double-11-2026-brand-performance.md`
