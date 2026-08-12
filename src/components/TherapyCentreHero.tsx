"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Heart, CheckCircle2, Leaf, Phone, MapPin, ExternalLink } from "lucide-react";

export default function TherapyCentreHero() {
  const ImageFrame = () => (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      <div className="relative h-[320px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <Image
          src="/images/therapy-hero.png"
          alt="Child actively engaging in learning session with therapist"
          fill
          className="object-cover"
          priority
        />
        
        {/* Floating Rating Badge */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-[11px] sm:text-xs font-black text-[#1B3B48]">5.0 Star Rating</span>
        </div>

        {/* Floating Bottom Trust Pill */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-[#E8F0EC] flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center shrink-0">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#4A7C64] text-[#4A7C64]" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-black text-[#1B3B48] uppercase tracking-wider">
              Child-Centered & Family First
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600">
              Empowering 150+ families in Vaughan, Bradford & York Region
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="therapy-centre-hero" className="pt-36 sm:pt-40 lg:pt-36 pb-12 bg-gradient-to-b from-[#F4F9F6] via-[#FAFDFB] to-[#FAFDFB] relative overflow-hidden">
      {/* Organic background ambient glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E8F0EC] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column Text & Mobile Image */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs sm:text-sm font-extrabold tracking-wider uppercase border border-[#4A7C64]/30 shadow-xs">
              <Leaf className="w-4 h-4 text-[#4A7C64]" />
              <span>Pediatric & Adolescent Support • Ages 2–18</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B3B48] tracking-tight leading-none mb-3">
                Hand in Hand
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-4">
                Together We Can!
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                Support designed around where your child is today and where you want them to go next. Certified ABA, Speech & OT therapy in Vaughan & Bradford.
              </p>
            </div>

            {/* Hero Image - Rendered here on mobile right below header copy */}
            <div className="block lg:hidden my-6">
              <ImageFrame />
            </div>

            {/* 3 Outcome Checkmarks - Placed beneath image on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>OAP Approved</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>1:1 & Group Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1B3B48]">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                <span>Vaughan & Bradford</span>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white border-2 border-[#4A7C64]/40 hover:border-[#1B3B48] shadow-xs hover:shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-[#2A5243]" />
                <span>Call Vaughan: (416)-930-5293</span>
              </a>
            </div>
          </div>

          {/* Right Column Desktop Imagery Frame */}
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
