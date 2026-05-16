import Link from "next/link";
import type { Product } from "@/lib/shop";
import { formatINR } from "@/lib/shop";
import { ProductIcon } from "@/components/ProductIcon";
import { ArrowRightIcon } from "@/components/icons";

const categoryTone: Record<Product["category"], string> = {
  "hospital-beds": "from-sage-100 to-sage-50 text-sage-800",
  mobility: "from-teal-100 to-teal-50 text-teal-800",
  respiratory: "from-cream-100 to-peach-50 text-ink-800",
  monitoring: "from-peach-100 to-cream-50 text-ink-800",
};

const categoryLabel: Record<Product["category"], string> = {
  "hospital-beds": "Hospital bed",
  mobility: "Mobility",
  respiratory: "Respiratory",
  monitoring: "Monitoring",
};

export function ProductCard({ product }: { product: Product }) {
  const tone = categoryTone[product.category];
  const hasRental =
    product.pricing.rentPerMonth && product.pricing.rentPerMonth > 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex h-full flex-col rounded-[28px] bg-white ring-1 ring-ink-100 shadow-soft hover:-translate-y-0.5 hover:shadow-glow transition overflow-hidden"
    >
      {/* Icon area with category tint */}
      <div
        className={`relative aspect-[5/3] bg-gradient-to-br ${tone} flex items-center justify-center`}
      >
        <ProductIcon type={product.icon} size={88} />
        <span className="absolute top-3 left-3 chip-cream bg-white/95">
          {categoryLabel[product.category]}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-[18px] leading-tight text-ink-900 group-hover:text-teal-800 transition">
          {product.name}
        </h3>
        <p className="mt-2 text-[13.5px] text-ink-600 leading-relaxed line-clamp-2">
          {product.short}
        </p>

        <div className="mt-auto pt-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">
              {hasRental ? "Buy or rent from" : "Buy"}
            </div>
            <div className="mt-0.5 font-display text-[19px] text-ink-900 tabular-nums">
              ₹{formatINR(product.pricing.buy)}
            </div>
            {hasRental && (
              <div className="text-[11.5px] text-teal-700 tabular-nums">
                or ₹{formatINR(product.pricing.rentPerMonth!)}/mo
              </div>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-700 opacity-0 group-hover:opacity-100 transition">
            View <ArrowRightIcon size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
