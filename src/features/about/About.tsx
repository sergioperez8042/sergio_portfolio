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
      className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Resumen.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("none", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        💻 Frontend Developer especializado en React, Next.js y React Native.
        Construyo interfaces funcionales e implemento la lógica de aplicaciones
        web y móviles. He trabajado en proyectos con Next.js y React Native
        cubriendo refactorización, gestión de estado global, integración con
        bases de datos y compilación para Android e iOS, siempre optimizando la
        experiencia de usuario y la eficiencia del desarrollo.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
