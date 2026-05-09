import type { Section } from "@/lib/posts";
import { slugify } from "@/components/PostBody";

/**
 * Sticky table of contents auto-built from the post body's h2 sections.
 * Renders only when there are 3+ h2s — short posts don't need a TOC.
 */
export function TableOfContents({ sections }: { sections: Section[] }) {
  const headings = sections.filter((s) => s.kind === "h2") as Extract<
    Section,
    { kind: "h2" }
  >[];

  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-3xl bg-white ring-1 ring-ink-100 p-5 shadow-soft"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
        On this page
      </div>
      <ol className="mt-3 space-y-2 text-[14px]">
        {headings.map((h, i) => {
          const id = h.id || slugify(h.text);
          return (
            <li key={id} className="flex items-start gap-2.5 leading-snug">
              <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-cream-100 text-ink-500 text-[11px] font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${id}`}
                className="text-ink-700 hover:text-teal-700 transition link-quiet"
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
