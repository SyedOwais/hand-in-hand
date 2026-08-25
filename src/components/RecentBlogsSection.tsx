import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, ShieldCheck } from "lucide-react";

export default function RecentBlogsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FBF9F5] via-[#E8F0EC]/40 to-[#FBF9F5] relative overflow-hidden border-t border-slate-200/80">
      
      {/* Ambient Lighting Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2A5243]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
              <BookOpen className="w-4 h-4 text-[#F57A54]" />
              <span>Clinical Knowledge Hub</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight leading-tight">
              Latest Clinical Insights & Parent Guides
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Evidence-based ABA guides, speech milestones, and OT strategies written by our clinical specialists in Vaughan & Bradford.
            </p>
          </div>

          <div className="text-center md:text-right shrink-0">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 text-[#F57A54]" />
            </Link>
          </div>
        </div>

        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* BENTO 1: FEATURED LARGE HERO CARD (7 Cols) */}
          <Link
            href="/blogs/adult-speech-therapy-vaughan-guide"
            className="group relative lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-[#2A5243]/30 bg-[#0F2530] text-white flex flex-col justify-between min-h-[440px] sm:min-h-[500px] transform hover:-translate-y-1 transition-all duration-500 block"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/speech-therapy-adults-vaughan.png"
                alt="Adult Speech Therapy in Vaughan: Who It's For and How It Helps"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-45 group-hover:opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-[#0F2530]/75 to-transparent" />
            </div>

            {/* Top Badge Bar */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-[#F57A54] text-white shadow-md uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  Newest Guide
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-slate-200 border border-white/20">
                  Adult Speech Therapy
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F57A54]" />
                  August 25, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#6B8E7B]">
                  <Clock className="w-3.5 h-3.5" />
                  7 min read
                </span>
              </div>
            </div>

            {/* Bottom Content Box */}
            <div className="relative z-10 p-6 sm:p-8 space-y-4 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#6B8E7B] transition-colors leading-tight">
                Adult Speech Therapy in Vaughan: Who It's For and How It Helps
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl line-clamp-3">
                Speech therapy isn't just for kids. Learn how adults in Vaughan use speech therapy for stroke recovery, voice, stuttering, accent modification, and more.
              </p>

              <div className="pt-3 flex items-center justify-between border-t border-white/15">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F57A54]" />
                  Registered SLP Team
                </span>

                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-white group-hover:text-[#F57A54] transition-colors">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

          </Link>

          {/* BENTO RIGHT SIDE COLUMN: TWO STACKED IMAGE CARDS (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* BENTO 2: ABA THERAPY IMAGE CARD */}
            <Link
              href="/blogs/aba-therapy-vaughan-parent-guide"
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-white grid grid-cols-1 sm:grid-cols-12 flex-1 transform hover:-translate-y-1 transition-all duration-300 block"
            >
              {/* Image Column */}
              <div className="relative h-44 sm:h-auto sm:col-span-5 overflow-hidden">
                <Image
                  src="/images/aba-therapy-vaughan.png"
                  alt="ABA Therapy in Vaughan: What Every Parent Should Know"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:hidden">
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#2A5243] text-white shadow-md uppercase tracking-wider">
                    ABA Therapy
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="p-5 sm:col-span-7 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                  <div className="hidden sm:flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] uppercase tracking-wider border border-[#2A5243]/20">
                      ABA Therapy
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">8 min read</span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors leading-snug">
                    ABA Therapy in Vaughan: What Every Parent Should Know Before Getting Started
                  </h4>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                    New to ABA therapy? Learn how it works, BCBA supervision, and provider selection.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">August 25, 2026</span>
                  <span className="text-xs font-extrabold text-[#2A5243] group-hover:text-[#F57A54] flex items-center gap-1 transition-colors">
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* BENTO 3: SPEECH THERAPY IMAGE CARD */}
            <Link
              href="/blogs/signs-your-child-needs-speech-therapy-vaughan"
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-white grid grid-cols-1 sm:grid-cols-12 flex-1 transform hover:-translate-y-1 transition-all duration-300 block"
            >
              {/* Image Column */}
              <div className="relative h-44 sm:h-auto sm:col-span-5 overflow-hidden">
                <Image
                  src="/images/signs-child-speech-therapy-vaughan.png"
                  alt="Signs Your Child May Need Speech Therapy in Vaughan"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 sm:hidden">
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#F57A54] text-white shadow-md uppercase tracking-wider">
                    Speech Therapy
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="p-5 sm:col-span-7 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                  <div className="hidden sm:flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#F57A54]/10 text-[#F57A54] uppercase tracking-wider border border-[#F57A54]/20">
                      Speech Therapy
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">7 min read</span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors leading-snug">
                    Signs Your Child May Need Speech Therapy in Vaughan: A Parent's Guide
                  </h4>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                    Wondering if your child needs speech therapy? Learn the signs, SLP evaluation steps, and milestones.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400">August 13, 2026</span>
                  <span className="text-xs font-extrabold text-[#2A5243] group-hover:text-[#F57A54] flex items-center gap-1 transition-colors">
                    Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
