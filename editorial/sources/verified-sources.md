# Verified source ledger

Every figure used in a published piece, with the citation that goes with it.

**Read this before researching anything.** If a figure is here and still
current, reuse the exact citation below. That is what keeps the same number
from appearing three different ways across two hundred pieces.

**Append to this file before you finish a draft.** A figure used and not
logged will be researched again next week.

## How to log an entry

```
### <the figure, in plain words>
- Value: <number and unit>
- As of: <month year the source states, not the date you found it>
- Source: <publisher name, Chinese name in parentheses if Chinese-language>
- URL: <link>
- Verified 1: <date of check 1: page fetched, figure, unit, period and date confirmed>
- Verified 2: <date of check 2: page re-fetched before the draft was finished>
- Used in: <slug>, <slug>
- Notes: <anything that limits how it can be used>
```

## Rules

1. **A source with no date does not go in this file.** Find the date or drop
   the figure.
2. **A source with one check does not go in this file.** Every entry carries
   both verification dates.
3. **Platform fees come from the platform.** Tmall Global, JD Worldwide and
   Douyin merchant documentation, in Chinese, is the source for deposits,
   annual fees and commissions. A trade article repeating them is a
   confirmation, not the source.
4. **Regulatory claims come from the regulator.** GACC (海关总署), MOFCOM
   (商务部), SAMR (市场监管总局), NMPA (国家药监局), the Tariff Commission
   (国务院关税税则委员会). Cite the notice number where there is one.
5. **Our own figures are labelled ours.** See the section below.
6. **Twelve months.** A figure older than twelve months is re-verified before
   reuse; if the source has a newer number, the entry is updated, not
   duplicated.

## Proprietary figures

Numbers only this agency can publish. Each carries the label to use in copy,
the sample and the period. Seed this section before week 01: every Anchor
and Ledger needs one.

### Calculator category fee data
- Value: deposit, annual fee and commission by category for Tmall Global, JD
  Worldwide and Douyin cross-border, as loaded in the calculators
- As of: see the data files under `src/` (the calculator pages cite their
  own "last checked" date)
- Source: TheChinaPath calculator data
- Label in copy: "TheChinaPath calculator data, <month year>"
- Verified 1: 2026-09-04 (defaults read from src/pages/tools/tmall-global-setup-and-run.astro; the Tmall Global fee standard page itself sits behind a Taobao login and could not be fetched)
- Verified 2: 2026-09-04 (same file, re-read before the draft was finished)
- Used in: china-distributor-vs-own-store (default food scenario: 3.5M RMB GMV, 2,812,900 RMB year-one cash, 450,000 RMB refundable, running cost 67% of GMV)
- Notes: the fee table in every Ledger A starts here. Cross-check against
  the platform schedule once per quarter.


### Footwear category fee data and the cash floor it produces
- Value: Tmall Global deposit 50,000 RMB / annual fee 60,000 RMB / commission 5%; JD Worldwide 35,500 RMB (US$5,000 entry rung) / 7,100 RMB (US$1,000) / 5%; Douyin cross-border 100,000 RMB / no annual fee / 5%. Cash in before the first sale: 110,000 / 42,600 / 100,000 RMB. Cost per kept order at a 600 RMB basket: 53 RMB at 5% returns, 69 RMB at 30%, 92 RMB at 50%.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-09 (category arrays read directly from the three .astro files)
- Verified 2: 2026-09-09 (re-read before the draft was finished)
- Used in: cost-to-sell-footwear-in-china
- Notes: the per-kept-order figures are derived from the Tmall Global model's per-order defaults (pick and pack 4 RMB, last mile 11 RMB, return handling 15 RMB, payment 1%) at a 600 RMB order, which is an ASSUMPTION, not a sourced AOV. The fee triple is identical to apparel and to bags and luggage on all three platforms, so briefs 16L and 30L cannot reuse this table unchanged (Ledger kill condition).

## Platform fees

(append entries here. Tmall Global deposit, annual fee and commission are in the calculator entry above; the official 天猫国际资费标准 page requires a Taobao login and was not fetchable on 2026-09-04)

## Regulatory

