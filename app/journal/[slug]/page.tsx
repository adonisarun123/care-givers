import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";
import { JournalCard } from "@/components/JournalCard";
import { PostBody } from "@/components/PostBody";
import { TableOfContents } from "@/components/TableOfContents";
import { FinalCta } from "@/components/FinalCta";
import { ArrowRightIcon, ClockIcon, SparklesIcon, WhatsAppIcon } from "@/components/icons";
import { absoluteUrl, buildMetadata, site } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  SpeakableJsonLd,
} from "@/components/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPostBySlug(params.slug);
  if (!p) return {};
  const meta = buildMetadata({
    title: p.seoTitle,
    description: p.seoDescription,
    path: `/journal/${p.slug}`,
    ogImage: p.hero,
    type: "article",
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: p.publishedAt,
      authors: [p.author.name],
      tags: p.tags,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = post.related
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // Find any FAQ section in the post body and surface it for FAQPage schema
  const faqSection = post.sections.find((s) => s.kind === "faq");
  const faqs = faqSection && faqSection.kind === "faq" ? faqSection.items : [];

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.seoDescription}
        hero={post.hero}
        url={`/journal/${post.slug}`}
        publishedAt={post.publishedAt}
        authorName={post.author.name}
        category={post.category}
        keywords={post.tags}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "The Care Journal", href: "/journal" },
          { name: post.category, href: `/journal#${post.category.toLowerCase().replace(/\W+/g, "-")}` },
          { name: post.title, href: `/journal/${post.slug}` },
        ]}
      />
      {faqs.length > 0 && <FaqJsonLd faqs={faqs} />}
      <SpeakableJsonLd
        url={`/journal/${post.slug}`}
        cssSelectors={[".post-body p", ".post-body h2", "[data-tldr]"]}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50" />
        <div className="container pt-12 sm:pt-16 pb-8">
          <nav className="text-xs text-ink-500">
            <Link href="/" className="link-quiet">Home</Link>
            <span className="px-2">/</span>
            <Link href="/journal" className="link-quiet">The Care Journal</Link>
            <span className="px-2">/</span>
            <span className="text-ink-700">{post.category}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="chip">{post.category}</span>
            <h1 className="mt-5 font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.06] tracking-[-0.02em] text-ink-900">
              {post.title}
            </h1>
            <p className="mt-5 text-[18px] sm:text-[20px] text-ink-600 leading-relaxed">
              {post.dek}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-teal-50 text-teal-700 font-display text-xs">
                  CG
                </span>
                <div>
                  <div className="text-ink-800 font-medium text-[13.5px]">
                    {post.author.name}
                  </div>
                  <div className="text-[12px]">{post.author.role}</div>
                </div>
              </div>
              <span className="hidden sm:block h-1 w-1 rounded-full bg-ink-300" />
              <span>{date}</span>
              <span className="h-1 w-1 rounded-full bg-ink-300" />
              <span className="inline-flex items-center gap-1">
                <ClockIcon size={13} /> {post.readMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="pb-10">
        <div className="container max-w-5xl">
          <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden bg-sage-100 ring-1 ring-ink-100/60 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── TL;DR direct-answer block (AEO) ── */}
      <section className="pb-6">
        <div className="container max-w-3xl">
          <div
            data-tldr
            className="rounded-3xl bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6 sm:p-7"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              <SparklesIcon size={14} /> The short answer
            </div>
            <p className="mt-3 text-[16.5px] sm:text-[17px] leading-[1.65] text-ink-800 speakable">
              {post.tldr}
            </p>
          </div>
        </div>
      </section>

      {/* ── Body + TOC ── */}
      <section className="pb-10">
        <div className="container grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14 max-w-6xl">
          <div className="max-w-3xl mx-auto lg:mx-0 w-full">
            <PostBody sections={post.sections} />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-7 border-t border-ink-100 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="chip-cream">#{t}</span>
              ))}
            </div>
          )}

          {/* Inline CTA */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-7 sm:p-9 text-center">
            <h3 className="font-display text-2xl sm:text-3xl text-ink-900">
              When you’re ready, we’re here.
            </h3>
            <p className="mt-3 text-[15.5px] text-ink-700 max-w-xl mx-auto">
              Care Givers places verified caregivers and patient attendants across
              Bangalore. Honest pricing. Replacement guarantee. Calm support.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn-md btn-primary">
                Book a caregiver <ArrowRightIcon size={14} />
              </Link>
              <a href={site.whatsappHref} className="btn-md btn-secondary">
                <WhatsAppIcon size={14} /> Talk to a care manager
              </a>
            </div>
          </div>
          </div>

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents sections={post.sections} />
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="py-16 bg-cream-50">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="section-title">Continue reading</h2>
              <Link href="/journal" className="link-quiet text-sm">All posts →</Link>
            </div>
            <ul className="grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <JournalCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
