import { absoluteUrl, site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";

/** Render a JSON-LD <script> tag with the given payload. */
function Ld({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─────────────────────── Sitewide / Home ─────────────────────── */

export function HomeJsonLd() {
  const data = [
    /* Organization */
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: site.url,
      description: site.description,
      logo: absoluteUrl("/og-logo.png"),
      foundingDate: site.founded,
      sameAs: [site.social.instagram, site.social.linkedin].filter(Boolean),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Kannada", "Hindi", "Tamil", "Telugu", "Malayalam"],
        },
      ],
    },

    /* LocalBusiness — primary entity for local search */
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "MedicalBusiness", "HomeAndConstructionBusiness"],
      "@id": absoluteUrl("/#localbusiness"),
      name: site.name,
      description: site.description,
      url: site.url,
      image: absoluteUrl("/og-cover.jpg"),
      telephone: site.phone,
      email: site.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, Embassy Square, Indiranagar",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560038",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      areaServed: [
        { "@type": "City", name: "Bangalore" },
        ...localities.map((l) => ({
          "@type": "Place",
          name: `${l.name}, Bangalore`,
        })),
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
          description: "24×7 care support",
        },
      ],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.short,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
    },

    /* WebSite with sitelinks search */
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      publisher: { "@id": absoluteUrl("/#organization") },
      potentialAction: {
        "@type": "SearchAction",
        target: `${site.url}/journal?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return <Ld data={data} />;
}

/* ─────────────────────── Service / Locality / Article ─────────────────────── */

export function ServiceJsonLd({
  name,
  description,
  slug,
  pricing,
  faqs,
}: {
  name: string;
  description: string;
  slug: string;
  pricing: { label: string; price: string }[];
  faqs?: { q: string; a: string }[];
}) {
  const url = absoluteUrl(`/services/${slug}`);
  const data: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      provider: { "@id": absoluteUrl("/#localbusiness") },
      areaServed: { "@type": "City", name: "Bangalore" },
      url,
      offers: pricing.map((p) => ({
        "@type": "Offer",
        name: p.label,
        price: extractPriceNumber(p.price),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: site.rating.value,
        reviewCount: site.rating.count,
        bestRating: 5,
        worstRating: 1,
      },
    },
  ];
  if (faqs && faqs.length) {
    data.push(buildFaqJsonLd(faqs));
  }
  return <Ld data={data} />;
}

function extractPriceNumber(price: string) {
  const m = price.match(/[\d,]+/);
  if (!m) return undefined;
  return Number(m[0].replace(/,/g, ""));
}

export function LocalityJsonLd({ slug }: { slug: string }) {
  const l = localities.find((x) => x.slug === slug);
  if (!l) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home Caregiving",
    name: `Home caregivers in ${l.name}, Bangalore`,
    description: l.blurb,
    provider: { "@id": absoluteUrl("/#localbusiness") },
    areaServed: {
      "@type": "Place",
      name: `${l.name}, Bangalore`,
      address: {
        "@type": "PostalAddress",
        addressLocality: l.name,
        postalCode: l.pincode,
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    url: absoluteUrl(`/locations/${l.slug}`),
  };
  return <Ld data={data} />;
}

/* ─────────────────────── Reusable building blocks ─────────────────────── */

export function buildFaqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return <Ld data={buildFaqJsonLd(faqs)} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.href),
    })),
  };
  return <Ld data={data} />;
}

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return <Ld data={data} />;
}

/**
 * Speakable schema flags content that should be read aloud by voice assistants
 * (Google Assistant, etc). Apply on FAQ-rich and listicle pages.
 */
export function SpeakableJsonLd({
  url,
  cssSelectors = [".speakable", ".faq-q", ".faq-a"],
}: {
  url: string;
  cssSelectors?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(url),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
  return <Ld data={data} />;
}

/**
 * Article schema for journal posts. Use on every /journal/[slug] page.
 */
export function ArticleJsonLd({
  title,
  description,
  hero,
  url,
  publishedAt,
  modifiedAt,
  authorName,
  category,
  keywords,
}: {
  title: string;
  description: string;
  hero: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  authorName: string;
  category: string;
  keywords: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [hero],
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: [{ "@type": "Organization", name: authorName, url: site.url }],
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(url) },
    keywords: keywords.join(", "),
    articleSection: category,
    inLanguage: "en-IN",
  };
  return <Ld data={data} />;
}

/* ─────────────────────── Reviews (testimonials) ─────────────────────── */

export function ReviewsJsonLd({
  reviews,
}: {
  reviews: { body: string; author: string; locality?: string }[];
}) {
  const data = reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: r.body,
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
    itemReviewed: { "@id": absoluteUrl("/#localbusiness") },
    locationCreated: r.locality
      ? { "@type": "Place", name: `${r.locality}, Bangalore` }
      : undefined,
  }));
  return <Ld data={data} />;
}
