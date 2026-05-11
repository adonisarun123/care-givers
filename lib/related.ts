/**
 * Editorial interlinking map.
 *
 * Hand-curated mappings between services, journal posts, locality pages and
 * the interactive tools. Each detail page surfaces a "related" rail built
 * from these mappings — which keeps internal linking dense, contextual, and
 * useful both for readers and for SEO.
 */
import { services, type Service } from "./services";
import { posts, type Post } from "./posts";
import { localities } from "./locations";

export type ToolLink = {
  slug: "care-quiz" | "cost-calculator" | "caregiver-checkup";
  title: string;
  blurb: string;
  href: string;
};

export const TOOLS: Record<ToolLink["slug"], ToolLink> = {
  "care-quiz": {
    slug: "care-quiz",
    title: "Care Quiz",
    blurb:
      "Two minutes. We recommend the right care plan and a transparent price range.",
    href: "/care-quiz",
  },
  "cost-calculator": {
    slug: "cost-calculator",
    title: "Cost Calculator",
    blurb:
      "Adjust hours, days, locality and complexity. See your monthly estimate live.",
    href: "/cost-calculator",
  },
  "caregiver-checkup": {
    slug: "caregiver-checkup",
    title: "Caregiver Self-Check",
    blurb:
      "A 60-second wellbeing check-in for the family member doing the daily caregiving.",
    href: "/caregiver-checkup",
  },
};

/* ─── Service → Journal posts ─────────────────────────────────────── */

const SERVICE_TO_POSTS: Record<string, string[]> = {
  "elder-care": [
    "how-to-choose-a-caregiver-bangalore",
    "home-caregiver-cost-bangalore",
    "old-age-home-vs-home-care-bangalore",
  ],
  "patient-care": [
    "post-discharge-checklist-bangalore",
    "prevent-bedsores-at-home",
    "home-caregiver-cost-bangalore",
  ],
  "live-in-caregiver": [
    "live-in-vs-day-caregiver",
    "nri-guide-parent-care-bangalore",
    "home-caregiver-cost-bangalore",
  ],
  "post-surgery-care": [
    "post-discharge-checklist-bangalore",
    "prevent-bedsores-at-home",
    "how-to-choose-a-caregiver-bangalore",
  ],
  "dementia-care": [
    "dementia-care-at-home-india",
    "how-to-choose-a-caregiver-bangalore",
    "nri-guide-parent-care-bangalore",
  ],
  "bedridden-care": [
    "prevent-bedsores-at-home",
    "post-discharge-checklist-bangalore",
    "home-caregiver-cost-bangalore",
  ],
  "night-caregiver": [
    "live-in-vs-day-caregiver",
    "how-to-choose-a-caregiver-bangalore",
    "post-discharge-checklist-bangalore",
  ],
  "female-caregiver": [
    "how-to-choose-a-caregiver-bangalore",
    "old-age-home-vs-home-care-bangalore",
    "nri-guide-parent-care-bangalore",
  ],
};

/* ─── Service → Recommended tools ─────────────────────────────────── */

const SERVICE_TO_TOOLS: Record<string, ToolLink["slug"][]> = {
  "elder-care": ["care-quiz", "cost-calculator"],
  "patient-care": ["cost-calculator", "care-quiz"],
  "live-in-caregiver": ["cost-calculator", "care-quiz"],
  "post-surgery-care": ["care-quiz", "caregiver-checkup"],
  "dementia-care": ["care-quiz", "caregiver-checkup"],
  "bedridden-care": ["caregiver-checkup", "cost-calculator"],
  "night-caregiver": ["care-quiz", "cost-calculator"],
  "female-caregiver": ["care-quiz", "cost-calculator"],
};

/* ─── Journal post → Services ─────────────────────────────────────── */

const POST_TO_SERVICES: Record<string, string[]> = {
  "how-to-choose-a-caregiver-bangalore": [
    "elder-care",
    "patient-care",
    "live-in-caregiver",
  ],
  "home-caregiver-cost-bangalore": [
    "live-in-caregiver",
    "elder-care",
    "patient-care",
  ],
  "live-in-vs-day-caregiver": [
    "live-in-caregiver",
    "night-caregiver",
    "elder-care",
  ],
  "dementia-care-at-home-india": [
    "dementia-care",
    "live-in-caregiver",
    "female-caregiver",
  ],
  "post-discharge-checklist-bangalore": [
    "post-surgery-care",
    "patient-care",
    "live-in-caregiver",
  ],
  "nri-guide-parent-care-bangalore": [
    "live-in-caregiver",
    "elder-care",
    "dementia-care",
  ],
  "old-age-home-vs-home-care-bangalore": [
    "live-in-caregiver",
    "elder-care",
    "female-caregiver",
  ],
  "prevent-bedsores-at-home": [
    "bedridden-care",
    "patient-care",
    "live-in-caregiver",
  ],
};

