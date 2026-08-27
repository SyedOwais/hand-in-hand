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
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FBF9F5] via-[#E8F0EC]/85 to-[#F4F9F6] text-[#1B3B48] flex flex-col justify-between py-4 sm:py-6 px-3 sm:px-6 lg:px-8 overflow-y-auto overflow-x-hidden max-w-full w-full select-none backdrop-blur-xl">
      {/* Background ambient lighting locked inside overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-16 w-64 h-64 sm:w-96 sm:h-96 bg-[#4A7C64]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 sm:w-96 sm:h-96 bg-[#F57A54]/12 rounded-full blur-3xl" />
      </div>

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-end z-10 gap-2 pt-1 pb-2">
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#2A5243] text-xs font-bold shadow-xs border border-[#4A7C64]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#4A7C64]" />
          <span>Vaughan & Bradford, ON</span>
        </div>
      </div>

      {/* Main Choice Section */}
      <div className="max-w-5xl mx-auto w-full my-auto z-10 py-2 sm:py-4">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8 flex flex-col items-center">
          {/* Centered Logo */}
          <div className="bg-white px-5 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/80 mb-3 sm:mb-4 inline-flex items-center justify-center max-w-[90vw]">
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

          <p className="text-[#1B3B48]/80 text-xs sm:text-base max-w-xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2 font-medium">
            Whether you're looking for child & youth therapy or an adult day program, choose your program track below to get started.
          </p>

          <h2 className="text-base sm:text-2xl font-black text-[#1B3B48] tracking-tight">
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
            className={`group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
              activeHover === "therapy"
                ? "border-[#F57A54] scale-[1.01] shadow-[#F57A54]/20"
                : "border-slate-200/80 hover:border-[#F57A54]/60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F57A54] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Ages 2–18
                </span>
                
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F57A54]/10 text-[#F57A54] flex items-center justify-center group-hover:bg-[#F57A54] group-hover:text-white transition-colors">
                  <DoorOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-[#1B3B48] tracking-tight mb-1">
                Therapy Centre
              </h2>
              
              <p className="text-slate-600 font-semibold text-xs sm:text-sm mb-3">
                For children & teens ages 2–18
              </p>

              {/* Bullet List */}
              <ul className="space-y-1.5 mb-4 sm:mb-6 text-[#1B3B48] text-xs sm:text-sm">
                {[
                  "ABA & IBI Therapy",
                  "Speech & Occupational Therapy",
                  "Life Skills & Holiday Camps",
                  "Respite Services",
                  "OAP Advocacy & Parent Coaching",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F57A54] shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-[#F57A54] group-hover:bg-[#E3643E] shadow-md transition-all">
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
            className={`group relative cursor-pointer bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
              activeHover === "adult"
                ? "border-[#4A7C64] scale-[1.01] shadow-[#4A7C64]/20"
                : "border-slate-200/80 hover:border-[#4A7C64]/60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#4A7C64] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                  <Users className="w-3.5 h-3.5" />
                  Ages 18+
                </span>
                
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#4A7C64]/10 text-[#4A7C64] flex items-center justify-center group-hover:bg-[#4A7C64] group-hover:text-white transition-colors">
                  <DoorOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              <h2 className="text-xl sm:text-3xl font-black text-[#1B3B48] tracking-tight mb-1">
                The Next Level
              </h2>
              
              <p className="text-slate-600 font-semibold text-xs sm:text-sm mb-3">
                Adult Day Program | Ages 18+
              </p>

              {/* Bullet List */}
              <ul className="space-y-1.5 mb-4 sm:mb-6 text-[#1B3B48] text-xs sm:text-sm">
                {[
                  "Day Programming & Life Skills",
                  "Community Outings & Activities",
                  "Respite Services",
                  "Independent Living & Skills",
                  "Passport Funding & DSO Guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A7C64] shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm text-white bg-[#2A5243] group-hover:bg-[#4A7C64] shadow-md transition-all">
                <span>Explore The Next Level</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>

      </div>

      <div className="text-center text-[11px] sm:text-xs text-[#1B3B48]/60 font-semibold z-10 py-1">
        <span>Hand In Hand Therapy Centre & Adult Programs • Vaughan & Bradford, ON</span>
      </div>
    </div>
  );
}
