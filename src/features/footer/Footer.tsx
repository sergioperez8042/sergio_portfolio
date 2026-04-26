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
    <footer className="bg-tertiary text-white py-6 px-6 sm:px-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-2xl font-bold">Sergio Carlos Rodríguez Pérez</p>
        <ul className="flex space-x-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-white inline-block"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-center text-gray-400">
        &copy; {year} Sergio Carlos Rodríguez Pérez. Todos los derechos reservados.
      </p>
    </footer>
  );
}
