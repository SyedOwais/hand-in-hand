"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Sparkles, Heart, ShieldCheck, Sun } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-44 sm:pt-48 lg:pt-44 pb-12 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner tagline header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-mint text-brand-navy text-xs sm:text-sm font-bold tracking-wide mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-coral" />
            <span>York Region's Trusted Therapy & Day Care Centre</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-navy leading-none tracking-tight mb-3">
            Hand in Hand
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-coral tracking-tight mb-4">
            Together We Can!
          </p>
          <p className="text-base sm:text-lg text-slate-700 max-w-xl mx-auto">
            One coordinated team, multiple areas of expertise, & a plan made specifically for your family.
          </p>
        </div>

        {/* Split Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch relative">
          
          {/* Center Floating Connecting Badge */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white border-2 border-brand-cream rounded-full px-5 py-2.5 shadow-xl items-center gap-2">
            <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
            <span className="text-xs font-extrabold tracking-wider text-brand-navy uppercase">
              Hand In Hand • Care & Growth
            </span>
          </div>

          {/* Left Hero Card: Autism & Child Therapy */}
          <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Soft decorative background gradient */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-coral/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-coral" />
                <span>ABA & Behavioural Support</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight mb-4 text-white">
                Helping every child <br />
                <span className="text-brand-coral">connect, grow & thrive.</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                Individualized ABA, IBI, speech and behavioural support built around your child’s unique strengths.
              </p>
            </div>

            <div className="space-y-6">
              {/* Therapy Image Arch */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md border border-white/10 group-hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/images/therapy-hero.webp"
                  alt="Therapist guiding a child in learning activities"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.2 rounded-full text-sm font-bold bg-brand-coral text-white hover:bg-brand-coral-hover shadow-md hover:shadow-lg transition-all"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Card: Day Care & Early Learning */}
          <div className="bg-brand-cream text-brand-navy rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50">
            {/* Soft decorative background gradient */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-amber/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/20 text-brand-navy text-xs font-semibold tracking-wider uppercase mb-6">
                <Sun className="w-3.5 h-3.5 text-brand-amber" />
                <span>Daycare & Social Environment</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight mb-4 text-brand-navy">
                A joyful place to <br />
                <span className="text-brand-amber">learn, play & belong.</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                A warm, structured environment where children build confidence, friendships, and everyday life skills.
              </p>
            </div>

            <div className="space-y-6">
              {/* Daycare Image Arch */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md border border-amber-200/60 group-hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/images/daycare-hero.png"
                  alt="Children happily playing together in daycare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.2 rounded-full text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-dark shadow-md hover:shadow-lg transition-all"
                >
                  <span>Schedule a Centre Tour</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#programs"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-brand-coral transition-colors py-2 px-3"
                >
                  <span>Explore Our Programs</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
