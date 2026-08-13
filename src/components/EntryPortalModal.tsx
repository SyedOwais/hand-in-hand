"use client";

import React, { useState, useEffect } from "react";
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

export default function EntryPortalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<"therapy" | "adult" | null>(null);

  useEffect(() => {
    // Check if user has already selected a door in this session
    const hasChosen = sessionStorage.getItem("handinhand_door_chosen");
    if (!hasChosen) {
      setIsOpen(true);
    }
  }, []);

  const handleSelectTherapy = () => {
    sessionStorage.setItem("handinhand_door_chosen", "therapy");
    setIsOpen(false);
  };

  const handleSelectAdult = () => {
    sessionStorage.setItem("handinhand_door_chosen", "adult");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#0F2530] via-[#1B3B48] to-[#142E28] text-white flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8 overflow-y-auto select-none backdrop-blur-xl">
      {/* Organic background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A7C64]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-end z-10">
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold backdrop-blur-md border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#6B8E7B]" />
          <span>Vaughan & Bradford, ON</span>
        </div>
      </div>

      {/* Main Choice Section */}
      <div className="max-w-6xl mx-auto w-full my-auto z-10 py-4">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 flex flex-col items-center">
          {/* Centered Logo */}
          <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl shadow-2xl border border-white/20 mb-4 inline-flex items-center justify-center">
            <div className="relative h-14 w-60 sm:h-18 sm:w-80">
              <Image
                src="/images/hand-in-hand.png?v=2"
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

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-4">
            Whether you're looking for support for a child or exploring opportunities for an adult, you're in the right place.
          </p>

          <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
            Who are you looking for support for?
          </h2>
        </div>

        {/* Two Door Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 01: Therapy Centre Door (Lands on root /) */}
          <div
            onClick={handleSelectTherapy}
            onMouseEnter={() => setActiveHover("therapy")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md rounded-t-[44px] rounded-b-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-2xl ${
              activeHover === "therapy"
                ? "border-[#F57A54] scale-[1.02] shadow-[#F57A54]/25"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ages 2–18
                </span>
                
                <div className="w-9 h-9 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:bg-[#F57A54] transition-colors">
                  <DoorOpen className="w-5 h-5 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                Therapy Centre
              </h2>
              
              <p className="text-slate-300 font-semibold text-xs sm:text-sm mb-4">
                For children & teens ages 2–18
              </p>

              {/* Bullet List */}
              <ul className="space-y-2 mb-6 text-slate-200 text-xs sm:text-sm">
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
                    <span className="font-medium text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/15">
              <span className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm text-white bg-[#F57A54] group-hover:bg-[#E3643E] shadow-lg transition-all">
                <span>Explore Therapy Centre</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 02: The Next Level Door (Navigates to /adult-program) */}
          <Link
            href="/adult-program"
            onClick={handleSelectAdult}
            onMouseEnter={() => setActiveHover("adult")}
            onMouseLeave={() => setActiveHover(null)}
            className={`group relative cursor-pointer bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md rounded-t-[44px] rounded-b-3xl p-6 sm:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-2xl ${
              activeHover === "adult"
                ? "border-[#4A7C64] scale-[1.02] shadow-[#4A7C64]/30"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#4A7C64] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                  Ages 18+
                </span>
                
                <div className="w-9 h-9 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:bg-[#4A7C64] transition-colors">
                  <DoorOpen className="w-5 h-5 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                The Next Level
              </h2>
              
              <p className="text-slate-300 font-semibold text-xs sm:text-sm mb-4">
                Adult Day Program | Ages 18+
              </p>

              {/* Bullet List */}
              <ul className="space-y-2 mb-6 text-slate-200 text-xs sm:text-sm">
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
                    <span className="font-medium text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/15">
              <span className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-extrabold text-sm text-white bg-[#2A5243] group-hover:bg-[#4A7C64] shadow-lg transition-all border border-white/10">
                <span>Explore The Next Level</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>

      </div>

      <div className="text-center text-xs text-slate-400 z-10 pb-2">
        <span>Hand In Hand Therapy Centre & Adult Programs • Vaughan & Bradford, ON</span>
      </div>
    </div>
  );
}
