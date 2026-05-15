# Paste this into Claude Code

Drop the `claude-code-kit/` folder somewhere your repo can reach (e.g. into the repo root as `kol-kit/`, or into `~/Downloads/` and reference the absolute path). Then paste the prompt below into Claude Code.

---

## Prompt

```text
I want to add a public-facing "China KOL Directory" section to my existing
site. It's a long-scrolling SEO page that showcases 80 Chinese KOLs across
8 industries (Beauty, Luxury, Hospitality, Food, Pet, Healthcare, Wellness,
Travel), grouped by vertical, with anchor navigation.

The full brief is at `./kol-kit/BRIEF.md`. The data is at
`./kol-kit/data/kols.json`. A reference React + Tailwind implementation is
at `./kol-kit/reference/KOLDirectory.tsx` and `./kol-kit/reference/styles.css`.

Please do this in order:

1. Read the brief end-to-end. Do not skim — every section matters.
2. Read `data/kols.json` and confirm the schema described in BRIEF §5.
3. Inspect this repo. Identify the framework, styling system, and routing
   convention. Confirm them back to me in one sentence.
4. Ask me one question: which route or page the section should live on
   (e.g. new route at /kols, embedded on the homepage, etc.).
5. After I answer, plan the implementation. List the files you will create
   or modify, in order, before writing anything.
6. Implement. Translate the reference component into the host framework
   and styling system — don't drop the .tsx file in if the repo is Vue
   or Astro. Match existing repo conventions exactly.
7. Verify against the acceptance checklist in BRIEF §9. Specifically:
   - curl the new route and confirm all 80 KOL names appear in the HTML.
   - Run Lighthouse (or describe how I would) and report scores.
   - Validate the JSON-LD blocks if you have a way to.
8. Open a draft PR or print the diff with a short summary of what
   changed and the framework decisions you made.

Constraints:
- Server-render the section. No client-only data fetching.
- Don't introduce new dependencies unless absolutely required. If you do,
  explain why in your PR description.
- The data file is the only source of truth. Never hard-code KOL data
  in the component.
- Healthcare section must show the brand-deal disclaimer.
- The `name_zh` (Chinese name) is visually dominant; `name_en` is
  secondary. This is non-negotiable per the agency.
- Never parse the `followers_text` field — render it verbatim.
- Outbound profile links: target="_blank" rel="noopener noreferrer".
  Do NOT add rel="nofollow".

If anything in the brief conflicts with the host repo's conventions,
flag the conflict and ask me which wins. Don't silently override.
```

---

## What to expect

When Claude Code finishes, you should have:

- A new route or section in your site rendering 8 industry blocks with 10 KOLs each.
- A copy of `kols.json` inside the repo (likely `data/`, `content/`, or `public/` depending on framework).
- JSON-LD ItemList + Person blocks emitted per industry section, indexable by Google.
- A short PR description of what changed and any framework decisions made.

---

## Iterating later

When you want to update KOL data, edit `kols.json` and redeploy — no component code needs to change. To add a real photo for a KOL, add an `avatar_url` field to that KOL object and update the `Avatar` component to prefer `avatar_url` over `avatar_initials` when present:

```ts
{kol.avatar_url
  ? <img src={kol.avatar_url} alt={kol.name_en} className="…" />
  : <Avatar initials={kol.avatar_initials} color={industryColor} />}
```

That field is intentionally absent from the initial schema so you ship without blocked CDN requests.
