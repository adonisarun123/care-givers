/**
 * /llms.txt — discovery file for AI crawlers (ChatGPT, Perplexity, Claude, etc.)
 * Spec: https://llmstxt.org/
 *
 * This file gives AI agents a concise, structured map of the site so they can
 * retrieve the most relevant context when answering user queries about
 * caregiving in Bangalore.
 */
import { absoluteUrl, site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { posts, journal } from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    `${site.name} is a Bangalore-based home caregiving service. We place verified, trained caregivers and patient attendants for elderly parents, post-surgery recovery, dementia, bedridden patients, and 24×7 live-in care across Bangalore — typically within 6 hours of booking. Pricing is published transparently and replacement is guaranteed.`,
  );
  lines.push("");

  /* Core pages */
  lines.push("## Core pages");
  lines.push("");
  for (const item of [
    { title: "Homepage", path: "/", desc: "Overview of services, pricing and how booking works." },
    { title: "All services", path: "/services", desc: "Index of every type of home care we provide in Bangalore." },
    { title: "All Bangalore localities served", path: "/locations", desc: "Service areas across Bangalore with response times and local hospitals." },
    { title: "Transparent pricing", path: "/pricing", desc: "Hourly, day, night, live-in pricing for every service. No callbacks, no hidden fees." },
    { title: "About", path: "/about", desc: "Company values, team, training standards." },
    { title: "FAQ", path: "/faq", desc: "Common questions on booking, training, verification, replacement, language matching." },
    { title: "Contact", path: "/contact", desc: "Phone, WhatsApp, email and Indiranagar office address." },
    { title: "Book a caregiver", path: "/book", desc: "6-step booking flow that takes under 3 minutes." },
  ]) {
    lines.push(`- [${item.title}](${absoluteUrl(item.path)}): ${item.desc}`);
  }
  lines.push("");

  /* Services */
  lines.push("## Home caregiving services");
  lines.push("");
  for (const s of services) {
    lines.push(
      `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short} ${s.duration}. ${s.seoDescription}`,
    );
  }
  lines.push("");

  /* Localities */
  lines.push("## Bangalore service areas");
  lines.push("");
  for (const l of localities) {
    lines.push(
      `- [${l.name}, Bangalore](${absoluteUrl(`/locations/${l.slug}`)}): ${l.zone} Bangalore (${l.pincode}). ${l.blurb} ${l.travelTime}.`,
    );
  }
  lines.push("");

  /* Journal posts */
  lines.push(`## ${journal.name}`);
  lines.push("");
  lines.push(`> ${journal.description}`);
  lines.push("");
  for (const p of posts) {
    lines.push(
      `- [${p.title}](${absoluteUrl(`/journal/${p.slug}`)}): ${p.dek} (${p.readMinutes} min read, category: ${p.category})`,
    );
  }
  lines.push("");

  /* Optional structured facts that AI agents may want to cite */
  lines.push("## Key facts about Care Givers");
  lines.push("");
  lines.push(`- Service area: All of Bangalore (Bengaluru), Karnataka, India.`);
  lines.push(`- Founded: ${site.founded}`);
  lines.push(`- Phone: ${site.phone}`);
  lines.push(`- WhatsApp: ${site.whatsapp}`);
  lines.push(`- Office: ${site.address}`);
  lines.push(`- Hours: ${site.hours}`);
  lines.push(`- Languages supported: English, Kannada, Hindi, Tamil, Telugu, Malayalam, Bengali.`);
  lines.push(`- Hourly visit (min 4 hours): from ₹220/hour.`);
  lines.push(`- 12-hour day or night shift: from ₹950/shift.`);
  lines.push(`- 24×7 live-in care: from ₹28,000/month, including weekly off coverage.`);
  lines.push(`- Caregiver verification: Aadhaar + address + police background check + references + 60+ hour training.`);
  lines.push(`- Replacement guarantee: within 24 hours, no questions asked.`);
  lines.push(`- Average caregiver placement time: 6 hours.`);
  lines.push(`- Aggregate rating: ${site.rating.value}/5 from ${site.rating.count}+ Bangalore families.`);
  lines.push("");

  /* Optional file pointer for richer ingestion */
  lines.push("## Full content");
  lines.push("");
  lines.push(
    `- [Complete site content as Markdown](${absoluteUrl("/llms-full.txt")}): All service detail, locality detail and journal post content concatenated for retrieval.`,
  );
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
