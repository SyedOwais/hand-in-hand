"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Heart, ArrowRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Do I need a doctor's referral for adult speech therapy?",
    a: "No referral is required to book an initial consultation."
  },
  {
    q: "Do you treat adults recovering from a stroke or brain injury?",
    a: "Yes. Our team supports adults working through aphasia, dysarthria, apraxia, and other communication changes following a stroke or brain injury."
  },
  {
    q: "Can speech therapy help with a lifelong stutter?",
    a: "Yes. Many adults seek support for a stutter that's been present since childhood or one that has resurfaced or intensified - for example, in high-pressure work situations."
  },
  {
    q: "Do you offer accent modification services?",
    a: "Yes, for adults looking to adjust pronunciation and clarity for professional or personal communication goals."
  },
  {
    q: "Is adult speech therapy covered by insurance?",
    a: "Many extended health plans include coverage for speech-language pathology. We recommend checking directly with your provider for your specific plan."
  },
  {
    q: "Do you offer speech therapy for adults in Bradford as well as Vaughan?",
    a: "Yes - we have a dedicated clinic in Bradford in addition to our Vaughan (Concord) location."
  }
];

export default function AdultSpeechFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
            <span>Common Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
            Adult Speech Therapy FAQs
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Answers to common questions about adult speech-language pathology in Vaughan & Bradford.
          </p>
        </div>

        {/* Accordion List (Matching Site-Wide FAQ Accordion Design) */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F5] rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-[#1B3B48] hover:text-[#2A5243] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs flex items-center justify-center shrink-0 font-black">
                      {idx + 1}
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

        {/* LAST CTA: FULL-WIDTH HIGH-CONVERSION PEDIATRIC CROSS-LINK CARD */}
        <div className="pt-6">
          <div className="w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2A5243] via-[#1B3B48] to-[#0F2530] text-white shadow-2xl flex flex-col items-center text-center space-y-6 relative overflow-hidden border border-white/10">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2A5243]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#F57A54] text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/15">
              <Heart className="w-4 h-4 fill-[#F57A54]" />
              <span>Children's Speech Pathology</span>
            </div>

            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Looking for speech therapy for a child instead?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Visit our speech therapy page for information on speech, articulation, late talker intervention, and language support for children.
              </p>
            </div>

            {/* EXPANDED FULL-WIDTH CTA BUTTON */}
            <div className="w-full pt-2">
              <Link
                href="/speech-therapy-vaughan"
                className="w-full sm:max-w-2xl mx-auto flex items-center justify-center gap-3 py-5 px-8 sm:px-12 rounded-full text-sm sm:text-base font-black uppercase tracking-wider text-white bg-[#F57A54] hover:bg-[#e06843] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
              >
                <span>Go to Children's Speech Therapy Page</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
