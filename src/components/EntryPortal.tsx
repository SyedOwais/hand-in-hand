"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  ShieldCheck,
  DoorOpen,
  Leaf,
} from "lucide-react";

export default function EntryPortal() {
  const [activeHover, setActiveHover] = useState<"therapy" | "adult" | null>(null);

  return (
    <section className="h-screen max-h-screen w-full bg-gradient-to-br from-[#FBF9F5] via-[#E8F0EC]/85 to-[#F4F9F6] text-[#1B3B48] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      {/* Organic background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A7C64]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F57A54]/12 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-end z-10">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#2A5243] text-xs font-bold shadow-xs border border-[#4A7C64]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#4A7C64]" />
          <span>Vaughan & Bradford, ON</span>
        </div>
      </div>

      {/* Main Choice Section */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10 py-2">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 flex flex-col items-center">
          {/* Centered Logo */}
          <div className="bg-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl shadow-lg border border-slate-200/80 mb-4 inline-flex items-center justify-center">
            <div className="relative h-14 w-60 sm:h-18 sm:w-80">
              <Image
                src="/images/hand-in-hand-v2.png"
                alt="Hand In Hand Therapy Centre & Adult Day Program"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-4">
            Together We Can!
          </p>

          <p className="text-[#1B3B48]/80 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-4 font-medium">
            Whether you're looking for support for a child or exploring opportunities for an adult, you're in the right place.
          </p>

          <h2 className="text-lg sm:text-2xl font-black text-[#1B3B48] tracking-tight">
            Who are you looking for support for?
          </h2>
        </div>

        {/* Two Door Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 01: Therapy Centre Door */}
          <Link
            href="/therapy"
            onMouseEnter={() => setActiveHover("therapy")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-white rounded-t-[44px] rounded-b-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
              activeHover === "therapy"
                ? "border-[#F57A54] scale-[1.02] shadow-[#F57A54]/20"
                : "border-slate-200/80 hover:border-[#F57A54]/60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ages 2–18
                </span>
                
                <div className="w-9 h-9 rounded-2xl bg-[#F57A54]/10 text-[#F57A54] flex items-center justify-center group-hover:bg-[#F57A54] group-hover:text-white transition-colors">
                  <DoorOpen className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight mb-1">
                Therapy Centre
              </h2>
              
              <p className="text-slate-600 font-semibold text-xs sm:text-sm mb-4">
                For children & teens ages 2–18
              </p>

              {/* Bullet List */}
              <ul className="space-y-2 mb-6 text-[#1B3B48] text-xs sm:text-sm">
                {[
                  "ABA Therapy",
                  "Speech Therapy",
                  "Occupational Therapy",
                  "Social Skills",
                  "Life Skills",
                  "Parent Coaching",
                  "Advocacy & School Support",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm text-white bg-[#F57A54] group-hover:bg-[#E3643E] shadow-md transition-all">
                <span>Explore Therapy Centre</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card 02: The Next Level Door */}
          <Link
            href="/adult-program"
            onMouseEnter={() => setActiveHover("adult")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-white rounded-t-[44px] rounded-b-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
              activeHover === "adult"
                ? "border-[#4A7C64] scale-[1.02] shadow-[#4A7C64]/20"
                : "border-slate-200/80 hover:border-[#4A7C64]/60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A7C64] text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  <Users className="w-3.5 h-3.5" />
                  Ages 18+
                </span>
                
                <div className="w-9 h-9 rounded-2xl bg-[#4A7C64]/10 text-[#4A7C64] flex items-center justify-center group-hover:bg-[#4A7C64] group-hover:text-white transition-colors">
                  <DoorOpen className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight mb-1">
                The Next Level
              </h2>
              
              <p className="text-slate-600 font-semibold text-xs sm:text-sm mb-4">
                Adult Day Program | Ages 18+
              </p>

              {/* Bullet List */}
              <ul className="space-y-2 mb-6 text-[#1B3B48] text-xs sm:text-sm">
                {[
                  "Day Programming",
                  "Community Involvement",
                  "Life Skills",
                  "Advocacy",
                  "Transition Support",
                  "Funding Guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm text-white bg-[#2A5243] group-hover:bg-[#4A7C64] shadow-md transition-all">
                <span>Explore The Next Level</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>

      </div>

      <div className="text-center text-xs text-[#1B3B48]/60 font-semibold z-10 pb-2">
        <span>Hand In Hand Therapy Centre & Adult Programs • Vaughan & Bradford, ON</span>
      </div>
    </section>
  );
}
