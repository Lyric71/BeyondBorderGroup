---
brief_id: 32A
publish_date: 2027-04-13
week: 32
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell wine and spirits in China"
slug: sell-wine-spirits-china
primary_query: "sell wine spirits china"
difficulty: HELD
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 32A: How to sell wine and spirits in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 32 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell wine and spirits in China |
| Slug | `/insights/sell-wine-spirits-china/` |
| Output file | `output/sell-wine-spirits-china.md` |
| Primary query | `sell wine spirits china` |
| Difficulty | HELD |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell wine and spirits in China
**Query:** sell wine spirits china · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Wine and spirits is a general trade category wearing a cross-border costume: the tax stack, not the platform, decides whether the business works, and a brand that models landed cost before it models marketing will usually find the answer is an importer relationship rather than a flagship store.

**The table it must carry.** One landed cost stack, two route columns, applied to three product rows. Columns: Cost line, General trade import, Cross-border ecommerce. Rows within each: customs duty, consumption tax, import VAT, label approval and Chinese back label, inspection and testing, bonded or general warehousing, platform commission, logistics to consumer. Then run the whole stack three times, once for still wine, once for spirits at high ABV, once for a low-ABV ready-to-drink product, and show the delivered cost as a percentage of retail price for each. Writer must verify and cite every duty and tax rate against a primary or customs-broker source, state the date checked, and flag that rates change.

**The proprietary number.** From the Compass distributor database: how many importers and distributors in Compass carry alcohol, how many of those have a stated national versus single-region footprint, and the median number of provinces claimed. This is the piece's evidence that "national distribution" in this category is usually a claim, not a capability.

**Outline.**
1. The tax stack, first, because it decides the rest
2. Cross-border versus general trade for alcohol: what each one actually allows
3. Labels, testing, and the paperwork that holds a shipment at the port
4. Who sells your wine: importer, distributor, platform flagship, or all three
5. Price control: what happens to your positioning when three channels quote different numbers
6. What a realistic year one looks like at three volume levels
7. The five questions to ask an importer before you sign

**Internal links.** /enter-china/distribution, /compass, /compass/shortlist, /enter-china/cross-border-setup, /grow-in-china/cross-border-ecommerce
**CTA.** Build a shortlist of alcohol importers in Compass, filtered by the provinces you actually need.
**Do not.** Do not write the "China loves wine" market-size opener. The incumbent at position one already owns that piece and it is not what a brand with a shipment to price needs. Do not assert a single tax rate without a citation and a date.

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
- [ ] File saved as `output/sell-wine-spirits-china.md`
