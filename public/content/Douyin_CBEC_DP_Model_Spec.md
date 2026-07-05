# Cross-Border Douyin Channel Cost Model (DP-operated) — Implementation Spec

**For:** Claude Code / any engineer re-implementing the model
**Companion file:** `Douyin_CBEC_OnePager.xlsx`
**Business context:** Cost to set up and run a Douyin channel for an overseas brand entering China. Cross-border (CBEC) only. Douyin only. Operated through a **DP (Distributor Partner)** who runs the channel end-to-end (livestream + KOL + Qianchuan + store ops) and charges them a **monthly retainer + GMV commission**.

The model is category- and product-agnostic — the only two inputs that vary by product category are the platform deposit (row B14) and the tech service fee (row B15). Section 8 lists both by category.

---

## 1. Model at a glance

Single-sheet, single-page (landscape A4) Excel model. Three visual zones:

```
┌────────────────────────────────┬────────────────────────────────────────────┐
│  1. INPUTS                     │  2. COST STACK                             │
│  (26 blue cells, left column)  │  (Scenario A vs Scenario B, right column)  │
│                                │                                            │
├────────────────────────────────┴────────────────────────────────────────────┤
│  3. CHANNEL ECONOMICS                                                       │
│  (Gross margin input + KPIs)                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  4. KEY NOTES (source citations, sanity checks)                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

The model computes two scenarios in parallel: **Scenario A** = conservative ROAS 1.5×, **Scenario B** = optimistic ROAS 3.0×. Everything except paid-media spend and its ad-buying fee is identical between the two.

---

## 2. Inputs — full list with defaults and sources

All inputs sit in column B. Cells with **yellow fill** = key assumptions (change these first when stress-testing). Cells with cream fill = standard inputs.

### 2.1 Channel scale
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I1 | Target Year 1 GMV | 2,000,000 | RMB | Planning target |
| I2 | Average order value (AOV) | 100 | RMB | Douyin food AOV RMB 80–150 |
| I3 | Implied orders/year | `=I1/I2` | — | Formula |

### 2.2 FX & tax
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I4 | USD/RMB | 7.10 | RMB/USD | May 2026 indicative |
| I5 | VAT on China services | 6% | % | Standard rate |
| I6 | CBEC comprehensive tax (product-specific) | 11.2% | % | 13% VAT × 70%, no consumption tax on most food |

### 2.3 Platform & agent
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I7 | Douyin 全球购 platform deposit (refundable) | 50,000 | RMB | Food/health flagship; RMB 500 under Feb 2025 reform tier |
| I8 | Tech service fee (CBEC food/health) | 4% | % | TMO Group — 3–6% range, health food = 4% |
| I9 | Mainland 境内代理人 annual fee | 60,000 | RMB | Chinese law firms; RMB 30–120K/yr |
| I10 | CN trademark registration (one-time) | 8,000 | RMB | Class 30 |
| I11 | Brand setup contribution (store + launch content) | 80,000 | RMB | Banner, listing, hero shoot |

### 2.4 DP fee structure — **KEY**
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I12 | **DP monthly retainer** | **80,000** | RMB/mo | International-brand tier RMB 60–100K/mo. Refs: 北京金穗 ¥100K/mo; Kaisi Data — commission capped near 10% |
| I13 | **DP GMV commission** | **6%** | % | Intl-brand tier 5–8%; capped ~10% by industry |
| I14 | Optional campaign co-fund | 60,000 | RMB/yr | Joint fund for Double 11, brand launches, beyond DP ops |

### 2.5 KOL / influencer (commission-only, billed **separately** from DP)
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I15 | Share of GMV via KOL livestream/video | 60% | % | Typical for content-led food launches |
| I16 | KOL commission % | 12% | % | Agricultural-product blended rate. 与辉同行/东方甄选 model 8–10%, mid-tier food 15–20% |

### 2.6 Bonded logistics
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I17 | Bonded warehouse deposit (refundable WC) | 100,000 | RMB | 卓志保税仓 reference contract |
| I18 | Bonded warehouse tax prepayment (WC) | 300,000 | RMB | 卓志保税仓 |
| I19 | Warehouse storage per unit per month | 0.80 | RMB | Per-unit approximation |
| I20 | Last-mile shipping per parcel | 11 | RMB | RMB 8–15 CBEC bonded range |
| I21 | Return rate | 5% | % | Food/CBEC benchmark |
| I22 | Return handling cost per parcel | 15 | RMB | |

### 2.7 Media — two ROAS scenarios
| # | Input | Default | Unit | Source |
|---|---|---:|---|---|
| I23 | Share of GMV driven by paid media | 40% | % | 30/70 paid-heavy at launch, matures to 70/30 |
| I24 | **Scenario A — Conservative ROAS** | **1.5×** | multiple | New brand months 1–6 |
| I25 | **Scenario B — Optimistic ROAS** | **3.0×** | multiple | Months 7–12+ once algorithm warms |
| I26 | Ad-buying service fee | 15% | % of media spend | If DP outsources Qianchuan buying (they usually do) |

**Critical rule:** paid media (千川) is paid **directly by the brand** into the Qianchuan account. It is **not** billed through DP commission. Source: Kaisi/Yilantop — "DPs unable to advance Qianchuan spend" is a leading small-DP failure mode.

---

## 3. Cost stack — formulas

All costs are computed twice (columns E = Scenario A, F = Scenario B). Only two lines differ between scenarios: paid media and its ad-buying fee.

### 3.1 Setup (one-time, Year 1)
```
SetupTotal =  I7   (platform deposit, refundable)
            + I17  (bonded warehouse deposit, refundable WC)
            + I18  (bonded warehouse tax prepayment, refundable WC)
            + I10  (trademark, sunk)
            + I11  (brand setup contribution, sunk)
