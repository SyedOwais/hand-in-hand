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
  ArrowRight,
  ChevronDown,
  ChevronUp
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const trackParam = searchParams.get("track");
    if (trackParam === "adult") {
      setActiveTrack("adult");
    } else if (trackParam === "pediatric") {
      setActiveTrack("pediatric");
    }
  }, [searchParams]);

  // Reset expansion state when changing active category track
  useEffect(() => {
    setIsExpanded(false);
  }, [activeTrack]);

  // Dedicated Pediatric Gallery Items (Ages 2–18)
  const pediatricItems: GalleryItem[] = [
    {
      id: 101,
      title: "1:1 Pediatric ABA & Speech Therapy Session",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/child.webp",
      description: "Individualized play-based session focusing on early language development, communication, and emotional regulation.",
      featured: true
    },
    {
      id: 102,
      title: "Fine Motor & Educational Toy Activity",
      category: "pediatric",
      location: "Bradford",
      image: "/images/toy-activity.webp",
      description: "Tactile play station designed for fine motor dexterity, hand-eye coordination, and cognitive problem-solving."
    },
    {
      id: 103,
      title: "Early Childhood Peer Play Circle",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/kids.webp",
      description: "Interactive peer play circle encouraging verbal communication, sharing, and early childhood socialization."
    },
    {
      id: 104,
      title: "Therapist-Guided Clinical Interaction",
      category: "pediatric",
      location: "Bradford",
      image: "/images/interaction.webp",
      description: "Warm 1-on-1 interaction building trust, joint attention, and functional communication milestones."
    },
    {
      id: 105,
      title: "Themed Character Visits & Creative Play",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/character.webp",
      description: "Special event days featuring costume visits, sensory games, and joyful creative self-expression."
    },
    {
      id: 106,
      title: "Water Play & Hydrotherapy Session",
      category: "pediatric",
      location: "Bradford",
      image: "/images/swimming.webp",
      description: "Guided aquatic therapy promoting sensory integration, confidence, and gross motor skill development."
    },
    {
      id: 107,
      title: "Indoor Sensory & Learning Center",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/indoor.webp",
      description: "Structured multi-sensory environment equipped for cognitive building, motor play, and structured learning routines."
    },
    {
      id: 108,
      title: "Outdoor Exploration & Gross Motor Play",
      category: "pediatric",
      location: "Bradford",
      image: "/images/outdoor.webp",
      description: "Active outdoor play area designed for gross motor exercises, teamwork, and nature-based sensory discovery."
    },
    {
      id: 109,
      title: "Milestone Celebrations & Achievements",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/celebration.webp",
      description: "Joyful community gatherings celebrating developmental milestones, birthdays, and personal achievements."
    },
    {
      id: 110,
      title: "Peer Social Skills & Collaborative Group",
      category: "pediatric",
      location: "Bradford",
      image: "/images/activity.webp",
      description: "Interactive group activities fostering turn-taking, peer friendships, and cooperative problem solving."
    },
    {
      id: 111,
      title: "Summer Camp & Real-World Outings",
      category: "pediatric",
      location: "Concord / Vaughan",
      image: "/images/Childhood-Outside.webp",
      description: "Guided seasonal camp activities and park excursions expanding social connection beyond clinical walls."
    },
    {
      id: 112,
      title: "Focused 1-on-1 Cognitive Skill Building",
      category: "pediatric",
      location: "Bradford",
      image: "/images/therapy-hero.webp",
      description: "Targeted individual therapy session strengthening focus, task completion, and academic readiness."
    }
  ];

  // Dedicated Adult Day Program Gallery Items (Ages 18+)
  const adultItems: GalleryItem[] = [
    {
      id: 201,
      title: "Culinary Life-Skills & Meal Prep Workshop",
      category: "adult",
      location: "Bradford",
      image: "/images/Adults-Hero.webp",
      description: "Hands-on kitchen workshop where adult participants learn recipe planning, food safety, and independent cooking skills.",
      featured: true
    },
    {
      id: 202,
      title: "Daily Life Skills & Routine Building",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-01.webp",
      description: "Structured group activity guiding adults through independent daily planning, time management, and task routines."
    },
    {
      id: 203,
      title: "Vocational & Micro-Enterprise Skills Studio",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-02.webp",
      description: "Pre-vocational station for organizing items, sorting inventory, and building functional workplace competencies."
    },
    {
      id: 204,
      title: "Peer Socialization & Group Life Discussions",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-03.webp",
      description: "Collaborative group circles promoting social communication, active listening, and adult peer bonding."
    },
    {
      id: 205,
      title: "Community Outings & Local Grocery Navigation",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-04.webp",
      description: "Real-world community excursions focusing on budgeting, purchasing items, and navigating local retail settings."
    },
    {
      id: 206,
      title: "Creative Expression & Hands-On Art Workshop",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-05.webp",
      description: "Therapeutic art projects encouraging fine motor precision, creative focus, and group art showcase."
    },
    {
      id: 207,
      title: "Digital Literacy & Technology Skills Station",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-06.webp",
      description: "Guided computer literacy sessions introducing email navigation, online safety, and digital communication tools."
    },
    {
      id: 208,
      title: "Adaptive Fitness & Gross Motor Conditioning",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-07.webp",
      description: "Group physical wellness activity emphasizing mobility, stretching, balance, and healthy active living."
    },
    {
      id: 209,
      title: "Independent Home Management & Organization",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-08.webp",
      description: "Practical life station for practicing laundry folding, organization, and independent household care routines."
    },
    {
      id: 210,
      title: "Self-Advocacy & Goal Setting Workshop",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-09.webp",
      description: "Interactive group workshop empowering participants to communicate personal choices, daily preferences, and individual goals."
    },
    {
      id: 211,
      title: "Multi-Sensory Snoezelen & Relaxation Space",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-10.webp",
      description: "Calming multi-sensory environment equipped for sensory regulation, stress relief, and gentle relaxation."
    },
    {
      id: 212,
      title: "Social Dining & Community Lunch Hour",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-11.webp",
      description: "Shared mealtime social circle reinforcing conversation etiquette, table manners, and warm peer bonding."
    },
    {
      id: 213,
      title: "Community Trips & Local Excursions",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-12.webp",
      description: "Day excursions to local museums, parks, sports venues, and community events across York Region."
    },
    {
      id: 214,
      title: "Daily Goal-Focused Workshops",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-13.webp",
      description: "Tailored daily schedules including culinary workshops, fitness, creative arts, and group projects."
    },
    {
      id: 215,
      title: "Volunteering & Community Connection",
      category: "adult",
      location: "Bradford",
      image: "/images/adult-14.webp",
      description: "Local volunteering, vocational skills practice, and active participation in local businesses."
    },
    {
      id: 216,
      title: "Life Skills & Independence Building",
      category: "adult",
      location: "Concord / Vaughan",
      image: "/images/adult-15.webp",
      description: "Meal preparation, personal budgeting, digital literacy, transit training, and self-advocacy."
    }
  ];

  const currentItems = activeTrack === "pediatric" ? pediatricItems : adultItems;
  const displayedItems = isExpanded ? currentItems : currentItems.slice(0, 6);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
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
          Explore our state-of-the-art therapy suites and adult day hubs in Concord / Vaughan & Bradford. Click any photograph to enlarge.
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
        {displayedItems.map((item, idx) => {
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

      {/* Expand / View More Button Bar positioned right after all 6 primary images */}
      <div className="flex justify-center pt-6">
        {!isExpanded && currentItems.length > 6 ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="group px-8 py-3.5 rounded-full bg-[#1B3B48] hover:bg-[#2A5243] text-white text-xs sm:text-sm font-extrabold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 transform hover:-translate-y-0.5"
          >
            <span>View More</span>
            <ChevronDown className="w-4 h-4 text-[#F57A54] group-hover:translate-y-0.5 transition-transform" />
          </button>
        ) : isExpanded ? (
          <button
            onClick={() => setIsExpanded(false)}
            className="px-6 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-extrabold transition-all flex items-center gap-2 shadow-xs"
          >
            <span>Show Less</span>
            <ChevronUp className="w-4 h-4 text-slate-500" />
          </button>
        ) : null}
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
                src={displayedItems[lightboxIndex].image}
                alt={displayedItems[lightboxIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B8E7B] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F57A54]" />
                  {displayedItems[lightboxIndex].location} • {activeTrack === "pediatric" ? "Pediatric Therapy" : "Adult Day Program"}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  {lightboxIndex + 1} of {displayedItems.length}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {displayedItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {displayedItems[lightboxIndex].description}
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

      <main className="flex-grow pt-32 sm:pt-36 pb-16 sm:pb-24">
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
