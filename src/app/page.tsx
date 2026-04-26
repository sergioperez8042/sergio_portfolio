import { Navbar } from "@/components/nav/Navbar";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Tech } from "@/features/tech/Tech";
import { Works } from "@/features/works/Works";
import { Contact } from "@/features/contact/Contact";
import { Footer } from "@/features/footer/Footer";
import StarsCanvasLazy from "@/components/three/StarsCanvasLazy";

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvasLazy />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
