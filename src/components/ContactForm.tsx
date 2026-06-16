"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        message: data.get("message"),
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
        <h3 className="font-display text-xl font-semibold">Bericht verzonden!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          We nemen binnen één werkdag contact met je op.
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
            Verstuur bericht
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
