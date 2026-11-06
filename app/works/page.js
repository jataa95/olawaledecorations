import Link from "next/link";
import Heading from "@/components/Heading";
import WorksGrid from "@/components/WorksGrid";
import ContactBlock from "@/components/ContactBlock";
import { works } from "@/data/site";

export const metadata = {
  title: "Works",
  description: "Ceilings, lighting, mirror walls and chandeliers by Olawale Decorations Ltd.",
};

export default function WorksPage() {
  return (
    <>
      <section className="bg-paper pb-20 pt-36 sm:pb-28 sm:pt-48">
        <div className="container-x">
          <nav className="mb-10 font-en text-xs tracking-[0.15em] text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink">HOME</Link> <span className="mx-2">/</span> WORKS
          </nav>
          <Heading en="Works" label="Our projects" />
          <p className="js-slideup mt-10 max-w-xl text-ink-light">
            A collection of ceilings, lighting and feature walls we have designed and built. Tap any photo to see it larger.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <WorksGrid items={works} />
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
