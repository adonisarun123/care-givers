/**
 * Product icon set — small SVG illustrations for each shop product type.
 * Renders in the parent's currentColor. Strokes only, no fills (parent picks
 * the tint via wrapping div + text color).
 */
import type { ProductIconKey } from "@/lib/shop";

type Props = {
  type: ProductIconKey;
  size?: number;
  className?: string;
};

export function ProductIcon({ type, size = 64, className }: Props) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

const paths: Record<ProductIconKey, React.ReactNode> = {
  /* ── Beds & accessories ── */
  "bed-electric": (
    <>
      {/* Bed frame */}
      <path d="M14 56h52" />
      <path d="M14 56v-8" />
      <path d="M66 56v-8" />
      {/* Headrest raised */}
      <path d="M14 48l16-4v4" />
      {/* Mattress */}
      <rect x="14" y="44" width="52" height="4" rx="1" />
      {/* Legs */}
      <path d="M18 56v6" />
      <path d="M62 56v6" />
      {/* Remote */}
      <rect x="44" y="26" width="10" height="14" rx="2" />
      <circle cx="49" cy="32" r="1" />
      <circle cx="49" cy="36" r="1" />
    </>
  ),
  "bed-manual": (
    <>
      <path d="M14 56h52" />
      <rect x="14" y="44" width="52" height="4" rx="1" />
      <path d="M14 44v-4l14-2v6" />
      <path d="M18 56v6" />
      <path d="M62 56v6" />
      {/* Crank handle */}
      <circle cx="68" cy="50" r="4" />
      <path d="M68 50v-4" />
    </>
  ),
  "mattress-air": (
    <>
      <rect x="14" y="38" width="52" height="22" rx="3" />
      {/* Bubble pattern */}
      <circle cx="22" cy="47" r="2" />
      <circle cx="32" cy="47" r="2" />
      <circle cx="42" cy="47" r="2" />
      <circle cx="52" cy="47" r="2" />
      <circle cx="62" cy="47" r="2" />
      <circle cx="22" cy="55" r="2" />
      <circle cx="32" cy="55" r="2" />
      <circle cx="42" cy="55" r="2" />
      <circle cx="52" cy="55" r="2" />
      <circle cx="62" cy="55" r="2" />
    </>
  ),
  "mattress-foam": (
    <>
      <rect x="14" y="36" width="52" height="22" rx="3" />
      <path d="M14 44h52" />
      <path d="M14 50h52" />
    </>
  ),
  "side-rails": (
    <>
      {/* Bed outline */}
      <path d="M14 56h52" />
      <rect x="14" y="44" width="52" height="4" rx="1" />
      {/* Vertical rails */}
      <path d="M20 44v-14" />
      <path d="M30 44v-14" />
      <path d="M40 44v-14" />
      <path d="M50 44v-14" />
      <path d="M60 44v-14" />
      <path d="M16 30h48" />
    </>
  ),
  bedpan: (
    <>
      <ellipse cx="40" cy="44" rx="22" ry="10" />
      <path d="M18 44c0 4 4 8 22 8s22-4 22-8" />
      <path d="M62 44h6" />
    </>
  ),

  /* ── Mobility ── */
  wheelchair: (
    <>
      <circle cx="28" cy="56" r="10" />
      <circle cx="28" cy="56" r="4" />
      <circle cx="56" cy="58" r="4" />
      {/* Seat */}
      <path d="M22 38h22l-4 12H24z" />
      {/* Backrest */}
      <path d="M44 38v-14h-8" />
      {/* Footrest */}
      <path d="M44 50l8 8h6" />
    </>
  ),
  "wheelchair-recline": (
    <>
      <circle cx="28" cy="58" r="10" />
      <circle cx="28" cy="58" r="4" />
      <circle cx="56" cy="60" r="4" />
      <path d="M22 40h22l-4 12H24z" />
      {/* Reclined backrest */}
      <path d="M44 40l-2-18 12-4" />
      <path d="M44 52l8 8h6" />
    </>
  ),
  walker: (
    <>
      <path d="M24 20v40" />
      <path d="M56 20v40" />
      <path d="M24 32h32" />
      <path d="M24 44h32" />
      {/* Feet */}
      <path d="M20 60h8" />
      <path d="M52 60h8" />
      {/* Handles */}
      <path d="M24 20l-4-2" />
      <path d="M56 20l4-2" />
    </>
  ),
  rollator: (
    <>
      <path d="M22 20v32" />
      <path d="M58 20v32" />
      <path d="M22 32h36" />
      {/* Seat */}
      <rect x="26" y="36" width="28" height="6" rx="1" />
      {/* Wheels */}
      <circle cx="22" cy="58" r="6" />
      <circle cx="58" cy="58" r="6" />
      <path d="M22 20l-4-2" />
      <path d="M58 20l4-2" />
    </>
  ),
  commode: (
    <>
      {/* Backrest */}
      <path d="M28 24h24v6h-24z" />
      {/* Seat */}
      <ellipse cx="40" cy="40" rx="14" ry="4" />
      {/* Frame */}
      <path d="M28 30v18" />
      <path d="M52 30v18" />
      {/* Legs */}
      <path d="M28 48v14" />
      <path d="M52 48v14" />
      <path d="M22 56l6-8" />
      <path d="M58 56l-6-8" />
    </>
  ),
  lifter: (
    <>
      {/* Vertical mast */}
      <path d="M22 60v-44" />
      {/* Boom */}
      <path d="M22 16h32" />
      {/* Hook + sling */}
      <path d="M54 16v8" />
      <path d="M50 24h8" />
      <path d="M48 32c4 4 12 4 16 0" />
      {/* Base */}
      <path d="M14 60h32" />
      <circle cx="18" cy="62" r="2" />
      <circle cx="42" cy="62" r="2" />
    </>
  ),
  "transfer-board": (
    <>
      <rect x="14" y="36" width="52" height="10" rx="3" />
      <circle cx="22" cy="41" r="1.5" />
      <circle cx="58" cy="41" r="1.5" />
    </>
  ),

  /* ── Respiratory ── */
  oxygen: (
    <>
      <rect x="22" y="22" width="36" height="40" rx="3" />
      {/* Vent */}
      <path d="M26 28h28" />
      {/* Dial */}
      <circle cx="40" cy="40" r="5" />
      <path d="M40 36v4l3 2" />
      {/* Tube */}
      <path d="M58 30c6 0 6 6 0 6" />
    </>
  ),
  "oxygen-high": (
    <>
      <rect x="18" y="20" width="44" height="44" rx="3" />
      <path d="M22 28h36" />
      <circle cx="32" cy="42" r="5" />
      <circle cx="48" cy="42" r="5" />
      <path d="M62 30c6 0 6 6 0 6" />
    </>
  ),
  cpap: (
    <>
      {/* Unit */}
      <rect x="14" y="32" width="28" height="22" rx="3" />
      {/* Display */}
      <rect x="18" y="36" width="20" height="8" rx="1" />
      <circle cx="36" cy="50" r="2" />
      {/* Hose */}
      <path d="M42 42c10 0 14 6 16 10" />
      {/* Mask */}
      <ellipse cx="62" cy="56" rx="6" ry="4" />
    </>
  ),
  bipap: (
    <>
      <rect x="14" y="30" width="28" height="24" rx="3" />
      <rect x="18" y="34" width="20" height="8" rx="1" />
      <circle cx="22" cy="50" r="2" />
      <circle cx="34" cy="50" r="2" />
      <path d="M42 42c10 0 14 6 16 10" />
      <ellipse cx="62" cy="56" rx="6" ry="4" />
    </>
  ),
  nebuliser: (
    <>
      <rect x="14" y="36" width="24" height="22" rx="3" />
      <path d="M18 42h16" />
      <path d="M18 48h16" />
      {/* Hose */}
      <path d="M38 44c8 0 12 4 14 8" />
      {/* Mouthpiece */}
      <path d="M54 56l8-4" />
      <path d="M58 50l4 2" />
    </>
  ),
  suction: (
    <>
      <rect x="14" y="32" width="22" height="22" rx="3" />
      <circle cx="25" cy="42" r="3" />
      <path d="M36 38c6 0 8 4 10 8" />
      {/* Jar */}
      <path d="M46 46h18v14h-18z" />
      <path d="M46 50h18" />
    </>
  ),
  oximeter: (
    <>
      {/* Body */}
      <rect x="20" y="30" width="40" height="20" rx="4" />
      {/* Display */}
      <rect x="24" y="34" width="14" height="12" rx="1" />
      <path d="M28 40h6" />
      {/* Finger slot */}
      <path d="M44 50v8h12v-8" />
    </>
  ),

  /* ── Monitoring ── */
  "bp-monitor": (
    <>
      {/* Cuff */}
      <rect x="14" y="36" width="22" height="14" rx="4" />
      {/* Tube */}
      <path d="M36 42c6 0 10 4 12 8" />
      {/* Monitor */}
      <rect x="46" y="46" width="18" height="14" rx="2" />
      <rect x="50" y="50" width="10" height="5" rx="0.5" />
    </>
  ),
  "bp-wrist": (
    <>
      <rect x="24" y="32" width="32" height="20" rx="6" />
      <rect x="32" y="38" width="16" height="8" rx="1" />
      <path d="M24 42l-6 4" />
      <path d="M56 42l6 4" />
    </>
  ),
  glucose: (
    <>
      <rect x="20" y="26" width="28" height="40" rx="3" />
      <rect x="24" y="32" width="20" height="14" rx="1" />
      <circle cx="29" cy="56" r="2" />
      <circle cx="39" cy="56" r="2" />
      {/* Test strip */}
      <path d="M48 30h14" />
      <path d="M48 34h14" />
    </>
  ),
  thermometer: (
    <>
      <path d="M40 16v40" />
      <circle cx="40" cy="60" r="6" />
      <path d="M40 24h4" />
      <path d="M40 32h4" />
      <path d="M40 40h4" />
      <path d="M40 48h4" />
    </>
  ),
  "thermometer-ir": (
    <>
      {/* Body */}
      <rect x="14" y="30" width="28" height="14" rx="2" />
      {/* Display */}
      <rect x="18" y="34" width="12" height="6" rx="0.5" />
      {/* Sensor */}
      <path d="M42 36l8-2v10z" />
      {/* Handle */}
      <path d="M20 44v14h10v-14" />
    </>
  ),
  scale: (
    <>
      <rect x="14" y="36" width="52" height="22" rx="3" />
      <rect x="22" y="42" width="36" height="10" rx="1" />
      <path d="M34 46h12" />
    </>
  ),
  ecg: (
    <>
      <rect x="20" y="22" width="40" height="36" rx="4" />
      <rect x="24" y="26" width="32" height="18" rx="1" />
      {/* ECG line */}
      <path d="M26 35h6l2-6 4 12 3-8h5l3 2h7" />
      <circle cx="32" cy="52" r="2" />
      <circle cx="48" cy="52" r="2" />
    </>
  ),
};
