# Douyin cross-border (抖音全球购) deposit and tech service fee check, 2026-09-24

Unattended run. Trigger: the P05 flag (editorial/logs/partner/P05.md, line 39)
that Douyin cut base deposits to 500 / 2,000 / 5,000 RMB in 2025 and that
nobody had confirmed whether 抖音全球购 was included.

**Result: it was included, and the calculator was out of date on both inputs.**

- Deposit. Douyin's own 《【全球购】保证金管理规范》, latest revision effective
  2025-06-05, applies to every merchant selling cross-border imports on
  全球购 and sets the base deposit by last month's paid GMV: 500 RMB
  (0 to 50,000), 2,000 RMB (50,000 to 100,000), 5,000 RMB (above 100,000).
  Category no longer enters into it. The calculator carried 50,000 to
  200,000 RMB by category.
- Tech service fee. Douyin's 《【全球购】技术服务费费率标准》, dated
  2026-07-15, is a new schedule (base rate plus a supplement on orders from
  the 抖音商城 app and 豆包). Most calculator rows were off by 0.5 to 3 points.

Both figures were fetched twice (check 1 and check 2 below). The four
calculator files were updated identically. No build, no commit.
verified-sources.md, schedule.csv and the daily log were not touched.

Method: school.jinritemai.com returns an empty body to WebFetch, so each rule
page was rendered with Playwright (headless Chromium, generic desktop Chrome
user-agent, no cookies, no login, no personal identifier) and the rendered
text was saved to the session scratchpad. Check 2 re-rendered the same URLs
and diffed the rule text against check 1.

## Sources

