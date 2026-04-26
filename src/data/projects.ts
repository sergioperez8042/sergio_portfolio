import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Sophia Cosmetic",
    description:
      "E-commerce de cosmética con Next.js + TypeScript desplegado en Vercel. Catálogo dinámico, carrito persistente y checkout optimizado para conversión.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/sophia.png",
    sourceCodeLink: "https://github.com/sergioperez8042/sophia_ecommerce",
    liveUrl: "https://sophia-cosmetic.vercel.app",
  },
  {
    name: "Mi Viaje",
    description:
      "Plataforma de planificación de viajes con Next.js y TypeScript. Itinerarios, recomendaciones por destino y experiencia móvil first. Desplegada en Vercel.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/mi-viaje.png",
    sourceCodeLink: "https://github.com/sergioperez8042/mi_viaje_web",
    liveUrl: "https://mi-viaje-web.vercel.app",
  },
  {
    name: "Colibrí Spa",
    description:
      "Sitio TypeScript para un spa en producción: reservas, galería y experiencia móvil cuidada. Desplegado en Vercel con edge optimizations.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/colibri.png",
    sourceCodeLink: "https://github.com/sergioperez8042/colibri_spa",
    liveUrl: "https://colibri-spa.vercel.app",
  },
  {
    name: "GDC 2026",
    description:
      "Sitio corporativo con Next.js 16 y Tailwind v4 desplegado en Vercel. Server Components, metadata API completa y optimización de Core Web Vitals.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/gdc2026.png",
    sourceCodeLink: "https://github.com/sergioperez8042/gdc2026",
    liveUrl: "https://gdc2026-two.vercel.app",
  },
];
