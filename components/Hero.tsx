"use client";

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

          {/* Right — illustrated visual */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/**
 * Hero visual: a hand-crafted illustration of an Indian caregiver scene.
 *
 * Why illustration over stock photo:
 *  - Always loads (no third-party CDN dependency)
 *  - Always on-brand (uses our exact palette)
 *  - Always Indianised — sari, bindi, kurta, tulsi, diya are explicit cues
 *  - Distinctive — premium wellness brands (Calm, Maven Clinic, Headspace)
 *    use illustration to differentiate from generic stock-photo competitors
 *
 * Replace with real photography of a Bangalore family + caregiver when ready
 * by swapping the <CaregiverScene /> for an <img src="/your-hero.jpg" />.
 */
function HeroVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      {/* Decorative rings behind */}
      <div aria-hidden className="absolute -top-3 -right-2 h-12 w-12 rounded-full bg-peach-100 -z-10" />
      <div aria-hidden className="absolute -bottom-4 -left-3 h-16 w-16 rounded-full bg-sage-100 -z-10" />

      {/* Primary illustration card */}
      <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2.25rem] overflow-hidden shadow-soft ring-1 ring-ink-100/60 bg-cream-50">
        <CaregiverScene className="absolute inset-0 w-full h-full" />
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
    </div>
  );
}

/**
 * On-brand SVG illustration: a Bangalore home morning with an elderly woman
 * in a sari, a caregiver standing beside her with a hand on her shoulder,
 * tulsi plant, brass diya and soft window light.
 */
function CaregiverScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="An Indian caregiver standing beside an elderly woman in a sari at home in Bangalore"
    >
      <defs>
        {/* Sky / wall gradient */}
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F8E6D8" />
          <stop offset="55%" stopColor="#F2F7F4" />
          <stop offset="100%" stopColor="#E2EDE5" />
        </linearGradient>

        {/* Warm sunrise glow from window */}
        <radialGradient id="warmth" cx="0.78" cy="0.15" r="0.55">
          <stop offset="0%" stopColor="#F8E6D8" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F8E6D8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#F8E6D8" stopOpacity="0" />
        </radialGradient>

        {/* Sari fabric gradient */}
        <linearGradient id="sari" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBF8F3" />
          <stop offset="100%" stopColor="#F1CBAE" />
        </linearGradient>

        {/* Caregiver kurta gradient */}
        <linearGradient id="kurta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CC1A6" />
          <stop offset="100%" stopColor="#5C9469" />
        </linearGradient>

        {/* Diya flame */}
        <radialGradient id="flame" cx="0.5" cy="1" r="1">
          <stop offset="0%" stopColor="#FFD89B" />
          <stop offset="60%" stopColor="#F1A85C" />
          <stop offset="100%" stopColor="#C4564B" stopOpacity="0" />
        </radialGradient>

        {/* Floor */}
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFE6D2" />
          <stop offset="100%" stopColor="#E5D8BD" />
        </linearGradient>

        <linearGradient id="dupatta" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D8892" />
          <stop offset="100%" stopColor="#285962" />
        </linearGradient>
      </defs>

      {/* Background wall */}
      <rect width="400" height="500" fill="url(#bg)" />
      <rect width="400" height="500" fill="url(#warmth)" />

      {/* Window — soft morning light source */}
      <g transform="translate(248 28)" opacity="0.9">
        <rect x="0" y="0" width="125" height="148" rx="10" fill="#FBF8F3" opacity="0.9" />
        <rect x="0" y="0" width="125" height="148" rx="10" fill="none" stroke="#EFE6D2" strokeWidth="2" />
        <line x1="62.5" y1="6" x2="62.5" y2="142" stroke="#EFE6D2" strokeWidth="2" />
        <line x1="6" y1="74" x2="119" y2="74" stroke="#EFE6D2" strokeWidth="2" />
        {/* sun in window */}
        <circle cx="92" cy="48" r="14" fill="#F1CBAE" opacity="0.85" />
      </g>

      {/* Decorative wall plant — palm-like leaves on right side */}
      <g transform="translate(355 60)" opacity="0.85">
        <path d="M 0 100 Q -8 60 0 0" stroke="#467853" strokeWidth="2.5" fill="none" />
        <path d="M 0 80 Q 18 70 35 50" stroke="#7BAE85" strokeWidth="2.5" fill="none" />
        <ellipse cx="-12" cy="20" rx="14" ry="6" transform="rotate(-40 -12 20)" fill="#7BAE85" />
        <ellipse cx="-8" cy="40" rx="14" ry="6" transform="rotate(-25 -8 40)" fill="#9CC1A6" />
        <ellipse cx="-2" cy="60" rx="14" ry="6" transform="rotate(-10 -2 60)" fill="#7BAE85" />
        <ellipse cx="14" cy="55" rx="14" ry="6" transform="rotate(20 14 55)" fill="#9CC1A6" />
      </g>

      {/* Floor band */}
      <rect x="0" y="380" width="400" height="120" fill="url(#floor)" />
      {/* Floor line */}
      <line x1="0" y1="380" x2="400" y2="380" stroke="#D7C9A8" strokeWidth="1" />

      {/* Wooden chair (rattan back) behind elder */}
      <g>
        <ellipse cx="170" cy="395" rx="78" ry="9" fill="#1F3D44" opacity="0.18" />
        {/* Chair back uprights */}
        <rect x="118" y="200" width="6" height="180" rx="3" fill="#A37C56" />
        <rect x="216" y="200" width="6" height="180" rx="3" fill="#A37C56" />
        {/* Chair back top curve */}
        <path d="M 118 210 Q 170 188 222 210" stroke="#A37C56" strokeWidth="6" fill="none" strokeLinecap="round" />
        {/* Cane weave hint */}
        <path d="M 124 220 Q 170 230 216 220 M 124 240 Q 170 250 216 240 M 124 260 Q 170 270 216 260" stroke="#C9A57A" strokeWidth="1.6" fill="none" opacity="0.7" />
        {/* Seat */}
        <rect x="112" y="350" width="116" height="14" rx="3" fill="#A37C56" />
      </g>

      {/* ─── Elderly woman seated (front) ─── */}
      <g>
        {/* Sari pallu draped over chair top */}
        <path
          d="M 130 215 Q 170 250 210 215 L 215 360 L 125 360 Z"
          fill="url(#sari)"
        />
        {/* Sari decorative border (bottom) */}
        <path
          d="M 125 360 L 215 360 L 215 366 L 125 366 Z"
          fill="#7BAE85"
        />
        <path
          d="M 125 366 L 215 366 L 215 369 L 125 369 Z"
          fill="#C9A55F"
        />

        {/* Visible blouse / chest area */}
        <path
          d="M 145 250 Q 170 260 195 250 L 198 285 Q 170 295 142 285 Z"
          fill="#467853"
        />

        {/* Folded hands in lap */}
        <ellipse cx="158" cy="345" rx="12" ry="7" fill="#E8C9A6" />
        <ellipse cx="182" cy="345" rx="12" ry="7" fill="#E8C9A6" />
        {/* Bangle hint */}
        <path d="M 148 345 q 0 -3 4 -4" stroke="#C9A55F" strokeWidth="1.6" fill="none" />
        <path d="M 192 345 q 0 -3 -4 -4" stroke="#C9A55F" strokeWidth="1.6" fill="none" />

        {/* Neck */}
        <path d="M 162 222 L 178 222 L 180 248 L 160 248 Z" fill="#E8C9A6" />

        {/* Head */}
        <ellipse cx="170" cy="206" rx="22" ry="25" fill="#E8C9A6" />

        {/* Silver hair — pulled back with center part */}
        <path
          d="M 148 198 Q 148 178 170 174 Q 192 178 192 198 Q 188 188 170 188 Q 152 188 148 198 Z"
          fill="#D7D7D3"
        />
        {/* Center part with sindoor */}
        <line x1="170" y1="174" x2="170" y2="188" stroke="#C4564B" strokeWidth="1.4" />
        {/* Hair side curves */}
        <path d="M 148 198 Q 144 210 150 220" stroke="#BDBDB7" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 192 198 Q 196 210 190 220" stroke="#BDBDB7" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Bun visible behind */}
        <ellipse cx="170" cy="195" rx="12" ry="7" fill="#C5C5BE" />

        {/* Bindi */}
        <circle cx="170" cy="194" r="2.4" fill="#C4564B" />

        {/* Eyes — closed, peaceful */}
        <path d="M 158 207 q 4 -3 8 0" stroke="#5A4632" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M 174 207 q 4 -3 8 0" stroke="#5A4632" strokeWidth="1.4" fill="none" strokeLinecap="round" />

        {/* Gentle smile */}
        <path d="M 162 220 Q 170 225 178 220" stroke="#7B5A40" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Earring hint */}
        <circle cx="148" cy="214" r="1.4" fill="#C9A55F" />
        <circle cx="192" cy="214" r="1.4" fill="#C9A55F" />
      </g>

      {/* ─── Caregiver standing behind/right ─── */}
      <g>
        {/* Body shadow */}
        <ellipse cx="262" cy="395" rx="48" ry="6" fill="#1F3D44" opacity="0.14" />

        {/* Kurta (long tunic) */}
        <path
          d="M 230 220 Q 230 205 262 200 Q 294 205 294 220 L 300 380 L 224 380 Z"
          fill="url(#kurta)"
        />
        {/* Kurta side seam */}
        <line x1="262" y1="225" x2="262" y2="378" stroke="#3A6244" strokeWidth="1" opacity="0.4" />

        {/* Dupatta diagonal across torso */}
        <path
          d="M 232 215 Q 252 240 285 248 L 290 258 Q 256 252 232 230 Z"
          fill="url(#dupatta)"
          opacity="0.92"
        />

        {/* Arm reaching toward elder's shoulder (caregiver's left arm forward) */}
        <path
          d="M 232 240 Q 215 252 208 268 Q 207 274 213 278"
          stroke="#5C9469"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        {/* Hand on elder's shoulder */}
        <ellipse cx="208" cy="278" rx="12" ry="8" fill="#D4A57B" />

        {/* Caregiver's other arm down at side */}
        <path
          d="M 290 230 Q 304 270 296 320"
          stroke="#5C9469"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="295" cy="320" rx="9" ry="6" fill="#D4A57B" />

        {/* Neck */}
        <path d="M 254 188 L 270 188 L 272 210 L 252 210 Z" fill="#D4A57B" />

        {/* Head */}
        <ellipse cx="262" cy="172" rx="20" ry="23" fill="#D4A57B" />

        {/* Hair — dark, pulled back, low ponytail */}
        <path
          d="M 242 168 Q 240 144 262 138 Q 286 142 284 168 Q 286 180 262 178 Q 244 178 242 168 Z"
          fill="#2C2C26"
        />
        {/* Side hair flowing */}
        <path d="M 244 174 Q 238 190 244 200" stroke="#2C2C26" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 280 174 Q 286 190 280 200" stroke="#2C2C26" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Low ponytail */}
        <path d="M 282 188 Q 296 198 290 218" stroke="#2C2C26" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Earring */}
        <circle cx="242" cy="180" r="1.4" fill="#C9A55F" />
        <circle cx="282" cy="180" r="1.4" fill="#C9A55F" />

        {/* Eyes — open, gentle */}
        <ellipse cx="254" cy="172" rx="1.6" ry="2.2" fill="#2C2C26" />
        <ellipse cx="270" cy="172" rx="1.6" ry="2.2" fill="#2C2C26" />

        {/* Soft smile */}
        <path d="M 256 184 Q 262 187 268 184" stroke="#5A4632" strokeWidth="1.4" fill="none" strokeLinecap="round" />

        {/* Subtle bindi */}
        <circle cx="262" cy="156" r="1.8" fill="#C4564B" opacity="0.85" />
      </g>

      {/* ─── Foreground props: small wooden table with brass diya ─── */}
      <g transform="translate(58 360)">
        {/* Table top */}
        <rect x="-2" y="0" width="76" height="6" rx="2" fill="#8E6A47" />
        {/* Table legs */}
        <rect x="3" y="6" width="4" height="20" fill="#7A5A3C" />
        <rect x="65" y="6" width="4" height="20" fill="#7A5A3C" />

        {/* Diya base */}
        <ellipse cx="36" cy="-2" rx="14" ry="4" fill="#C9A55F" />
        <path d="M 22 -2 Q 22 -10 36 -12 Q 50 -10 50 -2 Z" fill="#A8843B" />
        {/* Wick & flame */}
        <line x1="36" y1="-12" x2="36" y2="-18" stroke="#5A3C20" strokeWidth="1" />
        <ellipse cx="36" cy="-22" rx="6" ry="10" fill="url(#flame)" />
        <ellipse cx="36" cy="-22" rx="2" ry="6" fill="#FFE7B0" opacity="0.9" />
      </g>

      {/* ─── Tulsi plant in a small pot, foreground-right ─── */}
      <g transform="translate(310 350)">
        {/* Pot */}
        <path d="M -16 0 L 16 0 L 12 24 L -12 24 Z" fill="#B0794E" />
        <ellipse cx="0" cy="0" rx="16" ry="3" fill="#8E5C36" />
        <line x1="-16" y1="6" x2="16" y2="6" stroke="#8E5C36" strokeWidth="0.8" opacity="0.6" />

        {/* Tulsi stems & leaves */}
        <path d="M 0 0 Q 0 -22 -8 -36" stroke="#467853" strokeWidth="1.6" fill="none" />
        <path d="M 0 0 Q 4 -18 6 -32" stroke="#467853" strokeWidth="1.6" fill="none" />
        <path d="M 0 0 Q -4 -18 -2 -28" stroke="#467853" strokeWidth="1.6" fill="none" />
        {/* Leaves */}
        <ellipse cx="-9" cy="-30" rx="5" ry="3" transform="rotate(-30 -9 -30)" fill="#7BAE85" />
        <ellipse cx="-3" cy="-22" rx="5" ry="3" transform="rotate(-15 -3 -22)" fill="#9CC1A6" />
        <ellipse cx="6" cy="-26" rx="5" ry="3" transform="rotate(20 6 -26)" fill="#7BAE85" />
        <ellipse cx="2" cy="-16" rx="4" ry="2.5" transform="rotate(8 2 -16)" fill="#9CC1A6" />
        <ellipse cx="-12" cy="-22" rx="4" ry="2.5" transform="rotate(-50 -12 -22)" fill="#9CC1A6" />
      </g>

      {/* ─── Subtle rangoli dots, bottom-left ─── */}
      <g transform="translate(28 460)" opacity="0.75">
        <circle cx="0" cy="0" r="1.6" fill="#C4564B" />
        <circle cx="8" cy="-4" r="1.6" fill="#C9A55F" />
        <circle cx="16" cy="0" r="1.6" fill="#C4564B" />
        <circle cx="8" cy="4" r="1.6" fill="#C9A55F" />
        <circle cx="8" cy="0" r="2" fill="#7BAE85" />
      </g>

      {/* ─── Small heart accent — care motif ─── */}
      <g transform="translate(40 60)" opacity="0.65">
        <path
          d="M 0 4 c -6 -6, 4 -16, 8 -8 c 4 -8, 14 2, 8 8 c -2 2, -7 6, -8 8 c -1 -2, -6 -6, -8 -8 z"
          fill="#3D8892"
        />
      </g>
    </svg>
  );
}
