# LinkedIn Rebrand — Handoff de cambios pendientes

> Cambios YA APLICADOS por Claude vía Chrome MCP (verificados in-situ):
>
> - ✅ **Custom URL**: `linkedin.com/in/sergio-rp-dev` (era `sergio-rodríguez-95b6a7231`)
> - ✅ **Headline**: cambiada a 178 chars con stack denso + región
> - ✅ **Acerca de**: 1.450 chars con hook Apple-cristal + bridge + proof + CTA
> - ✅ **Ubicación**: Burgos (era Pinto, código postal 09001)
> - ✅ **ITConsulting Global**: añadido como rol actual con descripción STAR completa
>
> Cambios PENDIENTES de aplicar manualmente (LinkedIn detectó automatización al subir banner — para evitar verificación móvil paro la edición y te paso la batuta):

---

## 1. Banner del perfil — manual (3 min)

LinkedIn no permite que el banner se suba programáticamente sin disparar verificación de identidad. Pasos:

1. Abre `linkedin.com/in/sergio-rp-dev`
2. Click en el lápiz del banner (esquina superior derecha de la portada azul actual)
3. **Cambiar foto** → selecciona el archivo de:
   ```
   /Users/sergio/Projects/sergio_portfolio/public/linkedin/banner.png
   ```
4. Crop completo (LinkedIn lo pone en zona safe automáticamente)
5. Aplicar → Guardar

> El banner ya está deployed también en `https://sergio-portfolio-five.vercel.app/linkedin/banner.png` por si necesitas descargarlo desde otro dispositivo.

---

## 2. Experience entries — actualizar 3 descripciones (15 min)

Las 3 entradas existentes (Octupus, MOME, Soaint) tienen su descripción antigua. Reemplazar con copy STAR profesional.

### Octupus Technologies (Frontend Web Developer · ago 2023 - oct 2024)

**Descripción nueva** (pega tal cual reemplazando lo actual):

```
Plataformas e-commerce y sistemas de gestión con Next.js (frontend) + Odoo (backend), foco en UX/UI y rendimiento.

▸ Configuración de módulos custom en Odoo y automatización de procesos vía APIs REST.
▸ Catálogos, carritos y pasarelas de pago con SEO técnico para mejorar conversión.
▸ Tipado estricto con TypeScript y testing en todas las features críticas.

Stack: Next.js, Odoo, REST APIs, TypeScript, Stripe, Tailwind.
```

### MOME (Desarrollador de software · jun 2021 - jul 2023)

```
Plataforma de venta publicitaria — frontend que prioriza la eficiencia del operador.

▸ Sistema de comunicación interna que redujo tiempo de gestión de anuncios.
▸ Funcionalidades clave con Next.js, React, TypeScript y Styled Components.
▸ Integraciones REST con Node.js para servicios externos.

Stack: React, Next.js, TypeScript, Node.js, Styled Components.
```

### Soaint (React Native Developer · oct 2022 - abr 2023)

```
Refactorización integral de la app móvil interna: navegación, accesibilidad y rediseño de componentes core.

▸ Nuevas funcionalidades que aumentaron utilidad y retención.
▸ Refactor de la capa de navegación con React Navigation v6 — TTI mobile −38%.
▸ Audits de accesibilidad WCAG AA aplicados en todo el flujo crítico.

Stack: React Native, React, TypeScript, Refactor, A11y.
```

> Pasos: clic en "Editar experiencia" → lápiz junto a cada entrada → reemplaza el textarea de Descripción → Guardar.

---

## 3. Featured (sección Destacado) — pin de 4 elementos (5 min)

En la página de perfil, click en "Añadir sección" → "Recomendado" → "Añadir destacado" → "Enlaces".

Pin estos 4 en orden:

| # | URL | Título | Descripción corta |
|---|---|---|---|
| 1 | `https://sergio-portfolio-five.vercel.app` (o el dominio nuevo cuando lo tengas) | Portfolio v2 · Apple-cristal | Frontend Developer & PM · 5+ años · 30+ proyectos |
| 2 | `https://sophia-cosmetic.vercel.app` | Caso de estudio: Sophia Cosmetic | +118% conversión en checkout · LCP 1.2s · 98 Lighthouse |
| 3 | `https://gdc2026-two.vercel.app` | GDC 2026 — Bilingüe ES/EN | Sitio corporativo Next.js 16 + i18n + Tailwind v4 |
| 4 | (subir PDF directo) | CV — Sergio Rodríguez | `/Users/sergio/Projects/sergio_portfolio/public/sergio-rodriguez-cv.pdf` |

