import Header from "@/components/Header";
import TherapyCentreView from "@/components/TherapyCentreView";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EntryPortalModal from "@/components/EntryPortalModal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand In Hand | Therapy Centre & Adult Day Program (Vaughan & Bradford)",
  description:
    "Pediatric ABA therapy, speech, OT, social skills (Ages 2–18) and The Next Level Adult Day Program (Ages 18+) in Vaughan & Bradford. OAP approved, DSO & Passport funding guidance.",
  keywords: [
    "ABA Therapy Vaughan",
    "Autism Support Bradford",
    "Pediatric Therapy York Region",
    "Speech Therapy Vaughan",
    "Occupational Therapy Bradford",
    "Adult Day Program Vaughan",
    "Passport Funding Ontario",
    "DSO Adult Services",
  ],
  openGraph: {
    title: "Hand In Hand | Therapy Centre & Adult Day Program (Vaughan & Bradford)",
    description: "Pediatric ABA therapy, speech, OT & 18+ Adult Day Program in Vaughan & Bradford. Together We Can!",
    url: "https://handinhandtherapy.ca/",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/aboutus-main.webp",
        width: 1200,
        height: 630,
        alt: "Hand In Hand Therapy Centre & Adult Day Program",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand In Hand | Therapy Centre & Adult Day Program",
    description: "Pediatric ABA therapy, speech, OT & 18+ Adult Day Program in Vaughan & Bradford.",
    images: ["/images/aboutus-main.webp"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDFB]">
      {/* 1. Primary Sticky Header */}
      <Header />

      {/* 2. Full SEO DOM Content (Therapy Centre Primary Landing Page) */}
      <main className="flex-1">
        <TherapyCentreView />
        <LocationsSection />
        <ContactSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Mandatory First-Visit Choice Overlay Modal */}
      <EntryPortalModal />
    </div>
  );
}
