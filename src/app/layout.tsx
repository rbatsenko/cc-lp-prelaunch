import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./styles/tailwind.css";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climbing Craft - Connecting climbers with coaches",
  description:
    "Climbing Craft is a comprehensive platform designed to connect climbing coaches with climbers of all levels, from beginners to advanced enthusiasts. It aims to enhance the learning and training experience for climbers by providing them with personalized coaching, analysis, and guidance.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className="scroll-smooth">
    <body className={inter.className}>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
