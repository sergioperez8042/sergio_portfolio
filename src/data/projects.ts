import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Plataforma web que permite buscar, reservar y gestionar alquileres de coches de distintos proveedores, ofreciendo una solución cómoda y eficiente para necesidades de transporte.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/projects/carrent.png",
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Aplicación web para buscar ofertas de trabajo, ver rangos salariales estimados y localizar empleos disponibles según la ubicación del usuario.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "/projects/jobit.png",
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Plataforma integral de reservas de viajes que permite gestionar vuelos, hoteles y coches de alquiler, con recomendaciones curadas para destinos populares.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/projects/tripguide.png",
    sourceCodeLink: "https://github.com/",
  },
];
