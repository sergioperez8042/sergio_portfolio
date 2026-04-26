import type { Tech } from "./types";

const si = (name: string, hex = "f0f0f5") =>
  `https://cdn.simpleicons.org/${name}/${hex}`;

export const technologies: Tech[] = [
  { name: "TypeScript", icon: si("typescript", "c5cad4") },
  { name: "JavaScript", icon: si("javascript", "c5cad4") },
  { name: "Python", icon: si("python", "c5cad4") },
  { name: "React", icon: si("react", "c5cad4") },
  { name: "Next.js", icon: si("nextdotjs", "f0f0f5") },
  { name: "Flutter", icon: si("flutter", "c5cad4") },
  { name: "Tailwind CSS", icon: si("tailwindcss", "c5cad4") },
  { name: "Node.js", icon: si("nodedotjs", "c5cad4") },
  { name: "Three.js", icon: si("threedotjs", "c5cad4") },
  { name: "Odoo", icon: si("odoo", "c5cad4") },
  { name: "PostgreSQL", icon: si("postgresql", "c5cad4") },
  { name: "Supabase", icon: si("supabase", "c5cad4") },
  { name: "Vercel", icon: si("vercel", "f0f0f5") },
  { name: "Docker", icon: si("docker", "c5cad4") },
  { name: "Git", icon: si("git", "c5cad4") },
  { name: "Figma", icon: si("figma", "c5cad4") },
];
