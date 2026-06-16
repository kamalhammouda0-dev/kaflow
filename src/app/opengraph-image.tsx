import { ImageResponse } from "next/og";

export const alt = "KA Flow — websites en AI-agents voor ZZP'ers en MKB in Gelderland en Nederland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0b0f",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(59,94,245,0.16) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "linear-gradient(135deg, #3b5ef5, #8b5cf6)",
              color: "white",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            ∞
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, color: "#f5f6fa" }}>
            KA Flow
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 50,
            lineHeight: 1.25,
            fontWeight: 600,
            color: "#f5f6fa",
            maxWidth: 980,
          }}
        >
          Websites en AI-agents die voor je werken.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#9aa0ad",
          }}
        >
          Heteren, Gelderland · actief in heel Nederland
        </div>
      </div>
    ),
    { ...size }
  );
}
