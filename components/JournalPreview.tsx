import Link from "next/link";
import { getRecentPosts, journal } from "@/lib/posts";
import { JournalCard } from "@/components/JournalCard";
import { ArrowRightIcon } from "@/components/icons";

export function JournalPreview() {
  const featured = getRecentPosts(1)[0];
  const others = getRecentPosts(4).slice(1);

  if (!featured) return null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> {journal.name}
            </span>
            <h2 className="mt-3 section-title">{journal.tagline}</h2>
            <p className="mt-4 lead">{journal.description}</p>
          </div>
          <Link href="/journal" className="btn-md btn-secondary self-start">
            Read all posts <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <JournalCard post={featured} variant="featured" />
          <ul className="space-y-2">
            {others.map((p) => (
              <li key={p.slug}>
                <JournalCard post={p} variant="compact" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
