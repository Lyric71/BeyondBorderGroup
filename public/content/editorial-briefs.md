# TheChinaPath editorial briefs, year one

Companion to the Four-Slot Week plan. This is the file you hand to Claude Code.

**Structure**
- Part 0: the preamble to paste at the top of every run
- Part 1: a correction to the Ledger queue
- Part 2: the full nameable list, 116 items
- Part 3: full briefs, weeks 1 to 13
- Part 4: the four slot templates that generate everything else

**Industry coverage rule.** Every Anchor and Ledger row in Part 2 carries an Industry, one of `INSIGHT_INDUSTRIES` in `src/content.config.ts` or `none` for cross-industry pieces. It becomes the `industry` frontmatter of the published insight and decides where the piece lists on `/insights/industries`. An industry with no published piece shows there as "Guide in the works". The Ledger queue for weeks 3 to 10 is ordered so each of the eight industries that were still in the works on September 19, 2026 gets its first piece in turn: Food & Beverage (W3), Home & Living (W4), Automotive (W5), Pets (W6), Financial & Professional Services (W7), Mother & Baby (W8), Sports & Leisure (W9), Health & Wellness (W10). Case-study Ledgers the reorder displaced moved to W11, W12, W18, W26 and W29.

**Ledger scheduling rule.** A category that also has a CAT anchor is scheduled at least eight weeks away from it, and the two interlink. The Ledger answers "what it costs to sell X"; the anchor answers "how to sell X". Different queries, different pages, never adjacent weeks.

**What is not listed and why.** Signals (46) and Teardowns (22) are deliberately not pre-titled. A Signal that exists in a spreadsheet in September is not a Signal, it is a guess about the news. A Teardown has to be picked on whether the entry is observable today. Both run from the templates in Part 4 against their watch list and criteria.

---

# Part 0: the preamble

Paste this above every brief. It is the standing context the `createarticle` skill needs.

```
TARGET WEBSITE: https://www.thechinapath.com
AUDIENCE: people out of China

Voice and rules, non-negotiable:
- US journalist prose. Short declarative sentences. Concrete nouns.
- Zero em dashes. Use commas, periods, colons, parentheses.
- No pricing for TheChinaPath's own services. Use "project-based",
  "monthly retainer", or "quoted after the first call".
- Banned vocabulary: unlock, elevate, seamless, landscape, delve,
  navigate the complexities, in today's world, it's worth noting.
- No three-item rhetorical lists. No sentence opening with a participle
  that summarises the previous sentence.
- Every third-party figure carries an external citation. Unsourced hard
  numbers are the current failure mode in the back catalogue.
- Chinese platform names on first mention: Xiaohongshu (RedNote),
  Douyin, Tmall Global, JD Worldwide, WeChat. Chinese characters only
  where the term itself is the subject.

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

Internal link targets available:
/tools/tmall-global-setup-and-run
/tools/jd-worldwide-setup-and-run
/tools/douyin-cost-calculator
/compass  /compass/shortlist  /insights/finding-a-partner
/compass/find-a-distributor-in-china  /compass/find-a-tmall-partner-in-china
/compass/find-a-douyin-partner-in-china
/enter-china/market-entry-consulting  /enter-china/distribution
/enter-china/cross-border-setup  /enter-china/branding-localisation
/grow-in-china/cross-border-ecommerce  /grow-in-china/social-commerce
/grow-in-china/campaigns  /grow-in-china/media
/build-in-china  /social-in-china  /work  /insights

Territory rule. TheChinaPath owns commerce, cost, distribution, platform
operations, regulatory-for-selling, and storefront social that ends in a
transaction. It does NOT publish on KOL seeding as a service, community
management, daily content production, Baidu SEO, ICP filing or hosting.
Those hand off to TheRedScroll and ChinaWebFoundry with the canonical
anchor text.
```

---

# Part 1: a correction to the Ledger queue

The wave 1 list in the Four-Slot Week plan has a flaw worth fixing before anything is written. It was ordered on "categories where a case study exists," which is the right principle, but five of those case studies are in categories that have **no marketplace route at all**: Marriott (hospitality), Blue Insurance (insurance), SohoMD (telehealth), Viessmann (building systems), and the automotive work with Chery, JAC, Exeed and Jaguar Land Rover. Cars and boilers are not sold on Tmall Global. A fee table for them does not exist, so the Ledger template does not apply.

Rather than drop those, the Ledger splits into two variants. Same slot, same cadence, different table.

| Variant | For | The table it carries |
|---|---|---|
| **Ledger A** | Physical consumer goods with a marketplace route | Deposit, annual fee and commission for that category on Tmall Global, JD Worldwide and Douyin cross-border |
| **Ledger B** | B2B, services, and goods with no cross-border marketplace route | Channel by channel: how buyers are actually reached, what each channel costs to run, and what a qualified lead costs |

Ledger B is roughly 12 of the 52. It uses the automotive, HVAC, hospitality, insurance and telehealth case studies properly instead of forcing them into a fee table they do not have. It is also less contested, because every competitor's category content assumes a Tmall store.

The revised wave 1 below reflects this.

---

# Part 2: the full nameable list

116 items. 52 Anchors, 52 Ledgers, 12 Assets and Reports.

## The 52 Anchors

Difficulty from the September 2026 baseline. OPEN means no incumbent answers the query.

| Wk | Title | Target query | Diff | Industry |
|---|---|---|---|---|
| 1 | Distributor or your own store in China: the honest comparison | china distributor vs own store | OPEN | none |
| 2 | What a livestream room actually costs | china livestream cost for brands | OPEN | none |
| 3 | Double 11 2026: the 60-day operator checklist | double 11 preparation checklist | SEAS | none |
| 4 | What Chinese social media costs a foreign brand per month | china social media marketing cost per month | OPEN | none |
| 5 | Douyin store or Douyin as media: which one you actually need | douyin store vs douyin ads | OPEN | none |
| 6 | Opening a RedNote store as a foreign brand | xiaohongshu store setup overseas brand | WEAK | none |
| 7 | How to tell a real China distributor from a trading company | find distributor china verify | WEAK | none |
| 8 | Double 11: the last fourteen days | double 11 last minute checklist | SEAS | none |
| 9 | RedNote seeding: what it costs and what comes back | xiaohongshu koc seeding cost | WEAK | none |
| 10 | Double 11 live: what is actually moving | double 11 2026 results | SEAS | none |
| 11 | Double 11 2026 from inside the stores we run | double 11 2026 brand performance | OPEN | none |
| 12 | What a China eCommerce P&L actually looks like | china ecommerce margin profitability | OPEN | none |
| 13 | What a Tmall Global store costs in year one | tmall global cost fees | HELD | none |
| 14 | Selling home and kitchen brands into China | sell home kitchen products china | OPEN | Home & Living |
| 15 | Selling outdoor and sports gear into China | sell outdoor sports gear china | OPEN | Sports & Leisure |
| 16 | Chinese New Year: what to lock before the country closes | cny ecommerce planning | SEAS | none |
| 17 | How to sell coffee and specialty food in China | sell coffee specialty food china | WEAK | Food & Beverage |
| 18 | Cross-border or general trade: the decision that sets your cost base | cbec vs general trade china | WEAK | none |
| 19 | What a Douyin cross-border store costs in year one | douyin cross border store cost | WEAK | none |
| 20 | Month one on Tmall Global: what actually happens | tmall global store launch timeline | OPEN | none |
| 21 | Labeling and testing: what stops a shipment at Chinese customs | china import labeling requirements | WEAK | none |
| 22 | What a JD Worldwide store costs in year one | jd worldwide fees cost | MED | none |
| 23 | China platform fee benchmark 2027 | china marketplace fees comparison | HELD | none |
| 24 | How to sell pet products in China | sell pet products china | MED | Pets |
| 25 | What a China distribution agreement actually contains | china distribution agreement terms | OPEN | none |
| 26 | Tmall Global vs JD Worldwide vs Douyin: which store first | tmall vs jd vs douyin | HELD | none |
| 27 | 618 2027: the 100-day plan | 618 festival preparation | SEAS | none |
| 28 | What a WeChat presence costs a foreign brand | wechat official account cost | WEAK | none |
| 29 | How to sell health supplements in China without a Blue Hat | sell supplements china cross-border | HELD | Health & Wellness |
| 30 | RedNote for foreign brands: what the platform is actually for | rednote marketing foreign brands | HELD | none |
| 31 | PIPL and your China store: what a brand actually has to do | pipl compliance foreign brand | WEAK | none |
| 32 | How to sell wine and spirits in China | sell wine spirits china | HELD | Food & Beverage |
| 33 | The monthly content load a China store actually needs | china ecommerce content requirements | OPEN | none |
| 34 | Tmall Partner, in-house or agency: who should run the store | tmall partner vs in house team | HELD | none |
| 35 | How to sell beauty and skincare in China in 2027 | sell cosmetics china foreign brand | HELD | Beauty & Personal Care |
| 36 | What it costs foreign brands to launch in China: 2027 benchmark | china market entry cost benchmark | OPEN | none |
| 37 | 618: the last three weeks | 618 last minute strategy | SEAS | none |
| 38 | Twelve questions to ask before signing a China distributor | questions to ask china distributor | OPEN | none |
| 39 | Tmall Global or Tmall Classic: when to move onshore | tmall global vs tmall classic | HELD | none |
| 40 | Running 618: an operator's log | 618 how it works brands | OPEN | none |
| 41 | How to sell maternity and baby products in China | sell baby products china | HELD | Mother & Baby |
| 42 | 618 2027 from inside the stores we run | 618 2027 results brands | OPEN | none |
| 43 | How to sell luxury and premium goods in China now | luxury brand china strategy | HELD | Fashion & Luxury |
| 44 | How to sell B2B and industrial products in China | b2b marketing china industrial | MED | B2B & Industrial |
| 45 | What China market entry costs before you take a single order | china market entry cost | WEAK | none |
| 46 | Trademark first: the China IP sequence nobody follows | china trademark registration brand | MED | none |
| 47 | The twelve-month China launch timeline | china launch timeline brands | OPEN | none |
| 48 | The RedNote year: what changed and what it does to budgets | xiaohongshu trends 2027 brands | MED | none |
| 49 | How to sell consumer electronics and small appliances in China | sell electronics appliances china | MED | Electronics & Appliances |
| 50 | China marketplace fee benchmark, mid-year | china platform fees 2027 | HELD | none |
| 51 | Double 11 2027: the 80-day plan | double 11 2027 preparation | SEAS | none |
| 52 | The year-one China channel decision, revisited | how to enter china market brands | HELD | none |

## The 52 Ledgers

Title pattern, Ledger A: `What it costs to sell [category] in China`. Ledger B: `How [category] actually reaches buyers in China`.

Order resolved so no Ledger sits within eight weeks of the CAT anchor covering the same category.

| Wk | Variant | Title | Proof | Industry |
|---|---|---|---|---|
| 1 | A | What it costs to sell footwear in China | Camper. Use only what is already published on `/work/camper`. Do not add figures. | Fashion & Luxury |
| 2 | A | What it costs to sell facial skincare in China | ROC, Shiseido RQ Pyology, Pierre Fabre, Age 20's. Published figures only. | Beauty & Personal Care |
| 3 | A | What it costs to sell dairy and spreads in China | Valio, Langnese. Published figures only. | Food & Beverage |
| 4 | A | What it costs to sell home textiles and bedding in China | Bassetti. Block 4 should carry AOV, because bedding has an unusually high order value for a cross-border category, which changes the fee arithmetic. That is the interesting thing on this page. | Home & Living |
| 5 | B | How automotive and EV brands actually reach buyers in China | Chery, JAC, Exeed, Exlantix, Jaguar Land Rover. Published figures only, and there are several on `/work`. | Automotive |
| 6 | A | What it costs to sell pet food in China | none | Pets |
| 7 | B | How insurance and financial services reach customers in China | Blue Insurance, including the published month-one follower and newsletter figures. Cover the regulatory constraint on financial promotion honestly, and treat WeChat as the primary channel it actually is. | Financial & Professional Services |
| 8 | A | What it costs to sell baby care and hygiene products in China | none | Mother & Baby |
| 9 | A | What it costs to sell toys and games in China | none | Sports & Leisure |
| 10 | B | How telehealth and wellness services reach patients in China | SohoMD, including the published organic traffic figure. Regulatory constraint is the substance of this page. Be careful and cite. | Health & Wellness |
| 11 | A | What it costs to sell lighting and home design in China | iGuzzini. Note in block 5 that architectural and specification lighting is a project-sales business, so the marketplace answer only covers the consumer range. Honest split, links to `/enter-china/distribution`. | Home & Living |
| 12 | B | How building systems and HVAC brands actually reach buyers in China | Viessmann. Ledger B table. Channels: specification and design institutes, distributor networks, WeChat for technical content, industry events, and the installer layer that most foreign brands miss entirely. Links to `/enter-china/distribution` and `/compass`. | B2B & Industrial |
| 13 | A | What it costs to sell beauty devices and tools in China | none | Beauty & Personal Care |
| 14 | A | What it costs to sell furniture in China | none | Home & Living |
| 15 | A | What it costs to sell eyewear in China | none | Fashion & Luxury |
| 16 | A | What it costs to sell bags and luggage in China | none | Fashion & Luxury |
| 17 | A | What it costs to sell garden and outdoor living products in China | none | Home & Living |
| 18 | B | How hotel groups actually reach Chinese travellers | Marriott, including the published Tmall Super Brand Day and Bonvoy enrolment figures. Channels: Fliggy and Ctrip, WeChat mini programme for direct booking, RedNote for consideration, and the loyalty programme as the actual asset. This is the one Ledger B with a marketplace component, so it can carry a partial fee table for Fliggy. | Travel & Hospitality |
| 19 | A | What it costs to sell stationery and office products in China | none | Sports & Leisure |
| 20 | A | What it costs to sell musical instruments in China | none | Sports & Leisure |
| 21 | A | What it costs to sell cleaning and household products in China | none | Home & Living |
| 22 | A | What it costs to sell home and kitchen products in China | none | Home & Living |
| 23 | A | What it costs to sell outdoor and sports gear in China | none | Sports & Leisure |
| 24 | A | What it costs to sell consumer electronics in China | none | Electronics & Appliances |
| 25 | A | What it costs to sell coffee and specialty food in China | none | Food & Beverage |
| 26 | A | What it costs to sell bakery and food ingredients in China | Master Martini, Kerry DaVinci Gourmet. | Food & Beverage |
| 27 | A | What it costs to sell colour cosmetics in China | none | Beauty & Personal Care |
| 28 | A | What it costs to sell personal care and body products in China | none | Beauty & Personal Care |
| 29 | A | What it costs to sell packaged food in China | Mission Foods. | Food & Beverage |
| 30 | A | What it costs to sell apparel in China | none | Fashion & Luxury |
| 31 | A | What it costs to sell jewellery in China | none | Fashion & Luxury |
| 32 | A | What it costs to sell watches in China | none | Fashion & Luxury |
| 33 | A | What it costs to sell luxury leather goods in China | none | Fashion & Luxury |
| 34 | A | What it costs to sell medical devices and home diagnostics in China | none | Health & Wellness |
| 35 | A | What it costs to sell fragrance in China | none | Beauty & Personal Care |
| 36 | A | What it costs to sell sun care in China | none | Beauty & Personal Care |
| 37 | A | What it costs to sell hair care in China | none | Beauty & Personal Care |
| 38 | B | How professional services and consulting reach clients in China | none | Financial & Professional Services |
| 39 | A | What it costs to sell pet accessories and hardware in China | none | Pets |
| 40 | A | What it costs to sell health supplements in China | none | Health & Wellness |
| 41 | A | What it costs to sell sports nutrition in China | none | Health & Wellness |
| 42 | A | What it costs to sell wine in China | none | Food & Beverage |
| 43 | A | What it costs to sell spirits in China | none | Food & Beverage |
| 44 | A | What it costs to sell beer and ready-to-drink in China | none | Food & Beverage |
| 45 | A | What it costs to sell tea and beverages in China | none | Food & Beverage |
| 46 | A | What it costs to sell auto parts and accessories in China | none | Automotive |
| 47 | A | What it costs to sell bath and sanitaryware in China | none | Home & Living |
| 48 | B | What it costs to sell education and training services in China | none | Financial & Professional Services |
| 49 | A | What it costs to sell maternity products in China | none | Mother & Baby |
| 50 | A | What it costs to sell infant formula in China | none | Mother & Baby |
| 51 | A | What it costs to sell oral care in China | none | Beauty & Personal Care |
| 52 | B | What it costs to sell industrial equipment and components in China | none | B2B & Industrial |

## The 12 Assets and Reports

| Wk | Type | Title | Format |
|---|---|---|---|
| 3 | Asset | Double 11 2026: the 60-day operator checklist | Printable checklist, owner per line |
| 8 | Asset | Double 11: the last fourteen days | Day-by-day run sheet |
| 11 | Report | Double 11 2026 from inside the stores we run | Gated PDF, anonymised store-level figures |
| 16 | Asset | Chinese New Year cut-off calendar | Dated calendar, four workstreams |
| 21 | Asset | Category label and test checklist | Per-category checklist |
| 23 | Report | China platform fee benchmark 2027 | Gated sheet, every platform, every fee line |
| 27 | Asset | 618 2027: the 100-day plan | Countdown by workstream |
| 33 | Asset | The monthly content spec for a China store | Assets per month per channel, with owners |
| 36 | Report | What it costs foreign brands to launch in China, 2027 | Gated, aggregated calculator runs |
| 38 | Asset | Twelve questions to ask a China distributor | Question, good answer, red flag |
| 42 | Report | 618 2027 from inside the stores we run | Gated, store-level read by category |
| 47 | Asset | The twelve-month China launch timeline | Gantt, with dependencies |

---

# Part 3: full briefs, all 52 weeks

Each brief is self-contained. Paste the Part 0 preamble, then one brief.

Signals (Monday), Teardowns and Refreshes (Thursday) are not briefed individually. They run from the templates in Part 4 against the Signal watch list and the Teardown selection criteria.

---

## W01 · TUE · ANCHOR

**Title:** Distributor or your own store in China: the honest comparison
**Query:** china distributor vs own store · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A distributor gets you into China with no working capital and no team, and you pay for it in margin, in data you never see, and in a brand position you cannot control. Your own store costs cash up front and buys back all three.

**The table it must carry.** Eight rows, two columns, distributor against own store: working capital required, gross margin retained, who owns the customer data, who controls pricing, who controls assortment, speed to first revenue, what happens if it fails, what you own after three years.

**The proprietary number.** At least one from Compass or from stores under management. Candidates: how long a distributor shortlist actually takes to build against the quarter most brands budget for it, or the share of first-year GMV a store retains against what a distributor arrangement returns. Label the source in the copy.

**Outline.**
1. Why the honest version is rare: both options are sold by people who only offer one
2. What a distributor actually does, and the four things they do not
3. What your own store actually costs, in cash and in headcount
4. The comparison table
5. The three conditions that decide it: category, cash, and how long you can wait
6. The hybrid nobody names, and when it is the right answer
7. What to do next

**Internal links.** `/enter-china/distribution`, `/compass`, `/grow-in-china/cross-border-ecommerce`, `/tools/tmall-global-setup-and-run`
**CTA.** Compass shortlist.
**Do not.** Sell against distributors. TheChinaPath sells distributor sourcing, so a piece that rubbishes the model reads as self-serving and contradicts the service page. The credibility comes from being the only one willing to name the cost of both.

---

## W01 · WED · LEDGER A

**Title:** What it costs to sell footwear in China
**Query:** sell shoes china tmall cost · **Word count:** 1,100 to 1,400

**The answer.** Which of the three platforms wins for footwear and roughly what year one costs.

**Blocks, in order.** The seven-block Ledger shape from the plan: answer, fee table, route, unit economics, verdict, proof, tool link.

**The fee table.** Footwear category on Tmall Global, JD Worldwide and Douyin cross-border: deposit, annual fee, commission rate. Pull from the calculator's category data. If the three numbers for footwear are identical to another apparel category already published, merge the pages instead of shipping both.

**The route.** Footwear is straightforward cross-border. Cover sizing conversion as the operational trap it actually is, return rates driven by fit, and what that does to the fulfilment line.

**Unit economics.** Typical AOV for imported footwear, cost per order at the fee table above, and breakeven GMV.

**Proof.** Camper. Use only what is already published on `/work/camper`. Do not add figures.

**Tool link.** `/tools/tmall-global-setup-and-run` with footwear preselected.

---

## W02 · TUE · ANCHOR

**Title:** What a livestream room actually costs
**Query:** china livestream cost for brands · **Difficulty:** OPEN
**Word count:** 1,900 to 2,300

**The answer, in one line.** A branded livestream room is a fixed monthly cost, not a campaign cost, and the room is cheaper than most brands expect while the traffic to fill it is not.

**Why this is the second piece.** The current top three results are 2023 journalism. Nobody has published a cost breakdown. This is the single most open high-intent query on the board.

**The table it must carry.** Cost per hour of broadcast, broken into: studio and set, host and co-host, operator and moderator, paid traffic to fill the room, platform commission, KOL or MCN cut where used, and product samples and giveaway. Give a monthly total at three levels of ambition: a store-led room running daily, a room running three days a week, and a one-off event with an external host.

**The proprietary number.** Cost per order from a store-led room against a celebrity event, from stores under management. This is the number that makes the piece.

**Outline.**
1. The question nobody answers, and why: agencies quote projects, not rates
2. The two models: store-led rooms and celebrity events, and why they are different businesses
3. The cost table
4. Where the money actually goes, which is traffic, not production
5. What a room returns at each level, with the cost-per-order comparison
6. When not to build one

**Internal links.** `/grow-in-china/social-commerce`, `/tools/douyin-cost-calculator`, `/social-in-china`
**CTA.** Douyin calculator.
**Do not.** Quote TheChinaPath's own rates. Market cost ranges are the subject, agency pricing is not.

---

## W02 · WED · LEDGER A

**Title:** What it costs to sell facial skincare in China
**Word count:** 1,100 to 1,400

Standard seven blocks. Skincare is the highest-value Ledger in wave 1 and the most regulated, so block 3 carries most of the weight: the difference between cross-border and general trade for skincare, what NMPA filing applies to which product type, and the animal testing position as it now stands. Cite every regulatory claim.

**Proof.** ROC, Shiseido RQ Pyology, Pierre Fabre, Age 20's. Published figures only.
**Tool link.** Tmall calculator, skincare preselected.
**Do not.** Give regulatory advice in absolute terms. Frame as "what applies, and what to confirm with a filing agent."

---

## W03 · TUE · ANCHOR + ASSET

**Title:** Double 11 2026: the 60-day operator checklist
**Query:** double 11 preparation checklist · **Difficulty:** SEASONAL
**Word count:** 1,600 to 2,000, plus the checklist asset

**The answer.** What has to be locked, and by when, counting back from 11 November.

**The table it must carry.** The checklist itself: 60 days out, 45, 30, 21, 14, 7, and the day. Each row carries the task, the owner role, and what breaks if it slips.

**The proprietary number.** The most common slip from stores under management, with how many days it typically costs. One line, sourced.

**Asset.** The same checklist as a printable page in `/guides`, one item per line, checkboxes, no marketing copy.

**Internal links.** `/grow-in-china/campaigns`, `/grow-in-china/cross-border-ecommerce`, `/tools/tmall-global-setup-and-run`
**CTA.** Talk to us, dated: this is the one week of the year where urgency is real.
**Do not.** Publish after 12 September. A 60-day checklist published at 45 days is worthless.

---

## W03 · WED · LEDGER A

**Title:** What it costs to sell dairy and spreads in China
**Word count:** 1,100 to 1,400

Block 3 carries the weight: dairy is one of the most tightly controlled import categories. Registration of the overseas manufacturer, shelf-life rules on arrival, and the label. Cite everything.
**Proof.** Valio, Langnese. Published figures only.

---

## W04 · TUE · ANCHOR

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

---

## W04 · WED · LEDGER A

**Title:** What it costs to sell home textiles and bedding in China
**Word count:** 1,100 to 1,400
**Proof.** Bassetti. Block 4 should carry AOV, because bedding has an unusually high order value for a cross-border category, which changes the fee arithmetic. That is the interesting thing on this page.

---

## W05 · TUE · ANCHOR

**Title:** Douyin store or Douyin as media: which one you actually need
**Query:** douyin store vs douyin ads · **Difficulty:** OPEN
**Word count:** 1,900 to 2,300

**The answer, in one line.** A Douyin store is an operating commitment measured in daily content and daily fulfilment. Douyin as a media channel is a budget line. Most brands who open the store wanted the budget line.

**Why it is open.** Every result in the current top three is an ads-only guide. Nobody frames it as the decision it is.

**The table it must carry.** Both routes side by side: setup cost, monthly operating load in hours, content required per week, who has to be in China, margin after platform fees, and what you keep when you stop.

