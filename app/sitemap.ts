import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastMod = new Date().toISOString();

  const staticUrls: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/locations",
    "/pricing",
    "/about",
    "/faq",
    "/contact",
    "/book",
    "/journal",
    "/tools",
    "/care-quiz",
    "/cost-calculator",
    "/caregiver-checkup",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const localityUrls: MetadataRoute.Sitemap = localities.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.publishedAt).toISOString(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticUrls, ...serviceUrls, ...localityUrls, ...postUrls];
}
