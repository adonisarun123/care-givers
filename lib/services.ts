export type CareTimelineItem = { time: string; label: string; detail?: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  emotional: string;
  hero: string;

  /** 2–3 paragraph emotional/contextual intro. Renders right under the hero. */
  intro: string[];

  description: string;
  duration: string;

  whoFor: string[];

  /** Conditions / scenarios this service is built for. */
  conditions: { title: string; detail: string }[];

  /** Things included as standard. Aim for 8–12 specific, concrete items. */
  whatsIncluded: string[];

  /** Honest list of what is NOT covered, so families can plan. */
  notIncluded: string[];

  /** A typical day (or week, for recovery services). */
  careTimeline: { title: string; items: CareTimelineItem[] };

  /** Profile of the caregiver assigned to this service. */
  caregiverProfile: {
    trainingHours: string;
    focus: string;
    supervision: string;
    certifications: string[];
  };

  /** How matching works specifically for this service. */
  matchingNotes: string;

  /** A short family story specific to this service. */
  familyStory: { quote: string; name: string; meta: string };

  pricing: { label: string; price: string; note?: string }[];

  /** 6+ FAQs per service. */
  faqs: { q: string; a: string }[];

  seoTitle: string;
  seoDescription: string;

  icon:
    | "elder"
    | "patient"
    | "live-in"
    | "post-surgery"
    | "dementia"
    | "bedridden"
    | "night"
    | "female";
};

