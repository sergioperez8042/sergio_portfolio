import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Sophia Cosmetic",
    description:
      "E-commerce de cosmética construido con Next.js + TypeScript, desplegado en Vercel. Catálogo dinámico, carrito persistente y checkout optimizado para conversión.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/carrent.png",
    sourceCodeLink: "https://github.com/sergioperez8042/sophia_ecommerce",
  },
  {
    name: "MCP Server para Odoo",
    description:
      "Servidor Model Context Protocol que conecta agentes IA con Odoo: gestión de registros, documentos y base de conocimiento. Permite a Claude / Cursor operar Odoo en tiempo real.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "mcp", color: "green-text-gradient" },
      { name: "odoo", color: "pink-text-gradient" },
    ],
    image: "/projects/jobit.png",
    sourceCodeLink: "https://github.com/sergioperez8042/mcp_odoo",
  },
  {
    name: "GDC 2026",
    description:
      "Web corporativa con Next.js 16 y Tailwind v4 desplegada en Vercel. Server Components, metadata API completa y optimización de Core Web Vitals.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: "/projects/tripguide.png",
    sourceCodeLink: "https://github.com/sergioperez8042/gdc2026",
  },
];
