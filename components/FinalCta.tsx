import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="container">
        <div className="grid gap-10 rounded-3xl bg-teal-700 px-6 py-12 text-white sm:px-12 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">
              Not sure what kind of care you need? Talk it through with us.
            </h2>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-teal-100">
              A care coordinator will listen, ask a few questions about your parent, and
              suggest the right kind of help. There’s no obligation to book.
            </p>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 font-display text-[28px] font-semibold tracking-[-0.01em] hover:text-marigold-300 sm:text-[34px]"
            >
              <PhoneIcon size={28} /> {site.phone}
            </a>
            <p className="mt-1 text-[15px] text-teal-200">{site.hours}</p>
            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              <a
                href={site.whatsappHref}
                className="btn-lg bg-white text-teal-800 hover:bg-teal-50"
              >
                <WhatsAppIcon size={18} /> Message on WhatsApp
              </a>
              <Link href="/book" className="btn-lg ring-1 ring-inset ring-white/40 text-white hover:bg-white/10">
                Book online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
