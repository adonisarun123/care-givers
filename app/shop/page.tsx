import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  getProductsByCategory,
  products,
  type ProductCategory,
} from "@/lib/shop";
import { buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { FinalCta } from "@/components/FinalCta";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Care Givers Shop — Hospital Beds, Wheelchairs, Oxygen & Monitoring in Bangalore",
  description:
    "Buy or rent home healthcare equipment in Bangalore — hospital beds, wheelchairs, oxygen concentrators, CPAP, BP monitors. Transparent pricing, free delivery and assembly.",
  path: "/shop",
});

export default function ShopIndex() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-16 sm:pt-24 pb-12">
          <div className="max-w-3xl">
            <span className="chip">{products.length} products · Bangalore-wide delivery</span>
            <h1 className="mt-5 font-display text-[44px] sm:text-[58px] md:text-[68px] leading-[1.04] tracking-[-0.02em] text-ink-900">
              Equipment that makes
              <br />
              <span className="text-teal-700">home care possible.</span>
            </h1>
            <p className="mt-6 lead">
              Hospital beds, wheelchairs, oxygen concentrators, BP monitors — the
              equipment our caregivers actually use every day, available to buy or
              rent. Free delivery and assembly across Bangalore. Transparent prices.
              The same care-first philosophy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.whatsappHref} className="btn-lg btn-primary">
                <WhatsAppIcon size={16} /> Ask about a product
              </a>
              <Link href="#categories" className="btn-lg btn-secondary">
                Browse the catalog
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink-600">
              {[
                "Buy or rent — both prices shown",
                "Free delivery & assembly in Bangalore",
                "1-year warranty on purchases",
                "Replacement on rentals within 24 hours",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <span className="grid place-items-center h-5 w-5 rounded-full bg-sage-100 text-sage-700">
                    <CheckIcon size={13} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <section id="categories" className="py-12">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => {
              const count = getProductsByCategory(c.slug).length;
              return (
                <li key={c.slug}>
                  <Link
                    href={`#${c.slug}`}
                    className="group block rounded-3xl bg-white ring-1 ring-ink-100 p-6 hover:shadow-soft transition"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {count} products
                    </div>
                    <div className="mt-2 font-display text-[18px] text-ink-900 group-hover:text-teal-800 transition">
                      {c.name}
                    </div>
                    <p className="mt-1.5 text-[13px] text-ink-600 leading-relaxed">
                      {c.short}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Products grouped by category */}
      <section className="py-8">
        <div className="container">
          {categories.map((c) => {
            const list = getProductsByCategory(c.slug);
            if (!list.length) return null;
            return (
              <div key={c.slug} id={c.slug} className="mb-16 last:mb-0 scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                  <div className="max-w-xl">
                    <span className="section-eyebrow">
                      <span className="h-px w-6 bg-teal-500" /> {c.name}
                    </span>
                    <p className="mt-3 text-[15.5px] text-ink-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <ProductCard product={p} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* How rental works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-eyebrow justify-center">
              <span className="h-px w-6 bg-teal-500" /> How rental works
            </span>
            <h2 className="mt-3 section-title">Buy or rent, equally easy.</h2>
            <p className="mt-4 lead">
              Most equipment can be rented monthly for the duration of recovery, or
              bought outright. We deliver, assemble, and pick back up at the end.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              {
                n: "01",
                title: "WhatsApp us",
                body: "Tell us the product and how long you'll need it. Send the doctor's prescription if it's oxygen or BiPAP.",
              },
              {
                n: "02",
                title: "Confirm & deliver",
                body: "We confirm pricing and an installation slot. Free delivery and assembly across Bangalore, usually within 24 hours.",
              },
              {
                n: "03",
                title: "Use as long as needed",
                body: "Minimum 30-day rental period. Extensions are charged pro-rata. Replacement within 24 hours if anything fails.",
              },
              {
                n: "04",
                title: "We pick up",
                body: "When you're done, message us. We collect the equipment from your home — no fuss, no return shipping.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="rounded-3xl bg-cream-50 ring-1 ring-cream-200 p-6"
              >
                <div className="font-display text-3xl text-teal-700 tabular-nums">
                  {s.n}
                </div>
                <h3 className="mt-2 font-display text-[18px] text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-ink-600 leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-12">
        <div className="container">
          <div className="rounded-[28px] bg-cream-50 ring-1 ring-cream-200 p-7 sm:p-9 grid sm:grid-cols-3 gap-6 text-center">
            <Trust
              icon={ShieldCheckIcon}
              title="Quality verified"
              body="Every product comes from manufacturers we use ourselves on placements. We don't sell anything we wouldn't put in our own homes."
            />
            <Trust
              icon={ClockIcon}
              title="24-hour replacement"
              body="If a rental unit fails, we replace it within 24 hours. No questions. No charge."
            />
            <Trust
              icon={SparklesIcon}
              title="No pressure, no upsell"
              body="If a cheaper option fits your situation better, we'll tell you. The pricing on this page is the pricing we quote."
            />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Trust({
  icon: Icon,
  title,
  body,
}: {
  icon: (p: { size?: number }) => React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-sage-100 text-sage-700">
        <Icon size={20} />
      </div>
      <div className="mt-3 font-display text-lg text-ink-900">{title}</div>
      <p className="mt-1 text-[13.5px] text-ink-600 leading-relaxed">{body}</p>
    </div>
  );
}
