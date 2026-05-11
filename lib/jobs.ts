/**
 * Job role definitions for Care Givers careers section.
 *
 * Each role is written with enough depth to:
 *  - Help a real candidate self-qualify
 *  - Rank in Google Jobs (the JobPosting schema reads from here)
 *  - Carry the brand's calm, candid voice into hiring
 */

export type JobCategory =
  | "Field Caregiver"
  | "Specialist"
  | "Operations"
  | "Corporate";

export type JobRole = {
  slug: string;
  title: string;
  shortTitle: string;
  category: JobCategory;
  shortDek: string;
  tagline: string;
  /** 2–3 paragraphs of context. */
  intro: string[];
  /** Concrete, plural responsibilities. */
  responsibilities: string[];
  /** Hour-by-hour or step-by-step. */
  dayInLife: { time: string; activity: string }[];
  /** Distinct must-haves vs nice-to-haves. */
  requirements: { mustHave: string[]; niceToHave: string[] };
  /** What the candidate gets from us. */
  whatWeProvide: string[];
  /** Compensation + benefits. */
  compensation: {
    base: string;
    period: "month" | "shift" | "hour" | "year";
    benefits: string[];
    growth: string;
  };
  /** Career growth path. */
  careerPath: { step: string; timeline: string; detail: string }[];
  /** Team context. */
  team: string;
  location: string;
  shift: string;
  experienceLevel: "Entry" | "Junior" | "Mid" | "Senior";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Live-in";
  openings: number;
  faqs: { q: string; a: string }[];
  applyMode: "whatsapp" | "email";
  seoTitle: string;
  seoDescription: string;
  /** When this listing was posted/updated. */
  postedAt: string;
  validThrough: string;
};

const today = "2026-05-09";
const expiry = "2026-08-09";