**The proprietary number.** The weekly content volume a Douyin store actually consumes, measured from stores under management, against what brands budget for.

**Outline.**
1. The confusion, and why it costs money
2. Douyin as media: what it does, what it costs, what it leaves behind
3. Douyin store: the daily commitment nobody quotes
4. The table
5. The three questions that decide it
6. The sequence that works: media first, store when the numbers say so

**Internal links.** `/grow-in-china/social-commerce`, `/tools/douyin-cost-calculator`, `/grow-in-china/media`
**CTA.** Douyin calculator.

---

## W05 · WED · LEDGER B

**Title:** How automotive and EV brands actually reach buyers in China
**Word count:** 1,200 to 1,500

**Ledger B variant.** No fee table. The table is channel by channel: what it reaches, what it costs to run monthly, what a qualified lead costs, and who owns it.

Channels to cover: Douyin and RedNote for consideration, Autohome and Dongchedi as the vertical portals, WeChat for dealer handoff, and offline events. Say plainly that the vehicle is not sold cross-border and that this is a demand-generation and dealer-handoff problem, not a marketplace one.

**Proof.** Chery, JAC, Exeed, Exlantix, Jaguar Land Rover. Published figures only, and there are several on `/work`.
**Internal links.** `/grow-in-china/campaigns`, `/grow-in-china/media`, `/social-in-china`
**CTA.** Talk to us.

---

## W06 · TUE · ANCHOR

**Title:** Opening a RedNote store as a foreign brand
**Query:** xiaohongshu store setup overseas brand · **Difficulty:** WEAK
**Word count:** 1,900 to 2,300

**The answer, in one line.** RedNote will take a cross-border store from a foreign entity, the requirements are lighter than Tmall's, and the reason to open one is almost never the store itself.

**Why it is winnable.** The current top three are payment companies, Aspire and Airwallex, writing about stores as a payments use case. The first agency page sits at position eight. A mainland operator with the actual requirements list wins this.

**The table it must carry.** Requirements and costs to open: entity type accepted, documents, deposit, commission, fulfilment options, and the timeline for each step.

**The proprietary number.** How long the approval actually takes against the platform's published guidance, from stores opened.

**Outline.**
1. What a RedNote store is, and what it is not
2. Who can open one: entity, documents, deposit
3. The steps and the real timeline
4. What it costs to run, not just to open
5. Why most brands should treat the store as the endpoint of a content strategy, not the start
6. When to open one and when to wait

**Internal links.** `/social-in-china`, `/grow-in-china/social-commerce`, `/compass/shortlist`
**CTA.** Talk to us.
**Territory guard.** Content and seeding on RedNote is TheRedScroll's. This page covers the store, the fees and the operations. Hand off the rest with the canonical anchor text.

---

## W06 · WED · LEDGER A

**Title:** What it costs to sell pet food in China
**Word count:** 1,100 to 1,400

Block 3 carries this one and nothing else comes close. Pet food entering China is a facility-level question before it is a product-level one: the manufacturing plant itself has to be registered and approved, which means the cost and the timeline sit with your producer, not with you, and a brand using a contract manufacturer that has never registered is looking at a multi-quarter delay it cannot shorten with budget. Writer must verify and cite the current GACC facility registration requirement for imported pet food, the quarantine and inspection permit process, whether cross-border ecommerce changes the requirement, and the current positive list status for pet food categories. Block 4 should be built on bulk: dry food is heavy and priced low, so model the pack size and multi-pack structure that make an order profitable. Pairs with the W24 pet anchor, which ships later. Nothing to link back to yet: the W24 anchor links to this page when it publishes.

**Proof.** None available. Use the block 6 honesty line.

---

## W07 · TUE · ANCHOR

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

**Internal links.** `/compass`, `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/work`
**CTA.** Compass shortlist.

---

## W07 · WED · LEDGER B

**Title:** How insurance and financial services reach customers in China
**Word count:** 1,200 to 1,500
**Proof.** Blue Insurance, including the published month-one follower and newsletter figures. Cover the regulatory constraint on financial promotion honestly, and treat WeChat as the primary channel it actually is.

---

## W08 · TUE · ANCHOR + ASSET

**Title:** Double 11: the last fourteen days
**Query:** double 11 last minute checklist · **Difficulty:** SEASONAL
**Word count:** 1,500 to 1,900, plus the run sheet asset

**The table.** Day by day, 28 October to 11 November: the task, the owner role, and the cut-off after which it cannot be changed.
**The proprietary number.** The last day a price or a mechanic can actually be changed on each platform, from operations.
**Asset.** The run sheet in `/guides`.
**Do not.** Publish later than 27 October.

---

## W08 · WED · LEDGER A

**Title:** What it costs to sell baby care and hygiene products in China
**Word count:** 1,100 to 1,400

Block 3 carries this, and the specific trap is that a product marketed for children or infants can face a stricter regime than the same formulation marketed for adults. Instruct the writer to verify and cite the current Chinese regulatory treatment of children's cosmetics, including whether a separate registration or filing track and a distinct safety assessment apply, whether the cross-border route changes that, and the labelling and claims restrictions that apply to products aimed at infants. Diapers and wipes need their own check, since they may fall under different product standards from wash and skincare, and the writer should confirm and cite rather than group them. Block 4 should note that this is a high-repeat, low-ticket category, so breakeven is a subscription-like calculation and should be modelled on repeat rate, not on first order value.

**Proof.** None available. Use the block 6 honesty line.

---

## W09 · TUE · ANCHOR

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

---

## W09 · WED · LEDGER A

**Title:** What it costs to sell toys and games in China
**Word count:** 1,100 to 1,400

Block 3 is the load-bearing block, because toys is a certification category. The writer must verify which toy types fall under China's mandatory product certification scheme, what a cross-border sale does and does not exempt, and how age grading and warning text have to appear, citing SAMR or the certification body directly rather than restating a summary found on an agency blog. Two more traps to name: battery-powered toys inherit air freight restrictions that change the landed cost model, and licensed character product needs its China territory rights confirmed before a listing goes live, because platform IP complaints on licensed toys are fast and unforgiving. Block 4 should show a low average order value fighting a fixed cost per order, and block 5 should say that toys usually needs bundling or a gifting angle before the unit economics work.

**Proof.** None available. Use the block 6 honesty line.

---

## W10 · TUE · ANCHOR

**Title:** Double 11 live: what is actually moving
**Query:** double 11 2026 results · **Difficulty:** SEASONAL
**Word count:** 1,200 to 1,600, updated daily through the window

**Format exception.** This is a living page, not a one-shot. Publish 9 November, update daily to 12 November, then freeze with a dated final note.
**The table.** Category read, updated each day.
**The proprietary number.** What is moving across stores under management, by category, anonymised.
**Do not.** Republish platform GMV announcements as news. Every competitor will. The value here is the operator read on what is actually selling.

---

## W10 · WED · LEDGER B

**Title:** How telehealth and wellness services reach patients in China
**Word count:** 1,200 to 1,500
**Proof.** SohoMD, including the published organic traffic figure. Regulatory constraint is the substance of this page. Be careful and cite.

---

## W11 · TUE · ANCHOR + REPORT

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

---

## W11 · WED · LEDGER A

**Title:** What it costs to sell lighting and home design in China
**Word count:** 1,100 to 1,400
**Proof.** iGuzzini. Note in block 5 that architectural and specification lighting is a project-sales business, so the marketplace answer only covers the consumer range. Honest split, links to `/enter-china/distribution`.

---

## W12 · TUE · ANCHOR

**Title:** What a China eCommerce P&L actually looks like
**Query:** china ecommerce margin profitability · **Difficulty:** OPEN
**Word count:** 2,200 to 2,600

**The answer, in one line.** Revenue to contribution has eleven lines in China against six in most Western markets, and the four extra ones are where brands who modelled it on their home P&L lose the money.

**The table it must carry.** The full P&L, line by line, from GMV down to contribution, with a typical percentage band for each line. Mark the four lines that do not exist in a Western P&L.

**The proprietary number.** The line that most often comes in over plan, from stores under management, with by how much.

**Outline.**
1. Why the home-market model breaks
2. The eleven lines
3. The four that are new
4. The table
5. Where the money actually goes at three GMV levels
6. What breakeven looks like, and when it arrives

**Internal links.** All three calculators, `/grow-in-china/cross-border-ecommerce`, `/enter-china/market-entry-consulting`
**CTA.** All three calculators.
**Note.** This piece is the natural pillar for the whole COST cluster. Every later cost anchor should link back to it.

---

## W12 · WED · LEDGER B

**Title:** How building systems and HVAC brands actually reach buyers in China
**Word count:** 1,200 to 1,500
**Proof.** Viessmann. Ledger B table. Channels: specification and design institutes, distributor networks, WeChat for technical content, industry events, and the installer layer that most foreign brands miss entirely. Links to `/enter-china/distribution` and `/compass`.

---

## W13 · TUE · ANCHOR

**Title:** What a Tmall Global store costs in year one
**Query:** tmall global cost fees · **Difficulty:** HELD
**Word count:** 2,400 to 2,800

**This is the first deliberate attack on defended ground.** Shanghai Jungle ranks with "Tmall costs explained, deposits, annual fees, commissions, agency fees, ad budgets." TMO has a 10,000-word marketplace fee page. Both are prose. This one arrives with a working calculator behind it and twelve published pieces of internal linking.

**The answer, in one line.** The deposit and the annual fee are the numbers everyone quotes and the smallest part of the bill. The first year is decided by media, the TP retainer, and fulfilment.

**The table it must carry.** Full first-year cost, line by line, in RMB and USD, at three GMV levels. Separate refundable from spent, because that distinction is the reason most published figures are wrong.

**The proprietary number.** Actual first-year cost against the deposit-and-commission figure commonly quoted, expressed as a multiple, from calculator runs and stores under management.

**Outline.**
1. The number everyone quotes, and why it is not the number
2. Refundable against spent
3. The four moving parts
4. The table at three GMV levels
5. What changes it: category, model, and who runs the store
6. Model your own

**Internal links.** `/tools/tmall-global-setup-and-run` (twice), W12 P&L piece, `/grow-in-china/cross-border-ecommerce`, `/enter-china/cross-border-setup`
**CTA.** Tmall calculator.
**Do not.** Attack the competing pages or reference them. Beat them by being the only one with a tool.

---

## W13 · WED · LEDGER A

**Title:** What it costs to sell beauty devices and tools in China
**Word count:** 1,100 to 1,400

Block 3 carries the weight. Beauty devices sit on the line between cosmetics and electronics: a facial cleansing brush, an LED mask, a hair removal device and a scalp massager do not share a route. Anything with a plug or a battery raises the mandatory product certification question, anything that claims a skin effect raises the question of whether it is a cosmetic, a household appliance or a medical device under the current classification, and the writer must verify and cite the current position for each sub-type rather than summarize. Block 2 uses the closest calculator category (small appliances or beauty, whichever the platform files the device under) and says so. Block 4 should note the unusually high return rate on devices sold cross-border, which changes the fee arithmetic more than the commission does. Block 5 should say Tmall Global for brand-led devices and Douyin cross-border where the product demonstrates well on video.

**Proof.** None available. Use the block 6 honesty line.

---

## W14 · TUE · ANCHOR

**Title:** Selling home and kitchen brands into China
**Query:** sell home kitchen products china · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A home and kitchen brand gets into China fastest through a cross-border store, but the split inside the category is the whole decision: soft goods and non-powered kitchenware move cross-border cheaply, while anything with a plug or a food-contact surface carries a certification and testing burden that usually pushes it to general trade.

**The table it must carry.** One table, eight to ten rows, one row per home and kitchen sub-category: cookware and bakeware, knives and cutting boards, food storage, small kitchen appliances (blender, kettle, air fryer), coffee and tea equipment, tableware and drinkware, bedding and textiles, bath, storage and organization, decor. Columns: sub-category, typical unit weight and volumetric weight band, cross-border viable yes or conditional, the compliance item the writer must verify for that sub-category (food contact material standard, mandatory product certification, textile safety standard, voltage and plug), and best first channel. The compliance column must be written as "verify current requirement and cite the issuing body." No standard number goes in the table unless the writer has sourced and linked it.

**The proprietary number.** The median first-year all-in figure produced by the Tmall Global calculator across every session where the operator selected home and kitchen, plus the median freight cost per kilo the team pays on its own home and kitchen shipments into bonded warehouse. Label both as TheChinaPath figures and say how many data points sit behind each.

**Outline.**
1. If you came here to buy from China, this is the wrong page
2. The four home and kitchen brands that actually work in China, and the ones that do not
3. Where the category splits: plug, food contact, or neither
4. What it costs to land a 2kg cookware set versus a 400g textile item
5. Cross-border first, general trade when volume justifies it
6. What a home and kitchen storefront needs before day one
7. The order the channels should go in

**Internal links.** /tools/tmall-global-setup-and-run, /enter-china/cross-border-setup, /grow-in-china/cross-border-ecommerce, /compass, /enter-china/distribution
**CTA.** Run the Tmall Global first-year calculator with home and kitchen selected.
**Do not.** Do not let the H1, the first 20 words, the meta description or the intro sit in sourcing territory: the opening sentence must say outright that this is about selling a foreign home and kitchen brand to Chinese consumers, not about finding a Chinese factory, and the word "supplier" should not appear above the fold. Do not treat "small appliances" as one thing; a kettle and an air fryer have different certification paths and the writer must verify each rather than generalizing.

---

## W14 · WED · LEDGER A

**Title:** What it costs to sell furniture in China
**Word count:** 1,100 to 1,400

Block 4 carries this one. Furniture is the category where freight, not platform fees, decides whether the P&L works, so the unit economics block has to run volumetric weight against typical order value before it says anything about commission, and the fee table in block 2 should be presented as the smaller number it actually is. The trap to name is that cross-border parcel economics collapse above roughly the weight and dimension bands a bonded warehouse is built for, which pushes most furniture to general trade and sea freight, and separately that panel and upholstery products face emission and flammability requirements the writer must verify with GACC or SAMR sourcing before stating any threshold. Block 5 should land on general trade with a distributor for anything larger than a side table, and say plainly that last-mile delivery and installation in China is a service the brand does not own.

**Proof.** None available. Use the block 6 honesty line.

---

## W15 · TUE · ANCHOR

**Title:** Selling outdoor and sports gear into China
**Query:** sell outdoor sports gear china · **Difficulty:** OPEN
**Word count:** 1,900 to 2,300

**The answer, in one line.** Outdoor and sports gear sells in China on the strength of a specific activity community rather than a broad category position, and the channel follows the product's compliance weight: apparel and soft goods go cross-border immediately, while anything with a battery, a radio, a fuel source or a protective claim needs its route checked before a single unit ships.

**The table it must carry.** One table, nine rows, one row per gear type: technical apparel, footwear, backpacks and packs, tents and shelters, sleeping bags, camping stoves and fuel, climbing and protective hardware, GPS watches and wearables, bicycles and e-mobility. Columns: gear type, cross-border route status the writer must verify against the current positive list, the compliance question to answer before shipping (textile safety standard, radio type approval, battery air freight classification, protective equipment certification), typical air freight cost band per unit, and whether the category rewards a marketplace store or a community-led launch first. Every compliance cell is written as an instruction to verify and cite.

**The proprietary number.** From the Compass distributor database: how many vetted distributors list outdoor or sports as an active category, how many of those already run a Tmall Global or JD Worldwide flagship, and the median number of provinces their offline coverage reaches. Name the database and the date the count was pulled.

**Outline.**
1. This page is about selling your gear in China, not sourcing it
2. Which outdoor segments are actually growing buyers, not just headlines
3. The compliance line that splits the category: battery, fuel, radio, protection
4. Cross-border for apparel and packs, general trade for hardware
5. Why the first 500 orders come from a community, not a category page
6. Distributor or your own store for technical hardware
7. The first ninety days, in order

**Internal links.** /tools/tmall-global-setup-and-run, /compass/shortlist, /enter-china/cross-border-setup, /grow-in-china/social-commerce, /enter-china/distribution
**CTA.** Request a Compass shortlist of outdoor and sports distributors.
**Do not.** Do not slide into sourcing language: the H1 and the first 20 words must state that the reader is selling gear into China, and no paragraph should describe Chinese manufacturing capacity. Do not write the community section as an influencer plan.
**Territory guard.** Seeding, creator relationships and community management sit with TheRedScroll, so this piece names the demand pattern and links to /social-in-china rather than describing seeding as a TheChinaPath service.

---

## W15 · WED · LEDGER A

**Title:** What it costs to sell eyewear in China
**Word count:** 1,100 to 1,400

Block 3 carries this one, because eyewear is three regulatory products wearing the same name. Sunglasses and non-prescription frames travel one route, prescription lenses another, and contact lenses and their care solutions are regulated as medical devices, so the writer must verify the current NMPA classification and registration requirement for each and cite it rather than describing the tier from memory. The second trap is claims: UV protection, blue light and polarization language on a Chinese listing is regulated advertising copy, and the writer should say the claim set must be checked before the storefront copy is written, not after. Block 4 should show why a high-margin, low-weight product survives cross-border freight comfortably and why the real cost sits in brand authorization documents and trademark checks at platform onboarding.

**Proof.** None available. Use the block 6 honesty line.

---

## W16 · TUE · ANCHOR + ASSET

**Title:** Chinese New Year: what to lock before the country closes
**Query:** cny ecommerce planning · **Difficulty:** SEASONAL
**Word count:** 2,000 to 2,400

**The answer, in one line.** China does not slow down for Chinese New Year, it stops, and the brands that come through it intact are the ones that locked stock, freight bookings, staffing cover and media spend against dated cut-offs counted backward from New Year's Eve rather than forward from today.

**The table it must carry.** The asset itself, built as a real HTML table: a dated cut-off calendar with one row per working day band across the window running from roughly eight weeks before New Year's Eve to three weeks after, and four columns, one per workstream: stock, logistics, staffing, media. Each cell holds the specific action that has to be done by that date, written as an operator instruction ("last day to release a bonded replenishment PO", "last outbound pickup before the courier network thins", "confirm which team covers customer service and on which days", "last day to book platform media before rate cards move"). The writer must build the dates from the current year's official holiday schedule and cite the State Council announcement, because the dates move each year and the surrounding weekend swap days are the part people get wrong. Add a short note above the table saying which figures are fixed by the official calendar and which are platform or vendor dependent.

**The proprietary number.** From the stores under management: the number of consecutive days last CNY that bonded warehouse outbound was effectively paused, and the average slip in order-to-delivery days for orders placed in the week before New Year's Eve versus a normal week. State the store count and the year.

**Outline.**
1. What actually closes, and for how long
2. Stock: the last replenishment that lands in time
3. Logistics: bonded, direct mail and domestic courier all stop on different days
4. Staffing: who answers a customer at 11pm on day three
5. Media: why the rate card and the approval queue both move before the holiday
6. The cut-off calendar
7. The first week back, which is where the damage usually shows

**Internal links.** /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /tools/tmall-global-setup-and-run, /enter-china/cross-border-setup, /insights
**CTA.** Download the cut-off calendar and check it against your own stock plan.
**Do not.** Do not write a cultural explainer about the holiday. No red envelope symbolism, no zodiac paragraph, no gifting-culture section. Do not print a single date without sourcing it to the official holiday announcement for the year the piece is published, and add a visible last-updated line because this piece is refreshed annually.

---

## W16 · WED · LEDGER A

**Title:** What it costs to sell bags and luggage in China
**Word count:** 1,100 to 1,400

Block 2 does the work here, because bags and luggage is a category where platform commission and the brand authorization gate matter more than logistics. The trap is documentation and IP: marketplace onboarding for a bag brand triggers trademark and authorization checks that stop applications cold, and the writer must verify the current Chinese trademark position requirement for a cross-border flagship and cite the platform's own published rule rather than paraphrasing it. Second trap, name it plainly: any exotic skin or animal-derived trim raises a CITES and quarantine question that has to be answered before the shipment is booked, not at customs. Block 4 should compare a hard-shell suitcase, which is bulky and freight-heavy, against a leather handbag, which is small and high value, and show that the two do not belong in the same channel plan.

**Proof.** None available. Use the block 6 honesty line.

---

## W17 · TUE · ANCHOR

**Title:** How to sell coffee and specialty food in China
**Query:** sell coffee specialty food china · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** Food is the category where the paperwork comes before the platform: no coffee or specialty food brand sells legally into China until its overseas facility is registered with customs and its Chinese label is right, and the choice between cross-border and general trade mostly comes down to how much shelf life the product has left when it lands.

**The table it must carry.** One table, seven rows, one row per product type: whole bean and ground coffee, instant and drip bags, ready-to-drink coffee, chocolate and confectionery, sauces and condiments, snacks and biscuits, supplements-adjacent functional food. Columns: product type, typical remaining shelf life at landing, whether cross-border or general trade fits better and why, the registration and label items the writer must verify (overseas manufacturer registration, import record filing, Chinese label content, nutrition panel), and the storage requirement that drives warehouse cost. The registration column is written as a verify-and-cite instruction referencing GACC decrees by number only if the writer confirms them live.

**The proprietary number.** From the stores under management: the median number of days between submitting a food import document pack and receiving the first cleared inbound shipment, across the food and beverage clients the team has onboarded, plus the share of those first shipments that needed a label correction before release. State the sample size.

**Outline.**
1. The registration that has to happen before anything else
2. Chinese labels: what has to be on the pack and who signs off
3. Shelf life is the real channel decision
4. Coffee specifically: roast date, freshness claims, and what Chinese buyers compare you to
5. What a food listing costs to run for a year
6. Cross-border to test, general trade to scale
7. The sequence, start to first order

**Internal links.** /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /compass, /enter-china/distribution
**CTA.** Run the Tmall Global first-year calculator with food and beverage selected.
**Do not.** Do not state any GACC decree number, registration validity period, or minimum remaining shelf life percentage as fact. Every one of those is an instruction to the writer to verify with the current official source and cite it inline. Do not write health or functional claims into example listing copy, because food advertising claims in China are regulated and an illustrative line can become a compliance problem when a reader copies it.

---

## W17 · WED · LEDGER A

**Title:** What it costs to sell garden and outdoor living products in China
**Word count:** 1,100 to 1,400

Block 3 carries this, because half of what a garden brand sells cannot cross the border at all. Anything living, including seeds, bulbs, plants and soil, sits under plant quarantine rules, and pesticides, fertilizers and treated wood each carry their own registration question the writer must verify with the relevant Chinese authority and cite. The commercial trap is the rest of the range: planters, furniture, grills and gas appliances are bulky, seasonal and freight-heavy, so block 4 should run the volumetric weight math and show that a garden brand's China business is usually the small, dense, giftable end of its catalogue. Block 5 should say the honest thing, which is that a full garden range needs a domestic distribution partner and a general trade route rather than a cross-border store.

**Proof.** None available. Use the block 6 honesty line.

---

## W18 · TUE · ANCHOR

**Title:** Cross-border or general trade: the decision that sets your cost base
**Query:** cbec vs general trade china · **Difficulty:** WEAK
**Word count:** 2,100 to 2,400

**The answer, in one line.** Cross-border lets a foreign brand sell into China without a Chinese entity, a domestic licence or a Chinese label on the pack, and it costs more per unit forever; general trade costs months and fees up front and then makes every unit cheaper, so the switch point is a volume number, not a strategy preference.

**The table it must carry.** One comparison table, twelve to fourteen rows, three columns: cross-border eCommerce, general trade import, and "what decides it". Rows must be operational, not conceptual: legal entity required, product registration and licence required, Chinese physical label required, duty and tax treatment (verify and cite current CBEC tax handling and the annual and per-transaction limits), positive list dependency, inventory location, replenishment lead time, minimum viable order volume, ability to sell offline, ability to sell to other retailers, invoicing and fapiao, returns handling, price flexibility, and time to first sale. The tax and limit rows must carry a live citation to the issuing ministry, and the writer states the date checked.

**The proprietary number.** The monthly unit volume at which the team's own modeling flips general trade cheaper than cross-border, derived from the calculators, expressed as a range across three representative categories, with the assumptions listed underneath. Label it as TheChinaPath modeling and show the inputs so a reader can argue with it.

**Outline.**
1. The one-line difference, then the fourteen-line difference
2. What cross-border actually exempts you from, and what it does not
3. The positive list, and how to check your own HS code against it
4. What general trade costs before you sell a single unit
5. The volume where the math flips
6. The hybrid most brands end up running, and why
7. How to decide this month rather than next quarter

**Internal links.** /enter-china/cross-border-setup, /enter-china/distribution, /grow-in-china/cross-border-ecommerce, /tools/tmall-global-setup-and-run, /enter-china/market-entry-consulting
**CTA.** Run the first-year calculator for your category under both routes.
**Do not.** Do not state the cross-border transaction and annual purchase limits, the composite tax rate, or the positive list category count from memory or from a competitor page. Each one is verified live and cited, with the check date visible. Do not present cross-border as the beginner option and general trade as the grown-up one; the piece is a cost comparison and the recommendation has to fall out of the numbers.