```
Also derived:
- `Refundable = I7 + I17 + I18`
- `NetSunkSetup = SetupTotal − Refundable`

### 3.2 Operating (annual, Year 1) — order matters for the VAT line
```
1. AgentAnnual         = I9
2. DPRetainerAnnual    = I12 * 12
3. DPCommissionAnnual  = I13 * I1
4. CampaignCoFund      = I14
5. PaidMediaA          = I1 * I23 / I24         ← Scenario A: GMV × paid share / ROAS_A
5. PaidMediaB          = I1 * I23 / I25         ← Scenario B: GMV × paid share / ROAS_B
6. AdBuyingFeeA        = PaidMediaA * I26
6. AdBuyingFeeB        = PaidMediaB * I26
7. KOLCommission       = I1 * I15 * I16
8. PlatformTechFee     = I1 * I8
9. WHStorage           = (I1 / I2) * I19 * 2    ← Orders × storage × 2 months avg dwell
10. Shipping           = (I1 / I2) * I20
11. Returns            = (I1 / I2) * I21 * I22
12. CBECImportTax      = I1 * I6                ← 11.2% on retail value
13. VATonServicesA     = (AgentAnnual + DPRetainerAnnual + DPCommissionAnnual
                          + CampaignCoFund + PlatformTechFee + AdBuyingFeeA) * I5
13. VATonServicesB     = same as A but with AdBuyingFeeB

OperatingTotal_A = sum of lines 1–13 (A variants)
OperatingTotal_B = sum of lines 1–13 (B variants)

TotalYear1_A = SetupTotal + OperatingTotal_A
TotalYear1_B = SetupTotal + OperatingTotal_B

NetSunkYear1_A = TotalYear1_A − Refundable
NetSunkYear1_B = TotalYear1_B − Refundable

TotalYear1_USD_A = TotalYear1_A / I4
TotalYear1_USD_B = TotalYear1_B / I4
```

**VAT scope** (line 13): applies to all China-based service fees. Does **not** apply to media spend itself, KOL commissions to overseas talent agencies, or logistics fees (those carry their own tax treatment).

**CBEC import tax** (line 12): applies to GMV (i.e., retail value crossing the bonded border). Products without consumption tax (most food, home goods, apparel) qualify for VAT-only treatment: 13% VAT × 70% = 11.2% comprehensive tax. Products with consumption tax (cosmetics 15%, alcohol variable) pay more. Cap: RMB 5,000/order and RMB 26,000/consumer/year.

---

## 4. Channel economics — the gross-margin block

The bottom of the sheet expects the user to fill in a single input:

- **`GrossMargin` (blue cell, blank by default, shows "fill in")**

Once populated, the model returns:

```
GrossProfitYear1     = I1 * GrossMargin                    (only if GrossMargin filled in)
Contribution_A       = GrossProfitYear1 − TotalYear1_A
Contribution_B       = GrossProfitYear1 − TotalYear1_B

TotalCostPctGMV_A    = TotalYear1_A / I1
TotalCostPctGMV_B    = TotalYear1_B / I1
OpCostPctGMV_A       = OperatingTotal_A / I1
OpCostPctGMV_B       = OperatingTotal_B / I1

CostPerOrder_A       = TotalYear1_A / (I1 / I2)
CostPerOrder_B       = TotalYear1_B / (I1 / I2)

BreakevenGMV_A       = IF( GrossMargin − OpCostPctGMV_A ≤ 0, "GM too low",
                          SetupTotal / (GrossMargin − OpCostPctGMV_A) )
