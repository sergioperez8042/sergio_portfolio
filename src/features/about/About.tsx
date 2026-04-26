import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";

export function About() {
  return (
    <SectionWrapper id="about">
      <div>
        <p className={styles.sectionSubText}>Sobre mí</p>
        <h2 className={styles.sectionHeadText}>Quién soy.</h2>
      </div>

      <div className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-5">
        <p>
          Soy Sergio Rodríguez, Frontend Developer y Project Manager en{" "}
          <span className="text-white-100 font-medium">
            ITConsulting Global
          </span>
          . Trabajo en la intersección entre código y negocio: traduzco
          requisitos de cliente en arquitectura limpia, gestiono el roadmap del
          equipo y entrego features que rinden en producción.
        </p>
        <p>
          En los últimos 5 años he desplegado plataformas e-commerce,
          dashboards operativos, integraciones MCP/Odoo, apps móviles y
          portales corporativos para sectores como hotelería, fintech, retail y
          consultoría enterprise.{" "}
          <span className="text-white-100">
            Stack principal: TypeScript, React, Next.js, React Native, Flutter,
            Python/Odoo y Vercel.
          </span>
        </p>
        <p>
          Si tienes una idea que necesita pasar de prototipo a producto en
          producción — o un sistema legacy que pide refactor sin romper el
          negocio — eso es exactamente en lo que trabajo cada día.
        </p>
      </div>
    </SectionWrapper>
  );
}
