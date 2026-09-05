---
name: createarticle
version: 2.1.0-thechinapath
description: |
  Draft a production-ready Markdown article for a given website from a brief.
  Takes three inputs: (1) the target website, whose voice, positioning and
  service names must be learned first (from a live fetch or a cached site
  profile); (2) the target audience, "people out of China" or "Chinese
  companies"; (3) the content brief or slot template. Runs a Chinese-language
  deep research step with double source validation, then the 13-iteration
  workflow, US journalist prose, cited stats, SEO within hard ceilings, real
  tables, the body-only character count, and an appended feature-image
  prompt block. House version for TheChinaPath: iteration 7 is a cadence
  pass, never planted errors; every Anchor and Ledger carries a proprietary
  number. Pairs with content-quality-us.
license: MIT
---

# CreateArticle: Website Article Builder (TheChinaPath house version)

Produce one on-brand, production-ready Markdown article for a specified
website. Output drops straight into the site's content collection. Run the
full pipeline without pausing for approval.

**House change from the upstream skill.** The upstream CreateArticle plants
deliberate typos in iteration 7 to defeat AI detection. This version does not.
Iteration 7 is a cadence pass. No project file can reintroduce planted
errors. See "Cadence pass" below.

**Project files win.** When run inside the TheChinaPath repo,
`editorial/CLAUDE.md`, `editorial/SPEC.md` and `editorial/briefs/PREAMBLE.md`
override anything here that conflicts.

## Inputs (required)

This skill takes three parameters. If any is missing, ask for it before
drafting, then proceed without further pauses.

1. **website**: the site the article is being written for and published on.
   Its voice, positioning, service names and internal references are drawn
   from what the site says, not assumed.
2. **audience**: one of
   - `people out of China`: international companies looking to enter or
     operate in the mainland China market.
   - `Chinese companies`: mainland businesses (typically expanding abroad or
     buying web services). This flips the framing (see Audience adaptation).
3. **brief**: the topic, angle, section outline, primary and secondary
   keywords, target length, the mandated table, the proprietary number
   candidates, the internal links and the CTA. For a Signal, Teardown or
   Refresh, the brief is the slot template plus the source, brand or URL
   picked on the day.

## Step 0: learn the website first (mandatory)

Before writing a single line:

1. If the project keeps a site profile cache (for TheChinaPath:
   `editorial/sources/site-profile.md`) and it is less than a month old, read
   it instead of fetching. Otherwise web_fetch the homepage and the section
   the article will live in.
2. If the brief reworks or extends an existing page (every Refresh does),
   read that page's source file in the repo and treat it as canonical for
   tone and structure. Keep what works; upgrade what the spec requires.
3. Read one existing article in the same section to match frontmatter shape,
   section labeling, citation style, CTA voice, and the image directory
   convention.
4. Note the site's positioning, service names, brand tokens, and any house
   phrasing. Mirror them. Do not invent service names or claims the site does
   not make.

## Step 1: deep research in Chinese (mandatory, before any drafting)

Do not write a sentence of body copy until this step is logged.

1. **Read the ledger first.** If the project keeps a source ledger (for
   TheChinaPath: `editorial/sources/verified-sources.md`), read it. Any figure
   already logged, dated within 12 months and marked verified twice is
   reused with its exact citation. Do not research it again.
2. **Research in Chinese.** For every figure and China-specific claim the
   brief asks for, run web searches in Chinese first (simplified characters,
   platform and regulator names in Chinese: 天猫国际, 京东国际, 抖音电商,
   小红书, 微信, 海关总署, 商务部, 市场监管总局, 国家药监局). Target the
   platform's own merchant documentation and fee schedules, regulators'
   notices, listed-company filings and earnings releases, and dated trade
   publications (亿邦动力, 36氪, 晚点, 界面, 财经, 电商报). English-language
   sources come second, and only as confirmation or when no Chinese source
   exists.
