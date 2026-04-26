"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { styles } from "@/lib/styles";
import { slideIn } from "@/lib/motion";
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
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando…" : "Enviar"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
