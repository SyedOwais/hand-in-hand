"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  ShieldCheck,
  DoorOpen,
} from "lucide-react";

export default function EntryPortalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<"therapy" | "adult" | null>(null);

  useEffect(() => {
    // Check if user has already selected a door in this session
    const hasChosen = sessionStorage.getItem("handinhand_door_chosen");
    if (!hasChosen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSelectTherapy = () => {
    sessionStorage.setItem("handinhand_door_chosen", "therapy");
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  const handleSelectAdult = () => {
    sessionStorage.setItem("handinhand_door_chosen", "adult");
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#0F2530] via-[#1B3B48] to-[#142E28] text-white flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden max-w-full w-full select-none backdrop-blur-xl">
      {/* Background ambient lighting locked inside overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-16 w-64 h-64 sm:w-96 sm:h-96 bg-[#4A7C64]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 sm:w-96 sm:h-96 bg-[#F57A54]/15 rounded-full blur-3xl" />
      </div>

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-end z-10 gap-2 pt-1 pb-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold backdrop-blur-md border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#6B8E7B]" />
          <span>Vaughan & Bradford, ON</span>
        </div>
      </div>

      {/* Main Choice Section */}
      <div className="max-w-5xl mx-auto w-full my-auto z-10 py-2 sm:py-4">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8 flex flex-col items-center">
          {/* Centered Logo */}
          <div className="bg-white/95 backdrop-blur-md px-4 sm:px-8 py-2.5 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 mb-3 sm:mb-4 inline-flex items-center justify-center max-w-[90vw]">
            <div className="relative h-11 w-48 xs:h-12 xs:w-56 sm:h-16 sm:w-72 max-w-full">
              <Image
                src="/images/hand-in-hand-v2.png"
                alt="Hand In Hand Therapy Centre & Adult Day Program"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="text-xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-2 sm:mb-3">
            Together We Can!
          </p>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2">
            Whether you're looking for pediatric therapy or an adult day program, choose your program track below to get started.
          </p>

          <h2 className="text-base sm:text-2xl font-bold text-white tracking-tight">
            Who are you looking for support for?
          </h2>
        </div>

        {/* Two Door Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Card 01: Therapy Centre Door */}
          <div
            onClick={handleSelectTherapy}
            onMouseEnter={() => setActiveHover("therapy")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-2xl ${
              activeHover === "therapy"
                ? "border-[#F57A54] scale-[1.01] shadow-[#F57A54]/25"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F57A54] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ages 2–18
                </span>
                
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-[#F57A54] transition-colors">
                  <DoorOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-1">
                Therapy Centre
              </h2>
              
              <p className="text-slate-300 font-semibold text-xs sm:text-sm mb-3">
                For children & teens ages 2–18
              </p>

              {/* Bullet List */}
              <ul className="space-y-1.5 mb-4 sm:mb-6 text-slate-200 text-xs sm:text-sm">
                {[
                  "ABA Therapy",
                  "Speech Therapy",
                  "Occupational Therapy",
                  "Social Skills Groups",
                  "Parent Coaching & Advocacy",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F57A54] shrink-0" />
                    <span className="font-medium text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/15">
              <span className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-[#F57A54] group-hover:bg-[#E3643E] shadow-lg transition-all">
                <span>Explore Therapy Centre</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 02: The Next Level Door */}
          <Link
            href="/adult-program"
            onClick={handleSelectAdult}
            onMouseEnter={() => setActiveHover("adult")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-2xl ${
              activeHover === "adult"
                ? "border-[#4A7C64] scale-[1.01] shadow-[#4A7C64]/30"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#4A7C64] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                  <Users className="w-3.5 h-3.5" />
                  Ages 18+
                </span>
                
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-[#4A7C64] transition-colors">
                  <DoorOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-1">
                The Next Level
              </h2>
              
              <p className="text-slate-300 font-semibold text-xs sm:text-sm mb-3">
                Adult Day Program | Ages 18+
              </p>

              {/* Bullet List */}
              <ul className="space-y-1.5 mb-4 sm:mb-6 text-slate-200 text-xs sm:text-sm">
                {[
                  "Day Programming & Life Skills",
                  "Community Involvement Outings",
                  "Independent Living & Job Skills",
                  "Passport Funding & DSO Guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A7C64] shrink-0" />
                    <span className="font-medium text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/15">
              <span className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-[#2A5243] group-hover:bg-[#4A7C64] shadow-lg transition-all border border-white/10">
                <span>Explore The Next Level</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>

      </div>

      <div className="text-center text-[11px] sm:text-xs text-slate-400 z-10 py-1">
        <span>Hand In Hand Therapy Centre & Adult Programs • Vaughan & Bradford, ON</span>
      </div>
    </div>
  );
}
