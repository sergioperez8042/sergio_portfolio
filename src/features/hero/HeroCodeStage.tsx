"use client";

import { Code2, Layers, Zap } from "lucide-react";

const CODE_LINES: { tokens: { text: string; color?: string }[] }[] = [
  {
    tokens: [
      { text: "const ", color: "#c5cad4" },
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
      { text: "async ", color: "#c5cad4" },
      { text: "() ", color: "#f3f3f3" },
      { text: "=> ", color: "#aaa6c3" },
      { text: "{", color: "#f3f3f3" },
    ],
  },
  {
    tokens: [
      { text: "    ", color: "#f3f3f3" },
      { text: "return ", color: "#c5cad4" },
      { text: "interfaces", color: "#a8b2c0" },
      { text: "(", color: "#f3f3f3" },
      { text: "'web'", color: "#86efac" },
      { text: ", ", color: "#f3f3f3" },
      { text: "'mobile'", color: "#86efac" },
      { text: ");", color: "#f3f3f3" },
    ],
  },
  { tokens: [{ text: "  },", color: "#f3f3f3" }] },
  { tokens: [{ text: "};", color: "#f3f3f3" }] },
];

export function HeroCodeStage() {
  return (
    <div
      className="relative hidden md:block"
      style={{ perspective: "1200px", minHeight: 480 }}
      aria-hidden="true"
    >
      {/* Glow */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl -z-10"
        style={{ background: "rgba(197,202,212,0.10)" }}
      />

      {/* Code window */}
      <div
        className="rounded-xl overflow-hidden border border-white/10 bg-[rgba(15,16,20,0.85)] backdrop-blur-xl"
        style={{
          transform: "rotateY(-8deg) rotateX(4deg)",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.6), 0 10px 30px -10px rgba(197,202,212,0.10), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
          <div className="flex gap-2">
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#ff5f56" }}
            />
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#ffbd2e" }}
            />
            <span
              className="w-[11px] h-[11px] rounded-full"
              style={{ background: "#27c93f" }}
            />
          </div>
          <span className="text-xs text-white/50 font-mono">sergio.ts</span>
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-[13.5px] leading-[1.85]">
          {CODE_LINES.map((line, i) => (
            <div key={i} className="flex gap-3.5">
              <span className="select-none text-white/[0.18] w-5 text-right shrink-0">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.tokens.map((token, ti) => (
                  <span
                    key={ti}
                    style={{ color: token.color ?? "#f3f3f3" }}
                  >
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Float chips */}
      <span className="float-chip float-a" style={{ top: -10, left: -20 }}>
        <Code2 className="w-3.5 h-3.5 ico" aria-hidden="true" />
        TypeScript
      </span>
      <span className="float-chip float-b" style={{ top: 140, right: -30 }}>
        <Zap className="w-3.5 h-3.5 ico" aria-hidden="true" />
        Vercel
      </span>
      <span className="float-chip float-a" style={{ bottom: -20, left: 30 }}>
        <Layers className="w-3.5 h-3.5 ico" aria-hidden="true" />
        5+ años
      </span>
    </div>
  );
}
