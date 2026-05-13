"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { LogoWordmark } from "@/components/Logo";

export function Navbar() {
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-all",
        scrolled
          ? "bg-cream-50/85 backdrop-blur-md border-b border-ink-100/60"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container flex h-16 sm:h-[72px] items-center justify-between gap-6">
        {/* Logo */}
        <LogoWordmark size={36} showCity={true} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink-700">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="link-quiet">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <a href={site.phoneHref} className="btn btn-sm btn-ghost gap-1.5">
            <PhoneIcon size={16} /> {site.phone}
          </a>
          <Link href="/book" className="btn-sm btn-primary">
            Book a caregiver
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden rounded-full p-2 text-ink-700 hover:bg-ink-100/60"
          onClick={() => setOpen(true)}
        >
          <MenuIcon size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-50 transition",
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
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream-50 shadow-soft",
            "transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between p-5 border-b border-ink-100/60">
            <span className="font-display text-lg">{site.name}</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-ink-700 hover:bg-ink-100/60"
            >
              <CloseIcon size={20} />
            </button>
          </div>
          <div className="p-5 flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] text-ink-800 hover:bg-cream-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="p-5 border-t border-ink-100/60 flex flex-col gap-2">
            <Link href="/book" onClick={() => setOpen(false)} className="btn-md btn-primary">
              Book a caregiver now
            </Link>
            <a href={site.whatsappHref} className="btn-md btn-secondary gap-1.5">
              <WhatsAppIcon size={18} /> WhatsApp our team
            </a>
            <a href={site.phoneHref} className="btn-md btn-ghost gap-1.5">
              <PhoneIcon size={18} /> {site.phone}
            </a>
          </div>
          <div className="px-5 pb-6 text-xs text-ink-500">{site.hours}</div>
        </aside>
      </div>
    </header>
  );
}
