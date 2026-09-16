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
