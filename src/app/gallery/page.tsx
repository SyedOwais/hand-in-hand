"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Camera,
  Sparkles,
  Heart,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "pediatric" | "adult";
  location: "Concord / Vaughan" | "Bradford";
  image: string;
  description: string;
  featured?: boolean;
}

function GalleryContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track") === "adult" ? "adult" : "pediatric";

  const [activeTrack, setActiveTrack] = useState<"pediatric" | "adult">(initialTrack);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const trackParam = searchParams.get("track");
    if (trackParam === "adult") {
      setActiveTrack("adult");
    } else if (trackParam === "pediatric") {
      setActiveTrack("pediatric");
    }
  }, [searchParams]);

  // Dedicated Pediatric Gallery Items (Ages 2–18)
  const pediatricItems: GalleryItem[] = [
    {
      id: 101,
      title: "Multi-Sensory Snoezelen Discovery Sanctuary",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/camp-community.png",
      description: "Interactive sensory room with fiber-optic light cables, glowing bubble columns, and soft beanbags for self-regulation.",
      featured: true
    },
    {
      id: 102,
      title: "Pediatric Speech & ABA 1-on-1 Suite",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
      description: "Individualized speech therapy & ABA desk set up for play-based communication, vocabulary building, and positive reinforcement."
    },
    {
      id: 103,
      title: "Pediatric Occupational Therapy Gymnasium",
      category: "pediatric",
      location: "Bradford",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop",
      description: "Sensory-motor gym featuring crash pads, adaptive swings, and climbing structures to strengthen motor planning and balance."
    },
    {
      id: 104,
      title: "Group Socialization & Play Circle",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/therapy-hero.png",
      description: "Small-group social circles where children practice turn-taking, emotion recognition, and cooperative play."
    },
    {
      id: 105,
      title: "Fine Motor & Creative Art Studio",
      category: "pediatric",
      location: "Bradford",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop",
      description: "Tactile art space designed to strengthen pincer grip, hand-eye coordination, and self-expression through craft."
    },
    {
      id: 106,
      title: "Early Intervention Sensory Play Nook",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/daycare-hero.png",
      description: "Nurturing early childhood space tailored for toddlers starting early intensive behavior and speech intervention."
    }
  ];

  // Dedicated Adult Day Program Gallery Items (Ages 18+)
  const adultItems: GalleryItem[] = [
    {
      id: 201,
      title: "Life-Skills Culinary & Meal Prep Kitchen",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-day-program.png",
      description: "Accessible kitchen hub where adult participants learn cooking recipes, food safety, dishwashing, and independent meal prep.",
      featured: true
    },
    {
      id: 202,
      title: "Digital Literacy & Computer Career Lab",
      category: "adult",
      location: "Concord / Vaughan",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      description: "Modern technology lab equipped with desktop workstations for email literacy, online budgeting, and job research."
    },
    {
      id: 203,
      title: "Adaptive Fitness & Movement Studio",
      category: "adult",
      location: "Concord / Vaughan",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
      description: "Spacious wellness studio hosting daily adaptive stretching, yoga, dance, and cardiovascular conditioning."
    },
    {
      id: 204,
      title: "Adult Peer Social & Gaming Lounge",
      category: "adult",
      location: "Bradford",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
      description: "Comfortable community lounge equipped with board games, smart displays, and lounge seating for building adult friendships."
    },
    {
      id: 205,
      title: "Community Vocational Outings",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-community-trips.png",
      description: "Supervised outings to local grocery stores, libraries, parks, and cafes to apply real-world money management & social skills."
    },
    {
      id: 206,
      title: "Adult Multi-Sensory Relaxation Sanctuary",
      category: "adult",
      location: "Bradford",
      image: "/images/therapy-approach.png",
      description: "Quiet relaxation room with dimmable ambient lighting and weighted blankets for adult sensory regulation."
    }
  ];

  const currentItems = activeTrack === "pediatric" ? pediatricItems : adultItems;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentItems.length) % currentItems.length);
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
          <Camera className="w-4 h-4 text-[#F57A54]" />
          <span>Center Photo Showcase</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B3B48] tracking-tight">
          Facility & Center Gallery
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          Click any photograph below to open the full-screen interactive view.
        </p>
      </div>

      {/* Main Track Toggle Switch Bar */}
      <div className="flex justify-center pt-2">
        <div className="bg-white/80 backdrop-blur-md p-2 rounded-full border border-slate-200 shadow-lg inline-flex items-center gap-2">
          
          {/* Pediatric Track Button (2-18) */}
          <button
            onClick={() => setActiveTrack("pediatric")}
            className={`px-6 py-3 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 ${
              activeTrack === "pediatric"
                ? "bg-[#2A5243] text-white shadow-xl scale-105"
                : "text-slate-600 hover:text-[#2A5243] hover:bg-[#E8F0EC]"
            }`}
          >
            <Heart className={`w-4 h-4 ${activeTrack === "pediatric" ? "text-[#F57A54]" : "text-[#2A5243]"}`} />
            <span>Pediatric Gallery (2–18)</span>
          </button>

          {/* Adult Track Button (18+) */}
          <button
            onClick={() => setActiveTrack("adult")}
            className={`px-6 py-3 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 ${
              activeTrack === "adult"
                ? "bg-[#1B3B48] text-white shadow-xl scale-105"
                : "text-slate-600 hover:text-[#1B3B48] hover:bg-slate-100"
            }`}
          >
            <Sparkles className={`w-4 h-4 ${activeTrack === "adult" ? "text-[#6B8E7B]" : "text-[#1B3B48]"}`} />
            <span>Adult Gallery (18+)</span>
          </button>

        </div>
      </div>

      {/* Asymmetric Bento Photography Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 auto-rows-[280px] sm:auto-rows-[320px]">
        {currentItems.map((item, idx) => {
          const isFeatured = item.featured;
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 ${
                isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
              }`}
            >
              {/* Full Photo */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glassmorphism Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/95 via-[#0F2530]/25 to-transparent flex flex-col justify-between p-6 text-white">
                
                {/* Top Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                    {item.location}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 shadow-lg border border-white/20">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="space-y-1.5">
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs ${
                    item.category === "pediatric" ? "bg-[#2A5243] text-white" : "bg-[#1B3B48] text-white"
                  }`}>
                    {item.category === "pediatric" ? "Pediatric (2–18)" : "Adult (18+)"}
                  </span>

                  <h3 className={`font-bold text-white group-hover:text-[#6B8E7B] transition-colors leading-snug drop-shadow-md ${
                    isFeatured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                  }`}>
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-10 border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-10 border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors z-10 border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#0F2530] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/15 space-y-0">
            <div className="relative h-[360px] sm:h-[480px] w-full">
              <Image
                src={currentItems[lightboxIndex].image}
                alt={currentItems[lightboxIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B8E7B] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F57A54]" />
                  {currentItems[lightboxIndex].location} • {activeTrack === "pediatric" ? "Pediatric Therapy" : "Adult Day Program"}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  {lightboxIndex + 1} of {currentItems.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tour CTA Banner */}
      <div className="bg-[#2A5243] rounded-3xl p-8 sm:p-12 text-center text-white space-y-4 shadow-xl border border-[#2A5243]/50">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Would You Like to Tour Our Centers in Person?
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
          Book a personalized walkthrough with our intake coordinators at Concord / Vaughan or Bradford.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>Schedule Center Tour</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-20">
              <span className="text-[#2A5243] font-bold text-lg">Loading Gallery...</span>
            </div>
          }>
            <GalleryContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
