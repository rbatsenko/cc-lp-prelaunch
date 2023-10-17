import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climbing Craft - connecting climbers and coaches",
  description: "Comprehensive Climbing Coaching platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