---

## W18 · WED · LEDGER B

**Title:** How hotel groups actually reach Chinese travellers
**Word count:** 1,200 to 1,500
**Proof.** Marriott, including the published Tmall Super Brand Day and Bonvoy enrolment figures. Channels: Fliggy and Ctrip, WeChat mini programme for direct booking, RedNote for consideration, and the loyalty programme as the actual asset. This is the one Ledger B with a marketplace component, so it can carry a partial fee table for Fliggy.

---

## W19 · TUE · ANCHOR

**Title:** What a Douyin cross-border store costs in year one
**Query:** douyin cross border store cost · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** A Douyin cross-border store is cheap to open and expensive to run, because the platform fees are the small part and the content and live selling operation that makes the store move is a monthly cost the brand carries whether or not anything sells that week.

**The table it must carry.** One year-one cost table, twelve to fifteen line items down the rows, three columns: lean setup, typical setup, and what drives the number up. Rows: deposit, annual technical service fee, commission by category band (verify the current published rate card and cite it), store setup and certification documents, product listing and Chinese copy, imagery and short-form video production, live room hours, host and operator staffing, paid traffic, sample and gifting cost, logistics per order, returns, and platform tools. Every fee row that comes from Douyin's published rules is cited; every operating row is presented as a range with the assumption stated.

**The proprietary number.** From the Douyin calculator: the median year-one total across all completed sessions, the median split between platform fees and content and traffic spend, and the single line item that most often surprises operators, taken from the aggregate. Say how many sessions the figures come from.

**Outline.**
1. What Douyin actually charges you
2. The costs that are not on Douyin's rate card
3. Content is a fixed cost, not a campaign
4. What a live selling hour costs to staff and stock
5. Two budgets: the lean store and the one that competes
6. When Douyin should be the first store and when it should be the third
7. What breakeven looks like on this platform

**Internal links.** /tools/douyin-cost-calculator, /grow-in-china/social-commerce, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run
**CTA.** Run the Douyin cost calculator with your category and target GMV.
**Do not.** Do not quote deposit or commission figures without pulling them from Douyin's current published merchant rules and citing them, with a visible check date, because these move.
**Territory guard.** Creator seeding, agency-run KOL programs and daily content production belong to TheRedScroll, so the content cost section prices the work as a line item and links to /social-in-china instead of pitching it.

---

## W19 · WED · LEDGER A

**Title:** What it costs to sell stationery and office products in China
**Word count:** 1,100 to 1,400

Block 4 carries this one because stationery is the clearest case in the whole ledger series of a category killed by cost per order. A single notebook or pen cannot absorb cross-border parcel cost, so the unit economics block has to work in bundles and sets from the first line and show the average order value the category needs before it clears breakeven. The regulatory trap is student stationery: products aimed at school-age users fall under a national safety standard the writer must verify and cite, and solvent-based markers and correction fluid raise a dangerous goods question at air freight booking. Block 5 should conclude that stationery works as a gifting and design-led play with a strong set proposition, and that a plain functional range should not open a store at all.

**Proof.** None available. Use the block 6 honesty line.

---

## W20 · TUE · ANCHOR

**Title:** Month one on Tmall Global: what actually happens
**Query:** tmall global store launch timeline · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** Month one on Tmall Global is a documentation and integration project, not a sales month, and the brands that hit their launch date are the ones that had the trademark, the corporate documents and the first inbound shipment ready before the application was ever submitted.

**The table it must carry.** A day-by-day run table across the first 30 days, roughly fifteen rows grouped by week. Columns: day range, what the platform is doing, what the brand has to deliver that week, what blocks the next step if it slips, and who owns it (brand, TP or operator, logistics partner). Rows must be concrete: document pack submitted, trademark verification, deposit and annual fee paid, store shell created, category and product qualification, listing build and Chinese copy, image and detail page approval, warehouse and inbound booking, first inbound received and put away, payment and settlement account verified, customer service account staffed and hours set, soft launch, first paid traffic. Do not smooth this into four tidy weeks; the point of the piece is that it is uneven.

**The proprietary number.** Across every Tmall Global store the team has opened: the median number of days from document submission to storefront live, the range between the fastest and slowest, and the single most common cause of delay, with the count of stores behind the figure and the period it covers.

**Outline.**
1. The two things that decide your launch date, and both happen before day one
2. Week one: documents, deposit, and the verification queue
3. Week two: category qualification and the listings nobody budgeted time for
4. Week three: inventory, inbound, and the first thing that always slips
5. Week four: soft launch, first orders, and what the data does not tell you yet
6. What month one costs
7. Month two, so you know what you are walking into

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /enter-china/branding-localisation, /work
**CTA.** Run the Tmall Global first-year calculator before you commit to a launch date.
**Do not.** Do not present the timeline as a guarantee. Say which steps are inside the brand's control and which sit in a platform review queue whose duration nobody outside Alibaba can promise. Do not describe the store opening as a marketing launch; the marketing sequence is a separate piece and this one stops at first orders.

---

## W20 · WED · LEDGER A

**Title:** What it costs to sell musical instruments in China
**Word count:** 1,100 to 1,400

Block 3 carries this, and the trap is wood. Instruments containing rosewood, ebony or other listed species raise a CITES documentation question on every single shipment, and the writer must verify the current listing status and the permit process with the relevant authority and cite it, because a guitar held at customs for a missing certificate is the most common failure in this category. Second trap: digital pianos, amplifiers and anything with a mains power supply pull in electrical certification, and wireless instrument gear pulls in radio type approval. Block 4 should show that oversized, fragile freight plus a high average order value makes this a category where returns and damage rates decide the margin, and block 5 should point toward a specialist dealer relationship rather than a marketplace-first plan for large instruments.

**Proof.** None available. Use the block 6 honesty line.

---

## W21 · TUE · ANCHOR + ASSET

**Title:** Labeling and testing: what stops a shipment at Chinese customs
**Query:** china import labeling requirements · **Difficulty:** WEAK
**Word count:** 2,100 to 2,400

**The answer, in one line.** Shipments stop for a short list of reasons, and almost all of them are a label that does not match the product or a test report that does not exist yet, both of which are fixable weeks before the container is booked and expensive to fix after it lands.

**The table it must carry.** The asset: a per-category label and test checklist, built as a real table with roughly ten category rows (food and beverage, cosmetics and personal care, small appliances, textiles and apparel, toys, food contact articles, footwear and leather, furniture, pet products, general non-regulated goods) and five columns: category, what has to appear on the Chinese label, which test report or certificate customs may ask for, who issues it and how long it typically takes, and the single most common rejection reason in that category. Every cell in the second, third and fourth columns is an instruction to the writer to verify against the current official requirement and cite the issuing body inline. Add a header note that requirements differ between the cross-border and general trade routes and that the checklist marks which column applies where.

**The proprietary number.** From the stores under management: the share of first inbound shipments across the last two years that were held or delayed for a label or documentation issue rather than a product issue, and the median number of days those holds added. State the shipment count and the period.

**Outline.**
1. What customs is actually checking
2. The Chinese label: content, placement, and who is legally responsible for it
3. Cross-border versus general trade: what the route changes about labeling
4. Test reports and certificates, by category
5. The per-category checklist
6. What a held shipment costs you, in days and in money
7. The pre-shipment review that prevents almost all of this

**Internal links.** /enter-china/cross-border-setup, /enter-china/distribution, /grow-in-china/cross-border-ecommerce, /enter-china/branding-localisation, /tools/jd-worldwide-setup-and-run
**CTA.** Book a pre-shipment label and document review before your first inbound.
**Do not.** Do not state a single labeling requirement, font size, mandatory field, standard number or certificate validity as fact. Every one is verified against the current official source and cited with the date checked, and the piece carries a visible line saying requirements change and the reader should confirm before shipping. Do not write this as a general compliance essay; the value is entirely in the per-category table.

---

## W21 · WED · LEDGER A

**Title:** What it costs to sell cleaning and household products in China
**Word count:** 1,100 to 1,400

Block 3 carries this one, because chemistry decides everything downstream. Detergents, disinfectants and anything with an antibacterial claim sit under registration and filing regimes the writer must verify and cite, and a product that makes a disinfection claim is a different regulatory object from the same liquid sold as a cleaner. The operational trap is freight: liquids, aerosols and flammable formulations face air transport restrictions and hazardous goods classification, which pushes the category to sea freight and general trade and makes the replenishment cycle long. Block 4 should show a low average order value against heavy, restricted freight and be honest that this category rarely clears breakeven as a cross-border store without a multi-product basket.

**Proof.** None available. Use the block 6 honesty line.

---

## W22 · TUE · ANCHOR

**Title:** What a JD Worldwide store costs in year one
**Query:** jd worldwide fees cost · **Difficulty:** MEDIUM
**Word count:** 2,000 to 2,400

**The answer, in one line.** A JD Worldwide store's year-one cost is built from a refundable deposit, a fixed annual fee and a category commission, and the number that actually decides the budget is the traffic spend needed to make a store visible on a platform where the buyer arrives with intent and compares on price and delivery speed.

**The table it must carry.** One year-one cost table with fourteen or so rows and three columns: line item, lean budget, competitive budget. Rows: deposit by store type, annual platform usage fee, commission by category band, store setup and document preparation, Chinese trademark and authorization costs, listing build and translation, imagery and detail pages, JD logistics and warehousing model, per-order fulfillment, returns, customer service staffing, in-platform advertising, promotional event participation, and operating headcount or agency retainer. Commission and fee rows carry a citation to JD's published merchant terms with a check date. Add a fourth column only if the writer can source the equivalent Tmall Global line, and if so, label it clearly as a cross-reference.

**The proprietary number.** From the JD Worldwide calculator: the median year-one total across completed sessions, the median share of that total sitting in platform fees versus traffic, and how those two shares compare with the same medians from the Tmall Global calculator. Give the session counts.

**Outline.**
1. What JD Worldwide charges, line by line
2. The deposit question, and when you get it back
3. Commission by category, and where the bands actually sit
4. Logistics: what choosing JD's warehouse changes about your cost per order
5. The traffic budget nobody plans for
6. Lean store versus competitive store, side by side
7. Whether JD should be your first store or your second

**Internal links.** /tools/jd-worldwide-setup-and-run, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /grow-in-china/media
**CTA.** Run the JD Worldwide first-year calculator with your category and target GMV.
**Do not.** Do not carry any deposit, annual fee or commission figure over from an older TheChinaPath piece or a competitor page. Pull them from JD's current published terms, cite them, and stamp the check date on the table. Do not let the piece become a JD versus Tmall comparison; that is the week 26 anchor, and this one links to it rather than duplicating it.

---

## W22 · WED · LEDGER A

**Title:** What it costs to sell home and kitchen products in China
**Word count:** 1,100 to 1,400

Blocks 2 and 3 share the weight here, because home and kitchen is a category where the fee table is straightforward and the route question splits the catalogue in two. Anything with a plug carries an electrical certification and a 220V question, and anything that touches food carries a food contact material requirement, both of which the writer must verify and cite rather than summarize, while textiles and non-powered kitchenware move cross-border with no such gate. The disambiguation rule from the week 14 anchor applies in full: the opening 60 words must make clear this is about selling a foreign home and kitchen brand into China, not about sourcing from Chinese factories, and the piece links back to the week 14 anchor in the first two paragraphs. Block 5 should say Tmall Global for brand-led ranges and JD Worldwide where delivery speed and appliance credibility matter more than brand storytelling.

**Proof.** None available. Use the block 6 honesty line.

---

## W23 · TUE · ANCHOR + REPORT

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

---

## W23 · WED · LEDGER A

**Title:** What it costs to sell outdoor and sports gear in China
**Word count:** 1,100 to 1,400

Block 5 carries this one, because outdoor is the category where the platform verdict genuinely flips depending on which half of the catalogue leads. Apparel and packs run cleanly on Tmall Global with a brand story, while technical hardware, batteries, radio devices and anything with a protective claim need the route checked first, so the fee table in block 2 has to be read alongside the compliance answer rather than ahead of it. The specific trap to name: a GPS watch, a headlamp with a lithium cell and a camping stove each fail at a different step, radio type approval, air freight classification and fuel restriction, and all three are verify-and-cite items. Link back to the week 15 anchor in the first two paragraphs, and keep the sourcing disambiguation in the opening lines.

**Proof.** None available. Use the block 6 honesty line.

---

## W24 · TUE · ANCHOR

**Title:** How to sell pet products in China
**Query:** sell pet products china · **Difficulty:** MEDIUM
**Word count:** 2,000 to 2,400

**The answer, in one line.** Pet accessories and hard goods can be on a cross-border store within weeks, while pet food and treats cannot move at all until the overseas facility is registered and the import route is approved, which is why most foreign pet brands start with the half of their catalogue that is not edible.

**The table it must carry.** One table, eight rows across the pet catalogue: dry food, wet food, treats and chews, supplements and functional products, litter and hygiene, toys, collars leashes and apparel, beds and furniture, grooming products. Columns: product type, whether it is treated as feed or as a general good, the registration or quarantine step the writer must verify and cite, cross-border viable or not, typical shipping weight class, and first channel recommendation. The feed column is where the piece earns its ranking, so it must be precise about which products fall inside the animal feed regime and which do not, and it must say the classification is verified with the relevant Chinese authority.

**The proprietary number.** From the Compass distributor database: the number of vetted distributors listing pet as an active category, how many of those handle feed-classified products versus accessories only, and their median offline channel type. Give the pull date.

**Outline.**
1. The line that splits the category: is it feed or is it a thing
2. Pet food and treats: the registration sequence, in order
3. Accessories and hard goods: on sale in weeks, not months
4. What Chinese pet owners actually buy, and how that differs by city tier
5. What a pet store costs to run for a year
6. Cross-border store, distributor, or both
7. The twelve-month sequence for a full range

**Internal links.** /compass/shortlist, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /enter-china/distribution, /grow-in-china/cross-border-ecommerce
**CTA.** Request a Compass shortlist of vetted pet category distributors.
**Do not.** Do not state the pet food registration requirement, the quarantine permit process, or any ingredient restriction as settled fact. Each is verified against the current requirement and cited.
**Territory guard.** Pet is a category where community and creator content drives demand, and that work sits with TheRedScroll, so the piece names the pattern and links to /social-in-china rather than describing seeding as a service offered here.
**Link forward.** The W06 Ledger on what it costs to sell pet food in China ships first. Link to it from section 2 with descriptive anchor text, and add the reciprocal link from that Ledger back to this page.

---

## W24 · WED · LEDGER A

**Title:** What it costs to sell consumer electronics in China
**Word count:** 1,100 to 1,400

Block 3 carries this by a distance, because consumer electronics stacks three separate approvals: mandatory product certification for the device class, radio type approval for anything with wireless, and a network access requirement for certain connected devices, all of which the writer must verify and cite with the issuing body named. The second trap is shipping and after-sales: lithium batteries carry air freight documentation requirements, and China's consumer repair and replacement obligations mean a brand needs a domestic service answer before it lists, which most cross-border sellers discover after their first defect. Block 4 should show a strong average order value fighting a high return rate and a real warranty liability, and block 5 should point to JD Worldwide first for the delivery and after-sales credibility the category is judged on.

**Proof.** None available. Use the block 6 honesty line.

---

## W25 · TUE · ANCHOR

**Title:** What a China distribution agreement actually contains
**Query:** china distribution agreement terms · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** A China distribution agreement lives or dies on four clauses, territory and channel definition, minimum purchase commitments, IP and trademark ownership, and termination, and a foreign brand that signs a template without rewriting those four has usually given away its own market for the length of the term.

**The table it must carry.** One clause-by-clause table, roughly sixteen rows, four columns: clause, what a distributor typically proposes, what a brand should push for, and the failure this clause causes when it is left loose. Rows: territory, channel scope including whether eCommerce is carved out, exclusivity and its conditions, term length, minimum purchase volumes and what happens when they are missed, pricing and margin structure, payment terms and currency, trademark registration and ownership, product registration ownership where a Chinese licence is required, marketing spend and who owns the assets, customer and distributor data, stock and returns, quality and recall responsibility, audit rights, governing law and dispute forum, termination and post-termination stock. The eCommerce carve-out row is the one most readers arrive for and it should be written first.

**The proprietary number.** From the Compass distributor database and the team's own deal work: the share of distributor-proposed agreements reviewed that requested exclusivity covering online channels as well as offline, and the median term length proposed versus the median actually signed. State the sample and the period.

**Outline.**
1. The four clauses that decide the deal
2. Territory and channel: why online has to be carved out separately
3. Exclusivity, and how to make it conditional on performance
4. Minimum purchase volumes that mean something
5. Who owns your trademark, your registrations and your Chinese social accounts
6. Termination, and the stock sitting in their warehouse on day one after
7. How to run the negotiation without losing the relationship

**Internal links.** /enter-china/distribution, /compass, /compass/find-a-distributor-in-china, /enter-china/market-entry-consulting, /compass/shortlist
**CTA.** Request a Compass shortlist before you sign anything exclusive.
**Do not.** Do not give legal advice or draft clause language. The piece explains what each clause does commercially and tells the reader to have a China-qualified lawyer draft and review, and it says so in the first section rather than in a footer disclaimer. Do not treat the distributor as an adversary throughout; the honest position is that a well-drafted agreement protects both sides and a one-sided one gets ignored in practice.

---

## W25 · WED · LEDGER A

**Title:** What it costs to sell coffee and specialty food in China
**Word count:** 1,100 to 1,400

Block 3 carries this one, and it is the longest block in the piece: overseas facility registration, import record filing, the Chinese label and the remaining shelf life rule together decide whether this category can trade at all, and every one of them is a verify-and-cite item sourced to GACC or SAMR. The commercial trap is shelf life against replenishment time, because a product with a short window loses most of its sellable life to freight and clearance, which is what turns a healthy margin into a write-off. Block 4 should show the freshness-driven inventory model, small frequent shipments at a higher per-unit freight cost, and block 5 should recommend cross-border to test demand and general trade once volume supports a domestic importer. Link back to the week 17 anchor early.

**Proof.** None available. Use the block 6 honesty line.

---

## W26 · TUE · ANCHOR

**Title:** Tmall Global vs JD Worldwide vs Douyin: which store first
**Query:** tmall vs jd vs douyin · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Open Tmall Global first if your category is bought by brand and researched before purchase, JD Worldwide first if it is bought on specification and delivery speed, and Douyin first if the product can be demonstrated in thirty seconds, and the deciding input is your category, not your budget.

**The table it must carry.** One decision table, three platform columns and roughly fourteen rows, built so a reader can score their own situation: buyer intent and how people arrive, category fit, year-one all-in cost band, deposit and annual fee, commission band, time from application to live, document and trademark requirements, logistics model, content and staffing load per month, paid traffic dependency, discovery versus search, offline and brand halo effect, what the platform is bad at, and the single condition that flips the recommendation. Every fee cell cites the platform's current published terms with a check date, and the cost band cells reference the corresponding calculator.

**The proprietary number.** Across the stores under management: how many opened on each of the three platforms first, and of the brands that opened a second store within eighteen months, which platform they added and how long the gap was. Give the store count and the period, and say plainly what the sample does and does not prove.

**Outline.**
1. The short answer, by category
2. How buyers arrive on each platform, and why that changes everything downstream
3. Cost and time to open, side by side
4. The monthly operating load each platform demands
5. The decision table
6. The three situations where the obvious answer is wrong
7. What a second store costs once the first one runs

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /grow-in-china/social-commerce
**CTA.** Run all three calculators with the same category and target GMV and compare the totals.
**Do not.** Do not declare an overall winner. This query is held by pages that hedge, and the way to beat them is to answer per category and per buyer behavior, with a named condition that flips each recommendation. Do not restate the fee tables from the week 19, 22 and 23 pieces at length; summarize, cite, and link, so the benchmark stays the single source that gets updated.

---

## W26 · WED · LEDGER A

**Title:** What it costs to sell bakery and food ingredients in China
**Word count:** 1,100 to 1,400

This one is partly B2B, so block 5 splits: marketplace for consumer-facing SKUs, distributor for foodservice. Say so plainly, it is the honest answer and it links to `/enter-china/distribution`.
**Proof.** Master Martini, Kerry DaVinci Gourmet.

---

## W27 · TUE · ANCHOR + ASSET

**Title:** 618 2027: the 100-day plan
**Query:** 618 festival preparation · **Difficulty:** SEASONAL
**Word count:** 2,100 to 2,400

**The answer, in one line.** 618 is won or lost in the ninety days before the sale opens, because platform slot applications, bonded inventory, and price registration all close weeks ahead of the first sale window, and the levers a brand can still pull on the day are worth a fraction of the ones that close at T-90.

**The table it must carry.** One countdown grid, nine rows, five columns. Columns: Workstream, Owner (brand, TP or agency, logistics partner, platform account manager), Opens at (days before day one of the sale), Hard close (days before), What blocks it if you miss. Rows: (1) Platform campaign registration and slot application, (2) Bonded warehouse inbound booking and stock allocation, (3) Price ladder and discount mechanic registration with the platform, (4) Coupon, cross-store subsidy and platform voucher enrolment, (5) Detail page and campaign creative build plus Chinese copy sign-off, (6) Livestream slot booking and host contracting, (7) Paid media budget commitment and account funding, (8) Customer service staffing and script build for peak hours, (9) Returns and refunds capacity plus post-festival reconciliation. Every cell in the Opens and Hard close columns must be a number of days, not a vague phrase. Writer to confirm current-year platform calendar dates with a cited platform or trade-press source and to state explicitly that dates move year to year.

**The proprietary number.** From the stores TheChinaPath runs: the median number of days before day one at which those stores locked their final 618 price ladder, plus the share of the same set that missed at least one platform registration deadline in the last cycle. State the store count as the sample size.

**Outline.**
1. Why the 618 you can influence ends at T-90
2. T-100 to T-70: inventory, bonded allocation, and the SKU list you can actually sell
3. T-70 to T-45: platform registration, price ladder, and the mechanics you commit to
4. T-45 to T-21: creative, detail pages, livestream slots, and media budget
5. T-21 to day one: the last three weeks, in short, and where the full sprint guide lives
6. During the sale: the four numbers to watch and the only two you can still move
7. T+1 to T+30: returns, reconciliation, and what to file for next year

**Internal links.** /tools/tmall-global-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /work
**CTA.** Download the 100-day countdown sheet, one row per workstream, with owners and hard-close dates.
**Do not.** Do not write a generic festival explainer that opens with the history of 618 and JD's anniversary. Start at T-100 and stay operational. Do not turn the creator workstream into a how-to on seeding and creator relationship building.
**Territory guard.** The creative and creator workstreams are named as dependencies with owners and deadlines only. Creator seeding, community management and daily content production hand off to TheRedScroll. One line, in the T-45 section.

---

## W27 · WED · LEDGER A

**Title:** What it costs to sell colour cosmetics in China
**Word count:** 1,100 to 1,400

Blocks 3 and 4 carry this one. Colour cosmetics is where the shade count destroys the model: a lipstick line is not one product, it is twenty SKUs, and the filing, the Chinese label, the test report and the minimum inbound quantity apply per shade, so a range that looks affordable at line level is brutal at SKU level. Writer must verify and cite the current NMPA position on whether colour cosmetics fall under general filing or special registration, whether cross-border sales change that obligation, and what the animal testing exemption currently requires, then build block 4 on a per-shade cost rather than a per-line cost. Show the breakeven twice: full range, and a five-shade launch set. Link forward to the W35 beauty anchor as the category-wide view.

**Proof.** None available. Use the block 6 honesty line.

---

## W28 · TUE · ANCHOR

**Title:** What a WeChat presence costs a foreign brand
**Query:** wechat official account cost · **Difficulty:** WEAK
**Word count:** 1,900 to 2,300

**The answer, in one line.** A working WeChat presence for a foreign brand is four separate purchases, not one, and the setup bill is the small half: verification and account registration land in the low four figures in dollars, while the recurring cost of running a mini program store, a payment merchant account and a CRM sits in the low to mid four figures a month before anyone writes a single post.

**The table it must carry.** One cost table, six rows, five columns. Columns: Component, What it actually does, One-time setup band (RMB and USD), Annual run band (RMB and USD), Who can own it. Rows: (1) Official Account, service type, verified, (2) Official Account, subscription type, verified, (3) Mini Program storefront build and hosting, (4) WeChat Pay merchant account and settlement, (5) SCRM or CRM layer plus tagging and member data, (6) Channels store and livestream capability. Bands, not point estimates. Writer to verify and cite the current annual verification fee and any WeChat Pay rate and settlement terms with a source, and to state the date checked.

**The proprietary number.** From TheChinaPath's calculator runs: the median monthly WeChat run cost modelled across foreign-brand cross-border scenarios, split between platform and tooling cost versus people cost, with the run count stated. Say plainly what share of that median is fixed regardless of sales volume.

