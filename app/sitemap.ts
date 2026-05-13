import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { posts } from "@/lib/posts";
import { jobs } from "@/lib/jobs";

/**
 * Regenerate the sitemap every hour. Without this, Next.js bakes the sitemap
 * once at build time — which means it never reflects newly-published posts or
 * job listings until the next deploy. With ISR set to 3600s, Google sees
 * fresh lastModified dates every hour without needing a rebuild.
 */
export const revalidate = 3600;

type PageEntry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date().toISOString();

  /* Static pages — priority + change frequency tuned per page intent. */
  const staticPages: Array<{
    path: string;
    priority: number;
    changeFrequency: PageEntry["changeFrequency"];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "daily" }, // homepage
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/locations", priority: 0.85, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/book", priority: 0.95, changeFrequency: "weekly" }, // primary conversion page
    { path: "/journal", priority: 0.85, changeFrequency: "daily" }, // posts publish here
    { path: "/tools", priority: 0.85, changeFrequency: "weekly" },
    { path: "/care-quiz", priority: 0.85, changeFrequency: "monthly" },
    { path: "/cost-calculator", priority: 0.85, changeFrequency: "monthly" },
    { path: "/caregiver-checkup", priority: 0.8, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.8, changeFrequency: "daily" }, // job postings change
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  /* Service detail pages — strong commercial pages, refresh weekly. */
  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  /* Locality pages — local SEO landings, refresh weekly. */
  const localityUrls: MetadataRoute.Sitemap = localities.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  /* Journal posts — real per-post publication date so Google knows freshness. */
  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.publishedAt).toISOString(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  /* Job postings — fresh date, weekly refresh so they don't go stale in Google
   * Jobs (Google Jobs deprioritises listings older than ~30 days). */
  const jobUrls: MetadataRoute.Sitemap = jobs.map((j) => ({
    url: `${base}/careers/${j.slug}`,
    lastModified: new Date(j.postedAt).toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
    ...localityUrls,
    ...postUrls,
    ...jobUrls,
  ];
}
