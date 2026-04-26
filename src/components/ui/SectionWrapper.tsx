"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer } from "@/lib/motion";
import { styles } from "@/lib/styles";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 hash-anchor`}
    >
      {children}
    </motion.section>
  );
}
