"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Camera, ArrowRight, Users } from "lucide-react";

export default function FinalAdultCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#F4F9F6] to-[#FBF9F5] text-[#1B3B48] relative overflow-hidden border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-16 h-16 rounded-2xl bg-[#2A5243] mx-auto flex items-center justify-center text-white mb-6 shadow-xl border border-white/40">
          <Users className="w-8 h-8" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-4 leading-tight">
          Ready for the next step?
        </h2>

        <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're planning for what's next or looking for support today, we're here to help.
        </p>

        <div className="mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-lg font-black text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-white/10"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-200/80 text-xs sm:text-sm">
          
          <a
            href="tel:4169305293"
            className="p-4 rounded-2xl bg-white hover:bg-[#E8F0EC]/50 border border-slate-200/80 shadow-xs flex flex-col items-center gap-2 transition-colors text-[#1B3B48]"
          >
            <Phone className="w-5 h-5 text-[#2A5243]" />
            <span className="font-bold">Vaughan Phone</span>
            <span className="text-[11px] text-slate-500">416-930-5293</span>
          </a>

          <a
            href="tel:9052514756"
            className="p-4 rounded-2xl bg-white hover:bg-[#E8F0EC]/50 border border-slate-200/80 shadow-xs flex flex-col items-center gap-2 transition-colors text-[#1B3B48]"
          >
            <Phone className="w-5 h-5 text-[#4A7C64]" />
            <span className="font-bold">Bradford Phone</span>
            <span className="text-[11px] text-slate-500">905-251-4756</span>
          </a>

          <a
            href="mailto:handinhandtherapy1@gmail.com"
            className="p-4 rounded-2xl bg-white hover:bg-[#E8F0EC]/50 border border-slate-200/80 shadow-xs flex flex-col items-center gap-2 transition-colors text-[#1B3B48]"
          >
            <Mail className="w-5 h-5 text-[#F57A54]" />
            <span className="font-bold">Email Us</span>
            <span className="text-[11px] text-slate-500 truncate max-w-[160px]">handinhandtherapy1@gmail.com</span>
          </a>

        </div>

      </div>
    </section>
  );
}
