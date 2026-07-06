# Build Spec — 3P Model: Platform Comparison Calculator (Own Flagship Store)

**Deliverable for Claude Code.** Build a single self-contained `index.html` file (HTML + CSS + vanilla JS, no build step, no framework) that lets any brand run its own cross-border e-commerce (CBEC) flagship-store unit economics and compare **Tmall Global vs JD Worldwide** side by side. All money shown in **RMB and USD**. The USD/CNY rate is fetched live on page load.

Reference: this operationalizes the "Simple Financial Approach — Cost Basis Model (Sell-out)" from the *Mous China Cross-Border Opportunity & Commercial Feasibility* deck (Step 4): Consumer Price → Landed Cost → Platform/Payment Fees → Operating Fee → Marketing. The tool turns that framework into an editable calculator so any brand can plug in its own numbers.

> **v2 — defaults verified against Chinese-language sources** (天猫国际 official fee guides, 京东全球购 platform rules on jdw-rule.jd.hk, and Chinese customs CBEC policy). Corrections vs v1: Tmall Global flagship deposit lowered to ¥50,000 (R-trademark flagship, not ¥150,000); JD Worldwide payment/transaction fee corrected to **0.9%** (not 0.6%), commission range to **2%–6%**, and deposit to a tiered **~US$5,000** first tier (not flat US$15,000). CBEC tax formula and quota rules added. See §4 and §9.

---

## 1. Goal & scope

- One HTML file. Open it, it works offline except for the FX fetch (which degrades gracefully).
- Two platform columns side by side: **Tmall Global** and **JD Worldwide**.
- Every assumption is an editable input with a sensible pre-filled default.
- Outputs update live on every keystroke (no "Calculate" button needed; still fine to add one).
- Currency: every monetary figure is shown in **RMB (¥)** with the **USD ($)** equivalent beneath or beside it, driven by the live rate.
- Audience: brand marketers and founders, not accountants. Plain labels, tooltips explaining each line, no jargon without a hover definition.

Out of scope: saving to a server, login, multi-currency beyond USD/CNY, tax/legal advice. This is a directional planning model, not accounting.

---

## 2. The model (formulas)

All calculations run **per unit** first, then scale to **monthly**. Base currency of the math is **RMB**; USD is a display conversion only (`usd = rmb / fxRate`).

### 2.1 Global inputs (shared, entered once)

| Key | Label | Default | Notes |
|---|---|---|---|
| `retailPrice` | Retail price per unit (¥) | 299 | Consumer-facing price incl. tax if tax is consumer-paid |
| `volume` | Monthly sales volume (units) | 1000 | |
| `landedCost` | Landed cost / COGS per unit (¥) | 90 | Factory cost + international freight + import into bonded warehouse. From deck: "COGS + cross-border logistics" |
| `fxRate` | USD → CNY rate | fetched live | Editable override; see §3 |

### 2.2 Per-platform inputs

Each platform has its own column of the same input keys. Defaults differ (see §4).

| Key | Label | Type |
|---|---|---|
| `commissionPct` | Platform commission (% of GMV) | % |
| `paymentPct` | Payment / gateway fee (% of GMV) | % |
| `cbecTaxPct` | CBEC comprehensive tax (% of price) | % |
| `cbecTaxPayer` | Who pays CBEC tax | select: `consumer` \| `brand` |
| `tpFeePct` | TP / operating service fee (% of GMV) | % |
| `fulfillmentPerUnit` | Fulfillment per order (¥/unit) | ¥ |
| `marketingPct` | Marketing / traffic (% of GMV) | % |
| `annualFee` | Annual platform/technical fee (¥/yr) | ¥ |
| `deposit` | Security deposit (¥, refundable) | ¥ |

> Design note: put the four "operating" inputs (`tpFeePct`, `fulfillmentPerUnit`, `marketingPct`) at a shared default but keep them **editable per platform**, because traffic cost and TP fees legitimately differ by platform.

### 2.3 Per-unit calculation (compute for each platform)

