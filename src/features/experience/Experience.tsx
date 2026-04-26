"use client";

import Image from "next/image";
import { type MouseEvent } from "react";
import { useTranslation } from "@/lib/i18n/LangProvider";
import type { ExpItem } from "@/data/i18n";

function ExpCard({ item, nowLabel }: { item: ExpItem; nowLabel: string }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className="exp-card-root relative p-7 rounded-2xl border border-white/[0.06] backdrop-blur-md transition-all overflow-hidden hover:-translate-y-0.5"
      style={{
        background: "rgba(255,255,255,0.025)",
      }}
    >
      <span
        aria-hidden="true"
        className="exp-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(197,202,212,0.08), transparent 40%)",
        }}
      />

      <div className="flex items-center gap-4 mb-4 relative z-10">
        <span
          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: item.iconBg,
            border: "2px solid #000",
          }}
          aria-hidden="true"
        >
          <Image
            src={item.icon}
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[17px] font-bold tracking-tight text-white-100">
            {item.role}
          </div>
          <div className="text-[13px] text-secondary mt-0.5">
            {item.company}
            <span className="mx-2 opacity-50">·</span>
            {item.date}
          </div>
        </div>
        {item.now ? (
          <span
            className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(134,239,172,0.12)",
              color: "#86efac",
              border: "1px solid rgba(134,239,172,0.3)",
            }}
          >
            {nowLabel}
          </span>
        ) : null}
      </div>

      <ul className="list-none m-0 mb-4 p-0 flex flex-col gap-2 relative z-10">
        {item.points.map((p, i) => (
          <li
            key={i}
            className="text-[14px] leading-[1.65] text-white-100/85 pl-4 relative"
          >
            <span
              className="absolute left-0 top-[9px] w-1.5 h-px"
              style={{ background: "var(--color-accent)" }}
              aria-hidden="true"
            />
            {p}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 relative z-10">
        {item.chips.map((chip) => (
          <span
            key={chip}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white-100/85"
          >
            {chip}
          </span>
        ))}
      </div>

      <style jsx>{`
        .exp-card-root:hover {
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: var(--shadow-card);
        }
        .exp-card-root:hover .exp-glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export function Experience() {
  const { t } = useTranslation();
  return (
    <section
      id="work"
      className="hash-anchor relative max-w-[1280px] mx-auto px-6 sm:px-16 py-24 lg:py-36"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 mt-8">
        <aside className="lg:sticky lg:top-32 self-start reveal">
          <span className="eyebrow">{t.exp.eyebrow}</span>
          <h2 className="h2 mt-4 mb-4 text-white-100">{t.exp.title}</h2>
          <p className="text-[15px] leading-[1.7] text-secondary">
            {t.exp.lede}
          </p>
        </aside>

        <div className="flex flex-col gap-5 reveal">
          {t.exp.items.map((item) => (
            <ExpCard
              key={`${item.company}-${item.date}`}
              item={item}
              nowLabel={t.exp.now}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
