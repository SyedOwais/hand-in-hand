import Header from "@/components/Header";
import TherapyCentreView from "@/components/TherapyCentreView";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapy Centre | Hand In Hand (Ages 2–18)",
  description: "Pediatric & adolescent therapy for children and teens ages 2–18. ABA Therapy, Speech, OT, Social Skills, Life Skills, Parent Coaching, and School Advocacy in Vaughan & Bradford.",
  openGraph: {
    title: "Pediatric Therapy Centre (Ages 2–18) | Hand In Hand",
    description: "ABA Therapy, Speech-Language Pathology, Occupational Therapy, and Social Skills in Vaughan & Bradford. OAP approved.",
    url: "https://handinhandtherapy.ca/therapy",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/therapy-hero.webp",
        width: 1200,
        height: 630,
        alt: "Hand In Hand Pediatric Therapy Centre",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Therapy Centre (Ages 2–18) | Hand In Hand",
    description: "ABA, Speech, OT & Social Skills programs in Vaughan & Bradford.",
    images: ["/images/therapy-hero.webp"],
  },
};

export default function TherapyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Path One: Therapy Centre (Complete 7-Section Experience) */}
        <TherapyCentreView />
        
        {/* Locations & Contact */}
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
