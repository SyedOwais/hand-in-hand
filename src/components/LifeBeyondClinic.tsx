"use client";

import React from "react";
import Image from "next/image";
import { Sun, Calendar, Heart, Compass, Sparkles, Leaf } from "lucide-react";

export default function LifeBeyondClinic() {
  const camps = [
    { title: "Winter Holiday Camp", period: "December - January", desc: "Cozy indoor crafts, festive social groups, and holiday enrichment activities." },
    { title: "March Break Camp", period: "Spring Break", desc: "Action-packed week of collaborative team games, outdoor exploration, and life skills." },
    { title: "Summer Camp", period: "July - August", desc: "Full-day outdoor games, splash parks, field trips, and friendship building." },
    { title: "Social & Community Outings", period: "Year-Round", desc: "Guided real-world outings to parks, local markets, and community events." },
  ];

  return (
    <section id="life-beyond-clinic" className="py-20 bg-[#FAFDFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Storytelling Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/20">
            <Leaf className="w-4 h-4 text-[#4A7C64]" />
            <span>Life Beyond The Clinic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4">
            Childhood isn't lived inside a therapy room.
          </h2>

          <p className="text-[#4A7C64] text-xl font-bold">
            We don't just help children develop skills. We help them experience life.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          
          {/* Left Feature Image */}
          <div className="lg:col-span-6">
            <div className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/camp-community.png"
                alt="Children happily engaging in summer camp outdoor activities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#2A5243] text-white font-black text-xs uppercase tracking-wider mb-2 border border-white/20">
                  Camp & Community Experience
                </span>
                <h3 className="text-2xl font-black">Building Lifelong Friendships</h3>
                <p className="text-xs text-slate-200 mt-1">Real-world social connection beyond structured clinical hours.</p>
              </div>
            </div>
          </div>

          {/* Right Camp & Outings Grid */}
          <div className="lg:col-span-6 space-y-4">
            {camps.map((camp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#4A7C64]/40 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5 text-[#4A7C64]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-[#1B3B48] text-base">{camp.title}</h4>
                    <span className="text-[11px] font-bold text-[#4A7C64] uppercase tracking-wider">
                      {camp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{camp.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
