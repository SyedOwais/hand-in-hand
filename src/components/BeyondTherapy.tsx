"use client";

import React from "react";
import { HeartHandshake, School, DollarSign, Sparkles, ArrowRight, Leaf } from "lucide-react";

export default function BeyondTherapy() {
  const pillars = [
    {
      title: "Parent Coaching",
      subtitle: "Empowering Caregivers at Home",
      description:
        "Helping parents understand, support, and advocate for their child with practical strategies for daily routines, communication, and behaviour.",
      icon: HeartHandshake,
      badge: "Family First",
      color: "bg-[#4A7C64]/20 text-[#6B8E7B]",
    },
    {
      title: "School Advocacy",
      subtitle: "Navigating Educational Systems",
      description:
        "Working directly with families to navigate school systems, IEP meetings, classroom accommodations, and access appropriate educational support.",
      icon: School,
      badge: "Academic Support",
      color: "bg-[#1B3B48]/30 text-white",
    },
    {
      title: "Funding Guidance",
      subtitle: "Unlocking Financial Resources",
      description:
        "Helping families understand and maximize available funding options such as the Ontario Autism Program (OAP), OSSN, and private benefits.",
      icon: DollarSign,
      badge: "Financial Navigation",
      color: "bg-[#EAA85E]/20 text-[#EAA85E]",
    },
  ];

  return (
    <section id="beyond-therapy" className="py-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#F4F9F6] to-[#FAFDFB] text-[#1B3B48] relative overflow-hidden border-y border-slate-200/60">
      {/* Soft background ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-black tracking-wider uppercase mb-4 border border-[#2A5243]/20">
            <Leaf className="w-4 h-4 text-[#4A7C64]" />
            <span>The Hand In Hand Differentiator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4">
            It's not just about therapy.
          </h2>

          <p className="text-[#2A5243] text-xl font-bold tracking-wide">
            It's about helping the whole family move forward.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#4A7C64]/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-[#2A5243]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#1B3B48] mb-1 group-hover:text-[#2A5243] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold text-[#F57A54] uppercase tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#2A5243] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn About {pillar.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
