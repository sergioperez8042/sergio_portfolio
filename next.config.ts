import type { NextConfig } from "next";
import path from "node:path";

/**
 * Security headers — endurecemos la respuesta HTTP en producción.
 * Refs: OWASP Secure Headers, Mozilla Observatory, Lighthouse Best Practices.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Cross-Origin policies — relajadas para permitir embebibles que usamos
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  /**
   * Content-Security-Policy
   * - 'unsafe-inline' en script-src es necesario por los scripts de
   *   JSON-LD inline (eslint-disabled). Los scripts de Next se inyectan
   *   por turbopack y son self.
   * - 'unsafe-eval' lo necesita @react-three/fiber/three.js para shaders.
   * - cdn.simpleicons.org para tech icons.
   * - vercel.live para previews y feedback.
   */
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.simpleicons.org https://*.vercel.app",
      "font-src 'self' data:",
      "connect-src 'self' https://api.emailjs.com https://vercel.live wss://ws-us3.pusher.com https://*.vercel-insights.com https://*.vercel-scripts.com",
      "frame-src 'self' https://vercel.live",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Cache aggressive for static assets
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // PDFs: forzar descarga (no abrir in-line) y caché razonable
      {
        source: "/:path*.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
