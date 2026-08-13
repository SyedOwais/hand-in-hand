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
  Award,
  Smile,
  Check
} from "lucide-react";

export const metadata = {
  title: "Admissions & Intake Process | Hand In Hand & The Next Level",
  description: "Step-by-step admissions process for Hand In Hand Therapy Centre (Ages 2–18) and The Next Level Adult Day Program (Ages 18+). Contact our Intake & Admissions Team to get started.",
};

export default function AdmissionsPage() {
  const admissionSteps = [
    {
      stepNumber: "01",
      title: "Virtual Meeting or Phone Consultation",
      tag: "Initial Contact",
      badgeBg: "bg-[#F57A54] text-white",
      icon: Video,
      description: "The admissions journey begins with a complimentary virtual information meeting or phone consultation with our Program Supervisor to discuss your family's needs and goals.",
      subText: "We take the time to understand your child or adult's unique strengths, challenges, and support preferences.",
      highlights: ["Free Initial Consultation", "Virtual & Phone Options", "Direct Program Lead Access"],
      ctaText: "Book Virtual Meeting",
      ctaHref: "/contact?type=virtual-meeting",
      ctaIcon: Video
    },
    {
      stepNumber: "02",
      title: "Application Form & Initial Intake",
      tag: "Intake Packet",
      badgeBg: "bg-[#2A5243] text-white",
      icon: FileText,
      description: "Upon request, we provide our digital intake application form. Once submitted, our admissions team reviews the profile to initiate the clinical assessment process.",
      subText: "Quick digital form completion designed to gather medical, behavioral, and communication history.",
      highlights: ["Digital Application", "Fast Admin Turnaround", "Family-Centered Profile"],
      ctaText: "Request Application Packet",
      ctaHref: "/contact?type=application-form",
      ctaIcon: FileText
    },
    {
      stepNumber: "03",
      title: "Collaborative Documentation Review",
      tag: "Clinical Assessment",
      badgeBg: "bg-[#1B3B48] text-white",
      icon: UserCheck,
      description: "Our multidisciplinary clinical team collaboratively reviews previous assessments, IEPs, and medical notes provided by the family to construct a tailored care profile.",
      subText: "Ensures seamless continuity of care between school systems, past therapy centers, and our programs.",
      highlights: ["IEP & Psycho-Ed Review", "Speech & OT Notes", "Multidisciplinary Evaluation"],
      ctaText: "Submit Documentation",
      ctaHref: "/contact?type=docs",
      ctaIcon: UserCheck
    }
  ];

  const parentAssurances = [
    {
      title: "Zero-Pressure Atmosphere",
      desc: "Our intake process is designed to be welcoming, transparent, and supportive for every family.",
      icon: Smile,
      color: "text-[#F57A54]",
      bg: "bg-[#F57A54]/10"
    },
    {
      title: "Individualized Matching",
      desc: "Clients are thoughtfully paired with peer groups that align with their interests, social style, and support needs.",
      icon: Users,
      color: "text-[#2A5243]",
      bg: "bg-[#2A5243]/10"
    },
    {
      title: "Open-Door Transparency",
      desc: "Parents receive direct communication and are invited to observe sessions and progress updates anytime.",
      icon: ShieldCheck,
      color: "text-[#1B3B48]",
      bg: "bg-[#1B3B48]/10"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-36 sm:pt-40">
        
        {/* Luxury Hero Header */}
        <section className="relative py-14 sm:py-24 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          
          {/* Subtle Ambient Background Decorative Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>Admissions & Intake Guide</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-none">
                Simple, Supportive Admissions Process
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
                Welcoming children (ages 2–18) to Hand In Hand Therapy Centre and adults (ages 18+) to THE NEXT LEVEL Adult Day Program across Vaughan & Bradford.
              </p>

              {/* Admissions Contact Quick Bar */}
              <div className="pt-4 max-w-2xl mx-auto">
                <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/90 shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-4 items-center text-left">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#2A5243] text-white font-extrabold flex items-center justify-center shadow-md shrink-0">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#6B8E7B] uppercase tracking-wider">Direct Intake Access</span>
                      <span className="block text-sm font-extrabold text-[#1B3B48]">Program Admissions Lead</span>
                      <span className="block text-[11px] text-slate-500 font-medium">Virtual Meetings & Centre Tours</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md transition-all text-center"
                    >
                      <Video className="w-4 h-4 text-[#F57A54]" />
                      <span>Get Started</span>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Step-by-Step Chronological Admissions Roadmap */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <Layers className="w-4 h-4 text-[#F57A54]" />
                <span>Chronological 4-Step Pathway</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                How Our Admissions Pathway Works
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                A transparent, stress-free journey from initial virtual consultation to trial day guest visits and group placement.
              </p>
            </div>

            {/* 3 Chronological Cards + 1 Hero Feature Card */}
            <div className="space-y-8">
              
              {/* Cards Grid (Steps 01, 02, 03) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                {admissionSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#2A5243]/40 transition-all duration-500 flex flex-col justify-between space-y-6 transform hover:-translate-y-1"
                  >
                    <div className="space-y-5">
                      
                      {/* Step Header */}
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm ${step.badgeBg}`}>
                          Step {step.stepNumber}
                        </span>
                        <span className="text-3xl font-black text-slate-300 group-hover:text-[#2A5243] transition-colors">
                          {step.stepNumber}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-extrabold text-[#1B3B48] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Highlight Chips */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/60">
                        {step.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                            <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-4 border-t border-slate-200/60">
                      <Link
                        href={step.ctaHref}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md transition-all group-hover:scale-[1.02]"
                      >
                        <step.ctaIcon className="w-4 h-4 text-[#F57A54]" />
                        <span>{step.ctaText}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero Feature Spotlight: Step 04 Trial Day Visit */}
              <div className="relative rounded-[40px] bg-gradient-to-r from-[#0F2530] via-[#1B3B48] to-[#0F2530] text-white p-6 sm:p-12 lg:p-14 shadow-2xl border border-[#2A5243]/50 overflow-hidden group">
                
                {/* Background Ambient Lights */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7C64]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Visual Media Card */}
                  <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                    <Image
                      src="/images/adult-community-trips.png"
                      alt="Student Trial Day Visit at Hand in Hand"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-[#0F2530]/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#F57A54] text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md inline-flex items-center gap-1.5">
                        <Compass className="w-4 h-4" />
                        <span>Step 04 • Final Assessment</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                      <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Full Day Guest Experience</span>
                      <p className="text-xs text-slate-100 mt-0.5 font-medium">Participate in center activities and community outings.</p>
                    </div>
                  </div>

                  {/* Right Column: Step 04 Content */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    <div className="space-y-3">
                      <span className="text-3xl font-black text-[#EAA85E]">Step 04</span>
                      <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                        Student Trial Day Visit & Group Placement
                      </h3>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                        As the final step in our assessment process, we invite the student to spend a full day with one of our groups at Hand in Hand or THE NEXT LEVEL, taking part in structured routines and community outings.
                      </p>
                    </div>

                    <blockquote className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;After the trial day, we host a post-visit review with your family. Assuming a great peer fit, we officially welcome you to our program!&rdquo;
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

                    <div className="pt-2">
                      <Link
                        href="/contact?type=trial-day"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-black text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105"
                      >
                        <UserCheck className="w-4 h-4 text-[#2A5243]" />
                        <span>Schedule Student Trial Day</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Parent Assurances Reassurance Grid */}
            <div className="pt-8 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#2A5243]">Family Peace of Mind</span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48]">What Families Experience During Admissions</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {parentAssurances.map((item, pIdx) => (
                  <div key={pIdx} className="bg-[#FBF9F5] p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
                    <div className={`w-10 h-10 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-extrabold text-[#1B3B48]">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Year-Round Admission Callout Canvas */}
            <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-r from-[#2A5243] via-[#1B3B48] to-[#2A5243] text-white shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-black uppercase tracking-wider border border-white/15">
                  <Clock className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Year-Round Open Enrolment</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  We Accept Students Any Time Throughout the Year
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Hand In Hand Therapy Centre and THE NEXT LEVEL happily accept new students at any point during the year, space permitting. You never have to wait for a traditional September start date.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-black text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl transition-all text-center"
                >
                  <Calendar className="w-4 h-4 text-[#2A5243]" />
                  <span>Book Virtual Tour</span>
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
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#1B3B48] to-[#0F2530] text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Start Your Admissions Journey Today
            </h2>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
              Please contact our <strong>Intake & Admissions Team</strong> for more information or to get started with an initial consultation and tour.
            </p>
            
            {/* Admissions CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-black text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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

