"use client";

import type { ButtonHTMLAttributes, ComponentType, ReactNode } from "react";

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Texto pequeño superior, opcional. Ej: "Descarga en el" */
  caption?: string;
  /** Texto principal en negrita */
  label: ReactNode;
  /** Icono a la izquierda (componente, recibe className) */
  icon?: ComponentType<{ className?: string }>;
  /** Variante de tamaño */
  size?: "sm" | "md" | "lg";
  /** Hace que el botón ocupe todo el ancho disponible */
  fullWidth?: boolean;
};

const SIZE_CLASSES = {
  sm: "px-4 py-2.5 gap-2.5 min-h-[44px]",
  md: "px-5 py-3 gap-3 min-h-[56px]",
  lg: "px-6 py-3.5 gap-3.5 min-h-[64px]",
} as const;

const ICON_SIZE = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
} as const;

/**
 * Botón estilo "glass pill" Apple-cristal.
 * - Fondo grafito con highlight superior interno
 * - Borde sutil + sombra exterior
 * - Texto opcional en dos líneas (caption + label)
 * - Icono a la izquierda opcional
 *
 * Uso:
 *   <GlassButton label="Enviar" />
 *   <GlassButton caption="Descarga en el" label="App Store" icon={Apple} />
 */
export function GlassButton({
  caption,
  label,
  icon: Icon,
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...rest
}: GlassButtonProps) {
  return (
    <button
      type={type}
      className={[
        "group relative inline-flex items-center justify-center",
        SIZE_CLASSES[size],
        "rounded-full bg-[#1a1b22] text-white-100",
        "border border-white/[0.06]",
        "shadow-[0_8px_24px_-8px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]",
        "transition-all duration-200 ease-out",
        "hover:bg-[#22232b] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]",
        "active:scale-[0.98]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5cad4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0d]",
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {/* Highlight superior decorativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {Icon ? (
        <Icon className={`${ICON_SIZE[size]} shrink-0`} aria-hidden="true" />
      ) : null}

      <span className="flex flex-col items-start leading-tight">
        {caption ? (
          <span className="text-[11px] font-medium text-secondary tracking-wide">
            {caption}
          </span>
        ) : null}
        <span className="text-base font-bold">{label}</span>
      </span>
    </button>
  );
}
