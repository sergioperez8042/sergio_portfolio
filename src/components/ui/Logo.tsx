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
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient
          id={strokeId}
          x1="0"
          y1="0"
          x2="0"
          y2="64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="1" stopColor="#c5cad4" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Tile cristal */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill={`url(#${tileId})`}
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="1"
      />

      {/* Diagonales de refracción */}
      <path
        d="M2 14 L14 2 M62 50 L50 62"
        stroke="#ffffff"
        strokeOpacity="0.18"
        strokeWidth="1"
      />

      {/* Monograma S */}
      <path
        d="M44 18 L44 15 Q44 12 41 12 L24 12 Q18 12 18 18 L18 27 Q18 33 24 33 L40 33 Q46 33 46 39 L46 49 Q46 52 43 52 L20 52"
        stroke={`url(#${strokeId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Punto de marca */}
      <circle cx="50" cy="14" r="1.6" fill="#c5cad4" />
    </svg>
  );
}
