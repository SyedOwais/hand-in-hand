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

export const metadata = {
  title: "The Next Level Adult Day Program | Hand In Hand (Ages 18+)",
  description: "A place to build independence, connection, purpose, and community for adults 18+. Structured day programming, life skills, community outings, and DSO / Passport funding guidance in Vaughan & Bradford.",
};

export default function AdultProgramPage() {
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

        {/* 13. Community / Instagram Photo Section */}
        <SeeLifeCommunity
          title="See Life at The Next Level"
          subtitle="Real people. Real activities. Real community."
          tagline="Real Community Moments"
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