BreakevenGMV_B       = analogous with OpCostPctGMV_B
```

**Breakeven interpretation:** SetupTotal is fixed. Operating costs scale ~linearly with GMV. To cover all costs from gross profit, GMV must reach the point where `GrossMargin × GMV = SetupTotal + OpCostPctGMV × GMV`, i.e., `GMV = SetupTotal / (GrossMargin − OpCostPctGMV)`. If GrossMargin ≤ OpCostPctGMV, no GMV can save the model — the "GM too low" message tells the user their margin must rise before scale can help.

---

## 5. Cell locations in the current workbook

For anyone editing the existing `.xlsx` in place (without re-generating from Python), the key rows are:

| Element | Row |
|---|---:|
| GMV input | B6 |
| AOV input | B7 |
| FX | B10 |
| VAT rate | B11 |
| CBEC tax rate | B12 |
| Platform deposit | B14 |
| Tech service fee | B15 |
| Mainland agent | B16 |
| Trademark | B17 |
| Brand setup contribution | B18 |
| **DP monthly retainer** | **B20** |
| **DP GMV commission** | **B21** |
| Optional campaign co-fund | B22 |
| KOL share of GMV | B24 |
| KOL commission % | B25 |
| Bonded WH deposit | B27 |
| Bonded WH tax prepay | B28 |
| Warehouse storage | B29 |
| Shipping/parcel | B30 |
| Return rate | B31 |
| Return cost/parcel | B32 |
| Paid share of GMV | B34 |
| ROAS Scenario A | B35 |
| ROAS Scenario B | B36 |
| Ad-buying fee | B37 |
| **Gross Margin (fill in)** | **B42** |

Cost stack subtotals (columns E / F):
- Setup subtotal: E12 / F12
- Operating subtotal: E28 / F28
- Total Year 1 RMB: E29 / F29
- Refundable: E30 / F30
- Net sunk: E31 / F31
- Total Year 1 USD: E32 / F32

---

## 6. Sanity checks — what the numbers should look like

At default inputs (GMV = RMB 2M), the model should return:

| Metric | Scenario A | Scenario B |
|---|---:|---:|
| Setup total | ¥538,000 | ¥538,000 |
| Operating total | ¥2,609,933 | ¥2,300,867 |
| **Total Year 1 (RMB)** | **¥3,147,933** | **¥2,838,867** |
| Total Year 1 (USD @ 7.10) | $443,371 | $399,840 |
| Refundable | ¥450,000 | ¥450,000 |
| Net sunk | ¥2,697,933 | ¥2,388,867 |
| Total cost % of GMV | 157% | 142% |
| Operating cost % of GMV | 130% | 115% |

If these numbers don't match after a rebuild, check:
1. `DP retainer × 12 = 960,000` (biggest single line)
2. `DP commission = 6% × 2M = 120,000`
3. VAT includes DP retainer + DP commission (adds ~¥65K vs a naive VAT calc)
4. Paid media diverges only between A and B: `2M × 40% / 1.5 = 533,333` vs `2M × 40% / 3.0 = 266,667`

---

## 7. Extension points (if extending later)

**a. Tiered DP commission.** Replace `I13` with a tiered formula on GMV:
```
DPCommissionAnnual = MIN(I1, 500K) × 3%
                   + MAX(0, MIN(I1, 3M) − 500K) × 5%
                   + MAX(0, I1 − 3M) × 7%
