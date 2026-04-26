"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { technologies } from "@/data/tech";
import type { Tech } from "@/data/types";

function TiltBubble({ tech }: { tech: Tech }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring para suavizar
  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  // Mapeo a rotación: cursor a la izquierda → tilt a la izquierda, etc.
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [28, -28]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-28, 28]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformPerspective: 700,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: "var(--shadow-card)",
      }}
      whileHover={{ scale: 1.12, z: 60 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="glass relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-4 cursor-pointer"
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
        style={{ transform: "translateZ(40px)" }}
      />

      {/* Highlight superior cromo (efecto cristal) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </motion.div>
  );
}

export function Tech() {
  return (
    <SectionWrapper>
      <div
        className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8"
        style={{ perspective: "1000px" }}
      >
        {technologies.map((tech) => (
          <TiltBubble key={tech.name} tech={tech} />
        ))}
      </div>
    </SectionWrapper>
  );
}
