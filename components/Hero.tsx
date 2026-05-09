import Link from "next/link";
import { ArrowRightIcon, CheckIcon, PlayIcon, ShieldCheckIcon, StarIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft warm gradient backdrop */}
      <div className="absolute inset-0 ring-soft -z-10" />
      <div className="absolute inset-x-0 top-0 h-[640px] -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />

      <div className="container pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="animate-fade-up">
            <span className="chip">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-500" />
              </span>
              Caregivers available across Bangalore today
            </span>

            <h1 className="mt-5 font-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] tracking-[-0.02em] text-ink-900">
              Gentle, trusted care
              <br />
              <span className="text-teal-700">for the people you love.</span>
            </h1>

            <p className="mt-6 lead max-w-xl">
              Verified caregivers and patient attendants for elderly parents, post-surgery
              recovery, dementia, bedridden and 24×7 needs — placed at your home in
              Bangalore, often within 6 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="btn-lg btn-primary">
                Book a caregiver now
                <ArrowRightIcon size={18} />
              </Link>
              <a href={site.whatsappHref} className="btn-lg btn-secondary">
                <PlayIcon size={16} />
                Talk to care support
              </a>
            </div>

            {/* trust micro-row */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-ink-600">
              {[
                "Police-verified",
                "Trained & supervised",
                "Replacement guarantee",
                "Transparent pricing",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-sage-100 text-sage-700">
                    <CheckIcon size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image collage */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ─── Hero visual: layered image collage with always-on-brand SVG fallback ─── */

function HeroVisual() {
  // Primary: warm, human caregiver-with-elder photo.
  // Secondary: caring hands / detail shot.
  // Both are loaded from Unsplash's CDN — chosen for relevance to the brief
  // (Indian families, elder care, calm home setting). If either ever fails,
  // the SvgFallback layer below stays visible and keeps the section beautiful.
  const primary =
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1100&q=80";
  const secondary =
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      {/* Decorative rings behind */}
      <div aria-hidden className="absolute -top-3 -right-2 h-12 w-12 rounded-full bg-peach-100 -z-10" />
      <div aria-hidden className="absolute -bottom-4 -left-3 h-16 w-16 rounded-full bg-sage-100 -z-10" />

      {/* Primary image card */}
      <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2.25rem] overflow-hidden shadow-soft ring-1 ring-ink-100/60 bg-sage-100">
        {/* Always-on-brand SVG scene — visible even if the photo doesn't load */}
        <SvgFallback className="absolute inset-0 w-full h-full" />

        {/* Photo layered on top */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={primary}
          alt="A caregiver gently helps an elderly woman at home in Bangalore"
          loading="eager"
          decoding="async"
          className="relative h-full w-full object-cover"
          onError={(e) => {
            // If the photo ever fails, hide it so the SVG fallback shows through.
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Soft bottom gradient for legibility of the rating chip area */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/15 via-transparent to-transparent" />
      </div>

      {/* Floating "verified" card — top-left */}
      <div className="hidden sm:flex absolute -left-4 sm:-left-8 top-8 sm:top-12 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-ink-100 shadow-soft px-4 py-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
          <ShieldCheckIcon size={18} />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-ink-900">100% verified</div>
          <div className="text-xs text-ink-500">Police, ID & training checks</div>
        </div>
      </div>

      {/* Rating card — bottom-right */}
      <div className="absolute right-2 sm:-right-4 bottom-6 sm:bottom-10 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-ink-100 shadow-soft px-4 py-3">
        <div className="flex items-center gap-1 text-amber-500">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} size={14} className="fill-current" />
          ))}
          <span className="ml-1 text-xs font-semibold text-ink-900">4.9</span>
        </div>
        <div className="mt-0.5 text-[11.5px] text-ink-500">from 1,200+ Bangalore families</div>
      </div>

      {/* Secondary inset photo — caring hands detail */}
      <div className="hidden md:block absolute -right-6 lg:-right-10 -bottom-10 w-[44%] aspect-square rounded-[1.5rem] overflow-hidden shadow-soft ring-4 ring-cream-50 bg-cream-100 rotate-[-3deg]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={secondary}
          alt="Caregiver holding an elderly person's hand in a moment of warmth"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).parentElement!.style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

/* ─── On-brand SVG fallback scene: caregiver with elder, in our palette ───
 * This is rendered behind the primary photo. Even if the photo URL ever
 * 404s or is blocked, the section still looks deliberate and warm.
 */
function SvgFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E2EDE5" />
          <stop offset="50%" stopColor="#F2F7F4" />
          <stop offset="100%" stopColor="#F8E6D8" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1CBAE" />
          <stop offset="100%" stopColor="#F8E6D8" />
        </linearGradient>
        <radialGradient id="warmth" cx="0.7" cy="0.2" r="0.7">
          <stop offset="0%" stopColor="rgba(241, 203, 174, 0.6)" />
          <stop offset="100%" stopColor="rgba(241, 203, 174, 0)" />
        </radialGradient>
      </defs>

      {/* Background wash */}
      <rect width="400" height="500" fill="url(#bgGrad)" />
      <rect width="400" height="500" fill="url(#warmth)" />

      {/* Rising sun / window light */}
      <circle cx="310" cy="120" r="60" fill="url(#sun)" opacity="0.85" />

      {/* Soft horizon hills */}
      <path d="M0 360 Q 100 320, 200 350 T 400 340 L 400 500 L 0 500 Z" fill="#C5DBCB" />
      <path d="M0 400 Q 120 360, 240 390 T 400 380 L 400 500 L 0 500 Z" fill="#9CC1A6" opacity="0.85" />

      {/* Caregiver figure (back) — taller, sage tones */}
      <g transform="translate(120 180)">
        <ellipse cx="50" cy="200" rx="60" ry="14" fill="#3A6244" opacity="0.18" />
        {/* body */}
        <path
          d="M30 100 Q 30 70, 60 70 Q 90 70, 90 100 L 90 200 L 30 200 Z"
          fill="#467853"
        />
        {/* sleeve / arm cradling */}
        <path d="M30 110 Q 10 140, 30 165" stroke="#3A6244" strokeWidth="14" strokeLinecap="round" fill="none" />
        {/* head */}
        <circle cx="60" cy="56" r="20" fill="#E8C9A6" />
        {/* hair bun */}
        <circle cx="60" cy="38" r="9" fill="#3A2A20" />
        <circle cx="74" cy="50" r="4" fill="#3A2A20" />
      </g>

      {/* Elder figure (front, smaller, seated) — warm cream tones */}
      <g transform="translate(180 230)">
        <ellipse cx="40" cy="160" rx="55" ry="12" fill="#1F3D44" opacity="0.18" />
        {/* shawl/body */}
        <path
          d="M5 90 Q 5 70, 40 70 Q 75 70, 75 90 L 78 160 L 2 160 Z"
          fill="#F1CBAE"
        />
        {/* shawl drape line */}
        <path d="M5 100 Q 40 115, 75 100" stroke="#E8B796" strokeWidth="2" fill="none" opacity="0.6" />
        {/* head */}
        <circle cx="40" cy="55" r="18" fill="#EBC9A8" />
        {/* hair: silver bun */}
        <path d="M22 50 Q 40 30, 58 50 Q 50 38, 40 38 Q 30 38, 22 50 Z" fill="#D7D7D3" />
        {/* gentle smile */}
        <path d="M34 60 Q 40 64, 46 60" stroke="#7B5A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* eyes (closed, peaceful) */}
        <path d="M30 53 q 3 -2 6 0" stroke="#7B5A40" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M44 53 q 3 -2 6 0" stroke="#7B5A40" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </g>

      {/* Caregiver hand on elder's shoulder (small overlap, signals care) */}
      <g transform="translate(200 245)" opacity="0.9">
        <ellipse cx="0" cy="0" rx="14" ry="9" fill="#E8C9A6" />
      </g>

      {/* Decorative botanic sprig — bottom-left */}
      <g transform="translate(40 420)" opacity="0.85">
        <path d="M0 60 Q 10 30, 30 0" stroke="#467853" strokeWidth="2" fill="none" />
        <ellipse cx="6" cy="48" rx="9" ry="4" transform="rotate(-30 6 48)" fill="#7BAE85" />
        <ellipse cx="14" cy="34" rx="9" ry="4" transform="rotate(-30 14 34)" fill="#9CC1A6" />
        <ellipse cx="22" cy="20" rx="9" ry="4" transform="rotate(-30 22 20)" fill="#7BAE85" />
      </g>

      {/* Tiny heart in upper-left corner — calming accent */}
      <path
        d="M50 80 c -8 -8, 4 -22, 12 -10 c 8 -12, 20 2, 12 10 c -2 2, -10 8, -12 10 c -2 -2, -10 -8, -12 -10 z"
        fill="#3D8892"
        opacity="0.7"
      />
    </svg>
  );
}
