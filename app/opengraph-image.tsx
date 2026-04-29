import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/seo/site-config"

export const runtime = "edge"
export const alt = `${siteConfig.name} — biljke za dom i vrt, Vukovar`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1f14 0%, #0f2a1c 45%, #14382a 100%)",
          color: "#e9f5ee",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: brand + location pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#2d6a4f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e9f5ee",
                fontSize: 32,
              }}
            >
              F
            </div>
            <span>FloraVu</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(106, 196, 145, 0.4)",
              color: "#a7d8be",
              fontSize: 22,
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#6ac491" }} />
            Gradska tržnica Vukovar
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              margin: 0,
              fontWeight: 800,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Uljepšajte svoj{" "}
            <span style={{ color: "#6ac491" }}>dom i vrt</span>
            {" "}našim biljkama
          </h1>
          <p style={{ fontSize: 30, color: "#bcd9c8", margin: 0, maxWidth: 900 }}>
            Sobne biljke, cvjetnice i sadnice — dostava u Vukovar i Borovo Naselje.
          </p>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9ec6b1",
            borderTop: "1px solid rgba(106, 196, 145, 0.25)",
            paddingTop: 24,
          }}
        >
          <span>Naručite preko Instagrama @flora.vukovar</span>
          <span>Dostava do 15:00</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
