import type { Metadata } from "next";
import Link from "next/link";
import {
  allCategories,
  categoryDescriptions,
  getPostsByCategory,
  getRecentPosts,
  journal,
  posts,
} from "@/lib/posts";
import { JournalCard } from "@/components/JournalCard";
import { FinalCta } from "@/components/FinalCta";
import { ArrowRightIcon } from "@/components/icons";

import { buildMetadata } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: `${journal.name} — ${journal.tagline}`,
  description: journal.description,
  path: "/journal",
});

export default function JournalIndex() {
  const featured = getRecentPosts(1)[0];
  const recent = getRecentPosts(7).slice(1); // skip the featured

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Care Journal", href: "/journal" },
        ]}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50" />
        <div className="container pt-16 sm:pt-24 pb-10">
          <div className="max-w-3xl">
            <span className="chip">{journal.name}</span>
            <h1 className="mt-5 font-display text-[44px] sm:text-[56px] md:text-[68px] leading-[1.04] tracking-[-0.02em] text-ink-900">
              {journal.tagline}
            </h1>
            <p className="mt-5 lead">{journal.description}</p>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      {featured && (
        <section className="pb-12">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> Latest
              </span>
            </div>
            <JournalCard post={featured} variant="featured" />
          </div>
        </section>
      )}

      {/* ── Categories overview ── */}
      <section className="py-10">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allCategories.map((c) => {
              const count = getPostsByCategory(c).length;
              return (
                <li key={c}>
                  <Link
                    href={`/journal#${slugify(c)}`}
                    className="group block rounded-3xl bg-white ring-1 ring-ink-100 p-6 hover:shadow-soft transition"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {count} {count === 1 ? "post" : "posts"}
                    </div>
                    <div className="mt-2 font-display text-[20px] text-ink-900 group-hover:text-teal-800 transition">
                      {c}
                    </div>
                    <p className="mt-2 text-[13.5px] text-ink-600 leading-relaxed">
                      {categoryDescriptions[c]}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Recent posts grid ── */}
      <section className="py-10">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="section-title">More recent reads</h2>
            <Link href="#all" className="link-quiet text-sm">All posts ↓</Link>
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((p) => (
              <li key={p.slug}>
                <JournalCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── By category ── */}
      <section id="all" className="py-16 bg-cream-50">
        <div className="container">
          {allCategories.map((c) => {
            const list = getPostsByCategory(c);
            if (!list.length) return null;
            return (
              <div key={c} id={slugify(c)} className="mb-16 last:mb-0 scroll-mt-24">
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="section-eyebrow">
                      <span className="h-px w-6 bg-teal-500" /> {c}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl text-ink-900">
                      {categoryDescriptions[c]}
                    </h3>
                  </div>
                </div>
                <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <JournalCard post={p} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="rounded-[28px] bg-ink-900 text-cream-50 p-8 sm:p-12 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
              <span className="h-px w-6 bg-sage-300" /> Stay close
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-cream-50">
              A thoughtful note, once a month.
            </h2>
            <p className="mt-3 text-cream-100/80 max-w-xl mx-auto">
              We publish a short letter for Bangalore families on home caregiving — no
              marketing, no bait. Unsubscribe with one click.
            </p>
            <form
              action="/journal"
              className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              aria-label="Subscribe to the Care Journal"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-white/10 ring-1 ring-white/15 px-5 py-3 text-sm text-cream-50 placeholder:text-cream-100/50 outline-none focus:ring-2 focus:ring-sage-300/50"
              />
              <button type="submit" className="btn-md bg-sage-400 text-ink-900 hover:bg-sage-300">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-[11.5px] text-cream-100/60">
              Stored privately. Used only to send the journal.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-link to the care quiz and services index */}
      <section className="py-10">
        <div className="container max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/care-quiz"
              className="group rounded-[28px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-7 sm:p-8 hover:shadow-soft transition"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                Ready to act on what you've read?
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink-900">
                Take the 2-minute care quiz.
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-700">
                We match your situation to the right service and a transparent
                price range — no callbacks.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                Start the quiz <ArrowRightIcon size={14} />
              </span>
            </Link>

            <Link
              href="/services"
              className="group rounded-[28px] bg-gradient-to-br from-teal-50 via-cream-50 to-peach-50 ring-1 ring-teal-200 p-7 sm:p-8 hover:shadow-soft transition"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                Browse our services
              </span>
              <h3 className="mt-3 font-display text-2xl text-ink-900">
                Elder, patient, live-in, dementia & more.
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-700">
                Eight care types across Bangalore, each with transparent pricing
                and detailed inclusions.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                See all services <ArrowRightIcon size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
