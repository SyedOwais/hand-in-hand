import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hand In Hand Therapy Centre & Adult Day Program | York Region & Simcoe County",
  description: "Individualized ABA, IBI, speech, occupational therapy & adult day programming in Vaughan and Bradford. Built to help every individual connect, grow & thrive.",
  keywords: [
    "ABA Therapy Vaughan",
    "Speech Therapy Bradford",
    "Occupational Therapy Ontario",
    "Adult Day Program Vaughan",
    "Autism Therapy Centre",
    "Hand In Hand Therapy Centre",
    "Social Skills Programs",
    "York Region Pediatric Therapy"
  ],
  authors: [{ name: "Hand In Hand Therapy Centre & Adult Day Program" }],
  icons: {
    icon: [
      { url: "/images/favicon.png?v=3", type: "image/png" },
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
    ],
    shortcut: "/images/favicon.png?v=3",
    apple: "/images/favicon.png?v=3",
  },
  openGraph: {
    title: "Hand In Hand Therapy Centre & Adult Day Program",
    description: "Individualized therapy and adult day support built around unique strengths in Vaughan and Bradford.",
    url: "https://thedesignsllc.com/will/therapyanddaycare/",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand In Hand Therapy Centre & Adult Day Program",
    description: "Comprehensive pediatric therapy and adult day programming in York Region & Simcoe County.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/favicon.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png?v=3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Hand In Hand Therapy Centre & Adult Day Program",
              description: "Individualized ABA, Speech, Occupational therapy and Adult Day Programming in Vaughan and Bradford.",
              telephone: "+1-416-930-5293",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "665 Millway Ave, Unit 38",
                  addressLocality: "Concord",
                  addressRegion: "ON",
                  addressCountry: "CA"
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "465 Holland St W, Unit 3/4",
                  addressLocality: "Bradford",
                  addressRegion: "ON",
                  addressCountry: "CA"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased text-[#1B3B48] bg-[#FBF9F5] selection:bg-[#2A5243] selection:text-white">
        {children}
      </body>
    </html>
  );
}
