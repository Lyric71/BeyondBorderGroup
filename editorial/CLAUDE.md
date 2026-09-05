# TheChinaPath editorial system

You are drafting articles for **thechinapath.com**, the China commerce and
market-entry practice of BeyondBorderGroup (offices in Shanghai, Hong Kong and
Paris). Four slots a week for fifty-two weeks, from `schedule.csv`. Every path
in this folder is relative to `editorial/` at the repo root.

Read this file and `SPEC.md` before every draft. **These two files override any
conflicting rule inside the createarticle, content-quality-us,
generate-image-openai and createblogarticle skills.** The repo's
`.claude/CLAUDE.md` (sections 2 to 6 and 18 in particular) and
`.claude/anti-ai-writing-style.md` still apply on top. The standing preamble
from the master plan is in `briefs/PREAMBLE.md`; it applies to every slot.

## The pipeline, in order

Every piece goes through these steps. None is optional.

| Step | Skill or tool | What it does | Status it sets in `schedule.csv` |
|---|---|---|---|
| 0. Research | Chinese deep research (inside `/createarticle`) | Sources every figure in Chinese first, validates each source twice | (logged in the run log) |
| 1. Draft | `/createarticle` | 13 iterations from the brief (or the slot template) to `output/<slug>.md` | `drafted`, `drafted_on` |
| 2. Quality | `/content-quality-us` | 18-pass loop on the draft, in place | `quality_passed`, `quality_passed_on` |
| 3. Image | `/generate-image-openai` | Hero image from the feature-image block | `image_ready`, `image_generated_on` |
| 4. Publish | `/createblogarticle` + `/deep-translate` + build + git | Creates the post in `src/content/insights/`, wires the image, propagates to FR, DE and ES with native slugs, runs `/deep-translate` (three passes) on each locale, runs `npm run build` and `npx astro check`, commits on main, pushes to origin | `published`, `published_on` |
| 5. Notify | `scripts/notify-publish.mjs` (Resend) | Emails a publish summary to Cyril | (noted in the run log) |

"Draft today's slot." runs steps 0 to 3 and stops at `image_ready`. Step 4
runs from the scheduled publish task (or when a person says "Publish <slug>").
Step 5 follows step 4 automatically.

Step 2 runs on every piece, Signals included. Step 3 uses the
`generate-image-openai` skill only, never `scripts/generate-image.mjs` or the
`/api/generate-image` route in this repo.

## The four slots

| Day | Slot | Brief | Kill condition |
|---|---|---|---|
| Monday | Signal, 700 to 900 words | `briefs/templates/signal.md` against `sources/signal-watch-list.md` | The change moves no number for a foreign brand. Set the row to `skipped`, note why, draft nothing. |
| Tuesday | Anchor, 1,600 to 2,400 words | `briefs/YYYY-MM-DD-<slug>.md`, one per week | None. Anchors always ship. |
| Wednesday | Ledger A or B, 900 to 1,500 words | `briefs/YYYY-MM-DD-<slug>.md`, one per week | The block-2 fee table is identical to a published category. Merge into that page, set the row to `skipped`. |
| Thursday, odd weeks | Teardown, 1,200 to 1,600 words | `briefs/templates/teardown.md` against `sources/teardown-criteria.md` | Any of the four criteria fails, or the brand is a client. Pick another brand; if none passes, `skipped`. |
| Thursday, even weeks | Refresh | `briefs/templates/refresh.md` against the refresh queue (see `RUNBOOK.md`) | The only change would be the year in the title. Take the next item in the queue. |

Anchor weeks that carry an Asset (W03, W08, W16, W21, W27, W33, W38, W45,
W47) produce a second file, `output/guides/<slug>.md`, in the same run. It
publishes to `src/content/guides/` and renders at `/guides/<slug>/`, English
only, printable. Anchor weeks that carry a Report (W11, W23, W36, W42, W50)
draft the report copy to `output/reports/<slug>.md` and leave a
`TODO: gated PDF` marker; a person assembles and gates the PDF. The Anchor
itself still publishes on schedule.

