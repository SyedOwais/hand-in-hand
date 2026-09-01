"use client";

import React from "react";
import Link from "next/link";
import { Brain, Users, MessageCircle, Activity, Sparkles, ArrowRight, Leaf, ShieldCheck, CheckCircle2, HeartHandshake, Calendar, Heart } from "lucide-react";

export default function WhatWeHelpWith() {
  return (
    <section id="what-we-help-with" className="py-20 bg-[#FAFDFB] relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8F0EC] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/30 shadow-xs">
              <span>Therapy & Care Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B3B48] tracking-tight mb-2">
              Comprehensive Support for Ages 2–18
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Customized therapy support delivered by certified clinicians in Vaughan & Bradford.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 text-[#F57A54]" />
            </Link>
          </div>
        </div>

        {/* TRUE BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Tile 1: ABA & IBI Therapy (7/12 cols) */}
          <div className="lg:col-span-7 bg-white text-[#1B3B48] rounded-3xl p-8 sm:p-9 shadow-lg relative overflow-hidden flex flex-col justify-between group border-2 border-[#4A7C64]/30 hover:border-[#4A7C64]/60 transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E8F0EC]/50 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black px-3 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] uppercase tracking-wider">
                  IBI & ABA Core
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center border border-[#4A7C64]/20">
                  <Brain className="w-6 h-6" />
                </div>
              </div>

              <span className="text-xs font-bold text-[#2A5243] uppercase tracking-widest block mb-1">
                Applied Behavior Analysis & IBI
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3 text-[#1B3B48]">
                ABA & IBI Therapy
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mb-6">
                Individualized, evidence-based skill building & Intensive Behavioural Intervention (IBI) tailored for your child. Focused on communication, daily functioning, and positive behavioral growth.
              </p>

              {/* Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                  <span>BCBA & Psychologist Clinical Supervision</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                  <span>OAP & SSAH Approved Funding</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500">Vaughan & Bradford Clinics</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] transition-all shadow-xs"
              >
                <span>Inquire ABA / IBI</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>

          {/* Bento Tile 2: Social Skills Groups (5/12 cols) */}
          <div className="lg:col-span-5 bg-[#E8F0EC]/80 rounded-3xl p-8 border border-[#4A7C64]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2A5243] text-white flex items-center justify-center font-bold shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-white text-[#2A5243] uppercase tracking-wider shadow-2xs">
                  Peer Groups
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-[#2A5243] uppercase tracking-wider block mb-1">
                Peer Connection & Interaction
              </span>
              <h3 className="text-2xl font-black text-[#1B3B48] mb-3 group-hover:text-[#2A5243] transition-colors">
                Social Skills Groups
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
                Structured peer groups focused on turn-taking, initiating conversation, active sharing, and building natural childhood friendships.
              </p>
            </div>

            <div className="pt-4 border-t border-[#4A7C64]/20 flex items-center justify-between">
              <span className="text-xs font-bold text-[#2A5243]">Small Match Groups</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider"
              >
                <span>Explore Groups</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento Tile 3: Speech Therapy (4/12 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wider">
                  Language
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
                Articulation & Expression
              </span>
              <h3 className="text-xl font-black text-[#1B3B48] mb-2 group-hover:text-[#2A5243] transition-colors">
                Speech Therapy
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Supporting verbal clarity, expressive language, functional communication, and AAC communication tools.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider pt-3 border-t border-slate-100"
            >
              <span>Speech Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Tile 4: Occupational Therapy (4/12 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 uppercase tracking-wider">
                  Sensory & Motor
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block mb-1">
                Sensory & Motor Skills
              </span>
              <h3 className="text-xl font-black text-[#1B3B48] mb-2 group-hover:text-[#2A5243] transition-colors">
                Occupational Therapy
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Developing functional motor skills, handwriting, sensory regulation, and daily physical coordination.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider pt-3 border-t border-slate-100"
            >
              <span>OT Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Tile 5: Life Skills & Independence (4/12 cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 uppercase tracking-wider">
                  Life Skills
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-orange-600 uppercase tracking-wider block mb-1">
                Daily Independence
              </span>
              <h3 className="text-xl font-black text-[#1B3B48] mb-2 group-hover:text-[#2A5243] transition-colors">
                Life Skills & Routines
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Practical daily life skills, self-care routines, independence, and classroom readiness carried into home and school.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider pt-3 border-t border-slate-100"
            >
              <span>Life Skills Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Tile 6: Holiday & Seasonal Camps (6/12 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 uppercase tracking-wider">
                  Camps
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-sky-600 uppercase tracking-wider block mb-1">
                Seasonal Programs
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1B3B48] mb-2 group-hover:text-[#2A5243] transition-colors">
                Holiday & Seasonal Camps
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Structured holiday camps, March Break, and summer programs fostering peer interaction, outdoor activities, and life skill practice in a safe, fun environment.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider pt-3 border-t border-slate-100"
            >
              <span>Inquire Camps</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Tile 7: Respite Services (6/12 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 uppercase tracking-wider">
                  Family Care
                </span>
              </div>

              <span className="text-[11px] font-extrabold text-rose-600 uppercase tracking-wider block mb-1">
                Caregiver Relief & Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1B3B48] mb-2 group-hover:text-[#2A5243] transition-colors">
                Respite Services
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Flexible, supportive respite care giving families and caregivers essential peace of mind while participants engage in structured, safe, and nurturing environment activities.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] uppercase tracking-wider pt-3 border-t border-slate-100"
            >
              <span>Inquire Respite Care</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#4A7C64] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Tile 8: OAP Advocacy & Direct Billing (12/12 cols full width footer bar) */}
          <div className="lg:col-span-12 bg-gradient-to-r from-[#E8F0EC] via-[#F4F9F6] to-[#FAFDFB] text-[#1B3B48] rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-2 border-[#4A7C64]/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2A5243] text-white flex items-center justify-center shrink-0 border border-[#2A5243] shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#2A5243] uppercase tracking-wider block mb-0.5">
                  Ontario Autism Program & SSAH Funding
                </span>
                <h4 className="text-lg font-black text-[#1B3B48] mb-0.5">
                  OAP & SSAH Advocacy & Funding Support
                </h4>
                <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                  We provide dedicated OAP (Ontario Autism Program) & SSAH (Special Services at Home) funding guidance, Childhood Budget management, Access OAP support, and direct invoice submission across both our Vaughan and Bradford centres.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] transition-colors shrink-0 shadow-md uppercase tracking-wider"
            >
              <HeartHandshake className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
