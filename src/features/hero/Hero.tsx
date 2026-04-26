"use client";

import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { TypeLoop } from "@/components/effects/TypeLoop";
import { CodeWindow } from "@/components/effects/CodeWindow";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen mx-auto hero-pattern hash-anchor overflow-hidden"
    >
      {/* Layer 0 — partículas conectadas (icy blue) */}
      <ParticlesBackground className="absolute inset-0 w-full h-full z-0" />

      {/* Layer 1 — copy + code window */}
      <div
        className={`relative z-10 ${styles.paddingX} max-w-7xl mx-auto pt-32 sm:pt-40 pb-32 grid sm:grid-cols-2 gap-10 items-center`}
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

      {/* Layer 2 — scroll cue */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <a
          href="#about"
          aria-label="Ir a la sección Sobre mí"
          className="block"
        >
          <div className="w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.span
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="block w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
