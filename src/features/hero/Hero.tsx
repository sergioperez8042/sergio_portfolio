"use client";

import { ArrowRight, Download } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { StatusPill } from "@/components/ui/StatusPill";
import { Typewriter } from "@/components/ui/Typewriter";
import { HeroMeta } from "./HeroMeta";
import { HeroCodeStage } from "./HeroCodeStage";

export function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="hash-anchor relative min-h-[88vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden hero-pattern"
    >
      {/* Layer 0 — partículas (mandato del usuario) */}
      <ParticlesBackground className="absolute inset-0 w-full h-full z-0" />

      {/* Layer 0.5 — grid + orb */}
      <div className="grid-bg" />
      <div
        className="hero-orb"
        style={{ right: "-100px", top: "20%" }}
        aria-hidden="true"
      />

      {/* Layer 1 — content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
          <div className="reveal in">
            <StatusPill>{t.hero.status}</StatusPill>

            <h1 className="h1 mt-8 text-white-100">
              <span className="block">{t.hero.line1}</span>
              {/* Ghost reserva el espacio del peor caso (palabra mas larga) */}
              <span className="relative block">
                <span
                  aria-hidden="true"
                  className="invisible block"
                  style={{ visibility: "hidden" }}
                >
                  {t.hero.typeWords.reduce(
                    (a, b) => (b.length > a.length ? b : a),
                    "",
                  )}
                </span>
                <span className="absolute inset-0 accent-gradient-text">
                  <Typewriter words={[...t.hero.typeWords]} />
                </span>
              </span>
            </h1>

            <p
              className="text-[18px] leading-[1.65] text-secondary max-w-[560px] mt-8"
              dangerouslySetInnerHTML={{ __html: t.hero.sub }}
            />

            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 text-[14px] font-semibold rounded-full border transition-all"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-white-100) 0%, #d8d8e0 100%)",
                  color: "var(--color-primary)",
                  borderColor: "rgba(255,255,255,0.5)",
                  boxShadow:
                    "0 12px 30px -10px rgba(197,202,212,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/sergio-rodriguez-cv.pdf"
                download="sergio-rodriguez-cv.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 text-[14px] font-semibold rounded-full glass text-white-100 hover:bg-white/[0.07] transition-all"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                {t.hero.ctaSecondary}
              </a>
            </div>

            <HeroMeta items={t.hero.meta} />
          </div>

          {/* Right: code stage */}
          <HeroCodeStage />
        </div>
      </div>

    </section>
  );
}
