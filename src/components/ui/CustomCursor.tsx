"use client";

import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  'a, button, input, textarea, [role="button"], [data-cursor="hover"]';

/**
 * Custom cursor con dot + ring que sigue al mouse.
 * Se desmonta en pantallas <= 900px o cuando prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mq.matches && !reduced.matches);
    update();
    mq.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }
    document.body.classList.add("has-custom-cursor");

    let rafId = 0;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!ringRef.current) return;
      if (target?.closest?.(HOVER_SELECTOR)) {
        ringRef.current.classList.add("is-hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!ringRef.current) return;
      if (target?.closest?.(HOVER_SELECTOR)) {
        ringRef.current.classList.remove("is-hover");
      }
    };
    const onDown = () => ringRef.current?.classList.add("is-click");
    const onUp = () => ringRef.current?.classList.remove("is-click");

    const tick = () => {
      // dot follows directly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
      // ring lerps for smooth trail
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cc-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--color-accent)",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cc-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(197,202,212,0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform, width, height",
          transition:
            "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), background 0.2s, border-color 0.2s",
        }}
      />
      <style jsx global>{`
        .cc-ring.is-hover {
          width: 56px !important;
          height: 56px !important;
          background: rgba(197, 202, 212, 0.06);
          border-color: rgba(197, 202, 212, 0.9);
          margin-left: -12px;
          margin-top: -12px;
        }
        .cc-ring.is-click {
          width: 24px !important;
          height: 24px !important;
        }
      `}</style>
    </>
  );
}
