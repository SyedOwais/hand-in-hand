import Header from "@/components/Header";
import NextLevelHero from "@/components/NextLevelHero";
import NextLevelOutcomes from "@/components/NextLevelOutcomes";
import RealLifeExperiences from "@/components/RealLifeExperiences";
import AdultTransitionSection from "@/components/AdultTransitionSection";
import VisualBreak18Plus from "@/components/VisualBreak18Plus";
import SeeLifeCommunity from "@/components/SeeLifeCommunity";
import AdultFAQSection from "@/components/AdultFAQSection";
import FinalAdultCTA from "@/components/FinalAdultCTA";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Next Level Adult Day Program | Hand In Hand (Ages 18+)",
  description: "A place to build independence, connection, purpose, and community for adults 18+. Structured day programming, life skills, community outings, and DSO / Passport funding guidance in Vaughan & Bradford.",
  openGraph: {
    title: "The Next Level Adult Day Program (Ages 18+) | Hand In Hand",
    description: "Building independence, connection, purpose, and community for adults 18+ in Vaughan & Bradford. DSO & Passport funding accepted.",
    url: "https://handinhandtherapy.ca/adult-program",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/Adults-Hero.webp",
        width: 1200,
        height: 630,
        alt: "The Next Level Adult Day Program Group & Activities",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Next Level Adult Day Program (Ages 18+)",
    description: "Structured day programming, life skills, and community excursions in Vaughan & Bradford.",
    images: ["/images/Adults-Hero.webp"],
  },
};

export default function AdultProgramPage() {
  const adultCommunityItems = [
    { src: "/images/Adults-Hero.webp", title: "Culinary Life Skills", caption: "Independent Cooking & Meal Preparation" },
    { src: "/images/adult-01.webp", title: "Group Social Connections", caption: "Peer Interaction & Circle Time Discussion" },
    { src: "/images/adult-02.webp", title: "Outdoor Community Outings", caption: "Farm Visits & Nature Exploration" },
    { src: "/images/adult-04.webp", title: "Music & Rhythm Expression", caption: "Acoustic Guitar & Interactive Song Sessions" },
    { src: "/images/adult-05.webp", title: "Daily Living & Personal Care", caption: "Hands-on Self-Care & Grooming Routines" },
    { src: "/images/adult-07.webp", title: "Recreation & Bowling Trips", caption: "Community Outings & Splitsville Bowling" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* 08. Path Two: The Next Level Hero */}
        <NextLevelHero />

        {/* 09. What The Next Level Provides (Independence, Community, Purpose, Advocacy) */}
        <NextLevelOutcomes />

        {/* 10. Real Life, Real Experiences (Action-filled photo cards) */}
        <RealLifeExperiences />

        {/* 11. The Transition Section (Life after school, DSO, Passport) */}
        <AdultTransitionSection />

        {/* 12. A Strong "18+" Visual Break */}
        <VisualBreak18Plus />

        {/* 13. Dedicated Adult Gallery Photo Section */}
        <SeeLifeCommunity
          title="See Life at The Next Level"
          subtitle="Empowering adult independence, daily purpose & community connection — Together We Can!"
          tagline="Next Level Adult Moments"
          items={adultCommunityItems}
          instagramUrl="https://www.instagram.com/hand_in_hand_the_next_level/"
          galleryLink="/gallery?track=adult"
          buttonText="Explore Next Level Gallery"
        />

        {/* 14. Adult Program FAQs */}
        <AdultFAQSection />

        {/* 15. Final CTA */}
        <FinalAdultCTA />

        {/* Locations & Contact */}
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
