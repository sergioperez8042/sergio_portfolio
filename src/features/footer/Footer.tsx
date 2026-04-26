import { Linkedin, Github } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/sergioperez8042",
    icon: Github,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="glass text-white-100 py-8 px-6 sm:px-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xl font-bold">Sergio Carlos Rodríguez Pérez</p>
        <ul className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass w-11 h-11 rounded-full flex items-center justify-center text-secondary hover:text-white-100 hover:bg-white/10 transition-colors"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-center text-secondary text-sm">
        &copy; {year} Sergio Carlos Rodríguez Pérez. Todos los derechos reservados.
      </p>
    </footer>
  );
}
