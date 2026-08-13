"use client";

import React from "react";
import Image from "next/image";
import { Compass, Calendar, Users, Sparkles, MapPin } from "lucide-react";

export default function RealLifeExperiences() {
  const experiences = [
    {
      title: "Outdoor Excursions & Farm Trips",
      subtitle: "Exploring pumpkin patches, farms & nature trails",
      description: "Guided outdoor group trips to local farms, pumpkin patches, parks, and nature trails across York Region & Simcoe County.",
      icon: Compass,
      image: "/images/adult-02.webp",
      tag: "Excursions & Outings",
      objectPos: "object-top",
    },
    {
      title: "Culinary & Meal Prep Workshop",
      subtitle: "Hands-on kitchen skills & meal preparation",
      description: "Interactive kitchen workshops where participants practice recipe planning, food preparation, baking, and independent cooking.",
      icon: Calendar,
      image: "/images/adult-14.webp",
      tag: "Culinary & Cooking",
      objectPos: "object-top",
    },
    {
      title: "Music, Rhythm & Adaptive Expression",
      subtitle: "Acoustic guitar, rhythm instruments & speech tools",
      description: "Interactive music sessions encouraging rhythm, sensory expression, song participation, and speech-tablet practice.",
      icon: Users,
      image: "/images/adult-04.webp",
      tag: "Music & Expression",
      objectPos: "object-top",
    },
    {
      title: "Puzzles, Games & Cognitive Table Skills",
      subtitle: "Jigsaw puzzles, tabletop games & focus",
      description: "Structured tabletop activities fostering cognitive focus, problem solving, hand-eye coordination, and group game fun.",
      icon: Sparkles,
      image: "/images/adult-12.webp",
      tag: "Games & Puzzles",
      objectPos: "object-top",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFDFB] text-[#1B3B48] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/20">
            <Compass className="w-4 h-4 text-[#4A7C64]" />
            <span>Real Life, Real Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4">
            It's more than a day program.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Visual storytelling of participants actively doing, exploring, and building independence every single day.
          </p>
        </div>

        {/* 4 Photo Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-white via-[#FBF9F5] to-[#E8F0EC]/40 border border-[#2A5243]/15 hover:border-[#2A5243]/40 rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2A5243]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#E8F0EC] to-[#D5E5DC] text-[#2A5243] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#4A7C64]/20 shadow-xs">
                      {exp.tag}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center border border-[#4A7C64]/20">
                      <Icon className="w-4 h-4 text-[#4A7C64]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3B48] mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-xs font-bold text-[#4A7C64] uppercase tracking-wider mb-4">
                    {exp.subtitle}
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-5 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A5243]/20 via-[#4A7C64]/15 to-[#F57A54]/20 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
