"use client";

import { useEffect } from "react";

/**
 * Activa `.reveal.in` en cualquier elemento con clase `.reveal`
 * cuando entra en viewport. Una sola vez por elemento.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (els.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
