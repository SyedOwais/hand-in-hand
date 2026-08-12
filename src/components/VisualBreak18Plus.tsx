"use client";

import React from "react";
import { Sparkles, ArrowRight, Leaf } from "lucide-react";

export default function VisualBreak18Plus() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0F2530] via-[#142E28] to-[#0F2530] text-white relative overflow-hidden text-center border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#4A7C64]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#6B8E7B] text-xs sm:text-sm font-black tracking-widest uppercase border border-white/10 shadow-md">
          <Leaf className="w-4 h-4 text-[#4A7C64]" />
          <span>The Next Level Philosophy</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          18+ doesn't mean the support stops.
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6B8E7B] tracking-tight">
          It means the next chapter begins.
        </p>

        <div className="pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#2A5243] hover:bg-[#4A7C64] shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white/20"
          >
            <span>Begin The Next Chapter</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
