"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
  className?: string;
};

/**
 * Typewriter ciclico con caret cromo.
 * Reemplaza al TypeLoop antiguo.
 */
export function Typewriter({
  words,
  typeSpeed = 60,
  deleteSpeed = 35,
  holdMs = 1600,
  className,
}: Props) {
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
      <span className="typewriter-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}
