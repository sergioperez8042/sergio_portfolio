"use client";

import { useTranslation } from "@/lib/i18n/LangProvider";
import { LANGS, type Lang } from "@/data/i18n";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useTranslation();
  return (
    <div
      role="group"
      aria-label="Language"
      className={[
        "inline-flex p-[3px] rounded-full bg-white/[0.03] border border-white/[0.06]",
        className,
      ].join(" ")}
    >
      {LANGS.map((l: Lang) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={[
              "px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase transition-colors",
              active
                ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                : "text-secondary hover:text-white-100",
            ].join(" ")}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
