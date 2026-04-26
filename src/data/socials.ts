import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export type Social = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/**
 * Fuente única de socials/contacto. Footer y Contact lo consumen
 * para evitar URLs duplicadas en distintos componentes.
 */
export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/sergioperez8042",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:8042sergi@gmail.com",
    icon: Mail,
  },
] as const satisfies readonly Social[];

export const isExternalHref = (href: string): boolean =>
  href.startsWith("http") || href.startsWith("mailto:");
