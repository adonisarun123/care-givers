export type Locality = {
  slug: string;
  name: string;
  zone: "East" | "South" | "North" | "Central" | "West";
  pincode: string;
  blurb: string;
  longCopy: string;
  hospitals: string[];
  travelTime: string;
};

export const localities: Locality[] = [
  {
    slug: "indiranagar",
    name: "Indiranagar",
    zone: "East",
    pincode: "560038",
    blurb:
      "Caregivers reach Indiranagar in under 30 minutes — most live within the same zone.",
    longCopy:
      "Indiranagar has been a core service area for us since day one. Our caregiver network is dense around 100ft Road, CMH Road and the inner cross streets, with most attendants living within 5–6 km. We support older bungalows, gated apartments and serviced residences alike.",
    hospitals: ["Manipal Hospital Old Airport Road", "CMH Hospital", "Chinmaya Mission Hospital"],
    travelTime: "20–30 minutes from dispatch",
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    zone: "East",
    pincode: "560066",
    blurb:
      "Strong caregiver presence near ITPL, Hope Farm and Borewell Road for tech-corridor families.",
    longCopy:
      "Whitefield is one of our highest-volume zones, with caregivers based around Hope Farm, Varthur and Kundalahalli. We commonly support working families managing aging parents from the IT corridor — many bookings come from NRI children coordinating remotely.",
    hospitals: ["Manipal Whitefield", "Sathya Sai Hospital", "Vydehi Hospital"],
    travelTime: "30–45 minutes from dispatch",
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    zone: "South",
    pincode: "560102",
    blurb:
      "Calm, quick caregiver placement across all 7 sectors and Agara, Bommanahalli border.",
    longCopy:
      "HSR Layout is a young-family belt where care is often urgent — post-partum, post-surgery or sudden elder needs. We hold caregiver capacity ready for 24-hour starts, especially around Sectors 1, 2 and 7.",
    hospitals: ["Sakra World Hospital", "Apollo Spectra HSR", "Narayana Multispeciality Hospital"],
    travelTime: "25–35 minutes from dispatch",
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    zone: "South",
    pincode: "560034",
    blurb:
      "Trained attendants for elderly residents, founders’ parents and post-surgery cases.",
    longCopy:
      "Koramangala blocks 1 through 8 are densely served. Our caregivers know how to navigate the older independent homes as well as the newer apartments around Sony Signal and Forum.",
    hospitals: ["St. John’s Medical College Hospital", "Apollo Clinic Koramangala", "HCG Cancer Centre"],
    travelTime: "25–35 minutes from dispatch",
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    zone: "South",
    pincode: "560011",
    blurb:
      "A long-standing senior community — and our caregivers know it block by block.",
    longCopy:
      "Jayanagar has one of the highest senior populations in Bangalore. We have caregivers comfortable with traditional households, multi-generational homes and Kannada-first families.",
    hospitals: ["Apollo Hospital Jayanagar", "Fortis Hospital Bannerghatta", "BGS Gleneagles"],
    travelTime: "30–40 minutes from dispatch",
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    zone: "South",
    pincode: "560100",
    blurb:
      "Phase 1, 2 and Neeladri Road — caregivers who live close to where you are.",
    longCopy:
      "Electronic City Phase 1 and 2 are served by caregivers based in Doddathoguru, Hosa Road and Bommanahalli. We also cover Hosur Road and Begur Road extensions.",
    hospitals: ["Narayana Health City", "Sparsh Hospital", "Wipro GE Healthcare Clinic"],
    travelTime: "30–50 minutes from dispatch",
  },
  {
    slug: "hebbal",
    name: "Hebbal & North Bangalore",
    zone: "North",
    pincode: "560024",
    blurb:
      "Hebbal, Yelahanka, Sahakarnagar — fast placement near the airport corridor.",
    longCopy:
      "We cover Hebbal, Yelahanka, Sahakarnagar and the Manyata Tech Park belt. Especially helpful for families flying in elderly relatives from out of station.",
    hospitals: ["Manipal Hospital Hebbal", "Aster CMI Hospital", "Columbia Asia Hebbal"],
    travelTime: "35–50 minutes from dispatch",
  },
  {
    slug: "malleshwaram",
    name: "Malleshwaram & Rajajinagar",
    zone: "Central",
    pincode: "560003",
    blurb:
      "Traditional homes, traditional needs — caregivers fluent in Kannada and routine.",
    longCopy:
      "Central Bangalore — Malleshwaram, Rajajinagar, Sadashivanagar and surrounding — has older homes and senior populations. Our caregivers here are experienced with long-standing routines and Kannada-only households.",
    hospitals: ["Ramaiah Memorial Hospital", "People Tree Hospital", "Manipal Hospital Malleshwaram"],
    travelTime: "30–40 minutes from dispatch",
  },
];

export function getLocalityBySlug(slug: string) {
  return localities.find((l) => l.slug === slug);
}
