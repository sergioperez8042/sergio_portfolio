"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";
import { SOCIALS, isExternalHref } from "@/data/socials";
import { Logo } from "@/components/ui/Logo";

function SocialIcons({
  size,
  className = "",
}: {
  size: "sm" | "md";
  className?: string;
}) {
  const dim = size === "sm" ? "w-9 h-9" : "w-10 h-10";
  const iconDim = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <ul className={`flex gap-2 list-none p-0 m-0 ${className}`}>
      {SOCIALS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${dim} inline-flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] text-white-100/85 hover:text-white-100 hover:bg-white/[0.08] transition-colors`}
          >
            <Icon className={iconDim} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const f = t.footer;

  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ background: "var(--color-black-200)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-16 pt-12 sm:pt-16 pb-6 sm:pb-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-8 sm:gap-10 md:gap-14 pb-8 sm:pb-12 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="text-[17px] sm:text-[18px] font-extrabold tracking-tight text-white-100">
                Sergio Rodríguez
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.7] text-secondary max-w-[36ch] m-0 mb-5">
              {f.tagline}
            </p>
            <SocialIcons size="md" className="md:hidden" />
          </div>

          <div className="md:contents grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {f.cols.map((col) => (
              <div key={col.title}>
                <h5 className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary mb-3 sm:mb-4">
                  {col.title}
                </h5>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 sm:gap-2.5">
                  {col.links.map((link) => {
                    const external = isExternalHref(link.href);
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="text-[13.5px] sm:text-[14px] text-white-100/85 hover:text-white-100 transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-6 sm:pt-7 text-[12px] text-secondary">
          <span className="leading-relaxed">{f.copyright}</span>
          <SocialIcons size="sm" className="hidden md:flex" />
          <span className="text-[11px] opacity-60">Made in Burgos</span>
        </div>
      </div>
    </footer>
  );
}
