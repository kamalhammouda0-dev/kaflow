import type { Metadata } from "next";
import { Mail, MapPin, Clock, Building2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { SITE } from "@/lib/seo";

const title = "Contact — KA Flow";
const description =
  "Neem contact op met KA Flow in Heteren, Gelderland voor een vrijblijvend gesprek over jouw website of AI-automatisering. Actief in heel Nederland.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

const info = [
  { icon: Mail, label: "E-mail", value: "Kamalhammouda0@gmail.com", href: "mailto:Kamalhammouda0@gmail.com" },
  { icon: MapPin, label: "Locatie", value: "Heteren, Gelderland. Voor de eerste kennismaking komen we persoonlijk langs, waar in Nederland je ook zit" },
  { icon: Clock, label: "Reactietijd", value: "Meestal binnen 1 werkdag" },
  { icon: Building2, label: "KvK-nummer", value: SITE.kvk },
];

export default function ContactPage() {
  return (
    <section className="py-24 md:py-28">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <div className="container-flow grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
            Contact
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Laten we bouwen aan jouw volgende stap.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Vul het formulier in of mail rechtstreeks. We nemen binnen één
            werkdag contact met je op om kennis te maken en te kijken wat
            jouw bedrijf nodig heeft.
          </p>

          <div className="mt-10 space-y-5">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
                  <item.icon className="h-4.5 w-4.5 text-accent-blue" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-accent-blue">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-border bg-surface p-8 md:p-10">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
