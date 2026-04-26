"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { styles } from "@/lib/styles";
import { navLinks } from "@/data/nav";

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => setToggle(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 bg-primary/85 backdrop-blur-xl border-b border-white/5`}
      aria-label="Principal"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#hero"
          className="flex items-center"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          <p className="text-white-100 text-[18px] font-bold tracking-tight">
            Sergio
            <span className="text-secondary font-medium ml-1.5 hidden sm:inline">
              · Portfolio
            </span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white-100 transition-colors text-[18px] font-medium"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            onClick={() => setToggle((v) => !v)}
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
            className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <motion.span
              key={toggle ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="block"
            >
              {toggle ? (
                <X className="w-7 h-7 text-white-100" aria-hidden="true" />
              ) : (
                <Menu className="w-7 h-7 text-white-100" aria-hidden="true" />
              )}
            </motion.span>
          </button>

          <AnimatePresence>
            {toggle ? (
              <motion.div
                key="mobile-menu"
                id="mobile-menu"
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{
                  duration: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: "top right" }}
                className="glass absolute top-16 right-4 min-w-[180px] z-10 rounded-2xl p-3 shadow-2xl"
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
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.id}
                      variants={{
                        hidden: { opacity: 0, x: 12 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-xl text-secondary hover:text-white-100 hover:bg-white/5 transition-colors font-medium text-[16px]"
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
