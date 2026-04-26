import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { LangProvider } from "@/lib/i18n/LangProvider";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
  ],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sergio-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0d" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0d" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Sergio Rodríguez · Frontend Developer & Project Manager (React, Next.js, React Native)",
    template: "%s · Sergio Rodríguez",
  },
  description:
    "Frontend Developer & Project Manager con 5+ años entregando producto en producción. Especializado en React, Next.js, React Native, TypeScript, Three.js y Odoo. Burgos · Remoto worldwide.",
  applicationName: "Sergio Portfolio",
  category: "Technology",
  classification: "Personal Portfolio",
  keywords: [
    // Personal
    "Sergio Rodríguez",
    "Sergio Carlos Rodríguez Pérez",
    "Frontend Developer Burgos",
    "Project Manager Frontend",
    "Frontend Developer España",
    "ITConsulting Global",
    // Stack
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "WebGL",
    "Framer Motion",
    "Vercel",
    "Odoo Developer",
    "Python Developer",
    "MCP Integrations",
    // Services
    "Frontend Architecture",
    "Web Performance",
    "Core Web Vitals",
    "E-commerce Frontend",
    "Headless CMS",
    "App móvil React Native",
    "Refactor Next.js",
    "Auditoría frontend",
    "Diseño de sistema",
    // Locations
    "Burgos",
    "España",
    "EAU",
    "LATAM",
    "Remote",
  ],
  authors: [{ name: "Sergio Rodríguez", url: SITE_URL }],
  creator: "Sergio Rodríguez",
  publisher: "Sergio Rodríguez",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "Sergio Rodríguez · Portfolio",
    title:
      "Sergio Rodríguez · Frontend Developer & Project Manager",
    description:
      "Convierto ideas en producto que escala. 5+ años construyendo aplicaciones web y móviles con React, Next.js y React Native — desde el prototipo hasta producción en Vercel.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sergio Rodríguez · Frontend Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Rodríguez · Frontend Developer & Project Manager",
    description:
      "5+ años entregando producto en producción con React, Next.js, React Native y TypeScript.",
    images: ["/opengraph-image"],
    creator: "@sergioperez8042",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons auto-detected from src/app/icon.svg + apple-icon.svg
  verification: {
    // Add real tokens cuando configures Search Console / Bing
    // google: "verification-token",
    // other: { "msvalidate.01": "..." },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sergio Carlos Rodríguez Pérez",
  alternateName: "Sergio Rodríguez",
  url: SITE_URL,
  image: `${SITE_URL}/me.png`,
  jobTitle: "Frontend Developer & Project Manager",
  worksFor: {
    "@type": "Organization",
    name: "ITConsulting Global",
    url: "https://www.itc.services/",
  },
  description:
    "Frontend Developer & Project Manager con 5+ años entregando producto en producción. Stack: React, Next.js, React Native, TypeScript, Odoo y Vercel.",
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Three.js",
    "WebGL",
    "Tailwind CSS",
    "Vercel",
    "Odoo",
    "Python",
    "MCP",
    "Frontend Architecture",
    "Web Performance",
  ],
  knowsLanguage: ["es", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burgos",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
    "https://github.com/sergioperez8042",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sergio Rodríguez · Portfolio",
  url: SITE_URL,
  inLanguage: ["es-ES", "en-US"],
  publisher: { "@type": "Person", name: "Sergio Carlos Rodríguez Pérez" },
  potentialAction: {
    "@type": "ContactAction",
    target: `${SITE_URL}/#contact`,
  },
};

const professionalSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sergio Rodríguez — Frontend Engineering",
  provider: { "@type": "Person", name: "Sergio Carlos Rodríguez Pérez" },
  areaServed: ["ES", "AE", "LATAM", "Remote"],
  serviceType: [
    "Frontend Development",
    "React / Next.js Architecture",
    "Mobile App Development (React Native, Flutter)",
    "E-commerce Frontend",
    "Performance Optimization",
    "Odoo Integrations",
  ],
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-primary">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        <LangProvider>
          {children}
          <Toaster richColors position="bottom-right" />
        </LangProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalSchema),
          }}
        />
      </body>
    </html>
  );
}
