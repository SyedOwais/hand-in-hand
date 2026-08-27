"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "At what age should my child start speech therapy?",
    a: "Earlier is generally better. If your toddler isn't using words by 18 months, or their speech is hard for family members to understand by age 3, it's worth an assessment. Early intervention tends to produce stronger, faster results."
  },
  {
    q: "Do you work with adults, or only children?",
    a: "Our primary focus is child and youth speech and language therapy, though we assess on a case-by-case basis. Contact us to discuss your specific situation."
  },
  {
    q: "Do I need a doctor's referral?",
    a: "No referral is required to book an initial consultation."
  },
  {
    q: "Is speech therapy covered by insurance?",
    a: "Many extended health plans cover speech-language pathology services. We recommend checking directly with your provider for your specific coverage."
  }
];

export default function SpeechTherapyFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
            <HelpCircle className="w-4 h-4 text-[#F57A54]" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
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

      </div>
    </section>
  );
}
