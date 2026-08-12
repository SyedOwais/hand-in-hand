import Header from "@/components/Header";
import TherapyCentreView from "@/components/TherapyCentreView";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Therapy Centre | Hand In Hand (Ages 2–18)",
  description: "Pediatric & adolescent therapy for children and teens ages 2–18. ABA Therapy, Speech, OT, Social Skills, Life Skills, Parent Coaching, and School Advocacy in Vaughan & Bradford.",
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
