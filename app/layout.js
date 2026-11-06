import { Cardo, Jost, Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Reveal from "@/components/Reveal";
import "./globals.css";

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-cardo" });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-jost" });
const zen = Zen_Kaku_Gothic_New({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-zen" });

const siteUrl = "https://olawaledecorations.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olawale Decorations Ltd. | Interior & Exterior Designing in Abeokuta",
    template: "%s | Olawale Decorations Ltd.",
  },
  description:
    "POP ceilings, lighting design, mirror walls, chandeliers and full interior and exterior finishing by Olawale Decorations Ltd., Abeokuta, Ogun State.",
  openGraph: {
    title: "Olawale Decorations Ltd.",
    description: "Interior & exterior designing: ceilings, lighting, mirror walls and more.",
    images: ["/images/living-hall-4.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cardo.variable} ${jost.variable} ${zen.variable}`}>
      <body>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
