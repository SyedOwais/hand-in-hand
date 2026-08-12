"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Interactive Therapy",
      category: "1:1 ABA Session",
      image: "/images/therapy-hero.png",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      height: "h-72 sm:h-80",
    },
    {
      title: "Group Daycare Play",
      category: "Early Childhood Learning",
      image: "/images/daycare-hero.png",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      height: "h-72 sm:h-80",
    },
    {
      title: "Collaborative Learning",
      category: "Speech & Communication",
      image: "/images/therapy-approach.png",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
      height: "h-72 sm:h-80",
    },
    {
      title: "Sensory & Skill Building",
      category: "Social Skills Circle",
      image: "/images/daycare-hero.png",
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      height: "h-72 sm:h-80",
    },
  ];

  return (
    <section id="moments" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cream text-brand-navy border border-amber-200/60 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-coral" />
            <span>Community Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Familiar faces. Joyful moments.
          </h2>
          <p className="text-slate-600 text-lg">
            Real moments from the Hand In Hand community—presented in a fresh, modern experience that celebrates every milestone.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-md group ${item.span} ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
