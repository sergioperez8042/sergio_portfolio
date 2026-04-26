"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Mail, MapPin, Clock, Linkedin, Github, Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";
import { useContactForm } from "./useContactForm";

const EarthCanvas = dynamic(() => import("@/components/three/EarthCanvas"), {
  ssr: false,
});

const ICONS = { mail: Mail, pin: MapPin, clock: Clock } as const;

export function Contact() {
  const { t } = useTranslation();
  const c = t.contact;
  const { form, status, handleChange, handleSubmit } = useContactForm();
  const isSubmitting = status === "submitting";
  const [intent, setIntent] = useState<string | null>(null);

  return (
    <section
      id="contact"
      className="hash-anchor relative max-w-[1280px] mx-auto px-6 sm:px-16 py-24 lg:py-36"
    >
      <div className="reveal mb-10">
        <span className="eyebrow">{c.eyebrow}</span>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] rounded-3xl overflow-hidden border reveal"
        style={{
          background: "rgba(255,255,255,0.025)",
          borderColor: "var(--color-line-strong)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* LEFT */}
        <div
          className="relative p-10 lg:p-12 lg:border-r"
          style={{
            background:
              "linear-gradient(160deg, rgba(197,202,212,0.06), transparent 60%)",
            borderColor: "var(--color-line)",
          }}
        >
          {/* WireGlobe deco */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <EarthCanvas />
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <h2 className="h2 text-white-100 mb-4">{c.title}</h2>
            <p className="text-[16px] leading-[1.7] text-secondary max-w-[40ch]">
              {c.lede}
            </p>

            <div className="flex flex-col gap-4 mt-9 pt-7 border-t border-white/[0.06]">
              {c.info.map((row) => {
                const Icon = ICONS[row.icon as keyof typeof ICONS];
                return (
                  <div key={row.lbl} className="flex gap-3.5 items-center">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.06] shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-[11px] tracking-[0.1em] uppercase text-secondary">
                        {row.lbl}
                      </div>
                      <div className="text-[15px] font-semibold text-white-100">
                        {row.val}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-2 mt-7">
              <a
                href="https://www.linkedin.com/in/sergio-rodríguez-95b6a7231"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.socials.linkedin}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.06] text-white-100/85 hover:bg-[var(--color-accent)] hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/sergioperez8042"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.socials.github}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.06] text-white-100/85 hover:bg-[var(--color-accent)] hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="p-10 lg:p-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-semibold tracking-wide text-white-100">
                {c.form.intent}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {c.intents.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setIntent(opt)}
                    className={[
                      "px-3.5 py-3 rounded-xl text-[13px] font-medium text-left transition-all border",
                      intent === opt
                        ? "border-[var(--color-accent)] text-white-100"
                        : "border-white/[0.06] text-white-100/85 hover:border-white/[0.18]",
                    ].join(" ")}
                    style={
                      intent === opt
                        ? { background: "rgba(197,202,212,0.12)" }
                        : { background: "var(--color-tertiary)" }
                    }
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="text-[12px] font-semibold tracking-wide text-white-100"
              >
                {c.form.name}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={c.form.nameP}
                required
                autoComplete="name"
                className="px-4 py-3.5 rounded-xl bg-[var(--color-tertiary)] border border-white/[0.06] text-white-100 outline-none focus:border-[var(--color-accent)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-[12px] font-semibold tracking-wide text-white-100"
              >
                {c.form.email}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={c.form.emailP}
                required
                autoComplete="email"
                className="px-4 py-3.5 rounded-xl bg-[var(--color-tertiary)] border border-white/[0.06] text-white-100 outline-none focus:border-[var(--color-accent)] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-[12px] font-semibold tracking-wide text-white-100"
              >
                {c.form.message}
              </label>
              <textarea
                id="contact-message"
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={c.form.messageP}
                required
                className="px-4 py-3.5 rounded-xl bg-[var(--color-tertiary)] border border-white/[0.06] text-white-100 outline-none focus:border-[var(--color-accent)] transition-colors min-h-[120px] resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 mt-2 rounded-full text-[14px] font-semibold transition-all disabled:opacity-60 disabled:cursor-not-allowed self-start"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-white-100) 0%, #d8d8e0 100%)",
                color: "var(--color-primary)",
                boxShadow:
                  "0 12px 30px -10px rgba(197,202,212,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              {isSubmitting ? c.form.sending : c.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
