# Claude Code Kit — China KOL Directory

A self-contained handoff package. Drop the whole folder into a repo (rename to whatever fits, e.g. `kol-kit/`) and run Claude Code at the repo root.

```
claude-code-kit/
├── README.md                  ← you are here
├── PROMPT.md                  ← the prompt to paste into Claude Code
├── BRIEF.md                   ← the full implementation brief
├── data/
│   └── kols.json              ← canonical data (80 KOLs × 8 industries)
└── reference/
    ├── KOLDirectory.tsx       ← reference React + Tailwind component
    └── styles.css             ← framework-agnostic design tokens
```

## How to use

1. Copy `claude-code-kit/` into the repo of the public-facing site (or anywhere Claude Code can read).
2. Open `PROMPT.md` and paste its prompt block into Claude Code at the repo root.
3. Answer the one clarifying question Claude Code asks (which route the section lives on).
4. Review the implementation plan it prints, then let it run.

## How it's structured

- **`data/kols.json` is the single source of truth.** The component code reads from it; nothing is hard-coded. To update a follower count or add a brand, edit JSON — no code changes.
- **`BRIEF.md` is the rulebook.** Tier definitions, design tokens, SEO requirements, acceptance checklist. Claude Code reads this before writing code.
- **`reference/` is a translation aid, not a drop-in.** If the host repo is Vue or Astro, Claude Code will translate the structure rather than copy the `.tsx` file. If the host repo *is* React + Tailwind, the file can be adapted nearly verbatim.

## What ships

When Claude Code completes the work:

- A new page or section on the host site rendering all 80 KOLs grouped by 8 industries, server-rendered, anchor-navigable.
- JSON-LD `ItemList` + `Person` markup per industry for SEO.
- Mobile-first responsive layout (1 → 2 → 3 → 4 columns).
- Initials-only placeholder avatars (zero image requests).
- A methodology disclosure with sources and tier definitions.

## Adding photos later

The schema deliberately omits photo URLs. When you have approved profile photos (e.g. captured from the live profiles linked in each row), add an `avatar_url` field to each KOL and update the `Avatar` component to prefer `avatar_url` when present.

## Updating the data

Edit `kols.json`. Redeploy. That's it.
