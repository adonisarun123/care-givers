/**
 * Plain-language labels for each service, written from the family's side
 * ("who needs care?") rather than the service catalogue's side.
 * Order = order shown in the hero care finder and the services list.
 */
export type CareOption = {
  slug: string;
  label: string;
  summary: string;
  group: "daily" | "medical";
  /** Shown as a chip in the hero care finder */
  inFinder?: boolean;
};

export const careOptions: CareOption[] = [
  {
    slug: "elder-care",
    label: "An elderly parent",
    summary: "Daily help, company and medicine reminders for an ageing parent.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "post-surgery-care",
    label: "Someone after surgery",
    summary: "Support at home in the first weeks after a hospital stay.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "patient-care",
    label: "A patient at home",
    summary: "A trained attendant for illness, stroke recovery or long-term conditions.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "dementia-care",
    label: "Someone with dementia",
    summary: "Patient, consistent care for memory loss, confusion and wandering.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "bedridden-care",
    label: "Someone bedridden",
    summary: "Turning, hygiene, feeding and bedsore prevention, day and night.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "night-caregiver",
    label: "Help through the night",
    summary: "A 12-hour night shift so the family can sleep.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "live-in-caregiver",
    label: "Care around the clock",
    summary: "A caregiver who lives in, with a weekly off covered by a reliever.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "female-caregiver",
    label: "A female caregiver",
    summary: "Women caregivers for personal care, from 4 hours to live-in.",
    group: "daily",
    inFinder: true,
  },
  {
    slug: "home-nursing",
    label: "Nursing at home",
    summary: "Registered nurses for injections, IV, wound, catheter and tube care.",
    group: "medical",
    inFinder: true,
  },
  {
    slug: "physiotherapy-at-home",
    label: "Physiotherapy",
    summary: "Home sessions for strength, balance and recovery after surgery or stroke.",
    group: "medical",
    inFinder: true,
  },
  {
    slug: "stroke-care",
    label: "Someone after a stroke",
    summary: "Caregivers, nurses and physiotherapy for recovery after a stroke.",
    group: "medical",
  },
  {
    slug: "parkinsons-care",
    label: "Someone with Parkinson’s",
    summary: "On-time medication, fall prevention and help with daily life.",
    group: "medical",
  },
  {
    slug: "palliative-care",
    label: "Comfort care",
    summary: "Palliative and end-of-life care at home, for the patient and the family.",
    group: "medical",
  },
  {
    slug: "disability-care",
    label: "A person with a disability",
    summary: "Personal care, transfers and outings for adults of any age.",
    group: "daily",
  },
];
