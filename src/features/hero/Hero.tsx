"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { TypeLoop } from "@/components/effects/TypeLoop";

const ComputersCanvas = dynamic(
  () => import("@/components/three/ComputersCanvas"),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto hero-pattern hash-anchor overflow-hidden"
    >
      {/* Layer 0 — partículas */}
      <ParticlesBackground className="absolute inset-0 w-full h-full z-0" />

      {/* Layer 1 — modelo 3D */}
      <div className="absolute inset-0 z-10">
        <ComputersCanvas />
      </div>

      {/* Layer 2 — copy */}
      <div
        className={`relative z-20 ${styles.paddingX} max-w-7xl mx-auto pt-40 sm:pt-48 pointer-events-none`}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hola, soy{" "}
          <TypeLoop
            words={["Sergio", "Developer", "Frontend"]}
            className="text-[#915EFF]"
          />
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl`}>
          Frontend Developer — creo interfaces y aplicaciones web con React,
          Next.js y React Native.
        </p>
      </div>

      {/* Layer 3 — scroll cue */}
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
