import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600"],
  style: ["italic"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:
      "The Taylor Family — Rooted in Faith, Discipline, and Generational Purpose",
    template: "%s | The Taylor Family",
  },
  description:
    "The official home of the Taylor family. Rooted in faith, discipline, and generational purpose. Govern. Build. Pass Down.",
  keywords: [
    "Taylor family",
    "family website",
    "legacy",
    "family tree",
    "Governed Enterprises",
  ],
  metadataBase: new URL("https://thetaylorfam.net"),
  openGraph: {
    title: "The Taylor Family",
    description:
      "Govern. Build. Pass Down. — The official home of the Taylor family.",
    url: "https://thetaylorfam.net",
    siteName: "The Taylor Family",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "The Taylor Family",
    description:
      "Govern. Build. Pass Down. — The official home of the Taylor family.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Terry Taylor",
              url: "https://thetaylorfam.net",
              email: "terry@thetaylorfam.net",
              jobTitle: "Head of Household",
              affiliation: {
                "@type": "Organization",
                name: "Governed Enterprises",
                url: "https://governedenterprises.com",
              },
            }),
          }}
        />

        {/* Skip to content — accessible but visually hidden */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-tf-gold focus:text-tf-textPrimary focus:rounded-lg focus:font-medium focus:text-sm"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
