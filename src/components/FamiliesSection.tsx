"use client";

import React from "react";
import { CheckCircle2, ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export default function FamiliesSection() {
  const benefits = [
    {
      title: "Regular Progress Updates",
      desc: "Transparent reporting and data sharing so you always know where your child is excelling and where we are focusing next.",
    },
    {
      title: "Practical At-Home Strategies",
      desc: "Easy-to-implement techniques tailored for home routines, meal times, outings, and transition periods.",
    },
    {
      title: "Collaborative Goal Setting",
      desc: "Your family's personal priorities lead our clinical roadmap. We listen, adapt, and build goals together.",
    },
  ];

  return (
    <section id="families" className="py-20 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-brand-coral text-xs font-bold tracking-wider uppercase mb-4">
                <HeartHandshake className="w-4 h-4 text-brand-coral" />
                <span>Family-Centered Partnership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                You are part of the <span className="text-brand-coral">therapy team.</span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Progress is stronger when skills carry seamlessly into daily life. We provide families with practical guidance, clear communication, and support that feels manageable and empowering.
              </p>

              <div className="space-y-6 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-coral/20 text-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white bg-brand-coral hover:bg-brand-coral-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Talk With Our Team</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-brand-coral/20 text-brand-coral mx-auto flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Empowering Families Together
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  From your initial consultation to long-term milestone celebrations, our clinicians are by your side every step of the way.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-xs text-slate-200">
                  "The guidance and parent coaching we received completely changed how we handle routines at home."
                  <span className="block font-bold text-brand-amber mt-2">— Hand In Hand Parent</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
