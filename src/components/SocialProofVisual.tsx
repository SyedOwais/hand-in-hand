"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, Heart } from "lucide-react";

export default function SocialProofVisual() {
  const testimonials = [
    {
      quote:
        "Hand In Hand transformed our morning routines. Lucas started talking in full sentences within six months of ABA and speech integration!",
      parent: "Sarah M.",
      child: "Lucas (Age 5)",
      service: "ABA & Speech Therapy",
      image: "/images/therapy-hero.png",
    },
    {
      quote:
        "Navigating school advocacy felt overwhelming until the Hand in Hand team stepped in for our IEP meeting. We finally feel heard and supported.",
      parent: "David & Elena K.",
      child: "Maya (Age 8)",
      service: "School Advocacy & Social Skills",
      image: "/images/therapy-approach.png",
    },
    {
      quote:
        "March Break camp gave our son his very first real group of friends. He woke up excited every single day!",
      parent: "Priya R.",
      child: "Noah (Age 10)",
      service: "March Break & Social Groups",
      image: "/images/camp-community.png",
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF3F0] text-[#F57A54] text-xs font-black tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-[#F57A54] fill-[#F57A54]" />
            <span>Family Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight mb-3">
            Real children. Real families. Real progress.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from York Region parents about their journey with Hand In Hand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full bg-slate-200">
                <Image
                  src={t.image}
                  alt={`${t.child} participating in Hand in Hand programs`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black text-[#1B3B48] shadow-xs">
                  {t.service}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-7 h-7 text-[#F57A54]/30 mb-2" />

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#1B3B48] text-sm">{t.parent}</h4>
                    <p className="text-xs text-[#F57A54] font-semibold">{t.child}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
