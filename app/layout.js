import { Jost, Inter } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", weight: ["400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Olawale Decorations Ltd. | Interior & Exterior Designing in Abeokuta",
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
    <html lang="en" className={`${jost.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
