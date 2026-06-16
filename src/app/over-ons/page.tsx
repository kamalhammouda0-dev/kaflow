import type { Metadata } from "next";
import { ArrowUpRight, Target, HeartHandshake, Sparkles, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoMark } from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Over ons — KA Flow",
  description:
    "KA Flow is gevestigd in Heteren, Gelderland, en helpt ZZP'ers en MKB in heel Nederland met websites op maat en AI-automatisering.",
};

const values = [
  {
    icon: Target,
    title: "Precisie",
    description: "Geen genoegen nemen met 'goed genoeg' — wij bouwen precies wat jij voor ogen hebt.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijk",
    description: "Je werkt rechtstreeks met ons, geen account managers of tussenlagen.",
  },
  {
    icon: Lightbulb,
    title: "Vooruitdenken",
    description: "Wij bouwen niet alleen voor nu, maar houden rekening met waar je bedrijf naartoe groeit.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 bg-dot-grid mask-fade-b opacity-50" />
        <div className="container-flow relative grid gap-12 py-24 md:grid-cols-[1fr_0.8fr] md:items-center md:py-28">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-blue">
              Over ons
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Eén vast aanspreekpunt. Volledige aandacht voor jouw bedrijf.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              KA Flow is gevestigd in Heteren, Gelderland, en bouwt websites
              en AI-agents voor ZZP&apos;ers en MKB-bedrijven in heel
              Nederland die net als wij geloven dat kwaliteit en persoonlijke
              aandacht niet ten koste van elkaar hoeven te gaan.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Wat ooit begon met het bouwen van websites, groeide uit tot een
              bredere missie: ondernemers helpen om met technologie — en
              specifiek AI — slimmer te werken, zonder dat het ten koste gaat
              van persoonlijk contact met hún klanten.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center md:justify-end">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-flow shadow-2xl shadow-accent-violet/20 md:h-72 md:w-72">
              <div className="flex h-[88%] w-[88%] items-center justify-center rounded-full bg-surface">
                <LogoMark className="h-24 w-24" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-28">
        <div className="container-flow">
          <SectionHeading eyebrow="Waar wij voor staan" title="De waarden achter elk project." />
          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <FadeInItem key={value.title}>
                <div className="h-full rounded-3xl border border-border bg-surface p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background">
                    <value.icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Why KA Flow */}
      <section className="border-y border-border bg-surface py-24 md:py-28">
        <div className="container-flow grid gap-12 md:grid-cols-2 md:items-center">
          <FadeIn>
            <Sparkles className="h-8 w-8 text-accent-violet" />
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight">
              Waarom ondernemers voor KA Flow kiezen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Als ZZP&apos;er of MKB-ondernemer heb je geen tijd voor trage
              bureaus of generieke oplossingen. Je wilt iemand die luistert,
              snel schakelt en resultaat levert dat past bij jouw manier van
              werken.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="space-y-5">
              {[
                "Directe communicatie, zonder ruis of vertraging",
                "Maatwerk in plaats van one-size-fits-all oplossingen",
                "Kennis van zowel webdesign als AI/automatisering, in huis",
                "Eerlijk advies — ook als de oplossing kleiner is dan gedacht",
                "Altijd een persoonlijke eerste kennismaking op locatie, waar in Nederland je ook zit",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-flow" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center md:py-28">
        <div className="container-flow">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Laten we kennismaken.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Vertel ons over je bedrijf en je ambities — dan denken wij vrijblijvend mee.
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
