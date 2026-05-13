/**
 * Brand logo — kept in lockstep with the favicon at app/icon.svg.
 *
 *   <LogoGlyph />   — just the silhouette + heart (white on transparent)
 *   <LogoMark />    — the silhouette inside a teal rounded square (the visual
 *                     identity people see in the navbar, footer, and tab)
 *   <LogoWordmark/> — the mark + the "Care Givers" wordmark, optionally with
 *                     the "Bangalore" tag (used in the navbar)
 *
 * If you ever update the favicon design, update this component too so the
 * tab icon and the on-page logo never drift apart.
 */
import Link from "next/link";
import { site } from "@/lib/site";

export function LogoGlyph({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Person head */}
      <circle cx="16" cy="11" r="3.4" fill="#FBF8F3" />
      {/* Shoulders / upper body curve */}
      <path
        d="M8.6 24.5V21.2c0-3.7 3.2-5.7 7.4-5.7s7.4 2 7.4 5.7v3.3"
        stroke="#FBF8F3"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Peach heart over chest — warmth motif */}
      <path
        d="M16 23c-1.7-1.2-3-2.2-3-3.3 0-0.8 0.6-1.4 1.4-1.4 0.6 0 1.2 0.3 1.6 0.9 0.4-0.6 1-0.9 1.6-0.9 0.8 0 1.4 0.6 1.4 1.4 0 1.1-1.3 2.1-3 3.3z"
        fill="#F1CBAE"
      />
    </svg>
  );
}

export function LogoMark({
  size = 36,
  pulse = true,
  className,
}: {
  /** Outer container size in px. Glyph scales to ~60% of this. */
  size?: number;
  /** Show the small sage live-presence pulse in the corner. */
  pulse?: boolean;
  className?: string;
}) {
  const inner = Math.round(size * 0.6);
  return (
    <span
      className={[
        "relative grid place-items-center rounded-2xl bg-teal-600 text-white shadow-glow transition",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <LogoGlyph size={inner} />
      {pulse && (
        <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-sage-300 animate-soft-pulse" />
      )}
    </span>
  );
}

/**
 * The full lockup: icon + "Care Givers" + optional "Bangalore" tag.
 * Wraps in a Link by default; pass `as="span"` to render unlinked.
 */
export function LogoWordmark({
  size = 36,
  showCity = true,
  as = "link",
  textClassName,
  className,
}: {
  size?: number;
  showCity?: boolean;
  as?: "link" | "span";
  textClassName?: string;
  className?: string;
}) {
  const inner = (
    <>
      <LogoMark size={size} className="group-hover:scale-105" />
      <span
        className={
          textClassName ||
          "font-display text-[19px] font-medium tracking-tight text-ink-900"
        }
      >
        {site.name}
        {showCity && (
          <span className="ml-1.5 text-[11px] font-sans uppercase tracking-[0.18em] text-teal-700">
            Bangalore
          </span>
        )}
      </span>
    </>
  );

  if (as === "span") {
    return (
      <span
        className={["flex items-center gap-2.5", className].filter(Boolean).join(" ")}
      >
        {inner}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={[
        "flex items-center gap-2.5 group",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={site.name}
    >
      {inner}
    </Link>
  );
}