3. **Validate every source twice.** A figure enters the draft only after both
   checks pass, and both are recorded.
   - **Check 1, at research time.** Fetch the URL. Confirm the number, the
     unit, the period and the publication date appear on that page. A source
     that only repeats another source is not the source: follow the chain to
     the original and cite that.
   - **Check 2, before the draft is finished.** Re-fetch every URL used in
     the article. Confirm the page is still live and still says what the
     citation says. Any mismatch: fix the citation or cut the claim.
   Never cite a competitor's blog for a platform fact. Never cite one of our
   own articles for an external figure.
4. **Find the proprietary number.** Every Anchor and Ledger carries at least
   one figure only this agency can publish, labelled as such. Check, in
   order: the ledger's "Proprietary figures" section, the calculators'
   category data in the repo, the published case pages. Never invent one;
   leave `TODO: proprietary number` if none fits.
5. **Write the research note before drafting.** List each claim with its
   Chinese source, the English gloss, the date, the URL and the result of
   check 1. This note goes into the run log. Figures without a passing
   check 1 do not enter the draft.
6. **Append to the ledger** before finishing, with both verification dates.

Never fabricate figures or attributions. A missing number is better than an
unsourced one.

## Audience adaptation (drives framing, not just tone)

Branch the whole article on the `audience` input.

### audience = "people out of China"
- Reader: a foreign brand's founder, commercial director or ecommerce lead
  who does not know the China commerce stack.
- Job of the piece: say what it costs, what the sequence is, and what
  breaks. Demystify and de-risk with figures, not reassurance.
- Explain Chinese platforms in outsider terms on first mention, using the
  house naming list: Xiaohongshu (RedNote), Douyin, Tmall Global, JD
  Worldwide, WeChat.
- Proof: figures from stores under management, calculator data, published
  case pages.
- CTA: the one the brief names (Compass shortlist, a calculator, a call).

### audience = "Chinese companies"
- Reader: a mainland business, often going global or sourcing services.
- Job of the piece: speak as a peer who also knows the outside market.
- Do not over-explain Chinese platforms; they are assumed knowledge.
- Proof: bridge credibility, both sides of the wall.
- CTA: matched to the outbound or service need in the brief.

If the brief and audience seem to conflict, follow the brief's explicit topic
and adjust framing to the audience.

## Standing editorial rules (never break)

- American English, US daily-newspaper journalist style. Short declarative
  sentences. Concrete nouns. Easy to read.
- NO em dashes anywhere, ever. Commas, periods, parentheses, or colons.
- NO exclamation marks.
- NO summary or conclusion sections, ever. End on the CTA.
- NO deliberate errors, typos, missing apostrophes or word swaps. Ever.
- NO three-item rhetorical lists. NO sentence opening with a participle that
  summarises the previous sentence. NO "It's not X, it's Y".
- NO pricing for the site's own services.
- The answer inside the first 60 words.
- All third-party statistics in blockquote citation format with publisher,
  date and URL. Proprietary figures labelled as ours with sample and period.
- Chinese characters only where the term itself is the subject.
- Internal links as markdown links, restricted to the brief's target list.
  Anchor text is the page's subject in plain words, never "learn more".
- Do not include any paragraph related to "why work with us" or similar
  agency self-promotion framing.
- Honor the project's banned-word list (`editorial/CLAUDE.md`, Voice) and
  `.claude/anti-ai-writing-style.md`.

## SEO metadata (hard ceilings, verify with a counter before delivery)

- Title <= 52 characters. The query a buyer types, or its answer. No
  "Ultimate", no "Complete Guide", no brand name in front.
- Meta description <= 152 characters
- Excerpt <= 25 words

If any is exceeded, fix it without being asked.

## Character-count rule

Article "char" targets count the rendered article BODY only. Exclude the SEO
frontmatter fields (title, description, excerpt) and all HTML comments
(including the feature-image block). When a target is given, report both
prose-only and full-body-with-tables counts, then land on the target.

