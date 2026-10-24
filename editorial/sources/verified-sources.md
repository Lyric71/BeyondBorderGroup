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
- Superseded (2026-10-02) for the JD Worldwide figures: see "JD Worldwide category fee standard, 2026-09-24 revision" and "JD Worldwide charges no annual or platform usage fee" (Calculator fee audit, October 2, 2026). The Tmall Global and Douyin figures here are unchanged.
- Value: Tmall Global deposit 50,000 RMB / annual fee 60,000 RMB / commission 5%; JD Worldwide 35,500 RMB (US$5,000 entry rung) / 7,100 RMB (US$1,000) / 5%; Douyin cross-border 100,000 RMB / no annual fee / 5%. Cash in before the first sale: 110,000 / 42,600 / 100,000 RMB. Cost per kept order at a 600 RMB basket: 53 RMB at 5% returns, 69 RMB at 30%, 92 RMB at 50%.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-09 (category arrays read directly from the three .astro files)
- Verified 2: 2026-09-09 (re-read before the draft was finished)
- Used in: cost-to-sell-footwear-in-china
- Notes: the per-kept-order figures are derived from the Tmall Global model's per-order defaults (pick and pack 4 RMB, last mile 11 RMB, return handling 15 RMB, payment 1%) at a 600 RMB order, which is an ASSUMPTION, not a sourced AOV. The fee triple is identical to apparel and to bags and luggage on all three platforms, so briefs 16L and 30L cannot reuse this table unchanged (Ledger kill condition).
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

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
- Used in: china-distributor-vs-own-store, cost-to-sell-footwear-in-china, double-11-preparation-checklist (re-verified 2026-09-22, both checks)
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
- Value: Decree 280 in force from June 1, 2026; only two categories are excluded from automatic renewal, 肉与肉制品 (meat and meat products) and 燕窝与燕窝制品 (bird's nest and bird's nest products). CORRECTED 2026-09-23: the earlier wording of this entry said "meat, bird's nest, others". The announcement names only those two. Do not write "others".
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
- Used in: cost-to-sell-footwear-in-china; re-verified 2026-09-22 for double-11-preparation-checklist (researched, not cited in the final draft)
- Notes: verbatim clause is 对跨境电商零售进口商品按个人自用进境物品监管，不执行有关商品首次进口许可批件、注册或备案要求. The article 3 text carries exceptions for goods under quarantine control or with major quality risk; do not state the exemption as absolute for every category.

### Cross-border retail import tax: 0% duty, VAT and consumption tax at 70%
- Value: tariff rate set at 0%; import VAT and consumption tax levied at 70% of the statutory payable amount
- As of: March 2016 (issued March 24, 2016, effective April 8, 2016)
- Source: Ministry of Finance (财政部), 财关税〔2016〕18号
- URL: http://www.mof.gov.cn/gp/xxgkml/gss/201603/t20160324_2510682.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china; re-verified 2026-09-22 for double-11-preparation-checklist (researched, not cited in the final draft)
- Notes: this is the URL for the 0% and 70% rules. 财关税〔2018〕49号 raised the transaction limits but does NOT carry these two clauses; do not cite 49号 for them. Pair with the 13% VAT rate entry below to get 9.1% for general goods.

### General import VAT rate, 13%
- Value: the 16% rate was cut to 13% from April 1, 2019
- As of: March 2019 (issued March 20, 2019)
- Source: State Council Gazette (国务院公报), 财政部 税务总局 海关总署公告2019年第39号
- URL: https://www.gov.cn/gongbao/content/2019/content_5416183.htm
- Verified 1: 2026-09-09
- Verified 2: 2026-09-09
- Used in: cost-to-sell-footwear-in-china; re-verified 2026-09-22 for double-11-preparation-checklist (researched, not cited in the final draft)
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
- Used in: cost-to-sell-footwear-in-china, double-11-preparation-checklist (re-verified 2026-09-22, both checks), douyin-return-rate
- Notes: CCTV did not name the institution behind the figure and no footwear-specific rate was published anywhere. The 80% figure is APPAREL LIVESTREAM, not footwear. Always label it as such and present it as a planning ceiling, never as a footwear return rate.

## Brand entry teardowns

### Allbirds China entry: first store, price band, team size, own-team decision
- Value: first Asia store opened at 上海兴业太古汇 (HKRI Taikoo Hui, Shanghai) in April 2019, with the Tmall flagship in trial and the China site live; shoes priced 899 to 1,099 RMB; a 25-person Shanghai team; the co-founders said on the record that the conventional route would have been a regional partner or a joint venture and that they chose their own team instead
- As of: April 2019
- Source: Jiemian (界面新闻)
- URL: https://www.jiemian.com/article/3043672.html
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched before the draft was finished; page live, dated 2019/04/16 08:00, 产品价格在899到1099元不等 and 组建一支25人的上海团队 both confirmed)
- Used in: how-allbirds-entered-china
- Notes: the founders' words reach this page in Chinese translation, so the article paraphrases them in English rather than re-translating a translation. The mall is a Swire property, consistent with the 36Kr store plan below, but do not take a street address from this page.

### Allbirds China channel opening order and the 2019 store plan
- Value: official Xiaohongshu and WeChat accounts opened February 2019; plan to open stores in Shanghai, Beijing, Guangzhou and Chengdu that year with Swire; the China market had been studied for about two years before launch
- As of: April 2019
- Source: 36Kr (36氪)
- URL: https://www.36kr.com/p/1723508817921
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, 在今年 2 月，Allbirds 就已经开通了官方的小红书和微信公众账号 confirmed)
- Used in: how-allbirds-entered-china
- Notes: two of the four planned cities (Guangzhou, Chengdu) never opened. Pair with the Sina Tech entry below for the cities that actually had stores in 2024.

### Allbirds China store count, cities and the Tmall operating-entity change
- Value: six directly operated stores as of July 2024, in Shanghai, Beijing, Hangzhou and Shenzhen; the Tmall flagship operating entity changed on July 4, 2024 from 欧布斯（上海）贸易有限公司 to 凡尚服饰（上海）有限公司, a wholly owned Belle Fashion subsidiary; licence term 10 years, effective June 28, 2024
- As of: July 2024
- Source: Sina Tech (新浪科技)
- URL: https://finance.sina.com.cn/tech/roll/2024-07-27/doc-incfqazc6472819.shtml
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, 授权期限为10年，生效时间从2024年6月28日起 confirmed)
- Used in: how-allbirds-entered-china
- Notes: the same page carries Allbirds group loss figures (2021 to 2023 cumulative net loss near $300m; Q1 2024 revenue down 27.6% to $39.3m). Those were not used; the group figures in the article come from the company's own results releases instead.

### Allbirds and On store and follower gap in China, and Belle Fashion's network size
- Value: Allbirds 6 China stores and 230,000 Tmall flagship followers; On 22 stores by end-2023 and 720,000 Tmall followers; Belle Fashion runs more than 8,000 directly operated stores in China
- As of: August 2024
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/stock/hkstock/ggscyd/2024-08-06/doc-inchsrzh0104012.shtml
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, published 2024-08-06 11:51, 8000多家直营店 and both follower counts confirmed)
- Used in: how-allbirds-entered-china
- Notes: the follower counts are an August 2024 snapshot and are not re-checkable today, because the Tmall store page needs a Taobao login. Always date them in copy.

### Allbirds China store count at end-2025, IPO valuation and the AXNY sale
- Value: 7 China stores at the end of 2025; Nasdaq listing November 2021 at $15 a share, $4.1bn market value on the first day; brand and IP sale to AXNY announced March 30, 2026 at about $39m
- As of: April 2026
- Source: Sports Business (体育大生意), on NetEase (网易)
- URL: https://www.163.com/dy/article/KQA9RCBQ0529818P.html
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, published 2026-04-12, 截至2025年底，Allbirds在中国有7家门店 confirmed)
- Used in: how-allbirds-entered-china
- Notes: the IPO valuation is reported elsewhere as about $4.2bn at the intraday peak. This page says first day, so copy citing this URL must say first day. The 7-store figure is the only post-handover China store count found in any source.

### Allbirds sells its China subsidiary's net assets
- Value: asset purchase agreement dated August 6, 2024 for the net assets of Allbirds (Shanghai) Trading Co., LTD; total consideration $2.1m, net book value of transferred net assets $2.2m, loss about $0.2m. International net revenue for the nine months ended September 30: $36.004m in 2024 against $46.520m in 2023
- As of: November 2024 (10-Q for the quarter ended September 30, 2024)
- Source: Allbirds, Inc. Form 10-Q, US Securities and Exchange Commission
- URL: https://www.sec.gov/Archives/edgar/data/1653909/000162828024045882/bird-20240930.htm
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; filing live, the sentence and all three dollar figures confirmed)
- Used in: how-allbirds-entered-china
- Notes: this is the only China-specific figure in Allbirds' filings; China revenue was never broken out. The consideration covers net assets only and no licence fee is disclosed. Do not present $2.1m as the value of the China business as a whole.

### Belle Fashion appointed exclusive distributor and licensee for Greater China
- Value: exclusive distributor and licensee in mainland China, Macau and Taiwan, effective June 28, 2024, across retail, online and wholesale channels; CFO Annie Mitchell quoted; "Allbirds first launched in China in 2019"
- As of: August 2024 (release dated August 2, 2024)
- Source: Allbirds, Inc. press release, GlobeNewswire
- URL: https://www.globenewswire.com/news-release/2024/08/02/2923520/0/en/Allbirds-Announces-Agreement-with-Belle-Fashion-Group-in-China.html
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, effective date, territory and channels confirmed)
- Used in: how-allbirds-entered-china
- Notes: the release does not state the ten-year term; for that, cite the Sina Tech entry above. ir.allbirds.com no longer resolves (checked 2026-09-10), so the GlobeNewswire copy is the citable version of this release.

### Allbirds full year 2024 revenue and net loss
- Value: full year net revenue down 25.3% to $189.8m; full year net loss $93.3m, or $11.87 per basic and diluted share
- As of: March 2025 (results released March 11, 2025)
- Source: Allbirds, Inc. fourth quarter and full year 2024 results, GlobeNewswire
- URL: https://www.globenewswire.com/news-release/2025/03/11/3041000/0/en/Allbirds-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results.html
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; page live, both figures quoted verbatim)
- Used in: how-allbirds-entered-china
- Notes: group figures, not China. Never present either number as a China result.

### Allbirds' own risk language on relying on distributors
- Value: "We have limited ability to control how distributors represent our brand, manage customer experience, or adhere to our sustainability and ESG standards." Risk factor heading: "Our reliance on third-party distributors for international sales may negatively impact our operating results and brand value."
- As of: March 2026 (Form 10-K for fiscal 2025, filed March 31, 2026)
- Source: Allbirds, Inc. Form 10-K, US Securities and Exchange Commission
- URL: https://www.sec.gov/Archives/edgar/data/1653909/000162828026022192/bird-20251231.htm
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-fetched; filing live, the sentence confirmed in the risk factors)
- Used in: how-allbirds-entered-china
- Notes: the same filing carries "In 2024, we entered into agreements with unaffiliated distributors in Japan, Australasia, and China to acquire certain assets related to our operations in these regions." Useful for any later piece on distributor transitions.

### Allbirds brand and IP sold to American Exchange Group; registrant renamed
- Value: agreement to sell the intellectual property and certain other assets and liabilities for an estimated $39m, announced March 30, 2026, closing expected in Q2 2026. The registrant now files as Smartbird, Inc., "formerly: Allbirds, Inc. (filings through 2026-06-15)"
- As of: April 2026 (World Footwear), and September 2026 for the EDGAR name check
- Source: World Footwear; SEC EDGAR company filings index, CIK 0001653909
- URL: https://www.worldfootwear.com/news/american-exchange-group-agrees-to-acquire-allbirds-assets/11382.html and https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001653909&type=10-K
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (both re-fetched; World Footwear live and dated April 2, 2026; EDGAR shows the current and former names)
- Used in: how-allbirds-entered-china
- Notes: the bare EDGAR company URL without a `type` parameter renders an empty JavaScript landing page to a non-browser fetch and FAILED check 2 on 2026-09-10. Always cite the browse-edgar URL with `&type=10-K`. ir.allbirds.com no longer resolves, so the company's own page for this deal is gone.

### Allbirds China storefronts observable on the day
- Value: Allbirds官方旗舰店 live on JD Worldwide; allbirds.tmall.com returns a 302 to allbirds.world.tmall.com, which then requires a Taobao login; Belle International's corporate site carries an allbirds brand page
- As of: September 10, 2026 (observation date)
- Source: direct fetch of the storefront and corporate URLs
- URL: https://mall.jd.hk/index-10089444.html and https://allbirds.tmall.com/ and https://www.belleintl.com/Allbirds
- Verified 1: 2026-09-10
- Verified 2: 2026-09-10 (re-checked in the same session before the draft was finished)
- Used in: how-allbirds-entered-china
- Notes: assortment size, price positioning and review counts could NOT be read. mall.jd.com returns a bot-risk interstitial and the Tmall store needs a login. allbirdscn.com closed the socket on two attempts. Any future teardown needing storefront metrics has to collect them from a browser session, not a fetch.


## Livestream room cost research, September 15, 2026

### Historical dedicated-host event fee example
- Value: RMB 1 million to RMB 3 million per dedicated top-host event; roughly 10% to 20% commission, as reported by a Yalu representative about prior collaborations.
- As of: August 4, 2024
- Source: Xinhua (新华网), original interviews
- URL: https://www.news.cn/fortune/20240804/ec11b5b85b514e8b9332998d0b23b020/c.html
- Verified 1: 2026-09-15, fetched; date, unit, attribution and 专场费用 wording confirmed.
- Verified 2: 2026-09-15, re-fetched during createarticle iteration 8; same date and figures present.
- Used in: china-livestream-cost-for-brands
- Notes: historical interview evidence, not a national rate or a current quote. Dedicated event, not a single product slot. The draft's RMB 100,000 test fee is an independent scenario input, not derived from this range.

### Historical livestream room rental estimates
- Value: 100-300 square meters, RMB 20,000-50,000/month in noncore first-tier locations, RMB 150-500/hour.
- As of: September 25, 2024
- Source: Liubai Space (留白空间), venue supplier
- URL: https://www.liubaikongjian.com/news/198.html
- Verified 1: 2026-09-15, fetched; date, area, monthly/hourly units and explicit estimate disclaimer confirmed.
- Verified 2: 2026-09-15, re-fetched during createarticle iteration 8; figures and disclaimer remain present.
- Used in: china-livestream-cost-for-brands
- Notes: supplier's historical estimates, not an independent survey, current quote or platform fact. No other claims from this page used.

### Historical Hangzhou host salary and hourly-pay interviews
- Value: womenswear hosts with 1-2 years of experience at RMB 15,000-20,000/month; a separate experienced host reported RMB 400/hour offers.
- As of: April 3, 2025
- Source: Cailian Press (财联社), original reporting by Luo Yichen (罗祎辰)
- URL: https://www.cls.cn/detail/1992813
- Verified 1: 2026-09-15, original page fetched; date, occupation, location, experience, units and interview attribution confirmed.
- Verified 2: 2026-09-15, re-fetched during createarticle iteration 8; salary and hourly passages unchanged.
- Used in: china-livestream-cost-for-brands
- Notes: dated interview evidence, not a 2026 salary survey; co-host allowances and crew budgets in the article are separate planning inputs.

### Proprietary calculator marketing-cost scenarios and category allowance
- Value: at RMB 2M annual sales, RMB 250 basket and ROAS 2.5, selected store-led mix (40% paid, 10% creators at 20% commission) gives RMB 320,000 media + RMB 40,000 creator fees = RMB 45 per placed order. Selected creator-heavy mix (15% paid, 80% creators at 30%) gives RMB 120,000 + RMB 480,000 = RMB 75 per placed order. 8,000 placed orders in either case. Packaged-food fee model input 4%; planning FX RMB 7.10/USD.
- As of: September 2026, repository model read September 15
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro, categories and compute() opStack formulas
- Label in copy: TheChinaPath calculator data, September 2026
- Verified 1: 2026-09-15, read category, FX and compute() formulas directly.
- Verified 2: 2026-09-15, re-read those source lines during createarticle iteration 8; formula outputs recomputed in the final arithmetic check.
- Used in: china-livestream-cost-for-brands
- Notes: scenario outputs, not observed client performance, market averages, total channel cost or a celebrity event. 4% is the calculator allowance, not independently verified as the current official cross-border fee. Room budgets exclude wider channel costs. Replaces the unavailable managed-room comparison under editorial/CLAUDE.md source option 2.
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

## Facial skincare cost research, September 16, 2026

### Facial skincare category fee data and the cash floor it produces
- Superseded (2026-10-02) for the JD Worldwide figures: see "JD Worldwide category fee standard, 2026-09-24 revision" and "JD Worldwide charges no annual or platform usage fee" (Calculator fee audit, October 2, 2026). The Tmall Global and Douyin figures here are unchanged.
- Value: Tmall Global deposit 50,000 RMB / annual fee 30,000 RMB / commission 4%; JD Worldwide 35,500 RMB (US$5,000 entry rung) / 7,100 RMB (US$1,000) / 5% plus a flat 0.9% transaction fee; Douyin cross-border 100,000 RMB / no annual fee / 5%. Cash in before the first sale: 80,000 / 42,600 / 100,000 RMB. Cost per kept order at a 5% return rate: 31 RMB on a 280 RMB 200ml toner, 51 RMB on a 680 RMB 30ml serum.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-16 (category arrays read directly from the three .astro files)
- Verified 2: 2026-09-16 (re-read before the draft was finished)
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: the JD and Douyin rows are IDENTICAL to footwear (35,500 / 7,100 / 5% and 100,000 / none / 5%); only the Tmall column differs (4% not 5%, 30,000 not 60,000, 80,000 not 110,000 of cash). That difference is what kept the Ledger kill condition from firing. The per-kept-order figures are derived from the Tmall Global model's per-order defaults (pick and pack 4 RMB, last mile 11 RMB, return handling 15 RMB, payment 1%) at the calculator's 5% return rate, against two ASSUMED baskets, not a sourced AOV. Makeup shares the 4% / 30,000 Tmall row, so brief 22L (beauty devices) and any makeup Ledger must check the kill condition against this entry.
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

### Tmall Global commission bands: skincare and makeup are the only 4% categories
- Superseded (2026-10-02): hair care and wigs now also sit at 4%, and the 2,000,000 RMB crossover with personal care no longer exists. See "Tmall Global calculator: commission spread and cash floor across the nineteen categories (proprietary, October 2026)".
- Value: of the nineteen real product categories in the Tmall Global calculator picker, only skincare and makeup sit at a 4% commission; the rest sit at 2, 2.5, 3 or 5. Personal care (wash and clean) carries 2.5% with a 60,000 RMB annual fee, which crosses skincare's 4% with 30,000 RMB at exactly 2,000,000 RMB of GMV a year.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, the `categories` array)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-16 (array counted line by line)
- Verified 2: 2026-09-16 (recounted, and the crossover solved: 30,000 + 0.04G = 60,000 + 0.025G, G = 2,000,000)
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: the crossover is arithmetic on our own published bands, not a platform statement. A merchant does not choose the category; the product does. Use it to explain what a classification costs, never to advise gaming one.

### Cosmetics Supervision and Administration Regulation: special vs general cosmetics
- Value: 特殊化妆品 are cosmetics for hair dye, perming, spot-lightening and whitening, sun protection and anti-hair-loss, plus anything claiming a new efficacy; everything else is 普通化妆品. Special cosmetics need NMPA registration before manufacture or import. Imported general cosmetics need an NMPA filing before import. An overseas registrant or filer must appoint a Chinese legal person to handle registration or filing, adverse reaction monitoring and recalls.
- As of: promulgated June 16, 2020, in force January 1, 2021
- Source: State Council Gazette (国务院公报), 化妆品监督管理条例, State Council Decree No. 727, articles 16, 17 and 23
- URL: https://www.gov.cn/gongbao/content/2020/content_5525087.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: article 16 verbatim is 用于染发、烫发、祛斑美白、防晒、防脱发的化妆品以及宣称新功效的化妆品为特殊化妆品. This governs GENERAL TRADE. It does not apply to goods entering on the cross-border retail import route, which 商财发〔2018〕486号 exempts. Never cite this page for a cross-border claim.

### Cosmetics consumption tax: 15% on high-end, and the 10 RMB per millilitre line
- Value: consumption tax on ordinary beauty and decorative cosmetics was cancelled; the tax item was renamed 高档化妆品 and the rate set at 15%. 高档护肤类化妆品 is defined as a production (import) stage sale (duty-paid) price excluding VAT of 10 RMB per millilitre (gram), or 15 RMB per piece (sheet), and above.
- As of: issued September 30, 2016, effective October 1, 2016
- Source: Ministry of Finance and State Administration of Taxation (财政部 国家税务总局), 财税〔2016〕103号, via the Shanghai Municipal Tax Service (国家税务总局上海市税务局)
- URL: https://shanghai.chinatax.gov.cn/zcfw/zcfgk/xfs/201610/t427459.html
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: verbatim threshold is 生产（进口）环节销售（完税）价格（不含增值税）在10元/毫升（克）或15元/片（张）及以上. Pair with 财关税〔2016〕18号 (cross-border dutiable value is the 实际交易价格, duty 0%, VAT and consumption tax at 70% of statutory) and the 13% VAT entry to get the composite: [(15% + 13%) / (1 - 15%)] x 70% = 23.06% for a skincare item over the line, against 9.1% under it. The 23.06% is OUR ARITHMETIC on two cited rules, not a rate quoted by either source. Show the calculation in copy; do not cite a blog for the number.

### Animal testing exemption for imported general cosmetics
- Value: an imported general cosmetic may be exempted from submitting the toxicology test report where the manufacturer holds a quality management system certificate issued by the government authority of its own country or region AND the product safety risk assessment fully confirms the product is safe. Three exclusions: products claimed for infants and children; products using a cosmetic new ingredient still under safety monitoring; a filer, domestic responsible person or manufacturer listed as a key supervision target on the quantified grading score.
- As of: NMPA Announcement 2021 No. 32, in force May 1, 2021
- Source: NMPA (国家药监局), 化妆品注册备案资料管理规定, article 33(2), via the Fujian Provincial Medical Products Administration
- URL: https://yjj.scjgj.fujian.gov.cn/hzp/flfg/202106/t20210608_5616054.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: applies to GENERAL cosmetics only, never to special cosmetics. NMPA's own copy of this document at nmpa.gov.cn returns HTTP 412 to a fetch; the Fujian provincial page carries the full text and is the citable URL. Do not write "China ended animal testing" without the two conditions and the three exclusions.

### Cosmetics efficacy claim evaluation
- Value: from January 1, 2022, a registrant or filer applying for special-cosmetics registration or general-cosmetics filing must evaluate the product's efficacy claims under the 规范 and upload a summary of the evidence to the website the NMPA designates.
- As of: NMPA Announcement 2021 No. 50, published April 8, 2021, in force May 1, 2021
- Source: NMPA (国家药监局), 化妆品功效宣称评价规范, carried by China Quality News (中国质量新闻网)
- URL: https://www.cqn.com.cn/ms/content/2021-04/09/content_8681664.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: the NMPA original 412s on fetch, so China Quality News carrying the release is the citable page. The page does NOT list which claims need a human efficacy trial versus a literature review; that detail sits in the annexed 规范 itself. Do not cite this URL for the per-claim test matrix.

### Chinese label required on cosmetics sold inside China
- Value: 化妆品应当有中文标签. The visible face of the sales packaging must carry the Chinese product name, the special-cosmetics registration certificate number, the registrant or filer name and address, the manufacturer name and address, the full ingredient list, net content, use-by date, method of use and the necessary safety warnings. Mandatory for anything registered or filed from May 1, 2022; products already on the register had to be relabeled by May 1, 2023.
- As of: NMPA Announcement 2021 No. 77, issued May 31, 2021
- Source: State Council Gazette (国务院公报), 化妆品标签管理办法
- URL: https://www.gov.cn/gongbao/content/2021/content_5631831.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: this binds goods 在中华人民共和国境内生产经营, so general trade. Cross-border retail import goods ship in original packaging; 商财发〔2018〕486号 article 4(1)3 instead makes the platform serve a risk notice stating 相关商品直接购自境外，可能无中文标签，消费者可通过网站查看商品中文电子标签. Cite 486号, not this page, for the cross-border position.

### Cross-border risk notice and the Chinese electronic label
- Value: the cross-border e-commerce enterprise, with the platform, must give the consumer a risk notice on the order page or another conspicuous place, stating that the goods meet the origin country's quality, safety, hygiene, environmental and labelling standards or technical specifications but may differ from China's, that the consumer carries the risk, and that the goods are bought directly from overseas and 可能无中文标签, with a Chinese electronic label viewable on the website.
- As of: issued November 28, 2018, effective January 1, 2019
- Source: MOFCOM and five other bodies (商务部 发展改革委 财政部 海关总署 税务总局 市场监管总局), 商财发〔2018〕486号, article 4(1)3, on 中国政府网
- URL: https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5437823.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: same document as the "Cross-border retail imports supervised as personal-use goods" entry above, different article. That entry covers article 3 (no first-import permit, registration or filing). This one covers the labelling and disclosure duty in article 4. Cite the article you mean.

### Cosmetics are on the cross-border retail import positive list
- Value: the list runs to 1,142 eight-digit tariff lines and expressly covers 部分化妆品 among the consumer goods it admits
- As of: April 2016 (list published April 7, 2016 by 11 departments)
- Source: Cyberspace Administration of China (中央网信办), carrying People's Daily (人民日报)
- URL: https://www.cac.gov.cn/2016-04/08/c_1118561924.htm
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: cost-to-sell-facial-skincare-in-china
- Notes: same page as the footwear positive-list entry above; the sentence names 部分食品饮料、服装鞋帽、家用电器以及部分化妆品、纸尿裤、儿童玩具、保温杯等, so one URL supports both the footwear and the cosmetics coverage claim. The edition in force is the 2019 list as optimised by 财政部等八部门公告2022年第7号, issued January 28, 2022, effective March 1, 2022, https://www.mof.gov.cn/jrttts/202202/t20220221_3788894.htm, verified twice on 2026-09-16. The per-line annex is a PDF and was not fetchable, so never cite either URL for a specific HS code.

### Chinese cosmetics retail growth, 2025 (RESEARCHED, NOT YET USED)
- Value: retail sales of cosmetics at above-quota-size units grew 5.1% in 2025
- As of: published February 28, 2026
- Source: National Bureau of Statistics (国家统计局), 中华人民共和国2025年国民经济和社会发展统计公报
- URL: https://www.stats.gov.cn/zwfwck/sjfb/202602/t20260228_1962662.html
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16 (same fetch confirmed the amount is absent)
- Used in: none yet. Researched for 02L, dropped because a Ledger is a cost page and the line would have been padding against a hard word ceiling.
- Notes: the communique carries the GROWTH RATE ONLY. The 4,653亿元 amount circulating in trade coverage is NOT on this page; confirmed by fetch. Do not attribute that amount to the NBS communique.

### Imported beauty and skincare turned up in H1 2025 (RESEARCHED, NOT YET USED)
- Value: January to June 2025 imports of beauty cosmetics and skincare rose 8.6% by volume and 0.7% by value year on year, after four straight years of decline from 2021 to 2024; average import price about 349,000 RMB a tonne in 2025 against 377,000 RMB a year earlier
- As of: August 26, 2025
- Source: Ebrun (亿邦动力), by 张从容
- URL: https://m.ebrun.com/595543.html
- Verified 1: 2026-09-16
- Verified 2: 2026-09-16
- Used in: none yet. Researched for 02L, dropped for length.
- Notes: Ebrun attributes the figures to its own compilation (亿邦动力统计) rather than naming 海关总署 on the page. If this is used later, say "Ebrun's compilation of customs data" and not "customs data", or find the GACC original first.


## Tmall vs Amazon research, September 17, 2026

### Amazon stopped serving third-party sellers on its China site
- Value: seller services for third-party sellers on the Amazon China website ended July 18, 2019; Amazon kept Amazon Global Store (亚马逊海外购), Amazon Global Selling (亚马逊全球开店), Kindle and cloud
- As of: April 2019 (published April 19, 2019)
- Source: China Daily (中国日报网), carrying China News Service (中国新闻网)
- URL: https://qiye.chinadaily.com.cn/a/201904/19/WS5cb92e4ca310e7f8b1577840.html
- Verified 1: 2026-09-17 (page fetched, date, cut-off date and retained-business list all on the page)
- Verified 2: 2026-09-17 (re-fetched at iteration 8, unchanged)
- Used in: a-comparison-between-tmall-and-amazon
- Notes: the announcement was made to media on April 18 and carried on April 19. Cite the month, not the day, unless you re-check which date the source actually prints. This page does NOT say Amazon left China; it says the opposite. Never use it for a "Amazon exited China" claim.

### Amazon Global Store: desktop shopping and Prime in China ended
- Value: from January 27, 2024, amazon.cn stopped desktop shopping and stopped offering Prime membership in China; shopping moved to the 亚马逊购物 app and the Amazon Global Store WeChat mini program
- As of: effective January 27, 2024 (notice carried on amazon.cn)
- Source: Amazon China (亚马逊中国), notice on amazon.cn
- URL: https://www.amazon.cn/
- Verified 1: 2026-09-17 (notice fetched, both clauses and the date confirmed on the page)
- Verified 2: 2026-09-17 (re-fetched at iteration 8, unchanged)
- Used in: a-comparison-between-tmall-and-amazon
- Notes: verbatim clauses are 电脑端将不再提供购物服务 and 自2024年1月27日起，我们将不再提供Prime会员服务. This is a homepage notice, so it can move; re-verify before reuse. Amazon Global Store is Amazon's own import retail. Do not describe it as a marketplace a brand can join.

### Amazon Global Selling is an export program, not a China import route
- Value: Amazon's 20-plus international sites across the Americas, Europe, Asia and Oceania are fully open to Chinese sellers; the four announced 2026 priorities are all export-facing; 2025 sales by Chinese sellers grew 15%+ on mature sites and 30%+ on emerging ones
- As of: December 2025 (published December 4, 2025)
- Source: Amazon Global Selling (亚马逊全球开店), official news release
- URL: https://globalselling.amazon.com/en/news/news-brand-251204
- Verified 1: 2026-09-17
- Verified 2: 2026-09-17 (re-fetched at iteration 8, unchanged)
- Used in: a-comparison-between-tmall-and-amazon
- Notes: verbatim clause is 亚马逊位于美洲、欧洲、亚洲、大洋洲的20余大国际站点已经面向中国卖家全面开放. Use this to show the direction of travel (Chinese goods out), never as evidence about foreign brands selling in.

### Amazon seller fees: no deposit, monthly plan fee, referral fee band
- Value: no security deposit to open a store; Professional plan US$39.99 a month (Individual US$0.99 per item sold); referral fee 8% to 15% of the sale in most categories, with the full range running to 45% on some
- As of: July 2024 (the no-deposit page) and January 2026 (the fee-structure page)
- Source: Amazon Global Selling (亚马逊全球开店), Chinese-language seller knowledge pages
- URL: https://globalselling.amazon.com/zhishi/article-240523 and https://globalselling.amazon.com/en/zhishi/article-260113-2
- Verified 1: 2026-09-17 (both pages fetched, figures and their stated publication months confirmed)
- Verified 2: 2026-09-17 (both re-fetched at iteration 8, unchanged)
- Used in: a-comparison-between-tmall-and-amazon
- Notes: verbatim no-deposit clause is 首先在亚马逊开店是不需要押金的. These are US-marketplace figures from Amazon's own China-facing seller site, which is the right source for a China-audience comparison. sellercentral.amazon.com sits behind a login and cannot be fetched. sell.amazon.com/pricing carries the same numbers but prints NO DATE, so it does not qualify under the ledger's rule 1; do not cite it.

### Tmall Global category fee spread and the cash floor, all nineteen categories
- Superseded (2026-10-02) by "Tmall Global calculator: commission spread and cash floor across the nineteen categories (proprietary, October 2026)": the average is now 3.47% (printed 3.5%), three categories at 4%, none at 2.5%.
- Value: across the nineteen real categories in the Tmall Global picker, commission runs 2% to 5% and averages 3.395% (rounded to 3.4% in copy); eight categories sit at 2%, seven at 5%, two at 4%, one at 3%, one at 2.5%; deposit plus annual fee is 80,000 RMB in eleven categories, 110,000 RMB in seven, and 330,000 RMB for health supplements (300,000 deposit plus 30,000 annual fee). Calculator defaults for the operating partner: 35,000 RMB monthly retainer plus 10% of GMV.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-17 (category array read directly from the .astro file and the aggregates recomputed from it)
- Verified 2: 2026-09-17 (re-read and recomputed before the draft was finished)
- Used in: a-comparison-between-tmall-and-amazon
- Notes: this is the whole-picker view of the same array the Ledger pieces slice by category, so it does not duplicate a published fee table. The 35,000 RMB retainer and the 10% TP commission are MODEL DEFAULTS, not a sourced market rate. Always label them as the calculator's defaults, never as what TPs charge.

## Double 11 checklist research, September 22, 2026

### Douyin Double 11 2026: registration date and sale window
- Value: merchant registration opened September 14, 2026; the sale runs from October through November 11 in three phases (an October opening phase, a main phase spanning October and November, and a November peak phase)
- As of: September 2026 (published September 19, 2026)
- Source: Ebrun (亿邦动力), weekly e-commerce round-up carried on Tencent News
- URL: https://news.qq.com/rain/a/20260919A088XY00
- Verified 1: 2026-09-22 (page fetched at research time; verbatim clause 9月14日已开启报名 and the three phases on the page)
- Verified 2: 2026-09-22 (re-fetched at iteration 8; re-fetched a third time by the 09:19 relaunch, unchanged)
- Used in: double-11-preparation-checklist
- Notes: Douyin's own rule page 《2026年抖音商城双11好物节招商规则》 on school.jinritemai.com returns an empty body to a non-browser fetch, so the trade publication is the citable source. Search summaries of the rule page give the window as 2026-09-14 14:00 to 2026-11-11 23:59:59; the 14:00 start is NOT printed in copy because the page could not be opened. Print only what Ebrun states.

### Kuaishou Double 11 2026: recruitment opened September 15
- Value: Kuaishou opened merchant recruitment for its 2026 Double 11 on September 15, 2026
- As of: September 2026 (published September 16, 2026)
- Source: 21st Century Business Herald (21世纪经济报道)
- URL: https://www.21jingji.com/article/20260916/herald/ae0a3b105798bb224bacac429cb5487c.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: cite this URL for the recruitment date only. The cycle dates are on the Ebrun page below.

### Kuaishou Double 11 2026: cycle October 7 to November 15 in five phases
- Value: 抢跑预售 Oct 7 to 13, 开门红 Oct 14 to 19, 品类日 Oct 20 to Nov 7, 收官期 Nov 8 to 11, 爆款返场 Nov 12 to 15
- As of: September 2026 (published September 19, 2026)
- Source: Ebrun (亿邦动力), carried on Tencent News
- URL: https://news.qq.com/rain/a/20260919A088XY00
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8 and again by the 09:19 relaunch, unchanged)
- Used in: double-11-preparation-checklist
- Notes: same page as the Douyin entry. The draft prints the five phases as pre-sale, opening, category days, closing and an encore window, without the day ranges; the ranges are here if a later piece needs them.

### Double 11 2025 platform windows: Douyin, JD and Tmall
- Value: Douyin sold October 9 to November 11 (34 days), JD October 9 to November 14 (37 days), Tmall October 15 to November 14 (31 days); the page calls it the longest Double 11 (最长双11)
- As of: November 2025 (published November 15, 2025)
- Source: The Paper (澎湃新闻)
- URL: https://m.thepaper.cn/newsDetail_forward_31971814
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8 and again by the 09:19 relaunch; verbatim 抖音电商从10月9日开卖，持续到11月11日 / 从10月9日至11月14日 / 从10月15日持续到11月14日 confirmed)
- Used in: double-11-preparation-checklist
- Notes: JD here is the whole JD platform, not JD Worldwide alone. Use these as last year's windows, never as 2026 dates. No Tmall or JD 2026 window had a citable source on 2026-09-22; aggregator blogs carrying a 2026 Tmall timetable disagreed with each other and were rejected.

### Double 11 2025 total online sales, all platforms
- Value: 1,695 billion RMB (16,950亿元) across the 2025 Double 11 period, up 14.2% year on year
- As of: November 2025 (published November 12, 2025)
- Source: Sina Finance (新浪财经), citing Syntun (星图数据)
- URL: https://finance.sina.com.cn/stock/bxjj/2025-11-12/doc-infxcura4872746.shtml
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: Syntun's 全网销售额 is a third-party estimate covering the extended sale period. Always say "citing Syntun". Platforms do not publish their own totals.

### Imported brands on Tmall Global, first two weeks of Double 11 2025
- Value: 927 imported brands doubled GMV year on year in the first two weeks; nine passed 100 million RMB; more than 1,700 new overseas brands entered Tmall Global before the sale
- As of: October 2025 (published October 29, 2025)
- Source: E-Commerce Daily (电商报), carried on yilantop.com
- URL: https://www.yilantop.com/news/74594
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: the 1,700-plus new brands figure is not printed in the draft. The ledger carries a separate Tmall Global new-brand entry for 2025; never print both figures in one piece.

### Tmall Global 全球探源计划 upgrade: origin, circulation and claim requirements
- Value: overseas brands must supply proof of origin, evidence of free-sale authorization or market approval, and visual evidence of genuine overseas circulation (an unbroken video walkthrough in a foreign retailer or pharmacy, or sales screenshots from a recognized overseas platform); claims may not imply disease treatment, assert benefits without scientific support, or use misleading data or reviews; 300-plus brands enrolled since May 2026
- As of: September 2026 (published September 15, 2026)
- Source: Global Network (环球网), carried on Tencent News
- URL: https://news.qq.com/rain/a/20260915A091CT00
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: the programme page on merchant.tmall.hk sits behind a Taobao login. This is a platform programme, not a regulation; do not describe it as a legal requirement.

### 网络交易平台规则监督管理办法, SAMR and CAC order 116
- Value: published December 18, 2025, effective February 1, 2026. Article 27 bars a platform from forcing merchants to carry refund-without-return (仅退款) liability; article 12 requires 7 days' public notice before a rule change takes effect, 15 days for changes affecting many users or major interests
- As of: December 2025
- Source: State Administration for Market Regulation (国家市场监督管理总局)
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2026/art_85b474fc5a08494bb60ca6a280b98d7d.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist, douyin-return-rate
- Notes: governs the platform's conduct toward merchants. Cite it for notice periods and the 仅退款 clause, not for merchant pricing duties (those are order 56 and the NDRC rule below).

### 直播电商监督管理办法, SAMR and CAC order 117
- Value: published December 18, 2025, effective February 1, 2026. Article 32: where price comparison, discount or markdown promotions are used, the compared price or the calculation basis of the discount must be shown prominently. Article 37: AI-generated presenter images or video must be labelled per national rules and the operator must continuously remind viewers (持续向消费者提示) that the figure is machine generated
- As of: December 2025 (gazette issue 12666, April 2026)
- Source: State Council Gazette (国务院公报)
- URL: https://www.gov.cn/gongbao/2026/issue_12666/202604/content_7065114.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8; full text of articles 32 and 37 re-fetched again by the 09:19 relaunch, verbatim 应当显著标明被比较价格或者折价、减价的计算基准 and 持续向消费者提示 confirmed)
- Used in: double-11-preparation-checklist
- Notes: article 37 has further paragraphs beyond the AI-presenter clause; quote only the first paragraph unless the rest has been read.

### 互联网平台价格行为规则, 发改价格规〔2025〕1607号
- Value: issued December 9, 2025, released December 20, 2025, effective April 10, 2026; issued jointly by the NDRC, SAMR and the CAC; 7 chapters, 29 articles
- As of: December 2025
- Source: National Development and Reform Commission (国家发展和改革委员会), 答记者问 page, with the CAC's carried copy of the notice
- URL: https://www.ndrc.gov.cn/xxgk/jd/jd/202512/t20251220_1402517.html
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: the NDRC notice page attachment (PDF/OFD) did not parse. Full text since read on the CAC copy (2026-10-11): see "Internet platform pricing rule, article 5" under Partner piece P19 research; article numbers may be cited from there.

### 明码标价和禁止价格欺诈规定, SAMR order 56, article 19
- Value: promulgated April 14, 2022, effective July 1, 2022. Article 19(3) prohibits selling goods or services through false discounting, false markdowns or false price comparison (虚假折价、减价或者价格比较)
- As of: April 2022
- Source: State Council Gazette (国务院公报)
- URL: https://www.gov.cn/gongbao/content/2022/content_5699926.htm
- Verified 1: 2026-09-22
- Verified 2: 2026-09-22 (re-fetched at iteration 8, unchanged)
- Used in: double-11-preparation-checklist
- Notes: the merchant-side pricing rule; the base-price record-keeping argument rests on it. Pair with order 117 article 32 for livestream discounts.

### Bonded warehouse cash floor and per-parcel logistics defaults (proprietary)
- Value: bonded warehouse deposit 100,000 RMB and bonded tax prepayment 300,000 RMB (400,000 RMB committed before the first order); pick and pack 4 RMB, last-mile 11 RMB, return handling 15 RMB per parcel; default return rate 5%
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, advanced-input defaults)
- Label in copy: "TheChinaPath calculator data, September 2026" / "our Tmall Global calculator"
- Verified 1: 2026-09-22 (defaults read from the .astro file)
- Verified 2: 2026-09-22 (re-read by the 09:19 relaunch: whDeposit 100000, whTaxPrepay 300000, fulfillment 4, shipping 11, returnRate 5, returnHandling 15 confirmed)
- Used in: double-11-preparation-checklist
- Notes: MODEL DEFAULTS, not a market rate. Return-drag arithmetic in the piece: a returned order costs 30 RMB (4 + 11 + 15); at a 61.5% return rate, 1,000 orders produce 615 returns and 18,450 RMB spread over 385 kept orders, about 48 RMB each; at the calculator's 5% default it is 1,500 RMB over 950 kept orders, about 1.6 RMB each. An earlier draft printed 15 RMB for the 5% case; that was wrong and was corrected on 2026-09-22.

## Dairy and spreads cost research, September 23, 2026

### Dairy and spreads category fee data and the cash floor it produces
- Superseded (2026-10-02) for the JD Worldwide figures: see "JD Worldwide category fee standard, 2026-09-24 revision" and "JD Worldwide charges no annual or platform usage fee" (Calculator fee audit, October 2, 2026). The Tmall Global and Douyin figures here are unchanged.
- Value: Tmall Global deposit 50,000 RMB / annual fee 30,000 RMB / commission 2%; JD Worldwide 35,500 RMB (US$5,000 entry rung) / 7,100 RMB (US$1,000) / 4%; Douyin cross-border 50,000 RMB / no annual fee / 4%. Cash in before the first sale: 80,000 / 42,600 / 50,000 RMB. Cost per kept order on the Tmall Global model at a 5% return rate: 21 RMB on a 128 RMB jar, 25 RMB on a 250 RMB basket, 32 RMB on a 498 RMB case. Breakeven about 1.15m RMB year-one GMV at a 50% gross margin, before media.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro category "food", jd-worldwide-setup-and-run.astro category "food", douyin-cost-calculator.astro category "food-packaged")
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-23 (category arrays read directly from the three .astro files)
- Verified 2: 2026-09-23 (re-read before the draft was finished)
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: the 2% Tmall Global commission is the lowest band on the platform and Douyin's 50,000 RMB food deposit is half what apparel and beauty pay, so this triple is NOT a duplicate of the footwear or facial skincare tables (Ledger kill condition checked 2026-09-23, did not fire). KILL-CONDITION WARNING for later weeks: the same Tmall "Packaged food, grain, oil, snacks" triple will be produced by 25L (coffee and specialty food), 26L (bakery and food ingredients) and 29L (packaged food). Check the kill condition on those weeks before drafting. Tea (45L) sits at Tmall 2% / Douyin 2%, close but not identical. Infant formula (50L) is a separate Tmall category. The per-kept-order figures derive from the Tmall Global model's per-order defaults (pick and pack 4 RMB, last mile 11 RMB, return handling 15 RMB, payment 1%) at the three stated baskets, which are ASSUMPTIONS, not sourced AOVs; only the 250 RMB figure is the calculator's own default.
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

### Dairy and bee products need competent-authority recommendation for GACC registration
- Value: 乳品 (dairy) and 蜂产品 (bee products, i.e. honey) are among the imported food categories whose overseas producers are registered on the recommendation of the competent authority of the exporting country or region
- As of: April 2021 (Decree 248 promulgated April 12, 2021, effective January 1, 2022)
- Source: General Administration of Customs (海关总署), Decree No. 248, Article 7, in the State Council Gazette (国务院公报)
- URL: https://www.gov.cn/gongbao/content/2021/content_5616161.htm
- Verified 1: 2026-09-23 (Article 7 fetched, full category list confirmed verbatim)
- Verified 2: 2026-09-23 (re-fetched in iteration 8, Article 7, both categories and the decree dates confirmed)
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: the full Article 7 list is 肉与肉制品、肠衣、水产品、乳品、燕窝与燕窝制品、蜂产品、蛋与蛋制品、食用油脂和油料、包馅面食、食用谷物、谷物制粉工业产品和麦芽、保鲜和脱水蔬菜以及干豆、调味料、坚果与籽类、干果、未烘焙的咖啡豆与可可豆、特殊膳食食品、保健食品. Decree 248 is superseded by Decree 280 from June 1, 2026; pair this with the next entry, which is the version currently in force. This requirement is for GENERAL TRADE. Do not apply it to bonded cross-border, which is covered by 商财发〔2018〕486号.

### Recommended-registration catalogue under Decree 280, dairy and bee products retained
- Value: the catalogue of imported foods requiring registration on the recommendation of the competent authority now runs 17 categories, 肉与肉制品、肠衣、燕窝与燕窝制品、蜂产品、蛋与蛋制品、食用油脂、包馅面食、食用谷物、谷物制粉和麦芽、脱水蔬菜、调料粉、坚果与籽类、干果、特殊膳食食品、保健食品、乳品、水产品. Unroasted coffee and cocoa beans were removed; oil crops, fresh vegetables and dried beans were narrowed.
- As of: March 2026 (Announcement 2026 No. 27, March 18, 2026; Decree 280 published October 14, 2025, in force June 1, 2026)
- Source: General Administration of Customs Announcement 2026 No. 27 (海关总署公告2026年第27号), on gov.cn
- URL: https://www.gov.cn/zhengce/zhengceku/202603/content_7063537.htm
- Verified 1: 2026-09-23
- Verified 2: 2026-09-23 (re-fetched in iteration 8, catalogue and both categories confirmed)
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: this is the list in force. Cite it, not Decree 248's Article 7, when writing about the current position; cite Article 7 only for the history or when naming the categories removed. The full annex is a .doc and .pdf download; the category list is on the HTML page itself.

### Chinese label and first-import test report for imported dairy
- Value: imported prepackaged dairy must carry a Chinese label and Chinese instructions meeting Chinese law and the national food safety standards (Article 14); a first import must supply a test report covering the items listed in the relevant national food safety standard, where "first import" means identical overseas producer, product name, formula, overseas exporter and domestic importer through the same port (Article 11, paragraph 3)
- As of: originally issued January 24, 2013; amended November 23, 2018
- Source: Measures for the Inspection, Quarantine and Supervision of Imported and Exported Dairy Products (进出口乳品检验检疫监督管理办法), General Administration of Customs Decree No. 243, on the MOFCOM policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=65699
- Verified 1: 2026-09-23 (Articles 11 and 14 quoted verbatim)
- Verified 2: 2026-09-23 (re-fetched in iteration 8; the page shows the decree number as 海关总署令第243号 with the 2013 promulgation and the 2018 amendment, which resolves the earlier caution about 152号 vs 243号)
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: this binds under GENERAL TRADE. It does not decide how bonded cross-border stock is labelled. Article 17 also lists what the inspection certificate must carry, including 保质期, but the measure sets NO numeric remaining-shelf-life threshold for ordinary dairy; do not cite it for one.

### Imported dairy health certificate requirement
- Value: imported dairy must be accompanied by a health certificate issued by the competent government authority of the exporting country or region; overseas producers must be registered with GACC
- As of: December 2021 (announced December 23, 2021, effective January 1, 2022)
- Source: General Administration of Customs Announcement 2021 No. 114 (海关总署公告2021年第114号), 关于明确进口乳品检验检疫有关要求的公告
- URL: https://www.waizi.org.cn/doc/125909.html
- Verified 1: 2026-09-23
- Verified 2: 2026-09-23
- Used in: cost-to-sell-dairy-and-spreads-in-china (health certificate claim, stated in the body without a blockquote because the dairy measure above carries the same requirement from a primary URL)
- Notes: the URL is a regulatory mirror (郑州威驰), not customs.gov.cn. customs.gov.cn rule pages have been unreachable from this runner since 2026-09-21. Treat as a confirmation. If a customs.gov.cn URL becomes reachable, replace this one.

### GB 7718-2025: eight mandatory allergen classes, including milk and nuts
- Value: GB 7718-2025 makes eight allergen classes mandatory declarations: 含有麸质的谷物、甲壳纲类动物、鱼类、蛋类、花生、大豆、乳及乳制品（包括乳糖）、坚果及其果仁类制品
- As of: standard published March 2025, effective March 16, 2027
- Source: Food Mate Network (食品伙伴网), GB 7718-2025 亮点解读, quoting the standard text
- URL: https://fsc.foodmate.net/show.php?itemid=712970
- Verified 1: 2026-09-23 (all eight classes quoted verbatim, lettered a) to h))
- Verified 2: 2026-09-23
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: the Beijing regulator explainer (next entry) names only peanuts and gluten cereals as examples, so it CANNOT be cited for the milk and nuts claim. Use this entry for the list and the Beijing page for the effective date and the claim ban. Sources disagree on whether the standard was published March 16 or March 27, 2025, so the draft states only the effective date. Do not print a publication date for GB 7718-2025 without resolving that first.

### GB 7718-2025 effective date and the ban on zero-added claims
- Value: effective March 16, 2027 after a two-year transition; 零添加, 不添加 and 不使用 claims are prohibited; production date and expiry date must appear together in a dedicated high-contrast area in year-month-day order
- As of: May 2026 (explainer page dated May 7, 2026)
- Source: Beijing Municipal Administration for Market Regulation (北京市市场监督管理局)
- URL: https://scjgj.beijing.gov.cn/zwxx/scjgdt/202605/t20260507_4639154.html
- Verified 1: 2026-09-23
- Verified 2: 2026-09-23
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: applies to prepackaged food sold inside China. Relevant to honey, jam and yogurt marketing, which lean on no-added-sugar claims in Europe.

### Infant formula: three-month remaining shelf life at declaration, no domestic relabelling
- Value: imported infant formula whose declaration date is less than three months before the end of its shelf life may not be imported; the Chinese label must be printed directly on the smallest sales pack before entry and may not be stuck on inside China
- As of: August 2023
- Source: People's Daily Overseas Edition (人民日报海外版), 海关答疑 column
- URL: http://paper.people.com.cn/rmrbhwb/html/2023-08/19/content_26012168.htm
- Verified 1: 2026-09-23 (both sentences quoted verbatim)
- Verified 2: 2026-09-23
- Used in: cost-to-sell-dairy-and-spreads-in-china (boundary marker only, stated in the body without a blockquote)
- Notes: applies to 婴幼儿配方乳粉 specifically. Do NOT generalise the three-month rule to butter, yogurt, cheese or honey. This is the anchor figure for brief 50L (cost to sell infant formula, week 50); find the underlying customs rule before that piece cites it as the primary source.

### China dairy imports 2025, and the average price of imported packaged milk
- Value: 2,657,400 tonnes of dairy imported in 2025, up 1.6%, worth US$12.78bn, up 13.8%. Packaged milk 371,600 tonnes, down 10.8%, worth US$389m, down 5.8%, at an average US$1,046 a tonne, up 5.5%.
- As of: full year 2025
- Source: Dairy Online (乳业在线), 2025年中国乳制品进出口统计, from the January 2026 Dairy Economy Observer report (奶业经济观察2026年1月分析报告) on China Customs statistics (中国海关统计)
- URL: https://www.dairyonline.cn/13031.html
- Verified 1: 2026-09-23
- Verified 2: 2026-09-23 (both sentences re-quoted verbatim)
- Used in: cost-to-sell-dairy-and-spreads-in-china
- Notes: the article's own date line shows only "4月2日" without a year, which is why the citation in the draft is anchored to the January 2026 report rather than to the page date. US$1,046 a tonne is about 7.4 RMB a litre at 7.1 FX, which is the comparison the draft uses against the 15 RMB per-parcel cost.

### NOT SOURCED, do not research again from these dead ends
- China honey import volume and price: the only dated numbers found on 2026-09-23 were a Sohu self-media post (January 13, 2026) attributing 华经产业研究院 without naming the underlying statistic, and an 农小蜂 / abeedata report (October 28, 2020) whose latest complete year is 2016 and whose source is the FAO rather than Chinese customs. Neither meets the rules in this file. No honey import figure was claimed. Relevant to 25L, 26L and 29L.
- A bonded-warehouse remaining-shelf-life gate for general food: the 1/3 and 2/3 thresholds that circulate in freight-forwarder copy had no reachable regulator or platform-documentation source on 2026-09-23. No numeric threshold was claimed for dairy or spreads. The only sourced shelf-life gate is the infant formula three-month rule above.
- The "1,476 tariff lines" total for the positive list after the 2022 adjustment: quoted in trade coverage but not on the gov.cn announcement page, and the annex PDF was not fetchable. No tariff-line count and no HS code is claimed. Same limit the footwear piece recorded.

## On China teardown research, September 24, 2026

All SEC documents sit under https://www.sec.gov/Archives/edgar/data/1858985/
(On Holding AG, CIK 0001858985). SEC pages need a User-Agent header to a
non-browser fetch; the full text was downloaded and searched at both checks.

### On entered China in 2018; China net sales 2019, 2020 and H1 2021
- Value: entered China 2018; China net sales CHF 1.8 million (2019), CHF 5.5 million (2020, +199%); CHF 8 million in H1 2021. IPO price $24.00 a share. Tmall and JD.com counted inside DTC.
- As of: prospectus dated September 14, 2021
- Source: On Holding AG, prospectus (Form 424B4)
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000119312521275158/d175570d424b4.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: the only China-only revenue On has filed. Every later filing reports Asia-Pacific only. The 424B4 gives both "four" and "six" China mall stores in different sections; do not cite a store count from it.

### On treats Tmall and JD.com as DTC; first owned store opened late 2019 in China; IPO proceeds
- Value: "Within China, we also consider our distribution through Tmall and JD.com as DTC." First owned store "opened in late 2019 in China, followed by our flagship location in New York City in late 2020." Eight owned China stores in Shanghai, Chengdu, Shenzhen and Beijing. IPO gross proceeds CHF 652.5 million (US$702.2 million), 29,258,125 new shares at $24.00. Subsidiary: On Running Sports Products (Shanghai) Company Ltd.
- As of: fiscal 2021 (filed 2022-03-18)
- Source: On Holding AG, Form 20-F for fiscal 2021
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898522000006/onholdingag-20211231.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: the FY2025 20-F instead says the first owned store was in Tokyo in 2022 (APAC excluding China framing). Cite the FY2021/FY2022 wording for the China first store.

### On China stores at end-2022, lockdown closures, Shanghai HQ grant
- Value: 13 owned stores in China at end-2022; store and warehouse closures from COVID-19 lockdowns for most of Q2 2022; CHF 0.5 million Chinese government grant in Q4 2022 for the APAC headquarters in Shanghai.
- As of: fiscal 2022 (filed 2023-03-21)
- Source: On Holding AG, Form 20-F for fiscal 2022
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898523000011/onholdingag-20221231.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: the grant sentence begins mid-sentence in the filing ("In addition, during the fourth quarter 2022 On received..."); quote from "received". Jiemian (2024-03-14) says 12 stores at end-2022; the filing's 13 wins.

### On China stores at end-2023 and end-2024
- Value: "10 own retail stores outside of China and 22 in China" (end-2023); "30 smaller format mall-based stores in China" (end-2024)
- As of: fiscal 2023 (filed 2024-03-12) and fiscal 2024 (filed 2025-03-04)
- Source: On Holding AG, Forms 20-F for fiscal 2023 and fiscal 2024
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898524000012/onholdingag-20231231.htm ; https://www.sec.gov/Archives/edgar/data/1858985/000185898525000003/onholdingag-20241231.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: definitions shift year to year (owned stores; smaller mall-based stores; locations including Hong Kong from FY2025). Label the definition when charting.

### On global footprint end-2025, Asia-Pacific 2025, expansion-cost risk language
- Value: 67 retail locations, of which "38 locations in China, including Hong Kong"; Asia-Pacific net sales +96.4% to CHF 511.1 million, 17.0% of CHF 3,014.0 million, "primarily driven by strong sales growth in China and Japan across both channels"; risk factor: expansion "especially in the US and Asia-Pacific" brought "higher customs, payroll and other expenses"
- As of: fiscal 2025 (filed 2026-03-03)
- Source: On Holding AG, Form 20-F for fiscal 2025
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898526000008/onholdingag-20251231.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: Exhibit 8.1 of the same filing (exhibit81_exhibit81subsidi.htm) lists On Running Sports Products (Shanghai) Company Ltd.

### On full year 2025: SG&A, operating result, net income
- Value: SG&A +27.0% to CHF 1,516.6 million; net sales +30.0% to CHF 3,014.0 million; operating result +78.2% to CHF 377.0 million; net income -15.9% to CHF 203.7 million
- As of: full year 2025, release dated March 3, 2026
- Source: On Holding AG, fourth quarter and full year 2025 results (6-K exhibit 99.1)
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898526000010/ex991pressreleasedatedmarc.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: the net income fall is not tied to store costs (operating result rose 78.2%). Lanjinger (蓝鲸财经) of 04-16 reported the same SG&A and net-profit figures but prints no year on the page; use this release instead.

### On Asia-Pacific Q2 2026
- Value: Asia-Pacific net sales +43.1% to CHF 170.5 million, 20.0% of net sales; H1 2026 CHF 344.5 million, 20.5%
- As of: quarter ended June 30, 2026, released August 11, 2026
- Source: On Holding AG, second quarter 2026 MD&A (6-K exhibit 99.2)
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898526000018/a26q2-exhibit992xmda.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### On long-term target: China 10%+ of net sales
- Value: long-term targets include "a China share of 10%+" of overall net sales
- As of: Investor Day release dated October 4, 2023
- Source: On Holding AG, Investor Day 2023 release
- URL: https://www.sec.gov/Archives/edgar/data/1858985/000185898523000045/oninvestorday2023-pressrel.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: no later filing says whether the target was reached.

### On China entry model: community first, own plus dealer stores
- Value: 2018年正式进入中国市场; 率先建立社群; 直营+经销商集合模式; end-2023 22 of 32 global direct stores in China across Shanghai, Beijing, Shenzhen, Guangzhou, Chengdu
- As of: May 30, 2024
- Source: Lanjinger (蓝鲸财经), reporter 王涵艺
- URL: https://www.lanjinger.com/d/232884
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### On first China store, store mix late 2023, COVID-years quote
- Value: first store 上海浦东嘉里城 (Kerry Parkside, Pudong), December 2019; 44 stores in China, 20 direct and 24 dealer; Li Meina (head of offline business, Greater China) on the three COVID years (蓄力和思考)
- As of: December 15, 2023
- Source: Lanxiong Sports (懒熊体育), on NetEase
- URL: https://c.m.163.com/news/a/IM098E5K052989GA.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: Jiemian names 上海嘉里中心 (Jing'an Kerry Centre) instead; three sources say Pudong Kerry Parkside.

### On joined Tmall in Q1 2019; Tmall growth 263% and 125%
- Value: 2019第一季度入驻天猫; grew 263% and 125% in two consecutive years
- As of: April 15, 2022
- Source: Ecommerce Online (电商在线), its own Sohu account
- URL: https://www.sohu.com/a/538204412_197955
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: the author field on the Sohu page is 电商在线 itself, so this is the publisher's own post. A "Tmall end of 2018" date circulates in search snippets only; not usable.

### On Tmall followers and shoe price band, May 2024
- Value: Tmall flagship 68万 (680,000) followers; average shoe above 1,000 RMB, upper models above 2,000 RMB
- As of: May 16, 2024
- Source: Southern Metropolis Daily (南方都市报), reporter 王欣
- URL: https://m.mp.oeeee.com/a/BAAFRD000020240516953884.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: Sina Finance (2024-08-06, logged above under Allbirds) gives 72万 in August 2024.

### On Double 11 2024 on Tmall: 85% of orders in the 1,000 to 2,000 RMB band
- Value: On Double 11 sales up more than 40% (四成) year on year; 85% of On orders in the 1000-2000元 band (HOKA 53%), per Tmall data
- As of: November 11, 2024
- Source: Jiemian (界面新闻), on Sina Finance
- URL: https://finance.sina.com.cn/jjxw/2024-11-11/doc-incvskcn0716845.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### On in China, August 2026: 80+ stores, 100 targeted, never discounts
- Value: 30多个城市布局超80家门店, 计划到今年底突破百家; co-founder David Allemann: 天猫尤为强劲，尽管我们从不打折; reporter found no On product in Tmall promotions
- As of: August 12, 2026
- Source: 21 Finance (21财闻汇), reporter 韩璐, on Sina Finance
- URL: https://finance.sina.com.cn/wm/2026-08-12/doc-ininaezk5274648.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: store total includes dealer-run stores. The Allemann line is a Chinese rendering of an English call remark; paraphrase, never put it in English quote marks.

### On store sizes: about 100 sqm three years ago, now 200 to 300 sqm
- Value: Martin Hoffmann: 三年前开设的店铺可能主要集中在100平方米左右; now 200 or even 300 square meters; about 70 China stores, 30 direct (April 2025)
- As of: April 19, 2025
- Source: Huxiu (虎嗅), 柳柳
- URL: https://www.huxiu.com/article/4252374.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### On Shenzhen MixC World flagship, 802 sqm
- Value: opened March 5, 2026; 802 square meters; On's largest store in China
- As of: March 6, 2026
- Source: National Business Daily (每日经济新闻), 毕媛媛
- URL: https://www.nbd.com.cn/articles/2026-03-06/4282694.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### On lookalike SKON: 79 to 199 RMB against 400 to 800 RMB
- Value: genuine On T-shirt 400～800元; SKON similar items at 79, 99 and 199 RMB
- As of: June 25, 2025
- Source: Huxiu (虎嗅), from Lanxiong Sports (懒熊体育)
- URL: https://m.huxiu.com/article/4503253.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china

### Sports and outdoor category fee data (proprietary)
- Superseded (2026-10-02) for the JD Worldwide figures: see "JD Worldwide category fee standard, 2026-09-24 revision" and "JD Worldwide charges no annual or platform usage fee" (Calculator fee audit, October 2, 2026). The Tmall Global and Douyin figures here are unchanged.
- Value: Tmall Global deposit 50,000 RMB / annual fee 60,000 RMB / commission 5% (cash before first sale 110,000 RMB); JD Worldwide 35,500 / 7,100 / 5%; Douyin cross-border deposit 75,000 RMB / no annual fee / 5%
- As of: September 2026
- Source: TheChinaPath calculator data (sports rows in src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (category arrays read from the three files)
- Verified 2: 2026-09-24 (re-read before the draft was finished)
- Used in: how-on-running-entered-china
- Notes: identical to footwear on Tmall Global and JD Worldwide; Douyin differs (sports 75,000 against footwear 100,000).
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

### On storefronts observable on the day
- Value: on.tmall.com 302 to on.world.tmall.com/shop/view_shop.htm, served a captcha (a nonexistent shop domain redirects to store.taobao.com/shop/noshop.htm instead); www.on-running.cn 200, title On昂跑官方商城 (JS-rendered); JD search returned a 京东验证 bot check
- As of: September 24, 2026
- Source: direct fetch by the draft run
- URL: https://on.tmall.com/ ; https://www.on-running.cn/
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: how-on-running-entered-china
- Notes: no assortment or review count obtainable. Re-check before any Refresh.

### Researched, not used (On, 2026-09-24)
- Jiemian 11920175 and 11224362 (65 stores incl. 36 dealer-run; 29 direct; Q1 2024 23 stores): no date printed on the Jiemian page; a Sina repost dated 2024-11-01 exists but was not fetched. Ledger rule 1.
- Legal entity name 昂跑体育用品（上海）有限公司, set up 2018-05-17: only Baike and company-lookup sites. Check the national enterprise credit system before use.
- 华夏时报 via Sina, 2026-05-15, on tier-1 saturation: attribution to analysts unclear.
- 21世纪经济报道, 2026-03-30: Martin Hoffmann steps down May 1, 2026; not material to the entry story.

## Partner cluster P01 (china-trade-fairs-find-distributor), 2026-09-24

### China Food and Drinks Fair, spring 2026 results and autumn 2026 dates
- Value: 114th fair March 26 to 28, 2026 in Chengdu; 325,000 square meters; 6,615 exhibitors from more than 40 countries and regions; more than 410,000 industry visits over three days; official mini program 1,238,200 visits and 28,066 online inquiries; an alliance of seven major wholesale markets brought several thousand large distributors; close to 60% of professional visitors from outside Sichuan; liquor channel selection sessions where buyers take the stands (采购方设展、生产方上门). The 115th fair runs October 15 to 17, 2026 at the Nanjing International Expo Center.
- As of: March 2026 (published March 31, 2026)
- Source: Xinhua (新华网)
- URL: http://www.xinhuanet.com/food/20260331/272302f4d9c246caba268dca11a777f4/c.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched in iteration 8; 32.5万平方米, 6615家, 超41万人次, 123.82万次, 28066条, 接近60%, 2026年10月15日至17日 and 南京国际博览中心 all matched)
- Used in: china-trade-fairs-find-distributor
- Notes: dozens of 糖酒会 "官网" domains are booking agents; never cite them. No official 2027 spring date found on 2026-09-24. The Nanjing government page (https://www.nanjing.gov.cn/zgnjsjb/jrtt/202604/t20260423_5828424.html, April 23, 2026, checked once) confirms the autumn dates and a 200,000 square meter show with international food and wine halls.

### CIIE 2026 overseas professional visitor rules
- Value: ninth CIIE November 5 to 10, 2026, National Exhibition and Convention Center (Shanghai); overseas professional visitors register online by 24:00 Beijing time October 20, 2026 and pay by 24:00 October 23; no on-site registration; visitor days November 6 to 10; passes 200 RMB (Nov 6 to 10) or 100 RMB (Nov 8 to 10)
- As of: May 2026 (no printed date; the URL path carries 20260527)
- Source: China International Import Expo Bureau (中国国际进口博览局)
- URL: https://www.ciie.org/zbh/cn/19BusEx/SerArea/ProAud/Q&A/20260527/61239.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor, china-importer-state-owned-private
- Notes: this is the OVERSEAS visitor Q&A. Domestic visitor rules may differ. The date comes from the URL path; if the page later prints a date, prefer it.

### Eighth CIIE buyer and matchmaking figures
- Value: 43 trading delegations and 700+ sub-delegations; 460,000+ registered visitors (+7%); buyer corridor with 20 retail chains and leading ecommerce platforms plus 14 central SOEs, 600+ rounds of talks; key buyer selection sessions 1,300 rounds in agri-food, consumer goods and medical; trade and investment matchmaking 5,000+ companies and parks, 300+ cooperation intentions; intended deals US$83.49bn (+4.4%)
- As of: November 2025 (发布日期 2025年11月10日)
- Source: China International Import Expo Bureau (中国国际进口博览局)
- URL: https://www.ciie.org/zbh/businessEx/expoNews/20251112/54275.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor, china-importer-state-owned-private
- Notes: the same page carries the Shanghai delegation's figures (124,000 buyers from 18,000+ companies, US$10.62bn); not used. Exhibitor count (4,108 from 138 countries) is on Economic Information Daily via Guangming, https://economy.gmw.cn/2025-11/11/content_38404767.htm, checked once 2026-09-24, not used.

### FHC Shanghai 2026 dates and scale
- Value: 29th FHC Shanghai Global Food Trade Show November 10 to 12, 2026, Shanghai New International Expo Center; 3,000+ exhibitors; 180,000+ professional buyers expected; seven concurrent shows including ProWine Shanghai
- As of: August 2026 (published August 14, 2026)
- Source: FHC organizer release on Foodmate (食品伙伴网)
- URL: https://fsc.foodmate.net/show.php?itemid=750559
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor
- Notes: the English PR Newswire release of August 25, 2026 says 3,500+ exhibitors; the Chinese release says 3,000+. The draft uses 3,000+. The organizer homepage (https://www.fhcchina.com/, undated, observed 2026-09-24, both checks passed) says the last edition drew 173,143 professional visitors including 进口商、经销商、超市、电商平台、酒店及餐饮连锁, and offers pre-arranged one-to-one meetings for verified buyers; cite it as the organizer's site with the observation date.

### Canton Fair 140 schedule
- Value: opens October 15, 2026; phase 1 Oct 15 to 19, phase 2 Oct 23 to 27, phase 3 Oct 31 to Nov 4; about 1.55 million square meters
- As of: July 2026 (published 2026-07-13)
- Source: Ministry of Commerce (商务部), Economic and Commercial Office of the Embassy in Kenya
- URL: https://ke.mofcom.gov.cn/spgq/art/2026/art_34f0d0478b3946d2979f6af41b4035aa.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor

### Canton Fair 140 exhibitors and pre-registered overseas buyers
- Value: 32,000 exhibitors (3.2万家参展企业); more than 210,000 overseas buyers pre-registered (超过21万境外采购商已经完成预登记); the fair has grown to 1.55 million square meters and 310,000 buyers
- As of: September 2026 (SCIO press conference, published September 18, 2026)
- Source: Guangzhou Daily (广州日报), via 21st Century Business Herald (21世纪经济报道)
- URL: https://m.21jingji.com/article/20260918/herald/5607d878505d248317029f589cf56e80.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor

### SIAL China Shanghai 2027 dates and forecast
- Value: May 18 to 20, 2027, Shanghai New International Expo Center; forecast 200,000 square meters, 5,000+ brands from 75 countries and regions, 180,000 professionals from 132 countries and regions
- As of: September 2026 (published September 10, 2026)
- Source: SIAL China (西雅国际食品展), press release
- URL: https://www.sialchina.cn/topics/show-news/2027sialxiyazhandingdang.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor
- Notes: forecasts, not results. The same site lists SIAL Guangzhou for September 6 to 8, 2027.

### CBE 2026 results and 2027 dates
- Value: 30th CBE closed May 14, 2026 at the Shanghai New International Expo Center; 230,000 square meters; 3,200 companies from 40+ countries and regions; buyers from 120+ countries and regions
- As of: June 2026 (published June 5, 2026)
- Source: Cosmetic News (化妆品资讯)
- URL: https://www.cosmetic-news.net/archives/10203
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor
- Notes: organizer-derived trade report. The 2027 dates (May 12 to 14, 2027) and the "CBE Buyer Club, access to China's master distributors, importers and decision makers" line come from the organizer homepage https://www.chinabeautyexpo.com/ (undated, observed 2026-09-24, both checks passed); name it with the observation date, no blockquote.

### Food Safety Law: food licensing, importer filing, Chinese label
- Value: Art. 35, food production and sale require a license, except that companies selling only edible farm products or only prepackaged food need no license, and prepackaged-only sellers must file with the county-level regulator; Art. 96, overseas exporters or agents and food importers file with the entry-exit inspection authority, overseas food producers must be registered with it, and the authority publishes the lists; Art. 97, imported prepackaged food needs a Chinese label stating origin and the domestic agent's name, address and contact, or it may not be imported
- As of: third amendment, September 12, 2025
- Source: Ministry of Commerce policy database (商务部), Food Safety Law of the People's Republic of China (中华人民共和国食品安全法)
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104105
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor, china-importer-state-owned-private
- Notes: general trade. Cross-border retail import goods are governed by 商财发〔2018〕486号 (ledger), which exempts them from first-import registration and labelling rules.

### Compass shortlist turnaround (proprietary, already published)
- Value: a Compass shortlist usually takes two to three weeks from the brief
- As of: September 2026
- Source: TheChinaPath site copy (src/content/pages/compass/en.ts, shortlist.description; src/content/pages/partner-guides/distributor.ts, FAQ)
- Label in copy: "from Compass, September 2026"
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor, china-importer-state-owned-private
- Notes: a published service-level figure, not a data pull. It does not replace the Compass snapshot the partner plan (section 6) still needs.

Re-verification of an existing entry: "Cosmetics Supervision and Administration
Regulation: special vs general cosmetics" re-fetched 2026-09-24, articles 17
and 23 text matched; add china-trade-fairs-find-distributor to its "Used in".

## Partner cluster P02 (change-domestic-responsible-person-china-cosmetics), 2026-09-24

### NMPA Announcement 70 of 2026: responsible-person change no longer needs the old RP's consent
- Value: a product changing its domestic responsible person no longer submits the original RP's sealed consent letter (知情同意书) or an effective judgment proving the change; it submits (1) the RP authorization letter original and its notarization original, (2) the list of products changing RP, (3) the new RP's commitment to assume all the original RP's responsibilities for the products, including products already on the market before the change. Effective on publication; earlier NMPA documents that conflict give way.
- As of: signed July 28, 2026, published July 29, 2026 (NMPA Announcement 2026 No. 70, item 8, index FGWJ-2026-10075)
- Source: NMPA (国家药监局), 国家药监局关于化妆品注册备案有关事项的公告（2026年第70号）
- URL: https://www.nmpa.gov.cn/xxgk/ggtg/hzhpggtg/jmhzhptg/20260729115807198.html
- Verified 1: 2026-09-24 (rendered with headless Chromium; item 8 read verbatim)
- Verified 2: 2026-09-24 (re-rendered before the draft was finished; all strings present)
- Used in: change-domestic-responsible-person-china-cosmetics
- Notes: nmpa.gov.cn returns HTTP 412 to curl and WebFetch (JS anti-bot); `chrome.exe --headless=new --virtual-time-budget=20000 --dump-dom <url>` from the local ms-playwright Chromium passes it. The announcement has eight items; items 1 to 7 cover China-first launches, animal-test waivers, raw-material data kept on file, shared test reports for similar formulas, production-site transfers and efficacy-test methods. Shanghai MPA and Xinhua carried the same text on July 29, 2026.

### NMPA's stated reason for simplifying the responsible-person change
- Value: the change 破除企业在商业合作调整中的程序性障碍 (removes a procedural obstacle when companies adjust commercial cooperation) and lets registrants and filers decide for themselves according to the market; the announcement implements the November 17, 2025 opinion 国药监妆〔2025〕18号
- As of: July 29, 2026
- Source: NMPA (国家药监局), 《国家药监局关于化妆品注册备案有关事项的公告》政策解读
- URL: https://www.nmpa.gov.cn/xxgk/zhcjd/zhcjdhzhp/20260729120327100.html
- Verified 1: 2026-09-24 (headless render)
- Verified 2: 2026-09-24 (re-rendered)
- Used in: change-domestic-responsible-person-china-cosmetics
- Notes: same 412 behaviour as the announcement page.

### Old responsible-person change rule and related document rules (Art. 16, 24, 38, 48, 57)
- Value: Art. 48 required the product list, the original RP's sealed consent letter OR an effective judgment proving the change, and the new RP's commitment. Art. 38: a change must be completed before the changed product is produced or imported; products produced, sold or imported before the change may be sold until the end of shelf life. Art. 16: the authorization letter must state the parties, the relationship, the scope and the term; one product may not authorize several RPs. Art. 24: once the authorization term expires, the RP cannot handle new registrations or filings for that overseas company (matters already under way may be completed). Art. 57: re-filing after a change of filing authority may reuse the original filing materials.
- As of: NMPA Announcement 2021 No. 32, in force May 1, 2021; Art. 48's consent and judgment requirement superseded by NMPA Announcement 2026 No. 70 from July 29, 2026
- Source: NMPA (国家药监局), 化妆品注册备案资料管理规定, via the Fujian Provincial Medical Products Administration
- URL: https://yjj.scjgj.fujian.gov.cn/hzp/flfg/202106/t20210608_5616054.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: change-domestic-responsible-person-china-cosmetics
- Notes: same page as the animal-testing exemption entry (Art. 33). Chapter 4 (变更事项要求) applies to both registered special and filed general cosmetics. Nothing here settles whether moving the RP to a company in another province forces a re-filing; Order 35 Art. 36 covers an ADDRESS change that moves the filing authority. Do not state a cross-province rule without a further source.

### Domestic responsible person duties (SAMR Order 35, Art. 8) and filing rules
- Value: an overseas registrant or filer must appoint a Chinese enterprise legal person as domestic responsible person, which (1) registers or files in the registrant's or filer's name, (2) assists with adverse reaction and new-ingredient safety monitoring, (3) assists with recalls, (4) carries quality and safety liability for products on the Chinese market under its agreement with the registrant or filer, (5) cooperates with inspections. Art. 34: a general cosmetic filing is complete once the materials are submitted on the platform. Art. 36: where the filer's or RP's address change moves the filing authority, the filer must file again. Art. 62: the imported general cosmetics filing number carries the RP's province abbreviation.
- As of: issued January 7, 2021, in force May 1, 2021
- Source: SAMR (国家市场监督管理总局), 化妆品注册备案管理办法, Order No. 35, State Council Gazette (国务院公报)
- URL: https://www.gov.cn/gongbao/content/2021/content_5595926.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: change-domestic-responsible-person-china-cosmetics (Art. 8 only)
- Notes: Art. 9 (publication within 5 working days) applies to registrations granted and filings completed; do not stretch it to RP changes. Art. 49: a special cosmetic registration certificate cannot be transferred.

### Chinese label must show the domestic responsible person's name and address
- Value: where the registrant or filer is an overseas company, the Chinese label must also carry the domestic responsible person's name and address (article 7(2)); names and addresses must match the registration certificate or filing record (article 10)
- As of: NMPA Announcement 2021 No. 77, issued May 31, 2021, in force May 1, 2022
- Source: State Council Gazette (国务院公报), 化妆品标签管理办法
- URL: https://www.gov.cn/gongbao/content/2021/content_5631831.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: change-domestic-responsible-person-china-cosmetics
- Notes: same URL as the "Chinese label required on cosmetics sold inside China" entry; this entry adds article 7(2) and article 10. General trade only.

### Penalty on a responsible person that fails to assist with monitoring or recalls
- Value: fine of 20,000 to 100,000 RMB, 100,000 to 500,000 RMB where serious, plus a five-year ban on the legal representative, principal and directly responsible staff from cosmetics production and trade, imposed by the provincial medical products administration (article 70); article 23 requires the appointment
- As of: State Council Decree No. 727, promulgated June 16, 2020, in force January 1, 2021
- Source: State Council (国务院), 化妆品监督管理条例, State Council Gazette (国务院公报)
- URL: https://www.gov.cn/gongbao/content/2020/content_5525087.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: change-domestic-responsible-person-china-cosmetics
- Notes: same URL as the special vs general cosmetics entry (articles 16, 17, 23); this entry adds article 70.

### Re-verification of existing entries (update their Used in lines, no new entry)
- Cross-border retail imports supervised as personal-use goods (商财发〔2018〕486号): re-fetched 2026-09-24, clause present. Add `change-domestic-responsible-person-china-cosmetics` to Used in.
- Facial skincare category fee data and the cash floor it produces (proprietary): skincare rows re-read 2026-09-24 (Tmall Global 50,000 / 4% / 30,000; JD Worldwide 35,500 / 5% / 7,100; Douyin 100,000 / 5%). Add `change-domestic-responsible-person-china-cosmetics` to Used in. Label in copy: "TheChinaPath calculator data, September 2026".
  - Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

## Partner cluster P03 (verify-chinese-company-qichacha), 2026-09-24

### Enterprise disclosure rules: what GSXT carries, the annual report window and the revocation trigger
- Value: the market regulator publishes registration and filing data, chattel mortgages, equity pledges and administrative penalties (art. 6); other departments publish the licences they grant and their penalties (art. 7); annual report filed January 1 to June 30 each year (art. 8), carrying subscribed and paid-in capital, amount, date and method (art. 9); changes disclosed within 20 working days (art. 10); a late annual report puts the company on the abnormal operations list, and two consecutive years missed plus unreachable at the registered address means the business licence is revoked; falsified disclosures fined 10,000 to 50,000 RMB, serious cases 50,000 to 200,000 RMB plus the serious-violation list, and that company's legal representative barred for 3 years (art. 18)
- As of: revised March 10, 2024, in force May 1, 2024 (State Council Decree 654 of 2014, as revised); SAMR page dated June 25, 2024
- Source: State Administration for Market Regulation (市场监管总局), 企业信息公示暂行条例
- URL: https://www.samr.gov.cn/xyjgs/flfg/art/2024/art_be55c2e3a54a43e5ab12794c9dc87600.html
- Verified 1: 2026-09-24 (arts. 6, 8, 9, 10 on the SAMR page; full art. 18 on the government mirror http://www.wnd.gov.cn/doc/2024/04/19/4291921.shtml)
- Verified 2: 2026-09-24 (SAMR page re-fetched; every clause including the two-year revocation sentence confirmed on the SAMR page itself)
- Used in: verify-chinese-company-qichacha
- Notes: the fine bands and the 3-year bar on the legal representative were researched but not printed. The old "three years on the abnormal list moves a company to the serious-violation list" rule is NOT in this regulation or in SAMR Order 128; do not cite it.

### Company Law 2023: five-year paid-in rule, GSXT capital disclosure, branch liability
- Value: an LLC's subscribed capital must be paid in full within five years of establishment (art. 47); companies publish subscribed and paid-in amounts, method and date, equity changes and licence events on GSXT (art. 40); a branch has no legal personality and the company bears its civil liability (art. 13)
- As of: adopted December 29, 2023, in force July 1, 2024
- Source: PRC Company Law (中华人民共和国公司法, 2023修订), Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=98771
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha, china-importer-state-owned-private
- Notes: art. 47 speaks of LLCs only; joint-stock companies follow a different rule.

### Registered capital transition: June 30, 2027 deadline
- Value: companies registered before June 30, 2024 whose remaining subscription period runs more than five years from July 1, 2027 must cut it to within five years by June 30, 2027; the registrar marks non-compliant companies specially on GSXT
- As of: July 1, 2024 (State Council rules, 13 articles, in force on publication)
- Source: State Council (国务院), 国务院关于实施《中华人民共和国公司法》注册资本登记管理制度的规定, on 中国政府网
- URL: https://www.gov.cn/yaowen/liebiao/202407/content_6960452.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: ministry mirrors (mee.gov.cn) give the decree as No. 784; the gov.cn news page does not print the number, so the draft cites none.

### Business scope: general and licensed items
- Value: business scope comprises general items and licensed items; a licensed item requiring approval before registration needs the approval documents at registration (art. 14); registration items include name, type, scope, domicile, registered capital and legal representative (art. 8)
- As of: promulgated July 27, 2021, in force March 1, 2022 (State Council Decree 746)
- Source: State Council (国务院), 中华人民共和国市场主体登记管理条例, Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=90465
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: whether 货物进出口 registers as a general or a licensed item was NOT verified; the draft only says to look for it.

### Prepackaged-food-only sellers: filing, not a licence
- Value: the April 2021 amendment to article 35 of the Food Safety Law moved 仅销售预包装食品 from licence management to filing management; implemented by SAMR Order 78 (食品经营许可和备案管理办法)
- As of: explainer dated July 13, 2023
- Source: Government of China (中国政府网), 《食品经营许可和备案管理办法》解读
- URL: https://www.gov.cn/zhengce//202307/content_6891674.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: relevant to every food and drink partner piece (P33 in particular). Does not cover import-specific registrations; cite GACC for those.

### Dishonest judgment debtor list: grounds, term, publication, deletion
- Value: six listing grounds (art. 1); two years for grounds 2 to 6, extendable by one to three years for violent obstruction or multiple breaches, no fixed term stated for ground 1 (able to pay and refusing) (art. 2); a company listing publishes name, unified social credit code, legal representative, obligation, conduct, case number and court (art. 6); every court loads the SPC database, which publishes centrally (art. 7); deletion within three working days on payment and six other grounds (art. 10)
- As of: amended January 16, 2017, in force May 1, 2017; page dated March 2, 2017
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于公布失信被执行人名单信息的若干规定 (2017修正)
- URL: https://www.court.gov.cn/fabu/xiangqing/37182.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (art. 2 re-read verbatim by curl)
- Used in: verify-chinese-company-qichacha
- Notes: never write "listings run two years" without the ground qualifier.

### China Enforcement Information Disclosure site: what it publishes
- Value: 失信被执行人信息、限制消费人员名单、执行实施案件的被执行人信息、法院终结本次执行案件信息以及执行法律文书
- As of: June 8, 2018
- Source: Supreme People's Court (最高人民法院), 中国执行信息公开网改版升级
- URL: https://www.court.gov.cn/shenpan/xiangqing/101002.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: zxgk.court.gov.cn itself returned HTTP 403 to this runner on 2026-09-24; cite this SPC page for what the site carries.

### Dishonest-debtor list flows, 2025
- Value: 2,339,800 listings added in 2025 (233.98万人次); 2,669,600 exited through credit repair (266.96万人次); enforcement caseload up 15.43%
- As of: January 26, 2026 (SPC press conference, 邵长茂 and 毛立华)
- Source: Jiemian (界面新闻)
- URL: https://www.jiemian.com/article/13933520.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: flows, not the stock on the list. A stock figure (about 8.5 million, March 2025) appeared only in secondary coverage and was not verified.

### Market-regulation penalty publicity: 20 working days in, three months or three years out
- Value: penalties published on GSXT within 20 working days of the decision (art. 9); public-criticism-only or lower-band fines stop being published after three months, all others after three years (art. 13)
- As of: SAMR Order 45, in force September 1, 2021
- Source: State Council Gazette (国务院公报), 市场监督管理行政处罚信息公示规定
- URL: https://www.gov.cn/gongbao/content/2021/content_5647362.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: the "lower-band fine" (较低数额罚款) threshold is set by each province. Do not state a national threshold.

### Court judgments online: mediation excluded, seven working days
- Value: cases closed by mediation or confirming a people's mediation agreement are not published unless needed to protect state, public or third-party interests (art. 4(3)); unpublished cases still show case number, court, date and the reason (art. 6); effective judgments go online within seven working days (art. 7)
- As of: 法释〔2016〕19号, adopted July 25, 2016, in force October 1, 2016; page dated August 31, 2016
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于人民法院在互联网公布裁判文书的规定, carried by China News Service (中国新闻网)
- URL: https://www.chinanews.com.cn/gn/2016/08-31/7989135.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (article text read verbatim by curl; the WebFetch summary of this page was unreliable)
- Used in: verify-chinese-company-qichacha
- Notes: court.gov.cn/fabu/xiangqing/5867.html is the 2013 version (法释〔2013〕26号); do not cite it for the current rule.

### China Judgements Online: 2024 uploads
- Value: 9.69 million new documents posted in 2024 (969万余篇), up 92.73% on 2023
- As of: January 8, 2025
- Source: People's Daily (人民日报, 魏哲哲), via 中国共产党新闻网, citing the Supreme People's Court
- URL: http://cpc.people.com.cn/n1/2025/0108/c64387-40397363.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: implies about 5.03 million in 2023 (our arithmetic, printed as "roughly half"). The SPC's January to November 2024 figure (810多万, up 67.3%) is at https://www.court.gov.cn/zixun/xiangqing/451171.html, checked once, not used. The 100-million milestone (August 30, 2020, https://www.court.gov.cn/zixun/xiangqing/252201.html) passed both checks on 2026-09-24 but was cut from the draft.

### Beneficial-owner information is not public
- Value: beneficial-owner data is filed through the market-regulation registration system and pushed to the People's Bank of China (art. 4); state bodies may obtain it, and financial and designated non-financial institutions may query it for AML duties, all under a confidentiality duty (art. 12); in force November 1, 2024; existing entities to file by November 1, 2025; exemption for entities with registered capital up to 10 million RMB owned only by natural persons, on a no-other-controller undertaking (art. 3)
- As of: PBOC and SAMR Order 〔2024〕No. 3, State Council Gazette No. 16 of 2024 (April 2024)
- Source: State Council Gazette (国务院公报), 受益所有人信息管理办法
- URL: https://www.gov.cn/gongbao/2024/issue_11386/202406/content_6955755.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha
- Notes: the measures do not say in terms that the data is closed to the public; they give access only to the named bodies and impose confidentiality. Copy says "doesn't publish it", never "prohibits publication".

### New enterprises registered in China, 2025
- Value: 25.745 million new market entities in 2025, of which 9.5 million enterprises (950.0万户) and 16.194 million individual businesses
- As of: February 26, 2026
- Source: Science and Technology Daily (科技日报, stdaily.com), citing the State Administration for Market Regulation (市场监管总局)
- URL: https://www.stdaily.com/web/gdxw/2026-02/26/content_477158.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: verify-chinese-company-qichacha

### Official lookup sites observed from outside mainland China
- Value: www.gsxt.gov.cn returned HTTP 403 with 当前IP请求异常，请更换IP地址进行访问，或访问地址（https://shiming.gsxt.gov.cn）实名注册/登录后再进行访问; zxgk.court.gov.cn returned HTTP 403; wenshu.court.gov.cn returned 200 with notices that search and download need a registered login and that data updates are delayed
- As of: September 24, 2026 (observation date)
- Source: direct fetch by the draft run
- URL: https://www.gsxt.gov.cn/index.html ; https://zxgk.court.gov.cn/ ; https://wenshu.court.gov.cn/
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (same responses on re-check)
- Used in: verify-chinese-company-qichacha
- Notes: an observation from one runner, labelled as our check in copy. Re-check before any Refresh; access may differ from inside China or on other networks.

### Researched, not used (P03, 2026-09-24)
- SAMR Order 128, 市场监督管理严重违法失信名单管理办法, published May 25, 2026, in force July 15, 2026, replacing Order 44: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2026/art_3aadc26ec30e4bab9c16b5f953014172.html (checked once). Removal runs under the separate credit repair measures.
- 企业经营异常名录管理办法, revised by SAMR Order 101, March 18, 2025: https://www.gov.cn/zhengce/202506/content_7030036.htm (checked once). Four listing grounds; removal decided within 5 working days of an application.
- National annual-report filing rate for the 2025 season: no SAMR figure found.
- Qichacha and Tianyancha pricing: not researched from primary sources; not claimed.

## Partner cluster P04 (douyin-agency-cost), 2026-09-24

### Douyin affiliate (精选联盟) creator commission ranges by strategy
- Value: strategies open to all creators 5% to 50% of the order's paid amount; designated-creator strategies (fixed, dual, tiered) 5% to 80%; some special categories as low as 1%
- As of: August 2026 (rule page dated 2026-08-08 21:43:59)
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, section 2.3.1
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-09-24 (page rendered with headless Edge; WebFetch returns an empty body)
- Verified 2: 2026-09-24 (re-rendered at iteration 8, table rows unchanged)
- Used in: douyin-agency-cost; douyin-livestream-agency-vs-dp
- Notes: rates are the merchant-set commission (推广费) on the settlement base, not the platform's fee. The creator separately pays Douyin a technical service fee of 10% of commission at ratings A, B+ and B, 20% at C, 40% at D (same rule, 2.1.1); that is a creator-side cost.

### Douyin tiered creator commission is marginal, not retroactive
- Value: in the 阶梯佣金策略 the base rate applies up to the sales threshold and the raised rate only above it
- As of: August 2026
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, section 2.3.1
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-rendered at iteration 8; "销量门槛按照基础佣金生效，销量门槛以上按照升佣佣金生效" present)
- Used in: douyin-agency-cost; douyin-livestream-agency-vs-dp
- Notes: platform creator ladder only. No primary source was found for DP-side commission ladders; the IT之家 lead (ithome.com/0/943/132.htm) returned 404 on 2026-09-24.

### Creator commission settlement: 15 days after receipt, refunds clawed back
- Value: commission settled 15 days after the buyer confirms receipt (later if the merchant payout settles later); cross-border orders add 2 working days; a refund within the after-sale period cancels commission and settled commission is clawed back (from the commission account for cross-border); after the window, commission stands. Cross-border base = paid amount + host coupon - shipping - tax - packing + logistics offset
- As of: August 2026
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, sections 2.1.1 to 2.1.5
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-rendered at iteration 8, unchanged)
- Used in: douyin-agency-cost, douyin-return-rate; douyin-livestream-agency-vs-dp
- Notes: covers creator (达人) commission and group-leader (团长) fees.

### Douyin Global merchant payout timing and after-sale hold
- Value: payout after confirmed receipt plus the settlement period, plus 2 working days for third-party payment processing (longer over holidays); orders still in after-sale on their settlement date are held until the after-sale ends; the platform may freeze a refund reserve from settled payouts; group-leader fee charged at 10%
- As of: January 2026 (latest revision effective 2026-01-05; first revision 2023-12-28)
- Source: Douyin E-commerce (抖音电商), 《【全球购】商家货款结算规范》
- URL: https://school.jinritemai.com/doudian/web/article/aHyMoi13Bhx5
- Verified 1: 2026-09-24 (rendered with headless Edge)
- Verified 2: 2026-09-24 (re-rendered at iteration 8, unchanged)
- Used in: douyin-agency-cost
- Notes: the settlement-period length sits in a linked page (《商家货款结算日期细则》) that was not read. Do not print a T+ number from this entry.

### Store operators' fee models: fixed fee, commission or both; retail (buy-out) model
- Retired: 2026-09-24. Cites a store operator, which is a competitor: never cite (Part 5 rules).
- Value: under the service-fee model the operator charges a fixed service fee, a commission service fee (提点服务费) or a combination; under the retail model it buys the goods and earns the resale margin. Runs brand flagship stores on Tmall, JD, Pinduoduo and Douyin
- As of: March 2026 (2025 annual report summary, announcement 2026-010, published 2026-03-25)
- Source: Guangzhou Ruoyuchen Technology (若羽臣), Shenzhen-listed (003010), via cninfo (巨潮资讯网)
- URL: http://static.cninfo.com.cn/finalpage/2026-03-25/1225028259.PDF
- Verified 1: 2026-09-24 (PDF downloaded, text extracted with pdftotext)
- Verified 2: 2026-09-24 (re-downloaded at iteration 8, passage unchanged)
- Used in: douyin-agency-cost
- Notes: listed-company filing. One operator's model, not a market share of fee structures; no rates disclosed. The 2024 summary (http://static.cninfo.com.cn/finalpage/2025-04-25/1223269351.PDF) carries the same sentence.

### Qianchuan 千川·乘方 orders: 0.6% technical service fee from 2026; net-transaction bidding
- Value: from 2026, orders a Douyin merchant generates through 千川·乘方 carry a 0.6% technical service fee, all categories, shelf and content scenes; "net transaction bidding" (净成交出价) reduces ad spend on instantly refunded orders
- As of: January 8, 2026
- Source: Ebrun (亿邦动力), 廖紫琳
- URL: https://m.ebrun.com/636020.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-agency-cost
- Notes: the article does not mention Douyin Global (全球购); never apply the 0.6% to cross-border stores without the platform's fee page. www.ebrun.com returns 403 to a fetch; cite the m.ebrun.com URL. An earlier Ebrun piece (December 11, 2025, 石磊, https://m.ebrun.com/630289.html) announced the same figure.

### Douyin Partner fee inputs and a worked year at RMB 5 million (proprietary)
- Value: DP retainer about RMB 30,000 (lean) to 100,000 a month (slider 20,000 to 150,000); DP commission 5% to 8% at the international-brand tier, ceiling near 10%. Worked year at RMB 5m GMV, RMB 250 basket, retainer 30,000, commission 5%, co-fund 120,000, mix 40% paid / 40% creators / 20% organic, creator commission 20%, ROAS 2.5: retainer 360,000, DP commission 250,000, co-fund 120,000, Qianchuan 800,000, creator commission 400,000; partner stack 1,930,000 (38.6% of GMV); RMB 96.50 per placed order, 101.58 per kept order at 5% returns, 120.63 at 20%. Full calculator year-one cash 3,407,000 (450,000 refundable). Sensitivities: retainer +10,000/month = +120,000; DP commission 5% to 8% = +150,000; creator 20% to 30% = +200,000; ROAS 2.5 to 2.0 = +200,000
- Updated: 2026-09-24. Douyin deposit and fee standard changed (see Douyin cross-border deposit and fee standard, September 24, 2026): year-one cash now RMB 3,287,000, RMB 405,000 refundable. Partner-fee figures unchanged.
- As of: September 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro (drivers, help text for dpRetainer and dpCommission, compute() opStack)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (source read; formulas replicated in a scratch script)
- Verified 2: 2026-09-24 (outputs recomputed by hand in the final check)
- Used in: douyin-agency-cost
- Notes: scenario outputs from selected inputs, not client results or market averages. The kept-order rows hold every line at gross, as the calculator does; under Douyin's rule the creator line would fall on refunds. The illustrative DP ladder (5% to RMB 3m, 8% above; 310,000 marginal vs 400,000 retroactive) is arithmetic, not a market rate.
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

### Re-verified ledger entries reused (no new entry; add the dates and slug)
- Historical dedicated-host event fee example (Xinhua, August 4, 2024): re-verified 2026-09-24 (check 1) and 2026-09-24 (check 2), because the source is older than twelve months. Add "douyin-agency-cost" to Used in. The mid-tier figure from the same quote (RMB 500,000 to 1m) is now also printed.
- E-commerce return rate, Double 11 2025 (Beijing Daily carrying CCTV, January 11, 2026): re-fetched 2026-09-24 at both checks. Add "douyin-agency-cost" to Used in.

## Partner cluster P05 (tmall-partner-store-ownership), 2026-09-24

### Taojiang court: Douyin shop registered on the operator's family licence stays with the operator
- Value: oral agreement (May 2023, negotiated over WeChat) for the operator to register and run Douyin and Tmall shops in the company's name; Douyin shop registered in November 2023 on his father's 个体工商户 licence; the company (a 湖南老字号 egg company) paid the deposit and promotion costs; February 2024 split over profit, company products delisted; claims to end the mandate, confirm ownership and recover 300,000 RMB all dismissed. Reasons: no express ownership term, so platform rules prevail (不宜直接突破平台规则); the company knew of the binding and never objected (implied consent); 单纯的成本投入不导致虚拟财产使用权的转移
- As of: April 2025 (published April 16, 2025)
- Source: Hunan Daily Xinhunan (华声在线 / 新湖南), correspondent 李卓敏, reporting Taojiang County People's Court (桃江县人民法院)
- URL: https://m.voc.com.cn/xhn/news/202504/28496327.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: the page does not say whether the judgment was appealed or is final; do not claim finality. The court relied on 《抖音用户服务协议》. Paraphrase the holding; do not put an English translation in quote marks.

### Registered shop holder and actual operator both liable after an undisclosed shop transfer
- Value: where a platform seller transfers its account and shop to another operator by agreement without publicly updating the operator information, consumers may claim against both the registered operator and the actual operator (Art. 6)
- As of: March 2022 (法释〔2022〕8号, adopted February 15, 2022, published March 1, 2022, effective March 15, 2022)
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于审理网络消费纠纷案件适用法律若干问题的规定（一）
- URL: https://www.court.gov.cn/zixun/xiangqing/348031.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: Art. 5 (off-platform payment steered by staff) is on the same page and is relevant to any piece on partner conduct.

### Tmall Merchant Service Agreement: merchant is the legal entity, no account transfer without consent, data belongs to Tmall, deposit refund timing
- Value: 商户 = the legal entity operating on Tmall; without Tmall's consent the merchant may not transfer, authorize others to use, or let others obtain/use information under its account; data Tmall collects and records from the merchant's use of the service belongs to Tmall and is its trade secret; deposit balance returned to the merchant's payment account within 10 working days once three consecutive months after termination pass with no open transactions, complaints, penalties or disputes
- As of: March 2026 (最新更新日期：2026年3月21日)
- Source: Tmall (天猫商户服务协议), terms.alicdn.com
- URL: https://terms.alicdn.com/legal-agreement/terms/TD/TD201609271722_89275.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: the agreement does not define store types. It also says the service term runs to December 31 and may extend yearly, and that activation happens within 14 working days of meeting the conditions; not used yet. Sub-accounts are mentioned only as a contact channel.

### Tmall Global Merchant Service Agreement: overseas merchant, no transfer without written consent, data, deposit release
- Value: signed between the overseas merchant and Taobao China Holding Limited; without Tmall Global's written consent the merchant may not transfer or authorize others to use its Tmall Global account; acts through the account are deemed the merchant's; data rights belong to Tmall Global; deposit returned or unfrozen within 10 PRC business days after the third month following termination; Hong Kong law governs
- As of: October 2022 (最新更新日期：2022年10月31日; still the current version on the terms site in September 2026)
- Source: Tmall Global (天猫国际商户服务协议), terms.alicdn.com
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall202111051504_43705.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: the agreement also requires overseas brands, overseas production or legal overseas sourcing, and retained purchase vouchers including authorization letters (采购凭证). Useful for P21 (importer of record) and P39 (authorization letter).

### Taobao/Tmall sub-accounts for third-party service providers
- Value: a seller may set sub-accounts under its own account for employees, agents, consultants, advisers or third-party service providers; the main account is the one corresponding to the Taobao or Tmall store; sub-accounts use the apps the main account opened (直通车, 钻石展位, 淘宝客, 生意参谋, CRM) within granted permissions; operation logs can be queried; sub-accounts can be enabled, disabled and restored; the seller answers for authorized users' breaches as its own
- As of: June 2023 (最新修订日期：2023年6月2日)
- Source: Taobao (China) Software Co. (淘宝（中国）软件有限公司), 子账号软件产品使用许可协议
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201802012028_72666.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: reuse for P08 (contract terms and sub-account revocation) and P48 (TP switch checklist).

### Douyin account for the holder's own use; transfer banned
- Value: 您的抖音账号仅限您本人使用，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账号 (Art. 3.4)
- As of: February 2026 (updated February 13, 2026, effective February 20, 2026)
- Source: Douyin (抖音用户服务协议)
- URL: https://www.douyin.com/draft/douyin_agreement/douyin_agreement_user.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: this is the user agreement. The Douyin shop merchant agreements on school.jinritemai.com and op.jinritemai.com render by JavaScript and could not be fetched.

### Douyin shop store types and brand authorization letters
- Value: flagship stores sell own brands, or non-owned brands under exclusive authorization (独占授权); authorization letters come in two kinds, ordinary (专卖店, 专营店) and exclusive (旗舰店); a shop's subject type cannot be changed once certified; per subject, at most 5 each of flagship, specialty, multi-brand and enterprise stores, 3 individual-business stores, 1 personal store
- As of: September 2026 (observation date; the page prints no date)
- Source: Douyin shop official help center (抖店官网 常见问题)
- URL: https://fxg.jinritemai.com/question/type
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: undated FAQ page, cited with the observation month, the same way the ledger treats homepage notices. Re-check before reuse. Tmall's equivalent rule (rulechannel.tmall.com) is JavaScript-only and could not be fetched.

### Nike ends Topsports' online sales of Nike in mainland China from January 1, 2027
- Value: Topsports received Nike's formal notice (after trading hours on July 21, 2026) that its online platform sales of Nike products in mainland China end fully from January 1, 2027; those sales were about 22% of group revenue in the fiscal year ended February 28, 2026; offline cooperation continues
- As of: July 2026 (published July 22, 2026, 08:30)
- Source: Securities Times (证券时报), via 人民财讯, 许擎天梅
- URL: https://www.stcn.com/article/detail/4033646.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: the STCN page does not name Tmall, JD or Douyin. Tencent News (财闻, 2026-07-23, https://news.qq.com/rain/a/20260723A06TPM00) names 天猫、京东、抖音 and says the 授权 ends; checked once only, not cited. P39 (authorization letter) should cite the Topsports HKEX announcement if it can be fetched.

### Allbirds Tmall flagship entity change (RE-VERIFIED, no new entry)
- The existing entry "Allbirds China store count, cities and the Tmall operating-entity change" (Sina Tech, 2024-07-27) was re-verified on 2026-09-24, both checks, because the event is over 12 months old. Add "tmall-partner-store-ownership" to its Used in line.

### E-Commerce Law, Art. 15: licence information on the store homepage
- Value: e-commerce operators must continuously display business licence information, relevant administrative permits, or a link to them, in a prominent place on their homepage (Art. 15); platforms must verify and register sellers' real identity information (Art. 27)
- As of: adopted August 31, 2018 (page dated September 1, 2018)
- Source: Cyberspace Administration of China (中央网信办), carrying the PRC E-Commerce Law (中华人民共和国电子商务法)
- URL: https://www.cac.gov.cn/2018-09/01/c_1123362506.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-store-ownership
- Notes: the fetched excerpt did not show the effective-date clause. The law took effect January 1, 2019, but cite that date from a page that shows it (the npc.gov.cn or mofcom.gov.cn copy) before printing it.

### Tmall Global deposit plus annual fee spread and default TP fee (proprietary, RE-VERIFIED)
- The existing entry "Tmall Global category fee spread and the cash floor, all nineteen categories" was re-verified on 2026-09-24, both checks (11 categories at 80,000 RMB, 7 at 110,000 RMB, supplements at 330,000 RMB; TP defaults 35,000 RMB a month plus 10% of GMV). New derived figure: 770,000 RMB of TP fees in year one at the 3,500,000 RMB default GMV (420,000 + 350,000). Label in copy: "TheChinaPath calculator data, September 2026". Add "tmall-partner-store-ownership" to its Used in line.

## Partner cluster P07 (tmall-partner-agency-vs-distributor-model), 2026-09-24

### Baozun's three business models: who holds stock and who sets price
- Retired: 2026-09-24. Cites a store operator, which is a competitor: never cite (Part 5 rules).
- Value: distribution model: Baozun buys goods from brand partners, sells to consumers, bears inventory risk and "has discretion in establishing price"; service fee and consignment models: it acts as an agent, bears no physical and general inventory risk and has "no discretion in establishing price"; under consignment, brand partners stock goods in Baozun's warehouses; fees are fixed and/or variable based on value of merchandise sold, orders fulfilled or other factors, and a variable portion of revenue is based on GMV. E-Commerce segment 2025: product sales 20.2% of net revenues, services 61.3%. Inventory RMB 879.4 million at December 31, 2025, turnover 141 days. Distribution model: platforms pay within no more than two weeks of the consumer confirming receipt; service fees billed on credit of 10 days to four months.
- As of: fiscal 2025 (Form 20-F filed April 23, 2026)
- Source: Baozun Inc. (宝尊电商), Form 20-F for fiscal 2025, US Securities and Exchange Commission
- URL: https://www.sec.gov/Archives/edgar/data/1625414/000110465926047177/bzun-20251231x20f.htm
- Verified 1: 2026-09-24 (full text downloaded with a User-Agent header; every phrase found verbatim; filing date from the EDGAR index)
- Verified 2: 2026-09-24 (re-fetched at iteration 8; all strings re-found)
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: Baozun's "consignment" means brand-owned stock in Baozun's warehouses with Baozun as agent; it is not a consignee buying on sale-or-return. Group product sales (38.7% of revenue) include the Brand Management segment (own brands); use the E-Commerce segment split (20.2% / 61.3%) when writing about TP models. Listed on Nasdaq and the Hong Kong Stock Exchange, headquartered in Shanghai. Listed-company filing, allowed under the partner-cluster rules.

### Ruoyuchen segment revenue and the buy-out vs service-fee split, 2025
- Retired: 2026-09-24. Cites a store operator, which is a competitor: never cite (Part 5 rules).
- Value: revenue 3,431,776,371.45 RMB; 代运营业务 723,496,679.39 RMB (21.08%, gross margin 36.70%); 品牌管理业务 895,116,576.36 RMB (26.08%, gross margin 46.20%); 运营服务收入 (service-fee mode, no goods bought) 160,338,266.84 RMB, 4.67% of revenue. 品牌管理 buys goods outright (以货品买断的形式向品牌方进行采购) and 拥有该区域的销售定价权和客户资源. Store operations run in 零售模式 (buys goods first, earns the spread) or 服务费模式 (固定服务费、提点服务费或两者结合).
- As of: fiscal 2025 (auditor's report signed March 24, 2026; bulletin dated March 25, 2026)
- Source: Ruoyuchen (若羽臣, 003010) 2025 annual report, carried in full on Sina Finance (新浪财经)
- URL: https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?stockid=003010&id=12015041
- Verified 1: 2026-09-24 (page decoded as GBK; all strings and figures found)
- Verified 2: 2026-09-24 (re-fetched at iteration 8; all strings re-found)
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: HQ Guangzhou, listed on the Shenzhen exchange. The 160m RMB of service fees is a company-wide product line; the filing does not print it as a cross-tab inside the 723m segment, so copy states both figures separately and does not compute a share of the segment. 21st Century Business Herald (2026-03-31, https://m.21jingji.com/article/20260331/herald/5004b04e273ec99b69a754ff4a93eb24.html) carries the same segment figures; confirmation only. Own-brand lines (绽家, 斐萃) are not TP business; do not use them in partner pieces.

### Cross-border retail import seller is the owner of the goods and carries quality liability
- Value: the 跨境电商零售进口经营者 is the overseas-registered enterprise selling cross-border retail import goods to domestic consumers and 为商品的货权所有人 (art. 2(1)); it 承担商品质量安全的主体责任 and consumer-protection duties including returns and recalls (art. 4(1)1 and 2)
- As of: issued November 28, 2018, effective January 1, 2019
- Source: MOFCOM and five other bodies (商务部 发展改革委 财政部 海关总署 税务总局 市场监管总局), 商财发〔2018〕486号, on 中国政府网
- URL: https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5437823.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: same document as the two existing 486号 entries (article 3 exemption; article 4(1)3 risk notice). This one covers articles 2(1) and 4(1)1-2. Cite it for "the seller of record owns the goods" on Tmall Global and for buy-out vs service store-holder claims.

### Anti-Monopoly Law: resale price maintenance ban and fines
- Value: art. 18 bars an operator from agreeing with a trading counterparty to fix the resale price to a third party or to set a minimum resale price; not prohibited where the operator proves no exclusion or restriction of competition, or a market share below the standard set by the State Council anti-monopoly authority plus its other conditions. Art. 56: an implemented monopoly agreement draws confiscation of illegal gains and a fine of 1% to 10% of the prior year's sales (up to 5 million RMB with no prior-year sales; up to 3 million RMB if not implemented); up to 1 million RMB on responsible individuals.
- As of: amended June 24, 2022, in force August 1, 2022
- Source: Anti-Monopoly Law of the People's Republic of China (中华人民共和国反垄断法, 2022修正), Ministry of Commerce (商务部) policy database, citing 全国人大网
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=97047
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-agency-vs-distributor-model, china-distributor-price-control-parallel
- Notes: the NPC amendment decision on gov.cn (https://www.gov.cn/xinwen/2022-06/25/content_5697697.htm) confirms 本决定自2022年8月1日起施行. The law itself states no numeric safe-harbor market share; SAMR's implementing rule does (see "SAMR safe harbor for vertical agreements" below), so cite the two together. Relevant to every distributor price-control piece.

### Tmall Global account cannot be transferred without the platform's written consent
- Value: clause 5.1: the merchant may not transfer its Tmall.hk account or authorize others to use it without Tmall Global's prior written consent; acts through the account are deemed the merchant's. Clause 15.3: no assignment of rights or obligations without prior written consent. Hong Kong law governs.
- As of: last updated October 31, 2022
- Source: Tmall Global Merchant Service Agreement (天猫国际商户服务协议)
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall202111051504_43705.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: P05's run log also verified this page on 2026-09-24 (its R4). If both pieces append, merge into one entry with both slugs.

### Service-model TP cost line at three sales levels, and the service-model cash floor (proprietary)
- Value: at the Tmall Global calculator's default TP fee settings (35,000 RMB a month retainer, 10% commission on GMV): 520,000 RMB at 1,000,000 RMB of sales (52%); 770,000 RMB at 3,500,000 RMB (22%); 1,420,000 RMB at 10,000,000 RMB (14.2%). Service-model cash before the first order, food category: 50,000 deposit + 30,000 annual fee + 100,000 bonded warehouse deposit + 300,000 tax prepayment = 480,000 RMB, of which 450,000 refundable.
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro: gmv, dpRetainer, dpCommission, food category row, platformDeposit, annualFee, whDeposit, whTaxPrepay)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (defaults read from the file, arithmetic computed)
- Verified 2: 2026-09-24 (re-read at iteration 8, arithmetic recomputed)
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: MODEL DEFAULTS, labelled in copy as "the model's default fee settings, a yardstick for real quotes". Never present them as what TPs charge. The 10m RMB row is the calculator's GMV ceiling. Stands in for the Compass "model split of TPs on file" figure the brief wanted; replace with a Compass figure once compass-stats.md exists.

## Partner cluster P08 (tmall-partner-contract-terms), 2026-09-24

### Agency deletes three best-sellers' promotion links on the contract's last day (Chongqing)
- Value: 12-month flagship 代运营 contract, April 1, 2020 to March 31, 2021; the brand gave written notice on March 4, 2021 that it would take back permissions at 00:00 April 1; the operator deleted the promotion links of three best-selling products at about 10:00 on March 31; the brand withheld 80,763.10 RMB of promotion fees and claimed 76,485.68 RMB; the court held that promotion links carry a property character and the deletion breached good faith; 20,000 RMB damages upheld on appeal; the withholding was upheld as a defense of prior performance; the operator's counterclaim (46,842.60 RMB late fee plus a 263,275.70 RMB penalty) was dismissed
- As of: March 2024 (court's 2023 top ten commercial cases, case 1, carried 2024-03-04)
- Source: Chongqing No. 5 Intermediate People's Court (重庆市第五中级人民法院), carried in full by Tahota Law Firm (泰和泰律师事务所) with 来源：重庆市第五中级人民法院
- URL: https://www.tahota.com/CN/article.aspx?mdid=2dee3c858729caec&KeyID=34e7554e7e98bbf5
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched in iteration 8, all figures confirmed)
- Used in: tmall-partner-contract-terms
- Notes: the platform is NOT named (某网络平台 官方旗舰店). Never write it up as Tmall. The court's own site returns 403 (XJ-Waf) and 裁判文书网 needs a login; replace the URL if a court copy becomes reachable. Tahota is a law firm, not an agency or competitor.

### Xiamen 代运营 refund cases (People's Court Daily)
- Value: Jimei court: 1.1m RMB half-year sales target or an 84,000 RMB refund; actual sales 69,846.69 RMB; full refund ordered. Huli court: 2.3m RMB target, 90,000 RMB fees, a clause barring early termination; 345 RMB of sales; fees returned plus 12,000 RMB of promotion fee, with promotion money paid to a third party at the agency's direction treated as a prepayment to the agency; upheld on appeal. Huli court: 2.2m RMB target, 396 RMB of sales, the agency refused monthly targets; 50,000 RMB operating fee plus 15,000 RMB promotion fee returned; upheld on appeal. Reporter observation: standard-form traps (no early termination, no refund) and agencies pushing spending regardless of cost until the merchant quits
- As of: December 2021 (published 2021-12-03)
- Source: People's Court Daily (人民法院报), 安海涛 林姗 谢婷婷, carried by 北京政法网 (Beijing Political-Legal Affairs Commission)
- URL: https://www.bj148.org/dj/fxyj/202112/t20211203_1623327.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: the stores are generic online shops and WeChat mini programme stores, not Tmall. Say "online store".

### Ex-employee deletes a 4.38m RMB listing, two years for 破坏计算机信息系统罪 (Qingdao)
- Value: listing with 4.38m RMB of sales and 138,000 orders fully deleted on October 30, 2023 by a former employee who had kept the store admin account; sales count and reviews unrecoverable; timing just before Double 11; two years' imprisonment
- As of: August 2024 (published 2024-08-29)
- Source: Procuratorial Daily (检察日报), carried by China National Radio (央广网)
- URL: https://law.cnr.cn/jcfc/20240829/t20240829_526876980.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: an employee, not an agency. The platform is not named. Qingdao Chengyang procuratorate.

### Liquidated damages: 30% line and no reduction for malicious breach
- Value: a penalty more than 30% above the loss may generally be treated as excessive (Art. 65 para 2); a party in malicious breach asking for a reduction is generally not supported (para 3)
- As of: 法释〔2023〕13号, published and in force December 5, 2023
- Source: Supreme People's Court (最高人民法院), interpretation of the Civil Code contract general provisions
- URL: https://www.court.gov.cn/zixun/xiangqing/419382.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms

### Civil Code Art. 933, at-will termination of a mandate contract
- Value: either party may terminate at any time; in a paid mandate the terminating party compensates direct loss and the benefit the other side would have obtained. Art. 558: post-termination duties of notice, assistance and confidentiality. Art. 585: agreed penalties can be raised or reduced
- As of: adopted May 28, 2020, in force January 1, 2021
- Source: National People's Congress, Civil Code (中华人民共和国民法典), via the Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=70524
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: whether a court classes a TP agreement as a mandate is unsettled; never write that Art. 933 applies to TP contracts. The npc.gov.cn and gov.cn copies redirected or came back empty on fetch.

### PIPL Art. 21: entrusted processor returns or deletes personal information at the end of the contract
- Value: when an entrustment contract ends, the entrusted party must return the personal information or delete it and may not retain it; no sub-entrustment without consent
- As of: adopted August 20, 2021, in force November 1, 2021
- Source: Cyberspace Administration of China (国家网信办), Personal Information Protection Law (个人信息保护法)
- URL: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms

### Tmall Global Merchant Service Agreement: account transfer, data rights, governing law
- Value: signed with Taobao China Holding Limited; the merchant may not transfer its Tmall Global account or authorize others to use it without written consent; acts through the account are deemed the merchant's; data Tmall Global collects from the merchant's use of the service belongs to Tmall Global and is its trade secret; Hong Kong law, HKIAC arbitration
- As of: last updated October 31, 2022 (page title 2023版)
- Source: Tmall Global (天猫国际), 天猫国际商户服务协议
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall202111051504_43705.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms (also researched by P05 the same day)

### Taobao/Tmall sub-accounts: third-party providers, disable and restore, legal effect
- Value: the seller sets sub-accounts for employees, agents, consultants or third-party service providers; the main account is the store's seller account; sub-accounts can be enabled, disabled and restored; they reach apps the main account opened (直通车, 钻石展位, 淘宝客, 生意参谋) within the permissions granted; operation records can be queried; a sub-account with main-account-level permissions carries the same legal effect (7.1.5)
- As of: revised June 2, 2023
- Source: Taobao (淘宝), 子账号软件产品使用许可协议
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201802012028_72666.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms (also researched by P05 the same day)

### Baozun: contract term, fee basis and GMV definition
- Retired: 2026-09-24. Cites a store operator, which is a competitor: never cite (Part 5 rules).
- Value: consignment and service-fee contracts typically run 12 to 36 months, renewable at the brand partner's option; fixed and/or variable fees primarily based on GMV; reported GMV includes VAT and excludes shipping, surcharges and other taxes, returned goods and unsettled deposits
- As of: Form 20-F for fiscal 2025, filed April 23, 2026
- Source: Baozun Inc., US Securities and Exchange Commission
- URL: https://www.sec.gov/Archives/edgar/data/1625414/000110465926047177/bzun-20251231x20f.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: the GMV definition is Baozun's reporting metric, not a contract term. Useful for P31 (what a listed TP earns).

### Tmall 618 2026 windows and campaign entry thresholds
- Value: rules published April 29, 2026; pre-sale May 21 to June 3; spot phase May 21 to 30, then May 31 to June 21; merchants need a real experience score of at least 4.2 and no more than 24 penalty points in the last 90 days; official instant discounts at category rates of 1%, 5% or 15%
- As of: April 2026
- Source: Ebrun (亿邦动力), carried by Sina Tech (新浪科技)
- URL: https://finance.sina.com.cn/tech/roll/2026-04-29/doc-inhwefve6787805.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: the thresholds are for Tmall (domestic) merchants under 《天猫商家基础营销规则》. Do not state them as Tmall Global rules without checking.

### Tmall Double 11 2026 windows
- Value: pre-sale and deposits from October 15; final payment from 20:00 October 20; spot selling 20:00 October 20 to 23:59 November 13, close to 25 days; official instant discounts, no cross-store thresholds
- As of: September 22, 2026
- Source: Beijing Business Today (北京商报), 何倩, carried by NetEase (网易)
- URL: https://www.163.com/dy/article/L7E4TETQ0519DFFO.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-partner-contract-terms
- Notes: this resolves the ledger's earlier note ("no Tmall 2026 window had a citable source on 2026-09-22"). Guandian (观点网) carried the same figures on the same day.

### TP transition-month cost and commission-base scenarios (proprietary)
- Value: at the Tmall Global calculator defaults (3.5m RMB year-one GMV, 35,000 RMB retainer, 10% TP commission): average month 291,667 RMB GMV, 29,167 RMB commission, 64,167 RMB TP cost (about 9,040 USD at 7.1); a transition month with two retainers and one commission 99,167 RMB, or 128,333 RMB if both TPs take commission. Commission base: tax-inclusive 318,208 / 31,821; before tax 291,667 / 29,167; net of 5% returns 277,083 / 27,708; net of 61.5% returns 112,292 / 11,229. Net base saves 1,458 RMB a month (17,500 a year); a tax-inclusive base costs 2,654 a month (31,850 a year)
- As of: September 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro: dpRetainer 35000, dpCommission 10, gmv 3500000, returnRate 5, cbecTax 9.1, fx 7.1)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (defaults read from the file)
- Verified 2: 2026-09-24 (arithmetic recomputed with node before the draft was finished)
- Used in: tmall-partner-contract-terms
- Notes: scenario arithmetic on model defaults, not a market rate or a client result. The 61.5% row uses the all-ecommerce Double 11 2025 return rate as a planning ceiling. It is not a Tmall Global rate.

### Re-verified ledger entries reused (no new entry; add the slug)
- Douyin affiliate settlement rules (refund cancels commission; cross-border base excludes tax and shipping): re-rendered 2026-09-24 with headless Edge at check 2. Add tmall-partner-contract-terms to Used in.
- E-commerce return rate, Double 11 2025 (61.5%): re-fetched 2026-09-24. Add tmall-partner-contract-terms.
- Cross-border tax 0% duty and 70% rule (财关税〔2016〕18号) and 13% VAT (2019 No. 39): re-fetched 2026-09-24. Add tmall-partner-contract-terms.

### Researched, not used (P08, 2026-09-24)
- k.sina.cn/article_8424942191_1f62a6a6f00101hrvu.html (2026-09-18, "外包凌克"): a self-media post by an outsourced customer service writer. Agency-written, no institution. Not citable.
- SPC typical cases of August 2026 (court.gov.cn 507691): the 代运营 fake-order and deposit case (Shanghai Yangpu court, 50,000 RMB deposit, 100,000 RMB fine). Belongs to P13.

## Partner cluster P09 (china-distributor-margin-imported-product-price), 2026-09-24

### Cheese duty in 2026: 12% MFN, 8% provisional
- Value: tariff line 04069000 其他乳酪 (other cheese), 2026 MFN rate 12%, 2026 provisional rate 8%; also 04062000 and 04063000 12/8, 04064000 (blue cheese) 15/8. The 2026 plan sets provisional rates on 935 lines from January 1, 2026
- As of: December 2025 (announcement dated December 26, 2025, posted December 29, 2025; in force January 1, 2026)
- Source: Customs Tariff Commission of the State Council (国务院关税税则委员会), 2026年关税调整方案, 附1 进口商品暂定税率表, on the MOF tariff department site (财政部关税司)
- URL: https://gss.mof.gov.cn/gzdt/zhengcefabu/202512/P020251229510521217364.pdf
- Verified 1: 2026-09-24 (PDF text extracted, row 22 "04069000 其他乳酪 12 8")
- Verified 2: 2026-09-24 (re-downloaded at iteration 8, row unchanged)
- Used in: china-distributor-margin-imported-product-price
- Notes: under Tariff Law art. 13 a provisional rate replaces MFN; agreement-origin goods take the lower of agreement and provisional. The annex also carries whey (6/2), infant formula for retail (15/5), cocoa butter (22/10), several nuts and small-pack vermouth (65/30); useful for later food Ledgers. Annex 1 lists only lines WITH a provisional rate, so it cannot be cited for the MFN rate of a line that has none.

### 2026 tariff plan: 34 partners, 24 agreements, 8,972 lines
- Value: agreement rates for eligible goods from 34 trading partners under 24 FTAs and preferential arrangements (named include New Zealand, Peru, Switzerland, Korea, Australia, ASEAN, Chile, Singapore, Iceland, RCEP); 8,972 national subheadings; 935 provisional-rate lines; plan in force January 1, 2026
- As of: December 2025
- Source: Customs Tariff Commission of the State Council (国务院关税税则委员会), 2026年关税调整方案 (plan text), on 财政部关税司
- URL: https://gss.mof.gov.cn/gzdt/zhengcefabu/202512/P020251229510520940591.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: no EU agreement is listed. Annex 6 (FTA rates, https://gss.mof.gov.cn/gzdt/zhengcefabu/202512/P020251229510522191383.pdf) extracts with empty cells collapsed, so the partner column for a given line cannot be read reliably from text; do not quote an agreement rate from a text extraction.

### Tariff Law: dutiable value and the provisional-rate rule
- Value: art. 24, dutiable value = transaction price plus transport, related costs and insurance up to unloading at the place of import in China; art. 13, a provisional rate applies instead of MFN where one exists, and agreement goods take the lower rate; in force December 1, 2024
- As of: adopted April 26, 2024
- Source: Tariff Law of the People's Republic of China (中华人民共和国关税法), Xinhua on the Chinese government portal (中国政府网)
- URL: https://www.gov.cn/yaowen/liebiao/202404/content_6947843.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: art. 3 also names cross-border e-commerce platforms, logistics and customs-brokerage companies as withholding agents for cross-border retail imports.

### VAT Law: 13% and 9% rates, import VAT base, input credit
- Value: art. 10, 13% on imported goods; 9% on farm products, edible vegetable oil and edible salt (and other listed goods and services); art. 14, import VAT = (dutiable value + duty + consumption tax) x rate, and VAT payable = output VAT minus input VAT; art. 16, input VAT is VAT paid on goods purchased; in force January 1, 2026, replacing the Provisional Regulations
- As of: adopted December 25, 2024
- Source: VAT Law of the People's Republic of China (中华人民共和国增值税法), State Taxation Administration (国家税务总局) policy database
- URL: https://fgk.chinatax.gov.cn/zcfgk/c100009/c5237365/content.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: supersedes 39号 as the citation for the 13% rate from 2026 onward; 39号 stays valid for the 2019 history and the 9.1% cross-border arithmetic.

### Scope of the 9% VAT rate: cheese out, olive oil in
- Value: dairy products made from fresh milk (酸奶、奶酪、奶油) are outside the 9% farm-product scope, so 13%; pasteurised and sterilised milk are inside; olive oil is on the closed list of edible vegetable oils at 9%; natural unprocessed honey is a 9% farm product
- As of: Announcement 2026 No. 9, dated January 30, 2026, in force January 1, 2026
- Source: Ministry of Finance and State Taxation Administration (财政部 税务总局), 关于增值税征税具体范围有关事项的公告, annex 1 适用9%增值税税率货物范围注释
- URL: https://fgk.chinatax.gov.cn/zcfgk/c102416/c5247431/content.html (annex PDF: https://fgk.chinatax.gov.cn/zcfgk/c102416/c5247431/5247431/files/%E9%80%82%E7%94%A89%E5%A2%9E%E5%80%BC%E7%A8%8E%E7%A8%8E%E7%8E%87%E8%B4%A7%E7%89%A9%E8%8C%83%E5%9B%B4%E6%B3%A8%E9%87%8A.pdf)
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: replaces 财税字〔1995〕52号 as the current source. The relative link on the announcement page resolves to .../c5247431/5247431/files/..., not .../c5247431/files/. Relevant to every food Ledger (dairy 13%, honey and olive oil 9%).

### Cross-border retail import dutiable value is the retail transaction price
- Value: the shopper is the taxpayer; the dutiable value is the actual transaction price including the retail price, freight and insurance; platforms, e-commerce companies or logistics companies may collect the tax
- As of: March 2016 (issued March 24, 2016, effective April 8, 2016)
- Source: Ministry of Finance (财政部), 财关税〔2016〕18号, article 1
- URL: http://www.mof.gov.cn/gp/xxgkml/gss/201603/t20160324_2510682.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: same URL as the existing "0% duty, VAT and consumption tax at 70%" entry (re-fetched today, both clauses present; add this slug to its Used in). This entry adds article 1. The 2,000 / 20,000 RMB limits on this page were raised by 49号; never quote them as current.

### Cheese is bonded-only on the cross-border positive list
- Value: 04069000 其他乳酪 is item 55 on the 2019 list; the 2022 adjustment (section 4, remarks changed on 206 items) set its remark to 仅限网购保税商品 (bonded online purchases only), as it did for 04061000, 04063000, butter 04051000 and other dairy lines
- As of: 2019 list announced December 24, 2019 (公告2019年第96号, in force January 1, 2020); adjustment issued January 28, 2022 (公告2022年第7号, in force March 1, 2022)
- Source: Ministry of Finance and seven other departments (财政部等八部门), 跨境电子商务零售进口商品清单调整表, on 财政部关税司; 2019 list annex on 商务部
- URL: http://gss.mof.gov.cn/gzdt/zhengcefabu/202202/P020220221322524635155.pdf and https://images.mofcom.gov.cn/cws/202001/20200110143527533.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (2022 PDF re-fetched; the 2019 annex was checked once and is not cited in the draft)
- Used in: china-distributor-margin-imported-product-price
- Notes: bonded only means no 9610 direct mail for these lines. The dairy Ledger (cost-to-sell-dairy-and-spreads-in-china) should be checked against this if it implies direct mail for butter or cheese.

### Customs codes 9610 and 1210
- Value: 9610 跨境贸易电子商务 and 1210 保税跨境贸易电子商务, both created by GACC in 2014
- As of: January 17, 2024
- Source: Jiaxiang County Commerce Bureau (嘉祥县商务局), on the Jiaxiang County government site
- URL: http://jiaxiang.gov.cn/art/2024/1/17/art_72008_2758261.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: a county government explainer, used because the GACC originals (公告2014年第12号 and 第57号) sit on customs.gov.cn, unreachable from this runner. Replace with the GACC URL when reachable.

### Yonghui Superstores 2025 gross margins and net-pricing push
- Value: retail gross margin 17.00% (up 0.91 points); 生鲜及加工 14.93%; 食品用品（含服装） 18.72%; revenue 53.508 billion RMB (down 20.82%); 381 stores closed; the company says it pushed 裸价和控后台 (net pricing and tighter back-end supplier fees)
- As of: fiscal 2025 (financial statements approved by the board April 15, 2026)
- Source: Yonghui Superstores (永辉超市, 601933), 2025 annual report
- URL: https://www.yonghui.com.cn/upload/financial/12102322.PDF
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: company-wide averages across staples; not a margin on imported goods. The summary PDF (12102306.PDF) carries revenue but not the margin table.

### Milkground dairy trading margin and distributor count, 2025
- Value: 乳制品贸易 revenue 623,287,660.41 RMB at a 4.06% gross margin (up 1.30 points); cheese 33.81%; 6,047 distributors at December 31, 2025, covering about 800,000 retail outlets
- As of: fiscal 2025 (report published March 25, 2026)
- Source: Shanghai Milkground Food Tech (妙可蓝多, 600882), 2025 annual report, via CNINFO (巨潮资讯网)
- URL: https://static.cninfo.com.cn/finalpage/2026-03-25/1225029557.PDF
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: the trading line buys dairy raw materials from domestic and overseas suppliers and resells them; it is B2B trading, not branded distribution. Describe it as "Milkground's trading line", never as "the distributor margin".

### Layered markups on imported food, 2013 (history only)
- Value: a Changsha Customs tariff official said duty was a small share of imported food's cost and layered distributor resale drove the price; a trader said imported wine passes through at least three distributor layers, each adding 50% or more
- As of: April 12, 2013
- Source: Sanxiang Metropolis Daily (三湘都市报), carried by People's Daily Online (人民网)
- URL: http://finance.people.com.cn/n/2013/0412/c1004-21110790.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-margin-imported-product-price
- Notes: page is GBK-encoded. Rates quoted on the page (17% VAT, chocolate 8%, wine 14%) are 2013 rates; never reuse them as current.

### Tmall Global calculator defaults applied to a price ladder (proprietary)
- Value: food category 2% commission, 30,000 RMB annual fee; payment 1%; TP commission 10%; TP retainer 35,000 RMB a month; pick and pack 4 + last mile 11 RMB a parcel; storage 0.8 RMB per ORDER per month x 2; returns 5% at 15 RMB; paid media 60% of sales at ROAS 2; creators 20% at 20%; cross-border tax 9.1% consumer-paid; 3.5M RMB GMV. On a 72.04 RMB listed wedge, three to an order: 29.90 RMB above a 24 RMB ex-works before media; -3.85 after media, creators, retainer and annual fee in year one
- As of: September 2026
- Source: TheChinaPath calculator data, src/pages/tools/tmall-global-setup-and-run.astro (drivers, groups, compute())
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-read at iteration 8; storage-per-order correction applied)
- Used in: china-distributor-margin-imported-product-price
- Notes: the wedge, the three-per-order basket and the 3.00 RMB freight are illustration inputs, not calculator defaults. The 15 RMB parcel is ambient; chilled costs more.

### Re-verified existing entries (add the slug to Used in, no new entry)
- Pinlive Foods gross margin, 2025 (Eastmoney, April 22, 2026): re-fetched 2026-09-24 at both checks; 16.24% and 12.20% on the page. Add china-distributor-margin-imported-product-price.
- Cross-border retail import tax: 0% duty, VAT and consumption tax at 70% (财关税〔2016〕18号): re-fetched 2026-09-24 at both checks. Add china-distributor-margin-imported-product-price.
- Footwear/cosmetics positive-list entries: their notes say the 2022 adjustment annex was not fetchable; it is, at http://gss.mof.gov.cn/gzdt/zhengcefabu/202202/P020220221322524635155.pdf.

## Partner cluster P10 (payment-terms-chinese-distributor), 2026-09-24

### Liquor distributors' cash-flow pressure and remittances, H1 2026
- Value: 44.1% of liquor distributors and retailers said cash-flow pressure rose year on year in H1 2026 (chart 2-9: 44.1 up / 32.8 flat / 23.1 down); 51.2% said the money they remitted to producers (经销商回款) fell; 56.6% said price inversion worsened. Survey late May 2026: 1,350 sent (195 producers, 450 distributors, 150 retailers, plus e-commerce platforms, supermarkets, convenience and tobacco-and-liquor stores), 1,115 valid.
- As of: June 2026 (released June 18, 2026)
- Source: China Alcoholic Drinks Association market committee (中国酒业协会市场专业委员会) with KPMG China (毕马威中国), 《2026中国白酒市场中期研究报告》
- URL: https://assets.kpmg.com/content/dam/kpmgsites/cn/pdf/zh/2026/06/2026-chinese-baijiu-market-mid-term-research-report.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: 450 is the number of distributors SURVEYED, not usable answers. 44.1% answers a change question ("rose"), unlike the 2025 level question below; do not merge the two into one trend. 回款 here is money paid back up the chain to producers.

### Liquor distributors' cash-flow pressure, H1 2025
- Value: more than 40% of distributors and retailers said they faced cash-flow pressure; 58.1% reported higher inventory; more than half said price inversion worsened; 38.7% said collections fell. 795 sent, 583 valid (260 distributors surveyed).
- As of: June 2025 (released June 18, 2025)
- Source: China Alcoholic Drinks Association market committee (中国酒业协会市场专业委员会) with KPMG China, 《2025中国白酒市场中期研究报告》, PDF page 19
- URL: https://assets.kpmg.com/content/dam/kpmgsites/cn/pdf/zh/2025/06/mid-term-research-report-on-the-chinese-baijiu-market-2025.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: Jiemian 13003026 (2025-07-08, a Kuaidao Caijing repost) attributes this figure to 中国酒类流通协会; that is wrong. Cite the report. CNR (央广网, 2025-06-19) confirms 58.1% and the authorship.

### Credit terms and late payment in mainland China, 2026
- Value: average credit terms offered 81 days (APAC 70); 86% of firms suffered late payment (APAC 91%); average payment delay 73 days (APAC 68); 35% said late payments became more frequent, 26% less; survey closed in April 2026
- As of: August 2026 (release dated August 13, 2026)
- Source: Coface (科法斯), APAC Payment Survey 2026 (《2026年亚太企业付款调查》), company press release distributed by PR Newswire (美通社)
- URL: https://www.prnasia.com/story/543914-1.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor, china-importer-state-owned-private
- Notes: 73 days is how late payments run past due (平均逾期付款天数), not total time to collect. The same release quotes NBS (collection period 71.7 days at end-June 2026); for that, cite NBS directly (stats.gov.cn/sj/zxfbhjd/202607/t20260727_1964194.html, checked once only, not used).

### Kweichow Moutai sells on advance receipts; advance receipts down 60.31% in H1 2026
- Value: "本公司销售以预收款项方式进行，交易的信用风险小"; contract liabilities (all 预收货款) 3,177,561,597.07 RMB at June 30, 2026 against 8,006,739,780.94 RMB at the start of the year, down 60.31%, "主要是公司进行市场化改革，销售模式改变，预收货款政策相应调整"; other current liabilities down "主要是经销商预付货款减少"
- As of: June 30, 2026 (interim report published August 15, 2026)
- Source: Kweichow Moutai (贵州茅台), 2026 interim report (2026年半年度报告), pages 9 and 89
- URL: https://www.moutaichina.com/mtgf/articleFileDir/2026-08/17/277c9b776bff4ae89dde75e987437760.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: the filing says the prepayment policy was adjusted, not in which direction; do not write "relaxed" or "eased". The SSE copy returns an anti-bot page to scripts; the company's investor-relations copy is the one to cite.

### Import letter of credit fees at a listed Chinese bank, 2026
- Value: import documentary LC opening fee 1.5‰ of the amount (minimum 300 RMB) up to 90 days, 2‰ (minimum 500 RMB) from 90 to 360 days, plus 0.5‰ per extra three months of validity beyond three months; amendment 1.5‰ of any increase (minimum 100 RMB); acceptance 1‰ a month (minimum 150 RMB); discrepancy fee US$60 per presentation charged to the beneficiary
- As of: May 2026 (file path 202605; preferential terms valid January 1 to December 31, 2026)
- Source: Bank of Ningbo (宁波银行), corporate international business fee schedule (服务收费价目表)
- URL: https://www.nbcb.com.cn/home_page/jrxx/fwsfcx/sctjj/gjyw/202605/P020260527722678775361.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: one bank's tariff, not a market rate. China Development Bank (cdb.com.cn, October 2025) lists 1.5‰, minimum 500 RMB; seen in search results only, not fetched.

### Letter of credit disputes: the bank must pay against conforming documents (SPC)
- Value: once the issuing bank has undertaken to pay, it must pay within the credit's term as long as the documents match the credit and each other on their face; the applicant's defenses from the underlying sale are not supported, except for fraud under Art. 8 (Art. 5); document examination follows the agreed practice or, absent agreement, the ICC Uniform Customs and Practice (Art. 6)
- As of: adopted October 24, 2005, in force January 1, 2006, amended December 23, 2020
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于审理信用证纠纷案件若干问题的规定, SPC Gazette
- URL: http://gongbao.court.gov.cn/Details/1873edbb83fb8247ac0a04da813050.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: the Gazette page shows the 2020-amended text and prints no 法释 number; cite it "as amended December 2020".

### Sinosure domestic trade credit insurance: scope, term, indemnity, who can buy it
- Value: covers receivable or prepayment losses in domestic trade from buyer (or supplier) insolvency or default; credit period generally within one year; maximum indemnity 90%; the insured must be an enterprise registered in the PRC; an import-factoring variant insures PRC banks or licensed factors against a domestic importer failing to pay receivables they bought
- As of: September 2026 (observation date; the page prints no date)
- Source: Sinosure (中国信保, China Export & Credit Insurance Corporation), 国内贸易信用保险 product page
- URL: https://www.sinosure.com.cn/ywjs/myxcp/gnmyxybx/gnmyxybxjj/index.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: undated product page, cited with the observation month. A foreign exporter selling from abroad cannot be the insured; do not imply otherwise. No premium rates are published (the fee page lists only project, guarantee and credit-report fees).

### Sinosure credit report list prices
- Value: China company registration report 600 RMB; credit file report 960 RMB; standard credit assessment report 1,200 RMB; credit-limit report 1,440 RMB (computes a suggested trade-credit amount for reference); overseas standard report 1,200 RMB. Market-adjusted prices, volume discounts through branches.
- As of: September 2026 (posted September 21, 2026)
- Source: Sinosure (中国信保), 中国出口信用保险公司资信产品与服务收费标准
- URL: https://www.sinosure.com.cn/khfw/sfbz/zgckxybxgs/2026/09/220663.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: useful as a cost line in due-diligence pieces.

### SAFE trade-credit reporting and class B/C limits on deferred payment
- Value: report to SAFE within 30 days prepayments or advance receipts over 30 days, deferred receipts or payments over 90 days, and usance LCs over 90 days (Art. 20); class B enterprises in principle may not make deferred payments over 90 days (Art. 34); class C enterprises need per-transaction registration and in principle may not use usance LCs, deferred payment or collections over 90 days (Art. 35)
- As of: August 2020 (汇发〔2020〕14号, issued August 31, 2020; SAFE marks it "已修改", amendments to Art. 46, 102 and 173 only)
- Source: State Administration of Foreign Exchange (国家外汇管理局), 经常项目外汇业务指引（2020年版）
- URL: https://www.safe.gov.cn/safe/file/file/20200831/f0127756271c43ef9b3908d5d157bd91.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: 汇发〔2024〕11号 (in force June 1, 2024) lets B/C enterprises register 90-day-plus deferred payments six months after downgrading once the cause is fixed; it does not change Art. 20. The October 27, 2025 SAFE notice does not touch trade-credit reporting.

### RMB share of China's goods-trade cross-border settlement
- Value: 27.2% in 2024 (12.4 trillion RMB, up 2.4 points); 28.1% in January to June 2025 (6.4 trillion RMB, up 1.2 points)
- As of: October 2025 (page dated October 30, 2025)
- Source: People's Bank of China (中国人民银行), 2025年人民币国际化报告
- URL: http://www.pbc.gov.cn/huobizhengceersi/214481/3871621/5885243/index.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: the figures sit in the PDF linked from that page (.../2025122616492523798.pdf). The report does not split the non-RMB share by currency; do not write "mostly dollars".

### SPC reply: back-to-back payment clauses between large enterprises and SMEs are void
- Value: where a large enterprise, in construction or in buying goods or services, agrees with an SME that payment depends on receiving payment from a third party, courts must hold the clause void (violates Art. 6 and 8 of the SME payment regulation; Civil Code Art. 153(1)); courts then set a reasonable payment term; interest at the one-year LPR where not agreed or unlawful
- As of: adopted June 3, 2024, in force August 27, 2024 (法释〔2024〕11号)
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于大型企业与中小企业约定以第三方支付款项为付款前提条款效力问题的批复, SPC Gazette
- URL: http://gongbao.court.gov.cn/Details/a56bf04193752b0ae2dd77152dbeb3.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: payment-terms-chinese-distributor
- Notes: protects Chinese SMEs as defined in Chinese law; do not tell a foreign exporter it is covered. The SPC's 2025 annual report on civil and commercial trials (court.gov.cn/zixun/xiangqing/489721.html, published February 24, 2026) says courts applied it directly in 709 cases and recovered 1.9 billion RMB; checked once only, not used.

### Bonded warehouse cash floor (proprietary, RE-VERIFIED, no new entry)
- The existing entry "Bonded warehouse cash floor and per-parcel logistics defaults (proprietary)" was re-read on 2026-09-24 (whDeposit '100000', whTaxPrepay '300000', lines 142 and 143 of src/pages/tools/tmall-global-setup-and-run.astro), both checks. Add "payment-terms-chinese-distributor" to its Used in line. Label in copy: "TheChinaPath calculator data, September 2026".

## Partner cluster P11 (sell-in-vs-sell-out-china-distributor), 2026-09-24

### Distributors refusing pushed stock without after-sales support (quote)
- Value: "现在这个市场，别说压货了，没有售后政策支持的品牌都不敢接，基本算上退货是白忙活" (a veteran FMCG distributor); distributors shrinking and refusing unfriendly terms
- As of: July 2026 (published 2026-07-08 18:10)
- Source: Huxiu (虎嗅), carrying New Distribution (新经销), 张振宇, 《别靠压货做市场，品牌和经销商该重新谈谈了》
- URL: https://www.huxiu.com/article/4873623.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: opinion piece with anonymous distributor quotes, no figures. Cite as a quote only.

### Distributor economics: four to five million RMB of stock for under 300,000 RMB profit (quote)
- Value: "一年投入四五百万做统一拿货实际利润不到30万元"; a Chongqing drinks wholesaler saw the 618 online price of the same product fall below his purchase price
- As of: July 2025 (published 2025/07/08 10:22)
- Source: Jiemian (界面新闻, 界面号), carrying Kuaidao Caijing (快刀财经), 唐纳德, 《2025，快消经销商迎来一场"大考"》
- URL: https://www.jiemian.com/article/13003026.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: anonymous distributor quote in a contributor column, not a survey. The same page repeats a 20-liquor-company inventory total (1,536亿元, Q3 2024) from another source; do not cite this URL for it.

### Baijiu channel H1 2026: price inversion worse, less stock pushing, lower remittances
- Value: 56.6% of distributors and retailers said price inversion worsened year on year; producers reduced stock pushing (压货) and cut targets; 51.2% of distributors and retailers remitted less; weak sell-out led to channel stock build-up and low-price dumping to raise cash; e-commerce promotions "破价" hit the pricing system
- As of: June 2026 (survey of H1 2026)
- Source: China Alcoholic Drinks Association (中国酒业协会) and KPMG China (毕马威), 《2026中国白酒市场中期研究报告》
- URL: https://assets.kpmg.com/content/dam/kpmgsites/cn/pdf/zh/2026/06/2026-chinese-baijiu-market-mid-term-research-report.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: same PDF P10 (payment-terms-chinese-distributor) cites for the 44.1% cash-flow figure; if both append, merge into one entry. The inventory chart values extract ambiguously; use only the figures stated in the prose (56.6%, 51.2%).

### Bottled drinks 2026 order meetings: distributors less willing to pay, warehouses full
- Value: at 2026 start-of-season (水头) order meetings distributors were less willing to attend and to pay; some that paid could not take delivery because stock was not selling and warehouses were full ("经销商说库存不动销，装不下货")
- As of: May 2026 (published 2026-05-27 10:37)
- Source: Huxiu (虎嗅), carrying Food Insider (食品内参)
- URL: https://www.huxiu.com/article/4861863.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: trade-media reporting with anonymous quotes. The "May targets under 70%" line on the same page is anecdotal; not used. The Dongpeng red-envelope anecdote on this page is not citable; use Dongpeng's annual report instead.

### Xtep core brand channel inventory and discount, H1 2026
- Value: channel inventory turnover 4.5 to 5 months (six months to June 30, 2026); Q2 2026 retail sell-through mid-single-digit decline; retail discount level 25% to 30%
- As of: July 2026 (announcement dated 17 July 2026)
- Source: Xtep International (特步国际, 1368.HK), operational update on business in Mainland China for Q2 and H1 2026, HKEX
- URL: https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0717/2026071700195.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: unaudited operational data. Chinese version (_c.pdf) returns 404; the English filing is the HKEX filing. HKEX stock id for the search API: Xtep 23896.

### Li Ning: sales to franchised distributors vs their sell-through, and channel stock, 2026
- Value: revenue from franchised distributors up 1.7% in H1 2026; wholesale (franchised distributors) sell-through up low single digits in Q1 2026 and down mid single digits in Q2 2026; channel inventory-to-sales ratio 4 months at H1 2026; new products 83% of offline sell-through
- As of: August 2026 (interim results 2026-08-20; Q1 update 2026-04-22; Q2 update 2026-07-15)
- Source: Li Ning Company (李宁, 2331.HK), HKEX filings
- URL: https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0820/2026082001445.pdf and https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0422/2026042200179.pdf and https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0715/2026071500286.pdf
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: sell-through figures are unaudited and given only as bands (low / mid single digit). Do not compute a precise sell-in minus sell-out gap from them. HKEX stock id for the search API: Li Ning 7647.

### Shede Spirits destocking in 2024, per its reply to the Shanghai Stock Exchange
- Value: after years of fast growth distributor stock of its lead product rose; policy "强动销、去库存、稳价格"; volume cut to hold price, so distributor orders fell in 2024; 3% to 5% of extra sales rebates on several products mainly to help customers clear stock; distributors' reorder cycle lengthened; revenue fell in the short term as a result; expense lines include 烟酒店扫码费用 and 消费者扫码红包费用
- As of: June 2025 (reply dated 2025-06-12 to 上证公函【2025】0433号, covering fiscal 2024)
- Source: Shede Spirits (舍得酒业, 600702), reply to the SSE inquiry letter on its 2024 annual report, carried in full on Sina Finance (新浪财经)
- URL: https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?stockid=600702&id=11175958
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: page is GBK-encoded. Liquor gross margin in the same reply fell to 70.93% from 78.58% with several causes; not used, do not attribute it to destocking alone.

### Dongpeng Beverage: scan codes and real-time channel inventory monitoring
- Value: more than 3,400 distributors and over 4.5 million active outlets at end-2025; "一物一码" and "五码关联" systems give real-time monitoring of channel inventory and outlet sell-out; smart fridges upload sales data in real time; data models flag abnormal flows (防窜货); consumer "扫码赢红包" promotions
- As of: March 2026 (2025 annual report, published 2026-03-31)
- Source: Dongpeng Beverage (东鹏饮料, 605499), 2025年年度报告, cninfo
- URL: https://static.cninfo.com.cn/finalpage/2026-03-31/1225063447.PDF
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: sell-in-vs-sell-out-china-distributor
- Notes: pdftotext mangles the Chinese; extract with pypdf. Company's own description of its systems, not an audit of them.

Re-verification of existing entries (no new entry; add the slug to their Used in lines): "Anti-Monopoly Law: resale price maintenance ban and fines" and "Taobao/Tmall sub-accounts for third-party service providers" were both re-fetched on 2026-09-24 (check 1 and check 2 for this piece); add sell-in-vs-sell-out-china-distributor to each.

## Partner cluster P12 (china-distributor-price-control-parallel), 2026-09-24

### Fengxian court: cosmetics distributor held to a 200,000 RMB cross-channel diversion clause; 15-case series
- Value: February 2024 contract gave an internet company exclusive regional sales agency, limited it and its downstream retailers to specified offline stores, penalty 200,000 RMB (违约金20万元) for cross-channel diversion; goods then sold in online shops on several platforms with the brand traceability code (品牌溯源码) scratched off every bottle; June 2025 model judgment: buying from other channels and selling online met the contract's definition of diversion; 15 cases in the package; the other 14 closed by commercial mediation (调撤结案) with reference to the model judgment, total amount at stake over 6 million RMB (涉案总金额达600余万元); judge Ren Dan (任丹) named unclear contract wording on 窜货 as one cause; the brand revised its standard contract and added commercial mediation plus Fengxian court judicial confirmation
- As of: August 2026 (published 2026-08-04 08:45)
- Source: People's Court Daily (人民法院报), 郭燕 赵丽娜, carried by the Supreme People's Court (最高人民法院) website
- URL: https://www.court.gov.cn/zixun/xiangqing/507751.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched in iteration 8, every string confirmed)
- Used in: china-distributor-price-control-parallel
- Notes: 600余万元 is the AMOUNT AT STAKE in the mediated cases, not money paid or recovered; the release gives no award for the model case. Never write "paid" or "recovered 6m". The release does not say "per breach". The brand is an unnamed Chinese domestic brand (某知名国货化妆品公司); platforms are not named.

### Jinan court: scratched-code resale is unfair competition, not trademark infringement; 6,000 RMB
- Value: a Taobao shop sold genuine shampoo, bought through a regional agent's chain, with barcode and QR codes scratched off; no trademark infringement (legal source, brand and maker shown on intact packaging); unfair competition under Anti-Unfair Competition Law Art. 2 because it defeated the brand's traceability and marketing-control system; 6,000 RMB damages
- As of: April 2025 (published 2025-04-22 08:42)
- Source: People's Court Daily (人民法院报), 李德营, carried by People's Daily Online (人民网)
- URL: http://society.people.com.cn/n1/2025/0422/c1008-40465310.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-price-control-parallel
- Notes: Jinan Shizhong District People's Court. The host's TLS certificate mismatches; fetch with certificate checking off or over http. Courts differ on scratched codes (some hold trademark infringement); cite this as one court's view.

### SAMR fines Yangtze River Pharmaceutical 764 million RMB for resale price maintenance
- Value: April 15, 2021 decision; 2015 to 2019 agreements with wholesalers and pharmacies fixing resale prices and setting minimum resale prices, enforced by rules, assessment, punishing low-price distributors and an intermediary hired to monitor online prices; fine 3% of 2018 sales of 25.467 billion RMB, i.e. 764 million RMB (7.64亿元)
- As of: April 2021 (release carried 2021-04-19)
- Source: State Administration for Market Regulation (市场监管总局), release carried by the Shanghai Medical Products Administration (上海市药品监督管理局), 来源：国家市场监督管理总局网站
- URL: https://yjj.sh.gov.cn/scjgyw/20210419/a2af0d4d5fae4bbc94e9105b8edc60c1.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-price-control-parallel
- Notes: decided under the 2008 Anti-Monopoly Law (Art. 14 then, Art. 18 now). Pharma, not consumer goods; the enforcement methods are the transferable point. The Zhejiang AMR Gongniu decision (zjamr.zj.gov.cn) timed out twice and is not logged.

### SAMR safe harbor for vertical agreements: 5% share and 100 million RMB for resale price agreements, 15% for others
- Value: a vertical agreement fixing or setting minimum resale prices is not prohibited where each party's share of the relevant market is below 5% in every year of the agreement and turnover of the goods covered is below 100 million RMB in every year; other vertical agreements below 15% share, no turnover condition; counterparties' shares and turnover aggregate; the operator must prove it (amended Arts. 17 and 18 of the 禁止垄断协议规定, SAMR Order No. 111)
- As of: amended December 9, 2025; release published December 19, 2025; in force February 1, 2026
- Source: State Administration for Market Regulation (市场监管总局)
- URL: https://www.samr.gov.cn/xw/zj/art/2025/art_5e1b65f4ee074f348ab246a1ca35ead4.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-price-control-parallel
- Notes: the amended rule text is on the MOFCOM policy database, https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104749 (both checks 2026-09-24). This supersedes the note on the existing Anti-Monopoly Law entry ("the law states no numeric safe-harbor market share"): SAMR now sets one. The AML entry carries the cross-reference (added 2026-10-02).

### SAMR rules: resale price ban covers margins, discounts and fees, "other means" and algorithmic pricing
- Value: Art. 14 bans agreements fixing resale price levels, ranges, profit levels or discounts and fees, setting minimum resale prices by those means, or by other means, with a no-restrictive-effect defense; Art. 15 bans unifying, restricting or automatically setting resale prices through data, algorithms, technology or platform rules; Art. 16 bans other agreements shown by evidence to exclude or restrict competition
- As of: published March 10, 2023, in force April 15, 2023 (Arts. 14 to 16 unchanged by the December 2025 amendment)
- Source: State Council Gazette (国务院公报 2023年第13号), 禁止垄断协议规定, SAMR Order No. 65
- URL: https://www.gov.cn/gongbao/content/2023/content_5754538.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-distributor-price-control-parallel

### Kerry DaVinci Gourmet: cross-channel pricing disputes resolved within three months (proprietary, published case)
- Value: pricing aligned across the brand's Tmall store and its distributor network; "Pricing disputes across channels were resolved within three months"
- As of: as published on /work/kerry-davinci
- Source: TheChinaPath published case page (src/content/cases/kerry-davinci.md)
- Label in copy: "as the DaVinci Gourmet case records" (linked to /work/kerry-davinci)
- Verified 1: 2026-09-24 (read from the file)
- Verified 2: 2026-09-24 (re-read before the draft was finished)
- Used in: china-distributor-price-control-parallel
- Notes: use only the published wording. Never describe it as distributor resale-price fixing; the case page describes aligning channel pricing.

### Re-verified ledger entries reused (no new entry; add the slug)
- Anti-Monopoly Law: resale price maintenance ban and fines (policy.mofcom.gov.cn id=97047): re-fetched twice 2026-09-24. china-distributor-price-control-parallel added to its Used in, and its Notes point to the SAMR safe-harbor entry (done 2026-10-02).
- Liquidated damages: 30% line and no reduction for malicious breach (court.gov.cn 419382): re-fetched twice 2026-09-24. Add china-distributor-price-control-parallel.

## Partner cluster P13 (tmall-agency-fake-orders-brand-liability), 2026-09-24

### SPC typical case: agency's fake group-buy orders, RMB 100,000 fine, RMB 50,000 deposit kept
- Value: an agency (代运营商) signed a service-provider agreement with an unnamed platform on February 9, 2021 and paid a RMB 50,000 deposit on February 16; it arranged accounts to buy and redeem low-price group-buy deals with no real sales to lift merchants' rankings; a market regulator found it helped other operators' false publicity through organized fake transactions and fined it RMB 100,000; the platform cut integrity points, cancelled benefits, kept the whole deposit and revoked back-end access; Shanghai Yangpu District People's Court dismissed the agency's suit on September 5, 2025 (final); bold type counted as fair notice of the standard term; the full deduction was not excessive given fault and damage to the platform's goodwill; first-instance case (2025)沪0110民初8092号
- As of: August 2026 (released August 3, 2026)
- Source: Supreme People's Court (最高人民法院), 最高人民法院发布依法规范平台经营、保护消费者合法权益典型案例, case 3; People's Court Daily write-up at https://www.court.gov.cn/zixun/xiangqing/507731.html (August 4, 2026)
- URL: https://www.court.gov.cn/zixun/xiangqing/507691.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: the platform and the agency are NOT named; the facts (门店托管运营 in a designated area, 团购 vouchers, 核销) point to a local-services platform. Never write it up as Tmall or Douyin. The deposit and the fine were the agency's; the text says nothing about the merchants. Case 2 on the same page (platform jointly liable for failing to top up a merchant's RMB 1,000 deposit against 340,000+ RMB of revenue) is relevant to deposit pieces.

### Anti-Unfair Competition Law 2025: false sales and review claims, fake-transaction help, fines
- Value: art. 9 bans false or misleading publicity on goods' sales status and user reviews, and helping other operators do so by organizing fake transactions or fake reviews; art. 25 fine up to RMB 1 million, RMB 1 million to 2 million if serious, business license may be revoked; art. 33 administrative penalties go on the credit record and are published; revised June 27, 2025, in force October 15, 2025
- As of: June 2025 (page posted May 20, 2026)
- Source: China National Intellectual Property Administration (国家知识产权局), 中华人民共和国反不正当竞争法（2025年修订）; confirmation copy People's Daily Online (人民网), October 10, 2025, http://politics.people.com.cn/n1/2025/1010/c1001-40578685.html
- URL: https://www.cnipa.gov.cn/art/2026/5/20/art_104_206437.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: replaces the 2019 art. 8 / art. 20 references (RMB 200,000 to 1 million) for anything dated after October 15, 2025. The new text also bans using platform rules to run fake transactions, fake reviews or malicious returns against other operators.

### SAMR Order 91: fake transactions and fake rankings named as false publicity
- Value: art. 9 (1) lists 虚假交易、虚假排名 among false publicity on sales status, transaction information, operating data and user reviews; organizing fake transactions or rankings to help others is banned; in force September 1, 2024
- As of: May 2024 (order dated May 6, 2024)
- Source: State Administration for Market Regulation (国家市场监督管理总局), Order No. 91, 网络反不正当竞争暂行规定, State Council Gazette 2024 No. 20
- URL: https://www.gov.cn/gongbao/2024/issue_11466/202407/content_6963168.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: none yet (researched for tmall-agency-fake-orders-brand-liability, not cited)
- Notes: its penalty article points to the 2019 AUCL art. 20; after October 15, 2025 cite the 2025 AUCL art. 25 for the fine range.

### E-Commerce Law art. 17: no fake transactions or invented reviews
- Value: ecommerce operators may not make false or misleading commercial publicity by fabricating transactions or user reviews
- As of: adopted August 31, 2018 (in force January 1, 2019)
- Source: Cyberspace Administration of China (国家网信办), 中华人民共和国电子商务法
- URL: https://www.cac.gov.cn/2018-09/01/c_1123362506.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: an amendment draft (SAMR and MOFCOM, comments to August 4, 2026) was not yet adopted when checked; recheck before citing penalties.

### Tmall Global Merchant Service Agreement: restrictive measures, fake-transaction removal, deposit deduction for breach of law (NEW CLAUSES on an existing entry)
- Value: 1.9 restrictive measures include removal, deletion, search blocking, store supervision, suspension, store takedown, freezing and deducting the deposit and Alipay merchant account; 5.1 acts through the account are the merchant's and the merchant alone bears the consequences; 5.2(g)(ii) information aimed at inflating ratings or sales, fake transactions and fake reviews may be deleted without notice; 7.4 on breach of the agreement or any applicable law, Tmall Global may deduct from the deposit and/or Alipay merchant account
- As of: October 2022 (最新更新日期：2022年10月31日)
- Source: Tmall Global (天猫国际), 天猫国际商户服务协议（2023版）
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall202111051504_43705.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: merge into the existing Tmall Global agreement entries (P05, P08); add this slug to their Used in.

### Tmall Merchant Service Agreement: acts through the account are the merchant's; deposit deduction when Tmall is penalized (NEW CLAUSES on an existing entry)
- Value: section 3, unless Tmall is at fault the merchant answers for all results of acts under its account, and acts completed through the account are deemed the merchant's own or fully authorized by it; the deposit may be deducted when the merchant's breach of law or the agreement harms Tmall, including administrative penalties imposed on Tmall and goodwill damage
- As of: March 2026 (最新更新日期：2026年3月21日)
- Source: Tmall (天猫), 天猫商户服务协议
- URL: https://terms.alicdn.com/legal-agreement/terms/TD/TD201609271722_89275.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: merge into the P05 entry for this agreement.

### Taobao sub-account licence 8.7: seller bears all consequences of sub-account use (NEW CLAUSE on an existing entry)
- Value: the user undertakes full responsibility for all legal consequences of acts through sub-accounts by itself or authorized parties, and indemnifies Taobao or third parties held liable
- As of: June 2023 (最新修订日期：2023年6月2日)
- Source: Taobao (淘宝), 子账号软件产品使用许可协议
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201802012028_72666.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: merge into the existing sub-account entries (P05, P08).

### Douyin merchant fake-transaction rule: third-party fake orders are the merchant's, burden on the merchant
- Value: fake transactions include a merchant using third-party hype groups or a third party's tools, services or help; same user, device or IP buying at high frequency; fake or reused tracking numbers and empty parcels; cash-back or gifts to induce orders or good reviews; Douyin checks logistics, accounts, trading behavior and after-sale requests with big data and decides on probability; abnormal data is judged fake unless the merchant explains it with evidence; products are intercepted, delisted or banned and fake sales and reviews stripped; appeal within 7 days of the penalty notice; appeals are not granted where third-party hype groups or tools placed the orders; "especially serious" includes providing fake-transaction services or help to others
- As of: July 2024 (revision notice posted July 17, 2024, comments to July 23, 2024)
- Source: Douyin E-commerce (抖音电商), consultation notice on revising the merchant fake-transaction rule (商家虚假交易细则) and related trade-risk rules, e-commerce learning center (the original rule name contains an em dash; never copy it into copy)
- URL: https://school.jinritemai.com/doudian/web/article/aJADoQgL6cAS
- Verified 1: 2026-09-24 (headless Edge render)
- Verified 2: 2026-09-24 (headless Edge re-render)
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: a consultation notice with the revised text; the penalty grid is an image and was not read, so no Douyin penalty figure is logged. Replace with the in-force rule page when one renders.

### Paid posting of false information: illegal business operation thresholds; funders as accomplices
- Value: art. 7, knowingly providing paid posting of false information online is illegal business operation (Criminal Law art. 225(4)) from RMB 50,000 turnover or RMB 20,000 illegal gains for an individual, RMB 150,000 or RMB 50,000 for a unit; five times those amounts is "especially serious"; art. 8, knowingly providing funds, premises or technical support to such crimes is joint crime
- As of: September 2013 (法释〔2013〕21号, announced September 6, 2013)
- Source: Supreme People's Court and Supreme People's Procuratorate (最高人民法院 最高人民检察院), SPC Gazette
- URL: http://gongbao.court.gov.cn/Details/2a817c79a6dbd485eb37b8f6fcd7f8.html
- Verified 1: 2026-09-24 (502 on the first try, 200 on retry)
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: court.gov.cn/shenpan-xiangqing-5820.html is dead (404). The SPC Q&A (court.gov.cn/zixun/xiangqing/5672.html, September 10, 2013) confirms the intent but omits the thresholds. Older than twelve months: re-verify before reuse (it is still the operative interpretation as of the check date).

### First criminal conviction for organizing fake orders (history)
- Value: Hangzhou Yuhang District court sentenced the founder of a fake-order membership site to five years and six months for illegal business operation and fined him RMB 900,000 (combined sentence five years nine months, RMB 920,000 with a separate personal-information case)
- As of: June 2017 (sentenced June 20, 2017)
- Source: Beijing Youth Daily (北京青年报), carried by China Securities Journal (中证网)
- URL: https://www.cs.com.cn/xwzx/201706/t20170621_5334300.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: history only; the defendant appears under a pseudonym (李壹). spp.gov.cn's own release (t20170621_193604) returns 403 to this runner. A 2025 case (Wuwei court, Anhui, January 23, 2025, two years suspended, RMB 20,000 fine; https://m.thepaper.cn/newsDetail_forward_30012926, the court's own official account) passed check 1 and is available if a newer example is needed.

### Shanghai 2025: merchant fined for 20,000+ fake orders
- Value: in Shanghai's 2025 unfair-competition typical cases, a company inflated its online store by more than 20,000 fake orders to raise sales and search ranking; the Qingpu District market regulator fined it and referred leads onward (amount not published); Shanghai regulators handled 690+ unfair-competition cases in 2025
- As of: February 2026 (posted February 12, 2026)
- Source: China Quality News (中国质量报), on the State Administration for Market Regulation site (市场监管总局)
- URL: https://www.samr.gov.cn/xw/df/art/2026/art_4ab8f37427034d6182dfcbb59482ab6a.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: tmall-agency-fake-orders-brand-liability
- Notes: the company is named by the regulator; the draft describes it without the name. The same page mentions a Minhang case against a software firm selling tools that inflate livestream popularity and sales for merchants.

### NOT SOURCED, do not research again from these dead ends
- Tmall 2024 fake-transaction fines (5,000 / 20,000 / 50,000 RMB, 7-day block, 24 points, clearance after three especially serious breaches, from July 1, 2024): only secondary copies of unclear provenance (Fujian Department of Commerce page republishing 电商真管家, 2024-07-03; pai.com.cn user upload; Tencent self-media). rulechannel.tmall.com renders only its shell without a login. Tmall posted a change to 《天猫市场管理规范》 on 09-10 (2026).
- spp.gov.cn: every page tried returns HTTP 403 to this runner (curl and WebFetch).
- Douyin "72,756 merchants punished, 1,344 cleared": 2022, not on a Douyin page.

## Partner cluster P14 (douyin-return-rate), 2026-09-24

### Women's apparel online return rate, 50% to 60%
- Value: women's clothing bought online is generally returned at 50% to 60%
- As of: January 2026
- Source: Beijing Daily (京报网), carrying CCTV News (央视网)
- URL: https://news.bjd.com.cn/2026/01/11/11517038.shtml
- Verified 1: 2026-09-24 ("女装网购退货率普遍徘徊在50%至60%之间")
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: same page as the "E-commerce return rate, Double 11 2025" entry. CCTV names no institution behind the figure. All platforms, not Douyin-specific.

### Douyin category return rates reported by merchants, 2023
- Value: food and general merchandise about 5% on Douyin (several merchants); women's apparel 50% to 60% on Douyin against 30% to 40% on Taobao (one women's apparel merchant); Douyin E-commerce told the reporter the "about 60%" women's apparel claim "does not match the facts"; a July 2023 "Douyin jewellery returns 90%" story was called untrue by Douyin; many shoppers request refunds before shipping
- As of: August 2023 (published 2023-08-04)
- Source: Jiemian (界面新闻), Dianchang (电厂) channel, 刘霞
- URL: https://www.jiemian.com/article/9873801.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: merchant testimony, not platform data. Older than twelve months: always date it "2023" in copy and pair it with Douyin's denial. The page also quotes a 2020 report (30% to 50% live vs 10% to 15% traditional) without naming the publisher; do not cite that.

### Douyin's June 2025 statement on the "90% return rate" posts
- Value: Douyin (抖音黑板报) said batches of low-follower accounts posted during 618 that Douyin's return rate exceeded 90%; screenshots showed refund-rate numbers that did not match the 90% claim; a poster admitted inventing the story for ad money; Douyin VP Li Liang (李亮) called it harmful false information. Douyin published no rate of its own
- As of: June 10, 2025
- Source: Yangtse Evening News (扬子晚报网), carrying Jiupai News (九派新闻)
- URL: https://www.yangtse.com/news/sh/202506/t20250610_219490.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: the brief's Sina lead (finance.sina.cn, 2025-06-13) is a self-media repost; cite this page instead.

### ByteDance CEO: return rate among Douyin's quality metrics to improve
- Value: at ByteDance's January 2026 all-hands, CEO Liang Rubo (梁汝波) said Douyin e-commerce kept good growth but had room to improve on key quality metrics including the return rate
- As of: May 2026 (article dated 2026-05-19, reporting the January 2026 meeting)
- Source: 21st Century Business Herald (21世纪经济报道), 雷晨
- URL: https://www.21jingji.com/article/20260519/405e1b01c27de014f97f27670fe0cb1c.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: the same page cites 网经社 for Douyin's share of national reverse parcels (10% to 20%); not verified at source, do not use.

### Douyin 2026 merchant package: settlement rate, abnormal orders, return diagnosis, net-transaction bidding
- Value: January 8, 2026 upgrade of the nine merchant support policies: more support for merchants with high settlement rates, fast shipping and good service; earlier identification and removal of abnormal and high-risk orders to cut malicious returns and abnormal refunds; a return-diagnosis tool to be built; "net transaction bidding" (净成交出价) to cut ad cost lost on instant-refund orders; 千川·乘方 orders at a 0.6% technical service fee; more than RMB 32 billion saved for merchants over the prior year through commission waivers, lower freight insurance and other measures
- As of: January 2026
- Source: China News Service (中国新闻网), 付子豪
- URL: https://www.chinanews.com.cn/cj/2026/01-08/10548441.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: state news agency confirmation of the Ebrun entry (m.ebrun.com/636020.html) on the 0.6% fee and net-transaction bidding. No mention of Douyin Global (全球购). The diagnosis tool was announced, not shown live; describe it as announced.

### Douyin return-shipping insurance: door pickup up to 3 kg from July 2026
- Value: from July 3, 2026 free door pickup under return-shipping insurance covers the first 3 kg (was 1 kg) with no rise in merchants' premiums; lower charging threshold for extra weight; third round of freight-insurance changes; freight-insurance fee cuts saved merchants more than RMB 6.5 billion in H1 2026; extra-weight queries are over a quarter of freight-insurance queries
- As of: July 2026
- Source: Guangzhou Daily (广州日报大洋网), 邓莉
- URL: https://news.dayoo.com/finance/202607/03/171077_54975872.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: the premium is the merchant's cost ("不增加商家保费成本"). The article does not say every store must carry the insurance.

### Douyin April 2025 after-sale rule consultation: no intervention in refund-without-return on received goods unless necessary
- Value: Douyin put a revision of its after-sale rules out for comment: it fully supports merchant-buyer negotiation and will not step into full-refund-without-return requests on goods already received unless necessary; where return is impossible or goods are unfit to return (opened food, damaged goods) the platform supports the refund and the merchant retrieves the goods. SAMR had summoned the main platforms over refund-only rules (SAMR deputy head 束为, January 2025 press conference)
- As of: April 22, 2025
- Source: Beijing Business Today (北京商报), 何倩, 胡静蓉
- URL: https://www.bbtnews.com.cn/2025/0422/554611.shtml
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: reports the consultation, not the final rule text. The final Douyin rule page for that revision was not located; the current 商家售后服务管理规范 (entry below) is the live rule.

### Douyin merchant after-sale rule: 24 / 36 / 48-hour handling windows, silence = approval
- Value: pre-shipment refund request handled within 24 hours; shipped-order refund and return-and-refund requests within 36 hours; refund within 48 hours of the return being signed for (72 hours for post-shipment instant-refund orders); on timeout the system treats the merchant as agreeing; the platform encourages negotiation. First effective 2020-10-25, revised effective 2026-08-26
- As of: August 2026 (page time 2026-09-14 10:36:11)
- Source: Douyin E-commerce (抖音电商), 《商家售后服务管理规范》
- URL: https://school.jinritemai.com/doudian/web/articlev0/104600
- Verified 1: 2026-09-24 (rendered with headless Edge; a plain fetch returns an empty shell)
- Verified 2: 2026-09-24 (re-rendered at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: exchange, re-ship and repair windows (36 / 48 hours) are on the same page, not used yet. The page also defines instant-refund (极速退款) conditions.

### Cross-border retail import returns: 30-day application, 45-day arrival, tax not collected
- Value: returns applied for within 30 days of release of the cross-border declaration list, with the goods back at the original bonded site within 45 days, have the tax not collected and the shopper's annual quota restored
- As of: March 2020 (GACC Announcement No. 45 of 2020, signed 2020-03-28, in force on issue; overrides the conflicting part of Announcement 194 of 2018)
- Source: General Administration of Customs (海关总署), carried by China Quality News (中国质量新闻网)
- URL: https://www.cqn.com.cn/ms/content/2020-03/30/content_8445884.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-fetched at iteration 8, unchanged)
- Used in: douyin-return-rate
- Notes: customs.gov.cn serves a challenge page to non-browser fetches; the state-media mirror is the citable URL. The filer is the cross-border seller's domestic agent or its customs broker.

### Douyin return rate and cost per kept order at calculator defaults (proprietary)
- Value: calculator defaults (RMB 2m GMV, RMB 250 basket, 8,000 orders, retainer RMB 30,000/month, DP commission 5%, co-fund 0, mix 15% paid / 80% creators / 5% organic, creator commission 20%, ROAS 2.5, packaged-food tech fee 4%, tax 9.1%, storage 0.8 x 2 months, pick and pack 4, last mile 11, return handling 15), only the return rate moved. Year-one running cash, setup excluded: 1,300,800 / 1,330,800 / 1,354,800 RMB at 5% / 30% / 50%; per order placed 162.60 / 166.35 / 169.35; per kept order 171.16 / 237.64 / 338.70 (444.35 at 61.5%, 869.25 at 80%). Net view (creator commission and cross-border tax on kept orders only): 167.86 / 210.75 / 275.95; with DP commission on net as well: 167.20 / 205.39 / 263.45. DP commission gross 100,000 vs net 95,000 / 70,000 / 50,000
- Updated: 2026-09-24. Recomputed on the new Douyin fee table: cost per kept order RMB 167.21 / 232.29 / 331.20 at 5% / 30% / 50% returns (see Douyin cross-border deposit and fee standard, September 24, 2026).
- As of: September 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro (drivers, groups defaults, categories, compute() opStack)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-24 (defaults and formulas read; replicated in a scratch script)
- Verified 2: 2026-09-24 (defaults re-read at iteration 8; outputs rerun)
- Used in: douyin-return-rate
- Notes: scenario arithmetic, not client data or a market rate. Running cash excludes setup, deposits and amortization; no deposit figure printed (an earlier run flagged the calculator's Douyin cross-border deposits as possibly outdated). The calculator charges fulfillment and last mile on every placed order, overstating cost for pre-shipment refunds, and holds sales-linked lines at gross. The platform fee stays at gross because no Douyin page read says whether it is refunded on returns. Apparel (5% fee) adds RMB 2.50 per placed order.
- Superseded: 2026-09-24, see Douyin cross-border deposit and fee standard, September 24, 2026

### Re-verified ledger entries reused (no new entry; add the slug)
- E-commerce return rate, Double 11 2025 (Beijing Daily carrying CCTV, January 11, 2026): re-fetched 2026-09-24 at both checks. Add "douyin-return-rate" to Used in.
- 网络交易平台规则监督管理办法, SAMR and CAC order 116 (Article 27): re-fetched 2026-09-24 at both checks. Add "douyin-return-rate" to Used in.
- Creator commission settlement: 15 days after receipt, refunds clawed back (Douyin affiliate settlement rules, August 2026): re-rendered 2026-09-24 at both checks. Add "douyin-return-rate" to Used in.

## Partner cluster P15 (replace-distributor-china), 2026-09-24

### Dirui v. Cheng'antang: final appeal judgment on an exclusive distributor's missed targets
- Value: Beijing No. 1 Intermediate People's Court, (2015)一中民（商）终字第7955号, set aside the first-instance judgment and ordered Dirui to pay Beijing Cheng'antang 5,864,950 RMB in liquidated damages (违约金) within ten days; Cheng'antang's other claims and Dirui's counterclaim dismissed; final (终审). The first-instance Shijingshan court had awarded 6,256,430 RMB in July 2015.
- As of: April 2016 (announcement 2016-017, dated April 15, 2016)
- Source: Changchun Dirui Medical Technology (长春迪瑞医疗科技股份有限公司, SZSE 300396), 关于诉讼事项的进展公告, on 巨潮资讯网 (cninfo)
- URL: http://static.cninfo.com.cn/finalpage/2016-04-16/1202187573.PDF
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: the filing quotes the judgment's operative part; the judgment itself is on China Judgements Online behind a login. The court's reasoning is NOT in any citable source found; the tiantailaw.com law-firm summary is a lead only. Never attribute a "written notice was required" holding to the court from this filing. The filing names the first-instance judgment as both 837号 and 4094号; print neither.

### Dirui v. Cheng'antang: the contract, the missed targets and the unilateral downgrade
- Value: March 10, 2008 agency contract making Cheng'antang Dirui's exclusive Beijing distributor for all urinalysis products for five years; targets agreed each January (2008: 32,000 tubes of test strips and 8 H800 analyzers; 2009: 34,000 tubes and 10 H800); after two consecutive years of missed targets Dirui, from 2010, 取消诚安堂独家代理资格，视其为一般经销商，不再与诚安堂签订年度任务, kept supplying it and began supplying other Beijing distributors and hospitals; July 2012 Dirui sued in Changchun to terminate the contract (claim 680,862 RMB); Cheng'antang sued in Shijingshan for continued performance and 7,508,040 RMB to December 31, 2012; the SPC assigned both cases to Shijingshan on July 31, 2013
- As of: August 2014 (prospectus signed August 28, 2014)
- Source: Changchun Dirui Medical Technology (长春迪瑞医疗科技股份有限公司), IPO prospectus (首次公开发行股票并在创业板上市招股说明书), on 巨潮资讯网 (cninfo)
- URL: http://static.cninfo.com.cn/finalpage/2014-08-28/1200180236.PDF
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: the prospectus mentions no written termination notice before the 2012 suit. Say "the filings show no written termination", never "Dirui sent no notice".

### Civil Code Arts. 562 to 566: termination grounds, the one-year lapse, notice on arrival
- Value: Art. 562, termination by agreement or on an agreed event; Art. 563, statutory grounds, and open-ended continuing contracts terminable on reasonable prior notice; Art. 564, a termination right lapses at the end of the agreed or statutory period or, absent one, if not exercised within one year of the day the holder knew or should have known the grounds (or within a reasonable time after the other side's demand); Art. 565, a terminating party must notify the other, the contract ends when the notice arrives, and either party may ask a court or arbitrator to confirm; Art. 566, effects of termination
- As of: adopted May 28, 2020, in force January 1, 2021
- Source: National People's Congress, Civil Code (中华人民共和国民法典), via the Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=70524
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china (Arts. 564 and 565 cited)
- Notes: same URL as the existing "Civil Code Art. 933" entry (P08); this entry adds the termination chapter. Relevant to every exit and notice piece.

### Trademark Law (2019): licence filing, agent squatting, five-year invalidation window
- Value: Art. 43, the licensor must file the licence with the Trademark Office, which publishes it; an unfiled licence cannot be asserted against a good-faith third party; licensed goods must show the licensee's name and place of origin. Art. 15, an agent or representative that registers the principal's mark in its own name without authorization is refused registration and barred from use on the principal's opposition. Art. 45, invalidation on Art. 15 grounds within five years of registration (no limit for a well-known mark's owner against bad faith).
- As of: fourth amendment April 23, 2019; CNIPA page dated July 30, 2019
- Source: China National Intellectual Property Administration (国家知识产权局), 中华人民共和国商标法(2019年修正)
- URL: https://www.cnipa.gov.cn/art/2019/7/30/art_95_28179.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: in force until December 31, 2026. From January 1, 2027 the 2026 revision applies (next entry); re-cite by the new article numbers after that date.

### Trademark Law (2026 revision): licence filing rule kept as Art. 55, in force January 1, 2027
- Value: Art. 55 keeps the licence filing and good-faith third party rule and adds a licensor right to terminate the licence if the licensee breaks its quality duty; Art. 87, the law takes effect January 1, 2027
- As of: CNIPA page dated June 26, 2026 (source 中国人大网)
- Source: China National Intellectual Property Administration (国家知识产权局), 中华人民共和国商标法(2026年修订)
- URL: https://www.cnipa.gov.cn/art/2026/6/26/art_95_206942.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: the server returns gzip; fetch with decompression. The adoption date of the revision was not confirmed on this page; cite the page month (June 2026) only.

### CNIPA guideline on trademark licence filing: early termination, new licensee, 30-day correction, fee
- Value: the licensor files; one filing form per licensee per mark; the licensor may file an early-termination record (提前终止备案) when a licence ends early; a change of licensee or other substantive change needs a new filing; CNIPA gives 30 days to correct a deficient filing; filing fee 150 RMB on paper, 135 RMB online
- As of: October 29, 2024
- Source: China National Intellectual Property Administration (国家知识产权局), 关于商标使用许可备案程序的指引 (PDF attachment to the policy interpretation page)
- URL: https://www.cnipa.gov.cn/art/2024/10/29/art_66_195761.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: no processing time is published anywhere in the guideline; do not print one. The fee sits in footnote 5 and points to the 中国商标网 fee list; re-check the fee before reuse.

### PIPL Art. 23: sharing personal information with another handler needs separate consent
- Value: a handler providing personal information to another handler must tell each individual the recipient's name, contact details, purpose, method and data types, and obtain the individual's separate consent (单独同意); the recipient must stay within that scope
- As of: adopted August 20, 2021, in force November 1, 2021
- Source: Cyberspace Administration of China (国家网信办), Personal Information Protection Law (个人信息保护法)
- URL: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: same URL as the existing PIPL Art. 21 entry (P08); Art. 21 was re-fetched today as well (add replace-distributor-china to its Used in). Use Art. 23 when a distributor collected customers as its own handler; Art. 21 only when it processed data under an entrustment contract.

### Compass shortlist size (proprietary, already published)
- Value: a typical Compass shortlist runs three to five names
- As of: September 2026
- Source: TheChinaPath site copy (src/content/pages/partner-guides/shared.ts, heroStats)
- Label in copy: "from Compass, September 2026"
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: replace-distributor-china
- Notes: a published service description, not a data pull. Pairs with the existing "Compass shortlist turnaround" entry (two to three weeks).

### Re-verified ledger entries reused (original Used in fields updated at publish)
- Compass shortlist turnaround (two to three weeks): re-read in shared.ts 2026-09-24, both checks. Add replace-distributor-china.
- NMPA Announcement 70 of 2026: re-rendered with headless Chromium 2026-09-24, both checks. Add replace-distributor-china.
- Old responsible-person change rule, NMPA 2021 document rules Art. 38 (Fujian MPA): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- Food Safety Law Arts. 96 and 97 (MOFCOM id=104105): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- Anti-Monopoly Law Art. 18 (MOFCOM id=97047): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- Nike ends Topsports' online sales of Nike in mainland China from January 1, 2027 (STCN): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- Tmall Global Merchant Service Agreement (no transfer without written consent): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- Douyin shop store types and brand authorization letters (fxg.jinritemai.com, undated, observed September 2026): re-fetched 2026-09-24, both checks. Add replace-distributor-china.
- PIPL Art. 21 (CAC): re-fetched 2026-09-24. Add replace-distributor-china.

### Researched, not used (P15, 2026-09-24)
- tiantailaw.com/CN/12371-18916.aspx (Tiantai law firm, 2022-01-25): lead for the Dirui case; paraphrases the court's reasoning on written notice. Law-firm page, not cited.
- Dirui 2015 annual report (http://static.cninfo.com.cn/finalpage/2016-04-09/1202155950.PDF): first-instance award and a 5,864,950 RMB provision. Checked once; the 2016 announcement is the citable final result.
- Customs Decree 248 (gov.cn): superseded by Decree 280 from June 1, 2026; not cited.

## Douyin cross-border deposit and fee standard, September 24, 2026

### Douyin Global (抖音全球购) base deposit: 500 / 2,000 / 5,000 RMB by last month's GMV
- Value: base deposit (基础保证金) set by last calendar month's paid GMV: 500 RMB at 0 to 50,000 RMB, 2,000 RMB above 50,000 to 100,000, 5,000 RMB above 100,000; same for every category; re-set monthly (notice on the 1st, new amount on the 8th); refundable after the store closes
- As of: June 2025 (latest revision effective 2025-06-05; first effective 2021-12-30)
- Source: Douyin E-commerce (抖音电商), 《【全球购】保证金管理规范》, 2.2.1, 2.3.1, 2.6.2
- URL: https://school.jinritemai.com/doudian/web/articlev0/107821
- Verified 1: 2026-09-24 (rendered with headless Chromium via Playwright; WebFetch returns an empty body; tier table and scope clause 1.2 read)
- Verified 2: 2026-09-24 (re-rendered; rule text identical to check 1 by diff)
- Used in: douyin-cost-calculator (src/pages/tools/douyin-cost-calculator.astro and the FR, DE, ES versions); cost-to-sell-dairy-and-spreads-in-china, cost-to-sell-facial-skincare-in-china, cost-to-sell-footwear-in-china, how-on-running-entered-china (EN, FR, DE, ES), from 2026-09-24
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
- Used in: douyin-cost-calculator; cost-to-sell-dairy-and-spreads-in-china, cost-to-sell-footwear-in-china, china-livestream-cost-for-brands (EN, FR, DE, ES), from 2026-09-24
- Notes: tea, infant formula and phones have no row of their own; they fall under 水饮冲调 (3%), 母婴用品 other (3%) and 3C数码及配件 other (3%) by inference from the category tree, not by a verbatim line. Special medical formula may sit under 营养保健/特医食品 (4%). Fee base: consumer paid amount including shipping + host coupons + platform coupons (merchant coupons excluded), per 《【全球购】招商管理规则》 5.2.1.

### Douyin Global channel supplement and specialty-store rates
- Value: a supplementary tech service fee applies on orders from the 抖音商城 app and 豆包 only (for example 3.9% on top of a 3% base, 4% on top of 6%, 5.2% on top of 4%); 专营店 and 专卖店 pay 6.5% on 钟表眼镜, 鞋靴, 箱包, 服装 and 5.5% on 彩妆香水 for orders outside those two channels
- As of: July 2026 (rules revision effective 2026-07-15)
- Source: Douyin E-commerce (抖音电商), 《【全球购】招商管理规则》 5.2.2, with the rates in 《【全球购】技术服务费费率标准》
- URL: https://school.jinritemai.com/doudian/web/article/108056
- Verified 1: 2026-09-24 (rendered with headless Chromium)
- Verified 2: 2026-09-24 (re-rendered; 特定渠道范围包括抖音商城app、豆包 and the 2026-07-15 effective date present)
- Used in: china-livestream-cost-for-brands (EN, FR, DE, ES; one sentence saying the allowance leaves the supplement out), from 2026-09-24
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
- Used in: cost-to-sell-dairy-and-spreads-in-china, cost-to-sell-facial-skincare-in-china, cost-to-sell-footwear-in-china, how-on-running-entered-china, china-livestream-cost-for-brands (EN, FR, DE, ES), from 2026-09-24
- Notes: supersedes every earlier Douyin row in this ledger (footwear, facial skincare, dairy and spreads, sports, livestream allowance, P04 worked year, P14 return-rate defaults). Cash before the first sale on Douyin cross-border is now 5,000 RMB for any brand above 100,000 RMB a month (500 RMB in a first month under 50,000). Fees are base rates, flagship store, main-app orders; midpoints where a label spans rates.

## Partner cluster flags (competitors cut, Tmall rules), September 24, 2026

### Tmall store types: flagship, specialty and multi-brand store definitions
- Value: 第四条 旗舰店指以自有品牌或由商标权人提供独占授权的品牌入驻天猫开设的店铺 (flagship: own brand, or a brand under the trademark owner's exclusive authorization); 第五条 专卖店指以商标权人提供普通授权的品牌入驻天猫开设的店铺, one brand or several brands under the same actual controller, authorization with no regional limit (some categories excepted) and at least six months' validity (specialty: ordinary authorization); 第六条 专营店指同一天猫经营大类下经营两个及以上品牌的店铺 (multi-brand: two or more brands in one Tmall business category)
- As of: in force January 1, 2019, revised June 6, 2025
- Source: Tmall (天猫), 《天猫入驻标准》, Tmall rule center (rulechannel.tmall.com)
- URL: https://rulechannel.tmall.com/?type=detail&ruleId=9257&cId=378#/rule/detail?ruleId=9257&cId=378
- Verified 1: 2026-09-24 (rendered with headless Chromium after the JavaScript finished; articles 4 to 6 and the revision line read; zhaoshang.tmall.com homepage carries the same three definitions)
- Verified 2: 2026-09-24 (re-rendered before finishing; revision line and articles 4, 5(1)2 and 6 re-found)
- Used in: tmall-partner-store-ownership
- Notes: the page is a JavaScript app; a plain fetch returns only the shell. Open it from the rule-center search ("天猫入驻标准", the 2018-12-24 result) if the direct URL stops resolving.

### Tmall Global service provider types: distribution-type and operating partner
- Value: 经销类服务商认证条件: 1.服务商公司非品牌方本身；2.全部店铺均以经销模式进行合作。代运营服务商认证条件: 1.服务商公司非品牌方本身；2.店铺开店主体和运营公司不是同一家公司，运营店铺中有店铺为代运营合作模式，且运营主体在天猫或天猫国际已经运营一家及以上店铺。Operating partners go on to 星级评选; distribution partners to 经销推荐.
- As of: September 30, 2025
- Source: Tmall Global service provider market (天猫国际服务市场), 天猫国际服务商入驻认证流程
- URL: https://globaltp.tmall.com/import_tp/TP/informationDetail?id=788
- Verified 1: 2026-09-24 (page rendered; body is an image, https://img.alicdn.com/imgextra/i1/O1CN01uIpO6F1TuwgONufHl_!!6000000002443-0-tps-1100-7211.jpg, downloaded and read)
- Verified 2: 2026-09-24 (page re-rendered, date re-found, same image URL, re-download byte-identical)
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: the notice also has operating partners pay a "10万保证金" with no currency stated; do not print it. The 2021 wording ("开店主体且拥有所售品牌商品的完整所有权") survives only on reposts; do not cite it.

### Principal vs agent: control, inventory risk and the right to set price (revenue standard)
- Value: article 34: a company that controls the goods before transfer to the customer is the principal and books the gross amount; otherwise it is an agent and books its commission or fee. Indicators include primary responsibility for delivery, bearing inventory risk before or after transfer (承担了该商品的存货风险) and the right to set the price on its own (有权自主决定所交易商品的价格)
- As of: 财会〔2017〕22号, issued July 5, 2017 (listed companies from 2018 or 2020, other enterprises from 2021)
- Source: Ministry of Finance (财政部), 《企业会计准则第14号》 (revenue standard), notice on m.mof.gov.cn with the standard as a PDF attachment (P020170719328747835611.pdf)
- URL: http://m.mof.gov.cn/zcfb/201707/t20170719_2653110.htm
- Verified 1: 2026-09-24 (page fetched with a generic user-agent and decoded as GBK; PDF downloaded, pdftotext, article 34 read in full)
- Verified 2: 2026-09-24 (page re-fetched, 502 once then 200; notice number, date and PDF link re-found; PDF byte-identical, article 34 strings re-found)
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: the standard's official title contains an em dash (——); cite it as 企业会计准则第14号. The server is intermittent; retry before failing a check.

### Tmall Global 2026 star rating for operating partners: tiers and thresholds
- Value: rated subjects: all Tmall Global operating (代运营) partners with bound stores; three tiers by composite score: 金星, 银星, 铜星服务商; Gold at least 3 bound stores and annual confirmed-receipt sales (年度确收体量) of 40 million RMB, Silver 2 stores and 15 million, Bronze 2 stores and 10 million, below that no rating; red lines include fake transactions and unkeepable promises such as "保销XX万"; benefits include a star badge in the provider list merchants choose from, targeted invitations to 官方直营 and 探物 operating needs, a dedicated platform contact; in force March 31, 2026, replacing the 2024 rule
- As of: March 20, 2026
- Source: Tmall Global service provider market (天猫国际服务市场), 《天猫国际2026服务商生态星级考核规则》
- URL: https://globaltp.tmall.com/import_tp/TP/informationDetail?id=815
- Verified 1: 2026-09-24 (page rendered; body image https://img.alicdn.com/imgextra/i4/O1CN01ZIx7Jt29noQB3KJ03_!!6000000008113-0-tps-1100-4442.jpg downloaded and read in slices)
- Verified 2: 2026-09-24 (re-rendered, date re-found, image re-download byte-identical)
- Used in: tmall-partner-rating-douyin-service-provider
- Notes: supersedes the 2021 quarterly scheme with Purple Star for current-tense copy. The currency is RMB by context (the same note excludes single orders over 5万元人民币). A separate 2026 industry star rule and list (May 11, 2026) exist on the same site and were not read.

### Tmall Global FY26 star list: cycle and scoring weights
- Value: list published April 29, 2026, for the April 2025 to April 2026 cycle; score weights: store scale and growth 77%, service experience 20%, content and innovation 3%, plus deductions
- As of: April 29, 2026
- Source: Tmall Global service provider market (天猫国际服务市场), 《FY26天猫国际年度星级服务商榜单》, and the notice list summary
- URL: https://globaltp.tmall.com/import_tp/TP/informationDetail?id=821 (cycle line: https://globaltp.tmall.com/import_tp/TP/informationList)
- Verified 1: 2026-09-24 (page rendered; body image https://img.alicdn.com/imgextra/i3/O1CN01UFSDGQ1Y2VjWFqS4Q_!!6000000003001-0-tps-1100-6951.jpg read; cycle line read on the list page)
- Verified 2: 2026-09-24 (re-rendered; image byte-identical; cycle line re-found)
- Used in: tmall-partner-rating-douyin-service-provider
- Notes: the list names individual providers, most of them competitors. Never name or count them in copy.

## WeChat Store Double 11 2026 (Signal 04S), September 28, 2026

### WeChat Store 11.11 cross-store coupon: dates, 12.5% cap, 1:1 funding, 100% for 好店
- Value: registration 2026-09-28 14:00 to 2026-11-15 23:59:59; cross-store coupon 2026-10-12 14:00 to 2026-11-15 23:59:59; base coupon 满X减Y with Y/X ≤ 12.5% (example 200-25); mixed mode funded 1:1 by platform and merchant, merchant give-back ≤ entered price × 12.5% × 50%, merchant minimum revenue rate 1 − 12.5% × 50%; 好店-badge (品牌/热销/服务好店) goods listed ≥ 3 days can get 100% platform funding; sharing bonus (膨胀券) fully platform-funded; platform share returned on refund; coupon applies after store coupons and live-room price; entered goods do not get the new-merchant commission reduction; price-check period 2026-09-04 to 2026-11-15, no raise-then-discount; store experience score ≥ 4.4 or none, no major violation in 30 days; catering, hotel-travel and ticketing excluded; autumn-sale goods auto-renew into 11.11 with the 续报 switch on, at changed coupon face values; one platform-subsidy event per item per period
- As of: September 22, 2026
- Source: WeChat Store (微信小店) operations team, 《微信小店｜2026年11.11平台大促-平台活动激励计划》, growth-centre platform notice
- URL: https://store.weixin.qq.com/chengzhang/webdoc/wiki/9966/da464e308e8e62a8/growth_center_platform_notice/2
- Verified 1: 2026-09-28 (full HTML pulled with curl, text extracted, every figure read on the page; notice dated 2026-09-22)
- Verified 2: 2026-09-28 (re-fetched without the bpath parameter; 13 key strings re-found, including 12.5%, 1：1, 100%平台出资补贴, 不享受平台针对新商家的佣金减免政策, the Sept 4 to Nov 15 check period and both start times)
- Used in: wechat-store-double-11-subsidy
- Notes: the 12.5% cap is on the base coupon; category coupons (品类券) have their own funding rules. The badge criteria live in a separate rule (《微信小店"好店"标识管理规则》), not read.

### WeChat Store technical service fee: 1% to 5% for most categories; new-store 1%
- Value: most categories 1% to 5%; new stores pay 1% on the first 1 million RMB of sales (1.5 million in priority categories) within 90 days of the first order and no later than 180 days after opening; 3,000+ categories allow a zero-deposit trial
- As of: August 2026 (page last updated 2026-08-24)
- Source: Tencent Marketing (腾讯营销), WeChat Store FAQ 《微信小店开店需要多少钱？零保证金是真的吗？》
- URL: https://e.qq.com/faq/wechat-store/growth/faq-zcjc-008/
- Verified 1: 2026-09-28 (page fetched, both figures and the update date read)
- Verified 2: 2026-09-28 (re-fetched, "多数类目的费率在 1% 到 5% 之间" and the 90/180-day, 100万/150万 line re-found)
- Used in: wechat-store-double-11-subsidy
- Notes: Tencent is WeChat's owner, so this counts as first-party. The per-category rate table sits behind the merchant back end and was not reached; do not quote a single category's rate from secondary sites.

### WeChat Store does not support cross-border bonded import goods
- Value: official reply "不支持。" to a merchant asking whether bonded cross-border import goods, an overseas business licence or overseas settlement are supported
- As of: January 20, 2025
- Source: WeChat Open Community (微信开放社区), official staff reply
- URL: https://developers.weixin.qq.com/community/minihome/doc/000aca314d43589a14c212ae461c00
- Verified 1: 2026-09-28 (page fetched, question and reply read with date)
- Verified 2: 2026-09-28 (re-fetched, reply and date unchanged)
- Used in: wechat-store-double-11-subsidy
- Notes: the channels-store qualification doc also says entrants must be mainland-registered enterprises (developers.weixin.qq.com/doc/channels/Operating_Specifications/Store_Operation_Rules/qualification.html) but shows no date, so it is not cited.

### JD Double 11 2026 opens October 12
- Value: "京东今年'双11'将于10月12日全面开启、现货开卖"
- As of: September 24, 2026
- Source: National Business Daily (每日经济新闻)
- URL: https://www.nbd.com.cn/articles/2026-09-24/4591116.html
- Verified 1: 2026-09-28 (page fetched, date and opening line read)
- Verified 2: 2026-09-28 (re-fetched, line re-found)
- Used in: wechat-store-double-11-subsidy, double-11-preparation-checklist (added 2026-10-02 in all four locales; page re-fetched 2026-10-02, opening line re-found)
- Notes: trade press relaying JD's announcement.

### Tmall Double 11 2026 presale opens October 15
- Value: presale warm-up and deposit payment from October 15; final payment October 20 20:00; spot sale October 20 20:00 to November 13 23:59
- As of: September 22, 2026
- Source: Beijing Business Today (北京商报), reporter 何倩, via NetEase
- URL: https://www.163.com/dy/article/L7E4TETQ0519DFFO.html
- Verified 1: 2026-09-28 (page fetched, dates read)
- Verified 2: 2026-09-28 (re-fetched, "10月15日开启预售预热和定金支付" and the byline date re-found)
- Used in: double-11-preparation-checklist (added 2026-10-02 in all four locales; page re-fetched 2026-10-02, the three dates and the 2026-09-22 byline re-found)
- Notes: bbtnews.com.cn original returns 403 to the fetcher; the NetEase copy carries the byline.

## Social media monthly cost research (Anchor 04A), September 29, 2026

### Xiaohongshu enterprise professional-account verification: 600 RMB, annual review 600 RMB; overseas entities from opened regions
- Value: enterprise professional account first verification 600 RMB per application; annual review 600 RMB, once a year; personal professional accounts free; overseas and HK/Macau/Taiwan entities may apply from regions the platform has opened (mainland, Hong Kong, Singapore, Malaysia named)
- As of: August 2026 (更新时间 2026-08-02; rule effective 2026-06-30)
- Source: Xiaohongshu Juguang Help Center (小红书聚光帮助中心), 《【变更】专业号认证规则规范》
- URL: https://ad.xiaohongshu.com/next_help/docs/195c5fe505c71b4b0335a2fe0d61d8e0
- Verified 1: 2026-09-29 (WebFetch empty; rendered with headless Edge; "企业专业号首次认证 600元/次", "企业号年审600元/次，一年一审", overseas scope and date read)
- Verified 2: 2026-09-29 (re-rendered with headless Edge on a temporary profile, second try; 600元/次, 年审600元, 境外, 新加坡, 马来西亚, 2026-08-02 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: the rule text only names HK, Singapore and Malaysia among overseas regions; do not claim EU or US entities can verify.

### WeChat overseas-entity verification: US$99 per application
- Value: US$99, a one-off review service fee paid for each verification application by an overseas entity; overseas Mini Programs need no filing and no annual review
- As of: June 2025 (PublishTime 2025-06-16, updated 2025-06-17)
- Source: WeChat Open Community (微信开放社区), account 小程序境外专项, 《常见问题第一期｜境外业务注册、认证相关问题》
- URL: https://developers.weixin.qq.com/community/develop/article/doc/000e64388c0f107faf739efcd66813
- Verified 1: 2026-09-29 (page behind a login wall; read through the community JSON API /community/ngi/doc/detail/<id>; "目前境外主体认证费用为99美元" and PublishTime confirmed)
- Verified 2: 2026-09-29 (JSON re-fetched with curl; 99美元 and PublishTime 1750078781 = 2025-06-16 re-found)
- Used in: china-social-media-marketing-cost-per-month, how-insurance-and-financial-services-reach-customers-in-china
- Notes: the same US$99 appears on Tencent's help page kf.qq.com/faq/190723aQvMR31907233IF7FV.html, which is undated (confirmation only). Mainland 300 RMB/yr verification pages are official but undated: not cited.

### Xingtu recruitment tasks: 10,000 RMB minimum order budget, 5% platform service fee
- Value: recruitment task budget from 10,000 RMB; platform service fee 5%; creator follower threshold 1K to 5M
- As of: August 2026 (last modified 2026-08-27; created 2022-07-22)
- Source: Ocean Engine Xingtu Help Center (巨量星图), advertiser side
- URL: https://www.xingtu.cn/help-center/demander/126583
- Verified 1: 2026-09-29 (headless Edge; "招募任务下单预算1W起，平台服务费5%" and last-modify stamp read)
- Verified 2: 2026-09-29 (re-rendered; 1W起, 平台服务费5%, 2026-08-27 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: a companion page (https://www.xingtu.cn/help-center/demander/138961, last modified 2025-04-15) says assigned tasks pay 5% on the full task amount including add-on fees; checked once on 2026-09-29, not cited.

### Qianchuan campaign plan: default minimum daily budget 100 RMB
- Value: a new Qianchuan plan needs a daily budget; default minimum 100 RMB
- As of: June 2025 (2025-06-24 23:20:14 on the page)
- Source: Douyin E-commerce Learning Center (抖音电商学习中心), 《一文读懂巨量千川-流量推广金》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHvyeGCvMaTB
- Verified 1: 2026-09-29 (headless Edge; "推广日预算默认最低为100元" and date read)
- Verified 2: 2026-09-29 (re-rendered; passage and date re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: the widely repeated 300 RMB/day figure traces only to content farms; never print it.

### Xiaohongshu creator deals: 10% platform service fee charged to the brand (2021 reporting)
- Value: 10% of the transaction amount, charged to the brand on creator partnerships booked through the brand partnership platform (launched March 2020, later 蒲公英)
- As of: November 2021
- Source: Southern Weekend (南方周末), via Tencent News
- URL: https://news.qq.com/rain/a/20211118A0DAAZ00
- Verified 1: 2026-09-29 (WebFetch; "小红书会向品牌方收取平台服务费，即交易金额的10%" and date read)
- Verified 2: 2026-09-29 (curl re-fetch; 10% and 平台服务费 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: older than twelve months. The current 蒲公英 fee page is login-only; copy must present the rate as last reported in 2021. Replace when a dated 2025-2026 source is found.
- Superseded: 2026-10-13, see "Xiaohongshu Pugongying custom deals: creator price plus 10% platform service fee (official)"; the help doc is readable through its JSON API. china-social-media-marketing-cost-per-month now cites it in all four locales.

### WeChat Moments ads, 2018 Q3 list: 50,000 RMB guaranteed minimum, 1,000 RMB/day auction minimum, CPM list prices
- Superseded for current copy (2026-10-02) by "WeChat Moments ads, 2020 Q2 list", which carries the same minimums. History only.
- Value: guaranteed (排期) buy: CPM at list price, single campaign budget from 50,000 RMB; list CPM image 150 / 100 / 50 RMB and video 180 / 120 / 60 RMB for core cities (Beijing, Shanghai) / 20 key cities / other cities; auction (竞价) buy: daily budget from 1,000 RMB, minimum CPM bid 100 / 60 / 30 RMB
- As of: Q3 2018
- Source: WeChat Ads (微信广告), 《朋友圈广告金融行业解决方案 2018-Q3》 PDF
- URL: https://wximg.qq.com/wxp/wxadtouch/upload/t2/file-1533693930261.pdf
- Verified 1: 2026-09-29 (curl + pdftotext; figures and period read)
- Verified 2: 2026-09-29 (re-downloaded, PyMuPDF pages 9-10: "广告单次投放总预算5 万元起", "每日预算1000 元起", "核心城市[ 2个] ：北京、上海", "150元/ 千次曝光")
- Used in: china-social-media-marketing-cost-per-month
- Notes: historical list prices, eight years old. Label every use "2018". A Tencent Ads API doc shows a 50 RMB daily-budget floor but is undated: not usable.

### Sponsored creator post prices: Xiaohongshu 10,800 RMB, Douyin 39,700 RMB (January to October 2024)
- Value: average value per sponsored post Xiaohongshu 1.08万 RMB, Douyin 3.97万 RMB; Xiaohongshu brand averages 13.7 sponsored posts a month (1.6x Douyin); average deal per Xiaohongshu creator 1.2万 RMB (40% of Douyin); CPE 10.7 RMB Xiaohongshu vs 2.0 RMB Douyin
- As of: January to October 2024 (article dated 2025/03/07)
- Source: Jiemian (界面新闻), JMedia column by 刀客doc, citing the QuestMobile NEW MEDIA database
- URL: https://www.jiemian.com/article/12440261.html
- Verified 1: 2026-09-29 (curl; figures, period and date read)
- Verified 2: 2026-09-29 (curl re-fetch; 3.97万, 1.08万, 13.7篇, 2024年1-10月, 10.7元, 2.0元, 2025/03/07 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: platform averages, not tier prices. QuestMobile's own release carries the per-post figures only in chart images, so cite Jiemian citing QuestMobile. CPE refers to sponsored creator posts, not ads. Related: QuestMobile 2024 品牌商业软广营销洞察 via DoNews (2024-09-24, https://www.donews.com/news/detail/1/4547390.html) gives monthly creator spend per brand Jan-Jul 2024 of 18.7万 (Xiaohongshu) and 32.4万 (Douyin); checked once by the research agent, not cited.

### Shenzhen 2024 pay for 互联网营销师 (covers new-media marketing): median 108,209 RMB a year
- Value: annual pay per person, 2024: P10 64,580 / P25 74,969 / median 108,209 / P75 164,915 / P90 222,635 RMB; occupation mapping includes 新媒体营销, 视频创推员, 直播销售员; 4,794 enterprises surveyed; 电子商务师 median 112,691 RMB
- As of: 2024 (survey period 2024-01-01 to 2024-12-31; published 2026-04-14)
- Source: Shenzhen Human Resources and Social Security Bureau (深圳市人力资源和社会保障局), 《深圳市2025年人力资源市场工资价位及行业人工成本信息》
- URL: https://hrss.sz.gov.cn/xxgk/tjsj/zxtj/content/post_12735120.html (PDF: https://hrss.sz.gov.cn/attachment/1/1703/1703629/12735120.pdf, page 16)
- Verified 1: 2026-09-29 (PDF with curl; page 16 read with PyMuPDF because pdftotext scrambles columns)
- Verified 2: 2026-09-29 (re-downloaded; row "互联网营销师S 64580 74969 108209 164915 222635" re-read; page date 2026-04-14)
- Used in: china-social-media-marketing-cost-per-month
- Notes: wages only, not employer cost; social insurance and housing fund not verified. Shanghai publishes no public equivalent (its full wage-level book goes only to surveyed firms).

### Weixin and WeChat combined MAU 1,439 million; Tencent marketing services RMB 43.6 billion, +22% (Q2 2026)
- Value: combined MAU 1,439m at 2026-06-30 (+2% YoY, +0.5% QoQ); marketing services revenue RMB 43.6bn in 2Q2026, +22% YoY
- As of: Q2 2026 (release dated Hong Kong, 12 August 2026)
- Source: Tencent Holdings, 2026 second quarter results release
- URL: https://www.tencent.com/wp-content/uploads/2026/08/Tencent-Announces-2026-Second-Quarter-Results.pdf
- Verified 1: 2026-09-29 (curl + pdftotext)
- Verified 2: 2026-09-29 (re-downloaded; "Combined MAU of Weixin 1,439 1,411 2% 1,432 0.5%" and "Marketing Services were RMB43.6 billion for 2Q2026, up 22%" re-found)
- Used in: china-social-media-marketing-cost-per-month, how-insurance-and-financial-services-reach-customers-in-china
- Notes: the 2% is YoY, not QoQ. No separate figure for Moments, Video Accounts or WeChat Store ads.

### Weibo MAU 561 million, DAU 254 million; ad revenue US$381.0 million, -1% (Q2 2026)
- Value: MAU 561m and DAU 254m in June 2026; advertising and marketing revenue US$381.0m in 2Q2026, down 1% YoY (ex-Alibaba US$341.8m, -2%); total net revenue US$453.8m
- As of: Q2 2026 (release dated Hong Kong, 19 August 2026)
- Source: Weibo Corporation, via PR Newswire
- URL: https://www.prnewswire.com/news-releases/weibo-announces-second-quarter-2026-unaudited-financial-results-302855055.html
- Verified 1: 2026-09-29 (WebFetch)
- Verified 2: 2026-09-29 (curl re-fetch; 561 million, 254 million, US$381.0 million, decrease of 1% re-found)
- Used in: china-social-media-marketing-cost-per-month

### Xiaohongshu MAU above 400 million, 800 million daily searches (company figure)
- Value: monthly active users above 400m; daily searches up to 800m; disclosed in Xiaohongshu's 《视频创作者趋势观察报告》
- As of: May 2026 (2026-05-27 17:08)
- Source: Beijing Business Today (北京商报), reporter 何倩, via Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml
- Verified 1: 2026-09-29 (WebFetch)
- Verified 2: 2026-09-29 (curl re-fetch; 4亿, 8亿, 2026年05月27日 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: a DAU above 170m (LatePost citing an insider, via 17173.com 2026-05-27) is not official; not cited.

### Douyin MAU 1,009.0 million, March 2026 (QuestMobile)
- Value: Douyin main app MAU 100,900.27万 at March 2026, +14.43% YoY; Douyin Lite adds 3.3亿
- As of: March 2026 (article 2026-04-29 08:12)
- Source: Kuai Technology (快科技) reporting QuestMobile's 2026 spring ranking, via Sina Tech (新浪科技)
- URL: https://finance.sina.com.cn/tech/discovery/2026-04-29/doc-inhwckrh8029807.shtml
- Verified 1: 2026-09-29 (WebFetch)
- Verified 2: 2026-09-29 (curl re-fetch; 100900.27, 14.43%, 2026年04月29日 re-found)
- Used in: china-social-media-marketing-cost-per-month
- Notes: third-party estimate. The March 2025 base (10.01亿) counted Douyin and Lite together, so the growth rate is not like for like; the copy prints it as QuestMobile states it.

### Douyin calculator paid-media line at defaults: RMB 10,000 a month (year one), RMB 20,000 (year two) (proprietary)
- Value: at defaults (RMB 2m year-one GMV, paid share 15%, ROAS 2.5) Qianchuan media = 2,000,000 x 15% / 2.5 = RMB 120,000 a year = RMB 10,000 a month; year two (GMV +50% = RMB 3m, paid share 20%) = RMB 240,000 = RMB 20,000 a month
- As of: September 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro (drivers gmv, paidShare, roas, gmvGrowth, paidShare2; compute() opStack media = g x paidShare / roas)
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-29 (driver defaults and the media formula read from the file)
- Verified 2: 2026-09-29 (recomputed by hand in the final arithmetic check)
- Used in: china-social-media-marketing-cost-per-month (as the paid-media planning figure on every platform at build and sell, WeChat excepted)
- Notes: scenario output, not a measured floor. The brief's "paid media floor below which organic reach does not move, from stores and accounts under management" is not on file; under the settled fallback (editorial/CLAUDE.md, "The proprietary number") this calculator figure is the piece's proprietary number.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- Qianchuan 0.6% technical service fee from 2026 (Ebrun, January 8, 2026, m.ebrun.com/636020.html): re-fetched 2026-09-29 at both checks (0.6%, 千川). Add "china-social-media-marketing-cost-per-month".
- Douyin affiliate creator commission 5% to 50% (Douyin rule page, August 2026, school.jinritemai.com/doudian/web/articlev0/112620): re-rendered 2026-09-29 at both checks (5%-50%, 2026-08-08). Add the slug.
- WeChat Store does not support cross-border bonded import goods (WeChat Open Community, January 20, 2025): re-fetched 2026-09-29 at both checks (不支持, 保税). Add the slug.

### NOT SOURCED, do not research again from these dead ends (04A, 2026-09-29)
- Juguang (聚光) first top-up, daily budget and minimum bids: agency and content-farm pages only; official xhscdn PDFs undated.
- Weibo Fensitong 5,000 RMB first top-up and 0.5 RMB minimum click: open.weibo.com page undated, legacy product.
- WeChat mainland verification 300 RMB/yr and Weibo enterprise Blue V 600 RMB: official pages undated.
- Douyin Blue V 600 RMB (Ocean Engine FAQ, May 2022): dated but renewal contradicts itself (120 vs 600 RMB); renzheng.douyin.com docs removed.
- Creator price by follower tier, 2024-2026: agency pages, paywalled 克劳锐 reports; 千瓜 2022 data too old.
- Shanghai wage-level table for 新媒体运营: not public. Hiring-platform salary pages undated.
- Xiaohongshu revenue and ad revenue: no attributed, dated source. Douyin DAU: no official figure since 2020.
- Short-video ad clip prices (Securities Times, 2021-09-15, 400 to 1,500 RMB, well-made 3,000 to 5,000): checked once, too old, not used.

## Home textiles and bedding cost research, September 30, 2026

### Tmall Global bedding rates: 5% technical service fee, 60,000 RMB annual fee
- Value: 床上用品 and 居家布艺 (经营大类 家装家具家纺): technical service fee 5%, annual fee 60,000 RMB; annual fee tiers are 30,000 or 60,000 by first-level category
- As of: adjustment posted 2026-09-03, effective 2026-09-09
- Source: Tmall Global (天猫国际), 《天猫国际各类目年费、技术服务费率》
- URL: https://rule.tmall.hk/?type=detail&ruleId=11005909&cId=625
- Verified 1: 2026-09-30 (rendered with headless Chromium; the plain URL renders only the portal shell, load it with the hash route #/rule/detail?ruleId=11005909&cId=625)
- Verified 2: 2026-09-30 (re-rendered; 床上用品 | 5% | 60,000 and 居家布艺 | 5% | 60,000 in the table)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: the calculator's "Home, bedding, kitchenware" row loaded 30,000, which matches only the 2026-27 new-store incentive below. Fixed 2026-10-02: the home row now loads 60,000 in all four locales.

### Tmall Global deposit: 大家居 50,000 RMB; TM-only brands 100,000 RMB
- Value: 大家居 | 全部: 品牌旗舰店 50,000, 专卖店 50,000, 专营店 50,000, 卖场旗舰店 150,000 RMB; flagship or specialty store whose brand is an unregistered (TM) mark: 100,000 RMB base deposit
- As of: changes posted 2026-05-06, effective 2026-05-12
- Source: Tmall Global (天猫国际), 《天猫国际平台保证金规则》
- URL: https://rule.tmall.hk/?type=detail&ruleId=8942&cId=625
- Verified 1: 2026-09-30 (rendered, hash route)
- Verified 2: 2026-09-30 (re-rendered; 大家居 row and 暂未注册成功（TM）的商标，基础保证金为人民币10万元 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: bedding assumed to sit in the deposit table's 大家居 industry; the deposit table's industry labels do not match the fee table's 经营大类.

### Tmall Global 2026 annual fee incentives: 30,000 RMB for new and second-year stores; waiver for part of 家居
- Value: (a) ruleId 20010439: stores opening 2026-04-01 to 2027-03-31 ("new") or 2025-04-01 to 2026-03-31 ("second-year") in the 60,000 tier pay 30,000 RMB a year (2,500 a month) during 2026-04-01 to 2027-03-31; new stores whose main category is in the excluded list (all apparel, parts of mother and baby, 家居 部分) are outside (a) because they fall under (b). (b) ruleId 20010440: new stores in 服饰/母婴/家居 部分类目 pay no annual fee during the period; which home categories qualify is not listed (是否符合类目标准请咨询行业小二). Full fee resumes outside the period.
- As of: both posted 2026-07-16
- Source: Tmall Global (天猫国际), 《2026年天猫国际新商家及次新商家技术服务年费激励计划》 and 《2026年天猫国际新商家 服饰/母婴/家居部分类目技术服务年费 特殊激励计划》
- URL: https://rule.tmall.hk/?type=detail&ruleId=20010439&cId=625 (and ruleId=20010440)
- Verified 1: 2026-09-30 (rendered)
- Verified 2: 2026-09-30 (re-rendered; scope, 3万元/年 and 予以免除 clauses read)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china (20010439 cited; 20010440 described without a link)
- Notes: copy says "at most half until April 2027". Do not say bedding is on the waiver list; the page does not say.

### JD Worldwide bedding fees: 3% + 0.9%, flagship deposit US$5,000, no annual fee
- Superseded (2026-10-02) as the citation date: the fee standard was revised 2026-09-24, effective 2026-10-01, with the bedding row unchanged. See "JD Worldwide category fee standard, 2026-09-24 revision". The bedding article cites the revised dates in all four locales.
- Value: 床上用品 | 全部 (and 居家布艺): deposit US$10,000 / 10,000 / 15,000 / 15,000 by GMV tier (<5万, 5-10万, 10-30万, >=30万 RMB), 品牌旗舰店保证金 US$5,000, 运营支持服务费率 3.00%, 交易服务费率 0.90%; no annual fee in the current fee standard or deposit rules
- As of: revised 2026-07-24, effective 2026-08-01
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台各类目资费标准》
- URL: https://jdw-rule.jd.hk/detail?ruleId=950583665543483392
- Verified 1: 2026-09-30 (rendered with headless Chromium)
- Verified 2: 2026-09-30 (re-rendered; row "床上用品 全部 全部 全部 10,000 10,000 15,000 15,000 5,000 3.00% 0.90%" and the 2026-07-24 / 2026-08-01 clause present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: the calculator's JD "Home, kitchen, kitchenware" row loads 5% and 7,100 RMB annual; 5% is the 生活日用 rate. The footwear Ledger's JD row (5% / 7,100) was stale; fixed 2026-10-02 against the 2026-09-24 revision (see the calculator fee audit entries). US$5,000 converted at 7.1 (calculator FX default) = 35,500 RMB.

### Douyin Global: bedding sits under 居家日用 at 6%, plus 4% channel supplement
- Value: 居家日用 其他二级类目 (covers 床上用品 and 居家布艺 > 毛巾/浴巾) base 6.00%, channel supplement 4.00% on 抖音商城 app and 豆包 orders; 母婴用品 > 婴童床品 6.00% + 4.00%; one rate for every store type
- As of: schedule posted 2026-07-15
- Source: Douyin E-commerce (抖音电商), 《【全球购】技术服务费费率标准》; category placement from Douyin's merchant category API (domestic 抖店 tree)
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn
- Verified 1: 2026-09-30 (rendered)
- Verified 2: 2026-09-30 (re-rendered; 2026-07-15 00:00:27 and 居家日用 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: complements the 2026-09-24 entry "Douyin Global tech service fee by category"; that entry did not record the 4% supplement for home goods. Placement of 床上用品 under 居家日用 is from the domestic tree, assumed the same for 全球购. Base deposit entry (107821) re-rendered 2026-09-30, unchanged.

### Bedding on the cross-border retail import positive list
- Value: 2019 list rows 63012000 / 63013000 毯子, 63022190 棉制印花床上用织物制品, 63023199 棉制其他床上用织物制品, 63023290 化纤制其他床上用织物制品, 63026010 棉制浴巾, 63026090, 94049010 羽绒或羽毛填充的寝具及类似品 (CITES-listed species excluded), 94049040; 2022 No. 7 added 63023191 棉制其他床单, 63023192 棉制其他毛巾被 and new lines 94044010-94044090 被子、床罩
- As of: Announcement 2019 No. 96, December 27, 2019 (in force 2020-01-01); 2022 No. 7 in force 2022-03-01
- Source: Ministry of Finance (财政部) and 12 other departments, 关于调整扩大跨境电子商务零售进口商品清单的公告 (2019年第96号), with attachment
- URL: https://gss.mof.gov.cn/gzdt/zhengcefabu/201912/t20191227_3451448.htm (attachment https://gss.mof.gov.cn/gzdt/zhengcefabu/201912/P020191227607915178053.pdf)
- Verified 1: 2026-09-30 (PDF text extracted)
- Verified 2: 2026-09-30 (page re-fetched after a transient 502; PDF re-downloaded, rows present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: the CAC 2016 page does NOT mention bedding; do not cite it for home textiles. Cite by product family, not 8-digit code (codes may shift with tariff plans).

### Over-limit single item: full duty, VAT and consumption tax
- Value: dutiable price above the 5,000 RMB single limit but under the 26,000 annual limit, one item per order: may enter via cross-border retail, duty, import VAT and consumption tax charged in full at goods rates, counted toward the annual total; above the annual limit, general trade
- As of: 财关税〔2018〕49号, November 29, 2018, effective January 1, 2019
- Source: Ministry of Finance, GACC, State Taxation Administration (财政部 海关总署 税务总局)
- URL: http://gss.mof.gov.cn/gzdt/zhengcefabu/201811/t20181129_3079073.htm
- Verified 1: 2026-09-30
- Verified 2: 2026-09-30 (re-fetched; 仅一件商品 and 按照货物税率全额征收 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: primary MOF 关税司 page for 49号; the MOFCOM database page (existing "limits" entry) carries the same text.

### 2026 MFN duty: bed linen 6%, blankets 6% (synthetic 8%), duvets and pillows 10%
- Value: 6302 bed linen lines 6% (e.g. 6302.2110, 6302.3191 床单 6); 6301.1000/2000/3000/9000 6%, 6301.4000 8%; 9404.4010-4090 被子（包括羽绒被）、床罩 10%; 9404.9010-9090 10%; no 2026 provisional rates in chapters 63 or 94
- As of: Customs Tariff of the PRC (2026), 税委会公告2025年第12号, December 31, 2025, in force January 1, 2026
- Source: State Council Tariff Commission (国务院关税税则委员会), as published by the Wuxi Finance Bureau (无锡市财政局)
- URL: https://cz.wuxi.gov.cn/doc/2026/01/04/4711263.shtml (tariff PDF https://cz.wuxi.gov.cn/uploadfiles/202601/04/2026010408313363551881.pdf, printed pp. 790-792, 1442-1444)
- Verified 1: 2026-09-30 (PDF text extracted)
- Verified 2: 2026-09-30 (Wuxi page re-fetched: 税委会公告2025年第12号, 自2026年1月1日起实施; 70 MB PDF not re-downloaded)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: gss.mof.gov.cn original returned 502 all day. FTA rates can be 0% (ASEAN, Switzerland, Korea, Australia, NZ and others); EU, UK and US origin pay MFN; US countermeasure tariffs not checked. Worked example in copy: 5,200 RMB down duvet, 520 duty + 744 VAT = 1,264 RMB (24.3%) against 454 at 9.1% on 4,990.

### GB 18401-2010: mandatory, classes A/B/C, formaldehyde 20/75/300 mg/kg
- Value: infant, skin-contact and non-skin-contact products graded A, B, C; formaldehyde <=20 / <=75 / <=300 mg/kg; mandatory, in force since 2011-08-01, reviewed 2022-04-02 继续有效; no newer edition
- As of: CQN March 21, 2014; SAMR record reviewed April 2022
- Source: China Quality News (中国质量新闻网); State Administration for Market Regulation (市场监管总局) national standards register
- URL: https://m.cqn.com.cn/xfzn/content/2014-03/21/content_2131036.htm ; https://std.samr.gov.cn/gb/search/gbDetailed?id=71F772D7D9F6D3A7E05397BE0A0AB82A
- Verified 1: 2026-09-30
- Verified 2: 2026-09-30 (both re-fetched; limits sentence and 强制性 / 现行 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: the "must be labelled 婴幼儿用品" rule is only on an undated MOFCOM WTO page (chinawto.mofcom.gov.cn/article/jsbl/zszc/201411/20141100792845.shtml): not cited. GB 5296.4-2012 became recommended (GB/T) on 2017-03-23; never call it mandatory. GB 31701-2015 (children's textiles) mandatory: std.samr id=71F772D80590D3A7E05397BE0A0AB82A, researched, not used.

### Product Quality Law art. 27: Chinese product name, maker name and address
- Value: labels must carry the product name, maker name and address in Chinese, and specification, grade, main components and content where the product calls for them
- As of: law as amended December 29, 2018; CNIPA page July 31, 2019
- Source: China National Intellectual Property Administration (国家知识产权局), repost of 产品质量法
- URL: https://www.cnipa.gov.cn/art/2019/7/31/art_104_67810.html
- Verified 1: 2026-09-30
- Verified 2: 2026-09-30 (re-fetched with decompression; 有中文标明的产品名称、生产厂厂名和厂址 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: npc.gov.cn original failed on SSL.

### Jiangsu 2025 down quilt spot check: 6 of 63 batches failed
- Value: 63 batches of 羽绒被 sampled, 6 failed (绒子含量 3, 纤维含量 2, 羽绒鸭毛绒含量 1, 鹅绒含量 1); 338 batches across four products, 23 failed
- As of: January 4, 2026
- Source: Jiangsu Administration for Market Regulation (江苏省市场监督管理局)
- URL: https://scjgj.jiangsu.gov.cn/art/2026/1/4/art_78969_11705277.html
- Verified 1: 2026-09-30
- Verified 2: 2026-09-30 (re-fetched; 羽绒被 and 不合格 present)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: provincial, not national. Down standards (GB/T 22796-2021 床上用品, GB/T 17685-2026 羽绒羽毛 in force 2026-09-01) are recommended, not mandatory.

### Chinese bedding price bands, return rates and channel split, 2025 annual reports
- Value: Luolai (罗莱生活): LOVO 300-2,000 (online), 罗莱 1,000-8,000, licensed SHERIDAN 5,000~18,000, ZUCCHI 8,000~25,000, BASSETTI 5,000~25,000 (column has no unit, RMB implied); Tmall return rate 17.70% (2024 14.10%, H1 2026 17.09%); online 36.11% of revenue. Fuanna (富安娜): main label 2000-6000 元; Tmall return 9.80%, JD 10.17%, Vipshop 18.53% (2024 7.30 / 8.58 / 16.00; H1 2026 8.80 / 12.69 / 18.33); online about 44.38% of revenue, of which JD 41.87%, Tmall 28.30%, Vipshop 13.38%. Mengjie (梦洁) 觅MEE 299-1999 元 online.
- As of: 2025 annual reports, April 23 and 25, 2026
- Source: company annual reports on cninfo (巨潮资讯)
- URL: http://static.cninfo.com.cn/finalpage/2026-04-23/1225148171.PDF (Luolai, pp. 32-34); http://static.cninfo.com.cn/finalpage/2026-04-25/1225189767.PDF (Fuanna, pp. 22-30); http://static.cninfo.com.cn/finalpage/2026-04-25/1225191957.PDF (Mengjie, p. 27)
- Verified 1: 2026-09-30 (PDF text extracted with PyMuPDF; mingw pdftotext drops Chinese)
- Verified 2: 2026-09-30 (Luolai and Fuanna PDFs re-downloaded, figures found on the same pages; Mengjie not cited, one check only)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: company-reported. BASSETTI here is the Italian bedding label licensed to Luolai, NOT the Bassetti Group software client on /work/bassetti; copy names Sheridan and Zucchi only. No filing states a bedding 客单价.

### Bedding cost per kept order, breakeven and year-one fixed cash (proprietary)
- Value: at a 9.8% return rate: Tmall Global (5% + 1% Alipay) 44 / 110 / 308 RMB per kept order at 400 / 1,500 / 4,800 RMB baskets (10.9% / 7.3% / 6.4% of the order); JD Worldwide (3% + 0.9%) 35 / 78 / 207 (8.8% / 5.2% / 4.3%); percentage fees 82% of Tmall store cost at 1,500; at 17.7% returns Tmall 48 / 114 / 312. Breakeven at 1,500 and 50% gross margin: about 720 kept orders (1.07m RMB, US$151,000 at 7.1) on Tmall with the 30,000 new-store fee, 763 at 60,000; about 640 on JD. Year-one fixed cash: 475,000 RMB Tmall, 445,000 JD (partner retainer 420,000 + store build 25,000 + annual fee), before stock, ads and deposits.
- As of: September 2026
- Source: TheChinaPath calculator data (per-order defaults 4 / 11 / 15 RMB and 35,000 RMB retainer, 25,000 build, 3-year amortization in src/pages/tools/tmall-global-setup-and-run.astro and jd-worldwide-setup-and-run.astro) with the platform rates above
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-09-30 (defaults read from both files, arithmetic run in a scratch script)
- Verified 2: 2026-09-30 (defaults re-read; outputs rerun)
- Used in: cost-to-sell-home-textiles-and-bedding-in-china
- Notes: baskets are illustrative points inside the filed price bands, not sourced AOVs; the 15 RMB parcel is a floor for bulky bedding; the retainer is a MODEL DEFAULT, never a market rate. Return cost = returns x (15 handling + 11 leg back), as in the dairy Ledger.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- 财关税〔2016〕18号 (0% duty, 70%): re-fetched 2026-09-30, unchanged.
- 2019年第39号 13% VAT: re-fetched 2026-09-30 (research agent), unchanged; VAT Law art. 10 keeps 13% from 2026-01-01.
- 商财发〔2018〕486号 art. 3 and art. 4(1)3: re-fetched 2026-09-30, unchanged.
- GACC 2020 No. 45 returns: now cited at the official gov.cn copy https://www.gov.cn/zhengce/zhengceku/2020-03/28/content_5496571.htm (verified twice 2026-09-30); prefer it over the cqn.com.cn mirror.
- 2022年第7号 positive-list adjustment: re-fetched 2026-09-30, unchanged (researched, not cited in the final draft).
- Douyin base deposit 500 / 2,000 / 5,000 (107821): re-rendered 2026-09-30, unchanged.

## Brand localization refresh research (Refresh 04R), October 1, 2026

### CNIPA trademark application fee: 270 RMB online, 300 RMB paper, per class
- Value: 受理商标注册费 300元 on paper, 270元 for an online filing (接受电子发文的网上申请), each limited to 10 goods or services in one class; each extra item 30元 paper / 27元 online
- As of: in force since July 1, 2019 (自2019年7月1日起实施); the page itself carries no publication date
- Source: CNIPA Trademark Office (国家知识产权局商标局, 中国商标网), 规费清单
- URL: https://sbj.cnipa.gov.cn/sbj/sbsq/sfbz/
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: the 2019 fee-change notice (201906/t20190619_593.html) now 404s; cite the fee list.

### Trademark Law: first-to-file (2019 art. 31 = 2026 art. 35) and opposition window
- Value: identical or similar marks for the same or similar goods: the earlier application is approved; a same-day tie goes to the earlier user. 2019 art. 31, carried over word for word as art. 35 of the 2026 revision. Opposition window three months from publication (2019 art. 33), two months (2026 art. 36). Prior-use defence unchanged (2019 art. 59(3) = 2026 art. 73).
- As of: 2019 text, CNIPA page July 30, 2019; 2026 text, CNIPA page June 26, 2026, in force January 1, 2027 (art. 87)
- Source: China National Intellectual Property Administration (国家知识产权局)
- URL: https://www.cnipa.gov.cn/art/2019/7/30/art_95_28179.html ; https://www.cnipa.gov.cn/art/2026/6/26/art_95_206942.html
- Verified 1: 2026-10-01 (research agent, both texts compared)
- Verified 2: 2026-10-01 (both pages re-fetched; arts. 31, 33, 35, 36, 87 quoted)
- Used in: how-to-localize-a-brand-for-china

### Trademark Law (2026 revision): anti-hoarding test and bad-faith filing fine
- Value: art. 19 refuses filings 不以使用为目的，且明显超出正常生产经营需要; art. 24 bars knowingly pre-empting another's used mark with some influence; art. 54 warning plus a fine of up to 100,000 RMB (十万元以下) for bad-faith filing that causes harm; art. 9 good-faith principle; art. 51 no five-year limit for well-known mark holders against bad faith
- As of: CNIPA page June 26, 2026; in force January 1, 2027
- Source: CNIPA, 中华人民共和国商标法(2026年修订)
- URL: https://www.cnipa.gov.cn/art/2026/6/26/art_95_206942.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: the 2019 law (art. 4) already refused 不以使用为目的的恶意商标注册申请; what is new is the "clearly beyond normal business needs" test and the numeric fine cap. Do not write that refusing non-use filings is new in 2027.

### Average trademark examination period: four months
- Value: 商标注册平均审查周期稳定在4个月
- As of: January 7, 2026 (same sentence in the 2025 report of January 8, 2025)
- Source: CNIPA, 2026年全国知识产权局局长会议工作报告（摘编）
- URL: https://www.cnipa.gov.cn/art/2026/1/7/art_53_203564.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china

### New Balance 新百伦 trademark case: 98 million RMB cut to 5 million RMB
- Value: Zhou Lerong (周乐伦) held 百伦 (registered 1996, transferred to him April 2004) and 新百伦 (filed June 2004, registered January 2008); sued July 15, 2013 at the Guangzhou Intermediate People's Court; first instance set damages at half of New Balance China's estimated 195.8m RMB profit, 98 million RMB; Guangdong High People's Court on June 23, 2016 upheld infringement and cut damages to 5 million RMB
- As of: June 24, 2016
- Source: Yangcheng Evening News (羊城晚报), carried by People's Daily Online (人民网)
- URL: http://finance.people.com.cn/n1/2016/0624/c1004-28477265.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01 (TLS certificate mismatch on the host, fetched with curl -k; page is GBK)
- Used in: how-to-localize-a-brand-for-china
- Notes: the page does not give the date of the first-instance judgment; do not print one.

### Michael Jordan v. Qiaodan Sports: Supreme People's Court, December 8, 2016
- Value: the SPC ruled in 10 cases that the Chinese-character 乔丹 marks harmed Jordan's prior name right and ordered them re-ruled; the seven pinyin QIAODAN cases were upheld for the company; Jordan's challenge began in 2012; 乔丹体育股份有限公司 described as a 体育用品企业 holding marks in classes 25 and 28
- As of: December 8, 2016
- Source: China National Radio (央广网)
- URL: http://china.cnr.cn/xwwgf/20161208/t20161208_523312598.shtml
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01 (re-fetched with curl; WebFetch garbled the encoding)
- Used in: how-to-localize-a-brand-for-china

### Advertising Law arts. 9(3) and 57: banned superlatives, 200,000 to 1,000,000 RMB fine
- Value: ads may not use 国家级、最高级、最佳 and similar terms (art. 9(3)); advertiser fined 二十万元以上一百万元以下, business licence may be revoked in serious cases (art. 57)
- As of: second amendment April 29, 2021; SAMR page published November 2, 2022
- Source: State Administration for Market Regulation (国家市场监督管理总局)
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_5474cf75173c45d6a0379730fb4e8d97.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: second copy at the Beijing AMR, https://scjgj.beijing.gov.cn/cxfw/flfgcxfw/ggl/202204/t20220401_2646388.html (one check).

### SAMR guideline on absolute terms in advertising (2023 No. 6)
- Value: art. 9, a first use with minor harm promptly corrected may go unpunished; art. 10, absolute terms on the seller's own premises, own website or other owned media, short-lived or little-viewed, no harm, promptly corrected, shall not be punished; art. 11, ads for health food, drugs and medical devices (and medical, investment-return and education ads) are generally not treated as minor
- As of: announcement February 25, 2023; page March 29, 2023
- Source: SAMR (国家市场监督管理总局), 广告绝对化用语执法指南
- URL: https://www.samr.gov.cn/ggjgs/tzgg/art/2023/art_183b5cb48d9e4f0dba67f9f912a913ba.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: art. 11 says 一般不认为 (generally not), so write "generally not treated as minor", never "excluded".

### Anyang AMR: 109,600 RMB fine for "销售第一，全国全网" in an online cosmetics ad
- Value: 河南一穗玉米网络科技有限公司, online ad for a facial cleanser, absolute terms 销售第一，全国全网 not matching the facts; Anyang (Henan) AMR fined 10.96万元 in April 2024
- As of: SAMR typical-case release carried January 17, 2025
- Source: SAMR release (来源：国家市场监督管理总局网站), carried by the Shanghai Medical Products Administration (上海市药品监督管理局)
- URL: https://yjj.sh.gov.cn/zjyw/20250117/e9ebc3d76a4146d2aa2cc5b2a5035918.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: the fine is below the art. 57 floor and the page does not say why; do not explain it without a source. The Henan AMR copy returned 403.

### Consumer Rights Protection Law art. 25: seven-day no-reason return
- Value: buyers of goods sold online (and by TV, phone or mail) may return within seven days of receipt without a reason; exceptions: custom-made, fresh and perishable, downloaded or unsealed digital goods, delivered newspapers and periodicals, plus goods confirmed unsuitable at purchase; buyer pays return freight unless agreed otherwise; refund within seven days
- As of: law as amended October 25, 2013
- Source: SAMR (国家市场监督管理总局)
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_0a323e046fba43f0b6e9e977f1e8d5fc.html
- Verified 1: 2026-10-01
- Verified 2: 2026-10-01
- Used in: how-to-localize-a-brand-for-china
- Notes: the 2024 implementing regulation (实施条例) was not checked, and how the rule applies to cross-border retail imports was not sourced, so the copy scopes it to online sales generally.

### Localization line and trademark line in the three calculators (proprietary)
- Value: Tmall Global and JD Worldwide "Store setup and launch content" 25,000 RMB; Douyin "Brand setup contribution" 25,000 RMB; "CN trademark registration" 0 in all three; setup and trademark written off over 3 years (amortYears 3); Tmall Global deposit hint: the 50,000 RMB baseline is for an R-trademark flagship, a TM trademark or 专营店 raises it. Derived: two marks x three classes x 270 RMB = 1,620 RMB official fees, about 540 RMB a year over three years.
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-01 (defaults read from the three files)
- Verified 2: 2026-10-01 (re-read before the quality pass finished)
- Used in: how-to-localize-a-brand-for-china
- Notes: the 25,000 build line also sits inside the bedding Ledger's year-one fixed cash entry. The trademark zero is a model assumption, never a market price.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- 商财发〔2018〕486号 art. 3 and art. 4(1)3 (gov.cn content_5437823): re-fetched 2026-10-01, unchanged. Add how-to-localize-a-brand-for-china.
- Product Quality Law art. 27 (cnipa art_104_67810): re-fetched 2026-10-01, unchanged. Add how-to-localize-a-brand-for-china.
- Cosmetics label measures, NMPA 2021 No. 77 (gov.cn gongbao content_5631831), arts. 6 and 7: re-fetched 2026-10-01, unchanged; art. 7(2) responsible person taken from the existing entry (verified twice 2026-09-16). Add how-to-localize-a-brand-for-china.

### Not sourced (claims cut)
- An official CNIPA count of bad-faith trademark filings rejected in 2024 or 2025: none found in the 2025 and 2026 work reports or the January 2026 press conference. Closest: 336 DEEPSEEK bad-faith filings rejected in 2025 (CNIPA-hosted 知识产权报, 2026-05-29, https://www.cnipa.gov.cn/art/2026/5/29/art_55_206581.html, one check); 1.273 million 心机商标 applications rejected since 2023 (四川在线 citing the 2026-04-23 SCIO briefing, outlet off the preferred list). Neither used.

## Douyin store vs Douyin ads research (Anchor 05A), October 2, 2026

### Douyin Global admission: overseas entity, mainland domestic agent, overseas bank account, trademark validity
- Value: the store entity must be registered outside mainland China (overseas or HK/Macau/Taiwan) with retail or trade qualifications, and may not be a mainland company (2.1.1, 4.2.1); a mainland entity carrying joint liability, the domestic agent (境内代理人), is required and files its business licence plus a signed entrustment declaration (2.1.2, 4.2.1); an overseas or HK/Macau/Taiwan corporate bank account is required (2.1.3; WorldFirst bank proof accepted); a flagship store needs the home-market trademark registration certificate or application receipt valid for more than six months, a licensee also an exclusive authorization valid for more than two months (4.2.2); non-Chinese documents need a Chinese translation. Exit (7.1): closing notice posted 30 days, last order at least 90 days past completion, nothing owed; after exit the store can no longer view store information (7.3.1); merchants must staff customer service on Feige (6.2.4)
- As of: July 2026 (first effective 2021-02-19, latest revision effective 2026-07-15, 8.3; page header 2026-09-25)
- Source: Douyin E-commerce (抖音电商), 《【全球购】招商管理规则》
- URL: https://school.jinritemai.com/doudian/web/article/108056
- Verified 1: 2026-10-02 (rendered with headless Edge on a temp profile; clauses read)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 境内代理人 and 2026年7月15日 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: same page as the existing channel-supplement entry (5.2.2). No clause requires Chinese-language customer service; only product pages must be described in Chinese (6.2.2).

### Domestic agent: customs registration, truthful declaration, joint civil liability (MOFCOM 486)
- Value: an overseas cross-border e-commerce retail import enterprise must appoint a company registered in mainland China, which registers with customs, is responsible for truthful declaration, accepts supervision and bears joint civil liability (民事连带责任)
- As of: November 2018 (商财发〔2018〕486号, dated 2018-11-28)
- Source: Ministry of Commerce (商务部) and five agencies, via the State Council policy library (中国政府网)
- URL: https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5437823.htm
- Verified 1: 2026-10-02 (§四(一)1 read)
- Verified 2: 2026-10-02 (re-fetched with curl at iteration 8; 连带责任 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: GACC Announcement 194 of 2018 (https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5447414.htm, dated 2018-12-10, in force 2019-01-01, clauses (二) and (三十一)) says the agent bears civil liability (民事责任) without "joint". Checked once on 2026-10-02, not cited. Attribute "joint" to 486 only. Older than twelve months but in force; re-verify before each reuse.

### Feige average response time under 90 seconds, 8:00:00 to 22:59:59
- Value: 飞鸽平均响应时长 must be under 90 seconds, assessed only on human-agent chats opened between 8:00:00 and 22:59:59; an unanswered turn counts as 10 minutes; if more than 10 chats in a row go unanswered during working hours (daily 08:00 to 23:00) the platform may switch on its AI agent
- As of: January 2026 (first effective 2021-07-15, revised effective 2026-01-23)
- Source: Douyin E-commerce (抖音电商), 《飞鸽服务使用管理规范》
- URL: https://school.jinritemai.com/doudian/web/articlev0/101788
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 90s and 8:00:00-22:59:59 re-found)
- Used in: douyin-store-vs-douyin-ads (with our arithmetic: 15 staffed hours a day, about 450 hours in a 30-day month)
- Notes: general Douyin rule; the same metric sits in the service part of the Douyin Global experience score. The "3-minute human reply rate" circulating on Sohu, Zhihu and agency sites is not in current official rules: never print it.

### Douyin Global shipping: bonded 48 hours, direct mail 120 hours, late-shipment deductions
- Value: bonded (BBC) standard orders ship within 48 hours of payment, with the courier's first pickup scan within 24 hours of shipping; express option ships same day for orders paid before 16:00; direct mail (BC/CC) shows international linehaul pickup within 120 hours of payment; pre-sale windows 2 to 15 days. Late deductions on the amount paid: promised 48 h or less, over 48 h late 1% (min 2 RMB); promised 48 to 240 h, up to 48 h late 1% (min 2 RMB), over 48 h late 3% (min 3 RMB); promised over 240 h, 1% (min 3 RMB) and 5% (min 5 RMB); cap 50 RMB. Mass violations freeze 15% of the last 15 days' settlement, minimum 1,000 RMB, up to 90 days. False shipping: 30% of the order, min 10, max 100 RMB
- As of: April 2026 (first effective 2021-02-19, revised effective 2026-04-01; page dated 2026-07-14)
- Source: Douyin E-commerce (抖音电商), 《【全球购】商家发货行为管理规则》
- URL: https://school.jinritemai.com/doudian/web/articlev0/107820
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 48小时 and 15%(最低1000元) re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: the page calls the deductions 订单扣款 and does not say who receives them. The domestic 抖店 rule (https://school.jinritemai.com/doudian/web/articlev0/101706, revised 2026-07-08) excludes Douyin Global. "3 to 30 RMB per late order" figures are content-farm only.

### Douyin Global merchant experience score: dimensions, weights, Qianchuan ban
- Value: 0 to 100 over the last 30 days (flat 70 below 30 valid orders); product, logistics and service dimensions; weights product / logistics / service: cross-border health 25 / 20 / 55, cross-border FMCG 47 / 20 / 33, cross-border fashion 44 / 20 / 36; below the control threshold Qianchuan buying is banned (禁止投放); the score also gates campaign sign-up and the affiliate pool; shown to shoppers as 3.0 to 5.0 stars
- As of: September 2026 (first effective 2020-10-09, revised effective 2026-09-26)
- Source: Douyin E-commerce (抖音电商), 《【全球购】商家体验分规范》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMSpgQDfmxK
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 55% and 禁止投放 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: the threshold value itself is not stated on the page read.

### Store livestreams over 30% of Douyin GMV in 2024; shelf over 40%
- Value: in 2024 shelf scenes were over 40% of Douyin e-commerce GMV and store livestreams (店播) over 30%; store livestream GMV exceeded creator livestreams for two years running; 69% of merchants earning from livestream selling did so through store livestreams (Douyin's 2025 store-livestream trends report, Feb 2024 to Jan 2025)
- As of: March 2025 (2025-03-07 09:48)
- Source: Economic Information Daily (经济参考报), 李志勇, via the Xinhua app (新华网客户端)
- URL: https://app.xinhuanet.com/news/article.html?articleId=f748ec944eff412bf8a1fb4b9c21f2f6
- Verified 1: 2026-10-02
- Verified 2: 2026-10-02 (body loads by script: re-read with WebFetch at iteration 8; the 40% / 30% / two-years sentences quoted verbatim)
- Used in: douyin-store-vs-douyin-ads (30% and two-years only)
- Notes: the 40% / 30% sentence opens "数据显示" with no named source; only the 69% is credited to Douyin's report. 36Kr (2025-09-24, https://www.36kr.com/p/3480136952077441) reports shelf GMV +49% year on year per Douyin; checked once, not used. Shelf 30% in 2022-23: Xinhua 2023-05-16; checked once, not used.

### Douyin removed third-party products from livestream carts from October 9, 2020
- Value: from October 9, 2020, products from third-party sources (Taobao, JD) could no longer enter the livestream cart; Douyin store products unaffected; at the time short videos could still carry third-party links
- As of: August 2020 (2020/08/26 19:26)
- Source: Jiemian (界面新闻), 肖芳; backup Beijing News (新京报), https://m.bjnews.com.cn/detail/159844101115945.html
- URL: https://www.jiemian.com/article/4887329.html
- Verified 1: 2026-10-02
- Verified 2: 2026-10-02 (re-fetched with curl at iteration 8; 10月9 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: history. The short-video exemption is superseded for creator videos by the Xingtu entry below; do not say short videos can still link out.

### Xingtu cart-sharing rules: no third-party links or QR codes not integrated by Douyin
- Value: videos carrying third-party platform links or QR codes not integrated through Douyin's technology are violations; no video content may steer users to browse or trade directly on a third-party site
- As of: June 2026 (2026-06-12)
- Source: Ocean Engine Xingtu (巨量星图) help center, 《抖音购物车：商品分享规范》
- URL: https://www.xingtu.cn/help-center/author/109258
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 第三方 passage re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: no official 2025-2026 source found on whether Ocean Engine ads can link to Taobao or JD; Tmall's 2024 Double 11 splash-screen buy is reported only on a self-media repost of Bianews. Do not claim either way.

### Qianchuan users and credit scope (NEW PASSAGE on the existing "Qianchuan campaign plan: default minimum daily budget 100 RMB" entry)
- Value: Qianchuan is open to merchants, agencies and creators with livestream, short-video selling or mall promotion needs; promotion credits are used only for Douyin e-commerce products and cart-enabled livestreams
- As of: June 2025 (2025-06-24)
- Source: Douyin E-commerce Learning Center (抖音电商学习中心), 《一文读懂巨量千川-流量推广金》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHvyeGCvMaTB
- Verified 1: 2026-10-02
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 挂车直播间 and 最低为100元 re-found)
- Used in: douyin-store-vs-douyin-ads (with the 100 RMB plan minimum)
- Notes: the official admission page (https://qianchuan.jinritemai.com/support/content/206746, updated 2026-08-17) is an embedded Feishu document that does not render; the "bind a Douyin store to open Qianchuan" wording appears only on aggregators. Say "promotes Douyin products and cart livestreams", not "requires a store".

### Xingtu: creator video reuse in ads, long-term authorization, license fee 20 RMB to 50% of the task
- Value: in the original-video boost scenario the brand sets an ad run (default 7 days), which is the ad window, not the license term; the creator's authorization is long-term; an optional flat license fee runs from at least 20 RMB to at most 50% of the task amount
- As of: June 2026 (2026-06-09)
- Source: Ocean Engine Xingtu (巨量星图) help center
- URL: https://www.xingtu.cn/help-center/demander/139122
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 长期有效 and 不低于20元 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: companion page https://www.xingtu.cn/help-center/author/127894 (2026-08-03) says the boosted video may run on Douyin, Toutiao and Pangle once the creator agrees; checked once, not cited.

### Xingtu reviews overseas brand entities within 24 hours
- Value: brand qualification review takes about 6 hours; overseas entities within 24 hours
- As of: June 2026 (2026-06-08)
- Source: Ocean Engine Xingtu (巨量星图) help center
- URL: https://www.xingtu.cn/help-center/demander/112557
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 24h re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: Xingtu only. Ocean Engine ad accounts for overseas entities: the official page is undated, not usable.

### Douyin brands averaged RMB 324,000 a month on sponsored creator content (Jan to Jul 2024)
- Value: average monthly spend per brand 32.4万 RMB on Douyin, 18.7万 RMB on Xiaohongshu
- As of: January to July 2024 (article 2024-09-24 10:20:28)
- Source: DoNews, 杨亮, citing QuestMobile 2024 品牌商业软广营销洞察
- URL: https://www.donews.com/news/detail/1/4547390.html
- Verified 1: 2026-10-02 (rendered; curl returns nothing)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 32.4万 re-found)
- Used in: douyin-store-vs-douyin-ads
- Notes: the sentence itself does not say 软广 or January to July; both come from the headline and the report's stated period (今年1-7月). Older than twelve months: date it 2024 in copy. The 04A run checked it once on 2026-09-29.

### Douyin Global store agreement: no transfer, platform-owned data, deposit refund on request
- Value: the store may not be transferred or authorized to others without approval (2.3); data the platform collects belongs to the platform as its trade secret (8.1); deposit refunded on written request once orders, disputes and product warranties have ended, in RMB, fees borne by the merchant (6.6); payout currency chosen by the merchant, converted at the payment provider's rate on the day of first conversion (Annex 1, item 5); counterparty Global Premium Buy (Macau) Limited (优选海购（澳门）有限公司)
- As of: December 2022 (agreement effective 2022-12-30; page 2023-01-01)
- Source: Douyin E-commerce (抖音电商), 《【全球购】电子商务开放平台店铺服务协议》
- URL: https://school.jinritemai.com/doudian/web/article/aHPKRKjRGhpj
- Verified 1: 2026-10-02 (rendered with headless Edge)
- Verified 2: 2026-10-02 (re-rendered at iteration 8; 转让 and 归属于甲方 re-found)
- Used in: douyin-store-vs-douyin-ads (with admission rules 7.3.1 for the exit line)
- Notes: older than twelve months but the live agreement; re-verify before reuse. No refund-days figure for Douyin Global; the domestic 1 to 3 working days (articlev0/101830, articlev0/101725) does not apply to it. Nothing found on followers after a store closes.

### Douyin calculator defaults: store year-one cash, running cost share and breakeven by margin (proprietary)
- Value: at defaults (RMB 2m year-one GMV, AOV 250, 8,000 orders, retainer 30,000 a month, partner commission 5%, co-fund 0, mix 15% paid / 80% creators / 5% organic, creator commission 20%, ROAS 2.5, packaged-food fee 2.5%, CBEC tax 9.1%, deposit 5,000, bonded deposit 100,000, tax prepayment 300,000, brand setup 25,000, storage 0.8 x 2 months, pick and pack 4, last mile 11, returns 5% x 15): setup RMB 430,000 (405,000 refundable); running cash RMB 1,270,800 = 63.5% of GMV = RMB 105,900 a month (retainer 360,000; creator commission 320,000; CBEC tax 182,000; Qianchuan 120,000; partner commission 100,000; last mile 88,000; tech fee 50,000; fulfillment 32,000; storage 12,800; returns 6,000); year-one cash RMB 1,700,800. Breakeven GMV with the calculator's formula (fixed side 368,333 incl. three-year setup amortization): RMB 1.25m at 75% gross margin, 2.55m at 60%, 8.26m at 50%
- As of: September 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro (drivers, groups, categories, compute(), breakeven F / (GM - vG - vQ/AOV))
- Label in copy: "TheChinaPath calculator data, September 2026"
- Verified 1: 2026-10-02 (defaults and formulas read; replicated in a scratch script)
- Verified 2: 2026-10-02 (outputs rerun before the draft was finished)
- Used in: douyin-store-vs-douyin-ads
- Notes: scenario outputs, not client data or a market rate. Supersedes the running-cash figure in the P14 entry for the default (post-September 24) fee table.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- Douyin Global base deposit 500 / 2,000 / 5,000 RMB (articlev0/107821): re-rendered 2026-10-02 at both checks. Add "douyin-store-vs-douyin-ads".
- Douyin Global tech service fee schedule, July 2026 (articlev0/aHMYyFoqESKn): re-rendered 2026-10-02 at both checks (服装 6% + 4%, 彩妆香水 5% + 5%, 休闲食品 3% + 3.9%). Add the slug.
- Douyin merchant after-sale rule 24 / 36 / 48 hours (articlev0/104600): re-rendered 2026-10-02 at check 2. Add the slug.
- Douyin affiliate creator commission 5% to 50%, up to 80% (articlev0/112620): re-rendered 2026-10-02 at check 2. Add the slug.
- Xingtu recruitment tasks 10,000 RMB, 5% fee (demander/126583): re-rendered 2026-10-02 at check 2. Add the slug.
- Sponsored post RMB 39,700 on Douyin (Jiemian citing QuestMobile, jiemian.com/article/12440261.html): re-fetched 2026-10-02 at check 2. Add the slug.
- Douyin MAU 1,009.0 million (Sina Tech, 2026-04-29): re-fetched 2026-10-02 at check 2. Add the slug.

### NOT SOURCED, do not research again from these dead ends (05A, 2026-10-02)
- Official Douyin guidance on short videos per week or livestream hours per day: learning-center searches (开播时长, 每周, 发布频率), case 113545, rubric aHd3psfsVEY6; figures exist only on Zhihu, CSDN and agency sites.
- Chinese-language customer service requirement for Douyin Global: not in the admission rules, 服务管理规范 (articlev0/108060) or the Feige rules.
- Followers after a Douyin Global store closes: no rule found.
- Ocean Engine ad accounts for overseas entities and minimum budgets: kaihu-liucheng page undated.
- Douyin ads linking to Taobao or JD in 2025-2026: agency blogs only; the 2024 Tmall splash-screen buy only on a NetEase self-media repost.
- 2026 store-livestream or shelf GMV shares: none official; EBRUN 2026-09-21 gives creator figures only.

## Calculator fee audit, October 2, 2026 (closes the 2026-09-30 open item)

### JD Worldwide category fee standard, 2026-09-24 revision: commission and flagship deposit by category
- Value: 运营支持服务费 / 品牌旗舰店保证金 (USD) / 交易服务费 for the rows the JD calculator uses: 生鲜 其他二级类目 2.00% / 500; 食品饮料 全部 2.00% / 5,000; 粮油调味 2.00% / 5,000; 水饮冲调 2.00% / 5,000; 酒类 葡萄酒 5.00% / 5,000; 酒类 洋酒, 啤酒, 果酒/米酒 3.00% / 5,000; 营养保健 其他二级类目 5.00% / 5,000; 母婴 其他二级类目 2.00% / 5,000; 美妆护肤 全部 5.00% / 5,000; 个人护理 洗发护发 其他三级类目, 男士剃须, 其他二级类目 5.00% / 5,000; 个人护理 身体护理 (listed lines), 美发造型, 假发 6.00% / 5,000; 服饰内衣 其他二级类目 6.00% / 5,000; 鞋靴 6.00% / 5,000; 箱包皮具 6.00% / 5,000; 珠宝首饰 其他二级类目 6.00% / 5,000; 钟表眼镜 腕表 瑞士表 3.00% / 5,000 (other watches 6.00%); 数码 影音娱乐 and 数码配件 listed lines, 电脑、办公 外设产品 listed lines 3.00% / 7,000; 电脑整机 笔记本、台式机 3.00% / 7,000 (平板电脑 2.00%); 手机通讯 其他二级类目 3.00% / 5,000; 床上用品 and 居家布艺 3.00% / 5,000; 厨具 4.00% / 3,000; 家用电器 其他二级类目 3.00% / 5,000; 运动户外 其他二级类目 6.00% / 5,000; 宠物生活 猫狗主粮 2.50% / 5,000 (狗/猫零食 5.00%); 医药 海外医药 listed lines 7.00% (品牌旗舰店 5.00%) / 30,000. 交易服务费 0.90% on every row, charged per order since 2023-04-01. Other store types pay a GMV ladder instead of the flagship figure (for example 鞋靴 15,000 at every tier, 美妆护肤 10,000 / 10,000 / 15,000 / 15,000, 食品饮料 5,000 then 10,000 from 50,000 RMB GMV then 15,000 from 200,000 RMB).
- As of: revised 2026-09-24, effective 2026-10-01
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台各类目资费标准》
- URL: https://jdw-rule.jd.hk/detail?ruleId=950583665543483392
- Verified 1: 2026-10-02 17:47 CST (rendered with headless Chrome, --dump-dom; table parsed with rowspans expanded, 173 rows)
- Verified 2: 2026-10-02 18:21 CST (re-rendered with Playwright on headless Chrome; parsed table byte-identical to check 1; clause 本规则于2026年9月24日修订，于2026年10月1日正式生效 present)
- Used in: src/pages/tools/jd-worldwide-setup-and-run.astro and the FR, DE, ES JD calculators (category array); cost-to-sell-footwear-in-china, cost-to-sell-facial-skincare-in-china, cost-to-sell-dairy-and-spreads-in-china, how-allbirds-entered-china, how-on-running-entered-china, change-domestic-responsible-person-china-cosmetics (all four locales)
- Notes: this revision supersedes the 2026-07-24 / 2026-08-01 version cited in the entry "JD Worldwide bedding fees"; the bedding row is unchanged (3.00% + 0.90%, flagship US$5,000). The previous calculator data was stale on most rows: footwear, apparel, bags, sports and jewellery were 5% (now 6%), food and fresh 4% (now 2%), 3C and appliances 4% (now 3%), fresh deposit US$2,000 (flagship now US$500), watches and phones US$15,000 (flagship now US$5,000), pharma US$40,000 at 5% (flagship US$30,000 at 5%, other store types 7%). The calculator models a brand flagship. RMB at the calculator FX default 7.1: US$500 = 3,550; US$3,000 = 21,300; US$5,000 = 35,500; US$7,000 = 49,700; US$30,000 = 213,000. Euro equivalents in FR, DE, ES copy at about 0.9: 450, 2,700, 4,500, 6,300, 27,000 euros; ladder US$10,000 to 15,000 = about 9,000 to 13,500 euros.

### JD Worldwide charges no annual or platform usage fee (平台使用费)
- Value: the current fee standard defines only 保证金, 运营支持服务费 and 交易服务费 (0.9% per order since 2023-04-01) and lists no annual fee, 年费 or 平台使用费; the deposit rule lists none either; the rule portal's 资费标准 section holds only those two rules. The US$1,000 a year usage fee the calculator carried (7,100 RMB) is not in any current JD Worldwide rule.
- As of: fee standard revised 2026-09-24 (effective 2026-10-01); deposit rule revised and effective 2026-01-08
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台各类目资费标准》 and 《京东全球购开放平台保证金管理规定》
- URL: https://jdw-rule.jd.hk/detail?ruleId=950583665543483392 and https://jdw-rule.jd.hk/detail?ruleId=660777735190351872
- Verified 1: 2026-10-02 17:47 to 17:56 CST (both rules rendered; no 平台使用费 or 年费 string in either; 资费标准 section listing rendered, "共 2 条")
- Verified 2: 2026-10-02 18:21 to 18:22 CST (both re-rendered with Playwright; zero matches for 平台使用费 and 年费 in either text)
- Used in: all four JD calculators (annual default 0, hints and notes rewritten); the six articles listed above
- Notes: context only, not cited in copy: Sohu (搜狐, from 电商敲门砖), 2023-03-29, https://www.sohu.com/a/660569880_120643035, says JD POP dropped its 1,000 RMB a month usage fee from 2023-04-01 and that "京东国际同时也取消了平台使用费". Fetched once on 2026-10-02; secondary and single-checked, so copy says only that the current standard lists no annual fee. Third-party Q&A pages (amz123) still repeat "平台使用费 1000美金/年"; they are undated and contradicted by the platform rules, never cite them.

### JD Worldwide deposit rule: ladder by monthly GMV for some categories, highest-standard rule for mixed categories
- Value: 基础保证金 is paid on entry; 部分类目实行阶梯保证金制度，按月度成交金额（GMV）分档补缴, tiers per the category fee standard; a store selling several categories pays the highest category standard; top-up within 3 calendar days; full refund within 10 working days after a 30-day closure notice
- As of: revised and effective 2026-01-08
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台保证金管理规定》
- URL: https://jdw-rule.jd.hk/detail?ruleId=660777735190351872
- Verified 1: 2026-10-02 17:56 CST (rendered with headless Chrome)
- Verified 2: 2026-10-02 18:22 CST (re-rendered with Playwright; 第五条, 第六条, 第二十九条 unchanged)
- Used in: JD calculator deposit hints (all four locales: "other store types pay a separate scale set by monthly sales")
- Notes: the rule does not itself print amounts; amounts come from the category fee standard above.

### Tmall Global category annual fees and technical service fee rates, re-verified for every calculator row
- Value: 《天猫国际各类目技术服务费年费一览表》 rows behind the Tmall calculator: 零食/坚果/特产 2% / 30,000; 茶 2% and 咖啡/麦片/冲饮 2% / 30,000; 酒类 2% / 30,000; 粮油米面 1% (米/面粉/杂粮) or 2% (other) / 30,000; 保健食品/膳食营养补充食品 3% / 30,000; 奶粉/辅食/营养品 2% (婴幼儿营养品 3%) / 30,000; 婴童尿裤 2%, 婴童洗护 2% / 30,000; 美容护肤/美体/精油 4%, 彩妆/香水/美妆工具 4%, 美发护发/假发 4%, 美容美体仪器 5% / 30,000; 女装, 男装, 内衣 5% / 60,000; 女鞋, 流行男鞋, 运动鞋 5% / 60,000; 箱包皮具 5% / 60,000; 饰品/流行首饰/时尚饰品 5% / 60,000; 服饰配件/皮带/帽子/围巾 5% / 30,000; 手表 瑞士腕表 2%, other 5% / 60,000; 手机, 笔记本电脑, 平板电脑, 3C数码配件 2% / 30,000; 厨房电器, 生活电器 2%, 个人护理/保健/按摩器材 5% (剃须刀 2%) / 30,000; 床上用品, 居家布艺, 家居饰品 5% / 60,000; 厨房/烹饪用具, 餐饮具, 居家日用, 收纳整理, 家庭/个人清洁工具 5% / 60,000; 运动/户外 5% (自行车 2%) / 60,000; 宠物 犬主粮, 猫主粮, 狗零食, 猫零食 2.5%, other 5% / 30,000; 其他 3%. There is no 洗护清洁剂 (wash and clean) line and no 2.5% rate outside pet food.
- As of: adjustment posted 2026-09-03, effective 2026-09-09
- Source: Tmall Global (天猫国际), 《天猫国际各类目年费、技术服务费率》
- URL: https://rule.tmall.hk/?type=detail&ruleId=11005909&cId=625 (render with the hash route #/rule/detail?ruleId=11005909&cId=625)
- Verified 1: 2026-10-02 17:59 CST (rendered with Playwright on headless Chrome; table parsed, 256 rows including the English table)
- Verified 2: 2026-10-02 18:21 CST (re-rendered; parsed table byte-identical to check 1; 本次调整于2026年9月3日公示通知，将于2026年9月9日正式生效 present)
- Used in: src/pages/tools/tmall-global-setup-and-run.astro and the FR, DE, ES Tmall calculators; cost-to-sell-facial-skincare-in-china and a-comparison-between-tmall-and-amazon (all four locales); cost-to-sell-dairy-and-spreads-in-china (the "lowest band" wording)
- Notes: confirms the existing entry "Tmall Global bedding rates" (床上用品, 居家布艺 5% / 60,000), re-verified today. Calculator changes made from it: home row annual 30,000 to 60,000; personal-care row (2.5% / 60,000, no matching line) relabelled hair care and wigs at 4% / 30,000; labels narrowed so each row carries only lines at its rate (food drops grain, watches become Swiss watches, pet becomes pet supplies not food or treats, appliances become kitchen and household appliances, baby becomes infant formula, diapers and baby care, jewellery drops accessories). Rice, flour and gold jewellery (0.5%) sit below 2%, so "2% is the lowest Tmall Global rate" is wrong; copy now says "lowest in our calculator".

### Tmall Global calculator: commission spread and cash floor across the nineteen categories (proprietary, October 2026)
- Value: commission runs 2% to 5% and averages 3.47% (66 / 19; printed as 3.5%); eight categories at 2%, seven at 5%, three at 4% (skincare, makeup, hair care), one at 3%, none at 2.5%; deposit plus annual fee is 80,000 RMB in eleven categories, 110,000 RMB in seven, 330,000 RMB for health supplements
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, the categories array)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-02 (array read after the edit and the aggregates recomputed)
- Verified 2: 2026-10-02 (recounted; home moved 80,000 to 110,000 and personal care moved 110,000 to 80,000, so the eleven and seven counts are unchanged)
- Used in: a-comparison-between-tmall-and-amazon, cost-to-sell-facial-skincare-in-china (all four locales)
- Notes: supersedes the September figures in "Tmall Global category fee spread and the cash floor, all nineteen categories" (3.395%, two 4% categories, one 2.5%) and the crossover in "Tmall Global commission bands: skincare and makeup are the only 4% categories" (the 2,000,000 RMB crossover with personal care no longer exists and was cut from the skincare piece). 10% TP commission plus 3.5% still clears 13%.

### JD Worldwide calculator: cash before the first sale (proprietary, October 2026)
- Value: deposit plus annual fee on the JD calculator is 35,500 RMB for footwear, skincare, packaged food and sports (US$5,000 flagship deposit at 7.1, annual fee 0), down from 42,600 (35,500 + 7,100). Gap to Tmall Global: footwear 110,000 vs 35,500 (about a third), skincare 80,000 vs 35,500 = 44,500 RMB (a little under half), dairy 80,000 vs 35,500.
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/jd-worldwide-setup-and-run.astro)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-02 (computed from the edited array)
- Verified 2: 2026-10-02 (recomputed against the JD fee standard rows above)
- Used in: cost-to-sell-footwear-in-china, cost-to-sell-facial-skincare-in-china, cost-to-sell-dairy-and-spreads-in-china, change-domestic-responsible-person-china-cosmetics, how-allbirds-entered-china, how-on-running-entered-china (all four locales)
- Notes: per-order and breakeven tables in the three Ledger pieces run on the Tmall model, whose rows for those categories did not change, so they keep the September label.

## WeChat Moments rate card research, October 2, 2026

### WeChat Moments ads, 2020 Q2 list: 50,000 RMB guaranteed minimum, 1,000 RMB/day auction minimum, CPM list prices (unchanged from 2018 Q3)
- Value: guaranteed (排期) buy: CPM at list price, single campaign budget from 50,000 RMB ("广告单次投放总预算5 万元起"); auction (竞价) buy: daily budget from 1,000 RMB ("每日预算1000元起"); list CPM image 150 / 100 / 50 RMB and video 180 / 120 / 60 RMB for core / key / other cities; auction minimum CPM bid 100 / 60 / 30 RMB. Premium formats (full-frame card, panoramic card, light-interaction video, @advertiser, @celebrity, choice card) from 1,000,000 RMB per placement; action card from 50,000 RMB contract or 1,000 RMB/day auction
- As of: Q2 2020 (cover reads "微信朋友圈广告招商合作介绍2020–Q2")
- Source: WeChat Ads (微信广告), 《微信朋友圈广告招商合作介绍 2020–Q2》 PDF, 65 pages
- URL: https://wxa.wxs.qq.com/wxadtouch/upload/t2/ar2zl7ks_250201f1.pdf
- Verified 1: 2026-10-02 17:57 (curl + pypdf; "5 万元起", "每日预算1000元起", city CPM tables read)
- Verified 2: 2026-10-02 17:59 (re-downloaded, pypdf; "5 万元起", "每日预算1000元起" and "2020" re-found)
- Used in: china-social-media-marketing-cost-per-month (2026-10-02)
- Notes: newest official Moments rate card found; no official Moments minimum dated 2023 to 2026 could be found. Same minimums as the 2018 Q3 deck, so the 2018 figures held at least to Q2 2020. Core cities Beijing and Shanghai and the 150 RMB image CPM confirmed on pp. 57 and 61, both minimums on p. 58. Label every use "Q2 2020".

### Tencent Ads Marketing API: account and ad group daily budget range 50 to 40,000,000 RMB (not Moments specific, undated)
- Value: v3.0 advertiser/update_daily_budget: account daily budget "需介于 5,000 分-4,000,000,000 分之间（50 元-40,000,000 元，单位为人民币）"; v3.0 adgroups/add: ad group daily budget 5,000 to 400,000,000 fen (50 to 4,000,000 RMB); legacy v1 adgroups page: Moments ad group (CAMPAIGN_TYPE_WECHAT_MOMENTS) 5,000 to 4,000,000,000 fen (50 to 40,000,000 RMB)
- As of: undated (no page date; API changelog entry 2023-02-14 adds advertiser_daily_budget/get, "支持获取可设置最低的竞价广告账户日预算", i.e. the auction account floor is returned per account and not published)
- Source: Tencent Ads Developer Zone (腾讯广告开发者专区), Marketing API docs
- URL: https://developers.e.qq.com/v3.0/docs/api/advertiser/update_daily_budget ; https://developers.e.qq.com/v3.0/docs/api/adgroups/add ; https://developers.e.qq.com/docs/api/adsmanagement/adgroups ; https://developers.e.qq.com/docs/start/changelog/api
- Verified 1: 2026-10-02 17:47 to 17:55 (curl; ranges and units read)
- Verified 2: 2026-10-02 17:59 (curl re-fetch of update_daily_budget; "5,000 分-4,000,000,000 分" re-found)
- Used in: not used
- Notes: a field validation range in the API, not a commercial minimum for Moments, and no date on the page. Not publishable as a Moments floor.

## Automotive channel research (Ledger 05L), October 3, 2026

Check 1 for every entry below was run on 2026-10-03 by the first attempt of
the 10-03 forced draft run (research note in logs/2026-10-03.md); check 2 was
run on 2026-10-03 by the second attempt, which re-fetched every URL.

### China domestic vehicle sales, August 2026: 1.701 million, down 24.2%
- Value: 170.1万辆, -24.2% year on year, +10.4% month on month
- As of: August 2026 (page dated 2026-09-24)
- Source: China Association of Automobile Manufacturers (中国汽车工业协会)
- URL: http://www.caam.org.cn/chn/4/cate_32/con_5237330.html
- Verified 1: 2026-10-03 (page fetched; the text is an image, read)
- Verified 2: 2026-10-03 (image re-downloaded and read: 「汽车国内销量完成170.1万辆…同比下降24.2%」)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: the China News Service page carries only January to August totals and the NEV share; cite CAAM for the volume.

### NEV share of China domestic vehicle sales, August 2026: 65.7%
- Value: 65.7%
- As of: August 2026 (page dated 2026-09-11)
- Source: China News Service (中国新闻网), citing CAAM
- URL: https://www.chinanews.com.cn/cj/2026/09-11/10694386.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (「8月，新能源汽车国内销量比例为65.7%」 re-found)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Autohome: 77.5 million mobile DAU (December 2025); dealer subscriptions fixed-fee, typically one year
- Value: 68.2m / 77.5m / 77.5m mobile DAU in December 2023 / 2024 / 2025 (QuestMobile); "mainly on a fixed-fee basis, typically for a period of one year"
- As of: FY2025 (20-F signed April 15, 2026)
- Source: Autohome Inc., annual report on Form 20-F
- URL: https://www.sec.gov/Archives/edgar/data/1527636/000119312526155932/athm-20251231.htm
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (both passages re-found)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: DAU was flat from 2024 to 2025; never describe it as growth.

### Autohome leads revenue Q2 2026: RMB 560.4m vs 732.6m
- Value: RMB 560.4 million (US$82.6 million) vs RMB 732.6 million in Q2 2025; "reduced spending from dealers amid shrinking sales volumes, along with a decrease in the number of paying dealers"
- As of: Q2 2026 (release August 20, 2026)
- Source: Autohome Inc., 6-K exhibit 99.1
- URL: https://www.sec.gov/Archives/edgar/data/0001527636/000119312526357963/d404747dex991.htm
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Car portal membership fees, Hunan 4S stores, 2023 (projections)
- Value: 79 stores expected to pay the three portals over 25m RMB for 2023, 300,000+ per store; Autohome cheapest 2023 tier (科技版) about 234,000 RMB after the 2022 豪华版 tier at 162,000 was dropped; Yiche 智享版 171,000 (2022) to about 239,000 (2023); Dongchedi 132,000 in 2022 (280 cars sold), projected about 256,000 for 2023 if volume is unchanged, after offsetting a 35% rebate
- As of: January 2023 (page dated 2023-01-05); every 2023 figure is a projection (「需…将超过」, 「预计」)
- Source: National Business Daily (每日经济新闻), via Securities Times (证券时报)
- URL: https://www.stcn.com/article/detail/768317.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (Dongchedi wording 「会员价格预计为25.6万元」 re-found)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: never write "paid" for 2023; the 2022 and 2023 Autohome figures are different tiers.

### Dongchedi: 10 million+ mobile DAU (August 2025), 30,000+ dealers served
- Value: 「截至2025年8月，懂车帝移动端DAU突破1000万」; 「懂车帝服务的汽车经销商已超过3万家」
- As of: August 2025 (article dated 2026-02-27)
- Source: The Paper (澎湃新闻), via Sina Finance
- URL: https://finance.sina.com.cn/jjxw/2026-02-27/doc-inhphcxh3621410.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Dongchedi average fee per car sold: 472 RMB (2022), 912 RMB (2023 projection)
- Value: 「2022年的单车平均费用是472元，2023年达到912元」, derived from a projected 255,500 RMB 2023 fee over the same 280 cars
- As of: January 2023 (page dated 2023-01-07)
- Source: The Economic Observer (经济观察报)
- URL: http://m.eeo.com.cn/2023/0107/574117.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: 912 is a forecast published on January 7, 2023; label it a projection.

### Autohome 2019: a 200,000 RMB membership brought 7,500 leads; own-sourced leads 200 to 300 RMB
- Value: 「花费20万元购买一年汽车之家的会员，经销商平均可从汽车之家获取7500条线索」; 「4S店获取线索的成本一般是200-300元一条」 (Autohome VP 吴涛, January 13, 2019)
- As of: January 2019 (page dated 2019-01-18)
- Source: Jiemian (界面新闻)
- URL: https://www.jiemian.com/article/2803749.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: Autohome's own claim, seven years old; label it "Autohome's own 2019 math".

### Douyin car dealers 2025: 30,200+ active stores, 810,000+ leads in a day, 1 in 6 auto leads
- Value: 「2025年，抖音活跃门店数突破30200家」 (徐洁, East China head of the 巨懂车 dealer business); 「2025年抖音单日汽车线索量突破81万条…每产生6条线索，就有1条来自抖音」 (unattributed event data)
- As of: 2025 (page dated 2025-11-28)
- Source: China News Service Shanghai (中新网上海)
- URL: https://www.sh.chinanews.com.cn/chanjing/2025-11-28/142813.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: 30,200 are stores, not accounts; credit the lead figures to event data.

### Xiaohongshu cars: 230m car-interest users, 200m car-content reads a day, 1bn+ car searches a month
- Value: 「2.3亿汽车兴趣用户，日均汽车内容阅读量达2亿次，月均搜索量超10亿次」 (Xiaohongshu data to October 2025)
- As of: October 2025 (page dated 2026-04-16)
- Source: Securities Times (证券时报), interview with Xiaohongshu's transport-industry lead
- URL: https://www.stcn.com/article/detail/3753715.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### WeChat Channels: 28% of users went to a 4S store for a test drive after car content
- Value: 31% searched the brand, 30% followed the account, 28% went to a 4S store for a test drive
- As of: 2025 white paper (page dated 2025-04-22)
- Source: Tencent Advertising (腾讯广告), 《汽车行业X视频号互选平台：2025创作者营销白皮书》, via Sina Finance
- URL: https://finance.sina.com.cn/roll/2025-04-22/doc-inetzkuu7762499.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### China 4S network end-2025: 32,432 (-1.4%); nearly 5,000 exits and nearly 5,000 additions; NEV direct and agency outlets over half
- Value: 32,432 4S outlets; 「退网的近5000家」 and 「新增近5000家」; NEV independent-channel network 26,260 outlets, and among its sales outlets 「代理与直营所组成的直接销售模式规模占比过半」
- As of: end of 2025 (CADA 2025-2026 report; page dated 2026-03-18)
- Source: China Automobile Dealers Association (中国汽车流通协会), via Sina Finance
- URL: https://finance.sina.cn/2026-03-18/detail-inhrmayp7468550.d.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: "more than half" applies to sales outlets in the 26,260 NEV independent network, not to all NEV outlets.

### Chinese car dealers 2025: 23.5% profitable, 55.7% loss-making
- Value: profitable share down to 23.5% from 39.3% in 2024; loss-making about 55.7%
- As of: 2025 (CADA dealer survey presented May 27, 2026; page dated 2026-05-28)
- Source: CADA, via National Business Daily (每日经济新闻)
- URL: https://www.nbd.com.cn/articles/2026-05-28/4411257.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Auto China 2026 (Beijing): 1.28m visits, 1,451 vehicles, 181 world premieres
- Value: 128万人次 over ten days (April 24 to May 3), 65,000 of them overseas; 1,451 vehicles; 181 global premieres
- As of: May 2026 (page dated 2026-05-05)
- Source: Beijing Daily (北京日报)
- URL: https://xinwen.bjd.com.cn/content/s69fa0b7de4b0687a28951641.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Cross-border retail import list (2019 edition): 1,413 tariff lines, no cars
- Value: 1,413 lines (serials 1 to 1413); chapter 87 only 8712 bicycles, 87131000 wheelchairs, 87150000 baby carriages; no 8703
- As of: MOF and 12 departments, Announcement 2019 No. 96, December 27, 2019, in force January 1, 2020
- Source: Ministry of Finance (财政部); list PDF as published by MOFCOM
- URL: http://gss.mof.gov.cn/gzdt/zhengcefabu/201912/t20191227_3451448.htm ; https://images.mofcom.gov.cn/cws/202001/20200110143527533.pdf
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (MOF page over http, https returned 502; PDF rows counted)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: cite the http URL; gss.mof.gov.cn over https returns 502 to the fetcher.

### Cross-border list 2022 adjustment: 29 products added, no vehicle
- Value: 「增加29项商品」; no chapter 87 line in the adjustment table; in force 「自2022年3月1日起」
- As of: Announcement 2022 No. 7, February 2022 (gov.cn posting 2022-02-21)
- Source: Ministry of Finance and other departments
- URL: https://www.gov.cn/zhengce/zhengceku/2022-02/21/content_5674854.htm (attachment .../5674854/files/3d3263c5ea0f4795b9864165b78af2c0.pdf)
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (page and 20-page PDF re-read; no 87xxxxxx code)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Passenger car import tariff 15% from July 1, 2018
- Value: 135 lines at 25% and 4 at 20% cut to 15%
- As of: 税委会公告〔2018〕3号, May 22, 2018
- Source: Customs Tariff Commission of the State Council (国务院关税税则委员会), on MOF
- URL: http://m.mof.gov.cn/zcfb/201805/t20180522_2903728.htm
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (curl; WebFetch returns 502)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### China vehicle imports 2025: 476,000, -32.4%, US$23.64bn
- Value: 47.6万辆, -32.4%; 236.4亿美元, -39.7% (CAAM from GACC data)
- As of: 2025 (page dated 2026-02-04)
- Source: CCTV (央视网)
- URL: https://news.cctv.com/2026/02/04/ARTI5WxHlrO5lEbBzoUBVRKL260204.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Foreign ownership cap on passenger-car manufacturing removed from January 1, 2022
- Value: 「取消乘用车制造外资股比限制」
- As of: 2021 negative list, page dated 2021-12-27, effective 2022-01-01
- Source: National Development and Reform Commission (国家发展和改革委员会) and MOFCOM
- URL: https://www.ndrc.gov.cn/xwdt/xwfb/202112/t20211227_1309928_ext.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Automobile sales measures 2017: art. 24 and art. 26
- Value: art. 24 (三) a supplier may not restrict a dealer from 「经营其他供应商商品」; art. 26 「除双方合同另有约定外，供应商在经销商获得授权销售区域内不得向消费者直接销售汽车」
- As of: MOFCOM Order 2017 No. 1, issued 2017-04-05, in force 2017-07-01, posted 2017-04-14
- Source: Ministry of Commerce (商务部)
- URL: https://tfs.mofcom.gov.cn/swfg/sclt/art/2017/art_2b877ff893bc4900aef9f3b37164e555.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03 (curl; WebFetch closes the socket)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Douyin car categories: invitation only, e-voucher redeemable within 90 days
- Value: 汽车定金, 汽车全款, 汽车预付款 「定向邀约」; merchant types 品牌主机厂 / 经销商集团（完整授权链路）/ 交易市场 / 大型车商; 电子卡券, 「核销码发放后 90日为最长可核销时间」
- As of: revision in force 2026-09-20 (first effective 2021-11-18)
- Source: Douyin E-commerce (抖音电商), 【汽车】行业管理规范
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHKhRwPcmzWa
- Verified 1: 2026-10-03 (headless Edge)
- Verified 2: 2026-10-03 (headless Edge re-render)
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: the page names a store scope, not "the dealer"; write "redeemed in store".

### Douyin live ads: 10,000 RMB brings 50 to 150 valid leads, 67 to 200 RMB each
- Value: 「投放1万元费用，仅能获得50-150条有效线索…单条线索成本…高达67-200元」 (a live-stream ad operator)
- As of: May 2026 (page dated 2026-05-13)
- Source: ChinaVenture (投中网), via Sina Tech
- URL: https://finance.sina.com.cn/tech/roll/2026-05-13/doc-inhxtqxr4627675.shtml
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china

### Douyin and Dongchedi lead rule from September 1, 2026; lead cost about 70 RMB, up to 500 in some sessions
- Value: no manual WeChat ID entry from 2026-09-01; SMS code for lead submission; average ad cost per lead about 70 RMB, 500 RMB in some recent sessions; dealers ask streamers to keep a valid lead under 65 RMB
- As of: September 2026 (page dated 2026-09-15)
- Source: Dianchang (电厂), via Huxiu (虎嗅)
- URL: https://www.huxiu.com/article/4891366.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: the rule comes from 巨量引擎 and 懂车帝 together.

### Car purchase cycle: 2.5 months from first browsing to order
- Value: 「用户从海选到下订的平均选购周期较24年进一步缩短至2.5个月」
- As of: March 2026 (page dated 2026-03-30)
- Source: Autohome Research Institute (汽车之家研究院)
- URL: https://www.autohome.com.cn/news/202603/1313166.html
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: a 2025 "about two months" figure found elsewhere conflicts with the page's "shortened since 2024"; claim no trend.

### J.D. Power 2025 NEV-SSI: same-day follow-up +12 satisfaction points, +25.6% share closed within a week
- Value: 「当天跟进的销售顾问…客户满意度比次日跟进高出12分，一周内成交占比高出25.6%」
- As of: August 7, 2025
- Source: J.D. Power China, 2025 China NEV Sales Satisfaction Index Study
- URL: https://china.jdpower.com/sites/china/files/file/2025-08/China%20NEV-SSI%20CN_FV_0.pdf
- Verified 1: 2026-10-03
- Verified 2: 2026-10-03
- Used in: how-automotive-and-ev-brands-reach-buyers-in-china
- Notes: the comparison is same day versus next day; 25.6% is "higher", not percentage points.

### Reused from the ledger (Anchor 04A entries, both checks 2026-09-29, re-fetched 2026-10-03)
- Xiaohongshu enterprise professional-account verification 600 RMB, annual review 600 RMB: page re-rendered 2026-10-03, 「企业专业号首次认证 600元/次」 re-found. Used in: how-automotive-and-ev-brands-reach-buyers-in-china.
- WeChat overseas-entity verification US$99: JSON re-fetched 2026-10-03, 「目前境外主体认证费用为99美元」 re-found. Used in: how-automotive-and-ev-brands-reach-buyers-in-china.

## RedNote store setup research (Anchor 06A), October 4, 2026

Xiaohongshu rule-center pages (school.xiaohongshu.com) render as an empty
shell to a plain fetch. They were read through the page's own data endpoint
(POST /api/edith/governance/inform/rule/query_article_detail with
{"articleId": <last number in the URL>}), and pages 817 and 858 were also
rendered with headless Edge; text and dates matched.

### Xiaohongshu store types open to overseas entities, documents, authorization levels, two-store cap, 30-day rejection lapse
- Value: 卖场旗舰店、旗舰店、专卖店、集合店 accept mainland or overseas entities; 专营店 accepts overseas registration papers plus a Chinese-English translation; 普通企业店、个体工商户店、个人店 do not accept overseas entities; overseas legal representative may file a passport; overseas, WIPO or territorial-extension trademark proof accepted, registered marks only, no pure-graphic marks; flagship needs first-level exclusive authorization, 专卖店 and 专营店 up to three levels; non-Chinese, non-English documents need a stamped translation; one company runs at most 2 stores; a rejected application is cancelled if not resubmitted within 30 days
- As of: February 2024 (body: revised 2024-02-22, in force 2024-02-29; the page header's 2023-02-17 date conflicts, cite the body)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书招商标准及入驻规范》
- URL: https://school.xiaohongshu.com/rule/detail/26/817
- Verified 1: 2026-10-04 (API and headless Edge; clauses and body dates read)
- Verified 2: 2026-10-04 (API re-fetched at iteration 8; all seven clauses re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: no list of opened countries exists in the rule center; the "US, Hong Kong, Macau" list online belongs to the outbound 出海领航计划. No published entry-review time; the "3 to 7 working days" online traces to agency blogs.

### Xiaohongshu cross-border stores need a mainland affiliate or agent with joint liability (from July 2, 2026)
- Value: four documents, 「缺一不可」: overseas registration certificate; business licence of a mainland affiliate or agent whose scope covers import and export; a mainland entrusted company's undertaking of joint liability for product sourcing and compliance; customs consignee registration. Separately (brand qualification section), purchase proof from the last 12 months
- As of: July 2026 (published for comment 2026-06-25, in force 2026-07-02)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《关于跨境商品资质核验及宣传规范的公告》
- URL: https://school.xiaohongshu.com/rule/detail/19/119851
- Verified 1: 2026-10-04 (API; four documents and 缺一不可 read)
- Verified 2: 2026-10-04 (API re-fetched; same wording; 采购证明 sits in 二、品牌资质, not among the four)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: the same structure as Douyin Global's 境内代理人 rule (see the 05A entry).

### Xiaohongshu cross-border category licences on both sides of the border, 30-day validity
- Value: cross-border merchants file the home-country category licence; the mainland entrusted company holds the matching Chinese licence; every licence valid at least 30 days on the review day
- As of: March 2025 (version 2025-03-22)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书电商行业资质要求》
- URL: https://school.xiaohongshu.com/rule/detail/26/807
- Verified 1: 2026-10-04 (API)
- Verified 2: 2026-10-04 (API re-fetched; wording and ≥30天 re-found)
- Used in: xiaohongshu-store-setup-overseas-brand

### Xiaohongshu overseas stores carry the 海外 suffix
- Value: stores opened by an overseas entity have the type suffix changed automatically (海外旗舰店 / 海外官方旗舰店)
- As of: July 2024 (page 2024-07-21; body revised 2024-02-22, in force 2024-02-29)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书店铺类型及店铺命名规则》
- URL: https://school.xiaohongshu.com/rule/detail/26/823
- Verified 1: 2026-10-04 (API)
- Verified 2: 2026-10-04 (API re-fetched)
- Used in: xiaohongshu-store-setup-overseas-brand

### Xiaohongshu cross-border default category deposit: US$400 (US$3,500 before April 2025)
- Value: default category deposit for cross-border stores US$400 (categories not listed in the detail sheet); US$3,500 before the revision; domestic flagship, franchise and specialty stores 2,000 RMB
- As of: April 2025 (first in force 2024-09-27, revised and in force 2025-04-22)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书类目保证金标准》
- URL: https://school.xiaohongshu.com/rule/detail/27/858
- Verified 1: 2026-10-04 (API and headless Edge)
- Verified 2: 2026-10-04 (API re-fetched; 修订前 $3,500 → 修订后 $400 re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: per-category cross-border deposits sit in a linked WeChat Docs sheet (《小红书类目保证金明细》) that was not read; copy states US$400 as the default only. The "20,000 RMB cross-border deposit" on agency sites contradicts this page: never use it.

### Xiaohongshu floating deposit for overseas merchants: US$400 / 700 / 2,800
- Value: by previous calendar month's settled sales, US$400 at 50,000 to 100,000 RMB, US$700 at 100,000 to 500,000 RMB, US$2,800 above 500,000 RMB; the higher of category and floating deposit applies; refund within 1 to 7 working days of the request; the deposit-free trial covers personal and sole-trader stores only
- As of: July 2026 (published for comment 2026-06-24, in force 2026-07-01)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书保证金管理规范》
- URL: https://school.xiaohongshu.com/rule/detail/27/119848
- Verified 1: 2026-10-04 (API)
- Verified 2: 2026-10-04 (API re-fetched; (5,10] 400, (10,50] 700, (50,∞) 2800 and 两者取高 re-found)
- Used in: xiaohongshu-store-setup-overseas-brand

### Xiaohongshu cross-border payment-channel fee: 0.7%
- Value: cross-border orders pay a 0.7% payment-channel technical service fee on goods plus shipping actually paid, on top of the category base fee; the old first-10,000-RMB monthly waiver withdrawn
- As of: February 2024 (revision notice published 2024-02-05, in force 2024-03-01)
- Source: Xiaohongshu rule center (小红书电商学习中心), 修订《小红书技术服务费规则》的公告
- URL: https://school.xiaohongshu.com/rule/detail/17/2590
- Verified 1: 2026-10-04 (headless Edge)
- Verified 2: 2026-10-04 (API re-fetched; 0.7% wording re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: the same 0.7% appears in the cross-border store agreement (119738) and in rule 27/854.

### Xiaohongshu base technical service fee by category (May 2026 schedule)
- Value: makeup, fragrance and beauty tools 4%; skincare, body and essential oils 4%; women's apparel 5%; men's apparel 5%; health supplements 3%; snacks, nuts and local specialties 2%; most categories 2% to 5%, with outliers (life services 5.7%, a few at 0.6%)
- As of: May 2026 (online 2026-05-12; comment period from 2026-04-27)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《2025小红书基础技术服务费费率标准》 (current version)
- URL: https://school.xiaohongshu.com/rule/detail/27/119797
- Verified 1: 2026-10-04 (API, read by the check-2 agent after 27/2585 turned out to be the expired version)
- Verified 2: 2026-10-04 (API re-fetched in this session; rates and onlineTime 2026年05月12日 re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: 27/2585 carries the same title marked 【已失效】 (online 2025-09-06, offline 2026-05-12). Never cite 2585.

### Xiaohongshu cross-border store agreement: deposit in 2 working days, own bank, bank charges, customs, ERP
- Value: deposit due within 2 working days of the agreement taking effect; merchant sets settlement currency and its own beneficiary bank in the system and bears all bank charges; must declare cross-border goods to customs truthfully; must report any third-party ERP vendor and its data-security capability
- As of: April 2026 (in force 2026-04-01)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书店铺服务协议（仅适用于跨境商家）》
- URL: https://school.xiaohongshu.com/rule/detail/97/119738
- Verified 1: 2026-10-04 (API)
- Verified 2: 2026-10-04 (API re-fetched)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: no third-party collection provider is named on any official page.

### Xiaohongshu ship-by limits: bonded 72 hours, direct mail 120 hours
- Value: after payment, bonded cross-border goods ship within 72 hours, direct mail and personal-postal (行邮) within 120 hours; courier pickup must show within 24 hours (bonded) and 96 hours (direct mail)
- As of: September 2026 (published 2026-09-02, in force 2026-09-09)
- Source: Xiaohongshu rule center (小红书电商学习中心), 《小红书商家发货管理规则》
- URL: https://school.xiaohongshu.com/rule/detail/35/119927
- Verified 1: 2026-10-04 (API)
- Verified 2: 2026-10-04 (API re-fetched)
- Used in: xiaohongshu-store-setup-overseas-brand

### Xiaohongshu "百万免佣计划": first 1 million RMB commission-free, Sept 2025 to Aug 2026 (as launched)
- Value: from 2025-09-01 to 2026-08-31, each merchant's first 1 million RMB of payment volume commission-free, 0.6% payment cost kept; stores under one company share the quota; previous rates mostly 2% to 5%
- As of: August 2025
- Source: National Business Daily (每日经济新闻) via Securities Times (证券时报); confirmed by Ebrun (亿邦动力, https://m.ebrun.com/595388.html)
- URL: https://www.stcn.com/article/detail/3257637.html
- Verified 1: 2026-10-04 (WebFetch; quote and 2025-08-25 date read)
- Verified 2: 2026-10-04 (re-fetched; same wording)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: superseded in practice by the early end below. Never describe it as current.

### Xiaohongshu ended the commission waiver on May 15, 2026
- Value: announced 2026-04-29; ended 2026-05-15; orders created before 5月15日00:00 keep the old terms; LEAP UP 百万跃迁计划 (from 2026-05-11) pays out up to 50,000+ in traffic vouchers
- As of: May 2026
- Source: Sina Tech (新浪科技)
- URL: https://finance.sina.cn/chanjing/gsxw/2026-05-09/detail-inhxhzaz1374118.d.html
- Verified 1: 2026-10-04 (curl; text read)
- Verified 2: 2026-10-04 (re-fetched; 5月15日起正式终止 re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: the page never says LEAP UP "replaces" the waiver; describe it as a newer programme. The rule-center termination notice is articleId 119798 (not cited).

### Xiaohongshu merchant conference, April 8, 2026: 39 million daily buyers with intent, rise100 GMV 2.6x, 81% from returning customers
- Value: 3,900万 users a day show clear purchase intent, 1.4亿 purchase requests; 2025 rise100 merchants' GMV up more than 2.6x; returning customers 81% of their spend; average repurchase 32%
- As of: April 2026 (event 2026-04-08, the platform's first merchant conference; page 2026-04-09)
- Source: 21st Century Business Herald (21世纪经济报道), 董静怡
- URL: https://www.21jingji.com/article/20260409/herald/3b578d625dae8e23682d670de2f4e6e8.html
- Verified 1: 2026-10-04 (WebFetch)
- Verified 2: 2026-10-04 (re-fetched; figures re-found)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: this page does not use the name "GROW"; the name appears in the dayoo page below. The 39 million / 140 million pair is also in china-platform-trends-2026-foreign-brands.

### Xiaohongshu group-chat members repurchase 5.1 times as often
- Value: merchant group-chat members' 30-day repurchase rate about 5.1 times non-members'; strong store livestream rooms grow DGMV 4 times the platform average
- As of: April 2026 (GROW merchant conference, 2026-04-08)
- Source: Guangzhou Daily (广州日报大洋网)
- URL: https://news.dayoo.com/ds/202604/13/154574_54947113.htm
- Verified 1: 2026-10-04 (WebFetch)
- Verified 2: 2026-10-04 (re-fetched; 5.1倍 re-found, page 2026-04-13)
- Used in: xiaohongshu-store-setup-overseas-brand

### About 200 million users a month seek buying advice on Xiaohongshu
- Value: 每月约有2亿用户在小红书寻求购买建议 (platform data, January to November 2025); users open the app 16 times a day; 9 million notes and 70 million comments a day
- As of: December 2025 (WILL commercial conference, 2025-12-22; page 2025-12-24)
- Source: Ebrun (亿邦动力), original, via Sina
- URL: https://finance.sina.com.cn/tech/roll/2025-12-24/doc-inhcwtcp4511859.shtml
- Verified 1: 2026-10-04 (curl)
- Verified 2: 2026-10-04 (re-fetched; 【亿邦原创】 and the figure re-found)
- Used in: xiaohongshu-store-setup-overseas-brand

### Xiaohongshu has never published overall GMV; 2024 new merchant sign-ups up 8.1x
- Value: 平台至今也未公布过整体的GMV数据; 2024 new merchant sign-ups up 8.1 times year on year; 350 million MAU, 50% born after 1995 (head of merchant development 阿方, 2025-08-28 briefing)
- As of: August 2025
- Source: Yicai (第一财经, 刘晓洁) via Securities Times (证券时报)
- URL: https://stcn.com/article/detail/3304269.html
- Verified 1: 2026-10-04 (curl)
- Verified 2: 2026-10-04 (re-fetched)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: the "2024 GMV above 400 billion RMB" figure in circulation has no official source. Never use it.

### Redshop is Xiaohongshu's outbound project (launch set for June 2026)
- Value: redshop 将于2026年6月正式上线; first phase 50 invited seed merchants; nine core markets listed as Hong Kong, Macau, US, UK, Australia, Canada, Singapore, Malaysia (eight named)
- As of: April 2026 (page 2026-04-13)
- Source: 36Kr (36氪), content credited to 蓝海亿观网
- URL: https://www.36kr.com/p/3763928410866433
- Verified 1: 2026-10-04 (WebFetch)
- Verified 2: 2026-10-04 (re-fetched)
- Used in: xiaohongshu-store-setup-overseas-brand
- Notes: outbound for Chinese sellers; not a route into China. Its 出海服务费 (5% to 10%, capped at 70 RMB an order) concerns Chinese sellers abroad only.

### Re-verified on 2026-10-04 for 06A (existing entries, add the slug to their Used in)
- Xiaohongshu MAU above 400 million, 800 million daily searches: Beijing Business Today via Sina, https://finance.sina.com.cn/jjxw/2026-05-27/doc-inhziqxq9291575.shtml, re-fetched twice on 2026-10-04 (「小红书月活跃用户已突破4亿，日搜索量高达8亿」, 2026-05-27). Used in: xiaohongshu-store-setup-overseas-brand.
- Xiaohongshu enterprise professional-account verification 600 RMB, annual review 600 RMB, overseas entities from opened regions (HK, Singapore, Malaysia named): re-read 2026-10-04 through the help-centre content API over IPv4 (headless Edge timed out on IPv6); updateTime 2026-08-02 re-found. Used in: xiaohongshu-store-setup-overseas-brand.
- Douyin Global admission, 境内代理人 with joint liability: page 108056 rendered with headless Edge 2026-10-04, 「2.1.2 需拥有中国大陆境内的连带责任承担的主体，即境内代理人」 and the 2026-07-15 revision re-found. Used in: xiaohongshu-store-setup-overseas-brand.
- Tmall Global calculator: commission spread and cash floor across the nineteen categories (proprietary, October 2026): categories array re-read and recounted 2026-10-04 (11 at 80,000 RMB, 7 at 110,000, supplements 330,000; skincare 4% and 30,000 RMB annual; fx default 7.1). Used in: xiaohongshu-store-setup-overseas-brand.

### Researched for 06A, not used (no publishable source)
- Official Xiaohongshu entry-review time; annual or platform fee (the fee rules list none); per-category cross-border deposits (sheet not read); Juguang or Chengfeng minimum top-ups; creator-commission platform fees (agency blogs, 2021 press only); settlement periods (Ebrun 2026-03-03 reports a consultation draft only); 2026 618 figures (no first-hand source); seller-creator counts; inbound cross-border merchant counts.

## Signal 05S research (douyin-product-card-fee-rebate), 2026-10-05

### Douyin product-card benefit becomes a rebate (October 2026)
- Value: product-card orders (tile clicks inside 抖音商城 in Douyin and Douyin Lite; live, short video, recommendation cards, creator showcase, unknown-source and gift orders excluded) earn a rebate, not a waiver. Type one: rate after rebate 1% for cross-border goods, 0.6% for domestic. Type two: rate after rebate 90% of the rate (not when the rate is 1% or less cross-border, 0.6% or less domestic). Paid after settlement on the 20th of the month after the order was paid; a month's orders rebated for at most five months. Transition: September 2026 tasks keep the waiver on orders settled in October 2026; October 2026 tasks earn rebates; an October order eligible for both gets the waiver only. Registration Jan 1 to Dec 31, 2026, 2025 registrants auto-renew; individual and instant-retail stores excluded. Refund after rebate deducted from later rebates, else payouts or deposit, non-RMB at the FX rate on the day (2.3, 4.1.6). Rebates may pause while the deposit is short (4.1.1). Rebates unpayable for the merchant's reasons are held to the last day of the month after the payout date, then forfeited (4.2.8). Back-end path 抖店-资金-返佣管理-商品卡返佣.
- As of: October 2026 (page posted 2026-10-01 00:00:14, 电商运营团队)
- Source: Douyin E-commerce (抖音电商), 《2026年抖音电商商品卡免佣扶持政策》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJcQ5pzG2Vk4
- Verified 1: 2026-10-05 (rendered with headless Edge, full text)
- Verified 2: 2026-10-05 (re-rendered at iteration 8; 跨境商品技术服务费率返佣后为1%, 26年9月完成任务在26年10月结算订单正常免佣, 保证金未足额缴纳 and 打款日期次月最后一日 re-found)
- Used in: douyin-product-card-fee-rebate
- Notes: the July 17, 2026 consultation that proposed the 2026 changes was not found on the rule centre; its trade summary is a data vendor's blog and is not cited. The before state (waiver at settlement) is documented by the transition clause on this page.

### Douyin payout timing (all store types, September 2026)
- Value: non-zero-deposit stores are paid 3 days after confirmed receipt in categories with an after-sale period of 30 days or less, 10 days above 30 days; zero-deposit (0元入驻) stores 21 days after confirmed receipt; applies to 小店, instant-retail express and 全球购 stores; special categories have their own periods
- As of: September 2026 (page posted 2026-09-07 11:12:27)
- Source: Douyin E-commerce (抖音电商), 《商家货款结算日期细则》 1.1
- URL: https://school.jinritemai.com/doudian/web/article/111412
- Verified 1: 2026-10-05 (rendered with headless Edge)
- Verified 2: 2026-10-05 (re-rendered at iteration 8; 订单确认收货的3天后 re-found)
- Used in: douyin-product-card-fee-rebate
- Notes: closes the gap logged on the "Douyin Global merchant payout timing" entry (the T+ period now has a source). Douyin Global stores add 2 working days (that entry).

### Re-verified on 2026-10-05 for 05S (existing entries, add the slug to their Used in)
- Douyin Global tech service fee by category, July 2026 schedule (articlev0/aHMYyFoqESKn): rendered twice on 2026-10-05; 2026-07-15 timestamp, 面部洗护 5.00%, 彩妆香水 5.00%, 服装 6.00% re-found. Used in: douyin-product-card-fee-rebate.
- Douyin Global merchant payout timing (article/aHyMoi13Bhx5): rendered twice on 2026-10-05; 再加2个工作日 and the 2026-01-05 revision re-found. Used in: douyin-product-card-fee-rebate.
- Douyin Double 11 2026 window (Ebrun via Tencent News, 20260919A088XY00): fetched twice on 2026-10-05; 将于10月正式开启2026年双11大促，至11月11日结束 re-found. Used in: douyin-product-card-fee-rebate.

## Teardown 05T research (how-blackmores-entered-china), 2026-10-08

All Blackmores figures are Australian dollars, fiscal years to June 30.
Annual reports are the ASX filings, read from the annualreports.com archive
copies (ASX_BKL_<year>.pdf) and, for 2022, the ASX announcements platform.
Both checks fetched the PDF and searched the text (raw and layout
extraction, because the reports set text in columns).

### Blackmores formal China entry 2012; 90% of China sales cross-border (2019)
- Value: formal entry into China in 2012, after Chinese tourists were already buying the brand abroad; 90% of China sales from cross-border ecommerce platforms, 10% offline
- As of: April 2019 (Peter Osborne, Blackmores Asia)
- Source: Jiemian (界面新闻), Yang Yang
- URL: https://www.jiemian.com/article/2995052.html
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08 (re-fetched at iteration 8; 2012年, 90%来自跨境电商平台 re-found)
- Used in: how-blackmores-entered-china

### Blackmores China share, FTZ entry and route times (Nov 2018)
- Value: China second market after Australia, 40% of global sales (Osborne); Shanghai FTZ opened 2013, Blackmores among first entrants, share price from 30-odd to 200-plus AUD within a year; general trade food registration three months plus one to two weeks customs, cross-border about six weeks, 70% of the range can enter via cross-border
- As of: November 10, 2018
- Source: The Paper (澎湃新闻), Bao Yumeng
- URL: https://www.thepaper.cn/newsDetail_forward_2619490
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08 (40%, 2013年上海自贸区, 三个月, 六周, 70%的产品, 200多 re-found)
- Used in: how-blackmores-entered-china
- Notes: the 40% is the company's own framing and exceeds the filed China segment (24% of FY2018 revenue); the piece labels the gap as an inference.

### Blackmores FY2015: WFOE, FTZ licence, group results
- Value: group sales A$471.6m (+36%), NPAT A$46.6m (+83%); WFOE established the prior year; free trade zones opened 2014, Blackmores one of only a few in the category with a licence to trade directly in the zone; Asian consumers about A$150m of group sales
- As of: fiscal 2015 (report signed August 2015)
- Source: Blackmores Limited, Annual Report 2015
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2015.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores FY2016: in-country China A$48m (+536%); A$250m influenced
- Value: in-country China sales A$48m, up 536%, via the bonded warehouse; Chinese consumers influence over A$250m of group sales, almost four-fold in 12 months
- As of: fiscal 2016 (report signed August 2016)
- Source: Blackmores Limited, Annual Report 2016
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2016.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores FY2017: April 2016 rumor, group results, China direct, Bemore
- Value: April 2016 speculation about China rules hit buying via Australian retailers, decline "came without warning"; group sales A$693m (-3%), NPAT A$58m (-42%); China direct A$132m (+71%: A$62m in-country, A$70m export division); Bemore infant nutrition sales A$4m, Blackmores share of operating losses A$7m, "continued regulatory uncertainty in China"
- As of: fiscal 2017 (report signed August 2017)
- Source: Blackmores Limited, Annual Report 2017
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2017.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china
- Notes: the FY2018 report restates FY2017 China revenue to A$117.1m under a new segment definition; the piece uses the FY2017 figure only as reported that year and starts the revenue table at FY2018.

### Blackmores China segment revenue and EBIT, FY2018 and FY2019
- Value: China revenue A$143.287m (FY2018), A$122.249m (FY2019, -15%); China EBIT A$35.627m (FY2018), A$21.465m (FY2019, -40%); group revenue A$601.136m (FY2018); FY2019 China "down 15% due to e-commerce law changes taking effect from January 2019"; in-country platform sales +22%; sales to Chinese consumers including Australian retail about -14%
- As of: fiscal 2019 (report signed August 2019)
- Source: Blackmores Limited, Annual Report 2019
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2019.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores FY2020: Chinese shopper share, China revenue
- Value: Chinese shoppers 24% of Australian VDS retail sales in calendar 2019, 16% in 2H FY2020; China revenue A$103m (-16%)
- As of: August 25, 2020 (full year results release)
- Source: Blackmores Limited, FY2020 results release (ASX), broker-hosted copy
- URL: https://www.belldirect.com.au/smarter/wp-content/uploads/2020/08/Blackmores-Presentation.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores FY2020: Tmall reset
- Value: from December 2019 China range reshaped and platform engagement reset; category captaincy with Tmall in May 2020; 618 GMV +75%, three million unique visitors to the Tmall flagship; label transition cited for lower China sales
- As of: fiscal 2020 (report signed August 2020)
- Source: Blackmores Limited, Annual Report 2020
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2020.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores FY2021 and FY2022 China revenue and EBIT
- Value: FY2021 China revenue A$131.582m (+28%; FY2020 A$102.933m), EBIT A$14.3m vs break-even FY2020, FTZ channel over 70% of China net sales; FY2022 China revenue A$145.6m (+10.6%), EBIT A$16.0m, top 4 VDS brand across all CBEC platforms, Shanghai China head office
- As of: August 26, 2021 and August 18, 2022
- Source: Blackmores Limited, Annual Reports 2021 and 2022
- URL: https://www.annualreports.com/HostedData/AnnualReportArchive/B/ASX_BKL_2021.pdf ; https://announcements.asx.com.au/asxpdf/20220818/pdf/45cz6p0pw9r1s3.pdf
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china
- Notes: the FY2021 break-even sentence is hyphenated across a line in the PDF, so the piece paraphrases it instead of quoting.

### Blackmores Tmall Global flagship closure, August 2017
- Value: flagship closed August 1, 2017, reopened August 28, 2017, to change to a more suitable service provider after a deeper Tmall Global agreement in July
- As of: September 1, 2017
- Source: Niuxuan (牛选)
- URL: https://www.niuxuan.cn/redian/4187.html
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores cross-platform price gap, July 2016
- Value: same cranberry product at 99 RMB (JD self-operated), 169 RMB (third-party seller), 189 RMB (Tmall Global flagship); Shanghai subsidiary set up December 2014
- As of: July 12, 2016
- Source: China Industry Information (中国产业信息研究网)
- URL: https://m.china1baogao.com/news/20160712/8066828.html
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Kirin offer for Blackmores, April 2023
- Value: A$1.88bn, A$95 a share (excluding a A$3.34 special dividend), 24% premium to the prior close; Marcus Blackmore (18%) supports
- As of: April 27, 2023
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/world/2023-04-27/doc-imyruraw1873790.shtml
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Blackmores revenue mix under Kirin, October 2026
- Value: Southeast Asia nearly 30% of Blackmores revenue, mainland China about 20%; Kirin paid A$1.88bn in 2023 and wants Blackmores' regulatory experience and channels for Asian health foods; Kirin health science turned profitable, 11.1bn yen
- As of: October 1, 2026
- Source: Economic Daily News (經濟日報), Liu Chung-yung, citing Nikkei and Reuters
- URL: https://money.udn.com/money/story/5599/9787415
- Verified 1: 2026-10-08
- Verified 2: 2026-10-08
- Used in: how-blackmores-entered-china

### Health supplements calculator rows (proprietary, October 2026)
- Value: Tmall Global health supplements 300,000 RMB deposit, 30,000 RMB annual fee, 3% commission (330,000 RMB before the first sale); JD Worldwide 35,500 RMB deposit, no annual fee, 5%; Douyin cross-border 5,000 RMB deposit, 4%
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro)
- URL: /tools/tmall-global-setup-and-run
- Verified 1: 2026-10-08 (arrays read)
- Verified 2: 2026-10-08 (arrays re-read before the image step)
- Used in: how-blackmores-entered-china
- Notes: label in copy as "TheChinaPath calculator data, October 2026".

### Researched for 05T, not used
- Live Tmall Global assortment, prices and review counts (login wall); the blackmores.tmall.hk redirect (a made-up tmall.hk subdomain redirects the same way, so it proves nothing); FY2023 China figures (not found in a filing); TMO Group sales estimates (agency, competitor rule); Beijing Business Today's dollar labels (wrong currency; the filing figure is used).

## Partner piece P16 research, October 10, 2026

### Online share of China's retail sales, 2025: 26.1%
- Value: 实物商品网上零售额 130,923亿元 (13.09 trillion RMB), +5.2%, 26.1% of 社会消费品零售总额 (total retail sales 501,202亿元); among retailers above the size threshold, convenience stores +5.5%, supermarkets +4.3%
- As of: full year 2025 (communique dated February 28, 2026)
- Source: National Bureau of Statistics (国家统计局), 中华人民共和国2025年国民经济和社会发展统计公报
- URL: https://www.stats.gov.cn/sj/zxfbhjd/202602/t20260228_1962662.html
- Verified 1: 2026-10-10 (curl; 26.1%, 130923 and 2026/02/28 on the page)
- Verified 2: 2026-10-10 (re-fetched after the draft was written; same passage)
- Used in: tmall-partner-vs-distributor-china
- Notes: the share is of total retail sales of consumer goods, catering included. NBS prints the share in the annual communique only; the monthly releases print the levels.

### Online goods sales January to August 2026: 8.42 trillion RMB, +4.3%; food +15.9%
- Value: 网上商品零售额 84,195亿元, +4.3%; 吃类 +15.9%, 穿类 +4.9%, 用类 +1.1%; total retail sales 327,569亿元, +1.1%; convenience stores +5.5%, supermarkets +3.8%. NBS renamed 实物商品网上零售额 to 网上商品零售额 in 2026 with the same scope
- As of: January to August 2026 (release of September 15, 2026)
- Source: National Bureau of Statistics (国家统计局), 2026年1—8月份社会消费品零售总额增长1.1%
- URL: https://www.stats.gov.cn/sj/zxfb/202609/t20260915_1965311.html
- Verified 1: 2026-10-10
- Verified 2: 2026-10-10 (re-fetched; 84195 and 15.9% present)
- Used in: tmall-partner-vs-distributor-china
- Notes: the release prints no online share; 84,195 / 327,569 = 25.7% is our arithmetic and must be labelled as such if printed (P16 does not print it). Next month's release replaces these figures.

### Douyin Mall 618 2026: livestream, creator and product-card figures
- Value: more than 120,000 merchants doubled livestream sales year on year; short-video views with a shopping cart +57%; more than 570,000 creators doubled their sales; creators under 1 million followers drove more than 80% of creator sales; merchants with over 10 million RMB of product-card sales +82%; merchants with search-driven sales over 10 million RMB +53%
- As of: June 2026 (《2026年抖音商城618数据报告》, released June 19; article June 20, 2026)
- Source: China National Radio (央广网), 郭彦伟
- URL: https://www.cnr.cn/mspd/jrhm/20260620/t20260620_527669642.shtml
- Verified 1: 2026-10-10
- Verified 2: 2026-10-10 (re-fetched; 12万, 80%, 82% present)
- Used in: tmall-partner-vs-distributor-china
- Notes: counts of merchants and creators, not GMV shares. Douyin's 2026 GMV split targets (shelf 56%) circulate only in investor-call notes; not sourced, do not use.

### Year-one TP and DP cost lines at 2 million RMB, packaged food (proprietary, October 2026)
- Value: Tmall Global with a TP: deposit 50,000 + annual fee 30,000 + bonded deposit 100,000 + tax prepayment 300,000 + setup 25,000 = 505,000 RMB before the first order (450,000 refundable); TP 35,000 a month + 10% = 620,000 (31% of sales); platform 2% + payment 1% = 60,000; ads 60% of sales at ROAS 2 = 600,000; creators 20% x 20% = 80,000; total 1,865,000 before stock, tax and logistics. Douyin Global with a DP: deposit 5,000 + bonded 100,000 + prepayment 300,000 + setup 25,000 = 430,000 (405,000 refundable); DP 30,000 a month + 5% = 460,000 (23%); tech fee 2.5% = 50,000; ads 15% at ROAS 2.5 = 120,000; creators 80% x 20% = 320,000; total 1,380,000 (plus 182,000 cross-border tax and 138,800 logistics = the Douyin calculator's 1,700,800 full default year)
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro `food` row and defaults; src/pages/tools/douyin-cost-calculator.astro `food-packaged` row and defaults)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-10 (rows and defaults read)
- Verified 2: 2026-10-10 (re-read and arithmetic rerun before the quality pass)
- Used in: tmall-partner-vs-distributor-china
- Notes: model defaults, not a market rate. The Tmall model books cross-border VAT to the shopper by default and the Douyin model books it to the brand, so compare the two only line by line, never on full-year totals.

### Distributor signature and cross-border launch timing (proprietary, already published)
- Value: a distributor contract takes three to five months from first meeting to signature; a cross-border store can take its first order in eight to twelve weeks
- As of: September 2026
- Source: TheChinaPath site copy, src/content/insights/china-distributor-vs-own-store.md (keyTakeaways and "Patience third", "from TheChinaPath distributor sourcing engagements, as published on this site")
- Label in copy: "in our own work" / "TheChinaPath distributor and store work, as published on this site"
- Verified 1: 2026-10-10
- Verified 2: 2026-10-10
- Used in: china-distributor-vs-own-store, tmall-partner-vs-distributor-china, china-importer-state-owned-private
- Notes: a published service-level statement, not a data pull.

### Re-verified ledger entries reused for P16 (no new entry; add the slug to Used in)
- Both checks 2026-10-10, add tmall-partner-vs-distributor-china to Used in: "New overseas brands on Tmall Global, 2025" (Sina, 2415); "Douyin Global admission: overseas entity, mainland domestic agent, overseas bank account, trademark validity" (headless Edge, 境内代理人 and 大于6个月); "Douyin affiliate (精选联盟) creator commission ranges by strategy" (5%-50%, 5%-80%); "Pinlive Foods gross margin, 2025" (16.24%, 12.20%); "Credit terms and late payment in mainland China, 2026" (Coface, 81 and 73 days); "Anti-Monopoly Law: resale price maintenance ban and fines" (art. 18); "Cross-border retail import limits per shopper" (5,000 / 26,000 RMB); "Compass shortlist turnaround" and "Compass shortlist size" (published site copy).

### Researched for P16, not used
- Tmall Global and Douyin Global onboarding review times (3 to 15 working days and the like): agency blogs and 搜狐号 posts only, one a named competitor (TMO Group); the platforms publish no review time. Do not research again from those pages.
- Share of foreign brands that move from cross-border to general trade: no primary source found.

## Pet food Ledger research (06L, cost-to-sell-pet-food-in-china), October 11, 2026

### Pet food fee lines on the three cross-border platforms
- Value: Tmall Global 犬主粮, 猫主粮, 狗零食, 猫零食 2.5% / annual fee 30,000 RMB (其他二级类目 under 宠物 5%); JD Worldwide 宠物生活 猫狗主粮 2.50% + 0.90% transaction fee, flagship deposit US$5,000, other store types 5,000 / 5,000 / 10,000 / 10,000 by GMV tier, 狗零食 and 猫零食 5.00%; Douyin Global 宠物生活 狗食品 and 猫食品 3.50% base plus 4.60% supplement on specified-channel orders (抖音商城 app, 豆包), 其他二级类目 6.00% base
- As of: Tmall effective 2026-09-09; JD revised 2026-09-24, effective 2026-10-01; Douyin schedule 2026-07-15
- Source: Tmall Global (天猫国际) 《天猫国际各类目年费、技术服务费率》; JD Worldwide (京东全球购) 《京东全球购开放平台各类目资费标准》; Douyin E-commerce (抖音电商) 《【全球购】技术服务费费率标准》 with 《【全球购】招商管理规则》 5.2.2
- URL: https://rule.tmall.hk/?type=detail&ruleId=11005909&cId=625 ; https://jdw-rule.jd.hk/detail?ruleId=950583665543483392 ; https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn ; https://school.jinritemai.com/doudian/web/article/108056
- Verified 1: 2026-10-11 (all rendered with headless Chrome on private profiles; rows read)
- Verified 2: 2026-10-11 (re-rendered in iteration 8; same rows; JD needed a 45 s render budget the second time)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the Tmall Global calculator has no pet food row (its pet row is pet supplies, not food or treats, at 5%) and the Douyin calculator's pet row is the 5% midpoint of 3.5% and 6%. The JD calculator's "Cat and dog food" row matches the rule. The article names the JD row and tells readers to use Custom on Tmall.

### Pet food is feed: GACC plant registration on the exporting authority's recommendation
- Value: feed includes 宠物食品及咬胶 (art. 68); imported feed must come from a registered overseas producer (art. 10); the exporting country's competent authority reviews and recommends the plant (art. 11); registered plants are published on the GACC site (art. 12); registration valid 5 years, renewal filed by the authority 6 months before expiry (art. 13); a 进境动植物检疫许可证 where required (art. 15)
- As of: Decree 118 (2009) as amended by GACC Decree 262, 2023-03-09 (a full rewrite went to consultation on 2024-11-15 and was not adopted as of 2026-10-11)
- Source: General Administration of Customs (海关总署), 《进出口饲料和饲料添加剂检验检疫监督管理办法》(2023修正), via the MOFCOM regulations database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=97519
- Verified 1: 2026-10-11 (fetched, quotes extracted)
- Verified 2: 2026-10-11 (re-fetched in iteration 8; 宠物食品及咬胶 and 注册登记的有效期为5年 present)
- Used in: cost-to-sell-pet-food-in-china

### UK pet food access protocol, November 2025
- Value: from 2025-11-26 UK pet food may enter China if made in plants registered on UK recommendation; every lot carries a health certificate (one original, two copies); the outer packaging shows the plant name, registration number, 输往中华人民共和国 and 非供人类食用 or 仅用于宠物食用
- As of: 2025-11-26
- Source: General Administration of Customs Announcement 2025 No. 230 (海关总署公告2025年第230号), via MOFCOM
- URL: https://www.mofcom.gov.cn/zcfb/zgdwjjmywg/art/2026/art_2c3ecb1ff8354d818fe48d7d56539092.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 即日起，允许符合以下要求的英国宠物食品进口, 卫生证书 and 仅用于宠物食用 present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: New Zealand (2026 No. 10) and Canada (2026 No. 16) notices follow the same pattern; not cited.

### Pet food on the cross-border retail import list, bonded only
- Value: 390 23091010 零售包装的狗食或猫食罐头 and 391 23091090 零售包装的其他狗食或猫食, both 仅限网购保税商品; untouched by the 2022 adjustment
- As of: 2019 list (effective 2020-01-01), adjusted 2022-03-01
- Source: Ministry of Finance and 12 other departments, Announcement 2019 No. 96 (财政部等13部门公告2019年第96号), list annex
- URL: http://gss.mof.gov.cn/gzdt/zhengcefabu/201912/t20191227_3451448.htm (annex http://gss.mof.gov.cn/gzdt/zhengcefabu/201912/P020191227607915178053.pdf)
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; PDF text shows both lines with 仅限网购保税商品)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the https URL can return 502; plain http works.

### Cross-border pet food still needs an approved country and a registered plant
- Value: GACC applies quarantine access to countries and products allowed to export pet food; imported pet food must come from registered overseas producers; canned pet food (2309101000) needs no entry quarantine permit, other retail-packed dog and cat food does
- As of: 2023-11-24
- Source: Chengdu Customs (成都海关发布), reposted by the Shanghai Cross-border E-commerce Association (上海跨境电子商务行业协会), an industry association
- URL: https://www.scea.co/trends/show/id/2552.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 注册登记的境外生产企业 and 检疫准入 present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the two GACC lists it names (dzs.customs.gov.cn) refuse the fetcher (HTTP 412, certificate error). A Sohu repost of a customs reply (https://www.sohu.com/a/828540275_120078081, 2024-11-20) says the same for cross-border pet food; corroboration only, not cited.

### Pet feed VAT 9%, so 6.3% cross-border
- Value: VAT Law art. 10 puts 饲料 at 9% from 2026-01-01; 财政部 税务总局公告2026年第9号 annex 1: 宠物饲料，属于饲料的征税范围; cross-border retail imports pay 70% of VAT, so 6.3%, with 0% duty and no consumption tax on pet food
- As of: VAT Law adopted 2024-12-25, in force 2026-01-01; announcement 2026-01-30
- Source: NPC (全国人大), 《中华人民共和国增值税法》; Ministry of Finance and State Taxation Administration, Announcement 2026 No. 9
- URL: http://www.npc.gov.cn/npc/c2/c30834/202412/t20241225_442038.htm ; https://hainan.chinatax.gov.cn/xxgk_6_1/30163239.html (annex https://hainan.chinatax.gov.cn/u/cms/www/202607/06170226lf67.pdf)
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (announcement page and annex PDF re-fetched; 宠物饲料，属于饲料的征税范围 present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the calculators' 9.1% default is the general-goods rate; the article tells pet food readers to set 6.3%. 国税函〔2002〕812号 (pet feed not exempt, then 13%) is the origin of the 13% figure still seen online.

### General-trade duty on dog and cat food, 2026
- Value: 23091010 and 23091090 MFN 15%, provisional 10% for 2026 (4% until 2024)
- As of: 2026-01-01
- Source: State Council Tariff Commission (国务院关税税则委员会), Announcement 2025 No. 11, annex 1
- URL: https://gss.mof.gov.cn/gzdt/zhengcefabu/202512/P020251229510521217364.pdf (notice via MOFCOM https://www.mofcom.gov.cn/cwxx/zcfb/art/2026/art_031306c35f494f64b3b4e259458bbc22.html)
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (PDF re-fetched; 零售包装的狗食或猫食罐头 15 10 present)
- Used in: cost-to-sell-pet-food-in-china

### MARA import registration and Chinese label for imported pet food
- Value: only 宠物配合饲料 and 宠物添加剂预混合饲料 need an import registration certificate (pet feed measures arts. 2, 10, 14), filed through a China office or a Chinese agent; review within 10 working days, verification testing within 3 months, certificate in 10 working days, valid 5 years (registration measures arts. 9, 10, 12, 14); labels show set category wording (全价宠物食品 etc., 宠物零食 for treats), guaranteed analysis, registration number, origin in Chinese and the China sales entity (label rules arts. 3, 5, 15)
- As of: pet feed measures and label rules, 农业农村部公告第20号 (2018-04-27), republished 2025-06-30; registration measures amended 2017-11-30
- Source: Ministry of Agriculture and Rural Affairs (农业农村部)
- URL: https://www.moa.gov.cn/ztzl/sqxzjcgs/xzjcbz/202506/t20250630_6475260.htm ; https://www.moa.gov.cn/gk/nyncbgzk/gzk/202210/t20221013_6413266.htm ; https://www.moa.gov.cn/ztzl/sqxzjcgs/xzjcbz/202506/t20250630_6475269.htm
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (all three re-fetched; strings present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: no primary text says how MARA registration applies to bonded cross-border stock; the article does not claim either way.

### China urban dog and cat market, 2025
- Value: 312.6 bn RMB, up 4.1%; food 53.7%; 53.43 m dogs, 72.89 m cats; 3,006 RMB a dog and 2,085 RMB a cat a year
- As of: 2025 (white paper released 2026-01-05)
- Source: CCTV.com (央视网), on 《2026年中国宠物行业白皮书》 (Petdata, 派读宠物行业大数据平台)
- URL: https://business.cctv.com/2026/01/05/ARTIdmv2AWmVeRVodaZYLOvQ260105.shtml
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 3126亿元 and 53.7% present)
- Used in: cost-to-sell-pet-food-in-china (market size and food share only)

### Packaged pet food imports, 2025
- Value: US$474.1 m, down 5.2% on 2024; New Zealand down 22.9%, Canada down 24%
- As of: calendar 2025 (report 2026-04-14)
- Source: USDA Foreign Agricultural Service, ATO Shanghai, GAIN CH2026-0046, citing China Customs (海关总署)
- URL: https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Pet+Food+Market+Update+2026_Shanghai+ATO_China+-+People%27s+Republic+of_CH2026-0046.pdf
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (PDF re-fetched; "imported packaged pet food totaled $474.1 million in 2025, down 5.2 percent" present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: no Chinese publication carries the full-year 2025 figure, so the English source is the only one. 2024: 75,281 t and 3.5565 bn RMB (宠经说 on 澎湃号, 2025-02-26, https://m.thepaper.cn/newsDetail_forward_30220350), single-checked, not used.

### Tmall Double 11 2025: 68% of pet brands above 10 m RMB on day one were domestic
- Value: 天猫双11首日成交破千万的宠物品牌中，国产品牌占比高达68%
- As of: 2025-11-08
- Source: Huanqiu.com (环球网), via Sina Finance
- URL: https://finance.sina.com.cn/roll/2025-11-08/doc-infwsynp1202307.shtml
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 68% present)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the 淘天64% share on the same page comes from Jiuqian (久谦), a consultancy; never cite.

### Douyin pet category growth, 2025
- Value: 2025年以来抖音电商宠物类目GMV同比增长95%，新锐品牌同比增长75%，用户量同比增长66%
- As of: report 2025-08-25 (period: 2025 to date)
- Source: Douyin E-commerce (抖音电商), 《2025抖音电商萌宠消费趋势报告》, via Paidai (电商派)
- URL: https://www.pai.com.cn/p/01k3ga6n37f0qszmxpfc0yr77g
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 95% and 75% present)
- Used in: cost-to-sell-pet-food-in-china

### Imported premium cat kibble shelf price, Tmall Global direct store
- Value: a 5.4 kg imported premium cat kibble at 502.55 RMB after coupons (list 900 RMB) on 天猫国际官方直营
- As of: 2025-01-27
- Source: SMZDM (什么值得买), dated deal post
- URL: https://www.smzdm.com/p/139914873/
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 5.4 and 502.55 present)
- Used in: cost-to-sell-pet-food-in-china (brand not named in copy)
- Notes: a promotional price; anchors the illustrative 500 RMB basket only.

### Pet food per-order cost and break-even on the calculators (proprietary, October 2026)
- Value: per 100 parcels on JD Worldwide (2.5% + 0.9%), calculator per-order defaults (4 pick and pack, 11 last mile, 15 return handling, 5% returns): cost per kept order 23 / 34 / 51 RMB at 180 / 500 / 1,000 RMB baskets (12.9% / 6.8% / 5.1% of the order); Tmall Global (2.5% + 1%) 23.5 / 34.7 / 52.2; logistics 1,630 RMB per 100 parcels, 74% of store cost at 180 RMB, 34% at 1,000; Douyin at 8.1% on the 500 RMB bag about 58 RMB; break-even at 500 RMB and 50% gross margin with a 35,000 RMB monthly partner retainer and a 25,000 RMB build over three years: about 1,985 kept orders (about 0.99 m RMB) on JD, 2,129 (1.06 m) on Tmall; shopper tax at 6.3%: 11 / 32 / 63 RMB
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/jd-worldwide-setup-and-run.astro, the pet row and defaults; tmall-global-setup-and-run.astro defaults with the rule's 2.5% / 30,000)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-11 (computed from the defaults)
- Verified 2: 2026-10-11 (recomputed after the quality pass)
- Used in: cost-to-sell-pet-food-in-china
- Notes: the calculators price the last mile per parcel, not per kilo; the copy says so and asks for a warehouse quote on heavy boxes.

### Researched for 06L, not used
- Online pet food GMV across Tmall, JD and Douyin (30.71 bn RMB, 2025) and Taotian's 51.4% share: Shenwan Hongyuan, but the data is credited to Jiuqian (久谦), a consultancy. Do not cite.
- US 89.5% of H1 2025 non-canned import volume: Foodmate's feed compliance service on NetEase; a service provider and one HS line. Do not cite.
- A 2025 import tonnage: only on gtaic.ai, an AI-generated trade site, conflicting with USDA. Do not cite.
- "23 approved countries as of April 2025": consultancy and Zhihu pages only.
- A per-kilo courier rate card for heavy e-commerce parcels: none citable (consumer guides only).

## Partner piece P17 research (douyin-cross-border-brand-verification), October 11, 2026

### Douyin Global dual verification: overseas production and overseas circulation proof
- Value: Douyin Global verifies overseas production and overseas circulation (境外生产与境外流通资质核验) for merchants' own and authorized brands; comment period 2026-04-28, public notice 2026-05-06 to 05-12, expected in force 2026-05-13; fabricated overseas backgrounds, spliced documents and staged videos (视频摆拍) banned; penalties from restricted operation and delisting to suspension and store removal. Production proof: factory name and address, factory registration, local production licence (GMP etc.), production agreement signed directly by the brand or an equity affiliate (with proof) and the factory, naming the brand, maker on the pack matching the agreement, official certificate of origin, real product photos. Circulation proof: official free sale certificate, customs declaration from the last 90 days on a plausible route (first-leg logistics proof if the departure port differs from the origin), plus one sales proof (wholesale invoices from the last 90 days; or three overseas stores, at least one one-take video and two photo sets, receipts from the last 90 days; or a main listing on a well-known overseas marketplace with recent transactions and reviews)
- As of: May 2026 (notice posted 2026-05-06)
- Source: Douyin E-commerce (抖音电商), 关于修订《【全球购】招商管理规则》的公示通知
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJikTPY3ctGa
- Verified 1: 2026-10-11 (rendered with headless Edge on a temp profile)
- Verified 2: 2026-10-11 (re-rendered at iteration 8; 2026年5月13日生效, 境外生产与境外流通资质核验, 视频摆拍, 近 90 天内 present)
- Used in: douyin-cross-border-brand-verification
- Notes: the notice's copy excludes 营养保健/特医食品/传统滋补 from the wholesale route; the linked guide (next entry) lists 营养保健/传统滋补. Cite the guide for the exclusion.

### Douyin verification guide: wholesale proof not accepted for supplements and tonics
- Value: same evidence lists as the notice; wholesale sales proof not accepted for 营养保健 (health supplements) and 传统滋补 (traditional tonics)
- As of: 2026-04-27 (posting date)
- Source: Douyin E-commerce (抖音电商), 境外生产与流通资质核验规范及指引
- URL: https://school.jinritemai.com/doudian/web/article/aJigvdmNLoZw
- Verified 1: 2026-10-11 (headless Edge)
- Verified 2: 2026-10-11 (re-rendered; 营养保健/传统滋补不支持 and 3家不同门店 present)
- Used in: douyin-cross-border-brand-verification

### Douyin Global admission rules, clause 4.2.2: dual verification is part of brand qualification
- Value: 4.2.2 "除以下品牌资质要求外，自有或授权品牌资质需提供品牌境外生产与境外流通证明", linking the guide above; 2.1.2 domestic agent (境内代理人) carrying joint liability; latest revision effective 2026-07-15
- As of: July 2026 (page header 2026-09-25)
- Source: Douyin E-commerce (抖音电商), 《【全球购】招商管理规则》
- URL: https://school.jinritemai.com/doudian/web/article/108056
- Verified 1: 2026-10-11 (headless Edge)
- Verified 2: 2026-10-11 (re-rendered; 境外生产与境外流通证明, 境内代理人 and 2026年7月15日 present)
- Used in: douyin-cross-border-brand-verification
- Notes: extends the 2026-10-02 entry "Douyin Global admission" (same URL) with clause 4.2.2.

### Douyin launch of the cross-border brand requirements, May 26, 2026: batch checks, 30-day window
- Value: Douyin's Safety and Trust Center announced the upgraded cross-border brand qualification requirements on 2026-05-26; merchants are checked in batches; a notified merchant has 30 natural days to submit the overseas production and circulation proof; late, incomplete or false files lead to delisting, restricted store functions or removal; Douyin asked creators and operating agencies (运营机构) to check brand qualifications before working with a brand and to refuse doubtful products; warning signs include a foreign name with no overseas website or sales record and goods routed through Hong Kong into bonded warehouses without full logistics records
- As of: 2026-05-26
- Source: China News Service (中国新闻网), carried by Sina Finance (新浪财经)
- URL: https://finance.sina.cn/2026-05-26/detail-inhzffsk2883470.d.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 30个自然日, 分批次, 运营机构, 香港中转 present)
- Used in: douyin-cross-border-brand-verification

### Tmall Global food categories: mainland licensed company and entrusted-operation agreement since May 27, 2026
- Value: every food category (plus infant formula, infant food, maternal formula and nutrition, postpartum nutrition) requires a mainland company's business licence, its food business licence, its legal representative's ID and a 跨境电商零售进口食品委托经营协议 (cross-border retail import food entrusted-operation agreement); published 2026-05-21, in force 2026-05-27; reason given: food recall obligations
- As of: 2026-05-27
- Source: Tmall Global (天猫国际), 关于《天猫国际商家资质标准》公示通知
- URL: https://rule.tmall.hk/?type=detail&ruleId=20010174&cId=636
- Verified 1: 2026-10-11 (headless Chrome over DevTools; the list page opens rules through window.open, the URL was captured from the click handler)
- Verified 2: 2026-10-11 (re-rendered; 2026年5月27日生效执行, 境内公司食品经营许可证 and the agreement name present)
- Used in: douyin-cross-border-brand-verification

### Tmall Global merchant qualification standards, in force 2026-09-28: NAD+ supplements and food rows
- Value: the four mainland-company food documents also apply to 保健食品/膳食营养补充食品; NAD+ precursor supplements also need the factory's production licence (cGMP, GMP, TGA, Canadian GMP), the brand-factory production contract when the brand is not the maker, home-market sales proof checked on site by Tmall's overseas BD, ingredient sheets and a third-party test report
- As of: published 2026-09-22, in force 2026-09-28
- Source: Tmall Global (天猫国际), 天猫国际商家资质标准
- URL: https://rule.tmall.hk/?type=detail&ruleId=11000442&cId=624
- Verified 1: 2026-10-11 (headless Chrome over DevTools)
- Verified 2: 2026-10-11 (re-rendered; 于2026年9月28日生效, 生产许可资质, 委托生产合同, 海外BD进行实地核实 present)
- Used in: douyin-cross-border-brand-verification
- Notes: other Tmall Global rule IDs found on 2026-10-11: 招商标准 11003210 (in force 2025-03-01), 在营商家资质细则 9223 (2025-03-01); announcements list cId=636, admission list cId=624.

### Reused for P17 (re-fetched 2026-10-11)
- Tmall Global 全球探源计划 upgrade (Global Network, 2026-09-15): 今年5月启动, 超过300个海外品牌报名, 一镜到底 present. Used in douyin-cross-border-brand-verification.
- Douyin calculator defaults (proprietary, P16 entry of 2026-10-10): 430,000 RMB before the first order, 405,000 refundable; DP retainer 30,000 a month; one month at 2,000,000 RMB a year = about 166,700 RMB (our arithmetic). Label in copy: "TheChinaPath calculator data, October 2026".

### Researched for P17, not used
- "Tmall Global verifies overseas circulation and production for new and existing merchants from May 1, 2026": warehouse-service and agency blogs only (51w2c and similar); no such notice in Tmall Global's public rule centre (announcements paged back to September 2025). Do not cite.
- Trade summaries of the Douyin rule on 搜狐号, AMZ123, globalpod and cbiline: agency or aggregator pages. Cite the Douyin texts instead.

## Partner piece P19 research (tmall-partner-douyin-partner-same-agency), 2026-10-11

### Douyin operating service provider cooperation rules: thresholds, invitation, Tmall credential, quarterly bar
- Value: covers brand, industrial-belt and cross-border (全球购) providers; cross-border providers' services include 经销运营, 海外招商, 自播运营, 达播运营, 短视频运营 and 货架运营; brand providers enter 品牌全案 and 品牌直播服务 as separate categories. Thresholds: independent legal entity, 1 year or more, registered capital ≥100万元, office ≥100平方米, team 20人以上 with 12人以上 on a Douyin e-commerce operating team. Admission by 定向邀约 after an on-site visit; proposal materials: stamped org chart, staff roster, 单位参保证明, two or more cases covering live, short video, creator and mall selling; supporting credentials accepted include 天猫五星运营服务商 and 钻金银牌品牌DP服务商. Deposit 10万元. Quarterly certification, brand track: 发货GMV ≥200万 (主营跨境 ≥50万) through stores with a service-market order (建立服务合作关系), plus ≥2 high-value brands (not assessed for mainly cross-border providers). 主营跨境 = cross-border merchants ≥50% of shipped GMV.
- As of: 2026-07-06 (first in force 2024-02-21)
- Source: Douyin E-commerce (抖音电商), 抖音电商运营类服务商合作管理规则
- URL: https://school.jinritemai.com/doudian/web/article/aJ2D2SbD5GWe
- Verified 1: 2026-10-11 (rendered with headless Edge on a temporary profile; found through the rule-centre search page)
- Verified 2: 2026-10-11 (re-rendered at iteration 8; 20人以上, 12人以上, 100平方米, 10万元, 定向邀约, 天猫五星运营服务商, 主营跨境：发货GMV≥50万, 品牌直播服务 re-found)
- Used in: tmall-partner-douyin-partner-same-agency; douyin-livestream-agency-vs-dp
- Notes: superseded on the quarterly bar by the October 2026 revision below once it takes effect. The 2023 品牌服务商准入规范 consultation (100-person team) is historical; do not cite as current.

### Douyin revision of the cooperation rules: brand-track bars from October 15, 2026
- Value: public notice 2026-10-07 to 2026-10-14, expected in force 2026-10-15 (formal rule to follow the notice); brand-track main industries become 耐用消费/手机大家电/大众消费 (发货GMV ≥300万 a quarter), 奢品跨境 (≥200万), other or none (≥300万); industrial-belt track regrouped (服饰/珠宝文玩二手 ≥300万; 居家生活/鲜食生活/美护文娱/文教健康生活 ≥200万); team, office, capital and 10万元 deposit unchanged
- As of: 2026-10-07
- Source: Douyin E-commerce (抖音电商), 关于修订《抖音电商运营类服务商合作管理规则》的公示通知
- URL: https://school.jinritemai.com/doudian/web/article/aJr9FiM4w6mc
- Verified 1: 2026-10-11 (headless Edge)
- Verified 2: 2026-10-11 (re-rendered; 2026年10月15日生效, 奢品跨境：发货GMV≥200万, 12人以上, 10万元 re-found)
- Used in: tmall-partner-douyin-partner-same-agency
- Notes: registered in signal-watch-list.md for 2026-10-15 to confirm the formal version.

### Douyin operating service provider management code: categories, commission-scope and padding violations
- Value: service-market categories 电商运营服务 (全店服务, 内容服务, 商城服务), 品牌运营服务 (品牌全案服务, 品牌直播服务, 分成结算), 跨境服务商 (跨境电商运营); violation points capped at 120 a year, 120 = removal and 100% deposit (cross-border providers: fixed 5,000 / 10,000 / 20,000 RMB at 60 / 90 / 120); one-time 120 points for misleading a merchant on the revenue-split scope ("指定链接" described, 全店/全部直播/全部短视频/全部商品卡 actually split) and, under 虚假交易, for binding stores not actually served to pass assessments or ratings
- As of: 2026-07-14 (effective date corrected from the twice-verified P46 source read on 2026-10-19)
- Source: Douyin E-commerce (抖音电商), 抖音电商运营类服务商管理规范
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJ5N3Pxir67C
- Verified 1: 2026-10-11 (headless Edge)
- Verified 2: 2026-10-11 (re-rendered; 品牌全案服务、品牌直播服务、分成结算, 一次性累计违规积分120分, 指定链接, 全部商品卡, 绑定实际未服务的商家, 扣除100%保证金 re-found)
- Used in: tmall-partner-douyin-partner-same-agency; douyin-livestream-agency-vs-dp

### Internet platform pricing rule, article 5: no forced price parity or auto price-matching
- Value: 第五条: a merchant selling on several platforms sets its own prices; a platform may not, through higher or added fees, deposit deductions, cut subsidies, traffic limits, search demotion, algorithmic demotion, store blocking or delisting, force or indirectly force it to cut prices or promote through rebates (一), to price no higher on that platform than on other channels (二), or to switch on automatic price-following or price-cutting (三); unified pricing under the platform's own business model excepted. 第二十九条: in force 2026-04-10, valid five years. Notice dated 2025-12-09, 发改价格规〔2025〕1607号, NDRC, SAMR and CAC.
- As of: 2025-12-09 (published 2025-12-20)
- Source: Cyberspace Administration of China (国家网信办) carrying the NDRC, SAMR and CAC notice, 互联网平台价格行为规则
- URL: https://www.cac.gov.cn/2025-12/20/c_1767870953332182.htm
- Verified 1: 2026-10-11 (fetched with curl, full rule text read)
- Verified 2: 2026-10-11 (re-fetched at iteration 8; 不得高于在其他销售渠道的价格, 自动跟价, 2026年4月10日起施行 re-found)
- Used in: tmall-partner-douyin-partner-same-agency
- Notes: closes the note on the earlier 1607 entry (NDRC attachment unparsed): the CAC copy carries the full text, so article numbers may now be cited.

### Douyin 618 2025: half of livestream sales from store broadcasts
- Value: during 618 2025, half of the GMV driven by Douyin livestreams came from store self-broadcasts (店铺自播); nearly 70% of merchants with over 10 million RMB of livestream GMV used store broadcasts; store-broadcast penetration also rising on Taobao Live
- As of: 2026-01-30 19:00:04
- Source: 21st Century Business Herald (21世纪经济报道), 雷晨, 抖音电商全生态出击
- URL: https://www.21jingji.com/article/20260130/herald/50ea314a64d44c9664cf2c6a0132a9cc.html
- Verified 1: 2026-10-11
- Verified 2: 2026-10-11 (re-fetched; 一半来自店铺自播, 近七成采用了店播模式 re-found)
- Used in: tmall-partner-douyin-partner-same-agency; douyin-livestream-agency-vs-dp
- Notes: the figures are unattributed in the article (Douyin data by context); cite as the paper's report.

### Tmall Partner plus Douyin Partner at calculator defaults (proprietary)
- Value: Tmall Global TP 35,000 RMB a month + 10% of 3,500,000 RMB = 770,000 RMB a year; Douyin DP 30,000 RMB a month + 5% of 2,000,000 RMB = 460,000 RMB; together 1,230,000 RMB (22.4% of 5,500,000 RMB); retainers 65,000 RMB a month, 780,000 RMB a year (63% of the partner cost); the TP rate applied to 2,000,000 RMB of Douyin sales adds 100,000 RMB (our arithmetic)
- As of: October 2026
- Source: TheChinaPath calculator data, src/pages/tools/tmall-global-setup-and-run.astro and src/pages/tools/douyin-cost-calculator.astro (drivers dpRetainer, dpCommission, gmv)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-11 (defaults read from both files)
- Verified 2: 2026-10-11 (re-read and recomputed at iteration 8)
- Used in: tmall-partner-douyin-partner-same-agency
- Notes: model defaults, not what agencies charge. Stands in for the Compass "share of TPs on file with a rated Douyin practice" figure.

### Reused for P19 (re-fetched 2026-10-11)
- Tmall Global FY26 star list weights (77% / 20% / 3%), globaltp id=821: re-rendered, same body image (O1CN01UFSDGQ1Y2VjWFqS4Q) and 2026-04-29. Used in tmall-partner-douyin-partner-same-agency.
- Taobao/Tmall sub-accounts for third-party service providers (licence revised 2023-06-02): re-fetched; 第三方服务商, 子账号操作记录及监控查询, 启用、停用 present. Used in tmall-partner-douyin-partner-same-agency.

### Researched for P19, not used
- Agency-ranking and agency-selection pages (163.com, ithome, ifeng, cngold, chinapp, cnblogs, sohu, qiyoutuo) and Jiemian press releases on individual agencies' Douyin ratings: advertorials or competitor releases; Part 5 bars them. The "285 billion RMB 代运营 market in 2025" figure they repeat traces to no primary source.

## Signal 06S research (tmall-global-diaper-allergy-returns), 2026-10-12

### Tmall Global diaper-rash and allergy return rules: final notice, in force October 15, 2026
- Value: implementation rules (实施细则, marked 新增) added to both guarantees, applied when the platform rules on a dispute. Diaper-rash: sub-order paid 10 RMB or less refund-only; above 10 RMB return and refund, every opened item returned clean, return freight on the merchant; a multi-pack sub-order may have at most 1 opened pack, used up to 50% (full-size only; example 4 packs of 30, up to 15 used from one). Allergy: non-baby-food 10 RMB or less refund-only, above 10 RMB return with freight on the merchant; baby food (婴幼儿营养品、宝宝辅食、宝宝零食、婴幼儿调味品) refund-only per item when each item is eaten up to 20%; several identical baby-food items: unopened rest returned at the seller's freight cost; at most 1 opened identical item, used up to 20% (example 2 x 100 ml toner, up to 20 ml); under 10 pieces up to 3 used; sets 20% per item; gifts under 10 ml/g unrestricted; makeup brushes, makeup bags and maternity wear returned in full; an allergy to an identical gift follows the main product. Posted 2026-10-08 01:00, in force 2026-10-15
- As of: October 2026
- Source: Tmall Global (天猫国际), 《关于〈天猫国际红屁屁包退服务规范〉、〈天猫国际过敏包退服务规范〉更新公告通知》, rule.tmall.hk ruleId 20010962
- URL: https://rule.tmall.hk/?type=detail&ruleId=20010962&cId=636#/rule/detail?ruleId=20010962&cId=636
- Verified 1: 2026-10-12 (rendered with headless Edge and read from mtop.alibaba.rulechannel.newrule.rule.detail; 本次规则于 2026年10月8日公示，将于 2026 年10月15日生效执行)
- Verified 2: 2026-10-12 (re-rendered at iteration 8; every cited string re-found)
- Used in: tmall-global-diaper-allergy-returns
- Notes: the consultation (ruleId 20010961, posted 2026-09-30, open to 2026-10-08) carries the same text word for word. The portal renders an empty shell to a plain fetch; use the hash route with a headless browser.

### Tmall Global diaper-rash guarantee terms (红屁屁包退服务规范)
- Value: badge-carrying goods only; claim within 60 days of receipt with valid evidence (photos, a hospital certificate from a level-two hospital or above, or a test report); merchant responds within 48 hours; full refund including the buyer's shipping and the import tax paid; a merchant that fails to respond in 48 hours or refuses pays the buyer 100 RMB per sub-order; a merchant that requires a return pays the return freight. Before October 15, 2026 the text set no limit on how much a buyer could use
- As of: October 2026 (page shows 公示日期 2026-10-08, 更新日期 2026-10-15; first issued 2017-03-22)
- Source: Tmall Global (天猫国际), rule.tmall.hk ruleId 5510 (消费者规则 > 特色服务)
- URL: https://rule.tmall.hk/?type=detail&ruleId=5510&cId=634#/rule/detail?ruleId=5510&cId=634
- Verified 1: 2026-10-12 (rendered)
- Verified 2: 2026-10-12 (re-rendered at iteration 8; 48小时内有效响应, 100元的违约金, 进口税或者行邮税, 60天 re-found)
- Used in: tmall-global-diaper-allergy-returns
- Notes: the page now embeds the October 15 implementation rules at the bottom.

### Tmall Global allergy guarantee terms (过敏包退服务规范)
- Value: same 60 days from receipt, 48-hour response, 100 RMB per sub-order for a missed or refused claim, full refund including shipping and import tax; returned goods (and gifts) must keep at least 80% of the product's quantity or volume
- As of: October 2026 (page shows 公示日期 2026-10-08, 生效日期 2026-10-15; first issued 2017-03-22)
- Source: Tmall Global (天猫国际), rule.tmall.hk ruleId 5509 (消费者规则 > 特色服务)
- URL: https://rule.tmall.hk/?type=detail&ruleId=5509&cId=634#/rule/detail?ruleId=5509&cId=634
- Verified 1: 2026-10-12 (rendered)
- Verified 2: 2026-10-12 (re-rendered at iteration 8; 不应少于该商品数量或容量的80%, 100元的违约金, 60天 re-found)
- Used in: tmall-global-diaper-allergy-returns
- Notes: milk powder has its own guarantee (天猫国际奶粉“过敏包退”服务规范, ruleId 11000571, 2019-07-29), not changed by the October 2026 notice.

### Reused for 06S (re-fetched 2026-10-12)
- Double 11 2025 platform windows (The Paper, 2025-11-15): re-fetched twice; 天猫双11从10月15日持续到11月14日，时间为31天 present. Tmall row only. Used in tmall-global-diaper-allergy-returns.
- Bonded warehouse and per-parcel logistics defaults (proprietary): returnHandling '15' re-read at line 154 of src/pages/tools/tmall-global-setup-and-run.astro, twice. Label in copy: "TheChinaPath calculator data, October 2026". Used in tmall-global-diaper-allergy-returns (worked figure: 20 claims x 15 RMB = about 300 RMB of handling; 2,500 four-pack order lines at 400 RMB, 8,000 RMB refunded, 6,000 RMB of sealed stock, our arithmetic on stated assumptions).

### Researched for 06S, not used
- Claim rates for Tmall Global rash or allergy guarantees, and a market rate for cross-border return freight: no dated primary source exists; the worked figure states its own order size and claim count as assumptions.

## Partner piece P20 research (china-distributor-exclusivity), 2026-10-12

### SPC interpretation on contract penalties: 30% above the loss is generally excessive
- Value: 法释〔2023〕13号 Art. 64: a party may seek adjustment of a penalty by counterclaim or defense; the breaching party bears the burden of proving it excessive; a clause saying the penalty may not be adjusted does not stop adjustment. Art. 65: the court weighs the penalty against the Civil Code Art. 584 loss, considering the parties, the deal, performance, fault and background; an agreed penalty more than 30% above the loss (超过造成损失的百分之三十) is generally excessive; a party in bad-faith breach (恶意违约) generally cannot get it reduced
- As of: adopted May 23, 2023, in force December 5, 2023 (published 2023-12-05 14:42)
- Source: Supreme People's Court (最高人民法院), 最高人民法院关于适用《中华人民共和国民法典》合同编通则若干问题的解释
- URL: https://www.court.gov.cn/fabu/xiangqing/419382.html
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12 (re-fetched at iteration 8; 百分之三十, 第六十四条, 恶意违约, 不得对违约金进行调整, 2023年12月5日起施行 re-found)
- Used in: china-distributor-exclusivity
- Notes: "generally" (一般可以认定) matters; never write that a court must cut a penalty above 30%.

### Civil Code Art. 586: a deposit (定金) is capped at 20% of the contract's value
- Value: a deposit contract forms when the deposit is actually paid; the amount is agreed but may not exceed 20% of the main contract's value (不得超过主合同标的额的百分之二十), and the excess has no deposit effect
- As of: adopted May 28, 2020, in force January 1, 2021
- Source: National People's Congress, Civil Code (中华人民共和国民法典), via the Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=70524
- Verified 1: 2026-10-12
- Verified 2: 2026-10-12
- Used in: china-distributor-exclusivity (with Arts. 563 para. 2, 564, 565 and 585, already logged under P08 and P15)
- Notes: same URL as the Art. 933 (P08) and Arts. 562 to 566 (P15) entries. Art. 563 para. 2 (an open-ended continuing contract can be ended at any time on reasonable prior notice) and Art. 585 (agreed penalty or calculation method; court may raise or reduce) were re-read today for this piece.

### Reused for P20 (re-fetched 2026-10-12 at check 1 and check 2; add china-distributor-exclusivity to Used in)
- Dirui v. Cheng'antang: the contract, the missed targets and the unilateral downgrade (Dirui IPO prospectus, cninfo 1200180236): 32,000 / 34,000 tubes, 取消诚安堂独家代理资格, 7,508,040 re-found with pypdf.
- Dirui v. Cheng'antang: final appeal judgment (Dirui announcement 2016-017, cninfo 1202187573): 7955号, 五百八十六万四千九百五十元, counterclaim dismissed, 终审 re-found. The copy states 78% as our arithmetic (5,864,950 / 7,508,040).
- Civil Code Arts. 562 to 566 (P15) and Art. 585 (P08 entry): re-read on the MOFCOM page.
- Fengxian court: cosmetics distributor held to a 200,000 RMB cross-channel diversion clause (People's Court Daily on court.gov.cn 507751): re-found; the copy keeps "more than 6 million RMB at stake", never "paid".
- Tmall store types: flagship, specialty and multi-brand store definitions (天猫入驻标准, ruleId 9257): re-rendered with headless Edge both times; Art. 5's 授权文件不得有地域限制（个别类目除外），且授权有效期不得少于半年 and 于2025年06月06日修订 re-found.
- Douyin shop store types and brand authorization letters (fxg.jinritemai.com/question/type): 非自有品牌（独占授权） re-found in the page data both times; cited with the observation month (October 2026).
- Distributor economics: four to five million RMB of stock for under 300,000 RMB profit (Jiemian 13003026): quote and 2025/07/08 10:22 re-found; cited as a quote.
- Anti-Monopoly Law: resale price maintenance ban (MOFCOM 97047): Art. 18 items (一) and (二) and the market-share safe harbor sentence re-found.
- Proprietary (published case): DaVinci Gourmet, "Pricing disputes across channels were resolved within three months", src/content/cases/kerry-davinci.md (/work/kerry-davinci), read 2026-10-12 twice. Label in copy: as the DaVinci Gourmet case records.

### Researched for P20, not used
- tiantailaw.com/CN/12371-18916.aspx (law firm, 2022-01-25): reports the Dirui contract's market-protection clause (either side's breach pays twice the sales made in breach) and the court's reasoning on written notice. Not in any citable source; law-firm summaries are leads. Never print the "two times the sales" clause or call the case "double damages".
- SPC commercial franchise typical cases (court.gov.cn 508501, 2026-08-12): franchise, no exclusivity holding.

## Influencer selection refresh research (Refresh 06R), October 13, 2026

### Douyin creator levels L0 to L6 by monthly settled sales
- Value: seven levels set on the 8th of each month from the previous month's 自然月结算金额 (paid amount minus refunds on that month's orders within 7 days, minus abnormal orders): L0 0; L1 up to 30,000; L2 30,000 to 300,000; L3 300,000 to 1 million; L4 1 to 3 million; L5 3 to 10 million; L6 10 million RMB and above. Special downgrade for abnormal orders (example: 100,000 RMB of fake orders)
- As of: March 2026 (first in force 2022-04-11, latest revision 2026-03-08; page 2026-03-09 11:01:25)
- Source: Douyin E-commerce (抖音电商), 《抖音电商创作者等级管理规则》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHRbnsP5fSGu
- Verified 1: 2026-10-13 (headless Edge; L0~L6, 自然月结算金额 formula, 8号 read)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; threshold table "L5 300 万 < 结算金额 ≤ 1000 万, L6 1000 万及以上" and 2026年3月8日 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: supersedes the LV0 to LV7 and follower-based versions that still circulate in search. The page's definition (1.3) also names user experience and operating inputs; the level itself is set by settled amount (2.1.2).

### Douyin abolished the creator reputation score (带货口碑分)
- Value: rule repeal notice 2025-03-25, notice period to 2025-04-01, rule abolished on that date; score removed from creator showcases and profile pages by the end of April 2025
- As of: March 2025 (page 2025-03-25 21:49:02)
- Source: Douyin E-commerce (抖音电商), 关于废止《抖音电商创作者口碑分实施规则》的公示通知
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJNmFjfDRcGA
- Verified 1: 2026-10-13 (headless Edge)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 口碑分 and 2025年4月1日 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: never tell a brand to check a creator's 口碑分. History only: it ran 3 to 5, from 90 days of product (50%), logistics (15%) and service (35%) ratings, and below 4 barred Qianchuan ads (articlev0/aHM6kwjHKJtC, 2021-12-29, checked once, not cited).

### Douyin affiliate creator fee by business rating: 10%, 20%, 40% of commission
- Value: creators rated A, B+ or B pay Douyin a 10% technical service fee on commission, C 20%, D 40%, for all creators from July 8 (2026); rating inputs include settlement rate (T+7 settled GMV / paid GMV), compliance with zero 刷单刷等级, posting frequency, content quality and GMV per post or hour
- As of: October 2026 (page 2026-10-09 19:30:47)
- Source: Douyin E-commerce Learning Center (抖音电商学习中心), 【精选联盟】电商推广者技术服务费规则调整解读
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJkY84jEGbWa
- Verified 1: 2026-10-13 (headless Edge)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 40% and 结算率 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: a creator-side cost. Matches the 10/20/40 split already noted under "Douyin affiliate (精选联盟) creator commission ranges by strategy".

### What a brand sees on a Douyin creator's page in the creator plaza (达人广场)
- Value: modules 概览 (recent posts, products promoted, settled total), 直播详情, 视频详情, 粉丝分析 (gender, age, activity, device), 带货分析 (main categories, linked streams, impressions, clicks), 历史带货评价 (past results, fulfilment, communication); 结算率榜 ranking; 关联企业风险提示 tag
- As of: March 2026 (page 2026-03-07 23:59:59)
- Source: Douyin E-commerce Learning Center (抖音电商学习中心), 玩转达人广场-精准找带货达人合作
- URL: https://school.jinritemai.com/doudian/web/article/110796
- Verified 1: 2026-10-13 (headless Edge)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 粉丝分析 and 历史带货评价 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: feature description, no figures.

### Douyin fake-transaction penalty for creators: 1% of the fake amount, 1,000 to 20,000 RMB
- Value: 违约金 = fake payment amount x 1%, minimum 1,000, maximum 20,000 RMB; worst cases permanent closure of product sharing (minimum 10,000, maximum 20,000 RMB); reduced exposure and ranking bans up to 30 days
- As of: August 2026 (page 2026-08-10 11:06:19)
- Source: Douyin E-commerce (抖音电商), 【虚假交易】处置细则
- URL: https://school.jinritemai.com/doudian/web/articlev0/113470
- Verified 1: 2026-10-13 (headless Edge)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 最低1000元 and 最高20000元 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: covers merchants and creators; the figures above are the creator lines. Related, checked once, not cited: 创作者【作弊行为】实施细则 (article/aHJfRMmUrecM, 2026-06-29), 《抖音电商创作者违规管理规则》 (article/102115, 2026-09-16).

### Xingtu creator management rule: data fraud is a violation; serious follower fraud bans order-taking
- Value: 刷量 and faked follows, likes, comments or conversions listed under 扰乱平台竞争秩序; penalty ladder 7, 30, 90 days and 封禁; 主端账号粉丝刷量严重 leads to 封禁达人接单权限
- As of: October 2026 (page 2026-10-12 11:54:34)
- Source: Ocean Engine Xingtu (巨量星图), 巨量星图达人管理规则
- URL: https://www.xingtu.cn/help-center/author/134035
- Verified 1: 2026-10-13 (headless Edge)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 刷量, 粉丝刷量严重, 封禁达人接单权限 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: the page does not tie a specific day count to fraud; do not say "suspended for 7, 30 or 90 days for fake follows". Creator-card fields (星图指数, 预期播放量, CPM性价比) are on demander/113254 (2026-08-22) and the estimated CPM method on demander/114908 (2026-05-19), both checked once, described in copy without figures.

### Xiaohongshu Pugongying custom deals: creator price plus 10% platform service fee (official)
- Value: 一口价报价 + 10% 平台服务费 (10,000 RMB quote = 11,000 RMB paid)
- As of: October 2026 (doc updateTime 2026-10-12 18:03; quoted blocks edited 2026-04-17)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 合作模式/定制商单
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=eb3150fa550d424459f8838a77c7e433&role=4
- Verified 1: 2026-10-13 (JSON help-doc API)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 10% and 11,000 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china, china-social-media-marketing-cost-per-month (citation replaced in all four locales on 2026-10-13)
- Notes: replaces the 2021 Southern Weekend entry for current copy. Read through the help-doc API; the search API needs a login.

### Xiaohongshu brand trust system: crackdown on unreported creator deals from January 12, 2026
- Value: 品牌分 retired; 专项治理 from 2026-01-12 against 水下接单 (KOC and KOL deals taken outside the official platform without 报备); penalties from note visibility limits and traffic limits up to restricting brand enterprise and staff accounts for repeat cases
- As of: August 2026 (doc updateTime 2026-08-05)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 关于下线品牌分和建设品牌信任体系的公告
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=1627df51a4c861f13e462aa2067d6c15&role=4
- Verified 1: 2026-10-13 (JSON help-doc API)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 水下接单 and 2026年1月12日 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: related brand-side rule 蒲公英客户履约管理规范 (shortcutId b8a3b668ea612abfa016ead5a5cd1321, 2026-09-20) bars brands from steering creators to off-platform payment; checked once, not cited.

### Advertising Law: endorser must have used the goods; joint liability for health goods
- Value: art 38 para 1 an endorser may not recommend goods it has not used; para 3 no endorser within 3 years of a false-ad penalty (enforced on the advertiser, art 58(11)); art 56 para 2 for goods bearing on life and health, the endorser is jointly liable for harm from a false ad without a knowledge test; art 61 endorser fines 1 to 2 times illegal income; art 14 ads must be identifiable
- As of: amended April 29, 2021 (SAMR page published 2022-11-02)
- Source: State Administration for Market Regulation (市场监管总局), 中华人民共和国广告法
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_5474cf75173c45d6a0379730fb4e8d97.html
- Verified 1: 2026-10-13 (curl; arts 2, 14, 38, 56, 58, 61 read)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 未使用过的商品 and 连带责任 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: the 3-year bar is art 38 para 3, not art 61 or 62. The 04R entry for arts 9(3) and 57 cites the same page.

### Internet Advertising Measures, SAMR Order 72: livestream sellers are advertisers; "广告" label on reviews with a buy link
- Value: art 9 para 3 knowledge sharing, experience sharing or consumer reviews with a shopping link must be clearly labelled 广告; art 19 a seller promoting goods via livestream that constitutes a commercial ad bears advertiser duties, a host recommending in their own name bears endorser duties
- As of: adopted February 24, published February 25, in force May 1, 2023
- Source: State Council Gazette (国务院公报) 2023 No. 16, 国家市场监督管理总局令第72号
- URL: https://www.gov.cn/gongbao/2023/issue_10506/202306/content_6885261.html
- Verified 1: 2026-10-13 (curl)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 显著标明 and 直播营销人员 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: art 25 punishes unidentifiable ads under Advertising Law art 59 para 3.

### Livestream E-commerce Supervision Measures, Order 117: host verification before every stream
- Value: art 28 the live-room operator verifies each host's name, ID number, address, contact, agency and relevant qualifications, reports the verified identity to the platform before every stream and keeps records at least 3 years; art 2 applies to whoever actually runs another's live room; art 59 failure to verify, if not corrected or serious, 10,000 to 100,000 RMB fine
- As of: published December 18, 2025, in force February 1, 2026 (CAC page 2026-01-07 19:40)
- Source: Cyberspace Administration of China (国家网信办) carrying SAMR and CAC Order No. 117, 直播电商监督管理办法
- URL: https://www.cac.gov.cn/2026-01/07/c_1769516655383334.htm
- Verified 1: 2026-10-13 (curl)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 每次直播前 and 一万元以上十万元以下 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: same order as the ledger entry "直播电商监督管理办法, SAMR and CAC order 117" (gazette copy); this entry covers arts 2, 28 and 59.

### SAMR livestream cases: Dongying brand fined 100,000 RMB for its host's claims; Xichong fake-follower farm 270,000 RMB
- Value: 东营荣灿商贸 hired host 李某某 for a 2025-02-01 livestream of a 保健食品 claiming 卖了2185万单 and that anyone 年满14周岁 could take it; fined 100,000 RMB in August 2025 under Advertising Law art 55 and 58. 西充顺利传媒 ran 1,200 phones selling fake followers at 0.07 to 0.15 RMB each, about 5,800 orders, about 2.7 million fake follows; 罚没 270,000 RMB in September 2025
- As of: November 2025 (第四批直播电商领域典型案例, 2025-11-28 17:00)
- Source: State Administration for Market Regulation (市场监管总局)
- URL: https://www.samr.gov.cn/xw/zj/art/2025/art_cb90a1860b3d4cd18c87b1fa35baeeff.html
- Verified 1: 2026-10-13 (curl)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 0.07 and 2185万 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: the brand, not the host, was fined in the Dongying case. Same page: host 太原老葛 fined 5.6m RMB in total (not used).

### CAC two-month campaign against fake short-video personas (清朗·整治短视频虚假人设乱象)
- Value: announced September 30, 2026 ("近日" issued, two months); targets invented credentials, AI-faked public figures for endorsements and marketing, MCN account matrices mass-producing personas; content labels no shield
- As of: September 2026 (CAC page 2026-09-30 16:30)
- Source: Cyberspace Administration of China (中央网信办)
- URL: https://www.cac.gov.cn/2026-09/30/c_1792520301987752.htm
- Verified 1: 2026-10-13 (curl; People's Daily copy society.people.com.cn/n1/2026/0930/c1008-40808389.html also read)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; 为期2个月 and 矩阵 re-found)
- Used in: optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china
- Notes: no exact launch date published; say "announced September 30, 2026". The result check is on the signal watch list for 2026-12-01.

### Researched, not used (06R, 2026-10-13)
- Anti-Unfair Competition Law, revised 2025-06-27, in force 2025-10-15, art 9 (false publicity on sales and reviews; organising fake transactions and reviews) and art 25 (fines up to 1m, 2m RMB if serious): politics.people.com.cn/n1/2025/1010/c1001-40578685.html, checked once 2026-10-13. The law has no 流量 wording.
- 网络直播营销管理办法（试行） art 18(4) bans 数据流量造假: cac.gov.cn/2021-04/22/c_1620670982794847.htm, checked once 2026-10-13.
- SAMR ten illegal-ad cases (2025-06-03): 无锡美抖 unlabelled ad 罚没 194,000 RMB, samr.gov.cn/xw/zj/art/2025/art_80ee21faaae940809d483f002a8ecbea.html, checked once.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- Douyin affiliate creator commission 5% to 50%, 5% to 80% on some designated-creator strategies, 15-day settlement, refund clawback (articlev0/112620, page now 2026-10-12): rendered 2026-10-13 at both checks. Add "optimizing-your-brand-choosing-the-right-influencer-in-2024-in-china". Precision: 指定达人-佣金策略 is 5% to 50%; the 80% ceiling applies to 指定达人-固定佣金, 阶梯 and 店铺定向.
- Xingtu recruitment tasks 10,000 RMB, 5% fee, creators 1K to 5M followers (demander/126583): rendered 2026-10-13 at both checks. Add the slug.
- Douyin Mall 618 2026 creator figures (cnr.cn t20260620_527669642, GBK page): fetched 2026-10-13 at both checks (超过57万达人, 100万以下, 超过80%). Add the slug.
- Sponsored post 39,700 / 10,800 RMB, January to October 2024 (Jiemian citing QuestMobile, 12440261): fetched 2026-10-13 at both checks. Add the slug.
- Historical dedicated-host event fee 1m to 3m RMB plus about 10% to 20% (Xinhua, 2024-08-04): fetched 2026-10-13 at both checks; the speaker is a 雅鹿集团 (Yalu Group, apparel) manager, 头部主播专场费用. Add the slug.
- Xiaohongshu creator deals: 10% platform service fee (Southern Weekend, 2021): superseded for current copy by the Pugongying help-doc entry above.

### NOT SOURCED, do not research again from these dead ends (06R, 2026-10-13)
- Douyin learning-centre pages offline: articlev0/107447 (如何找达人带货), article/114222 (达人广场升级指南v2.0).
- Third-party pages describing 口碑分 as current (30-day window, 百分制): outdated since April 2025.
- Xiaohongshu logged-out note and community pages render empty; the Pugongying search API returns nothing without a login (use /api/pgy/help/menu?role=4 then /api/pgy/help/doc?shortcutId=...&role=4).
- 21财经 2026-07-13 Pugongying 2,700万 invitations: a column with no primary source.
- A dated official creator price list by follower tier: none on Douyin, Xingtu or Pugongying.

## Partner cluster P21 (tmall-global-importer-of-record), 2026-10-13

### Cross-border retail import routes: 1210 bonded and 9610 direct purchase (MOFCOM 486, article 1)
- Value: cross-border retail import is a mainland shopper buying from abroad through a cross-border platform, with goods moved as 网购保税进口 (customs code 1210) or 直购进口 (customs code 9610); goods must be on the 跨境电子商务零售进口商品清单 and for personal use; participants defined in art. 2: the overseas-registered seller (owner of the goods), the platform, the 境内服务商 (mainland-registered provider of declaration, payment, logistics and warehousing) and the shopper
- As of: November 2018 (商财发〔2018〕486号, dated 2018-11-28)
- Source: Ministry of Commerce and five other agencies (商务部等六部门), via the State Council policy library (中国政府网)
- URL: https://www.gov.cn/zhengce/zhengceku/2018-12/31/content_5437823.htm
- Verified 1: 2026-10-13 (curl; 海关监管方式代码1210 and 海关监管方式代码9610 found in art. 1)
- Verified 2: 2026-10-13 (re-fetched at iteration 8; both codes, 为商品的货权所有人, 不执行有关商品首次进口许可批件 and 承担民事连带责任 re-found)
- Used in: tmall-global-importer-of-record
- Notes: primary source for the two codes; prefer it to the Jiaxiang County explainer in "Customs codes 9610 and 1210". Same document as the art. 2(1), art. 3, art. 4(1)1 and art. 4(1)3 entries above, all re-verified today (both checks 2026-10-13); add tmall-global-importer-of-record to their Used in.

### Tmall Global Merchant Acceptance Standards: overseas entity, overseas trademark, declared agent operator
- Value: 入驻商家必须具备中国大陆以外资质的公司实体，拥有海外注册商标，具备海外零售、海外研发生产经营能力等资质; 开店主体需为海外或香港、澳门、台湾的实体公司; merchants must truthfully provide the store's operating parties including the 代理运营商 (agent operator) and notify changes 15 days ahead; store types 品牌旗舰店, 卖场型旗舰店, 专卖店, 专营店, 银河专营店 (sells 天猫国际直营 or flagship goods on consignment); annual fee 30,000 or 60,000 RMB by first-level category; two voluntary exits in a calendar year bar reopening for six months
- As of: posted 2025-02-21, in force 2025-03-01
- Source: Tmall Global (天猫国际), 《天猫国际招商标准 Tmall Global Merchant Acceptance Standards》, ruleId 11003210
- URL: https://rule.tmall.hk/?type=detail&ruleId=11003210&cId=624#/rule/detail?ruleId=11003210&cId=624
- Verified 1: 2026-10-13 (headless Chrome over DevTools, hash route; the URL without the hash renders only the shell)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 中国大陆以外资质的公司实体, 拥有海外注册商标, 代理运营商 and 2025年3月1日生效 re-found)
- Used in: tmall-global-importer-of-record

### Tmall Global market management rules: direct-mail listing shipped from a bonded warehouse
- Value: under 违背承诺, a product shown as 邮件报关商品 (overseas direct mail) but actually shipped from a domestic bonded warehouse: product deleted, store closed on the third case (删除商品，累计三次清退店铺); refusing a recall: store closed and deposit forfeited; requiring buyers to return goods outside mainland China is a broken commitment
- As of: in force 2026-05-06, updated 2026-05-12
- Source: Tmall Global (天猫国际), 《天猫国际市场管理规则》, ruleId 11004788
- URL: https://rule.tmall.hk/?type=detail&ruleId=11004788&cId=628#/rule/detail?ruleId=11004788&cId=628
- Verified 1: 2026-10-13 (rule centre home > 规则辞典 > 商家规则 > 基础规则 clicked headless; window.open intercepted to get the URL; page rendered)
- Verified 2: 2026-10-13 (re-rendered at iteration 8; 实际为使用国内保税仓发货的, 累计三次清退店铺 and 2026年5月6日生效执行 re-found)
- Used in: tmall-global-importer-of-record
- Notes: the basic-rules list (cId 628) on 2026-10-13 held seven rules: 闪购服务规范, 阿里旺旺服务管理规范, 服务条款规则, 价格管理规则, 评价管理规则, 市场管理规则, 海外直邮服务规范 (2017). No Tmall Global ship-by-hours rule was found there; the 72 h bonded / 120 h direct-mail figures circulate only on agency and aggregator pages and are not cited.

### Re-verified for P21 (no new entry; add tmall-global-importer-of-record to Used in)
- "Tmall Global food categories: mainland licensed company and entrusted-operation agreement since May 27, 2026" (ruleId 20010174): re-rendered 2026-10-13 twice (check 1 at research, check 2 at iteration 8); 境内公司食品经营许可证, 跨境电商零售进口食品委托经营协议 and 2026年5月27日生效执行 present.
- "Over-limit single item: full duty, VAT and consumption tax" and "Cross-border retail import limits per shopper" (财关税〔2018〕49号): the MOF 关税司 URL returned 502 on 2026-10-13; the MOFCOM mirror https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=65769 was fetched twice (仅一件商品, 按照货物税率全额征收, 不得进入国内市场再次销售, 网购保税＋线下自提, 26000元 present) and is the URL cited. Art. 3 (no resale; no "bonded plus offline pickup" outside special customs zones) is newly used.
- "Cross-border retail import tax: 0% duty, VAT and consumption tax at 70%" (财关税〔2016〕18号): re-fetched twice on 2026-10-13, both clauses present.
- "Food Safety Law: food licensing, importer filing, Chinese label" (MOFCOM 104105): re-fetched twice on 2026-10-13, arts. 96 and 97 and the 2025-09-12 amendment line present.

### Tmall Global cash floor by role and per-order logistics (proprietary, October 2026)
- Value: packaged-food row at defaults: platform deposit 50,000 + annual fee 30,000 + store setup 25,000 + bonded warehouse deposit 100,000 + tax prepayment 300,000 = 505,000 RMB before the first order, of which the bonded warehouse holds 400,000 (more than platform deposit, annual fee and setup combined, 105,000); per order: storage 0.8 x 2 months + pick and pack 4 + last mile 11 + 5% x 15 return handling = 17.35 RMB, 6.9% of the 250 RMB default basket; TP 420,000 retainer + 350,000 commission = 770,000 RMB at the 3,500,000 default GMV (22%); clearance agent (境内代理人) line defaults to 0
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro: drivers, categories, field defaults, compute())
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-13 (defaults and compute() read from the .astro file)
- Verified 2: 2026-10-13 (re-read before the draft was finished; arithmetic recomputed)
- Used in: tmall-global-importer-of-record
- Notes: model defaults, not a market rate. US$71,000 is 505,000 at the 7.1 planning rate used in tmall-partner-vs-distributor-china.

## Anchor 07A (find-distributor-china-verify), 2026-10-14

### Businesses with import or export records, 2025
- Value: more than 780,000 operating entities (经营主体) in China had import or export records in 2025 (超过78万家)
- As of: January 14, 2026 (State Council Information Office press conference on 2025 trade, GACC deputy minister 王军)
- Source: Xinhua (新华社), 《新华鲜报丨创新高、九连涨！2025年中国外贸答卷亮点纷呈》, reporters 邹多为 and 黄韬铭
- URL: https://www.news.cn/fortune/20260114/cde5cc17877d4284aac90e0c6ef48717/c.html
- Verified 1: 2026-10-14 (WebFetch: "2025年，我国有进出口记录的经营主体超过78万家" and the press-conference attribution)
- Verified 2: 2026-10-14 (re-fetched with curl at iteration 8; "78万家" re-found)
- Used in: find-distributor-china-verify
- Notes: entities with records, not registered foreign trade operators. The 2024 private-firm count (60.9万) appeared only in secondary coverage and was not used. The GACC Hefei transcript (hefei.customs.gov.cn) returned a certificate error.

### Customs declaration entity filing: definition, three working days, published on the customs credit platform
- Value: a 报关单位 is a 进出口货物收发货人 or 报关企业 filed with customs (art. 2); customs files within 3 working days and publishes the filing on the 中国海关企业进出口信用信息公示平台 (art. 7); the filing is long-term valid, a temporary filing one year (art. 8)
- As of: GACC Decree 253, promulgated November 19, 2021, in force January 1, 2022
- Source: General Administration of Customs (海关总署), 中华人民共和国海关报关单位备案管理规定, via the Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=92148
- Verified 1: 2026-10-14 (arts. 2, 4 and 7 read)
- Verified 2: 2026-10-14 (re-fetched with curl at iteration 8; arts. 2 and 7 verbatim)
- Used in: find-distributor-china-verify
- Notes: art. 4 still says a consignee must hold a 对外贸易经营者备案; the December 30, 2022 Foreign Trade Law amendment abolished that filing. Do not cite art. 4.

### Annual report social insurance items: insured headcount public by law
- Value: from the 2016 annual report, companies report 参保险种类型, 单位参保人数, 单位缴费基数, 本期实际缴费金额, 单位累计欠缴金额; the first two must be public, the other three are published at the company's choice
- As of: notice 工商企监字〔2016〕226号 (SAIC, MOHRSS, NBS, November 2016); page dated April 27, 2018, updated July 31, 2023
- Source: Qiaokou District People's Government, Wuhan (武汉市硚口区人民政府), 《"年报公示"应该公示哪些内容？》
- URL: https://www.qiaokou.gov.cn/hdjl/cjwt/cjwt/201804/t20180427_147988.shtml
- Verified 1: 2026-10-14 (mandatory and optional items read on the page)
- Verified 2: 2026-10-14 (re-fetched with curl at iteration 8; "其中第一项、第二项信息应当向社会公示" re-found)
- Used in: find-distributor-china-verify
- Notes: confirmed by the Hunan HRSS news item of 2016-11-25 (http://rst.hunan.gov.cn/xxgk/gzdt/zwdt/201611/t20161125_3595704.html, five items, no split) and the notice text on shanghaiinvest.com; neither cited. The "报告期末 = December 31" definition was seen only on secondary pages and was not used.

### Re-verified ledger entries reused (no new entry; add find-distributor-china-verify to Used in)
- Food Safety Law: food licensing, importer filing, Chinese label (MOFCOM id=104105): arts. 96 and 97 re-read verbatim by curl 2026-10-14, amendment date 2025-09-12 on the page; art. 96 second paragraph (定期公布 ... 进口商 ... 名单) confirmed. Both checks for this piece 2026-10-14.
- E-Commerce Law, Art. 15 (CAC, 2018-09-01): re-fetched 2026-10-14, text matched. Both checks for this piece 2026-10-14.
- Distributor economics: four to five million RMB of stock for under 300,000 RMB profit (Jiemian 13003026): re-fetched 2026-10-14; the quote is anonymous on the page, so the copy says "one distributor". Both checks for this piece 2026-10-14.
- Compass shortlist size (three to five names) and Compass shortlist turnaround (two to three weeks): re-read in src/content/pages/partner-guides/shared.ts 2026-10-14, both checks. Proprietary number of this piece.

## Partner cluster P36 (tmall-agency-proposal-red-flags), 2026-10-14

### Tmall Global 2026 star rule: unkeepable promises such as 保销XX万 are a red line; brand complaints; data falsification
- Value: under 反向扣分细则, 平台红线问题 include 违规承诺: service guarantees to merchants or shoppers that cannot be honored (如"保销XX万"、"无效退款"); red-line breaches lose all bonus points for the store or, if serious, the current rating; brands may file written complaints about service quality, delivery or communication (no deduction if the complaint fails); falsifying data to deceive a brand (伪造数据欺骗品牌) loses rating eligibility permanently
- As of: March 20, 2026 (in force March 31, 2026)
- Source: Tmall Global service provider market (天猫国际服务市场), 《天猫国际2026服务商生态星级考核规则》
- URL: https://globaltp.tmall.com/import_tp/TP/informationDetail?id=815
- Verified 1: 2026-10-14 (rendered with headless Edge, date 2026-03-20 on the page; body image O1CN01ZIx7Jt29noQB3KJ03_!!6000000008113-0-tps-1100-4442.jpg downloaded and read in slices 3 and 4)
- Verified 2: 2026-10-14 (re-rendered at iteration 8; the image URL re-found and the re-download byte-identical)
- Used in: tmall-agency-proposal-red-flags
- Notes: new clauses on the existing "Tmall Global 2026 star rating for operating partners" entry (P06). The rule binds Tmall Global operating partners, not Tmall (domestic) agencies.

### Qianchuan: no promise of results (art. 9); agency-linked accounts lose pending credits on transfer (art. 16)
- Value: art. 9 (不承诺投放效果): oCPM plans are billed by impression; the platform makes no express or implied promise on results or on the customer's sales, business performance or investment returns. Art. 16: when a customer account is linked to an agency (挂接代理商的账户, "非直投账户") and the customer moves it to another agency (转户), cost-guarantee amounts for spend before the transfer that are still being calculated or paid are not paid. Art. 13: on violations Douyin may act against all Qianchuan accounts under the customer's entity and related parties, including freezing account assets
- As of: first in force June 1, 2021, revised December 22, 2025 (page dated 2026-07-02)
- Source: Douyin E-commerce (抖音电商), 《【巨量千川】标准投放成本保障规则》, e-commerce learning center
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMNDfneBP7r
- Verified 1: 2026-10-14 (headless Edge render; arts. 9, 13 and 16 read)
- Verified 2: 2026-10-14 (re-rendered at iteration 8; 不承诺投放效果, 经营业绩、投资收益, 非直投账户, 转户 and the revision date re-found)
- Used in: tmall-agency-proposal-red-flags
- Notes: the rule covers cost-guarantee credits only; it does not say who owns an agency-opened account. The Qianchuan access and control guide (articlev0/110230) is offline (文章已下线).

### Chengdu Qingyang court: guaranteed turnover of 40,000 RMB in three months; no-refund clauses bind neither side; 65% refund
- Value: two e-commerce service contracts signed September 22 and 24, 2023; agency staff told the owner on WeChat the guaranteed turnover (保底营业额) was 40,000 RMB, with monthly income around 17,000 RMB once stable; the store contract set a three-month term and 40,000 RMB of turnover; twenty-odd orders, more than ten returned; the shop-window service fee refunded in full and 65% of the store service fee; the judges' note says such no-refund clauses usually unfairly cut the agency's liability and bind neither side; Chengdu Intermediate Court upheld
- As of: October 21, 2024
- Source: Chengdu Qingyang District People's Court (成都市青羊区人民法院), official account on The Paper (澎湃号·政务), 《平台网店运营服务，营收未达预期是否可以解约退款？》
- URL: https://m.thepaper.cn/newsDetail_forward_29103453
- Verified 1: 2026-10-14
- Verified 2: 2026-10-14 (re-fetched at iteration 8; 保底营业额为4万, 65%, 对双方均无拘束力, 维持原判 re-found)
- Used in: tmall-agency-proposal-red-flags
- Notes: the platform is unnamed (某平台网店, a short-video platform shop by context); never write it up as Douyin. A micro-shop case; use for the contract principle, not for scale.

### Pudong court: a missed sales estimate is not the agency's fault; the client pays the commission (white paper case 6)
- Value: service agreement of July 2020 for a Taobao store selling small hardware, 180,000 RMB operating fee plus tiered commission on sales; the client took the store back on October 31, 2021 and sued to terminate and recover 50,000 RMB of fees; the court held the shortfall against the estimate (预估值) came from product quality, pricing, store awareness, consumer acceptance, sales cycle and competition, not directly from the agency's work; claim dismissed, client ordered to pay the sales commission; no appeal. Same white paper: 648 platform-economy service contract cases in 2021 to 2023; in 312 suits by providers for fees, over 60% of clients defended on service quality; termination sought in 32%
- As of: release October 18, 2024; full text carried October 21, 2024
- Source: Shanghai Pudong New Area People's Court (上海浦东法院), platform-economy service contract white paper and ten typical cases, case 6, full text carried by IP Economy (知产财经), 来源 上海浦东法院
- URL: https://www.ipeconomy.cn/dianxing/8890.html
- Verified 1: 2026-10-14 (case 6 read in full)
- Verified 2: 2026-10-14 (re-fetched at iteration 8; 销售额未能达到预估值, 返还已付服务费5万元, 支付销售提成 re-found)
- Used in: tmall-agency-proposal-red-flags
- Notes: the Shanghai High Court's release (https://www.hshfy.sh.cn/shfy/web/xxnr.jsp?pa=aaWQ9MTAyMDQwNzMyMSZ4aD0xJmxtZG09bG0xNzEPdcssz&zd=xwzx, 2024-10-18) confirms the white paper and the 648 cases but carries no case text. The parties are named in the release; the copy does not name them.

### Commission base and ad line at calculator defaults (proprietary, October 2026)
- Value: Tmall Global defaults (GMV 3,500,000 RMB, TP 35,000 a month, commission 10%, returns 5%, cross-border tax 9.1%): commission 350,000 on gross, 332,500 net of returns (17,500 a year), 381,850 on a tax-inclusive base (31,850 more); TP total 770,000. Douyin defaults (GMV 2,000,000, DP 30,000 a month, commission 5%, paid share 15%, ROAS 2.5): DP commission 100,000; 20,000 of it on refunded goods at a 20% return scenario; Qianchuan line 120,000 a year
- As of: October 2026
- Source: TheChinaPath calculator data, src/pages/tools/tmall-global-setup-and-run.astro and src/pages/tools/douyin-cost-calculator.astro
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-14 (defaults read from both files; arithmetic run with node)
- Verified 2: 2026-10-14 (recomputed before the draft was finished)
- Used in: tmall-agency-proposal-red-flags
- Notes: scenario arithmetic on model defaults, not market rates or client results. Matches the P08 entry "TP transition-month cost and commission-base scenarios" (September 2026), defaults unchanged. Stands in for a Compass figure (compass-stats.md does not exist).

### Re-verified for P36 (no new entry; add tmall-agency-proposal-red-flags to Used in)
- Douyin operating service provider management code (aJ5N3Pxir67C, revised 2026-07-14): re-rendered 2026-10-14 at check 1 and check 2; 指定链接, 全部商品卡, 一次性累计违规积分120分 re-found.
- Douyin operating service provider cooperation rules (aJ2D2SbD5GWe): re-rendered 2026-10-14 at both checks; 员工花名册、单位参保证明, 服务团队人数20人以上，且有12人以上 re-found. The copy says "at least 20" and "at least 12" (以上 includes the number).
- Xiamen 代运营 refund cases (People's Court Daily, 2021-12-03): older than twelve months, re-fetched 2026-10-14 at both checks; 不低于230万元, 345元, 1.5万元 paid at the agency's direction treated as a prepayment, 1.2万元 returned.
- SPC typical case 3, agency fake group-buy orders (court.gov.cn 507691, 2026-08-03): re-fetched 2026-10-14 at both checks.
- Tmall Merchant Service Agreement (TD201609271722_89275, updated 2026-03-21): re-fetched 2026-10-14 at both checks; 通过天猫账户完成的行为均视为您本人行为或已获得您充分授权 re-found.
- Taobao/Tmall sub-account licence (revised 2023-06-02): re-fetched 2026-10-14 at both checks.
- Annual report social insurance items (Qiaokou, 07A entry): re-fetched 2026-10-14 at check 2 for this piece.

### Researched for P36, not used
- Mengzhou court (mzsfy.hncourt.gov.cn/public/detail.php?id=1525, 2026-03-30): Douyin store operation, 7,400 RMB refund for results promised orally. Too small to say anything to a brand.
- Tiandi Online SZSE inquiry reply (file.finance.qq.com, 2025-08-07) on media rebates: the PDF's fonts carry no text layer; no figure readable. Do not retry without OCR.
- Media-agency rebate prosecution reported by adquan and digitaling: trade-media reports only, no prosecutor or court page found.

## Ledger 07L (how-insurance-and-financial-services-reach-customers-in-china), 2026-10-15

### Insurance Law: who may run insurance business; domestic risks insured in China; representative offices may not do business; penalty for illegal insurance business
- Value: arts. 6 and 7 (only insurers set up under the law and other bodies the law allows may run insurance business; domestic entities insure domestic risks with insurers in China); art. 80 (a foreign insurer's representative office may not do insurance business); art. 158 (illegal commercial insurance business is shut down, illegal income confiscated, fine 1 to 5 times that income, or 200,000 to 1 million RMB where the income is under 200,000 RMB)
- As of: 2015 amendment (amended 2015-04-24), in force; a full rewrite was out for comment from 2026-09-04 to 2026-10-03 (signal watch list)
- Source: Insurance Law of the PRC (保险法), via the State Administration for Market Regulation (国家市场监督管理总局)
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_4c715a53f3d4402c89f62ae77809f638.html
- Verified 1: 2026-10-15 (arts. 6, 7, 80, 158 read; cross-check jsnews.jschina.com.cn, 2024-04-15)
- Verified 2: 2026-10-15 (re-fetched with curl; 其他单位和个人不得经营保险业务, 应当向中华人民共和国境内的保险公司投保, 不得从事保险经营活动 and art. 158 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: If the draft revision is adopted, re-read before reuse.

### Joint-venture life insurer foreign ownership cap lifted January 1, 2020
- Value: cap removed from 2020-01-01; end-2023: 67 foreign insurance institutions, 70 representative offices, 10% market share (NFRA vice-chair Xiao Yuanqi)
- As of: January 2025
- Source: Securities Times (证券时报)
- URL: https://www.stcn.com/article/detail/1480828.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (2020年1月1日, 外资持股比例上限 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: The 10% end-2023 share is a different measure from Li Yunze's 9% of premiums; 07L uses only the cap date from this page.

### Foreign insurers' share of premiums: 4% in 2013, 9% now (Li Yunze, NFRA)
- Value: 4% to 9%; foreign banks' and insurers' assets above 7 trillion RMB
- As of: June 2025 (Lujiazui Forum)
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/money/bank/bank_hydt/2025-06-18/doc-infanfym5817481.shtml
- Verified 1: 2026-10-15 (cross-check Economic Daily via Sina, 2025-06-22)
- Verified 2: 2026-10-15 (4%, 9%, 李云泽 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Individual insurance agents: about 2.126 million at end-Q1 2026, peak 9.12 million in 2019
- Value: 2.126 million; 9.12 million
- As of: May 2026
- Source: Jiemian (界面新闻), via Sina Finance
- URL: https://finance.sina.com.cn/jjxw/2026-05-19/doc-inhymuma3126921.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (212.6万, 912万 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Agent commission deferral: payment terms of 10 years or more, commission paid over at least 5 years
- Value: at least 3 years for 5 to 10 year terms; at least 5 years for 10-year-plus terms
- As of: NFRA notice 《关于推动深化人身保险行业个人营销体制改革的通知》, reported April 2025
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/jjxw/2025-04-19/doc-inetsatz7328657.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (不得少于5年 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Bancassurance share, Q1 2026: 47.77% of premiums at 63 life insurers; agents 38.76%
- Value: 462.346 billion of 967.786 billion RMB
- As of: May 2026
- Source: Securities Daily (证券日报), via the Wuhan Local Financial Administration (武汉市地方金融管理局)
- URL: https://jrj.wuhan.gov.cn/ztzl_57/xyrd/bxy/202605/t20260525_2768470.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (47.77, 38.76, 63家 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: A Sina piece of 2026-07-03 gives a different Q1 split (506.1 billion, 42%) on another sample; attribute the 47.77% to this source only.

### Insurers may pay banks only compliant commission from July 1, 2026 (NFRA document 65)
- Value: no other sales-related fees; no published percentage cap
- As of: July 2026
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/wm/2026-07-03/doc-inifpqkw3648346.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (合规支付佣金, 7月1日 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Ant Insurance works with more than 90 insurers
- Value: 90+ partner insurers; 17.87 billion RMB of claims paid through the platform in 2025
- As of: February 2026
- Source: China News Service (中国新闻网)
- URL: https://www.chinanews.com.cn/cj/2026/02-03/10564653.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (90 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### WeSure (腾讯微保): 100 million+ users served since 2017; partners include Samsung Fire & Marine
- Value: 100 million+ cumulative users; 8.4 billion RMB of claims to end-2025
- As of: May 2026
- Source: China Securities Journal (中国证券报·中证网)
- URL: https://www.cs.com.cn/yh/bx/2026/05/26/detail_2026052610014236.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (超1亿, 三星 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Yuanbao FY2025: selling and marketing 2,217.2 million RMB; about 30.7 million new policies
- Value: 2,217.2 million RMB (+23.9%); 30.7 million new policies (+36.7%); our arithmetic about 72 RMB per new policy
- As of: fiscal 2025, release dated 2026-03-18
- Source: Yuanbao Inc. (Nasdaq: YB) results release, GlobeNewswire, as carried by the Manila Times
- URL: https://www.manilatimes.net/2026/03/18/tmt-newswire/globenewswire/yuanbao-inc-announces-fourth-quarter-and-fiscal-year-2025-unaudited-financial-results/2302540
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (2,217.2, 30.7 million re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: The 72 RMB is our division and the spend also covers existing customers; label it as our arithmetic.

### Online insurance buyers' information channels: 42% WeChat, Weibo or Moments; 39% short-video apps
- Value: 2025 survey; report released 2026-05-07 by Yuanbao and the China Insurance and Pension Finance Research Center of Tsinghua PBCSF
- As of: May 2026
- Source: China National Radio (央广网)
- URL: https://www.cnr.cn/jrpd/mxhq/20260512/t20260512_527617869.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (42%, 39% re-found; page is GBK)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: The sample is online insurance consumers, not all consumers; say so.

### Douyin Q3 2026: 45,000+ financial posts removed, 1,000+ accounts acted on, all 6,888 wealth-adviser certifications cancelled
- Value: as stated
- As of: September 2026
- Source: 21st Century Business Herald (21世纪经济报道)
- URL: https://m.21jingji.com/article/20260921/herald/c474648451a908b7a1315d191a42a10c.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (4.5万, 6888 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Xiaohongshu financial community convention: license first, then platform certification; 1.01 million notes and 157,000 accounts removed in six months
- Value: as stated; financial searches +314%
- As of: September 2026 (convention published 2026-09-15)
- Source: Tencent News (腾讯新闻)
- URL: https://news.qq.com/rain/a/20260915A0C20Q00
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (持牌, 101, 15.7 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### WeCom: 14 million+ organizations; businesses serve 750 million+ WeChat users a day through it
- Value: as stated
- As of: August 2025
- Source: Yicai (第一财经)
- URL: https://www.yicai.com/news/102783091.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (1400万, 7.5亿 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### WeChat Channels financial convention: accounts offering insurance services must hold insurance-practitioner or institution verification
- Value: as stated; no identity mismatch, no trading in credentials
- As of: March 2026 (reported 2026-03-26)
- Source: Securities Times (证券时报)
- URL: https://www.stcn.com/article/detail/3699887.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (保险从业者, 机构认证 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: The page carries no in-force date; do not cite April 1, 2026 from this URL.

### Tencent swept financial ads before the September 30, 2026 rules and banned accounts without financial credentials
- Value: as stated
- As of: September 2026
- Source: Shanghai Securities News (上海证券报), via Xinhua (新华网)
- URL: https://www.news.cn/money/20260918/12e005358d6141b294d519190237c823/c.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (金融广告, 无金融资质 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Professional insurance intermediaries: 2,506 at end-2025
- Value: 2,506 intermediary legal entities; 239 insurers
- As of: end-2025, NFRA list reported August 2026
- Source: China Banking and Insurance News (中国银行保险报), via Sina Finance
- URL: https://finance.sina.cn/bank/yhgd/2026-08-14/detail-ininhxpm9280955.d.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (2506 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Internet property insurance 2025: 184.55 billion RMB, intermediaries 72.2%
- Value: 184.55 billion RMB (+17.2%); intermediaries 72.2% (133.32 billion); insurers' own platforms 26%
- As of: 2025, Insurance Association of China report, reported August 2026
- Source: National Business Daily (每日经济新闻), via Sina Finance
- URL: https://finance.sina.com.cn/jjxw/2026-08-19/doc-ininwiep9311904.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (1845.5, 72.2 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Mainland visitors' new office premiums in Hong Kong, 2024: HK$62.8 billion
- Value: HK$62.8 billion, up more than 6%; about 29% of individual new office premiums
- As of: 2024, Insurance Authority release of 2025-04-25
- Source: Cailian Press (财联社)
- URL: https://www.cls.cn/detail/2016452
- Verified 1: 2026-10-15 (ia.org.hk behind a Cloudflare challenge; press used)
- Verified 2: 2026-10-15 (628亿 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: No official mainland-visitor figure exists after 2024 (next entry).

### Hong Kong Insurance Authority stopped publishing the mainland-visitor figure from Q1 2025
- Value: as stated; 2025 gross premiums HK$827 billion (+29.7%)
- As of: April 2026
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.cn/insurance/hydt/2026-04-27/detail-inhvxxww8989618.d.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (未再披露, 8270 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: The same page's 'close to 30%' for 2025 is hearsay (据悉); never cite it.

### Hong Kong IA: licensed HK intermediaries may not solicit in the mainland; buy in Hong Kong in person; zero tolerance on unlicensed selling
- Value: as stated; also a Guangdong agency branch's WeChat account steering readers to HK policies outside its licensed scope
- As of: October 2024
- Source: Beijing News (新京报), via Sina Finance
- URL: https://finance.sina.com.cn/money/insurance/bxdt/2024-10-15/doc-incsrqpv0818946.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (零容忍, 亲身赴港, 不可以在内地招揽保险业务 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: Replaces the IA's own Conduct in Focus Issue 7 page, which failed check 2 (403, no Wayback snapshot).

### CIRC risk warning: buy a Hong Kong policy in Hong Kong in person; one bought in the mainland is an illegal underground policy
- Value: as stated
- As of: April 2016
- Source: Xinhua (新华网), reporting the China Insurance Regulatory Commission (保监会)
- URL: http://www.xinhuanet.com/politics/2016-04/26/c_128930562.htm
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (亲赴香港, 地下保单, 不受内地法律保护 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: Older than twelve months; checked twice for this piece. Still the standing mainland position (21jingji, 2026-05-27).

### Shenzhen and Guangdong NFRA bureaus' campaign against illegal sales of overseas insurance, autumn 2024
- Value: all banks and insurers in their areas
- As of: October 2024
- Source: 21st Century Business Herald (21世纪经济报道)
- URL: https://www.21jingji.com/article/20241014/herald/ff62795fba9d7c2bb4c14d8321b0de57.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (非法销售境外保险产品, 专项治理 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Wealth Management Connect 2.0: in force February 26, 2024; individual quota 3 million RMB (from 1 million); securities firms admitted
- Value: as stated
- As of: February 2024
- Source: China Banking and Insurance News (中国银行保险报), via Sina Finance
- URL: https://finance.sina.com.cn/jjxw/2024-02-29/doc-inaksefw5633240.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (300万, 2月26日, 证券公司 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Wealth Management Connect: 180,000+ participants and 140.3 billion RMB of remittances by end-H1 2026
- Value: as stated (PBOC Guangdong branch deputy head Wu Yansheng)
- As of: July 2026
- Source: China News Service (中新社), on the Liaison Office site (locpg.hk)
- URL: https://www.locpg.hk/20260728/e4509bca49aa4df4868295e8e7616552/c.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (18万, 1403亿 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Internet insurance rules: only licensed insurance institutions; non-insurers may not advise, compare, quote, design cover, handle applications or collect premiums
- Value: CBIRC Order 2020 No. 13, arts. 3 and 23; in force 2021-02-01
- As of: December 2020
- Source: China government portal (中国政府网)
- URL: https://www.gov.cn/zhengce/zhengceku/2020-12/14/content_5569402.htm
- Verified 1: 2026-10-15 (cross-check jrb.hubei.gov.cn)
- Verified 2: 2026-10-15 (其他机构和个人不得开展互联网保险业务, 保费试算, 2021年2月1日 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: Cite the in-force date without an article number for the in-force clause (the fetcher read arts. 82 and 83 inconsistently).

### Financial Product Online Marketing Measures, in force September 30, 2026
- Value: insurance named as a financial product (art. 3); a foreign institution serving domestic residents without a license is illegal financial activity (art. 6); Official Account, livestream and short-video marketing only on the institution's own or legally opened accounts, by its staff (art. 16); PBOC, MIIT, SAMR, NFRA, CSRC, CNIPA, CAC, SAFE, Announcement 2026 No. 9
- As of: April 2026 (in force 2026-09-30)
- Source: Cyberspace Administration of China (国家网信办)
- URL: https://www.cac.gov.cn/2026-04/24/c_1778769008779432.htm
- Verified 1: 2026-10-15 (cross-checks safe.gov.cn 2026-04-24, stcn.com 2026-04-25)
- Verified 2: 2026-10-15 (境外机构未经许可面向境内居民提供金融产品服务, 公众号、直播、短视频, 2026年9月30日 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china

### Consumer lenders' customer acquisition cost: 1,300 to 2,000 RMB; short-video feed about 1,300 (2020) to 2,100 RMB (mid-2024)
- Value: as stated
- As of: March 2025
- Source: Sina Finance (新浪财经)
- URL: https://finance.sina.com.cn/money/bank/bank_hydt/2025-03-31/doc-inerqfeh6932568.shtml
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (1300至2000, 2100 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: Consumer credit, not insurance; use only as a finance-wide comparison.

### Bank-sold insurance over one year: 15-day cooling-off period
- Value: 银保监办发〔2019〕179号 art. 36
- As of: August 2019
- Source: China government portal (中国政府网)
- URL: https://www.gov.cn/zhengce/zhengceku/2019-12/03/content_5457853.htm
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (15日的犹豫期 re-found)
- Used in: how-insurance-and-financial-services-reach-customers-in-china
- Notes: Bank channel only; the China Insurance Security Fund (2024-10-22) gives 10 to 15 days for other channels.

### Re-verified for 07L (no new entry; Used in lines updated)
- Weixin and WeChat combined MAU 1,439 million (Tencent Q2 2026): reused from the ledger, verified twice, within twelve months.
- WeChat overseas-entity verification US$99 (WeChat Open Community, June 2025): re-read through the community JSON API on 2026-10-15; 99美元 re-found.

### Proprietary figure for 07L
- Blue Insurance, 10,000 social media followers in month one and more than 3,000 newsletter sign-ups in week one, from src/content/cases/blue-insurance.md (/work/blue-insurance), re-read 2026-10-15. Label in copy: "published case figures". Hong Kong market, not the mainland; the copy says so.

### Researched for 07L, not used
- Tencent Ads FAQ (tencentads.com/Faq.aspx?id=211) saying overseas financial clients with no entity in China are not accepted: undated rule page, so not citable.
- Insurance Authority Conduct in Focus Issue 7 (ia.org.hk): live site 403 and no Wayback snapshot at check 2; replaced by Beijing News 2024-10-15.
- Insurance cost per lead in dated trade press: none found (a weiyangx range has no date). Sales-cycle survey for insurance: none found.
- Ocean Engine financial admission page: renders empty. Licaitong user figures after 2018: no dated primary page.
- Foreign insurers' assets of 2.82 trillion RMB (September 2024): traces to an EY report (consultancy).
- Full-year 2025 and H1 2026 mainland-visitor premiums in Hong Kong: not published by the Insurance Authority.

## Partner cluster P18 (china-importer-state-owned-private), 2026-10-15

### China's 2025 trade by ownership: private 57.3%, state-owned 13.3%
- Value: private companies 26.04 trillion RMB of imports and exports, up 7.1%, 57.3% of the total; state-owned companies 6.06 trillion RMB, 13.3%; foreign-invested companies 13.27 trillion RMB; more than 780,000 companies with import or export records
- As of: 2025 full year (article dated January 15, 2026)
- Source: People's Daily (人民日报), carried by the Chinese government portal (中国政府网), 《2025年进出口总值达45.47万亿元，同比增长3.8%》
- URL: https://www.gov.cn/lianbo/202601/content_7054775.htm
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15 (re-fetched with curl; all five figures re-found)
- Used in: china-importer-state-owned-private
- Notes: the figures cover imports and exports together, not imports alone. A customs press-conference line that state-owned firms import 2.1 times what they export sits on a customs mirror behind a script challenge; not used.

### Foreign trade operator filing abolished, December 30, 2022
- Value: article 9 of the Foreign Trade Law deleted on December 30, 2022; local commerce departments stopped foreign trade operator filing that day; applicants for licences, technology contract registration, quotas and state trading status no longer have to provide the filing
- As of: January 19, 2023 (MOFCOM press office release)
- Source: Ministry of Commerce (商务部), 《商务部外贸司负责人介绍取消对外贸易经营者备案登记有关情况》
- URL: https://wms.mofcom.gov.cn/ztxx/dwmyzx/dwmyjyzbadj/art/2023/art_897a36464f8044bd90e35d408802da88.html
- Verified 1: 2026-10-15 (curl; WebFetch closed the socket)
- Verified 2: 2026-10-15 (re-fetched)
- Used in: china-importer-state-owned-private
- Notes: the copy says "any company registered in China can import" goods outside state trading; customs registration and category licences still apply.

### Import state trading: nine goods
- Value: import state trading goods are wheat, corn, rice, sugar, tobacco and its products, crude oil, refined oil, fertilizer and cotton; a trader not on the state trading list and without a non-state allowance may not import or export them
- As of: service guide updated August 2021 (page URL path 2023)
- Source: Ministry of Commerce (商务部), 《进出口国营贸易经营资格认定》 administrative licensing service guide
- URL: https://www.mofcom.gov.cn/zwdt/xzxksx/art/2023/art_a210ec25313747eab80abec4543cfc10.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15
- Used in: china-importer-state-owned-private
- Notes: the guide still lists foreign trade operator filing as an application condition; that condition lapsed on December 30, 2022 (entry above). Cite the guide only for the goods list.

### 2026 grain tariff quotas and state trading shares
- Value: wheat 9.636 million t, 90% state trade; corn 7.2 million t, 60%; rice 5.32 million t (266 long-grain, 266 medium and short), 50%; state-trade quota allocated to a company must be imported through a state trading enterprise, and if no import contract is signed by August 15 the company may use any trader with trading rights
- As of: announcement dated September 29, 2025 (NDRC 2025 No. 5, annex 1)
- Source: National Development and Reform Commission (国家发展改革委), 《2026年粮食进口关税配额申请和安排细则》
- URL: https://www.ndrc.gov.cn/xxgk/zcfb/gg/202510/P020251009506531316782.pdf
- Verified 1: 2026-10-15 (PDF text read)
- Verified 2: 2026-10-15 (PDF re-downloaded, figures re-found)
- Used in: china-importer-state-owned-private
- Notes: metric tons. The non-state shares in the copy (10%, 40%, 50%) are the arithmetic complement.

### 2026 sugar tariff quota: 1.945 million t, 70% state trade
- Value: 1.945 million t, 70% state-trade tariff quota; same rule as grain (through a state trading enterprise, own import or any trader after August 15)
- As of: MOFCOM announcement 2025 No. 64, September 30, 2025
- Source: Ministry of Commerce (商务部), 《2026年食糖进口关税配额申请和分配细则》, carried by the Beijing Municipal Commerce Bureau (北京市商务局)
- URL: https://sw.beijing.gov.cn/zwxx/2024zcwj/202510/W020251011615787109423.pdf
- Verified 1: 2026-10-15 (PDF text read)
- Verified 2: 2026-10-15 (re-downloaded)
- Used in: china-importer-state-owned-private

### Central SOE procurement methods (SASAC and NDRC, 2024)
- Value: outside mandatory tendering, central SOEs use one of four methods: 询比 (three or more qualified suppliers each give one fixed price), 竞价 (three or more, multi-round open bidding), 谈判 (two or more, negotiation), 直接采购 (single source, seven listed cases); purchases above a company-set threshold are published on its e-procurement platform or provincial-level media; suppliers may not be restricted by location, ownership, registered capital or years in business
- As of: 国资发改革规〔2024〕53号, July 18, 2024 (State Council Gazette 2024 No. 25)
- Source: SASAC and NDRC (国务院国资委 国家发展改革委), 《关于规范中央企业采购管理工作的指导意见》
- URL: https://www.gov.cn/gongbao/2024/issue_11566/202409/content_6973172.html
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15
- Used in: china-importer-state-owned-private
- Notes: central SOEs only; local SOEs follow their own regulators. The copy does not claim a number of weeks.

### State Council notice on SME payment, 国办发〔2026〕24号
- Value: central SOEs to set out four payment terms (start of the term, method, inspection standard and period, longest term) in contracts, pay SMEs fully in cash and keep a reasonable cash share for large suppliers; where a contract names no method, government bodies and large enterprises pay SMEs in cash, not commercial bills or receivable e-vouchers; e-voucher term capped at six months; large enterprises guided to a 60-day maximum term for SMEs
- As of: September 3, 2026 (released September 10, 2026)
- Source: General Office of the State Council (国务院办公厅), 《关于加强中小企业回款难问题治理有关工作的通知》, Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=106834
- Verified 1: 2026-10-15 (also read on mee.gov.cn, source line 中国政府网)
- Verified 2: 2026-10-15
- Used in: china-importer-state-owned-private
- Notes: protects Chinese SMEs. Never tell a foreign exporter selling from abroad that it is covered.

### SME payment regulation (Decree 802): definition and 60-day term
- Value: SMEs are medium, small and micro enterprises set up inside the PRC under the State Council's size standards (art. 3); large enterprises buying goods, works or services from SMEs pay within 60 days of delivery, or on a reasonable term the contract sets, and may not tie payment to third-party payment (art. 9); in force June 1, 2025
- As of: Decree 802, signed March 17, 2025, published March 24, 2025
- Source: State Council (国务院), 《保障中小企业款项支付条例》
- URL: https://www.gov.cn/zhengce/content/202503/content_7015401.htm
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15
- Used in: china-importer-state-owned-private
- Notes: full text. The interpretation page in the entry "Payment ceiling for large enterprises buying from SMEs" carries the same 60-day rule; this entry adds the art. 3 definition.

### Customs credit: AEO and dishonest enterprise inspection rates (GACC Decree 251)
- Value: AEO (高级认证企业) average import and export inspection rate below 20% of the rate for companies under normal measures (art. 30); dishonest enterprises (失信企业) inspected at 80% or more (art. 31)
- As of: in force November 1, 2021 (decree signed September 13, 2021)
- Source: General Administration of Customs (海关总署), 《中华人民共和国海关注册登记和备案企业信用管理办法》, State Council Gazette 2021 No. 32
- URL: https://www.gov.cn/gongbao/content/2021/content_5651731.htm
- Verified 1: 2026-10-15
- Verified 2: 2026-10-15
- Used in: china-importer-state-owned-private

### Sinopec: 31,195 service stations; convenience-store profit 4.25 billion RMB, 2025
- Value: 31,195 Sinopec-branded service stations at December 31, 2025 (all self-operated); marketing and distribution segment non-fuel profit 4.53 billion RMB, of which convenience-store goods and services 4.25 billion RMB, in 2025
- As of: 2025 annual report, filed March 23, 2026
- Source: Sinopec (中国石化), 2025年年度报告, cninfo
- URL: https://static.cninfo.com.cn/finalpage/2026-03-23/1225024063.PDF
- Verified 1: 2026-10-15 (pp. 17 and 27)
- Verified 2: 2026-10-15 (re-downloaded, both figures re-found)
- Used in: china-importer-state-owned-private
- Notes: the report gives no Easy Joy store count; the 27,000-store figure in the press is not from the filing. Sinopec is not a store operator or a competitor under Part 5.

### Re-verified for P18 (no new entry; add china-importer-state-owned-private to Used in)
- Company Law 2023 (policy.mofcom.gov.cn id=98771): re-fetched 2026-10-15 at both checks; arts. 4 (以其认缴的出资额为限), 13 (子公司具有法人资格，依法独立承担民事责任) and 168 (国家出资公司 = 国有独资公司、国有资本控股公司) read verbatim. Arts. 4 and 168 are new passages on the existing entry.
- Eighth CIIE buyer and matchmaking figures (ciie.org 54275): re-fetched 2026-10-15 at check 2; 14 central SOEs and 20 retail chains and platforms re-found.
- CIIE 2026 overseas professional visitor rules (ciie.org 61239): re-fetched 2026-10-15 at check 2; dates November 5 to 10 and the venue re-found.
- Food Safety Law art. 96 (policy.mofcom.gov.cn id=104105): re-fetched 2026-10-15 at check 2; 进口食品的进口商应当向国家出入境检验检疫部门备案 re-found.
- Credit terms and late payment in mainland China, 2026 (Coface via PR Newswire): re-fetched 2026-10-15 at check 2; 平均为 81 天 and 86% re-found.

### Proprietary figures for P18
- Reused from source 1 of "The proprietary number" (no new entry): "Distributor signature and cross-border launch timing" (three to five months to a signed distributor contract) and "Compass shortlist turnaround" (two to three weeks), both re-read 2026-10-15 in src/content/insights/china-distributor-vs-own-store.md. Labels in copy: "(TheChinaPath distributor sourcing engagements, as published on this site)" and "(TheChinaPath, as published on this site)". Add china-importer-state-owned-private to both Used in lines. A Compass figure on importer ownership was unavailable (no compass-stats.md); no calculator models a general-trade importer.

### Researched for P18, not used
- SASAC central enterprise list (sasac.gov.cn n2641645): needs a script runtime; the piece needs no count.
- CR Vanguard store counts: trade press only, 2023 figures, no filing.
- MIIT sampling of 4.8 trillion RMB owed to SMEs (Q1 2025): trade press relay only, no primary page found.
- 2027 sugar tariff quota, MOFCOM announcement 2026 No. 46 (dated 2026-10-08, page 2026-10-09): 1.945 million t, 70% state trade, unchanged from 2026; figures read on Jiemian (jiemian.com/article/15173481.html, publish-time 2026-10-09) because the MOFCOM attachment needs a browser session; checked once on 2026-10-15. Not in the copy; registered in signal-watch-list.md for 2027-01-04 with the 2027 grain notice.

## Teardown 07T: LEGO China entry, checked October 16, 2026

### LEGO JD storefront observation
- Value: Live JD self-operated flagship with vehicles, licensed collections,
  learning/play and art/lifestyle navigation; six tiles in retrieved ranking
  panel including DUPLO 10914 and Technic. No complete catalog count, numeric
  price or review total exposed in this view.
- As of: October 16, 2026, direct observation; not a publisher-dated statistic.
- Source: JD (京东), LEGO self-operated flagship.
- URL: https://lego.jd.com/view_search-396203-0-1-1-24-11.html
- Verified 1: 2026-10-16, direct HTTP 200, Chinese storefront and product
  names read; evidence saved as jd-check1.html and jd-check1.txt.
- Verified 2: 2026-10-16, separate HTTP 200 request after cadence pass;
  DUPLO and 10914 confirmed, saved as jd-check2.txt.
- Used in: how-lego-entered-china.
- Notes: Ranking positions can change. This is a dated observation by the
  editorial run, not an undated source figure. No sales inferred from ranks.

### LEGO first China sales and regional Lunar New Year launch
- Value: First China sales in 1983; 47 branded stores in 16 cities in
  November 2018; first regional Lunar New Year sets announced for January 1,
  2019 in China and Asia Pacific.
- As of: November 6, 2018.
- Source: LEGO Group, corporate announcement.
- URL: https://www.lego.com/en-gb/aboutus/news/2019/october/steam-courses-for-chinese-schools
- Verified 1: 2026-10-16, web fetch confirmed date, entry year, store/city
  counts and announced product availability after Chinese-language research.
- Verified 2: 2026-10-16, iteration 8 web re-fetch, all claims unchanged.
- Used in: how-lego-entered-china.
- Notes: Migrated URL contains 2019, but page publication date is November
  6, 2018. No first distributor or first marketplace date established.

### LEGO mainland brand flagship and authorized-store network
- Value: First mainland/Asian brand flagship at Shanghai Disneytown,
  May 11, 2016, 800 square meters. In March 2022, seven brand flagships,
  more than 300 authorized stores and more than 85 cities.
- As of: March 18, 2022.
- Source: LEGO Group (乐高集团), Chinese corporate news center.
- URL: https://news.lego.cn/v/news/article?aid=352
- Verified 1: 2026-10-16, direct HTTP 200 read after web-fetch error;
  date and all quantities confirmed, flagship-check1.txt saved.
- Verified 2: 2026-10-16, separate HTTP 200 request, date and flagship
  figures confirmed, flagship-check2.txt saved.
- Used in: how-lego-entered-china.
- Notes: Historical network counts, not October 2026 counts. Flagships
  and authorized stores are different formats. No store economics inferred.

### LEGO Jiaxing inauguration and regional supply remit
- Value: Inaugurated November 25, 2016; approximately 165,000 square meters,
  more than 1,200 employees; expected to produce 70% to 80% of LEGO products
  sold in Asia.
- As of: November 25, 2016.
- Source: LEGO Group, corporate factory-opening announcement.
- URL: https://www.lego.com/en-us/aboutus/news/2019/october/jiaxing-factory-grand-opening
- Verified 1: 2026-10-16, web fetch confirmed figures, date and future-tense
  production expectation. Direct requests received 403; web reader succeeded.
- Verified 2: 2026-10-16, iteration 8 web re-fetch, figures unchanged.
- Used in: how-lego-entered-china.
- Notes: Regional Asia scope, not China-only. Expected share is not actual
  achieved output. Broad euro investment description omitted from draft.

### LEGO Jiaxing production start and RMB 1 billion expansion
- Value: Production began late 2015. RMB 1 billion additional investment
  announced in 2022; 42,000 square meters added; expansion completed in 2024.
- As of: June 26, 2025.
- Source: The Paper (澎湃新闻), Yu Kai reporting interviews with named LEGO
  China executives at a government-organized media session.
- URL: https://m.thepaper.cn/detail/31041417
- Verified 1: 2026-10-16, CIIE repost followed to original; web fetch read
  date, production start and expansion paragraph. 10亿元 converted correctly
  to RMB 1 billion, not RMB 10 billion.
- Verified 2: 2026-10-16, iteration 8 web re-fetch, all facts unchanged.
- Used in: how-lego-entered-china.
- Notes: Announced factory expansion investment, not audited cash spent,
  initial retail launch cost, store marketing cost or China profit measure.

### LEGO China consumer-sales decline in 2023
- Value: Company reports China consumer-sales decline in 2023, attributing
  it to the economic environment; no China percentage in this release.
- As of: March 12, 2024, reporting FY2023.
- Source: LEGO Group, full-year results announcement.
- URL: https://www.lego.com/en-gb/aboutus/news/2024/march/lego-delivered-topline-growth-and-outpaced-market-in-2023
- Verified 1: 2026-10-16, web fetch confirmed China decline and company
  explanation, distinct from global consumer-sales growth.
- Verified 2: 2026-10-16, iteration 8 web re-fetch, same wording and period.
- Used in: how-lego-entered-china.
- Notes: Does not establish a failed store format, avoidable delay, lost
  sales amount or an uninterrupted decline through later years.

### LEGO China demand commentary in August 2026
- Value: CEO describes China as an exception to broad first-half growth,
  cautious consumers and continued brand/store investment. Separate China
  revenue not disclosed. No numerical China growth rate used.
- As of: August 26, 2026, reporting August 25 earnings call.
- Source: Yicai Global (第一财经), Zhang Yushuo, original call reporting.
- URL: https://www2.yicaiglobal.com/news/china-is-only-exception-for-legos-broad-base-revenue-growth-in-first-half-ceo-says
- Verified 1: 2026-10-16, direct HTTP 200 and web fetch; date and quoted
  China commentary read. current-check1.txt saved.
- Verified 2: 2026-10-16, separate HTTP 200 request after cadence pass;
  date, China exception and no separate revenue confirmed, current-check2.txt.
- Used in: how-lego-entered-china.
- Notes: Followed Chinese-language 2026 reporting to this named reporter's
  earnings-call account. Global results and theme-park figures not used.

## Partner cluster P33 (food-importer-china), 2026-10-16

### Food Safety Law: importer checks on suppliers, records, damages and fines
- Value: art. 94, overseas exporters and producers answer for labels and instructions; the importer sets up a system for checking overseas exporters and producers and may not import what fails it; art. 98, importers record each import and sale (name, specification, quantity, production date, batch, shelf life, overseas exporter, buyer); art. 148, ten times the price or three times the loss from the producer, or from a seller that knew, at least 1,000 RMB extra, except label defects that neither affect safety nor mislead; art. 125, unlabeled prepackaged food or a non-compliant label: confiscation plus 5,000 to 50,000 RMB under 10,000 RMB of goods, five to ten times the goods value above; art. 129, an importer without the record system or the exporter and producer check is penalised by customs under art. 126; art. 33(6), storage and transport equipment must meet the temperature and humidity food safety needs
- As of: third amendment, September 12, 2025
- Source: Ministry of Commerce policy database (商务部), Food Safety Law of the People's Republic of China (中华人民共和国食品安全法)
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104105
- Verified 1: 2026-10-16 (curl, every article read verbatim)
- Verified 2: 2026-10-16 (re-fetched in iteration 8; 进口商应当建立境外出口商, 价款十倍或者损失三倍, 增加赔偿的金额不足一千元的, 并处五千元以上五万元以下罚款, 温度、湿度等特殊要求 and the art. 98 record list re-found)
- Used in: food-importer-china
- Notes: same URL as "Food Safety Law: food licensing, importer filing, Chinese label" (arts. 35, 96, 97). Art. 148 binds the seller only where it knew; the producer without that condition. Never print "ten times" without "food that fails a safety standard" and the label exemption.

### Importer, not customs, checks the Chinese label of imported prepackaged food (GACC 2019 No. 70)
- Value: from October 1, 2019 customs dropped first-import label filing and inspects the label as one test item; the importer checks that the Chinese label meets Chinese law and national food safety standards and may not import a failing one; when a shipment is pulled for inspection the importer hands over proof of compliance, the original label with its translation and a Chinese label sample; the 2012 AQSIQ label-filing rule lapsed the same day
- As of: April 22, 2019 (page dated November 2019)
- Source: General Administration of Customs (海关总署), Announcement 2019 No. 70, Chinese government portal (中国政府网)
- URL: https://www.gov.cn/zhengce/zhengceku/2019-11/05/content_5448950.htm
- Verified 1: 2026-10-16
- Verified 2: 2026-10-16 (取消首次进口预包装食品标签备案要求 and 审核不合格的，不得进口 re-found)
- Used in: food-importer-china
- Notes: item 5 leaves cross-border e-commerce, samples and duty-free goods to other rules. Do not cite it for bonded cross-border stock.

### Decree 280 full text: packaging mark, five years, automatic renewal
- Value: registered plants mark their China registration number or the registration number approved by their home authority on the food packaging (art. 14); registration valid five years (art. 15); renews automatically for five years except foods on the no-automatic-renewal list, plants under rectification and countries whose exports are suspended (art. 21); cross-border retail import producers handled under separate rules (art. 30); in force June 1, 2026, repealing Decree 248 (art. 33)
- As of: promulgated October 14, 2025 (page dated October 16, 2025, source line 海关总署)
- Source: General Administration of Customs (海关总署), Decree No. 280 (中华人民共和国海关进口食品境外生产企业注册管理规定), published by the China-Africa SPS Cooperation Information Network (中国-非洲国家SPS合作信息网)
- URL: https://www.chinaafricasps.org/zh/spsj/zfspaqjgjl/fzshspaqzcpxkj/748006255804485.shtml
- Verified 1: 2026-10-16 (articles read verbatim)
- Verified 2: 2026-10-16 (或者所在国家（地区）主管当局批准的注册编号, 注册有效期为5年, 延续期为5年, 2026年6月1日起施行 re-found)
- Used in: food-importer-china, china-distributor-vs-own-store (passage rewritten 2026-10-16 in EN, FR, DE, ES)
- Notes: Decree 248 required the number on inner AND outer packaging; Decree 280 art. 14 says on the food packaging, either number. Any page still stating the 248 marking rule as current is outdated. customs.gov.cn is unreachable from this runner; this mirror carries the GACC source line and the .doc/.pdf links.

### Decree 280 interpretation: one application route, 3 to 12 month renewal window
- Value: the "competent authority recommends" and "company applies" routes merge into company application; foods in the recommended catalogue still attach the home authority's inspection report and recommendation letter (art. 9); a list-registration route for countries with cooperation agreements (art. 17); automatic renewal added (art. 21); renewal applications move from 3 to 6 months before expiry to 3 to 12 months (art. 22)
- As of: October 24, 2025 (source line 海关总署)
- Source: General Administration of Customs (海关总署), interpretation of Decree 280, carried by the Hunan Provincial Government portal (湖南省人民政府门户网站)
- URL: http://www.hunan.gov.cn/zqt/zcjd/bmjd/202510/t20251031_33837720.html
- Verified 1: 2026-10-16
- Verified 2: 2026-10-16 (3至12个月内 and 推荐函 re-found)
- Used in: food-importer-china

### SPC 2024 interpretation on punitive damages for food: label defects
- Value: ten-times damages on the price actually paid when there is no proof the buyer knowingly bought (art. 1); the "defect harms no one" defense fails for a missing mandatory item, a deliberate mislabel, or an error that misleads about safety (art. 6); no punitive damages for listed defects such as irregular font size, foreign text larger than Chinese, typos or translation slips that do not mislead, nutrition-table format slips (art. 8); a knowing buyer is supported only within reasonable consumption (art. 12)
- As of: adopted March 18, 2024, published August 21, 2024, in force August 22, 2024
- Source: Supreme People's Court (最高人民法院), 法释〔2024〕9号
- URL: https://www.court.gov.cn/fabu/xiangqing/440841.html
- Verified 1: 2026-10-16
- Verified 2: 2026-10-16 (故意错标, 外文字号、字高大于中文 and 价款十倍的惩罚性赔偿金 re-found)
- Used in: food-importer-china

### Beijing Dongcheng court: imported wine label, refund plus ten times the price
- Value: January 2024 purchase of four bottles at 888 RMB (3,552 RMB); the Chinese label lacked the production date and the distributor's contact; the Shenzhen distributor named on it said it never sold the wine; the shop could not show customs or inspection papers; judgment: refund 3,552 RMB and ten times the price
- As of: March 13, 2025
- Source: Beijing Daily (北京日报客户端), reporter 安然
- URL: https://xinwen.bjd.com.cn/content/s67d2735de4b08edd28f62950.html
- Verified 1: 2026-10-16
- Verified 2: 2026-10-16 (3552元, 单价888元, 并非这家经销商销售 and 2025-03-13 re-found)
- Used in: food-importer-china
- Notes: the page prints the award as 35220元, which does not equal ten times 3,552 RMB (35,520). Never print the award figure; say "ten times the price".

### GB 31605-2020 cold-chain hygiene standard: logging and temperatures
- Value: transport temperature monitored continuously, recorded at intervals of no more than 10 min (5.4, "宜"); frozen food at or below -18°C and chilled at 0°C to 10°C in transport (5.8); cold store records at most every 30 min (6.1); full-journey temperature record checked at warehouse intake and delivery handovers (4.6)
- As of: issued September 11, 2020, in force March 11, 2021 (posted December 28, 2020)
- Source: National Health Commission and State Administration for Market Regulation (国家卫生健康委 市场监管总局), GB 31605-2020, PDF on the Fuzhou Mawei District Government site (福州市马尾区人民政府)
- URL: https://www.mawei.gov.cn/xjwz/zwgk/zfxxgkzdgz/spypaq/spaqbz/202012/P020201228519962293099.pdf
- Verified 1: 2026-10-16 (fonts do not extract; page 3 rendered and read as an image)
- Verified 2: 2026-10-16 (PDF re-downloaded, byte-identical, md5 c32476267e4004b6b1a5aed303feefa0)
- Used in: food-importer-china
- Notes: a vendor copy at shgps.com extracts as text but is a cold-chain equipment seller's site; cite the government copy.

### Tmall Global food category fee row (proprietary)
- Value: Packaged food, cooking oil, snacks: deposit 50,000 RMB, annual fee 30,000 RMB, commission 2%
- As of: October 2026 (rates per rule.tmall.hk ruleId 11005909, adjustment effective 2026-09-09, checked twice on 2026-10-02 per the source comment)
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, `food` row)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-16 (row read in the file)
- Verified 2: 2026-10-16 (re-read before the draft was finished)
- Used in: food-importer-china

### Re-verified for P33 (no new entry; add food-importer-china to Used in)
- "Recommended-registration catalogue under Decree 280" and "Overseas food producer registration, Decree 280 in force" (gov.cn 2026 No. 27): re-fetched 2026-10-16 at both checks; 坚果与籽类, 燕窝与燕窝制品 and 2026年3月18日 re-found. Also add china-distributor-vs-own-store (its quote now names the two exceptions).
- "GB 7718-2025 effective date and the ban on zero-added claims" (Beijing SAMR): re-fetched 2026-10-16 at both checks; 2027年3月16日 and 不使用 re-found. The page also says the standard was published 2025年3月16日; the draft prints only the effective date, as the ledger note asks.
- "China Food and Drinks Fair, spring 2026 results and autumn 2026 dates" (Xinhua): check 1 by curl 2026-10-16; check 2 the same day through the web reader after Xinhua returned ACCESS DENIED to curl; 6615家, 超41万人次, 3月26日至28日 and 2026年10月15日至17日 re-found.
- "Food Safety Law: food licensing, importer filing, Chinese label" (MOFCOM 104105): arts. 96 and 97 re-read 2026-10-16 at both checks.
- "Distributor signature and cross-border launch timing", "Compass shortlist turnaround" and "Compass shortlist size": re-read 2026-10-16 in src/content/insights/china-distributor-vs-own-store.md and src/content/pages/partner-guides/shared.ts. A Compass figure on food importers was unavailable (no compass-stats.md).

### Researched for P33, not used
- Huaiyang court imported-drink case (hncourt.gov.cn, May 8, 2025): settled at 500 RMB, so it does not illustrate a ten-times award; checked once.
- Shanghai High Court imported-coffee case (hshfy.sh.cn): not fetched; the Dongcheng case carries the point.
- 2027 spring China Food and Drinks Fair date: only booking-agent domains carry one; no official date on 2026-10-16. The copy gives no 2027 date.
- Food Mate GB 7718-2025 allergen explainer: Food Mate sells label services; the Beijing regulator page covers what the piece uses.

## Double 11 last fourteen days (Anchor 08A), October 17, 2026

### Douyin Double 11 2026 rule: registration, sale window, price check, stability, 立减折扣
- Value: registration 2026-09-14 14:00:00 to 2026-11-11 23:59:59; sale 2026-10-15 00:00:00 to 2026-11-11 23:59:59 (same windows for 立减折扣, 一件直降 and the live-room programmes); price-check period 2026-08-31 00:00:00 to 2026-11-11 23:59:59, registered price not above the lowest page price live or scheduled in that period (same item, same-store same item); ban on raising prices ahead of the promotion (为开展促销而故意提前涨价); keep spec, style, price and stock information stable, no arbitrary delisting or edits (4.1.5); 立减折扣 15% in every category, merchant-funded, one of 立减折扣 or 一件直降 per product; shipping judged on daily times; free shipping on event goods (remote regions excepted); 全球购 merchants eligible
- As of: September 30, 2026 (page dated 2026-09-30 16:32:24, 电商运营团队)
- Source: Douyin E-commerce Learning Center (抖音电商学习中心), 《2026年抖音商城双11招商规则》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJqWoaCZesUW
- Verified 1: 2026-10-17 (headless Edge dump-dom on a temporary profile, full rule text read)
- Verified 2: 2026-10-17 (re-rendered with headless Edge at iteration 8; the three windows, 最低页面标价, 为开展促销而故意提前涨价, 不得随意下架或修改商品信息, 所有类目均为15%, 单个商品仅可参与一个活动, 全球购 and the 2026-09-30 date re-found)
- Used in: double-11-last-minute-checklist (and its guide), double-11-preparation-checklist (sale window, added 2026-10-17 in all four locales)
- Notes: this resolves the Sept 22 note that the rule page could not be opened. The rule uses the Aug 31 to Nov 11 check period, not a 30-day or 15-day test. There are no per-phase registration deadlines.

### Douyin Double 11 2026 phases
- Value: 开门红 October 15 to 18; 现货日 and 品类日 October 19 to November 6; 双11狂欢日 November 7 to 11; 28 days, no presale
- As of: October 15, 2026 (14:12:44)
- Source: China National Radio (央广网), 郭彦伟, intern 沈榆洁
- URL: https://www.cnr.cn/mspd/jrhm/20261015/t20261015_527842545.shtml
- Verified 1: 2026-10-17 (curl, quote and date read)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 10月15日至18日, 10月19日至11月6日, 11月7日至11日 re-found)
- Used in: double-11-last-minute-checklist (and its guide)
- Notes: second source for the 28 days: China Business Journal (中国经营报), 李静, on Tencent News, 2026-10-15, https://news.qq.com/rain/a/20261015A08JVH00 (checked once, not cited).

### Tmall Double 11 2026 sign-up and payment times
- Value: presale sign-up Sept 21 12:00 to Oct 15 19:59; deposits Oct 15 20:00 to Oct 20 17:59; final payments Oct 20 20:00 to Oct 25 23:59; spot-goods sign-up closed Oct 19 23:59; spot sale Oct 20 20:00 to Nov 13 23:59
- As of: September 26, 2026 (16:01)
- Source: Ebrun (亿邦动力), Tencent News account
- URL: https://news.qq.com/rain/a/20260926A07D0O00
- Verified 1: 2026-10-17 (curl, quote and date read)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 现货商品报名截止到10月19日23时59分, 尾款支付自10月20日20时持续至10月25日23时59分, 11月13日23时59分 re-found)
- Used in: double-11-last-minute-checklist (and its guide)

### Tmall Double 11 2026 merchant rules: price protection, 48-hour shipping, price warnings, 官方立减
- Value: event goods must offer price protection (价保) and free shipping (some categories excepted); ship within 48 hours with a carrier pickup record, tracking update within 24 hours of pickup; platform warns against price rises during the event, raise-then-cut and abnormal same-SKU prices; 官方立减 storewide on participating categories, minimum 1%, 5% or 15% by category
- As of: September 25, 2026 (15:00)
- Source: Ebrun (亿邦动力) original, republished by Sina Tech (新浪科技)
- URL: https://finance.sina.com.cn/tech/roll/2026-09-25/doc-iniszmmx4463810.shtml
- Verified 1: 2026-10-17 (curl, quote and date read)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 48小时内发货, 先涨后降, 价保服务 re-found)
- Used in: double-11-last-minute-checklist (and its guide)
- Notes: a Tmall price-check window (Sept 6 to Nov 13), a 20% warm-up cap, a Nov 28 price-protection end date and presale price floors appear only on consumer posts and self-media; not citable, not used.

### JD 11.11 2026: no sign-up, dated waves
- Value: JD keeps the no-registration model (免报名), the system picks eligible goods; launch October 12 at 20:00; October 20 超级秒杀日; October 28 超级服务日
- As of: September 25, 2026 (00:09)
- Source: EqualOcean (亿欧网), Tencent News
- URL: https://news.qq.com/rain/a/20260925A004GR00
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 免报名, 10月12日晚8点, 超级服务日 re-found)
- Used in: double-11-last-minute-checklist
- Notes: no JD end date has a citable source (unsourced pages say Nov 11, 13 or 14). Do not print one.

### JD 11.11 2026 price protection
- Value: JD self-operated phones, digital goods and large appliances get 30 days of price protection after receipt; third-party stores per the product page; JD launched spot selling Oct 12 at 20:00 with no deposit presale
- As of: October 13, 2026 (09:20)
- Source: Beijing Business Today (北京商报), reprinted by 21jingji (21经济网)
- URL: https://m.21jingji.com/article/20261013/herald/44527fe3fff27f42ec7414dc9c6a14ea.html
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 签收后30天价保 and 第三方店铺以商品详情页标注为准 re-found)
- Used in: double-11-last-minute-checklist (and its guide)

### WeChat Store 11.11 2026: 35 days, Sept 4 to Nov 15 price reference
- Value: sale October 12 to November 15, 35 days; registration opened September 28; price reference 9月4日至11月15日 普惠到手价, raise-then-cut banned
- As of: September 22, 2026 (15:46)
- Source: Ebrun (亿邦动力), republished by Sina Tech (新浪科技)
- URL: https://finance.sina.com.cn/tech/roll/2026-09-22/doc-inissuii2083775.shtml
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 10月12日启动，持续至11月15日 and 9月4日至11月15日 re-found)
- Used in: double-11-last-minute-checklist (and its guide)
- Notes: complements the ledger's first-party WeChat Store notice entry (2026-09-28), which carries the same check period. No sign-up closing date is published.

### Discount base: lowest transaction price in the 7 days before a promotion (SAMR Order 32, Article 21)
- Value: where a seller does not state the discount base, the base is its lowest transaction price in the same place in the 7 days before the promotion; with no sale in those 7 days, the last transaction price
- As of: Order 32 published October 29, 2020, in force December 1, 2020 (page dated 2020-11-05)
- Source: State Administration for Market Regulation (国家市场监督管理总局), 《规范促销行为暂行规定》
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_cae53a080be2401e8f91c6d6291539f8.html
- Verified 1: 2026-10-17 (curl, Article 21 read)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 第二十一条 and 本次促销活动前七日内最低成交价格 re-found)
- Used in: double-11-last-minute-checklist
- Notes: Article 20 covers disclosure of promotion conditions; the 7-day rule is Article 21.

### No temporary mark-up as the discount base (SAMR Order 56, Article 17)
- Value: a seller may not, without good reason, temporarily and markedly raise the marked price before a discount and use it as the base; Article 16 caps an undetailed comparison price at the 7-day low
- As of: Order 56 published April 14, 2022, in force July 1, 2022 (page dated 2022-04-26)
- Source: State Administration for Market Regulation (国家市场监督管理总局), 《明码标价和禁止价格欺诈规定》
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_9a1f82a007964950a1a0f6c056f2fedf.html
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 第十七条 and 临时显著提高标示价格 re-found)
- Used in: double-11-last-minute-checklist
- Notes: same order as the ledger's gov.cn gazette entry (Article 19); this is the SAMR copy.

### Double 11 2025 parcel volume (State Post Bureau)
- Value: October 21 to November 11, 2025: 13.938 billion parcels collected; 634 million a day, 117.8% of a normal day; single-day peak 777 million, a record
- As of: November 13, 2025 (carrying Xinhua)
- Source: State Post Bureau (国家邮政局)
- URL: https://www.spb.gov.cn/gjyzj/2022wjmtbdbp/202511/c3af3f221f294761a50f6ebfe181e2b6.shtml
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 139.38亿件, 6.34亿件, 117.8%, 7.77亿件 re-found)
- Used in: double-11-last-minute-checklist
- Notes: no 2026 Double 11 forecast from the bureau on 2026-10-17. The bureau's Sept 30, 2026 note (150 billion parcels by Sept 29, 12 days earlier than 2025, https://www.spb.gov.cn/gjyzj/c100015/c100016/202609/741fd554fe1a4d39b6a284ecbc33ed83.shtml) was checked once and cut from the draft for length.

### Ningbo cross-border import declarations forecast, Double 11 2026
- Value: about 12 million cross-border import declarations in Ningbo October 20 to November 14, 2026 (forecast by the Ningbo cross-border service platform); more than 66 million items stocked by key bonded warehouse firms; 5,000-plus companies taking part
- As of: October 16, 2026 (18:59)
- Source: Zhejiang Online (浙江在线)
- URL: https://zjnews.zjol.com.cn/yc/qmt/202610/t20261016_31969295.shtml
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 1200万单 and 6600万件 re-found)
- Used in: double-11-last-minute-checklist
- Notes: a platform forecast, not a customs figure. Say who forecasts it.

### 7-day no-reason return right (Consumer Rights Protection Law, Article 25)
- Value: goods bought online may be returned within 7 days of receipt without a reason (custom-made, perishable, opened digital goods and newspapers excepted); seller refunds within 7 days of receiving the return
- As of: consolidated text as amended October 25, 2013 (page dated 2014-01-02)
- Source: National People's Congress (中国人大网)
- URL: http://www.npc.gov.cn/c1773/c1848/c21114/c21170/c21174/201905/t20190521_210511.html
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 第二十五条 and 七日内退货 re-found)
- Used in: double-11-last-minute-checklist (and its guide)
- Notes: no national ruling says in terms that cross-border retail imports are covered; only Hangzhou Internet Court guidance (Zhejiang Legal Daily, 2024-07-25). The piece does not claim either way.

### Bonded cross-border returns: 30 days to file, 45 days to arrive, tax not levied (GACC Announcement 2020 No. 45)
- Value: a return applied for within 30 days of the declaration list's release, with goods back at the original customs supervision site within 45 days of release, is not taxed
- As of: March 28, 2020
- Source: General Administration of Customs (海关总署), on gov.cn
- URL: https://www.gov.cn/zhengce/zhengceku/2020-03/28/content_5496571.htm
- Verified 1: 2026-10-17 (curl)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 30日内申请退货 and 45日内 re-found)
- Used in: double-11-last-minute-checklist (and its guide)
- Notes: worked dates in the piece: a November 11 release files by December 11 and arrives by December 26.

### Bonded storage and returned-parcel cost at calculator defaults (proprietary, October 2026)
- Value: bonded storage 0.8 RMB per unit per month in all three calculators; pick and pack 4, last mile 11, return handling 15 RMB per parcel (same defaults in all three), so a returned order burns 30 RMB; three months of storage costs 2.4 RMB a unit; one return equals 37.5 unit-months of storage (more than three years)
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro: storage, fulfillment, shipping, returnHandling)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-17 (defaults read from the three files)
- Verified 2: 2026-10-17 (re-read at iteration 8; arithmetic 4 + 11 + 15 = 30, 0.8 x 3 = 2.4, 30 / 0.8 = 37.5 rechecked)
- Used in: double-11-last-minute-checklist
- Notes: model defaults, not a market rate or a client result. Settled fallback for the brief's "last day a price or mechanic can be changed, from operations", which is not on file. Chinese New Year 2027 falls on February 6.

### Re-verified for 08A (no new entry; add double-11-last-minute-checklist to Used in)
- Cross-border 5,000 RMB per transaction and 26,000 RMB per year (MOFCOM, 财关税〔2018〕49号): re-fetched 2026-10-17 at both checks; 5000元 and 26000元 re-found. Also used in its guide.
- Kuaishou Double 11 2026 cycle (Ebrun via Tencent News, 2026-09-19): re-fetched 2026-10-17 at both checks; 收官 and 返场 re-found. The piece prints the closing phase (Nov 8 to 11) and encore (Nov 12 to 15).
- 直播电商监督管理办法, order 117 (State Council Gazette): re-fetched 2026-10-17 for the guide only; 第三十二条, 第三十七条 and 2026年2月1日 re-found.
- Double 11 2025 return rate 61.5% (Beijing Daily carrying CCTV): considered, cut from the draft for length; not used.

### Researched for 08A, not used
- Tmall Global stock: more than 100 million imported items in 100-plus bonded and overseas warehouses (National Business Daily, 陈婷 and 王郁彪, 2026-10-16, https://www.nbd.com.cn/articles/2026-10-16/4606022.html): checked once, cut for length.
- Kuaishou 官方立减 12%, stackable to 25% off (21st Century Business Herald, 2026-09-16): checked once, not used.
- JD service peak Nov 9 to 11 (China.com, 2026-10-15): service categories only, not used.
- Ningbo 2025 first-peak declarations (People's Daily Online Zhejiang, 2025-10-22): checked once, not used.

### Civil Code Arts. 466, 490, 504, 507: language versions, formation by seal or signature, authority, the surviving dispute clause
- Value: Art. 466 para 2, texts in two or more languages agreed to have equal effect are presumed to mean the same; a mismatch is interpreted by the related clauses, nature, purpose and good faith. Art. 490, a written contract forms when both parties sign, seal or fingerprint. Art. 504, a legal representative acting beyond authority binds the company unless the counterparty knew or should have known. Art. 507, a contract's dispute-resolution clause survives invalidity, rescission or termination
- As of: adopted May 28, 2020, in force January 1, 2021
- Source: National People's Congress, Civil Code (中华人民共和国民法典), via the Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=70524
- Verified 1: 2026-10-17 (curl; the four articles found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 推定具有相同含义, 签名、盖章或者按指印, 除相对人知道或者应当知道其超越权限外, 不影响合同中有关解决争议方法的条款的效力 re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: same URL as the Art. 933 and Arts. 562 to 566 entries.

### SPC contract interpretation Art. 22: seals versus authority
- Value: a company cannot escape a contract signed within authority merely because the seal is not its filed seal or is forged; a signature without a seal binds when authority is proven, unless the parties made sealing a condition of formation; a seal without a signature binds when authority is proven
- As of: 法释〔2023〕13号, published December 4, 2023, in force December 5, 2023
- Source: Supreme People's Court (最高人民法院), interpretation of the Civil Code contract general provisions
- URL: https://www.court.gov.cn/zixun/xiangqing/419382.html
- Verified 1: 2026-10-17 (curl; Art. 22 found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 不是备案印章或者系伪造的印章 and 以加盖印章作为合同成立条件的除外 re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: same URL as the liquidated-damages entry (Arts. 64 and 65).

### Civil Procedure Law (2023): court language, translated exhibits, Chinese lawyers, foreign judgments and awards
- Value: Art. 273, courts hearing foreign-related civil cases use the national common language and script, translation at the requesting party's cost; Art. 73, a foreign-language documentary exhibit must carry a Chinese translation; Art. 274, a foreign party that hires a lawyer must hire a PRC lawyer; Art. 299, foreign court judgments are recognized only under a treaty or on reciprocity; Art. 304, foreign arbitral awards go to the intermediate court where the debtor lives or holds property, under treaty or reciprocity
- As of: fifth amendment of September 1, 2023, in force January 1, 2024
- Source: National People's Congress, Civil Procedure Law (中华人民共和国民事诉讼法), text carried by the State Taxation Administration Guangdong bureau (国家税务总局广东省税务局), page dated December 31, 2025
- URL: https://guangdong.chinatax.gov.cn/gdsw/zjfg/2025-12/31/content_bcd30b4a0fbf4de7b4d4c388599a5194.shtml
- Verified 1: 2026-10-17 (curl; Arts. 73, 273, 274, 299, 304 found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; all five clauses re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: the npc.gov.cn copy found by search is the 2012 text; this government copy carries the 2023 numbering.

### CIETAC Arbitration Rules (2024): default language and the foreign-related registration fee
- Value: Art. 84, absent agreement Chinese is the language of arbitration, and CIETAC may set one or more other languages considering the contract's language; Art. 3, CIETAC takes international, foreign-related, Hong Kong, Macau, Taiwan and domestic cases; Fee Schedule I (foreign-related cases), 10,000 RMB registration fee per case on top of a handling fee based on the amount in dispute
- As of: in force January 1, 2024
- Source: China International Economic and Trade Arbitration Commission (中国国际经济贸易仲裁委员会), Arbitration Rules (2024)
- URL: https://www.cietac.org/articles/25022
- Verified 1: 2026-10-17 (curl; Art. 84, Art. 3 and Fee Schedule I note 1 found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 以中文为仲裁语言 and 每案另收立案费人民币10,000元 re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: the handling-fee brackets render as images on cietac.org and are not printed. The CIETAC Hong Kong Arbitration Center charges HKD 8,000 registration under Fee Schedule III (same page); not used.

### HKIAC 2024 Rules: registration and administrative fees
- Value: non-refundable registration fee HKD 10,000 (Art. 4.4 and Schedule 1); administrative fee HKD 15,000 on a sum in dispute up to HKD 400,000, HKD 21,780 plus 1.43% of the amount over 400,000 up to HKD 800,000 (HKD 27,500 at HKD 800,000), HKD 27,500 plus 1.10% over 800,000 up to HKD 4,000,000; HKIAC posts a fee calculator next to the schedule
- As of: 2024 Schedule of Fees, applicable from January 1, 2026
- Source: Hong Kong International Arbitration Centre
- URL: https://hkiac.org/arbitration/fees/2024-schedule-of-fees/
- Verified 1: 2026-10-17 (curl with a browser user agent; plain curl returns 406)
- Verified 2: 2026-10-17 (re-fetched at iteration 8 and again at the quality pass for the administrative-fee table; HKD 10,000 and the table rows re-found)
- Re-checked: 2026-10-18 at the publish run (curl with a browser user agent): page title "2024 Schedule of Fees (Applicable from 1 January 2026)", HKD 10,000 under Art. 4.4 and Schedule 1, and the 15,000 / 21,780 + 1.4300% / 27,500 + 1.1000% rows re-found
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: arithmetic 21,780 + 1.43% x 400,000 = 27,500 matches the next band's base.

### Mainland and Hong Kong arrangement on interim measures in aid of arbitration (2019)
- Value: Arts. 1 to 3, Hong Kong-seated arbitration administered by a listed institution; before the award a party may apply to the mainland intermediate court where the respondent lives or where its property or evidence sits, for property, evidence or conduct preservation; the first arbitration-preservation arrangement the mainland signed with any jurisdiction
- As of: signed April 2, 2019 (page dated 2019-04-02)
- Source: Supreme People's Court (最高人民法院), 关于内地与香港特别行政区法院就仲裁程序相互协助保全的安排
- URL: https://www.court.gov.cn/shenpan/xiangqing/149552.html
- Verified 1: 2026-10-17 (curl; Arts. 1 to 3 and the signing date found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; 应当以香港特别行政区为仲裁地 and 在仲裁裁决作出前 re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: the in-force date (October 1, 2019) is not on this page; the piece says "a 2019 arrangement" only.

### Hong Kong arbitration: 177 interim-measure applications, 48 mainland courts, 27.8 billion RMB frozen
- Value: by September 2025 Hong Kong arbitral institutions had handled 177 applications under the Arrangement across 48 courts; approved property preservation covered assets worth more than 27.8 billion RMB; Hong Kong is the first and only common-law jurisdiction outside the mainland with this route
- As of: speech of November 12, 2025 (data to September 2025)
- Source: Department of Justice (律政司), Hong Kong SAR Government, Secretary for Justice speech at the opening of the Beijing International Arbitration Court Hong Kong centre
- URL: https://www.doj.gov.hk/sc/community_engagement/speeches/20251112_sj1.html
- Verified 1: 2026-10-17 (curl; 177宗, 48个法院, 278亿元人民币 found)
- Verified 2: 2026-10-17 (re-fetched at iteration 8; same figures and the date re-found)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: an HKIAC-only figure (145 applications, 24.7 billion RMB preserved to end-2024) surfaced in search summaries; not checked against an HKIAC page, not used.

### First-year Tmall Partner bill at calculator defaults (proprietary, October 2026)
- Value: 35,000 RMB monthly retainer x 12 = 420,000 RMB plus 10% commission on 3,500,000 RMB year-one GMV = 350,000 RMB, so 770,000 RMB in year one (about 108,000 USD at the calculator's 7.1 rate)
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro lines 18, 21, 23: gmv 3500000, dpRetainer 35000, dpCommission 10; fx 7.1)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-17 (defaults read from the file)
- Verified 2: 2026-10-17 (re-read before the draft was finished; 420,000 + 350,000 = 770,000 and 770,000 / 7.1 = 108,451 rechecked)
- Used in: china-distribution-contract-chinese-language-arbitration
- Notes: model defaults, not a market rate or a client result. Settled fallback for a missing Compass figure (no compass-stats.md). Annualises the 64,167 RMB average month in the "TP transition-month cost" entry.

## Baby care and diapers cost research (Ledger 08L, cost-to-sell-baby-care-and-hygiene-products-in-china), October 18, 2026

### Tmall Global baby care rates: 婴童尿裤 2%, 婴童洗护 2%, 30,000 RMB annual fee
- Value: 母婴 rows of the category fee table: 婴童尿裤 2% / 30,000; 婴童洗护 2% / 30,000; 婴童用品 2-5% (背带/学步带/出行用品 5%, 汽车安全座椅 3%, 童床/婴儿床 5%, 手推车 5%, 其他二级类目 2%) / 30,000; 奶粉/辅食/营养品 婴幼儿营养品 3%, other 2% / 30,000; 童装, 童鞋 and toys 5% / 60,000
- As of: adjustment posted 2026-09-03, in force 2026-09-09
- Source: Tmall Global (天猫国际), 《天猫国际各类目年费、技术服务费率》
- URL: https://rule.tmall.hk/?type=detail&ruleId=11005909&cId=625 (render with the hash route #/rule/detail?ruleId=11005909&cId=625)
- Verified 1: 2026-10-18 (rendered with headless Edge, 256 rows parsed)
- Verified 2: 2026-10-18 (re-rendered at iteration 8; 婴童尿裤 2%, 婴童洗护 2% and the 2026年9月3日公示通知 clause re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: confirms the calculator row "Infant formula, diapers and baby care" (50,000 / 2% / 30,000) for diapers and baby wash; infant nutrition products sit at 3%.

### Tmall Global deposit: mother and baby other than infant milk, 50,000 RMB flagship, 100,000 specialty store or TM brand
- Value: 母婴 其他一级类目 (and 奶粉/辅食 其他类目): 品牌旗舰店 50,000, 专卖店 50,000, 专营店 100,000, 卖场旗舰店 150,000 RMB; infant milk powder lines 300,000 for 专营店 and 卖场旗舰店; a flagship or 专卖店 for a TM (unregistered) mark pays a 100,000 RMB base deposit
- As of: changed 2026-05-06, in force 2026-05-12
- Source: Tmall Global (天猫国际), 《天猫国际平台保证金规则》
- URL: https://rule.tmall.hk/?type=detail&ruleId=8942&cId=625
- Verified 1: 2026-10-18 (rendered, hash route)
- Verified 2: 2026-10-18 (re-rendered; 其他一级类目 row and 基础保证金为人民币10万元 re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china

### Tmall Global 2026 annual-fee incentives touch only the 60,000 RMB band; diapers and baby wash are outside
- Value: ruleId 20010440 waives the annual fee for new stores (launched 2026-04-01 to 2027-03-31) whose main category is in the 60,000 tier; the mother-and-baby lines named are toys (玩具/童车/益智/早教/游乐设备, 潮玩模玩, 毛绒玩偶, 拼搭/积木) and children's clothing and shoes; ruleId 20010439 cuts the 60,000 tier to 30,000 for other new and second-year stores. Neither changes the 30,000 tier, where 婴童尿裤 and 婴童洗护 sit.
- As of: both posted 2026-07-16
- Source: Tmall Global (天猫国际), 《2026年天猫国际新商家 服饰/母婴/家居部分类目技术服务年费 特殊激励计划》 and 《2026年天猫国际新商家及次新商家技术服务年费激励计划》
- URL: https://rule.tmall.hk/?type=detail&ruleId=20010440&cId=625 (and ruleId=20010439)
- Verified 1: 2026-10-18 (rendered)
- Verified 2: 2026-10-18 (re-rendered; the 6万元/年 ... 予以免除 clause and the toy and clothing lists re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china (20010440 cited)
- Notes: same pages as the September 30 entry "Tmall Global 2026 annual fee incentives"; this entry adds the mother-and-baby list.

### JD Worldwide mother and baby: 婴童洗护 2%, other lines 2%, US$5,000 deposit at every GMV tier
- Value: 母婴 婴童洗护 驱蚊用品 (婴儿蚊香液、婴儿防蚊喷雾) 3.50%, other 婴童洗护 lines 2.00%; 童车童床 3%, 安全座椅 3%, 童装 5%, 童鞋 5%; 母婴 其他二级类目 2.00%; deposit 5,000 USD in all four GMV columns and 5,000 USD flagship; 交易服务费 0.90%
- As of: revised 2026-09-24, in force 2026-10-01
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台各类目资费标准》
- URL: https://jdw-rule.jd.hk/detail?ruleId=950583665543483392
- Verified 1: 2026-10-18 (rendered with headless Edge; rows 43 to 52 read with rowspans)
- Verified 2: 2026-10-18 (re-rendered; 婴童洗护, 2.00% / 0.90% and the revision clause re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: diapers have no named row and fall under 母婴 其他二级类目 (2%). Same rule as the October 2 calculator-audit entry; this entry adds the mother-and-baby rows.

### Douyin Global mother and baby: 3% base, 3.9% channel supplement
- Value: 母婴宠物 > 母婴用品: 其他二级类目 3.00% base + 3.90% supplement on specified-channel orders; 婴童床品 6% + 4%; 孕产妇 防辐射用品 6% + 4%; 出行用品 lines 3% to 6%
- As of: schedule posted 2026-07-15
- Source: Douyin E-commerce (抖音电商), 《【全球购】技术服务费费率标准》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn
- Verified 1: 2026-10-18 (rendered with headless Edge, 146 rows)
- Verified 2: 2026-10-18 (re-rendered; 母婴用品 and 其他二级类目 3.00% 3.90% re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: diapers and baby wash have no named row; the 3% applies to mother-and-baby goods the schedule does not single out, and the copy says so. The channels (Douyin Mall app, Doubao) are named in 《【全球购】招商管理规则》 (article 108056), re-rendered 2026-10-18 (抖音商城 and 豆包 present). The calculator's Douyin "Baby products, toys" row (4.5%) is a midpoint across toy and baby lines; the piece uses the rule's 3% and links the Tmall Global calculator in block 7.

### Children's cosmetics regulation: 12 and under, family claims count, gold shield mark, formula limits
- Value: 儿童化妆品 = cosmetics for children aged 12 and under (art. 3); products labeled 适用于全人群 / 全家使用 or hinting at children by trademark, picture, pun, letters or pack shape are managed as children's cosmetics; the NMPA children's mark on the 销售包装展示面 and a 应当在成人监护下使用 warning (art. 6); no ingredients for 祛斑美白、祛痘、脱毛、除臭、去屑、防脱发、染发、烫发 (art. 7); safety assessment and necessary toxicology tests accounting for children's physiology (art. 8); no 食品级 / 可食用 on the label (art. 13); online sellers show the mark on the product page (art. 15); scope is production and sale 在中华人民共和国境内 (art. 2); in force 2022-01-01 (art. 22)
- As of: NMPA Announcement 2021 No. 123, September 30, 2021; in force January 1, 2022
- Source: NMPA (国家药监局), 《儿童化妆品监督管理规定》, via the Fujian Provincial Medical Products Administration (福建省药品监督管理局)
- URL: https://yjj.scjgj.fujian.gov.cn/hzp/flfg/202111/t20211103_5764150.htm
- Verified 1: 2026-10-18 (curl; full text read)
- Verified 2: 2026-10-18 (re-fetched; nine quoted strings re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: no regulator text found on whether the mark applies to cross-border retail imports; copy does not claim either way. The labeling timetable (compulsory for filings from May 1, 2022; relabel by May 1, 2023) is on the Beijing municipal government's copy of the announcement, https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/202204/t20220412_2674380.html, checked twice on 2026-10-18 (both strings re-found on the second fetch) and cut from the final draft for length.

### Baby diapers on the cross-border retail import list, line 1410
- Value: serial 1410, 96190011 婴儿尿布及尿裤, no remark (so not bonded-only); 476 34013000 洁肤用的有机表面活性产品 (liquid skin cleansers); 456 33049900 其他美容品或化妆品及护肤品; 457 33051000 洗发剂
- As of: list 2019 edition, MOF and 12 bodies Announcement 2019 No. 96, in force January 1, 2020
- Source: Ministry of Finance (财政部); list PDF as published by MOFCOM
- URL: https://images.mofcom.gov.cn/cws/202001/20200110143527533.pdf
- Verified 1: 2026-10-18 (PDF downloaded; text extracted with PyMuPDF; pdftotext drops the CJK)
- Verified 2: 2026-10-18 (re-downloaded and re-extracted; the four lines re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: updates the September 16 note "never cite either URL for a specific HS code": the PDF's per-line text is readable with PyMuPDF (python fitz), so a specific line can now be cited from it. The 2022 adjustment added lines; it removed none of these.

### Diaper standards: GB/T 28004.1-2021, GB 15979-2024, GB 43631-2023; none limits formamide
- Value: diapers follow GB/T 28004.1-2021 (recommended) and two mandatory standards, GB 15979-2024 (disposable hygiene products) and GB 43631-2023 (children's paper goods); none sets a formamide test or limit; GB 15979-2024 bars adding substances banned under the cosmetics safety technical code
- As of: June 2026 (article 2026-06-23 00:09)
- Source: Beijing Business Today (北京商报), 张君花, 《纸尿裤国标"待更新"》
- URL: https://xinwen.bjd.com.cn/content/s6a395e37e4b03fa51a804136.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched; the three standard numbers and the date re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china

### GB 43631-2023: children's paper goods, 6 and under, diapers and wipes, in force January 1, 2025
- Value: mandatory; published 2023-12-28, in force 2025-01-01; covers paper goods produced or sold in China for children aged 6 and under, including 婴儿纸尿裤（片、垫）and 湿巾; limits include heavy metals, formaldehyde, phthalates; administered by MIIT
- As of: SAMR record (published 2023-12-28); China Paper Network article 2024-07-26
- Source: China Paper Network (纸业观察网, paper.com.cn); dates confirmed on the SAMR national standards platform (全国标准信息公共服务平台)
- URL: https://www.paper.com.cn/news/daynews/2024/240726094901770836.htm ; https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=72C3177FEB44670F5540E69C242901A6
- Verified 1: 2026-10-18 (both fetched; the paper.com.cn page is GBK)
- Verified 2: 2026-10-18 (both re-fetched; scope, limits and dates re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china

### GB 15979-2024: mandatory hygiene standard for disposable sanitary products, in force July 1, 2025
- Value: published 2024-06-25, in force 2025-07-01, administered by the National Disease Control and Prevention Administration (国家疾控局); adds terms for 卫生湿巾, pH and migratable fluorescent whitening agent limits
- As of: June 2024; Beijing News article 2024-07-17
- Source: SAMR national standards platform; Beijing News (新京报), citing SAMR
- URL: https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=75F8AECE33CDEB23A59C06ECFC69A39F ; https://m.bjnews.com.cn/detail/1721192807129140.html
- Verified 1: 2026-10-18 (both fetched)
- Verified 2: 2026-10-18 (both re-fetched; number, dates, 卫生湿巾 and the 2024-07-17 dateline re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china (the standard is named inside the Beijing Business Today quote; its in-force date was cut for length)

### Infant diaper formamide investigation: 168 makers, 180 brands, 368 batches, none detected
- Value: joint team of SAMR, MIIT, NHC and NDCPA set up 2026-06-22; NDCPA sampled all 168 domestic infant diaper makers (contract makers included), 180 brands, 368 finished-product batches plus 32 part batches, no formamide; on-site checks found the plants met the 消毒产品生产企业卫生规范; blood-test claims ruled unreliable
- As of: October 15, 2026, 16:00
- Source: State Administration for Market Regulation (市场监管总局), joint notice
- URL: https://www.samr.gov.cn/xw/zj/art/2026/art_e87254f9f3e8478d846182eb08fc2b63.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched; 168家, 180个品牌368批次, 均未检出甲酰胺, 消毒产品生产企业卫生规范 re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: covers domestic plants only; the notice says nothing about imported diapers. Guangming Online carried the CCTV version the same day (https://m.gmw.cn/2026-10/15/content_1304575760.htm).
- Re-checked: 2026-10-18 at the publish run (plain curl now gets a script shell, so read with headless Edge on a private temporary profile): 国家疾控局组织各地疾控部门 sampled all 168 makers, and 国家疾控局立即部署地方疾控部门对全部168家 ... 进行现场监督检查, 受检企业均符合消毒产品生产企业卫生规范要求. This supports the piece's line that the disease-control authority inspected every domestic plant.

### China births: 7.92 million in 2025
- Value: 2025 births 792万, birth rate 5.63‰ (2024: 954万, 6.77‰, on the previous communiqué)
- As of: communiqué of February 28, 2026 (2024 figure: communiqué of February 28, 2025)
- Source: National Bureau of Statistics (国家统计局)
- URL: https://www.stats.gov.cn/sj/zxfbhjd/202602/t20260228_1962662.html (2024: https://www.stats.gov.cn/sj/zxfb/202502/t20250228_1958817.html)
- Verified 1: 2026-10-18 (both fetched)
- Verified 2: 2026-10-18 (both re-fetched; 全年出生人口792万人 and 全年出生人口954万人 re-found)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china (2025 figure only)

### Baby care cost per kept order and the repeat table (proprietary)
- Value: Tmall Global model per-order defaults (2% commission, 1% payment fee, 4 RMB pick and pack, 11 RMB last mile, 5% return rate, 15 RMB return handling plus the 11 RMB leg back): per 100 parcels, a 400 RMB diaper four-pack costs 2,770 RMB (29 RMB per kept order, 7.3%), a 160 RMB baby wash twin pack 2,086 RMB (22 RMB, 13.7%); at an assumed 40% gross margin a kept diaper order contributes 131 RMB (130.84); parents needed to cover the 30,000 RMB annual fee: 230 at one order a year, 58 at four, 29 at eight (contribution per parent 131 / 523 / 1,047); about 230 kept orders or 92,000 RMB of sales covers the fee; cash before the first sale 80,000 (Tmall Global) and 35,500 (JD Worldwide), a gap of 44,500
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro and jd-worldwide-setup-and-run.astro)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-18 (computed from the arrays and the logistics defaults)
- Verified 2: 2026-10-18 (recomputed after the quality pass)
- Used in: cost-to-sell-baby-care-and-hygiene-products-in-china
- Notes: basket prices, the 40% margin and the orders-per-parent values are stated assumptions, not market data.

### Re-verified on 2026-10-18 for 08L (existing entries, add the slug to their Used in)
- Cross-border retail imports supervised as personal-use goods, and the risk notice (商财发〔2018〕486号, gov.cn): re-fetched twice; 按个人自用进境物品监管，不执行有关商品首次进口许可批件、注册或备案要求 and 可能无中文标签 present.
- Cross-border retail import tax, 0% duty and 70% (财关税〔2016〕18号, mof.gov.cn): re-fetched twice; 关税税率暂设为0% and 暂按法定应纳税额的70%征收 present.
- Cosmetics consumption tax, 15% on high-end and the 10 RMB per milliliter line (财税〔2016〕103号, Shanghai tax service): re-fetched twice; the scope sentence also names 成套化妆品, which the piece flags for boxed gift sets.
- Cosmetics Supervision and Administration Regulation, special vs general (Decree 727, gov.cn gazette): re-fetched twice; article 16 sentence present.
- Animal testing exemption and its 产品宣称婴幼儿和儿童使用的 exclusion (NMPA 2021 No. 32, Fujian MPA): re-fetched twice.
- Product Quality Law art. 27 (CNIPA): re-fetched twice; 有中文标明的产品名称、生产厂厂名和厂址 present.
- Douyin Global base deposit 500 / 2,000 / 5,000 (article 107821): re-rendered twice; tier table present.
- Tmall Global diaper-rash guarantee (ruleId 5510): re-rendered; linked through the 06S article, not cited directly.

### Researched for 08L, not used
- Baby wipes managed as cosmetics: only undated or self-media pages; not published.
- Whether the children's cosmetics mark applies to cross-border imports: no regulator text either way.
- Douyin's 【儿童化妆品商品发布及宣传】实施细则 and a Tmall children's cosmetics listing rule: not tied to 全球购 or Tmall Global on the pages found.
- A typical diaper order value and a category repeat rate: no dated primary source.


## Partner cluster P35 (douyin-affiliate-commission-brand), 2026-10-18

### Douyin group-leader plans: creator rate plus leader fee capped at 90%
- Value: in the 招商团长 and 托管团长 plans the merchant sets the creator commission (5% to 90%) and the group leader's service fee; the two together may not exceed 90%; the leader pays Douyin a technical service fee of 10% of its fee; leader fees follow the same settlement (15 days after receipt, cancelled on refunds inside the after-sale period). The platform-activity and fee-paid order (稿费商单) plans also run 5% to 90%
- As of: October 2026 (page stamped 2026-10-12 13:50:26; revision published 2026-07-30, in force 2026-08-05)
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, sections 2.1.1 and 2.3.1
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-10-18 (headless Edge on a private temporary profile; 与推广费合计最高不超过90% present)
- Verified 2: 2026-10-18 (re-rendered at iteration 8; 与推广费合计最高不超过90%, 5%-80%, X=40%, 确认收货的15天后 and the 2026-10-12 stamp re-found)
- Used in: douyin-affiliate-commission-brand; douyin-livestream-agency-vs-dp
- Notes: the page's date stamp moved from 2026-08-08 to 2026-10-12 since the P04 entries; the open (5% to 50%), named-creator (5% to 80%), creator technical service fee (10% / 20% / 40%) and settlement figures are unchanged. Cite it as "October 2026" from now on.

### Douyin cooperation orders: slot fees must go through the platform; pro-rata or flat
- Value: a creator who charges a service fee for a livestream (即"坑位费") must collect it through the 精选联盟 cooperation-order function; private collection is a violation. Payment options: pure commission (no service fee); pro-rata service fee (agreed settled sales 500,000 RMB, fee 10,000 RMB; creator settles 100,000 RMB, merchant pays 20%, 2,000 RMB); flat fee (一口价): paid in full if the creator goes live, refunded to the merchant if not, unrelated to settled sales. Order terms can include creator, format, product, service fee, commission, minimum settled sales, live window, live duration and ad spend. Breaches include taking the fee without selling and missing the agreed settled sales under a refund clause without refunding
- As of: September 2022 (first issued 2022-02-15, revised and in force 2022-09-13)
- Source: Douyin E-commerce (抖音电商), 《精选联盟合作订单管理规则》, sections 1.3.1, 2.4, 2.5 and 3.1
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHQ7HZ64PRXs
- Verified 1: 2026-10-18 (headless Edge)
- Verified 2: 2026-10-18 (re-rendered at iteration 8; 即"坑位费", 等比例服务费, 50万元，服务费1万元, 2千元, 一口价服务费, 如创作者未开播则服务费退还到商家账户, 2022年09月13日 re-found)
- Used in: douyin-affiliate-commission-brand
- Notes: section 1.3.2 also requires L5-and-up creators selling flagship-store goods to use cooperation orders; that clause dates from 2022, before the 2026 level scheme, so it is not printed.

### Douyin creator levels L0 to L6 by monthly settled sales
- Value: levels set on the 8th of each month from last month's settled sales (paid amount minus refunds within 7 days minus abnormal orders): L0 0; L1 up to 30,000 RMB; L2 30,000 to 300,000; L3 300,000 to 1 million; L4 1 to 3 million; L5 3 to 10 million; L6 10 million and up
- As of: March 2026 (first in force 2022-04-11, latest revision 2026-03-08)
- Source: Douyin E-commerce (抖音电商), 《抖音电商创作者等级管理规则》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHRbnsP5fSGu
- Verified 1: 2026-10-18 (headless Edge)
- Verified 2: 2026-10-18 (re-rendered at iteration 8; 七个级别（L0~L6）, 30万<结算金额≤100万, 300万<结算金额≤1000万, 1000万及以上, 未来7日内, 2026年3月8日 re-found)
- Used in: douyin-affiliate-commission-brand

### Creator cost ratio of 35% and up; big hosts rarely under 20% commission
- Value: from mid-tier creators up, slot fee, commission and ad budget come to at least 35% of creator sales, above 50% for some merchants (food, beauty, apparel); a merchant: big hosts' commission is generally not below 20%, with the lowest price required in a signed agreement; larger merchants sign yearly guaranteed deals on GSV after returns, with extra sessions or pro-rata refunds if missed; top hosts charge about 1 to 3 million RMB for a dedicated session
- As of: July 16, 2025
- Source: Ebrun (亿邦动力), 廖紫琳, edited by 董金鹏, carried by Huxiu (虎嗅)
- URL: https://m.huxiu.com/article/4584498.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched at iteration 8; 达播费比至少35%以上, 50%以上, 大主播佣金一般不低于20%, 按比例退费, 2025-07-16 re-found)
- Used in: douyin-affiliate-commission-brand
- Notes: Ebrun's own m.ebrun.com/586371.html is a column digest of the same piece. The article's 2021 and 2024 creator share of Douyin GMV (48% to 30%) carries no source inside it; not cited.

### Top hosts' commission from beauty brands: 30% to 40%
- Value: industry insiders: top hosts take 30% to 40% commission from beauty brands, lower for international majors, above 40% for some lesser-known domestic brands, plus a separately charged slot fee
- As of: December 24, 2024
- Source: Jiemian (界面新闻), carrying China Entrepreneur (中国企业家)
- URL: https://www.jiemian.com/article/12159813.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched at iteration 8; 30%~40%, 突破40%, 另外单收的坑位费, 2024/12/24 re-found)
- Used in: douyin-affiliate-commission-brand
- Notes: cross-platform, not Douyin-specific; the article's context is a Taobao host. Copy says "China's top hosts".

### Slot-fee case: guarantee held, 160,000 of 200,000 RMB refunded (Beijing No. 3 Intermediate Court)
- Value: 40,000 RMB service fee per product, guaranteed 50,000 RMB of sales per link (ROI 1:1.25), five products, 200,000 RMB in slot fees; actual sales under 4,000 RMB; the guarantee clause was valid and the court ordered 160,000 RMB refunded, reduced for the brand's late and flawed script
- As of: November 14, 2022
- Source: Beijing Political-Legal Net (北京政法网), 董振杰, on bj148.org
- URL: https://www.bj148.org/sa1/yasf1/202211/t20221114_1641568.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched at iteration 8; 4万元的服务费, 保底销售额5万元, 20万元的坑位费, 不到4000元, 退还坑位费16万元 re-found)
- Used in: douyin-affiliate-commission-brand
- Notes: the report does not name the platform. A Guangming Online copy (m.gmw.cn/2022-11/10/content_1303191012.htm) returned 404 on 2026-10-18.

### Slot-fee case: no guarantee, 9,000 RMB damages on a 45,000 RMB fee (Beijing No. 2 Intermediate Court)
- Value: slot fee 45,000 RMB plus a 15,000 RMB deposit, 8 to 10 minutes of explanation on air; the contract excused the agency from missed sales, and its full-refund clause applied only to fundamental breach; partial defects found (no co-host, short airtime); damages set at 9,000 RMB
- As of: February 27, 2024
- Source: Beijing News (新京报)
- URL: https://m.bjnews.com.cn/detail/1709017633168842.html
- Verified 1: 2026-10-18 (curl)
- Verified 2: 2026-10-18 (re-fetched at iteration 8; 4.5万元, 保证金1.5万元, 8-10分钟, 9000元违约金 re-found)
- Used in: douyin-affiliate-commission-brand
- Notes: the report says 某自媒体平台, not which platform.

### Creator commission at the Douyin calculator defaults and the slot-fee break-even (proprietary)
- Value: at the defaults (RMB 2,000,000 first-year GMV, RMB 250 average order, creators 80% of sales, creator commission 20%, FX 7.1): creator commission RMB 320,000 a year (about US$45,000), 16% of GMV, RMB 50 per creator order, 6,400 creator orders. With a RMB 45,000 slot fee (the Beijing No. 2 case) on top of 20% commission at RMB 250: per kept order 200.00 at 300 kept orders (80% of the order), 125.00 at 600 (50%), 100.00 at 900 (40%), 72.50 at 2,000 (29%); the fee equals the commission at 900 kept orders, RMB 225,000 of kept sales; 1,000 placed orders at 30% returns keep 700, at RMB 114.29 each
- As of: October 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro (gmv 2000000, aov 250, kolShare 80, kolCommission 20, fx 7.1)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-18 (defaults read from the source)
- Verified 2: 2026-10-18 (recomputed after the quality pass)
- Used in: douyin-affiliate-commission-brand
- Notes: the session volumes and the 30% return rate are illustrations, not market data or client results. Commission on kept orders only follows Douyin's settlement rule; the calculator itself books creator commission on gross sales.

### Re-verified on 2026-10-18 for P35 (existing entries, add the slug to their Used in)
- Douyin affiliate creator commission ranges by strategy (articlev0/112620): re-rendered twice; 5%-50%, 5%-80% present, page now stamped 2026-10-12.
- Creator commission settlement: 15 days after receipt, refunds clawed back (articlev0/112620): re-rendered twice; 确认收货的15天后 and the cross-border base (-运费金额-税费金额-) present.
- Historical dedicated-host event fee example (Xinhua, 2024-08-04): re-fetched twice; 100万-300万, 50万-100万 and the 商品露出的费用 definition present. The quote's 10% to 20% commission is not used in this piece.

### Researched for P35, not used
- Shenzhen Guangming court, 11-session mooncake livestream deal, 29,800 RMB fee, zero sales, full refund under a pro-rata clause (金羊网 on Tencent News, 2026-08-31, https://news.qq.com/rain/a/20260831A0930E00): the two Beijing cases already carry the point.
- SPC platform-economy typical cases (court.gov.cn 507691, 2026-08-03): no slot-fee case among the five.
- A 2026 head-host share of livestream GMV seen only in a search summary: no traceable original.

## Signal 07S and watch-list closures, 2026-10-19

### Douyin warranty reserve, formal October rule
- Value: scope covers domestic and Global Purchase merchants. Warranty reserve covers settled, unrefunded orders inside platform three-guarantee periods or merchant-promised warranties (including product-page and livestream promises). Rates vary by store refund-and-compensation performance, category and time band. Without sufficient data: category average OR a fixed rate of at most 1.5%; the copy does not impose that ceiling on the separate category-average alternative. Floors RMB 200/500/1,000 per leaf category; warranty caps RMB 50,000/100,000 per store, as displayed in the back end. Holds release as covered warranties expire; other reserve types may be taken at the higher or combined amount.
- As of: October 15, 2026, 15:11:40; clause 3.1 says revised and effective October 15, 2026.
- Source: Douyin E-commerce (抖音电商), 《售后预留金实施细则》, sections 1.2, 2.3 and 2.5.
- URL: https://school.jinritemai.com/doudian/web/article/aJSwoqTMykft
- Verified 1: 2026-10-19, headless Edge rendered capture a2.txt, date/scope/rates/caps present.
- Verified 2: 2026-10-19, independent re-render c1.txt at iteration 8; full clause checked. Continuation re-render resume-formal2.txt confirms scope, fixed-rate wording and effective date.
- Used in: douyin-after-sales-reserve-warranty
- Notes: Global Purchase warranty application is explicitly labelled our reading of the combined scope and warranty clauses. The 1.5% table is a fixed-fallback illustration, not a universal maximum or forecast. Special-category rates in section 2.2 remain 1% of sunscreen orders within 60 days and 6% of dietary-supplement orders within 15 days, each capped at RMB 100,000; those rows were compared with the June text. No client data.

### Douyin explanation of the warranty-reserve change
- Value: category-wide fixed rates replaced by rates linked to merchant refund-and-compensation performance; high-refund merchants hold more, low-refund merchants less; holdings reduce as warranty periods expire.
- As of: October 15, 2026, 15:04:10.
- Source: Douyin E-commerce (抖音电商), 关于修订《售后预留金实施细则》的公示通知.
- URL: https://school.jinritemai.com/doudian/web/article/aJrPUuzZcDft
- Verified 1: 2026-10-19, rendered capture a1.txt.
- Verified 2: 2026-10-19, independent re-render c2.txt at iteration 8; continuation resume-notice.txt reconfirms date and comparison.
- Used in: douyin-after-sales-reserve-warranty

### June warranty-reserve consultation, historical comparison only
- Value: June consultation text names domestic 小店 merchants for warranty freezing. Hair dryers are in the 0.1% tier with RMB 500 minimum and RMB 50,000 maximum; text refers to a July 2, 2026 revision. It is a consultation document, not proof of July enforcement.
- As of: June 18, 2026, 22:16:15.
- Source: Douyin E-commerce (抖音电商), 关于修订《售后预留金实施细则》的意见征集通知.
- URL: https://school.jinritemai.com/doudian/web/articlev0/aJmDKphJWTr9
- Verified 1: 2026-10-19, rendered a4.txt.
- Verified 2: 2026-10-19, independent re-render c3.txt at iteration 8. Continuation inspected the complete tier row and its date in both captures.
- Used in: douyin-after-sales-reserve-warranty
- Notes: Draft names it as the June draft throughout. Do not turn the historical consultation into an unqualified in-force July rate.

### Re-verified Douyin Global Purchase payout reserve clause
- Value: platform may freeze a refund reserve from already settled funds based on recent refunds, for after-sales refunds.
- As of: January 5, 2026 revision, clause 3.1.
- Source: Douyin E-commerce (抖音电商), 《【全球购】商家货款结算规范》.
- URL: https://school.jinritemai.com/doudian/web/article/aHyMoi13Bhx5
- Verified 1: 2026-10-19, rendered g1.txt; prior ledger checks September 24 retained.
- Verified 2: 2026-10-19, independent re-render c4.txt at iteration 8; continuation resume-payout.txt confirms both the clause and revision date.
- Used in: douyin-after-sales-reserve-warranty

### 07S worked model and calculator comparison
- Value: at assumed RMB 1 million monthly settled and unrefunded sales, 12-month warranty and fixed fallback 1.5%, uncapped reserve after 1/3/6/12 months is RMB 15,000/45,000/90,000/180,000. Apply store warranty cap 50,000 or 100,000. Lower cap binds in month 4, higher in month 7. Beauty and personal-care devices calculator fee is 4.5%, RMB 45,000 per month at that sales level.
- As of: October 2026.
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro, beauty-device row; arithmetic on the formal rule above.
- Verified 1: 2026-10-19, calculator category row read in original research.
- Verified 2: 2026-10-19, category row re-read and arithmetic recomputed in continuation.
- Used in: douyin-after-sales-reserve-warranty
- Notes: illustrative sales, warranty and assigned rate, not observations from managed stores. Calculator comparison labelled as TheChinaPath data.

### Douyin operating-service-provider formal rule, P19 correction
- Value: formal October text sets brand-track quarterly shipped GMV at RMB 2 million for the luxury/cross-border industry and RMB 3 million for the other listed brand-track groupings or no main industry. Admission staffing is at least 20 overall and at least 12 in Douyin operations, office at least 100 square meters; guarantee RMB 100,000. The 500,000 cross-border threshold and forthcoming-revision wording in P19 are superseded.
- As of: October 16, 2026, 09:56:26.
- Source: Douyin E-commerce (抖音电商), 《抖音电商运营类服务商合作管理规则》.
- URL: https://school.jinritemai.com/doudian/web/article/aJ2D2SbD5GWe
- Verified 1: 2026-10-19, original sweep a3.txt.
- Verified 2: 2026-10-19, continuation independent browser render resume-provider.txt; date, industry grouping, 200万, 20人以上, 12人以上 and deposit present.
- Used in: tmall-partner-douyin-partner-same-agency (EN, FR, DE, ES correction dated 2026-10-19).; douyin-livestream-agency-vs-dp
- Notes: formal publication date is stated; no inferred precise October 15 commencement date. P15 already uses inclusive staff minimums and contains no outdated sales threshold.

### Toothpaste classification catalogue, future watch only
- Value: effective May 1, 2027; toothpaste filed before then must have filing information updated before January 1, 2028. Goods made/imported before that update may sell until shelf-life expiry.
- As of: NMPA announcement 2026 No. 100, issued October 14; official Shanghai MPA copy October 15, 2026.
- Source: National Medical Products Administration (国家药监局), official republication by Shanghai Medical Products Administration.
- URL: https://yjj.sh.gov.cn/qtgzwj/20261015/7251f7bc9dec430ab15c4bbc97ff9ce0.html
- Verified 1: 2026-10-19, opened official copy, paragraph four and issue date confirmed.
- Verified 2: 2026-10-19, reopened official copy, both deadlines and stock transition unchanged.
- Used in: signal-watch-list.md only; not in 07S.

## Partner cluster P46 (douyin-livestream-agency-vs-dp), 2026-10-19

### Douyin MCN entry bar and commission split (Buyin MCN management code)
- Value: an MCN on Buyin (巨量百应) must be an independent legal entity and general VAT payer, at least six months old, with registered capital of 500,000 RMB or more, a fixed office, a business scope including 互联网信息内容多渠道分发服务, and at least three bound e-commerce creators. Settlement: commission = (paid amount - shipping + creator subsidy + platform subsidy) x commission rate; Douyin deducts a technical service fee of 10% on the agency side; the remainder is split between agency and creator at a ratio the agency sets in its Buyin back office (达人结算管理). Agencies removed by the platform can never re-enter.
- As of: page stamped 2026-09-15 10:44:10; first in force 2021-08-12, latest revision in force 2026-06-04
- Source: Douyin E-commerce (抖音电商), 《巨量百应MCN机构管理规范》
- URL: https://school.jinritemai.com/doudian/web/articlev0/114051
- Verified 1: 2026-10-19 (rendered with headless Edge on a private temporary profile)
- Verified 2: 2026-10-19 (re-rendered at iteration 8; 50万元及以上, 六个月及以上, 绑定3个及以上电商达人, 机构侧平台技术服务费率为10%, 机构分成比例, 2026-09-15 re-found)
- Used in: douyin-livestream-agency-vs-dp

### Livestream E-commerce Supervision Measures, Order 117: host agencies (arts 2, 43, 45)
- Value: art 2 defines a livestream-host service agency (直播营销人员服务机构) as one providing planning, operation, brokerage, training and technical support to hosts, and puts the live-room operator's duties on whoever actually runs another's live room; art 43: an agency working with a live-room operator verifies the operator's name, credit code, address, contact and licences and signs a written agreement setting each side's duties on host management, content management, product quality review and consumer protection; art 45: an agency providing product selection verifies the seller's licences, compulsory certification and conformity documents and keeps records at least three years from the end of the stream. In force 2026-02-01.
- As of: published 2025-12-18, in force 2026-02-01 (CAC page 2026-01-07)
- Source: Cyberspace Administration of China (国家网信办) carrying SAMR and CAC Order No. 117, 《直播电商监督管理办法》
- URL: https://www.cac.gov.cn/2026-01/07/c_1769516655383334.htm
- Verified 1: 2026-10-19 (curl, full text read)
- Verified 2: 2026-10-19 (re-fetched at iteration 8; 实际运营他人直播间的, 策划、运营、经纪、培训和技术支持, 签订书面协议, 产品质量审核, 不少于三年, 2026年2月1日 re-found)
- Used in: douyin-livestream-agency-vs-dp
- Notes: extends the 06R entry on the same page (arts 2, 28, 59).

### Brands outsource their own live rooms for big promotions; agency hourly quotes of 2,000 and 500 RMB
- Value: a host with six years' experience (pseudonym) told the paper that some brands hand their live rooms to outside agencies (代运营机构) at major promotions; one agency quoted 2,000 RMB an hour and another 500, and the brand moved sessions to the cheaper one; hosts in Hangzhou mostly 100 to 200 RMB an hour, good ones 300 to 500, 50 to 80 in lower-tier cities and small agencies (2023)
- As of: 2024-05-20 22:32
- Source: Beijing Business Today (北京商报), on Beijing Daily's site (京报网), 时薪低至50元 "6·18"直播更卷了
- URL: https://xinwen.bjd.com.cn/content/s664b5f05e4b00fc26b9e0c15.html
- Verified 1: 2026-10-19 (curl)
- Verified 2: 2026-10-19 (re-fetched at iteration 8; 时薪报价2000元, 另一家报价500元, 代运营机构, 2024-05-20 re-found)
- Used in: douyin-livestream-agency-vs-dp
- Notes: one host's account, not a rate card; the article says so in context and the piece labels it that way.

### Douyin binds each shop to one official account
- Value: 店铺官方账号: each shop selects a single Douyin account and binds it to the shop as its official account; a shop may bind several 授权号 for sharing its products
- As of: 2022-09-28 10:43:58
- Source: Douyin E-commerce (抖音电商), 抖音小店蓝v认证信息在官方账号与店铺授权号的统一表达
- URL: https://school.jinritemai.com/doudian/web/article/aHbHwLQPDWaZ
- Verified 1: 2026-10-19 (headless Edge)
- Verified 2: 2026-10-19 (re-rendered at iteration 8; 每个店铺选定唯一抖音号与店铺进行绑定, 2022-09-28 re-found)
- Used in: douyin-livestream-agency-vs-dp

### Store-broadcast cost ratio at least 10 points below creator selling; 90,000 merchants past 1 million RMB through store broadcasts
- Value: in the same Ebrun piece as the P35 entry: 自播费比普遍比达播费比低10%以上; one food merchant's own room 40% to 50%, creator selling over 50%; Douyin vice president 李亮: in 2024 more than 90,000 small and mid merchants that passed 1 million RMB GMV did so through store broadcasts, far more than through creators
- As of: 2025-07-16 16:09
- Source: Ebrun (亿邦动力), carried by Huxiu (虎嗅)
- URL: https://m.huxiu.com/article/4584498.html
- Verified 1: 2026-10-19 (curl)
- Verified 2: 2026-10-19 (re-fetched at iteration 8; 达播费比至少35%以上, 自播费比普遍比达播费比低10%以上, 40%-50%, 2025-07-16 re-found)
- Used in: douyin-livestream-agency-vs-dp
- Notes: the 90,000-merchant line is not printed in the piece.

### Douyin calculator defaults: DP versus creator lines (proprietary)
- Value: at the Douyin calculator defaults (GMV 2,000,000 RMB, AOV 250, DP retainer 30,000 a month, DP commission 5%, paid media 15% at ROAS 2.5, creators 80% at 20%, organic 5%; Year 2 growth 50%, creators 60%, organic 20%): DP line 460,000 RMB (23% of GMV); creator commission 320,000 RMB (16%), 50 RMB per creator order; paid media 120,000 RMB; media plus creator commission 440,000 RMB; Douyin's 10% agency-side fee on the commission 32,000 RMB, leaving 288,000 RMB for agencies and creators (our arithmetic on the MCN code); Year 2 organic sales 600,000 RMB against 100,000 RMB in Year 1
- As of: October 2026
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro defaults
- Verified 1: 2026-10-19 (defaults read in the source file)
- Verified 2: 2026-10-19 (defaults re-read and arithmetic recomputed at iteration 8)
- Used in: douyin-livestream-agency-vs-dp
- Notes: model assumptions, not results from stores under management; labelled as such in the copy.

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
- Douyin operating service provider cooperation rules, formal October text (article/aJ2D2SbD5GWe, page 2026-10-16 09:56:26): rendered 2026-10-19 at both checks; ≥100平方米, 20人以上, 12人以上, 定向邀约, 10万元, 奢品跨境：发货GMV≥200万, 其他或无主营行业：发货GMV≥300万 present. Original Used in field now includes douyin-livestream-agency-vs-dp.
- Douyin operating service provider management code (articlev0/aJ5N3Pxir67C): rendered 2026-10-19 at both checks; 品牌全案服务、品牌直播服务、分成结算 and 指定链接 present. The page states the latest revision took effect 2026年7月14日 (the P19 entry says 2026-07-15; cite July 2026). Original Used in field now includes douyin-livestream-agency-vs-dp.
- Douyin affiliate commission settlement rules (articlev0/112620, page 2026-10-12 13:50:26): rendered 2026-10-19 at both checks; 5%-50%, 5%-80% and the after-sale refund clause present. Original Used in field now includes douyin-livestream-agency-vs-dp.
- 21st Century Business Herald, 2026-01-30 (618 2025: half of livestream GMV from store broadcasts; nearly 70% of merchants over 10 million RMB used store broadcasts): fetched 2026-10-19 at both checks; 一半来自店铺自播 and 近七成采用了店播模式 present. The page metadata gives 2026-01-30 19:00:04 (the P19 entry says 18:18). Original Used in field now includes douyin-livestream-agency-vs-dp.

### Researched, not used (P46, 2026-10-19)
- Agency and 代运营 blogs on 代播 pricing (da-mai.com, smcark.com, xiaoduoai.com, douliangsh.com, Sohu agency posts): barred by the competitor rule.
- 代播 firms' "service fee plus hourly" model, 2021 (woshipm.com/it/5147564.html, cbndata.com/information/204802): too old to price 2026 work.
- 巨量百应MCN机构违规行为管理规则 (articlev0/114125, 2023-05-08): read once; nothing the piece needed.
- Touzhong (投中网) copy of the Ebrun piece on Sina Tech (2025-07-17): a carrier; the Huxiu copy is cited.

## Refresh 08R: 1688 launch and pricing sensitivity, 2026-10-20

### 1688 retail launch: three stores across Taobao and Tmall
- Value: March 26, 2024 announcement; 1688 Yanxuan Taobao store, enterprise procurement Tmall store, industrial selection Tmall store.
- As of: March 26, 2024, historical launch only.
- Source: Beijing Business Today (北京商报), He Qian and Qiao Xinyi, reporting confirmation from Taotian.
- URL: https://www.bbtnews.com.cn/2024/0326/508493.shtml
- Verified 1: 2026-10-20, page fetched; date and 三家店 plus exact storefront names confirmed.
- Verified 2: 2026-10-20, URL re-fetched during createarticle iteration 8; same dated launch and names confirmed.
- Used in: alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications; bounded factual corrections in its EN/FR/DE/ES published siblings.
- Notes: one Taobao store and two Tmall stores. No current-store inspection claimed. No present seller eligibility or trade-route claim follows from this announcement.

### 1688 launch ranges and supplier responsibilities
- Value: home goods, business supplies, industrial supplies; semi-managed launch model with price negotiation, supplier dispatch and after-sales.
- As of: March 26, 2024, 17:21:13.
- Source: Yilan Business (壹览商业), Li Yan, original reporting.
- URL: https://www.yilantop.com/article/23046
- Verified 1: 2026-10-20, fetched original article, date/ranges and 半托管模式, 商量定价, 商家负责发货和售后 confirmed.
- Verified 2: 2026-10-20, re-fetched at iteration 8; same text and historical scope.
- Used in: alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications and locale factual corrections.
- Notes: launch arrangements only, not current terms. Follower counts, factory totals, brand-factory relationships and sales anecdotes are excluded.

### 1688 fiscal 2025 paid membership and domestic-wholesale scope
- Value: more than 1 million paid members in fiscal 2025; domestic wholesale connecting factories/wholesalers with buyers. Alibaba.com is separately described as international wholesale.
- As of: fiscal year ended March 31, 2025; annual report filed June 26, 2025, printed pp. 11-12.
- Source: Alibaba Group (阿里巴巴集团), Chinese annual report on HKEX.
- URL: https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0626/2025062601065_c.pdf
- Verified 1: 2026-10-20, PDF fetched and passage read: 付費會員…總數超過100萬. Domestic/international wholesale distinction confirmed.
- Verified 2: 2026-10-20, PDF re-fetched during iteration 8; pp. 11-12 still contain the same membership/scope statements.
- Used in: alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications.
- Notes: a fiscal 2025 snapshot, not an October 2026 count, GMV or buyer count. The article does not call this the newest report. Removed the earlier unsourced 174/192 industrial-belts and potential RMB 2 trillion volume passage in all four locales rather than repeat it.

### Calculator-derived price sensitivity, October 2026
- Value: default annual GMV RMB 3,500,000 / default average order RMB 250 = 14,000 orders; fixed-basket/order-count sensitivity at RMB 225/200 yields RMB 3,150,000/2,800,000 gross sales, reductions RMB 350,000/700,000. Revenue replacement requires 15,556 rounded-up orders / 17,500 orders. Separate illustrative contribution RMB 80 to 55 needs 45.4545% more kept orders.
- As of: local calculator code read October 20, 2026.
- Source: TheChinaPath calculator data, October 2026; source code src/pages/tools/tmall-global-setup-and-run.astro lines 18-19 and editorial arithmetic.
- URL: https://www.thechinapath.com/tools/tmall-global-setup-and-run
- Verified 1: 2026-10-20, local source read before drafting, default GMV/AOV checked.
- Verified 2: 2026-10-20, local source re-read and all arithmetic recomputed in script; live public calculator URL fetched and reachable.
- Used in: alibabas-strategic-expansion-1688s-launch-on-taobao-and-its-market-implications.
- Notes: settled proprietary-number fallback. These are editable defaults and explicitly hypothetical sensitivity scenarios, not actual stores, 1688 prices, a market forecast or agency service prices. Table uses gross order value before refunds/tax adjustments. Contribution example uses kept orders and fixed other per-order expenses.

## Partner P29: regional distributor coverage, 2026-10-20

### Pinlive Foods regional distributor counts, year-end 2025
- Value: East 186 (2024: 206), North 106 (114), South 106 (119), West 48 (55), total 446 (494). Distributor companies, not shops. Company-defined regions. Filing also describes imported foods and own-brand operations.
- As of: December 31, 2025, comparative December 31, 2024; annual report published April 22, 2026, printed p.16, PDF page index 15.
- Source: Pinlive Foods (品渥食品), 2025 annual report, original CNINFO filing.
- URL: https://static.cninfo.com.cn/finalpage/2026-04-22/1225223160.PDF
- Verified 1: 2026-10-20, Chinese search then full PDF fetch; regional table and year headers read.
- Verified 2: 2026-10-20, PDF URL fetched again during createarticle iteration 8; all five rows re-found, including 东部186 and 总计446; comparative counts unchanged.
- Used in: regional-distributor-china.
- Notes: historical illustration only, not a list of available candidates or a measure of foreign-brand reach. Company is a food brand business, not a competing market-entry agency or third-party store operator.

### Anjoy Foods regional network, year-end 2025
- Value: total 2,290 distributors including 294 overseas; East China 757; Southwest 175. Not 2,290 mainland distributors.
- As of: December 31, 2025; report published March 31, 2026, printed p.29, PDF page index 29.
- Source: Anjoy Foods (安井食品), 2025 annual report, original CNINFO filing.
- URL: https://static.cninfo.com.cn/finalpage/2026-03-31/1225063456.PDF
- Verified 1: 2026-10-20, Chinese search then full PDF fetch; 经销商数量 and regional table read.
- Verified 2: 2026-10-20, PDF URL fetched again during createarticle iteration 8; 2,290, 294, 757, 175 and year-end context re-found.
- Used in: regional-distributor-china.
- Notes: food manufacturer, not a competing agency. Its regional classifications are not equated with Pinlive's. Does not prove that most national importer contracts use sub-distributors.

### Anti-Monopoly Law: resale prices and horizontal market division, P29 check
- Value: Article 18 prohibits fixed/minimum resale-price agreements subject to statutory conditions/exceptions. Article 17 prohibits market division among competitors. Territory clauses need review; no blanket legality claim or advice to coordinate competing distributors.
- As of: amended June 24, 2022; official page posted November 2, 2022.
- Source: State Administration for Market Regulation (市场监管总局), Chinese Anti-Monopoly Law.
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_f0fae9eb3a684fc39e84d89eabfc2caa.html
- Verified 1: 2026-10-20, fetched dated primary text, Articles 17 and 18 read including exceptions.
- Verified 2: 2026-10-20, URL fetched again during createarticle iteration 8; 第十八条, 固定, 最低价格, 分割销售市场 and exception paragraphs re-read.
- Used in: regional-distributor-china.
- Notes: no safe-harbor percentage or current enforcement inference printed.

### DaVinci Gourmet case result reused for P29 (proprietary fallback)
- Value: cross-channel pricing disputes resolved within three months in the published project involving the brand's Tmall/JD stores and distributor network.
- As of: published case checked October 20, 2026; project observation dates not supplied by case, not invented.
- Source: TheChinaPath, src/content/cases/kerry-davinci.md and its public page.
- URL: https://www.thechinapath.com/work/kerry-davinci
- Verified 1: 2026-10-20, local case read and public URL fetched; three-month result confirmed.
- Verified 2: 2026-10-20, URL fetched again during createarticle iteration 8; Results paragraph still states within three months.
- Used in: regional-distributor-china.
- Notes: one reported project result; no promised timetable, coverage ratio, or inferred legal assessment. Calculator defaults do not measure regional coverage, so the published-case fallback applies.

## Anchor 09A (xiaohongshu-koc-seeding-cost), 2026-10-21

All Pugongying entries read through the help-doc JSON API (https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=<id>&role=4); the menu is at /api/pgy/help/menu?role=4.

### Pugongying trade modes: who prices what, follower caps, celebrity package prices
- Value: nine trade modes (version 2026.04). Custom and batch deals: creator sets a flat price. Trial recruitment (众测招募): brand sets the price, consumer goods, creators under 150,000 followers. 合作广场: creators under 10,000 followers; ad-spend share at least 3% for 1,000+ follower creators. Celebrity package (星粉直达), by active fans: S 2m+ 300,000 RMB / 5m guaranteed exposures in 30 days; A 1m to 2m 270,000 / 4.5m; B 500k to 1m 210,000 / 3.5m; C 100k to 500k 170,000 / 2.8m; D under 100k 90,000 / 1.5m; refund = shortfall / 1,000 x 60 RMB; no 10% fee; endorsement contract of more than six months; 暂不支持境外客户下单. Celebrity custom deals (明星商单) closed to 美瞳, 药品, 保健食品, 医疗器械, medical services and funds/securities.
- As of: October 2026 (doc updateTime 2026-10-15)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 交易模式总览
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=365934c681f69e354bd38835492e1e8f&role=4
- Verified 1: 2026-10-21 (JSON API; tables read)
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 9万元, 30万元, 150万, 500万, 超过半年, 粉丝 15w 以下, 美瞳, 暂不支持境外客户下单 re-found)
- Used in: xiaohongshu-koc-seeding-cost

### Pugongying trial tasks: 10,000 RMB minimum, 10% fee, first order fee-free
- Value: 单任务≥1万元; 10% platform service fee under per-read and flat per-note settlement; new client's first order exempt from the fee since 2025-10-14; fee not refunded if a task is cancelled
- As of: October 2026 (doc updateTime 2026-10-19)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 众测招募
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=ff868b30379f999e313926c9e7c3bda0&role=4
- Verified 1: 2026-10-21
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 单任务≥1万元, 10%, 首单 re-found)
- Used in: xiaohongshu-koc-seeding-cost

### Pugongying note protection period: 30, 45, 60 days or custom 30 to 365
- Value: brand picks the retention period at order (30, 45, 60 days or custom 30 to 365); inside it the creator cannot delete or hide the note without the brand's consent; image notes can be edited (re-reviewed); settlement within 7 days of posting is not refunded if the brand agrees to a deletion; applies to custom, recruitment, co-creation and 新芽 modes
- As of: October 2026 (doc updateTime 2026-10-16)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 笔记保护期
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=e748ef4c760584b31219d823e7bfe10a&role=4
- Verified 1: 2026-10-21
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 30天，45天，60天, 30天～365天, 7天内 re-found)
- Used in: xiaohongshu-koc-seeding-cost

### Pugongying content boost: CPM 25 RMB (was 15) from January 23, 2026
- Value: paid boost for sponsored notes at 25 RMB per thousand impressions after migration completed 2026-01-23 (old link 15 RMB); default budget 150 RMB per 24 hours; the 5,000 RMB per note per 30 days cap removed
- As of: October 2026 (doc updateTime 2026-10-16)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 内容加热
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=da9e48ae271a1da33022122af1f0d56a&role=4
- Verified 1: 2026-10-21
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 25元, 15元, 2026年1月23日, 150元/24h re-found)
- Used in: xiaohongshu-koc-seeding-cost

### Pugongying platform cases: Paula's Choice 47 KOC notes under 1,000 RMB each; LEGO 117 notes from 850 RMB
- Value: 宝拉珍选 co-creation with amateur creators, 47 notes, 692,000 (69.2w) total exposure, 单篇低于1000元; LEGO flower-bouquet launch, 117 notes, 单篇笔记成本低至850元, reads 66% above target; data from the Pugongying platform, 2022 to 2025. Same doc: overseas enterprise accounts get e-invoices only (technical service fee); Alipay top-up for mainland entities only; the creator card shows the creator's quote for the month (本月报价)
- As of: October 2026 (doc updateTime 2026-10-19; version 2026.04)
- Source: Xiaohongshu Pugongying (蒲公英) help center, 蒲公英博主合作指南
- URL: https://pgy.xiaohongshu.com/api/pgy/help/doc?shortcutId=97e5a307cc23aeefc7295c76926088c6&role=4
- Verified 1: 2026-10-21
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 69.2w, 47篇, 单篇低于1000元, 117篇, 850元, 66％, 境外企业号, 本月报价 re-found)
- Used in: xiaohongshu-koc-seeding-cost
- Notes: "低至850元" is the platform's own wording ("as low as"); totals in copy (117 x 850) are labelled our arithmetic.

### Xiaohongshu: 70% of MAU search on their own; 170 million a month seek purchase advice
- Value: 70%的月活用户都有主动搜索的习惯; 每月寻求购买建议的用户数高达1.7个亿; 8,000万 "求链接" comments
- As of: April 10, 2025
- Source: Sina Tech (新浪科技), citing Xiaohongshu data
- URL: https://finance.sina.com.cn/tech/2025-04-10/doc-inesschw5906564.shtml
- Verified 1: 2026-10-21
- Verified 2: 2026-10-21 (re-fetched at iteration 8; 70%的月活用户, 1.7个亿, 2025年04月10日 re-found)
- Used in: xiaohongshu-koc-seeding-cost

### Huatai Research: small accounts reach the first search screen; seeding notes posted mainly by amateurs and junior creators
- Value: for product search terms (粉饼, 投影仪), notes from accounts under 5,000 followers with qualified data still reach the first screen; seeding notes posted mainly by 素人 (under 5k) and 初级达人 (5k to 50k), Q1 2024 (Newrank data); 千粉变现 lowered KOC entry to Pugongying to 1,000 to 5,000 followers
- As of: May 31, 2024
- Source: Huatai Research (华泰研究), 小红书引领内容社区商业化繁荣
- URL: https://reportify-1252068037.cos.ap-beijing.myqcloud.com/media/production/s_4310a214_4310a214e80d88266404d155b567083b.pdf
- Verified 1: 2026-10-21 (PDF text, pp. 14 and 22)
- Verified 2: 2026-10-21 (re-downloaded at iteration 8; 2024 年5 月31 日, 账号粉丝数低于5000, 粉饼, 投影仪, 粉丝量1000-5000 re-found)
- Used in: xiaohongshu-koc-seeding-cost
- Notes: broker research hosted on a report aggregator; the 60% DAU search and 300m daily queries on p.14 are a February 2023 COO statement, not used.

### Re-verified ledger entries reused (no new entry; add xiaohongshu-koc-seeding-cost to Used in)
- Pugongying custom deals, creator price plus 10% (eb3150fa...): re-fetched 2026-10-21 at both checks (10%, 11,000; doc updateTime 2026-10-19).
- Brand trust system, crackdown on 水下接单 from 2026-01-12 (1627df51...): re-fetched 2026-10-21 at both checks (doc updateTime 2026-10-13, cited as October 2026).
- Sponsored post 10,800 RMB, 13.7 a month, CPE 10.7 vs 2.0 (Jiemian citing QuestMobile, 12440261): re-fetched 2026-10-21 at both checks.
- Xiaohongshu MAU above 400m, 800m daily searches (Beijing Business Today via Sina Finance, 2026-05-27): re-fetched 2026-10-21 at both checks.
- SAMR Order 72, art. 9 广告 label on reviews with a shopping link (gov.cn gazette 2023 No. 16): re-fetched 2026-10-21 at both checks; cited as June 2023.

### Proprietary fallback used in 09A
- Camper case (/work/camper, src/content/cases/camper.md): RedNote drove 38% of eCommerce traffic over 18 months despite the smallest follower count; three RedNote collaborators kept posting with no formal agreement. Read 2026-10-21 at both checks. Label in copy: "From our published Camper case".

### NOT SOURCED, do not research again (09A, 2026-10-21)
- Per-tier creator prices for junior, mid and top RedNote creators: still agency, MCN and data-vendor pages only (newrank trade pages, qian-gua, kingsta, jianshu, CSDN); Huaxin Securities 2025-10-13 and Huatai 2024-05-31 reports carry no tier prices; CBNData 243858 is a 2022 single-creator estimate.
- A six-month search-survival share for seeded notes: no public source; not on file.

### Publish interpretation review, 2026-10-21
- 09A LEGO: 850 RMB is the lowest reported unit cost, not a disclosed average. Removed any implication that 117 x 850 was its actual campaign spend. The worked total is explicitly illustrative in all four locales.
- 09A QuestMobile: multiplying average unit price by average volume and adding a fee produces a planning illustration, not a measured average monthly brand spend. The engagement comparison is confined to January-October 2024 and makes no universal or first-week claim.
- 09A Pugongying retention: narrowed off-platform statement to absence of Pugongying protection for unreported deals; does not negate possible private contractual protections.
- P29 SAMR: official Articles 17 and 18 refetched at publish on October 21; market-division and resale-price statements, including exceptions, remain supported.
- FR/DE/ES indicative conversions use 8 RMB per euro, rounded; disclosed as a planning basis, not a current exchange-rate claim.

## Partner P23: Double 11 review, 2026-10-21

### Douyin campaign display versus activity analysis
- Value: the official guide distinguishes real-time sales displays and shareable campaign reports from activity analysis of sales channels, products and audiences.
- As of: October 16, 2023, 10:46:21.
- Source: Douyin E-commerce (抖音电商), 罗盘经营/罗盘策略「大促作战室」重磅上线.
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHvN4bfpmqMu
- Verified 1: 2026-10-21, private headless Edge capture douyin-check1.html; publication date and functionality read.
- Verified 2: 2026-10-21, fresh private headless Edge capture douyin-check2.html at createarticle iteration 8; date, 活动分析, 翻牌器 and 成交渠道 confirmed.
- Used in: double-11-agency-review.
- Notes: historical documentation; copy explicitly uses current account labels and does not claim unchanged menus or any 2026 campaign date. Evidence in session scratch directory tcp-partner-20261021.

### Lanzhou Huanghe reported 2025 Douyin advertising ROI before refunds
- Value: ad spend 20,043.40万元 (RMB 200.434 million), attributed GMV 21,027.61万元 (RMB 210.2761 million), reported ratio 1.05. Footnote defines ratio as GMV/ad spend and explicitly excludes subsequent refunds and returns from GMV.
- As of: 2025 operating period; accountant response signed June 12, 2026, filed June 13, 2026.
- Source: Beijing Xinghua Certified Public Accountants (北京兴华会计师事务所), response on Lanzhou Huanghe Enterprises (兰州黄河企业股份有限公司) 2025 annual report, printed page 56, PDF page 60.
- URL: https://static.cninfo.com.cn/finalpage/2026-06-13/1225369700.PDF
- Verified 1: 2026-10-21, full PDF downloaded; table, units and footnote read on page 60; signed date read on final page.
- Verified 2: 2026-10-21, separate fresh PDF download at iteration 8; same figures, definition and signature date confirmed.
- Used in: double-11-agency-review.
- Notes: copy cites only 1.05 and the definition. One manufacturer's calculation, never a market benchmark or claim about all platform metrics. No agency supplier named or cited. Both PDF copies retained in session scratch directory tcp-partner-20261021.

### P23 calculator defaults and refund sensitivity
- Value: Douyin model default AOV 250 RMB and ROAS 2.5. Arithmetic at 100 equal-value orders: sales 25,000 RMB; ad spend 10,000 RMB; 100 RMB ad cost per paid order. At an assumed 20% full-refund rate: 80 orders kept, 20,000 RMB retained sales, ratio 2.0, 125 RMB ad cost per kept order.
- As of: October 2026.
- Source: TheChinaPath calculator data, src/pages/tools/douyin-cost-calculator.astro, drivers aov and roas.
- URL: https://www.thechinapath.com/tools/douyin-cost-calculator
- Verified 1: 2026-10-21, source defaults read before drafting.
- Verified 2: 2026-10-21, source defaults re-read at iteration 8; arithmetic recalculated.
- Used in: double-11-agency-review; guides/double-11-agency-review.
- Notes: editable model assumptions plus explicitly illustrative sensitivity, not measured outcomes, category refund rates or agency service prices. Ad spend fixed; other costs excluded. Settled proprietary-number fallback.

## Toys and games cost research (Ledger 09L, cost-to-sell-toys-and-games-in-china), October 22, 2026

### Tmall Global toy rates: 5% and 60,000 RMB a year on all four toy lines
- Value: 母婴 rows 玩具/童车/益智/早教/游乐设备, 毛绒玩偶/公仔/挂偶/配件, 拼搭/积木/模型/拼图/拼板, 模玩/动漫/周边/cos/桌游: 5% / 60,000 RMB a year; 乐器/吉他/钢琴/配件 2% / 30,000; 数字生活/游戏平台 0.6% / 30,000
- As of: adjustment posted 2026-09-03, in force 2026-09-09
- Source: Tmall Global (天猫国际), 《天猫国际各类目年费、技术服务费率》
- URL: https://rule.tmall.hk/?type=detail&ruleId=11005909&cId=625 (render with the hash route)
- Verified 1: 2026-10-22 (rendered with headless Edge)
- Verified 2: 2026-10-22 (re-rendered at iteration 8; both toy rows and the 2026年9月9日正式生效 clause re-found)
- Used in: cost-to-sell-toys-and-games-in-china; Tmall Global calculator row "Toys, models and tabletop games" (EN, FR, DE, ES)

### Tmall Global new-store annual-fee waiver: toys named, months inside April 1, 2026 to March 31, 2027 only
- Value: stores launched 2026-04-01 to 2027-03-31 whose main category is in the listed range (母婴: 玩具潮玩类, four lines; 童装童鞋类; all 服装服饰; part of 家居) pay no annual fee in the 60,000 tier; the free months are those inside the incentive period 2026-04-01 to 2027-03-31; fees already paid are refunded within 6 months of the policy. Companion plan ruleId 20010439: new and second-year stores (second-year = launched 2025-04-01 to 2026-03-31) pay 30,000 a year (2,500 a month) in the 60,000 tier, only inside the same period
- As of: both posted 2026-07-16
- Source: Tmall Global (天猫国际), 《2026年天猫国际新商家 服饰/母婴/家居部分类目技术服务年费 特殊激励计划》 and 《2026年天猫国际新商家及次新商家技术服务年费激励计划》
- URL: https://rule.tmall.hk/?type=detail&ruleId=20010440&cId=625 (and ruleId=20010439)
- Verified 1: 2026-10-22 (both rendered)
- Verified 2: 2026-10-22 (20010440 re-rendered; 玩具潮玩类, 激励周期内其技术服务年费将予以免除 and the period re-found)
- Used in: cost-to-sell-toys-and-games-in-china (20010440 cited)
- Notes: end date registered in sources/signal-watch-list.md (2027-03-29).

### JD Worldwide toys: US$1,000 flagship deposit, 5% plus 0.9%
- Value: 玩具乐器 其他二级类目: deposit US$1,000 at GMV under 50,000 RMB, US$1,500 at the three tiers above; brand flagship US$1,000; 运营支持服务费 5.00%; 交易服务费 0.90%. 其它乐器 电脑音乐 2% (deposit 5,000 to 15,000), other 其它乐器 lines 2%
- As of: revised 2026-09-24, in force 2026-10-01
- Source: JD Worldwide (京东全球购), 《京东全球购开放平台各类目资费标准》
- URL: https://jdw-rule.jd.hk/detail?ruleId=950583665543483392
- Verified 1: 2026-10-22 (rendered with headless Edge; table parsed with rowspans; deposits in USD per the header)
- Verified 2: 2026-10-22 (re-rendered; the 玩具乐器 其他二级类目 row and 2026年10月1日正式生效 re-found)
- Used in: cost-to-sell-toys-and-games-in-china; JD Worldwide calculator row "Toys" (7,100 RMB at 7.1; EN, FR, DE, ES)

### Douyin Global toys: 6% base plus 4% channel supplement; 3% for early-learning machines and children's bikes
- Value: 玩具乐器 > 玩具: 益智早教玩具 早教机/点读学习 3.00% + 3.90%, other 6.00% + 4.00%; 儿童骑乘类玩具 自行车/三轮车 3.00% + 3.90%, other 6.00% + 4.00%; 玩具 其他二级类目 6.00% + 4.00%; 乐器及配件 3.00% + 3.90%
- As of: schedule posted 2026-07-15
- Source: Douyin E-commerce (抖音电商), 《【全球购】技术服务费费率标准》
- URL: https://school.jinritemai.com/doudian/web/articlev0/aHMYyFoqESKn
- Verified 1: 2026-10-22 (rendered with headless Edge)
- Verified 2: 2026-10-22 (re-rendered; 早教机/点读学习, 6.00% and 4.00% re-found)
- Used in: cost-to-sell-toys-and-games-in-china; Douyin calculator row "Toys" (EN, FR, DE, ES)

### Calculator category rows for toys, added 2026-10-22 (proprietary)
- Value: Tmall Global "Toys, models and tabletop games" 50,000 deposit / 5% / 60,000 annual; JD Worldwide "Toys" 7,100 deposit (US$1,000 flagship at 7.1) / 5% / no annual fee; Douyin "Toys" 5,000 deposit / 6%; Douyin "Baby products" re-set to 3% (the blended "Baby products, toys" row at 4.5% split in two). Derived on the Tmall Global model's per-order defaults (5% commission, 1% payment, 4 RMB pick and pack, 11 RMB last mile, 5% return rate, 15 RMB handling plus 11 RMB return leg): cost per kept order 23 / 29 / 41 RMB on 99 / 199 / 399 RMB baskets (23.3% / 14.6% / 10.3%); at an assumed 50% margin 26 / 70 / 158 RMB left per kept order, 2,273 / 852 / 379 kept orders (about 225,000 / 170,000 / 151,000 RMB of sales) to cover 60,000 RMB
- As of: October 2026
- Source: TheChinaPath calculator data (src/pages/tools/tmall-global-setup-and-run.astro, jd-worldwide-setup-and-run.astro, douyin-cost-calculator.astro, and the FR, DE, ES twins)
- Label in copy: "TheChinaPath calculator data, October 2026"
- Verified 1: 2026-10-22 (rows written from the three rule pages above)
- Verified 2: 2026-10-22 (rule pages re-rendered; rows and arithmetic rechecked)
- Used in: cost-to-sell-toys-and-games-in-china
- Notes: supersedes the "baby and toys 4.5" figure in "Calculator category fee data, Douyin rows re-set 2026-09-24". Baskets and margin are ASSUMPTIONS, stated as such in copy.

### CCC catalogue scope for toys (2202)
- Value: 75. 玩具（2202）: 设计或预定供14岁以下儿童玩耍时使用的电玩具、塑胶玩具、金属玩具、乘骑车辆玩具; excluded: non-electric paper, bamboo, wooden, plush/cloth, ceramic, glass and plaster toys (plastic or metal parts with their own play function in a set stay in), non-electric mouth toys, teethers, water toys, inflatables, play dough and similar, GB 6675.11 to .14 and GB 26387 items, stationery with a play function; standards GB 6675.1 to .4, GB 19865 for electric and ride-on toys
- As of: SAMR Announcement 2023 No. 36, signed 2023-08-10, posted 2023-09-05
- Source: State Administration for Market Regulation (市场监管总局), 《强制性产品认证目录描述与界定表（2023年修订）》 (annex 2 PDF on the CNCA page)
- URL: https://www.cnca.gov.cn/zwxx/gg/zjgg/art/2023/art_31ce43f5837d408cb2023ec693615ada.html
- Verified 1: 2026-10-22 (curl; annex PDF read with PyMuPDF, pages 70 to 72)
- Verified 2: 2026-10-22 (re-fetched; 玩具（2202） and 2023-09-05 re-found)
- Used in: cost-to-sell-toys-and-games-in-china
- Notes: SAMR 2025 No. 57 (2026-01-07) changed certification modes for 16 other products; toys untouched.

### CCC rule: certification before sale or import; no-application exemptions
- Value: art. 2, catalogue products 必须经过认证并标注认证标志后，方可出厂、销售、进口或者在其他经营活动中使用; art. 41, no certification needed for diplomatic goods, HK/Macao official goods, 入境人员随身从境外带入境内的自用物品, foreign aid, and 其他依法无需办理 cases
- As of: Decree 117 of 2009 as revised by SAMR Decree 61, 2022-09-29; posted 2022-10-08
- Source: State Administration for Market Regulation (市场监管总局), 《强制性产品认证管理规定》
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_1fb2082e0cca45cbb8e70b4a33e15e99.html
- Verified 1: 2026-10-22 (curl)
- Verified 2: 2026-10-22 (re-fetched; both strings re-found)
- Used in: cost-to-sell-toys-and-games-in-china
- Notes: no regulator text found on whether CCC binds bonded or direct-mail cross-border retail imports; never claim either way.

### GB 6675.1-2025 in force November 1, 2026; "12+12" transition
- Value: GB 6675.1-2025 玩具安全 第1部分：基本规范, mandatory, published 2025-10-05, in force 2026-11-01, MIIT in charge; MIIT: GB 6675.1 to .4 revised, 12-month production transition to the effective date, then 12 more months to sell stock made to the old standard; SAMR targets toys with 无标签标识、未标注适用年龄和警示标识不规范; 2024 domestic toy retail 97.85 billion RMB (up 25.5% on 2020), exports US$39.87 billion
- As of: standard record 2025-10-05; press conference 2025-11-19 13:39
- Source: SAMR national standards platform (全国标准信息公共服务平台); Ministry of Industry and Information Technology (工业和信息化部) press conference with SAMR
- URL: https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=C9E23F1F4C5C26B9AB4EF697C8F38E63 ; https://www.miit.gov.cn/xwfb/xwfbh/bxwfbh/art/2025/art_ceef45b5aab04aeaa03d7d91888d9807.html
- Verified 1: 2026-10-22 (curl, both)
- Verified 2: 2026-10-22 (re-fetched; 2026-11-01, 12+12, 未标注适用年龄 re-found)
- Used in: cost-to-sell-toys-and-games-in-china (retail total researched, not cited)
- Notes: dates registered in sources/signal-watch-list.md (2026-11-02, 2027-11-01).

### Toys on the cross-border retail import list, lines 1347 to 1353
- Value: 1347 95030010 供儿童乘骑的带轮玩具及玩偶车; 1348 95030021 玩具动物; 1349 95030029 其他玩偶; 1350 95030060 智力玩具; 1351 95030083 带动力装置的玩具及模型; 1352 95030089 其他未列名玩具; 1353 95030090 玩具的零件; no remark on any; 1354 to 1356 are video game consoles and machines
- As of: list 2019 edition, in force 2020-01-01
- Source: Ministry of Finance (财政部) and 12 bodies; list PDF as published by MOFCOM
- URL: https://images.mofcom.gov.cn/cws/202001/20200110143527533.pdf
- Verified 1: 2026-10-22 (PyMuPDF)
- Verified 2: 2026-10-22 (re-downloaded; 1347, 95030010, 1353, 95030090 re-found)
- Used in: cost-to-sell-toys-and-games-in-china
- Notes: board and card games (heading 9504 other than consoles) are not on the 2019 text; the 2022 adjustment added "游戏品" lines whose annex was not fetchable. Do not claim either way.

### E-Commerce Law arts. 42 and 43: notice, takedown, counter-statement, 15 days
- Value: art. 42, a rights holder's notice with 初步证据 obliges the platform to take 删除、屏蔽、断开链接、终止交易和服务 measures and forward it; art. 43, the seller may file a non-infringement statement with preliminary evidence; the platform ends the measures if no complaint or suit is notified within 十五日 of the statement reaching the rights holder
- As of: adopted 2018-08-31, in force 2019-01-01
- Source: State Taxation Administration law database (国家税务总局 法规库), 中华人民共和国电子商务法
- URL: https://fgk.chinatax.gov.cn/zcfgk/c100009/c5212256/content.html
- Verified 1: 2026-10-22 (curl)
- Verified 2: 2026-10-22 (re-fetched; 十五日内 and 初步证据 re-found)
- Used in: cost-to-sell-toys-and-games-in-china
- Publish recheck 2026-10-22: Article 43 re-read on the cited tax-administration page. The 15-day period starts when the counter-statement reaches the rights holder; the platform must end measures promptly if it receives no notice of a complaint or suit. The draft's guaranteed minimum outage was removed. Corrected scope carried into EN, FR, DE and ES.

### Lithium batteries by air: 30% state of charge mandatory in 2026 for PI 966 above 2.7 Wh
- Value: IATA DGR 66th edition: the PI 965 30% SoC limit extends to PI 966 (lithium-ion batteries packed with equipment), recommended in 2025 and mandatory in 2026 for batteries rated above 2.7 Wh; PI 967 (contained in equipment) 30% SoC (or 25% displayed) recommended
- As of: article posted 2024-10-15
- Source: Civil Aviation Science and Technology Research Institute (中国民航科学技术研究院), dangerous goods transport centre, translating IATA
- URL: https://www.caacsri.com/support/detail/1175.html
- Verified 1: 2026-10-22 (curl)
- Verified 2: 2026-10-22 (re-fetched; 2.7 Wh, 30% SoC, 2024-10-15 re-found)
- Used in: cost-to-sell-toys-and-games-in-china

### Re-checks on 2026-10-22 for 09L (reused entries)
- Cross-border retail imports supervised as personal-use goods (商财发〔2018〕486号, gov.cn): re-fetched, clause present. Add cost-to-sell-toys-and-games-in-china.
- Cross-border tax 0% duty and 70% (财关税〔2016〕18号, MOF) and 13% VAT (2019 No. 39, gov.cn gazette): re-fetched, present. Add cost-to-sell-toys-and-games-in-china.
- Product Quality Law art. 27 (CNIPA, https://www.cnipa.gov.cn/art/2019/7/31/art_104_67810.html): re-fetched, 第二十七条 present. Add cost-to-sell-toys-and-games-in-china.
- Tmall Global deposit rule (ruleId 8942): re-rendered twice, 母婴 其他一级类目 50,000 flagship and the TM 100,000 clause present.
- Douyin Global deposit rule (107821): re-rendered twice, 500 / 2,000 / 5,000 tiers present.


## Partner P24: trademark recovery, 2026-10-22

### Current trademark recovery procedures
- Value: Arts. 15 and 18: unauthorized agent registration and knowing business-relationship filings; foreign applicants use a lawful trademark agency. Arts. 28, 33, 35, 45: 9-month examination, 3-month opposition from publication, 12-month opposition decision from window expiry plus possible 6 months; Article 15 invalidation generally 5 years from registration and decision within 12 months of request receipt plus possible 6. Well-known mark bad-faith exception is narrower than bad faith alone. Arts. 42 and 50: joint transfer and rights from announcement; related marks transfer together where required; identical/similar approval barred for one year after invalidation. Statutory periods are not actual turnaround averages.
- Source: CNIPA, 中华人民共和国商标法(2019年修正)
- As of: 2019-07-30
- URL: https://www.cnipa.gov.cn/art/2019/7/30/art_95_28179.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

### Distributor and negotiation scope
- Value: Interpretation Article 15 includes sales/distribution agents, same or similar marks and goods, and agency negotiation stage. Current provision retained; 2026 consultation amendment is not final.
- Source: Supreme People’s Court, 最高人民法院关于审理商标授权确权行政案件若干问题的规定
- As of: 2017-01-11
- URL: https://www.court.gov.cn/zixun/xiangqing/34732.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

### MASkin relationship case
- Value: Case 9, mark 10519462: application 2012-02-22. Claimant alleged business relationship from 2012-02-08 and email cooperation. Review body found pre-filing relationship and Article 15(2) bad faith on masks and specified related goods. No published recovery duration or damages used. Not an agency client case.
- Source: CNIPA / China Intellectual Property News, 2018商标评审典型案例（上）
- As of: 2019-04-26
- URL: https://www.cnipa.gov.cn/art/2019/4/26/art_55_126744.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

### Revised trademark relationship rule and opposition window
- Value: Article 22 relationship provision; Article 36 two-month opposition period. Future law, not applied to October 2026 filings as current law.
- Source: CNIPA, 中华人民共和国商标法（2026年修订）
- As of: 2026-06-26
- URL: https://www.cnipa.gov.cn/art/2026/6/26/art_3686_206940.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

### Revised Trademark Law commencement
- Value: New Trademark Law effective 2027-01-01; confirms commencement independently of the law-topic page.
- Source: CNIPA carrying Xinhua, 人大常委会丨强化商标管理和保护 商标法完成修订
- As of: 2026-06-26
- URL: https://www.cnipa.gov.cn/art/2026/6/26/art_55_206931.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

### Trademark transition proposal remains consultation
- Value: Proposed Article 7 preserves three-month opposition for preliminary publication before 2027 law. Comments close 2026-10-28. Proposal explicitly not represented as final; final rules check registered in signal watch list.
- Source: Supreme People’s Court, 商标法时间效力司法解释稿、商标授权确权司法解释稿向社会公开征求意见
- As of: 2026-09-14
- URL: https://www.court.gov.cn/hudong/xiangqing/511791.html
- Verified 1: 2026-10-22 (Chinese-first research; page fetched, date and relevant passage checked)
- Verified 2: 2026-10-22 (re-fetched during createarticle iteration 8; matching passages confirmed)
- Used in: distributor-registered-my-trademark-china

## Teardown 09T: Rituals China entry, 2026-10-23

### Tmall Global launch announcement
- Value: November 2019 platform launch; announcement November 22 says the store launched the previous day.
- As of: November 22, 2019 (embedded datePublished 2019-11-22T07:29:59.081Z).
- Source: Margot Looman, bilingual firsthand launch announcement.
- URL: https://www.linkedin.com/posts/margotlooman_%E6%88%91%E4%BB%AC%E5%BE%88%E5%BC%80%E5%BF%83%E7%9A%84%E4%B8%8E%E4%BD%A0%E5%88%86%E4%BA%ABrituals%E7%99%BB%E9%99%86%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E4%BA%86for-the-ones-who-activity-6603544929694289920-fFIa
- Verified 1: 2026-10-23, web page and raw metadata fetched; text and exact timestamp confirmed.
- Verified 2: 2026-10-23, iteration 8 fresh HTTP 200; launch text and embedded date unchanged.
- Used in: how-rituals-entered-china
- Notes: Platform launch only; not proof of the first-ever sale into China. No exact launch day inferred in the article.

### Rituals first mainland boutique and historical eight-store count
- Value: First mainland boutique at Shanghai IFC in September 2023; eight boutiques in the April 9, 2025 event account.
- As of: April 9, 2025; newsroom republication timestamp July 9, 2026.
- Source: Rituals Chinese newsroom (Rituals怡式新闻中心).
- URL: https://www.rituals.com/newsroom/zh-CN-CN/268026-from-amsterdam-with-love-rituals/
- Verified 1: 2026-10-23, page fetched; event date, opening month and count confirmed.
- Verified 2: 2026-10-23, iteration 8 fresh HTTP 200; September 2023 and eight boutiques unchanged.
- Used in: how-rituals-entered-china
- Notes: Eight is not an October 2026 count. No global boilerplate store figure used.

### Rituals live JD storefront: bounded observation
- Value: Self-operated Rituals flagship; separate home fragrance and personal-care navigation, car fragrance, and gift sets. Complete SKU count, numerical reviews and live prices unobservable in retrieved views.
- As of: October 23, 2026 live observation.
- Source: JD (京东).
- URL: https://mall.jd.com/index-1024553756.html
- Supporting URL: https://mall.jd.com/view_search-13926968-0-99-1-24-1.html
- Verified 1: 2026-10-23, direct pages fetched HTTP 200; branded title and category links confirmed; product list remains loading.
- Verified 2: 2026-10-23, iteration 8 both URLs fetched again HTTP 200; same title, navigation, and numeric-data limits.
- Used in: how-rituals-entered-china
- Notes: No review total, assortment estimate, live price, sales claim or checkout claim. The self-operated label does not disclose wholesale terms.

### Rituals China regional focus, candle price and store trial format
- Value: Yangtze River Delta and Greater Bay Area stated focus; RMB 275 for a 290 g candle; at least five gift-set variants per classic range; reporter observes trial sink in Shenzhen MixC World store.
- As of: February 25, 2025, 15:40 China time.
- Source: Jiemian News (界面新闻), reporter Zhu Yongling; direct brand statements and reporting.
- URL: https://www.jiemian.com/article/12390823.html
- Verified 1: 2026-10-23, desktop/mobile pages fetched; date, price, weight, gift-set count and regional statement confirmed.
- Verified 2: 2026-10-23, iteration 8 fresh HTTP 200; extracted article text confirms all claims and publication date.
- Used in: how-rituals-entered-china
- Notes: Historical retail example, not current JD price or brand net revenue. No cost-per-store derived. Global revenue figures not reused.

### Rituals domain dispute: receipt-to-decision interval
- Value: Complaint received July 7, 2021; decision September 15, 2021 orders rituals.cn and rituals.com.cn transferred. Seventy elapsed calendar days calculated from those dates. Case facts establish Chinese platform sales by 2021.
- As of: September 15, 2021, decision DCN2021-0019.
- Source: WIPO Arbitration and Mediation Center (世界知识产权组织仲裁与调解中心).
- URL: https://www.wipo.int/amc/en/domains/decisions/text/2021/dcn2021-0019.html
- Verified 1: 2026-10-23, full Chinese decision fetched; receipt date, signed decision date and transfer order confirmed.
- Verified 2: 2026-10-23, iteration 8 HTTP 200 and web-reader re-fetch; dates and remedy unchanged; independent date subtraction equals 70.
- Used in: how-rituals-entered-china
- Notes: Not a launch delay, implementation duration, statutory promise, lost-sales estimate or legal fee. No such amounts disclosed in decision.

### Rituals regional refit: future Asia timing
- Value: Announced Asia/Middle East refit start Q1 2027, after new ranges reach those regions; Europe emphasis in August/September. EUR 40 million global/multi-country headline is not a China entry budget.
- As of: July 8, 2026 announcement.
- Source: Rituals Chinese newsroom (Rituals怡式新闻中心).
- URL: https://www.rituals.com/newsroom/zh-CN-CN/267730-rituals-30-1-500/
- Verified 1: 2026-10-23, announcement fetched and regional timing confirmed.
- Verified 2: 2026-10-23, iteration 8 fresh HTTP 200; Q1 2027 wording and scope confirmed.
- Used in: signal-watch-list.md; research exclusions for how-rituals-entered-china
- Notes: Monetary headline omitted from the draft. Future timing is an announced plan, not proof of completion or a platform fee change.

## Partner P26: Tmall Partner onboarding, 2026-10-23

### Tmall Global merchant controls and data rights, current agreement
- Value: clause 5.1 requires prior written consent for account transfer or authorization to another person and makes the merchant responsible for account activity. The agreement names Taobao China Holding Limited and Chuanshen Holding Limited. Clause 10.3 acknowledges lawful merchant/other-party data rights before claiming platform data rights and restricting reuse/disclosure; clause 10.4 governs personal-data handling. Clause 16.3 retains the no-assignment requirement. The 90-day management plan in P26 is editorial advice, not a rule in this agreement.
- As of: May 19, 2026 (latest update/effective date in Chinese and English).
- Source: Tmall Global (天猫国际), 天猫国际商户服务协议 服务条款.
- URL: https://terms.alicdn.com/legal-agreement/terms/b_platform_service_agreement/20231027155750546/20231027155750546.html
- Verified 1: 2026-10-23, direct HTTP 200; Chinese date, parties and relevant clauses read. Snapshot merchant-check1.html and timestamped JSON in logs/runs/p26-work.
- Verified 2: 2026-10-23, direct re-fetch at createarticle iteration 8, HTTP 200; same source date and clauses confirmed. Snapshot merchant-check2.html and JSON retained.
- Used in: tmall-partner-onboarding; citation refresh in replace-distributor-china, tmall-agency-fake-orders-brand-liability, tmall-partner-agency-vs-distributor-model, tmall-partner-contract-terms, tmall-partner-store-ownership, including FR/DE/ES and retained English outputs.
- Notes: This entry supersedes current-use reliance on the October 2022 agreement entries above. Historical verification dates remain preserved. The account-transfer and liability conclusions remain unchanged; corrected the ownership article's contracting parties and the contract article's overly broad data/handover wording. Updated local article bodies and updatedDate; this draft run does not deploy them.

### Taobao/Tmall permissioned sub-account functions
- Value: section 4.2 permits role-based sub-accounts for third-party service providers. Section 7.1 covers permission management, disabling/restoring accounts and operation-record queries. Actual functions depend on the product and enabled store permissions; this does not override Tmall Global's merchant agreement.
- As of: June 2, 2023 (latest revision date displayed).
- Source: Taobao (淘宝), 子账号软件产品使用许可协议.
- URL: https://terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201802012028_72666.html
- Verified 1: 2026-10-23, direct HTTP 200; Chinese date, third-party provider definition and permission/log functions confirmed.
- Verified 2: 2026-10-23, re-fetched at createarticle iteration 8, HTTP 200; same date and provisions. Snapshots subaccounts-check1.html and subaccounts-check2.html plus timestamped JSON retained in logs/runs/p26-work.
- Used in: tmall-partner-onboarding.
- Notes: Revalidated the older primary text rather than treating its age as evidence that it is withdrawn. No numerical sub-account entitlement or universal feature guarantee asserted.

### Tmall Global calculator: annual period and warehouse cash assumptions
- Value: each annual model period is 12 months; editable bonded-warehouse deposit input 100,000 RMB; editable tax-prepayment input 300,000 RMB; sum 400,000 RMB before other budget lines.
- As of: October 2026 repository and live calculator snapshot.
- Source: TheChinaPath calculator data, src/pages/tools/tmall-global-setup-and-run.astro.
- URL: https://www.thechinapath.com/tools/tmall-global-setup-and-run
- Verified 1: 2026-10-23, local source inspected before drafting; cited live URL fetched HTTP 200, values and twelve-month wording found.
- Verified 2: 2026-10-23, local source re-read at iteration 8; live URL independently re-fetched HTTP 200 with the same input values and period. Both local and live snapshots retained in logs/runs/p26-work.
- Used in: tmall-partner-onboarding.
- Notes: The proprietary-number fallback is labeled as calculator assumptions. These are not mandatory fees, market averages, measured client results, approval-duration data or TheChinaPath service prices. No store-approval timeline exists in the calculator; corrected P26's master brief and regenerated its brief. Original numerical inputs are unchanged.

## Telehealth Ledger 10L research, October 24, 2026

### Internet consultation eligibility and record retention
- Value: Article 18 requires diagnostic records and clinician revisit judgment; first-diagnosis or unsuitable visits redirected to physical care. Article 19: medical records at least 15 years; consultation process material at least 3 years. Article 24 prohibits medical staff referring patients for personal gain.
- As of: February 8, 2022; republication June 10, 2022
- Source: NHC and SATCM, via CHIMA
- URL: https://www.chima.org.cn/Html/News/Articles/15589.html
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: Full regulatory text, not consultation draft. NHC direct fetch refused; full CHIMA republication compared with regulator summaries.

### Medical advertising classification
- Value: Neutral institution information can be non-advertising; subjective promotion and health education with relevant service links can constitute advertising.
- As of: July 17, 2025
- Source: SAMR, NHC and SATCM, medical advertising classification guide
- URL: https://www.samr.gov.cn/zt/ndzt/2025n/ggf/zyfb/art/2025/art_8daf3ed052d749fcbee6eb3909b29e10.html
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: No blanket ban on neutral booking pages. Date checked after whitespace normalization.

### Medical internet advertisement review
- Value: Order 72 articles 7 and 8 require applicable medical ad review and prohibit disguised medical promotion in health education.
- As of: February 25, 2023; published March 20, 2023
- Source: SAMR, Internet Advertising Measures
- URL: https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/fgs/art/2023/art_d93a579afd45413e8576e4623fab348f.html
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: Advertising review is distinct from clinical licensing.

### Sensitive health information
- Value: Medical-health data is sensitive. Purpose, necessity, safeguards and separate consent provisions apply. Articles 38 and 39 govern overseas transfers.
- As of: August 20, 2021
- Source: NPC, Personal Information Protection Law, CAC publication
- URL: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: Consent alone does not complete export assessment. Foundational duties, not an exhaustive account of implementing rules.

### Foreign-owned hospital pilot boundaries
- Value: Qualifying tertiary hospitals permitted in specified areas. Psychiatric hospitals and psychiatric inpatient treatment excluded. Electronic-record servers must be in China.
- As of: November 1, 2024; government republication December 1, 2024
- Source: NHC and other departments
- URL: https://app.www.gov.cn/govdata/gov/202412/01/522300/article.html
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: Hospital ownership route does not license an offshore consumer app.

### SohoMD published search-program scope
- Value: 150 keywords in a US telepsychiatry acquisition program.
- As of: Published case checked October 24, 2026; engagement dates unspecified
- Source: TheChinaPath published case
- URL: https://www.thechinapath.com/work/sohomd
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china
- Notes: Source-3 fallback, program scope only. Live page and local files checked twice. Conflicting achieved-doubling wording removed in four locales; no measured doubling or China acquisition results claimed.

### Zhejiang external medical-data cooperation commencement
- Value: Article 19 takes effect October 25, 2026.
- As of: September 2026 publication; effective October 25, 2026
- Source: Zhejiang health departments, Shanghai government republication
- URL: https://dt.sheitc.sh.gov.cn/cms/qtssszzj/3025.jhtml
- Verified 1: 2026-10-24, full text fetched and claims checked.
- Verified 2: 2026-10-24, re-fetched at iteration 8; dates and claims confirmed.
- Used in: how-telehealth-and-wellness-services-reach-patients-in-china (watch list only)
- Notes: Watch list only; provincial rule not yet effective on draft date.

## P27: supermarket supplier fees, checked October 24, 2026

### National retailer-supplier rules: charges and settlement
- Value: Article 3 covers retailers with annual sales of RMB 10 million or more, aggregating chain stores; Articles 10-13 distinguish contracted promotion services from prohibited signing, duplicate barcode and service-free festival fees; store-code charges cannot exceed actual cost; Article 14 caps the agreed goods-payment period at 60 days after receipt.
- As of: Order 17, issued October 13, 2006, effective November 15, 2006.
- Source: Ministry of Commerce (商务部); Beijing Municipal Government (北京市人民政府) official mirror marked effective.
- URL: https://www.mofcom.gov.cn/dl/file/20211203230882.pdf
- Mirror URL: https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/200611/t20061115_780748.html
- Verified 1: 2026-10-24, both URLs fetched; dates, RMB unit, threshold, chain aggregation, restrictions and 60-day receipt trigger confirmed.
- Verified 2: 2026-10-24, both URLs re-fetched during createarticle iteration 8; same rule text and effective status confirmed.
- Used in: china-supermarket-listing-fee
- Notes: Check actual parties and transaction scope. Retailer payment to its supplier does not determine an overseas brand-distributor payment schedule. These are legal parameters, not observed payment behavior or fee quotations.

### Historical clean-up of abusive retail entry charges
- Value: The 2011 clean-up specifically named entry and barcode charges imposed through retailer market advantage; it supplied no national market-price range.
- As of: December 19, 2011, Notice 485; campaign ran December 2011 to June 2012.
- Source: Ministry of Commerce (商务部).
- URL: https://sczxs.mofcom.gov.cn/article/at/cl/201112/20111207899451.shtml
- Verified 1: 2026-10-24, dated original fetched; scope and named charges confirmed.
- Verified 2: 2026-10-24, original re-fetched in iteration 8; date and text unchanged.
- Used in: china-supermarket-listing-fee
- Notes: Historical enforcement context only; no 2012 price represented as current.

### Promotion service disclosure and delivery
- Value: Special display and website/mobile placements can be promotional services; basic supplier marketing services cannot simply be relabeled; fee disclosure should identify corresponding services.
- As of: January 26, 2015, date signed at end of notice.
- Source: Ministry of Commerce (商务部).
- URL: https://sczxs.mofcom.gov.cn/article/cbw/cl/201502/20150200885280.shtml
- Verified 1: 2026-10-24, original fetched; service examples, disclosure duty and signature date confirmed.
- Verified 2: 2026-10-24, original re-fetched in iteration 8; same passages confirmed.
- Used in: china-supermarket-listing-fee
- Notes: No current retailer rates in this notice. Old complaint-platform details not reused.

### Zhanjiang current retail-fee reminder
- Value: Warns local retailers against unagreed or unmarked charges, charging without stated services, and arbitrary payment delays or deductions.
- As of: July 9, 2026, 15:40:59.
- Source: Zhanjiang Administration for Market Regulation (湛江市市场监督管理局).
- URL: https://www.zhanjiang.gov.cn/zdlyxxgk/sypaq/aqxf/content/post_2199715.html
- Verified 1: 2026-10-24, original fetched; date and sections 1-3 confirmed.
- Verified 2: 2026-10-24, original re-fetched in iteration 8; same dated reminder and scope confirmed.
- Used in: china-supermarket-listing-fee
- Notes: Local enforcement reminder, not a new national tariff or nationwide survey.

### P27 illustrative budget and fallback
- Value: Assumed 4 stores x 2 weeks x RMB 800 per store-week = RMB 6,400; assumed RMB 16 contribution per unit gives 400 units to cover display expense.
- As of: October 24, 2026.
- Source: TheChinaPath editorial arithmetic; all inputs are hypothetical, not proprietary observations.
- Verified 1: 2026-10-24, arithmetic checked.
- Verified 2: 2026-10-24, recalculated 4*2*800 and 6400/16.
- Used in: china-supermarket-listing-fee
- Notes: Excludes tax and fixed launch costs; not a quote, market benchmark, client outcome or causal sales-lift measurement. No relevant calculator/case supermarket-fee figure fits; settled fallback is no proprietary number.
