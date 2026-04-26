import { useId } from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Logotipo Sergio · "Glass S".
 *
 * Tile de cristal redondeado (rx=14) con dos diagonales sutiles
 * que evocan refracción, monograma "S" monoline y punto de marca.
 * Gradientes alineados al design system (white → #c5cad4).
 *
 * Usa React.useId() para namespacear los <linearGradient> internos
 * y evitar colisiones cuando se renderizan múltiples instancias.
 */
export function Logo({ size = 32, className }: LogoProps) {
  const uid = useId();
  const tileId = `logo-tile-${uid}`;
  const strokeId = `logo-stroke-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Sergio"
      className={className}
    >
      <defs>
        <linearGradient
          id={tileId}
          x1="0"
          y1="0"
          x2="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1a1b22" />
          <stop offset="1" stopColor="#0a0a0d" />
        </linearGradient>
        <linearGradient
          id={strokeId}
          x1="0"
          y1="0"
          x2="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c5cad4" />
        </linearGradient>
      </defs>

      {/* Tile cristal */}
      <rect width="64" height="64" rx="14" fill={`url(#${tileId})`} />
      <rect
        x="0.5"
        y="0.5"
        width="63"
        height="63"
        rx="14"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.16"
        strokeWidth="1"
      />

      {/* Monograma S — bold y legible a 32px */}
      <path
        d="M46 19 Q46 12 39 12 L25 12 Q17 12 17 20 Q17 28 25 28 L39 28 Q47 28 47 36 Q47 44 39 44 L25 44 Q17 44 17 51"
        stroke={`url(#${strokeId})`}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Punto de marca */}
      <circle cx="50" cy="14" r="2.4" fill="#c5cad4" />
    </svg>
  );
}
