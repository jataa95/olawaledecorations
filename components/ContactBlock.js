import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";
import { site } from "@/data/site";

// Dark photo band with the three contact actions, as in the reference.
export default function ContactBlock() {
  const wa = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Olawale Decorations, I'd like a quote.")}` : null;
  const primary = wa ?? (site.email ? `mailto:${site.email}?subject=Quote%20request` : site.socials.tiktok);

  return (
    <section id="contact" className="relative overflow-hidden py-28 text-white sm:py-40">
      <Image src="/images/living-hall-1.webp" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-indigo/65 to-rose/45" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-end">
        <div className="js-slideup">
          <h2 className="font-display text-5xl leading-none sm:text-7xl lg:text-[5.5rem]">Contact Us</h2>
          <p className="mt-4 text-sm tracking-[0.15em] text-white/80">Get in touch</p>
          <p className="mt-10 max-w-md text-white/85">
            Building, renovating or just thinking about it? Tell us about your space. We’re happy to visit, measure and share ideas before you commit to anything.
          </p>
        </div>
        <div className="js-slideup flex flex-col gap-4">
          <Link href={primary} target={primary.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="btn btn-light h-20 px-8 text-base">
            Book a site visit <Arrow />
          </Link>
          <Link href={primary} target={primary.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="btn h-20 border-white bg-white px-8 text-base text-ink hover:border-rose-light hover:bg-rose-light hover:text-ink">
            Get a free quote <Arrow />
          </Link>
          {site.phone ? (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 flex items-center justify-center gap-4 font-en text-3xl tracking-[0.08em]">
              {site.phone}
            </a>
          ) : (
            <p className="mt-2 text-center text-sm text-white/70">
              For now, message us on{" "}
              <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="underline hover:text-rose-light">TikTok @olawale_konceptz</a>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
