"use client";

import { useState, type FormEvent } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function ScanForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const website = String(data.get("website") ?? "");
    const company = String(data.get("company") ?? "");
    const pain = String(data.get("pain") ?? "");

    const subject = encodeURIComponent(`Gratis scan aanvraag — ${name}`);
    const body = encodeURIComponent(
      `Naam: ${name}\nBedrijf: ${company}\nE-mail: ${email}\nWebsite: ${website}\n\nGrootste uitdaging:\n${pain}`
    );

    window.location.href = `mailto:Kamalhammouda0@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-violet" />
        <h3 className="font-display text-xl font-semibold">Je mailprogramma opent zich</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Verstuur de e-mail om je scan aan te vragen. Wij nemen 'm binnen 1
          werkdag in behandeling en sturen je rapport zo snel mogelijk toe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">Naam</label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Jouw naam"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">E-mailadres</label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="jij@bedrijf.nl"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="website" className="mb-2 block text-sm font-medium">
            Website (indien aanwezig)
          </label>
          <input
            id="website"
            name="website"
            type="text"
            placeholder="www.jouwbedrijf.nl"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">Bedrijfsnaam</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Naam van je bedrijf"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
          />
        </div>
      </div>

      <div>
        <label htmlFor="pain" className="mb-2 block text-sm font-medium">
          Waar loop je nu tegenaan?
        </label>
        <textarea
          id="pain"
          name="pain"
          rows={4}
          placeholder="Bijv. weinig aanvragen via de website, geen tijd voor klantcontact, twijfel over vindbaarheid..."
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-flow px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-violet/30 md:w-auto"
      >
        Vraag je gratis scan aan
        <Sparkles className="h-4 w-4" />
      </button>
      <p className="text-xs text-muted">100% vrijblijvend. Geen verplichtingen, geen verkooppraatje.</p>
    </form>
  );
}
