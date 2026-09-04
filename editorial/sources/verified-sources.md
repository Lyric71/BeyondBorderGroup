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

## Platform fees

(append entries here. Tmall Global deposit, annual fee and commission are in the calculator entry above; the official 天猫国际资费标准 page requires a Taobao login and was not fetchable on 2026-09-04)

## Regulatory

### Cross-border retail import limits per shopper
- Value: 5,000 RMB per single transaction, 26,000 RMB per year
- As of: effective January 1, 2019 (document 财关税〔2018〕49号, November 2018)
- Source: Ministry of Commerce (商务部) policy database
- URL: https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=65769
- Verified 1: 2026-09-04
- Verified 2: 2026-09-04
- Used in: china-distributor-vs-own-store
- Notes: the page carries the limits and the effective date. It does not carry the 70% VAT rule; do not cite this URL for that.

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
