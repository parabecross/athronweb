import { SITE } from "./constants";

const PRODUCTION_FALLBACK = "https://athronweb.vercel.app";

/** Resolves the public site URL for metadata and OG tags. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
    /\/$/,
    ""
  );
  if (productionDomain) return `https://${productionDomain}`;

  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  // Avoid preview deployment URLs (often SSO-protected) in social meta tags
  return PRODUCTION_FALLBACK || SITE.url;
}

export const OG_IMAGE = {
  path: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "ATHRON — La plataforma que conecta todo tu box",
  type: "image/jpeg",
} as const;

export function getOgImageUrl(): string {
  return `${getSiteUrl()}${OG_IMAGE.path}`;
}
