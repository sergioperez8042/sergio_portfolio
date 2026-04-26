import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sergio-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sergio Rodríguez · Frontend Developer",
    template: "%s · Sergio Rodríguez",
  },
  description:
    "Portfolio de Sergio Carlos Rodríguez Pérez, Frontend Developer especializado en React, Next.js y React Native.",
  keywords: [
    "Sergio Rodríguez",
    "Frontend Developer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Three.js",
    "Portfolio",
  ],
  authors: [{ name: "Sergio Rodríguez" }],
  creator: "Sergio Rodríguez",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    title: "Sergio Rodríguez · Frontend Developer",
    description:
      "Portfolio de Sergio Carlos Rodríguez Pérez, Frontend Developer especializado en React, Next.js y React Native.",
    siteName: "Sergio Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Rodríguez · Frontend Developer",
    description:
      "Portfolio de Sergio Carlos Rodríguez Pérez, Frontend Developer especializado en React, Next.js y React Native.",
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sergio Carlos Rodríguez Pérez",
  url: SITE_URL,
  jobTitle: "Frontend Developer",
  sameAs: [
    "https://www.linkedin.com/in/sergio-rodríguez-95b6a7231",
    "https://github.com/sergioperez8042",
  ],
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
        {children}
        <Toaster richColors position="bottom-right" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
