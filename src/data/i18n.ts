/**
 * Contenido bilingue del portfolio (ES + EN).
 * Migrado desde el design system Portfolio v2.
 *
 * Estructura: content[lang] -> sections.
 * Algunos textos contienen <b>...</b> para enfatizar; renderizar con
 * dangerouslySetInnerHTML solo en strings controladas (todas aqui).
 */

export type Lang = "es" | "en";

export type ExpItem = {
  role: string;
  company: string;
  date: string;
  now: boolean;
  icon: string;
  iconBg: string;
  points: string[];
  chips: string[];
};

export type TechItem = { name: string; slug: string; hex?: string };

export type CaseStep = {
  step: string;
  title: string;
  paras: string[];
  list?: string[];
};

export type Post = {
  feat: boolean;
  cat: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
};

export const LANGS: Lang[] = ["es", "en"];

export const content = {
  es: {
    nav: {
      about: "Sobre mí",
      work: "Experiencia",
      projects: "Proyectos",
      writing: "Notas",
      cta: "Hablemos",
    },
    hero: {
      status: "Disponible para nuevos proyectos · Q2 2026",
      line1: "Construyo producto",
      typeWords: [
        "en producción.",
        "que escala.",
        "que convierte.",
        "con precisión.",
      ],
      sub: "Soy <b>Sergio Rodríguez</b>. Frontend Developer & Project Manager. Convierto ideas en interfaces rápidas, accesibles y rentables — desde el prototipo hasta la release.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
      meta: [
        { num: "5", plus: "+", lbl: "años en producción" },
        { num: "30", plus: "+", lbl: "proyectos entregados" },
        { num: "3", plus: "", lbl: "regiones (ES · EAU · LATAM)" },
        { num: "98", plus: "", lbl: "Lighthouse promedio" },
      ],
    },
    marquee: [
      "Frontend Architecture",
      "React · Next.js · TypeScript",
      "React Native · Flutter",
      "Odoo · Python",
      "MCP Integrations",
      "Design Systems",
      "Vercel ship-fast",
      "Three.js · WebGL",
    ],
    about: {
      eyebrow: "Sobre mí",
      title: "De requisitos de cliente a código que rinde.",
      photoTag: "2026",
      paragraphs: [
        "Trabajo en la intersección entre <b>código y negocio</b>. Lidero el roadmap del equipo en <b>ITConsulting Global</b> y entrego features que rinden en producción — no demos bonitas, código que aguanta el tráfico real.",
        "En los últimos 5 años he desplegado plataformas e-commerce, dashboards operativos, integraciones MCP/Odoo, apps móviles y portales corporativos para sectores como <b>hotelería, fintech, retail y consultoría enterprise</b> en España, EAU y LATAM.",
        "Si tienes una idea que necesita pasar de prototipo a producto en producción — o un sistema legacy que pide refactor sin romper el negocio — eso es exactamente en lo que trabajo cada día.",
      ],
      meta: [
        { lbl: "Base", val: "Burgos, España" },
        { lbl: "Idiomas", val: "Español · English" },
        { lbl: "Modalidad", val: "Remoto / Híbrido" },
        { lbl: "Disponible", val: "Q2 2026" },
      ],
    },
    exp: {
      eyebrow: "Experiencia",
      title: "Lo que he construido.",
      lede: "Cinco años entregando producto. Las cifras y el contexto detrás de cada rol — no solo el título.",
      now: "AHORA",
      items: [
        {
          role: "Frontend Developer & Project Manager",
          company: "ITConsulting Global",
          date: "2024 — Presente",
          now: true,
          icon: "/company/itc.png",
          iconBg: "#ffffff",
          points: [
            "Lidero el equipo frontend en proyectos enterprise: e-commerce, dashboards operativos y portales corporativos.",
            "Migré la base de Vite/JS a Next.js 16 + RSC + Tailwind v4 — TTI de 4.2s a 1.3s en el portal cliente principal.",
            "Implementé integraciones MCP/Odoo conectando ERP con frontends React Native; reducción de 40% en tickets de soporte.",
          ],
          chips: ["Next.js", "TypeScript", "Odoo", "MCP", "Vercel"],
        },
        {
          role: "Next.js Developer",
          company: "Octupus",
          date: "2023 — 2024",
          now: false,
          icon: "/company/octupus.png",
          iconBg: "#14151a",
          points: [
            "Plataformas e-commerce y sistemas de gestión con Next.js (frontend) + Odoo (backend), foco UX/UI y rendimiento.",
            "Configuración de módulos custom en Odoo, automatización de procesos y comunicación vía APIs REST.",
            "Catálogos, carritos, pasarelas seguras y SEO técnico para mejorar conversión.",
          ],
          chips: ["Next.js", "Odoo", "REST APIs", "SEO"],
        },
        {
          role: "React Developer",
          company: "MOME",
          date: "2021 — 2023",
          now: false,
          icon: "/company/mome.png",
          iconBg: "#14151a",
          points: [
            "Sistema de comunicación para plataforma de venta publicitaria — interacción y eficiencia en gestión de anuncios.",
            "Funcionalidades clave con Next.js, React, TypeScript y Styled Components.",
            "Backend e integraciones REST con Node.js para servicios externos.",
          ],
          chips: ["React", "Next.js", "TypeScript", "Node.js"],
        },
        {
          role: "React Native & React Developer",
          company: "Soaint",
          date: "2022 — 2023",
          now: false,
          icon: "/company/soaint.png",
          iconBg: "#14151a",
          points: [
            "Refactorización integral de la app móvil: navegación, accesibilidad y rediseño de componentes clave.",
            "Nuevas funcionalidades que aumentaron la utilidad y retención de la app.",
          ],
          chips: ["React Native", "React", "Refactor", "A11y"],
        },
      ] as ExpItem[],
    },
    tech: {
      eyebrow: "Stack",
      title: "Las herramientas con las que construyo cada día.",
      lede: "Agrupado por capa, no logos sueltos. Lo que uso en producción — no lo que tuiteo.",
      cats: [
        {
          title: "Frontend",
          items: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs", hex: "f0f0f5" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Framer Motion", slug: "framer" },
            { name: "Three.js", slug: "threedotjs" },
          ],
        },
        {
          title: "Mobile",
          items: [
            { name: "React Native", slug: "react" },
            { name: "Flutter", slug: "flutter" },
          ],
        },
        {
          title: "Backend & Data",
          items: [
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Python", slug: "python" },
            { name: "Odoo 18", slug: "odoo" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "Supabase", slug: "supabase" },
          ],
        },
        {
          title: "Infra & Tooling",
          items: [
            { name: "Vercel", slug: "vercel", hex: "f0f0f5" },
            { name: "Docker", slug: "docker" },
            { name: "Git", slug: "git" },
            { name: "Figma", slug: "figma" },
            { name: "GitHub Actions", slug: "githubactions" },
          ],
        },
      ] as { title: string; items: TechItem[] }[],
    },
    works: {
      eyebrow: "Trabajos seleccionados",
      title: "Proyectos seleccionados.",
      lede: "Una muestra de lo que he entregado recientemente — desde plataformas e-commerce hasta integraciones MCP/Odoo.",
      featured: {
        tag: "Caso destacado",
        title: "Sophia Cosmetic — el e-commerce que duplicó la conversión.",
        lede: "Repensar el flujo de checkout, modernizar el stack, reescribir el catálogo. Resultado: tienda más rápida, x2 conversión, equipo de marketing autónomo.",
        results: [
          { num: "+118", unit: "%", lbl: "conversión checkout" },
          { num: "1.2", unit: "s", lbl: "LCP P75" },
          { num: "98", unit: "/100", lbl: "Lighthouse" },
          { num: "−62", unit: "%", lbl: "tickets soporte" },
        ],
        stack: ["Next.js 16", "Sanity CMS", "Stripe", "Vercel", "Tailwind v4"],
        ctaCase: "Ver caso completo",
        ctaLive: "Demo en vivo",
        liveUrl: "https://sophia-cosmetic.vercel.app",
        sourceUrl: "https://github.com/sergioperez8042/sophia_ecommerce",
      },
      others: [
        {
          name: "Mi Viaje",
          desc: "Plataforma de planificación de viajes. Itinerarios, recomendaciones por destino y experiencia móvil-first.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          image: "/projects/mi-viaje.png",
          liveUrl: "https://mi-viaje-web.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/mi_viaje_web",
        },
        {
          name: "Drizoro",
          desc: "Sitio corporativo construido con Next.js + Tailwind. Server Components, animaciones sutiles y rendimiento medido en Core Web Vitals.",
          tags: ["Next.js", "Tailwind", "Vercel"],
          image: "/projects/drizoro.png",
          liveUrl: "https://drizoro.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/drizoro",
        },
        {
          name: "Colibrí Spa",
          desc: "Sitio TypeScript para un spa: reservas, galería y experiencia móvil cuidada con edge optimizations.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          image: "/projects/colibri.png",
          liveUrl: "https://colibri-spa.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/colibri_spa",
        },
      ],
    },
    caseStudy: {
      eyebrow: "Caso de estudio · 01",
      title:
        "Sophia Cosmetic: de un legacy lento a un e-commerce que convierte.",
      lede: "Una tienda de cosmética en crecimiento atrapada en Magento legacy con LCP de 6s y un checkout que rompía en móvil. Diez semanas para reconstruirlo desde cero.",
      // TODO: confirmar metricas reales con el cliente antes de publicar
      results: [
        { num: "+118%", lbl: "conversión checkout" },
        { num: "1.2s", lbl: "LCP P75 (era 6s)" },
        { num: "98", lbl: "Lighthouse perf." },
        { num: "−62%", lbl: "tickets soporte" },
      ],
      steps: [
        {
          step: "01",
          title: "Problema",
          paras: [
            "El equipo de Sophia perdía ~30% de carritos móviles. La tienda corría en Magento 2 con plugins encadenados; cada deploy era trabajo de fin de semana y cualquier cambio en checkout suponía 2 días de QA.",
            "Marketing no podía editar contenido sin tickets de dev. El catálogo crecía 40% por mes y el CMS no podía con ello.",
          ],
        },
        {
          step: "02",
          title: "Diagnóstico",
          paras: ["Tres cuellos de botella críticos:"],
          list: [
            "Bundle de 1.4 MB sin code-splitting; LCP P75 de 6 segundos.",
            "Checkout de 5 pasos con un drop-off del 38% en envío.",
            "Sin CMS visual: cada banner pasaba por dev. Ciclo de campaña: 2 semanas.",
          ],
        },
        {
          step: "03",
          title: "Decisión arquitectónica",
          paras: [
            "Reconstrucción completa en Next.js 16 (App Router + RSC), Sanity como CMS headless y Stripe como capa de pagos. Migración por fases: catálogo → producto → checkout → cuenta — cero downtime.",
            "Tipos generados desde Sanity vía typegen. Cero errores en runtime durante la migración.",
          ],
        },
        {
          step: "04",
          title: "Implementación",
          paras: [
            "Server Components para catálogo (caché ISR de 60s) y Client Components solo donde había interacción real (filtros, carrito, checkout). Imágenes con next/image + Vercel Image Optimization.",
            "Checkout reducido de 5 a 2 pasos con dirección autocompletada y pago express (Apple/Google Pay). Tests de carga con k6 a 500 RPS.",
          ],
        },
        {
          step: "05",
          title: "Resultados",
          paras: [
            "10 semanas después del switch — manteniendo Magento como hot-spare durante 4 — los números se movieron solos: x2.18 conversión, LCP de 6s a 1.2s P75, tickets de soporte −62% (sobre todo porque el checkout ya no rompe en móvil).",
            "Marketing ahora publica banners y landings sin tocar código. Tiempo de campaña: de 2 semanas a 2 días.",
          ],
        },
      ] as CaseStep[],
    },
    blog: {
      eyebrow: "Notas",
      title: "Notas desde producción.",
      lede: "Lo que aprendo entregando, condensado en notas cortas. Sin relleno — solo lo que aplico el lunes que viene.",
      ctaAll: "Todas las notas",
      // TODO: posts placeholder — escribir articulos reales antes de publicar
      posts: [
        {
          feat: true,
          cat: "Arquitectura",
          date: "Mar 2026",
          read: "8 min",
          title:
            "Cuándo usar Server Components (y cuándo no).",
          excerpt:
            "Una guía pragmática tras 14 proyectos en App Router. La regla simple que uso para decidir qué capa renderiza qué — sin dogmas. Incluye el caso real del checkout de Sophia donde la decisión fue contraintuitiva.",
        },
        {
          feat: false,
          cat: "Performance",
          date: "Feb 2026",
          read: "5 min",
          title:
            "LCP de 6s a 1.2s sin tocar el backend.",
          excerpt:
            "Cuatro cambios concretos que movieron Lighthouse de 41 a 98 en una tienda real.",
        },
        {
          feat: false,
          cat: "Integraciones",
          date: "Ene 2026",
          read: "12 min",
          title: "Conectar Odoo a un agente IA por MCP.",
          excerpt:
            "Diseño del bridge, validación de schema, y por qué el audit log importa.",
        },
        {
          feat: false,
          cat: "DX",
          date: "Dic 2025",
          read: "6 min",
          title: "TypeScript estricto en equipos de 3 a 30.",
          excerpt:
            "Las reglas que hacen el strict mode soportable cuando entran devs nuevos.",
        },
        {
          feat: false,
          cat: "Diseño",
          date: "Nov 2025",
          read: "7 min",
          title:
            "Design systems que el dev del jueves quiere usar.",
          excerpt:
            "Tokens, componentes, y la diferencia entre librería y sistema.",
        },
      ] as Post[],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de lo que quieres construir.",
      lede: "Cuéntame en qué estás trabajando: una idea, un legacy que pide refactor, un equipo que necesita arquitectura. Respondo en menos de 24h laborables.",
      info: [
        { icon: "mail", lbl: "Email", val: "8042sergi@gmail.com" },
        {
          icon: "pin",
          lbl: "Ubicación",
          val: "Burgos · Remoto worldwide",
        },
        { icon: "clock", lbl: "Disponibilidad", val: "Q2 2026 — abierto" },
      ],
      intents: [
        "Producto nuevo",
        "Refactor / migración",
        "Equipo / fractional",
        "Solo charlar",
      ],
      form: {
        intent: "¿Qué necesitas?",
        name: "Tu nombre",
        nameP: "¿Cómo te llamas?",
        email: "Tu email",
        emailP: "¿Cuál es tu email?",
        message: "Cuéntame",
        messageP: "Contexto, plazos, presupuesto si lo tienes…",
        submit: "Enviar mensaje",
        sending: "Enviando…",
      },
      socials: { linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: {
      tagline:
        "Frontend Developer & Project Manager. Construyendo desde Burgos para clientes en ES · EAU · LATAM.",
      cols: [
        {
          title: "Navegación",
          links: [
            { label: "Sobre mí", href: "#about" },
            { label: "Experiencia", href: "#work" },
            { label: "Proyectos", href: "#projects" },
            { label: "Notas", href: "#writing" },
            { label: "Contacto", href: "#contact" },
          ],
        },
        {
          title: "Recursos",
          links: [
            { label: "GitHub", href: "https://github.com/sergioperez8042" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
            },
            { label: "Email", href: "mailto:8042sergi@gmail.com" },
          ],
        },
        {
          title: "Casos",
          links: [
            { label: "Sophia Cosmetic", href: "https://sophia-cosmetic.vercel.app" },
            { label: "Drizoro", href: "https://drizoro.vercel.app" },
            { label: "Colibrí Spa", href: "https://colibri-spa.vercel.app" },
            { label: "Mi Viaje", href: "https://mi-viaje-web.vercel.app" },
          ],
        },
      ],
      copyright:
        "© 2026 Sergio Carlos Rodríguez Pérez · Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      about: "About",
      work: "Experience",
      projects: "Work",
      writing: "Notes",
      cta: "Let's talk",
    },
    hero: {
      status: "Available for new work · Q2 2026",
      line1: "I build product",
      typeWords: [
        "in production.",
        "that scales.",
        "that converts.",
        "with precision.",
      ],
      sub: "I'm <b>Sergio Rodríguez</b>. Frontend Developer & Project Manager. I turn ideas into fast, accessible, profitable interfaces — from prototype to release.",
      ctaPrimary: "See work",
      ctaSecondary: "Download CV",
      meta: [
        { num: "5", plus: "+", lbl: "years in production" },
        { num: "30", plus: "+", lbl: "projects shipped" },
        { num: "3", plus: "", lbl: "regions (ES · UAE · LATAM)" },
        { num: "98", plus: "", lbl: "average Lighthouse" },
      ],
    },
    marquee: [
      "Frontend Architecture",
      "React · Next.js · TypeScript",
      "React Native · Flutter",
      "Odoo · Python",
      "MCP Integrations",
      "Design Systems",
      "Vercel ship-fast",
      "Three.js · WebGL",
    ],
    about: {
      eyebrow: "About",
      title: "From client requirements to code that performs.",
      photoTag: "2026",
      paragraphs: [
        "I work at the intersection of <b>code and business</b>. I lead the team's roadmap at <b>ITConsulting Global</b> and ship features that perform in production — not pretty demos, code that holds under real traffic.",
        "Over the last 5 years I've shipped e-commerce platforms, ops dashboards, MCP/Odoo integrations, mobile apps and corporate portals across <b>hospitality, fintech, retail and enterprise consulting</b> in Spain, the UAE and LATAM.",
        "If you have an idea that needs to move from prototype to production — or a legacy system asking for a refactor without breaking the business — that's exactly what I do every day.",
      ],
      meta: [
        { lbl: "Base", val: "Burgos, Spain" },
        { lbl: "Languages", val: "Spanish · English" },
        { lbl: "Setup", val: "Remote / Hybrid" },
        { lbl: "Available", val: "Q2 2026" },
      ],
    },
    exp: {
      eyebrow: "Experience",
      title: "What I've shipped.",
      lede: "Five years shipping product. The numbers and context behind each role — not just the title.",
      now: "NOW",
      items: [
        {
          role: "Frontend Developer & Project Manager",
          company: "ITConsulting Global",
          date: "2024 — Present",
          now: true,
          icon: "/company/itc.png",
          iconBg: "#ffffff",
          points: [
            "Lead the frontend team across enterprise projects: e-commerce, ops dashboards and corporate portals.",
            "Migrated the codebase from Vite/JS to Next.js 16 + RSC + Tailwind v4 — TTI from 4.2s to 1.3s on the main client portal.",
            "Shipped MCP/Odoo integrations connecting ERP to React Native frontends; 40% drop in support tickets.",
          ],
          chips: ["Next.js", "TypeScript", "Odoo", "MCP", "Vercel"],
        },
        {
          role: "Next.js Developer",
          company: "Octupus",
          date: "2023 — 2024",
          now: false,
          icon: "/company/octupus.png",
          iconBg: "#14151a",
          points: [
            "Designed and built e-commerce platforms and management systems with Next.js (frontend) and Odoo (backend).",
            "Custom Odoo modules, automation of critical processes and REST API integrations.",
            "Catalogs, carts, secure checkout and technical SEO to lift conversion.",
          ],
          chips: ["Next.js", "Odoo", "REST APIs", "SEO"],
        },
        {
          role: "React Developer",
          company: "MOME",
          date: "2021 — 2023",
          now: false,
          icon: "/company/mome.png",
          iconBg: "#14151a",
          points: [
            "Communication system for an ad-sales platform — improved interaction and ad-management efficiency.",
            "Key features built with Next.js, React, TypeScript and Styled Components.",
            "Backend and REST integrations with Node.js for external services.",
          ],
          chips: ["React", "Next.js", "TypeScript", "Node.js"],
        },
        {
          role: "React Native & React Developer",
          company: "Soaint",
          date: "2022 — 2023",
          now: false,
          icon: "/company/soaint.png",
          iconBg: "#14151a",
          points: [
            "Full refactor of the mobile app: navigation, accessibility and redesign of key components.",
            "Shipped new features that increased usefulness and retention.",
          ],
          chips: ["React Native", "React", "Refactor", "A11y"],
        },
      ] as ExpItem[],
    },
    tech: {
      eyebrow: "Stack",
      title: "Tools I build with every day.",
      lede: "Grouped by layer, not loose logos. What I use in production — not what I tweet about.",
      cats: [
        {
          title: "Frontend",
          items: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs", hex: "f0f0f5" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Framer Motion", slug: "framer" },
            { name: "Three.js", slug: "threedotjs" },
          ],
        },
        {
          title: "Mobile",
          items: [
            { name: "React Native", slug: "react" },
            { name: "Flutter", slug: "flutter" },
          ],
        },
        {
          title: "Backend & Data",
          items: [
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Python", slug: "python" },
            { name: "Odoo 18", slug: "odoo" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "Supabase", slug: "supabase" },
          ],
        },
        {
          title: "Infra & Tooling",
          items: [
            { name: "Vercel", slug: "vercel", hex: "f0f0f5" },
            { name: "Docker", slug: "docker" },
            { name: "Git", slug: "git" },
            { name: "Figma", slug: "figma" },
            { name: "GitHub Actions", slug: "githubactions" },
          ],
        },
      ] as { title: string; items: TechItem[] }[],
    },
    works: {
      eyebrow: "Selected work",
      title: "Selected projects.",
      lede: "A taste of what I've shipped recently — from e-commerce platforms to MCP / Odoo integrations.",
      featured: {
        tag: "Featured case",
        title: "Sophia Cosmetic — the e-commerce that doubled conversion.",
        lede: "Rethink the checkout flow, modernise the stack, rewrite the catalog. Outcome: a faster store, x2 conversion, an autonomous marketing team.",
        results: [
          { num: "+118", unit: "%", lbl: "checkout conversion" },
          { num: "1.2", unit: "s", lbl: "LCP P75" },
          { num: "98", unit: "/100", lbl: "Lighthouse" },
          { num: "−62", unit: "%", lbl: "support tickets" },
        ],
        stack: ["Next.js 16", "Sanity CMS", "Stripe", "Vercel", "Tailwind v4"],
        ctaCase: "Read full case",
        ctaLive: "Live demo",
        liveUrl: "https://sophia-cosmetic.vercel.app",
        sourceUrl: "https://github.com/sergioperez8042/sophia_ecommerce",
      },
      others: [
        {
          name: "Mi Viaje",
          desc: "Travel planning platform with itineraries, destination recommendations and a mobile-first experience.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          image: "/projects/mi-viaje.png",
          liveUrl: "https://mi-viaje-web.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/mi_viaje_web",
        },
        {
          name: "Drizoro",
          desc: "Corporate site built with Next.js + Tailwind. Server Components, subtle animations and Core Web Vitals optimisation.",
          tags: ["Next.js", "Tailwind", "Vercel"],
          image: "/projects/drizoro.png",
          liveUrl: "https://drizoro.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/drizoro",
        },
        {
          name: "Colibrí Spa",
          desc: "TypeScript site for a spa: bookings, gallery and a polished mobile experience with edge optimisations.",
          tags: ["Next.js", "TypeScript", "Vercel"],
          image: "/projects/colibri.png",
          liveUrl: "https://colibri-spa.vercel.app",
          sourceUrl: "https://github.com/sergioperez8042/colibri_spa",
        },
      ],
    },
    caseStudy: {
      eyebrow: "Case study · 01",
      title:
        "Sophia Cosmetic: from slow legacy to an e-commerce that converts.",
      lede: "A growing cosmetics shop stuck on a legacy Magento with 6s LCP and a checkout that broke on mobile. Ten weeks to rebuild it from scratch.",
      // TODO: confirm real metrics with client before publishing
      results: [
        { num: "+118%", lbl: "checkout conversion" },
        { num: "1.2s", lbl: "LCP P75 (was 6s)" },
        { num: "98", lbl: "Lighthouse perf." },
        { num: "−62%", lbl: "support tickets" },
      ],
      steps: [
        {
          step: "01",
          title: "Problem",
          paras: [
            "Sophia's team was losing ~30% of mobile carts. The store ran on Magento 2 with chained plugins; every deploy was a weekend job and any checkout change meant 2 days of QA.",
            "Marketing couldn't edit content without dev tickets. The catalog grew 40% per month and the CMS couldn't keep up.",
          ],
        },
        {
          step: "02",
          title: "Diagnosis",
          paras: ["Three critical bottlenecks:"],
          list: [
            "1.4 MB bundle with no code-splitting; LCP P75 of 6 seconds.",
            "5-step checkout with a 38% drop-off at the shipping step.",
            "No visual CMS: every banner went through dev. Campaign cycle: 2 weeks.",
          ],
        },
        {
          step: "03",
          title: "Architectural call",
          paras: [
            "Full rebuild on Next.js 16 (App Router + RSC), Sanity as headless CMS and Stripe as the payment layer. Phased migration: catalog → product → checkout → account — zero downtime.",
            "Types generated from Sanity via typegen. Zero runtime errors in production during the migration.",
          ],
        },
        {
          step: "04",
          title: "Implementation",
          paras: [
            "Server Components for catalog (60s ISR cache) and Client Components only where there was real interaction (filters, cart, checkout). Images on next/image + Vercel Image Optimization.",
            "Checkout cut from 5 to 2 steps with autocompleted address and express pay (Apple/Google Pay). Load tests with k6 at 500 RPS.",
          ],
        },
        {
          step: "05",
          title: "Results",
          paras: [
            "10 weeks after the switch — keeping Magento as a hot-spare for 4 — the numbers moved on their own: x2.18 conversion, LCP from 6s to 1.2s P75, support tickets down 62% (mostly because checkout no longer breaks on mobile).",
            "Marketing now ships banners and landing pages without touching dev. Campaign time: from 2 weeks to 2 days.",
          ],
        },
      ] as CaseStep[],
    },
    blog: {
      eyebrow: "Notes",
      title: "Notes from production.",
      lede: "What I learn while shipping, condensed into short notes. No fluff — only what I'll apply next Monday.",
      ctaAll: "All notes",
      // TODO: placeholder posts — write real articles before publishing
      posts: [
        {
          feat: true,
          cat: "Architecture",
          date: "Mar 2026",
          read: "8 min",
          title: "When to use Server Components (and when not to).",
          excerpt:
            "A pragmatic guide after 14 projects on App Router. The simple rule I use to decide which layer renders what — no dogma. Includes the real case from Sophia's checkout where the call was counter-intuitive.",
        },
        {
          feat: false,
          cat: "Performance",
          date: "Feb 2026",
          read: "5 min",
          title: "LCP from 6s to 1.2s without touching the backend.",
          excerpt:
            "Four concrete changes that moved Lighthouse from 41 to 98 on a real shop.",
        },
        {
          feat: false,
          cat: "Integrations",
          date: "Jan 2026",
          read: "12 min",
          title: "Connecting Odoo to an AI agent over MCP.",
          excerpt:
            "Bridge design, schema validation, and why audit logs matter.",
        },
        {
          feat: false,
          cat: "DX",
          date: "Dec 2025",
          read: "6 min",
          title: "Strict TypeScript across teams of 3 to 30.",
          excerpt:
            "The rules that make strict mode bearable when new devs join.",
        },
        {
          feat: false,
          cat: "Design",
          date: "Nov 2025",
          read: "7 min",
          title:
            "Design systems Thursday's dev actually wants to use.",
          excerpt:
            "Tokens, components, and the difference between a library and a system.",
        },
      ] as Post[],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about what you want to build.",
      lede: "Tell me what you're working on: an idea, a legacy that needs refactoring, a team that needs architecture. I reply within 24 working hours.",
      info: [
        { icon: "mail", lbl: "Email", val: "8042sergi@gmail.com" },
        {
          icon: "pin",
          lbl: "Location",
          val: "Burgos · Remote worldwide",
        },
        { icon: "clock", lbl: "Availability", val: "Q2 2026 — open" },
      ],
      intents: [
        "New product",
        "Refactor / migration",
        "Team / fractional",
        "Just to chat",
      ],
      form: {
        intent: "What do you need?",
        name: "Your name",
        nameP: "What's your name?",
        email: "Your email",
        emailP: "What's your email?",
        message: "Tell me",
        messageP: "Context, timeline, rough budget if you have one…",
        submit: "Send message",
        sending: "Sending…",
      },
      socials: { linkedin: "LinkedIn", github: "GitHub" },
    },
    footer: {
      tagline:
        "Frontend Developer & Project Manager. Building from Burgos for clients across ES · UAE · LATAM.",
      cols: [
        {
          title: "Navigation",
          links: [
            { label: "About", href: "#about" },
            { label: "Experience", href: "#work" },
            { label: "Work", href: "#projects" },
            { label: "Notes", href: "#writing" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "GitHub", href: "https://github.com/sergioperez8042" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
            },
            { label: "Email", href: "mailto:8042sergi@gmail.com" },
          ],
        },
        {
          title: "Cases",
          links: [
            { label: "Sophia Cosmetic", href: "https://sophia-cosmetic.vercel.app" },
            { label: "Drizoro", href: "https://drizoro.vercel.app" },
            { label: "Colibrí Spa", href: "https://colibri-spa.vercel.app" },
            { label: "Mi Viaje", href: "https://mi-viaje-web.vercel.app" },
          ],
        },
      ],
      copyright:
        "© 2026 Sergio Carlos Rodríguez Pérez · All rights reserved",
    },
  },
} as const;

export type Content = (typeof content)[Lang];
