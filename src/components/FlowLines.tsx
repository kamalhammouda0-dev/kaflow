"use client";

import { motion } from "framer-motion";

export function FlowLines({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b5ef5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[
          "M -100 420 C 250 320, 450 520, 700 380 S 1100 220, 1320 300",
          "M -100 300 C 200 220, 480 380, 760 240 S 1080 80, 1320 160",
          "M -100 500 C 280 460, 520 560, 780 460 S 1100 380, 1320 440",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="url(#flowGradient)"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
