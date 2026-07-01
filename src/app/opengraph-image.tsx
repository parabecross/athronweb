import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/constants";

export const alt = SITE.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoPath = join(process.cwd(), "public", "logo-full.png");
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <img src={logoBase64} alt="" width={300} height={300} />
        <p
          style={{
            fontSize: 26,
            color: "#999999",
            textAlign: "center",
            maxWidth: 700,
            marginTop: 16,
          }}
        >
          {SITE.tagline}
        </p>
      </div>
    ),
    { ...size }
  );
}
