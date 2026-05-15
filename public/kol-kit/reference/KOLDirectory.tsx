/**
 * KOLDirectory — reference implementation
 *
 * This is a *reference* component intended to be read and adapted, not dropped
 * in as-is. Claude Code should translate the structure and design choices into
 * the host repo's framework (Vue/Astro/Nuxt/etc.) and styling system.
 *
 * Assumptions of this reference:
 *   - React 18+ (server component compatible)
 *   - Tailwind CSS
 *   - Data fetched at build/request time, NOT client-side
 *   - JSON file lives at ../data/kols.json relative to this file
 */
import data from "../data/kols.json";

// -------------------------------------------------------------------------
// Types — derived from the kols.json schema in BRIEF.md §5
// -------------------------------------------------------------------------
type Tier = "top" | "mid" | "rising";

interface KOL {
  id: string;
  rank: number;
  name_zh: string;
  name_en: string;
  tier: Tier;
  tier_label: string;
  platforms: string[];
  primary_platform: string | null;
  primary_platform_label: string;
  followers_text: string;
  specialty: string;
  profile_url: string;
  notable_brands: string[];
  source_note: string;
  avatar_initials: string;
}

interface Industry {
  id: string;
  name_en: string;
  name_zh: string;
  tagline: string;
  color: string;
  kols: KOL[];
}

interface Root {
  meta: {
    title: string;
    subtitle: string;
    prepared_for: string;
    tier_definitions: { top: string; mid: string; rising: string };
    platforms_covered: string[];
    sources: string[];
    follower_data_note: string;
    healthcare_note: string;
  };
  industries: Industry[];
}

const root = data as Root;

// -------------------------------------------------------------------------
// Atoms
// -------------------------------------------------------------------------

