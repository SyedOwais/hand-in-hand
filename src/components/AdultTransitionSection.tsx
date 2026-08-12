"use client";

import React from "react";
import { Compass, DollarSign, HeartHandshake, ArrowRight, Leaf } from "lucide-react";

export default function AdultTransitionSection() {
  const pillars = [
    {
      title: "Transitioning Out of School",
      subtitle: "Preparing for the Next Stage",
      description: "Helping individuals and families prepare for life after high school graduation, establishing new daily routines, social circles, and personal goals.",
      icon: Compass,
      color: "bg-[#2A5243]/15 text-[#2A5243]",
    },
    {
      title: "Funding Guidance",
      subtitle: "Navigating DSO & Passport",
      description: "Helping families understand and access provincial funding streams including Developmental Services Ontario (DSO) and Passport Funding.",
      icon: DollarSign,
      color: "bg-[#4A7C64]/15 text-[#4A7C64]",
    },
    {
      title: "Advocacy & Support",
      subtitle: "Navigating Systems Together",
      description: "Helping families navigate available community supports, adult services, and legal/financial planning with confidence.",
      icon: HeartHandshake,
      color: "bg-[#1B3B48]/10 text-[#1B3B48]",
    },
  ];

  return (
    <section id="funding" className="py-20 bg-[#FBF9F5] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/20">
            <Leaf className="w-3.5 h-3.5 text-[#4A7C64]" />
            <span>The Transition Navigation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4">
            What happens after school?
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-2">
            For many families, leaving school creates a completely new set of questions. <span className="font-bold text-[#1B3B48]">What's next?</span>
          </p>

          <p className="text-[#2A5243] text-lg font-bold">
            The Next Level can help families navigate that transition.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3B48] mb-1 group-hover:text-[#2A5243] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs font-bold text-[#4A7C64] uppercase tracking-wider mb-4">
                    {p.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors uppercase tracking-wider"
                  >
                    <span>Inquire About {p.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#4A7C64]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#2A5243] hover:bg-[#4A7C64] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-white/10"
          >
            <span>Let's Talk About What's Next</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