## File format (Claude Code-ready Markdown)

- YAML frontmatter: title, slug, description, excerpt, template, author,
  category, platforms, tags, keyTakeaways (see `editorial/SPEC.md`).
- Editorial labels as HTML comments: `<!-- HERO SECTION -->`,
  `<!-- INTRODUCTION -->`, `<!-- SECTION: ... -->`, `<!-- CTA -->`.
- CTAs as one linked sentence after `CTA:`. No buttons, no HTML.
- Zero HTML in body copy except the `<div class="table-scroll">` wrapper
  around each table (blank line inside each side) and HTML comments.
- Filename matches the slug, for example `china-distributor-vs-own-store.md`.
- Hard-wrap body lines at about 80 characters.

## Visual formatting ("make it visual")

Every Anchor and Ledger: the mandated table near the top with real figures,
one topical table inside the densest section where the brief calls for it,
stats in blockquotes. No images inside the body. Keep tables aligned and
scannable, no more than six columns.

## The 13-iteration workflow

Print the tracker, run all iterations in order, brief reflection between each.
No approval pauses. Do not skip, merge, or reorder. Show the iteration
running and which findings and updates are done: for each iteration, state
what was checked or changed and the specific findings or edits before moving
to the next one, not just a silently updated checklist.

```
[ ] Iteration 1  : journalist-style American English draft
[ ] Iteration 2  : weakness identification (write the list out)
[ ] Iteration 3  : rewrite addressing weaknesses
[ ] Iteration 4  : production-readiness review
[ ] Iteration 5  : AI-detection removal pass
[ ] Iteration 6  : em dash cleanup + citation formatting
[ ] Iteration 7  : cadence pass (house variant, no planted errors)
[ ] Iteration 8  : paragraph and citation structure check + source check 2
[ ] Iteration 9  : SEO metadata generation (within hard limits)
[ ] Iteration 10 : second AI-detection pass
[ ] Iteration 11 : final human touch pass
[ ] Iteration 12 : visual formatting enhancement
[ ] Iteration 13 : five visual concepts + one photorealistic image prompt
```

Iteration 2 writes the full 10-weakness list. Iteration 8 runs the second
source validation (re-fetch every cited URL). Iteration 9 verifies SEO
counts. Iteration 13 proposes five visual concepts, then one ultra-detailed
photorealistic feature-image prompt under the China rule.

## Cadence pass (iteration 7, and the humanizing rule everywhere)

Copy should read human because a person with deadlines wrote it, not because
it contains mistakes. Humanize through cadence, structure and word choice
only:

- Vary sentence length on purpose. Follow a long sentence with a four-word one.
- Break at least three parallel structures. Real writers do not build every
  list the same way.
- Let one paragraph run long and the next run to a single line.
- Allow a mid-thought aside in parentheses, once or twice, not everywhere.
- Use contractions where a reporter would.
- Cut the tidy closing line at the end of a section when it performs rather
  than informs.

Never: missing apostrophes, then/than or your/you're swaps, misspellings,
comma splices for effect, or register shifts into slang. If copy still reads
symmetrical, vary rhythm again. State in the run log that iteration 7 ran as
the cadence variant.

## Image prompt rules

- **China rule, permanent.** Every hero image is visibly set in China and
  shows the commerce surface the piece is about on a screen: a Tmall Global
  or JD Worldwide store page, a Douyin store or livestream room, a
  Xiaohongshu note grid, a WeChat mini programme storefront, a
  bonded-warehouse or ERP dashboard, with recognisable Chinese interface and
  characters. Rotate through typical Chinese cities and places (Hangzhou,
  Guangzhou, Shenzhen, Chengdu, Wuhan, Ningbo, Chongqing, Nanjing, a bonded
  zone, a livestream studio, a distributor's showroom, a wet market, a
  mall). Name the place in the prompt and vary it from one piece to the
  next. A generic desk, a globe, a handshake, a container ship or a Western
  office does not pass. The brief's feature-image line is a subject hint
  only; this rule wins over it.