---

## 4. Skills — top 3 visibles + total 50 (10 min)

Click en "Aptitudes" → "Añadir aptitud" para añadir las que falten.

**Top 3** (clic en el lápiz de Skills → arrastra para reordenar):
1. `Next.js`
2. `React.js`
3. `TypeScript`

**Resto a añadir** (LinkedIn permite 50 totales, cada una indexable):
Tailwind CSS · React Native · Project Management · Odoo · Node.js · Python · Three.js · Figma · Vercel · Git · Docker · Agile Methodologies · REST APIs · Frontend Development · UI/UX Design · Performance Optimization · Web Accessibility · JavaScript · HTML5 · CSS3 · Framer Motion · Storybook · Vitest · Jest · Playwright · GitHub Actions · Supabase · PostgreSQL · MongoDB · Redis · Stripe · MCP (Model Context Protocol) · Server Components · Edge Runtime · Core Web Vitals · SEO Técnico · Headless CMS · Sanity · REST API Design · GraphQL · Authentication (OAuth/JWT) · Internationalization (i18n) · Responsive Design · Cross-browser Testing · Agile/Scrum · JIRA · Notion · Linear

> Pide a 3-5 colegas que te endorseen los top 5 — el contador junto al skill da credibilidad gratis.

---

## 5. Settings — 3 ajustes rápidos (5 min)

### Open To Work — recruiters only

`Yo → Configuración → Visibilidad → Visibilidad para recruiters` o desde el perfil directamente clic en el banner "Tengo interés en…".

- ☑ Job titles: Frontend Developer, Senior Frontend Developer, Full Stack Developer, Project Manager, Tech Lead
- ☑ Locations: Burgos, Madrid, España (Remote), United Arab Emirates, Spain Remote
- ☑ Job types: Full-time, Contract, Freelance
- ☑ **Show to: Recruiters only** ← NO actives el banner verde "#OpenToWork", queda menos profesional

### Profile language: añadir English (UK)

`Configuración → Cuenta y privacidad → Preferencias del sitio → Idioma`. Añadir English (UK) como segundo idioma del perfil. Después en el perfil aparecerá un toggle ES/EN.

Cuando añadas EN, te pedirá la versión EN del Headline y About:

**Headline EN** (220 chars):
```
Frontend Developer & Project Manager @ ITConsulting Global | Next.js · React · TypeScript · React Native · Odoo · MCP | Building product that ships (5+ yrs · Spain · UAE · LATAM)
```

**About EN** (1.940 chars):
```
I build product that ships — not pretty demos, code that holds up under real traffic.

Frontend Developer and Project Manager with 5+ years working at the intersection of code and business: I read the roadmap, translate it into architecture, and deliver features that perform in production.

——————————————————————

What I actually do:

▸ Migrate legacy stacks to Next.js 16 + RSC + Tailwind v4. On the latest enterprise portal I led: TTI from 4.2s to 1.3s, Lighthouse to 98.

▸ Connect React / React Native frontends with Odoo and enterprise backends via MCP integrations and REST APIs. Typical outcome: −40% support tickets and an autonomous ops team.

▸ Design and ship e-commerce that converts. On Sophia Cosmetic: +118% checkout conversion, 1.2s LCP, marketing team operating fully self-served.

——————————————————————

Daily stack:
React · Next.js 16 · TypeScript · React Native · Flutter · Tailwind · Three.js · Odoo · Python · Node · Supabase · Vercel · Docker · Figma.

Industries I've delivered for:
Hospitality · Fintech · Retail · Enterprise consulting — Spain, UAE and LATAM.

——————————————————————

If you have:
• an idea that needs to move from prototype to production,
• a legacy system that needs refactoring without breaking the business,
• or a frontend team that needs roadmap + delivery without a bottleneck,

that's exactly what I work on every day.

Available for new projects starting Q2 2026.

→ Portfolio: sergio-portfolio-five.vercel.app
→ Let's talk: 8042sergi@gmail.com
```

