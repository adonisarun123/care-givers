/**
 * The care promise — the single source for every guarantee shown on the site.
 *
 * RULE: only list commitments the operations team actually honours today.
 * A broken promise costs more trust than no promise. Add new guarantees here
 * only after they are live operationally.
 */

export type CarePromise = { title: string; body: string };

export const carePromises: CarePromise[] = [
  {
    title: "Verified before they reach your door",
    body: "Aadhaar, address and police verification, references and an in-person interview. For nurses and physiotherapists, we also check their qualifications.",
  },
  {
    title: "Trained before their first placement",
    body: "Every caregiver completes 60+ hours of training before they are placed with a family.",
  },
  {
    title: "The right person, or a replacement in 24 hours",
    body: "If your family isn’t comfortable with the caregiver, we send someone else within 24 hours. The replacement costs nothing.",
  },
  {
    title: "Never left without cover",
    body: "If a caregiver is unwell or on leave, we send a backup, usually someone your family has already met.",
  },
  {
    title: "No surprises on price",
    body: "You see the price before care starts. If anything changes, such as more hours or more complex care, we confirm it with you in writing first.",
  },
  {
    title: "Someone always keeping an eye",
    body: "Regular supervisor home visits, updates for the family, and a care team you can call 24 hours a day.",
  },
];

export const whatIfs: { situation: string; response: string }[] = [
  {
    situation: "Your parent isn’t comfortable with the caregiver",
    response: "We send someone else within 24 hours, at no extra cost.",
  },
  {
    situation: "The caregiver is unwell or on leave",
    response: "We send a backup, usually someone your parent has already met.",
  },
  {
    situation: "Your parent’s needs change",
    response: "We review the care plan with you and match the skills to the new needs. The price changes only after you agree.",
  },
  {
    situation: "You’re unhappy with how something was handled",
    response: "Call the care team at any hour. A supervisor follows up with you directly.",
  },
  {
    situation: "There’s a medical emergency",
    response: "Our staff call 108 and the family immediately.",
  },
];

export const includedInEveryBooking: string[] = [
  "Identity, address and police verification",
  "Matching by care needs, language and gender preference",
  "The caregiver’s profile before they arrive",
  "Backup cover for leave and sick days",
  "Free replacement within 24 hours",
  "Supervisor home visits",
  "Updates for the family",
  "A care team you can call 24 hours a day",
];
