"use client";

import React from "react";
import { Star, Quote, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Hand In Hand transformed our daily lives. The ABA therapists are so compassionate, and our son looks forward to going every single morning!",
      author: "Sarah M.",
      location: "Vaughan Parent",
      program: "ABA Therapy",
      rating: 5,
    },
    {
      quote:
        "The speech therapy team helped our daughter express her feelings clearly for the first time. We are forever grateful for their dedication.",
      author: "David & Elena K.",
      location: "Bradford Parents",
      program: "Speech & Language",
      rating: 5,
    },
    {
      quote:
        "Having daycare and specialized therapy coordinated under one roof gave us peace of mind. Her social confidence has grown tremendously.",
      author: "Priya R.",
      location: "Concord Parent",
      program: "IBI & Daycare Integration",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-rose text-brand-coral text-xs font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral" />
            <span>Family Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Real words. Real progress.
          </h2>
          <p className="text-slate-600 text-lg">
            The moments that matter most are the ones families experience at home, at school, and in everyday life.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-brand-cream/60 rounded-3xl p-8 border border-amber-200/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-brand-coral/40 mb-3" />

                <p className="text-slate-700 text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-brand-navy text-sm">{t.author}</h3>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-navy text-white">
                  {t.program}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
