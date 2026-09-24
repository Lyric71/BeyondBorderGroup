---
brief_id: P05
publish_date: 2026-10-06
week: 05
weekday: Tue
slot: P
slot_name: Partner
content_type: Partner Anchor
tags: ["Finding a partner","Tmall Partners","Douyin Partners","Contracts"]
title: "Who owns your Tmall store, Douyin shop and customer data"
slug: tmall-partner-store-ownership
primary_query: "tmall partner store ownership"
word_count: "1,600 to 2,400"
status: not_started
---

# BRIEF P05: Who owns your Tmall store, Douyin shop and customer data

Run with the createarticle skill. Read `../CLAUDE.md` and `../SPEC.md` first.
They override any conflicting rule inside the skill. The standing preamble in
`PREAMBLE.md` applies in full.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.thechinapath.com |
| audience | people out of China |
| slot | Partner, Tue of week 05 |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Who owns your Tmall store, Douyin shop and customer data |
| Slug | `/insights/tmall-partner-store-ownership/` |
| Output file | `output/tmall-partner-store-ownership.md` |
| Primary query | `tmall partner store ownership` |
| Industry | none (cross-industry), leave `industry` out of the frontmatter |
| Body length | 1,600 to 2,400 (body only, per the char-count rule) |
| Tags | `Finding a partner`, `Tmall Partners`, `Douyin Partners`, `Contracts` (frontmatter `tags`) |
| Serves | `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china` |

## The brief

**Title:** Who owns your Tmall store, Douyin shop and customer data
**Query:** tmall partner store ownership · **Tags:** Tmall Partners, Douyin Partners, Contracts
**Word count:** 1,600 to 2,400

**The answer, in one line.** The store belongs to whoever's company opened it, and courts read the registration, not the handshake. Open the Tmall store and the Douyin shop in your own entity, keep the ad accounts and the brand authorization in your name, and write the data handover into the contract before you sign.

**The table it must carry.** Asset (store, Douyin shop, Qianchuan account, Alimama account, brand authorization, 生意参谋 data, content, customer service records), who should hold it, what happens at exit if the partner holds it.

**The proprietary number.** Compass: share of TPs on file that open stores in the brand's own entity. Fallback: log the gap.

**Outline.**
1. The case: a Hunan court, a Douyin shop on the operator's licence, a brand with no claim
2. The authorization chain on Tmall (flagship, specialty, multi-brand store)
3. The table
4. Sub-accounts and data access, and when to revoke them
5. Contract lines that settle ownership
6. What to do if your store already sits in someone else's name

**Leads (verify, cite primary).** Taojiang County court case reported by 华声在线 (m.voc.com.cn/xhn/news/202504/28496327.html); Tmall store-type authorization rules (flagship 独占授权, specialty, multi-brand).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## Slot spec

```
SLOT: Partner piece (Finding a partner cluster), weekday per schedule.csv
BRIEF: briefs/YYYY-MM-DD-<slug>.md

Every partner piece must carry:
1. A title that is the query a buyer types, or its answer.
2. The answer inside the first 60 words.
3. One real table with real figures, in a scrollable container.
4. At least one number only this agency can publish, labelled as such
   (Compass figure, else calculator or case data, per the brief).
5. Byline TheChinaPath, published date and updated date.
6. Links: the guide it serves, /compass, and one other published
   partner piece when one exists. One CTA: the Compass shortlist.
7. Tags: "Finding a partner" plus the topic tags in the brief.
8. No competitor cited or named. Chinese primary sources first.

KILL CONDITION: none. Partner pieces always ship. If a proprietary
figure is missing, use the fallback and log it.
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
- [ ] File saved as `output/tmall-partner-store-ownership.md`
