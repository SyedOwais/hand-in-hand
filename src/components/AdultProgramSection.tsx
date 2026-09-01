"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  Sun,
  HeartHandshake,
  CheckCircle2,
  Compass,
  ArrowRight,
  Sparkles,
  DollarSign,
  Briefcase,
  Layers,
} from "lucide-react";

export default function AdultProgramSection() {
  const pillars = [
    {
      title: "Day Programming",
      description: "Structured daily workshops, recreational fitness, creative arts, and enriching social activities tailored for adults.",
      icon: Sun,
      color: "bg-[#EAA85E]/15 text-[#EAA85E]",
    },
    {
      title: "Community Involvement",
      description: "Local volunteering, vocational skill-building, social outings, and active engagement with York Region businesses.",
      icon: Users,
      color: "bg-[#F57A54]/15 text-[#F57A54]",
    },
    {
      title: "Life Skills & Independence",
      description: "Hands-on practice in cooking, personal budgeting, transit training, digital literacy, and self-advocacy.",
      icon: Layers,
      color: "bg-emerald-500/15 text-emerald-600",
    },
    {
      title: "Advocacy & Empowerment",
      description: "Supporting adult participants in voicing their goals, rights, choices, and personal aspirations with confidence.",
      icon: HeartHandshake,
      color: "bg-blue-500/15 text-blue-600",
    },
    {
      title: "Transition Support",
      description: "Guided support for young adults transitioning out of high school or youth therapy into adult community living.",
      icon: Compass,
      color: "bg-purple-500/15 text-purple-600",
    },
    {
      title: "Funding Guidance",
      description: "Navigating Passport Funding, ODSP, developmental services Ontario (DSO), and financial assistance streams.",
      icon: DollarSign,
      color: "bg-amber-500/15 text-amber-600",
    },
  ];

  return (
    <section id="next-level-adult-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EAA85E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1B3B48]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EAA85E]/20 text-[#EAA85E] text-xs font-black tracking-wider uppercase mb-4 border border-[#EAA85E]/30">
            <span>Ages 18+ • Adult Day Program</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            The Next Level <span className="text-[#EAA85E]">Adult Day Program</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Designed specifically for adults aged 18+ seeking a dynamic, respectful, and empowering space to build friendships, gain vocational experience, and achieve independence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-[#EAA85E]/50 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EAA85E] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#EAA85E] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inquire About Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Passport Funding & Contact Banner */}
        <div className="bg-gradient-to-r from-[#1B3B48] via-[#102A35] to-[#1B3B48] border border-[#EAA85E]/30 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAA85E]/20 text-[#EAA85E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Passport & Out-of-Pocket Funding Welcome</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to take The Next Level for your adult family member?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base">
              Contact our York Region team today to schedule an intake interview and tour our Adult Day facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-slate-950 bg-[#EAA85E] hover:bg-amber-400 shadow-lg transition-all"
            >
              <span>Schedule Intake Tour</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
