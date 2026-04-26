"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang } from "@/data/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)[Lang];
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sergio.lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect to <html lang>
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: content[lang] }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useTranslation(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useTranslation must be used inside <LangProvider>");
  }
  return ctx;
}
