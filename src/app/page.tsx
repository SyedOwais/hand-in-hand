import Header from "@/components/Header";
import TherapyCentreView from "@/components/TherapyCentreView";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EntryPortalModal from "@/components/EntryPortalModal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Center for Teens & Adults - Hand In Hand",
  description:
    "Top-rated ABA therapy, speech, OT & adult day programming in Vaughan, Concord & Bradford, ON. Empowering teens & adults. OAP & Passport funding.",
  keywords: [
    "ABA Therapy Vaughan",
    "Autism Support Bradford",
    "Therapy Centre Vaughan",
    "Speech Therapy Vaughan",
    "Occupational Therapy Bradford",
    "Adult Day Program Vaughan",
    "Passport Funding Ontario",
    "OAP Approved Vaughan",
  ],
  openGraph: {
    title: "Therapy Center for Teens & Adults - Hand In Hand",
    description: "Top-rated ABA therapy, speech, OT & adult day programming in Vaughan, Concord & Bradford, ON. Empowering teens & adults.",
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
    title: "Therapy Center for Teens & Adults - Hand In Hand",
    description: "Top-rated ABA therapy, speech, OT & adult day programming in Vaughan, Concord & Bradford, ON.",
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
