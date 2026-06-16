import type { Metadata } from "next";
import {
  ArrowUpRight,
  Globe2,
  Bot,
  Wrench,
  CheckCircle2,
  Gauge,
  PenLine,
  Workflow,
  MessageCircle,
  FileSpreadsheet,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { BreadcrumbSchema } from "@/components/StructuredData";

const title = "Diensten — websites en AI-agents | KA Flow";
const description =
  "Websites op maat en AI-agents voor ZZP'ers en MKB in Gelderland en de rest van Nederland. Bekijk wat KA Flow voor jouw bedrijf kan bouwen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/diensten" },
  openGraph: { title, description, url: "/diensten" },
  twitter: { title, description },
};

const websiteFeatures = [
  { icon: PenLine, text: "Op maat ontworpen, geen kant-en-klare sjablonen" },
  { icon: Gauge, text: "Snel geladen, ook op mobiel" },
  { icon: Workflow, text: "Uitbreidbaar zodra je bedrijf groeit" },
  { icon: CheckCircle2, text: "Vindbaarheid (SEO) en een heldere structuur als basis" },
];

const automationFeatures = [
  { icon: MessageCircle, text: "AI-agents die klantvragen en leads opvolgen" },
  { icon: FileSpreadsheet, text: "Automatisering van administratie en data-invoer" },
  { icon: Mail, text: "E-mail- en berichtenflows die ook 's avonds doorlopen" },
  { icon: Wrench, text: "Koppelingen met de tools die je al gebruikt" },
];

const addOns = [
  {
    title: "Onderhoud en doorontwikkeling",
    description:
      "Een website of automatisering is nooit echt klaar. We blijven beschikbaar voor updates, uitbreidingen en bijsturing zodra je bedrijf verandert.",
  },
  {
    title: "Strategisch advies",
    description:
      "Twijfel je waar te beginnen? Samen bepalen we wat het meeste oplevert: een nieuwe website, automatisering, of allebei. Een gratis scan is een goed startpunt.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Diensten", path: "/diensten" }]} />

      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-dot-grid mask-fade-b opacity-50" />
        <div className="container-flow relative py-24 md:py-28">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
              Diensten
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Een website die werkt, en automatisering die meedenkt.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Of je nu een nieuwe website nodig hebt, je werkprocessen wilt
              automatiseren met AI, of allebei: we bouwen het op maat, voor
              ondernemers in Gelderland en de rest van Nederland.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Websites op maat */}
      <section className="py-24 md:py-28">
        <div className="container-flow grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-flow text-white">
              <Globe2 className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight">
              Websites op maat
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Een website is vaak het eerste contact tussen jou en een
              nieuwe klant. Daarom werken we niet met standaard sjablonen:
              elke site wordt opgebouwd rond jouw merk, jouw klanten en de
              manier waarop jij werkt, van eerste schets tot livegang.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Bespreek je website-project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>

          <FadeInStagger className="grid gap-4">
            {websiteFeatures.map((f) => (
              <FadeInItem key={f.text}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background">
                    <f.icon className="h-5 w-5 text-accent-blue" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed">{f.text}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* AI-agents & automatisering */}
      <section className="border-y border-border bg-surface py-24 md:py-28">
        <div className="container-flow grid gap-12 md:grid-cols-2 md:items-center">
          <FadeInStagger className="order-2 grid gap-4 md:order-1">
            {automationFeatures.map((f) => (
              <FadeInItem key={f.text}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface">
                    <f.icon className="h-5 w-5 text-accent-violet" />
                  </span>
                  <p className="text-sm font-medium leading-relaxed">{f.text}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="order-1 md:order-2">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-flow text-white">
              <Bot className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight">
              AI-agents &amp; automatisering
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Veel tijd in je bedrijf gaat zitten in werk dat zich herhaalt:
              vragen beantwoorden, gegevens overtypen, offertes opvolgen. We
              bouwen AI-agents en automatiseringen die dat werk overnemen,
              zodat jij je kunt richten op je klanten en je vak.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Ontdek wat automatisering oplevert
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading eyebrow="Ook beschikbaar" title="Wat erbij komt zodra je verder groeit" />
          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2">
            {addOns.map((item) => (
              <FadeInItem key={item.title}>
                <div className="h-full rounded-3xl border border-border bg-surface p-8">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="container-flow py-24 text-center md:py-28">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Niet zeker wat je nodig hebt?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Dat hoeft ook niet. Vraag een gratis scan aan, dan laten we
              zien waar voor jouw bedrijf de meeste winst te behalen is.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/gratis-scan">
                Vraag een gratis scan aan
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
