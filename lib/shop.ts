/**
 * Care Givers Shop — home healthcare equipment catalog.
 *
 * Buy + rent model: every product page has clear pricing for both options
 * where the product supports rental (most beds, mobility aids, respiratory
 * equipment). Smaller items are buy-only.
 *
 * Replace these with real SKUs/pricing before publishing.
 */

export type ProductCategory =
  | "hospital-beds"
  | "mobility"
  | "respiratory"
  | "monitoring";

export type ProductIconKey =
  | "bed-electric"
  | "bed-manual"
  | "mattress-air"
  | "mattress-foam"
  | "side-rails"
  | "bedpan"
  | "wheelchair"
  | "wheelchair-recline"
  | "walker"
  | "rollator"
  | "commode"
  | "lifter"
  | "transfer-board"
  | "oxygen"
  | "oxygen-high"
  | "cpap"
  | "bipap"
  | "nebuliser"
  | "suction"
  | "oximeter"
  | "bp-monitor"
  | "bp-wrist"
  | "glucose"
  | "thermometer"
  | "thermometer-ir"
  | "scale"
  | "ecg";

export type Product = {
  slug: string;
  name: string;
  short: string;
  category: ProductCategory;
  icon: ProductIconKey;

  /** Detailed description — 2–3 paragraphs. */
  description: string[];

  /** Specs shown in a 2-column table on detail page. */
  specs: { label: string; value: string }[];

  /** "What's included in the box" or "what comes with the rental". */
  includes: string[];

  /** Pricing. If `rentPerMonth` is null/0, the product is buy-only. */
  pricing: {
    buy: number;
    rentPerMonth?: number;
    /** Optional MRP for "discount" framing. */
    mrp?: number;
  };

  /** Service slugs this product is most relevant to (used for cross-links). */
  relatedServices: string[];

  /** Product-specific FAQs. */
  faqs: { q: string; a: string }[];

  seoTitle: string;
  seoDescription: string;
};

export const categories: {
  slug: ProductCategory;
  name: string;
  description: string;
  short: string;
}[] = [
  {
    slug: "hospital-beds",
    name: "Hospital beds & mattresses",
    short: "Beds, air mattresses, side rails",
    description:
      "Hospital beds for home use — manual, semi-electric and fully-electric — plus alternating-pressure air mattresses and accessories. The right setup prevents bedsores and makes daily care safer for everyone.",
  },
  {
    slug: "mobility",
    name: "Mobility & transfer aids",
    short: "Wheelchairs, walkers, commodes, lifters",
    description:
      "Wheelchairs, walkers, rollators, commodes and patient transfer aids — chosen for older Indian homes where doorways are narrow and bathrooms are small.",
  },
  {
    slug: "respiratory",
    name: "Respiratory & oxygen",
    short: "Oxygen, CPAP, BiPAP, nebulisers",
    description:
      "Oxygen concentrators, CPAP and BiPAP machines, nebulisers and suction units. Buy outright or rent for the duration of recovery — both options published transparently.",
  },
  {
    slug: "monitoring",
    name: "Monitoring devices",
    short: "BP, sugar, oxygen, temperature",
    description:
      "Trusted home monitoring devices — BP monitors, glucometers, pulse oximeters, thermometers — that our patient care attendants use every day on placement.",
  },
];

