"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Kennismaking via KA Flow — ${name}`);
    const body = encodeURIComponent(
      `Naam: ${name}\nBedrijf: ${company}\nE-mail: ${email}\n\n${message}`
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
          Verstuur de e-mail om je bericht te versturen. Reageert er niets?
          Mail dan rechtstreeks naar{" "}
          <a href="mailto:Kamalhammouda0@gmail.com" className="font-semibold text-accent-blue">
            Kamalhammouda0@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Naam
          </label>
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
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-mailadres
          </label>
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

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">
          Bedrijfsnaam
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Naam van je bedrijf (optioneel)"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Vertel kort over je project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Bijv. we willen een nieuwe website voor ons bedrijf, of we willen onderzoeken of AI onze klantenservice kan ondersteunen..."
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-blue"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-flow px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-violet/30 md:w-auto"
      >
        Verstuur bericht
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
