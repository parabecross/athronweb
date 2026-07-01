import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
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
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: SITE.instagram,
  },
  alternates: {
    canonical: SITE.url,
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
  url: SITE.url,
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
    url: SITE.url,
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
