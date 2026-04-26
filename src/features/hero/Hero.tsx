"use client";

import { styles } from "@/lib/styles";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { TypeLoop } from "@/components/effects/TypeLoop";
import { CodeWindow } from "@/components/effects/CodeWindow";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[60vh] sm:min-h-screen mx-auto hero-pattern hash-anchor overflow-hidden flex items-center"
    >
      {/* Layer 0 — partículas conectadas (icy blue) */}
      <ParticlesBackground className="absolute inset-0 w-full h-full z-0" />

      {/* Layer 1 — copy + code window */}
      <div
        className={`relative z-10 ${styles.paddingX} max-w-7xl mx-auto w-full pt-24 sm:pt-32 pb-12 grid sm:grid-cols-2 gap-10 items-center`}
      >
        <div>
          <h1
            className={`${styles.heroHeadText} text-white-100`}
            style={{ lineHeight: 1.05 }}
          >
            <span className="block">Hola, soy</span>
            <span
              className="block text-[#c5cad4] whitespace-nowrap"
              style={{ minHeight: "1.05em" }}
            >
              <TypeLoop words={["Sergio", "Developer", "Frontend"]} />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-secondary max-w-2xl`}>
            Convierto ideas en producto que escala. Más de 5 años construyendo
            aplicaciones web y móviles para startups, fintech, hotelería y
            consultoras enterprise — desde el prototipo hasta producción en
            Vercel.
          </p>
        </div>

        <CodeWindow className="hidden sm:block" />
      </div>
    </section>
  );
}
