"use client";

import React from "react";
import { Star, Quote, Heart, CheckCircle2, ExternalLink, Award, Sparkles, ShieldCheck } from "lucide-react";

export default function SocialProofVisual() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFDFB] via-[#F4F9F6] to-[#FAFDFB] border-t border-[#2A5243]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-extrabold text-[#1B3B48]">
            {/* Google SVG Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Verified 5.0 Rating on Google Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
            Loved by Families Across York Region & Simcoe
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Read real feedback from parents, caregivers, and clinical specialists who experience our centers firsthand.
          </p>

          {/* Overall Score Badge Bar */}
          <div className="pt-2 inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-slate-200 shadow-md">
            <span className="text-2xl font-black text-[#1B3B48]">5.0</span>
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500 border-l border-slate-200 pl-3">
              Google Verified Reviews
            </span>
          </div>
        </div>

        {/* Modern SaaS Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* BENTO CARD 1: Angela Sciabbarrasi (Featured 10+ Year Testimonial - Spans 2 Columns) */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0F2530] via-[#1B3B48] to-[#2A5243] text-white rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group hover:shadow-[#2A5243]/20 transition-all duration-300">
            {/* Subtle Ambient Decorative Lighting */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold text-[#6B8E7B]">
                  <Award className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>10+ Year Client Parent</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-10 h-10 text-[#F57A54]/40" />

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium italic">
                &ldquo;My son has been a client of Hand in Hand therapy for over 10 years. Hand in Hand has provided my son with excellent therapy. Their highly qualified, compassionate and knowledgeable staff have made a tremendous impact on my son&apos;s development. They go out of their way to accommodate and to educate parents so there is consistency and continuity. I will say that after having my son in a specialized classroom, working with countless professionals such as OT, PT and speech pathologists, my son has hands down learned all of his skills at Hand in Hand. I highly recommend Hand in Hand therapy. They have changed the quality of my son&apos;s life and mine as well.&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2A5243] text-white font-extrabold flex items-center justify-center text-base border-2 border-white/30 shadow-md">
                  A
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">Angela Sciabbarrasi</h3>
                  <span className="block text-xs font-semibold text-slate-300">York Region Parent</span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Verified</span>
              </span>
            </div>
          </div>

          {/* BENTO CARD 2: Matt Tempest (Clinical Educator Review) */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-white via-[#FAFBF9] to-[#E8F0EC]/50 rounded-3xl p-7 border border-[#1B3B48]/15 shadow-md hover:shadow-2xl hover:border-[#1B3B48]/30 transition-all duration-300 flex flex-col justify-between space-y-6 group transform hover:-translate-y-1 relative overflow-hidden">
            {/* Soft Ambient Light Glow Mesh */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1B3B48]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#1B3B48]/20 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#1B3B48]/15 to-[#2A5243]/15 text-[#1B3B48] border border-[#1B3B48]/10">
                  <ShieldCheck className="w-3 h-3 text-[#1B3B48]" />
                  <span>Autism Educator Review</span>
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#2A5243]/25 group-hover:text-[#F57A54]/50 transition-colors" />

              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                &ldquo;Top tier autism therapy centre. I&apos;ve had the pleasure of working for this establishment as well as other autism programs in the past and none compare to Hand in Hand. The kids are treated as family and not just clients, the programming is developed thoughtfully and specific to each individual&apos;s needs. The therapists are passionate and dedicated to the progression of the kids. I would recommend Hand in Hand in a heartbeat.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B3B48] to-[#0F2530] text-white font-extrabold flex items-center justify-center text-sm shadow-md border border-white/40">
                  M
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#1B3B48]">Matt Tempest</h3>
                  <span className="block text-[10px] font-bold text-slate-500">Clinical Specialist</span>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                Google Review
              </span>
            </div>
          </div>

          {/* BENTO CARD 3: Stephanie Salguero (Compact 10/10 Transition Review) */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-white via-[#FFFBF9] to-[#FDF3F0]/60 rounded-3xl p-7 border border-[#F57A54]/20 shadow-md hover:shadow-2xl hover:border-[#F57A54]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group transform hover:-translate-y-1 relative overflow-hidden">
            {/* Soft Coral Ambient Light Glow Mesh */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F57A54]/12 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F57A54]/25 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#F57A54]/20 to-[#F57A54]/10 text-[#F57A54] border border-[#F57A54]/20">
                  <Sparkles className="w-3 h-3 text-[#F57A54]" />
                  <span>10/10 Staff Rating</span>
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#F57A54]/30 group-hover:text-[#F57A54]/60 transition-colors" />

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold italic">
                &ldquo;What a great supportive environment that supports children with ASD through their developmental transitions. Staff is 10/10 welcoming, respectful and involved.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#F57A54]/15 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F57A54] to-[#E05A32] text-white font-extrabold flex items-center justify-center text-sm shadow-md border border-white/40">
                  S
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#1B3B48]">Stephanie Salguero</h3>
                  <span className="block text-[10px] font-bold text-slate-500">ASD Parent</span>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                Google Review
              </span>
            </div>
          </div>

          {/* BENTO CARD 4: Matthew S. (16 Years Client Parent Review) */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-white via-[#FAFBF9] to-[#E8F0EC]/60 rounded-3xl p-7 border border-[#2A5243]/20 shadow-md hover:shadow-2xl hover:border-[#2A5243]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group transform hover:-translate-y-1 relative overflow-hidden">
            {/* Soft Mint Ambient Light Glow Mesh */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2A5243]/12 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2A5243]/25 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#2A5243]/20 to-[#6B8E7B]/15 text-[#2A5243] border border-[#2A5243]/20">
                  <Award className="w-3 h-3 text-[#2A5243]" />
                  <span>16 Years Client Family</span>
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#2A5243]/30 group-hover:text-[#F57A54]/50 transition-colors" />

              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold italic">
                &ldquo;My son has benefited tremendously the last 16 years working with the team. We can’t thank them enough for providing these kids a safe and happy learning environment.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A5243]/15 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2A5243] to-[#1B3B48] text-white font-extrabold flex items-center justify-center text-sm shadow-md border border-white/40">
                  M
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-[#1B3B48]">Matthew S.</h3>
                  <span className="block text-[10px] font-bold text-slate-500">Vaughan Parent</span>
                </div>
              </div>

              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 border border-slate-200">
                Google Review
              </span>
            </div>
          </div>

          {/* BENTO CARD 5: SaaS Callout Box & Google Review Link */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-[#1B3B48] to-[#0F2530] text-white rounded-3xl p-7 border border-[#2A5243]/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                <span className="text-[10px] font-bold text-slate-300">
                  Vaughan & Bradford
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white leading-snug">
                Verified Google Business Reviews
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Read all client reviews or share your family&apos;s story on Google to help other York Region & Simcoe families.
              </p>
            </div>

            <div>
              <a
                href="https://www.google.com/search?q=Hand+in+Hand+Therapy+Centre+Vaughan+Bradford"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Read All Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
