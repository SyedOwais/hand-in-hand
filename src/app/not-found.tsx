import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Compass,
  Home,
  Heart,
  Sparkles,
  ArrowRight,
  PhoneCall,
  HelpCircle,
  UserCheck
} from "lucide-react";

export const metadata = {
  title: "404 Page Not Found | Hand In Hand Therapy Centre & Adult Day Program",
  description: "The page you are looking for cannot be found. Explore our ABA therapy services, adult day program, admissions process, and FAQs.",
};

export default function NotFound() {
  const quickLinks = [
    { title: "Home Choice Portal", href: "/", icon: Home, desc: "Return to main program selection" },
    { title: "ABA Therapy (2–18)", href: "/therapy", icon: Heart, desc: "ABA, Speech, OT & Social Skills" },
    { title: "Adult Day Program (18+)", href: "/adult-program", icon: Sparkles, desc: "Independent living & life skills" },
    { title: "Admissions & Intake", href: "/admissions", icon: UserCheck, desc: "4-step process & Nakita Medeiros" },
    { title: "Frequently Asked Questions", href: "/faqs", icon: HelpCircle, desc: "RESP, Passport & OAP funding" },
    { title: "Contact Us", href: "/contact", icon: PhoneCall, desc: "Book a tour or get in touch" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Badge & Number */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#F57A54]" />
              <span>Error 404 — Page Not Found</span>
            </div>

            <h1 className="text-6xl sm:text-8xl font-black text-[#1B3B48] tracking-tight">
              404
            </h1>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3B48]">
              Let&apos;s Guide You Back Hand In Hand
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              The page you are looking for might have been moved, renamed, or is temporarily unavailable. Please choose a destination below:
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {quickLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#2A5243]/40 transition-all duration-300 text-left group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center group-hover:bg-[#2A5243] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {link.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#2A5243] group-hover:translate-x-1 transition-transform">
                    <span>Visit page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Direct CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              <span>Return to Home Portal</span>
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 border border-slate-200 shadow-md transition-all duration-300"
            >
              <UserCheck className="w-5 h-5 text-[#2A5243]" />
              <span>Admissions Process</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
