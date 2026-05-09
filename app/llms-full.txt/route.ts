/**
 * /llms-full.txt — full site content as Markdown for AI crawlers and
 * retrieval-augmented systems. Mirrors the visible content of every service,
 * locality and journal page so AI agents can answer user questions accurately
 * without scraping JS-rendered pages.
 */
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { localities } from "@/lib/locations";
import { posts } from "@/lib/posts";
import type { Section } from "@/lib/posts";

export const dynamic = "force-static";

function sectionToMarkdown(s: Section): string {
  switch (s.kind) {
    case "p":
      return s.text;
    case "h2":
      return `## ${s.text}`;
    case "h3":
      return `### ${s.text}`;
    case "list":
      return s.items
        .map((item, i) => (s.ordered ? `${i + 1}. ${item}` : `- ${item}`))
        .join("\n");
    case "quote":
      return `> ${s.text}${s.attribution ? `\n> — ${s.attribution}` : ""}`;
    case "callout":
      return [
        `> **${s.title}**`,
        `> ${s.text}`,
        s.cta ? `> Link: ${s.cta.label} → ${s.cta.href}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    case "faq":
      return s.items
        .map((it) => `**Q: ${it.q}**\n\nA: ${it.a}`)
        .join("\n\n");
  }
}

export function GET() {
  const out: string[] = [];

  out.push(`# ${site.name} — Full Site Content`);
  out.push("");
  out.push(`> ${site.description}`);
  out.push("");
  out.push(
    `This file mirrors all visible content from ${site.name} for AI agents, retrieval systems and offline indexing.`,
  );
  out.push("");
  out.push("---");
  out.push("");

  /* About */
  out.push(`# About ${site.name}`);
  out.push("");
  out.push(
    `${site.name} is a Bangalore-based home caregiving service founded in ${site.founded}. ` +
      `We place verified, trained caregivers and patient attendants for families across all of Bangalore. ` +
      `Our caregivers complete a 60+ hour training programme; live-in placements include weekly off coverage and a bi-weekly supervisor visit. ` +
      `Pricing is published transparently and replacement is guaranteed within 24 hours.`,
  );
  out.push("");
  out.push(`- Phone: ${site.phone}`);
  out.push(`- WhatsApp: ${site.whatsapp}`);
  out.push(`- Office: ${site.address}`);
  out.push(`- Hours: ${site.hours}`);
  out.push(`- Aggregate rating: ${site.rating.value}/5 from ${site.rating.count}+ Bangalore families.`);
  out.push("");
  out.push("---");
  out.push("");

  /* Services */
  out.push("# Home caregiving services");
  out.push("");
  for (const s of services) {
    out.push(`## ${s.name}`);
    out.push("");
    out.push(`> ${s.emotional}`);
    out.push("");
    out.push(s.hero);
    out.push("");
    for (const p of s.intro) {
      out.push(p);
      out.push("");
    }

    out.push(`### Duration: ${s.duration}`);
    out.push("");

    out.push(`### Best for`);
    out.push(s.whoFor.map((w) => `- ${w}`).join("\n"));
    out.push("");

    out.push(`### Conditions we support`);
    out.push(
      s.conditions.map((c) => `- **${c.title}**: ${c.detail}`).join("\n"),
    );
    out.push("");

    out.push(`### What's included`);
    out.push(s.whatsIncluded.map((i) => `- ${i}`).join("\n"));
    out.push("");

    out.push(`### What's not included`);
    out.push(s.notIncluded.map((i) => `- ${i}`).join("\n"));
    out.push("");

    out.push(`### ${s.careTimeline.title}`);
    out.push(
      s.careTimeline.items
        .map(
          (it) =>
            `- **${it.time} — ${it.label}**${it.detail ? `: ${it.detail}` : ""}`,
        )
        .join("\n"),
    );
    out.push("");

    out.push(`### Caregiver assigned`);
    out.push(`- Training: ${s.caregiverProfile.trainingHours}`);
    out.push(`- Focus: ${s.caregiverProfile.focus}`);
    out.push(`- Supervision: ${s.caregiverProfile.supervision}`);
    out.push(`- Verifications: ${s.caregiverProfile.certifications.join(", ")}`);
    out.push("");

    out.push(`### How we match you`);
    out.push(s.matchingNotes);
    out.push("");

    out.push(`### Pricing`);
    out.push(
      s.pricing
        .map((p) => `- ${p.label}: ${p.price}${p.note ? ` (${p.note})` : ""}`)
        .join("\n"),
    );
    out.push("");

    out.push(`### FAQs`);
    out.push("");
    for (const f of s.faqs) {
      out.push(`**Q: ${f.q}**`);
      out.push("");
      out.push(`A: ${f.a}`);
      out.push("");
    }

    out.push("---");
    out.push("");
  }

  /* Localities */
  out.push("# Bangalore service areas");
  out.push("");
  for (const l of localities) {
    out.push(`## ${l.name}, Bangalore (${l.pincode})`);
    out.push("");
    out.push(`Zone: ${l.zone} Bangalore. Average response time: ${l.travelTime}.`);
    out.push("");
    out.push(l.longCopy);
    out.push("");
    out.push(`### Local hospitals we work with`);
    out.push(l.hospitals.map((h) => `- ${h}`).join("\n"));
    out.push("");
    out.push("---");
    out.push("");
  }

  /* Journal */
  out.push("# The Care Journal");
  out.push("");
  for (const p of posts) {
    out.push(`## ${p.title}`);
    out.push("");
    out.push(
      `_${p.category} · ${p.readMinutes} min read · published ${p.publishedAt} by ${p.author.name}_`,
    );
    out.push("");
    out.push(`> ${p.dek}`);
    out.push("");
    for (const sec of p.sections) {
      out.push(sectionToMarkdown(sec));
      out.push("");
    }
    out.push("---");
    out.push("");
  }

  return new Response(out.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
