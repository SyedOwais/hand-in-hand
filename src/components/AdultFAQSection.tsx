"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, CheckCircle2, DollarSign } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function AdultFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "When Should I Apply?",
      a: "As soon as possible. THE NEXT LEVEL is a small centre with a strong yearly re-enrollment, so there are limited spaces available each year. Many families start to look for a new school in the fall and winter of the year before entry."
    },
    {
      q: "Do You Only Take Students In Certain Years, Or 'Entry Years'?",
      a: "We accept students into our program any time."
    },
    {
      q: "Do You Accept Students Once The School Year Has Begun?",
      a: "Yes, we are happy to accept students during the school year if we have space available. The sooner students come in, the sooner they start learning the functional skills they will use for the rest of their lives."
    },
    {
      q: "How Do You Select Students?",
      a: "Once the assessment process is completed, we consider how well the program can meet the needs of the prospective student. We also look at the fit with other students in our groups and the amount of support a student may require."
    },
    {
      q: "What Kinds Of Students Attend The Next Level?",
      a: "The Next Level is an inclusive environment. Most students have a diagnosis of some kind (High needs individuals, Learning Disability, Down Syndrome, ASD, MID). Some of our students have come from a high school alternative (non-credit) program, and some have even earned their high school diploma. Some have been out of school for several years. Our students have various challenges, but to us, they are individuals who benefit from the unique, individualized programming available at THE NEXT LEVEL."
    },
    {
      q: "Do You Have Parents Who I Can Call For References About THE NEXT LEVEL?",
      a: "Yes, we have current parents who would be more than happy to speak with prospective parents about The Next Level. We’d be pleased to provide contact information to you during our meeting."
    },
    {
      q: "What Are Your Support Ratios?",
      a: "Our support ratios vary depending on the individual needs of each participant. We maintain flexible ratios—ranging from small group guidance to 1:1 support—to ensure every individual gets the exact level of support required to thrive."
    },
    {
      q: "Do You Accept Students Who Require 1:1 Support?",
      a: "Yes, we consider 1:1 support for participants on a case-by-case basis based on individual needs and goals."
    },
    {
      q: "How Much Is The Application Fee?",
      a: "There are no Application Fees."
    },
    {
      q: "Is There An Assessment Fee?",
      a: "Initial assessment fees are $300. This gets waived if you continue services."
    },
    {
      q: "Can I Use The Money That I Have Saved In The RESP (Registered Education Savings Plan) Fund Towards Program Fees?",
      a: "Yes."
    },
    {
      q: "Can I Use Funding Provided By 'Passport Program' Towards Program Fees?",
      a: "Yes."
    }
  ];

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs-18" className="scroll-mt-40 sm:scroll-mt-48 py-16 sm:py-24 bg-[#FBF9F5] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#F57A54]" />
            <span>Adult Day Program FAQs (18+)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48]">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about enrolment, admissions, funding, and 1:1 support at THE NEXT LEVEL.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-300"
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
