"use client";

import { useEffect, useRef } from "react";

type ParticlesBackgroundProps = {
  className?: string;
  /** Color de los puntos y enlaces */
  color?: string;
  /** Densidad: 1 partícula cada N px². Más bajo = más partículas */
  density?: number;
  /** Distancia máx (px) para dibujar enlace entre dos partículas */
  linkDistance?: number;
  /** Velocidad base (px / frame) */
  speed?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * Fondo de partículas conectadas tipo "moléculas" sobre un canvas nativo.
 * Reemplaza @tsparticles / cover-particles (~200KB) con ~80 líneas y 0 deps.
 */
export function ParticlesBackground({
  className = "",
  color = "#c5cad4",
  density = 14000,
  linkDistance = 130,
  speed = 0.25,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let mouseX = -9999;
    let mouseY = -9999;

    const seedParticles = () => {
      const count = Math.max(20, Math.floor((width * height) / density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      // Enlaces entre partículas
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (!a) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (!b) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDistance) {
            const alpha = 1 - d / linkDistance;
            ctx.strokeStyle = `${color}${Math.floor(alpha * 80)
              .toString(16)
              .padStart(2, "0")}`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Enlace al cursor
        const dxm = a.x - mouseX;
        const dym = a.y - mouseY;
        const dm = Math.hypot(dxm, dym);
        if (dm < linkDistance * 1.2) {
          const alpha = 1 - dm / (linkDistance * 1.2);
          ctx.strokeStyle = `${color}${Math.floor(alpha * 140)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [color, density, linkDistance, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
