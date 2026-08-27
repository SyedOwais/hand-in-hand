import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hand In Hand Therapy Centre & Adult Program",
  description:
    "Contact Hand In Hand in Vaughan (647-280-9952) & Bradford (905-251-4756). Schedule a tour or consultation for ABA therapy & adult day programming today!",
  openGraph: {
    title: "Contact Us | Hand In Hand Therapy Centre & Adult Program",
    description: "Contact Hand In Hand in Vaughan (647-280-9952) & Bradford (905-251-4756). Schedule a tour or consultation today.",
    url: "https://handinhandtherapy.ca/contact",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/aboutus-main.webp",
        width: 1200,
        height: 630,
        alt: "Contact Hand In Hand Therapy Centre & Adult Day Program",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Hand In Hand Therapy Centre & Adult Program",
    description: "Contact Hand In Hand in Vaughan (647-280-9952) & Bradford (905-251-4756).",
    images: ["/images/aboutus-main.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5]">
      <Header />

      <main className="flex-1 pt-44 sm:pt-48 lg:pt-38">
        {/* Contact Hero Header */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold tracking-wider uppercase border border-[#2A5243]/20 shadow-xs">
              <Leaf className="w-4 h-4 text-[#F57A54]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#1B3B48] leading-tight">
              We're here to support your family.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Have questions about therapy (Ages 2–18) or The Next Level Adult Day Program (Ages 18+)? Reach out to our clinical team today.
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