| # | Claim | Chinese source | English gloss | Date | URL | Check 1 | Check 2 |
|---|---|---|---|---|---|---|---|
| S1 | 全球购 base deposit is set by last month's paid GMV, three tiers: GMV [0-5万] 500 RMB; (5-10万] 2,000 RMB; above 10万 5,000 RMB. Rule applies to 全球购 merchants selling cross-border imports (1.2). Experience deposit (体验保证金) is owed only when platform advances for after-sale or compensation exceed the lower of base deposit balance or amount due: 10x the base amount for high-refund-risk merchants or merchants in special categories, 2x for others (2.2.2). Base amount re-set monthly: notice on the 1st, update on the 8th (2.3.1). Deposit refundable after store closure (2.6.2). | 抖音电商 电商运营团队,《【全球购】保证金管理规范》, 2.2.1 / 2.2.2 / 2.3.1 / 2.6.2, 附则 3.1 | Douyin E-commerce, Douyin Global Deposit Management Rules | posted 2025-06-05 16:03:50; first effective 2021-12-30, latest revision effective 2025-06-05 | https://school.jinritemai.com/doudian/web/articlev0/107821 | PASS 2026-09-24 (rendered; table 上个自然月支付GMV / 500 / 2000 / 5000 read; 本规则适用于抖音电商全球购平台内经营跨境进口商品的商家 present) | PASS 2026-09-24 (re-rendered; chapter 1 to 3 text identical to check 1 by diff; 于2025年6月5日最新修订生效 present) |
| S2 | 全球购 tech service fee = base rate + channel supplement (if any). Base rates used for the calculator: 粮油干货/方便速食 食用油 2%, 五谷杂粮 2%, 调味品 (鱼露, 蚝油, 橄榄油) 2%, other 调味品 3%, other 二级 3%; 水饮冲调 3%; 休闲食品 3%; 营养保健/特医食品 4%; 传统滋补 4%; 酒类 3%; 彩妆香水 5%; 个人护理: 面部洗护 5%, 眼部护理 5%, 唇部护理 5%, 洗护美用具 脱毛工具 / 面部按摩工具 5%, 剃须刀配件 3%, other 洗护美用具 6%, 身体护理 3% to 3.5%, other 二级 3.5%; 家清纸品 家务工具 6%, other 3.5%; 电器: 大家电 4%, 冷藏电器 4%, other 二级 3%, 个护健康电器 3% to 6% (电动牙刷 3.5, 电吹风 / 按摩器 4, 剃须刀 3, other 6); 3C数码及配件: 二手 subcategories 6%, other 二级 3%; 服装 6%; 鞋靴 6%; 箱包 6%; 时尚饰品 6%; 钟表眼镜 6%; 户外装备 6%; 运动休闲用品 6%; 居家日用 6% (香薰产品 3.5%); 餐饮厨具 6%; 母婴用品 other 二级 3% (婴童床品 6%, most 出行用品 6%); 玩具 mostly 6% (早教机 3%, 自行车/三轮车 3%); 宠物生活 狗食品 / 猫食品 3.5%, other 6%. | 抖音电商 电商运营团队,《【全球购】技术服务费费率标准》, 说明1 / 说明2 and the rate table | Douyin E-commerce, Douyin Global Technical Service Fee Rate Schedule | posted 2026-07-15 00:00:27 | https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn | PASS 2026-09-24 (rendered; 146-row table extracted and read row by row) | PASS 2026-09-24 (re-rendered; text from 说明1 to the end of the table identical to check 1 by diff) |
| S3 | Channel supplement applies to orders from the 抖音商城 app and 豆包 only (the scope may change); the settlement statement shows which orders qualify. 专营店 and 专卖店 pay higher base rates on orders from other channels in listed categories (钟表眼镜 / 鞋靴 / 箱包 / 服装 6.5%, 彩妆香水 5.5%, several 个人护理 lines 3.5% to 6.5%). Deposit governed by 《【全球购】保证金管理规范》 (5.1). Open cross-border 一级类目 list (3.1) has no separate 茶, 奶粉 or 手机 entry. | 抖音电商,《【全球购】招商管理规则》, 3.1, 5.1, 5.2.1, 5.2.2, 8.3 | Douyin E-commerce, Douyin Global Merchant Recruitment Rules | first effective 2021-02-19, latest revision effective 2026-07-15 | https://school.jinritemai.com/doudian/web/article/108056 | PASS 2026-09-24 (rendered) | PASS 2026-09-24 (re-rendered; 于2026年7月15日最新修订生效 and 特定渠道范围包括抖音商城app、豆包 present) |
| S4 | Douyin's June 2025 deposit reform: base deposit cut to 500 / 2,000 / 5,000 RMB with last month's GMV of 50,000 and 100,000 RMB as the thresholds, down about 75% on average; 0-RMB entry opened to new merchants; excess deposit withdrawable weekly. | 证券时报网 (STCN), 王焕城,《抖音电商全面开放新商家0元入驻，大幅降低保证金门槛》 | Securities Times: Douyin opens zero-deposit entry to all new merchants and cuts deposit thresholds | 2025-06-12 12:55 | https://www.stcn.com/article/detail/1975040.html | PASS 2026-09-24 (WebFetch; date, byline and tiers read) | PASS 2026-09-24 (re-fetched with curl; 500元、2000元、5000元, 75%, 王焕城, 2025-06-12 12:55 present) |
| S5 | Taxonomy aid only, no figure taken: in Douyin's current category tree the 食品饮料 大类 holds three 一级类目 (粮油干货/方便速食, 水饮冲调, 休闲食品); 母婴用品 and 3C数码及配件 list 手机, 奶粉 nowhere separately. | 抖音电商,《2026基础技术服务费费率标准》 (domestic stores) | Douyin E-commerce, 2026 base tech service fee schedule | posted 2026-07-15 00:00:14 | https://school.jinritemai.com/doudian/web/articlev0/aHijyoJA6hvb | PASS 2026-09-24 (rendered) | PASS 2026-09-24 (re-rendered; same 食品饮料 rows, same date) |

Seen, not used:

