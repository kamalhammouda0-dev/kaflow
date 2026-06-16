"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 80, y: 90 }, { x: 260, y: 40 }, { x: 420, y: 130 }, { x: 600, y: 60 },
  { x: 760, y: 150 }, { x: 920, y: 70 }, { x: 1080, y: 140 }, { x: 180, y: 220 },
  { x: 380, y: 260 }, { x: 560, y: 210 }, { x: 740, y: 270 }, { x: 900, y: 220 },
  { x: 1050, y: 280 }, { x: 100, y: 330 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  [0, 7], [1, 8], [2, 9], [3, 10], [4, 11], [5, 12],
  [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [7, 13],
];

export function NetworkField({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 1160 380" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="netGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b5ef5" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#netGradient)"
            strokeWidth={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={3.5}
            fill="url(#netGradient)"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
