import Link from "next/link";
import type { Post } from "@/lib/posts";
import type { Service } from "@/lib/services";
import type { Product } from "@/lib/shop";
import type { ToolLink } from "@/lib/related";
import {
  ArrowRightIcon,
  ClockIcon,
  HeartHandIcon,
  SparklesIcon,
} from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";

/* ── Related Journal posts ────────────────────────────── */

export function RelatedJournal({
  posts,
  heading = "Continue reading",
  eyebrow = "From The Care Journal",
  blurb,
}: {
  posts: Post[];
  heading?: string;
  eyebrow?: string;
  blurb?: string;
}) {
  if (!posts.length) return null;
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> {eyebrow}
            </span>
            <h2 className="mt-3 section-title">{heading}</h2>
            {blurb && <p className="mt-3 lead">{blurb}</p>}
          </div>
          <Link href="/journal" className="link-quiet text-sm text-ink-600">
            All journal posts →
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/journal/${p.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 hover:bg-white hover:shadow-soft transition"
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
                  <span>{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-ink-300" />
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon size={11} /> {p.readMinutes} min
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[19px] leading-[1.25] text-ink-900 group-hover:text-teal-800 transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] text-ink-600 leading-relaxed line-clamp-3">
                  {p.dek}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition">
                  Read article <ArrowRightIcon size={14} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Related Services ────────────────────────────── */

export function RelatedServices({
  services,
  heading = "Care we'd recommend for this situation",
  eyebrow = "Services that fit",
  blurb,
}: {
  services: Service[];
  heading?: string;
  eyebrow?: string;
  blurb?: string;
}) {
  if (!services.length) return null;
  return (
    <section className="py-14 sm:py-20 bg-cream-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> {eyebrow}
            </span>
            <h2 className="mt-3 section-title">{heading}</h2>
            {blurb && <p className="mt-3 lead">{blurb}</p>}
          </div>
          <Link href="/services" className="link-quiet text-sm text-ink-600">
            All services →
          </Link>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white ring-1 ring-ink-100 p-6 hover:shadow-soft transition"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-100 text-sage-700">
                  <HeartHandIcon size={20} />
                </span>
                <h3 className="mt-4 font-display text-[20px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
                  {s.name}
                </h3>
                <p className="mt-2 text-[14px] text-ink-600 leading-relaxed">
                  {s.short}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-500">
                  <span>{s.duration}</span>
                  <span className="text-teal-700 opacity-0 group-hover:opacity-100 transition inline-flex items-center gap-1">
                    Explore <ArrowRightIcon size={12} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Related Tools ────────────────────────────── */

export function RelatedTools({
  tools,
  heading = "Tools that might help",
  eyebrow = "Use these",
}: {
  tools: ToolLink[];
  heading?: string;
  eyebrow?: string;
}) {
  if (!tools.length) return null;
  return (
    <section className="py-14 sm:py-20">
      <div className="container max-w-4xl">
        <div className="text-center max-w-xl mx-auto">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-6 bg-teal-500" /> {eyebrow}
          </span>
          <h2 className="mt-3 section-title">{heading}</h2>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {tools.map((t) => (
            <li key={t.slug}>
              <Link
                href={t.href}
                className="group flex items-start gap-4 rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 hover:-translate-y-0.5 hover:shadow-glow transition"
              >
                <span className="shrink-0 grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                  <SparklesIcon size={20} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[19px] text-ink-900 group-hover:text-teal-800 transition">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-ink-600 leading-relaxed">
                    {t.blurb}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-700">
                    Open <ArrowRightIcon size={14} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Related products (equipment that supports a service) ────────────────────────────── */

export function RelatedProducts({
  products,
  heading = "Equipment families often use for this care",
  eyebrow = "From the Care Givers shop",
  blurb,
}: {
  products: Product[];
  heading?: string;
  eyebrow?: string;
  blurb?: string;
}) {
  if (!products.length) return null;
  return (
    <section className="py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> {eyebrow}
            </span>
            <h2 className="mt-3 section-title">{heading}</h2>
            {blurb && <p className="mt-3 lead">{blurb}</p>}
          </div>
          <Link href="/shop" className="link-quiet text-sm text-ink-600">
            Browse the shop →
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Related localities (used on journal posts) ────────────────────────────── */

export function RelatedLocalities({
  localities,
  heading = "We serve these Bangalore neighbourhoods",
  eyebrow = "Local coverage",
}: {
  localities: { slug: string; name: string; zone: string; travelTime: string }[];
  heading?: string;
  eyebrow?: string;
}) {
  if (!localities.length) return null;
  return (
    <section className="py-12">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> {eyebrow}
            </span>
            <h3 className="mt-2 font-display text-2xl text-ink-900">{heading}</h3>
          </div>
          <Link href="/locations" className="link-quiet text-sm text-ink-600">
            All locations →
          </Link>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {localities.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex items-start gap-3 rounded-2xl bg-white ring-1 ring-ink-100 p-4 hover:shadow-soft transition"
              >
                <span className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <div className="font-medium text-ink-900 group-hover:text-teal-700 transition">
                    {l.name}
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5">
                    {l.zone} Bangalore · {l.travelTime}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
