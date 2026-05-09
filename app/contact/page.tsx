import type { Metadata } from "next";
import Link from "next/link";
import { site, buildMetadata } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon, PinIcon } from "@/components/icons";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Contact Care Givers — Bangalore Home Caregiving",
  description:
    "Reach Care Givers Bangalore — WhatsApp, phone, or visit our Indiranagar office. Care support 24×7.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    <section className="py-16 sm:py-24">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="chip">We listen first</span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight text-ink-900">
              Talk to a real human, today.
            </h1>
            <p className="mt-5 lead">
              Tell us what’s going on at home. We’ll listen, ask the right questions,
              and only suggest care that genuinely helps.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={site.whatsappHref}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white ring-1 ring-ink-100 p-5 hover:shadow-soft transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-100 text-sage-700">
                    <WhatsAppIcon size={20} />
                  </span>
                  <div>
                    <div className="text-sm text-ink-500">WhatsApp (fastest)</div>
                    <div className="font-medium text-ink-900">{site.whatsapp}</div>
                  </div>
                </div>
                <ArrowRightIcon size={18} />
              </a>

              <a
                href={site.phoneHref}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white ring-1 ring-ink-100 p-5 hover:shadow-soft transition"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-50 text-teal-700">
                    <PhoneIcon size={20} />
                  </span>
                  <div>
                    <div className="text-sm text-ink-500">Phone (24×7 care support)</div>
                    <div className="font-medium text-ink-900">{site.phone}</div>
                  </div>
                </div>
                <ArrowRightIcon size={18} />
              </a>

              <div className="rounded-2xl bg-white ring-1 ring-ink-100 p-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream-100 text-ink-700">
                    <PinIcon size={20} />
                  </span>
                  <div>
                    <div className="text-sm text-ink-500">Visit our office</div>
                    <div className="font-medium text-ink-900">{site.address}</div>
                    <div className="mt-0.5 text-xs text-ink-500">{site.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 p-8 sm:p-10 ring-1 ring-sage-200">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Prefer to skip the chat?
            </div>
            <h2 className="mt-3 font-display text-3xl text-ink-900">
              Book your caregiver in under 3 minutes.
            </h2>
            <p className="mt-3 text-[15px] text-ink-700">
              Pick care type, duration and address. We’ll WhatsApp the caregiver match
              within an hour.
            </p>
            <Link href="/book" className="mt-6 btn-lg btn-primary">
              Start booking <ArrowRightIcon size={16} />
            </Link>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
}
