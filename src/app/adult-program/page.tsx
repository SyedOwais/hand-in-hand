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
  const adultCommunityItems = [
    { src: "/images/Adults-Hero.webp", title: "Culinary Life Skills", caption: "Independent Cooking & Recipe Planning" },
    { src: "/images/adult-01.webp", title: "Daily Life Skills Routine", caption: "Schedule Planning & Time Management" },
    { src: "/images/adult-02.webp", title: "Pre-Vocational Workshop", caption: "Inventory Sorting & Task Organization" },
    { src: "/images/adult-04.webp", title: "Community Outings", caption: "Budgeting & Store Navigation" },
    { src: "/images/adult-05.webp", title: "Creative Art Studio", caption: "Self-Expression & Fine Motor Focus" },
    { src: "/images/adult-06.webp", title: "Digital Literacy Lab", caption: "Computer Skills & Online Safety" },
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
