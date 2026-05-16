import Link from "next/link";
import { getProductBySlug } from "@/lib/shop";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Featured-product rail for the homepage. One product per category — the
 * most-asked-for in each. Edit the slugs below if you want to feature
 * different products.
 */
const FEATURED_SLUGS = [
  "fully-electric-hospital-bed-5-function",
  "standard-foldable-wheelchair",
  "oxygen-concentrator-5-litre",
  "upper-arm-bp-monitor",
];

export function ShopPreview() {
  const featured = FEATURED_SLUGS.map((s) => getProductBySlug(s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  if (!featured.length) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="section-eyebrow">
              <span className="h-px w-6 bg-teal-500" /> Care Givers shop
            </span>
            <h2 className="mt-3 section-title">
              Equipment that makes home care possible.
            </h2>
            <p className="mt-4 lead">
              Hospital beds, wheelchairs, oxygen concentrators, BP monitors —
              the equipment our caregivers actually use, available to buy or
              rent across Bangalore.
            </p>
          </div>
          <Link href="/shop" className="btn-md btn-secondary self-start">
            Browse the shop <ArrowRightIcon size={14} />
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-500">
          <span>Free delivery & assembly across Bangalore</span>
          <span className="hidden sm:block h-1 w-1 rounded-full bg-ink-300" />
          <span>Buy outright or rent monthly</span>
          <span className="hidden sm:block h-1 w-1 rounded-full bg-ink-300" />
          <span>24-hour replacement on rentals</span>
        </div>
      </div>
    </section>
  );
}