- **People rule, permanent.** Any person in the image is Chinese. Only
  Chinese people, never a Western marketer, founder or tourist, whatever the
  audience of the article.
- **Look rule, permanent.** Not a perfect AI render. Vivid, candid,
  normal-life photography with normal-life defects: a phone or handheld
  camera feel, slight motion blur, mixed or uneven light, a cluttered desk,
  cables, a smudged screen, someone mid-gesture, a cropped edge. Write these
  imperfections into the prompt. No studio polish, no symmetrical
  composition, no flawless skin, no cinematic color grade.
- Platform-agnostic, single unbroken block of prose.
- Photorealistic, documentary. Natural or office lighting as found, not
  staged.
- NO Midjourney parameters, NO section headers, NO commentary.
- Real-life candid photography only. Never diagrams or infographics.
- No watermark, no added captions, no logos outside the app interfaces that
  appear on the screens. Chinese characters on the screens are expected.

## Feature-image block (append, outside the char count)

After the CTA, append this HTML comment. It never renders and never counts
toward the char target. Use the image directory convention discovered in
Step 0. For TheChinaPath it is `public/Images/insights/`.

```
<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's heroImage and OG image.

- Save to:    public/Images/insights/<slug>.webp
- Reference:  /Images/insights/<slug>.webp
- Format:     .webp, landscape 3:2, web-optimized (China CDN friendly)
- Style rule: candid normal-life photo with real-life defects, China
              setting, only Chinese people, the Chinese commerce surface
              the piece is about visible on screen (Tmall Global, JD
              Worldwide, Douyin, Xiaohongshu, WeChat). No AI polish, no
              diagrams, no infographics, no watermark.

IMAGE PROMPT (use verbatim):

<single unbroken prose block per the image prompt rules above>
===================================================================== -->
```

## Reference (use specifically, not generically)

China commerce: Tmall Global (天猫国际), Tmall (天猫), JD Worldwide (京东国际),
Douyin e-commerce (抖音电商), Kuaishou (快手), Xiaohongshu (小红书), WeChat
mini programme (微信小程序), Weixin Store (微信小店), Fliggy (飞猪), Ctrip
(携程), bonded warehouse (保税仓), direct mail (直邮), the cross-border retail
import positive list (跨境电商零售进口商品清单), the per-order and annual
cross-border quotas, Tmall Partner (TP), general trade (一般贸易), GACC
(海关总署), MOFCOM (商务部), SAMR (市场监管总局), NMPA (国家药监局), CIQ
label (中文标签), Blue Hat (蓝帽子), PIPL, Double 11 (双十一), 618, Chinese
New Year cut-off.

Brand tokens: take them from the fetched site or the project's
`.claude/CLAUDE.md`. The site wins if the brief differs.

## Delivery checklist (verify before presenting)

- Website voice and positioning reflected (from fetch or site profile)
- Chinese deep research note written, every figure passed check 1 and check 2
- The answer inside the first 60 words
- The proprietary number present and labelled, or flagged
- Framing matches the audience input
- Title <= 52, meta <= 152, excerpt <= 25 words (counted, not estimated)
- Zero em dashes, zero exclamation marks, no summary or conclusion section
- Zero deliberate errors
- Stats in blockquotes with publisher, date and URL
- At least one wrapped table with real figures
- Three to five internal links to existing targets
- Body char count matches the target (SEO frontmatter and comments excluded)
- Filename equals the slug
- Feature-image comment block present with the correct slug path
- Ledger appended with both verification dates
- Present the file path and a one-line summary

## Relationship to content-quality-us

Both skills forbid planted errors, so they are compatible on one file.
CreateArticle builds the article. `content-quality-us` is the stricter 18-pass
audit that runs on the finished draft before publication. Where the two give
different SEO ceilings, the tighter one (52 / 152 / 25 words) wins.