```

**b. Multi-year view.** Duplicate the operating cost stack for Years 2 and 3 with:
- Setup one-time in Y1 only
- DP retainer holds
- DP commission scales with growing GMV
- Refundable capital stays parked (until exit)
- Add IRR/NPV rows if useful

**c. Sensitivity table.** Add a two-way data table pivoting on GrossMargin × Year 1 GMV, returning Contribution and coloured with conditional formatting. Excel `Data > What-If > Data Table` or an equivalent grid of formulas.

**d. Compare DP vs TP models.** Add a second scenario column set assuming a lighter-touch TP (RMB 40K/mo retainer + 10% commission, brand runs KOL directly) so the user can see the trade-off.

---

## 8. Douyin platform fees vary by product category — critical for accurate modelling

Two Douyin platform costs vary by product category:
1. **保证金 (deposit)** — refundable security deposit to open a store
2. **技术服务费 (tech service fee)** — % taken from each transaction

**Structural change (June 2025):** For **domestic 抖音小店**, the deposit is now GMV-tiered, no longer category-tiered. Categories still determine the tech service fee. For **CBEC 抖音全球购**, both deposit AND tech service fee still vary by category.

### 8.1 Domestic 抖音小店 — deposit (GMV-tiered, all categories)

| Prior-month store GMV | 保证金 (RMB) |
|---|---:|
| New merchant / < ¥50,000 | ¥0 trial (cap 200 orders or ¥10K GMV) or ¥500 |
| ¥50,000 – ¥100,000 | ¥2,000 |
| > ¥100,000 | ¥5,000 |

1,345 sub-categories qualify for ¥0-入驻. High-complaint merchants pay a 5–20% risk surcharge on top.

### 8.2 Domestic 抖音小店 — tech service fee by category

| 一级类目 | English | Tech fee | Notes |

| 一级类目 | English | Tech fee | Notes |
|---|---|---:|---|
| 食品饮料 | Food & Beverage | **5%** | Base rate — most packaged food defaults here |
| — 茶 (sub) | Tea | **2%** | Sub-cat exception |
| 水果生鲜/蔬菜 | Fresh produce | **0.6%** | 免佣 since Aug 2024 |
| 农产品/粮油米面 | Agricultural / grain-oil | **1–2%** | If positioned as 初级农产品 (agricultural product) |
| 保健食品/膳食营养补充食品 | Health food / supplements | **4%** | Requires 保健食品经营许可 |
| 传统滋补营养品 | Traditional tonics (燕窝 etc.) | **4–5%** | Needs qualification |
| 母婴 (奶粉/辅食/婴童) | Maternal & baby | **3–5%** | 奶粉 needs 特殊食品资质 |
| 美妆护肤/彩妆/香水 | Beauty / skincare / fragrance | **4%** (up to 7–8% for 一线大牌 联盟) | 化妆品经营备案 |
| 个人护理/个护仪器 | Personal care / devices | **4%** | |
| 家居日用/收纳/餐饮具 | Home daily use | **2–3%** | |
| 家居香薰/洗护清洁 | Fragrance / candle / cleaning | **3%** | (Compare vs BBG fragrance quote) |
| 家纺/床上用品 | Home textiles / bedding | **2%** | |
| 家居饰品/居家布艺 | Home décor / soft furnishing | **3%** | |
| 服饰内衣/男装/女装 | Apparel / underwear | **5%** | |
| 鞋靴 | Footwear | **5%** | |
| 箱包/服饰配件 | Bags / accessories | **5%** | |
| 运动/户外 | Sports / outdoor | **5%** | |
| 珠宝配饰/时尚饰品 | Jewelry / fashion accessories | **5–8%** fashion / **0.6%** 投资金 | |
| 钟表 | Watches | **2–5%** | 奢品 raised to 5% Jan 2026 |
| 奢侈品 | Luxury | **5–8%** tiered by 单价 | 阶梯费率 |
| 3C数码配件 | 3C accessories | **5%** | |
| 手机/平板/笔记本 | Phones / tablets / laptops | **2–3%** | |
| 智能家居/家电 | Smart home / appliances | **3–5%** | |
| 影音/生活/厨房电器 | AV / kitchen appliances | **3–5%** | |
| 图书/教育 | Books / education | **2%** | Low-fee |
| 办公用品/电子教育 | Office / e-learning | **2–3%** | |
| 玩具/模玩/动漫 | Toys / anime | **5%** | |
| 宠物/宠物食品 | Pets & pet food | **5%** | |
| 酒类 | Alcohol | **5%** | 酒类许可 |
| 汽车用品/零配件 | Auto parts | **3–5%** | |
| 乐器 | Musical instruments | **5%** | |
| 医疗器械/计生用品 | Medical devices / contraceptives | **4–5%** | 医疗器械许可 |
| 二手商品 | Second-hand | **2%→5%** (raised Jan 2026) | |

### 8.3 CBEC 抖音全球购 — deposit + tech service fee by category

**All CBEC categories are 定向准入 (invite-only / review-required).** Standard baseline deposit is ¥50,000; some categories run ¥100K–200K+. Doubling the deposit is required if entering via 采购凭证 (purchase-invoice) qualification.

| 一级类目 | English | 保证金 | Tech fee | Notes |
|---|---|---:|---:|---|
| 粮油米面/南北干货/调味品 | Grain, oil, seasoning — packaged dry/liquid food fits here | **¥50,000** | **3–5%** | Open |
| 零食/坚果/特产 | Snacks / nuts (snack SKUs fits here) | **¥50,000** | **5%** | Open |
| 咖啡/麦片/冲饮 | Coffee / oats / drinks (drink SKUs) | **¥50,000** | **5%** | Open |
| 茶 | Tea | **¥50,000** | **2%** | Open |
| 膳食营养补充食品 | Dietary supplements | **¥50,000** — up to **¥200,000** | **4%** | 定向; may need overseas certification |
| 传统滋补营养品 | Traditional tonics | **¥200,000** general / **¥400,000** 燕窝 | **5%** | 定向 |
| 酒类 | Alcohol | **¥100,000** (**¥200K** via 采购凭证) | **5%** | 定向; 白酒 Moutai/Wuliangye only |
| 美容护肤 | Skincare (skincare SKUs) | **¥100,000** | **4–6%** | 定向 for 一线大牌 |
| 彩妆/香水/美妆工具 | Makeup / fragrance | **¥100,000** | **4–6%** | 定向 for luxury; standalone 香水 fits here |
| 美容/个护仪器 | Beauty / personal-care devices | **¥100,000** | **4%** | |
| 个人护理 | Personal care | **¥50,000** | **4%** | |
| 洗护清洁/卫生巾/香薰 | Cleaning / sanitary / fragrance | **¥50,000** | **3–4%** | |
| 居家日用/家居饰品/床上用品/收纳/餐饮具 | Home / bedding / kitchenware | **¥50,000** | **3%** | Open |
| 影音/生活/厨房/个人保健电器 | Small appliances | **¥50,000–100,000** | **3–5%** | |
| 3C数码配件/摄影 | 3C accessories, cameras | **¥50,000** | **3–5%** | |
| 手机/笔记本/平板 | Phones / laptops / tablets | **¥100,000** | **2–3%** | |
| 电脑硬件/电玩配件 | PC hardware / gaming | **¥50,000** | **3–5%** | |
| 智能设备 | Smart devices | **¥50,000** | **3–5%** | |
| 男装/女装/内衣/童装 | Apparel | **¥100,000** | **5%** | Open |
| 男鞋/女鞋/童鞋/运动鞋 | Footwear | **¥100,000** | **5%** | Open |
| 箱包/运动包/服饰配件 | Bags / belts | **¥100,000** | **5%** | Open |
| 时尚饰品 | Fashion jewellery | **¥100,000** | **5–6%** | |
| 钟表 (瑞士手表) | Swiss watches | **¥200,000** (¥100K other) | **2–5%** | 定向 |
| 运动/瑜伽/健身/户外 | Sports & outdoor | **¥50,000–100,000** | **5%** | Open |
| 奶粉/辅食/营养品/婴儿零食 | Infant formula | **¥100,000** | **3–5%** | 特殊配方奶粉 定向 品牌 only |
| 婴童尿裤/婴童用品/玩具/童车 | Baby products / toys | **¥50,000** | **5%** | Open |
| 孕妇装/孕产妇用品 | Maternity | **¥50,000** | **5%** | |
| 宠物/宠物食品及用品 | Pet | **¥50,000** | **5%** | Open |
| 汽车用品/零配件 | Auto | **¥50,000** | **3–5%** | |
| 办公用品/电子教育/图书 | Office / education / books | **¥50,000** | **2–3%** | Open |
| 模玩/动漫/桌游 | Anime / board games | **¥50,000** | **5%** | Open |
| 乐器 | Musical instruments | **¥50,000** | **5%** | Open |
| 眼镜/瑞士军刀/打火机 | Eyewear / knives / lighters | **¥50,000** | **5%** | |
| 计生用品 | Contraceptives | **¥100,000** | **5%** | 定向 (Durex / Okamoto only) |
| 血压计/体温计 | BP monitor / thermometer | **¥100,000** | **5%** | 定向 独占授权 (Omron only) |
| 医疗器械/美容医疗器械 | Medical devices | **¥100,000+** | **5%** | 医疗器械 permits + 定向 |
| 二手商品 | Second-hand | **¥100,000+** | **5%** | Restricted |

### 8.4 Product-to-category mapping — worked examples

| SKU family (example) | CBEC category | Deposit | Tech fee | Domestic category | Domestic tech fee |
|---|---|---:|---:|---|---:|
| **Packaged food (jars, canisters, dry goods)** | 粮油米面/南北干货/调味品 | ¥50,000 | 3–5% | 食品饮料 (or 农产品 if 初级) | 5% (or 1–2%) |
| **Snacks / candies / nuts** | 零食/坚果/特产 | ¥50,000 | 5% | 食品饮料 | 5% |
| **Drink powders / oats / coffee** | 咖啡/麦片/冲饮 | ¥50,000 | 5% | 食品饮料 | 5% |
| **Royal jelly / propolis (functional)** | 膳食营养补充食品 | ¥50,000–200,000 | 4% | 保健食品 | 4% |
| **Skincare (mask, cream)** | 美容护肤 | ¥100,000 | 4–6% | 美妆护肤 | 4% |
| **Multi-SKU gift boxes** | Classified by dominant SKU | Varies | Varies | Varies | Varies |

**Recommendation:** enter under **粮油米面/南北干货/调味品** for packaged food SKUs (¥50K deposit, 3–5% fee). Standard fit for imported product; open registration; lower fee than 零食/坚果. Only escalate to 膳食营养补充食品 if positioning royal jelly / propolis functional SKUs separately (higher deposit + qualification burden).

### 8.5 邀约 (invite-only) vs open registration — for a foreign brand

**Open registration** (submit application, standard approval — where a foreign brand would apply):
food/beverage, snacks, dry/liquid food (粮油/调味), tea, coffee/drinks, home goods, bedding, apparel, footwear, baby items, pets, toys, sports/outdoor, office.

**邀约/定向准入** (invite-only, brand shortlist — not accessible to a new-entrant brand):
一线美妆大牌 (Dior/Estée Lauder), 白酒 (Moutai/Wuliangye only), 特殊配方奶粉, 婴幼儿液态奶, 疤痕护理, 血压计, 计生用品, 瑞士 luxury 手表.

**Additional CBEC entry gates** for 品牌旗舰 store: typically ~¥5M annual GMV proof from Tmall Global / JD Worldwide (品牌旗舰/专卖) or ¥10M / 30 offline stores (专营/卖场型).

### 8.6 How to plug categories into the model

Row **B14 (deposit)** and row **B15 (tech fee)** in `Douyin_CBEC_OnePager.xlsx` are the two variables the category choice drives. Recommended settings by SKU strategy:

- **Baseline (single-SKU only, CBEC, single store):** B14 = ¥50,000, B15 = 4% (mid of 3–5% band)
- **Food + snack SKUs (multi-SKU):** same store, weighted-average tech fee ≈ 4.5%. B14 = ¥50,000, B15 = 4.5%
- **Add royal jelly (health food):** separate store or category expansion → B14 = ¥100,000 (blended), B15 = 4%
- **Add skincare SKUs:** B14 = ¥100,000, B15 = 5% (blended). Note: 化妆品备案 may be required; consult platform.

Model line items that change with category (all in the OPERATING block):
- `PlatformTechFee = I1 * I8` — scales with GMV × tech fee %
- `SetupTotal` line 1 (I7 platform deposit) — one-time, affects setup cash-in only
- VAT on services line — includes tech fee, so category also indirectly affects VAT

### 8.7 CBEC vs Domestic tax treatment — reminder

- **CBEC (bonded warehouse):** 11.2% comprehensive tax = 13% VAT × 70%, no consumption tax on most food. Cap RMB 5,000/order, RMB 26,000/consumer/year. Chinese-language label not required.
- **Domestic (general trade):** tariff varies by HS code (agricultural products often 15% MFN tariff + 9% VAT ≈ 24% landed; other categories differ). Chinese-language label + relevant business licence mandatory.

CBEC is typically cheaper per unit for foreign brands entering China — this is why the base model assumes CBEC.

---


## 9. Break-even GMV simulation

### 9.1 The break-even equation

At break-even, gross profit exactly covers all Year 1 costs:

```
GrossMargin × GMV  =  Fixed costs  +  Variable costs
```

Where variable costs come in two flavours: some scale with **GMV** (commissions, taxes, fees), some scale with **orders** (GMV ÷ AOV — shipping, storage, returns).

Solving for GMV:

```
                              Fixed costs
