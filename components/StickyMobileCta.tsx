"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function StickyMobileCta() {
  const pathname = usePathname();
  if (pathname?.startsWith("/book")) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 pointer-events-none">
      <div className="pointer-events-auto rounded-full bg-white/95 backdrop-blur shadow-soft ring-1 ring-ink-100 flex items-center gap-2 p-1.5">
        <a
          href={site.whatsappHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-ink-800 hover:bg-cream-50"
          aria-label="WhatsApp us"
        >
          <WhatsAppIcon size={16} /> WhatsApp
        </a>
        <Link
          href="/book"
          className="flex-1 inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2.5 text-sm font-medium text-white shadow-glow hover:bg-teal-700"
        >
          Book caregiver
        </Link>
      </div>
    </div>
  );
}
