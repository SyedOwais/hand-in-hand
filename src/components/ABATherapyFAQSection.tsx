"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Is your ABA program supervised by a BCBA?",
    a: "Yes. Our ABA therapy is supervised by a Board Certified Behavior Analyst, who develops and oversees each child's individualized treatment plan."
  },
  {
    q: "Do you offer ABA therapy at home, or only in the clinic?",
    a: "Both. We offer in-clinic ABA at our Concord and Bradford locations, as well as in-home ABA throughout the areas we serve. Many families use a combination of both."
  },
  {
    q: "What age does ABA therapy start?",
    a: "ABA can begin as early as toddlerhood as part of early intervention programming, and continues to be effective for school-age children. We work with children across this full age range."
  },
  {
    q: "Do I need a diagnosis before starting ABA therapy?",
    a: "An autism diagnosis is typically required for funded ABA programs; our team can discuss your specific situation and next steps during your initial consultation."
  },
  {
    q: "Is ABA therapy covered by insurance or government funding?",
    a: "Coverage varies by provider and by provincial funding programs (such as the Ontario Autism Program - OAP). We provide itemized receipts and assist families in understanding their coverage options."
  },
  {
    q: "How are speech and occupational therapy integrated with ABA?",
    a: "Our multidisciplinary team collaborates under one roof. ABA goals, speech-language therapy, and OT targets are integrated into a unified care plan so all clinicians work together towards shared developmental milestones."
  },
  {
    q: "Do you offer ABA therapy in Bradford as well as Vaughan?",
    a: "Yes - we have a dedicated clinic in Bradford in addition to our Vaughan (Concord) location, with in-home service available in both areas."
  }
];

export default function ABATherapyFAQSection() {
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
            <span>ABA Therapy Services FAQs (Ages 2–18)</span>
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
