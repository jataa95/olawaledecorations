// Business details used across the site.
// Anything set to null is not shown yet. Fill it in when the details arrive.
export const site = {
  name: "Olawale Decorations Ltd.",
  shortName: "Olawale Decorations",
  tagline: "Interior & Exterior Designing",
  rcNumber: "2012982",
  city: "Abeokuta, Ogun State",
  address: null, // full street address from the business card
  hours: null, // e.g. "Mon–Sat 9:00–18:00"
  phone: null, // e.g. "+234 800 000 0000"
  whatsapp: null, // digits only, e.g. "2348000000000"
  email: null,
  socials: {
    tiktok: "https://www.tiktok.com/@olawale_konceptz",
    instagram: null,
    facebook: null,
  },
};

// Full-screen menu, grouped like the reference site.
export const menu = [
  {
    title: "Our approach",
    links: [
      { label: "About us", href: "/#philosophy" },
      { label: "Services", href: "/#services" },
      { label: "How we work", href: "/#process" },
    ],
  },
  {
    title: "Works",
    links: [
      { label: "Project gallery", href: "/works" },
      { label: "On site", href: "/#onsite" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Company", href: "/#company" },
      { label: "Studio", href: "/#studio" },
      { label: "News", href: "/#news" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export const heroSlides = [
  ["/images/living-hall-3.webp", "/images/mirror-wall-2.webp", "/images/stepped-ceiling.webp"],
  ["/images/living-hall-4.webp", "/images/track-lights-3.webp", "/images/living-hall-1.webp"],
  ["/images/living-hall-5.webp", "/images/chandelier-install.webp", "/images/living-hall-2.webp"],
];

export const philosophy = [
  {
    no: "01",
    title: "Beyond the brief.",
    text: "You tell us what you want. We listen for what you haven't said yet: how the room is used, where the light falls, how it should feel at night. Then we design for all of it.",
    image: "/images/living-hall-2.webp",
  },
  {
    no: "02",
    title: "Room to propose.",
    text: "We plan the ceiling, the lighting and the feature walls together, so there is space to suggest ideas you may not have considered: a cove here, a mirror wall there.",
    image: "/images/stepped-ceiling.webp",
  },
  {
    no: "03",
    title: "Always from a blank page.",
    text: "No two rooms are the same, so no two designs are. Every project starts fresh, measured on site and drawn around the space in front of us.",
    image: "/images/track-lights-1.webp",
  },
];

export const process = [
  { no: "01", title: "Site visit", text: "We visit, measure and talk through how you use the space." },
  { no: "02", title: "Design & quote", text: "A ceiling and lighting plan with a clear quote, before work starts." },
  { no: "03", title: "Build", text: "Our crew handles POP, wiring, lights, glass and finishing." },
  { no: "04", title: "Handover", text: "We clean up, test every light and walk you through the room." },
];

export const services = [
  { category: "Ceilings", title: "POP & false ceilings", text: "Layered POP ceilings, coves and custom curves designed around the room.", image: "/images/living-hall-3.webp" },
  { category: "Lighting", title: "Track, cove & LED lighting", text: "Magnetic track lights, linear LED strips and cove lighting planned with the ceiling.", image: "/images/track-lights-2.webp" },
  { category: "Walls", title: "Mirror & glass walls", text: "Framed mirror panel walls that open up a space and bounce the light.", image: "/images/mirror-wall-1.webp" },
  { category: "Feature pieces", title: "Chandeliers", text: "Crystal and bubble chandeliers sourced, mounted and wired into the finished ceiling.", image: "/images/chandelier-install.webp" },
  { category: "Interiors", title: "Kitchens & full interiors", text: "Complete fit-outs, from bare walls to move-in ready.", image: "/images/living-hall-6.webp" },
  { category: "Exteriors", title: "Exterior finishing", text: "Facade finishes that give the outside the same care as the inside.", image: "/videos/site-exterior.jpg" },
];

export const works = [
  { src: "/images/living-hall-4.webp", title: "Living hall, Abeokuta", caption: "Layered POP ceiling, warm LED coves and a crystal chandelier", alt: "Living hall with layered POP ceiling, LED coves and a crystal chandelier" },
  { src: "/images/mirror-wall-2.webp", title: "Mirror panel wall", caption: "Black-framed mirror wall reflecting the lit ceiling", alt: "Black-framed mirror panel wall reflecting a lit ceiling" },
  { src: "/images/track-lights-3.webp", title: "Track lighting", caption: "Magnetic track lights laid out on a clean white ceiling", alt: "Black magnetic track lights on a white ceiling" },
  { src: "/images/stepped-ceiling.webp", title: "Stepped cove ceiling", caption: "Square stepped ceiling with warm cove light", alt: "Stepped square ceiling with warm LED cove and blue centre light" },
  { src: "/images/living-hall-2.webp", title: "Curved ceiling details", caption: "Sweeping curves and linear light over a marble floor", alt: "Living room with curved ceiling details and mirror wall" },
  { src: "/images/chandelier-install.webp", title: "Bubble chandelier", caption: "Glass bubble chandelier fitted by our crew", alt: "Team installing a bubble glass chandelier" },
  { src: "/images/living-hall-1.webp", title: "Marble hall", caption: "Wide hall finished with POP, lights and mirror wall", alt: "Wide view of a finished hall with marble floors" },
  { src: "/images/track-lights-2.webp", title: "Linear light layout", caption: "Track and linear lights drawn as one composition", alt: "Linear track lighting layout on a ceiling" },
  { src: "/images/living-hall-5.webp", title: "Crystal chandelier fit", caption: "Chandelier set into a layered POP ceiling", alt: "Crystal chandelier being fitted into a POP ceiling" },
  { src: "/images/team-install.webp", title: "On site", caption: "Our crew mounting a mirror panel", alt: "Olawale Decorations crew mounting a mirror panel" },
  { src: "/images/stepped-ceiling-install.webp", title: "Ceiling in progress", caption: "Our crew fitting a stepped cove ceiling", alt: "Crew working on a stepped ceiling with cove lighting" },
  { src: "/images/mirror-wall-1.webp", title: "Entrance mirror wall", caption: "Mirror wall greeting guests at the entrance", alt: "Mirror wall in a hall with a decorative plant" },
  { src: "/images/track-lights-1.webp", title: "Staircase lighting", caption: "Track lights over a stairwell", alt: "Track lighting above a staircase" },
  { src: "/images/living-hall-6.webp", title: "Feature ceiling", caption: "Curved light details framing the room", alt: "Ceiling with curved light features" },
];

export const onsite = [
  { type: "video", src: "/videos/kitchen-build.mp4", poster: "/videos/kitchen-build.jpg", tag: "Interior", place: "Ogun State", title: "Kitchen build in progress" },
  { type: "video", src: "/videos/site-exterior.mp4", poster: "/videos/site-exterior.jpg", tag: "Exterior", place: "Ogun State", title: "Exterior finishing and roof works" },
  { type: "image", src: "/images/team-install.webp", tag: "Interior", place: "Abeokuta", title: "Mirror wall installation" },
];

export const news = [
  { date: "2026.11.06", category: "Notice", title: "Our new website is live." },
];
