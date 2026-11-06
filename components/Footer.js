import Link from "next/link";
import Logo from "./Logo";
import { menu, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-paper-3 pt-20 sm:pt-28">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_2fr]">
        <div>
          <Logo />
          <div className="mt-10 border-t border-ink/15 pt-6">
            <p className="font-display text-xl text-ink">Abeokuta Studio</p>
            <p className="mt-2 text-sm text-ink-light">{site.address ?? site.city}</p>
            {site.phone && <p className="mt-1 text-sm text-ink-light">Tel. {site.phone}</p>}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address ?? `Abeokuta, Ogun State, Nigeria`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-en text-xs tracking-[0.2em] text-rose underline underline-offset-4"
            >
              GOOGLE MAP
            </a>
          </div>
        </div>
        <nav className="grid gap-10 sm:grid-cols-3">
          {menu.map((g) => (
            <div key={g.title}>
              <p className="label-en">{g.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-ink hover:text-rose">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container-x mt-20 flex flex-col gap-4 border-t border-ink/15 py-8 text-xs text-ink-light sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-ink">TikTok</a>
          <Link href="/#contact" className="hover:text-ink">Contact</Link>
        </div>
        <p className="font-en tracking-[0.15em]">©{new Date().getFullYear()} OLAWALE DECORATIONS LTD. RC {site.rcNumber}</p>
      </div>
      <p className="overflow-hidden whitespace-nowrap pb-6 text-center font-display text-[7.4vw] leading-[1.15] text-indigo/[0.08]" aria-hidden="true">
        The Art of Finished Spaces
      </p>
    </footer>
  );
}
