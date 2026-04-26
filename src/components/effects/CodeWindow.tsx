"use client";

import { motion } from "framer-motion";

const CODE_LINES: { tokens: { text: string; color?: string }[] }[] = [
  {
    tokens: [
      { text: "const ", color: "#c084fc" },
      { text: "developer ", color: "#f3f3f3" },
      { text: "= ", color: "#aaa6c3" },
      { text: "{", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "  name: ", color: "#aaa6c3" },
      { text: "'Sergio'", color: "#86efac" },
      { text: ",", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "  stack: ", color: "#aaa6c3" },
      { text: "[", color: "#f3f3f3" },
      { text: "'React'", color: "#86efac" },
      { text: ", ", color: "#f3f3f3" },
      { text: "'Next.js'", color: "#86efac" },
      { text: ", ", color: "#f3f3f3" },
      { text: "'TypeScript'", color: "#86efac" },
      { text: "],", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "  focus: ", color: "#aaa6c3" },
      { text: "'Frontend Architecture'", color: "#86efac" },
      { text: ",", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "  building: ", color: "#aaa6c3" },
      { text: "async ", color: "#c084fc" },
      { text: "() ", color: "#f3f3f3" },
      { text: "=> ", color: "#aaa6c3" },
      { text: "{", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "    ", color: "#f3f3f3" },
      { text: "return ", color: "#c084fc" },
      { text: "interfaces", color: "#7dd3fc" },
      { text: "(", color: "#f3f3f3" },
      { text: "'web'", color: "#86efac" },
      { text: ", ", color: "#f3f3f3" },
      { text: "'mobile'", color: "#86efac" },
      { text: ");", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "  ", color: "#f3f3f3" },
      { text: "},", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [{ text: "};", color: "#f3f3f3" }],
  },
];

const TRAFFIC_LIGHTS = [
  { color: "#FF5F56", label: "close" },
  { color: "#FFBD2E", label: "minimize" },
  { color: "#27C93F", label: "maximize" },
];

export function CodeWindow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: -4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      aria-hidden="true"
    >
      {/* Glow detrás */}
      <div className="absolute -inset-6 bg-[#a3b8ff]/20 rounded-3xl blur-3xl -z-10" />

      <div
        className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0a18]/95 backdrop-blur-xl shadow-2xl"
        style={{
          transform: "rotateY(-4deg) rotateX(2deg)",
          boxShadow:
            "0 30px 80px -20px rgba(145, 94, 255, 0.35), 0 10px 30px -10px rgba(0, 0, 0, 0.6)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
          <div className="flex gap-1.5">
            {TRAFFIC_LIGHTS.map(({ color, label }) => (
              <span
                key={label}
                className="w-3 h-3 rounded-full"
                style={{ background: color }}
              />
            ))}
          </div>
          <span className="ml-3 text-xs text-white/40 font-mono">
            sergio.ts
          </span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          {CODE_LINES.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4 + lineIndex * 0.12,
                duration: 0.4,
              }}
              className="flex"
            >
              <span className="select-none text-white/20 w-7 shrink-0 text-right pr-3">
                {lineIndex + 1}
              </span>
              <span className="whitespace-pre">
                {line.tokens.map((token, tokenIndex) => (
                  <span
                    key={tokenIndex}
                    style={{ color: token.color ?? "#f3f3f3" }}
                  >
                    {token.text}
                  </span>
                ))}
              </span>
            </motion.div>
          ))}

          {/* Cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-white/70 ml-9 mt-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
