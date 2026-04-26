"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";
import type { TechItem } from "@/data/i18n";

const si = (t: TechItem) =>
  `https://cdn.simpleicons.org/${t.slug}/${t.hex ?? "c5cad4"}`;

export function Tech() {
  const { t } = useTranslation();
  return (
    <section
      className="relative max-w-[1280px] mx-auto px-6 sm:px-16 py-16 sm:py-24 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
      }}
    >
      <div className="reveal">
        <span className="eyebrow">{t.tech.eyebrow}</span>
        <h2 className="h2 mt-4 text-white-100">{t.tech.title}</h2>
        <p className="text-[15px] leading-[1.7] text-secondary mt-4 max-w-[60ch]">
          {t.tech.lede}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-14 reveal">
        {t.tech.cats.map((cat) => (
          <div
            key={cat.title}
            className="p-5 sm:p-7 rounded-2xl bg-white/[0.025] border border-white/[0.06] backdrop-blur-md"
          >
            <h3 className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--color-accent)] mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[13px] font-medium text-white-100 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.18] transition-all cursor-default"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={si(tech)}
                    alt=""
                    width={16}
                    height={16}
                    loading="lazy"
                    className="object-contain shrink-0"
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