```
GMV_unit            = retailPrice
commission_unit     = retailPrice * commissionPct
payment_unit        = retailPrice * paymentPct
tpFee_unit          = retailPrice * tpFeePct
marketing_unit      = retailPrice * marketingPct
fulfillment_unit    = fulfillmentPerUnit
cbecTax_unit        = (cbecTaxPayer == "brand") ? retailPrice * cbecTaxPct : 0
cogs_unit           = landedCost

variableCost_unit   = cogs_unit + commission_unit + payment_unit + tpFee_unit
                      + marketing_unit + fulfillment_unit + cbecTax_unit

contribution_unit   = retailPrice - variableCost_unit
contributionMargin  = contribution_unit / retailPrice      // %
```

### 2.4 Monthly calculation (compute for each platform)

```
revenue_month       = retailPrice * volume
contribution_month  = contribution_unit * volume
fixedCost_month     = annualFee / 12
operatingProfit_mo  = contribution_month - fixedCost_month
netMargin           = operatingProfit_mo / revenue_month    // %
breakEvenUnits      = (contribution_unit > 0)
                       ? ceil(fixedCost_month / contribution_unit)
                       : Infinity
```

### 2.5 Working-capital memo (compute, display separately — NOT a P&L cost)

```
workingCapital = deposit          // refundable, shown so brands budget cash, not counted in profit
```

### 2.6 Comparison outputs

- Side-by-side table of every line above for both platforms.
- Highlight the higher `operatingProfit_mo` and higher `netMargin` (e.g. green cell + "Best" tag).
- Show the delta: `Δ operating profit = TG - JD` and `Δ margin` in both ¥ and pp (percentage points).
- One-line verdict string, e.g. *"At these inputs, Tmall Global yields ¥X more monthly profit (Y pp higher margin)."*

### 2.7 Rounding / display rules

- Money: round to nearest ¥1 and $1 for totals; keep 2 decimals for per-unit figures.
- Percentages: 1 decimal place.
- Never divide by zero: if `retailPrice` or `volume` is 0, show "—" and suppress margins.
- If `contribution_unit` ≤ 0, flag the platform row red with "Loss per unit — break-even not reachable."

---

## 3. Live FX (USD/CNY) — required behavior

On **page load**, fetch the current USD→CNY rate and populate `fxRate`. All USD figures derive from it.

**Fetch chain (try in order, first success wins):**

1. Primary: `https://api.frankfurter.app/latest?from=USD&to=CNY` → read `data.rates.CNY`. (ECB data, free, no key, CORS-enabled.)
2. Fallback: `https://open.er-api.com/v6/latest/USD` → read `data.rates.CNY`. (Free, no key, CORS-enabled.)
3. Hard fallback constant: `7.20` if both fail.

**Rules:**

- Use `fetch()` with `try/catch` and a ~4s timeout (`AbortController`). Never let a failed fetch break the calculator.
- Show a small status line near the rate: source + timestamp, e.g. *"USD/CNY 7.18 · live via frankfurter.app · 6 Jul 2026 14:20"*, or *"USD/CNY 7.20 · offline fallback"* if both APIs fail.
- The rate field is **user-editable**: if the brand overrides it, recompute USD figures from the override and change the status to *"manual override."*
- A small "↻ refresh rate" control re-runs the fetch chain.
- Cache the last good rate in `localStorage` (`key: usdCnyRate`, plus timestamp) and use it as the fallback before the hard constant, so a brief offline moment still shows a realistic recent rate.

---

## 4. Default benchmark values (pre-fill these)

Directional 2025 benchmarks for a **brand flagship store** selling general consumer goods (e.g. phone cases / accessories). Show a short "ⓘ benchmarks are directional; confirm your category rate at onboarding" note. Sources listed in §9.

### Tmall Global (default column)

