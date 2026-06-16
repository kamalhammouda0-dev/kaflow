"use client";

import { motion } from "framer-motion";
import { Bot, CheckCheck, Globe2 } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-4 w-[85%] rounded-2xl border border-border bg-surface shadow-2xl shadow-accent-blue/10"
      >
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-[11px] text-muted">
            <Globe2 className="h-3 w-3" />
            jouwbedrijf.nl
          </span>
        </div>
        <div className="space-y-3 p-5">
          <div className="h-3 w-2/3 rounded-full bg-gradient-flow opacity-90" />
          <div className="h-2 w-full rounded-full bg-border" />
          <div className="h-2 w-5/6 rounded-full bg-border" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-xl bg-background" />
            <div className="h-12 rounded-xl bg-background" />
            <div className="h-12 rounded-xl bg-background" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-2 right-0 w-[78%] rounded-2xl border border-border bg-dark-bg p-4 shadow-2xl shadow-accent-violet/20"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-flow">
            <Bot className="h-4 w-4 text-white" />
          </span>
          <div>
            <p className="text-xs font-semibold text-dark-foreground">AI-agent</p>
            <p className="text-[10px] text-dark-muted">actief &middot; reageert direct</p>
          </div>
          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-dark-surface p-3">
          <CheckCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-violet" />
          <p className="text-[11px] leading-relaxed text-dark-muted">
            3 nieuwe leads automatisch opgevolgd. Offerte verstuurd naar
            Jansen Bouw.
          </p>
        </div>
      </motion.div>

      <div className="absolute -inset-10 -z-10 bg-dot-grid mask-fade-b opacity-60" />
    </div>
  );
}
