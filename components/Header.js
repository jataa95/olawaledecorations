"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Arrow from "./Arrow";
import { menu, site } from "@/data/site";

// Transparent over the hero, white once scrolled (or on inner pages).
// "MENU" opens a full-screen overlay with grouped links, as on the reference.
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          light ? "bg-transparent" : "bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur"
        }`}
      >
        <div className="flex h-20 items-center justify-between pl-5 sm:h-24 sm:pl-10">
          <Link href="/" aria-label="Olawale Decorations home" onClick={() => setOpen(false)}>
            <Logo light={light} />
          </Link>

          <div className="flex h-full items-center">
            <div className={`mr-8 hidden text-right lg:block ${light ? "text-white" : "text-ink"}`}>
              {site.phone ? (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-en text-xl tracking-[0.08em]">{site.phone}</a>
              ) : (
                <p className="font-en text-sm tracking-[0.15em]">{site.city}</p>
              )}
              <p className="text-[11px] tracking-[0.1em] opacity-70">{site.hours ?? site.tagline}</p>
            </div>
            <Link
              href="/#contact"
              className="hidden h-full items-center bg-indigo px-8 text-sm tracking-[0.1em] text-white hover:bg-rose md:flex"
            >
              Book a site visit
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-full w-20 flex-col items-center justify-center gap-2 sm:w-24 ${
                light ? "text-white" : "text-ink"
              } ${open ? "bg-mist" : ""}`}
            >
              <span className="relative block h-2 w-8">
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-400 ${open ? "top-1 rotate-[20deg]" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-400 ${open ? "top-1 -rotate-[20deg]" : "top-2"}`} />
              </span>
              <span className="font-en text-[10px] tracking-[0.25em]">{open ? "CLOSE" : "MENU"}</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`bg-paper fixed inset-0 z-40 overflow-y-auto pt-24 transition-opacity duration-500 sm:pt-28 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="container-x grid gap-12 py-10 lg:grid-cols-[1fr_2fr] lg:py-20">
          <div>
            <p className="font-display text-4xl text-ink sm:text-5xl">Menu</p>
            <p className="mt-3 text-sm text-ink-light">{site.name}</p>
            <div className="mt-10 flex flex-col gap-3 sm:max-w-xs">
              <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-dark">
                Book a site visit <Arrow />
              </Link>
              <Link href="/#contact" onClick={() => setOpen(false)} className="btn btn-line">
                Get a free quote <Arrow />
              </Link>
            </div>
          </div>
          <nav className="grid gap-10 sm:grid-cols-3">
            {menu.map((group) => (
              <div key={group.title}>
                <p className="label-en border-b border-ink/15 pb-3">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} onClick={() => setOpen(false)} className="group flex items-center justify-between text-ink hover:text-rose">
                        {l.label}
                        <Arrow className="opacity-40 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
