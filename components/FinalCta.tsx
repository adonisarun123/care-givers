import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sage-100 via-cream-50 to-teal-50 px-6 sm:px-12 py-14 sm:py-20 text-center">
          <div className="absolute inset-0 bg-warm-fade pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <span className="chip">Care, when you’re ready</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-ink-900">
              The hard part is asking.
              <br className="hidden sm:block" /> We’ll take it from here.
            </h2>
            <p className="mt-5 lead">
              Book a verified caregiver in under 3 minutes. Or message us — we’ll listen first,
              and only suggest what your family actually needs.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/book" className="btn-lg btn-primary">
                Book a caregiver <ArrowRightIcon size={18} />
              </Link>
              <a href={site.whatsappHref} className="btn-lg btn-secondary">
                <WhatsAppIcon size={16} /> Talk to care support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
