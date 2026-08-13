"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Leaf, Phone, CheckCircle2, MapPin, DollarSign, Compass, ExternalLink } from "lucide-react";

export default function NextLevelHero() {
  const ImageFrame = () => (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div className="relative h-[320px] sm:h-[480px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
        <Image
          src="/images/Adults-Hero.webp"
          alt="Young adults actively engaging in a culinary life skills workshop"
          fill
          className="object-cover object-top sm:object-center"
          priority
        />
        
        {/* Floating Funding Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2 text-[#1B3B48]">
          <DollarSign className="w-3.5 h-3.5 text-[#2A5243]" />
          <span className="text-[11px] sm:text-xs font-black">Passport & DSO Eligible</span>
        </div>

        {/* Floating Bottom Trust Pill */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#E8F0EC] flex items-center gap-3 shadow-lg">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#4A7C64]" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-black text-[#1B3B48] uppercase tracking-wider">
              Empowering Independence
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600">
              Real life skills, peer friendships, and daily purpose for adults 18+
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="pt-44 sm:pt-48 lg:pt-48 pb-12 bg-gradient-to-b from-[#E8F0EC] via-[#F4F9F6] to-[#FBF9F5] text-[#1B3B48] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Text Column & Mobile Image */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 text-[#2A5243] text-xs sm:text-sm font-black tracking-wider uppercase border border-[#4A7C64]/30 shadow-xs">
              <Leaf className="w-4 h-4 text-[#4A7C64]" />
              <span>Adult Day Program • Ages 18+</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B3B48] tracking-tight leading-none mb-3">
                Hand in Hand
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight">
                Together We Can!
              </p>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl">
              A place to build independence, connection, purpose, and community. Support designed specifically for adults transitioning into life beyond high school.
            </p>

            {/* Hero Image - Rendered here on mobile right below header copy */}
            <div className="block lg:hidden my-6">
              <ImageFrame />
            </div>

            {/* 3 Outcome Checkmarks - Placed beneath image on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>Passport & DSO Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>Life & Vocational Workshops</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>Community Outings</span>
              </div>
            </div>

            {/* Dual CTAs - Placed beneath bullets on mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md hover:shadow-lg transition-all"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href="tel:4169305293"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white border-2 border-[#4A7C64]/40 hover:border-[#1B3B48] shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#2A5243]" />
                <span>Call Vaughan: (416)-930-5293</span>
              </a>
            </div>
          </div>

          {/* Right Desktop Imagery Frame */}
          <div className="hidden lg:block lg:col-span-6">
            <ImageFrame />
          </div>

        </div>

        {/* Interactive Google Review & Maps Trust Badge Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="https://maps.app.goo.gl/aYmEFDPCPa3dv5zV8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-5 py-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4A7C64]/40 hover:shadow-md transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[#4285F4] text-base shadow-xs">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-black text-[#1B3B48] ml-1">5.0 Star Rating</span>
                </div>
                <p className="text-[11px] font-semibold text-slate-500">Verified Client Reviews on Google Maps</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 text-xs font-black text-[#1B3B48] group-hover:text-[#4A7C64] transition-colors ml-2">
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          <div className="flex items-center gap-2 text-xs font-extrabold text-[#2A5243]">
            <MapPin className="w-4 h-4 text-[#4A7C64]" />
            <span>Locations in Vaughan (Concord) & Bradford • Serving York Region & Simcoe County</span>
          </div>
        </div>

      </div>
    </section>
  );
}