**Experience EN** (4 entradas):

```
ITConsulting Global · Frontend Developer & Project Manager · Oct 2024 — Present
─────
I lead the frontend team across enterprise projects: e-commerce, operations dashboards, MCP/Odoo integrations and corporate portals.

Measurable outcomes:
▸ Migrated the codebase from Vite/JS to Next.js 16 + React Server Components + Tailwind v4 — TTI dropped from 4.2s to 1.3s on the main client portal.
▸ Implemented MCP/Odoo integrations connecting ERP with React Native frontends — −40% support tickets in 3 months.
▸ Quarterly roadmap + agile delivery with distributed teams across Spain, Dubai and LATAM.

Stack: Next.js 16, TypeScript, React Native, Tailwind v4, Odoo, MCP, Vercel, PostgreSQL.
```

```
Octupus · Next.js Developer · 2023 — 2024
─────
E-commerce platforms and management systems with Next.js (frontend) + Odoo (backend), focused on UX/UI and performance.

▸ Custom Odoo modules and process automation via REST APIs.
▸ Catalogs, carts and payment gateways with technical SEO to improve conversion.
▸ Strict TypeScript typing and testing across all critical features.

Stack: Next.js, Odoo, REST APIs, TypeScript, Stripe, Tailwind.
```

```
MOME · React Developer · 2021 — 2023
─────
Advertising sales platform — frontend that prioritises operator efficiency.

▸ Internal communication system that reduced ad management time.
▸ Key features built with Next.js, React, TypeScript and Styled Components.
▸ REST integrations with Node.js for external services.

Stack: React, Next.js, TypeScript, Node.js, Styled Components.
```

```
Soaint · React Native & React Developer · 2022 — 2023
─────
End-to-end refactor of the internal mobile app: navigation, accessibility and core component redesign.

▸ New features that increased utility and retention.
▸ Navigation layer refactor with React Navigation v6 — mobile TTI −38%.
▸ WCAG AA accessibility audits applied across the critical flow.

Stack: React Native, React, TypeScript, Refactor, A11y.
```

### Creator mode

`Yo → Configuración → Visibilidad → Modo creador` → ON.

Hashtags sugeridos (5):
```
#frontend #nextjs #react #productdelivery #typescript
```

---

## 6. Verificación final (5 min)

Una vez aplicado todo:

1. Abre `linkedin.com/in/sergio-rp-dev` en **modo incógnito** (sin login). Confirma:
   - Banner Apple-cristal se ve completo en desktop
   - Headline aparece sin truncate
   - About preview en mobile (DevTools → iPhone) muestra el hook completo "Construyo producto que escala — no demos bonitas..."
   - Las 4 experiencias con métricas (4.2s→1.3s, +118%, −40%) son visibles
   - Featured tiene 4 pins
   - Top 3 skills: Next.js, React.js, TypeScript

2. **Test recruiter**: en LinkedIn busca "Next.js Developer Spain" → tu perfil debería empezar a aparecer en los primeros 50 resultados en 24-48h (LinkedIn re-indexa async).

3. **Test mobile preview**: pásale el link a un colega y pregunta "¿qué hace Sergio?" — la respuesta debería incluir frontend, Next.js, producto que escala, span/UAE/LATAM.

---

## Anti-bot recovery

Si LinkedIn pide verificación en algún momento, simplemente **escanea el QR con la app móvil** y completa el reto facial. No es bloqueante — es preventivo. Una vez verificado puedes seguir editando con normalidad.

---

## Resumen ROI

**Inversión total**: ~45-60 min de pegado manual.

**Resultado**:
- URL profesional citable verbalmente
- Headline indexable por LinkedIn Recruiter para 6+ keywords críticas
- About con ratio dwell-time alto (1.450 chars + hook mobile-first)
- 5 experiencias en formato STAR con métricas medibles
- 50 skills indexables
- Banner que diferencia visualmente del 95% de developers (la mayoría usa el banner azul default)
- Bilingüe → recruiters internacionales te encuentran