export const services: Service[] = [
  /* ───────────────────────────── Elder care ───────────────────────────── */
  {
    slug: "elder-care",
    name: "Elder Care at Home",
    short: "Compassionate companions for your parents",
    emotional:
      "When you can’t be there, we are. Gentle, patient caregivers who treat your parents like family.",
    hero:
      "Elder care attendants in Bangalore — full-day, half-day or live-in support for your parents at home.",
    intro: [
      "There comes a time when our parents start to need a little more help — with the stairs, with the medicines, with the long quiet afternoons. And often, that time arrives quietly, when we’re far away, working, raising children, or simply unsure where to begin.",
      "Elder care at home is what we built first, because it’s the care our own families needed. It isn’t nursing and it isn’t a hospital stay. It’s a steady, warm, practical presence in your parent’s day — someone who notices when their mood shifts, when they haven’t had water, when they’re a little unsteady today and might want a hand to the bathroom.",
      "In Bangalore, we’ve placed elder care attendants in Indiranagar bungalows, Whitefield apartments, Jayanagar joint families and Hebbal high-rises — for parents living alone, parents with mild memory loss, parents recovering from a fall, and many simply for the comfort of company in a long quiet day.",
    ],
    description:
      "Daily personal care, medication reminders, mobility help, meals, light housekeeping in the patient’s room, and warm companionship. Our elder care attendants are trained for age-related needs and screened for empathy first.",
    duration: "From 4 hours to 24×7 live-in",
    whoFor: [
      "Aging parents living alone",
      "Families managing care from abroad",
      "Working professionals in Bangalore",
      "Households with multi-generational support needs",
    ],
    conditions: [
      {
        title: "Age-related frailty",
        detail: "Gradual loss of strength, balance and stamina — when daily tasks start to feel heavy.",
      },
      {
        title: "Mild to moderate memory loss",
        detail: "Forgetfulness, repeating questions, occasional confusion — caregivers trained in calm redirection.",
      },
      {
        title: "Parkinson’s (early to mid stage)",
        detail: "Mobility, tremor management, medication adherence and fall prevention.",
      },
      {
        title: "Diabetes & hypertension management",
        detail: "Sugar/BP tracking, dietary support, hydration, exercise prompts.",
      },
      {
        title: "Recovery from a fall or fracture",
        detail: "Mobility coaching, walker support, repositioning and cautious movement.",
      },
      {
        title: "Loneliness and post-bereavement",
        detail: "Companionship, conversation, gentle routines for parents who’ve lost a spouse.",
      },
    ],
    whatsIncluded: [
      "Bathing, grooming and personal hygiene",
      "Hair care, nail care and oral hygiene",
      "Help with dressing and changing",
      "Meal preparation per dietary plan",
      "Feeding assistance when needed",
      "Medication and timing reminders",
      "BP, sugar and basic vitals tracking",
      "Mobility support and fall prevention",
      "Walks, light exercises and outdoor time",
      "Conversation, music, reading aloud",
      "Light housekeeping in the patient’s room",
      "Daily WhatsApp updates to family",
    ],
    notIncluded: [
      "Heavy housekeeping for the whole home",
      "Cooking elaborate meals for the wider family",
      "Driving the patient to appointments (we coordinate transport partners)",
      "Clinical procedures: IV, injections, wound dressing (use our home nursing tier)",
      "Companionship for non-patient family members",
    ],
    careTimeline: {
      title: "A typical 12-hour day shift",
      items: [
        { time: "8:00 AM", label: "Arrival & handover", detail: "Quiet greeting, briefing from family, wake-up support if needed." },
        { time: "8:30 AM", label: "Bath, grooming, dressing" },
        { time: "9:30 AM", label: "Breakfast & morning medication", detail: "Hydration check and gentle conversation." },
        { time: "10:30 AM", label: "Walk in the garden / light exercises" },
        { time: "11:30 AM", label: "Reading aloud, music, calm activities" },
        { time: "12:30 PM", label: "Lunch & post-meal walk" },
        { time: "1:30 PM", label: "Afternoon rest", detail: "Vitals checked while patient is resting." },
        { time: "3:30 PM", label: "Tea & family video call" },
        { time: "4:30 PM", label: "Walk or sit in the sun" },
        { time: "6:00 PM", label: "Dinner prep & feeding assistance" },
        { time: "7:00 PM", label: "Evening medication & calm routine" },
        { time: "8:00 PM", label: "Handover & WhatsApp summary to family" },
      ],
    },
    caregiverProfile: {
      trainingHours: "60+ hours of in-class and on-the-job training",
      focus:
        "Geriatric care, fall prevention, basic vitals tracking, dementia awareness, calm communication.",
      supervision: "Bi-weekly home visit by a trained care supervisor.",
      certifications: ["First aid", "Geriatric care", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "Elder care matching is our most considered placement. Beyond skills, we look for temperament — the kind of person your parent will feel at ease with. We match by language (Kannada, Tamil, Telugu, Hindi, Malayalam, Bengali, English), gender preference, and the rhythm of your parent’s day. For long-term placements we factor in continuity, choosing caregivers who can commit to six months or more.",
    familyStory: {
      quote:
        "We were nervous about a stranger spending the day with Amma. Three weeks in, she was asking for Lakshmi by name when Lakshmi didn’t show up on her off day. That’s when we knew.",
      name: "Anjali R.",
      meta: "Daughter · Indiranagar",
    },
    pricing: [
      { label: "Hourly visit", price: "₹220 / hour", note: "Min 4 hours" },
      { label: "12-hour day shift", price: "₹950 / day", note: "Most flexible" },
      { label: "12-hour night shift", price: "₹950 / night" },
      { label: "24-hour live-in", price: "₹28,000 / month", note: "Weekly off included" },
    ],
    faqs: [
      {
        q: "Can the caregiver speak Kannada or my parent’s language?",
        a: "Yes. We match by language preference — Kannada, Hindi, Tamil, Telugu, Malayalam, Bengali and English are all available across our Bangalore caregiver network.",
      },
      {
        q: "What if my parent doesn’t take to the caregiver?",
        a: "We replace within 24 hours, no questions asked. We’d rather find the right fit than leave you anxious. The replacement is fully covered.",
      },
      {
        q: "Do you work with elderly parents who live alone?",
        a: "Yes — a large share of our placements are for senior parents in Bangalore whose children live in another city or abroad. We coordinate via WhatsApp groups so the family stays in the loop in real time.",
      },
      {
        q: "Can the same caregiver come every day long-term?",
        a: "Yes, we aim for continuity. Most elder care placements stay six to nine months on average, with the same caregiver and a familiar backup for off days.",
      },
      {
        q: "What happens if the caregiver is unwell or on leave?",
        a: "Our team places a backup caregiver — usually one your parent has already met during overlap days. We never leave a slot unfilled.",
      },
      {
        q: "Can I add hours mid-shift if I’m running late?",
        a: "Yes. Extra hours are billed at the hourly rate and confirmed over WhatsApp before the caregiver stays back.",
      },
      {
        q: "Is this different from home nursing?",
        a: "Yes. Elder care attendants handle daily living, medication reminders and basic vitals. Home nursing involves clinical tasks like IV, injections, catheter changes — we offer that as a separate, supervised tier.",
      },
    ],
    seoTitle: "Elder Care at Home in Bangalore | Verified Attendants from ₹220/hour",
    seoDescription:
      "Trained elder care attendants in Bangalore for your aging parents. Hourly, day, night, live-in. Verified, background-checked, language-matched. Book in 60 seconds.",
    icon: "elder",
  },

  /* ─────────────────────────── Patient care ─────────────────────────── */
  {
    slug: "patient-care",
    name: "Patient Care Attendants",
    short: "Skilled hands for recovery at home",
    emotional:
      "Hospital-grade care, in the calm of home. So healing happens where the heart is.",
    hero:
      "Trained patient care attendants for chronic conditions, recovery and daily medical support at home in Bangalore.",
    intro: [
      "Discharge is a strange feeling. The hospital hands you a sheaf of papers, a discharge summary, and a number to call if something goes wrong — and then your parent or partner is suddenly home, where there are no monitors, no buzzer, and no nurse two doors away.",
      "Patient care attendants bridge that gap. They are not nurses, but they are trained in the practical, hourly things that recovery needs — vitals tracking, feeding, hygiene, repositioning, watching for the small changes that matter. They work under the supervision of qualified nurses and our clinical care managers.",
      "In Bangalore, we frequently work alongside Manipal, Apollo, Sakra, Fortis and Narayana hospital teams to take patients home with continuity of care intact.",
    ],
    description:
      "Patient care attendants assist with feeding, hygiene, vitals tracking, mobility, and basic clinical tasks under nursing oversight. Ideal for chronic illness, recovery, or hospital-to-home transitions.",
    duration: "Day, night or 24×7",
    whoFor: [
      "Patients discharged from hospital",
      "Chronic illness management",
      "Long-term home recovery",
      "Caregivers needing relief during a long illness",
    ],
    conditions: [
      { title: "Stroke recovery", detail: "Mobility, repositioning, swallowing care, family coaching." },
      { title: "Cardiac recovery", detail: "Post-bypass, post-stenting, heart failure monitoring at home." },
      { title: "Cancer & chemotherapy support", detail: "Hydration, nausea, nutrition, gentle hygiene." },
      { title: "Diabetes complications", detail: "Foot care, wound area observation, sugar monitoring." },
      { title: "Renal & dialysis patients", detail: "Fluid balance awareness, dietary support, fatigue management." },
      { title: "Post-surgery convalescence", detail: "Wound area observation, mobility coaching, rehab handoff." },
    ],
    whatsIncluded: [
      "Vitals tracking: BP, temperature, sugar, SpO₂",
      "Feeding (oral, NG/RT under nurse supervision)",
      "Wound area observation and basic dressing assistance",
      "Catheter and incontinence care",
      "Repositioning and bedsore prevention",
      "Mobility support and physio-handoff",
      "Medication adherence with logbook",
      "Hydration and nutrition tracking",
      "Hygiene: bathing, oral care, grooming",
      "Daily reports shared with family and treating doctor",
      "On-call escalation to our care manager 24×7",
    ],
    notIncluded: [
      "IV infusions and injections (book our home nursing tier)",
      "Tracheostomy and ventilator management",
      "Independent change of medication or dose",
      "Driving the patient (we coordinate ambulance partners)",
      "Procedures requiring a registered medical practitioner",
    ],
    careTimeline: {
      title: "What a 12-hour shift looks like",
      items: [
        { time: "8:00 AM", label: "Handover from previous shift / family" },
        { time: "8:15 AM", label: "Vitals check & morning hygiene" },
        { time: "9:30 AM", label: "Breakfast & morning medications", detail: "Logged with timing & dose." },
        { time: "10:30 AM", label: "Mobility / physiotherapy support" },
        { time: "12:00 PM", label: "Vitals re-check & light activity" },
        { time: "1:00 PM", label: "Lunch & medication" },
        { time: "2:00 PM", label: "Rest, with repositioning every 2 hours" },
        { time: "4:00 PM", label: "Vitals, snack, hydration" },
        { time: "5:30 PM", label: "Mobility / family interaction" },
        { time: "7:00 PM", label: "Dinner, evening medication" },
        { time: "8:00 PM", label: "Handover & daily report to family" },
      ],
    },
    caregiverProfile: {
      trainingHours: "80+ hours including supervised hospital exposure",
      focus:
        "Vitals, feeding, hygiene, basic clinical observation, escalation protocols, infection control.",
      supervision:
        "Weekly nurse review of the care log; care manager available 24×7 for escalations.",
      certifications: [
        "Patient care attendant certification",
        "BLS basics",
        "Infection control",
        "Police verified",
      ],
    },
    matchingNotes:
      "For patient care, we read the discharge summary before assigning. We match by procedure type (cardiac, ortho, oncology), language, gender preference and the patient’s mobility level. For complex post-discharge cases we recommend pairing the attendant with a part-time home nurse for the first week.",
    familyStory: {
      quote:
        "Appa came home the day after his bypass. The attendant was there before us — already briefed by the surgeon’s team — and walked us through every vitals reading for the first 48 hours. That night was the first I slept in a week.",
      name: "Karthik V.",
      meta: "Son (NRI) · Whitefield",
    },
    pricing: [
      { label: "12-hour day shift", price: "₹1,100 / day", note: "Most common" },
      { label: "12-hour night shift", price: "₹1,100 / night" },
      { label: "24×7 live-in", price: "₹32,000 / month", note: "From" },
    ],
    faqs: [
      {
        q: "Are your patient care attendants medically trained?",
        a: "Yes — 80+ hours of training including supervised hospital exposure, focused on vitals, feeding, hygiene, escalation protocols and infection control. For procedures that need a registered nurse (IV, injections), we deploy our home nursing tier.",
      },
      {
        q: "Can you start the day of hospital discharge?",
        a: "Yes. With 12–24 hours notice we place the caregiver at your home or at the hospital ward to ride along during discharge. We also coordinate ambulance partners if you need transport.",
      },
      {
        q: "Will the caregiver coordinate with our doctor?",
        a: "Daily care logs (vitals, intake, output, sleep, mood) are shared with the family. With your permission, we’ll share these directly with the treating doctor’s clinic before each follow-up.",
      },
      {
        q: "Can we reduce hours as the patient recovers?",
        a: "Of course. Many families start with 24×7, then taper to 12-hour, then to hourly visits as recovery progresses. We adjust without re-onboarding fees.",
      },
      {
        q: "What if there’s a sudden complication?",
        a: "Our attendants are trained on a clear escalation tree — family contact first, then our 24×7 care manager, then ambulance partner. Each home gets a printed action card on day one.",
      },
      {
        q: "Do you deal with insurance / TPA paperwork?",
        a: "We don’t bill insurance directly, but we provide itemised invoices with clinical care manager sign-off, which several home-care insurance plans accept for reimbursement.",
      },
    ],
    seoTitle: "Patient Care Attendants in Bangalore | 24×7 Home Care Support",
    seoDescription:
      "Skilled patient care attendants for recovery, chronic illness and post-hospitalization at home in Bangalore. Verified, supervised, with daily care logs.",
    icon: "patient",
  },

  /* ─────────────────────────── Live-in caregiver ─────────────────────────── */
  {
    slug: "live-in-caregiver",
    name: "Live-in Caregiver",
    short: "Round-the-clock care, gently",
    emotional:
      "A trained, kind presence at home — through the night, through the worry, through every small moment.",
    hero:
      "24×7 live-in caregivers in Bangalore for elderly, bedridden and post-surgery patients.",
    intro: [
      "There’s a particular kind of tiredness that families carry when care goes round the clock — the half-sleep, the listening for sounds in the night, the constant low hum of being on call. Live-in caregiving is built so your family can put that down for a while.",
      "A trained caregiver moves into your home and stays through the days and nights. They handle the personal care, the night-time wakings, the medicines, the vigilance — while your family does the things only a family can do: love, decide, and rest.",
      "We’ve done this work in Bangalore for stroke patients, advanced dementia, late-stage cancer, post-orthopedic surgery, and for elderly parents who simply need someone to be there at 3 AM if they need water or the bathroom.",
    ],
    description:
      "A dedicated caregiver lives with your loved one, providing continuous support across day and night. Includes weekly off coverage and supervisor visits every two weeks.",
    duration: "Monthly placements with weekly off coverage included",
    whoFor: [
      "Bedridden or fully dependent patients",
      "Elderly living alone needing 24×7 presence",
      "Families needing peace of mind",
      "Late-stage chronic illness at home",
    ],
    conditions: [
      { title: "Stroke recovery & paralysis", detail: "Repositioning, hygiene, range-of-motion, swallowing care." },
      { title: "Advanced dementia & Alzheimer’s", detail: "Continuity-led care, sundowning support, wandering prevention." },
      { title: "Bedridden patients", detail: "Bedsore prevention, RT-feed support, dignity-first hygiene." },
      { title: "Late-stage cancer & palliative", detail: "Comfort care, hydration, gentle pain awareness." },
      { title: "Post-orthopedic surgery", detail: "Mobility coaching, pain monitoring, rehab support." },
      { title: "Elderly with high fall risk", detail: "Constant supervision through the night and bathroom transfers." },
    ],
    whatsIncluded: [
      "Continuous day and night supervision",
      "All personal care: bathing, grooming, hygiene",
      "Meal preparation and feeding",
      "Medication adherence with timing log",
      "Mobility support and repositioning every 2–3 hours",
      "Vitals tracking (BP, sugar, temperature, SpO₂)",
      "Light housekeeping in the patient’s room",
      "Companionship and emotional support",
      "Weekly off coverage by a trained relief caregiver",
      "Bi-weekly home visit by a care supervisor",
      "Replacement caregiver guarantee",
      "24×7 care manager on call for the family",
    ],
    notIncluded: [
      "Cooking and cleaning for the wider family",
      "Driving the patient (we coordinate transport)",
      "Tasks specific to a registered nurse (IV, injections)",
      "Pet care or babysitting other family members",
    ],
    careTimeline: {
      title: "A 24-hour live-in cycle",
      items: [
        { time: "6:30 AM", label: "Wake-up routine, vitals, hydration" },
        { time: "8:00 AM", label: "Bath, grooming, breakfast & medication" },
        { time: "10:00 AM", label: "Mobility / physio / quiet activity" },
        { time: "12:30 PM", label: "Lunch & post-meal repositioning" },
        { time: "1:30 PM", label: "Caregiver short rest while patient rests" },
        { time: "4:00 PM", label: "Tea, family time, walk or sit in sun" },
        { time: "7:00 PM", label: "Dinner & evening medication" },
        { time: "9:00 PM", label: "Sleep prep, hygiene, hand-cream and rest" },
        { time: "11:00 PM – 6:30 AM", label: "Night watch", detail: "Repositioning every 2–3 hours; bathroom support; calm reassurance during anxious wakings. Caregivers are trained on short-cycle rest patterns." },
      ],
    },
    caregiverProfile: {
      trainingHours: "100+ hours, with focus on round-the-clock care patterns",
      focus:
        "Continuity care, night-time vigilance, fall prevention, hygiene, family coordination.",
      supervision: "Bi-weekly in-person supervisor visit; daily WhatsApp logs.",
      certifications: ["Geriatric & live-in care", "First aid", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "Live-in placements are a serious match — the caregiver will share your home for months. Beyond skills and language, we screen for personality fit, sleep patterns and the ability to live calmly in your household. Most live-in placements stay 3–9 months on average, with a relief caregiver introduced gradually for the weekly off.",
    familyStory: {
      quote:
        "Mary has lived with my mother for nine months now. She knows her medicines, her moods, the songs she likes when she can’t sleep. We don’t worry about Amma at night anymore — we just trust the system that’s in place.",
      name: "Pradeep S.",
      meta: "Son · Jayanagar",
    },
    pricing: [
      { label: "Live-in (basic care)", price: "₹28,000 / month", note: "From" },
      { label: "Live-in (advanced/medical)", price: "₹35,000 / month", note: "From" },
      { label: "Live-in (specialised dementia/bedridden)", price: "₹38,000 / month", note: "From" },
    ],
    faqs: [
      {
        q: "Where will the caregiver sleep?",
        a: "We need a separate bed — either in the patient’s room or a nearby room. Caregivers are trained to do short rest cycles so someone is always alert during the night, especially for high-risk patients.",
      },
      {
        q: "Will the same caregiver stay long-term?",
        a: "Yes, continuity is one of our core promises. Most live-in placements stay three to nine months. We give 7 days’ notice if a change is required.",
      },
      {
        q: "Who covers the caregiver’s weekly off day?",
        a: "Included in the monthly fee. A relief caregiver — often someone the family has already met — covers the off day. We coordinate the schedule a week in advance.",
      },
      {
        q: "What about meals for the caregiver?",
        a: "Standard practice is for the caregiver to share the home’s regular vegetarian/non-vegetarian meals. We can also arrange caregivers with specific dietary preferences (Jain, vegan, halal) if required.",
      },
      {
        q: "How do you handle medical emergencies at night?",
        a: "Caregivers are trained on a household-specific action card: family contact → 24×7 care manager → ambulance partner. The first emergency hour is often the difference, and we’ve drilled for it.",
      },
      {
        q: "Can we have a trial period before committing?",
        a: "Yes. We commonly start with a 2-week trial. If it doesn’t feel right, we replace or refund the unused balance.",
      },
      {
        q: "Is there a contract lock-in?",
        a: "No annual contracts. Live-in is billed monthly, you can step down to a 12-hour shift or end the engagement at any time with one week’s notice.",
      },
    ],
    seoTitle: "Live-in Caregiver in Bangalore | 24×7 Home Care from ₹28,000/month",
    seoDescription:
      "Dedicated live-in caregivers in Bangalore for elderly, bedridden and post-surgery patients. Trained, verified, supervised. Replacement guarantee.",
    icon: "live-in",
  },

  /* ─────────────────────────── Post-surgery ─────────────────────────── */
  {
    slug: "post-surgery-care",
    name: "Post-Surgery Recovery",
    short: "A calm landing after hospital",
    emotional:
      "Going home should feel like relief, not anxiety. We make the first weeks gentle.",
    hero:
      "Post-surgery and post-hospitalization care at home in Bangalore — for orthopedic, cardiac and abdominal recovery.",
    intro: [
      "The first week home after surgery is often harder than the surgery itself. The IV is gone, the nurses are gone, and the slow, stubborn business of healing begins — pain that comes and goes, mobility that has to be earned back inch by inch, medications that must be timed correctly.",
      "Post-surgery care at home is built for this window. A trained attendant follows your surgeon’s discharge plan, watches the wound area, helps the patient stand up safely the first time, and keeps the family briefed on small changes — fever, swelling, low appetite — that could matter.",
      "We work with discharges from Manipal, Apollo, Sakra, Fortis, Narayana and most major Bangalore hospitals — and we can be at the ward to ride along home if you let us know 24 hours in advance.",
    ],
    description:
      "Structured recovery plans built around your surgeon’s discharge notes. Wound area observation, mobility coaching, medication adherence and rehab handoff.",
    duration: "1–6 weeks typically",
    whoFor: [
      "Orthopedic recovery (knee, hip, spine)",
      "Cardiac post-op",
      "Abdominal & gynecological surgery",
      "Cancer-related procedures",
      "Eye / cataract surgery in elderly patients",
    ],
    conditions: [
      { title: "Knee or hip replacement", detail: "Mobility, pain monitoring, walker training, physio coordination." },
      { title: "Spine surgery", detail: "Repositioning protocols, bracing, careful posture." },
      { title: "Cardiac bypass / stenting", detail: "Vitals, walking program, sternum precautions, family coaching." },
      { title: "Abdominal & gynecological surgery", detail: "Wound area observation, hydration, diet progression." },
      { title: "Cancer-related procedures", detail: "Energy management, infection precautions, gentle care." },
      { title: "Cataract / minor surgeries in seniors", detail: "Drops, eye precautions, fall prevention during recovery." },
    ],
    whatsIncluded: [
      "Wound area observation and reporting (no dressing changes by default)",
      "Pain and medication tracking with timing log",
      "Mobility coaching (bed → chair → walker → walk)",
      "Coordination with your physiotherapist",
      "Vitals: BP, temperature, sugar, SpO₂",
      "Diet support, hydration tracking",
      "Bathing assistance with surgical-site precautions",
      "Family update after every shift",
      "Doctor’s appointment companion (transport coordinated)",
      "Escalation pathway for early warning signs",
    ],
    notIncluded: [
      "Suture removal or active dressing changes (handled by visiting nurse)",
      "Driving the patient (we coordinate transport partners)",
      "IV/injectable medications (home nursing tier)",
      "Hospital insurance paperwork management",
    ],
    careTimeline: {
      title: "A typical 4-week recovery at home",
      items: [
        { time: "Day 0–1", label: "Discharge & first night home", detail: "Caregiver rides along home; first vitals; sleep prep." },
        { time: "Day 2–3", label: "Stabilising routine", detail: "Walker steps, medication rhythm, family rhythm." },
        { time: "Week 1", label: "Mobility milestones", detail: "First walk to bathroom, sponge bath protocol, appetite return." },
        { time: "Week 2", label: "Light activity", detail: "Sitting longer, short walks, suture review with surgeon." },
        { time: "Week 3", label: "Independence return", detail: "Patient resumes some self-care; caregiver hours often taper." },
        { time: "Week 4", label: "Step-down", detail: "Many families move to hourly or part-time elder care from here." },
      ],
    },
    caregiverProfile: {
      trainingHours: "80+ hours including hospital exposure",
      focus:
        "Discharge protocols, mobility coaching, pain monitoring, surgical-site precautions, escalation.",
      supervision: "Weekly nurse review of the care log; care manager on call 24×7.",
      certifications: ["Patient care attendant", "BLS basics", "Infection control", "Police verified"],
    },
    matchingNotes:
      "We read your discharge summary before placement and match by surgery type — orthopedic and cardiac demand different precautions, and we won’t cross-assign. We can deploy a caregiver to the hospital ward for ride-along discharge with 24 hours’ notice.",
    familyStory: {
      quote:
        "We brought my mother home from Manipal after her knee replacement on a Friday. By Sunday she was walking to the bathroom with the attendant. By the third week she was on her own. Quietly excellent work.",
      name: "Sunita M.",
      meta: "Daughter-in-law · HSR Layout",
    },
    pricing: [
      { label: "12-hour day shift", price: "₹1,100 / day", note: "Most common in Week 1" },
      { label: "12-hour night shift", price: "₹1,100 / night" },
      { label: "24×7 live-in", price: "₹32,000 / month", note: "First 2 weeks for major surgery" },
    ],
    faqs: [
      {
        q: "Can you start the day of discharge?",
        a: "Yes. With 12–24 hours notice we can place a caregiver at your home or directly at the hospital for ride-along discharge.",
      },
      {
        q: "Do caregivers change dressings?",
        a: "No. Active dressing changes are done by a visiting nurse from our home nursing tier. The attendant observes and reports the wound area between visits.",
      },
      {
        q: "Will the caregiver coordinate with our physiotherapist?",
        a: "Yes — including being present during physio visits, learning the home exercise protocol, and supervising daily practice between sessions.",
      },
      {
        q: "How long do most families need post-surgery care?",
        a: "Knee/hip: 4–6 weeks, with 24×7 in week one and tapering. Cardiac: 4–8 weeks. Abdominal: 2–4 weeks. We re-plan every fortnight.",
      },
      {
        q: "What about night-time pain or nausea?",
        a: "Caregivers are trained to call the family and care manager based on a clear escalation card we leave at home, and to use comfort measures (positioning, hydration, breathing) while help is on the way.",
      },
      {
        q: "Can you provide an attendant only at night?",
        a: "Yes — many families take a 12-hour night shift only, especially after week one, so the family can sleep while still being present during the day.",
      },
    ],
    seoTitle: "Post-Surgery Care at Home in Bangalore | Recovery Attendants",
    seoDescription:
      "Trained post-operative care attendants in Bangalore for orthopedic, cardiac and abdominal recovery at home. Discharge-day start available.",
    icon: "post-surgery",
  },

  /* ─────────────────────── Dementia & Alzheimer’s ─────────────────────── */
  {
    slug: "dementia-care",
    name: "Dementia & Alzheimer’s Care",
    short: "Steady, patient, kind",
    emotional:
      "When memory becomes uncertain, presence becomes everything. Our caregivers are trained to be both.",
    hero:
      "Specialised dementia and Alzheimer’s caregivers at home in Bangalore.",
    intro: [
      "Dementia care is unlike any other kind of caregiving. The same question, asked again. The familiar face, suddenly unfamiliar. The agitation that arrives in the late afternoon and lasts past dinner. None of it can be fixed — but a great deal of it can be softened, with patience, training and routine.",
      "Our dementia caregivers are trained in a specific set of skills: validation rather than correction, redirection rather than argument, calm rather than reaction. They build a daily rhythm that the patient’s memory can hold even when other things slip away.",
      "Most of all, they don’t leave. Continuity is the single most important factor in dementia care, so we assign the same caregiver and the same backup, both introduced gradually so a new face doesn’t become a daily upheaval.",
    ],
    description:
      "Caregivers trained in dementia communication, redirection techniques and safety. Calm routines, sundowning support, family coaching included.",
    duration: "Day, night or 24×7 live-in",
    whoFor: [
      "Early to advanced dementia",
      "Alzheimer’s disease",
      "Lewy body dementia",
      "Parkinson’s with cognitive decline",
      "Vascular dementia post-stroke",
    ],
    conditions: [
      { title: "Early-stage memory loss", detail: "Routine reinforcement, gentle reminders, dignity-preserving prompts." },
      { title: "Mid-stage dementia", detail: "Wandering prevention, sundowning support, hygiene assistance." },
      { title: "Advanced dementia", detail: "Full personal care, feeding, swallowing care, calm presence." },
      { title: "Behavioural episodes", detail: "Redirection, validation, safe-environment management." },
      { title: "Vascular dementia post-stroke", detail: "Combined mobility & cognitive care." },
      { title: "Family caregiver burnout", detail: "Respite shifts so the primary family carer can rest." },
    ],
    whatsIncluded: [
      "Dementia-specific communication & validation",
      "Daily routine reinforcement and memory aids",
      "Sundowning and agitation support",
      "Wandering prevention strategies",
      "Hygiene assistance with dignity-first approach",
      "Feeding and swallowing care",
      "Medication adherence with timing aids",
      "Cognitive stimulation: music, photos, simple games",
      "Safe-environment review of the home",
      "Family coaching: how to handle common moments",
      "Continuity-first scheduling (same caregiver + backup)",
      "Care manager check-in every two weeks",
    ],
    notIncluded: [
      "Pharmacological behaviour management (your treating doctor)",
      "Restraints — we never use physical or chemical restraints",
      "Hospital admissions or psychiatric placements",
      "Diagnostic workups (we work with your neurologist/psychiatrist)",
    ],
    careTimeline: {
      title: "A dementia-aware day",
      items: [
        { time: "7:30 AM", label: "Calm wake-up", detail: "Familiar voice, soft light, no surprises." },
        { time: "8:00 AM", label: "Hygiene with dignity-first cues" },
        { time: "9:00 AM", label: "Breakfast with simple choices", detail: "Two options, not ten." },
        { time: "10:00 AM", label: "Engagement activity", detail: "Looking at old photos, simple folding, music." },
        { time: "12:30 PM", label: "Lunch & rest" },
        { time: "3:00 PM", label: "Afternoon walk or sunlit sit", detail: "Sunlight helps reduce sundowning." },
        { time: "4:30 PM", label: "Sundowning watch", detail: "Calm voice, dim lights, redirection if agitation rises." },
        { time: "6:30 PM", label: "Dinner & evening medication" },
        { time: "8:00 PM", label: "Night routine", detail: "Predictable steps, low stimulation, soft music." },
      ],
    },
    caregiverProfile: {
      trainingHours: "120+ hours including supervised dementia rotations",
      focus:
        "Validation therapy, redirection, sundowning, wandering, environmental safety, family coaching.",
      supervision: "Bi-weekly in-person supervisor visit; weekly family check-in call.",
      certifications: ["Dementia care specialist", "Geriatric care", "First aid", "Police verified"],
    },
    matchingNotes:
      "Dementia matching is one of our slowest, most careful placements. Beyond skills, we look for caregivers with high emotional steadiness — people who can be told the same thing twenty times and respond with the same warmth. We assign one primary caregiver and one consistent backup, introduced gradually so neither face is a stranger.",
    familyStory: {
      quote:
        "There were days when my mother would get angry and not know who I was. Joyce would say ‘that’s alright, I’ll come back in five minutes,’ and she would. Always with the same calm. We owe her our peace.",
      name: "Anita G.",
      meta: "Daughter · Koramangala",
    },
    pricing: [
      { label: "12-hour day shift", price: "₹1,250 / day", note: "From" },
      { label: "12-hour night shift", price: "₹1,250 / night" },
      { label: "24×7 live-in", price: "₹34,000 / month", note: "From" },
      { label: "Specialised live-in", price: "₹38,000 / month", note: "Advanced dementia" },
    ],
    faqs: [
      {
        q: "Will the same caregiver stay so my parent doesn’t get confused?",
        a: "Yes — continuity is critical for dementia. We assign the same primary caregiver and a single consistent backup, both introduced gradually.",
      },
      {
        q: "What if my parent gets aggressive?",
        a: "Our caregivers are trained in de-escalation: validation, redirection, calm voice, removing triggers. We never use physical restraint. If episodes become frequent, we coordinate a check-in with your treating doctor.",
      },
      {
        q: "Can you handle wandering?",
        a: "Yes. We do a home safety review on day one — door alerts, simple latches, removing trip hazards. For high-wandering patients, live-in is recommended.",
      },
      {
        q: "How do you handle sundowning?",
        a: "Sundowning is built into the daily plan: morning sunlight, afternoon walks, dim lighting and a low-stimulation evening routine. Caregivers learn each patient’s personal triggers and patterns within the first 10 days.",
      },
      {
        q: "Do you coordinate with our neurologist?",
        a: "We’ll share fortnightly care logs (sleep, agitation episodes, eating, medication adherence) with your neurologist before each follow-up, with your permission.",
      },
      {
        q: "Can you also coach the family?",
        a: "Yes. Many families benefit more from a 30-minute session per week with our care manager than from anything else — what to say, what not to say, what episodes mean.",
      },
      {
        q: "Is this care also for Parkinson’s with cognitive decline?",
        a: "Yes — our dementia training covers Parkinson’s-related dementia and Lewy body dementia. We adapt to the mobility component as well.",
      },
    ],
    seoTitle: "Dementia & Alzheimer’s Caregiver in Bangalore | Specialised Home Care",
    seoDescription:
      "Specialised dementia caregivers in Bangalore — trained in communication, sundowning support and safety. Continuity-first placements.",
    icon: "dementia",
  },

  /* ─────────────────────────── Bedridden ─────────────────────────── */
  {
    slug: "bedridden-care",
    name: "Bedridden Patient Care",
    short: "Gentle, dignified, vigilant",
    emotional:
      "Skin, posture, dignity, comfort. The small things — done patiently, every two hours.",
    hero:
      "Bedridden patient care attendants for fully dependent patients at home in Bangalore.",
    intro: [
      "Bedridden care is unglamorous, painstaking work. It is the two-hourly turn that saves the skin. It is the spoonful of water that keeps hydration steady. It is the quiet adjustment of a pillow at 3 AM so that breathing stays easy.",
      "We treat it as the highly skilled work it is. Bedsore prevention alone is the difference between a patient who is comfortable for years and one who is fighting infections every month — and it comes down to repositioning every 2–3 hours, around the clock, without fail.",
      "Our bedridden caregivers are trained, equipped and supervised for exactly this. We also coach the family, so everyone in the home knows what good care looks like.",
    ],
    description:
      "Specialised care for bedridden patients — repositioning every 2 hours, bedsore prevention, hygiene, feeding tube support and family-grade dignity.",
    duration: "Almost always 24×7 live-in",
    whoFor: [
      "Stroke recovery (paralysis)",
      "Spinal cord injury",
      "Late-stage chronic illness",
      "Coma & vegetative state",
      "Advanced dementia (immobile stage)",
    ],
    conditions: [
      { title: "Stroke with paralysis", detail: "Repositioning, ROM exercises, swallowing care, hygiene." },
      { title: "Spinal cord injury", detail: "Pressure-area care, catheter care, bladder/bowel routines." },
      { title: "Late-stage cancer & palliative", detail: "Comfort care, hydration, gentle pain awareness." },
      { title: "Coma & vegetative state", detail: "Full dependent care with rigorous hygiene and turning protocols." },
      { title: "Severe Parkinson’s", detail: "Mobility-impaired care, choking precautions, repositioning." },
      { title: "Late-stage dementia (immobile)", detail: "Continuity, dignity, calm presence." },
    ],
    whatsIncluded: [
      "Repositioning every 2–3 hours, day and night",
      "Bedsore prevention (positioning, skin checks, air-mattress care)",
      "Sponge bath, oral care, grooming",
      "Catheter care and incontinence management",
      "RT-feed / NG-feed support under nurse supervision",
      "Range-of-motion exercises",
      "Vitals tracking and reporting",
      "Hydration, intake/output charting",
      "Coordination with home physio",
      "Daily care log shared with family and treating doctor",
      "On-call escalation to care manager 24×7",
    ],
    notIncluded: [
      "Active wound dressing (visiting nurse from home nursing tier)",
      "Tracheostomy / ventilator changes",
      "IV medications and injections",
      "Lifting equipment installation (we can recommend partners)",
    ],
    careTimeline: {
      title: "A 24-hour bedridden care cycle",
      items: [
        { time: "Every 2–3 hrs", label: "Repositioning round-the-clock", detail: "Side, back, side — pressure-area checks each turn." },
        { time: "7:00 AM", label: "Sponge bath, oral care, grooming" },
        { time: "8:30 AM", label: "Feed (oral or RT) & morning medication" },
        { time: "10:00 AM", label: "Range-of-motion exercises" },
        { time: "12:00 PM", label: "Vitals check & repositioning" },
        { time: "1:00 PM", label: "Feed & medication" },
        { time: "3:00 PM", label: "Family time / reading aloud / music" },
        { time: "5:00 PM", label: "Evening hygiene & vitals" },
        { time: "7:00 PM", label: "Feed & medication" },
        { time: "9:00 PM", label: "Sleep prep, night-position cycle begins" },
      ],
    },
    caregiverProfile: {
      trainingHours: "120+ hours including supervised bedridden-care rotations",
      focus:
        "Pressure-area care, repositioning, RT-feed support, catheter care, infection control, family coaching.",
      supervision: "Weekly nurse review of the care log; bi-weekly supervisor visit.",
      certifications: ["Patient care attendant", "Bedridden specialist module", "Infection control", "Police verified"],
    },
    matchingNotes:
      "Bedridden placements demand strength, patience and steadiness — we match by physical capacity (lifting needs), language, gender preference, and ability to commit long-term. We strongly recommend an air mattress, and we’ll review your home equipment on day one.",
    familyStory: {
      quote:
        "Six months bedridden, not a single bedsore. That sentence alone tells you everything you need to know about how this team works.",
      name: "Ravi K.",
      meta: "Son · Hebbal",
    },
    pricing: [
      { label: "24×7 live-in (basic)", price: "₹32,000 / month", note: "From" },
      { label: "24×7 live-in (advanced)", price: "₹38,000 / month", note: "RT-feed / catheter / palliative" },
    ],
    faqs: [
      {
        q: "Do we need to buy an air bed or special equipment?",
        a: "An air mattress is strongly recommended for bedsore prevention. Other equipment depends on the case — adjustable bed, hoist, suction. We assess on day one and recommend partners.",
      },
      {
        q: "How do you prevent bedsores?",
        a: "Repositioning every 2–3 hours without fail; air-mattress; pressure-area checks at every turn; skin moisture management; nutrition and hydration support. The protocol is the protocol — we don’t skip it.",
      },
      {
        q: "Can you handle RT or NG feeding?",
        a: "Yes, under nurse supervision. The home nurse sets up the protocol and the attendant administers feeds per the schedule with logbook tracking.",
      },
      {
        q: "What about catheter care?",
        a: "Yes — daily hygiene, output measurement, and escalation if there are signs of infection. Catheter changes themselves are done by the visiting nurse.",
      },
      {
        q: "How often does a supervisor visit?",
        a: "Every two weeks for routine cases; weekly for advanced/palliative cases. The care manager is on call 24×7.",
      },
      {
        q: "How do families take a break?",
        a: "Live-in caregivers free the family entirely. We also offer respite shifts — a few days at a time — for families currently doing the work themselves.",
      },
    ],
    seoTitle: "Bedridden Patient Care at Home in Bangalore | 24×7 Attendants",
    seoDescription:
      "Trained attendants for bedridden patients in Bangalore. Repositioning, bedsore prevention, RT-feed support. Free home assessment.",
    icon: "bedridden",
  },

  /* ─────────────────────────── Night caregiver ─────────────────────────── */
  {
    slug: "night-caregiver",
    name: "Night Shift Caregiver",
    short: "Sleep again. We’re awake.",
    emotional:
      "Just for the nights — so the family can rest. Twelve quiet hours of careful watch.",
    hero:
      "Night shift caregivers in Bangalore — 12-hour overnight care so families can sleep.",
    intro: [
      "If you’ve done the night shift yourself for any length of time, you know what it costs. Listening for footsteps. Worrying about a fall. Helping someone to the bathroom at 2 AM, again at 4 AM. Waking before the alarm because you can already hear something is off.",
      "Night caregiving is built specifically to give that back to the family. A trained attendant works the 8 PM to 8 AM window — staying alert, doing short rest cycles, handling the bathroom trips and the medications and the occasional anxious wake-up — while the rest of the household sleeps.",
      "We see this often as the first step before families commit to live-in. It’s the gentlest way to test whether overnight help is what was really needed.",
    ],
    description:
      "Overnight caregivers for elderly or recovering patients. Watchful, attentive and ready for night-time needs — bathroom assistance, medication, repositioning, reassurance.",
    duration: "12 hours, typically 8 PM – 8 AM",
    whoFor: [
      "Families needing overnight relief",
      "Patients with disturbed sleep or insomnia",
      "High fall-risk seniors",
      "Post-surgery week one (night-only model)",
      "Dementia patients with sundowning that extends into the night",
    ],
    conditions: [
      { title: "Frequent night-time bathroom needs", detail: "Diabetes, prostate, diuretic medications." },
      { title: "High fall-risk seniors", detail: "Steadying hand for bathroom transfers, low-light vigilance." },
      { title: "Dementia with sleep disturbance", detail: "Calm reassurance, redirection, safe environment." },
      { title: "Post-surgery night anxiety", detail: "Pain monitoring, repositioning, medication timing." },
      { title: "Sleep apnea or breathing concerns", detail: "Watchful presence; escalation if patterns worsen." },
    ],
    whatsIncluded: [
      "12-hour overnight presence (typically 8 PM – 8 AM)",
      "Night-time bathroom assistance",
      "Scheduled medication reminders",
      "Repositioning every 2–3 hours for bedridden patients",
      "Calm reassurance during anxiety or confusion",
      "Vitals check at start and end of shift",
      "Light snack / hydration during the night if needed",
      "Morning handover note to family or day caregiver",
    ],
    notIncluded: [
      "Daytime care (book a separate day shift)",
      "Active night-time clinical procedures (home nursing tier)",
      "Tasks requiring the patient to leave the home",
    ],
    careTimeline: {
      title: "A 12-hour night shift",
      items: [
        { time: "8:00 PM", label: "Arrival, handover, family briefing" },
        { time: "8:30 PM", label: "Help with bathroom, dental, hand-washing routine" },
        { time: "9:00 PM", label: "Evening medication, settle into bed" },
        { time: "10:00 PM", label: "Light reading or music if patient is anxious" },
        { time: "11:00 PM – 5:00 AM", label: "Active watch", detail: "Quiet alertness, repositioning every 2–3 hours, bathroom support, calm reassurance during wakings." },
        { time: "6:00 AM", label: "Vitals, bathroom, hand-washing" },
        { time: "7:00 AM", label: "Light breakfast or tea, morning meds" },
        { time: "8:00 AM", label: "Handover to family or day caregiver" },
      ],
    },
    caregiverProfile: {
      trainingHours: "60+ hours, with night-shift specific drills",
      focus:
        "Night vigilance, fall prevention, bathroom transfers, calm reassurance, escalation.",
      supervision: "Bi-weekly check-in; care manager on call 24×7.",
      certifications: ["Geriatric care", "Night-shift module", "First aid", "Police verified"],
    },
    matchingNotes:
      "Night caregivers are matched by alertness habits and gender preference. We also align with the household’s sleep environment — light sleepers prefer caregivers who can keep the home quiet and dim through the night.",
    familyStory: {
      quote:
        "I hadn’t slept through a night in seven months. The first morning after the night caregiver started, I cried at breakfast — out of relief.",
      name: "Meera J.",
      meta: "Daughter · Whitefield",
    },
    pricing: [
      { label: "12-hour night shift", price: "₹950 / night", note: "From" },
      { label: "Monthly night package (30 nights)", price: "₹22,000 / month", note: "Save vs. nightly" },
    ],
    faqs: [
      {
        q: "Can the night caregiver sleep?",
        a: "No — night caregivers are trained to stay alert with short rest cycles. They are paid for active overnight presence, not for sleep.",
      },
      {
        q: "Can I just book one night to try it?",
        a: "Yes. Single-night bookings are common, especially for the family’s first night home after a hospital discharge.",
      },
      {
        q: "Is night-only enough for a bedridden patient?",
        a: "Usually not — bedridden patients need 24×7 repositioning. Night-only works best when the family does the day and just needs to sleep at night.",
      },
      {
        q: "Will the same caregiver come every night?",
        a: "We aim for the same caregiver across consecutive nights, with one consistent backup for off days.",
      },
      {
        q: "What if there’s an emergency at night?",
        a: "Caregivers follow a pre-agreed escalation card: family contact → 24×7 care manager → ambulance partner. We also drill the route to the nearest hospital on day one.",
      },
      {
        q: "Can night shifts be paired with a daytime visiting nurse?",
        a: "Yes. We frequently pair night caregivers with a daytime hourly elder care visit and a part-time visiting nurse for medications.",
      },
    ],
    seoTitle: "Night Caregiver in Bangalore | 12-Hour Overnight Home Care",
    seoDescription:
      "Trained night caregivers for elderly and recovering patients in Bangalore. 12-hour overnight shifts so your family can sleep.",
    icon: "night",
  },

  /* ─────────────────────────── Female caregivers ─────────────────────────── */
  {
    slug: "female-caregiver",
    name: "Female Caregivers & Attendants",
    short: "When comfort comes first",
    emotional:
      "For mothers, daughters, grandmothers — and for any patient who simply feels safer with a woman in the room.",
    hero:
      "Female caregivers and patient attendants in Bangalore — verified, trained, language-matched.",
    intro: [
      "There are many reasons a household chooses a female caregiver. An elderly mother who is more comfortable being bathed by a woman. A new mother who needs help in the post-partum weeks. A patient recovering from gynecological surgery. A grandfather who lives in a household where it’s simpler — for cultural or comfort reasons — to have a woman caring for him.",
      "We don’t treat female-caregiver bookings as a niche. They’re among our most common placements, with the same training depth, verification standards and supervisor support as every other caregiver.",
      "The team also includes female care managers and supervisors, so the family has a woman to speak with through the engagement if that helps.",
    ],
    description:
      "All-female care option for elderly mothers, post-partum support, female patients and any household that prefers a woman caregiver. Same training and verification standards as every other caregiver.",
    duration: "From 4 hours to 24×7 live-in",
    whoFor: [
      "Elderly mothers and grandmothers",
      "Female patients post-surgery",
      "Post-partum support for new mothers",
      "Households preferring female help",
      "Single-woman households",
    ],
    conditions: [
      { title: "Elder care for senior mothers", detail: "Daily routines, hygiene, companionship — same standard as any elder care." },
      { title: "Post-gynecological surgery", detail: "Hygiene with full privacy, mobility, family updates." },
      { title: "Post-partum support", detail: "New mother care, baby-sleep awareness, gentle household help." },
      { title: "Dementia care for women", detail: "Female dementia caregivers trained in the same specialised protocols." },
      { title: "Female bedridden patients", detail: "Dignity-first hygiene, repositioning, pressure care." },
    ],
    whatsIncluded: [
      "All standard elder & patient care services",
      "Bathing, grooming, hygiene with full privacy",
      "Female-specific personal care needs",
      "Meal prep and feeding support",
      "Medication and vitals tracking",
      "Companionship and emotional support",
      "Female supervisor for monthly check-ins",
      "Language matching and gender continuity",
    ],
    notIncluded: [
      "Heavy housekeeping for the wider family",
      "Driving (we coordinate transport partners)",
      "Clinical nursing tasks (home nursing tier)",
    ],
    careTimeline: {
      title: "A typical female caregiver day",
      items: [
        { time: "8:00 AM", label: "Arrival, gentle wake-up help" },
        { time: "8:30 AM", label: "Bath, grooming, dressing" },
        { time: "9:30 AM", label: "Breakfast & morning medication" },
        { time: "10:30 AM", label: "Walk, prayer time, reading aloud" },
        { time: "12:30 PM", label: "Lunch & rest" },
        { time: "3:00 PM", label: "Tea, family video call" },
        { time: "4:30 PM", label: "Walk or sit in the sun" },
        { time: "6:30 PM", label: "Dinner & evening medication" },
        { time: "8:00 PM", label: "Handover & WhatsApp summary" },
      ],
    },
    caregiverProfile: {
      trainingHours: "60+ hours of in-class and on-job training",
      focus:
        "Geriatric & patient care, dignity-first hygiene, fall prevention, dementia awareness.",
      supervision: "Female supervisor; bi-weekly home visit.",
      certifications: ["First aid", "Geriatric care", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "Female caregiver matching often centres on language and comfort — we screen for warmth, patience and the ability to settle quickly into a household with strong preferences. For post-partum and gynecological recovery, we match caregivers with specific experience in those areas.",
    familyStory: {
      quote:
        "We needed someone for my mother-in-law that we’d feel comfortable with on a daily basis. Pushpa was so warm by the second day that she felt like family. Three months later, she still does.",
      name: "Divya M.",
      meta: "Daughter-in-law · Jayanagar",
    },
    pricing: [
      { label: "Hourly visit", price: "₹220 / hour", note: "Min 4 hours" },
      { label: "12-hour day shift", price: "₹950 / day" },
      { label: "12-hour night shift", price: "₹950 / night" },
      { label: "Live-in", price: "₹28,000 / month", note: "From" },
    ],
    faqs: [
      {
        q: "Can I request a male attendant if needed?",
        a: "Yes — male caregivers are equally available, especially for male patients needing physical support during recovery.",
      },
      {
        q: "Are female caregivers trained for medical care?",
        a: "Yes — our female caregivers go through the same 60+ hour training as every other caregiver. For higher clinical needs, our patient care attendant tier (also available with female caregivers) covers vitals, feeding and basic clinical tasks.",
      },
      {
        q: "Do you have female caregivers for post-partum support?",
        a: "Yes. We have caregivers trained specifically in post-partum support — new mother care, breastfeeding-friendly routines, and household help in the early weeks.",
      },
      {
        q: "Are female caregivers available for night shifts?",
        a: "Yes. Female night caregivers are common, especially for elderly mothers and post-surgical recovery in single-woman households.",
      },
      {
        q: "Will the supervisor also be female?",
        a: "Yes — we assign a female supervisor by default for female-caregiver placements, especially long-term ones.",
      },
      {
        q: "Can the caregiver also help with light cooking?",
        a: "Light meal prep for the patient is included. Cooking elaborate meals for the wider family is not part of the scope, but we can recommend partner cooks if needed.",
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
