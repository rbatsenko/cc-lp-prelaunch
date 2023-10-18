import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AxiomWebVitals } from "next-axiom";
import "./styles/tailwind.css";
import { FC, PropsWithChildren } from "react";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://join.climbingcraft.com"),
  title: "Climbing Craft - Connecting climbers with coaches",
  description:
    "Climbing Craft is a comprehensive platform designed to connect climbing coaches with climbers of all levels, from beginners to advanced enthusiasts. It aims to enhance the learning and training experience for climbers by providing them with personalized coaching, analysis, and guidance.",
  keywords: [
    "climbing",
    "coaching",
    "coach",
    "mentorship",
    "mentor",
    "training",
    "climbing craft",
  ],
  authors: {
    name: "Climbing Craft",
  },
  robots: { index: true, follow: true },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className="scroll-smooth">
    <body className={inter.className}>
      {children}
      <Footer />
      <Analytics />
      <AxiomWebVitals />
    </body>
  </html>
);

export default RootLayout;