When a slot is skipped, the status is `skipped`, the reason goes in `notes`,
and the run log says so. A skipped Signal is not a failure; it is the rule
working ("no platform news without an operating consequence").

## Project wins over runbook

When `RUNBOOK.md` or `SPEC.md` asks for something this repo cannot do, use
what the repo has and note the substitution in the run log. Do not stall, do
not invent a tool, do not ask. Examples already settled: email goes through
Resend (the contact form's provider); hero images go to
`public/Images/insights/`; assets use the `guides` collection; there is no
`/guides` navigation entry yet, so link assets from the Anchor body.

## Model quality: no compromise

Every step of this pipeline runs on the most capable model available at the
time. Drafting, the quality loop, translation and review run on the best
Claude model in this environment, never a faster or smaller mode. Image
generation uses `gpt-image-2` at `--quality high`. If a step is offered a
cheaper path, decline it and say so in the log.

## Research before writing: Chinese first, validated twice

Not a sentence of body copy gets written before the research is done and
logged. The full procedure is Step 1 of the `createarticle` skill. The rules
that matter most:

- Search in Chinese first (天猫国际, 京东国际, 抖音电商, 小红书, 微信, and the
  regulator or publication names in characters: 海关总署, 商务部, 市场监管总局,
  国家药监局, 财政部关税司). English sources confirm, they do not lead.
- Prefer the platform's own merchant documentation and fee schedules,
  regulators, listed-company filings and dated Chinese trade publications
  (36氪, 亿邦动力, 晚点, 界面, 财经, 电商报). Follow every figure back to its
  original source. Never cite a competitor's blog.
- **Every source is validated twice.** Check 1 at research time: fetch the
  URL, confirm the figure, unit, period and date are on the page. Check 2 in
  iteration 8, before the draft is finished: re-fetch every cited URL and
  confirm it still says what the citation says.
- Both check dates go into `sources/verified-sources.md`. A figure with one
  check is not publishable.
- The research note (claim, Chinese source, English gloss, date, URL,
  check 1 result) goes into the run log before iteration 1 starts.
- Unsourced hard numbers are the current failure mode in the back catalogue.
  This plan exists partly to fix that. Every third-party figure carries an
  external citation, no exceptions.

## The proprietary number

Every Anchor and every Ledger carries at least one number only this agency
can publish, labelled as such in the copy ("from stores under management",
"from Compass shortlist requests", "from calculator runs on this site").
Sources available to you, in order of preference:

1. `sources/verified-sources.md`, section "Proprietary figures". Reuse what
   is logged.
2. The calculators' category data in `src/lib/` and `src/pages/tools/`
   (deposit, annual fee, commission by category for Tmall Global, JD
   Worldwide and Douyin cross-border). These are ours; cite them as
   "TheChinaPath calculator data, <month year>".
3. Published case-study figures on `/work/<brand>` (see `src/content/cases/`).
   Use only what is already published there. Never add a client figure.

If none of the three yields a usable number, leave `TODO: proprietary number`
in the draft, say so in the log, and let the piece ship without it only if
the brief allows. Never invent one.

## The one conflict you must resolve

The upstream CreateArticle skill plants deliberate typos in iteration 7. The
house copy installed at `.claude/skills/createarticle/` already replaces that
with a cadence pass, but the rule stands on its own: **no deliberate errors,
ever.** Humanize through cadence, sentence length, structure and word choice
only. Say in your log that iteration 7 ran as the cadence variant.

## Smaller conflicts, already decided

1. **SEO ceilings.** `content-quality-us` says title under 60 and meta under
   156. The house ceilings are tighter: title 52, meta 152, excerpt 25 words.
   The tighter number wins.
2. **Image paths.** Hero images live at `public/Images/insights/<slug>.webp`
   (capital I, matching the rest of the site) and are referenced as
   `/Images/insights/<slug>.webp`. The pre-commit hook optimises anything
   under `public/Images/`, so the webp lands at the right size on commit.
   Guides reuse the Anchor's hero.
   **Image content, permanent rule:** every hero is visibly set in China and
   shows the commerce surface the piece is about on a screen: a Tmall Global
   or JD Worldwide store page, a Douyin store or livestream room, a
   Xiaohongshu note, a WeChat mini programme, a bonded-warehouse dashboard,
   with recognisable Chinese interface and characters. Rotate cities
   (Hangzhou, Guangzhou, Shenzhen, Chengdu, Wuhan, Ningbo, Chongqing, a bonded
   zone, a livestream studio, a distributor's showroom). Only Chinese people
   in frame. Candid, normal-life photography with normal-life defects, never
   AI polish. The brief's subject line is a hint; this rule wins.
3. **Prices for our own services.** Never. Use "project-based", "monthly
   retainer", or "quoted after the first call". Market cost ranges from
   sourced third parties, platform fee schedules and our calculator data are
   the subject of the cost pieces and are fine.
4. **Currency.** English pages keep USD (with RMB where the platform quotes
   RMB). FR, DE and ES pages convert to euros per `.claude/CLAUDE.md` 6.9b.
5. **Links in body copy.** Unlike the TheRedScroll pipeline, markdown links
   are allowed in the draft, but only to targets on the list in
   `briefs/PREAMBLE.md` plus `/work/<brand>` and `/guides/<slug>`. The
   ASSET BRIEF block still lists every internal link so the publish step can
   verify them. External sources go in the citation line, not inline.
6. **Tables.** The brief requires a real table in a scrollable container.
   Wrap every markdown table as SPEC.md shows (`<div class="table-scroll">`,
   blank line, table, blank line, `</div>`). The layout styles it.

## Territory rule

TheChinaPath owns commerce, cost, distribution, platform operations,
regulatory-for-selling, and storefront social that ends in a transaction. It
does NOT publish on KOL seeding as a service, community management, daily
content production, Baidu SEO, ICP filing or hosting.

When a piece touches those, hand off with the canonical anchor text, once,
and move on:

| Topic | Hand off to | Anchor text |
|---|---|---|
| KOL seeding, community management, content production, social account operations | TheRedScroll | "TheRedScroll, the group's China social media agency" (https://www.theredscroll.com) |
| Baidu SEO, ICP filing, hosting, WeChat development | ChinaWebFoundry | "ChinaWebFoundry, the group's China web and hosting practice" (https://www.chinawebfoundry.com) |

Never describe those as TheChinaPath services.

## Voice

American English. US daily-newspaper journalist style. Short declarative
sentences. Concrete nouns. Grade 8 reading level. `.claude/anti-ai-writing-style.md`
is the voice reference; read it before drafting.

Banned vocabulary: unlock, elevate, seamless, landscape, delve, navigate the
complexities, in today's world, it's worth noting, leverage, holistic,
synergy, ecosystem (except a named platform's), turnkey, end-to-end.

No three-item rhetorical lists. No sentence opening with a participle that
summarises the previous sentence. No "It's not X, it's Y". No summary or
conclusion section; the piece ends on the CTA.

## Absolute rules

- **No em dashes.** Not one, in any language. Commas, periods, parentheses,
  colons.
- **No exclamation marks.**
- **No deliberate errors.**
- **No numbered badges** in any card or list the piece specifies for the
  designer (`.claude/CLAUDE.md` section 4).
- **No fabricated figures.** If it cannot be sourced, cut the claim.
- **No pricing for TheChinaPath's own services.**
- **No HTML in body copy** except the table wrapper and HTML comments.
- **One CTA.** Never "learn more".

## Platform names

On first mention in a piece: Xiaohongshu (RedNote), Douyin, Tmall Global, JD
Worldwide, WeChat, Kuaishou, Fliggy, Ctrip. Chinese characters only where the
term itself is the subject (a label requirement, a filing name, a platform
rule quoted verbatim). This differs from the TheRedScroll house rule; follow
this one here.

## Byline and dates

Every piece carries the byline `TheChinaPath`, a published date and an
updated date. This overrides item 5 of the Anchor spec ("a named human
byline"): Cyril decided on Sept 4, 2026 that organisation-authored pieces
stay attributed to TheChinaPath, never to a person. Do not set `author` to
Cyril Drouin, Echo Peng or Liyan Ye unless a brief says so explicitly.
`pubDate` is the publish day; `updatedDate` equals `pubDate` on first
publish and moves on every Refresh.

## Statistics

Every figure gets a citation with a source name, a date and a URL, in the
blockquote format SPEC.md shows. **Check `sources/verified-sources.md` before
researching.** If the figure is logged, still current and verified twice,
reuse the logged citation. If you find a new one, append it to the ledger
before you finish.

## Named clients you may reference

Only through what `/work/<brand>` already publishes: Camper, ROC, Shiseido RQ
Pyology, Pierre Fabre, Age 20's, Valio, Langnese, Master Martini, Kerry
DaVinci Gourmet, Mission Foods, Bassetti, iGuzzini, Chery, JAC, Exeed,
Exlantix, Jaguar Land Rover, Viessmann, Marriott, Blue Insurance, SohoMD,
BeyondTikTok. Source files: `src/content/cases/`. Never add a figure that is
not on the case page. Never pick a client for a Teardown.

## Audience

Every piece uses createarticle `audience = people out of China`: a foreign
brand's founder, commercial director or ecommerce lead deciding how, and
whether, to sell in China. Pre-entry readers need the cost and the sequence.
In-market readers need the diagnosis. The brief says which one leads.

## Publish notification

When step 4 finishes and the push succeeds, run from the repo root:

```
node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" --section insights --build passed --log editorial/logs/YYYY-MM-DD.md --note "<commit hash>" --todo "<any open item>"
```

It sends one email through Resend (key in `.env`) with the live URL per
locale, the hero image path, build status, open TODOs and the run log path.
Use `--section guides` for an asset. Add `--dry-run` to preview. If the send
fails, say so in the run log and the final message instead of skipping
silently.

## Where files go

| What | Where |
|---|---|
| Standing preamble | `briefs/PREAMBLE.md` |
| Slot templates | `briefs/templates/{signal,anchor,ledger-a,ledger-b,teardown,refresh}.md` |
| This week's Anchor and Ledger briefs | `briefs/YYYY-MM-DD-<slug>.md` |
| Finished draft | `output/<slug>.md` |
| Asset draft | `output/guides/<slug>.md` |
| Report copy | `output/reports/<slug>.md` |
| Hero image | `../public/Images/insights/<slug>.webp` |
| Published post | `../src/content/insights/<slug>.md`, plus `insights-fr/<fr-slug>.md`, `insights-de/<slug>.md`, `insights-es/<es-slug>.md` |
| Locale slug maps | `../src/i18n/insight-slugs.mjs` (`insightEnToFr`, `insightEnToDe`, `insightEnToEs`), one entry per locale per new post |
| Published asset | `../src/content/guides/<slug>.md`, live at `/guides/<slug>/`, English only |
| Source ledger | `sources/verified-sources.md` |
| Signal watch list | `sources/signal-watch-list.md` |
| Teardown criteria and candidate list | `sources/teardown-criteria.md` |
| Site profile cache | `sources/site-profile.md` |
| Run log | `logs/YYYY-MM-DD.md` |
| Schedule and status | `schedule.csv` |
| Master plan (source of the briefs) | `../public/content/editorial-briefs.md`, regenerate with `node editorial/scripts/build-briefs.mjs` |

## Site fetch

createarticle Step 0 requires learning the website first. Do not fetch it
two hundred times. `sources/site-profile.md` caches the site's voice, service
names, page inventory and internal link targets. Read it instead. **Refresh
it on the first working day of each month**, or when a brief says the site
has changed. The repo itself is the ground truth: `src/pages/` for the page
inventory, `src/content/insights/` for existing articles, `src/content/cases/`
for what is published about clients.