BreakevenGMV  =  ─────────────────────────────────────────────
                 GrossMargin − (variable %-of-GMV rate)
                             − (per-order cost ÷ AOV)
```

If the denominator is ≤ 0, no positive GMV solves the equation — gross margin must rise before scale can help. This is the "GM too low" case.

### 9.2 Cost decomposition — fixed vs variable

Split every line item in the operating stack into (a) fixed for the year, (b) % of GMV, or (c) per-order:

| Line item | Type | Formula component |
|---|---|---|
| Setup total (sunk portion) | Fixed | I10 + I11 (trademark + brand setup) |
| Mainland agent | Fixed | I9 |
| DP monthly retainer × 12 | Fixed | I12 × 12 |
| Optional campaign co-fund | Fixed | I14 |
| DP GMV commission | % of GMV | I13 |
| KOL commission | % of GMV | I15 × I16 |
| Platform tech service fee | % of GMV | I8 |
| CBEC comprehensive import tax | % of GMV | I6 |
| Paid media (Qianchuan) | % of GMV | I23 ÷ ROAS |
| Ad-buying service fee | % of GMV | (I23 ÷ ROAS) × I26 |
| Warehouse storage | Per order | I19 × 2 |
| Last-mile shipping | Per order | I20 |
| Returns handling | Per order | I21 × I22 |
| VAT on services (fixed part) | Fixed | I5 × (I9 + I12 × 12 + I14) |
| VAT on services (variable part) | % of GMV | I5 × (I13 + I8 + I23 ÷ ROAS × I26) |

Note: refundable capital (I7 platform deposit, I17 bonded warehouse deposit, I18 tax pre-payment) is **excluded** from break-even because it's not a P&L cost — it's working capital that is recovered on exit.

### 9.3 The three coefficients

Define three planning coefficients that summarise the whole cost stack:

```
F  = Fixed_Annual + Setup_Sunk + VAT_on_Fixed_Services

     = (I9 + I12×12 + I14)          Annual DP / agent / co-fund
     + (I10 + I11)                  Sunk one-time (trademark + brand setup)
     + I5 × (I9 + I12×12 + I14)     VAT on the fixed services

