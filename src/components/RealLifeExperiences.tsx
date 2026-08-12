"use client";

import React from "react";
import Image from "next/image";
import { Compass, Calendar, Users, Sparkles, MapPin } from "lucide-react";

export default function RealLifeExperiences() {
  const experiences = [
    {
      title: "Taking Trips",
      subtitle: "Getting out and experiencing the world",
      description: "Day excursions to local museums, parks, sports venues, and community events across York Region.",
      icon: Compass,
      image: "/images/adult-community-trips.png",
      tag: "Excursions & Travel",
    },
    {
      title: "Day Programming",
      subtitle: "Structured activities around individual goals",
      description: "Tailored daily schedules including culinary workshops, fitness, creative arts, and group projects.",
      icon: Calendar,
      image: "/images/adult-day-program.png",
      tag: "Daily Workshops",
    },
    {
      title: "Community Involvement",
      subtitle: "Participating in meaningful community activities",
      description: "Local volunteering, vocational skills practice, and active participation in local businesses.",
      icon: Users,
      image: "/images/daycare-hero.png",
      tag: "Volunteering & Connection",
    },
    {
      title: "Building Independence",
      subtitle: "Developing practical skills for everyday life",
      description: "Meal preparation, personal budgeting, digital literacy, transit training, and self-advocacy.",
      icon: Sparkles,
      image: "/images/therapy-approach.png",
      tag: "Life Skills Practice",
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
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#EAA85E] border border-white/10">
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
