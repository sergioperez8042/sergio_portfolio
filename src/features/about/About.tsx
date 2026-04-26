"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/LangProvider";

export function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="hash-anchor relative max-w-[1280px] mx-auto px-6 sm:px-16 py-16 sm:py-24 lg:py-36"
    >
      <div className="reveal">
        <span className="eyebrow">{t.about.eyebrow}</span>
        <h2 className="h2 mt-4 text-white-100 max-w-[24ch]">
          {t.about.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-20 items-start mt-10">
        {/* Photo card */}
        <div
          className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 reveal mx-auto lg:mx-0 max-w-[320px] sm:max-w-[360px] lg:max-w-none w-full"
          style={{
            background:
              "linear-gradient(160deg, #1a1b22 0%, #0a0a0d 100%)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <Image
            src="/me.png"
            alt="Foto de Sergio Rodríguez"
            fill
            sizes="(max-width: 1024px) 100vw, 380px"
            className="object-cover"
            priority
          />
          {/* Frame deco */}
          <span
            className="absolute top-3 left-3 w-7 h-7 border-l border-t border-[var(--color-accent)] opacity-60"
            aria-hidden="true"
          />
          <span
            className="absolute top-3 right-3 w-7 h-7 border-r border-t border-[var(--color-accent)] opacity-60"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-3 left-3 w-7 h-7 border-l border-b border-[var(--color-accent)] opacity-60"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-3 right-3 w-7 h-7 border-r border-b border-[var(--color-accent)] opacity-60"
            aria-hidden="true"
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-secondary tracking-[0.18em] uppercase">
            {t.about.photoTag}
          </span>
        </div>

        {/* Bio */}
        <div className="reveal">
          {t.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[17px] leading-[1.75] text-white-100/90 mb-5 max-w-[60ch]"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 mt-10 pt-8 border-t border-white/[0.06]">
            {t.about.meta.map((item) => (
              <div key={item.lbl}>
                <div className="text-[10px] tracking-[0.18em] uppercase text-secondary mb-1.5">
                  {item.lbl}
                </div>
                <div className="text-[14px] font-semibold text-white-100">
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
