import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Dankha: websites, apps, online stores and marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default link-preview image for any page without its own share image */
export default async function OpenGraphImage() {
  const mark = await readFile(path.join(process.cwd(), "app/icon.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0b1626 0%, #13263d 60%, #0f3a44 100%)",
          color: "#eef2f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markSrc} width={88} height={88} alt="" style={{ borderRadius: 20 }} />
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>Dankha</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Websites, apps, online stores and marketing.
          </span>
          <span style={{ fontSize: 28, color: "#9aa8b8" }}>
            Design, build and growth for businesses in the UAE, Sweden, Saudi Arabia, the US and Pakistan.
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 6, borderRadius: 3, background: "#4fc3c7" }} />
          <span style={{ fontSize: 26, color: "#4fc3c7" }}>dankha.co</span>
        </div>
      </div>
    ),
    size,
  );
}
