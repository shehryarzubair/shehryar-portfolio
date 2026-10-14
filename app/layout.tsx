import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Shehryar Zubair | Full Stack Software Engineer",
  description:
    "Shehryar Zubair, Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL. Explore engineering projects, frontend integrations and WordPress development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
