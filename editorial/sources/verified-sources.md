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
- Notes: the 1,700-plus new brands figure is not printed in the draft; the ledger already carries a separate Tmall Global new-brand entry for 2025, reconcile before using both.

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
- Notes: the rule text sits in an attached PDF/OFD on the NDRC notice page that did not parse. Cite the effective date and the issuing bodies only. Do not quote article numbers from this rule until the attachment has been read.

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
- Used in: china-trade-fairs-find-distributor
- Notes: this is the OVERSEAS visitor Q&A. Domestic visitor rules may differ. The date comes from the URL path; if the page later prints a date, prefer it.

### Eighth CIIE buyer and matchmaking figures
- Value: 43 trading delegations and 700+ sub-delegations; 460,000+ registered visitors (+7%); buyer corridor with 20 retail chains and leading ecommerce platforms plus 14 central SOEs, 600+ rounds of talks; key buyer selection sessions 1,300 rounds in agri-food, consumer goods and medical; trade and investment matchmaking 5,000+ companies and parks, 300+ cooperation intentions; intended deals US$83.49bn (+4.4%)
- As of: November 2025 (发布日期 2025年11月10日)
- Source: China International Import Expo Bureau (中国国际进口博览局)
- URL: https://www.ciie.org/zbh/businessEx/expoNews/20251112/54275.html
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor
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
- Used in: china-trade-fairs-find-distributor
- Notes: general trade. Cross-border retail import goods are governed by 商财发〔2018〕486号 (ledger), which exempts them from first-import registration and labelling rules.

### Compass shortlist turnaround (proprietary, already published)
- Value: a Compass shortlist usually takes two to three weeks from the brief
- As of: September 2026
- Source: TheChinaPath site copy (src/content/pages/compass/en.ts, shortlist.description; src/content/pages/partner-guides/distributor.ts, FAQ)
- Label in copy: "from Compass, September 2026"
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24
- Used in: china-trade-fairs-find-distributor
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
- Used in: verify-chinese-company-qichacha
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
- Used in: douyin-agency-cost
- Notes: rates are the merchant-set commission (推广费) on the settlement base, not the platform's fee. The creator separately pays Douyin a technical service fee of 10% of commission at ratings A, B+ and B, 20% at C, 40% at D (same rule, 2.1.1); that is a creator-side cost.

### Douyin tiered creator commission is marginal, not retroactive
- Value: in the 阶梯佣金策略 the base rate applies up to the sales threshold and the raised rate only above it
- As of: August 2026
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, section 2.3.1
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-rendered at iteration 8; "销量门槛按照基础佣金生效，销量门槛以上按照升佣佣金生效" present)
- Used in: douyin-agency-cost
- Notes: platform creator ladder only. No primary source was found for DP-side commission ladders; the IT之家 lead (ithome.com/0/943/132.htm) returned 404 on 2026-09-24.

### Creator commission settlement: 15 days after receipt, refunds clawed back
- Value: commission settled 15 days after the buyer confirms receipt (later if the merchant payout settles later); cross-border orders add 2 working days; a refund within the after-sale period cancels commission and settled commission is clawed back (from the commission account for cross-border); after the window, commission stands. Cross-border base = paid amount + host coupon - shipping - tax - packing + logistics offset
- As of: August 2026
- Source: Douyin E-commerce (抖音电商), 《精选联盟推广费/服务费结算规则》, sections 2.1.1 to 2.1.5
- URL: https://school.jinritemai.com/doudian/web/articlev0/112620
- Verified 1: 2026-09-24
- Verified 2: 2026-09-24 (re-rendered at iteration 8, unchanged)
- Used in: douyin-agency-cost, douyin-return-rate
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
- Used in: tmall-partner-agency-vs-distributor-model
- Notes: the NPC amendment decision on gov.cn (https://www.gov.cn/xinwen/2022-06/25/content_5697697.htm) confirms 本决定自2022年8月1日起施行. The law states no numeric safe-harbor market share; do not print one without the SAMR implementing rule. Relevant to every distributor price-control piece.

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
- Used in: payment-terms-chinese-distributor
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
- Notes: the amended rule text is on the MOFCOM policy database, https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104749 (both checks 2026-09-24). This supersedes the note on the existing Anti-Monopoly Law entry ("the law states no numeric safe-harbor market share"): SAMR now sets one. Add that cross-reference to the AML entry.

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
- Anti-Monopoly Law: resale price maintenance ban and fines (policy.mofcom.gov.cn id=97047): re-fetched twice 2026-09-24. Add china-distributor-price-control-parallel to Used in, and point its Notes to the SAMR safe-harbor entry above.
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

### Re-verified ledger entries reused (no new entry; add the slug to Used in)
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
