"use client";

import { useEffect, useState } from "react";

type TypeLoopProps = {
  words: string[];
  className?: string;
  /** ms por carácter al escribir */
  typeSpeed?: number;
  /** ms por carácter al borrar */
  deleteSpeed?: number;
  /** ms de pausa con la palabra completa visible */
  holdMs?: number;
};

/**
 * Bucle "typewriter" sin dependencias externas.
 * Reemplaza react-type-animation (lib pesada y poco mantenida).
 */
export function TypeLoop({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 50,
  holdMs = 1200,
}: TypeLoopProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing",
  );

  useEffect(() => {
    const current = words[wordIndex] ?? "";

    if (phase === "typing") {
      if (text.length < current.length) {
        const id = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed,
        );
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => setPhase("deleting"), holdMs);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const id = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deleteSpeed,
        );
        return () => clearTimeout(id);
      }
      setWordIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="inline-block w-[0.08em] -mb-1 ml-1 bg-current animate-pulse">
        &nbsp;
      </span>
    </span>
  );
}