### Cross-border retail import limits per shopper
- Value: 5,000 RMB per single transaction, 26,000 RMB per year
- As of: effective January 1, 2019 (document 财关税〔2018〕49号, November 2018)
- Source: Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=65769
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04 (re-verified for a second piece on 2026-09-09)
- Used in: china-distributor-vs-own-store, cost-to-sell-footwear-in-china
- Notes: the page carries the limits and the effective date. It does not carry the 70% VAT rule; do not cite this URL for that. For the 0% duty and the 70% rule use 财关税〔2016〕18号 in this file.

### Overseas food producer registration, Decree 248
- Value: registration with GACC required since January 1, 2022, valid five years, number on inner and outer packaging
- As of: April 2021 (promulgated April 12, 2021)
- Source: State Council Gazette (国务院公报), Customs Decree No. 248
- URL: https://www.gov.cn/gongbao/content/2021/content_5616161.htm
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: superseded by Decree 280 from June 1, 2026 (next entry). Cite both together.

### Overseas food producer registration, Decree 280 in force
- Value: Decree 280 in force from June 1, 2026; list of foods excluded from automatic renewal (meat, bird's nest, others)
- As of: March 2026 (Announcement 2026 No. 27, March 18, 2026)
- Source: General Administration of Customs Announcement 2026 No. 27 (海关总署公告2026年第27号), on gov.cn
- URL: https://www.gov.cn/zhengce/zhengceku/202603/content_7063537.htm
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: the decree text itself is at is.mofcom.gov.cn but that page dropped the connection on fetch; the gov.cn announcement is the citable page.

### Payment ceiling for large enterprises buying from SMEs
- Value: 60 days from delivery; regulation in force June 1, 2025
- As of: March 2025
- Source: State Council of the People's Republic of China (中国政府网), policy interpretation of the revised 保障中小企业款项支付条例
- URL: https://www.gov.cn/zhengce/202503/content_7015644.htm
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: the 30-day rule for government bodies is not on this page.


### Footwear on the cross-border retail import positive list
- Value: the list runs to 1,142 eight-digit tariff lines and covers 服装鞋帽 (apparel, footwear and headwear) among the consumer goods it admits
- As of: April 2016 (list published April 7, 2016 by 11 departments)
- Source: Cyberspace Administration of China (中央网信办), carrying People's Daily (人民日报)
- URL: https://www.cac.gov.cn/2016-04/08/c_1118561924.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: the current edition is the 2019 list as adjusted by Announcement 2022 No. 7 (eight departments, effective March 1, 2022), https://www.gov.cn/zhengce/zhengceku/2022-02/21/content_5674854.htm, verified twice on 2026-09-09. The annex listing each tariff line is a separate PDF and was not fetchable; cite the CAC page for the coverage claim and the 2022 announcement for the edition in force. Do not cite either URL for a specific HS code.

### Cross-border retail imports supervised as personal-use goods
- Value: no first-import permit, registration or filing requirement; the buyer may not resell
- As of: November 2018 (issued November 28, 2018, effective January 1, 2019)
- Source: MOFCOM and five other bodies (商务部 发展改革委 财政部 海关总署 税务总局 市场监管总局), 商财发〔2018〕486号, on 中国政府网
- URL: https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5437823.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: verbatim clause is 对跨境电商零售进口商品按个人自用进境物品监管，不执行有关商品首次进口许可批件、注册或备案要求. The article 3 text carries exceptions for goods under quarantine control or with major quality risk; do not state the exemption as absolute for every category.

### Cross-border retail import tax: 0% duty, VAT and consumption tax at 70%
- Value: tariff rate set at 0%; import VAT and consumption tax levied at 70% of the statutory payable amount
- As of: March 2016 (issued March 24, 2016, effective April 8, 2016)
- Source: Ministry of Finance (财政部), 财关税〔2016〕18号
- URL: http://www.mof.gov.cn/gp/xxgkml/gss/201603/t20160324_2510682.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: this is the URL for the 0% and 70% rules. 财关税〔2018〕49号 raised the transaction limits but does NOT carry these two clauses; do not cite 49号 for them. Pair with the 13% VAT rate entry below to get 9.1% for general goods.

### General import VAT rate, 13%
- Value: the 16% rate was cut to 13% from April 1, 2019
- As of: March 2019 (issued March 20, 2019)
- Source: State Council Gazette (国务院公报), 财政部 税务总局 海关总署公告2019年第39号
- URL: https://www.gov.cn/gongbao/content/2019/content_5416183.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: 13% x 70% = 9.1%, the cross-border comprehensive rate for general goods. Cosmetics, fragrance and alcohol carry consumption tax and run higher.

### Chinese shoe size standard, GB/T 43293-2022
- Value: 鞋号 is expressed as foot length in millimetres; recommended national standard, modified adoption of ISO 9407:2019; replaces GB/T 3293.1-1998
- As of: published October 12, 2022, effective May 1, 2023
- Source: National Standard Information Public Service Platform (全国标准信息公共服务平台, SAMR)
- URL: https://std.samr.gov.cn/gb/search/gbDetailed?id=EB58F4DA9225B2A2E05397BE0A0A7D33
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: recommended (推荐性), not mandatory. GB/T 3293-2017 中国鞋楦系列 is the last (鞋楦) standard and is a different document; do not conflate them.

### Children's footwear mandatory standard, GB 30585-2024
- Value: 童鞋安全技术规范, mandatory national standard, in force since June 1, 2025; replaces GB 30585-2014
- As of: published May 28, 2024, effective June 1, 2025
- Source: National Standard Information Public Service Platform (全国标准信息公共服务平台, SAMR)
- URL: https://std.samr.gov.cn/gb/search/gbDetailed?id=19BBE2758DF1574AE06397BE0A0A5337
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: applies to domestic sale, so it bites under general trade. A transition period for stock made or imported before June 1, 2025 is reported by testing labs but is not on the SAMR page; do not state a transition date from that page.

## Market figures

### China cross-border e-commerce trade, 2025
- Value: 2.75 trillion RMB imports plus exports, up 69.7% on 2020
- As of: January 2026 (State Council Information Office press conference, January 14, 2026)
- Source: Xinhua (新华网), citing the General Administration of Customs (海关总署)
- URL: http://www.news.cn/fortune/20260114/a8df40565edf479dba3229613e3b065a/c.html
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: customs.gov.cn returns a 2 KB challenge page to non-browser fetches; Xinhua is the citable mirror. No import/export split on this page. Q1 2026 split (618.46 bn total, 144.91 bn imports) is at https://www.news.cn/20260414/b70e222c3bda485ba58bf07e35410eb6/c.html, checked once 2026-09-04, not used yet.

### New overseas brands on Tmall Global, 2025
- Value: 2,415 overseas brands opened a first China store in 2025, from 52 countries and regions; 40,000+ brands from 110+ countries on the platform
- As of: January 2026
- Source: Sina Finance (新浪财经), citing Tmall Global
- URL: https://finance.sina.com.cn/tob/2026-01-27/doc-inhithne5772830.shtml
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: Q4 2025 alone was 691 new brands (same page).

### Pinlive Foods gross margin, 2025
- Value: revenue 791 million RMB (down 9.72%), gross margin 16.24% (down 1.42 points), dairy line 12.20%, beer 26.35%, grain and oil 33.35%
- As of: April 2026 (2025 annual report, published April 22, 2026)
- Source: Eastmoney (东方财富网), reporting the annual report of 品渥食品 (300892)
- URL: https://finance.eastmoney.com/a/202604223714189425.html
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: Pinlive owns the brands it imports (德亚, 瓦伦丁), so this is an importer-brand-owner margin, not a pure third-party distributor margin. Describe it as "a listed Shanghai importer of German dairy and beer".

### E-commerce return rate, Double 11 2025
- Value: overall e-commerce return rate 61.5%; apparel livestream above 80%
- As of: January 2026 (period covered: the 2025 Double 11 sales period)
- Source: Beijing Daily (京报网), carrying CCTV News (央视新闻)
- URL: https://news.bjd.com.cn/2026/01/11/11517038.shtml
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china
- Notes: CCTV did not name the institution behind the figure and no footwear-specific rate was published anywhere. The 80% figure is APPAREL LIVESTREAM, not footwear. Always label it as such and present it as a planning ceiling, never as a footwear return rate.
