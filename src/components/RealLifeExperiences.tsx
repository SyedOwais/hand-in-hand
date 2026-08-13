"use client";

import React from "react";
import Image from "next/image";
import { Compass, Calendar, Users, Sparkles, MapPin } from "lucide-react";

export default function RealLifeExperiences() {
  const experiences = [
    {
      title: "Taking Trips & Outdoor Excursions",
      subtitle: "Getting out and experiencing the community",
      description: "Guided outdoor group trips to local parks, community nature trails, and recreational spaces across York Region & Simcoe County.",
      icon: Compass,
      image: "/images/adult-12.webp",
      tag: "Excursions & Travel",
      objectPos: "object-top",
    },
    {
      title: "Culinary & Meal Prep Workshop",
      subtitle: "Structured kitchen skills & daily meal planning",
      description: "Hands-on kitchen workshops where adult participants practice recipe planning, food safety, and independent cooking.",
      icon: Calendar,
      image: "/images/adult-13.webp",
      tag: "Culinary Life Skills",
      objectPos: "object-top",
    },
    {
      title: "Creative Arts & Expression Studio",
      subtitle: "Hands-on art projects & collaborative design",
      description: "Therapeutic art and craft stations encouraging fine motor precision, personal expression, and group showcase projects.",
      icon: Users,
      image: "/images/adult-14.webp",
      tag: "Creative Studio",
      objectPos: "object-top",
    },
    {
      title: "Building Independence & Practical Life Skills",
      subtitle: "Developing practical tools for daily living",
      description: "Interactive stations for computer literacy, personal budgeting, item organization, and self-advocacy training.",
      icon: Sparkles,
      image: "/images/adult-15.webp",
      tag: "Life & Job Skills",
      objectPos: "object-top",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#EAA85E] text-xs font-black tracking-wider uppercase mb-3 border border-white/10">
            <Compass className="w-4 h-4 text-[#EAA85E]" />
            <span>Real Life, Real Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            It's more than a day program.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
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
                className="bg-white/5 border border-white/10 hover:border-[#EAA85E]/50 rounded-3xl overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#EAA85E] border border-white/10 z-10">
                    {exp.tag}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-[#EAA85E]/20 text-[#EAA85E] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-2xl font-black text-white group-hover:text-[#EAA85E] transition-colors">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-xs font-bold text-[#EAA85E] uppercase tracking-wider mb-4">
                      {exp.subtitle}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed">
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
