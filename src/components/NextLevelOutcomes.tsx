"use client";

import React from "react";
import { Compass, Users, Target, HeartHandshake, ArrowRight, Leaf } from "lucide-react";

export default function NextLevelOutcomes() {
  const outcomes = [
    {
      title: "Independence",
      subtitle: "Practical Life Skills",
      description: "Developing practical skills for everyday life, cooking, transit, budgeting, and routine management.",
      icon: Compass,
      color: "bg-[#2A5243]/15 text-[#2A5243] border-[#2A5243]/30",
    },
    {
      title: "Community",
      subtitle: "Meaningful Connection",
      description: "Building meaningful connections, peer friendships, and actively participating in local York Region community events.",
      icon: Users,
      color: "bg-[#4A7C64]/15 text-[#4A7C64] border-[#4A7C64]/30",
    },
    {
      title: "Purpose",
      subtitle: "Learning & Contribution",
      description: "Creating opportunities for learning, recreational activity, volunteer contribution, and personal growth.",
      icon: Target,
      color: "bg-[#1B3B48]/10 text-[#1B3B48] border-[#1B3B48]/20",
    },
    {
      title: "Advocacy",
      subtitle: "Systems Navigation",
      description: "Helping individuals and families navigate developmental service systems, Passport funding, and community supports.",
      icon: HeartHandshake,
      color: "bg-emerald-500/15 text-emerald-700 border-emerald-300",
    },
  ];

  return (
    <section id="what-next-level-provides" className="py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/20">
            <span>What The Next Level Provides</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4">
            Life doesn't stop at 18.
          </h2>

          <p className="text-[#2A5243] text-xl font-bold">
            Support should evolve too.
          </p>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#4A7C64]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4A7C64] block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-2xl font-black text-[#1B3B48] mb-3 group-hover:text-[#2A5243] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#4A7C64]" />
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
