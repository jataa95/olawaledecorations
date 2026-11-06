// Business details used across the site.
// Anything set to null is not shown yet — fill it in when the details arrive.
export const site = {
  name: "Olawale Decorations Ltd.",
  shortName: "Olawale Decorations",
  tagline: "Interior & Exterior Designing",
  rcNumber: "2012982",
  city: "Abeokuta, Ogun State, Nigeria",
  address: null, // full street address from the business card
  phone: null, // e.g. "+234 800 000 0000"
  whatsapp: null, // digits only, e.g. "2348000000000"
  email: null,
  socials: {
    tiktok: "https://www.tiktok.com/@olawale_konceptz",
    instagram: null,
    facebook: null,
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "POP & False Ceilings",
    text: "Layered POP ceilings, coves and custom curves designed around the shape of the room.",
    image: "/images/living-hall-3.webp",
  },
  {
    title: "Lighting Design",
    text: "Magnetic track lights, linear LED strips, cove lighting and spotlights planned with the ceiling.",
    image: "/images/track-lights-1.webp",
  },
  {
    title: "Mirror & Glass Walls",
    text: "Framed mirror panel walls and glass features that open up a space and bounce the light around.",
    image: "/images/mirror-wall-1.webp",
  },
  {
    title: "Chandeliers & Feature Pieces",
    text: "Crystal and bubble chandeliers sourced, mounted and wired to sit right in the finished ceiling.",
    image: "/images/chandelier-install.webp",
  },
  {
    title: "Kitchens & Interiors",
    text: "Full interior fit-outs, from kitchens to living rooms, taken from bare walls to move-in ready.",
    image: "/images/living-hall-6.webp",
  },
  {
    title: "Exterior Finishing",
    text: "Facade finishes and exterior design that give the building the same care as the inside.",
    image: "/videos/site-exterior.jpg",
  },
];

export const gallery = [
  { src: "/images/living-hall-4.webp", alt: "Living hall with layered POP ceiling, LED coves and a crystal chandelier" },
  { src: "/images/mirror-wall-2.webp", alt: "Black-framed mirror panel wall reflecting a lit ceiling" },
  { src: "/images/track-lights-3.webp", alt: "Black magnetic track lights on a white ceiling" },
  { src: "/images/living-hall-2.webp", alt: "Living room with curved ceiling details and mirror wall" },
  { src: "/images/ceiling-blue-2.webp", alt: "Stepped square ceiling with warm LED cove and blue centre light" },
  { src: "/images/chandelier-install.webp", alt: "Team installing a bubble glass chandelier" },
  { src: "/images/living-hall-1.webp", alt: "Wide view of a finished hall with marble floors" },
  { src: "/images/track-lights-2.webp", alt: "Linear track lighting layout on a ceiling" },
  { src: "/images/living-hall-5.webp", alt: "Crystal chandelier being fitted into a POP ceiling" },
  { src: "/images/team-install.webp", alt: "Olawale Decorations crew mounting a mirror panel" },
  { src: "/images/ceiling-progress-1.webp", alt: "Ceiling lighting in progress before and after" },
  { src: "/images/mirror-wall-1.webp", alt: "Mirror wall in a hall with a decorative plant" },
];

export const process = [
  { title: "Visit & measure", text: "We come to the site, take measurements and talk through how you use the space." },
  { title: "Design & quote", text: "You get a ceiling and lighting plan with a clear quote before any work starts." },
  { title: "Build on site", text: "Our crew handles the POP, wiring, lights, glass and finishing, start to end." },
  { title: "Handover", text: "We clean up, test every light and walk you through the finished room." },
];

export const stats = [
  { value: "Interior", label: "Ceilings, lighting & fit-outs" },
  { value: "Exterior", label: "Facades & finishing" },
  { value: "RC 2012982", label: "Registered company" },
];
