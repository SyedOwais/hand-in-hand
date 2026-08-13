"use client";

import React from "react";
import { Sparkles, ArrowRight, Leaf } from "lucide-react";

export default function VisualBreak18Plus() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#E8F0EC] via-[#F4F9F6] to-[#E8F0EC] text-[#1B3B48] relative overflow-hidden text-center border-y border-[#4A7C64]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2A5243] text-xs sm:text-sm font-black tracking-widest uppercase border border-[#4A7C64]/30 shadow-xs">
          <Leaf className="w-4 h-4 text-[#4A7C64]" />
          <span>The Next Level Philosophy</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#1B3B48] leading-tight">
          18+ doesn't mean the support stops.
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F57A54] tracking-tight">
          It means the next chapter begins.
        </p>

        <div className="pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 border border-white/10"
          >
            <span>Begin The Next Chapter</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
