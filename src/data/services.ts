import type { Service } from "./types";

const si = (slug: string, color = "c5cad4") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const services: Service[] = [
  { title: "Frontend Web", icon: si("html5") },
  { title: "React / Next.js", icon: si("nextdotjs", "f0f0f5") },
  { title: "React Native", icon: si("react") },
  { title: "Flutter", icon: si("flutter") },
  { title: "Odoo Developer", icon: si("odoo") },
];
