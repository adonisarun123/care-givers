"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { LogoWordmark } from "@/components/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={[
          "mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 transition-colors duration-200",
          scrolled
            ? "bg-white/90 backdrop-blur-md ring-1 ring-ink-100 shadow-soft"
            : "bg-transparent",
        ].join(" ")}
      >
        <LogoWordmark size={34} showCity />

        <nav aria-label="Main" className="hidden lg:flex items-center gap-1 text-[15px]">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "rounded-full px-3.5 py-2 transition-colors",
                isActive(item.href)
                  ? "bg-teal-50 text-teal-800 font-semibold"
                  : "text-ink-700 hover:bg-ink-100/70 hover:text-ink-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href={site.phoneHref} className="btn-sm btn-ghost font-medium">
            <PhoneIcon size={16} /> {site.phone}
          </a>
          <Link href="/book" className="btn-md btn-primary">
            Book a caregiver
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-11 w-11 place-items-center rounded-full text-ink-800 hover:bg-ink-100/70"
          >
            <PhoneIcon size={20} />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center rounded-full text-ink-800 hover:bg-ink-100/70"
            onClick={() => setOpen(true)}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-ink-900/40 transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={[
            "absolute inset-x-3 top-3 rounded-2xl bg-cream-50 shadow-lift transition duration-200",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <LogoWordmark size={34} showCity={false} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full text-ink-800 hover:bg-ink-100/70"
            >
              <CloseIcon size={22} />
            </button>
          </div>
          <nav aria-label="Mobile" className="px-2 pb-2">
            {[{ label: "Home", href: "/" }, ...primaryNav, { label: "Contact", href: "/contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-[18px] font-medium text-ink-900 hover:bg-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-2 border-t border-ink-100 p-4">
            <Link href="/book" onClick={() => setOpen(false)} className="btn-lg btn-primary">
              Book a caregiver
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a href={site.phoneHref} className="btn-lg btn-secondary">
                <PhoneIcon size={18} /> Call
              </a>
              <a href={site.whatsappHref} className="btn-lg btn-secondary">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
            <p className="pt-1 text-center text-[14px] text-ink-500">{site.hours}</p>
          </div>
        </aside>
      </div>
    </header>
  );
}
