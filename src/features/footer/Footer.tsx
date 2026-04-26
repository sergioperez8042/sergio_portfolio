"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";

export function Footer() {
  const { t } = useTranslation();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ background: "var(--color-black-200)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-16 pt-16 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-10 md:gap-14 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="text-[18px] font-extrabold tracking-tight mb-3 text-white-100">
              Sergio Carlos Rodríguez Pérez
            </div>
            <p className="text-[13.5px] leading-[1.7] text-secondary max-w-[36ch] m-0">
              {f.tagline}
            </p>
          </div>
          {f.cols.map((col) => (
            <div key={col.title}>
              <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-4">
                {col.title}
              </h5>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-white-100/85 hover:text-white-100 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-2 pt-7 text-[12px] text-secondary">
          <span>{f.copyright}</span>
          <span>Made in Madrid · Apple-cristal v2</span>
        </div>
      </div>
    </footer>
  );
}
