export const site = {
  name: "Care Givers",
  tagline: "Trusted home caregivers for Bangalore families",
  description:
    "Verified, trained caregivers and patient attendants for elder care, post-surgery, dementia, bedridden and live-in support across Bangalore. Book in 60 seconds.",
  url: "https://caregivers.example",
  city: "Bangalore",
  phone: "+91 80 4567 8910",
  phoneHref: "tel:+918045678910",
  whatsapp: "+91 98456 12345",
  whatsappHref:
    "https://wa.me/919845612345?text=Hi%2C%20I%27d%20like%20to%20book%20a%20caregiver%20in%20Bangalore.",
  email: "care@caregivers.example",
  address: "1st Floor, Embassy Square, Indiranagar, Bangalore 560038",
  geo: { latitude: 12.9783, longitude: 77.6408 }, // Indiranagar, Bangalore
  founded: "2021",
  rating: { value: 4.9, count: 1200 },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  hours: "Care support 24×7 · Office Mon–Sat, 8am–9pm",
};

export function absoluteUrl(path: string) {
  const base = site.url.replace(/\/$/, "");
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}

/**
 * Build a full Next.js Metadata object with canonical, Open Graph and
 * Twitter card so we don't repeat ourselves on every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
}) {
  const url = absoluteUrl(path);
  const image = ogImage || absoluteUrl("/og-cover.jpg");
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "Locations", href: "/locations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tools", href: "/tools" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

/**
 * Leadership team. REPLACE these placeholder names, roles and bios with the
 * actual team before publishing the about page. The medical advisory board
 * entries below are illustrative — replace them with real credentialled
 * doctors before going live (never publish unverified medical credentials).
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  quote?: string;
  initials: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Priyanka Iyer",
    role: "Founder & CEO",
    bio: "Started Care Givers in 2021 after struggling to find a trained caregiver for her paralysed mother-in-law in Bangalore. Spent six weeks calling agencies; the trained, bedridden-specialist help she needed was nowhere to be found. Previously led product at a Bangalore healthtech, and before that worked at the Karnataka Health Promotion Trust.",
    quote:
      "Caregiving is most of what families don't talk about. We're trying to make it the thing they do.",
    initials: "PI",
  },
  {
    name: "Vikram Reddy",
    role: "Head of Operations",
    bio: "Runs the 24×7 dispatch and the field supervisor network. Eight years at Apollo and Manipal in patient operations and case management before joining Care Givers in our first year.",
    quote: "Our job is to be the calm voice when someone calls at 2 AM.",
    initials: "VR",
  },
  {
    name: "Dr. Anjali Menon",
    role: "Head of Care (Clinical)",
    bio: "BSc Nursing, MSc Gerontology. Designs our caregiver training curriculum and reviews every clinical claim on the site. Practised geriatric nursing for eleven years before moving into clinical training.",
    quote: "Eighty per cent of good care is the same six things, done patiently.",
    initials: "AM",
  },
  {
    name: "Karthik V.",
    role: "Head of Family Acquisition",
    bio: "Leads our family conversations team. NRI himself — son in Singapore, parents in Whitefield — which is partly how he ended up running this seat.",
    quote: "I've been on the other side of this call. I never forget that.",
    initials: "KV",
  },
];

export const advisoryBoard: TeamMember[] = [
  {
    name: "Dr. [Geriatrician Name]",
    role: "Geriatric Medicine Advisor",
    bio: "Consulting geriatrician with 20+ years of experience at a leading Bangalore hospital. Reviews dementia and elder-care protocols.",
    initials: "GA",
  },
  {
    name: "Dr. [Palliative Specialist Name]",
    role: "Palliative Care Advisor",
    bio: "Palliative care physician advising on bedridden, end-of-life and pain-management care plans.",
    initials: "PA",
  },
  {
    name: "[Senior Nurse Educator Name]",
    role: "Clinical Training Advisor",
    bio: "Senior nurse educator with experience designing GDA and home-nursing curricula in Karnataka.",
    initials: "NE",
  },
];
