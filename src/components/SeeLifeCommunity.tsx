"use client";

import React from "react";
import Image from "next/image";
import { Camera, ArrowRight, Heart } from "lucide-react";

interface SeeLifeCommunityProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
}

export default function SeeLifeCommunity({
  title = "See Life at The Next Level",
  subtitle = "Real people. Real activities. Real community.",
  tagline = "York Region Community Moments",
}: SeeLifeCommunityProps) {
  const gallery = [
    { src: "/images/adult-day-program.png", title: "Culinary Skills Workshop", caption: "Baking & Meal Preparation" },
    { src: "/images/adult-community-trips.png", title: "Community Excursion", caption: "Local Park Outing" },
    { src: "/images/camp-community.png", title: "Creative Arts", caption: "Group Craft & Painting Session" },
    { src: "/images/therapy-hero.png", title: "Life Skills Practice", caption: "Daily Routines & Communication" },
    { src: "/images/daycare-hero.png", title: "Social Connection", caption: "Peer Board Games & Games" },
    { src: "/images/therapy-approach.png", title: "Teamwork & Collaboration", caption: "Group Learning & Problem Solving" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#EAA85E] text-xs font-black tracking-wider uppercase mb-3 border border-white/10">
              <Camera className="w-4 h-4 text-[#EAA85E]" />
              <span>{tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              {title}
            </h2>

            <p className="text-[#EAA85E] text-base sm:text-lg font-bold">
              {subtitle}
            </p>
          </div>

          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all uppercase tracking-wider"
            >
              <span>Follow us on Instagram</span>
              <ArrowRight className="w-4 h-4 text-[#F57A54]" />
            </a>
          </div>
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-3xl overflow-hidden group border border-white/10 shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-extrabold text-sm">{item.title}</h4>
                  <Heart className="w-4 h-4 text-[#F57A54] fill-[#F57A54] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-slate-300">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Instagram CTA */}
        <div className="text-center pt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#EAA85E] hover:underline uppercase tracking-wider"
          >
            <span>Follow @handinhandtherapy on Instagram for daily life & activity updates</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
