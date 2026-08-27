import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Compass, Home, Heart, Sparkles, MapPin, PhoneCall, ShieldCheck, FileText, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sitemap | Hand In Hand Therapy Centre & Adult Day Program",
  description: "Complete visual HTML sitemap for Hand In Hand Therapy Centre and The Next Level Adult Day Program across York Region & Simcoe County.",
};

export default function VisualSitemapPage() {
  const sitemapCategories = [
    {
      title: "Main Portals & Choices",
      icon: Home,
      links: [
        { name: "Entry Choice Portal", href: "/", desc: "Main entry gateway for parents & caregivers" },
        { name: "Therapy Centre (Ages 2–18)", href: "/therapy", desc: "Pediatric ABA, Speech, OT & Social Skills" },
        { name: "Adult Day Program (Ages 18+)", href: "/adult-program", desc: "The Next Level independence & community" },
        { name: "Specialized Adult Programs", href: "/adult-programs", desc: "7 interactive Bento Grid program tracks" },
      ]
    },
    {
      title: "Pediatric Therapy Services (Ages 2–18)",
      icon: Heart,
      links: [
        { name: "ABA & IBI Therapy", href: "/therapy#what-we-help-with", desc: "Applied Behavior Analysis & Skill Building" },
        { name: "Speech & Language Pathology", href: "/therapy#what-we-help-with", desc: "Communication & articulation support" },
        { name: "Occupational Therapy (OT)", href: "/therapy#what-we-help-with", desc: "Sensory regulation & fine motor skills" },
        { name: "Social Skills Peer Groups", href: "/therapy#what-we-help-with", desc: "Guided peer interaction & friendship" },
        { name: "Beyond Therapy & Coaching", href: "/therapy#beyond-therapy", desc: "Parent coaching, school advocacy & OAP" },
        { name: "Summer Camp & Life", href: "/therapy#life-beyond-clinic", desc: "Life beyond clinic & community outings" },
      ]
    },
    {
      title: "The Next Level Adult Programs (18+)",
      icon: Sparkles,
      links: [
        { name: "Life Skills Program", href: "/adult-programs#life-skills", desc: "Cooking, budgeting, housekeeping & self-wellness" },
        { name: "Daily Living / Self Help", href: "/adult-programs#daily-living", desc: "Kitchen, room care & washroom routines" },
        { name: "Academic Program", href: "/adult-programs#academic", desc: "Classroom activities, computer lab & journaling" },
        { name: "Recreation & Leisure", href: "/adult-programs#recreation", desc: "Snoezelen room, pet therapy & sensory art" },
        { name: "Physical Fitness Program", href: "/adult-programs#fitness", desc: "Gym sports, swimming, skating & yoga" },
        { name: "Social Skills Program", href: "/adult-programs#social-skills", desc: "Communication, game days & mentorship" },
        { name: "Community Involvement", href: "/adult-programs", desc: "12 real-world community outings & trips" },
        { name: "Passport Funding Guidance", href: "/adult-program#funding", desc: "Transition out of school & funding info" },
      ]
    },
    {
      title: "Organization & Contact",
      icon: PhoneCall,
      links: [
        { name: "About Us (Therapy Centre)", href: "/about", desc: "Our story, mission, values & credentials" },
        { name: "About The Next Level", href: "/about-the-next-level", desc: "Dedicated adult day program story & founder vision" },
        { name: "Contact Us & Tour Booking", href: "/contact", desc: "Inquire, book a tour or call our offices" },
        { name: "Concord / Vaughan Location", href: "/contact", desc: "750 Millway Avenue unit #5, Concord, ON" },
        { name: "Bradford Location", href: "/contact", desc: "465 Holland St W, Unit 3/4, Bradford, ON" },
      ]
    },
    {
      title: "Legal & Data Governance",
      icon: ShieldCheck,
      links: [
        { name: "Privacy Policy", href: "/privacy-policy", desc: "Contact form data collection & protection" },
        { name: "Terms & Conditions", href: "/terms-and-conditions", desc: "Website usage terms & service disclaimers" },
        { name: "XML Sitemap File", href: "/sitemap.xml", desc: "Direct XML feed for search engine crawlers" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-12 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#F57A54]" />
              <span>Full Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B3B48]">
              Website Sitemap
            </h1>
            <p className="text-base text-slate-600 max-w-xl mx-auto">
              Explore a complete overview of all pages, therapy services, adult program tracks, locations, and resources.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-8">
            {sitemapCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-extrabold text-[#1B3B48]">{cat.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="p-4 rounded-2xl bg-[#FBF9F5] hover:bg-[#E8F0EC] border border-slate-200/60 transition-all duration-200 group flex items-start justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <span className="font-extrabold text-sm text-[#1B3B48] group-hover:text-[#2A5243] transition-colors block">
                            {link.name}
                          </span>
                          <span className="text-xs text-slate-500 block leading-normal">
                            {link.desc}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2A5243] shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
