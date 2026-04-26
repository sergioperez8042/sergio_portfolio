import type { ReactNode } from "react";
import { styles } from "@/lib/styles";

type SectionWrapperProps = {
  id?: string;
  children: ReactNode;
};

/**
 * Wrapper estructural para cada sección del portfolio.
 * Sin animaciones de entrada para evitar contenido invisible
 * cuando el intersection observer falla.
 */
export function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 hash-anchor`}
    >
      {children}
    </section>
  );
}
