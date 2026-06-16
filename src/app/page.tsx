import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Bot,
  Workflow,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Compass,
  Hammer,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientCard } from "@/components/ui/GradientCard";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { FlowLines } from "@/components/FlowLines";
import { NetworkField } from "@/components/NetworkField";
import { HeroVisual } from "@/components/HeroVisual";
import { RegionNetwork } from "@/components/RegionNetwork";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FaqSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "KA Flow — Websites & AI-agents in Gelderland en heel Nederland",
  description:
    "KA Flow bouwt websites op maat en AI-agents & automatiseringen voor ZZP'ers en MKB. Gevestigd in Heteren, Gelderland — actief in heel Nederland. Vraag een gratis scan aan.",
};

const services = [
  {
    icon: Globe2,
    title: "Websites op maat",
    description:
      "Geen templates, geen genoegen nemen met 'goed genoeg'. Wij bouwen de website precies zoals jij ze voor ogen hebt — snel, modern en gemaakt om mee te groeien met je bedrijf.",
  },
  {
    icon: Bot,
    title: "AI-agents & automatisering",
    description:
      "Bespaar uren per week. Wij ontwikkelen AI-agents en automatiseringen die herhalend werk overnemen — van klantcontact en leadopvolging tot administratie.",
  },
];

const steps = [
  { icon: MessageSquare, title: "Kennismaking", description: "Wij bespreken je doelen, je klanten en waar je nu tegenaan loopt." },
  { icon: Compass, title: "Strategie & ontwerp", description: "Wij vertalen jouw wensen naar een concreet plan en een ontwerp op maat." },
  { icon: Hammer, title: "Bouwen & automatiseren", description: "Wij bouwen je website en/of AI-agent, met korte feedbacklijnen." },
  { icon: Rocket, title: "Live & doorgroeien", description: "Wij lanceren, meten resultaat en bouwen door waar nodig." },
];

const trustPoints = [
  "Persoonlijk contact, geen tussenpersonen",
  "Gebouwd rond jouw proces, niet andersom",
  "Transparante prijzen, geen verrassingen",
];

const faqs = [
  {
    question: "Werkt KA Flow ook buiten Gelderland?",
    answer:
      "Ja. Wij zijn gevestigd in Heteren, Gelderland, en werken vanuit daar voor ondernemers in heel Nederland. Vervolgafspraken kunnen op locatie of volledig op afstand.",
  },
  {
    question: "Komen jullie ook echt persoonlijk langs?",
    answer:
      "Ja, altijd. Voor de eerste kennismaking komen we graag persoonlijk bij je langs voor een goed gesprek — waar in Nederland je ook gevestigd bent. Dat persoonlijke contact is voor ons net zo belangrijk als het eindresultaat.",
  },
  {
    question: "Wat kost een website of AI-agent van KA Flow?",
    answer:
      "Dat hangt af van je wensen. Na een gratis scan of kennismaking ontvang je een transparante offerte op maat — zonder verborgen kosten.",
  },
  {
    question: "Wat is de gratis scan precies?",
    answer:
      "Wij analyseren je website en online vindbaarheid en laten zien waar kansen liggen op het gebied van snelheid, SEO, conversie en automatisering. Volledig vrijblijvend.",
  },
  {
    question: "Hoe snel kan mijn website live staan?",
    answer:
      "Een gemiddeld website-project duurt enkele weken, afhankelijk van de omvang. In de kennismaking bespreken we een realistische planning.",
  },
];

