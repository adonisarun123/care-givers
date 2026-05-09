import Link from "next/link";
import type { Section } from "@/lib/posts";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Renders the typed section[] body of a journal post into accessible,
 * well-styled HTML. Keeps post content readable and SEO-friendly.
 */
export function PostBody({ sections }: { sections: Section[] }) {
  return (
    <article className="post-body">
      {sections.map((s, i) => {
        switch (s.kind) {
          case "p":
            return (
              <p
                key={i}
                className="text-[17.5px] leading-[1.75] text-ink-800 mb-5"
              >
                {s.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={s.id || slugify(s.text)}
                className="font-display text-[26px] sm:text-[30px] tracking-tight text-ink-900 mt-10 mb-4 scroll-mt-24"
              >
                {s.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display text-[20px] tracking-tight text-ink-900 mt-7 mb-3"
              >
                {s.text}
              </h3>
            );
          case "list":
            return s.ordered ? (
              <ol key={i} className="my-5 space-y-2.5">
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[17px] leading-[1.7] text-ink-800"
                  >
                    <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-teal-50 text-teal-700 font-display text-sm">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="my-5 space-y-2.5">
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[17px] leading-[1.7] text-ink-800"
                  >
                    <span className="shrink-0 mt-1.5 grid h-5 w-5 place-items-center rounded-full bg-sage-100 text-sage-700">
                      <CheckIcon size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <figure key={i} className="my-8">
                <blockquote className="border-l-4 border-teal-500 pl-5 sm:pl-6 font-display text-[22px] sm:text-[24px] leading-[1.4] text-ink-900">
                  “{s.text}”
                </blockquote>
                {s.attribution && (
                  <figcaption className="mt-3 text-sm text-ink-500">
                    — {s.attribution}
                  </figcaption>
                )}
              </figure>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-8 rounded-3xl bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6 sm:p-7"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  {s.title}
                </div>
                <p className="mt-2 text-[16.5px] leading-relaxed text-ink-800">
                  {s.text}
                </p>
                {s.cta && (
                  <Link
                    href={s.cta.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
                  >
                    {s.cta.label} <ArrowRightIcon size={14} />
                  </Link>
                )}
              </aside>
            );
          case "faq":
            return (
              <div key={i} className="my-8 rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Quick answers
                </div>
                <dl className="mt-4 divide-y divide-ink-100">
                  {s.items.map((it, j) => (
                    <div key={j} className="py-4">
                      <dt className="font-display text-[18px] text-ink-900">{it.q}</dt>
                      <dd className="mt-2 text-[15.5px] text-ink-700 leading-relaxed">{it.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
        }
      })}
    </article>
  );
}
