"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";
import { FeaturedCase } from "./FeaturedCase";

export function Works() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="hash-anchor relative max-w-[1280px] mx-auto px-6 sm:px-16 py-16 sm:py-24 lg:py-36"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 reveal">
        <div>
          <span className="eyebrow">{t.works.eyebrow}</span>
          <h2 className="h2 mt-4 text-white-100">{t.works.title}</h2>
        </div>
        <p className="text-[16px] leading-[1.7] text-secondary max-w-[440px]">
          {t.works.lede}
        </p>
      </div>

      <div className="reveal">
        <FeaturedCase />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
        {t.works.others.map((p) => (
          <article
            key={p.name}
            className="group relative p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex flex-col gap-3.5 transition-all hover:-translate-y-1 hover:bg-white/[0.045] hover:border-white/[0.18]"
          >
            {"image" in p && p.image ? (
              <div className="relative aspect-[16/10] rounded-xl border border-white/[0.06] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Captura del proyecto ${p.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.45), transparent 60%)",
                  }}
                />
              </div>
            ) : (
              <div className={`cv-base ${p.cover}`} aria-hidden="true" />
            )}

            <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.06] text-secondary transition-colors">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </div>

            <h4 className="text-[18px] font-bold tracking-tight text-white-100 mt-1">
              {p.name}
            </h4>
            <p className="text-[13px] leading-[1.6] text-secondary m-0">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white-100/85"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 mt-1">
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Demo ${p.name}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium glass hover:bg-white/[0.08] transition"
                >
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                  Demo
                </a>
              ) : null}
              {p.sourceUrl ? (
                <a
                  href={p.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Código ${p.name}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium glass hover:bg-white/[0.08] transition"
                >
                  <Github className="w-3 h-3" aria-hidden="true" />
                  Source
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
