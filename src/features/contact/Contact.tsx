"use client";

import dynamic from "next/dynamic";
import { Send } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassButton } from "@/components/ui/GlassButton";
import { styles } from "@/lib/styles";
import { useContactForm } from "./useContactForm";

const EarthCanvas = dynamic(() => import("@/components/three/EarthCanvas"), {
  ssr: false,
});

export function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm();
  const isSubmitting = status === "submitting";

  return (
    <SectionWrapper id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <div className="flex-[0.75] glass p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Contacto</p>
          <h3 className={styles.sectionHeadText}>Hablemos.</h3>

          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            noValidate
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Tu nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="¿Cómo te llamas?"
                required
                autoComplete="name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Tu email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="¿Cuál es tu email?"
                required
                autoComplete="email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Tu mensaje</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="¿Qué quieres contarme?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-y"
              />
            </label>

            <GlassButton
              type="submit"
              disabled={isSubmitting}
              icon={Send}
              size="md"
              label={isSubmitting ? "Enviando…" : "Enviar mensaje"}
            />
          </form>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </div>
      </div>
    </SectionWrapper>
  );
}
