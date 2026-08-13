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
  metadataBase: new URL("https://handinhandtherapy.ca"),
  title: {
    default: "Hand In Hand Therapy Centre & The Next Level Adult Day Program",
    template: "%s | Hand In Hand Therapy Centre & Adult Day Program",
  },
  description: "Individualized pediatric ABA therapy, speech, occupational therapy & 18+ adult day programming in Vaughan and Bradford. Built to help every individual connect, grow & thrive.",
  keywords: [
    "ABA Therapy Vaughan",
    "Speech Therapy Bradford",
    "Occupational Therapy Ontario",
    "Adult Day Program Vaughan",
    "Autism Therapy Centre",
    "Hand In Hand Therapy Centre",
    "The Next Level Adult Day Program",
    "Social Skills Programs",
    "York Region Special Needs Therapy"
  ],
  authors: [{ name: "Hand In Hand Therapy Centre & The Next Level Adult Day Program" }],
  icons: {
    icon: [
      { url: "/images/favicon.png?v=3", type: "image/png" },
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
    ],
    shortcut: "/images/favicon.png?v=3",
    apple: "/images/favicon.png?v=3",
  },
  openGraph: {
    title: "Hand In Hand Therapy Centre & The Next Level Adult Day Program",
    description: "Individualized pediatric therapy and adult day support built around unique strengths in Vaughan and Bradford. Together We Can!",
    url: "https://handinhandtherapy.ca/",
    siteName: "Hand In Hand Therapy Centre & The Next Level Adult Day Program",
    images: [
      {
        url: "/images/aboutus-main.webp",
        width: 1200,
        height: 630,
        alt: "Hand In Hand Therapy Centre Team & Facility",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand In Hand Therapy Centre & The Next Level Adult Day Program",
    description: "Comprehensive pediatric therapy and 18+ adult day programming in York Region & Simcoe County.",
    images: ["/images/aboutus-main.webp"],
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
              "@graph": [
                {
                  "@type": ["Organization", "MedicalClinic", "LocalBusiness"],
                  "@id": "https://handinhandtherapy.ca/#organization",
                  "name": "Hand In Hand Therapy Centre & The Next Level Adult Day Program",
                  "alternateName": [
                    "Hand In Hand Therapy Centre",
                    "The Next Level Adult Day Program"
                  ],
                  "url": "https://handinhandtherapy.ca/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://handinhandtherapy.ca/images/hand-in-hand.png"
                  },
                  "image": "https://handinhandtherapy.ca/images/aboutus-main.webp",
                  "slogan": "Together We Can!",
                  "description": "Comprehensive pediatric ABA therapy, Speech-Language Pathology, Occupational Therapy, and 18+ Adult Day Programming across York Region and Simcoe County.",
                  "founder": {
                    "@type": "Person",
                    "name": "Nakita Medeiros",
                    "jobTitle": "Founder & Owner"
                  },
                  "foundingDate": "2010",
                  "email": "handinhandtherapycentre@yahoo.com",
                  "telephone": ["+1-416-930-5293", "+1-905-251-4756"],
                  "address": [
                    {
                      "@type": "PostalAddress",
                      "name": "Concord / Vaughan Centre",
                      "streetAddress": "665 Millway Ave, Unit 38",
                      "addressLocality": "Concord",
                      "addressRegion": "ON",
                      "postalCode": "L4K 3T8",
                      "addressCountry": "CA"
                    },
                    {
                      "@type": "PostalAddress",
                      "name": "Bradford Centre",
                      "streetAddress": "465 Holland St W, Unit 3/4",
                      "addressLocality": "Bradford",
                      "addressRegion": "ON",
                      "postalCode": "L3Z 0A2",
                      "addressCountry": "CA"
                    }
                  ],
                  "sameAs": [
                    "https://www.facebook.com",
                    "https://www.linkedin.com",
                    "https://www.instagram.com"
                  ],
                  "areaServed": [
                    {
                      "@type": "AdministrativeArea",
                      "name": "York Region"
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Simcoe County"
                    },
                    {
                      "@type": "City",
                      "name": "Vaughan"
                    },
                    {
                      "@type": "City",
                      "name": "Concord"
                    },
                    {
                      "@type": "City",
                      "name": "Bradford"
                    }
                  ]
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