**Outline.**
1. The four things people mean when they say WeChat
2. Setup: what you pay once, and what a verified account actually unlocks
3. Running it: the monthly bill nobody quotes you
4. The mini program store versus a Tmall Global flagship, on cost per order
5. What WeChat is good at for a foreign brand, and what it is not
6. Three presence levels and what each one costs to hold for twelve months
7. How to decide before you spend

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/social-commerce, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /insights
**CTA.** Model your own year one against the Tmall Global setup and run calculator before you commit to a mini program build.
**Do not.** Do not publish a step-by-step account registration walkthrough. Every incumbent already ranks for that and it is the wrong buyer. Do not quote a single number for "a WeChat account"; the whole value of this piece is the split.
**Territory guard.** Content production, community management and ongoing editorial for the account are named as recurring cost lines with a band, then handed to TheRedScroll. ICP filing and hosting for anything outside the mini program hand to ChinaWebFoundry. One line each.

---

## W28 · WED · LEDGER A

**Title:** What it costs to sell personal care and body products in China
**Word count:** 1,100 to 1,400

Block 4 carries this one, because personal care is the category where physics beats strategy: body wash and body lotion ship heavy and sell cheap, so freight and bonded handling eat a share of order value that would be a rounding error on a serum. Build the unit economics on chargeable weight, not on units, and show the basket size at which a cross-border order stops losing money. Writer must verify and cite where the boundary sits between a product regulated as a cosmetic and one treated as an ordinary consumer good in this category, since that classification changes the filing and label work in block 3, and must confirm the current cross-border positive list status for body and bath items. Block 5 verdict should be blunt about bundling and multi-unit packs as the only route to a workable order value.

**Proof.** None available. Use the block 6 honesty line.

---

## W29 · TUE · ANCHOR

**Title:** How to sell health supplements in China without a Blue Hat
**Query:** sell supplements china cross-border · **Difficulty:** HELD
**Word count:** 2,100 to 2,400

**The answer, in one line.** A foreign supplement brand can sell in China without a Blue Hat by staying on the cross-border channel, where the product ships as a personal import and the health food registration does not apply, but the trade is real: no health claims, no offline retail, no general trade distribution, and a permanent ceiling on where the product can be sold.

**The table it must carry.** One route comparison, four columns, five rows. Columns: Route, What you may claim on pack and on the detail page, Approval or filing required, Realistic timeline, Channels this opens and closes. Rows: (1) Cross-border ecommerce, bonded, (2) Cross-border ecommerce, direct mail, (3) General trade as ordinary food, (4) Health food filing route, (5) Health food registration route, the Blue Hat. Writer must verify and cite the current distinction between the filing route and the registration route, the current ingredient list position for each, and current cross-border positive list coverage for supplement categories, and must date every regulatory claim.

**The proprietary number.** From the Compass distributor database: how many distributors in Compass carry imported supplements, how many of those hold a health food registration record on at least one product they distribute, and the ratio. That ratio is the piece's argument for why the offline route is slower than brands assume.

**Outline.**
1. What a Blue Hat is, and what it costs you in time to get one
2. The cross-border exemption: what it covers, what it does not
3. What you cannot say: claims language on a cross-border listing
4. The ceiling: three things you give up by staying cross-border
5. When to start the Blue Hat clock, and what triggers it
6. Running both at once: the split-SKU approach and where it breaks
7. A decision test in five questions

**Internal links.** /enter-china/cross-border-setup, /enter-china/distribution, /compass, /grow-in-china/cross-border-ecommerce, /tools/tmall-global-setup-and-run
**CTA.** Shortlist distributors in Compass who already hold registration records in your subcategory.
**Do not.** Do not state any ingredient or claim rule as settled fact. Every regulatory line in this piece is the writer's to verify, cite and date. Do not imply cross-border is a loophole; frame it as a channel with a defined boundary.

---

## W29 · WED · LEDGER A

**Title:** What it costs to sell packaged food in China
**Word count:** 1,100 to 1,400

Block 3 leads: cross-border positive list status, shelf-life-on-arrival rule, and Chinese labelling. This is the category where shipments actually get stopped, so the route block is the reason to read the page.
**Proof.** Mission Foods.

---

## W30 · TUE · ANCHOR

**Title:** RedNote for foreign brands: what the platform is actually for
**Query:** rednote marketing foreign brands · **Difficulty:** HELD
**Word count:** 2,000 to 2,400

**The answer, in one line.** RedNote is a search and pre-purchase research engine that happens to look like a social feed, so for a foreign brand it earns its budget by owning the answers people find when they search a category, a concern, or your brand name, and it is a poor fit for brands that need volume this quarter.

**The table it must carry.** One jobs table, six rows, five columns. Columns: The job, Does RedNote do this well, The on-platform mechanism that does it, What it costs a month to run at a serious level (band), The number that tells you it is working. Rows: (1) Category discovery for a brand nobody knows, (2) Capturing search demand for a concern or ingredient, (3) Defending your own brand name in search, (4) Converting to a transaction on-platform, (5) Handing off to a Tmall Global or JD store, (6) Retaining and re-reaching an existing buyer. A second, smaller table: same six jobs, three columns, RedNote versus Douyin versus a Tmall Global flagship, one word per cell.

**The proprietary number.** From the stores TheChinaPath runs: the share of assisted traffic that RedNote contributes to Tmall Global and Douyin stores in the portfolio, plus the median lag in days between first RedNote exposure and first purchase where the path can be traced. State the sample and be honest about attribution limits.

**Outline.**
1. What RedNote is, in the way a buyer needs it explained
2. The search behaviour that makes the platform work
3. What a foreign brand can own on RedNote, and what it cannot
4. The storefront question: selling on RedNote versus selling through it
5. What a serious presence costs to hold for twelve months
6. Three brand situations where RedNote is the wrong first platform
7. How RedNote fits alongside Tmall Global and Douyin

**Internal links.** /grow-in-china/social-commerce, /grow-in-china/cross-border-ecommerce, /tools/douyin-cost-calculator, /grow-in-china/media, /work
**CTA.** Compare the cost per order on a RedNote-assisted path against Douyin with the Douyin cost calculator.
**Do not.** Do not write a listicle of RedNote content formats. Do not present creator marketing as the service on offer; this piece is about platform strategy, storefront and commerce.
**Territory guard.** Creator seeding, note production and community management are named as required inputs with a cost band, then handed to TheRedScroll. One line, in section five.

---

## W30 · WED · LEDGER A

**Title:** What it costs to sell apparel in China
**Word count:** 1,100 to 1,400

Block 4 carries this one, and the line that decides it is returns. Apparel is the category where a healthy gross margin dies at the return rate, so the unit economics section has to model cost per delivered order at three return rates and show what happens to breakeven GMV at each, including the cost of a returned cross-border unit that cannot be resold from a bonded warehouse. Writer must verify and cite the current Chinese textile labelling and fibre content requirements, including whether a test report is needed and who can issue it, and must confirm current cross-border positive list treatment for garments. Block 5 should turn on assortment depth: a size-and-colour matrix multiplies SKU count faster than any other category on this ledger.

**Proof.** None available. Use the block 6 honesty line.

---

## W31 · TUE · ANCHOR

**Title:** PIPL and your China store: what a brand actually has to do
**Query:** pipl compliance foreign brand · **Difficulty:** WEAK
**Word count:** 2,000 to 2,400

**The answer, in one line.** For a foreign brand running a China store, PIPL comes down to a short list of operational jobs: capture consent where the data is collected, publish a Chinese-language notice, control what leaves the country, hold a contract with every processor who touches customer data, and be able to answer a customer request, and most brands fail on the third and fourth, not the first.

**The table it must carry.** One obligations table, seven rows, five columns. Columns: The obligation, What it looks like on a live store, Who does it (platform, brand, agency, processor), The evidence you must be able to produce, The way it typically fails. Rows: (1) Consent at collection, including marketing opt-in, (2) Chinese-language privacy notice on every surface, (3) Cross-border transfer of customer data out of China, (4) Retention and deletion, (5) Handling a data subject request, (6) Processor and vendor contracts, including your agency and your CRM, (7) Local representative or contact point. Every regulatory row must be verified and cited by the writer against primary or law-firm sources, with the date checked stated in the piece.

**The proprietary number.** From TheChinaPath's store portfolio: how many of the stores under management transfer any customer-level data outside China, and how many of those have a signed processor contract in place covering it. State the count and the share, and be honest if the honest answer is uncomfortable.

**Outline.**
1. The five jobs, stated before any law is explained
2. Where customer data actually sits when you sell on Tmall Global or Douyin
3. The transfer question: what leaves China in a normal week, and what that triggers
4. Your agency, your CRM, your logistics partner: the contracts nobody signs
5. What consent looks like on a Chinese detail page and in a mini program
6. A twelve-item audit a brand can run on its own store this month
7. When you need a lawyer, and what to bring them

**Internal links.** /enter-china/cross-border-setup, /enter-china/market-entry-consulting, /grow-in-china/cross-border-ecommerce, /grow-in-china/social-commerce, /insights
**CTA.** Run the twelve-item audit against your store, then book a review of the gaps it surfaces.
**Do not.** Do not restate the statute section by section. The reason to write this is that every ranking page reads like a law firm memo and none of them tell an operator what to change on Monday. Do not offer a legal opinion; every rule statement carries a citation and a checked date.
**Territory guard.** ICP filing, hosting location and anything about where a corporate website is served hand off to ChinaWebFoundry. One line, in section two.

---

## W31 · WED · LEDGER A

**Title:** What it costs to sell jewellery in China
**Word count:** 1,100 to 1,400

Blocks 2 and 3 carry this one together. Jewellery sits in the platform tier where deposits and category qualification are heavier than the beauty and apparel numbers most brands have seen quoted, and the route is complicated by precious metal purity verification and by tax treatment that differs by material and price point. Writer must verify and cite the current platform deposit and commission tiers for fine jewellery versus fashion jewellery on Tmall Global and JD Worldwide, the current requirement for purity or hallmark testing and who issues an accepted report, and whether consumption tax applies to any item type in this category. Block 4 should model a low-volume, high-order-value business, where the fixed annual platform cost is the number that decides everything, and block 5 should name the annual GMV below which no marketplace flagship makes sense.

**Proof.** None available. Use the block 6 honesty line.

---

## W32 · TUE · ANCHOR

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

---

## W32 · WED · LEDGER A

**Title:** What it costs to sell watches in China
**Word count:** 1,100 to 1,400

Blocks 3 and 5 carry this one. Watches carry a tax exposure that most consumer categories do not, and the writer must verify and cite whether consumption tax applies above a stated retail price threshold, what that threshold currently is, and how it interacts with the cross-border versus general trade choice, because that single line moves the delivered cost by more than the platform commission does. The second trap is price policing: a watch brand with grey market supply already in China is competing against its own product at a lower price, and block 4 should model that by showing cost per order at both the intended price and the observed market price. Block 5 verdict should turn on whether the brand can service and authenticate in China, since after-sales capability, not platform choice, is what closes the sale at this order value.

**Proof.** None available. Use the block 6 honesty line.

---

## W33 · TUE · ANCHOR + ASSET

**Title:** The monthly content load a China store actually needs
**Query:** china ecommerce content requirements · **Difficulty:** OPEN
**Word count:** 2,100 to 2,400

**The answer, in one line.** A single-channel China store needs roughly a defined, countable set of assets every month to stay merchandisable, and brands underfund it by budgeting for a launch package instead of a monthly production line, which is why detail pages go stale by month four and campaign slots get declined.

**The table it must carry.** The monthly content spec. Six columns: Channel, Asset type, Units per month, Format spec (dimensions, length, language requirement), Owner, What triggers an unscheduled refresh. Channel rows must cover a Tmall Global flagship, a JD Worldwide store, a Douyin store, a RedNote storefront and a WeChat mini program, and each channel must list its own asset types: detail page modules, main image sets, short video, livestream backdrops and scripts, campaign key visuals, size and ingredient charts, customer service response templates. Every Units per month cell is a number. A second small table: the same spec at three budget levels, minimum viable, competitive and category-leading, with a monthly asset count total for each.

**The proprietary number.** From the stores TheChinaPath runs: the median number of content assets produced per store per month across the portfolio, split by channel, plus the median interval between detail page refreshes. State the store count.

**Outline.**
1. Why a launch package is not a content plan
2. The unit of work: what counts as an asset on a Chinese marketplace
3. Channel by channel: the monthly count and the format rules
4. The unscheduled load: campaigns, SKU changes, compliance edits and complaints
5. Three budget levels, and what each one buys you in shelf quality
6. Who produces it: in-house, TP, studio, or a mix, and what each model costs to hold
7. The four signs your store is under-produced

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/social-commerce, /enter-china/branding-localisation, /work
**CTA.** Download the monthly content spec, one row per asset, with owners and refresh triggers.
**Do not.** Do not slide into a how-to on producing the content. The value here is the load, the count and the owner. Do not present the numbers as universal; state that they come from a named portfolio with a stated size.
**Territory guard.** Daily content production, editorial calendars and community management hand off to TheRedScroll. This piece specifies the requirement and the owner, not the production service. One line, in section six.

---

## W33 · WED · LEDGER A

**Title:** What it costs to sell luxury leather goods in China
**Word count:** 1,100 to 1,400

Block 3 carries this one, and the specific trap is material. Exotic skins pull a handbag into wildlife trade documentation, and any item above a retail threshold may attract consumption tax, so two visually identical bags can land at very different costs depending on the leather and the price tag. Writer must verify and cite the current CITES documentation requirement for exotic-skin goods entering China, the consumption tax position for luxury leather items and its threshold, and whether the cross-border channel changes either. The second trap is counterfeit exposure: block 5 should treat platform brand protection enrolment and authorised-channel proof as a cost line, not an afterthought, because an unpoliced listing environment sets your effective price. Pairs with the W43 luxury anchor; link forward.

**Proof.** None available. Use the block 6 honesty line.

---

## W34 · TUE · ANCHOR

**Title:** Tmall Partner, in-house or agency: who should run the store
**Query:** tmall partner vs in house team · **Difficulty:** HELD
**Word count:** 2,100 to 2,400

**The answer, in one line.** The right model is set by annual GMV and by how much of the pricing decision you are willing to give away, not by capability: below a certain revenue line a TP is the only model that pays for itself, above it an in-house team is cheaper per dollar of GMV, and the middle is where most brands sit and where the hybrid earns its keep.

**The table it must carry.** Two tables. First, a function ownership grid: eight rows, four columns. Columns: Function, Typical TP model, In-house, Agency. Rows: store operations and listings, pricing and promotion decisions, inventory and forecasting, customer service, livestream and content scheduling, paid media buying on platform ad tools, data access and reporting, brand assets and guideline enforcement. Cells state who holds it and, critically, who holds the decision when the two disagree. Second, a cost model comparison: three columns, one per model, rows for fee structure, commission or margin taken, headcount required, fixed monthly cost band, the GMV level at which this model becomes the cheapest option.

**The proprietary number.** From the stores TheChinaPath runs: the annual GMV level at which cost per dollar of GMV crosses over between models in the portfolio, with the store count stated, plus the median headcount actually required to run one flagship in-house across those stores.

**Outline.**
1. The two questions that settle this, before any model comparison
2. What a TP actually is, and what a TP contract usually takes
3. The in-house model: headcount, tooling, and the two roles brands always forget
4. The agency model and where it differs from a TP in practice
5. The crossover: GMV levels and the cost per dollar at each
6. The hybrid that most mid-size brands end up with
7. Nine questions to put to a TP before signing, and the three answers that end the conversation

**Internal links.** /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/market-entry-consulting, /work
**CTA.** Model your own crossover point with the Tmall Global setup and run calculator.
**Do not.** Do not write an anti-TP piece; the incumbents at one and two are TPs and the honest answer is that TPs win below the crossover. Do not quote fee percentages without sourcing them or presenting them as observed bands.

---

## W34 · WED · LEDGER A

**Title:** What it costs to sell medical devices and home diagnostics in China
**Word count:** 1,100 to 1,400

Block 3 is the whole piece. Everything in this category turns on device classification, because a class I product and a class II or III product live in different worlds: one may be sellable through a normal route, the other needs a registration certificate held by a qualified entity, and the platform will demand licence documentation from the seller before the store opens. Writer must verify and cite the current NMPA device classification framework, which classes are and are not eligible on the cross-border positive list, what registration certificate and operating licence the platform requires from a cross-border seller, and realistic timelines for each class. Block 4 should show that for a class II or III device, the compliance timeline, not the marketing budget, is the dominant year one cost, and block 5 should say plainly which brands should not start here at all.

**Proof.** None available. Use the block 6 honesty line.

---

## W35 · TUE · ANCHOR

**Title:** How to sell beauty and skincare in China in 2027
**Query:** sell cosmetics china foreign brand · **Difficulty:** HELD
**Word count:** 2,200 to 2,400

**The answer, in one line.** Beauty is not one category in China, it is five with different rules, and the first decision a foreign brand makes is which of its own SKUs to launch, because a facial serum, a sunscreen, a lipstick, an anti-dandruff shampoo and a fragrance each carry a different filing burden, a different lead time and a different first platform.

**The table it must carry.** One subcategory grid, five rows, six columns. Columns: Subcategory, Filing or registration path, Realistic lead time in weeks, Cross-border eligible, Recommended first platform, Launch cost band per SKU. Rows: facial skincare, colour cosmetics, sun care, hair care, fragrance. Every regulatory cell must be verified and cited by the writer with a date checked, including the current distinction between general cosmetics filing and special cosmetics registration, which of these five falls where, the current animal testing exemption conditions, and whether the cross-border channel alters the obligation.

**The proprietary number.** From TheChinaPath's calculator runs plus the store portfolio: the median year one cost per SKU modelled for a foreign beauty brand launching cross-border, broken into compliance, platform, inventory and marketing, with the run count stated, plus the median number of SKUs those brands actually launched with.

**Outline.**
1. Pick your launch SKUs before you pick your platform
2. The five subcategories and what each one costs you in time
3. Cross-border first: what it buys you and what it costs you later
4. Platform order: Tmall Global, Douyin, JD Worldwide, RedNote, and why the sequence matters
5. Year one, priced: compliance, inventory, store, media
6. The move onshore, and the three signals that say it is time
7. What kills foreign beauty brands in year two

**Internal links.** /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /tools/douyin-cost-calculator, /grow-in-china/social-commerce
**CTA.** Price your own SKU set with the Tmall Global setup and run calculator, then compare against Douyin.
**Do not.** Do not open with market size or a growth statistic; the incumbent at position one owns that framing and it is a research page, not an operator page. Do not treat beauty as one category anywhere in the piece. Link back to the W2 ledger for the facial skincare cost detail rather than repeating it, and forward to the W27 colour cosmetics ledger and the W36 sun care ledger.
**Territory guard.** Creator seeding and content production appear only as budget lines in section five, with a hand-off to TheRedScroll. One line.

---

## W35 · WED · LEDGER A

**Title:** What it costs to sell fragrance in China
**Word count:** 1,100 to 1,400

Blocks 3 and 4 carry this one, and the trap is logistics, not regulation. Alcohol-based fragrance is a restricted good for air transport and for some bonded warehouse handling, which limits carrier choice, raises freight cost per unit and can rule out direct mail fulfilment entirely, so the route section has to lead with shipping mode before it gets to filing. Writer must verify and cite the current dangerous goods handling rules for alcohol-based cosmetics in cross-border ecommerce, whether bonded warehouses in the main pilot zones accept them and under what conditions, and the current filing path for fragrance as a cosmetic. Block 4 should show cost per order at both sea-freight-to-bonded and direct mail, since for this category the gap between the two decides the business.

**Proof.** None available. Use the block 6 honesty line.

---

## W36 · TUE · ANCHOR + REPORT

**Title:** What it costs foreign brands to launch in China: 2027 benchmark
**Query:** china market entry cost benchmark · **Difficulty:** OPEN
**Word count:** 2,200 to 2,400 for the article, plus the gated report

**The answer, in one line.** Across the entry models a foreign brand can realistically choose, year one lands in four distinct cost bands, and the spread between the cheapest and the most expensive is wider than the spread between categories, which means the entry model you pick matters more to your budget than what you sell.

**The table it must carry.** The benchmark grid. Four columns, one per entry model: cross-border marketplace only, cross-border plus distributor, general trade plus distributor, local entity with own store. Rows: entity and legal setup, trademark registration, product compliance and testing, platform deposits and annual fees, initial inventory and inbound logistics, warehousing, staffing or agency retainer, launch marketing, working capital held, year one total band. Every cell is a range in USD with a stated basis. Below it, a second table showing the same four models against three brand sizes by intended year one GMV, with the recommended model marked for each.

**The proprietary number.** This piece is built on it. Aggregated calculator runs across TheChinaPath's tools over a stated window: number of runs, median modelled year one cost, the interquartile range, and the breakdown by cost line. State the run count, the date window, and what the runs are not, namely actual outcomes. The gated report carries the full distribution, the category cuts and the methodology.

**Outline.**
1. What the benchmark measures, and what it does not
2. The four entry models, defined so a reader can place themselves
3. Where the money goes: the cost lines that dominate each model
4. The spread: why two brands in the same category budget differently by a factor of several
5. The lines brands underestimate most, ranked
6. What year one buys you in each model, in revenue terms
7. How to use this against your own board deck

**Internal links.** /enter-china/market-entry-consulting, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /insights
**CTA.** Get the full 2027 benchmark report, with the distribution, the category cuts and the methodology.
**Do not.** Do not present modelled costs as observed outcomes anywhere in the piece; the credibility of the whole asset depends on that distinction being stated in the first three hundred words. Do not include any pricing for TheChinaPath's own services in the cost tables; agency cost appears as a market band with a stated source basis.

---

## W36 · WED · LEDGER A

**Title:** What it costs to sell sun care in China
**Word count:** 1,100 to 1,400

Block 3 carries this one, and it is the single most expensive block on any beauty ledger. Sunscreen is treated more heavily than ordinary skincare, which means a registration path rather than a simple filing, an SPF and PA test result that a Chinese authority will accept, and a lead time long enough to miss an entire selling season if the clock starts in spring. Writer must verify and cite the current classification of sunscreen under the special cosmetics regime, what efficacy testing is required and whether an overseas test report is accepted, and the realistic approval timeline, then build block 4 around the fact that this compliance cost is fixed per SKU and must be amortised across a small hero range. Block 5 verdict: launch one or two SPF SKUs, not a range, and start the clock a full season ahead.

**Proof.** None available. Use the block 6 honesty line.

---

## W37 · TUE · ANCHOR

**Title:** 618: the last three weeks
**Query:** 618 last minute strategy · **Difficulty:** SEASONAL
**Word count:** 1,900 to 2,300

**The answer, in one line.** In the last three weeks before 618 almost every strategic lever is already locked, so the work that still moves the number is narrow and operational: stock allocation between warehouses, the traffic mix you buy in the pre-sale window, livestream slot execution, and having enough customer service capacity to stop conversion leaking on the two peak nights.

**The table it must carry.** One time-window grid, five rows, five columns. Columns: Window, What you can still change, What is already locked, The one metric to watch in this window, The failure mode. Rows: (1) T-21 to T-15, (2) T-14 to T-8, (3) T-7 to T-1, (4) the sale windows themselves, (5) T+1 to T+14. The "already locked" column is the point of the table and must be specific: named registrations, price commitments and inbound cut-offs, not generalities. Writer to confirm current-year platform pre-sale and deposit mechanics against a cited source and to note that mechanics change annually.

**The proprietary number.** From the stores TheChinaPath runs: the share of full-festival GMV that landed in the pre-sale and first sale window versus the closing window across the portfolio, and the median change in cost per order between the pre-sale window and peak night. State the store count.

**Outline.**
1. What is already decided, and why arguing about it now costs you money
2. T-21 to T-15: stock allocation and the SKU list you actually push
3. T-14 to T-8: traffic mix, pre-sale, and the budget you hold back
4. T-7 to T-1: livestream execution, customer service staffing and the pre-flight checklist
5. On the night: the four numbers, and the two levers you still hold
6. The first fourteen days after: returns, reconciliation, and what the data is worth
7. The three things to fix now for next year, while it still hurts

**Internal links.** /grow-in-china/campaigns, /grow-in-china/cross-border-ecommerce, /tools/douyin-cost-calculator, /grow-in-china/media, /work
**CTA.** Run your peak-night cost per order against the Douyin cost calculator before you commit the closing budget.
**Do not.** Do not repeat the 100-day plan; link back to it and stay inside the three-week window. Do not promise recovery moves that require a platform registration that has already closed.
**Territory guard.** Livestream host booking and creator activation appear as execution dependencies with owners and deadlines. Creator relationships and content production hand off to TheRedScroll. One line, in section four.

---

## W37 · WED · LEDGER A

**Title:** What it costs to sell hair care in China
**Word count:** 1,100 to 1,400

