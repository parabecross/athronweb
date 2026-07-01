import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import { getOgImageUrl, getSiteUrl, OG_IMAGE } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "ATHRON | La plataforma que conecta todo tu box";
const description =
  "ATHRON es una plataforma SaaS diseñada para boxes de CrossFit y entrenamiento funcional. Gestiona clases, reservas, membresías, atletas, coaches, asistencia, ranking y estadísticas desde un solo lugar.";

const siteUrl = getSiteUrl();
const ogImageUrl = getOgImageUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "ATHRON",
    "CrossFit",
    "box",
    "entrenamiento funcional",
    "reservas",
    "membresías",
    "asistencia",
    "ranking",
    "SaaS",
    "México",
  ],
  authors: [{ name: "ATHRON" }],
  creator: "ATHRON",
  publisher: "ATHRON",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: SITE.name,
    title,
    description,
    images: [
      {
        url: ogImageUrl,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: SITE.instagram,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ATHRON",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  url: siteUrl,
  image: ogImageUrl,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "MXN",
    lowPrice: "899",
    highPrice: "1299",
    offerCount: "3",
  },
  provider: {
    "@type": "Organization",
    name: "ATHRON",
    url: siteUrl,
    logo: ogImageUrl,
    email: SITE.email,
    sameAs: [SITE.instagramUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:width" content={String(OG_IMAGE.width)} />
        <meta property="og:image:height" content={String(OG_IMAGE.height)} />
        <meta property="og:image:type" content={OG_IMAGE.type} />
        <meta property="og:image:alt" content={OG_IMAGE.alt} />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
