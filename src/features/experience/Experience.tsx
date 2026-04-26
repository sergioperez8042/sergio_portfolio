"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";
import { fadeIn, textVariant } from "@/lib/motion";
import { experiences } from "@/data/experiences";
import type { Experience as ExperienceType } from "@/data/types";

function TimelineCard({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) {
  return (
    <motion.li
      variants={fadeIn("up", "spring", 0.2 * index, 0.75)}
      className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
    >
      <span
        className="absolute left-3 sm:left-7 top-0 flex items-center justify-center w-12 h-12 rounded-full ring-4 ring-primary"
        style={{ background: experience.iconBg }}
        aria-hidden="true"
      >
        <Image
          src={experience.icon}
          alt=""
          width={28}
          height={28}
          className="object-contain"
        />
      </span>
      <div
        className="glass rounded-xl p-6 ml-2"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[15px] font-semibold mt-1">
          {experience.companyName} · {experience.date}
        </p>
        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point) => (
            <li
              key={point.slice(0, 40)}
              className="text-white-100 text-[14px] tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="work">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Lo que he hecho</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experiencia.
        </h2>
      </motion.div>

      <div className="mt-20 relative">
        <span
          className="absolute left-9 sm:left-13 top-0 bottom-0 w-1 bg-tertiary rounded"
          aria-hidden="true"
        />
        <ol className="space-y-0">
          {experiences.map((experience, index) => (
            <TimelineCard
              key={`${experience.companyName}-${experience.date}`}
              experience={experience}
              index={index}
            />
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
