"use client";

import React from "react";
import { MessageCircle, Compass, Map, CheckCircle2, ArrowRight } from "lucide-react";

export default function ParentJourney() {
  const steps = [
    {
      step: "01",
      title: "Talk to us",
      description: "Tell us about your child and what you're looking for.",
      icon: MessageCircle,
    },
    {
      step: "02",
      title: "Understand your options",
      description: "We'll help you understand which services and supports may be appropriate.",
      icon: Compass,
    },
    {
      step: "03",
      title: "Build a plan",
      description: "Together, we'll identify the right next steps.",
      icon: Map,
    },
    {
      step: "04",
      title: "Move forward",
      description: "Your child gets support. Your family gets guidance.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-extrabold text-xs uppercase tracking-widest text-[#F57A54] mb-2">
            Clear & Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight mb-4">
            Not sure where to start?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We break down the initial assessment and care process into four clear, stress-free steps.
          </p>
        </div>

        {/* 4 Steps Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#F57A54]">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#EFF7F5] text-[#1B3B48] flex items-center justify-center group-hover:bg-[#F57A54] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1B3B48] mb-3 group-hover:text-[#F57A54] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#F57A54] hover:bg-[#E3643E] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>Let's Talk About Your Child</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
