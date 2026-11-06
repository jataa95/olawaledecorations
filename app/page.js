import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, BadgeCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { site, nav, services, gallery, process, stats } from "@/data/site";

const marqueeItems = ["POP Ceilings", "Track Lighting", "LED Coves", "Mirror Walls", "Chandeliers", "Interior Fit-outs", "Exterior Finishing"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-svh items-end overflow-hidden bg-brand-navy pb-16 pt-32 sm:items-center sm:pb-0">
          <div className="absolute inset-0 lg:left-auto lg:w-[46%]">
            <Image
              src="/images/living-hall-3.webp"
              alt="Finished living hall with layered POP ceiling, LED lighting and a crystal chandelier"
              fill
              preload
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30 lg:bg-gradient-to-r lg:from-brand-navy lg:via-brand-navy/20 lg:to-transparent" />
          </div>
          <div className="container-x relative">
            <div className="max-w-2xl">
              <p className="eyebrow text-white/80">
                <span className="text-brand-red">●</span>&nbsp; Interior & Exterior Designing
              </p>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Ceilings, light &amp; finishes that make a space feel <span className="text-brand-red">complete.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/80">
                From POP ceilings and track lighting to mirror walls and chandeliers, we design and build interiors that look as good in person as they do in photos.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-red">
                  Get a free quote <ArrowRight size={18} />
                </a>
                <a href="#projects" className="btn btn-ghost">
                  See our work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden bg-brand-red py-4 text-white" aria-hidden="true">
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-heading text-lg font-semibold uppercase tracking-wider">
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                {t} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src="/images/founder.webp" alt="Portrait from the Olawale Decorations team" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-blue px-6 py-5 text-white shadow-xl sm:-right-6">
                <p className="font-heading text-2xl font-bold">RC {site.rcNumber}</p>
                <p className="text-sm text-white/75">Registered company</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="About us"
                title="We turn bare walls and ceilings into rooms people remember."
              />
              <div className="-mt-6 space-y-4 text-lg text-ink/70">
                <p>
                  Olawale Decorations Ltd. is an interior and exterior design company based in Abeokuta, Ogun State. We specialise in the details that change how a room feels: the ceiling, the lighting and the finishes.
                </p>
                <p>
                  Our own crew handles every stage on site, from the first POP board to the last light fitting, so the finished room matches the plan.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Design and build in one team", "Clean, tidy job sites", "Lighting planned with the ceiling", "Homes, offices and estates"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 font-medium">
                    <BadgeCheck className="shrink-0 text-brand-red" size={20} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section bg-mist">
          <div className="container-x">
            <SectionHeading
              eyebrow="What we do"
              title="Everything a finished interior needs"
              text="One team for the ceiling, the lighting and the feature walls, so it all fits together."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-blue/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-heading text-sm font-bold text-brand-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-ink/70">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAND */}
        <section className="bg-brand-blue py-14 text-white">
          <div className="container-x grid gap-8 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="container-x">
            <SectionHeading
              eyebrow="Our work"
              title="Recent projects"
              text="A look at ceilings, lighting and feature walls we have built. Tap any photo to view it full size."
            />
            <Gallery items={gallery} />
          </div>
        </section>

        {/* ON SITE VIDEOS */}
        <section className="section bg-brand-navy">
          <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              light
              eyebrow="On site"
              title="See the work while it happens"
              text="From scaffolding on the outside to the kitchen coming together inside, follow our projects as they take shape."
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/videos/site-exterior.mp4", poster: "/videos/site-exterior.jpg", label: "Exterior project" },
                { src: "/videos/kitchen-build.mp4", poster: "/videos/kitchen-build.jpg", label: "Kitchen in progress" },
              ].map((v) => (
                <figure key={v.src} className="overflow-hidden rounded-2xl bg-black">
                  <video
                    src={v.src}
                    poster={v.poster}
                    className="aspect-[9/16] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={v.label}
                  />
                </figure>
              ))}
            </div>
          </div>
          <div className="container-x mt-10">
            <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Follow @olawale_konceptz on TikTok <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <div className="container-x">
            <SectionHeading eyebrow="How we work" title="From first visit to handover" center />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <li key={p.title} className="relative rounded-2xl border border-black/5 bg-mist p-7">
                  <span className="font-heading text-5xl font-bold text-brand-red/20">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-ink/70">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section bg-mist">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s talk about your space"
                text="Tell us what you are building or renovating and we’ll get back to you with ideas and a quote."
              />
              <ul className="space-y-5">
                <ContactRow icon={MapPin} label="Location" value={site.address ?? site.city} />
                {site.phone && <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, "")}`} />}
                {site.email && <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />}
                <ContactRow icon={ArrowUpRight} label="TikTok" value="@olawale_konceptz" href={site.socials.tiktok} />
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink py-14 text-white">
        <div className="container-x">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Logo light />
              <p className="mt-4 text-white/60">{site.tagline}. Ceilings, lighting, mirror walls and complete finishing in {site.city}.</p>
            </div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-white/70 hover:text-white">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name} RC {site.rcNumber}.</p>
            <p>Interior & Exterior Designing</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-sm text-ink/60">{label}</span>
        <span className="block font-semibold">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 hover:text-brand-red">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
