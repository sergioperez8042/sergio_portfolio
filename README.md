# Sergio Portfolio

Portfolio personal de Sergio Carlos Rodríguez Pérez — Frontend Developer especializado en React, Next.js y React Native.

Construido con **Next.js 16 App Router**, **React 19**, **TypeScript estricto**, **Tailwind CSS v4**, **Three.js** (`@react-three/fiber` + `drei`) y **Framer Motion**.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack, RSC, SSG)
- **Lenguaje**: TypeScript con `strict` y `noUncheckedIndexedAccess`
- **Estilos**: Tailwind CSS 4 (theme via `@theme`)
- **3D**: `@react-three/fiber` 9 + `@react-three/drei` 10
- **Animación**: Framer Motion 11
- **Iconos**: lucide-react
- **Form contacto**: EmailJS + sonner (toast)
- **Hosting**: Vercel

## Requisitos

- Node.js **20+** (recomendado 22 LTS — fijado en `.nvmrc`)
- npm 10+

## Setup local

```bash
nvm use            # lee .nvmrc → Node 22
npm install
cp env.local.example .env.local   # rellena las variables
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> **Nota macOS**: si ves `Too many open files in system`, eleva el límite del proceso con `ulimit -n 65536` antes de lanzar `npm run dev`. El `launch.json` de Claude Code ya lo hace automáticamente.

## Variables de entorno

Plantilla en [`env.local.example`](./env.local.example). Copiar a `.env.local` (no se commitea).

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID (cliente) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID (cliente) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key (cliente, restringe dominio en el dashboard) |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio para metadata + OG (ej. `https://sergio-portfolio.vercel.app`) |

En Vercel: añadir las cuatro vía `vercel env add` o desde el dashboard (Production + Preview + Development).

## Estructura

```
src/
├── app/                       # App Router
│   ├── layout.tsx             # Metadata, fonts, JSON-LD, Toaster
│   ├── page.tsx               # Server Component que orquesta secciones
│   ├── globals.css            # Tailwind v4 + tokens del theme
│   ├── opengraph-image.tsx    # OG dinámica (next/og)
│   ├── robots.ts
│   └── sitemap.ts
├── features/                  # Una carpeta por sección
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── tech/
│   ├── works/
│   ├── contact/               # Contact.tsx + useContactForm.ts
│   └── footer/
├── components/
│   ├── nav/Navbar.tsx         # Client + a11y completo
│   ├── three/                 # Canvas R3F + Loader (todos lazy)
│   └── ui/SectionWrapper.tsx  # Componente (no HOC) con framer + id
├── data/                      # Tipos y datos (nav, services, tech, …)
└── lib/                       # motion, styles
```

## Scripts

```bash
npm run dev          # next dev (Turbopack)
npm run build        # build de producción
npm run start        # sirve build
npm run lint         # eslint
npm run type-check   # tsc --noEmit
```

## Decisiones arquitectónicas

- **Server Components por defecto.** Solo `'use client'` cuando hay state, effects o handlers (Hero, About, Tech, Experience, Works, Contact, Navbar). About + Works + Footer + page.tsx son Server Components → 0 JS al cliente para esas partes.
- **Canvas 3D lazy con `next/dynamic` + `ssr: false`.** `Computers`, `Earth`, `Stars`, `Ball` no entran en el bundle inicial ni se ejecutan en SSR (donde romperían por `window`).
- **Wrapper cliente para canvas en Server Components**: `StarsCanvasLazy` permite usar `dynamic({ ssr: false })` desde `app/page.tsx` (Server Component) sin que Next se queje.
- **Timeline custom con Tailwind** en lugar de `react-vertical-timeline-component` (librería antigua, problemática con React 19, ~150KB extra).
- **`next/image`** en todos los assets con `width/height` o `fill + sizes` → AVIF/WebP automático, sin CLS.
- **`next/font` con Poppins** preload + `display: swap`.
- **EmailJS con env vars**. La public key sigue siendo visible en cliente (limitación del modelo). Mitigación: restringir dominio en el dashboard de EmailJS.
- **Sonner para toasts** en lugar de `alert()`.

## Deploy en Vercel

```bash
npm i -g vercel
vercel link
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
vercel env add NEXT_PUBLIC_SITE_URL
vercel deploy --prod
```

## Branch legacy

El código original con Vite + JavaScript está preservado en la branch [`legacy-vite`](https://github.com/sergioperez8042/sergio_portfolio/tree/legacy-vite).

## Licencia

MIT © Sergio Carlos Rodríguez Pérez
