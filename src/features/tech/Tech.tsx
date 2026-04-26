"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeIn } from "@/lib/motion";
import { technologies } from "@/data/tech";

export function Tech() {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", index * 0.05, 0.5)}
            whileHover={{ scale: 1.1, rotate: 6 }}
            className="glass w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-4 cursor-pointer"
            style={{ boxShadow: "var(--shadow-card)" }}
            title={tech.name}
            aria-label={tech.name}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
