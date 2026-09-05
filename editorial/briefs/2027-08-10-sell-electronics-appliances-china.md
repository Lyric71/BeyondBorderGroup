---
brief_id: 49A
publish_date: 2027-08-10
week: 49
weekday: Tue
slot: A
slot_name: Anchor
content_type: Anchor
title: "How to sell consumer electronics and small appliances in China"
slug: sell-electronics-appliances-china
primary_query: "sell electronics appliances china"
difficulty: MED
word_count: "2,200 to 2,400"
status: not_started
---

# BRIEF 49A: How to sell consumer electronics and small appliances in China

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Anchor, Tue of week 49 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to sell consumer electronics and small appliances in China |
| Slug | `/insights/sell-electronics-appliances-china/` |
| Output file | `output/sell-electronics-appliances-china.md` |
| Primary query | `sell electronics appliances china` |
| Difficulty | MED |
| Body length | 2,200 to 2,400 (body only, per the char-count rule) |

## The brief

**Title:** How to sell consumer electronics and small appliances in China
**Query:** sell electronics appliances china · **Difficulty:** MEDIUM (thin agency coverage)
**Word count:** 2,200 to 2,400

**The answer, in one line.** For consumer electronics the certification question comes before the channel question, because a product with a radio in it, a plug on it or a safety-listed function inside it faces a different set of approvals from an accessory, and the certification path you land on determines whether JD or Tmall Global is your first store.

**The table it must carry.** A certification and channel map, 9 to 12 rows, one per product type: wireless earbuds and speakers, smart home devices with wifi, wearables, small kitchen appliances with a heating element, personal care appliances, air treatment devices, chargers and power banks, laptops and tablets, cameras, non-powered accessories, replacement parts. Columns: whether the product typically falls inside the compulsory certification catalogue (verify, cite), whether a radio type approval is typically required for the wireless function (verify, cite), whether the cross-border route changes the answer (verify, cite), plug, voltage and manual localisation needs, and the platform that realistically sells this type first with a one-clause reason. Footnote every regulatory cell to a primary source with an access date.

**The proprietary number.** From the JD Worldwide and Tmall Global calculators: the observed commission and deposit spread across the electronics and small appliance subcategories, stated as the range and the number of subcategory configurations covered, plus the resulting difference in first-year fixed cost between the cheapest and most expensive subcategory on each platform. State the calculator version date. Add, from stores under management, the median warranty and returns rate observed in powered categories versus accessories, with the sample size.

**Outline.**
1. The certification question, and why it comes before the platform question
2. The certification and channel map
3. Radio, power and safety: three approvals that catch different products
4. Why JD is often the right first store in this category, and when it is not
5. After-sales: warranty, repair and the returns rate that changes your margin
6. The manual, the plug and the app: localisation that is a compliance item, not a design item
7. A realistic first year for an electronics brand

**Internal links.** /tools/jd-worldwide-setup-and-run, /tools/tmall-global-setup-and-run, /enter-china/cross-border-setup, /grow-in-china/cross-border-ecommerce, /enter-china/distribution
**CTA.** Compare your subcategory's first-year cost in the JD Worldwide calculator.
**Do not.** Do not state that any specific product does or does not require certification; the writer names the product type, points to the official catalogue and instructs the reader to confirm against it, with the source cited. Do not skip after-sales; it is the section every competing page omits and it is where this category's margin actually goes.

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
- [ ] File saved as `output/sell-electronics-appliances-china.md`