- 抖音电商管家 pinned post on the 《【全球购】保证金规则体系》 topic, dated
  2025-05-06 (https://school.jinritemai.com/doudian/web/topic/qHrNhnb2awJJ):
  the old category deposit table (10万 RMB in most categories, 30万 for infant
  formula and 二手, 80万 for bird's nest, 2x when the brand paperwork is a
  purchase voucher). Superseded by the 2025-06-05 revision of S1. It also
  shows the calculator's old 50,000 / 75,000 figures matched no Douyin table
  in force in 2025; their origin is unknown.
- Sina Tech 2025-06-14 (A5创业网 repost) and 智东西 2026-08-11 on 豆包 fees:
  no 全球购 content, not needed.
- Agency and 代运营 pages in search results (Sohu, Zhihu, AMZ123, TT123,
  xiaoduoai, TMO Group and similar): not opened as sources, per the brief.

## Before and after, per calculator category

Rule used for the fee: where the label maps to one rate in S2, that rate;
where the label spans rows with different rates, the midpoint of the range,
rounded to 0.5. Base rate, flagship store, orders outside the 抖音商城 app and
豆包. Deposit: every row now carries 5,000 RMB, the top base tier, which any
brand above 100,000 RMB of monthly GMV pays (the calculator's default
5,000,000 RMB a year is about 417,000 a month).

| Category (value) | Deposit before | Deposit after | Fee before | Fee after | S2 row(s) behind the fee |
|---|---|---|---|---|---|
| food-packaged | 50,000 | 5,000 | 4 | 2.5 | 粮油干货/方便速食: oil, grains, three sauces 2%; rest 3%. Midpoint |
| snacks | 50,000 | 5,000 | 5 | 3 | 休闲食品 3% |
| drinks | 50,000 | 5,000 | 5 | 3 | 水饮冲调 3% |
| tea | 50,000 | 5,000 | 2 | 3 | 水饮冲调 3%. INFERENCE: tea has no own row; the current tree (S5) has only three 一级类目 under 食品饮料, so tea sits in 水饮冲调. Not stated verbatim |
| supplements | 50,000 | 5,000 | 4 | 4 | 营养保健/特医食品 4% (unchanged) |
| tonics | 200,000 | 5,000 | 5 | 4 | 传统滋补 4% |
| alcohol | 100,000 | 5,000 | 5 | 3 | 酒类 3% |
| skincare | 100,000 | 5,000 | 5 | 5 | 个人护理 面部洗护 / 眼部护理 / 唇部护理 5% (unchanged) |
| makeup | 100,000 | 5,000 | 5 | 5 | 彩妆香水 5% (unchanged) |
| beauty-device | 100,000 | 5,000 | 4 | 4.5 | 个护健康电器 3% to 6%. Midpoint |
| personal-care | 50,000 | 5,000 | 4 | 3.5 | 个人护理 other 二级 3.5% (bulk of the category; face, eye, lip care sit in the skincare row) |
| home | 50,000 | 5,000 | 3 | 6 | 居家日用 6%, 餐饮厨具 6% |
| appliances | 75,000 | 5,000 | 4 | 3 | 电器 other 二级 3% |
| 3c | 50,000 | 5,000 | 4 | 3 | 3C数码及配件 other 二级 3% |
| phones | 100,000 | 5,000 | 2.5 | 3 | 3C数码及配件 other 二级 3% (phones have no own row; only 二手手机 is listed, at 6%) |
| apparel | 100,000 | 5,000 | 5 | 6 | 服装 6% |
| footwear | 100,000 | 5,000 | 5 | 6 | 鞋靴 6% |
| bags | 100,000 | 5,000 | 5 | 6 | 箱包 6%, 时尚饰品 6% |
| jewellery | 100,000 | 5,000 | 5.5 | 6 | 时尚饰品 6% |
| sports | 75,000 | 5,000 | 5 | 6 | 户外装备 6%, 运动休闲用品 6% |
| infant-formula | 100,000 | 5,000 | 4 | 3 | 母婴用品 other 二级 3%. INFERENCE: formula has no own row. Special medical formula could fall under 营养保健/特医食品 at 4% |
| baby | 50,000 | 5,000 | 5 | 4.5 | 母婴用品 3% to 6%, 玩具 mostly 6%. Midpoint |
| pet | 50,000 | 5,000 | 5 | 5 | 狗食品 / 猫食品 3.5%, other 宠物生活 6%. Midpoint 4.75 rounds to 5 (unchanged) |
| custom | blank | blank | blank | blank | unchanged |

Field defaults changed to match the default category (food-packaged):
platformDeposit 50000 to 5000, techFee 4 to 2.5.

Not modelled, stated here so nobody reads the calculator as covering them:

- Experience deposit (S1, 2.2.2): 2x or 10x the base amount (10,000 or
  50,000 RMB at the top tier), owed only after Douyin has advanced refunds
  beyond the base deposit. Now mentioned in the platformDeposit help text.
- Channel supplement (S3): extra 2.1% to 5.2% on orders from the 抖音商城 app
  and 豆包 (for example 3% base + 3.9% on 休闲食品, 6% + 4% on 服装).
- 专营店 / 专卖店 off-channel rates (S3), 0.5 point above flagship in the
  listed fashion and beauty lines.
- 0-RMB trial entry: S4 reports it for new merchants platform-wide; S1 does
  not mention it for 全球购, so the calculator does not assume it.

## Files changed (identical data in all four)

- src/pages/tools/douyin-cost-calculator.astro
- src/pages/fr/outils/calculateur-de-couts-douyin.astro
- src/pages/de/rechner/douyin-kostenrechner.astro
- src/pages/es/herramientas/calculadora-de-costes-douyin.astro

In each: the code comment above `categories` (now names both rule pages and
their dates, and points to this log), the 23 category rows (deposit and fee),
the platformDeposit and techFee defaults, and five copy strings that said the
deposit moves with category: the Category group note, the category,
platformDeposit and techFee help texts, the platformDeposit hint and the
category line in `notes`. The help texts now carry the "as of" dates (June
2025 for the deposit, July 15, 2026 for the fee schedule). Category labels
were not changed. No em dashes added; FR uses U+202F before `:` and `%` and
as thousands separator, DE and ES use `.` for thousands.

## Articles whose figures came from the old calculator rows and now disagree

Not edited. "Now" = the calculator after this run. FR, DE and ES versions of
the published pieces (src/content/insights-fr, -de, -es) carry the same
figures and will need the same fix.

| File | Line(s) | Printed | Calculator now |
|---|---|---|---|
| src/content/insights/cost-to-sell-dairy-and-spreads-in-china.md (and editorial/output copy, lines 4, 21, 22, 33, 68) | 3, 12, 22, 41 | Douyin deposit / cash before first sale 50,000 RMB | 5,000 RMB |
| same | 43 | Douyin commission 4% | 2.5% |
| same | 13, 53 | "Douyin asks half the deposit it asks of apparel and beauty"; "50,000 RMB from a food store and 100,000 RMB from an apparel or beauty store" | same 5,000 RMB for every category |
| src/content/insights/cost-to-sell-facial-skincare-in-china.md (and output copy, lines 4, 16, 28, 246, 394) | 3, 12, 22, 36 | Douyin deposit / cash before first sale 100,000 RMB | 5,000 RMB (commission 5% unchanged) |
| same | 232 | "Largest deposit" for Douyin | smallest of the three now |
| src/content/insights/cost-to-sell-footwear-in-china.md (and output copy, lines 4, 19, 31, 340) | 3, 12, 22, 37 | Douyin deposit / cash before first sale 100,000 RMB | 5,000 RMB |
| same | 3, 39 | Douyin commission 5%; "All three take 5%" | 6% |
| src/content/insights/how-on-running-entered-china.md (and output copy, lines 187, 449) | 169 to 170 | Douyin sports deposit 75,000 RMB | 5,000 RMB |
| editorial/output/change-domestic-responsible-person-china-cosmetics.md | 199, 291 | Douyin cross-border 100,000 RMB | 5,000 RMB |
| editorial/output/tmall-partner-store-ownership.md | 173 | Douyin shop "Category deposit, set by Douyin" | deposit is tiered on monthly GMV, not category |
| editorial/output/douyin-agency-cost.md | 165 to 166, 412 | year-one cash RMB 3,407,000, of which 450,000 refundable (5m GMV, default category) | about RMB 3,287,000, of which 405,000 refundable (deposit -45,000; tech fee 2.5% instead of 4% on 5m = -75,000) |
| editorial/output/douyin-return-rate.md | 18, 48 to 53, 172 to 174, 185, 365 to 366 | per kept order 171.16 / 237.64 / 338.70 (444.35 at 61.5%, 869.25 at 80%); running cash 1,300,800 / 1,330,800 / 1,354,800; per placed 162.60 / 166.35 / 169.35; "RMB 339, about US$48" | tech fee 2.5% on 2m GMV cuts running cash by 30,000: 1,270,800 / 1,300,800 / 1,324,800; per placed 158.85 / 162.60 / 165.60; per kept 167.21 / 232.29 / 331.20 (434.61 at 61.5%, 850.50 at 80%); RMB 331, about US$47. Net-view figures in the same piece move too; rerun |
| same | 188 to 189 | "packaged food, with a 4% platform fee. Apparel pays 5% ... adds RMB 2.50 to every order placed" | packaged food 2.5%, apparel 6%: RMB 8.75 per placed order |
| src/content/insights/china-livestream-cost-for-brands.md | 44, 132 | platform fee allowance at 4%: 6,680 / 3,320 / 12,000; totals 116,740 / 74,460 / 211,000 | at 2.5%: 4,175 / 2,075 / 7,500; totals 114,235 / 73,215 / 206,500 (per-unit figures in brackets move too; rerun) |

Ledger entries in editorial/sources/verified-sources.md that carry the old
Douyin rows (not edited, for the owner of that file): "Footwear category fee
data and the cash floor it produces" (line 64), "Proprietary calculator
marketing-cost scenarios and category allowance" (368), "Facial skincare
category fee data" (380), "Dairy and spreads category fee data" (667), the
"Sports and outdoor category fee data" (932), the re-verification note at 1126, "Douyin Partner
fee inputs and a worked year at RMB 5 million" (1337), "Douyin return rate and
cost per kept order at calculator defaults" (2238). P05.md R12 (line 25) also
counts the old deposit spread.

## New verified-sources entries

### Douyin Global (抖音全球购) base deposit: 500 / 2,000 / 5,000 RMB by last month's GMV
- Value: base deposit (基础保证金) set by last calendar month's paid GMV: 500 RMB at 0 to 50,000 RMB, 2,000 RMB above 50,000 to 100,000, 5,000 RMB above 100,000; same for every category; re-set monthly (notice on the 1st, new amount on the 8th); refundable after the store closes
- As of: June 2025 (latest revision effective 2025-06-05; first effective 2021-12-30)
- Source: Douyin E-commerce (抖音电商), 《【全球购】保证金管理规范》, 2.2.1, 2.3.1, 2.6.2
- URL: https://school.jinritemai.com/doudian/web/articlev0/107821
- Verified 1: 2026-09-24 (rendered with headless Chromium via Playwright; WebFetch returns an empty body; tier table and scope clause 1.2 read)
- Verified 2: 2026-09-24 (re-rendered; rule text identical to check 1 by diff)
- Used in: douyin-cost-calculator (src/pages/tools/douyin-cost-calculator.astro and the FR, DE, ES versions)
- Notes: scope clause 1.2 names 全球购 merchants selling cross-border imports, which settles the P05 flag. Replaces the category table (10万 RMB and up) pinned on 2025-05-06 in the 【全球购】保证金规则体系 topic. The rule does not mention 0-RMB entry for 全球购; do not claim it for cross-border stores.

### Douyin Global experience deposit: 2x or 10x the base amount, only after platform advances
- Value: experience deposit (体验保证金) owed only when Douyin's advances for after-sale refunds or compensation exceed the lower of the base deposit balance or the amount due; 10x the base amount for high-refund-risk merchants or merchants with special-category goods (listed, or ordered in the last 30 days), 2x for others; can be lowered after 90 or 30 days without shortfall
- As of: June 2025 (latest revision effective 2025-06-05)
- Source: Douyin E-commerce (抖音电商), 《【全球购】保证金管理规范》, 2.2.2, 2.3.2
- URL: https://school.jinritemai.com/doudian/web/articlev0/107821
- Verified 1: 2026-09-24 (rendered with headless Chromium)
- Verified 2: 2026-09-24 (re-rendered; identical)
- Used in: douyin-cost-calculator (help text only; not modelled)
- Notes: the rule does not list which categories count as special. At the 5,000 RMB top tier the experience deposit is 10,000 or 50,000 RMB.

### Douyin Global tech service fee by category, July 2026 schedule
- Value: order fee = base rate + channel supplement (if any). Base rates, flagship store: grain, cooking oil and three named sauces 2%; other 粮油干货/方便速食, 水饮冲调, 休闲食品, 酒类 3%; 营养保健/特医食品 and 传统滋补 4%; 彩妆香水 and 面部洗护 / 眼部 / 唇部护理 5%; other 个人护理 3.5%; 服装, 鞋靴, 箱包, 时尚饰品, 钟表眼镜, 户外装备, 运动休闲用品, 居家日用, 餐饮厨具 6%; 电器 and 3C数码及配件 other lines 3% (二手 lines 6%); 母婴用品 other lines 3%; 狗食品 / 猫食品 3.5%, other pet 6%
- As of: July 2026 (schedule posted 2026-07-15 00:00:27)
- Source: Douyin E-commerce (抖音电商), 《【全球购】技术服务费费率标准》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn
- Verified 1: 2026-09-24 (rendered with headless Chromium; 146-row table extracted)
- Verified 2: 2026-09-24 (re-rendered; text identical to check 1 by diff)
- Used in: douyin-cost-calculator
- Notes: tea, infant formula and phones have no row of their own; they fall under 水饮冲调 (3%), 母婴用品 other (3%) and 3C数码及配件 other (3%) by inference from the category tree, not by a verbatim line. Special medical formula may sit under 营养保健/特医食品 (4%). Fee base: consumer paid amount including shipping + host coupons + platform coupons (merchant coupons excluded), per 《【全球购】招商管理规则》 5.2.1.

### Douyin Global channel supplement and specialty-store rates
- Value: a supplementary tech service fee applies on orders from the 抖音商城 app and 豆包 only (for example 3.9% on top of a 3% base, 4% on top of 6%, 5.2% on top of 4%); 专营店 and 专卖店 pay 6.5% on 钟表眼镜, 鞋靴, 箱包, 服装 and 5.5% on 彩妆香水 for orders outside those two channels
- As of: July 2026 (rules revision effective 2026-07-15)
- Source: Douyin E-commerce (抖音电商), 《【全球购】招商管理规则》 5.2.2, with the rates in 《【全球购】技术服务费费率标准》
- URL: https://school.jinritemai.com/doudian/web/article/108056
- Verified 1: 2026-09-24 (rendered with headless Chromium)
- Verified 2: 2026-09-24 (re-rendered; 特定渠道范围包括抖音商城app、豆包 and the 2026-07-15 effective date present)
- Used in: none yet (logged for the calculator owner)
- Notes: the channel list "may change with platform service"; whether an order is a channel order is shown on the settlement statement. The calculator models base rates only.

### Douyin's June 2025 deposit cut, as reported
- Value: base deposit cut to 500 / 2,000 / 5,000 RMB, thresholds at last month's GMV of 50,000 and 100,000 RMB, average cut about 75%; 0-RMB entry for new merchants; excess deposit withdrawable weekly
- As of: June 2025 (article 2025-06-12 12:55)
- Source: Securities Times (证券时报网, STCN), 王焕城
- URL: https://www.stcn.com/article/detail/1975040.html
- Verified 1: 2026-09-24 (fetched; date, byline and tiers read)
- Verified 2: 2026-09-24 (re-fetched; strings present)
- Used in: none yet
- Notes: confirmation only, per ledger rule 3; the article does not mention 全球购 or cross-border. Cite S1 for the cross-border deposit. The http:// URL returns a 302; cite https.

### Calculator category fee data, Douyin rows re-set 2026-09-24 (proprietary)
- Value: Douyin cross-border deposit 5,000 RMB in every category (was 50,000 to 200,000); tech fee by category as in the table in editorial/logs/partner/douyin-deposits-2026-09-24.md (packaged food 2.5, snacks 3, drinks 3, tea 3, supplements 4, tonics 4, alcohol 3, skincare 5, makeup 5, beauty devices 4.5, personal care 3.5, home 6, small appliances 3, 3C 3, phones 3, apparel 6, footwear 6, bags 6, fashion jewellery 6, sports 6, infant formula 3, baby and toys 4.5, pet 5)
- As of: September 2026 (deposit rule June 2025, fee schedule July 2026)
- Source: TheChinaPath calculator data (src/pages/tools/douyin-cost-calculator.astro, `categories`)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (rows written from the two Douyin rule pages above)
- Verified 2: 2026-09-24 (rule pages re-rendered and the rows re-read against them)
- Used in: none yet
- Notes: supersedes every earlier Douyin row in this ledger (footwear, facial skincare, dairy and spreads, sports, livestream allowance, P04 worked year, P14 return-rate defaults). Cash before the first sale on Douyin cross-border is now 5,000 RMB for any brand above 100,000 RMB a month (500 RMB in a first month under 50,000). Fees are base rates, flagship store, main-app orders; midpoints where a label spans rates.
