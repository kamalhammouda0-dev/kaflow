import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Noise } from "@/components/Noise";
import { LocalBusinessSchema } from "@/components/StructuredData";
import { SITE } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KA Flow — Websites & AI-agents in Gelderland en heel Nederland",
    template: "%s",
  },
  description: SITE.description,
  keywords: [
    "website laten maken Gelderland",
    "website laten maken Nederland",
    "AI-agents MKB",
    "automatisering ZZP",
    "webdesign Heteren",
    "webdesign Arnhem",
    "webdesign Nijmegen",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE.url,
    siteName: SITE.name,
    title: "KA Flow — Websites & AI-agents in Gelderland en heel Nederland",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "KA Flow — Websites & AI-agents in Gelderland en heel Nederland",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocalBusinessSchema />
        <Noise />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
