import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#F97316" }}>
        <div style={{ width: 96, height: 96, borderRadius: 48, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 0, height: 0, marginLeft: 8, borderTop: "20px solid transparent", borderBottom: "20px solid transparent", borderLeft: "32px solid #F97316" }} />
        </div>
      </div>
    ),
    size,
  );
}
