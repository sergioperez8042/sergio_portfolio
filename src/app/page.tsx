"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";
import { useReveal } from "@/lib/useReveal";
import { Navbar } from "@/components/nav/Navbar";
import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Tech } from "@/features/tech/Tech";
import { Works } from "@/features/works/Works";
import { CaseStudy } from "@/features/case-study/CaseStudy";
import { Blog } from "@/features/blog/Blog";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";

export default function Home() {
  useReveal();
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee items={t.marquee} />
        <About />
        <Experience />
        <Tech />
        <Works />
        <CaseStudy />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
