"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";
import { fadeIn, textVariant } from "@/lib/motion";
import { services } from "@/data/services";
import type { Service } from "@/data/types";

function ServiceCard({
  index,
  title,
  icon,
}: Service & { index: number }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      whileHover={{ y: -4 }}
      className="xs:w-[250px] w-full glass rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <Image
        src={icon}
        alt={title}
        width={64}
        height={64}
        className="object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </motion.div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Sobre mí</p>
        <h2 className={styles.sectionHeadText}>Quién soy.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("none", "tween", 0.1, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-5"
      >
        <p>
          Soy Sergio Rodríguez, Frontend Developer y Project Manager en{" "}
          <span className="text-white-100 font-medium">
            Odoo Consulting Group
          </span>
          . Trabajo en la intersección entre código y negocio: traduzco
          requisitos de cliente en arquitectura limpia, gestiono el roadmap del
          equipo y entrego features que rinden en producción.
        </p>
        <p>
          En los últimos 5 años he desplegado plataformas e-commerce,
          dashboards operativos, integraciones MCP/Odoo, apps móviles y
          portales corporativos para sectores como hotelería, fintech, retail y
          consultoría enterprise.{" "}
          <span className="text-white-100">
            Stack principal: TypeScript, React, Next.js, React Native, Flutter,
            Python/Odoo y Vercel.
          </span>
        </p>
        <p>
          Si tienes una idea que necesita pasar de prototipo a producto en
          producción — o un sistema legacy que pide refactor sin romper el
          negocio — eso es exactamente en lo que trabajo cada día.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
