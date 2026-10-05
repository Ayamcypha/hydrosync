import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout";
import { Footer } from "@/components/layout";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { MobileNavProvider } from "@/context/MobileNavContext";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "HydroSync | Trusted Plumbing, HVAC & Drain Services in Columbus, Ohio",
    template: "%s | HydroSync",
  },
  description: "Central Ohio's trusted plumbing, HVAC, and drain experts since 1986. Licensed, insured, and available 24/7 for heating, cooling, plumbing, and emergency services.",
  keywords: ["plumbing", "HVAC", "heating", "cooling", "drain cleaning", "emergency plumber", "Columbus Ohio", "water heater", "furnace repair", "AC installation"],
  authors: [{ name: "HydroSync" }],
  creator: "HydroSync",
  publisher: "HydroSync",
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
    locale: "en_US",
    url: "https://hydrosync.com",
    siteName: "HydroSync",
    title: "HydroSync | Trusted Plumbing, HVAC & Drain Services",
    description: "Central Ohio's trusted plumbing, HVAC, and drain experts since 1986. 24/7 emergency service available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HydroSync - Plumbing & HVAC Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroSync | Trusted Plumbing, HVAC & Drain Services",
    description: "Central Ohio's trusted plumbing, HVAC, and drain experts since 1986.",
    images: ["/og-image.jpg"],
    creator: "@hydrosync",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <MobileNavProvider>
          <Providers>
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary-600 text-white rounded-lg">
              Skip to main content
            </a>
            <Header />
            <MobileNavDrawer />
            <main id="main" className="flex-1 pt-20 md:pt-20" role="main">
              {children}
            </main>
            <Footer />
          </Providers>
        </MobileNavProvider>
      </body>
    </html>
  );
}