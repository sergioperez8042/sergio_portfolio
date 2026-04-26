type LogoProps = {
  size?: number;
  className?: string;
  /** Si true, omite el punto de marca (útil para favicon más limpio) */
  bare?: boolean;
};

/**
 * Logotipo de Sergio Rodríguez.
 *
 * Monograma "S" monoline + punto de marca. Construido con dos arcos
 * cuadráticos que dibujan una S geométrica con stroke-linecap rounded
 * y un círculo pequeño debajo a la derecha (como un "Sergio.").
 *
 * Gradiente: chrome (white → silver) heredado del design system.
 * Funciona a 16px (favicon) y escala infinitamente.
 */
export function Logo({ size = 28, className, bare = false }: LogoProps) {
  const id = "logo-chrome";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f5f7" />
          <stop offset="100%" stopColor="#c5cad4" />
        </linearGradient>
      </defs>

      {/* "S" monoline construida con tres curvas */}
      <path
        d="M22 9
           C 22 5.5, 19 4, 16 4
           C 12 4, 9.5 6, 9.5 9
           C 9.5 12, 12 13.5, 16 14.5
           C 20 15.5, 22.5 17, 22.5 20
           C 22.5 23, 20 25, 16 25
           C 13 25, 10 23.5, 9.5 21"
        stroke={`url(#${id})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Punto de marca: "Sergio." */}
      {bare ? null : (
        <circle cx="26" cy="25" r="1.6" fill={`url(#${id})`} />
      )}
    </svg>
  );
}
