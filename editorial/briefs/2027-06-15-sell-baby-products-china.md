---
brief_id: 41A
publish_date: 2027-06-15
week: 41
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell maternity and baby products in China"
slug: sell-baby-products-china
primary_query: "sell baby products china"
difficulty: HELD
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 41A: How to sell maternity and baby products in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 41 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell maternity and baby products in China |
| Slug | `/insights/sell-baby-products-china/` |
| Output file | `output/sell-baby-products-china.md` |
| Primary query | `sell baby products china` |
| Difficulty | HELD |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell maternity and baby products in China
**Query:** sell baby products china · **Difficulty:** HELD (Ecommerce China Agency at 1, GMA at 2, 3 and 4)
**Word count:** 2,200 to 2,400

**The answer, in one line.** Maternity and baby is the strictest consumer category on the Chinese board, and the practical answer is that the subcategory decides everything: a stroller, a baby wash, a teether and a formula-adjacent nutrition product take four different routes, three different registration regimes and two different platforms, so any brand treating "baby" as one launch will stall at customs on the item it did not check.

**The table it must carry.** A subcategory rules matrix, 8 to 10 rows, one row per subcategory: strollers and car seats, cribs and furniture, feeding bottles and teats, pacifiers and teethers, baby skincare and wash, baby wipes, diapers, baby textiles and apparel, baby monitors and electronics, toys. Columns: cross-border positive list status (verify, cite), the registration, filing or certification most commonly required on the general trade route (verify, cite), whether Chinese-language physical labelling is required at the point of sale on each route (verify, cite), typical lead time in weeks from dossier start to sellable, and which platform this subcategory realistically sells on first. Every regulatory cell in the table must be sourced in a footnote to a primary regulator or platform policy page, with the access date shown.

**The proprietary number.** From the Compass vetted-distributor database: the share of vetted distributors that will take a maternity and baby brand with no existing China sales history, versus the share that require an existing China track record or a minimum first order. State the number of distributor records in the maternity and baby segment and the cities covered. If Compass has it, add median time from shortlist delivery to first signed agreement in this category.

**Outline.**
1. Why "baby products" is not a category, and what it splits into
2. The subcategory rules matrix
3. The two routes, and the four times a subcategory forces general trade
4. Where Chinese parents actually buy: platform reality by subcategory
5. Labelling, packaging and the artwork rework nobody budgets
6. Distribution: when a distributor beats your own store in this category
7. A realistic first twelve months for a maternity and baby brand

**Internal links.** /enter-china/cross-border-setup, /compass/shortlist, /enter-china/distribution, /tools/tmall-global-setup-and-run, /enter-china/branding-localisation
**CTA.** Request a Compass shortlist of vetted maternity and baby distributors.
**Do not.** Do not write a single set of rules for the whole category; the incumbents' pages fail exactly there and the matrix is how this page beats them. Do not assert any registration requirement, timeline or fee without a cited primary source and an access date.

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
- [ ] File saved as `output/sell-baby-products-china.md`
