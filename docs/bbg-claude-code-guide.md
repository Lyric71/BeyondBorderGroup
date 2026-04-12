# Beyond Border Group — Claude Code Setup Guide

> **Stack:** Astro + Tailwind CSS + Vercel


## 1. Prerequisites

### System Requirements

```bash
# Required
node --version   # >= 18.17.0 (LTS recommended: 20.x or 22.x)
npm --version    # >= 9.x (or use pnpm)
git --version    # >= 2.x

# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

### Accounts & Access

- **GitHub** — repository hosting
- **Vercel** — deployment
- **Anthropic API key** — for Claude Code
- **Domain DNS access** — to point `beyondbordergroup.com` at Vercel when ready

### Authenticate Claude Code

```bash
# Option A: Interactive login (recommended)
claude login

# Option B: Environment variable
export ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

---

## 2. Project Initialisation

### Create the Astro Project

```bash
# Create project
npm create astro@latest beyondbordergroup -- --template minimal --typescript strict --git --install

# Add integrations
npx astro add tailwind
npx astro add vercel

# Install additional dependencies
npm install @astrojs/check
npm install -D prettier prettier-plugin-astro
```

### Verify It Works

```bash
npm run dev
# → open http://localhost:4321
```

### Initialise Git

```bash
git init
git add .
git commit -m "chore: initial Astro project scaffold"
git remote add origin git@github.com:YOUR_ORG/beyondbordergroup.git
git push -u origin main
```

---

## 3. Claude Code Configuration

### CLAUDE.md — Project Instructions

Create `.claude/CLAUDE.md` at the project root. This file tells Claude Code the tech stack, the design system, and the hard constraints. Everything else (pages, components, content) will be decided during the build.

```markdown
# Beyond Border Group — Project Context for Claude Code

## Project Overview
Rebuild of beyondbordergroup.com in Astro. The existing site runs on
WordPress with Elementor. The new site keeps the same brand identity
and color palette but the page structure and content may change.

Beyond Border Group (BBG) is a marketing and eCommerce agency in China
with offices in Shanghai, Hong Kong, and Paris.

## Tech Stack
- **Framework:** Astro 5.x (static site generation)
- **Styling:** Tailwind CSS 4.x
- **Deployment:** Vercel (static adapter)
- **Language:** TypeScript (strict mode)
- **Fonts:** System UI stack (no Google Fonts, no external CDNs)

## Key Design Tokens
- Brand Blue: #269ADA (primary — links, buttons, eyebrows, accents)
- Brand Blue Dark: #1E7DB0 (hover, active states)
- Brand Blue Light: #E8F4FC (soft tints, hover backgrounds)
- Ink: #1A1A1A (headings)
- Body Text: #333333 (paragraphs)
- Text Muted: #6B6B6B (captions, metadata)
- Border: #E5E5E5 (card borders, dividers)
- Surface: #F7F9FB (alternating section backgrounds)
- Black: #000000 (footer background)
- White: #FFFFFF (base background)

IMPORTANT: Body copy never uses brand blue. #269ADA on white fails WCAG AA
for small text. Blue is reserved for links, buttons, eyebrows, icons, and
large accents. Body stays on #1A1A1A / #333.

## Typography
- Single font stack, system UI. No Google Fonts, no webfont downloads.
- Stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif
- PingFang SC and Microsoft YaHei ensure clean rendering for Chinese
  characters (platform names, team names, nav labels).
- CRITICAL: Never link to fonts.googleapis.com or any external font CDN.
  The Great Firewall blocks Google services and will break the site for
  Chinese visitors.
- If a display font is added later, self-host as woff2 in /public/fonts.

## Type Scale (desktop)
- H1 Hero: 56px / 700 / line-height 1.1 / tracking -0.02em
- H2 Section: 40px / 700 / 1.15 / -0.01em
- H3 Card: 24px / 600 / 1.25
- H4 Sub: 20px / 600 / 1.3
- Lead: 20px / 400 / 1.5
- Body: 17px / 400 / 1.65
- Small: 14px / 500 / 1.5
- Eyebrow label: 13px / 600 / 1.3 / tracking 0.08em / UPPERCASE / blue

Use clamp() for fluid scaling. Mobile: H1 drops to 38px, H2 to 30px.

## Spacing
8px base grid. Section padding defaults to 120px top/bottom on desktop,
64px on mobile. Container max-width 1200px with 24px side padding.

## Component Patterns
- Use Astro components (.astro) for everything static
- Use `class:list` for conditional Tailwind classes
- Button variants: "primary" | "secondary" | "ghost"
  - primary: solid #269ADA, white text, hover #1E7DB0
  - secondary: white bg, 2px blue border, blue text, hover flips to filled
  - ghost: text-only blue with "→" that translates 4px on hover
- Card pattern: white bg, 1px #E5E5E5 border, 8px radius, 24px padding
  Hover: lifts 4px, border shifts to #269ADA, soft shadow
- Eyebrow: small uppercase blue label that sits above every section heading
- Container: max-w-[1200px] with responsive horizontal padding

## Motion
Keep subtle. 200ms ease for hover states. Section entrance: fade + 12px rise,
400ms, IntersectionObserver-triggered once. No parallax. No auto-carousels.
Respect prefers-reduced-motion.

## Accessibility
- Focus rings: 3px outline #269ADA with 2px offset
- All interactive elements reachable by keyboard
- Body contrast minimum 4.5:1

## Performance Constraints
- Self-host everything. No external CDN dependencies.
- No Google services (Analytics, Fonts, reCAPTCHA, Maps, Tag Manager)
- For analytics use Vercel Analytics or a privacy-friendly self-hosted option
- Site must load cleanly from inside China (no blocked assets)

## Testing
- Run `npm run build` before committing to catch build errors
- Run `npx astro check` for TypeScript validation
- Verify responsive at 375px, 768px, 1280px
- Test with Chinese characters to confirm the system font stack falls
  through to PingFang SC / Microsoft YaHei

## Git Conventions
- Commit messages: conventional commits (feat:, fix:, chore:, docs:, style:)
- Branch naming: feature/description, fix/description
- Always run build before pushing
```

---