Blocks 3 and 4 split this one. Hair care looks like a single category but splits on claims: a plain shampoo and an anti-dandruff or anti-hair-loss product may sit under different regulatory paths, and the claim that makes the product sellable is exactly the claim that makes it expensive to file. Writer must verify and cite where anti-dandruff and hair-loss claims currently fall between general cosmetics filing and special cosmetics registration, what substantiation is required, and whether cross-border changes it. The second problem is weight: shampoo and conditioner ship heavy against a modest order value, so block 4 must model chargeable weight per order and show the bundle size that makes the maths work, the same physics problem as the personal care ledger. Block 5 should recommend leading with the treatment SKU, not the wash SKU.

**Proof.** None available. Use the block 6 honesty line.

---

## W38 · TUE · ANCHOR + ASSET

**Title:** Twelve questions to ask before signing a China distributor
**Query:** questions to ask china distributor · **Difficulty:** OPEN
**Word count:** 2,000 to 2,400

**The answer, in one line.** Most distributor relationships fail on four things that a brand can test in a single meeting: who actually owns the end customer, what the real geographic footprint is versus the claimed one, how price is controlled downstream, and what happens to your stock and your data when the contract ends.

**The table it must carry.** The three-column sheet, twelve rows. Columns: The question, What a good answer sounds like, The red flag. The twelve questions must cover: sub-distributor structure and how many layers sit below them, province-by-province coverage with named accounts, which retailers they hold direct relationships with, existing brands in your category and any conflict, who sets retail price and how it is enforced, minimum order and payment terms, who holds the import licence and registration records, marketing budget commitments and who controls the spend, sell-through reporting cadence and format, ownership of customer data and CRM, ecommerce rights and whether they will open marketplace stores under your brand, and termination terms including stock buyback and trademark reassignment. The good-answer and red-flag cells must be quotable sentences, not descriptions.

**The proprietary number.** From the Compass distributor database: the share of distributors who claim national coverage against the share whose verifiable records support a footprint beyond a single region, plus the median number of brands per distributor in the database. State the database size and the date of the cut.

**Outline.**
1. The four failure modes behind every dead distributor relationship
2. Coverage: how to test a national claim in one conversation
3. Price: who sets it, who enforces it, and what happens when they discount
4. Licences and records: what they hold in their name that you will want back
5. Data and the end customer: the question most brands never ask
6. Ecommerce rights: the clause that costs brands their own Tmall store
7. Termination: stock, trademarks, and the exit you write on day one
8. The twelve questions, in order, with the answers to walk away from

**Internal links.** /compass, /compass/find-a-distributor-in-china, /compass/shortlist, /enter-china/distribution, /enter-china/market-entry-consulting
**CTA.** Download the twelve-question sheet, then build a shortlist in Compass filtered by the coverage you actually need.
**Do not.** Do not write generic partner-selection advice that would apply in any market. Every question must be China-specific, and the ecommerce rights and licence-holding questions carry the piece. Do not name or characterise real distributors.

---

## W38 · WED · LEDGER B

**Title:** How professional services and consulting reach clients in China
**Word count:** 1,100 to 1,400

This is a Ledger B, so the channel table replaces the fee table and does the heaviest lifting: one row each for WeChat official account and long-form articles, RedNote, industry trade shows and conferences, direct outbound through introductions, trade association and chamber membership, and paid search, with what each reaches, monthly cost to run, cost per qualified lead, and who owns the relationship when the engagement ends. The licensing constraint in block 3 is the real trap: a foreign company cannot invoice a Chinese client without a local entity or a compliant arrangement, so the writer must verify the current position on business scope, fapiao issuance and cross-border payment for services, and cite it, because a signed contract the client cannot expense is a dead deal. Block 4 replaces unit economics with cost per qualified lead and sales cycle length, and should be honest that a China services sale is measured in quarters and that the relationship, not the channel, closes it.
**Territory guard.** Baidu SEO, website build and hosting sit with ChinaWebFoundry and daily content and community sit with TheRedScroll, so those rows in the channel table name the cost and link out rather than describing the work as a service offered here.

**Proof.** None available. Use the block 6 honesty line.

---

## W39 · TUE · ANCHOR

**Title:** Tmall Global or Tmall Classic: when to move onshore
**Query:** tmall global vs tmall classic · **Difficulty:** HELD
**Word count:** 2,100 to 2,400

**The answer, in one line.** The move from Tmall Global to Tmall Classic is a margin and compliance decision, not a growth one: you go onshore when your product compliance is already paid for, when your repeat rate justifies holding local inventory, and when the price gap between the two channels is costing you more than the registration would.

**The table it must carry.** One decision grid, nine rows, five columns. Columns: The trigger, How to measure it on your own store, What it means if you stay on Global, What it means if you move to Classic, Verdict. Rows: annual GMV on Global, repeat purchase rate, delivered price gap between the two channels, product registration and filing status, whether you hold or can access a Chinese entity and the required licences, working capital and inventory holding, access to platform marketing tools and campaign slots, consumer trust and returns handling expectations, offline and distributor ambitions. Below it, a cost comparison table: deposit, annual fee, commission, inventory model, tax treatment and fulfilment cost per order, side by side. Writer must verify and cite current fee structures and entity or licence requirements for Tmall Classic against a source, with the date checked.

**The proprietary number.** From the stores TheChinaPath runs and from calculator runs: the median annual GMV at which the modelled cost per order on Classic drops below Global for the same product, plus, from the portfolio, how many stores have made the move and what happened to their repeat rate. State both sample sizes.

**Outline.**
1. What actually changes when you go onshore
2. The nine triggers, and how to measure each on your own store
3. The compliance bill: what you must have registered before Classic is even possible
4. The margin maths: cost per order on both channels at three volume levels
5. Running both at once: the split that works and the split that cannibalises
6. What breaks in the first ninety days after the move
7. The order of operations, if the answer is yes

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /enter-china/cross-border-setup, /enter-china/market-entry-consulting, /enter-china/distribution
**CTA.** Model cost per order on both channels with the Tmall Global setup and run calculator.
**Do not.** Do not frame Classic as the mature, serious option and Global as a starter channel. The incumbent holding both top positions writes it that way and it is wrong for most categories. Do not state any Tmall Classic entity or licence requirement without a citation and a date checked.

---

## W39 · WED · LEDGER A

**Title:** What it costs to sell pet accessories and hardware in China
**Word count:** 1,100 to 1,400

Blocks 4 and 2 carry this one, because unlike pet food there is no facility registration wall, which makes this a pure competition and unit economics story against a very strong domestic manufacturing base selling the same physical object at a fraction of the price. The one regulatory trap is electrical: automatic feeders, cameras, fountains and heated beds may need CCC certification, and the writer must verify and cite which product types currently require it, what the certification costs and takes in time, and whether the cross-border channel changes the obligation. Block 4 should model a bulky, low-margin item honestly and show the order value below which a foreign brand cannot compete on this shelf at all, and block 5 should say which subcategories are worth entering and which are already lost to domestic sellers.

**Proof.** None available. Use the block 6 honesty line.

---

## W40 · TUE · ANCHOR

**Title:** Running 618: an operator's log
**Query:** 618 how it works brands · **Difficulty:** OPEN
**Word count:** 2,200 to 2,400

**The answer, in one line.** 618 is not a sale, it is a scheduled traffic event with a presale window, two hard opening bells and a cash-flow tail, and the brands that win it are the ones who finished pricing, inventory allocation and platform paperwork before the presale page went live in late May.

**The table it must carry.** A single hour-by-hour operator log, roughly 22 to 28 rows, running from the presale page going live through midnight on June 18. Columns: China time (date plus hour), what the platform did, what the team did in that hour, minutes elapsed from decision to live change, and consequence stated as a number or a plain "no effect." Rows must include at least: presale page live, presale deposit open, first deposit-to-balance conversion check, the June 1 opening bell, the first hour restock decision, a coupon stack that broke and how long it took to unbreak, a livestream slot handover, the mid-window lull on June 8 to 10, the June 15 replenishment cutoff, the final bell, and the first refund wave. Every row must be an hour that actually contained a decision. No filler rows.

**The proprietary number.** The share of total 618 window GMV that landed inside the first four hours after the June 1 opening bell, averaged across the cross-border stores TheChinaPath ran through 618 2027. Give the split for the June 1 bell versus the June 18 bell. State the number of stores in the sample and the platforms they sat on. Second number if available: median minutes from a pricing decision to that price being live on the storefront, same sample.

**Outline.**
1. What 618 actually is, and why the June 18 date is the least important date in it
2. The presale window: what has to be finished before the page goes live
3. Opening bell, hour by hour: the log
4. The mid-window lull nobody budgets for
5. The second bell and the replenishment cutoff
6. The tail: refunds, reviews, and what the store looks like on June 25
7. What we would do differently in 2028

**Internal links.** /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/campaigns, /tools/douyin-cost-calculator, /work
**CTA.** Run your own 618 window in the Tmall Global setup and run calculator.
**Do not.** Do not turn the log into a 618 explainer with a history of Jingdong; the format is the value and the first paragraph must already be inside an operating hour. Do not name or make identifiable any brand whose store is in the log, including by category plus country of origin.
**Territory guard.** The livestream host handover and any KOL slot appear in the log only as an operating cost and a schedule dependency. Anything about selecting hosts, briefing creators or seeding content links out to TheRedScroll and is not explained here.

---

## W40 · WED · LEDGER A

**Title:** What it costs to sell health supplements in China
**Word count:** 1,100 to 1,400

Block 3 carries this entire page. Supplements are the category where the route decision, cross-border versus general trade, decides whether the brand ships this quarter or in eighteen months, because a general trade route pulls in the Blue Hat health food registration or filing regime while the cross-border route does not. Instruct the writer to verify and cite, from a primary Chinese regulatory source or an official platform policy page, the current status of health food registration versus filing, which product types fall into which track, indicative timelines for each, and whether the specific ingredient categories in scope sit on the cross-border positive list. Block 4 is the second load-bearing block: supplements carry a high enough unit value that cross-border freight per order does not decide the model, so breakeven turns on repeat purchase rate rather than on logistics, and the writer should say so explicitly.

**Proof.** None available. Use the block 6 honesty line.

**Link back.** The W29 anchor on selling supplements in China without a Blue Hat is the sibling page. Link to it from block 3 with descriptive anchor text, and add a reciprocal link from that anchor to this ledger.

---

## W41 · TUE · ANCHOR

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
**Link forward.** The W08 Ledger on what it costs to sell baby care and hygiene products in China ships first. Link to it from section 2 with descriptive anchor text, and add the reciprocal link from that Ledger back to this page.

---

## W41 · WED · LEDGER A

**Title:** What it costs to sell sports nutrition in China
**Word count:** 1,100 to 1,400

Blocks 3 and 4 split the weight here. Sports nutrition is the category where the ingredient, not the product, decides the route: dairy-derived protein and animal-origin ingredients pull the shipment into a different regime from a plant protein or an amino acid powder, and the writer must verify and cite the current requirements for overseas manufacturer or facility registration for food exporters to China, which ingredient classes trigger it, and whether the products in scope appear on the cross-border positive list. Block 4 is the second trap and the one competitors skip: a two kilogram tub is a freight problem, so cost per order on a cross-border route can eat a fifth of the order value, and the ledger must show that number rather than describe it. Note in block 5 that this is one of the few categories where bulk weight, not regulation, is what flips the verdict toward general trade.

**Proof.** None available. Use the block 6 honesty line.

---

## W42 · TUE · ANCHOR + REPORT

**Title:** 618 2027 from inside the stores we run
**Query:** 618 2027 results brands · **Difficulty:** OPEN
**Word count:** 1,900 to 2,200 for the public page, plus the gated report

**The answer, in one line.** Published 618 totals tell you what China spent; this tells you what a foreign brand's store actually did during the window, by category, from stores under management, and the headline is the gap between platform-wide growth and what an individual cross-border store experienced.

**The table it must carry.** A category performance table on the public page, one row per category with at least five stores behind it so no single store can be reverse-engineered, categories collapsed into a residual "other" row where the count falls short. Columns: number of stores in the row, window GMV indexed to the same store's 618 2026 result (2026 equals 100), share of window GMV taken in the first four hours, average order value change year on year in percent, refund rate across the window, and paid traffic cost per order change year on year in percent. Absolute currency figures for individual stores never appear. The gated report carries the same table at finer granularity plus the daily curve.

**The proprietary number.** The entire piece is the proprietary number. The single lead figure: median 618 2027 window GMV indexed against the same stores' 618 2026 window, stated with the store count, the platform mix and the categories included. Second figure: the spread between the best and worst decile, which is the line trade press will lift.

**Outline.**
1. What this is, how the sample was built, and what it cannot tell you
2. The headline: what same-store 618 did year on year
3. Category by category
4. Where the money actually landed inside the window
5. What went up in cost: traffic, coupon depth, refunds
6. What we think this means for Double 11 2027
7. Method and limits

**Internal links.** /insights, /grow-in-china/cross-border-ecommerce, /tools/tmall-global-setup-and-run, /grow-in-china/campaigns, /work
**CTA.** Download the full 618 2027 store-level report.
**Do not.** Do not publish any figure before the anonymisation and client clearance pass is signed off; a row with fewer than five stores, a category with a single dominant brand, or any combination of country of origin plus category that identifies a client does not ship. Do not compare against platform-published totals as if the samples were equivalent; state the method difference plainly and cite any third-party total you reference.

---

## W42 · WED · LEDGER A

**Title:** What it costs to sell wine in China
**Word count:** 1,100 to 1,400

Block 4 carries this one, with block 3 close behind. Wine is the category where landed cost, not platform fees, decides the business: duty, consumption tax and value added tax stack on top of freight for a heavy, breakable, low-margin unit, so the writer must build the unit economics on a stated bottle price and show the cost per order on both routes rather than quoting a fee percentage. Instruct the writer to verify and cite current import duty, consumption tax and VAT treatment for imported wine, the Chinese back-label requirements, and whether the applicable rate differs by origin under any trade agreement in force. Block 5 should be blunt: wine is one of the categories where an importer or distributor holding the licence is usually the first channel and the brand's own store comes second, which is the opposite of the ledger's default verdict.

**Proof.** None available. Use the block 6 honesty line.

**Link back.** Pairs with the W32 wine and spirits anchor. Link from block 5, and add the reciprocal link.

---

## W43 · TUE · ANCHOR

**Title:** How to sell luxury and premium goods in China now
**Query:** luxury brand china strategy · **Difficulty:** HELD (GMA holds positions 1 and 2)
**Word count:** 2,200 to 2,400

**The answer, in one line.** Luxury in China stopped being a distribution question and became a price-integrity question: the brands losing money are not the ones with the wrong platform, they are the ones whose daigou, grey channel and discount marketplace prices sit below their own storefront, and the first job is closing that gap before opening anything.

**The table it must carry.** A channel control table, 7 to 9 rows, one per route to a Chinese consumer: brand-owned Tmall Luxury Pavilion or Tmall Global flagship, JD's premium channel, WeChat mini program store, RedNote storefront, Douyin store, authorised offline retail, third-party discount marketplace, grey and daigou. Columns: who controls the retail price, who controls the customer data, typical commission or margin given away, how fast a price change propagates, and what enforcement or takedown tool exists for that channel. The last column is where the page beats GMA, because it is the only one written from an operator's seat.

**The proprietary number.** From the stores under management: the average retail price spread observed between a brand's own Chinese storefront and the lowest price for the same SKU found on third-party Chinese marketplaces during a monitoring pass, stated as a percentage band with the number of brands and SKUs monitored and the monitoring period. If the calculators support it, add the observed commission band for premium categories on the platforms covered, with the basis stated.

**Outline.**
1. What changed for premium brands in China, in operating terms rather than sentiment
2. The channel control table
3. Price integrity: finding the gap before you open a store
4. Which storefront a premium brand opens first, and why the answer changed
5. Duty, tax and the cross-border ceiling on a high-ticket unit
6. Service, packaging and returns as a cost line, not a brand promise
7. What a first year looks like at premium price points

**Internal links.** /enter-china/branding-localisation, /grow-in-china/cross-border-ecommerce, /enter-china/distribution, /tools/tmall-global-setup-and-run, /compass
**CTA.** Estimate the first-year cost of a premium flagship in the Tmall Global calculator.
**Do not.** Do not write about Chinese luxury consumer psychology; that is the incumbent page and it converts nothing. Do not assert current cross-border personal transaction limits or duty treatment for high-value items from memory; verify against a primary source and cite it with an access date.
**Territory guard.** RedNote and Douyin appear here only as storefronts with a transaction attached. Creator seeding, community building and daily content for luxury accounts belong to TheRedScroll and get a single outbound link, not a section.

---

## W43 · WED · LEDGER A

**Title:** What it costs to sell spirits in China
**Word count:** 1,100 to 1,400

Block 3 and block 5 carry this. Spirits differ from wine on two axes that change the whole page: the tax treatment on distilled alcohol, which the writer must verify and cite alongside the labelling requirements and any importer licensing condition, and the platform side, where alcohol carries advertising, livestream and promotion restrictions that limit the tactics a brand can actually run once the store is open. Instruct the writer to verify and cite each platform's current published policy on alcohol listings and alcohol promotion rather than describing it from general knowledge. Block 4 should show cost per order on a 700ml bottle at a stated price point, because the freight and breakage line is what makes small-basket spirits sales unworkable and pushes brands toward multi-bottle sets.

**Proof.** None available. Use the block 6 honesty line.

---

## W44 · TUE · ANCHOR

