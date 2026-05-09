import { StarIcon } from "@/components/icons";

const reviews = [
  {
    body:
      "We needed someone for Amma right after her hip surgery. Within 5 hours, Lakshmi was at our door — calm, kind, and so good with my mother. Three months in, we don’t know what we’d do without her.",
    name: "Anjali R.",
    meta: "Daughter · Indiranagar",
  },
  {
    body:
      "I’m in Singapore, my parents are in Whitefield. The team gave me daily updates, photos, even small things — when Appa refused breakfast, when his BP dipped. Real peace of mind.",
    name: "Karthik V.",
    meta: "Son (NRI) · Whitefield",
  },
  {
    body:
      "We had tried two agencies before. The difference here is the human touch — supervisor visits, gentle handling of my mother-in-law’s dementia, no pressure to upgrade plans.",
    name: "Sunita M.",
    meta: "Daughter-in-law · HSR Layout",
  },
  {
    body:
      "Booked a night caregiver for my dad after his stroke. The transparent pricing and the WhatsApp updates from the caregiver every morning — that’s what won my trust.",
    name: "Pradeep S.",
    meta: "Son · Jayanagar",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> What families tell us
          </span>
          <h2 className="mt-3 section-title">
            Words from the families we’ve walked beside.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon key={s} size={14} className="fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[14.5px] text-ink-700 leading-relaxed">
                “{r.body}”
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-ink-100/80">
                <div className="text-sm font-semibold text-ink-900">{r.name}</div>
                <div className="text-xs text-ink-500">{r.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
