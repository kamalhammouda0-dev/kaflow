"use client";

import { useState, type FormEvent } from "react";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";

export function ScanForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        website: data.get("website"),
        company: data.get("company"),
        pain: data.get("pain"),
      }),
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      const json = await res.json().catch(() => ({}));
      setErrorMsg(json.error ?? "Er ging iets mis. Probeer het opnieuw.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-violet" />
        <h3 className="font-display text-xl font-semibold">Scanaanvraag ontvangen!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Wij nemen binnen 1 werkdag contact met je op en sturen je rapport zo snel mogelijk toe.
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

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-flow px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-violet/30 disabled:opacity-60 disabled:cursor-not-allowed md:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Versturen…
          </>
        ) : (
          <>
            Vraag je gratis scan aan
            <Sparkles className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-xs text-muted">100% vrijblijvend. Geen verplichtingen, geen verkooppraatje.</p>
    </form>
  );
}