/* ─── Journal post → Tools ────────────────────────────────────────── */

const POST_TO_TOOLS: Record<string, ToolLink["slug"][]> = {
  "how-to-choose-a-caregiver-bangalore": ["care-quiz", "cost-calculator"],
  "home-caregiver-cost-bangalore": ["cost-calculator", "care-quiz"],
  "live-in-vs-day-caregiver": ["care-quiz", "cost-calculator"],
  "dementia-care-at-home-india": ["care-quiz", "caregiver-checkup"],
  "post-discharge-checklist-bangalore": ["care-quiz", "caregiver-checkup"],
  "nri-guide-parent-care-bangalore": ["cost-calculator", "care-quiz"],
  "old-age-home-vs-home-care-bangalore": ["cost-calculator", "care-quiz"],
  "prevent-bedsores-at-home": ["caregiver-checkup", "care-quiz"],
};

/* ─── Locality → Journal posts ────────────────────────────────────── */
/* Curated per-locality based on the demographic and care patterns we
 * actually see in each zone. Defaults to broad-appeal posts otherwise. */

const LOCALITY_TO_POSTS: Record<string, string[]> = {
  indiranagar: [
    "how-to-choose-a-caregiver-bangalore",
    "home-caregiver-cost-bangalore",
    "nri-guide-parent-care-bangalore",
  ],
  whitefield: [
    "nri-guide-parent-care-bangalore",
    "live-in-vs-day-caregiver",
    "home-caregiver-cost-bangalore",
  ],
  "hsr-layout": [
    "post-discharge-checklist-bangalore",
    "how-to-choose-a-caregiver-bangalore",
    "live-in-vs-day-caregiver",
  ],
  koramangala: [
    "how-to-choose-a-caregiver-bangalore",
    "nri-guide-parent-care-bangalore",
    "home-caregiver-cost-bangalore",
  ],
  jayanagar: [
    "old-age-home-vs-home-care-bangalore",
    "dementia-care-at-home-india",
    "how-to-choose-a-caregiver-bangalore",
  ],
  "electronic-city": [
    "post-discharge-checklist-bangalore",
    "live-in-vs-day-caregiver",
    "home-caregiver-cost-bangalore",
  ],
  hebbal: [
    "how-to-choose-a-caregiver-bangalore",
    "home-caregiver-cost-bangalore",
    "live-in-vs-day-caregiver",
  ],
  malleshwaram: [
    "dementia-care-at-home-india",
    "old-age-home-vs-home-care-bangalore",
    "how-to-choose-a-caregiver-bangalore",
  ],
};

/* ─── Public helpers ──────────────────────────────────────────────── */

function lookupPosts(slugs: string[]): Post[] {
  return slugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is Post => Boolean(p));
}

function lookupServices(slugs: string[]): Service[] {
  return slugs
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is Service => Boolean(s));
}

export function getRelatedPostsForService(slug: string): Post[] {
  return lookupPosts(SERVICE_TO_POSTS[slug] || []);
}

export function getToolsForService(slug: string): ToolLink[] {
  return (SERVICE_TO_TOOLS[slug] || ["care-quiz", "cost-calculator"]).map(
    (k) => TOOLS[k],
  );
}

export function getRelatedServicesForPost(slug: string): Service[] {
  return lookupServices(POST_TO_SERVICES[slug] || []);
}

export function getToolsForPost(slug: string): ToolLink[] {
  return (POST_TO_TOOLS[slug] || ["care-quiz"]).map((k) => TOOLS[k]);
}

export function getRelatedPostsForLocality(slug: string): Post[] {
  const list =
    LOCALITY_TO_POSTS[slug] || [
      "how-to-choose-a-caregiver-bangalore",
      "home-caregiver-cost-bangalore",
      "live-in-vs-day-caregiver",
    ];
  return lookupPosts(list);
}

/** Localities that fit a post's situational context — useful for cross-linking. */
export function getRelevantLocalitiesForPost(slug: string) {
  // Bias to the three most active zones per topic; falls back to all.
  const map: Record<string, string[]> = {
    "nri-guide-parent-care-bangalore": ["whitefield", "indiranagar", "koramangala"],
    "post-discharge-checklist-bangalore": ["electronic-city", "hsr-layout", "indiranagar"],
    "dementia-care-at-home-india": ["jayanagar", "malleshwaram", "indiranagar"],
    "old-age-home-vs-home-care-bangalore": ["jayanagar", "malleshwaram", "hebbal"],
  };
  const slugs = map[slug] || localities.slice(0, 3).map((l) => l.slug);
  return slugs
    .map((s) => localities.find((l) => l.slug === s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));
}
