"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";

export function FeaturedCase() {
  const { t } = useTranslation();
  const f = t.works.featured;

  return (
    <article
      className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] rounded-3xl overflow-hidden border border-white/10 mb-14 transition-all hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.025)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Cover (mock cosmetic shop) */}
      <div
        className="relative min-h-[300px] sm:min-h-[360px] p-6 sm:p-8 flex flex-col justify-between gap-6"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(232,197,176,0.18), transparent 60%), linear-gradient(135deg, #1a1218 0%, #0a0a0d 100%)",
        }}
      >
        <div className="flex gap-2">
          <span
            className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full text-white-100"
            style={{
              background: "rgba(232,197,176,0.15)",
              border: "1px solid rgba(232,197,176,0.3)",
            }}
          >
            E-commerce
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full text-white-100"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            10 semanas
          </span>
        </div>

        {/* Phone-ish mock */}
        <div
          className="self-center w-[280px] max-w-full p-6 rounded-3xl text-[#1a1218] relative"
          style={{
            background: "linear-gradient(160deg, #fafaf7, #e8c5b0)",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <div
            className="w-14 h-1 rounded-sm mx-auto mb-4"
            style={{ background: "rgba(0,0,0,0.2)" }}
          />
          <h4 className="text-[22px] font-extrabold tracking-tight mb-1">
            Sophia
          </h4>
          <p className="text-[12px] opacity-70 mb-4">Cosmética natural · €24,90</p>
          <div className="grid grid-cols-4 gap-1.5 mb-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md"
                style={{ background: "rgba(0,0,0,0.08)" }}
              />
            ))}
          </div>
          <div
            className="text-[12px] font-bold py-2.5 text-center rounded-xl"
            style={{ background: "#1a1218", color: "#fafaf7" }}
          >
            Comprar ahora
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-4">
        <span
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--color-accent)" }}
          />
          {f.tag}
        </span>
        <h3
          className="font-extrabold tracking-tight leading-[1.15] text-white-100"
          style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
        >
          {f.title}
        </h3>
        <p className="text-[15px] leading-[1.7] text-secondary">{f.lede}</p>

        <div
          className="grid grid-cols-2 gap-4 py-5 my-2"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {f.results.map((r) => (
            <div key={r.lbl}>
              <div className="text-[22px] font-extrabold tracking-tight text-white-100">
                {r.num}
                <span
                  className="text-[13px] ml-0.5 font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {r.unit}
                </span>
              </div>
              <div className="text-[11px] tracking-wider text-secondary mt-0.5">
                {r.lbl}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {f.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white-100/85"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 mt-2">
          <a
            href="#case-study"
            className="group inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #d8d8e0 100%)",
              color: "#0a0a0d",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow:
                "0 12px 30px -10px rgba(197,202,212,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 18px 40px -10px rgba(197,202,212,0.55), inset 0 1px 0 rgba(255,255,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 12px 30px -10px rgba(197,202,212,0.4), inset 0 1px 0 rgba(255,255,255,0.6)";
            }}
          >
            {f.ctaCase}
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href={f.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 text-[13px] font-semibold rounded-full glass text-white-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:border-white/[0.18]"
          >
            {f.ctaLive}
            <ExternalLink
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
