import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sergio Rodríguez · Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background:
            "linear-gradient(135deg, #050816 0%, #151030 60%, #2a0182 100%)",
          color: "#f3f3f3",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#aaa6c3",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#915EFF",
          }}
        >
          Sergio Rodríguez
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 40,
            fontWeight: 500,
            color: "#f3f3f3",
            maxWidth: 1000,
          }}
        >
          Frontend Developer · React · Next.js · React Native
        </div>
      </div>
    ),
    { ...size },
  );
}