| Input | Default | Benchmark range | Note |
|---|---|---|---|
| Commission (`commissionPct`) | 5.0% | 0.5%–5% (mostly 2% or 5%) | 技术服务费 rate on sales; capped at 5%. New category rates公示 2025-07-25, effective 2025-08-01 |
| Payment (`paymentPct`) | 1.0% | ~1% | Alipay (支付宝) |
| CBEC tax (`cbecTaxPct`) | 9.1% | 9.1% general goods | 跨境综合税, see §4.1 formula; default payer = `consumer` |
| TP / operating fee (`tpFeePct`) | 12.0% | 8%–15% | Third-party partner (TP) service fee on GMV |
| Fulfillment (`fulfillmentPerUnit`) | ¥8 | ¥5–¥15 | Bonded-warehouse pick/pack + domestic last-mile |
| Marketing (`marketingPct`) | 20.0% | 15%–30% | Traffic/promo placeholder (no execution) |
| Annual fee (`annualFee`) | ¥60,000 | ¥30,000 or ¥60,000 (软件技术服务年费) | Set by first-level category |
| Deposit (`deposit`) | ¥50,000 | ¥50,000 (R-trademark flagship) → ¥100,000 (TM) → ¥150,000 (专营店) | Refundable. 保证金 by trademark/store type |

### JD Worldwide (default column)

| Input | Default | Benchmark range | Note |
|---|---|---|---|
| Commission (`commissionPct`) | 5.0% | 2%–6% (运营支持服务费) | Operating-support fee by category. Most categories 2%–6% |
| Payment (`paymentPct`) | 0.9% | 0.9% unified (交易服务费) | Transaction service fee, flat 0.9% per order |
| CBEC tax (`cbecTaxPct`) | 9.1% | 9.1% general goods | Same regime as Tmall; default payer = `consumer` |
| TP / operating fee (`tpFeePct`) | 12.0% | 8%–15% | Same basis as TG |
| Fulfillment (`fulfillmentPerUnit`) | ¥8 | ¥5–¥15 | Bonded + last-mile |
| Marketing (`marketingPct`) | 20.0% | 15%–30% | Traffic/promo placeholder |
| Annual fee (`annualFee`) | ¥7,200 | ≈ US$1,000/yr (平台使用费) | Platform usage fee. Convert at live rate on load; store as ¥ = 1000 × fxRate, editable |
| Deposit (`deposit`) | ¥36,000 | ≈ US$5,000 first tier (阶梯保证金: US$2,000 生鲜 → US$30,000+, pharma US$40,000) | Refundable, **tiered by GMV**. Convert at live rate on load |

> **USD-denominated JD fees:** JD Worldwide (京东全球购) quotes deposit and annual fee in USD. On load, seed the ¥ defaults as `usdValue × fxRate` and label them "≈ US$5,000" / "≈ US$1,000". If the user edits the ¥ figure, keep it as entered. Keep both platforms' math in ¥ for consistency.
>
> **JD deposit is tiered (阶梯保证金):** it steps up with cumulative GMV, so US$5,000 is the entry tier, not a fixed number. Treat it as an editable memo input, not a P&L cost.
>
> **JD personal-store mode (个人店):** JD Worldwide also offers a 个人店 model with **no entry fee, no deposit, and 0 commission/扣点**. Add a small note under the JD column so brands know a lower-cost pilot route exists; the calculator itself models the standard brand store.

### 4.1 CBEC comprehensive tax — how it's computed (跨境电商综合税)

Within the cross-border retail-import quota, tariff is 0% and import VAT + consumption tax are levied at **70%** of the statutory amount. Official formula:

```
taxAmount = dutyPaidPrice × [ (vatRate + consumptionTaxRate) / (1 − consumptionTaxRate) ] × 70%
```

For general goods with **13% VAT and 0% consumption tax**, this reduces to `13% × 70% = 9.1%` — the default in the model. Keep `cbecTaxPct` editable, because categories that carry consumption tax (masks/面膜, perfume, cosmetics, alcohol, etc.) produce a **higher** effective rate.

**Quota rules to surface as a note (not modelled in the P&L):**
- Single-transaction limit: **¥5,000**; annual per-person limit: **¥26,000**.
- Above the limit — or a single indivisible item over ¥5,000 — the order is taxed as **general trade at the full rate** (no 70% discount), which materially changes economics for high-ticket items. Show a warning if `retailPrice > 5000`.