v_G = %-of-GMV variable rate
     = I13                          DP commission
     + I15 × I16                    KOL commission
     + I8                           Platform tech fee
     + I6                           CBEC comprehensive tax
     + I23 ÷ ROAS                   Paid media
     + I23 ÷ ROAS × I26             Ad-buying service fee
     + I5 × (I13 + I8 + I23 ÷ ROAS × I26)   VAT on variable services

v_Q = per-order variable cost
     = I19 × 2                      Warehouse storage
     + I20                          Shipping
     + I21 × I22                    Expected return cost per order
```

Then:

```
BreakevenGMV  =  F ÷ ( GrossMargin − v_G − v_Q ÷ AOV )
```

### 9.4 Coefficient values at default inputs

Using the model's default assumptions (I9 = ¥60K, I12 = ¥80K, I14 = ¥60K, I10 = ¥8K, I11 = ¥80K, I13 = 6%, I15 = 60%, I16 = 12%, I8 = 4%, I6 = 11.2%, I23 = 40%, I26 = 15%, I5 = 6%, I19 = ¥0.80, I20 = ¥11, I21 = 5%, I22 = ¥15, AOV = ¥100):

**Fixed (F):**

| Component | Value (RMB) |
|---|---:|
| Agent + DP retainer + co-fund | ¥1,080,000 |
| Trademark + brand setup (sunk) | ¥88,000 |
| VAT on fixed services (6%) | ¥64,800 |
| **F total** | **¥1,232,800** |

**Variable % of GMV (v_G):**

| Component | Scenario A (ROAS 1.5×) | Scenario B (ROAS 3.0×) |
|---|---:|---:|
| DP commission | 6.00% | 6.00% |
| KOL commission (60% × 12%) | 7.20% | 7.20% |
| Platform tech fee | 4.00% | 4.00% |
| CBEC import tax | 11.20% | 11.20% |
| Paid media (40% ÷ ROAS) | 26.67% | 13.33% |
| Ad-buying fee (26.67% × 15%) | 4.00% | 2.00% |
| VAT on variable services | 2.04% | 1.28% |
| **v_G total** | **61.11%** | **45.01%** |

**Per-order variable (v_Q):**

| Component | Value (RMB) |
|---|---:|
| Warehouse storage (¥0.80 × 2 months) | ¥1.60 |
| Shipping | ¥11.00 |
| Returns (5% × ¥15) | ¥0.75 |
| **v_Q total** | **¥13.35 per order** |

At AOV = ¥100, `v_Q ÷ AOV = 13.35%`.

**Total variable %-of-GMV rate:**

- Scenario A: 61.11% + 13.35% = **74.46%**
- Scenario B: 45.01% + 13.35% = **58.36%**

**Interpretation:** Every ¥100 of revenue costs ¥74.46 (Scenario A) or ¥58.36 (Scenario B) in variable costs before any fixed cost is covered. The brand's gross margin **must exceed these thresholds** for any GMV to break even. If Scenario A gross margin < 74.5%, the model returns "GM too low."

### 9.5 Break-even GMV — sensitivity by gross margin

Using the coefficients above:

| Gross margin | Scenario A GMV break-even | Scenario B GMV break-even |
|---:|---:|---:|
| 30% | GM too low | GM too low |
| 40% | GM too low | GM too low |
| 50% | GM too low | GM too low |
| 60% | GM too low | ¥75,171,000 |
| 65% | GM too low | ¥18,585,000 |
| **70%** | GM too low | **¥10,613,000** |
| 75% | ¥228,912,000 | ¥7,417,000 |
| **80%** | **¥22,404,000** | **¥5,691,000** |
| 85% | ¥11,706,000 | ¥4,619,000 |
| 90% | ¥7,927,000 | ¥3,884,000 |

**Reading the table:** at a realistic Chinese-market food gross margin of 50–60%, break-even is impossible in Scenario A and only marginal in Scenario B (¥75M GMV needed at 60% GM). Meaningful break-even requires either (a) gross margin north of 70% — likely for premium imported product, or (b) ROAS behaving like Scenario B.

### 9.6 Break-even GMV — sensitivity by AOV (at GM = 70%)

Higher AOV dilutes per-order costs. At Gross Margin = 70%:

| AOV (RMB) | v_Q ÷ AOV | Scenario A GMV BE | Scenario B GMV BE |
|---:|---:|---:|---:|
| 80 | 16.69% | GM too low | ¥13,540,000 |
| 100 | 13.35% | GM too low | ¥10,613,000 |
| 120 | 11.13% | GM too low | ¥9,065,000 |
| **150** | **8.90%** | GM too low | **¥7,626,000** |
| 200 | 6.68% | GM too low | ¥6,344,000 |
| 300 | 4.45% | GM too low | ¥4,986,000 |

**Insight:** AOV matters. Moving from a ¥100 AOV single-jar order to a ¥200 gift-box AOV cuts break-even GMV by ~40% at any fixed margin. This is the strongest single lever any brand has on the per-order cost side — multi-SKU gift boxes (typical AOV ¥150–300) are a natural way to lift AOV.

### 9.7 Implementation in Excel

Two options — pick one based on how deeply the user wants to interact with the model.

**Option A — three helper cells (minimum viable).** Add these below the current KPI block:

```
Cell   | Label                              | Formula (in cell)
-------+------------------------------------+---------------------------------------------------
B44    | Fixed F                            | =B16 + B20*12 + B22 + B17 + B18
                                              + B11*(B16 + B20*12 + B22)
