"use client";

import { motion } from "framer-motion";

const regionCities = [
  { name: "Arnhem", angle: -55, r: 30 },
  { name: "Nijmegen", angle: 8, r: 32 },
  { name: "Apeldoorn", angle: -110, r: 33 },
  { name: "Ede", angle: -160, r: 28 },
  { name: "Doetinchem", angle: 55, r: 33 },
];

const nationalCities = [
  { name: "Amsterdam", angle: -150, r: 47 },
  { name: "Utrecht", angle: -178, r: 45 },
  { name: "Rotterdam", angle: 165, r: 47 },
  { name: "Eindhoven", angle: 128, r: 46 },
  { name: "Groningen", angle: -80, r: 47 },
];

const CENTER = { x: 50, y: 50 };
const Y_SCALE = 0.62;

function point(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CENTER.x + r * Math.cos(rad), y: CENTER.y + r * Math.sin(rad) * Y_SCALE };
}

export function RegionNetwork() {
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-3xl">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="regionGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b5ef5" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {regionCities.map((c) => {
          const p = point(c.angle, c.r);
          return (
            <motion.line
              key={c.name}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={p.x}
              y2={p.y}
              stroke="url(#regionGradient)"
              strokeWidth={0.5}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.65 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          );
        })}
        {nationalCities.map((c) => {
          const p = point(c.angle, c.r);
          return (
            <motion.line
              key={c.name}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={p.x}
              y2={p.y}
              stroke="#c7cad1"
              strokeWidth={0.35}
              strokeDasharray="1.6 1.6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          );
        })}
      </svg>

      {/* Center node: Heteren (HQ) */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute h-16 w-16 animate-ping rounded-full bg-accent-violet/20" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-flow text-[11px] font-bold text-white shadow-lg shadow-accent-violet/30">
            HQ
          </span>
        </div>
        <p className="mt-2 text-center text-xs font-semibold whitespace-nowrap">Heteren</p>
      </div>

      {regionCities.map((c) => {
        const p = point(c.angle, c.r);
        return (
          <div
            key={c.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-accent-blue ring-4 ring-accent-blue/15" />
            <p className="mt-1.5 whitespace-nowrap text-center text-[11px] font-medium text-foreground">
              {c.name}
            </p>
          </div>
        );
      })}

      {nationalCities.map((c) => {
        const p = point(c.angle, c.r);
        return (
          <div
            key={c.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-muted" />
            <p className="mt-1.5 whitespace-nowrap text-center text-[10px] text-muted">
              {c.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
