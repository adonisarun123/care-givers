"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/book")) return null;

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-ink-100 bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur">
      <div className="mx-auto flex max-w-md gap-2">
        <a href={site.whatsappHref} className="btn-md btn-secondary flex-1" aria-label="WhatsApp our care team">
          <WhatsAppIcon size={18} /> WhatsApp
        </a>
        <Link href="/book" className="btn-md btn-primary flex-[1.4]">
          Book a caregiver
        </Link>
      </div>
    </div>
  );
}
