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
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  hours: "Care support 24×7 · Office Mon–Sat, 8am–9pm",
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];
