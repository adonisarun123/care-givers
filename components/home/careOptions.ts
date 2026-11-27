/**
 * Plain-language labels for each service, written from the family's side
 * ("who needs care?") rather than the service catalogue's side.
 * Order = order shown in the hero care finder and the services list.
 */
export const careOptions: { slug: string; label: string; summary: string }[] = [
  {
    slug: "elder-care",
    label: "An elderly parent",
    summary: "Daily help, company and medicine reminders for an ageing parent.",
  },
  {
    slug: "post-surgery-care",
    label: "Someone after surgery",
    summary: "Support at home in the first weeks after a hospital stay.",
  },
  {
    slug: "patient-care",
    label: "A patient at home",
    summary: "A trained attendant for illness, stroke recovery or long-term conditions.",
  },
  {
    slug: "dementia-care",
    label: "Someone with dementia",
    summary: "Patient, consistent care for memory loss, confusion and wandering.",
  },
  {
    slug: "bedridden-care",
    label: "Someone bedridden",
    summary: "Turning, hygiene, feeding and bedsore prevention, day and night.",
  },
  {
    slug: "night-caregiver",
    label: "Help through the night",
    summary: "A 12-hour night shift so the family can sleep.",
  },
  {
    slug: "live-in-caregiver",
    label: "Care around the clock",
    summary: "A caregiver who lives in, with a weekly off covered by a reliever.",
  },
  {
    slug: "female-caregiver",
    label: "A female caregiver",
    summary: "Women caregivers for personal care, from 4 hours to live-in.",
  },
];
