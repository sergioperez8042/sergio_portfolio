"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { styles } from "@/lib/styles";
import { navLinks } from "@/data/nav";

export function Navbar() {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => setToggle(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
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
              className="text-secondary hover:text-white text-[18px] font-medium"
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
            className="p-1"
          >
            {toggle ? (
              <X className="w-7 h-7 text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-7 h-7 text-white" aria-hidden="true" />
            )}
          </button>

          <div
            id="mobile-menu"
            hidden={!toggle}
            className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-secondary font-medium text-[16px]"
                >
                  <a href={`#${link.id}`} onClick={closeMenu}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
