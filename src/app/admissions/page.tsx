import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdultFAQSection from "@/components/AdultFAQSection";
import {
  Calendar,
  PhoneCall,
  Video,
  FileText,
  UserCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  Building2,
  Users,
  Compass,
  Heart,
  Layers,
  Award
} from "lucide-react";

export const metadata = {
  title: "Admissions & Intake Process | Hand In Hand & The Next Level",
  description: "Step-by-step admissions process for Hand In Hand Therapy Centre (Ages 2–18) and The Next Level Adult Day Program (Ages 18+). Contact our Intake & Admissions Team to get started.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        
        {/* Luxury Hero Header */}
        <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>Admissions & Intake Guide</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B3B48] leading-tight">
                Simple, Supportive Admissions Process
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Welcoming children (ages 2–18) and adults (ages 18+) to Hand In Hand Therapy Centre and THE NEXT LEVEL Adult Day Program in Concord / Vaughan & Bradford.
              </p>

              {/* Admissions Contact Banner */}
              <div className="pt-4 inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:px-6 sm:py-4 rounded-3xl border border-slate-200 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#2A5243] text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="block text-xs font-bold text-[#6B8E7B] uppercase tracking-wider">Admissions & Intake</span>
                  <span className="block text-base font-extrabold text-[#1B3B48]">Intake & Admissions Team</span>
                  <span className="block text-xs text-slate-500">Virtual Meetings & Phone Consultations Available</span>
                </div>
                <div className="sm:ml-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F57A54]" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bento Grid Admissions Section */}
        <section className="py-12 sm:py-20 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Asymmetric Admissions Bento
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3B48]">
                How Our Admissions Assessment Works
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From initial virtual meeting with our Program Supervisor to student trial days and group placement.
              </p>
            </div>

            {/* Asymmetric Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

              {/* Bento Card 1: Step 1 (Span 5) */}
              <div className="lg:col-span-5 bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  
                  {/* Card Badge Header */}
                  <div className="flex items-center justify-between">
                    <span className="bg-[#2A5243] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5 text-[#F57A54]" />
                      <span>Step 01</span>
                    </span>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#2A5243] transition-colors">
                      01
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3B48] leading-snug">
                    Virtual Information Meeting or Phone Call
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    The Admissions process starts with a virtual information meeting or phone call with our <strong>Program Supervisor</strong>.
                  </p>

                  {/* Subtext Quote Callout */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1 shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2A5243] block">Our Promise</span>
                    <p className="text-xs text-slate-600 italic">
                      &ldquo;We assume that you’ll be thrilled with what you hear about our program, so…&rdquo;
                    </p>
                  </div>

                  {/* Supervisor Profile Micro-Card */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#E8F0EC]/60 border border-[#2A5243]/20">
                    <div className="w-10 h-10 rounded-full bg-[#1B3B48] text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-extrabold text-[#1B3B48]">Intake & Admissions Team</span>
                      <span className="block text-[10px] text-slate-500 font-medium">Program Supervisor & Intake Lead</span>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/contact?type=virtual-meeting"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md transition-all group-hover:scale-[1.02]"
                  >
                    <Video className="w-4 h-4 text-[#F57A54]" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>

              {/* Bento Card 2: Step 4 (Span 7 - Hero Spotlight) */}
              <div className="lg:col-span-7 bg-[#0F2530] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between group relative">
                
                {/* Background Image Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/adult-community-trips.png"
                    alt="Student Trial Day Visit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-[#0F2530]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#F57A54] text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Step 04 • Final Assessment Step</span>
                    </span>
                    <span className="text-3xl font-black text-white/40">04</span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                      Trial Day Visit & Group Placement
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      Determining the best group fit and level of support needed
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      As a final step in the assessment process, we invite the student to spend the day with one of the groups at <strong>THE NEXT LEVEL</strong> and take part in various activities and community based activities, in order to determine the best group placement and level of support needed.
                    </p>

                    <blockquote className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 italic leading-relaxed">
                      &ldquo;We’ll have a post-visit discussion and, assuming it’s a good fit, we will welcome you to our program!&rdquo;
                    </blockquote>

                    {/* Action Feature Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {[
                        "Center Activities",
                        "Community Outings",
                        "Peer Group Fit",
                        "Support Assessment"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-white/10 px-3 py-2 rounded-xl text-[11px] font-bold text-slate-200 border border-white/10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8E7B] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href="/contact?type=trial-day"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-lg transition-all"
                    >
                      <UserCheck className="w-4 h-4 text-[#2A5243]" />
                      <span>Schedule Student Trial Day</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>

              {/* Bento Card 3: Step 2 (Span 6) */}
              <div className="lg:col-span-6 bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-[#1B3B48] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#6B8E7B]" />
                      <span>Step 02</span>
                    </span>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#1B3B48] transition-colors">
                      02
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3B48] leading-snug">
                    Application Form & Initial Review
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Next we will send you the application form. We’ll review it and can then begin the assessment process.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                    {[
                      "Digital Packet",
                      "Fast Admin Review",
                      "Intake Kickoff"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#1B3B48] shrink-0" />
                        <span className="text-xs font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/contact?type=application-form"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#2A5243]" />
                    <span>Request Application Form</span>
                  </Link>
                </div>
              </div>

              {/* Bento Card 4: Step 3 (Span 6) */}
              <div className="lg:col-span-6 bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-[#4A7C64] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-[#EAA85E]" />
                      <span>Step 03</span>
                    </span>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-[#4A7C64] transition-colors">
                      03
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B3B48] leading-snug">
                    Collaborative Documentation Review
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    The assessment is a collaborative process that has a few components. It starts with information provided by the family through the application form and intake meeting. Next, documentation supplied by the family is reviewed.
                  </p>

                  {/* Document Type Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "Report Cards",
                      "IEP (Individual Education Plan)",
                      "Psycho-Educational Reports",
                      "Family Intake Insights"
                    ].map((doc, dIdx) => (
                      <span key={dIdx} className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] border border-[#2A5243]/20">
                        {doc}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/contact?type=docs"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-md transition-all"
                  >
                    <UserCheck className="w-4 h-4 text-[#F57A54]" />
                    <span>Submit Documentation</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* Year-Round Admission Callout Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0F2530] text-white shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-extrabold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Year-Round Enrolment</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  We Accept Students Any Time Throughout the Year
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  THE NEXT LEVEL and Hand In Hand Therapy Centre happily accept students at any time through the year, space permitting. You do not need to wait for a traditional September start date.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all text-center"
                >
                  <Calendar className="w-4 h-4 text-[#2A5243]" />
                  <span>Get Started</span>
                </Link>
                <a
                  href="tel:4169305293"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center"
                >
                  <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                  <span>Call (416) 930-5293</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 18+ Adult FAQs */}
        <AdultFAQSection />

        {/* Final Admissions CTA Banner */}
        <section className="py-16 sm:py-24 bg-[#2A5243] text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Start Your Admissions Journey Today
            </h2>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Please contact our <strong>Intake & Admissions Team</strong> for more information or to get started with an initial meeting and tour.
            </p>
            
            {/* Admissions CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Video className="w-5 h-5 text-[#2A5243]" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="mailto:info@handinhandtherapy.ca"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#F57A54]" />
                <span>Email Intake Team</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