export default function Home() {
  return (
    <>
      <FaqSchema items={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
        <FlowLines className="pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-flow relative grid gap-12 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-32">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-blue">
                <Sparkles className="h-3.5 w-3.5" />
                Gelderland &amp; heel Nederland
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
                Websites en AI-agents die{" "}
                <span className="text-gradient">voor je werken.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                KA Flow bouwt websites op maat en automatiseert je
                bedrijfsprocessen met AI — voor ondernemers in Gelderland en
                heel Nederland die vooruit willen, niet achterblijven.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/gratis-scan">
                  Vraag een gratis scan aan
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="/diensten" variant="secondary">
                  Bekijk onze diensten
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
                {trustPoints.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-violet" />
                    {point}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="hidden md:block">
            <HeroVisual />
          </FadeIn>
        </div>
      </section>

      {/* Diensten teaser */}
      <section className="border-t border-border bg-surface">
        <div className="container-flow py-24 md:py-28">
          <SectionHeading
            eyebrow="Wat wij doen"
            title="Twee disciplines, één doel: jouw bedrijf vooruit helpen."
            description="Een sterke online aanwezigheid en slimme automatisering versterken elkaar. Wij combineren beide, op maat van jouw bedrijf."
          />

          <FadeInStagger className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <FadeInItem key={service.title}>
                <GradientCard className="h-full hover:-translate-y-1">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-flow text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                  <Link
                    href="/diensten"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue transition-all"
                  >
                    Meer over deze dienst
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </GradientCard>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading
            eyebrow="Werkwijze"
            title="Helder proces, korte lijnen."
            description="Geen dikke offertes of vage trajecten. Vier stappen van kennismaking tot een werkende website of AI-agent."
          />

          <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeInItem key={step.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-accent-violet">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface">
                  <step.icon className="h-5 w-5 text-accent-blue" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Gratis scan banner */}
      <section className="border-t border-border bg-surface py-20 md:py-24">
        <div className="container-flow">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-dark-bg px-8 py-14 text-center md:px-16 md:py-16">
              <div className="pointer-events-none absolute inset-0 bg-dot-grid-dark opacity-70" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(50% 80% at 50% 0%, rgba(139,92,246,0.25), transparent 70%)" }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-dark-border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-violet">
                  <Sparkles className="h-3.5 w-3.5" />
                  Gratis &amp; vrijblijvend
                </span>
                <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-dark-foreground md:text-4xl">
                  Benieuwd waar jouw website kansen laat liggen?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-dark-muted md:text-lg">
                  Vraag een gratis scan aan en ontvang een concreet rapport
                  met de grootste pijnpunten en kansen — voor je website,
                  vindbaarheid en automatisering.
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/gratis-scan" variant="dark">
                    Vraag je gratis scan aan
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading
            eyebrow="Werkgebied"
            align="center"
            className="mx-auto text-center"
            title="Geworteld in Gelderland. Actief in heel Nederland."
            description="Vanuit Heteren werken wij voor ondernemers in Arnhem, Nijmegen, Apeldoorn, Ede en Doetinchem — én voor ZZP'ers en MKB door heel Nederland. Voor de eerste kennismaking komen we altijd persoonlijk langs, waar in Nederland je ook gevestigd bent — dat stukje persoonlijk contact laten we nooit los."
          />
          <FadeIn delay={0.15} className="mt-12">
            <RegionNetwork />
          </FadeIn>
          <FadeIn delay={0.2} className="mx-auto mt-10 max-w-xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted">
              <Sparkles className="h-4 w-4 text-accent-violet" />
              Eerste kennismaking? Die komen we altijd persoonlijk bij je langsbrengen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Toekomstvisie — dark */}
      <section className="relative overflow-hidden bg-dark-bg py-28 text-dark-foreground md:py-32">
        <NetworkField className="pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.18), transparent 70%)" }}
        />
        <div className="container-flow relative">
          <SectionHeading
            eyebrow="Toekomstvisie"
            dark
            align="center"
            title={
              <>
                De toekomst van ondernemen is{" "}
                <span className="text-gradient">autonoom.</span>
              </>
            }
            description="Terwijl veel bedrijven nog alles handmatig doen, lopen onze klanten al voor. Agents die leads opvolgen. Processen die zichzelf optimaliseren. Websites die meebewegen met je groei."
          />

          <FadeIn delay={0.15} className="mt-6 mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-dark-muted md:text-lg">
              KA Flow helpt ZZP&apos;ers en MKB nu al die stap te zetten —
              zodat jij klaarstaat voor wat komt, in plaats van pas in actie
              te komen wanneer het niet meer anders kan.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: "Vandaag", text: "Een website en werkwijze die nog veel handwerk vragen." },
              { title: "Met KA Flow", text: "Slimme automatisering die repetitief werk overneemt, vandaag al." },
              { title: "Morgen", text: "Een bedrijf dat soepel meeschaalt, zonder dat jij alles zelf moet doen." },
            ].map((item) => (
              <FadeInItem key={item.title}>
                <div className="h-full rounded-3xl border border-dark-border bg-dark-surface/60 p-7 backdrop-blur-sm">
                  <Workflow className="h-5 w-5 text-accent-violet" />
                  <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-muted">{item.text}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading
            eyebrow="Veelgestelde vragen"
            align="center"
            className="mx-auto text-center"
            title="Nog vragen?"
          />
          <FadeIn delay={0.1} className="mx-auto mt-12 max-w-2xl">
            <FaqAccordion items={faqs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center md:py-28">
        <div className="container-flow">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Klaar om de volgende stap te zetten?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Plan een vrijblijvend gesprek en ontdek wat een website op maat
              of een AI-agent voor jouw bedrijf kan betekenen.
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
