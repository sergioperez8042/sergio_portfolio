import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";

export function About() {
  return (
    <SectionWrapper id="about">
      <div>
        <p className={styles.sectionSubText}>Sobre mí</p>
        <h2 className={styles.sectionHeadText}>Quién soy.</h2>
      </div>

      <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10 items-start">
        {/* Foto con marco glass */}
        <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
          <div
            className="absolute -inset-4 rounded-[28px] bg-white/[0.04] blur-2xl"
            aria-hidden="true"
          />
          <div
            className="relative glass rounded-3xl p-2 overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Image
              src="/me.png"
              alt="Foto de Sergio Rodríguez"
              width={280}
              height={280}
              priority
              className="rounded-2xl w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[13px]">
            <div className="glass rounded-lg px-3 py-2">
              <div className="text-secondary text-[11px] uppercase tracking-wide">
                Base
              </div>
              <div className="text-white-100">Madrid, ES</div>
            </div>
            <div className="glass rounded-lg px-3 py-2">
              <div className="text-secondary text-[11px] uppercase tracking-wide">
                Modalidad
              </div>
              <div className="text-white-100">Remoto</div>
            </div>
          </div>
        </div>

        <div className="text-secondary text-[17px] leading-[30px] space-y-5">
          <p>
            Soy <span className="text-white-100 font-medium">Sergio Rodríguez</span>,
            Frontend Developer y Project Manager en{" "}
            <span className="text-white-100 font-medium">
              ITConsulting Global
            </span>
            . Trabajo en la intersección entre código y negocio: traduzco
            requisitos de cliente en arquitectura limpia, gestiono el roadmap
            del equipo y entrego features que rinden en producción.
          </p>
          <p>
            En los últimos 5 años he desplegado plataformas e-commerce,
            dashboards operativos, integraciones MCP/Odoo, apps móviles y
            portales corporativos para sectores como hotelería, fintech, retail
            y consultoría enterprise.{" "}
            <span className="text-white-100">
              Stack principal: TypeScript, React, Next.js, React Native,
              Flutter, Python/Odoo y Vercel.
            </span>
          </p>
          <p>
            Si tienes una idea que necesita pasar de prototipo a producto en
            producción — o un sistema legacy que pide refactor sin romper el
            negocio — eso es exactamente en lo que trabajo cada día.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
