import type { Metadata } from "next";
import { Gauge, Search, MousePointerClick, Bot, FileSearch, Mail, FileCheck2 } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ScanForm } from "@/components/ScanForm";

export const metadata: Metadata = {
  title: "Gratis Website & Online Scan — KA Flow",
  description:
    "Vraag een gratis scan aan en ontdek de pijnpunten in je website, vindbaarheid en online aanwezigheid. Voor ZZP'ers en MKB in Gelderland en heel Nederland.",
};

const checks = [
  { icon: Gauge, title: "Snelheid & techniek", text: "Hoe snel laadt je website, en op mobiel?" },
  { icon: Search, title: "Vindbaarheid (SEO)", text: "Scoor je goed in Google, lokaal en landelijk?" },
  { icon: MousePointerClick, title: "UX & conversie", text: "Nemen bezoekers ook echt actie op je site?" },
  { icon: Bot, title: "Automatiseringskansen", text: "Welk handwerk kan een AI-agent overnemen?" },
];

const steps = [
  { icon: FileSearch, title: "Aanvragen", text: "Vul het formulier in met je gegevens en (indien aanwezig) je website." },
  { icon: Gauge, title: "Wij analyseren", text: "Wij nemen je website en online vindbaarheid grondig onder de loep." },
  { icon: FileCheck2, title: "Rapport ontvangen", text: "Je ontvangt een helder overzicht van kansen en verbeterpunten." },
  { icon: Mail, title: "Vrijblijvend gesprek", text: "Optioneel bespreken we de resultaten samen, zonder verplichtingen." },
];

export default function GratisScanPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-grid mask-fade-b opacity-70" />
        <div className="container-flow relative grid gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
              100% gratis &amp; vrijblijvend
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Waar laat jouw website of online aanwezigheid kansen liggen?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Wij scannen je website en online vindbaarheid en laten precies
              zien waar de pijnpunten zitten — en wat erbij wint als je ze
              oplost. Voor ondernemers in Gelderland en heel Nederland.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-xl shadow-accent-blue/5 md:p-8">
              <ScanForm />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading
            eyebrow="Wat wij checken"
            title="Vier invalshoeken, één helder rapport."
          />
          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {checks.map((c) => (
              <FadeInItem key={c.title}>
                <div className="h-full rounded-3xl border border-border bg-surface p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background">
                    <c.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading eyebrow="Hoe het werkt" title="Van aanvraag tot concreet rapport." />
          <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeInItem key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-accent-violet">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                  <step.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
