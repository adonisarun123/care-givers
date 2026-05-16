import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatINR,
  getCategoryBySlug,
  getProductBySlug,
  getProductsByCategory,
  products,
  type Product,
} from "@/lib/shop";
import { services } from "@/lib/services";
import { ProductIcon } from "@/components/ProductIcon";
import { ProductCard } from "@/components/ProductCard";
import { FinalCta } from "@/components/FinalCta";
import { absoluteUrl, buildMetadata, site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.seoTitle,
    description: p.seoDescription,
    path: `/shop/${p.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const relatedServices = product.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);

  const hasRental =
    product.pricing.rentPerMonth && product.pricing.rentPerMonth > 0;

  // Product JSON-LD for Google Merchant / rich snippets
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description.join(" "),
    category: category?.name,
    brand: { "@type": "Brand", name: site.name },
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.pricing.buy,
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/shop/${product.slug}`),
        seller: { "@type": "Organization", name: site.name },
      },
      ...(hasRental
        ? [
            {
              "@type": "Offer",
              priceCurrency: "INR",
              price: product.pricing.rentPerMonth,
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: product.pricing.rentPerMonth,
                priceCurrency: "INR",
                unitCode: "MON",
                unitText: "month",
              },
              availability: "https://schema.org/InStock",
              url: absoluteUrl(`/shop/${product.slug}`),
              name: "Rental",
            },
          ]
        : []),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: 50,
      bestRating: 5,
    },
  };

  // WhatsApp pre-filled message
  const waText = encodeURIComponent(
    `Hi, I'm interested in the ${product.name} (₹${formatINR(product.pricing.buy)}${hasRental ? ` / ₹${formatINR(product.pricing.rentPerMonth!)}/month rental` : ""}). Could you help me with details?`,
  );
  const waHref = `https://wa.me/919845612345?text=${waText}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
          { name: category?.name || "Category", href: `/shop#${product.category}` },
          { name: product.name, href: `/shop/${product.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="container pt-12 sm:pt-20 pb-10">
          <nav className="text-xs text-ink-500">
            <Link href="/" className="link-quiet">Home</Link>
            <span className="px-2">/</span>
            <Link href="/shop" className="link-quiet">Shop</Link>
            <span className="px-2">/</span>
            <Link href={`/shop#${product.category}`} className="link-quiet">
              {category?.name}
            </Link>
            <span className="px-2">/</span>
            <span className="text-ink-700">{product.name}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Product visual */}
            <div className="relative aspect-square rounded-[32px] bg-gradient-to-br from-sage-100 to-cream-50 ring-1 ring-ink-100 shadow-soft flex items-center justify-center text-sage-800">
              <ProductIcon type={product.icon} size={240} />
              <span className="absolute top-5 left-5 chip-cream bg-white/95">
                {category?.name}
              </span>
            </div>

            {/* Buying panel */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-ink-900 leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-4 text-[17px] text-ink-700 leading-relaxed">
                {product.short}
              </p>

              {/* Pricing block */}
              <div className="mt-7 rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft p-6 sm:p-7">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                      Buy outright
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-display text-3xl text-ink-900 tabular-nums">
                        ₹{formatINR(product.pricing.buy)}
                      </span>
                      {product.pricing.mrp && (
                        <span className="text-[13px] text-ink-400 line-through">
                          ₹{formatINR(product.pricing.mrp)}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-[12px] text-ink-500">
                      1-year warranty · free delivery
                    </div>
                  </div>

                  {hasRental && (
                    <div className="sm:border-l sm:border-ink-100 sm:pl-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                        Rent monthly
                      </div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-display text-3xl text-ink-900 tabular-nums">
                          ₹{formatINR(product.pricing.rentPerMonth!)}
                        </span>
                        <span className="text-[14px] text-ink-500">/ month</span>
                      </div>
                      <div className="mt-1 text-[12px] text-ink-500">
                        Min 30 days · free pickup at end
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-ink-100 flex flex-wrap gap-3">
                  <a href={waHref} className="btn-md btn-primary">
                    <WhatsAppIcon size={16} />
                    {hasRental ? "Request — buy or rent" : "Request via WhatsApp"}
                  </a>
                  <a href={site.phoneHref} className="btn-md btn-secondary">
                    <PhoneIcon size={16} /> Call {site.phone}
                  </a>
                </div>

                <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-ink-600">
                  {[
                    "Free delivery in Bangalore",
                    "Free assembly & setup",
                    "Replacement in 24 hours",
                    "No advance payment",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-sage-100 text-sage-700">
                        <CheckIcon size={10} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-teal-500" /> About this product
          </span>
          <div className="mt-4 space-y-5 text-[17px] leading-[1.78] text-ink-800">
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + included */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> Specifications
              </span>
              <h2 className="mt-3 section-title">The technical details.</h2>

              <dl className="mt-8 divide-y divide-ink-100 rounded-3xl bg-white ring-1 ring-ink-100 shadow-soft">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-[1fr_1.4fr] gap-4 px-5 py-3.5"
                  >
                    <dt className="text-[13.5px] text-ink-500">{s.label}</dt>
                    <dd className="text-[14px] text-ink-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <span className="section-eyebrow">
                <span className="h-px w-6 bg-teal-500" /> What's included
              </span>
              <h2 className="mt-3 section-title">In the box.</h2>

              <ul className="mt-8 space-y-3">
                {product.includes.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-cream-50 ring-1 ring-cream-200 p-4"
                  >
                    <span className="shrink-0 mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-sage-100 text-sage-700">
                      <CheckIcon size={13} />
                    </span>
                    <span className="text-[14.5px] text-ink-800">{i}</span>
                  </li>
                ))}
              </ul>

              {/* Care services that use this product */}
              {relatedServices.length > 0 && (
                <div className="mt-8 rounded-3xl bg-gradient-to-br from-sage-50 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Often paired with
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedServices.map((s) =>
                      s ? (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="chip-cream bg-white"
                        >
                          {s.name}
                        </Link>
                      ) : null,
                    )}
                  </div>
                  <p className="mt-3 text-[13px] text-ink-600 leading-relaxed">
                    Patients using this product often book one of these care
                    services — for a complete setup.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs.length > 0 && (
        <section className="py-14 sm:py-20 bg-white">
          <div className="container max-w-3xl">
            <div className="text-center">
              <span className="section-eyebrow justify-center">
                <span className="h-px w-6 bg-teal-500" /> Frequently asked
              </span>
              <h2 className="mt-3 section-title">Common questions.</h2>
            </div>
            <div className="mt-10 divide-y divide-ink-100">
              {product.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-6">
                    <span className="font-display text-[18px] sm:text-xl text-ink-900">
                      {f.q}
                    </span>
                    <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-ink-100 text-ink-700 transition group-open:rotate-45 group-open:bg-teal-700 group-open:text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14" /><path d="M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] text-ink-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final purchase CTA */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-3xl">
          <div className="rounded-[28px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 ring-1 ring-sage-200 p-8 sm:p-12 text-center">
            <span className="chip">Ready to book?</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-ink-900">
              {hasRental
                ? "Buy outright or rent monthly — message us either way."
                : "Order this product via WhatsApp."}
            </h2>
            <p className="mt-3 text-[15.5px] text-ink-700 max-w-xl mx-auto">
              Tell us where in Bangalore you are and when you need it. We confirm
              the exact price and slot back on WhatsApp — no payment until delivery.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={waHref} className="btn-lg btn-primary">
                <WhatsAppIcon size={16} /> WhatsApp now
              </a>
              <a href={site.phoneHref} className="btn-lg btn-secondary">
                <PhoneIcon size={16} /> Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-14 sm:py-20 bg-cream-50">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <h2 className="section-title">More in {category?.name.toLowerCase()}</h2>
              <Link href="/shop" className="link-quiet text-sm">All products →</Link>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p: Product) => (
                <li key={p.slug}>
                  <ProductCard product={p} />
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
