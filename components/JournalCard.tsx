import Link from "next/link";
import type { Post } from "@/lib/posts";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";

export function JournalCard({
  post,
  variant = "default",
}: {
  post: Post;
  variant?: "default" | "featured" | "compact";
}) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <Link
        href={`/journal/${post.slug}`}
        className="group block rounded-[28px] overflow-hidden bg-white ring-1 ring-ink-100 shadow-soft hover:shadow-glow transition"
      >
        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="relative aspect-[16/10] lg:aspect-auto bg-sage-100 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.hero}
              alt={post.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 chip bg-white/95">
              {post.category}
            </span>
          </div>
          <div className="p-7 sm:p-9 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-ink-500">
              <span>{date}</span>
              <span className="h-1 w-1 rounded-full bg-ink-300" />
              <span className="inline-flex items-center gap-1">
                <ClockIcon size={12} /> {post.readMinutes} min read
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-[34px] leading-[1.15] tracking-tight text-ink-900 group-hover:text-teal-800 transition">
              {post.title}
            </h3>
            <p className="mt-4 text-[16px] text-ink-600 leading-relaxed">{post.dek}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700">
              Read the article <ArrowRightIcon size={14} />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/journal/${post.slug}`}
        className="group flex items-start gap-4 rounded-2xl p-3 hover:bg-cream-50 transition"
      >
        <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-sage-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.hero} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.14em] text-teal-700 font-semibold">
            {post.category}
          </div>
          <h4 className="mt-1 font-display text-[16px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
            {post.title}
          </h4>
          <div className="mt-1 text-[12px] text-ink-500">{post.readMinutes} min read</div>
        </div>
      </Link>
    );
  }

  // default
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group flex flex-col rounded-3xl overflow-hidden bg-white ring-1 ring-ink-100 shadow-soft hover:shadow-glow transition"
    >
      <div className="relative aspect-[16/10] bg-sage-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.hero}
          alt={post.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 chip bg-white/95">{post.category}</span>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-ink-500">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-ink-300" />
          <span className="inline-flex items-center gap-1">
            <ClockIcon size={12} /> {post.readMinutes} min
          </span>
        </div>
        <h3 className="mt-2 font-display text-[19px] sm:text-[21px] leading-[1.25] tracking-tight text-ink-900 group-hover:text-teal-800 transition">
          {post.title}
        </h3>
        <p className="mt-2 text-[14.5px] text-ink-600 leading-relaxed line-clamp-3">{post.dek}</p>
        <div className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition">
          Read article <ArrowRightIcon size={14} />
        </div>
      </div>
    </Link>
  );
}
