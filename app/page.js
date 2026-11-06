import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Heading from "@/components/Heading";
import ServicesSlider from "@/components/ServicesSlider";
import ContactBlock from "@/components/ContactBlock";
import Arrow from "@/components/Arrow";
import { site, philosophy, works, onsite, news, process } from "@/data/site";

export default function Home() {
  const featured = works.slice(0, 5);

  return (
    <>
      {/* HERO */}
      <section className="relative h-svh min-h-[560px] text-white">
        <HeroSlider />
        <div className="container-x relative flex h-full flex-col justify-end pb-24 sm:pb-28">
          <h1 className="font-display text-[2.15rem] leading-[1.3] sm:text-6xl lg:text-7xl">
            Step into the space
            <br />
            you’ve been picturing.
          </h1>
          <p className="mt-8 font-en text-sm tracking-[0.2em]">INTERIOR &amp; EXTERIOR DESIGNING · ABEOKUTA</p>
          <p className="mt-3 max-w-lg text-sm text-white/85 sm:text-base">
            We give shape to the ideas you haven’t put into words yet.
          </p>
        </div>
        <div className="absolute bottom-0 left-5 flex flex-col items-center gap-3 sm:left-10" aria-hidden="true">
          <span className="font-en text-[10px] tracking-[0.3em] [writing-mode:vertical-rl]">SCROLL</span>
          <span className="h-14 w-px bg-white/60" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="section bg-paper">
        <div className="container-x">
          <p className="label-en js-slideup">Philosophy</p>
          <h2 className="js-slideup mt-6 font-display text-[2rem] leading-[1.4] text-ink sm:text-5xl lg:text-6xl">
            Not just answering the brief.
            <br />
            Going beyond it.
          </h2>
          <p className="js-slideup mt-8 max-w-2xl text-ink-light">
            A ceiling is more than a surface and a light is more than a fitting. We look at how a room will be lived in, then
            design the ceiling, the light and the finish to fit, sometimes in ways you hadn’t pictured yet.
          </p>

          <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
            {philosophy.map((p, i) => (
              <article key={p.no} className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="js-slideup relative aspect-[4/3] overflow-hidden rounded-[12px]">
                  <Image src={p.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="js-slideup">
                  <p className="font-en text-6xl font-light text-taupe sm:text-7xl">{p.no}</p>
                  <h3 className="mt-4 font-display text-3xl text-ink sm:text-4xl">{p.title}</h3>
                  <p className="mt-6 text-ink-light">{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="js-slideup mt-20 flex flex-col gap-4 sm:mt-28 sm:flex-row sm:justify-center">
            <Link href="/#company" className="btn btn-line sm:w-72">About us <Arrow /></Link>
            <Link href="/#contact" className="btn btn-dark sm:w-72">Book a free consultation <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Heading en="Works" label="Our projects" />
            <div className="js-slideup max-w-md">
              <p className="text-ink-light">
                Ceilings, lighting and feature walls from recent homes in and around Abeokuta. Every one designed for its own space.
              </p>
              <Link href="/works" className="mt-6 inline-flex items-center gap-4 border-b border-ink pb-1 text-sm text-ink hover:gap-6">
                View all works <Arrow />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-12 md:gap-8">
            {featured.map((w, i) => {
              const layout = [
                "md:col-span-7 md:row-span-2",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-6",
                "md:col-span-6",
              ][i];
              const ratio = i === 0 ? "aspect-[4/5]" : i < 3 ? "aspect-[4/3]" : "aspect-[3/2]";
              return (
                <Link key={w.src} href="/works" className={`js-slideup group block ${layout}`}>
                  <div className={`relative overflow-hidden rounded-[12px] ${ratio}`}>
                    <Image src={w.src} alt={w.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-4 font-display text-lg italic text-ink">{w.caption}</p>
                  <p className="mt-1 text-xs tracking-[0.1em] text-muted">{w.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section bg-paper">
        <div className="container-x mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading en="Services" label="What we do" />
          <p className="js-slideup max-w-md text-ink-light">One team for the ceiling, the lighting and the feature walls, so it all fits together.</p>
        </div>
        <ServicesSlider />
      </section>

      {/* ON SITE */}
      <section id="onsite" className="section">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading en="On Site" label="Projects in progress" />
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="js-slideup inline-flex items-center gap-4 self-start border-b border-ink pb-1 text-sm text-ink hover:gap-6 md:self-auto">
              Follow on TikTok <Arrow />
            </a>
          </div>
          <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {onsite.map((o) => (
              <li key={o.src} className="js-slideup">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-sand">
                  {o.type === "video" ? (
                    <video src={o.src} poster={o.poster} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none" aria-label={o.title} />
                  ) : (
                    <Image src={o.src} alt={o.title} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
                  )}
                </div>
                <div className="mt-5 flex gap-2 text-[11px]">
                  <span className="rounded-full bg-ink px-3 py-1 text-white">{o.tag}</span>
                  <span className="rounded-full border border-ink/20 px-3 py-1 text-ink-light">{o.place}</span>
                </div>
                <p className="mt-3 font-display text-xl text-ink">{o.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPANY */}
      <section id="company" className="section bg-paper">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="js-slideup relative aspect-[4/5] overflow-hidden rounded-[12px] lg:order-2">
            <Image src="/images/founder.webp" alt="Portrait from the Olawale Decorations team" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center">
            <Heading en="Company" label="About Olawale Decorations" />
            <p className="js-slideup mt-10 font-display text-2xl leading-relaxed text-ink sm:text-3xl">
              Design and build, by one team, from Abeokuta.
            </p>
            <p className="js-slideup mt-6 text-ink-light">
              Olawale Decorations Ltd. is a registered interior and exterior design company (RC {site.rcNumber}) based in
              Abeokuta, Ogun State. Our own crew handles every stage on site, from the first POP board to the last light
              fitting, so the finished room matches the plan.
            </p>
            <ul className="js-slideup mt-10 border-t border-ink/15">
              {[
                ["How we work", "/#process"],
                ["Studio", "/#studio"],
                ["Contact", "/#contact"],
              ].map(([label, href]) => (
                <li key={href} className="border-b border-ink/15">
                  <Link href={href} className="group flex items-center justify-between py-5 text-ink hover:text-taupe">
                    {label} <Arrow className="group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="process" className="container-x mt-24 sm:mt-36">
          <p className="label-en js-slideup">How we work</p>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-[12px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <li key={s.no} className="js-slideup bg-sand p-8">
                <p className="font-en text-4xl font-light text-taupe">{s.no}</p>
                <p className="mt-4 font-display text-xl text-ink">{s.title}</p>
                <p className="mt-2 text-sm text-ink-light">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="section">
        <div className="container-x">
          <Heading en="Studio" label="Visit us" />
          <div className="js-slideup mt-14 grid overflow-hidden rounded-[12px] border border-ink/10 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image src="/images/living-hall-6.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-14">
              <p className="label-en">Abeokuta</p>
              <p className="mt-3 font-display text-3xl text-ink">Abeokuta Studio</p>
              <dl className="mt-8 space-y-3 text-sm">
                <div className="flex gap-6"><dt className="w-20 shrink-0 text-muted">Address</dt><dd className="text-ink">{site.address ?? site.city}</dd></div>
                {site.phone && <div className="flex gap-6"><dt className="w-20 shrink-0 text-muted">Tel</dt><dd className="text-ink">{site.phone}</dd></div>}
                {site.hours && <div className="flex gap-6"><dt className="w-20 shrink-0 text-muted">Hours</dt><dd className="text-ink">{site.hours}</dd></div>}
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address ?? "Abeokuta, Ogun State, Nigeria")}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-line mt-10 self-start"
              >
                Google Map <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="pb-24 sm:pb-36 lg:pb-48">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_2fr]">
          <Heading en="News" label="Latest updates" />
          <ul className="js-slideup border-t border-ink/15">
            {news.map((n) => (
              <li key={n.title} className="flex flex-col gap-2 border-b border-ink/15 py-6 sm:flex-row sm:items-center sm:gap-8">
                <span className="font-en text-sm tracking-[0.1em] text-muted">{n.date}</span>
                <span className="w-fit rounded-full bg-sand-2 px-3 py-0.5 text-[11px] text-ink">{n.category}</span>
                <span className="text-ink">{n.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBlock />

      {/* SERVICE AREA */}
      <section id="area" className="section bg-paper">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_2fr]">
          <Heading en="Service Area" label="Where we work" />
          <div className="js-slideup">
            <div className="border-t border-ink/15 py-6">
              <p className="font-display text-2xl text-ink">Ogun State</p>
              <p className="mt-3 text-ink-light">Abeokuta and surrounding areas</p>
            </div>
            <div className="border-y border-ink/15 py-6">
              <p className="font-display text-2xl text-ink">Elsewhere in Nigeria</p>
              <p className="mt-3 text-ink-light">Planning a project in another city? Get in touch and we’ll talk it through.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
