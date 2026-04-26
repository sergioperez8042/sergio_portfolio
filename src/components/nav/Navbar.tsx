"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LangProvider";
import { LangToggle } from "@/components/ui/LangToggle";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setToggle(false);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "work", label: t.nav.work },
    { id: "projects", label: t.nav.projects },
  ];

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-16 transition-all duration-300",
        scrolled
          ? "py-3 bg-[rgba(10,10,13,0.7)] backdrop-blur-xl border-b border-white/[0.06]"
          : "py-4",
      ].join(" ")}
      aria-label="Principal"
    >
      <a
        href="#hero"
        aria-label="Sergio Rodríguez · Portfolio"
        className="inline-flex items-center gap-2.5 group"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          closeMenu();
        }}
      >
        <Logo size={26} className="transition-transform group-hover:rotate-[8deg]" />
        <span className="font-extrabold text-[16px] tracking-tight text-white-100">
          Sergio
        </span>
        <span className="hidden sm:inline text-[13px] text-secondary font-medium">
          · Portfolio
        </span>
      </a>

      {/* Pill desktop links */}
      <ul className="hidden lg:flex gap-1 list-none p-1 m-0 rounded-full bg-white/[0.03] border border-white/[0.06]">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="inline-block px-4 py-2 rounded-full text-[13px] font-medium text-secondary hover:text-white-100 hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2.5">
        <LangToggle className="hidden sm:inline-flex" />

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-semibold border border-white/10 transition-all"
          style={{
            background: "linear-gradient(180deg, #1a1b22, #0f1014)",
            boxShadow:
              "0 8px 24px -8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {t.nav.cta}
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setToggle((v) => !v)}
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden p-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          {toggle ? (
            <X className="w-6 h-6 text-white-100" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 text-white-100" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {toggle ? (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top right" }}
            className="lg:hidden glass absolute top-16 right-4 min-w-[200px] z-10 rounded-2xl p-3 shadow-2xl"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="list-none flex flex-col"
            >
              {links.map((link) => (
                <motion.li
                  key={link.id}
                  variants={{
                    hidden: { opacity: 0, x: 12 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.25, ease: "easeOut" },
                    },
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-xl text-secondary hover:text-white-100 hover:bg-white/5 transition-colors font-medium text-[15px]"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 12 },
                  show: { opacity: 1, x: 0 },
                }}
                className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-2 px-2"
              >
                <LangToggle />
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold bg-white-100 text-primary"
                >
                  {t.nav.cta}
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
