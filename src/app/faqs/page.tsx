"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdultFAQSection from "@/components/AdultFAQSection";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Heart,
  Tag,
  Search,
  Filter,
  ArrowRight,
  PhoneCall,
  Video,
  Compass
} from "lucide-react";

interface FAQ {
  q: string;
  a: string;
  category: "adult" | "pediatric" | "funding";
}

function FAQsContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track") || "all";

  const [activeTab, setActiveTab] = useState<string>(initialTrack);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const trackParam = searchParams.get("track");
    if (trackParam === "adult" || trackParam === "pediatric") {
      setActiveTab(trackParam);
    }
  }, [searchParams]);

  const allFaqs: FAQ[] = [
    // 18+ Adult Day Program FAQs (Provided by Client)
    {
      q: "When Should I Apply?",
      a: "As soon as possible. THE NEXT LEVEL is a small centre with a strong yearly re-enrollment, so there are limited spaces available each year. Many families start to look for a new school in the fall and winter of the year before entry.",
      category: "adult"
    },
    {
      q: "Do You Only Take Students In Certain Years, Or 'Entry Years'?",
      a: "We accept students into our program any time.",
      category: "adult"
    },
    {
      q: "Do You Accept Students Once The School Year Has Begun?",
      a: "Yes, we are happy to accept students during the school year if we have space available. The sooner students come in, the sooner they start learning the functional skills they will use for the rest of their lives.",
      category: "adult"
    },
    {
      q: "How Do You Select Students?",
      a: "Once the assessment process is completed, we consider how well the program can meet the needs of the prospective student. We also look at the fit with other students in our groups and the amount of support a student may require.",
      category: "adult"
    },
    {
      q: "What Kinds Of Students Attend The Next Level?",
      a: "The Next Level is an inclusive environment. Most students have a diagnosis of some kind (High needs individuals, Learning Disability, Down Syndrome, ASD, MID). Some of our students have come from a high school alternative (non-credit) program, and some have even earned their high school diploma. Some have been out of school for several years. Our students have various challenges, but to us, they are individuals who benefit from the unique, individualized programming available at THE NEXT LEVEL.",
      category: "adult"
    },
    {
      q: "Do You Have Parents Who I Can Call For References About THE NEXT LEVEL?",
      a: "Yes, we have current parents who would be more than happy to speak with prospective parents about The Next Level. We’d be pleased to provide contact information to you during our meeting.",
      category: "adult"
    },
    {
      q: "Do You Accept Students Who Require 1:1 Support?",
      a: "We consider 1:1 support for students on a case-by case basis. We have a limited number of spots available for students who require 1:1 support.",
      category: "adult"
    },
    {
      q: "How Much Is The Application Fee?",
      a: "There are no Application Fees.",
      category: "adult"
    },
    {
      q: "Is There An Assessment Fee?",
      a: "Initial assessment fees are $300. This gets waived if you continue services.",
      category: "adult"
    },
    {
      q: "Can I Use The Money That I Have Saved In The RESP (Registered Education Savings Plan) Fund Towards Program Fees?",
      a: "Yes.",
      category: "adult"
    },
    {
      q: "Can I Use Funding Provided By 'Passport Program' Towards Program Fees?",
      a: "Yes.",
      category: "adult"
    },

    // Pediatric Care & OAP Funding FAQs
    {
      q: "What age groups are served at Hand In Hand Therapy Centre?",
      a: "Our pediatric therapy division provides 1-on-1 ABA, Speech-Language Pathology, and Occupational Therapy for children and adolescents ages 2–18.",
      category: "pediatric"
    },
    {
      q: "How do I claim session expenses through Access OAP?",
      a: "Hand In Hand provides itemized receipts containing registered BCBA / therapist numbers, service dates, and CPT codes required for Access OAP core clinical services reimbursement.",
      category: "funding"
    },
    {
      q: "Can parents observe therapy sessions?",
      a: "Yes! Parent involvement and caregiver coaching are central to our therapeutic model. We provide regular parent training meetings and observation windows.",
      category: "pediatric"
    },
    {
      q: "Where are your therapy and day program centers located?",
      a: "We operate two state-of-the-art facilities: Concord / Vaughan (665 Millway Ave, Unit 38) and Bradford (465 Holland St W, Unit 3/4).",
      category: "funding"
    }
  ];

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory =
      activeTab === "all" || faq.category === activeTab;

    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="space-y-12">
      {/* FAQ JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F2530] via-[#1B3B48] to-[#0F2530] text-white p-8 sm:p-14 shadow-2xl border border-[#2A5243]/40 text-center">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-extrabold uppercase tracking-wider text-[#6B8E7B]">
            <HelpCircle className="w-4 h-4 text-[#F57A54]" />
            <span>Help & Knowledge Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Find immediate answers regarding 18+ Adult Day Program admissions, RESP funds, Passport funding, 1:1 support, and pediatric OAP services.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Header */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          {[
            { id: "all", label: "All Questions", icon: Filter },
            { id: "adult", label: "Adult Day Program (18+)", icon: Sparkles },
            { id: "pediatric", label: "Pediatric Care (2–18)", icon: Heart },
            { id: "funding", label: "OAP & Passport Funding", icon: Tag },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1B3B48] text-white shadow-lg scale-105"
                    : "bg-[#FBF9F5] text-slate-600 hover:bg-[#E8F0EC] border border-slate-200/80"
                }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-[#6B8E7B]" : "text-[#2A5243]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FBF9F5] border border-slate-200 text-xs sm:text-sm text-[#1B3B48] placeholder-slate-400 focus:outline-none focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 transition-all shadow-xs"
          />
        </div>

      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#1B3B48] hover:text-[#2A5243] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase shrink-0 ${
                    faq.category === "adult"
                      ? "bg-[#1B3B48] text-white"
                      : faq.category === "pediatric"
                      ? "bg-[#2A5243] text-white"
                      : "bg-[#F57A54] text-white"
                  }`}>
                    {faq.category === "adult" ? "18+ Adult" : faq.category === "pediatric" ? "2–18 Pediatric" : "Funding"}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2A5243] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#F57A54]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-sm text-slate-700 leading-relaxed border-t border-slate-100/80 bg-[#E8F0EC]/30">
                  <p className="pt-4 font-medium">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Intake Call CTA */}
      <div className="bg-[#2A5243] rounded-3xl p-8 sm:p-12 text-center text-white space-y-4 shadow-xl border border-[#2A5243]/50">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Still Have Questions About Admission or Funding?
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
          Schedule a virtual information meeting or tour with our Admissions Team.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all"
          >
            <span>View Admissions Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          >
            <Video className="w-4 h-4 text-[#F57A54]" />
            <span>Get Started</span>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-32 sm:pt-36 lg:pt-36 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-20">
              <span className="text-[#2A5243] font-bold text-lg">Loading FAQs...</span>
            </div>
          }>
            <FAQsContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