B45    | Variable v_G — Scenario A          | =B21 + B24*B25 + B15 + B12 + B34/B35
                                              + B34/B35*B37 + B11*(B21 + B15 + B34/B35*B37)
B46    | Variable v_G — Scenario B          | =B21 + B24*B25 + B15 + B12 + B34/B36
                                              + B34/B36*B37 + B11*(B21 + B15 + B34/B36*B37)
B47    | Variable v_Q per order             | =B29*2 + B30 + B31*B32
B48    | Break-even GMV — Scenario A        | =IF(B42-B45-B47/B7<=0, "GM too low",
                                              B44/(B42-B45-B47/B7))
B49    | Break-even GMV — Scenario B        | =IF(B42-B46-B47/B7<=0, "GM too low",
                                              B44/(B42-B46-B47/B7))
B50    | Break-even monthly GMV — A         | =IF(ISNUMBER(B48), B48/12, "n/a")
B51    | Break-even monthly GMV — B         | =IF(ISNUMBER(B49), B49/12, "n/a")
B52    | Break-even orders/year — A         | =IF(ISNUMBER(B48), B48/B7, "n/a")
B53    | Break-even orders/year — B         | =IF(ISNUMBER(B49), B49/B7, "n/a")
```

Note the specific cell references (B7 AOV, B11 VAT, B12 CBEC tax, B15 tech fee, B16 agent, B17 trademark, B18 brand setup, B20 DP retainer, B21 DP commission, B22 co-fund, B24 KOL share, B25 KOL rate, B29 storage, B30 shipping, B31 return rate, B32 return cost, B34 paid share, B35 ROAS A, B36 ROAS B, B37 ad-buy fee, B42 gross margin). If cell positions shifted after the DP fee update, adjust accordingly — the ROWMAP is documented in Section 5.

**Option B — full sensitivity table.** Insert a two-way data table below the KPI block:

- Rows: gross margin from 30% to 90% in 5% steps
- Columns: Scenario A break-even GMV, Scenario B break-even GMV
- Optional third dimension: repeat table at three AOVs (¥100 single jar, ¥150 duo pack, ¥250 gift box)

Excel does this natively via `Data → What-If Analysis → Data Table` or manually with an INDEX-driven grid. Colour scale ("green ≤ target GMV, red > 5× target") makes the pattern obvious at a glance.

### 9.8 What the simulation tells you

Reading Scenario B at Gross Margin = 70%, AOV = ¥100:

- **Break-even Year 1 GMV = ¥10.6M** — five times the ¥2M planning target
- **Break-even monthly GMV = ¥884K**
- **Break-even orders/year ≈ 106,000** (≈ 290/day)

To hit this in Year 1, the brand would need to match what top-tier Douyin food IPs achieve after multiple years of platform trust and follower base — not realistic for a first-year launch. The correct read is:

1. Year 1 will be investment, not break-even. Plan for ¥1.3–2.7M net sunk cash (per the earlier scenarios).
2. Break-even is a **multi-year path** — the sensitivity table shows the GMV level the brand needs to reach by Year 2 or 3 to justify the channel.
3. The AOV lever is worth more than most operators realize. Gift-box positioning (AOV ¥150–250) cuts break-even by 30–40%.
4. If gross margin is under 70%, the DP fee structure needs to be renegotiated (lower retainer or capped commission) — the numbers do not work otherwise.

### 9.9 Extension: multi-year break-even path

For a Year-2 / Year-3 view, treat the setup sunk cost as fully amortised in Year 1 (F drops by ¥88K) and refundable capital stays parked. The DP contract may also step down (Year 2 renegotiation typically lowers retainer by 10–20% once GMV proves out), and KOL commission blend can tighten as brand-owned livestream absorbs share from KOLs.

Recommended simple extension: duplicate the F, v_G, v_Q calculation for Year 2 with updated inputs (lower DP retainer, higher AOV from gift-box mix, higher organic share so paid media rate drops). The multi-year break-even GMV path is typically:

- Year 1: not applicable — investment year
- Year 2: break-even around ¥6–8M GMV at 70% GM (Scenario B)
- Year 3: break-even around ¥4–5M GMV at 70% GM

Confirm with actual COGS, wholesale price to DP, and expected gross margin — the model's default 70% GM assumption is a placeholder.

---

## 10. Sources — key references

- 网易新闻 — 2025 抖音代运营报价 · https://c.m.163.com/news/a/KEDDIIVC0556FVGZ.html
- 知乎 — 抖音代运营多少钱 · https://www.zhihu.com/question/353760964
- Kaisi Data / Yilantop — DP structure (retainer + commission, cap ~10%) · https://www.yilantop.com/article/11267
- Sohu 2026 代运营指南 · https://www.sohu.com/a/999274192_122585625
- 蜜鹞 — 2026 food/FMCG TP retainer · https://www.jizhil.com/dydata/12544.html
- 蝉妈妈 — hidden-fee audit · https://www.chanmama.com/yunyingquan/article/1237.html
- 学也网 — 千川收费模式 · https://www.1984nian.com/Promotion-xueye/8996.html
- 36氪 — 达播费比 · https://36kr.com/p/3381387593591298
- 界面新闻 — 小杨哥定价 · https://www.jiemian.com/article/10111210.html
- Foodaily — 蜂蜜直播 (瑞琪奥兰 Manuka RMB 24.3M) · https://www.foodaily.com/articles/38442
- 国务院 — CBEC Positive List (bonded-only rules for restricted categories) · http://www.gov.cn/zhengce/zhengceku/2022-02/21/content_5674854.htm
- 搜狐 — 抖音全球购入驻 · https://www.sohu.com/a/914513634_121389900
- 大洋网 — CBEC RMB 500 reform · https://news.dayoo.com/finance/202502/07/171077_54784130.htm
- 货之家 / 卓志保税仓 · http://www.51w2c.com/m/details_id_9449.html
- TMO Group — CBEC tech fee · https://www.tmogroup.com.cn/insights/douyin-xiaohongshu-cbec-store/

**Category-fee sources (Section 8):**
- 抖店官方 招商管理规则 全球购 · https://school.jinritemai.com/doudian/web/article/107821
- 晓多 全球购招商规则 (2024-06-06 rev, full CBEC category list) · https://www.xiaoduoai.com/blog/5282.html
- 晓多 tech-fee explainer · https://insight.xiaoduoai.com/commerce-knowledge/douyin-information/how-to-calculate-and-manage-the-technical-service-fees-of-tiktok-platform-merchants.html
- 晓观点 2025 保证金改革解读 · https://insight.xiaoduoai.com/service-based-marketing/what-are-the-new-changes-to-the-deposit-management-regulations-for-douyin-shops.html
- Sina 2025-06 保证金大幅降低 · https://finance.sina.com.cn/tech/roll/2025-06-14/doc-inezzsem9926068.shtml
- 青瓜 全球购入驻指南 · https://www.opp2.com/310510.html
- Newrank 2026 费率上调公告 · https://www.newrank.cn/article/detail/33540
- Sohu 全球购强势入驻攻略 · https://www.sohu.com/a/899033386_122389198

Full 36-source list is embedded in the earlier `Douyin_CBEC_Cost_Model.xlsx` (Sheet `10_Sources`) and in the Word report (`Douyin_CBEC_Cost_Report.docx`, Appendix).
