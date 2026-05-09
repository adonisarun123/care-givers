export type Service = {
  slug: string;
  name: string;
  short: string;
  emotional: string;
  hero: string;
  description: string;
  duration: string;
  whoFor: string[];
  whatsIncluded: string[];
  pricing: { label: string; price: string; note?: string }[];
  faqs: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
  icon: "elder" | "patient" | "live-in" | "post-surgery" | "dementia" | "bedridden" | "night" | "female";
};

export const services: Service[] = [
  {
    slug: "elder-care",
    name: "Elder Care at Home",
    short: "Compassionate companions for your parents",
    emotional:
      "When you can’t be there, we are. Gentle, patient caregivers who treat your parents like family.",
    hero: "Elder care attendants in Bangalore — full-day, half-day or live-in support for your parents at home.",
    description:
      "Daily personal care, medication reminders, mobility help, meals, light housekeeping and warm companionship. Our elder care attendants are trained for age-related needs and screened for empathy first.",
    duration: "From 4 hours to 24×7 live-in",
    whoFor: [
      "Aging parents living alone",
      "Families managing care from abroad",
      "Working professionals in Bangalore",
    ],
    whatsIncluded: [
      "Bathing, grooming and personal hygiene",
      "Meal preparation and feeding assistance",
      "Medication and timing reminders",
      "Mobility support and fall prevention",
      "Companionship, conversation, walks",
      "Daily activity and wellness updates",
    ],
    pricing: [
      { label: "12-hour day shift", price: "₹950 / day", note: "from" },
      { label: "24-hour live-in", price: "₹28,000 / month", note: "from" },
      { label: "Hourly visit", price: "₹220 / hour", note: "min 4 hours" },
    ],
    faqs: [
      {
        q: "Can the caregiver speak Kannada or my parent’s language?",
        a: "Yes. We match by language preference — Kannada, Hindi, Tamil, Telugu, Malayalam, Bengali and English are all available across our Bangalore caregiver network.",
      },
      {
        q: "What if my parent doesn’t take to the caregiver?",
        a: "We replace within 24 hours, no questions asked. We’d rather find the right fit than leave you anxious.",
      },
    ],
    seoTitle: "Elder Care at Home in Bangalore | Verified Attendants from ₹950/day",
    seoDescription:
      "Trained elder care attendants in Bangalore for your aging parents. Day, night, live-in. Verified, background-checked, language-matched. Book in 60 seconds.",
    icon: "elder",
  },
  {
    slug: "patient-care",
    name: "Patient Care Attendants",
    short: "Skilled hands for recovery at home",
    emotional:
      "Hospital-grade care, in the calm of home. So healing happens where the heart is.",
    hero: "Trained patient care attendants for chronic conditions, recovery and daily medical support at home in Bangalore.",
    description:
      "Patient care attendants assist with feeding, hygiene, vitals tracking, mobility and basic clinical tasks under nursing oversight. Ideal for chronic illness, recovery or hospital-to-home transitions.",
    duration: "Day, night or 24×7",
    whoFor: [
      "Patients discharged from hospital",
      "Chronic illness management",
      "Long-term home recovery",
    ],
    whatsIncluded: [
      "Vitals: BP, temperature, sugar, SpO₂",
      "Feeding (oral, RT, NG support under nurse)",
      "Wound dressing assistance",
      "Catheter and incontinence care",
      "Mobility, repositioning, fall prevention",
      "Reports shared with family daily",
    ],
    pricing: [
      { label: "12-hour shift", price: "₹1,100 / day", note: "from" },
      { label: "24-hour live-in", price: "₹32,000 / month", note: "from" },
    ],
    faqs: [
      {
        q: "Are your patient care attendants medically trained?",
        a: "Yes. All attendants complete a 60+ hour training program in basic clinical care and are supervised by qualified nurses. For complex cases we recommend our Home Nursing tier.",
      },
    ],
    seoTitle: "Patient Care Attendants in Bangalore | 24×7 Home Care Support",
    seoDescription:
      "Skilled patient care attendants for recovery, chronic illness and post-hospitalization at home. Bangalore-wide, verified and supervised. Book today.",
    icon: "patient",
  },
  {
    slug: "live-in-caregiver",
    name: "Live-in Caregiver",
    short: "Round-the-clock care, gently",
    emotional:
      "A trained, kind presence at home — through the night, through the worry, through every small moment.",
    hero: "24×7 live-in caregivers in Bangalore for elderly, bedridden and post-surgery patients.",
    description:
      "A dedicated caregiver lives with your loved one, providing continuous support across day and night. Includes weekly off coverage and supervisor visits every two weeks.",
    duration: "Monthly, with weekly off coverage included",
    whoFor: [
      "Bedridden or fully dependent patients",
      "Elderly living alone needing 24×7 presence",
      "Families needing peace of mind",
    ],
    whatsIncluded: [
      "Continuous day & night supervision",
      "All personal care and meals",
      "Medication tracking",
      "Mobility & repositioning every 2–3 hrs",
      "Weekly off coverage by relief caregiver",
      "Bi-weekly supervisor home visit",
    ],
    pricing: [
      { label: "Live-in (basic care)", price: "₹28,000 / month", note: "from" },
      { label: "Live-in (advanced/medical)", price: "₹35,000 / month", note: "from" },
    ],
    faqs: [
      {
        q: "Where will the caregiver sleep?",
        a: "We need a separate bed — either in the patient’s room or a nearby room. Caregivers do short rest cycles so someone is always alert at night.",
      },
      {
        q: "Will the same caregiver stay long-term?",
        a: "Yes — we aim for continuity. Most placements stay 3–9 months. We give 7 days’ notice if a change is required.",
      },
    ],
    seoTitle: "Live-in Caregiver in Bangalore | 24×7 Home Care from ₹28,000/month",
    seoDescription:
      "Dedicated live-in caregivers in Bangalore for elderly, bedridden and post-surgery patients. Trained, verified, supervised. Replacement guarantee.",
    icon: "live-in",
  },
  {
    slug: "post-surgery-care",
    name: "Post-Surgery Recovery",
    short: "A calm landing after hospital",
    emotional:
      "Going home should feel like relief, not anxiety. We make the first weeks gentle.",
    hero: "Post-surgery and post-hospitalization care at home in Bangalore — for orthopedic, cardiac and abdominal recovery.",
    description:
      "Structured recovery plans built around your surgeon’s discharge notes. Wound observation, mobility coaching, medication adherence and rehab handoff.",
    duration: "1–6 weeks typically",
    whoFor: [
      "Orthopedic recovery (knee, hip, spine)",
      "Cardiac post-op",
      "Abdominal & gynecological surgery",
      "Cancer-related procedures",
    ],
    whatsIncluded: [
      "Wound area observation",
      "Mobility coaching & physio handoff",
      "Pain & medication tracking",
      "Diet support & hydration",
      "Family updates after every shift",
    ],
    pricing: [
      { label: "12-hour shift", price: "₹1,100 / day", note: "from" },
      { label: "24×7 live-in", price: "₹32,000 / month", note: "from" },
    ],
    faqs: [
      {
        q: "Can you start the day of discharge?",
        a: "Yes. With 12–24 hours notice we can place a caregiver at your home or directly at the hospital for transit support.",
      },
    ],
    seoTitle: "Post-Surgery Care at Home in Bangalore | Recovery Attendants",
    seoDescription:
      "Trained post-operative care attendants in Bangalore for orthopedic, cardiac and abdominal recovery at home. Discharge-day start available.",
    icon: "post-surgery",
  },
  {
    slug: "dementia-care",
    name: "Dementia & Alzheimer’s Care",
    short: "Steady, patient, kind",
    emotional:
      "When memory becomes uncertain, presence becomes everything. Our caregivers are trained to be both.",
    hero: "Specialised dementia and Alzheimer’s caregivers at home in Bangalore.",
    description:
      "Caregivers trained in dementia communication, redirection techniques and safety. Calm routines, sundowning support, family coaching included.",
    duration: "Day, night or 24×7 live-in",
    whoFor: [
      "Early to advanced dementia",
      "Alzheimer’s disease",
      "Parkinson’s with cognitive decline",
    ],
    whatsIncluded: [
      "Dementia-specific communication",
      "Sundowning & agitation support",
      "Wandering prevention",
      "Cognitive routines & memory aids",
      "Family caregiver coaching",
    ],
    pricing: [
      { label: "12-hour shift", price: "₹1,250 / day", note: "from" },
      { label: "24×7 live-in", price: "₹34,000 / month", note: "from" },
    ],
    faqs: [
      {
        q: "Will the same caregiver stay so my parent doesn’t get confused?",
        a: "Yes — continuity is critical for dementia. We assign the same caregiver and a single backup, both introduced gradually.",
      },
    ],
    seoTitle: "Dementia & Alzheimer’s Caregiver in Bangalore | Specialised Home Care",
    seoDescription:
      "Specialised dementia caregivers in Bangalore — trained in communication, sundowning support and safety. Continuity-first placements.",
    icon: "dementia",
  },
  {
    slug: "bedridden-care",
    name: "Bedridden Patient Care",
    short: "Gentle, dignified, vigilant",
    emotional:
      "Skin, posture, dignity, comfort. The small things — done patiently, every two hours.",
    hero: "Bedridden patient care attendants for fully dependent patients at home in Bangalore.",
    description:
      "Specialised care for bedridden patients — repositioning every 2 hours, bedsore prevention, hygiene, feeding tube support and family-grade dignity.",
    duration: "Almost always 24×7 live-in",
    whoFor: [
      "Stroke recovery",
      "Spinal cord injury",
      "Late-stage chronic illness",
      "Coma & vegetative state",
    ],
    whatsIncluded: [
      "Repositioning every 2–3 hours",
      "Bedsore prevention & dressing",
      "Sponge bath, oral care, grooming",
      "Catheter & RT-feed support",
      "Range-of-motion exercises",
    ],
    pricing: [
      { label: "24×7 live-in", price: "₹32,000–38,000 / month", note: "based on care level" },
    ],
    faqs: [
      {
        q: "Do we need to buy an air bed or special equipment?",
        a: "An air mattress is strongly recommended for bedsore prevention. We can advise on equipment during your free home assessment.",
      },
    ],
    seoTitle: "Bedridden Patient Care at Home in Bangalore | 24×7 Attendants",
    seoDescription:
      "Trained attendants for bedridden patients in Bangalore. Repositioning, bedsore prevention, RT-feed support. Free home assessment.",
    icon: "bedridden",
  },
  {
    slug: "night-caregiver",
    name: "Night Shift Caregiver",
    short: "Sleep again. We’re awake.",
    emotional:
      "Just for the nights — so the family can rest. Twelve quiet hours of careful watch.",
    hero: "Night shift caregivers in Bangalore — 12-hour overnight care so families can sleep.",
    description:
      "Overnight caregivers for elderly or recovering patients. Watchful, attentive and ready for night-time needs — bathroom assistance, medication, repositioning, reassurance.",
    duration: "12 hours, typically 8pm–8am",
    whoFor: [
      "Families needing overnight relief",
      "Patients with disturbed sleep",
      "High fall-risk seniors",
    ],
    whatsIncluded: [
      "Overnight observation",
      "Night-time bathroom assistance",
      "Medication at scheduled times",
      "Repositioning for bedridden patients",
      "Calm reassurance during anxiety",
    ],
    pricing: [
      { label: "12-hour night shift", price: "₹950 / night", note: "from" },
      { label: "Monthly night package", price: "₹22,000 / month" },
    ],
    faqs: [
      {
        q: "Can the night caregiver sleep?",
        a: "No — night caregivers are trained to stay alert with short rest cycles. They are paid for active overnight presence.",
      },
    ],
    seoTitle: "Night Caregiver in Bangalore | 12-Hour Overnight Home Care",
    seoDescription:
      "Trained night caregivers for elderly and recovering patients in Bangalore. 12-hour overnight shifts so your family can sleep.",
    icon: "night",
  },
  {
    slug: "female-caregiver",
    name: "Female Caregivers & Attendants",
    short: "When comfort comes first",
    emotional:
      "For mothers, daughters, grandmothers — and for any patient who simply feels safer with a woman in the room.",
    hero: "Female caregivers and patient attendants in Bangalore — verified, trained, language-matched.",
    description:
      "All-female care option for elderly mothers, post-partum support, female patients and any household that prefers a woman caregiver. Same training and verification standards.",
    duration: "From 4 hours to live-in",
    whoFor: [
      "Elderly mothers and grandmothers",
      "Female patients post-surgery",
      "Post-partum support",
      "Households preferring female help",
    ],
    whatsIncluded: [
      "All standard elder & patient care services",
      "Language matching",
      "Female supervisor for monthly check-ins",
    ],
    pricing: [
      { label: "12-hour shift", price: "₹950 / day", note: "from" },
      { label: "Live-in", price: "₹28,000 / month", note: "from" },
    ],
    faqs: [
      {
        q: "Can I request a male attendant if needed?",
        a: "Yes — male caregivers are equally available, especially for male patients needing physical support during recovery.",
      },
    ],
    seoTitle: "Female Caregiver in Bangalore | Trained Female Attendants",
    seoDescription:
      "Verified female caregivers and patient attendants in Bangalore. For elderly mothers, post-partum, post-surgery and female patients.",
    icon: "female",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
