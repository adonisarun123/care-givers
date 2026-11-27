import type { Service } from "@/lib/services";

/**
 * Clinical and condition-specific services delivered by registered nurses and
 * physiotherapists. Prices are quoted after a free assessment call, so every
 * entry uses ASSESSMENT_PRICING until real rate cards are added.
 *
 * Content rule: describe what our staff do under the family's own doctor.
 * Never promise outcomes, never imply we replace a hospital or an ambulance.
 */

const ASSESSMENT_NOTE = "Quoted after a free assessment call";

export const clinicalServices: Service[] = [
  /* ───────────────────────────── Home nursing ───────────────────────────── */
  {
    slug: "home-nursing",
    name: "Home Nursing",
    short: "Registered nurses for clinical care at home",
    emotional:
      "Hospital-level attention to the small clinical things, without the hospital.",
    hero:
      "Registered nurses in Bangalore for injections, wound care, catheter and tube care, and round-the-clock nursing at home.",
    intro: [
      "Some care can’t be handled by an attendant: an IV line that needs watching, a wound that needs dressing every day, a catheter, a feeding tube, injections on a schedule. That’s when families find themselves choosing between another week in hospital and an anxious week at home.",
      "Our home nurses are qualified, registered nurses who carry out the clinical tasks your parent’s doctor has prescribed, in your home and on a schedule that suits you. They can come for a single procedure, a few visits a week, a 12-hour shift, or stay round the clock when the need is serious.",
      "Every nurse works to the treating doctor’s instructions. If something looks wrong — a fever, a change in breathing, a wound that isn’t healing — they tell the family and the doctor straight away rather than guessing.",
    ],
    description:
      "Qualified, registered nurses for prescribed clinical tasks at home: injections and IV care, wound dressing, catheter and feeding-tube care, vitals monitoring and medication administration, by visit, by shift or 24×7.",
    duration: "Single visit, 12-hour shift or 24×7",
    whoFor: [
      "Patients discharged from hospital who still need clinical care",
      "Anyone on IV medication, injections or tube feeding at home",
      "Patients with surgical or pressure wounds that need daily dressing",
      "Families who want a nurse overnight for peace of mind",
    ],
    conditions: [
      { title: "After hospital discharge", detail: "Continuing the care plan the hospital prescribed, from medication to dressings." },
      { title: "Wounds and bedsores", detail: "Regular dressing, cleaning and monitoring for signs of infection, as advised by the doctor." },
      { title: "Catheter and tube care", detail: "Urinary catheter care, Ryle’s tube (RT) feeding and PEG care, with hygiene to reduce infection risk." },
      { title: "IV and injections", detail: "Prescribed IV fluids, antibiotics and injections given on schedule, with the line monitored." },
      { title: "Chronic illness", detail: "Diabetes, heart and kidney conditions where vitals and medication need close watching." },
    ],
    whatsIncluded: [
      "Injections and IV administration as prescribed",
      "IV line and cannula monitoring",
      "Wound and bedsore dressing",
      "Urinary catheter care",
      "Ryle’s tube and PEG feeding",
      "Tracheostomy and suction care where trained and prescribed",
      "Vitals: BP, pulse, temperature, oxygen saturation, blood sugar",
      "Medication administration and a written medication chart",
      "Observation notes shared with the family and doctor",
      "Escalation to the doctor if anything changes",
    ],
    notIncluded: [
      "Prescribing or changing medication — only the treating doctor does this",
      "Emergency response — in an emergency, call 108 or your hospital",
      "Procedures that must be done in a hospital or clinic",
      "Household chores beyond the patient’s immediate needs",
    ],
    careTimeline: {
      title: "A typical nursing visit",
      items: [
        { time: "On arrival", label: "Check-in with the family", detail: "What has changed since the last visit, any concerns overnight." },
        { time: "First 10 minutes", label: "Vitals and observation", detail: "BP, pulse, temperature, oxygen, sugar if needed." },
        { time: "Main visit", label: "Prescribed procedure", detail: "Injection, IV, dressing, catheter or tube care." },
        { time: "Before leaving", label: "Notes and next steps", detail: "Written notes for the family; doctor informed of anything unusual." },
      ],
    },
    caregiverProfile: {
      trainingHours: "GNM or B.Sc Nursing qualification",
      focus: "Clinical procedures, infection control, vitals monitoring, medication administration.",
      supervision: "Nursing supervisor available by phone; the treating doctor directs the care plan.",
      certifications: ["Registered nurse", "Police verified", "Aadhaar verified", "References checked"],
    },
    matchingNotes:
      "We match nurses to the clinical tasks first: a family needing tracheostomy care gets a nurse experienced in it. After that, we match by language, gender preference and the hours you need. For 24×7 nursing we arrange two nurses on 12-hour shifts.",
    pricing: [
      { label: "Single nursing visit", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "12-hour nursing shift", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "24×7 nursing", price: "After assessment", note: ASSESSMENT_NOTE },
    ],
    faqs: [
      { q: "Is the nurse qualified and registered?", a: "Yes. Our home nurses hold a GNM or B.Sc Nursing qualification. We verify their qualifications, identity and references before placement." },
      { q: "Do you need a doctor’s prescription?", a: "For clinical procedures such as injections, IV fluids or wound care, yes. The nurse follows the treating doctor’s written instructions and does not prescribe or change medication." },
      { q: "Can a nurse come just for one injection or dressing?", a: "Yes. Single visits are available for procedures like injections, dressings or catheter changes, subject to nurse availability in your area." },
      { q: "What’s the difference between a nurse and a patient attendant?", a: "A nurse carries out clinical tasks — injections, IV, wound and tube care. An attendant helps with daily living: bathing, feeding, mobility and company. Many families use both." },
      { q: "What happens in an emergency?", a: "The nurse will call 108 or your hospital and inform the family immediately. Home nursing is not an emergency service." },
      { q: "How is pricing decided?", a: "It depends on the procedures involved and the hours. After a short free call we send a written quote before anything is booked." },
    ],
    seoTitle: "Home Nursing in Bangalore | Registered Nurses at Home, 24×7",
    seoDescription:
      "Registered home nurses in Bangalore for injections, IV, wound dressing, catheter and tube care. Single visits, 12-hour shifts or 24×7. Free assessment call.",
    icon: "nursing",
  },

  /* ───────────────────────── Physiotherapy at home ───────────────────────── */
  {
    slug: "physiotherapy-at-home",
    name: "Physiotherapy at Home",
    short: "Qualified physiotherapists who come to you",
    emotional: "Getting stronger is easier in your own home, at your own pace.",
    hero:
      "Home physiotherapy in Bangalore for older adults, recovery after surgery or stroke, and balance and mobility.",
    intro: [
      "Getting an older parent to a physiotherapy clinic three times a week is hard: the traffic, the stairs, the waiting room. Often the sessions simply stop, and so does the progress.",
      "Our physiotherapists come home instead. They assess what your parent can do today, agree goals with you and the doctor, and build a programme around the home they actually live in: the bed, the bathroom, the stairs.",
      "This includes geriatric physiotherapy for age-related weakness, balance exercise therapy for people who have fallen or are afraid of falling, and rehabilitation after surgery, fractures or a stroke.",
    ],
    description:
      "Home visits by qualified physiotherapists: an initial assessment, a personalised exercise programme, and regular sessions for strength, balance, mobility and recovery.",
    duration: "45–60 minute sessions, usually 3 to 6 a week",
    whoFor: [
      "Older adults losing strength or confidence on their feet",
      "Anyone who has had a fall, or is at risk of one",
      "Patients recovering from joint replacement, fractures or spine surgery",
      "Stroke and Parkinson’s patients working on movement",
    ],
    conditions: [
      { title: "Geriatric physiotherapy", detail: "Strength, flexibility and endurance work for age-related decline." },
      { title: "Balance exercise therapy", detail: "Exercises and home changes to reduce the risk of falls." },
      { title: "After knee or hip replacement", detail: "Range of motion, walking training and strengthening as advised by the surgeon." },
      { title: "After fractures and spine surgery", detail: "Safe, gradual return to movement and daily activities." },
      { title: "Neurological rehabilitation", detail: "Movement, posture and walking for stroke and Parkinson’s." },
      { title: "Back, neck and joint pain", detail: "Exercise programmes for chronic pain that limits daily life." },
    ],
    whatsIncluded: [
      "Initial assessment of strength, balance and mobility",
      "Goals agreed with the family and the treating doctor",
      "A personalised home exercise programme",
      "Balance and fall-prevention training",
      "Walking and transfer training: bed, chair, toilet, stairs",
      "Advice on walking aids and simple home changes",
      "Exercises the family or caregiver can help with between sessions",
      "Progress reviewed and shared regularly",
    ],
    notIncluded: [
      "Equipment-heavy treatments that need a clinic",
      "Diagnosis — the physiotherapist works from the doctor’s diagnosis",
      "Guaranteed outcomes; progress depends on the condition and consistency",
    ],
    careTimeline: {
      title: "A typical home session",
      items: [
        { time: "5 min", label: "Check-in", detail: "Pain, sleep, any falls or changes since last time." },
        { time: "10 min", label: "Warm-up and mobility" },
        { time: "25 min", label: "Main exercises", detail: "Strength, balance or walking work for the agreed goals." },
        { time: "10 min", label: "Practice in the home", detail: "Getting up from bed, using the bathroom, stairs." },
        { time: "5 min", label: "Homework", detail: "Two or three exercises to repeat before the next visit." },
      ],
    },
    caregiverProfile: {
      trainingHours: "BPT or MPT qualification",
      focus: "Geriatric, orthopaedic and neurological physiotherapy; fall prevention.",
      supervision: "Programme reviewed against goals agreed with the family and doctor.",
      certifications: ["Qualified physiotherapist", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "We match the physiotherapist to the need: a geriatric specialist for balance and strength, an orthopaedic focus after joint replacement, neurological experience after a stroke. We also try to keep the same physiotherapist throughout, because trust matters in rehab.",
    pricing: [
      { label: "Assessment visit", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "Home session", price: "After assessment", note: "Packages of 10–20 sessions available" },
    ],
    faqs: [
      { q: "Is the physiotherapist qualified?", a: "Yes. Our physiotherapists hold a BPT or MPT degree, and we verify qualifications and identity before placement." },
      { q: "Do we need any equipment at home?", a: "Usually not. Most sessions use a bed, a chair and simple aids. If something like a walker or resistance band would help, the physiotherapist will suggest it." },
      { q: "How many sessions will my parent need?", a: "It depends on the condition and goals. After the first assessment, the physiotherapist will suggest a plan and how often to review it." },
      { q: "Can an attendant help with exercises between sessions?", a: "Yes. If you also have one of our caregivers, the physiotherapist can show them which exercises to support safely." },
      { q: "Can you help after a knee or hip replacement?", a: "Yes. Home physiotherapy after joint replacement is common, following the surgeon’s instructions on what movements are safe." },
      { q: "How is pricing decided?", a: "After a short free call we suggest a plan and send a written quote for a single session or a package." },
    ],
    seoTitle: "Physiotherapy at Home in Bangalore | Geriatric & Balance Therapy",
    seoDescription:
      "Qualified physiotherapists at home in Bangalore. Geriatric physiotherapy, balance exercise therapy, rehab after surgery and stroke. Free assessment call.",
    icon: "physio",
  },

  /* ───────────────────────────── Palliative care ───────────────────────────── */
  {
    slug: "palliative-care",
    name: "Palliative Care at Home",
    short: "Comfort, dignity and support for the whole family",
    emotional: "When the focus turns to comfort, we help you keep them comfortable at home.",
    hero:
      "Palliative and end-of-life care at home in Bangalore: nurses and caregivers focused on comfort, dignity and family support.",
    intro: [
      "When an illness can no longer be cured, the questions change. How do we keep them comfortable? How do we manage the pain at night? How do we look after them and still look after ourselves?",
      "Palliative care at home brings together a nurse and a caregiver who understand that the goal is comfort and dignity. They follow the palliative care plan set by your parent’s doctor, notice discomfort early, and make sure the person is never alone when they don’t want to be.",
      "We also look after the family: explaining what to expect, giving you time to rest, and being a calm presence on the hardest days.",
    ],
    description:
      "Comfort-focused care at home for people with serious or life-limiting illness, following the doctor’s palliative care plan, with nursing and caregiver support for the patient and the family.",
    duration: "12-hour shifts or 24×7",
    whoFor: [
      "People with advanced cancer, heart, lung, kidney or neurological illness",
      "Families who want their loved one cared for at home",
      "Patients discharged from hospital for comfort care",
      "Families who need rest and support during a long illness",
    ],
    conditions: [
      { title: "Advanced cancer", detail: "Comfort care, symptom monitoring and support alongside the oncologist’s plan." },
      { title: "End-stage organ disease", detail: "Heart, lung, kidney or liver conditions in their later stages." },
      { title: "Advanced neurological illness", detail: "Late-stage dementia, Parkinson’s, motor neurone disease." },
      { title: "End-of-life care", detail: "Gentle, round-the-clock presence in the final weeks and days." },
    ],
    whatsIncluded: [
      "Comfort care: positioning, mouth care, skin care, hygiene",
      "Giving prescribed pain and symptom medication on schedule",
      "Watching for pain, breathlessness, restlessness and changes",
      "Bedsore prevention and care",
      "Feeding support as tolerated, including tube feeding",
      "Keeping the doctor informed of changes",
      "Emotional support and company for the patient",
      "Respite so family members can rest",
    ],
    notIncluded: [
      "Prescribing or changing pain medication — the doctor decides this",
      "Emergency hospital transfer — call 108 or your hospital",
      "Medical decisions on behalf of the family",
    ],
    careTimeline: {
      title: "A typical 12-hour shift",
      items: [
        { time: "Handover", label: "Update from the family or previous shift", detail: "How the night went, any new symptoms." },
        { time: "Morning", label: "Comfort care", detail: "Gentle wash, mouth and skin care, repositioning." },
        { time: "Through the day", label: "Medication on schedule", detail: "Prescribed doses given and recorded." },
        { time: "Through the day", label: "Company and calm", detail: "Conversation, music, prayer or quiet, as they wish." },
        { time: "Every 2 hours", label: "Repositioning and checks", detail: "Pressure areas, comfort, breathing." },
        { time: "Handover", label: "Notes for the family and next shift" },
      ],
    },
    caregiverProfile: {
      trainingHours: "Registered nurses and experienced senior caregivers",
      focus: "Comfort care, symptom observation, dignity, family support.",
      supervision: "Care plan set by the treating doctor or palliative team; supervisor visits regularly.",
      certifications: ["Palliative care experience", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "Palliative care asks a lot of the person in the room. We place nurses and caregivers who have done this work before and who are calm, gentle and discreet, and we respect the family’s language, faith and customs.",
    pricing: [
      { label: "12-hour shift", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "24×7 care", price: "After assessment", note: ASSESSMENT_NOTE },
    ],
    faqs: [
      { q: "Do you work with our doctor or palliative team?", a: "Yes. The nurse follows the care plan from your parent’s doctor or palliative care team and keeps them informed." },
      { q: "Can the nurse give pain medication?", a: "A nurse can give prescribed medication, including pain relief, exactly as the doctor has written it. They cannot prescribe or change doses." },
      { q: "Can you start at short notice?", a: "We try to. Palliative needs often arise suddenly, and we prioritise them. Call us and we’ll tell you honestly how fast we can place someone." },
      { q: "Will the same person come every day?", a: "We aim for continuity, with a small, consistent team for 24×7 care." },
      { q: "Do you support the family too?", a: "Yes. Part of the role is giving family members time to rest and explaining what to expect, calmly and honestly." },
      { q: "How is pricing decided?", a: "It depends on whether a nurse, a caregiver or both are needed, and for how many hours. After a free call we send a written quote." },
    ],
    seoTitle: "Palliative Care at Home in Bangalore | Comfort & End-of-Life Care",
    seoDescription:
      "Palliative and end-of-life care at home in Bangalore. Nurses and caregivers for comfort, symptom care and family support. 12-hour or 24×7.",
    icon: "palliative",
  },

  /* ───────────────────────────── Stroke care ───────────────────────────── */
  {
    slug: "stroke-care",
    name: "Stroke Care at Home",
    short: "Recovery support after a stroke",
    emotional: "Recovery after a stroke is slow. Steady support at home makes it possible.",
    hero:
      "Stroke care at home in Bangalore: caregivers, nurses and physiotherapists for recovery and daily living after a stroke.",
    intro: [
      "A stroke can change everything overnight: walking, speaking, eating, even recognising the right side of the plate. When your parent comes home from hospital, the family suddenly has to manage all of it.",
      "Stroke care at home combines the help your parent needs. A trained caregiver supports daily living and safe movement, a nurse handles clinical needs like tube feeding or catheter care, and a physiotherapist works on movement and balance.",
      "We follow the neurologist’s and therapist’s plan, keep routines consistent, and watch closely for warning signs, because the months after a stroke matter.",
    ],
    description:
      "Combined caregiver, nursing and physiotherapy support after a stroke, from safe transfers and feeding to exercises and watching for warning signs.",
    duration: "12-hour shifts, 24×7, plus physiotherapy sessions",
    whoFor: [
      "Patients recently discharged after a stroke",
      "People with weakness or paralysis on one side",
      "Patients with swallowing difficulties or on tube feeding",
      "Families who need help with lifting and transfers",
    ],
    conditions: [
      { title: "One-sided weakness or paralysis", detail: "Safe transfers, positioning and help with every daily task." },
      { title: "Swallowing difficulty", detail: "Careful feeding as advised, or Ryle’s tube feeding by a nurse." },
      { title: "Speech and communication changes", detail: "Patience, simple routines and support with therapist exercises." },
      { title: "High risk of falls", detail: "Supervised movement and a safer home set-up." },
    ],
    whatsIncluded: [
      "Help with bathing, dressing, toileting and feeding",
      "Safe transfers: bed, chair, wheelchair, toilet",
      "Positioning and bedsore prevention",
      "Tube feeding and catheter care by a nurse, if needed",
      "Physiotherapy sessions at home, if booked",
      "Helping with therapist-set exercises between sessions",
      "BP and vitals tracking",
      "Watching for warning signs and alerting family and doctor",
    ],
    notIncluded: [
      "Emergency stroke response — if you see new stroke signs, call 108 immediately",
      "Speech therapy (we can suggest therapists)",
      "Changes to medication — only the doctor decides these",
    ],
    careTimeline: {
      title: "A typical day",
      items: [
        { time: "Morning", label: "Wash, dress and breakfast", detail: "Using the weaker side safely, as the therapist advises." },
        { time: "Mid-morning", label: "Physiotherapy or exercises" },
        { time: "Midday", label: "Lunch and medication", detail: "Careful feeding and swallowing precautions." },
        { time: "Afternoon", label: "Rest and repositioning" },
        { time: "Evening", label: "Short supported walk or chair exercises" },
        { time: "Night", label: "Settling and safety checks" },
      ],
    },
    caregiverProfile: {
      trainingHours: "Caregivers trained in transfers and stroke care; nurses and physiotherapists as needed",
      focus: "Safe transfers, positioning, feeding precautions, rehabilitation support.",
      supervision: "Supervisor visits; physiotherapist reviews progress.",
      certifications: ["Transfer and mobility training", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "Stroke care often needs physical strength for transfers, so we consider that alongside language and gender preference. Where nursing or physiotherapy is needed, we coordinate everyone so the family has one point of contact.",
    pricing: [
      { label: "Caregiver, 12-hour shift", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "24×7 care", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "Physiotherapy session", price: "After assessment", note: "Can be added to any plan" },
    ],
    faqs: [
      { q: "Can you provide both a caregiver and a physiotherapist?", a: "Yes. Many stroke families use a caregiver for daily living and a physiotherapist a few times a week. We coordinate both." },
      { q: "My father is on a feeding tube. Can you help?", a: "Yes. A nurse can manage Ryle’s tube or PEG feeding as prescribed, and train the caregiver in safe routines around it." },
      { q: "What if he has another stroke?", a: "Our staff are briefed on stroke warning signs. They will call 108 and the family immediately. Home care is not an emergency service." },
      { q: "Can the caregiver lift my father?", a: "Our caregivers are trained in safe transfers. For heavier patients we discuss lifting aids or two-person support during the assessment." },
      { q: "How long will he need care?", a: "It varies widely. We review the plan with you regularly and reduce support as independence returns." },
      { q: "How is pricing decided?", a: "It depends on the mix of caregiver, nurse and physiotherapy support. After a free call we send a written quote." },
    ],
    seoTitle: "Stroke Care at Home in Bangalore | Caregivers, Nurses & Physio",
    seoDescription:
      "Stroke care at home in Bangalore: trained caregivers, nurses and physiotherapists for recovery, transfers, feeding and rehab. Free assessment call.",
    icon: "stroke",
  },

  /* ───────────────────────────── Parkinson's care ───────────────────────────── */
  {
    slug: "parkinsons-care",
    name: "Parkinson’s Care at Home",
    short: "Steady support for movement, medication and daily life",
    emotional: "Living well with Parkinson’s takes routine. We help keep it.",
    hero:
      "Parkinson’s care at home in Bangalore: caregivers, nurses and physiotherapy for safe movement, medication timing and daily living.",
    intro: [
      "With Parkinson’s, timing matters. Medication taken late can mean a difficult afternoon; a rushed walk to the bathroom can mean a fall. Small things decide whether a day goes well.",
      "Our caregivers learn your parent’s routine: when medicines are due, how they move best, which times of day are harder. They help with dressing, eating and walking without taking away independence, and they watch for changes to tell the family and doctor about.",
      "As needs grow, we can add nursing care for later stages and physiotherapy to help maintain movement and balance.",
    ],
    description:
      "Daily support for people living with Parkinson’s: medication reminders on time, safe movement and fall prevention, help with daily activities, and physiotherapy or nursing as needed.",
    duration: "From 4 hours to 24×7",
    whoFor: [
      "People with Parkinson’s at any stage",
      "Families worried about falls",
      "Patients whose medication timing is hard to manage",
      "Families caring for a parent with later-stage Parkinson’s",
    ],
    conditions: [
      { title: "Early stage", detail: "Routine, exercise prompts and company, with independence protected." },
      { title: "Mid stage", detail: "Help with dressing, eating and walking; fall prevention." },
      { title: "Later stage", detail: "Full personal care, swallowing precautions, nursing support." },
      { title: "Parkinson’s with memory changes", detail: "Patient, calm support for confusion alongside physical care." },
    ],
    whatsIncluded: [
      "Medication reminders at the exact prescribed times",
      "Help with dressing, bathing and eating",
      "Safe walking and turning; fall prevention",
      "Prompting exercises set by the physiotherapist",
      "Swallowing precautions at meals",
      "Noting symptom patterns for the doctor",
      "Physiotherapy sessions at home, if booked",
      "Nursing care in later stages, if needed",
    ],
    notIncluded: [
      "Adjusting medication — only the neurologist decides this",
      "Emergency care — call 108 after a serious fall or sudden change",
    ],
    careTimeline: {
      title: "A typical day shift",
      items: [
        { time: "Morning", label: "First dose on time", detail: "Then help getting up once medication takes effect." },
        { time: "Mid-morning", label: "Wash, dress and breakfast" },
        { time: "Late morning", label: "Walk or exercises" },
        { time: "Midday", label: "Medication and lunch", detail: "With swallowing care." },
        { time: "Afternoon", label: "Rest and quiet activities" },
        { time: "Evening", label: "Medication, dinner and handover notes" },
      ],
    },
    caregiverProfile: {
      trainingHours: "60+ hours of training, with Parkinson’s-specific briefing",
      focus: "Medication timing, fall prevention, mobility support, patience.",
      supervision: "Supervisor visits; physiotherapist and nurse added as needed.",
      certifications: ["Mobility and transfer training", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "We look for caregivers who are patient and unhurried, because rushing someone with Parkinson’s increases the risk of falls. Continuity is especially valuable, so we aim to keep the same caregiver long-term.",
    pricing: [
      { label: "Caregiver, 12-hour shift", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "24×7 care", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "Physiotherapy session", price: "After assessment", note: "Can be added to any plan" },
    ],
    faqs: [
      { q: "Can the caregiver make sure medicines are taken on time?", a: "Yes. Medication timing is a core part of Parkinson’s care. The caregiver follows the schedule exactly and records each dose." },
      { q: "Can you help prevent falls?", a: "Our caregivers support safe walking and turning, and can suggest simple home changes. A physiotherapist can add balance training." },
      { q: "Do you provide 24-hour care in later stages?", a: "Yes. For later-stage Parkinson’s we offer 24×7 care, with nursing support if needed." },
      { q: "Is this different from elder care?", a: "It builds on elder care with Parkinson’s-specific attention to medication timing, movement and swallowing, plus physiotherapy and nursing when needed." },
      { q: "How is pricing decided?", a: "It depends on the hours and the support needed. After a free call we send a written quote." },
    ],
    seoTitle: "Parkinson’s Care at Home in Bangalore | Caregivers & Physio",
    seoDescription:
      "Parkinson’s care at home in Bangalore: on-time medication, fall prevention, daily living help, physiotherapy and nursing. Free assessment call.",
    icon: "parkinsons",
  },

  /* ───────────────────────────── Disability care ───────────────────────────── */
  {
    slug: "disability-care",
    name: "Disability Care at Home",
    short: "Respectful support for independent living",
    emotional: "Support that fits around the person, not the other way round.",
    hero:
      "Disability care at home in Bangalore: trained caregivers for daily living, mobility and personal care, for adults of any age.",
    intro: [
      "People living with a physical disability, or the after-effects of an injury or illness, often need help with some things but not others. Good support knows the difference.",
      "Our caregivers help with exactly what’s needed: personal care, transfers, getting out of the house, managing appointments. They respect the person’s choices and routines rather than taking over.",
      "We support adults of all ages, from younger adults after a spinal injury to older parents with long-term mobility needs, with nursing and physiotherapy available when needed.",
    ],
    description:
      "Daily living support for adults with physical disabilities: personal care, transfers and mobility, help getting out and about, with nursing and physiotherapy as needed.",
    duration: "From 4 hours to 24×7",
    whoFor: [
      "Adults with physical disabilities of any age",
      "People with spinal cord injuries",
      "Wheelchair users who need help with transfers",
      "Families who need regular respite",
    ],
    conditions: [
      { title: "Spinal cord injury", detail: "Transfers, positioning, skin care and bladder routines." },
      { title: "Amputation", detail: "Mobility support and help with daily tasks while adapting." },
      { title: "Cerebral palsy and lifelong conditions", detail: "Consistent, respectful support with daily routines." },
      { title: "Long-term mobility needs", detail: "Wheelchair use, transfers and getting out of the house." },
    ],
    whatsIncluded: [
      "Bathing, dressing, grooming and toileting",
      "Safe transfers and wheelchair support",
      "Positioning and skin care",
      "Meal preparation and feeding support",
      "Accompanying to appointments and outings",
      "Prompting exercises set by a physiotherapist",
      "Nursing care for catheter or bowel routines, if needed",
    ],
    notIncluded: [
      "Medical treatment — this stays with the person’s doctor",
      "Heavy household chores for the whole home",
    ],
    careTimeline: {
      title: "A typical day shift",
      items: [
        { time: "Morning", label: "Getting up, personal care and dressing" },
        { time: "Mid-morning", label: "Breakfast and the day’s plan" },
        { time: "Midday", label: "Appointments, outings or work support" },
        { time: "Afternoon", label: "Rest, repositioning and exercises" },
        { time: "Evening", label: "Dinner, handover and notes" },
      ],
    },
    caregiverProfile: {
      trainingHours: "60+ hours of training, with transfer and mobility focus",
      focus: "Safe transfers, personal care, dignity and respecting the person’s choices.",
      supervision: "Supervisor visits; nurse and physiotherapist added as needed.",
      certifications: ["Transfer and mobility training", "Police verified", "Aadhaar verified"],
    },
    matchingNotes:
      "We match on practical needs, such as strength for transfers, and on personality. For younger adults especially, we look for caregivers who fit their pace of life and respect their independence.",
    pricing: [
      { label: "Hourly support", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "12-hour shift", price: "After assessment", note: ASSESSMENT_NOTE },
      { label: "24×7 care", price: "After assessment", note: ASSESSMENT_NOTE },
    ],
    faqs: [
      { q: "Do you support younger adults, not just elderly people?", a: "Yes. We support adults of any age who live with a physical disability." },
      { q: "Can the caregiver come with us to appointments or outings?", a: "Yes. Accompanying to appointments, work or social outings can be part of the plan." },
      { q: "Can we choose a male or female caregiver?", a: "Yes. We match by gender preference, especially for personal care." },
      { q: "Can you help with bladder or bowel routines?", a: "Caregivers can support daily routines. Clinical tasks such as catheter care are handled by a nurse." },
      { q: "How is pricing decided?", a: "It depends on the hours and the support needed. After a free call we send a written quote." },
    ],
    seoTitle: "Disability Care at Home in Bangalore | Trained Caregivers",
    seoDescription:
      "Disability care at home in Bangalore: personal care, transfers, wheelchair support and outings, for adults of any age. Free assessment call.",
    icon: "disability",
  },
];
