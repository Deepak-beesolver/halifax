import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://halifaxdefenceconsulting.com"),
  title: {
    default: "Halifax Defence Consulting — Structured defence advisory & liaison",
    template: "%s | Halifax Defence Consulting",
  },
  description:
    "Halifax Defence Consulting is a UK-based defence advisory and international liaison firm supporting structured, compliance-aware decisions across strategy, procurement, capability, hardware, risk and governance.",
  keywords: [
    "defence consulting",
    "defence advisory",
    "procurement support",
    "capability development",
    "risk assessment",
    "international liaison",
    "UK defence",
  ],
  openGraph: {
    title: "Halifax Defence Consulting",
    description:
      "Defence consulting for serious decisions in complex environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm text-charcoal">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
