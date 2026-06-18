import type { Metadata, Viewport } from "next";
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
    default: "KA Flow — Websites & AI-agents voor heel Nederland",
    template: "%s",
  },
  description: SITE.description,
  keywords: [
    "website laten maken Nederland",
    "website laten maken",
    "AI-agents MKB",
    "automatisering ZZP",
    "webdesign Nederland",
    "website laten maken Amsterdam",
    "website laten maken Rotterdam",
    "website laten maken Utrecht",
    "website laten maken Den Haag",
    "website laten maken Eindhoven",
    "website laten maken Gelderland",
    "webdesign Arnhem",
    "webdesign Nijmegen",
    "website laten maken Apeldoorn",
    "website laten maken Ede",
    "AI automatisering MKB Nederland",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE.url,
    siteName: SITE.name,
    title: "KA Flow — Websites & AI-agents voor heel Nederland",
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KA Flow — Websites & AI-agents voor heel Nederland",
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b5ef5",
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
