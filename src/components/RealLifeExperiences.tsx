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
                className="bg-white border border-slate-200/80 hover:border-[#4A7C64]/40 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Photo Header */}
                <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${exp.objectPos || "object-top"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold text-[#2A5243] border border-slate-200 z-10 shadow-xs">
                    {exp.tag}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#4A7C64]" />
                      </div>
                      <h3 className="text-2xl font-black text-[#1B3B48] group-hover:text-[#2A5243] transition-colors">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-xs font-bold text-[#4A7C64] uppercase tracking-wider mb-4">
                      {exp.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