export const products: Product[] = [
  /* ─────────────────────────── Hospital beds & accessories ─────────────────────────── */
  {
    slug: "fully-electric-hospital-bed-5-function",
    name: "Fully-electric hospital bed (5-function)",
    short: "Five motorised positions, side rails included. The most-rented bed in our catalog.",
    category: "hospital-beds",
    icon: "bed-electric",
    description: [
      "A fully-electric, 5-function hospital bed designed for bedridden home care. Head, foot, height, knee and Trendelenburg positions are all motorised, with a single remote that even an elderly patient can operate by themselves once it's set up.",
      "The bed is the difference between a family that can manage a bedridden parent at home and a family that can't. With a 5-function bed you can sit them up for meals without lifting, get the right angle for feeding tubes, raise the foot to reduce ankle oedema, and tilt the whole bed for repositioning.",
      "Most of our hospital bed placements are rentals (₹8,500/month, free delivery and assembly across Bangalore). Outright purchase is around ₹78,000 with a 1-year manufacturer warranty.",
    ],
    specs: [
      { label: "Functions", value: "5 (head, foot, height, knee, Trendelenburg)" },
      { label: "Control", value: "Wired remote · low-noise motors" },
      { label: "Weight capacity", value: "180 kg" },
      { label: "Dimensions", value: "210 × 95 cm (LxW)" },
      { label: "Height adjust", value: "38–78 cm" },
      { label: "Material", value: "Powder-coated steel frame, ABS panels" },
      { label: "Side rails", value: "Included (foldable, both sides)" },
      { label: "IV pole & food tray", value: "Included" },
    ],
    includes: [
      "Bed frame fully assembled",
      "Foldable side rails (both sides)",
      "Foam mattress with waterproof cover",
      "Remote control & cable",
      "IV pole",
      "Removable food tray",
      "1-year warranty (purchase) · or rental SLA replacement",
    ],
    pricing: { buy: 78000, rentPerMonth: 8500, mrp: 95000 },
    relatedServices: ["bedridden-care", "post-surgery-care", "live-in-caregiver"],
    faqs: [
      {
        q: "Do you deliver and assemble for me?",
        a: "Yes. Free delivery and assembly across Bangalore for both rentals and purchases. Typically same-day or next-day.",
      },
      {
        q: "What if the patient is heavier than 180 kg?",
        a: "We have bariatric (heavy-duty) variants up to 250 kg on request — quoted separately. WhatsApp our team and we'll arrange a quote.",
      },
      {
        q: "Can I rent for less than a month?",
        a: "Minimum rental period is 30 days. Pro-rata refund if returned early on long rentals.",
      },
    ],
    seoTitle: "Fully-Electric Hospital Bed in Bangalore (Buy or Rent) | Care Givers",
    seoDescription:
      "Rent a fully-electric 5-function hospital bed in Bangalore from ₹8,500/month, or buy from ₹78,000. Free delivery, assembly, replacement guarantee.",
  },
  {
    slug: "semi-electric-hospital-bed",
    name: "Semi-electric hospital bed (2-function)",
    short: "Motorised head and foot, manual height. Most-recommended for short-term recovery.",
    category: "hospital-beds",
    icon: "bed-electric",
    description: [
      "A 2-function semi-electric bed — head and foot raise on a remote control, height adjusts manually with a crank. The most cost-effective bed for short-term recovery (post-surgery, fracture, post-stroke).",
      "Most of our post-surgery families rent this for 2–6 weeks during the recovery window and return it once the patient is up and moving. For long-term bedridden care, we usually recommend stepping up to the fully-electric variant.",
    ],
    specs: [
      { label: "Functions", value: "2 motorised (head, foot) + manual height" },
      { label: "Control", value: "Wired remote" },
      { label: "Weight capacity", value: "150 kg" },
      { label: "Dimensions", value: "210 × 95 cm" },
      { label: "Side rails", value: "Included" },
      { label: "Material", value: "Powder-coated steel" },
    ],
    includes: [
      "Bed frame assembled",
      "Side rails (both sides)",
      "Foam mattress with waterproof cover",
      "Remote control",
      "IV pole",
    ],
    pricing: { buy: 42000, rentPerMonth: 5500, mrp: 52000 },
    relatedServices: ["post-surgery-care", "patient-care", "bedridden-care"],
    faqs: [
      {
        q: "Is this enough for a bedridden patient?",
        a: "For short-term (4-8 weeks) yes. For long-term bedridden care, we recommend the fully-electric variant — height adjust by remote is much easier on the caregiver's back.",
      },
      {
        q: "Will it fit through a standard doorway?",
        a: "Yes. We deliver in parts and assemble in the room.",
      },
    ],
    seoTitle: "Semi-Electric Hospital Bed Bangalore | Rent ₹5,500/month or Buy",
    seoDescription:
      "Rent or buy a semi-electric 2-function hospital bed in Bangalore. From ₹5,500/month rental, ₹42,000 outright. Free delivery and assembly.",
  },
  {
    slug: "manual-hospital-bed-3-function",
    name: "Manual hospital bed (3-function)",
    short: "All adjustments by crank. The most economical option for budget-conscious families.",
    category: "hospital-beds",
    icon: "bed-manual",
    description: [
      "A 3-function manual hospital bed. Head, foot and height all adjust via hand cranks at the foot end. No electricity required — useful if power cuts are a concern, or if you want a no-frills option for a short recovery.",
      "Cranks take effort, especially the height adjustment. If the primary caregiver has any back or wrist issues, step up to semi-electric. We'll be honest with you on the call.",
    ],
    specs: [
      { label: "Functions", value: "3 manual (head, foot, height)" },
      { label: "Control", value: "Hand cranks" },
      { label: "Weight capacity", value: "150 kg" },
      { label: "Dimensions", value: "210 × 95 cm" },
      { label: "Side rails", value: "Included" },
    ],
    includes: [
      "Bed frame assembled",
      "Side rails",
      "Foam mattress + waterproof cover",
      "IV pole",
    ],
    pricing: { buy: 22000, rentPerMonth: 3500, mrp: 28000 },
    relatedServices: ["post-surgery-care", "elder-care"],
    faqs: [
      {
        q: "Why is this cheaper than electric beds?",
        a: "No motors, no remote, no electronics. Same frame and same load capacity — just operated by hand cranks.",
      },
    ],
    seoTitle: "Manual Hospital Bed Bangalore | Buy ₹22,000 or Rent ₹3,500/month",
    seoDescription:
      "3-function manual hospital bed for home care in Bangalore. Rent from ₹3,500/month or buy outright. Free delivery and assembly.",
  },
  {
    slug: "alternating-pressure-air-mattress",
    name: "Alternating-pressure air mattress",
    short: "Bedsore prevention, non-negotiable for bedridden patients over 5 days.",
    category: "hospital-beds",
    icon: "mattress-air",
    description: [
      "An alternating-pressure air mattress with a quiet pump. Cells inflate and deflate in sequence so the patient's pressure points are never bearing weight for long enough to develop sores.",
      "If a patient will be in bed for more than 4–5 days, this is the single most important purchase the family makes. Bedsores are the difference between a stable home recovery and an infection-driven hospital readmission. Renting works fine if the period is defined; buying makes sense for long-term bedridden care.",
    ],
    specs: [
      { label: "Type", value: "Bubble-style alternating pressure, 130 cells" },
      { label: "Pump", value: "Adjustable, low-noise (<28 dB)" },
      { label: "Weight capacity", value: "135 kg" },
      { label: "Cycle time", value: "10-minute alternation" },
      { label: "Power", value: "230V, ~15W" },
      { label: "Material", value: "Medical-grade PVC with antimicrobial coating" },
    ],
    includes: [
      "Air mattress (deflated)",
      "Quiet pump unit",
      "Connecting hoses",
      "Carry bag",
      "1-year warranty (purchase)",
    ],
    pricing: { buy: 6500, rentPerMonth: 1500, mrp: 9000 },
    relatedServices: ["bedridden-care", "post-surgery-care", "patient-care"],
    faqs: [
      {
        q: "Does this replace a regular mattress?",
        a: "It sits on top of one. The hospital bed mattress (or any firm mattress) goes underneath; the air mattress is the top layer the patient lies on.",
      },
      {
        q: "How loud is the pump?",
        a: "Under 28 dB — quieter than a refrigerator. Most patients sleep through it from night one.",
      },
      {
        q: "What if there's a power cut?",
        a: "The cells hold pressure for ~4 hours during a power cut. For longer outages, consider a small UPS — we can recommend one.",
      },
    ],
    seoTitle: "Air Mattress for Bedsore Prevention in Bangalore | Buy ₹6,500",
    seoDescription:
      "Alternating-pressure air mattress for bedridden patients in Bangalore. Buy ₹6,500 or rent ₹1,500/month. Quiet pump, 1-year warranty.",
  },
  {
    slug: "foam-mattress-medical",
    name: "Medical foam mattress with waterproof cover",
    short: "High-density foam, removable cover, for short-term recovery.",
    category: "hospital-beds",
    icon: "mattress-foam",
    description: [
      "A high-density medical foam mattress sized to fit standard hospital bed frames (210 × 95 × 10 cm). Includes a removable, machine-washable waterproof cover with antimicrobial treatment.",
      "Suitable for short recoveries (under 4 days in bed). For longer, switch to an air mattress to prevent bedsores.",
    ],
    specs: [
      { label: "Dimensions", value: "210 × 95 × 10 cm" },
      { label: "Density", value: "40 kg/m³ high-density foam" },
      { label: "Cover", value: "Removable, waterproof, machine-washable" },
      { label: "Weight", value: "9 kg" },
    ],
    includes: ["Foam mattress", "Waterproof zippered cover (removable)"],
    pricing: { buy: 4500, mrp: 6000 },
    relatedServices: ["post-surgery-care", "elder-care"],
    faqs: [
      {
        q: "Can I machine-wash the cover?",
        a: "Yes — cold water, gentle cycle. Don't tumble dry.",
      },
    ],
    seoTitle: "Medical Foam Mattress with Waterproof Cover | Care Givers Shop",
    seoDescription:
      "High-density medical foam mattress, 210×95×10 cm with washable waterproof cover. ₹4,500 in Bangalore.",
  },
  {
    slug: "hospital-bed-side-rails",
    name: "Hospital bed side rails (pair)",
    short: "Foldable steel side rails. Critical fall-prevention for any bed.",
    category: "hospital-beds",
    icon: "side-rails",
    description: [
      "Foldable, lockable steel side rails that attach to most hospital bed frames. Sold as a pair (one for each side). Most of our beds already include rails — these are a spare or replacement option.",
    ],
    specs: [
      { label: "Material", value: "Powder-coated steel" },
      { label: "Mechanism", value: "Foldable, lockable" },
      { label: "Length", value: "130 cm" },
      { label: "Compatibility", value: "Standard hospital bed frames" },
    ],
    includes: ["Pair of side rails", "Mounting hardware"],
    pricing: { buy: 3500, mrp: 4500 },
    relatedServices: ["bedridden-care", "elder-care"],
    faqs: [
      {
        q: "Will these fit any bed?",
        a: "They fit standard Indian hospital bed frames. For non-standard frames or normal beds at home, message us with a photo and dimensions and we'll confirm.",
      },
    ],
    seoTitle: "Hospital Bed Side Rails (Pair) | Care Givers Shop",
    seoDescription:
      "Foldable steel side rails for hospital beds, sold as a pair. ₹3,500 with mounting hardware.",
  },
  {
    slug: "bedpan-urinal-set",
    name: "Bedpan & urinal set",
    short: "Stainless steel bedpan + plastic urinal bottle. Hygienic and durable.",
    category: "hospital-beds",
    icon: "bedpan",
    description: [
      "A stainless-steel bedpan and a plastic urinal bottle, sized for adult use. Easy to sterilise, durable across years of use, and far more dignified than makeshift alternatives.",
    ],
    specs: [
      { label: "Bedpan", value: "Stainless steel, polished interior" },
      { label: "Urinal", value: "Reusable plastic, 1L capacity, with lid" },
      { label: "Sterilising", value: "Boiling water or standard disinfectants" },
    ],
    includes: ["Stainless steel bedpan", "Plastic urinal bottle with lid"],
    pricing: { buy: 650, mrp: 850 },
    relatedServices: ["bedridden-care", "patient-care"],
    faqs: [
      {
        q: "Can I sterilise these with hot water?",
        a: "Yes — the steel bedpan can go in boiling water. The plastic urinal should be cleaned with a standard chlorhexidine or savlon solution.",
      },
    ],
    seoTitle: "Bedpan & Urinal Set for Home Care | Care Givers Shop",
    seoDescription:
      "Stainless steel bedpan and reusable plastic urinal bottle. ₹650 in Bangalore.",
  },

  /* ─────────────────────────── Mobility & transfer aids ─────────────────────────── */
  {
    slug: "standard-foldable-wheelchair",
    name: "Standard foldable wheelchair",
    short: "Foldable steel frame, comfortable seat. Our most-rented mobility aid.",
    category: "mobility",
    icon: "wheelchair",
    description: [
      "A standard foldable steel wheelchair — the workhorse of post-surgery and elder care. Foldable for easy transport in a car boot, with detachable footrests and armrests.",
      "Most families rent this for 4–8 weeks post-surgery and return it once mobility recovers. Outright purchase makes sense for permanent mobility needs.",
    ],
    specs: [
      { label: "Frame", value: "Powder-coated steel, foldable" },
      { label: "Seat width", value: "46 cm" },
      { label: "Weight capacity", value: "120 kg" },
      { label: "Wheels", value: "24-inch rear, solid (no puncture)" },
      { label: "Footrests", value: "Detachable, swing-away" },
      { label: "Armrests", value: "Padded, fixed" },
      { label: "Folded width", value: "30 cm" },
    ],
    includes: [
      "Wheelchair fully assembled",
      "Detachable footrests",
      "Cushion",
      "Anti-tip wheels at rear",
    ],
    pricing: { buy: 6500, rentPerMonth: 1200, mrp: 8500 },
    relatedServices: ["post-surgery-care", "elder-care", "patient-care"],
    faqs: [
      {
        q: "Will it fit in a sedan car boot?",
        a: "Yes — folds down to about 30 cm wide. Fits in most sedan and SUV boots.",
      },
      {
        q: "Are the wheels puncture-proof?",
        a: "Yes, solid rubber. No pumping required.",
      },
    ],
    seoTitle: "Foldable Wheelchair in Bangalore (Buy or Rent) | Care Givers",
    seoDescription:
      "Standard foldable wheelchair for home use in Bangalore. Buy ₹6,500 or rent from ₹1,200/month. Free delivery, solid-rubber wheels.",
  },
  {
    slug: "reclining-wheelchair-premium",
    name: "Premium reclining wheelchair",
    short: "Reclining backrest, elevating footrests, head support. For long sit-out periods.",
    category: "mobility",
    icon: "wheelchair-recline",
    description: [
      "A premium wheelchair with a fully reclining backrest, elevating footrests, and detachable head support. For patients who need to sit out of bed for several hours — post-stroke recovery, advanced age, or any condition where staying fully upright is tiring.",
      "Often rented in combination with a hospital bed for long-term home care setups.",
    ],
    specs: [
      { label: "Backrest", value: "Reclines to 160°" },
      { label: "Footrests", value: "Elevating, length-adjustable" },
      { label: "Head support", value: "Detachable, padded" },
      { label: "Seat width", value: "46 cm" },
      { label: "Weight capacity", value: "130 kg" },
      { label: "Wheels", value: "24-inch rear, solid" },
      { label: "Armrests", value: "Flip-back, padded" },
    ],
    includes: [
      "Wheelchair with reclining backrest",
      "Elevating footrests",
      "Head support",
      "Removable seat cushion",
    ],
    pricing: { buy: 18500, rentPerMonth: 3200, mrp: 24000 },
    relatedServices: ["bedridden-care", "post-surgery-care", "elder-care"],
    faqs: [
      {
        q: "Can the patient sleep in this?",
        a: "Reclined fully, it's comfortable for short rests. For overnight sleeping a hospital bed is still essential.",
      },
    ],
    seoTitle: "Reclining Wheelchair Bangalore | Premium Tilt Wheelchair",
    seoDescription:
      "Premium reclining wheelchair with elevating footrests and head support. Buy ₹18,500 or rent ₹3,200/month in Bangalore.",
  },
  {
    slug: "aluminium-walker",
    name: "Aluminium folding walker",
    short: "Lightweight, foldable, height-adjustable. The standard post-surgery walker.",
    category: "mobility",
    icon: "walker",
    description: [
      "A standard aluminium folding walker — the universal post-surgery, post-fracture, post-knee-replacement aid. Lightweight (under 2.5 kg), foldable, with rubber-tipped legs.",
      "Buy outright — cheap enough that rental doesn't make sense, and most families keep it for years.",
    ],
    specs: [
      { label: "Material", value: "Aluminium" },
      { label: "Weight", value: "2.4 kg" },
      { label: "Height adjust", value: "78–94 cm (5 settings)" },
      { label: "Folded width", value: "10 cm" },
      { label: "Weight capacity", value: "100 kg" },
      { label: "Tips", value: "Rubber, non-slip" },
    ],
    includes: ["Folding walker", "Spare rubber tips (4)"],
    pricing: { buy: 1200, mrp: 1650 },
    relatedServices: ["post-surgery-care", "elder-care"],
    faqs: [
      {
        q: "How do I size it correctly?",
        a: "Stand the patient up, arms relaxed. The handle should sit at wrist height. Most patients are between settings 2 and 4.",
      },
    ],
    seoTitle: "Aluminium Folding Walker | Care Givers Shop",
    seoDescription:
      "Lightweight aluminium folding walker, height-adjustable. ₹1,200 in Bangalore. 5 height settings, non-slip tips.",
  },
  {
    slug: "rollator-walker-with-seat",
    name: "Rollator walker with seat",
    short: "Four wheels, hand brakes, fold-down seat. For longer walks with rest stops.",
    category: "mobility",
    icon: "rollator",
    description: [
      "A four-wheel rollator walker with brake-locked rear wheels and a fold-down seat. For patients who can walk longer distances but need somewhere to sit when they get tired — the long walk to the dining room, a slow morning walk in the garden, a visit to the temple.",
    ],
    specs: [
      { label: "Wheels", value: "4 (8-inch front swivel, rear lockable)" },
      { label: "Seat", value: "Fold-down, padded" },
      { label: "Brakes", value: "Hand-operated, locking" },
      { label: "Storage", value: "Under-seat basket" },
      { label: "Weight capacity", value: "120 kg" },
      { label: "Height adjust", value: "82–96 cm" },
      { label: "Weight", value: "7 kg" },
    ],
    includes: [
      "Rollator with seat",
      "Hand brakes pre-installed",
      "Storage basket",
    ],
    pricing: { buy: 6500, rentPerMonth: 1500, mrp: 8500 },
    relatedServices: ["elder-care", "post-surgery-care"],
    faqs: [
      {
        q: "Is this better than a regular walker?",
        a: "For patients who can walk steadily — yes. For patients with serious balance issues, the standard walker is safer because it requires lifting and stopping, not rolling.",
      },
    ],
    seoTitle: "Rollator Walker with Seat | Buy ₹6,500 or Rent in Bangalore",
    seoDescription:
      "Four-wheel rollator walker with fold-down seat and locking brakes. Buy ₹6,500 or rent ₹1,500/month.",
  },
  {
    slug: "bedside-commode",
    name: "Adjustable bedside commode",
    short: "Foldable commode with removable bucket. Saves the long walk to the bathroom at night.",
    category: "mobility",
    icon: "commode",
    description: [
      "A foldable bedside commode with a removable bucket. Eliminates the long walk to the bathroom — particularly the night-time walk, which is when most falls happen.",
      "Adjustable height to match different bed heights. The bucket lifts out easily for emptying and cleaning. We strongly recommend one for any patient with reduced mobility, even short-term.",
    ],
    specs: [
      { label: "Frame", value: "Powder-coated steel, foldable" },
      { label: "Height adjust", value: "5 settings" },
      { label: "Seat", value: "Padded, with splash guard" },
      { label: "Bucket", value: "Removable, with lid" },
      { label: "Weight capacity", value: "120 kg" },
    ],
    includes: ["Commode frame", "Padded seat with lid", "Removable bucket with lid"],
    pricing: { buy: 2800, rentPerMonth: 800, mrp: 3500 },
    relatedServices: ["elder-care", "post-surgery-care", "bedridden-care"],
    faqs: [
      {
        q: "Can this be used in a shower?",
        a: "There's a related product — a shower commode chair, with drainage holes. WhatsApp our team if that's what you need.",
      },
    ],
    seoTitle: "Bedside Commode for Home Care | Care Givers Shop",
    seoDescription:
      "Foldable bedside commode with removable bucket, height-adjustable. Buy ₹2,800 or rent ₹800/month in Bangalore.",
  },
  {
    slug: "patient-lifting-hoist",
    name: "Patient lifting hoist (manual)",
    short: "Hydraulic lifter for safely moving patients from bed to chair. Mostly rented.",
    category: "mobility",
    icon: "lifter",
    description: [
      "A hydraulic patient lifter for moving a bedridden patient safely between bed, chair and commode without lifting them by hand. Critical for the caregiver's back and the patient's dignity in long-term bedridden care.",
      "Most families rent this — the use case is short-lived for many recoveries. Buy if you're set up for years of bedridden home care.",
    ],
    specs: [
      { label: "Lift mechanism", value: "Hydraulic, hand-pumped" },
      { label: "Weight capacity", value: "150 kg" },
      { label: "Lifting range", value: "30–170 cm" },
      { label: "Base", value: "Adjustable width for chair access" },
      { label: "Sling", value: "Universal nylon sling, washable (included)" },
      { label: "Wheels", value: "4 castors, 2 with brakes" },
    ],
    includes: ["Hoist", "Universal nylon sling", "Operating manual"],
    pricing: { buy: 35000, rentPerMonth: 5500, mrp: 45000 },
    relatedServices: ["bedridden-care", "live-in-caregiver"],
    faqs: [
      {
        q: "Does one person operate this?",
        a: "Yes. Designed for solo caregiver operation, which is the whole point.",
      },
      {
        q: "Do you train us on how to use it?",
        a: "Yes — included with delivery. Our supervisor demonstrates with the family on day one.",
      },
    ],
    seoTitle: "Patient Lifting Hoist in Bangalore | Buy or Rent",
    seoDescription:
      "Hydraulic patient lifter for bedridden home care. 150 kg capacity. Buy ₹35,000 or rent ₹5,500/month with training included.",
  },
  {
    slug: "transfer-board",
    name: "Wooden transfer board",
    short: "Smooth wooden board for safely sliding a patient from bed to wheelchair.",
    category: "mobility",
    icon: "transfer-board",
    description: [
      "A polished hardwood transfer board for sliding a patient from bed to wheelchair, or wheelchair to car seat, without lifting. Used widely in post-stroke and post-orthopedic recovery.",
      "Cheap, durable, and one of those things that earns its keep within the first week.",
    ],
    specs: [
      { label: "Material", value: "Polished hardwood" },
      { label: "Length", value: "76 cm" },
      { label: "Width", value: "23 cm" },
      { label: "Weight capacity", value: "150 kg" },
      { label: "Cutouts", value: "Hand-grip holes at both ends" },
    ],
    includes: ["Transfer board"],
    pricing: { buy: 1800, mrp: 2400 },
    relatedServices: ["post-surgery-care", "bedridden-care"],
    faqs: [
      {
        q: "Do I need this if I have a lifter?",
        a: "Different use case. A lifter takes the patient's weight entirely. A transfer board is for short slides when the patient can support some weight. Many families have both.",
      },
    ],
    seoTitle: "Wooden Transfer Board | Care Givers Shop",
    seoDescription:
      "Polished hardwood patient transfer board, 76×23 cm, with hand-grip cutouts. ₹1,800 in Bangalore.",
  },

  /* ─────────────────────────── Respiratory & oxygen ─────────────────────────── */
  {
    slug: "oxygen-concentrator-5-litre",
    name: "Oxygen concentrator (5 LPM)",
    short: "5 litres per minute, continuous use, ideal for home oxygen therapy. Our most-rented respiratory unit.",
    category: "respiratory",
    icon: "oxygen",
    description: [
      "A 5 LPM (litres per minute) oxygen concentrator suitable for most home oxygen therapy needs — post-COVID lung recovery, mild to moderate COPD, chronic respiratory conditions, end-of-life comfort care.",
      "Concentrates oxygen from room air — no cylinders, no refills. Plug it in, set the flow rate, and run continuously for as long as needed. Rental makes the most sense for most families; buying becomes economical past 6 months of continuous use.",
    ],
    specs: [
      { label: "Flow rate", value: "0.5–5 LPM, adjustable" },
      { label: "Oxygen purity", value: "≥93% at all flow rates" },
      { label: "Power", value: "230V, ~350W" },
      { label: "Noise level", value: "<45 dB" },
      { label: "Weight", value: "16 kg" },
      { label: "Dimensions", value: "37 × 30 × 60 cm" },
      { label: "Sieve bed life", value: "~30,000 hours" },
      { label: "Alarms", value: "Low oxygen purity, power failure" },
    ],
    includes: [
      "Oxygen concentrator unit",
      "Nasal cannula (single-use, 3 packs)",
      "Humidifier bottle",
      "Power cord",
      "User manual",
      "1-year warranty (purchase) · rental SLA replacement",
    ],
    pricing: { buy: 38000, rentPerMonth: 6500, mrp: 48000 },
    relatedServices: ["patient-care", "bedridden-care", "post-surgery-care"],
    faqs: [
      {
        q: "Do I need a doctor's prescription?",
        a: "Yes. For both rental and purchase, please share the prescription with our team via WhatsApp. We won't dispense oxygen without one.",
      },
      {
        q: "What flow rate does my patient need?",
        a: "Always set per the doctor's prescription. Common range is 2–4 LPM for moderate cases, up to 5 LPM for higher needs.",
      },
      {
        q: "What about power cuts?",
        a: "The unit shuts off during outages. Pair with a small UPS (we can recommend) for short backup, or keep an emergency oxygen cylinder as backup for high-dependency patients.",
      },
    ],
    seoTitle: "Oxygen Concentrator 5 LPM Bangalore (Buy or Rent) | Care Givers",
    seoDescription:
      "5 LPM oxygen concentrator for home use in Bangalore. Buy ₹38,000 or rent ₹6,500/month. Doctor's prescription required. Free delivery.",
  },
  {
    slug: "oxygen-concentrator-10-litre",
    name: "Oxygen concentrator (10 LPM, high-flow)",
    short: "10 LPM continuous flow for severe respiratory cases and dual-patient households.",
    category: "respiratory",
    icon: "oxygen-high",
    description: [
      "A 10 LPM high-flow oxygen concentrator for severe respiratory cases, dual-patient households, or any situation requiring more than 5 LPM continuously. Common in post-ICU step-down at home.",
      "Doctor's prescription required for both rental and purchase. Our care manager will review the prescription before dispatch.",
    ],
    specs: [
      { label: "Flow rate", value: "1–10 LPM, adjustable" },
      { label: "Oxygen purity", value: "≥90% at all flow rates" },
      { label: "Power", value: "230V, ~600W" },
      { label: "Noise level", value: "<55 dB" },
      { label: "Weight", value: "22 kg" },
      { label: "Alarms", value: "Low purity, power failure, high temperature" },
    ],
    includes: [
      "Oxygen concentrator unit",
      "Nasal cannulas",
      "Humidifier bottle",
      "Power cord",
      "1-year warranty (purchase)",
    ],
    pricing: { buy: 78000, rentPerMonth: 12500, mrp: 95000 },
    relatedServices: ["bedridden-care", "patient-care"],
    faqs: [
      {
        q: "Is this much louder than the 5 LPM unit?",
        a: "Slightly — about 55 dB vs 45 dB. Usually placed in a corner or adjacent room with a longer tube to the patient.",
      },
    ],
    seoTitle: "Oxygen Concentrator 10 LPM in Bangalore | High-Flow Rental",
    seoDescription:
      "10 LPM high-flow oxygen concentrator for severe respiratory cases. Buy ₹78,000 or rent ₹12,500/month in Bangalore.",
  },
  {
    slug: "cpap-machine-auto",
    name: "CPAP machine (auto-titrating)",
    short: "Auto-adjusting CPAP for obstructive sleep apnoea. Includes mask and humidifier.",
    category: "respiratory",
    icon: "cpap",
    description: [
      "An auto-titrating CPAP machine for obstructive sleep apnoea (OSA). The pressure adjusts automatically through the night based on breathing patterns, which is more comfortable than fixed-pressure CPAP and what most sleep medicine specialists recommend now.",
      "Includes a standard nasal mask, heated humidifier, and an SD card for the doctor to review usage and effectiveness data at the next visit. Rental makes sense for the first 1–2 months while the patient adapts; most who stick with therapy buy outright once they've confirmed it works for them.",
    ],
    specs: [
      { label: "Mode", value: "Auto-titrating CPAP (APAP)" },
      { label: "Pressure range", value: "4–20 cmH₂O" },
      { label: "Humidifier", value: "Heated, integrated" },
      { label: "Data tracking", value: "SD card + Bluetooth-ready" },
      { label: "Mask included", value: "Nasal mask (standard, M)" },
      { label: "Weight", value: "1.2 kg" },
      { label: "Power", value: "230V or 12V DC (travel)" },
    ],
    includes: [
      "CPAP machine",
      "Standard nasal mask",
      "Heated humidifier",
      "6-foot tubing",
      "Power adapter",
      "Carry bag",
      "SD card",
      "User manual",
    ],
    pricing: { buy: 42000, rentPerMonth: 4500, mrp: 55000 },
    relatedServices: ["patient-care", "elder-care"],
    faqs: [
      {
        q: "Do I need a sleep study before getting this?",
        a: "Yes — and a doctor's prescription with the recommended pressure or auto-CPAP setting. We need to see the prescription before dispatch.",
      },
      {
        q: "What if the mask doesn't fit?",
        a: "We swap masks free within 14 days. Different face shapes need different masks (nasal pillow, full face). We'd rather you get the right fit than give up on therapy.",
      },
    ],
    seoTitle: "Auto CPAP Machine Bangalore | Buy ₹42,000 or Rent",
    seoDescription:
      "Auto-titrating CPAP machine for sleep apnoea in Bangalore. Buy ₹42,000 or rent ₹4,500/month. Includes mask, humidifier, free mask swap.",
  },
  {
    slug: "bipap-machine",
    name: "BiPAP machine (bi-level)",
    short: "Two-pressure ventilation for COPD, neuromuscular conditions, severe sleep apnoea.",
    category: "respiratory",
    icon: "bipap",
    description: [
      "A BiPAP (bi-level positive airway pressure) machine — separate inhale and exhale pressures. Used for COPD, neuromuscular conditions (ALS, muscular dystrophy), CO₂ retention cases, and severe sleep apnoea where CPAP isn't sufficient.",
      "BiPAP setup requires a doctor's prescription with specific IPAP/EPAP settings. Our team confirms the settings with the prescribing doctor before dispatch.",
    ],
    specs: [
      { label: "Mode", value: "BiPAP-ST, auto-BiPAP" },
      { label: "Pressure range", value: "4–25 cmH₂O" },
      { label: "Humidifier", value: "Heated, integrated" },
      { label: "Data tracking", value: "SD card + Wi-Fi" },
      { label: "Mask included", value: "Full-face mask (standard, M)" },
      { label: "Weight", value: "1.6 kg" },
      { label: "Power", value: "230V" },
    ],
    includes: [
      "BiPAP machine",
      "Full-face mask",
      "Heated humidifier",
      "Tubing",
      "Carry bag",
      "SD card",
    ],
    pricing: { buy: 85000, rentPerMonth: 9500, mrp: 110000 },
    relatedServices: ["patient-care", "bedridden-care"],
    faqs: [
      {
        q: "Is this the same as a ventilator?",
        a: "Different. BiPAP is non-invasive — through a mask. A ventilator delivers ventilation via a tracheostomy or intubation. We don't supply invasive ventilators for home use.",
      },
    ],
    seoTitle: "BiPAP Machine in Bangalore | Buy or Rent at Care Givers",
    seoDescription:
      "Bi-level BiPAP machine for COPD, neuromuscular conditions, severe sleep apnoea. Buy ₹85,000 or rent ₹9,500/month in Bangalore.",
  },
  {
    slug: "nebuliser-compressor",
    name: "Nebuliser (compressor type)",
    short: "Standard home nebuliser for asthma, COPD and respiratory infections.",
    category: "respiratory",
    icon: "nebuliser",
    description: [
      "A standard compressor-type nebuliser — the universal home unit for asthma, COPD, and acute respiratory infections. Quiet, durable, easy to clean.",
    ],
    specs: [
      { label: "Type", value: "Piston compressor" },
      { label: "Particle size", value: "1–5 micron (MMAD)" },
      { label: "Treatment time", value: "8–10 minutes per session" },
      { label: "Noise level", value: "<55 dB" },
      { label: "Mask sizes", value: "Adult + paediatric included" },
    ],
    includes: [
      "Nebuliser compressor",
      "Adult mask",
      "Paediatric mask",
      "Mouthpiece",
      "Medication cup",
      "Air tube",
    ],
    pricing: { buy: 1800, mrp: 2400 },
    relatedServices: ["patient-care", "elder-care"],
    faqs: [
      {
        q: "How often do I replace the medication cup?",
        a: "After ~3 months of daily use, or sooner if cracked. We can supply replacements.",
      },
    ],
    seoTitle: "Home Nebuliser | Compressor Type | Care Givers Shop",
    seoDescription:
      "Compressor-type home nebuliser with adult and paediatric masks. ₹1,800 in Bangalore.",
  },
  {
    slug: "portable-suction-machine",
    name: "Portable suction machine",
    short: "For tracheostomy and secretion management. Essential for bedridden patients.",
    category: "respiratory",
    icon: "suction",
    description: [
      "A portable suction machine for clearing airway secretions in bedridden patients, tracheostomy care, and post-surgical recovery. Quiet, with adjustable vacuum strength and a collection jar.",
    ],
    specs: [
      { label: "Vacuum range", value: "0–600 mmHg, adjustable" },
      { label: "Flow rate", value: "20 LPM" },
      { label: "Collection jar", value: "1 L, autoclavable" },
      { label: "Power", value: "230V (rechargeable battery option)" },
      { label: "Noise level", value: "<55 dB" },
      { label: "Weight", value: "3.5 kg" },
    ],
    includes: [
      "Suction unit",
      "Collection jar (1 L)",
      "Suction tubing (3 m)",
      "Disposable suction catheters (10)",
      "Power cord",
    ],
    pricing: { buy: 6500, rentPerMonth: 2200, mrp: 8500 },
    relatedServices: ["bedridden-care", "patient-care"],
    faqs: [
      {
        q: "Do you supply replacement suction catheters?",
        a: "Yes — we deliver them along with regular care manager check-ins.",
      },
    ],
    seoTitle: "Portable Suction Machine Bangalore | Buy or Rent",
    seoDescription:
      "Portable suction machine for tracheostomy and secretion management. Buy ₹6,500 or rent ₹2,200/month in Bangalore.",
  },
  {
    slug: "fingertip-pulse-oximeter",
    name: "Fingertip pulse oximeter",
    short: "Instant SpO₂ and pulse reading. Every patient-care household should have one.",
    category: "respiratory",
    icon: "oximeter",
    description: [
      "A fingertip pulse oximeter for daily SpO₂ (blood oxygen saturation) and pulse measurement. Battery-powered, instant reading, large OLED display. We recommend one for every household with an elderly or recovering patient.",
    ],
    specs: [
      { label: "SpO₂ range", value: "70–100%, accuracy ±2%" },
      { label: "Pulse range", value: "30–250 bpm" },
      { label: "Display", value: "OLED, 4-direction rotation" },
      { label: "Power", value: "2 × AAA batteries (included)" },
      { label: "Auto-off", value: "After 8 seconds of inactivity" },
    ],
    includes: ["Pulse oximeter", "AAA batteries (2)", "Lanyard"],
    pricing: { buy: 950, mrp: 1300 },
    relatedServices: ["elder-care", "patient-care"],
    faqs: [
      {
        q: "Does it work on cold or dark fingers?",
        a: "It can struggle with very cold or dark nail-polished fingers. Warm the finger first, remove nail polish, and try a different finger if needed.",
      },
    ],
    seoTitle: "Fingertip Pulse Oximeter | Care Givers Shop",
    seoDescription:
      "Fingertip pulse oximeter with OLED display for SpO₂ and pulse. ₹950 in Bangalore.",
  },

  /* ─────────────────────────── Monitoring devices ─────────────────────────── */
  {
    slug: "upper-arm-bp-monitor",
    name: "Digital BP monitor (upper arm)",
    short: "Clinically validated upper-arm cuff. The home BP monitor most cardiologists recommend.",
    category: "monitoring",
    icon: "bp-monitor",
    description: [
      "A clinically validated upper-arm digital BP monitor. Upper-arm cuff readings are more accurate than wrist readings, which is why most cardiologists recommend this style for home monitoring.",
      "Stores readings for two users (most homes have two people who track BP). Bluetooth-ready models also push readings to a phone app — useful for NRI families managing parents remotely.",
    ],
    specs: [
      { label: "Cuff", value: "Upper arm, 22–42 cm" },
      { label: "Measurement", value: "Oscillometric, BP + pulse + irregular rhythm" },
      { label: "Memory", value: "120 readings × 2 users" },
      { label: "Display", value: "Large LCD" },
      { label: "Validation", value: "Clinically validated to ESH protocol" },
      { label: "Power", value: "4 × AA batteries (included) + AC adapter" },
    ],
    includes: [
      "BP monitor",
      "Upper-arm cuff",
      "4 × AA batteries",
      "AC adapter",
      "Storage pouch",
    ],
    pricing: { buy: 1650, mrp: 2200 },
    relatedServices: ["elder-care", "patient-care"],
    faqs: [
      {
        q: "How often should we measure?",
        a: "Twice a day for new diagnoses, once a day for stable patients. Always at the same time, in the same chair, after 5 minutes of rest.",
      },
    ],
    seoTitle: "Upper-Arm Digital BP Monitor | Care Givers Shop",
    seoDescription:
      "Clinically validated upper-arm digital BP monitor with 120-reading memory. ₹1,650 in Bangalore.",
  },
  {
    slug: "wrist-bp-monitor",
    name: "Wrist BP monitor",
    short: "Compact wrist BP cuff. Useful for travel and quick checks.",
    category: "monitoring",
    icon: "bp-wrist",
    description: [
      "A compact wrist BP monitor for travel or quick spot checks. Less accurate than upper-arm models for clinical decisions — but more convenient day-to-day. We recommend it as a secondary device, not a primary.",
    ],
    specs: [
      { label: "Cuff", value: "Wrist, 13.5–21.5 cm" },
      { label: "Memory", value: "60 readings × 2 users" },
      { label: "Power", value: "2 × AAA batteries (included)" },
    ],
    includes: ["Wrist BP monitor", "AAA batteries (2)", "Carry case"],
    pricing: { buy: 1200, mrp: 1600 },
    relatedServices: ["elder-care"],
    faqs: [
      {
        q: "Is the wrist reading accurate enough for daily tracking?",
        a: "For trend-tracking yes. For clinical decisions, the upper-arm model is the better choice.",
      },
    ],
    seoTitle: "Wrist BP Monitor | Care Givers Shop Bangalore",
    seoDescription:
      "Compact wrist BP monitor with 60-reading memory. ₹1,200 in Bangalore.",
  },
  {
    slug: "blood-glucose-monitor",
    name: "Blood glucose monitor (with 50 strips)",
    short: "Standard glucometer with 50 test strips and 25 lancets included.",
    category: "monitoring",
    icon: "glucose",
    description: [
      "A standard home glucometer with 50 test strips and 25 lancets included. Small blood sample, results in 5 seconds, memory for 500 readings.",
      "We can also supply additional strips on subscription so you never run out.",
    ],
    specs: [
      { label: "Measurement range", value: "20–600 mg/dL" },
      { label: "Sample size", value: "0.5 μL blood" },
      { label: "Test time", value: "5 seconds" },
      { label: "Memory", value: "500 readings" },
      { label: "Coding", value: "No-code (automatic)" },
    ],
    includes: [
      "Glucometer",
      "Lancing device",
      "50 test strips",
      "25 lancets",
      "Control solution",
      "Carry case",
    ],
    pricing: { buy: 1800, mrp: 2400 },
    relatedServices: ["elder-care", "patient-care"],
    faqs: [
      {
        q: "Do you supply replacement strips?",
        a: "Yes. Single packs of 50 (₹650) or quarterly subscription with delivery.",
      },
    ],
    seoTitle: "Glucose Monitor with Strips | Care Givers Shop",
    seoDescription:
      "Home glucometer with 50 strips and 25 lancets included. ₹1,800 in Bangalore.",
  },
  {
    slug: "digital-thermometer",
    name: "Digital thermometer (oral)",
    short: "Standard digital thermometer, oral or underarm. Every household needs one.",
    category: "monitoring",
    icon: "thermometer",
    description: [
      "A standard digital thermometer for oral, underarm or rectal use. Reads in 60 seconds, auto-shut-off after 10 minutes. Waterproof tip, replaceable battery.",
    ],
    specs: [
      { label: "Range", value: "32–42 °C" },
      { label: "Accuracy", value: "±0.1 °C" },
      { label: "Time to read", value: "~60 seconds (oral)" },
      { label: "Power", value: "Button cell (replaceable)" },
    ],
    includes: ["Thermometer", "Storage case"],
    pricing: { buy: 350, mrp: 500 },
    relatedServices: ["elder-care", "patient-care"],
    faqs: [
      {
        q: "Can I sterilise the tip?",
        a: "Yes, with alcohol wipes. Don't submerge the body of the thermometer in water — only the tip is fully waterproof.",
      },
    ],
    seoTitle: "Digital Oral Thermometer | Care Givers Shop",
    seoDescription:
      "Standard digital thermometer for oral, underarm or rectal use. ₹350 in Bangalore.",
  },
  {
    slug: "infrared-forehead-thermometer",
    name: "Infrared forehead thermometer",
    short: "No-touch infrared thermometer. Faster, more hygienic for daily monitoring.",
    category: "monitoring",
    icon: "thermometer-ir",
    description: [
      "A no-touch infrared forehead thermometer for fast, hygienic temperature checks. Especially useful for sleeping patients, paediatric care, or any setting where you need a quick reading without disturbing the patient.",
    ],
    specs: [
      { label: "Range", value: "34–43 °C" },
      { label: "Accuracy", value: "±0.2 °C" },
      { label: "Time to read", value: "1 second" },
      { label: "Distance", value: "3–5 cm from forehead" },
      { label: "Memory", value: "32 readings" },
      { label: "Power", value: "2 × AAA batteries (included)" },
    ],
    includes: ["Infrared thermometer", "AAA batteries", "Carry pouch"],
    pricing: { buy: 1650, mrp: 2200 },
    relatedServices: ["elder-care", "patient-care", "dementia-care"],
    faqs: [
      {
        q: "Does sweat affect the reading?",
        a: "Yes — wipe the forehead dry first. Also avoid measuring directly after exercise or hot drinks.",
      },
    ],
    seoTitle: "Infrared Forehead Thermometer | Care Givers Shop",
    seoDescription:
      "No-touch infrared thermometer with 1-second reading and 32-reading memory. ₹1,650 in Bangalore.",
  },
  {
    slug: "digital-weighing-scale",
    name: "Digital body weighing scale",
    short: "180 kg capacity, large LCD, auto step-on. For tracking weight in elder care.",
    category: "monitoring",
    icon: "scale",
    description: [
      "A digital body weighing scale with tempered glass platform, 180 kg capacity, and a large backlit LCD. Auto step-on means no buttons. Tracking weight trends matters in elder care — unexplained weight loss is one of the earliest signs of decline.",
    ],
    specs: [
      { label: "Capacity", value: "180 kg" },
      { label: "Accuracy", value: "100 g" },
      { label: "Platform", value: "Tempered glass" },
      { label: "Display", value: "Backlit LCD" },
      { label: "Power", value: "2 × AAA batteries (included)" },
    ],
    includes: ["Digital scale", "AAA batteries"],
    pricing: { buy: 1450, mrp: 1900 },
    relatedServices: ["elder-care"],
    faqs: [
      {
        q: "Is this safe for elderly patients to step on?",
        a: "Yes — the tempered glass platform is grippy and rated for 180 kg. For very unsteady patients, weigh them seated in a wheelchair on a wheelchair-capable scale (different product).",
      },
    ],
    seoTitle: "Digital Body Weighing Scale | Care Givers Shop",
    seoDescription:
      "Tempered-glass digital body scale, 180 kg capacity, auto step-on. ₹1,450 in Bangalore.",
  },
  {
    slug: "handheld-ecg-monitor",
    name: "Handheld ECG monitor",
    short: "Single-lead handheld ECG for quick cardiac checks at home.",
    category: "monitoring",
    icon: "ecg",
    description: [
      "A handheld single-lead ECG monitor for spot cardiac checks at home. 30-second reading, app-based history, useful for arrhythmia screening and post-cardiac follow-up.",
      "Not a substitute for a 12-lead clinical ECG, but a strong daily tracking tool in cardiac home care.",
    ],
    specs: [
      { label: "Type", value: "Single-lead (Lead I)" },
      { label: "Reading time", value: "30 seconds" },
      { label: "Storage", value: "App-based, unlimited (Bluetooth)" },
      { label: "Power", value: "Built-in rechargeable battery (USB-C)" },
      { label: "Companion app", value: "iOS + Android" },
    ],
    includes: ["Handheld ECG", "USB-C cable", "Carry case"],
    pricing: { buy: 8500, rentPerMonth: 2500, mrp: 11000 },
    relatedServices: ["patient-care", "elder-care"],
    faqs: [
      {
        q: "Is the reading clinical-grade?",
        a: "It's accurate enough for spot rhythm checks but is not a substitute for a 12-lead ECG. Share the readings with your cardiologist for interpretation.",
      },
    ],
    seoTitle: "Handheld ECG Monitor in Bangalore | Buy or Rent",
    seoDescription:
      "Handheld single-lead ECG monitor with app-based history. Buy ₹8,500 or rent ₹2,500/month in Bangalore.",
  },
];

/* ─── Helpers ───────────────────────────────────────────────── */

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: ProductCategory) {
  return products.filter((p) => p.category === slug);
}

export function getCategoryBySlug(slug: ProductCategory) {
  return categories.find((c) => c.slug === slug);
}

/** Products this service should cross-link to in its shop section. */
export function getProductsForService(serviceSlug: string, limit = 4) {
  return products
    .filter((p) => p.relatedServices.includes(serviceSlug))
    .slice(0, limit);
}

/** Format a price in INR with thousand separators. */
export function formatINR(n: number) {
  return n.toLocaleString("en-IN");
}