function TierPill({ tier, label }: { tier: Tier; label: string }) {
  const styles: Record<Tier, { bg: string; sr: string; text: string }> = {
    top:    { bg: "bg-[#2E7D32]", text: "Top · 1M+",        sr: "Tier: Top, one million or more followers" },
    mid:    { bg: "bg-[#F9A825]", text: "Mid · 100K–1M",   sr: "Tier: Mid, 100 thousand to one million followers" },
    rising: { bg: "bg-[#455A64]", text: "Rising · ~1M",     sr: "Tier: Rising, crossing the one million follower line" },
  };
  const s = styles[tier];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white ${s.bg}`}
      title={label}
    >
      {s.text}
      <span className="sr-only">{s.sr}</span>
    </span>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white shadow-inner"
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function PlatformBadge({ label, extraCount }: { label: string; extraCount: number }) {
  return (
    <div className="flex items-center gap-1.5 text-[12px] text-[#555]">
      <span className="rounded-md bg-[#F2EFE9] px-1.5 py-0.5 font-medium">{label}</span>
      {extraCount > 0 && (
        <span
          className="rounded-md bg-[#F2EFE9] px-1.5 py-0.5 text-[11px] text-[#888]"
          title={`Active on ${extraCount} additional platform(s)`}
        >
          +{extraCount}
        </span>
      )}
    </div>
  );
}

function BrandPills({ brands }: { brands: string[] }) {
  const visible = brands.slice(0, 3);
  const overflow = brands.length - visible.length;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {visible.map((b) => (
        <li
          key={b}
          className="rounded-full border border-[#E8E4DC] px-2 py-0.5 text-[11px] text-[#555]"
        >
          {b}
        </li>
      ))}
      {overflow > 0 && (
        <li className="rounded-full border border-dashed border-[#D8D4CC] px-2 py-0.5 text-[11px] text-[#888]">
          +{overflow} more
        </li>
      )}
    </ul>
  );
}

// -------------------------------------------------------------------------
// KOL card
// -------------------------------------------------------------------------

function KOLCard({ kol, industryColor }: { kol: KOL; industryColor: string }) {
  return (
    <article
      id={kol.id}
      className="group relative flex flex-col rounded-xl bg-white p-5 shadow-[0_1px_2px_rgb(0_0_0_/_0.04),0_4px_12px_rgb(0_0_0_/_0.04)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgb(0_0_0_/_0.06),0_8px_24px_rgb(0_0_0_/_0.06)] focus-within:ring-2 focus-within:ring-offset-2"
      style={{ ["--ring-color" as string]: industryColor } as React.CSSProperties}
    >
      <span
        className="absolute left-0 top-5 h-6 w-1 rounded-r-full"
        style={{ backgroundColor: industryColor }}
        aria-hidden
      />
      <header className="flex items-start gap-3">
        <Avatar initials={kol.avatar_initials} color={industryColor} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[17px] font-semibold leading-tight text-[#1A1A1A]">
            {kol.name_zh}
          </h3>
          <p className="truncate text-[13px] text-[#888]">{kol.name_en}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <TierPill tier={kol.tier} label={kol.tier_label} />
            <PlatformBadge
              label={kol.primary_platform_label}
              extraCount={Math.max(0, kol.platforms.length - 1)}
            />
          </div>
        </div>
      </header>

      <p className="mt-4 text-[13px] leading-relaxed text-[#444]">
        <span className="font-medium text-[#1A1A1A]">Followers · </span>
        {kol.followers_text}
      </p>

      <p className="mt-2 text-[13px] leading-relaxed text-[#555]">{kol.specialty}</p>

      {kol.notable_brands.length > 0 && (
        <div className="mt-4">
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[#888]">
            Notable collaborations
          </p>
          <BrandPills brands={kol.notable_brands} />
        </div>
      )}

      <footer className="mt-5 flex items-end justify-between gap-3 border-t border-[#F0EDE5] pt-3">
        <p className="text-[10px] leading-snug text-[#A0A0A0]">{kol.source_note}</p>
        <a
          href={kol.profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-[12px] font-medium text-[#1A1A1A] underline decoration-[#D8D4CC] underline-offset-4 transition-colors hover:decoration-current"
        >
          View profile <span aria-hidden>→</span>
          <span className="sr-only">opens in a new tab</span>
        </a>
      </footer>
    </article>
  );
}

// -------------------------------------------------------------------------
// Industry section
// -------------------------------------------------------------------------

function IndustrySection({ industry }: { industry: Industry }) {
  const showHealthcareNote = industry.id === "healthcare";

  return (
    <section
      id={industry.id}
      aria-labelledby={`${industry.id}-heading`}
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <header className="mb-8 flex items-end justify-between gap-6 border-b border-[#E8E4DC] pb-4">
        <div>
          <p
            className="mb-1 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider"
            style={{ color: industry.color }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: industry.color }}
              aria-hidden
            />
            {industry.name_zh}
          </p>
          <h2
            id={`${industry.id}-heading`}
            className="font-serif text-3xl text-[#1A1A1A] sm:text-4xl"
          >
            {industry.name_en}
          </h2>
          <p className="mt-1 max-w-xl text-[14px] text-[#555]">{industry.tagline}</p>
        </div>
        <p className="hidden text-[12px] text-[#888] sm:block">
          {industry.kols.length} KOLs
        </p>
      </header>

      {showHealthcareNote && (
        <div
          className="mb-6 rounded-lg border border-[#E8E4DC] bg-[#FBF8F1] p-3 text-[13px] leading-relaxed text-[#555]"
          role="note"
        >
          <strong className="font-semibold text-[#1A1A1A]">Brand-deal disclaimer · </strong>
          {root.meta.healthcare_note}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {industry.kols.map((k) => (
          <KOLCard key={k.id} kol={k} industryColor={industry.color} />
        ))}
      </div>

      {/* JSON-LD ItemList for SEO — one per industry */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${industry.name_en} KOLs in China`,
            itemListElement: industry.kols.map((k, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Person",
                name: k.name_zh,
                alternateName: k.name_en,
                url: k.profile_url,
                knowsAbout: k.specialty,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

// -------------------------------------------------------------------------
// Hero / chip nav
// -------------------------------------------------------------------------

function ChipNav() {
  return (
    <nav aria-label="Jump to industry" className="-mx-1 mt-6 flex flex-wrap gap-2">
      {root.industries.map((i) => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className="rounded-full border border-[#E8E4DC] bg-white px-3 py-1 text-[12px] font-medium text-[#1A1A1A] transition-all hover:border-current"
          style={{ ["--accent" as string]: i.color } as React.CSSProperties}
        >
          <span style={{ color: i.color }}>●</span> {i.name_en}{" "}
          <span className="text-[#888]">{i.name_zh}</span>
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  return (
    <header className="border-b border-[#E8E4DC] pb-10 pt-12 sm:pt-16">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#888]">
        Directory
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-[#1A1A1A] sm:text-5xl">
        {root.meta.title}
        <span className="ml-3 align-middle text-2xl text-[#888] sm:text-3xl">中国KOL指南</span>
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#555]">
        {root.meta.subtitle}
      </p>
      <ChipNav />
    </header>
  );
}

// -------------------------------------------------------------------------
// Methodology disclosure
// -------------------------------------------------------------------------

function Methodology() {
  return (
    <details className="mt-12 rounded-xl border border-[#E8E4DC] bg-white p-5 text-[14px] leading-relaxed text-[#555]">
      <summary className="cursor-pointer text-[15px] font-semibold text-[#1A1A1A]">
        Methodology &amp; sources
      </summary>
      <div className="mt-4 space-y-3">
        <p>
          <strong>Tier definitions · </strong>
          Top: {root.meta.tier_definitions.top}. Mid: {root.meta.tier_definitions.mid}.{" "}
          Rising: {root.meta.tier_definitions.rising}.
        </p>
        <p>{root.meta.follower_data_note}</p>
        <p>
          <strong>Sources · </strong>
          {root.meta.sources.join(" · ")}.
        </p>
        <p className="text-[12px] text-[#888]">
          Research conducted in Chinese on Chinese-language sources. Prepared for{" "}
          {root.meta.prepared_for}.
        </p>
      </div>
    </details>
  );
}

// -------------------------------------------------------------------------
// Page section root
// -------------------------------------------------------------------------

export default function KOLDirectory() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <main>
        {root.industries.map((industry) => (
          <IndustrySection key={industry.id} industry={industry} />
        ))}
      </main>
      <Methodology />
    </div>
  );
}
