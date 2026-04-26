"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

function ProjectCard({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  liveUrl,
}: Project) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass p-5 rounded-2xl sm:w-[360px] w-full"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt={`Captura del proyecto ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end items-start gap-2 m-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir demo de ${name}`}
              className="glass w-10 h-10 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
            >
              <ExternalLink
                className="w-5 h-5 text-white"
                aria-hidden="true"
              />
            </a>
          ) : null}
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver código fuente de ${name} en GitHub`}
            className="glass w-10 h-10 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5 text-white" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function Works() {
  return (
    <SectionWrapper>
      <div>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Estos proyectos muestran mis habilidades y experiencia con ejemplos
          reales. Cada uno incluye una breve descripción con enlaces al
          repositorio y a la demo. Reflejan mi capacidad para resolver
          problemas complejos, trabajar con distintas tecnologías y gestionar
          entregas.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