---

## 5. UI / layout

Single page, responsive, clean. No external CSS framework required (plain CSS is fine; a tiny bit of fl-grid/flexbox). Suggested structure top to bottom:

1. **Header** — title "3P Model — Flagship Store Platform Comparison", subtitle "Own flagship store unit economics · Tmall Global vs JD Worldwide". Right-aligned live FX widget (rate, source/timestamp, editable field, ↻ refresh).
2. **Global inputs panel** — retail price, monthly volume, landed cost. Each field shows ¥ input with live "$X" helper beneath.
3. **Two-column comparison grid** — Tmall Global | JD Worldwide. Each column = editable inputs (§2.2) at top, computed P&L below. Sticky row labels on the left so the two columns align line-by-line. On mobile, columns stack.
4. **Results block** — per platform: contribution/unit, contribution margin, monthly revenue, monthly operating profit, net margin, break-even units, working capital (deposit). Best platform highlighted; verdict sentence; deltas.
5. **Waterfall / bar visual (optional, nice-to-have)** — a simple CSS bar per platform breaking ¥ retail price into COGS / commission / payment / tax / TP fee / fulfillment / marketing / profit. No chart library needed; pure divs. If a library is used, Chart.js from CDN only.
6. **Footer** — the §4 disclaimer + "Directional model. Not tax or accounting advice."

**Every input** shows both ¥ and $ context and has an `ⓘ` tooltip (title attr or small popover) with a one-sentence definition drawn from the notes in §4.

**Style:** light, professional, high contrast, generous spacing. System font stack. Money in a tabular-figures font (`font-variant-numeric: tabular-nums`). Positive profit green, loss red. Keep it print-friendly (a brand may PDF it).

---

## 6. Technical constraints

- One file, `index.html`. No build tooling, no npm, no bundler.
- Vanilla JS only. No React/Vue. State = a plain JS object; a single `render()` recomputes and repaints on any input change (`input` event delegation).
- Do **not** use `localStorage` for anything except the cached FX rate (§3). All model inputs live in memory / the DOM.
- No secrets, no API keys (both FX endpoints are keyless).
- Must run correctly opened as a local `file://` page (the FX fetch may be CORS-blocked on `file://` in some browsers → the fallback constant + manual override must cover that case gracefully).
- Accessible: labels tied to inputs, keyboard-navigable, sufficient contrast.
- All numbers parsed defensively (`parseFloat` with NaN guards); reject negatives where nonsensical.

---

## 7. Suggested code structure (single file)

```
<style> … </style>
<header> … FX widget … </header>
<main>
  <section id="global-inputs"> … </section>
  <section id="platforms">
     <div class="col" data-platform="tmall"> inputs + outputs </div>
     <div class="col" data-platform="jd">    inputs + outputs </div>
  </section>
  <section id="verdict"> … </section>
</main>
<script>
  const DEFAULTS = { global:{...}, tmall:{...}, jd:{...} };   // from §4
  let fxRate = 7.20;
  async function loadFx() { /* §3 fetch chain + localStorage + status */ }
  function calcPlatform(g, p, fx) { /* §2.3–2.5 → returns metrics */ }
  function fmtRMB(n), fmtUSD(n, fx), fmtPct(n)
  function render() { /* read DOM → calc both → paint both + verdict */ }
  init(): build inputs from DEFAULTS, attach 'input' listener, loadFx().then(render)
</script>
```

---

## 8. Acceptance criteria & test cases

The build is done when all of these pass:

1. **Loads live rate.** On open with network, the FX widget shows a rate near ~7.1–7.3 and a source/timestamp. With network blocked, it shows the fallback and never errors in console.
2. **Editable override.** Typing a new FX rate updates every `$` figure and flips status to "manual override."
3. **Dual currency everywhere.** Every ¥ figure has a matching $ figure; changing the rate updates all $ figures live.
4. **Live recompute.** Changing any input updates both columns and the verdict without a page reload.
5. **Worked example (must match, ±¥1):** with the default inputs — retail ¥299, volume 1,000, landed ¥90, Tmall Global column (commission 5%, payment 1%, TP 12%, marketing 20%, fulfillment ¥8, CBEC tax consumer-paid, annual fee ¥60,000):
   - contribution/unit = **¥87.38**
   - contribution margin = **29.2%**
   - monthly revenue = **¥299,000**
   - monthly operating profit = **¥82,380**
   - net margin = **27.6%**
   - break-even = **58 units**
6. **CBEC payer toggle.** Switching CBEC tax to "brand pays" reduces contribution/unit by `retailPrice × 9.1%` (≈ ¥27.21 at ¥299) and lowers profit accordingly.
7. **Loss guard.** Set marketing to 60%: the platform row flags red "Loss per unit," margins suppressed, break-even shows "not reachable."
8. **Comparison logic.** Lower one platform's commission; that platform is highlighted "Best" and the verdict sentence names it with the correct ¥ delta.
9. **Zero guard.** Set volume 0 → no NaN/Infinity leaks to the screen; totals show "—".
10. **Mobile.** At ~380px width the two platform columns stack and remain readable.
11. **Print.** `Ctrl/Cmd-P` produces a clean one-page layout with inputs and results legible.
12. **JD defaults are correct.** JD Worldwide column loads with payment 0.9%, commission 5% (range hint 2–6%), annual fee ≈ US$1,000, deposit ≈ US$5,000 — and a visible "个人店 / personal-store: 0 fee, 0 deposit, 0 commission" note.
13. **High-ticket tax warning.** Setting retail price above ¥5,000 shows the "over CBEC single-transaction quota — taxed as general trade" warning.

Include a short comment block at the top of the file citing the default-value sources (§9) and a one-line "how the FX fetch works."

---

## 9. Sources for the default benchmarks (cite in code comments)

**Chinese-language / official (primary — v2 defaults verified here):**
- 天猫国际 deposit tiers (R ¥50k / TM ¥100k / 专营店 ¥150k), 年费 ¥30k–60k, 费率 0.5%–5% (new rates effective 2025-08-01): Sohu, *2025年天猫国际入驻攻略* — https://www.sohu.com/a/914093557_121389900 ; TMO Group CN, *天猫国际入驻全攻略（2025）* — https://www.tmogroup.com.cn/insights/tmall-global-guide/
- 京东全球购 阶梯保证金 (US$5k first tier, min US$2k, pharma US$40k), 交易服务费 0.9%, 运营支持服务费 2%–6%, 平台使用费 US$1,000/yr, 个人店 0-fee: official 京东全球购平台规则 — https://jdw-rule.jd.hk/detail?ruleId=950583665543483392 and https://jdw-rule.jd.hk/detail?ruleId=950302479235551232 ; LianLian Global — https://global.lianlianpay.com/article/MTA0MTUzLDZmYw.html
- 跨境电商综合税 formula, 70% levy, 9.1% general goods, ¥5,000 single / ¥26,000 annual quota, over-quota = general trade: 小青蛙跨境 — https://www.lifrog.com/38112.html ; TMO Group CN, *跨境电商综合税公式剖析* — https://www.tmogroup.com.cn/insights/cross-border-ecommerce-taxes/

**English (secondary / cross-check):**
- TMO Group, *Chinese Online Marketplace Fees* — https://www.tmogroup.asia/insights/chinese-online-marketplace-fees/
- Marketing to China, *JD Worldwide guide* — https://marketingtochina.com/full-guide-to-selling-on-jd-jd-worldwide-cross-border-e-commerce/
- EU SME Centre, *CBEC preferential tax* — https://www.eusmecentre.org.cn/faq/are-there-preferential-tax-rates-for-goods-imported-into-china-via-cbec/

**FX endpoints:** Frankfurter — https://api.frankfurter.app/latest?from=USD&to=CNY ; open.er-api — https://open.er-api.com/v6/latest/USD
