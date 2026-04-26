"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";

export function Blog() {
  const { t } = useTranslation();
  const b = t.blog;
  const [first, ...rest] = b.posts;

  return (
    <section
      id="writing"
      className="hash-anchor relative max-w-[1280px] mx-auto px-6 sm:px-16 py-16 sm:py-24 lg:py-36"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 reveal">
        <div>
          <span className="eyebrow">{b.eyebrow}</span>
          <h2 className="h2 mt-4 text-white-100">{b.title}</h2>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-[16px] leading-[1.7] text-secondary max-w-[440px]">
            {b.lede}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            {b.ctaAll}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-4 reveal">
        {first ? (
          <article
            className="md:col-span-2 lg:col-span-1 p-7 rounded-2xl border flex flex-col gap-3.5 transition-all hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(160deg, rgba(197,202,212,0.08), rgba(255,255,255,0.02))",
              borderColor: "var(--color-line-strong)",
            }}
          >
            <div
              className="flex gap-3 text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "var(--color-secondary)" }}
            >
              <span style={{ color: "var(--color-accent)" }}>{first.cat}</span>
              <span>·</span>
              <span>{first.date}</span>
              <span>·</span>
              <span>{first.read}</span>
            </div>
            <h4 className="text-[28px] font-bold tracking-tight leading-[1.25] text-white-100">
              {first.title}
            </h4>
            <p className="text-[13.5px] leading-[1.6] text-secondary m-0">
              {first.excerpt}
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-auto"
              style={{ color: "var(--color-accent)" }}
            >
              Leer
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </span>
          </article>
        ) : null}

        {rest.map((p) => (
          <article
            key={p.title}
            className="p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col gap-3.5 transition-all hover:-translate-y-0.5 hover:bg-white/[0.045]"
          >
            <div
              className="flex gap-3 text-[11px] uppercase tracking-[0.08em]"
              style={{ color: "var(--color-secondary)" }}
            >
              <span style={{ color: "var(--color-accent)" }}>{p.cat}</span>
              <span>·</span>
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.read}</span>
            </div>
            <h4 className="text-[20px] font-bold tracking-tight leading-[1.25] text-white-100">
              {p.title}
            </h4>
            <p className="text-[13.5px] leading-[1.6] text-secondary m-0">
              {p.excerpt}
            </p>
            <span
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-auto"
              style={{ color: "var(--color-accent)" }}
            >
              Leer
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