export const jobs: JobRole[] = [
  /* ─────────────────────────── 1. Elder Care Attendant ─────────────────────────── */
  {
    slug: "elder-care-attendant",
    title: "Elder Care Attendant",
    shortTitle: "Elder Care Attendant",
    category: "Field Caregiver",
    shortDek:
      "Care for an aging parent in their own home — companionship, daily living, gentle dignity.",
    tagline:
      "If you are patient, warm, and instinctively kind, this is the work we built for you.",
    intro: [
      "Elder care attendants are the heart of what we do. You spend your days in a Bangalore family’s home, looking after a senior parent — helping with bathing, meals, medication reminders, walks in the garden, and quiet conversations through long afternoons.",
      "It is not nursing. It is closer to family work, done by trained, kind people who are paid fairly for it. We train you for 60 hours before your first placement, and we keep you supported with a care manager you can call at any hour, and a supervisor who visits the home every two weeks.",
      "Most of our elder care attendants stay with the same family for 6 to 9 months — long enough that the patient asks for you by name on your day off. If that kind of work calls to you, read on.",
    ],
    responsibilities: [
      "Personal hygiene assistance — bathing, grooming, oral and nail care",
      "Help with dressing and changing, with dignity always first",
      "Meal preparation per the patient's dietary plan and feeding when needed",
      "Medication reminders at the right times, logged in our app",
      "Vitals tracking — blood pressure, sugar, temperature, oxygen saturation",
      "Mobility support and fall-prevention checks throughout the day",
      "Companionship — conversation, walks, reading aloud, light music",
      "Light housekeeping inside the patient's room (not the whole house)",
      "Daily updates to family on WhatsApp at the end of each shift",
      "Escalate any health change, however small, to the care manager",
      "Maintain a clean appearance and wear the Care Givers uniform on duty",
      "Carry your ID badge at all times in the patient's home",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Arrive at the family's home, get briefed from the previous shift or family" },
      { time: "8:30 AM", activity: "Help the patient bathe, groom, and dress for the day" },
      { time: "9:30 AM", activity: "Breakfast and morning medications, logged in the app" },
      { time: "10:30 AM", activity: "A short walk in the garden or a few gentle exercises" },
      { time: "11:30 AM", activity: "Read aloud, conversation, music — calm activity" },
      { time: "12:30 PM", activity: "Lunch with the patient, hydration check, post-meal walk" },
      { time: "1:30 PM", activity: "Patient rests — caregiver checks vitals quietly and updates the log" },
      { time: "3:30 PM", activity: "Tea, video call with family living abroad" },
      { time: "5:00 PM", activity: "Walk outside or sit in the evening sun" },
      { time: "7:00 PM", activity: "Dinner and evening medications" },
      { time: "8:00 PM", activity: "Hand over to the night shift or family with a written summary" },
    ],
    requirements: {
      mustHave: [
        "10th standard pass (or equivalent)",
        "Spoken comfort in at least one of: Kannada, Tamil, Telugu, Malayalam, Hindi, English",
        "Aadhaar card and one address proof",
        "Two references we can call",
        "Physical fitness — able to support a patient with mobility",
        "Patience with elderly people, especially those with memory loss",
      ],
      niceToHave: [
        "Prior caregiving or hospital-attendant experience",
        "A second language",
        "Basic smartphone comfort (we'll train on our app)",
        "First-aid awareness",
      ],
    },
    whatWeProvide: [
      "60-hour paid training programme before your first placement",
      "Uniform, ID card, basic care kit",
      "Group accident insurance during shifts",
      "Care manager you can reach 24×7 from your phone",
      "Bi-weekly supervisor visit while you're on placement",
      "Free refresher training every six months",
      "Paid weekly off (one day a week)",
      "Monthly performance bonus for highly-rated placements",
    ],
    compensation: {
      base: "₹15,000 – ₹25,000",
      period: "month",
      benefits: [
        "Weekly off paid",
        "Monthly performance bonus up to ₹3,000",
        "Group accident insurance",
        "Festival bonus twice a year",
        "Annual paid leave (10 days)",
        "Refresher training paid",
      ],
      growth:
        "Strong performers move to live-in (₹22–35k/month) within 6 months, or specialise in dementia/bedridden care (₹25–40k/month) within 12 months.",
    },
    careerPath: [
      {
        step: "Elder Care Attendant",
        timeline: "Months 0–6",
        detail: "Day or night shifts. Build reliability and family ratings.",
      },
      {
        step: "Live-in Caregiver",
        timeline: "Months 6–12",
        detail: "Move to monthly live-in placements. Higher base, longer commitments.",
      },
      {
        step: "Specialist Caregiver (Dementia / Bedridden)",
        timeline: "Year 2+",
        detail: "Choose a specialisation. Higher tier compensation, smaller patient load, more depth.",
      },
      {
        step: "Care Supervisor",
        timeline: "Year 3+",
        detail: "Transition off the field into supervising 15–20 placements bi-weekly. Salaried role.",
      },
    ],
    team: "You'll work under a Care Supervisor who visits the home every two weeks. Day-to-day you'll have a Care Manager on call 24×7.",
    location: "Across Bangalore — typically within 10 km of your stated address.",
    shift: "Choice of 12-hour day, 12-hour night, or 4-hour hourly visits.",
    experienceLevel: "Entry",
    employmentType: "Full-time",
    openings: 25,
    applyMode: "whatsapp",
    faqs: [
      {
        q: "I have no formal training — can I still apply?",
        a: "Yes. Most of our elder care attendants came in without certification. We train you for 60 hours before your first placement, and the training is paid.",
      },
      {
        q: "How are placements decided — can I refuse one?",
        a: "Yes. We share the patient's situation, location and language before assigning, and you can decline. We won't force a placement that doesn't feel right.",
      },
      {
        q: "What if the family is difficult?",
        a: "Tell your Care Manager immediately. We've moved caregivers within 24 hours when something is off, and we never penalise you for raising a concern.",
      },
      {
        q: "Will I have a fixed weekly off?",
        a: "Yes. Most caregivers take Sunday off; some prefer Friday. We schedule a relief caregiver for the off day so the family is never left without cover.",
      },
      {
        q: "Will my pay grow with experience?",
        a: "Yes. After six months of strong ratings, you can move to live-in placements (₹22–35k/month) or specialise. Pay grows automatically with placement complexity.",
      },
      {
        q: "Do I need my own scooter?",
        a: "No. We assign placements close to where you live or where public transport works well.",
      },
    ],
    seoTitle: "Elder Care Attendant Jobs in Bangalore | Care Givers Careers",
    seoDescription:
      "Full-time elder care attendant jobs in Bangalore at Care Givers. ₹15,000–25,000/month. 60-hour paid training, insurance, weekly off, supervisor support.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 2. Patient Care Attendant ─────────────────────────── */
  {
    slug: "patient-care-attendant",
    title: "Patient Care Attendant",
    shortTitle: "Patient Care Attendant",
    category: "Field Caregiver",
    shortDek:
      "Bring hospital-grade attentiveness home — for recovery, chronic illness, and post-discharge.",
    tagline:
      "If you have a clinical instinct and a calm hand, families need you in their homes.",
    intro: [
      "Patient care attendants are the step up from elder care. You work with patients freshly discharged from hospital, or with chronic conditions managed at home — stroke, cardiac, post-surgery, cancer recovery.",
      "You're not a nurse. But you're trained to track vitals, manage feeding tubes under nursing supervision, observe wound areas, watch for the small signs that something is changing. You work under a care manager and a nurse for clinical questions.",
      "If you've worked as a hospital attendant before, or trained as a GDA (General Duty Assistant), this is a direct fit. Pay is higher than elder care because the skill ceiling is.",
    ],
    responsibilities: [
      "Track vitals — BP, sugar, temperature, SpO₂ — and log them in the app",
      "Feed orally, or assist with NG/RT feeding under nurse supervision",
      "Observe surgical sites and wound areas, report any change immediately",
      "Catheter care and incontinence management with dignity",
      "Reposition bedridden patients every 2–3 hours to prevent pressure sores",
      "Mobility coaching — bed to chair, chair to walker, supervised walks",
      "Coordinate with the family's physiotherapist when they visit",
      "Medication adherence with timing logs",
      "Hydration and nutrition tracking, including intake/output for some patients",
      "Daily care reports shared with family and treating doctor (with consent)",
      "Escalate immediately on warning signs — fever, breathlessness, swelling, confusion",
      "Maintain infection-control practices: hand hygiene, glove use, linen change",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Arrive, handover from previous shift" },
      { time: "8:15 AM", activity: "Vitals check, morning hygiene, sponge bath if bedridden" },
      { time: "9:30 AM", activity: "Breakfast and morning medications, logged with timing and dose" },
      { time: "10:30 AM", activity: "Physiotherapy support or mobility coaching" },
      { time: "12:00 PM", activity: "Vitals re-check, hydration push, repositioning" },
      { time: "1:00 PM", activity: "Lunch and afternoon medications" },
      { time: "2:00 PM", activity: "Patient rests — repositioning every 2 hours if bedridden" },
      { time: "4:00 PM", activity: "Vitals, snack, family interaction or quiet time" },
      { time: "5:30 PM", activity: "Light mobility or window time" },
      { time: "7:00 PM", activity: "Dinner, evening medications, prep for night" },
      { time: "8:00 PM", activity: "Handover with the day's full report" },
    ],
    requirements: {
      mustHave: [
        "12th standard pass, or equivalent",
        "Some healthcare exposure — hospital attendant, ANM dropout, GDA course, etc.",
        "Comfort reading basic medication labels in English",
        "Spoken comfort in two of: Kannada, Tamil, Telugu, Hindi, English",
        "Physical fitness to lift or assist a patient with mobility",
        "Two professional references",
      ],
      niceToHave: [
        "Formal GDA (General Duty Assistant) certification",
        "Hospital experience in a multi-specialty unit",
        "BLS / first-aid certificate",
        "Experience with post-op cardiac or orthopedic patients",
      ],
    },
    whatWeProvide: [
      "80-hour training programme including supervised hospital exposure",
      "Uniform, ID card, basic care kit, vitals equipment",
      "Group accident insurance during shifts",
      "Care manager 24×7 and a clinical nurse you can call",
      "Weekly nurse review of your care logs",
      "Free refresher training every quarter",
      "Paid weekly off, festival bonuses, annual leave",
    ],
    compensation: {
      base: "₹18,000 – ₹30,000",
      period: "month",
      benefits: [
        "Weekly off paid",
        "Monthly performance bonus up to ₹4,000",
        "Group accident insurance",
        "Festival bonus twice a year",
        "Annual paid leave (12 days)",
        "Quarterly refresher training paid",
      ],
      growth:
        "Move to live-in patient care (₹28–38k/month) in 6–12 months. Strong performers transition to Home Nursing Assistant role with formal training support.",
    },
    careerPath: [
      {
        step: "Patient Care Attendant",
        timeline: "Months 0–12",
        detail: "Build hospital-to-home placement experience and a strong family rating.",
      },
      {
        step: "Live-in Patient Attendant / Bedridden Specialist",
        timeline: "Year 2",
        detail: "Higher tier placements with chronic and bedridden patients.",
      },
      {
        step: "Home Nursing Assistant (with bridge training)",
        timeline: "Year 2–3",
        detail: "We sponsor your formal Home Nursing or ANM bridge programme.",
      },
    ],
    team: "Reports to a Care Supervisor (field) and has a Clinical Care Manager on call 24×7.",
    location: "Across Bangalore — placements often align with discharging hospital location.",
    shift: "12-hour day, 12-hour night, or 24×7 live-in (monthly).",
    experienceLevel: "Junior",
    employmentType: "Full-time",
    openings: 18,
    applyMode: "whatsapp",
    faqs: [
      {
        q: "Do I need to be a nurse?",
        a: "No. Nurses do clinical procedures (IV, injections). Patient care attendants assist with observation, hygiene, feeding and mobility. Different role, different training.",
      },
      {
        q: "What happens in an emergency?",
        a: "You follow the household's emergency card: family contact first, then our 24×7 care manager, then ambulance partner. We drill this on day one of every placement.",
      },
      {
        q: "Can I work only night shifts?",
        a: "Yes. Many of our patient care attendants prefer 12-hour nights, especially for post-surgery week-one placements.",
      },
      {
        q: "Will the agency support further training?",
        a: "Yes. After 12 months of strong performance, we sponsor part of your bridge to a formal Home Nursing Assistant qualification.",
      },
    ],
    seoTitle: "Patient Care Attendant Jobs in Bangalore | Hospital-Grade Home Care",
    seoDescription:
      "Patient care attendant jobs at Care Givers Bangalore. ₹18,000–30,000/month. 80-hour training, hospital exposure, clinical nurse supervision.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 3. Live-in Caregiver ─────────────────────────── */
  {
    slug: "live-in-caregiver",
    title: "Live-in Caregiver",
    shortTitle: "Live-in Caregiver",
    category: "Field Caregiver",
    shortDek:
      "Stay with one family. Provide round-the-clock presence. Earn more, grow deeper roots.",
    tagline:
      "Long placements. Real relationships. The most stable income in caregiving.",
    intro: [
      "Live-in caregivers stay with one family for weeks or months. You wake up in the home, do the morning routine, manage the day with calm rhythm, and watch through the night. We pay for the work, and the family provides board and a private sleeping space.",
      "This is the most demanding shape of caregiving and also the most rewarding. You become genuinely part of someone's last years or a long recovery, and most placements last 3 to 9 months. We give you a relief caregiver for your weekly off, a supervisor who visits every two weeks, and an emergency line that always picks up.",
      "Most live-in caregivers move into this role after 6 months of day-shift work — by then we know the kind of family that fits you, and you know what a live-in week actually looks like.",
    ],
    responsibilities: [
      "Provide continuous day and night care for one patient",
      "Personal care, meals, hygiene, mobility, medication adherence",
      "Vitals tracking and reporting via the Care Givers app",
      "Repositioning every 2–3 hours if patient is bedridden",
      "Night-time vigilance with short, scheduled rest cycles",
      "Light housekeeping in the patient's room (not the whole home)",
      "Family liaison — daily updates, weekly summaries",
      "Coordinate with visiting physiotherapist, nurse, or doctor",
      "Maintain a clean appearance and follow the household's quiet hours",
      "Train the family on the safe handling protocol on day one",
      "Stay within the agreed scope — no babysitting other family members, no cooking for the wider family",
      "Honor a minimum 30-day notice if you wish to exit the placement",
    ],
    dayInLife: [
      { time: "6:30 AM", activity: "Wake up; help the patient out of bed, vitals, water" },
      { time: "8:00 AM", activity: "Bath, grooming, breakfast, morning medication" },
      { time: "10:00 AM", activity: "Mobility / quiet activity / physio session" },
      { time: "12:30 PM", activity: "Lunch with patient" },
      { time: "1:30 PM", activity: "Patient rests; caregiver also takes short rest" },
      { time: "4:00 PM", activity: "Tea, walk in the sun, family time" },
      { time: "7:00 PM", activity: "Dinner and evening medication" },
      { time: "9:00 PM", activity: "Sleep prep, hygiene, night-position setup" },
      { time: "Through the night", activity: "Repositioning every 2–3 hours; bathroom support; calm reassurance during anxious wakings; short alert-rest cycles" },
    ],
    requirements: {
      mustHave: [
        "Minimum 6 months of caregiver experience (with us or elsewhere)",
        "Willingness to live in the family's home for the placement duration",
        "Comfort with night-time alertness and short-rest cycles",
        "10th standard or above",
        "Police verification and Aadhaar verification (we coordinate)",
        "Available for a minimum 3-month commitment per placement",
      ],
      niceToHave: [
        "Live-in or hospital-stay experience",
        "Multiple language fluency",
        "Specialised training (dementia / bedridden)",
        "Comfort with cooking simple meals for the patient",
      ],
    },
    whatWeProvide: [
      "Higher base salary than day-shift placements",
      "Free private sleeping space at the family's home (with bed)",
      "Two meals a day with the household, or food allowance",
      "Paid weekly off with a trained relief caregiver covering",
      "Bi-weekly supervisor home visit",
      "24×7 care manager support",
      "Group accident insurance and term life cover",
      "Festival and annual leave",
    ],
    compensation: {
      base: "₹22,000 – ₹35,000",
      period: "month",
      benefits: [
        "Free boarding (private bed) at the family's home",
        "Two meals a day, or food allowance",
        "Weekly off paid (one day a week)",
        "Festival bonus twice a year",
        "Annual paid leave (15 days)",
        "Group accident + term life insurance",
        "Quarterly performance bonus up to ₹5,000",
      ],
      growth:
        "Specialise (dementia / bedridden / post-surgery): ₹28–40k/month. Transition into Care Supervisor after 2–3 years.",
    },
    careerPath: [
      {
        step: "Live-in Caregiver",
        timeline: "Year 1",
        detail: "3 to 4 placements typically. Build a strong reputation across families.",
      },
      {
        step: "Specialist Live-in (Dementia / Bedridden)",
        timeline: "Year 2",
        detail: "Smaller patient load, higher pay, more depth in one area.",
      },
      {
        step: "Senior Live-in / Trainer-in-residence",
        timeline: "Year 3+",
        detail: "Senior placements + one day a month assisting with new-caregiver training.",
      },
    ],
    team: "You're embedded with one family, supported by a Care Supervisor (visits bi-weekly) and a Care Manager (24×7).",
    location: "Across Bangalore — placement matched to your area of residence and patient need.",
    shift: "24×7 with one weekly off (relief caregiver provided).",
    experienceLevel: "Mid",
    employmentType: "Live-in",
    openings: 15,
    applyMode: "whatsapp",
    faqs: [
      {
        q: "Do I really have to live in the family's home?",
        a: "Yes — that is the defining characteristic of the role. The family provides a private bed in a separate room, or in the patient's room with separation. You're free to leave during agreed rest hours.",
      },
      {
        q: "What if the family doesn't respect my rest time?",
        a: "Tell your supervisor. We have firm boundaries on rest time and we will intervene with the family or move you.",
      },
      {
        q: "Can I take my weekly off home?",
        a: "Yes. The relief caregiver arrives the day before, gets a handover, and you go home for 24 hours. Travel allowance is included.",
      },
      {
        q: "Will I get the same family for months?",
        a: "Usually yes — most live-in placements last 3–9 months. We aim for continuity because it's what families need and you build a deeper relationship.",
      },
      {
        q: "What if the patient passes away?",
        a: "We handle the transition with care. You move to a new placement within a week, and the agency pays a small support amount during the gap.",
      },
    ],
    seoTitle: "Live-in Caregiver Jobs in Bangalore | ₹22–35k/month + Boarding",
    seoDescription:
      "Full-time live-in caregiver positions at Care Givers Bangalore. Higher pay than day-shift, boarding included, weekly off, supervisor support.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 4. Dementia Care Specialist ─────────────────────────── */
  {
    slug: "dementia-care-specialist",
    title: "Dementia Care Specialist",
    shortTitle: "Dementia Specialist",
    category: "Specialist",
    shortDek:
      "Specialised caregiver for dementia and Alzheimer's patients. Continuity, validation, kindness.",
    tagline:
      "Some patients need a person who never gets tired of the same gentle answer. That person, paid well, is rare.",
    intro: [
      "Dementia care is its own discipline. The same question asked twenty times in an afternoon. The agitation that rises like clockwork at 5 PM. The wandering at 2 AM. The face of a daughter no longer recognised. None of it can be fixed — but a great deal of it can be softened, with the right person and the right training.",
      "Dementia Care Specialists complete an additional 60 hours of training in dementia communication, sundowning management, wandering prevention and family coaching, on top of the elder-care or live-in foundation. You'll be placed only with dementia and Alzheimer's patients, with smaller caseloads and longer placements.",
      "Pay is higher than general caregiving because continuity matters more in this work than in any other. Most dementia placements last 6–12 months because the patient cannot adapt to new faces — and that stability is what our pricing reflects.",
    ],
    responsibilities: [
      "Use validation therapy — meet the patient where they are, don't correct facts",
      "Apply redirection techniques during agitation (change room / activity / topic)",
      "Hold a strict daily routine, with the same timing every day",
      "Manage sundowning with morning sunlight + low-stimulation evenings",
      "Wandering prevention — environmental safety, gentle observation, never restraint",
      "Personal hygiene with dignity-first prompts (avoid shame triggers)",
      "Feeding with swallowing awareness in advanced cases",
      "Cognitive stimulation: old photos, simple folding, familiar music",
      "Family coaching — what to say, what not to say, why episodes happen",
      "Detailed daily logs of sleep, mood, agitation episodes, eating, meds",
      "Bi-weekly review with our care manager + neurologist input where relevant",
      "Never raise your voice; never argue; never restrain physically or chemically",
    ],
    dayInLife: [
      { time: "7:30 AM", activity: "Calm wake-up — familiar voice, soft light, no surprises" },
      { time: "8:00 AM", activity: "Hygiene with dignity cues (offer choice, don't force)" },
      { time: "9:00 AM", activity: "Breakfast with two simple choices, not ten" },
      { time: "10:00 AM", activity: "Engagement activity — old photo album, music, folding" },
      { time: "12:30 PM", activity: "Lunch and rest" },
      { time: "3:00 PM", activity: "Walk outside or sit in sunlight (reduces sundowning)" },
      { time: "4:30 PM", activity: "Sundowning watch — calm voice, dim lights, redirection if agitation rises" },
      { time: "6:30 PM", activity: "Dinner and evening medication" },
      { time: "8:00 PM", activity: "Night routine — predictable steps, low stimulation, soft music" },
      { time: "Through the night", activity: "Wake checks, bathroom assistance, calm reassurance" },
    ],
    requirements: {
      mustHave: [
        "At least 12 months of caregiver experience",
        "Exceptional patience — willingness to answer the same question 20 times warmly",
        "Completion of our 120-hour dementia training (provided)",
        "Comfort with disturbed sleep schedules (sundowning, night wakings)",
        "Stable temperament — no shouting, no arguing back, no shaming",
        "Strong references from previous placements",
      ],
      niceToHave: [
        "Prior experience with dementia or psychiatric patients",
        "Familiarity with Lewy body / Parkinson's dementia",
        "Comfort with multi-language households (older patients often slip back to their first language)",
      ],
    },
    whatWeProvide: [
      "120-hour specialised dementia training programme, paid",
      "Smaller caseload (typically one long placement at a time)",
      "Higher base pay than general caregiving",
      "Monthly clinical supervision sessions with a geriatric care nurse",
      "Continuity-first scheduling so the same patient sees you, every day",
      "Dedicated supervisor visits weekly during the first month",
      "All standard benefits (insurance, weekly off, leave, bonuses)",
    ],
    compensation: {
      base: "₹25,000 – ₹40,000",
      period: "month",
      benefits: [
        "Higher tier base salary",
        "Live-in placements include private boarding and food",
        "Weekly off paid with introduced relief caregiver",
        "Festival bonus + annual leave",
        "Group accident + term life insurance",
        "Monthly clinical supervision session",
      ],
      growth:
        "Senior Specialist (₹38–50k/month) after 2 years. Transition to a Trainer role designing future dementia caregiver cohorts.",
    },
    careerPath: [
      {
        step: "Dementia Care Specialist",
        timeline: "Year 1",
        detail: "Long placements, strong continuity, build reputation in the speciality.",
      },
      {
        step: "Senior Dementia Specialist",
        timeline: "Year 2–3",
        detail: "Lead the most complex cases. Higher tier compensation.",
      },
      {
        step: "Trainer (Dementia track)",
        timeline: "Year 3+",
        detail: "Spend part of your time training new specialists and coaching families.",
      },
    ],
    team: "Reports to a senior Care Supervisor. Monthly review with a geriatric care nurse.",
    location: "Across Bangalore — match-prioritised for language and household culture.",
    shift: "12-hour day, 12-hour night, or 24×7 live-in (live-in preferred for continuity).",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 8,
    applyMode: "whatsapp",
    faqs: [
      {
        q: "I don't have dementia experience — can I still apply?",
        a: "Yes, if you have a year of general caregiving and exceptional temperament. We provide the 120-hour specialised training before your first dementia placement.",
      },
      {
        q: "What if the patient becomes aggressive?",
        a: "You de-escalate using techniques we drill — validation, redirection, removing triggers. You never restrain. If episodes become frequent, we call in the family doctor and our care manager.",
      },
      {
        q: "Why is this paid more?",
        a: "Dementia care requires more training, more emotional stamina, and longer placements with smaller caseloads. The market rate reflects all three.",
      },
      {
        q: "Is the training really paid?",
        a: "Yes. 120 hours over 3–4 weeks, with a stipend equivalent to ₹8,000–10,000.",
      },
    ],
    seoTitle: "Dementia Care Specialist Jobs in Bangalore | Specialised Caregiver",
    seoDescription:
      "Dementia and Alzheimer's care specialist roles at Care Givers Bangalore. ₹25,000–40,000/month. 120-hour paid training, smaller caseload, longer placements.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 5. Home Nursing Assistant ─────────────────────────── */
  {
    slug: "home-nursing-assistant",
    title: "Home Nursing Assistant",
    shortTitle: "Home Nursing Assistant",
    category: "Specialist",
    shortDek:
      "Clinical home-visit role — IV, dressings, catheter changes — for the medical edge cases.",
    tagline:
      "The bridge between hospital and home. Your shifts are short, your impact is sharp.",
    intro: [
      "Home Nursing Assistants are our most clinical field role. You make scheduled visits to patients' homes — typically 1–2 hours per visit, 4–6 visits a day — to do the procedures that a patient care attendant cannot: IV infusions, injections, catheter changes, active wound dressings, NG tube management.",
      "You work under the oversight of our consulting clinical nurse, and we maintain a strict scope-of-practice for what you can and cannot do solo. Documentation is rigorous — every visit ends with a signed note shared with the family and the treating doctor.",
      "If you've trained as an ANM or GNM and want a stable, daytime role outside hospital shift work, this is one of the best home-care job patterns in Bangalore. Compensation is per-visit plus a monthly retainer.",
    ],
    responsibilities: [
      "Administer scheduled IV fluids and IV medication per doctor's prescription",
      "Give intramuscular and subcutaneous injections",
      "Perform wound dressings and post-surgical site care",
      "Catheter insertion, change and care",
      "Manage Ryle's tube / NG-feed insertion and replacement",
      "Tracheostomy care (basic) and suction",
      "Take detailed vitals and document changes",
      "Coordinate with the patient's care attendant on daily plan",
      "Share signed visit notes with family and treating doctor",
      "Stock and maintain your visit kit; restock from our office monthly",
      "Maintain infection-control protocols on every visit",
      "Escalate any change in patient status to our clinical care manager immediately",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Pick up your visit kit, review the day's patient list" },
      { time: "9:00 AM", activity: "Visit 1 — IV infusion, 1.5 hours" },
      { time: "11:00 AM", activity: "Visit 2 — wound dressing post-orthopedic surgery, 45 min" },
      { time: "12:30 PM", activity: "Lunch break, refresh kit" },
      { time: "2:00 PM", activity: "Visit 3 — catheter change, 30 min" },
      { time: "3:30 PM", activity: "Visit 4 — injection round (3 patients in nearby homes), 1 hour" },
      { time: "5:00 PM", activity: "Visit 5 — NG-tube management, 30 min" },
      { time: "6:00 PM", activity: "Wrap up: visit notes, hand in kit, log day's stock" },
    ],
    requirements: {
      mustHave: [
        "ANM (Auxiliary Nurse Midwife) or GNM (General Nursing and Midwifery) diploma",
        "Registered with Karnataka State Nursing Council",
        "Minimum 2 years clinical experience (hospital or home setting)",
        "Comfort with IV cannulation and IV medication",
        "English + at least one Indian language",
        "Two-wheeler license and willingness to ride for visits",
        "Smartphone with internet access",
      ],
      niceToHave: [
        "Critical care or surgical-ward experience",
        "BLS / ACLS certification",
        "Experience with home-care nursing or hospital-at-home programmes",
        "Comfort with wound vacuum / advanced dressings",
      ],
    },
    whatWeProvide: [
      "Monthly retainer + per-visit pay structure (more visits = more pay)",
      "Visit kit with all consumables — replenished from our office",
      "Two-wheeler fuel allowance and minor maintenance support",
      "Smartphone allowance for visit logging",
      "Professional indemnity insurance + accident insurance",
      "Weekly clinical case-review with the senior consulting nurse",
      "Continuing education sponsorship (BLS, advanced wound care, etc.)",
    ],
    compensation: {
      base: "₹25,000 – ₹45,000",
      period: "month",
      benefits: [
        "Monthly retainer ₹18,000 + per-visit pay ₹200–500",
        "Fuel allowance ₹2,500/month",
        "Smartphone allowance ₹500/month",
        "Continuing education sponsorship",
        "Professional indemnity insurance",
        "Annual leave (15 days)",
        "Festival bonus",
      ],
      growth:
        "Senior Home Nursing Lead (₹50–80k/month) after 2 years. Specialise into wound care, palliative or critical-care-at-home tracks.",
    },
    careerPath: [
      {
        step: "Home Nursing Assistant",
        timeline: "Year 1–2",
        detail: "Build a strong visit-based clinical practice across Bangalore.",
      },
      {
        step: "Senior Home Nursing Lead",
        timeline: "Year 2–3",
        detail: "Manage a panel of HNAs, on-call clinical decisions, training new joiners.",
      },
      {
        step: "Clinical Care Manager (Operations)",
        timeline: "Year 3+",
        detail: "Move into central operations as a clinical lead, salaried.",
      },
    ],
    team: "Reports to the Clinical Care Manager. Has direct line to senior consulting nurse for case decisions.",
    location: "Bangalore-wide — visits clustered geographically to minimise riding time.",
    shift: "Daytime — typically 8 AM to 6 PM, 6 days a week. Sundays off.",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 6,
    applyMode: "email",
    faqs: [
      {
        q: "Is this nurse-on-call or do I have scheduled visits?",
        a: "Mostly scheduled visits. Emergencies are routed to our nurse-on-call rotation, which is opt-in and pays extra.",
      },
      {
        q: "Do I have to do my own scheduling?",
        a: "No. Our placement coordinator builds your daily route the night before, optimised for travel time and clinical urgency.",
      },
      {
        q: "Will I have to ride my scooter in heavy Bangalore traffic?",
        a: "Yes. We do our best to cluster visits, but the role requires comfort with city riding. We provide rain gear and a helmet.",
      },
      {
        q: "What if I make a clinical mistake?",
        a: "We have a clear no-blame escalation process. You call the senior nurse, document, and we handle it as a team. Our professional indemnity covers you.",
      },
    ],
    seoTitle: "Home Nursing Assistant Jobs Bangalore | ANM / GNM Home Care",
    seoDescription:
      "Home Nursing Assistant role at Care Givers Bangalore for ANM/GNM nurses. ₹25–45k/month. Per-visit pay, fuel allowance, clinical supervision.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 6. Care Supervisor ─────────────────────────── */
  {
    slug: "care-supervisor",
    title: "Care Supervisor",
    shortTitle: "Care Supervisor",
    category: "Operations",
    shortDek:
      "Field supervisor visiting 15–20 placements bi-weekly to keep care quality high.",
    tagline:
      "The role that makes the rest of the system work. You're the calm second pair of eyes.",
    intro: [
      "Care Supervisors are the field arm of our quality system. You visit 15 to 20 active placements every two weeks — sit with the patient and family, review the caregiver's logs, observe the room, ask the questions the family doesn't think to ask, and report what you find back to our central team.",
      "It's not a desk job. You're on a scooter for 6 hours a day across Bangalore, in conversation for the rest. The work demands a clinical instinct, a soft voice, and the ability to spot a small problem before it becomes a complaint. We pair you with a Clinical Care Manager you call when something needs more than your judgement alone.",
      "This is one of our most senior field roles and is the standard progression for a strong caregiver or home nurse who is ready to step off direct patient care.",
    ],
    responsibilities: [
      "Visit 15–20 active care placements every two weeks across your assigned zone",
      "Sit with the patient and family for 30–45 minutes per visit",
      "Review the caregiver's daily log book and app entries",
      "Observe the room, the patient's appearance, the household tone",
      "Re-train the caregiver on the spot if you see protocol gaps",
      "Document findings — strengths, gaps, escalations — in our supervisor report",
      "Identify caregivers who are at risk of burnout and rotate them out kindly",
      "Be the family's first escalation channel for non-clinical concerns",
      "Help onboard new caregivers into their first placement (introduce, settle, brief)",
      "Run monthly small-group meetings with caregivers in your zone",
      "Flag any safeguarding concern immediately to the Operations Head",
      "Maintain a clean professional appearance, ride safely, never miss a scheduled visit without notice",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Check your day's visit list and route, in the app" },
      { time: "9:30 AM", activity: "Visit 1 — bi-weekly check at a live-in placement in Indiranagar" },
      { time: "11:00 AM", activity: "Travel to Whitefield" },
      { time: "11:45 AM", activity: "Visit 2 — post-surgery placement, family meeting, log review" },
      { time: "1:00 PM", activity: "Lunch and admin — file visit reports, message care manager" },
      { time: "2:00 PM", activity: "Visit 3 — new caregiver settling-in visit in HSR" },
      { time: "3:30 PM", activity: "Visit 4 — dementia placement, longer family conversation" },
      { time: "5:00 PM", activity: "Visit 5 — quick walk-through at a stable hourly client" },
      { time: "6:00 PM", activity: "End-of-day: submit all visit reports in app, plan tomorrow" },
    ],
    requirements: {
      mustHave: [
        "GNM diploma or BSc Nursing, or 5+ years caregiving experience with strong references",
        "3+ years in patient care or supervisory role",
        "Two-wheeler license and ability to ride safely across Bangalore",
        "Spoken comfort in Kannada + Hindi + English (Tamil/Telugu a bonus)",
        "Smartphone literacy for visit logging and family WhatsApp groups",
        "Emotional maturity — ability to deliver hard feedback gently",
      ],
      niceToHave: [
        "Prior agency supervisory experience",
        "Geriatric or palliative care training",
        "Experience with hospital case management",
        "Comfort presenting to small groups (caregiver meetings)",
      ],
    },
    whatWeProvide: [
      "Salaried role, no per-visit pay grind",
      "Two-wheeler fuel allowance ₹4,500/month",
      "Smartphone with company data plan",
      "Visit kit, raincoat, helmet, branded gear",
      "Bi-monthly clinical training updates",
      "Direct working relationship with Operations Head",
      "Career path into Operations management",
    ],
    compensation: {
      base: "₹35,000 – ₹55,000",
      period: "month",
      benefits: [
        "Salaried, not per-visit",
        "Fuel allowance ₹4,500/month",
        "Smartphone + data plan",
        "Annual leave (18 days) + sick leave (8 days)",
        "Group medical insurance",
        "Bi-monthly training",
        "Annual performance bonus",
      ],
      growth:
        "Senior Supervisor or Zone Lead (₹55–75k/month) after 2 years. Path into Operations Head or Clinical Care Manager.",
    },
    careerPath: [
      {
        step: "Care Supervisor",
        timeline: "Year 1–2",
        detail: "Master your assigned zone. Build trust with families and caregivers.",
      },
      {
        step: "Zone Lead / Senior Supervisor",
        timeline: "Year 2–3",
        detail: "Manage 3–4 supervisors across a Bangalore zone.",
      },
      {
        step: "Operations Head",
        timeline: "Year 3+",
        detail: "Run the field operations across Bangalore. Senior salaried role with equity.",
      },
    ],
    team: "Reports to the Operations Head. Works closely with Clinical Care Manager, Placement Coordinator, and the caregivers in your zone.",
    location: "Assigned Bangalore zone (East, West, South, North, or Central).",
    shift: "Daytime — 9 AM to 6 PM, 6 days/week. Sundays off.",
    experienceLevel: "Senior",
    employmentType: "Full-time",
    openings: 5,
    applyMode: "email",
    faqs: [
      {
        q: "Is this an office job?",
        a: "No. You're in the field 4–5 days a week and at the office only for monthly reviews. If you want a desk job, this isn't it.",
      },
      {
        q: "What's the hardest part of the role?",
        a: "Delivering hard feedback to caregivers you've come to care about, without losing them. We train for that, but it takes practice.",
      },
      {
        q: "Will I have to visit on Sundays?",
        a: "Only in emergencies. Sundays are protected.",
      },
      {
        q: "What if a caregiver doesn't follow my instructions?",
        a: "Document, retrain, and escalate if it repeats. Our process protects both you and the caregiver — we don't act on hearsay.",
      },
    ],
    seoTitle: "Care Supervisor Jobs Bangalore | Field Supervisor at Home Care",
    seoDescription:
      "Care Supervisor role at Care Givers Bangalore — visit 15–20 placements bi-weekly. ₹35–55k/month. For experienced caregivers ready to move off direct care.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 7. Care Manager (24×7 Operations) ─────────────────────────── */
  {
    slug: "care-manager-operations",
    title: "Care Manager (24×7 Operations)",
    shortTitle: "Care Manager — Ops",
    category: "Operations",
    shortDek:
      "Central operations role — the person families and caregivers call when something matters.",
    tagline:
      "The voice on the other end at 2 AM. Calm, fast, kind.",
    intro: [
      "Care Managers run the central nervous system of Care Givers. Families call you when they're worried. Caregivers WhatsApp you when something's off. Hospitals message you when a discharge is happening tomorrow morning. You triage all of it, make a call, dispatch a person, and follow up by 9 AM.",
      "We run three shifts (8AM–4PM, 4PM–12AM, 12AM–8AM), and there's always at least one Care Manager on duty. The night shift is quieter but more consequential — most emergencies happen between 11 PM and 4 AM.",
      "It's a role for someone who finds calm in chaos — a hospital BD, a startup ops generalist, a triage nurse who wants off the ward. You don't need clinical training, but you do need the temperament to be the steady voice when the family on the line isn't.",
    ],
    responsibilities: [
      "Pick up every inbound call, message, and WhatsApp within the response SLA",
      "Triage emergencies — connect to ambulance partner, treating doctor, family",
      "Dispatch caregivers for same-day placements (within 6-hour SLA)",
      "Handle replacement requests within 24 hours",
      "Maintain the duty log — every call, every action, every outcome",
      "Coordinate hospital discharge placements with case managers",
      "Brief incoming caregivers on each new family before they leave",
      "Be the family's day-to-day point of contact for any concern",
      "Escalate clinical questions to the Clinical Care Manager",
      "Handle billing queries and payment follow-ups",
      "Run the monthly retention call with active long-term clients",
      "Document everything — we are an evidence-driven operation",
    ],
    dayInLife: [
      { time: "8:00 AM", activity: "Shift handover — read the overnight log, scan flagged cases" },
      { time: "8:30 AM", activity: "Morning calls to live-in caregivers for their daily check-in" },
      { time: "10:00 AM", activity: "Coordinate two new placements requested last night" },
      { time: "11:30 AM", activity: "Hospital case manager calls about a Thursday discharge" },
      { time: "1:00 PM", activity: "Lunch + admin — billing follow-ups, family WhatsApp replies" },
      { time: "2:30 PM", activity: "Family in Whitefield reports caregiver concern — investigate and resolve" },
      { time: "4:00 PM", activity: "Shift handover to evening Care Manager" },
    ],
    requirements: {
      mustHave: [
        "Bachelor's degree (any discipline)",
        "Excellent spoken Kannada + Hindi + English",
        "2+ years in customer-facing operations (hospital, hotel, startup ops, etc.)",
        "Comfort with shift work, including night shifts on rotation",
        "Strong written communication for WhatsApp and email",
        "Calm under pressure — references should call out your composure",
        "Comfortable with software tools (we use a custom dispatch app)",
      ],
      niceToHave: [
        "Hospital case management experience",
        "Healthcare BD or family-facing patient relations background",
        "Tamil or Telugu fluency",
        "Prior 24×7 operations role",
      ],
    },
    whatWeProvide: [
      "Office in Indiranagar with comfortable workspace",
      "Night-shift transport (cab home if past 11 PM)",
      "Night-shift differential pay",
      "Annual leave, sick leave, festival bonus, group medical",
      "Quarterly off-sites with the operations team",
      "Real career path into Senior Care Manager or Operations Head",
    ],
    compensation: {
      base: "₹40,000 – ₹70,000",
      period: "month",
      benefits: [
        "Night-shift differential +15%",
        "Cab transport after 11 PM",
        "Group medical insurance (family floater)",
        "Annual leave (20 days)",
        "Quarterly off-sites",
        "Annual performance bonus 1–2 months",
      ],
      growth:
        "Senior Care Manager (₹65–95k/month) in 18–24 months. Operations Head path opens after that.",
    },
    careerPath: [
      {
        step: "Care Manager",
        timeline: "Year 1",
        detail: "Master triage and dispatch. Build pattern-recognition for typical case types.",
      },
      {
        step: "Senior Care Manager",
        timeline: "Year 1–2",
        detail: "Lead one shift, mentor newer Care Managers, handle complex escalations.",
      },
      {
        step: "Operations Head",
        timeline: "Year 3+",
        detail: "Run the entire operations function across all three shifts and all Bangalore zones.",
      },
    ],
    team: "Part of a team of 4–6 Care Managers. Reports to the Operations Head. Works with Care Supervisors, Placement Coordinators and Clinical Care Manager.",
    location: "Care Givers office, Indiranagar.",
    shift: "Rotating: 8AM–4PM, 4PM–12AM, 12AM–8AM. Two weeks per rotation.",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 4,
    applyMode: "email",
    faqs: [
      {
        q: "How often do I get a night shift?",
        a: "Roughly once every 6 weeks for a two-week rotation. Compensated with a 15% differential and cab transport.",
      },
      {
        q: "Will I have to give medical advice?",
        a: "No. You triage and route to the Clinical Care Manager or the family's treating doctor. Our boundaries on clinical advice are firm.",
      },
      {
        q: "How big is the team?",
        a: "Today, 4 Care Managers + an Operations Head + a Clinical Care Manager. Growing to 8 within the year.",
      },
      {
        q: "Is this remote?",
        a: "No. The role is in-office because of the multi-line phone system and the team coordination. We're hybrid on admin days only.",
      },
    ],
    seoTitle: "Care Manager (Operations) Jobs Bangalore | 24×7 Home Care Ops",
    seoDescription:
      "Care Manager role at Care Givers Bangalore — central 24×7 operations, triage, dispatch. ₹40–70k/month. Hospital ops or startup ops backgrounds welcome.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 8. Caregiver Trainer ─────────────────────────── */
  {
    slug: "caregiver-trainer",
    title: "Caregiver Trainer",
    shortTitle: "Caregiver Trainer",
    category: "Operations",
    shortDek:
      "Design and deliver the training that makes every Care Givers caregiver good at this work.",
    tagline:
      "The role that compounds. Every cohort you train shapes a thousand families' experience.",
    intro: [
      "The Caregiver Trainer owns the curriculum and the cohorts. You'll run new-caregiver onboarding (60 hours), patient care attendant training (80 hours), and dementia/bedridden specialist tracks (120 hours each).",
      "Half your week is in our Indiranagar training space teaching — clinical basics, communication, dignity-first hygiene, dementia validation therapy, infection control, household safety. The other half is in the field, observing caregivers in real placements and writing the next iteration of the curriculum.",
      "This is the most consequential role in the company. The training curriculum is the moat — what we teach, how well we teach it, and whether it transfers to the home decides whether Care Givers is a premium service or another agency.",
    ],
    responsibilities: [
      "Run new caregiver cohorts (8–15 trainees, 60 hours over 2.5 weeks)",
      "Run specialist cohorts (dementia, bedridden, post-surgery, female-care)",
      "Deliver classroom modules + role-plays + supervised home practice",
      "Maintain and version the curriculum — written, illustrated, and on video",
      "Assess trainees and certify them for placement",
      "Spend 1–2 days a week in active placements observing real practice",
      "Identify the gap between curriculum and field reality, close it",
      "Run quarterly refresher programmes for active caregivers",
      "Coach caregivers who are flagged by supervisors as needing support",
      "Maintain the training space, equipment, mannequins, supplies",
      "Document training outcomes — completion rates, ratings, drop-offs",
      "Represent Care Givers at hospital and academic training partnerships",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Cohort warm-up — yesterday's recap, today's outline" },
      { time: "9:30 AM", activity: "Classroom session — module on vitals tracking" },
      { time: "11:00 AM", activity: "Hands-on practical with mannequins and supervised peer practice" },
      { time: "1:00 PM", activity: "Lunch with cohort, informal conversations" },
      { time: "2:00 PM", activity: "Role-plays on dementia communication" },
      { time: "4:00 PM", activity: "Trainee 1:1s — check-ins with the two trainees flagged as struggling" },
      { time: "5:00 PM", activity: "Document the day, update the curriculum doc, plan tomorrow" },
    ],
    requirements: {
      mustHave: [
        "BSc Nursing or GNM diploma",
        "5+ years clinical or caregiver-management experience",
        "Strong instructional skills — comfortable in front of a 15-person room",
        "Fluent Kannada + Hindi + English (one of the three is most trainees' first language)",
        "Empathy with people who are new to formal training (many of our caregivers are first-generation learners)",
        "Curriculum design instinct — comfort writing and revising training materials",
      ],
      niceToHave: [
        "Previous role as a nursing tutor, hospital trainer or NGO health educator",
        "Experience with adult-learning methodology",
        "Tamil or Telugu fluency",
        "Comfort with video content creation",
      ],
    },
    whatWeProvide: [
      "Dedicated training space at our Indiranagar office",
      "Full curriculum to inherit, plus authority to evolve it",
      "Training equipment — mannequins, vitals kits, dementia simulation tools",
      "Budget for curriculum experimentation and external programmes",
      "Salaried role, fixed hours, no shift work",
      "Conference and CME budget annually",
      "Career path into Head of Training or Clinical Care Manager",
    ],
    compensation: {
      base: "₹50,000 – ₹80,000",
      period: "month",
      benefits: [
        "Fixed daytime hours, weekends off",
        "Conference + CME budget ₹40,000/year",
        "Group medical insurance (family floater)",
        "Annual leave (20 days)",
        "Festival bonus",
        "Equity option after 2 years",
      ],
      growth:
        "Head of Training (₹80k–1.4L/month) after 2 years. Path to a clinical leadership role thereafter.",
    },
    careerPath: [
      {
        step: "Caregiver Trainer",
        timeline: "Year 1–2",
        detail: "Run and refine cohorts. Own the curriculum.",
      },
      {
        step: "Head of Training",
        timeline: "Year 2–3",
        detail: "Build a training team and expand curriculum (patient care, home nursing).",
      },
      {
        step: "Clinical Director",
        timeline: "Year 3+",
        detail: "Lead clinical strategy across the company.",
      },
    ],
    team: "Reports to the Operations Head. Works closely with Care Supervisors who feed back from the field, and with Care Managers on placement-time briefings.",
    location: "Care Givers training space, Indiranagar (with field visits across Bangalore).",
    shift: "Daytime — 9 AM to 6 PM, 5 days a week. Weekends off.",
    experienceLevel: "Senior",
    employmentType: "Full-time",
    openings: 2,
    applyMode: "email",
    faqs: [
      {
        q: "Will I have to train very new learners?",
        a: "Yes — many caregivers are first-generation learners in formal training. The role demands patience and a clear voice. We'll match the curriculum style to that.",
      },
      {
        q: "Can I keep doing some clinical work?",
        a: "Yes — about 20% of your time will be in the field, observing real placements. We don't want a trainer who hasn't seen the room.",
      },
      {
        q: "What if I have curriculum ideas that don't fit the current programme?",
        a: "Bring them. The curriculum is yours to evolve, with a budget for experimentation.",
      },
    ],
    seoTitle: "Caregiver Trainer Jobs Bangalore | Lead Home-Care Training",
    seoDescription:
      "Caregiver Trainer role at Care Givers Bangalore. Design and deliver 60-120 hour training programmes. ₹50–80k/month. BSc Nursing or GNM required.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 9. Hospital Partnerships Manager ─────────────────────────── */
  {
    slug: "hospital-partnerships-manager",
    title: "Hospital Partnerships Manager",
    shortTitle: "Hospital Partnerships",
    category: "Corporate",
    shortDek:
      "Build referral relationships with Bangalore's major hospitals so patients leave with us already lined up.",
    tagline:
      "B2B sales for a service that genuinely helps the patient. The good version of healthcare BD.",
    intro: [
      "Hospital discharge is one of the highest-intent moments in caregiving. The family is anxious, the patient is going home in 48 hours, and they need help they didn't think they'd need. The hospitals that hand a family a Care Givers flyer at discharge change the trajectory of those next four weeks.",
      "The Hospital Partnerships Manager builds these relationships, one hospital at a time. You'll work with discharge case managers, geriatric clinics, orthopedic departments, oncology floors, and post-cardiac units. The goal is for Care Givers to be the named home-care service in their discharge pathway.",
      "It's BD work, but for a service families actually want. Compensation is base + commission, but the real reward is being the reason a family doesn't have to scramble after surgery.",
    ],
    responsibilities: [
      "Build relationships with 15–20 Bangalore hospitals across 18 months",
      "Identify the right contacts — case managers, ward heads, geriatricians, surgeons",
      "Present Care Givers credibly: process, training, pricing, escalation, outcomes",
      "Negotiate discharge pathway integration, flyer placement, ward-level briefings",
      "Coordinate with Care Managers to ensure smooth hospital-to-home handover",
      "Maintain a CRM of every hospital contact, conversation and follow-up",
      "Run quarterly review meetings with our top 5 hospital partners",
      "Field hospital escalations — if anything goes wrong in a partnered discharge, you own it",
      "Identify cross-referral opportunities (geriatricians, physiotherapists, etc.)",
      "Represent Care Givers at hospital medical conferences and clinician meet-ups",
      "Bring market intelligence back — what are other agencies offering hospitals",
      "Hit a referral-volume target (currently 40 hospital-referred placements / month)",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "CRM review — yesterday's calls, today's planned visits" },
      { time: "10:00 AM", activity: "Visit Manipal Old Airport Road — quarterly review with case management" },
      { time: "12:00 PM", activity: "Lunch + travel to Apollo Bannerghatta" },
      { time: "1:30 PM", activity: "Meeting with the geriatric clinic head" },
      { time: "3:00 PM", activity: "Coffee with a discharge nurse who's been a champion for us" },
      { time: "4:30 PM", activity: "Office time — proposal draft for Sakra hospital partnership" },
      { time: "6:00 PM", activity: "Wrap day — log activity in CRM, plan tomorrow" },
    ],
    requirements: {
      mustHave: [
        "Bachelor's degree, MBA preferred",
        "3+ years healthcare business development, account management, or hospital sales",
        "Existing relationships in Bangalore healthcare are a strong plus",
        "Polished spoken English; comfort with clinical conversation",
        "Strong written proposals and CRM discipline",
        "Two-wheeler or willingness to travel intra-city daily",
        "Calm, low-pressure sales style — we don't push, we earn",
      ],
      niceToHave: [
        "Pharma or medical-device sales background",
        "Hospital insurance / TPA partnership experience",
        "Existing relationships at Manipal, Apollo, Sakra, Fortis or Narayana",
        "Comfort with quarterly business reviews and clinical metric reporting",
      ],
    },
    whatWeProvide: [
      "Base salary + uncapped commission on referred placements",
      "Travel allowance and parking allowance",
      "Smartphone + data plan",
      "Branded collateral and well-designed clinical materials",
      "Direct executive sponsorship for top-tier hospital meetings",
      "Quarterly off-sites + leadership exposure",
      "Stock options after 1 year",
    ],
    compensation: {
      base: "₹60,000 – ₹1,20,000 + commission",
      period: "month",
      benefits: [
        "Uncapped commission (₹2,000–5,000 per hospital-referred placement)",
        "Travel + parking allowance",
        "Smartphone + data plan",
        "Stock options after 1 year",
        "Group medical insurance (family floater)",
        "Annual leave (24 days)",
        "Festival + annual performance bonus",
      ],
      growth:
        "Head of Partnerships (₹1.5–2.5L + variable) at scale. Path into Commercial Director.",
    },
    careerPath: [
      {
        step: "Hospital Partnerships Manager",
        timeline: "Year 1–2",
        detail: "Win the first 15 hospital partnerships. Build the referral engine.",
      },
      {
        step: "Head of Partnerships",
        timeline: "Year 2–3",
        detail: "Build a team of 2–3 managers. Expand to clinics and physiotherapy networks.",
      },
      {
        step: "Commercial Director",
        timeline: "Year 3+",
        detail: "Own all revenue channels — partnerships, direct, digital.",
      },
    ],
    team: "Reports to the Founder for now. Works with Care Managers (handover) and Marketing (collateral).",
    location: "Across Bangalore — heavy intra-city travel.",
    shift: "Daytime — 9 AM to 7 PM, 5–6 days/week.",
    experienceLevel: "Senior",
    employmentType: "Full-time",
    openings: 1,
    applyMode: "email",
    faqs: [
      {
        q: "Is the commission realistic?",
        a: "Yes. A strong year is ₹15–20L in commission on top of base, achievable if you hit the 40-placement / month referral target within 12 months.",
      },
      {
        q: "Do I sell to administrators or clinicians?",
        a: "Both. The administrator opens the door; the clinician is the daily advocate. You need to be credible with both.",
      },
      {
        q: "What's the hardest part of this job?",
        a: "Hospitals move slowly. A partnership conversation can take 6 months from first meeting to flyer in the discharge packet. Patience matters.",
      },
    ],
    seoTitle: "Hospital Partnerships Manager Job Bangalore | Healthcare BD",
    seoDescription:
      "Hospital Partnerships Manager at Care Givers Bangalore. Build referral pathways with major hospitals. ₹60k–1.2L base + uncapped commission. Healthcare BD background needed.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 10. Content & Brand Lead ─────────────────────────── */
  {
    slug: "content-brand-lead",
    title: "Content & Brand Lead",
    shortTitle: "Content & Brand",
    category: "Corporate",
    shortDek:
      "Own The Care Journal, the brand voice, and every word a Bangalore family reads from us.",
    tagline:
      "If you've wanted to write about healthcare for families instead of clinicians, this is the gig.",
    intro: [
      "Care Givers is, at its core, a content company that also places caregivers. The Care Journal, the service pages, the locality pages, the tone of the WhatsApp messages our Care Managers send at 11 PM — they all need a single, calm, honest voice. The Content & Brand Lead owns that voice.",
      "You'll publish 4 long-form journal posts a month, refresh service and locality pages quarterly, commission illustration and photography, run a monthly newsletter, and shape every piece of family-facing communication. You'll also own SEO — keyword strategy, internal linking, AEO/llms.txt content, structured data tone, the lot.",
      "This is the right role for a senior healthcare writer, a brand editor from a wellness brand, or a journalist who's been looking for a way to do mission-aligned work without giving up craft.",
    ],
    responsibilities: [
      "Publish 4 long-form journal posts per month, each ≥1,200 words",
      "Maintain and version-control the entire content corpus (services, localities, journal)",
      "Run editorial review for clinical accuracy with the consulting nurse",
      "Commission illustration, photography and short video from agencies",
      "Manage SEO end-to-end — keyword strategy, on-page optimisation, AEO, llms.txt",
      "Write the monthly newsletter (~5,000 subscribers, growing)",
      "Maintain brand-voice guide and review all family-facing copy",
      "Build and brief external freelancers as content needs scale",
      "Track content performance — rankings, time on page, conversions",
      "Run quarterly content reviews with the founder",
      "Represent the brand at small media conversations and partnerships",
      "Develop the editorial-board partnership with our consulting clinicians",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Editorial planning — review the month's content calendar" },
      { time: "10:00 AM", activity: "Deep work — draft the week's long-form journal post" },
      { time: "12:30 PM", activity: "Lunch, light reading (research for next piece)" },
      { time: "1:30 PM", activity: "Review of our consulting nurse's edits on a dementia piece" },
      { time: "3:00 PM", activity: "SEO review — keyword ranking, top-performing pages, gaps" },
      { time: "4:00 PM", activity: "Brief illustrator on next month's locality page series" },
      { time: "5:30 PM", activity: "Edit a Care Manager's WhatsApp template for consistency" },
    ],
    requirements: {
      mustHave: [
        "5+ years content / editorial experience, ideally in healthcare or wellness",
        "Demonstrated long-form writing chops (portfolio required)",
        "Working knowledge of SEO and analytics (Search Console, GA4)",
        "Ability to edit clinical content for a lay audience without losing accuracy",
        "Strong project management — running 4 pieces a month with research, edit, illustration",
        "Comfort with markdown, Git or similar version-controlled workflows",
      ],
      niceToHave: [
        "Prior experience at a healthcare publication, wellness brand, or care startup",
        "Experience with Indian regional language content (Kannada, Tamil, Hindi)",
        "Hands-on SEO at an Indian D2C / healthcare brand",
        "Comfort briefing illustrators or photographers",
        "AEO / generative-search experience",
      ],
    },
    whatWeProvide: [
      "Editorial freedom within the brand framework",
      "Direct access to consulting clinicians for fact-checking",
      "Annual budget for freelancers, illustrators, photography",
      "Conference budget (writing / SEO / healthcare)",
      "Equity / stock options",
      "Hybrid work — 2 office days, 3 remote days",
      "Career path into Head of Brand or Founder's office",
    ],
    compensation: {
      base: "₹70,000 – ₹1,50,000",
      period: "month",
      benefits: [
        "Hybrid work (2 office days, 3 remote)",
        "Annual conference + book budget ₹50,000",
        "Stock options (cliff after 1 year)",
        "Group medical insurance (family floater)",
        "Annual leave (24 days)",
        "Sabbatical eligibility after 3 years",
      ],
      growth:
        "Head of Brand & Content (₹1.5–2.5L/month + equity) after 2 years. Path into broader marketing or founder's office.",
    },
    careerPath: [
      {
        step: "Content & Brand Lead",
        timeline: "Year 1–2",
        detail: "Own the editorial calendar. Build SEO/AEO into a moat.",
      },
      {
        step: "Head of Brand & Content",
        timeline: "Year 2–3",
        detail: "Build a small content team (2–3 people), expand into video and vernacular.",
      },
      {
        step: "Head of Marketing / Founder's Office",
        timeline: "Year 3+",
        detail: "Own all of brand + acquisition + retention.",
      },
    ],
    team: "Reports directly to the founder. Works with Hospital Partnerships, Operations, and the consulting clinicians.",
    location: "Hybrid — 2 days in our Indiranagar office, 3 days remote.",
    shift: "Daytime — flexible, results-based. No weekend work.",
    experienceLevel: "Senior",
    employmentType: "Full-time",
    openings: 1,
    applyMode: "email",
    faqs: [
      {
        q: "Will I be writing every word, or commissioning?",
        a: "Both. Year 1 is heavier on writing (4 long-form pieces/month). Year 2+ you commission more as the team grows.",
      },
      {
        q: "Does clinical accuracy matter that much for a marketing role?",
        a: "Yes — significantly. We're in a YMYL category. Every clinical claim is reviewed by our consulting nurse. If you're allergic to fact-checking, this isn't the role.",
      },
      {
        q: "Can I work fully remote?",
        a: "Not initially. The 2-office-days pattern is important while we build the editorial board and shoot photography. After year 1, more flexibility.",
      },
      {
        q: "How much SEO is in this role?",
        a: "About 30%. Keyword research, on-page optimisation, internal linking, AEO content shaping, analytics review.",
      },
    ],
    seoTitle: "Content & Brand Lead Job Bangalore | Healthcare Content Editor",
    seoDescription:
      "Content & Brand Lead at Care Givers Bangalore. Own The Care Journal, SEO/AEO and brand voice. ₹70k–1.5L/month + stock options. Hybrid.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 11. Family Care Counsellor (Sales) ─────────────────────────── */
  {
    slug: "family-care-counsellor-sales",
    title: "Family Care Counsellor (Inbound Sales)",
    shortTitle: "Family Care Counsellor",
    category: "Corporate",
    shortDek:
      "Talk to anxious families calling Care Givers. Help them choose. Convert with empathy, not pressure.",
    tagline:
      "If the words ‘consultative sales’ describe how you naturally work, this is the seat for you.",
    intro: [
      "Most of our customers find us through search, a journal post, a hospital referral, or a friend. They WhatsApp, they call, they fill out the booking flow halfway. Every one of those moments is someone in distress — a stroke yesterday, a mother who fell this morning, a father who's been declining for months and the family finally said yes.",
      "The Family Care Counsellor is the human who picks up. You spend the call listening first, then explaining what we offer, then helping the family decide between hourly, day-shift, live-in and specialist care. You quote pricing transparently. You convert to a confirmed booking only when the fit is real.",
      "It is sales. It is also, on the best days, the most useful 20-minute conversation that family has had all week. Pay is base plus variable, but the people who thrive in this role aren't here for the commission — they're here because every closed deal is a family that gets to sleep tonight.",
    ],
    responsibilities: [
      "Pick up every inbound family call within the ringing SLA",
      "Reply to every booking-form lead, WhatsApp enquiry and email within 30 minutes during business hours",
      "Listen first — what is the actual situation, who is the patient, what is urgent",
      "Recommend the right service plan honestly (sometimes that means recommending less, not more)",
      "Quote pricing transparently; explain what's included and what's not",
      "Coordinate the first match call with the Care Manager when the family is ready to commit",
      "Schedule and conduct discovery calls for higher-touch enquiries (NRI families, complex cases)",
      "Send a follow-up summary on WhatsApp within 30 minutes of every call",
      "Maintain meticulous CRM records — every lead, every conversation, every objection",
      "Identify common objections and feed insights back to Marketing and Content",
      "Track personal conversion rate, response time, and lead quality every week",
      "Handle the occasional escalation from a confused or anxious family with patience",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Review yesterday's open leads, today's callback list, urgent overnight enquiries" },
      { time: "9:30 AM", activity: "Call back the four leads who filled the form last night" },
      { time: "11:00 AM", activity: "Inbound call — daughter in San Francisco, mother in Indiranagar, urgent live-in needed" },
      { time: "11:45 AM", activity: "Loop in the Care Manager, draft the proposal in CRM" },
      { time: "12:30 PM", activity: "Lunch + admin — update CRM notes, file calls" },
      { time: "1:30 PM", activity: "Discovery call with a Whitefield family considering dementia care" },
      { time: "3:00 PM", activity: "Process WhatsApp enquiries that came in over lunch" },
      { time: "4:30 PM", activity: "Send today's follow-up summaries to families on WhatsApp" },
      { time: "5:30 PM", activity: "Weekly conversion-rate review with Sales Lead" },
    ],
    requirements: {
      mustHave: [
        "3+ years inbound sales, customer success, or consultative selling",
        "Polished English + fluent Kannada or Hindi",
        "Empathetic, non-pushy temperament — references should describe you as ‘patient’",
        "CRM discipline (HubSpot, Salesforce, Zoho or similar)",
        "Comfort quoting prices and handling money conversations",
        "Composure on emotionally heavy calls",
        "Strong written communication for WhatsApp follow-ups",
      ],
      niceToHave: [
        "Prior healthcare, eldercare, or home-services sales",
        "Experience selling to NRI customers",
        "Tamil or Telugu fluency",
        "Background in nursing or social work",
        "Comfort with light data analysis on CRM dashboards",
      ],
    },
    whatWeProvide: [
      "CRM, multi-line phone setup, and a quiet workspace at our Indiranagar office",
      "Trained Care Manager support for clinical questions",
      "Marketing brings warm leads — you don't cold-call",
      "Quarterly sales training (consultative selling, objection handling, NRI conversations)",
      "Transparent pricing and an honest service — no scripts you'll have to lie around",
      "Stock options after 1 year",
    ],
    compensation: {
      base: "₹35,000 – ₹65,000 + variable",
      period: "month",
      benefits: [
        "Variable compensation tied to closed bookings (₹2,000–5,000 per placement)",
        "Stock options after 1 year",
        "Group medical insurance (family floater)",
        "Annual leave (20 days)",
        "Quarterly off-sites with the sales team",
        "Conference + training budget ₹30,000/year",
      ],
      growth:
        "Senior Counsellor (₹60k–1L base + variable) in 18 months. Sales Lead or Head of Family Acquisition track from there.",
    },
    careerPath: [
      {
        step: "Family Care Counsellor",
        timeline: "Year 1",
        detail: "Master the conversation. Hit consistent conversion benchmarks. Become the family's trusted first call.",
      },
      {
        step: "Senior Counsellor / Team Lead",
        timeline: "Year 1–2",
        detail: "Take complex enquiries (NRI, multi-service families), mentor newer counsellors, run weekly sales reviews.",
      },
      {
        step: "Sales Lead / Head of Family Acquisition",
        timeline: "Year 2+",
        detail: "Own the entire family acquisition funnel — team management, ops, and revenue ownership.",
      },
    ],
    team: "Reports to the Founder for now. Works closely with Care Managers (clinical handover) and Marketing (lead quality feedback).",
    location: "Care Givers office, Indiranagar.",
    shift: "Daytime — 9 AM to 7 PM, 6 days/week. One weekday off, Sundays off.",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 3,
    applyMode: "email",
    faqs: [
      {
        q: "Will I have to cold-call?",
        a: "No. We invest heavily in inbound — every lead has actively reached out to us. Your job is to convert warm intent, not generate it.",
      },
      {
        q: "How does the variable work?",
        a: "₹2,000–5,000 per successfully placed booking, depending on plan type. Live-in placements pay highest. A strong year is ₹4–7L in variable on top of base.",
      },
      {
        q: "Will I have to pressure families to upgrade?",
        a: "Never. We've fired people for this. We sell what fits, not what bills the most.",
      },
      {
        q: "What if the family wants something we can't deliver?",
        a: "You say so. We've turned away bookings we couldn't fulfil well. Honest pipeline is the foundation of the role.",
      },
    ],
    seoTitle: "Family Care Counsellor (Sales) Jobs Bangalore | Inbound Sales at Care Givers",
    seoDescription:
      "Inbound family sales role at Care Givers Bangalore. Talk to families, help them choose the right caregiver. ₹35–65k base + variable. Consultative, non-pushy environment.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 12. Digital Marketing Strategist ─────────────────────────── */
  {
    slug: "digital-marketing-strategist",
    title: "Digital Marketing Strategist",
    shortTitle: "Digital Marketing Strategist",
    category: "Corporate",
    shortDek:
      "Own paid acquisition, SEO performance, email and the analytics that tell us what's working.",
    tagline:
      "Build the growth engine for one of the most ranked-for caregiving sites in India.",
    intro: [
      "Care Givers has invested deeply in content — over 60 well-ranked pages already, eight pillar journal posts, comprehensive schema, a working AEO surface. The Digital Marketing Strategist takes that foundation and builds the growth engine around it: paid acquisition that scales, SEO that compounds, email and lifecycle that retains, analytics that tell the truth.",
      "Your day is split between strategy and execution. Strategy: where does the next 1,000 customers come from? Execution: launch the Google Ads campaign on Monday, ship the new landing page A/B test on Wednesday, analyse the funnel drop-off on Friday.",
      "If you've grown a healthcare brand from a few hundred monthly bookings to a few thousand, or run paid at an Indian D2C with intent-driven search behaviour, this is built for you. You'll work alongside the Content & Brand Lead — they own the editorial voice and SEO content; you own the performance side, paid, and the analytics that connect both to revenue.",
    ],
    responsibilities: [
      "Plan and run paid acquisition across Google Ads, Meta and YouTube",
      "Set and manage the monthly performance budget (currently ₹4–6L/month, scaling)",
      "Manage SEO performance tracking — rankings, CTR, page experience, technical health",
      "Own the analytics stack — GA4, Search Console, Looker Studio dashboards",
      "Build and run lifecycle email campaigns (newsletter, post-booking, re-engagement)",
      "Run continuous landing-page A/B tests on top-converting pages",
      "Build retargeting and audience strategies (Meta CAPI, Google Customer Match)",
      "Coordinate with Content & Brand on SEO keyword priorities and content gaps",
      "Coordinate with Family Care Counsellor team on lead quality feedback loops",
      "Monthly performance review with founder — channels, CAC, payback, retention",
      "Maintain the marketing tech stack (analytics, CDP, email, attribution)",
      "Identify and pilot new channels — affiliates, WhatsApp marketing, partnerships",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Check overnight performance — yesterday's spend, CPL, bookings, anomalies" },
      { time: "10:00 AM", activity: "Adjust Google Ads bids and pause underperforming keywords" },
      { time: "11:30 AM", activity: "Working session with Content Lead on next month's SEO content roadmap" },
      { time: "1:00 PM", activity: "Lunch + Looker Studio dashboard refresh" },
      { time: "2:00 PM", activity: "Launch new A/B test on the cost-calculator landing page" },
      { time: "3:30 PM", activity: "Review the lifecycle email sequence drafts" },
      { time: "5:00 PM", activity: "Weekly performance sync with founder and Family Care Counsellor team" },
    ],
    requirements: {
      mustHave: [
        "4+ years digital marketing / growth at a D2C, healthcare, or consumer-services brand",
        "Hands-on Google Ads + Meta Ads experience (not just managed by an agency)",
        "Strong GA4 and Search Console proficiency",
        "Demonstrated SEO performance work (rankings → traffic → conversions)",
        "Comfort with A/B testing tools (VWO, Optimizely, Posthog, or similar)",
        "Email lifecycle experience (HubSpot, Mailchimp, Customer.io, or similar)",
        "Strong commercial instinct — every metric tied to revenue and unit economics",
      ],
      niceToHave: [
        "Healthcare, eldercare or fertility/wellness vertical experience",
        "Indian local-language marketing (Kannada, Tamil, Hindi)",
        "WhatsApp Business API marketing",
        "Hands-on SQL or BigQuery comfort",
        "Existing relationships with Indian DSPs or affiliates",
      ],
    },
    whatWeProvide: [
      "Real budget authority — ₹4–6L/month performance budget, growing to ₹15L+ within a year",
      "Modern stack — GA4, Search Console, Meta CAPI, server-side tracking, Looker Studio",
      "Direct line to founder for fast experimentation decisions",
      "Strong content foundation already built — you don't start from zero",
      "Equity / stock options",
      "Hybrid work (2 office days)",
      "Conference and training budget (Brighton SEO, Mozcon, Optimizely Opticon)",
    ],
    compensation: {
      base: "₹70,000 – ₹1,30,000",
      period: "month",
      benefits: [
        "Hybrid work (2 office days, 3 remote)",
        "Stock options (cliff after 1 year)",
        "Conference + training budget ₹50,000/year",
        "Group medical insurance (family floater)",
        "Annual leave (24 days)",
        "Annual performance bonus 1–2 months",
        "Modern hardware (Mac + display)",
      ],
      growth:
        "Head of Growth (₹1.5–2.5L/month + equity) after 18–24 months. Path to VP Marketing as the business scales.",
    },
    careerPath: [
      {
        step: "Digital Marketing Strategist",
        timeline: "Year 1",
        detail: "Build the growth engine. Set up reliable analytics, performance channels, lifecycle.",
      },
      {
        step: "Head of Growth",
        timeline: "Year 1–2",
        detail: "Build a small team. Add new channels — affiliates, WhatsApp, partnerships.",
      },
      {
        step: "VP Marketing",
        timeline: "Year 3+",
        detail: "Own all of growth + brand + retention at scale.",
      },
    ],
    team: "Reports to the Founder. Peer with the Content & Brand Lead. Manages an agency partner today; will hire one direct report in year one.",
    location: "Hybrid — 2 days at the Indiranagar office, 3 days remote.",
    shift: "Daytime — flexible, results-based. Weekends off unless launching a campaign.",
    experienceLevel: "Senior",
    employmentType: "Full-time",
    openings: 1,
    applyMode: "email",
    faqs: [
      {
        q: "Do I own the budget or just propose it?",
        a: "You own it within agreed monthly caps. Founder approves quarterly increases based on CAC and payback.",
      },
      {
        q: "Is there an agency I'll be replacing?",
        a: "We use a small performance-marketing agency today. You'll decide whether to keep them as execution support, bring it fully in-house, or change vendors.",
      },
      {
        q: "Will I have to write the ads myself?",
        a: "You'll brief Content & Brand on copy. You'll likely own iteration and short-form ad copy yourself.",
      },
      {
        q: "How is success measured?",
        a: "Blended CAC, payback period (month), booking volume by channel, and SEO + paid contribution to revenue. We share the dashboard.",
      },
    ],
    seoTitle: "Digital Marketing Strategist Jobs Bangalore | Growth at Care Givers",
    seoDescription:
      "Digital Marketing Strategist role at Care Givers Bangalore. Own paid acquisition, SEO performance and analytics. ₹70k–1.3L/month + equity. Hybrid.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 13. Technical Content Writer ─────────────────────────── */
  {
    slug: "technical-content-writer",
    title: "Technical Content Writer",
    shortTitle: "Technical Content Writer",
    category: "Corporate",
    shortDek:
      "Write the clinical, condition-specific and how-to content that powers our most useful pages.",
    tagline:
      "If you can translate ‘pressure-area care’ into a paragraph a worried daughter can act on, families need you.",
    intro: [
      "The Technical Content Writer covers a specific lane: clinical and condition-specific writing. While the Content & Brand Lead owns voice and editorial strategy, you produce the depth — illness guides, recovery checklists, condition explainers, caregiver training material, internal SOP documents.",
      "Your work has to be medically accurate enough to pass a nurse's review and emotionally clear enough that a non-clinical family member reading at 11 PM can act on it. Most healthcare content fails one or the other. Doing both well is the entire job.",
      "Two-thirds of your output is family-facing (long guides, condition pages, post-discharge checklists). One-third is internal (training manuals, caregiver SOPs, supervisor scripts). You'll work closely with our consulting clinical nurse for review and with the Caregiver Trainer to surface what the curriculum is missing.",
    ],
    responsibilities: [
      "Write 2 long-form clinical guides per month (1,500–2,500 words each)",
      "Refresh and expand existing service detail pages quarterly",
      "Produce condition-specific content (stroke recovery, Parkinson's home care, post-op cardiac, etc.)",
      "Build downloadable checklists and PDFs for families",
      "Maintain caregiver training manuals and supervisor scripts",
      "Coordinate clinical review with the consulting nurse on every clinical piece",
      "Use primary sources (PubMed, WHO, ICMR) — cite responsibly",
      "Maintain a glossary of caregiving terms for SEO and AEO surfaces",
      "Internal docs — SOPs for Care Managers, escalation cards for placements",
      "Collaborate with Content & Brand on long-form journal pieces",
      "Maintain the version history of clinical content (every claim dated and reviewed)",
      "Localise key content into Kannada and Tamil with translation partners",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Editorial planning — pick up where yesterday's draft left off" },
      { time: "9:30 AM", activity: "Deep work — draft the week's clinical guide" },
      { time: "12:00 PM", activity: "Quick research call with the consulting nurse on a Parkinson's question" },
      { time: "1:00 PM", activity: "Lunch + light reading (latest geriatric care research)" },
      { time: "2:00 PM", activity: "Edit yesterday's caregiver-training module draft" },
      { time: "3:30 PM", activity: "Pair with Caregiver Trainer on what the curriculum needs more of" },
      { time: "4:30 PM", activity: "Review nurse's redlines on the dementia guide; publish final" },
    ],
    requirements: {
      mustHave: [
        "2+ years technical or healthcare content writing experience",
        "Portfolio of clinical/medical writing for a lay audience",
        "Ability to read and translate primary research (peer-reviewed studies) into plain English",
        "Strong editing instinct — you'll edit your own work daily",
        "Comfort with Markdown, version control (Git), or similar workflows",
        "Familiarity with SEO principles (you'll write H2-friendly, scan-friendly copy)",
      ],
      niceToHave: [
        "Nursing or allied-health degree (BSc Nursing, B Pharm, BPT)",
        "Prior experience at Practo, Lybrate, mfine, Cleartrip Health, or similar",
        "Comfort writing in Indian English while avoiding jargon",
        "Experience writing for AI search / AEO (TL;DR blocks, FAQ schema)",
        "Kannada or Tamil writing ability",
      ],
    },
    whatWeProvide: [
      "Direct access to our consulting clinical nurse for fact-checking",
      "Reference library — paid subscriptions to UpToDate, JAMA, BMJ access where useful",
      "Clear scope — your content gets clinical review, then ships",
      "Hybrid work",
      "Annual book + conference budget",
      "Stock options after 1 year",
      "Stable salaried role with clear growth into Senior Writer or Editor",
    ],
    compensation: {
      base: "₹45,000 – ₹80,000",
      period: "month",
      benefits: [
        "Hybrid work (2 office days, 3 remote)",
        "Conference + book budget ₹35,000/year",
        "Stock options (cliff after 1 year)",
        "Group medical insurance (family floater)",
        "Annual leave (22 days)",
        "Festival bonus",
        "Modern hardware (laptop + display)",
      ],
      growth:
        "Senior Technical Writer (₹80k–1.2L/month) in 18 months. Editor or Head of Clinical Content path opens with the team.",
    },
    careerPath: [
      {
        step: "Technical Content Writer",
        timeline: "Year 1",
        detail: "Establish a steady output of clinically-reviewed long-form content.",
      },
      {
        step: "Senior Technical Writer",
        timeline: "Year 1–2",
        detail: "Lead the clinical content vertical — condition pillar pages, training manuals.",
      },
      {
        step: "Editor / Head of Clinical Content",
        timeline: "Year 2+",
        detail: "Manage external clinical writers and own the editorial review process.",
      },
    ],
    team: "Reports to the Content & Brand Lead. Works closely with the consulting clinical nurse and the Caregiver Trainer.",
    location: "Hybrid — 2 days in Indiranagar office, 3 days remote.",
    shift: "Daytime — flexible, results-based. Weekends off.",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 1,
    applyMode: "email",
    faqs: [
      {
        q: "Do I need a clinical degree?",
        a: "Not strictly. A demonstrated portfolio of accurate clinical writing for a lay audience matters more. Nursing/B Pharm/BPT is a nice-to-have.",
      },
      {
        q: "Will my work be reviewed by a nurse?",
        a: "Yes — every clinical piece goes through nurse review before publishing. The review is generally fast (24–48 hours) and editorial.",
      },
      {
        q: "Is this AI-assisted writing?",
        a: "We use AI tools for research and outlining. The writing itself is human — that's the entire premise of the role. We do not publish AI-generated drafts.",
      },
      {
        q: "Can I write under my own byline?",
        a: "Yes. We're moving toward named bylines on all clinical content as part of E-E-A-T.",
      },
    ],
    seoTitle: "Technical Content Writer Jobs Bangalore | Healthcare Content at Care Givers",
    seoDescription:
      "Technical content writer role at Care Givers Bangalore. Clinical writing for families, training manuals, SOPs. ₹45–80k/month + equity. Hybrid.",
    postedAt: today,
    validThrough: expiry,
  },

  /* ─────────────────────────── 14. Vendor / Partner Onboarding Specialist ─────────────────────────── */
  {
    slug: "vendor-partner-onboarding-specialist",
    title: "Vendor & Partner Onboarding Specialist",
    shortTitle: "Vendor Onboarding",
    category: "Operations",
    shortDek:
      "Sign up and integrate the ambulance, physio, equipment and clinic partners that round out our service.",
    tagline:
      "Care Givers can't do it all alone. Your job is to make sure the people who help us are reliable, vetted and ready.",
    intro: [
      "Care Givers placements often need more than just a caregiver. An ambulance to bring the patient home from hospital. A physiotherapist to visit twice a week. An air mattress on rent for a bedridden patient. An ECG machine for a cardiac case. A pharmacy that delivers same-day.",
      "The Vendor Onboarding Specialist builds and maintains the network of partners that fills these needs. You source candidates, run them through our verification and quality check, sign them up on commercial terms, train their teams on our SLAs, and review their performance monthly. Where they fail, you replace them. Where they succeed, you expand the relationship.",
      "It's an operations-meets-business-development role. You'll be on calls and visits with vendors for a third of the week, and the rest in process and metric work — onboarding documentation, SLA tracking, partner scorecards.",
    ],
    responsibilities: [
      "Source vendors across categories: ambulance, physiotherapy, equipment rental, pharmacy, lab pickup, geriatricians",
      "Run vendor verification: company registration, GST, insurance, references, on-site visit",
      "Negotiate commercial terms — pricing, SLAs, exclusivity, billing cadence",
      "Onboard partner teams on our process — escalation card, response SLAs, billing",
      "Maintain the partner directory and route requests to the right vendor",
      "Track partner performance against SLA every week",
      "Run monthly partner reviews — top performers get more volume; under-performers get warnings",
      "Handle vendor escalations and family complaints involving vendors",
      "Maintain commercial paperwork — agreements, renewals, indemnities",
      "Identify gaps in the partner network and proactively source",
      "Negotiate volume discounts as we grow",
      "Document the entire vendor lifecycle in our operations playbook",
    ],
    dayInLife: [
      { time: "9:00 AM", activity: "Vendor scorecard review — who's at risk, who's promoted this week" },
      { time: "10:00 AM", activity: "Site visit — interview a candidate ambulance partner in Bommanahalli" },
      { time: "12:00 PM", activity: "Travel + lunch" },
      { time: "1:30 PM", activity: "Onboarding session — train a new physiotherapy partner's team on our SLA" },
      { time: "3:00 PM", activity: "Negotiate renewal terms with our largest equipment rental partner" },
      { time: "4:30 PM", activity: "Process the week's billing reconciliation across all vendors" },
      { time: "5:30 PM", activity: "Update the operations playbook and partner directory" },
    ],
    requirements: {
      mustHave: [
        "2+ years vendor management, partnership operations, or B2B account management",
        "Comfort with commercial negotiation and contract paperwork",
        "Spoken Kannada + Hindi + English (most vendors are Kannada-first businesses)",
        "Two-wheeler for vendor site visits",
        "Process discipline — clean documentation, contract version control, SLA tracking",
        "Polished judgement — you're the company's face to many small businesses",
        "Comfort using spreadsheets and basic CRM",
      ],
      niceToHave: [
        "Prior experience in hospital procurement, hospitality vendor management, or aggregator (Urban Company, Practo) operations",
        "Healthcare vendor network in Bangalore",
        "Comfort reading basic financial documents (vendor balance sheets, GST returns)",
        "Familiarity with NABH or hospital quality standards",
      ],
    },
    whatWeProvide: [
      "Authority to sign vendor agreements up to defined thresholds",
      "Travel + fuel allowance for site visits",
      "Smartphone with company data plan",
      "Clean ops tooling — CRM, contract templates, SLA dashboards",
      "Quarterly off-sites with the operations team",
      "Direct relationship with Founder for top-tier partner decisions",
      "Real career path into Operations Head or Head of Partnerships",
    ],
    compensation: {
      base: "₹40,000 – ₹65,000",
      period: "month",
      benefits: [
        "Travel + fuel allowance ₹4,000/month",
        "Smartphone + data plan",
        "Group medical insurance (family floater)",
        "Annual leave (20 days)",
        "Festival bonus + annual performance bonus",
        "Quarterly off-sites",
      ],
      growth:
        "Head of Vendor Network or Partnership Ops Lead (₹70k–1.2L/month) after 2 years. Path into broader Operations leadership.",
    },
    careerPath: [
      {
        step: "Vendor & Partner Onboarding Specialist",
        timeline: "Year 1",
        detail: "Build the initial vendor network across categories. Tighten SLA discipline.",
      },
      {
        step: "Senior Vendor Operations Lead",
        timeline: "Year 1–2",
        detail: "Own the entire vendor lifecycle. Hire and manage two onboarding specialists.",
      },
      {
        step: "Head of Operations / Head of Partnerships",
        timeline: "Year 2+",
        detail: "Cross-functional ops leadership across vendors, hospitals, and field operations.",
      },
    ],
    team: "Reports to the Operations Head. Works closely with Care Managers (vendor dispatch), Hospital Partnerships (referral overlap) and Finance (vendor billing).",
    location: "Bangalore-wide — heavy intra-city travel for vendor site visits.",
    shift: "Daytime — 9 AM to 6 PM, 6 days/week. Sundays off.",
    experienceLevel: "Mid",
    employmentType: "Full-time",
    openings: 1,
    applyMode: "email",
    faqs: [
      {
        q: "Will I have to do cold outreach?",
        a: "Some — vendor sourcing involves cold calls and walk-ins. Most vendors prefer a face-to-face first meeting. We provide structured pitch material.",
      },
      {
        q: "How much paperwork is in this role?",
        a: "A meaningful share. Vendor agreements, GST validation, insurance documentation, monthly billing reconciliation. The role rewards process discipline.",
      },
      {
        q: "Will I have hiring authority over vendors?",
        a: "Yes, up to defined commercial thresholds. Above those thresholds it's a joint decision with the Operations Head or Founder.",
      },
      {
        q: "Is this an in-office or field role?",
        a: "Roughly a 60/40 split — 60% field (vendor visits, partner trainings), 40% office (paperwork, reviews, billing).",
      },
    ],
    seoTitle: "Vendor & Partner Onboarding Jobs Bangalore | Operations at Care Givers",
    seoDescription:
      "Vendor Onboarding Specialist at Care Givers Bangalore. Source and manage ambulance, physio and equipment partners. ₹40–65k/month.",
    postedAt: today,
    validThrough: expiry,
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug);
}

export const jobCategories: JobCategory[] = [
  "Field Caregiver",
  "Specialist",
  "Operations",
  "Corporate",
];

export const categoryDescriptions: Record<JobCategory, string> = {
  "Field Caregiver":
    "The people who go to homes — elder care, patient care, live-in caregivers.",
  Specialist: "Trained for specific conditions — dementia, bedridden, home nursing.",
  Operations:
    "Supervisors, central dispatch, trainers — the engine that keeps care running.",
  Corporate: "Growth, partnerships, brand and product roles at the office.",
};
