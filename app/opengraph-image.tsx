import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.title}: a tutorial by ${site.author}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #FFF4EA 0%, #FDBA74 100%)",
          color: "#0F172A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700, color: "#C2410C" }}>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: "#F97316", display: "flex" }} />
          Go · Postgres · record &amp; replay
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, display: "flex" }}>
            {site.title}
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "#334155", display: "flex" }}>
            {site.subtitle}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", fontSize: 30, fontWeight: 700 }}>
          Written by {site.author}
        </div>
      </div>
    ),
    size,
  );
}
