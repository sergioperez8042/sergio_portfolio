"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { technologies } from "@/data/tech";

export function Tech() {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8">
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.1, rotate: 6 }}
            className="glass w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-4 cursor-pointer"
            style={{ boxShadow: "var(--shadow-card)" }}
            title={tech.name}
            aria-label={tech.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              loading="lazy"
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
