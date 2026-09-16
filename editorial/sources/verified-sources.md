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

