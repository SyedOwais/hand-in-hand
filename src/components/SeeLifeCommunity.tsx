"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight, Heart, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryItem {
  src: string;
  title: string;
  caption: string;
}

interface SeeLifeCommunityProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items?: GalleryItem[];
  instagramUrl?: string;
  galleryLink?: string;
  buttonText?: string;
}

export default function SeeLifeCommunity({
  title = "See Life at The Next Level",
  subtitle = "Building confidence, connection, and lifelong skills — Together We Can!",
  tagline = "York Region Community Moments",
  items,
  instagramUrl = "https://www.instagram.com/handinhandtherapy/",
  galleryLink = "/gallery?track=pediatric",
  buttonText = "View Full Gallery",
}: SeeLifeCommunityProps) {
  const defaultGallery: GalleryItem[] = [
    { src: "/images/child.webp", title: "Individualized Therapy & Engagement", caption: "Child-Centered Support & Growth" },
    { src: "/images/swimming.webp", title: "Water Play & Hydrotherapy", caption: "Sensory Integration & Fun" },
    { src: "/images/indoor.webp", title: "Indoor Sensory & Play", caption: "Structured Indoor Learning Environment" },
    { src: "/images/outdoor.webp", title: "Outdoor Exploration", caption: "Park Outings & Motor Skills" },
    { src: "/images/celebration.webp", title: "Milestone Celebrations", caption: "Celebrating Progress & Achievements" },
    { src: "/images/activity.webp", title: "Group & Peer Activities", caption: "Social Skills & Collaborative Play" },
  ];

  const gallery = items || defaultGallery;

  // Lightbox slider state
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  }, [gallery.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="py-20 bg-[#FAFDFB] text-[#1B3B48] relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-black tracking-wider uppercase mb-3 border border-[#4A7C64]/20">
              <Camera className="w-4 h-4 text-[#4A7C64]" />
              <span>{tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight mb-2">
              {title}
            </h2>

            <p className="text-[#2A5243] text-base sm:text-lg font-bold">
              {subtitle}
            </p>
          </div>

          <div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md transition-all uppercase tracking-wider group border border-[#1B3B48]"
            >
              <span>Follow us on Instagram</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>

        {/* 6 Photo Grid with Clickable Full Slider trigger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="relative h-64 rounded-3xl overflow-hidden group border border-white/10 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              {/* Expand Icon Badge on Hover */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>

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

        {/* Bottom Gallery CTA Button */}
        <div className="text-center pt-10">
          <Link
            href={galleryLink}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#F57A54] hover:bg-[#E3643E] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>

      {/* Lightbox Slider Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Control Bar */}
          <div className="flex items-center justify-between z-20 max-w-6xl mx-auto w-full pt-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-extrabold text-xs tracking-wider uppercase border border-white/10">
                {selectedIndex + 1} / {gallery.length}
              </span>
              <h3 className="font-extrabold text-white text-sm sm:text-base hidden sm:block">
                {gallery[selectedIndex].title}
              </h3>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 hover:scale-110"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Main Image Slider View */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl mx-auto w-full">
            {/* Previous Button */}
            <button
              onClick={showPrev}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Full Image */}
            <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center">
              <div className="relative w-full h-full max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
                <Image
                  src={gallery[selectedIndex].src}
                  alt={gallery[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={showNext}
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Bottom Caption & Instagram Link Bar */}
          <div className="max-w-3xl mx-auto text-center z-20 space-y-3 pb-2">
            <h4 className="font-extrabold text-white text-lg sm:text-xl">
              {gallery[selectedIndex].title}
            </h4>
            <p className="text-sm text-slate-300">
              {gallery[selectedIndex].caption}
            </p>
            <div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#EAA85E] hover:underline uppercase tracking-wider"
              >
                <span>View story on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
