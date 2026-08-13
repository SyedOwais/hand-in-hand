import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { Leaf } from "lucide-react";

export const metadata = {
  title: "Contact Us | Hand In Hand Therapy Centre & Adult Day Program",
  description: "Get in touch with Hand In Hand Therapy Centre & Adult Day Program in Vaughan & Bradford. Phone: (416)-930-5293 (Vaughan) / (905)-251-4756 (Bradford). Email: handinhandtherapycentre@yahoo.com",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5]">
      <Header />
      
      <main className="flex-1 pt-32 sm:pt-36 lg:pt-36">
        {/* Contact Hero Header */}
        <section className="bg-gradient-to-b from-[#0F2530] via-[#1B3B48] to-[#142E28] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4A7C64]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-black tracking-widest uppercase border border-white/10">
              <Leaf className="w-4 h-4 text-[#4A7C64]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              We're here to support your family.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about pediatric therapy (Ages 2–18) or The Next Level Adult Day Program (Ages 18+)? Reach out to our clinical team today.
            </p>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <ContactSection />

        {/* Office Locations & Maps */}
        <LocationsSection />
      </main>

      <Footer />
    </div>
  );
}
