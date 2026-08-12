"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Ear, Map, Users, TrendingUp, CheckCircle2 } from "lucide-react";

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Listen & Understand",
      description:
        "We begin by understanding your family's daily routine, priorities, experiences, and specific goals for your child.",
      icon: Ear,
      color: "from-blue-500 to-teal-500",
    },
    {
      number: "02",
      title: "Build the Right Plan",
      description:
        "Our multidisciplinary clinicians create a clear, evidence-based, individualized roadmap suited for your child.",
      icon: Map,
      color: "from-coral to-amber-500",
    },
    {
      number: "03",
      title: "Work as One Team",
      description:
        "Therapists, educators, and caregivers stay continuously connected around shared milestones and daily strategies.",
      icon: Users,
      color: "from-amber-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Measure Meaningful Progress",
      description:
        "We celebrate every win, review data-driven outcomes regularly, and continuously adapt as your child grows.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-brand-mint/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Arch */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Arch Image Frame */}
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/therapy-approach.png"
                  alt="Therapist encouraging a child during approach session"
                  fill
                  className="object-cover"
                />
                
                {/* Floating Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-brand-navy uppercase tracking-wider">
                      Individualized Roadmap
                    </p>
                    <p className="text-xs text-slate-600">
                      Tailored therapy built around your child's strengths
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Background Blob */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-brand-coral/10 rounded-t-[160px] rounded-b-3xl" />
            </div>
          </div>

          {/* Right Column: Approach Content & Steps */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold tracking-wider uppercase mb-3">
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              We look beyond a diagnosis to understand your child's strengths & potential.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Every child is unique. Our holistic approach connects therapists, parents, and educators into one supportive circle around your child.
            </p>

            {/* Interactive Step Items */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isSelected = activeStep === index;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                      isSelected
                        ? "bg-white border-brand-coral shadow-lg translate-x-1"
                        : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0 shadow-sm ${
                          isSelected
                            ? "bg-brand-coral"
                            : "bg-brand-navy"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-extrabold text-lg text-brand-navy">
                            {step.title}
                          </h3>
                          <span className="text-xs font-bold text-slate-400">
                            STEP {step.number}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