**Title:** How to sell B2B and industrial products in China
**Query:** b2b marketing china industrial · **Difficulty:** MEDIUM (Alibaba's own content, SIS International and Daxue rank; no operator page exists)
**Word count:** 2,200 to 2,400

**The answer, in one line.** A foreign industrial supplier does not need a China marketing funnel, it needs three things in sequence: a WeChat presence a Chinese engineer can actually find and forward, a technically credible Chinese-language spec library, and either a local sales entity or a distributor who owns the customer relationship, and the whole budget question is which of those three you pay for first.

**The table it must carry.** A B2B channel table, 6 to 8 rows: WeChat official account plus mini program, industry vertical portals and trade media, Chinese-language technical site and search visibility, trade shows and exhibitions, 1688 and Alibaba's domestic B2B surfaces, distributor or agent network, direct sales hire in China, LinkedIn equivalent professional channels. Columns: who it actually reaches (job title, not "decision makers"), what it costs per month to run at a working level stated as an observed market band with the basis named, realistic cost per qualified lead, sales cycle length in months, and who owns the customer relationship at the end. Note explicitly which rows produce leads and which only produce credibility that other rows convert.

**The proprietary number.** From the Compass vetted-distributor database: the share of vetted partners in the industrial and components segment that hold their own technical sales team versus those that are trading intermediaries, and the median number of end customers those partners claim in the target province set. State the record count and how the vetting distinguishes the two. Add the observed spread in exclusivity demands, since exclusivity is the negotiation that decides this category.

**Outline.**
1. Why the consumer China playbook produces zero industrial leads
2. Who is actually buying: the specification, procurement and plant-engineer triangle
3. The channel table
4. The trade show question, answered with a cost per qualified lead
5. Distributor, agent or your own entity: the three structures and what each costs to keep alive
6. What a foreign supplier can and cannot do without a China legal entity
7. A twelve-month build for an industrial brand with no China presence

**Internal links.** /compass, /enter-china/distribution, /enter-china/market-entry-consulting, /compass/find-a-distributor-in-china, /work
**CTA.** Request a Compass shortlist of vetted industrial distributors.
**Do not.** Do not import consumer marketplace logic; a page that recommends Tmall to a valve manufacturer is a failed page. Do not assert what a foreign company may do without a China entity, including invoicing, hiring and contracting; frame every one of those as a point the writer verifies with a named source and cites.
**Territory guard.** Baidu visibility and the Chinese-language website build are named as dependencies and handed to ChinaWebFoundry with one link each. This page does not explain Baidu SEO, ICP filing or hosting.

---

## W44 · WED · LEDGER A

**Title:** What it costs to sell beer and ready-to-drink in China
**Word count:** 1,100 to 1,400

Block 4 kills this category and the ledger should say so in the first sixty words. Beer and RTD combine low unit value, high weight, glass or can packaging and short shelf life, which is the one combination cross-border ecommerce cannot carry: cost per order exceeds a meaningful share of order value unless the basket is a case, and the breakeven GMV calculation should be run at case level to show it. Block 3 still needs work, so instruct the writer to verify and cite the labelling requirements for imported beer and pre-mixed alcoholic drinks, shelf-life declaration rules, and the platform policies on alcohol promotion. Block 5 verdict should land on general trade through an importer with cold chain and city coverage, with the flipping condition stated as a specific price point and basket size.

**Proof.** None available. Use the block 6 honesty line.

---

## W45 · TUE · ANCHOR + ASSET

**Title:** What China market entry costs before you take a single order
**Query:** china market entry cost · **Difficulty:** WEAK (Sekkei and Shanghai Jungle rank, neither with numbers)
**Word count:** 2,200 to 2,400, plus the new calculator

**The answer, in one line.** Before a single Chinese consumer pays you anything, a foreign brand spends on five things in a fixed sequence, trademark, entity or lack of one, product compliance, store setup and localised assets, and the total sits in a wide band that depends almost entirely on one decision, cross-border or general trade, which is why every competitor page refuses to publish a number and this one does.

**The table it must carry.** A pre-revenue cost table, one row per cost line, at least 12 rows, grouped in five phases. Rows must include at minimum: trademark filing across the relevant classes, trademark watch, company registration or the decision to skip it, product testing, product registration or filing, Chinese label design and compliance check, packaging artwork rework, translation and transcreation of the product catalogue, platform deposit, platform annual fee, store design and build, first inventory into a bonded warehouse or to the border, logistics setup, and payment and settlement setup. Columns: cost line, cross-border route (band), general trade route (band), when it falls in the sequence, and whether it is refundable. Every band must state its basis, whether it comes from a TheChinaPath calculator, an observed market band with the sample described, or a published third-party figure that carries a citation.

**The proprietary number.** Aggregated from the three cost calculators plus the new combined pre-revenue tool: the median total pre-revenue outlay for a cross-border single-store launch versus a general trade launch, taken from calculator runs completed over a stated period. Give the run count, the date range and the category mix, and state clearly that these are user-entered scenarios, not invoiced projects.

**Outline.**
1. The one decision that moves the number more than everything else combined
2. Phase one: trademark, and why it is first
3. Phase two: entity, or the deliberate choice not to have one
4. Phase three: compliance, testing and the label
5. Phase four: the store, the assets and the deposit
6. Phase five: first inventory and the working capital nobody counts as entry cost
7. The full table, and how to run your own version

**Internal links.** /enter-china/market-entry-consulting, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /tools/douyin-cost-calculator
**CTA.** Run your own pre-revenue cost estimate in the combined market entry calculator.
**Do not.** Do not publish a single headline number without the band and the basis attached; a number without a basis is what makes the competitor pages worthless and it is also what an AI assistant will misquote. Do not state any government fee, filing fee or tax figure without a cited primary source and an access date.

---

## W45 · WED · LEDGER A

**Title:** What it costs to sell tea and beverages in China
**Word count:** 1,100 to 1,400

Block 3 carries this, and the trap is that foreign brands assume tea is culturally impossible and therefore skip the compliance question entirely, when the actual barrier is food-category paperwork. Instruct the writer to verify and cite whether the specific product form, loose leaf, tea bag, instant powder, ready to drink, is on the cross-border positive list, the shelf-life and production-date declaration rules for imported food, and whether any product with added functional ingredients crosses out of ordinary food into a registration regime. Block 4 is the second half of the page: low unit value plus low weight makes tea a viable cross-border product where beer is not, so run the breakeven at a multi-pack basket and show the repeat purchase assumption openly, since it is the whole model.

**Proof.** None available. Use the block 6 honesty line.

---

## W46 · TUE · ANCHOR

**Title:** Trademark first: the China IP sequence nobody follows
**Query:** china trademark registration brand · **Difficulty:** MEDIUM (law firms own the query)
**Word count:** 2,000 to 2,300

**The answer, in one line.** China grants trademarks to whoever files first, not to whoever used the name first, so the correct sequence is file before you email a distributor, file before you show at a trade fair, and file before you register a platform store, and the cost of getting that order wrong is measured in years of blocked market access, not in filing fees.

**The table it must carry.** A sequence and consequence table, 9 to 12 rows, one per step in the entry sequence in chronological order: trademark filing in the core classes, defensive class filings, Chinese-language name filing, filing the Chinese name you did not choose but consumers already use, copyright registration of logo artwork, customs recordal, platform brand registration, distributor appointment, trade fair appearance, store opening, first shipment. Columns: the step, what it protects, what it costs to do at this point in the sequence stated with the basis, what it costs to fix if done after the step below it, and typical elapsed time. The fourth column is the page: a specific "cost of doing it late" for each row, with any figure sourced.

**The proprietary number.** From the Compass vetted-distributor database and the stores under management: the share of foreign brands arriving at TheChinaPath with no Chinese-character trademark filed, and the share arriving with a squatted mark already registered in one or more of their core classes. State the sample, the period, and the category spread. Add the median delay in weeks that a missing platform brand registration added to store opening across stores under management.

**Outline.**
1. First to file, in one paragraph, and what it means for a brand that has sold nowhere in China
2. The sequence, and the four steps almost everyone does out of order
3. Your Chinese name, and the one consumers gave you already
4. What squatting actually looks like when it happens to you
5. The sequence and consequence table
6. Customs recordal and platform brand registration: the two steps that only matter later, until they matter urgently
7. What to file this month if you are entering China next year

**Internal links.** /enter-china/market-entry-consulting, /enter-china/branding-localisation, /enter-china/distribution, /compass/find-a-distributor-in-china, /insights
**CTA.** Talk to us about your entry sequence before the first distributor conversation.
**Do not.** Do not write legal advice or state the outcome of an opposition or invalidation process; every procedural claim, class structure, filing fee, examination timeline and appeal route is a verify-and-cite instruction to the writer, sourced to the Chinese trademark authority or an equivalent primary source, with an access date. Do not compete with the law firms on procedural depth; the sequencing and the cost of lateness is the ground where this page wins.

---

## W46 · WED · LEDGER A

**Title:** What it costs to sell auto parts and accessories in China
**Word count:** 1,100 to 1,400

Block 3 carries this, and the trap is the split inside the category: a cabin air filter, a brake pad and a phone mount face completely different requirements, because safety-relevant components pull in compulsory certification while accessories generally do not. Instruct the writer to verify and cite which auto part categories fall inside the China Compulsory Certification catalogue, what the certification process involves in time and cost, and whether the cross-border route changes that answer for parts sold to a consumer rather than imported for assembly. Block 2 matters more here than in most categories because the platform picture is unusual: name in block 5 that this is a category where JD's logistics and installation network and the domestic vertical platforms carry weight that Tmall does not, and state the condition that flips it.

**Proof.** None available. Use the block 6 honesty line.

---

## W47 · TUE · ANCHOR + ASSET

**Title:** The twelve-month China launch timeline
**Query:** china launch timeline brands · **Difficulty:** OPEN
**Word count:** 2,200 to 2,400, plus the Gantt asset

**The answer, in one line.** A cross-border China launch takes nine to twelve months from decision to first order for most consumer categories, and the timeline is set by four things that cannot be run in parallel, trademark, product compliance, platform account approval and inventory into a bonded warehouse, so the only real acceleration available is starting the trademark earlier.

**The table it must carry.** A dependency table sitting behind the Gantt, one row per workstream, 14 to 18 rows. Columns: workstream, earliest start month, typical duration in weeks, what must be finished before it can start (name the specific predecessor, not "planning"), what it blocks downstream, who owns it (brand, agency, distributor, third party lab, platform), and whether the duration is under your control or the counterparty's. The critical path must be visually and textually marked. The Gantt asset renders the same data with the dependency arrows drawn, months on the horizontal axis, and a shaded band showing where the Chinese New Year shutdown lands.

**The proprietary number.** From the stores under management: median elapsed weeks from engagement start to first order, split by route (cross-border versus general trade) and by whether the brand arrived with a Chinese trademark already registered. State the number of launches in the sample and the period covered. That trademark split is the number the whole piece hangs on.

**Outline.**
1. Why launches slip, and the four blockers that cause most of it
2. Months one to three: trademark, route decision, category compliance scoping
3. Months three to six: testing, registration, label and artwork
4. Months five to nine: platform application, store build, localisation
5. Months eight to twelve: inventory, logistics, soft open and the first festival
6. The dependency table and the critical path
7. What actually compresses a timeline, and what only looks like it does

**Internal links.** /enter-china/market-entry-consulting, /enter-china/cross-border-setup, /tools/tmall-global-setup-and-run, /enter-china/distribution, /grow-in-china/cross-border-ecommerce
**CTA.** Download the twelve-month launch Gantt with dependencies.
**Do not.** Do not present the timeline as universal; state the category assumption in the opening and mark the rows where a regulated category doubles a duration. Do not assert platform approval times or regulatory review periods from experience alone; where the timeline depends on an official processing period, instruct the writer to cite the published figure and separately label what the stores under management actually observed.

---

## W47 · WED · LEDGER A

**Title:** What it costs to sell bath and sanitaryware in China
**Word count:** 1,100 to 1,400

Block 4 decides this category and block 3 supplies the trap. A basin, a shower system or a smart toilet seat is heavy, bulky and often installed rather than unboxed, so cross-border freight per order and the absence of an installation network make the marketplace route structurally weak, and the unit economics block must show cost per order on a stated product weight and dimension rather than as a percentage. On block 3, instruct the writer to verify and cite whether the products in scope fall under compulsory certification or under water-efficiency labelling requirements for sanitary products sold in China, and what documentation an importer must hold. Block 5 should say plainly that this is a distributor and project-channel category first, with the brand's own store serving as a showroom and a price reference, and name the condition that flips it toward direct.

**Proof.** None available. Use the block 6 honesty line.

---

## W48 · TUE · ANCHOR

**Title:** The RedNote year: what changed and what it does to budgets
**Query:** xiaohongshu trends 2027 brands · **Difficulty:** MEDIUM
**Word count:** 2,000 to 2,300

**The answer, in one line.** The substance of the RedNote year is not new features, it is that the cost of the same result moved, and a brand budgeting off last year's numbers will underfund the channel by a measurable margin, which this piece states as a percentage with the basis attached.

**The table it must carry.** A year-on-year cost movement table, 8 to 10 rows, one per budget line a brand actually books: platform storefront commission and settlement, paid traffic on the platform's ad products by objective, cost per thousand impressions, cost per click, cost per order acquired through paid, storefront operations headcount or agency retainer as an observed market band, livestream slot cost band, and the blended cost per order for a storefront running both organic and paid. Columns: budget line, this year's figure, last year's figure, change in percent, and the basis for each figure, whether calculator data, stores under management, or a cited third-party source. Any row without a defensible basis gets cut rather than estimated.

**The proprietary number.** From the stores under management and the Douyin and RedNote calculator runs: blended cost per order acquired on RedNote year on year, stated as a percentage change with the store count, category mix and period. Second figure: the change in the paid share of storefront GMV across the same stores, which is the line that tells a marketer their organic reach assumption expired.

**Outline.**
1. What actually changed on RedNote this year, filtered to changes with a budget consequence
2. The storefront: commission, settlement and what selling on platform now costs
3. Paid traffic: the year-on-year cost movement table
4. What a working monthly RedNote budget looks like now, by brand size
5. The three things that got cheaper
6. What to move money away from, and where to move it
7. How to rebuild next year's number from your own data

**Internal links.** /grow-in-china/social-commerce, /grow-in-china/media, /tools/douyin-cost-calculator, /grow-in-china/campaigns, /social-in-china
**CTA.** Estimate your platform storefront costs in the Douyin cost calculator.
**Do not.** Do not write a trends listicle; every section must end in a number that changes a budget line. Do not assert platform commission rates, ad product pricing models or policy changes from memory; each is verified against the platform's own published policy or a cited source, with the access date shown.
**Territory guard.** Creator seeding, KOC programmes, note production and community management are named as budget lines in the table only. The how of running them belongs to TheRedScroll, which gets one outbound link. This page covers the storefront and the paid media that ends in a transaction.

---

## W48 · WED · LEDGER B

**Title:** What it costs to sell education and training services in China
**Word count:** 1,100 to 1,400

This is a Ledger B: there is no marketplace route, and the licensing constraint is the whole page. Instruct the writer to verify and cite what a foreign company may and may not do in education and training services in China, which activities require a local licence, whether the constraint differs for corporate and professional training versus consumer-facing tutoring and academic services, and whether any of it can be delivered from outside China to Chinese customers without a local entity. That verification decides whether the channel table is even relevant, so it goes above the table, not after it. The channel table then runs WeChat official account, professional community and industry association channels, RedNote, Douyin, partnership with a licensed local training provider, and offline events, each with what it reaches, monthly cost to run as an observed market band with the basis named, cost per qualified lead, and who owns the relationship. Block 4 becomes cost per qualified lead plus sales cycle length, which in this category is long enough that the ledger should state it in months and name what stalls it.

**Proof.** None available. Use the block 6 honesty line.

**Block 7.** Link to /compass and /enter-china/market-entry-consulting rather than a calculator.

---

## W49 · TUE · ANCHOR

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

---

## W49 · WED · LEDGER A

**Title:** What it costs to sell maternity products in China
**Word count:** 1,100 to 1,400

Blocks 2 and 3 share the load, and the trap is that maternity sits at the boundary of three regimes at once: some products are ordinary consumer goods, some are cosmetics under NMPA rules once they touch skin, and some are close enough to medical devices that the classification has to be checked rather than assumed. Instruct the writer to verify and cite the classification treatment for the specific product forms in scope, whether cosmetic registration or filing applies to maternity skincare, and the cross-border positive list status of each form. Block 2 earns its place here because the platform fee table for maternity differs meaningfully from the general apparel and personal care rates a brand would otherwise assume, so the writer must pull the category-specific figures rather than the platform's headline rate.

**Proof.** None available. Use the block 6 honesty line.

**Link back.** Pairs with the W41 anchor on maternity and baby products. Link from block 1 and add the reciprocal link from the anchor.

---

## W50 · TUE · ANCHOR + REPORT

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

---

## W50 · WED · LEDGER A

**Title:** What it costs to sell infant formula in China
**Word count:** 1,100 to 1,400

Block 3 is nearly the entire page and the honest answer in block 1 may be that most brands cannot do this at all in year one. Infant formula is the most heavily regulated category in this series, and the writer must verify and cite, from primary Chinese regulatory sources, the product formula registration requirement for infant and follow-on formula, whether it applies to the cross-border channel as well as general trade, the overseas manufacturer registration requirement, the Chinese labelling rules specific to infant formula, and the current treatment of formula on the cross-border positive list. Nothing in this ledger is asserted, every requirement is presented as a sourced statement with an access date, and the page states plainly that the timeline and cost of registration, not the platform fee, is what decides entry. Block 5 verdict is a sequencing verdict rather than a platform verdict.

**Proof.** None available. Use the block 6 honesty line.

---

## W51 · TUE · ANCHOR

**Title:** Double 11 2027: the 80-day plan
**Query:** double 11 2027 preparation · **Difficulty:** SEASONAL
**Word count:** 2,200 to 2,400

**The answer, in one line.** Eighty days out is the last point at which a brand can still change its Double 11 outcome, because after roughly day 45 the inventory is committed, the platform submissions are locked and everything left is execution, so this plan is organised around the deadlines that close rather than around tasks.

**The table it must carry.** An 80-day run table, one row per working milestone, 24 to 30 rows, in reverse-countdown order. Columns: days out, the milestone, the deadline type (platform-imposed, supplier-imposed or self-imposed), owner, what is irreversible after it, and what it costs to miss it stated concretely. Platform-imposed deadlines must be visually separated from the ones a brand sets for itself, because that distinction is what the year-one checklist got wrong. Mark the point of no return for inventory and the point of no return for promotion submissions.

**The proprietary number.** From the stores under management: the share of Double 11 GMV attributable to presale deposits versus the main window, and the median day count before the event at which stores that hit their target had inventory landed in the bonded warehouse, compared with stores that missed. State the sample size, platforms and period. That comparison is the argument for the 80-day start.

**Outline.**
1. What changed since last year's checklist, and why 80 days replaced 60
2. Days 80 to 60: pricing, assortment, inventory commitment
3. Days 60 to 45: platform submissions and the deadlines that close
4. Days 45 to 20: presale, traffic buying, creative and store build
5. Days 20 to 1: the presale window and the rehearsal nobody runs
6. The event days, in operating order
7. The 80-day run table

**Internal links.** /grow-in-china/campaigns, /tools/tmall-global-setup-and-run, /grow-in-china/cross-border-ecommerce, /grow-in-china/media, /insights
**CTA.** Run your Double 11 window cost in the Tmall Global calculator.
**Do not.** Do not republish the year-one checklist with a new year in the title; the improvement is the deadline typing, the point-of-no-return marking and the cost of missing each one, and the piece must visibly carry both the original publication date and this year's update date. Do not state platform submission deadlines as fact this far out; instruct the writer to give last cycle's dates as the planning basis, cite them, and tell the reader to confirm against the platform's own merchant calendar when it is published.
**Territory guard.** Creator briefing and content production schedules appear in the run table as dependencies with owners and dates. How to run them is TheRedScroll's, one link, no section.

---

## W51 · WED · LEDGER A

**Title:** What it costs to sell oral care in China
**Word count:** 1,100 to 1,400

Block 3 carries this one. Oral care is a classification trap: the regulatory treatment of toothpaste changed, and whether a product is handled as a cosmetic, an ordinary consumer good, or something with an efficacy claim depends on what the pack says, so a whitening or anti-sensitivity claim can pull an otherwise simple SKU into a heavier filing and substantiation path. Writer must verify and cite the current rule set governing toothpaste specifically, including any filing or record requirement and any efficacy substantiation obligation for whitening and gum health claims, and must show the cost difference in block 4 between a plain-claim SKU and a claims SKU. Block 5 should say which claims are worth paying for at this category's order value and which are not.

**Proof.** None available. Use the block 6 honesty line.

---

## W52 · TUE · ANCHOR

**Title:** The year-one China channel decision, revisited
**Query:** how to enter china market brands · **Difficulty:** HELD
**Word count:** 2,300 to 2,400

**The answer, in one line.** After a year of publishing our own cost and store data, the year-one answer has narrowed: for most consumer brands the first channel is a cross-border marketplace store or a distributor, not both, and the choice turns on three inputs, your category's compliance load, your unit economics at Chinese landed cost, and whether you have anyone who can operate in Chinese working hours.

**The table it must carry.** The decision table behind the tree, one row per route, 6 to 8 rows: cross-border marketplace flagship, cross-border on a social commerce platform, distributor with cross-border stock, distributor on general trade, general trade with your own entity, partner-operated store through a TP, and marketplace plus distributor in parallel. Columns: first-year fixed cost band with the basis stated, months to first order, who holds the customer relationship, who holds the inventory risk, the category conditions that make this route correct, and the single condition that rules it out. Cross-reference each row to the piece published this year that covers it in full, with the internal link inside the table cell.

**The proprietary number.** The year's own accumulated data, presented as a short summary block: total calculator runs completed across the three tools during the year with the median first-year cost by route, the number of category-level fee changes recorded across the two fee benchmark editions, the median weeks to first order from the launch timeline piece, and the store count behind the 618 report. Every figure carries the sample size and links to the piece it came from. This is the capstone's proprietary number and it is cumulative by design.

**Outline.**
1. What we published this year, and what it changed about the standard answer
2. The three inputs that decide the route
3. The decision table
4. Where the answer differs by category, with the ledger pages as evidence
5. What the cost data says a year later
6. The two routes we now recommend less often than we did
7. How to run this decision on your own numbers

**Internal links.** /enter-china/market-entry-consulting, /compass/shortlist, /tools/tmall-global-setup-and-run, /tools/jd-worldwide-setup-and-run, /grow-in-china/cross-border-ecommerce (plus in-table links to the year's category and cost pieces, which do not count against the 3 to 5 body links)
**CTA.** Request a Compass shortlist, or run your route in the market entry calculator.
**Do not.** Do not write this as a year in review; it is a decision page that happens to be evidenced by a year of publishing, and the first sixty words must contain the decision, not the retrospective. Do not restate any regulatory point from the year's pieces; link to the piece that carries the sourced version instead.

---

## W52 · WED · LEDGER B

**Title:** What it costs to sell industrial equipment and components in China
**Word count:** 1,100 to 1,400

Ledger B, no marketplace route, and the load sits on the channel table and on the licensing constraint. The specific trap is that industrial buyers do not convert from marketing channels at all in this category, they convert from specification listings, existing installed base and distributor relationships, so the channel table must report cost per qualified lead honestly, including the rows where it is effectively unmeasurable, and say so rather than inventing a figure. Instruct the writer to verify and cite what a foreign supplier may do without a Chinese entity when selling equipment, including contracting, invoicing, holding stock and providing on-site service and warranty work, and whether any of the equipment types in scope require certification or registration before import. Block 4 becomes cost per qualified lead plus sales cycle length in months, and the ledger should state plainly that a cycle measured in quarters makes monthly marketing spend the wrong unit of budgeting for this category.

**Proof.** None available. Use the block 6 honesty line.

**Block 7.** Link to /compass and /enter-china/distribution.

**Link back.** Pairs with the W44 B2B and industrial anchor. Link from block 1, and add the reciprocal link from the anchor.agentId: aa532f1b7bd3f8ccc (use SendMessage with to: 'aa532f1b7bd3f8ccc', summary: '<5-10 word recap>' to continue this agent)

---

# Part 4: the four templates

Everything not briefed above is generated from these.

## Template: SIGNAL

```
SLOT: Signal, Monday, 700 to 900 words
SOURCE: [the change, with a link to the platform announcement or filing]

Write a Signal on the change above. The rule: no platform news without an
operating consequence.

Structure:
1. What changed. Two sentences. Link the source.
2. What it costs or saves, with a worked figure at a stated GMV.
3. Which budget line moves, named.
4. What to do, with a date.
5. One internal link to the relevant calculator or service page.

Do not summarise the announcement. Do not speculate about platform
strategy. If the change does not move a number for a foreign brand, say
so in one line and stop; it becomes a newsletter link, not a Signal.
```

## Template: LEDGER A

```
SLOT: Ledger A, Wednesday, 900 to 1,400 words
CATEGORY: [category]
TITLE: What it costs to sell [category] in China
PROOF: [named case study, or "none available"]

Seven blocks, in this order:

1. THE ANSWER. 60 words. Which platform wins for this category and
   roughly what year one costs.
2. THE FEE TABLE. Deposit, annual fee and commission for this category
   on Tmall Global, JD Worldwide and Douyin cross-border. Real figures.
3. THE ROUTE. Cross-border positive list status. Licence, registration
   or test report required. What the Chinese label must carry. Cite every
   regulatory claim.
4. UNIT ECONOMICS. Typical order value for the category, cost per order
   at the fee table above, breakeven GMV.
5. THE VERDICT. Which platform first, and the condition that flips it.
6. PROOF OR HONESTY. The named case study using only figures already
   published on /work, or one plain line saying this is not a category
   the team has worked in.
7. THE TOOL LINK. Deep link to the matching calculator with this
   category preselected.

KILL CONDITION: if the block-2 table is identical to a category already
published, do not write this page. Merge it into that one.
```

## Template: LEDGER B

```
SLOT: Ledger B, Wednesday, 1,200 to 1,500 words
CATEGORY: [B2B or service category]
TITLE: How [category] actually reaches buyers in China
PROOF: [named case study]

Same seven blocks, with block 2 replaced:

2. THE CHANNEL TABLE. Row per channel: what it reaches, monthly cost to
   run, what a qualified lead costs, and who owns the relationship.
   Cover the vertical portals, the social platforms that matter for this
   category, WeChat, distributors, and offline.

Block 3 becomes the regulatory or licensing constraint on selling this
category as a foreign company. Block 4 becomes cost per qualified lead
and the length of the sales cycle. Block 7 links to Compass or the
relevant service page, since no calculator applies.

State plainly and early that this category has no cross-border
marketplace route. That honesty is the differentiator: every competitor's
category content assumes a Tmall store.
```

## Template: TEARDOWN

```
SLOT: Teardown, Thursday odd weeks, 1,200 to 1,600 words
BRAND: [brand]
TITLE: How [brand] entered China, and what it cost them

Selection must already be verified against all four criteria: live
storefront on a Chinese platform, traceable entry date, public statements
or filings about the strategy, and no commercial relationship with the
group.

Structure:
1. Where they are now. Observable today: platforms, assortment size,
   price positioning, review counts.
2. The sequence they ran, with dates.
3. The channel they picked first, and what that decision implies.
4. What it visibly cost, with every figure sourced.
5. Where they lost time, and what it cost them.
6. What a brand entering the same category should copy and what to avoid.

EVERY claim is sourced or explicitly labelled an inference. Write
"the storefront shows" and "the filing states", not "they decided".
A teardown that guesses at numbers is a liability.

Never a current or former client of the group.
```

## Template: REFRESH

```
SLOT: Refresh, Thursday even weeks
URL: [existing article URL]

Upgrade this piece to the Anchor acceptance spec. Required:
- Rewrite the opening so the answer lands in the first 60 words.
- Add or rebuild one real table with current figures.
- Add one number only this agency can publish, labelled.
- Add or fix the named byline and both dates.
- Add three to five internal links, at least one to a calculator or
  Compass, using compliant anchor text.
- Add external citations for every third-party figure.
- Update anything factually stale, and say what changed in one line
  near the top.

Then update the visible modified date and the sitemap lastmod.

KILL CONDITION: if the only change would be the year in the title, do
not ship it. Pick the next item in the queue. Re-dating without
substantive change teaches Google to ignore dates on this domain.
```

---

# Part 5: the partner queue (Finding a partner)

Fifty pieces on choosing, checking, contracting and managing a China partner
(distributor, importer, Tmall Partner, Douyin Partner). Plan and research:
`editorial/plans/finding-a-partner-50.md`. P01 to P15 are drafted ahead and
publish one per weekday from September 30 to October 20, 2026. P16 to P50
publish every other day, weekends included, from October 22 to December
29, 2026. The daily partner run (scripts/run-daily.ps1 -Mode partner)
drafts each one up to two days ahead.

Rules for every P piece, on top of Part 0:

- **Tags.** Frontmatter `tags` carries `Finding a partner` plus every topic tag
  the brief lists (`Distributors`, `Tmall Partners`, `Douyin Partners`,
  `Contracts`, `Due diligence`, `Managing a partner`). They drive the hub at
  `/insights/finding-a-partner` and its filter chips.
- **Links.** Up to the guide the brief serves, to `/compass`, and across to one
  other published P piece when one exists. CTA: the Compass shortlist.
- **Never cite a competitor.** No agency, consultancy or matchmaker that sells
  China market entry, partner search or store operations: Shanghai Jungle,
  AppInChina, GMA / Marketing to China and its sister domains, Asia Pro
  Distribution, Daxue Consulting, China Briefing / Dezan Shira, WalktheChat,
  TMO Group, GourmetPro, China Skinny, Up2China, Web2Asia, Azoya, ChoZan,
  Lotus, any Chinese 代运营 agency blog (da-mai, xinshawn and the like), and any
  搜狐号 or 知乎 post written by an agency. Listed store operators (TPs and DPs
  such as Baozun 宝尊, Ruoyuchen 若羽臣, Lily & Beauty 丽人丽妆, Qingmu 青木) are
  competitors too: do not cite them, not even through their annual filings. Such pages may point you to a
  primary source; cite the primary source or nothing. Name no competitor in
  the copy either.
- **Cite, in this order:** the platform's own rules (tmall.hk, jinritemai,
  open.alitrip), regulators and courts (NMPA, GACC, SAMR, MOF, court.gov.cn,
  spp.gov.cn, npc.gov.cn), listed-company filings (cninfo, szse, sse, HKEX,
  SEC; never a store operator's), dated Chinese news media (36氪, 界面, 虎嗅, 21世纪经济报道, 第一财经,
  财新, 新浪财经, 东方财富, 澎湃), then English news (Reuters, WWD, BoF).
  Figures marked "lead" below still need the primary source before use.
- **Proprietary number.** A Compass figure from
  `sources/compass-stats.md` when it exists. Until then, TheChinaPath
  calculator data or a published case page, per CLAUDE.md, and the log says
  a Compass figure was unavailable. Never invent one.
- **Body length by type.** Anchor 1,600 to 2,400 words. Explainer 1,300 to
  1,800. Case note 1,000 to 1,300. Asset: the article 1,000 to 1,400 plus the
  printable at `output/guides/<slug>.md`.

## Template: PARTNER

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

## The partner queue

| ID | Publish | Title | Query | Tags | Type | Serves | Words |
|---|---|---|---|---|---|---|---|
| P01 | 2026-09-30 | Where to meet China distributors this season | china trade fairs find distributor | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P02 | 2026-10-01 | Changing your cosmetics responsible person in China got easier | change domestic responsible person china cosmetics | Distributors, Contracts | Case note | distributor | 1,000 to 1,300 |
| P03 | 2026-10-02 | How to read a Chinese company report before you sign | verify chinese company qichacha | Due diligence, Distributors | Anchor + Asset | distributor | 1,600 to 2,400 |
| P04 | 2026-10-05 | What a Douyin Partner costs: retainers, commission and creators | douyin agency cost | Douyin Partners | Anchor | dp | 1,600 to 2,400 |
| P05 | 2026-10-06 | Who owns your Tmall store, Douyin shop and customer data | tmall partner store ownership | Tmall Partners, Douyin Partners, Contracts | Anchor | tp, dp | 1,600 to 2,400 |
| P06 | 2026-10-07 | Tmall and Douyin partner ratings: what the stars mean | tmall partner rating douyin service provider | Due diligence, Tmall Partners, Douyin Partners | Explainer | tp, dp | 1,300 to 1,800 |
| P07 | 2026-10-08 | Service TP or buy-out TP: who sets your price | tmall partner agency vs distributor model | Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P08 | 2026-10-09 | The Tmall Partner contract: the clauses that decide your exit | tmall partner contract terms | Tmall Partners, Contracts | Anchor | tp | 1,600 to 2,400 |
| P09 | 2026-10-12 | From ex-works to shelf: how a China price ladder is built | china distributor margin imported product price | Distributors | Anchor | distributor | 1,600 to 2,400 |
| P10 | 2026-10-13 | Payment terms with a Chinese distributor | payment terms chinese distributor | Distributors, Contracts | Explainer | distributor | 1,300 to 1,800 |
| P11 | 2026-10-14 | Sell-in is not sell-out: spotting stock pushing in China | sell in vs sell out china distributor | Managing a partner, Distributors | Anchor | distributor | 1,600 to 2,400 |
| P12 | 2026-10-15 | China distributor price control: a clause that held | china distributor price control parallel | Contracts, Distributors | Case note | distributor | 1,000 to 1,300 |
| P13 | 2026-10-16 | When a Tmall agency fakes orders, the brand pays | tmall agency fake orders brand liability | Due diligence, Tmall Partners, Douyin Partners | Case note | tp, dp | 1,000 to 1,300 |
| P14 | 2026-10-19 | Douyin return rates by category, and what they cost you | douyin return rate | Douyin Partners | Explainer | dp | 1,300 to 1,800 |
| P15 | 2026-10-20 | How to replace a China distributor without losing the shelf | replace distributor china | Managing a partner, Distributors, Contracts | Anchor | distributor | 1,600 to 2,400 |
| P16 | 2026-10-22 | TP, DP or distributor: who to hire first in China | tmall partner vs distributor china | Distributors, Tmall Partners, Douyin Partners | Anchor | distributor, tp, dp | 1,600 to 2,400 |
| P17 | 2026-10-24 | Douyin's dual verification: what it changes for your partner | douyin cross border brand verification | Douyin Partners | Explainer | dp | 1,300 to 1,800 |
| P18 | 2026-11-03 | State-owned or private importer: which one to sign | china importer state owned private | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P19 | 2026-10-26 | Can one agency run your Tmall store and Douyin shop? | tmall partner douyin partner same agency | Tmall Partners, Douyin Partners | Explainer | tp, dp | 1,300 to 1,800 |
| P20 | 2026-10-28 | Exclusivity in China: what to give, and what to keep | china distributor exclusivity | Contracts, Distributors | Anchor | distributor | 1,600 to 2,400 |
| P21 | 2026-10-30 | Importer, distributor or TP: who you need for Tmall Global | tmall global importer of record | Distributors, Tmall Partners | Explainer | tp, distributor | 1,300 to 1,800 |
| P22 | 2026-11-23 | Choosing a pet food partner after China's 10% tariff | pet food distributor china | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P23 | 2026-11-15 | The Double 11 review to run with your China partner | double 11 agency review | Managing a partner | Asset | tp, dp | 1,000 to 1,400 |
| P24 | 2026-11-17 | Your distributor registered your trademark: the way back | distributor registered my trademark china | Contracts, Distributors | Case note | distributor | 1,000 to 1,300 |
| P25 | 2026-12-09 | Choosing a supplements partner: blue hat or cross-border | supplements distributor china | Distributors, Tmall Partners | Explainer | distributor, tp | 1,300 to 1,800 |
| P26 | 2026-11-19 | The first 90 days with a new Tmall Partner | tmall partner onboarding | Managing a partner, Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P27 | 2026-11-21 | Supermarket fees in China: listing, barcode and end-caps | china supermarket listing fee | Distributors | Anchor | distributor | 1,600 to 2,400 |
| P28 | 2026-11-29 | Why brands leave Tmall Global, and what it says | brands leaving tmall global | Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P29 | 2026-11-13 | Regional or national distributor: how coverage works | regional distributor china | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P30 | 2026-12-03 | When to take eCommerce back from your Tmall Partner | take ecommerce in house china | Managing a partner, Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P31 | 2026-12-01 | What a Tmall Partner costs: retainer, commission and extras | tmall agency cost | Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P32 | 2026-12-11 | Choosing a China partner for a beauty brand | cosmetics distributor china | Distributors, Tmall Partners, Douyin Partners | Anchor | distributor, tp, dp | 1,600 to 2,400 |
| P33 | 2026-11-05 | Choosing a food and drink importer in China | food importer china | Distributors | Anchor | distributor | 1,600 to 2,400 |
| P34 | 2026-11-27 | Selling to JD self-run and Hema through a distributor | jd self operated supplier foreign brand | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P35 | 2026-11-09 | What Douyin creator commission really costs a brand | douyin affiliate commission brand | Douyin Partners | Explainer | dp | 1,300 to 1,800 |
| P36 | 2026-11-01 | Red flags in a Tmall or Douyin agency proposal | tmall agency proposal red flags | Due diligence, Tmall Partners, Douyin Partners | Explainer | tp, dp | 1,300 to 1,800 |
| P37 | 2026-12-13 | Choosing a mother and baby partner in China | baby products distributor china | Distributors, Tmall Partners | Explainer | distributor, tp | 1,300 to 1,800 |
| P38 | 2026-12-07 | China eCommerce agency scams, and the checks that stop them | china ecommerce agency scam | Due diligence | Case note | tp, dp | 1,000 to 1,300 |
| P39 | 2026-12-05 | The authorization letter: your lever over Tmall resellers | tmall brand authorization letter | Contracts, Tmall Partners | Explainer | tp | 1,300 to 1,800 |
| P40 | 2026-11-07 | Chinese-language contracts: chops, language, arbitration | china distribution contract chinese language arbitration | Contracts | Explainer | distributor, tp, dp | 1,300 to 1,800 |
| P41 | 2026-11-25 | First orders, minimums and consignment in China | minimum order chinese distributor | Distributors, Contracts | Explainer | distributor | 1,300 to 1,800 |
| P42 | 2026-12-17 | A China distributor scorecard beyond the sales target | china distributor kpi | Managing a partner, Distributors | Asset | distributor | 1,000 to 1,400 |
| P43 | 2026-12-15 | Hong Kong as a base for selling into mainland China | hong kong distributor china mainland | Distributors | Explainer | distributor | 1,300 to 1,800 |
| P44 | 2026-12-19 | The monthly report to demand from your China partner | distributor sell out report template | Managing a partner | Asset | distributor, tp, dp | 1,000 to 1,400 |
| P45 | 2026-12-21 | How to brief a China partner search | china distributor search brief | Due diligence | Asset | distributor, tp, dp | 1,000 to 1,400 |
| P46 | 2026-11-11 | Livestream agency or Douyin Partner: who does what | douyin livestream agency vs dp | Douyin Partners | Explainer | dp | 1,300 to 1,800 |
| P47 | 2026-12-27 | China distributor red flags from the Compass files | china distributor red flags | Due diligence, Distributors | Anchor | distributor | 1,600 to 2,400 |
| P48 | 2026-12-23 | Switching Tmall Partners: the handover checklist | switch tmall partner | Managing a partner, Tmall Partners | Asset | tp | 1,000 to 1,400 |
| P49 | 2026-12-25 | China partner glossary: 40 terms from 代运营 to 窜货 | china ecommerce partner glossary | Due diligence | Asset | distributor, tp, dp | 1,000 to 1,400 |
| P50 | 2026-12-29 | What fifteen years of partner meetings say about success | china distribution partner success | Managing a partner | Anchor + Report | distributor, tp, dp | 1,600 to 2,400 |

Guide paths for "Serves": distributor `/compass/find-a-distributor-in-china`,
tp `/compass/find-a-tmall-partner-in-china`, dp `/compass/find-a-douyin-partner-in-china`.

## P01 · PARTNER · EXPLAINER

**Title:** Where to meet China distributors this season
**Query:** china trade fairs find distributor · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** The fairs that put a foreign brand in front of working Chinese distributors are the China Food and Drinks Fair (autumn in Nanjing, spring in Chengdu), CIIE and FHC in Shanghai for importers, CBE for beauty and SIAL China for food. Go with a shortlist of stands, not a bag of business cards.

**The table it must carry.** Fair, city and 2026/2027 dates, who walks the floor (distributors, importers, retail buyers), categories it suits, what to book before you fly. Dates from the organisers' own sites, re-checked on the day of drafting.

**The proprietary number.** Compass: share of partners on file first met at a fair vs through referral. Fallback: none from the calculators applies, so log the gap and use a published case page only if one fits.

**Outline.**
1. Why a fair is a filter, not a search
2. The table
3. Who is actually on the stand, and who you need to meet
4. Booking meetings in advance (WeChat, the organiser's matchmaking desk)
5. What to bring: price list in RMB, registration status, a one-page brand sheet in Chinese
6. After the fair: the check that separates a buyer from a trader

**Leads (verify, cite primary).** 糖酒会 official site tjhui.cn (115th autumn fair, Nanjing, Oct 15 to 17, 2026); ciie.org (Nov 5 to 10, 2026); FHC and ProWine Shanghai (Nov 10 to 12, 2026); CBE China Beauty Expo (May 12 to 14, 2027); SIAL China (May 18 to 20, 2027); Canton Fair phase 3 (Oct 31 to Nov 4, 2026).

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`, `/enter-china/distribution`
**CTA.** Compass shortlist.

## P02 · PARTNER · CASE NOTE

**Title:** Changing your cosmetics responsible person in China got easier
**Query:** change domestic responsible person china cosmetics · **Tags:** Distributors, Contracts
**Word count:** 1,000 to 1,300

**The answer, in one line.** Until July 2026 a cosmetics brand that wanted a new domestic responsible person (境内责任人) needed its old partner's signature or a court ruling. NMPA Announcement No. 70 of 2026 removed the consent requirement, so an exiting distributor can no longer hold a brand's registrations hostage.

**The table it must carry.** Before and after: what the brand files, whose consent, typical timing, what the old partner can still block.

**The proprietary number.** Compass: share of beauty partners on file that hold responsible-person filings for the brands they carry. Fallback: log the gap.

**Outline.**
1. What the responsible person does and why a distributor often holds the role
2. The old rule (化妆品注册备案资料管理规定, Art. 48) and how it trapped brands
3. What Announcement 70 changes, from the NMPA text
4. The table
5. What to put in the next distribution contract anyway
6. Where this fits in a partner switch

**Leads (verify, cite primary).** NMPA Announcement No. 70 of 2026, July 29, 2026 (nmpa.gov.cn); 化妆品注册备案资料管理规定 Art. 48. Consultancy summaries may point to the text; cite the NMPA page.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`, `/enter-china/cross-border-setup`
**CTA.** Compass shortlist.

## P03 · PARTNER · ANCHOR + ASSET

**Title:** How to read a Chinese company report before you sign
**Query:** verify chinese company qichacha · **Tags:** Due diligence, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Pull the partner's record from the national credit system (GSXT) and one commercial database (Qichacha or Tianyancha), then read eight fields: registration date, registered and paid-in capital, business scope, shareholders, branches, court judgments, the dishonest-debtor list and administrative penalties. Most bad candidates fail here, before a call.

**The table it must carry.** Field, where to find it, what a real distributor's record shows, what should stop you.

**The proprietary number.** Compass: share of candidates dropped at the licence and record check. Fallback: log the gap.

**Asset.** `output/guides/<slug>.md`: a one-page printable field checklist with the eight fields and a pass/stop column.

**Outline.**
1. The two registries and what each is good for
2. Reading the licence: scope (经营范围), capital, age
3. Reading the record: 裁判文书, 失信被执行人, 行政处罚
4. The table
5. What the report cannot tell you, and the call that covers it
6. The printable checklist

**Leads (verify, cite primary).** gsxt.gov.cn field definitions; the Supreme People's Court dishonest-debtor list (zxgk.court.gov.cn); 裁判文书网.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`, `/insights/find-distributor-china-verify` (when 07A is live)
**CTA.** Compass shortlist.

## P04 · PARTNER · ANCHOR

**Title:** What a Douyin Partner costs: retainers, commission and creators
**Query:** douyin agency cost · **Tags:** Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** Most Douyin Partners charge a monthly retainer plus a commission on GMV, and the brand funds Qianchuan ads and creator commission on top. Price the whole stack at a stated GMV before comparing quotes, because commission ladders move the total more than the retainer does.

**The table it must carry.** Cost line (retainer, GMV commission, creator commission, slot fees, Qianchuan, co-fund), how it is charged, a typical range with source, what to watch. Then one worked year at a stated GMV.

**The proprietary number.** TheChinaPath Douyin calculator data (retainer tiers, commission, cost per kept order).

**Outline.**
1. The fee models in use (base plus commission, commission only, tiered ladders)
2. The table
3. A worked year at a stated GMV
4. Commission on gross or on net of returns
5. What the retainer should buy (live hours, videos, service)
6. How to compare three quotes on one page

**Leads (verify, cite primary).** Douyin 精选联盟 commission rules (jinritemai); 纯佣 commission settings (5% to 80%, platform rule); a tiered ladder reported by IT之家 (ithome.com/0/943/132.htm, lead); settlement T+7 or T+15 (platform rules).

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
**CTA.** Compass shortlist.

## P05 · PARTNER · ANCHOR

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

## P06 · PARTNER · EXPLAINER

**Title:** Tmall and Douyin partner ratings: what the stars mean
**Query:** tmall partner rating douyin service provider · **Tags:** Due diligence, Tmall Partners, Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Tmall Global scores its partners quarterly out of 12 points and grades them three to five stars; Douyin grades rated providers Diamond, Gold or Silver. The badge tells you scale and platform standing. It says nothing about your category, so use it to build a long list and nothing more.

**The table it must carry.** Platform, rating scale, how it is scored and how often, what a top rating gets the partner, what it does not tell you.

**The proprietary number.** Compass: rating mix of TPs and DPs on file. Fallback: log the gap.

**Outline.**
1. Why platforms rate partners at all
2. Tmall Global TP stars (12-point score, quarterly; only 4 and 5 stars meet brands at recruitment events)
3. Domestic Tmall's v-partner list
4. Douyin Diamond, Gold, Silver
5. The table
6. How to check a claimed rating yourself

**Leads (verify, cite primary).** tmall.hk/wow/import/act/tpgrowth (official); v-partner list, 腾讯新闻 Dec 27, 2024 (news.qq.com/rain/a/20241227A067I400); Douyin H2 2023 ratings (news.qq.com/rain/a/20230915A02JQI00); 1,500 registered and 350 rated providers (网易 Jan 7, 2026, c.m.163.com/news/a/KIM90VO8055684L8.html).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P07 · PARTNER · EXPLAINER

**Title:** Service TP or buy-out TP: who sets your price
**Query:** tmall partner agency vs distributor model · **Tags:** Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A service TP (代运营) runs your store for a fee and commission while you own the stock and set the price. A buy-out TP (经销) buys your stock, books the sales and sets the price. Pick the model for the control you need, then pick the partner.

**The table it must carry.** Service vs buy-out vs consignment: who owns stock, who sets price, who holds the store, cash needed, what goes wrong.

**The proprietary number.** Compass: model split of TPs on file. Fallback: TheChinaPath Tmall Global calculator data for the service-model cost line.

**Outline.**
1. The two categories in Tmall Global's own TP program
2. The table
3. Price control under each model
4. Cash and inventory risk
5. When each one fits
6. Switching models later

**Leads (verify, cite primary).** Tmall Global TP categories 经销类 and 代运营 (Feb 2021 program notice; 网易 lead 163.com/dy/article/G27NTF4N053814UB.html); Tmall Global's own partner program pages.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
**CTA.** Compass shortlist.

## P08 · PARTNER · ANCHOR

**Title:** The Tmall Partner contract: the clauses that decide your exit
**Query:** tmall partner contract terms · **Tags:** Tmall Partners, Contracts
**Word count:** 1,600 to 2,400

**The answer, in one line.** Seven clauses decide whether you can leave a Tmall Partner cleanly: store ownership, account and data handover, notice and transition period, KPIs that allow termination, the commission base, ad-spend control and a no-sabotage clause with a penalty. Settle them at signing; nobody negotiates them well at exit.

**The table it must carry.** Clause, what to write, what goes wrong without it (with the case or rule behind it).

**The proprietary number.** TheChinaPath Tmall Global calculator data (default retainer and commission) to price a transition month. Compass figure if available.

**Outline.**
1. The case: a TP deletes three best-selling links on its last day (Chongqing)
2. The table
3. Sub-accounts and 生意参谋 access: revocation dates
4. KPIs that let you leave, and KPI refunds courts have ordered
5. The commission base (gross, net, after returns)
6. A transition calendar that avoids Double 11 and 618

**Leads (verify, cite primary).** Chongqing No. 5 Intermediate Court judgment reported by 泰和泰 (tahota.com, lead; find the judgment on 裁判文书网); exit data practices (新浪 k.sina.cn/article_8424942191_1f62a6a6f00101hrvu.html, lead).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
**CTA.** Compass shortlist.

## P09 · PARTNER · ANCHOR

**Title:** From ex-works to shelf: how a China price ladder is built
**Query:** china distributor margin imported product price · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** An imported product's shelf price in China stacks freight, duty, VAT, the importer's margin, the distributor's margin and the retailer's margin on top of your ex-works price. Build the ladder backwards from the shelf price shoppers accept before you quote anyone.

**The table it must carry.** A worked ladder for one general-trade product: each step, the rate, the source, the running price. Then the same product through cross-border (9610/1210) for comparison.

**The proprietary number.** TheChinaPath calculator data (duty and VAT paths, cross-border tax).

**Outline.**
1. Why the ladder starts at the shelf
2. Duty and VAT (MOF schedule; 13% and 9% VAT bands)
3. The table
4. Where margins sit and why layers multiply
5. The cross-border comparison
6. What to cut, and what never to cut

**Leads (verify, cite primary).** 财政部关税司 tariff schedule; VAT rates (State Taxation Administration); cross-border comprehensive tax rules; layered distribution markups (新浪财经 2013, history only).

**Internal links.** `/compass/find-a-distributor-in-china`, `/tools/tmall-global-setup-and-run`, `/insights/china-distributor-vs-own-store`, `/compass`
**CTA.** Compass shortlist.

## P10 · PARTNER · EXPLAINER

**Title:** Payment terms with a Chinese distributor
**Query:** payment terms chinese distributor · **Tags:** Distributors, Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Ask for prepayment or a confirmed letter of credit on the first orders, move to open terms only after a payment track record, and insure the receivable when you do. Chinese distributors are short of cash, so terms are part of the negotiation, not an afterthought.

**The table it must carry.** Term (prepayment, deposit plus balance, LC, open account with credit insurance, consignment), risk to the brand, cost, when it fits.

**The proprietary number.** Compass: typical first-order terms on file. Fallback: log the gap.

**Outline.**
1. Why cash is tight downstream (the 2025 distributor survey)
2. The table
3. Letters of credit in practice
4. Credit insurance (Sinosure and private insurers)
5. Currency, RMB vs USD, and who carries FX
6. When to move to open terms

**Leads (verify, cite primary).** Over 40% of distributors under cash pressure (China Alcoholic Drinks Association 中国酒业协会 with KPMG China, annual distributor survey, 2025 and 2026 editions; the 界面新闻 page jiemian.com/article/13003026.html is a repost); Sinosure product pages.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P11 · PARTNER · ANCHOR

**Title:** Sell-in is not sell-out: spotting stock pushing in China
**Query:** sell in vs sell out china distributor · **Tags:** Managing a partner, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Sell-in is what your distributor buys; sell-out is what shoppers buy. When the first grows faster than the second, stock is piling up in the channel (压货) and a price war or a returns fight follows. Ask for scan or depletion data every month, and read weeks of cover, not orders.

**The table it must carry.** Signal (orders vs scans, weeks of cover, discounting online, sudden promotions, late payment), what it looks like, what to ask for.

**The proprietary number.** Compass: share of distributors on file that share scan or depletion data. Fallback: log the gap.

**Outline.**
1. Why distributors are refusing stock in 2025 and 2026
2. The table
3. Weeks of cover: the one ratio to track
4. Where to get sell-out data (retailer portals, POS, platform backends)
5. What to write into the contract
6. What to do when the channel is already full

**Leads (verify, cite primary).** 压货 and 动销 (虎嗅 huxiu.com/article/4873623.html; 界面 jiemian.com/article/13003026.html, one distributor's RMB 4 to 5 million of stock against under RMB 300,000 profit).

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P12 · PARTNER · CASE NOTE

**Title:** China distributor price control: a clause that held
**Query:** china distributor price control parallel · **Tags:** Contracts, Distributors
**Word count:** 1,000 to 1,300

**The answer, in one line.** A beauty brand's exclusive offline distributor scratched off traceability codes and sold online. The contract set a RMB 200,000 penalty and the brand won the lead case in June 2025; 14 related cases worth over RMB 6 million in total closed through mediation. Put a traceable code and a written penalty in every distribution contract.

**The table it must carry.** The control (traceability code, channel clause, per-breach penalty, audit right, platform complaint), what it does, how the case used it.

**The proprietary number.** Compass: share of distributors on file with a written price and channel policy. Fallback: log the gap.

**Outline.**
1. The case (Shanghai Fengxian court)
2. What 窜货 and 乱价 cost a brand
3. The table
4. What price control is still legal (Anti-Monopoly Law, 2022 amendment on resale prices)
5. The clauses to copy

**Leads (verify, cite primary).** court.gov.cn/zixun/xiangqing/507751.html; Anti-Monopoly Law 2022 text (npc.gov.cn).

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`
**CTA.** Compass shortlist.

## P13 · PARTNER · CASE NOTE

**Title:** When a Tmall agency fakes orders, the brand pays
**Query:** tmall agency fake orders brand liability · **Tags:** Due diligence, Tmall Partners, Douyin Partners
**Word count:** 1,000 to 1,300

**The answer, in one line.** In a case the Supreme People's Court released in August 2026, an operating agency faked group-buy orders on a local-services platform and paid with its own RMB 50,000 deposit and a RMB 100,000 fine. On Tmall and Douyin, the merchant agreements treat what is done through the store account as the merchant's act, and the 2025 Anti-Unfair Competition Law reaches the seller whose sales were inflated. Ban fake orders in writing and audit the traffic.

**The table it must carry.** Consequence (platform deposit, store penalties and delisting, regulator fines, criminal exposure), who bears it, the source.

**The proprietary number.** Compass: share of candidates declined over data integrity. Fallback: log the gap.

**Outline.**
1. The case
2. How fake orders (刷单炒信) are run and detected
3. The table
4. Why the brand carries the risk
5. Contract and audit steps

**Leads (verify, cite primary).** court.gov.cn/zixun/xiangqing/507731.html (typical cases, case 4); spp.gov.cn/llyj/201704/t20170424_188821.shtml; Anti-Unfair Competition Law.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P14 · PARTNER · EXPLAINER

**Title:** Douyin return rates by category, and what they cost you
**Query:** douyin return rate · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Returns on Douyin run far higher than on shelf eCommerce, and they vary by category from single digits in food to half of orders in women's apparel. Pay your partner on sales after returns, and budget cost per kept order, not per order.

**The table it must carry.** Category, reported return range, source and date, what it does to cost per kept order at a stated basket.

**The proprietary number.** TheChinaPath Douyin calculator (cost per kept order at 5%, 30%, 50% returns).

**Outline.**
1. Why live commerce returns more
2. The table
3. Douyin's own position on the numbers
4. Cost per kept order
5. Commission on gross vs net
6. What a partner can do to bring returns down

**Leads (verify, cite primary).** 人人都是产品经理 (woshipm.com/it/6128324.html, lead); 界面 (jiemian.com/article/9873801.html); Douyin rebuttal of the 90% story (新浪财经 June 13, 2025, finance.sina.cn/cj/2025-06-13/detail-inezxtpa5801214.d.html).

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
**CTA.** Compass shortlist.

## P15 · PARTNER · ANCHOR

**Title:** How to replace a China distributor without losing the shelf
**Query:** replace distributor china · **Tags:** Managing a partner, Distributors, Contracts
**Word count:** 1,600 to 2,400

**The answer, in one line.** Line up the new partner before you give notice, send written notice under the contract, buy back or sell through the old stock, and move every registration, label, listing and authorization to the new partner in one plan. Brands lose the shelf when they switch in the wrong order.

**The table it must carry.** Asset to move (stock, retail listings, product registrations, responsible person, labels, trademark licence, Tmall and Douyin authorizations, customer data), who holds it, how it moves, typical time.

**The proprietary number.** Compass: median months from first meeting to a signed replacement. Fallback: log the gap.

**Outline.**
1. Why switches fail
2. Notice: the Beijing case where missed targets did not end exclusivity without written notice
3. The table
4. Stock: buy-back, sell-off period, price discipline
5. Registrations and the responsible person (link P02)
6. A switch calendar

**Leads (verify, cite primary).** Beijing No. 1 Intermediate Court (2015)一中民(商)终字第7955号 (tiantailaw.com, lead; cite the judgment); NMPA Announcement No. 70 of 2026.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P16 · PARTNER · ANCHOR

**Title:** TP, DP or distributor: who to hire first in China
**Query:** tmall partner vs distributor china · **Tags:** Distributors, Tmall Partners, Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** Hire a distributor when your product needs a shelf, a Tmall Partner when shoppers search for your category online, and a Douyin Partner when the product sells on demonstration. Most brands start with one, and the right one follows from the category, the cash and the channel.

**The table it must carry.** Distributor vs TP vs DP: what they run, how they are paid, cash needed in year one, time to first sale, control you keep, best for.

**The proprietary number.** TheChinaPath calculator data for the TP and DP cost lines.

**Outline.** 1. Three partners, three jobs 2. The table 3. Category decides first 4. Cash and time 5. The usual second partner 6. How to test before committing

**Internal links.** all three guides, `/insights/china-distributor-vs-own-store`, `/compass`
**CTA.** Compass shortlist.

## P17 · PARTNER · EXPLAINER

**Title:** Douyin's dual verification: what it changes for your partner
**Query:** douyin cross border brand verification · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Since 2026 Douyin asks cross-border brands to prove both overseas production and overseas sales before they sell. Your partner can prepare the file, but only you hold the evidence, so the partner's value shifts from paperwork to operations.

**The table it must carry.** Requirement, evidence accepted, what is excluded, who prepares it, timing.

**The proprietary number.** TheChinaPath Douyin calculator data (cross-border deposit and commission).

**Outline.** 1. The rule and its dates 2. The table 3. What counts as overseas sales 4. What your DP should and should not do 5. Tmall's parallel rule

**Leads (verify, cite primary).** Douyin cross-border rule announcement (jinritemai); the Tmall parallel notice. Trade press may point to them; cite the platform text.

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
**CTA.** Compass shortlist.

## P18 · PARTNER · EXPLAINER

**Title:** State-owned or private importer: which one to sign
**Query:** china importer state owned private · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** State-owned importers bring licences, credit and access to state retail, and move slowly. Private importers move fast and sell harder, and carry more credit risk. Choose on the channel you need and the checks the importer passes, not on ownership alone.

**The table it must carry.** State-owned vs private: licences, speed, payment reliability, retail access, marketing effort, typical fit.

**The proprietary number.** Compass: ownership split of importers on file. Fallback: log the gap.

**Outline.** 1. Why the question comes up at CIIE 2. The table 3. Licences and registrations 4. Credit and payment 5. Channel access 6. Checks for both

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P19 · PARTNER · EXPLAINER

**Title:** Can one agency run your Tmall store and Douyin shop?
**Query:** tmall partner douyin partner same agency · **Tags:** Tmall Partners, Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** One agency can run both when it has a separate live-room team with its own results in your category. Running a store and running a live room are different trades, so judge the Douyin side on its own evidence even when the contract is shared.

**The table it must carry.** One agency vs two: coordination, pricing conflicts, cost, accountability, what to check.

**The proprietary number.** Compass: share of TPs on file with a rated Douyin practice. Fallback: log the gap.

**Outline.** 1. Why the question matters now (Tmall-first operators moving to Douyin) 2. The table 3. Price conflict between channels 4. Checking the Douyin team 5. Contract structure for one or two agencies

**Leads (verify, cite primary).** Douyin service market (抖店服务市场) provider tiers and category requirements; Tmall Global partner rules; dated Chinese business media on agencies adding Douyin live teams (21世纪经济报道, 界面). No store operator's own filings.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P20 · PARTNER · ANCHOR

**Title:** Exclusivity in China: what to give, and what to keep
**Query:** china distributor exclusivity · **Tags:** Contracts, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Give exclusivity by channel and by region, tie each grant to a purchase target and a review date, and keep online channels and the right to take the grant back. Courts enforce exclusivity both ways, so write it narrowly and give notice formally.

**The table it must carry.** Grant type (national, regional, channel, online, category), what the brand gives up, target to attach, exit trigger.

**The proprietary number.** Compass: share of distributors on file that asked for national exclusivity at first meeting. Fallback: log the gap.

**Outline.** 1. Why distributors ask for everything 2. The Beijing double-damages case 3. The table 4. Targets and take-or-pay 5. Online carve-outs 6. Notice and review

**Leads (verify, cite primary).** Beijing No. 1 Intermediate Court (2015)一中民(商)终字第7955号. Interlink with 25A (distribution agreement) when live.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P21 · PARTNER · EXPLAINER

**Title:** Importer, distributor or TP: who you need for Tmall Global
**Query:** tmall global importer of record · **Tags:** Distributors, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Tmall Global runs on cross-border rules, so you need no Chinese importer of record, but you do need an overseas selling entity, a bonded or direct-mail logistics route and usually a TP to run the store. A distributor only enters when you move to general trade.

**The table it must carry.** Role (overseas entity, TP, logistics provider, importer, distributor), needed for Tmall Global? for general trade? who usually fills it.

**The proprietary number.** TheChinaPath Tmall Global calculator data.

**Outline.** 1. Cross-border vs general trade in one paragraph 2. The table 3. 1210 bonded vs 9610 direct mail 4. When a distributor comes in 5. Common set-ups by brand size

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/enter-china/cross-border-setup`
**CTA.** Compass shortlist.

## P22 · PARTNER · EXPLAINER

**Title:** Choosing a pet food partner after China's 10% tariff
**Query:** pet food distributor china · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** China raised the tariff on imported pet food from 4% to 10% in January 2025 and imports fell. The partners who still grow imported pet food hold registrations, cold or dry logistics and online pet-channel reach; check those three before price.

**The table it must carry.** Partner type (importer-distributor, online pet specialist, cross-border TP), what it holds, cost impact of the tariff, fit.

**The proprietary number.** TheChinaPath calculator data (pet food category fees). Interlink with 06L pet food cost.

**Leads (verify, cite primary).** Tariff change (财政部关税司 2025 tariff schedule); import volume 2024 (customs data).

**Internal links.** `/compass/find-a-distributor-in-china`, `/insights/cost-to-sell-pet-food-in-china` (when live), `/compass`
**CTA.** Compass shortlist.

## P23 · PARTNER · ASSET

**Title:** The Double 11 review to run with your China partner
**Query:** double 11 agency review · **Tags:** Managing a partner
**Word count:** 1,000 to 1,400

**The answer, in one line.** Hold the review within two weeks of Double 11, on net sales after returns, ad return by campaign, new customers and stock left. Agree three changes for 618 before the meeting ends.

**The table it must carry.** Metric, where the number comes from, good sign, bad sign.

**The proprietary number.** Compass or case data if available, else calculator data for the cost lines.

**Asset.** Printable review agenda with the metric table and a decisions box.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P24 · PARTNER · CASE NOTE

**Title:** Your distributor registered your trademark: the way back
**Query:** distributor registered my trademark china · **Tags:** Contracts, Distributors
**Word count:** 1,000 to 1,300

**The answer, in one line.** Article 15 of China's Trademark Law bars an agent or distributor from registering its principal's mark without consent, so a brand can oppose or invalidate the filing. It takes months; filing your own mark before the first meeting takes weeks.

**The table it must carry.** Route (opposition, invalidation, negotiation, new mark), deadline, evidence needed, typical time.

**Leads (verify, cite primary).** Trademark Law Art. 15 (npc.gov.cn); CNIPA procedures. Interlink with 46A (trademark first) when live.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/branding-localisation`, `/compass`
**CTA.** Compass shortlist.

## P25 · PARTNER · EXPLAINER

**Title:** Choosing a supplements partner: blue hat or cross-border
**Query:** supplements distributor china · **Tags:** Distributors, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A supplement sold in general trade needs a health-food registration or filing (the blue hat) held by you or your partner; cross-border skips it but limits you to online. Decide the route first, because it decides whether you need a distributor or a TP.

**The table it must carry.** Route (registration, filing, cross-border), who holds it, time, cost range with source, channels open.

**The proprietary number.** TheChinaPath calculator data (supplements category). Interlink with 29A.

**Leads (verify, cite primary).** SAMR health food registration and filing rules.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P26 · PARTNER · EXPLAINER

**Title:** The first 90 days with a new Tmall Partner
**Query:** tmall partner onboarding · **Tags:** Managing a partner, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** In the first 90 days a Tmall Partner should hand you a store audit, a price and assortment plan, a campaign calendar and a weekly report you can read. If month two ends without them, the problem is the partner, not the platform.

**The table it must carry.** Week range, what the TP delivers, what the brand provides, sign it is on track.

**The proprietary number.** TheChinaPath Tmall Global calculator data (set-up timeline and cost).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
**CTA.** Compass shortlist.

## P27 · PARTNER · ANCHOR

**Title:** Supermarket fees in China: listing, barcode and end-caps
**Query:** china supermarket listing fee · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** Chinese retailers charge suppliers to get in and to stay visible: listing (进场费), barcode (条码费), end-cap (堆头费) and festival fees (年节费), plus promotion support. Your distributor usually pays them upfront and recovers them from you, so agree the budget and the proof before the first listing.

**The table it must carry.** Fee, what it buys, how it is charged, a sourced range (current, dated), who pays under a typical distribution deal.

**The proprietary number.** Compass: share of distributors on file that pre-fund listing fees. Fallback: log the gap.

**Leads (verify, cite primary).** Current retailer supplier terms; MOFCOM rules on retailer-supplier fees (零售商供应商公平交易管理办法). 2012 press figures only as history.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P28 · PARTNER · EXPLAINER

**Title:** Why brands leave Tmall Global, and what it says
**Query:** brands leaving tmall global · **Tags:** Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Brands leave Tmall Global when acquisition costs outrun basket value and when the partner model cannot move fast enough. Read each exit for the model behind it before deciding the platform failed.

**The table it must carry.** Brand, year, channel it moved to, stated reason, source.

**Leads (verify, cite primary).** Inditex banners exit 2026 (WWD); Urban Outfitters 2025 (BoF); company statements.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/tools/tmall-global-setup-and-run`, `/compass`
**CTA.** Compass shortlist.

## P29 · PARTNER · EXPLAINER

**Title:** Regional or national distributor: how coverage works
**Query:** regional distributor china · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** Most national coverage in China is a network of regional distributors under one contract. A regional specialist that already sells your category often beats a national name that sells everything, so map the sub-distributors before you sign.

**The table it must carry.** National vs regional vs network: reach, focus, price control, cost, fit.

**The proprietary number.** Compass: share of distributors on file covering one region vs several. Fallback: log the gap.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P30 · PARTNER · EXPLAINER

**Title:** When to take eCommerce back from your Tmall Partner
**Query:** take ecommerce in house china · **Tags:** Managing a partner, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Brands take operations back (收回运营权) when the store is large enough to staff and the know-how sits in their own team. Plan the move a year ahead, keep the partner on a transition contract, and never switch before a festival.

**The table it must carry.** Signal it is time, what to build in-house first, what to keep outsourced.

**Leads (verify, cite primary).** Brands' own announcements and dated Chinese business media (界面, 第一财经, 21世纪经济报道) on brands taking store operations in-house (收回运营权); no store operator's filings. Interlink with 34A.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/grow-in-china/cross-border-ecommerce`, `/compass`
**CTA.** Compass shortlist.

## P31 · PARTNER · EXPLAINER

**Title:** What a Tmall Partner costs: retainer, commission and extras
**Query:** tmall agency cost · **Tags:** Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A Tmall Partner usually charges a monthly retainer plus a commission on sales, and the extras (design, content, media management, warehousing) decide the real bill. Compare quotes on total cost at your expected sales, not on the retainer.

**The table it must carry.** Fee line (retainer, sales commission, performance bonus, setup, design and content, media management fee, warehousing and fulfillment), how it is usually charged, what to negotiate.

**The proprietary number.** TheChinaPath Tmall Global calculator (year-one partner cost at three sales levels, and the cash committed before the first order).

**Outline.**
1. How Tmall Partners charge
2. The table
3. What a year costs at three sales levels
4. What to negotiate, and what not to

**Leads (verify, cite primary).** Tmall Global service market (服务市场) public listings for fee models; Tmall Global partner program rules; dated Chinese business media on 代运营 fee models (界面, 36氪, 第一财经). No store operator's own filings or blog. Interlink with P04 (Douyin Partner cost) and P08 (TP contract terms).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P32 · PARTNER · ANCHOR

**Title:** Choosing a China partner for a beauty brand
**Query:** cosmetics distributor china · **Tags:** Distributors, Tmall Partners, Douyin Partners
**Word count:** 1,600 to 2,400

**The answer, in one line.** A beauty brand's partner choice starts with registration: general trade needs an NMPA filing and a domestic responsible person, cross-border does not. From there, a TP for search-led categories, a DP for demonstration-led ones, a distributor for department stores and Watsons-type chains.

**The table it must carry.** Route, registration, partner type, channels, cash, time.

**The proprietary number.** TheChinaPath calculator data (skincare, colour cosmetics). Interlink with 35A and 02L.

**Internal links.** all three guides, `/compass`
**CTA.** Compass shortlist.

## P33 · PARTNER · ANCHOR

**Title:** Choosing a food and drink importer in China
**Query:** food importer china · **Tags:** Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** An importer for food and drink must handle GACC registration of your factory, Chinese labelling that holds up in court, and the cold or dry chain your product needs. The label alone can cost ten times the price in damages, so check the importer's label review before its sales pitch.

**The table it must carry.** Check, why it matters, the rule, the red flag.

**Leads (verify, cite primary).** GACC Decree 248 (gov.cn); Food Safety Law Art. 148 (npc.gov.cn). Spring Chengdu fair hook.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P34 · PARTNER · EXPLAINER

**Title:** Selling to JD self-run and Hema through a distributor
**Query:** jd self operated supplier foreign brand · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** JD self-run, Tmall Supermarket and Hema buy stock like retailers, with a guaranteed margin, rebates and 45- to 60-day payment terms. An online distributor carries that cash gap and the buyer relationship; your job is to price the margin guarantee into the ladder.

**The table it must carry.** Term (毛保, 返利, 账期, promotion support), what it means, who carries it.

**Leads (verify, cite primary).** JD supplier terms; retailer annual reports. Practitioner posts as leads only.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P35 · PARTNER · EXPLAINER

**Title:** What Douyin creator commission really costs a brand
**Query:** douyin affiliate commission brand · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Creators on Douyin earn a commission on sales through the affiliate program (精选联盟), and head creators add a slot fee (坑位费). Your DP books them; you pay both, so ask for creator results on sales after returns and cost per kept order.

**The table it must carry.** Creator tier, commission range, slot fee, what it buys, source.

**The proprietary number.** TheChinaPath Douyin calculator data. Territory rule: transaction side only; seeding hands off to TheRedScroll.

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/tools/douyin-cost-calculator`, `/compass`
**CTA.** Compass shortlist.

## P36 · PARTNER · EXPLAINER

**Title:** Red flags in a Tmall or Douyin agency proposal
**Query:** tmall agency proposal red flags · **Tags:** Due diligence, Tmall Partners, Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Guaranteed GMV, commission on gross sales, ad spend routed through the agency's account and a team you never meet are the four lines that should stop a proposal. Each one moves risk from the agency to you.

**The table it must carry.** Line in the proposal, what it really means, what to ask for instead.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass/find-a-douyin-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P37 · PARTNER · EXPLAINER

**Title:** Choosing a mother and baby partner in China
**Query:** baby products distributor china · **Tags:** Distributors, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** Mother and baby is where registration and trust decide the partner: infant formula needs a SAMR recipe registration, and shoppers buy on safety proof. Pick the route (general trade or cross-border) by product, then the partner that already holds the category's retail and platform relationships.

**The table it must carry.** Product group, route, registration, partner type, channels.

**Leads (verify, cite primary).** SAMR infant formula registration rules. Interlink with 41A and 08L.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P38 · PARTNER · CASE NOTE

**Title:** China eCommerce agency scams, and the checks that stop them
**Query:** china ecommerce agency scam · **Tags:** Due diligence
**Word count:** 1,000 to 1,300

**The answer, in one line.** In November 2023 Shenzhen police broke up an operating-agency fraud ring, arresting more than 40 people. The pattern is the same every time: a large upfront fee, a guarantee and a company too young to have a record. Three checks catch it.

**The table it must carry.** Warning sign, how the scam uses it, the check.

**Leads (verify, cite primary).** 澎湃 (m.thepaper.cn/newsDetail_forward_27211721); Taobao service-market listing rules (RMB 50,000 deposit, six months' registration, three contracts; open.alitrip.com).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P39 · PARTNER · EXPLAINER

**Title:** The authorization letter: your lever over Tmall resellers
**Query:** tmall brand authorization letter · **Tags:** Contracts, Tmall Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** On Tmall a flagship store needs your exclusive authorization, a specialty store a first-level one, and a multi-brand store accepts up to four levels. Every letter you sign is a store you will have to police, so issue them sparingly and with an end date.

**The table it must carry.** Store type, authorization needed, levels allowed, control the brand keeps.

**Leads (verify, cite primary).** Tmall store-type entry rules; Nike ending Topsports' online authorization from Jan 1, 2027 (36氪, 36kr.com/p/3913410529219721).

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P40 · PARTNER · EXPLAINER

**Title:** Chinese-language contracts: chops, language, arbitration
**Query:** china distribution contract chinese language arbitration · **Tags:** Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Sign a bilingual contract that names the Chinese version as controlling, check the company chop against the licence, and choose arbitration your partner's assets can be reached by. A contract a Chinese court cannot read or enforce protects nobody.

**The table it must carry.** Choice (language, chop, signatory, governing law, CIETAC, HKIAC, courts), what to choose, why.

**Leads (verify, cite primary).** Civil Code contract provisions; CIETAC and HKIAC rules; the mainland-Hong Kong arbitration arrangement. Interlink with 25A.

**Internal links.** all three guides, `/compass`
**CTA.** Compass shortlist.

## P41 · PARTNER · EXPLAINER

**Title:** First orders, minimums and consignment in China
**Query:** minimum order chinese distributor · **Tags:** Distributors, Contracts
**Word count:** 1,300 to 1,800

**The answer, in one line.** Size the first order to a launch plan, attach annual minimums to any exclusivity, and use consignment only for a test. Courts enforce minimum-purchase clauses, so write the number you can live with.

**The table it must carry.** Structure (first order, annual minimum, take-or-pay, consignment), risk to each side, when it fits.

**Leads (verify, cite primary).** Minimum-purchase judgments on 裁判文书网 (a Japanese cosmetics case, RMB 48m annual minimum, reported by a law firm as lead).

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/distribution`, `/compass`
**CTA.** Compass shortlist.

## P42 · PARTNER · ASSET

**Title:** A China distributor scorecard beyond the sales target
**Query:** china distributor kpi · **Tags:** Managing a partner, Distributors
**Word count:** 1,000 to 1,400

**The answer, in one line.** Score a distributor quarterly on eight lines: sell-out, weeks of cover, store coverage, price discipline, payment days, marketing spend, reporting and team. Sales alone reward stock pushing.

**The table it must carry.** KPI, how to measure it, target band, weight.

**Asset.** Printable quarterly scorecard. Interlink with P11.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`
**CTA.** Compass shortlist.

## P43 · PARTNER · EXPLAINER

**Title:** Hong Kong as a base for selling into mainland China
**Query:** hong kong distributor china mainland · **Tags:** Distributors
**Word count:** 1,300 to 1,800

**The answer, in one line.** A Hong Kong entity is a clean overseas seller for cross-border and a practical place to hold stock and contracts, but it does not replace a mainland importer for general trade. Use it for what it does well.

**The table it must carry.** Use (cross-border seller, stock hub, contracting party, general trade), works from Hong Kong?, what else you need.

**Internal links.** `/compass/find-a-distributor-in-china`, `/enter-china/cross-border-setup`, `/compass`
**CTA.** Compass shortlist.

## P44 · PARTNER · ASSET

**Title:** The monthly report to demand from your China partner
**Query:** distributor sell out report template · **Tags:** Managing a partner
**Word count:** 1,000 to 1,400

**The answer, in one line.** One page a month: sell-out by channel, stock and weeks of cover, price checks, returns, ad spend and return, next month's plan. If a partner cannot produce it, it cannot manage your brand either.

**The table it must carry.** Line, source of the number, distributor / TP / DP variant.

**Asset.** Printable monthly report template.

**Internal links.** all three guides, `/compass`
**CTA.** Compass shortlist.

## P45 · PARTNER · ASSET

**Title:** How to brief a China partner search
**Query:** china distributor search brief · **Tags:** Due diligence
**Word count:** 1,000 to 1,400

**The answer, in one line.** A good partner brief fits on one page: category and price band, channels wanted, stage in China, registrations held, budget for the first year and what has been tried. It halves the time to a shortlist.

**The table it must carry.** Brief field, why a partner needs it, example answer.

**Asset.** Printable one-page brief that matches the `/compass/shortlist` form fields.

**Internal links.** `/compass/shortlist`, `/compass`, all three guides
**CTA.** Compass shortlist.

## P46 · PARTNER · EXPLAINER

**Title:** Livestream agency or Douyin Partner: who does what
**Query:** douyin livestream agency vs dp · **Tags:** Douyin Partners
**Word count:** 1,300 to 1,800

**The answer, in one line.** A livestream agency or MCN sells creator time and sessions; a Douyin Partner runs your shop, your own live room and your ad account as one P&L. Brands that hire the first expecting the second pay slot fees and keep nothing.

**The table it must carry.** Livestream agency vs DP: what they run, how paid, what you keep, when to use.

**The proprietary number.** TheChinaPath Douyin calculator data. Territory rule: transaction side only.

**Internal links.** `/compass/find-a-douyin-partner-in-china`, `/insights/china-livestream-cost-for-brands`, `/compass`
**CTA.** Compass shortlist.

## P47 · PARTNER · ANCHOR

**Title:** China distributor red flags from the Compass files
**Query:** china distributor red flags · **Tags:** Due diligence, Distributors
**Word count:** 1,600 to 2,400

**The answer, in one line.** The red flags that most often ended a distributor candidacy in the Compass files, ranked by how often they appeared, with the check that caught each one.

**The table it must carry.** Red flag, how often it appeared (Compass), the check, what it predicted.

**The proprietary number.** Compass snapshot required (share of candidates dropped by reason). If `sources/compass-stats.md` has no such breakdown on the draft date, set the row to `blocked` with the reason instead of drafting.

**Internal links.** `/compass/find-a-distributor-in-china`, `/compass`
**CTA.** Compass shortlist.

## P48 · PARTNER · ASSET

**Title:** Switching Tmall Partners: the handover checklist
**Query:** switch tmall partner · **Tags:** Managing a partner, Tmall Partners
**Word count:** 1,000 to 1,400

**The answer, in one line.** A clean TP switch moves the store, the accounts, the data, the content and the customer service history in one planned window outside a festival, with the old partner paid through the handover.

**The table it must carry.** Item, owner before, owner after, deadline, check.

**Asset.** Printable handover checklist. Interlink with P08 and P05.

**Internal links.** `/compass/find-a-tmall-partner-in-china`, `/compass`
**CTA.** Compass shortlist.

## P49 · PARTNER · ASSET

**Title:** China partner glossary: 40 terms from 代运营 to 窜货
**Query:** china ecommerce partner glossary · **Tags:** Due diligence
**Word count:** 1,000 to 1,400

**The answer, in one line.** The forty Chinese terms a brand hears when it hires a China partner, with the characters, the plain-English meaning and why each one matters to your contract.

**The table it must carry.** Term in characters, pinyin, meaning, why it matters. Characters are the subject here, so they stay.

**Asset.** Printable glossary.

**Internal links.** all three guides, `/compass`
**CTA.** Compass shortlist.

## P50 · PARTNER · ANCHOR + REPORT

**Title:** What fifteen years of partner meetings say about success
**Query:** china distribution partner success · **Tags:** Managing a partner
**Word count:** 1,600 to 2,400

**The answer, in one line.** The partnerships that lasted in the Compass files share a category fit, a named team, shared sell-out data and a contract with a way out. Report built on the Compass snapshot.

**The table it must carry.** Factor, share of lasting partnerships with it, share of failed ones.

**The proprietary number.** Compass snapshot required. Report copy to `output/reports/<slug>.md` with the gated-PDF marker. If the snapshot lacks the breakdown, set the row to `blocked`.

**Internal links.** all three guides, `/compass`
**CTA.** Compass shortlist.
