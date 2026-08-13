import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdultFAQSection from "@/components/AdultFAQSection";
import {
  Utensils,
  Sparkles,
  BookOpen,
  Music,
  Dumbbell,
  Users,
  ArrowRight,
  CheckCircle2,
  Heart,
  Compass,
  Layers
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | The Next Level Adult Day Program (18+)",
  description: "Explore our comprehensive adult day programs in a modern Bento Grid format: Life Skills, Daily Living, Academic, Recreation & Leisure, Physical Fitness, Social Skills, and Community Involvement across York Region & Simcoe County.",
  openGraph: {
    title: "Adult Day Programs (Ages 18+) | Hand In Hand - The Next Level",
    description: "Life skills, daily living, academic, fitness, and community involvement for adults 18+ in Vaughan & Bradford.",
    url: "https://handinhandtherapy.ca/adult-programs",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/Adults-Hero.webp",
        width: 1200,
        height: 630,
        alt: "The Next Level Adult Day Program Curriculum",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Day Programs (Ages 18+) | The Next Level",
    description: "Explore our 7 core program areas for adults with developmental special needs.",
    images: ["/images/Adults-Hero.webp"],
  },
};

export default function AdultProgramsPage() {
  const communityDestinations = [
    "YMCA Fitness & Swim",
    "Snoezelen Room Visits",
    "Grocery Shopping Outings",
    "Movie Theatres",
    "Local Theatre Shows",
    "Public Libraries",
    "Tim Horton's / McDonald's Socials",
    "Shopping Malls",
    "Museums & Animal Farms",
    "Local Restaurants",
    "Home Depot Projects",
    "Community Volunteer Work"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>Adult Day Program (18+)</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-none mb-3">
                Hand in Hand
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-4">
                Together We Can!
              </p>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                Empowering adults with unique abilities to achieve independence, active community involvement, lifelong friendships, and personal growth through our interactive Bento Grid programming tracks.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-12 sm:py-20 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Comprehensive Bento Matrix
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3B48]">
                Interactive Skill Building & Enrichment Tracks
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Each program is tailored with dedicated visual environments, hands-on learning spaces, and community connections.
              </p>
            </div>

            {/* Asymmetric Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

              {/* Bento Card 1: Life Skills Program (Span 7) */}
              <div className="lg:col-span-7 bg-gradient-to-br from-white via-[#FBF9F5] to-[#E8F0EC]/40 rounded-3xl p-5 sm:p-7 border border-[#2A5243]/15 hover:border-[#2A5243]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2A5243]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#E8F0EC] to-[#D5E5DC] text-[#2A5243] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#4A7C64]/20 shadow-xs">
                      Essential Independence
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 01</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] flex items-center gap-2.5 mb-2">
                    <Utensils className="w-6 h-6 text-[#2A5243] shrink-0" />
                    <span>Life Skills & Cooking Program</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Menu Planning, Cooking, Budgeting & Household Self-Care
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A5243]/20 via-[#4A7C64]/15 to-[#F57A54]/20 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-14.webp"
                        alt="Life Skills & Cooking Program"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Menu Planning & Budgeting",
                      "Cooking and Food Preparation",
                      "Baking & Culinary Safety",
                      "Grocery Shopping Outings",
                      "Housekeeping & Organization",
                      "Laundry Routine Skills",
                      "Bathing & Personal Care",
                      "Self-Wellness & Hygiene"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Daily Living Skills / Self Help (Span 5) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-white via-[#FBF9F5] to-[#FFF0EB]/50 rounded-3xl p-5 sm:p-7 border border-[#F57A54]/20 hover:border-[#F57A54]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F57A54]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#FFF0EB] to-[#FFE0D6] text-[#F57A54] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#F57A54]/20 shadow-xs">
                      Self-Help Mastery
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 02</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] flex items-center gap-2.5 mb-2">
                    <Heart className="w-6 h-6 text-[#F57A54] shrink-0" />
                    <span>Daily Living / Personal Care</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Hands-on routines for personal grooming, hygiene & independence
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F57A54]/25 via-[#EAA85E]/15 to-[#2A5243]/15 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-05.webp"
                        alt="Daily Living / Personal Care"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      "Learn Personal Grooming & Hygiene",
                      "Learn Hair Care & Self-Wellness",
                      "Learn To Make Up A Room",
                      "Learn To Clean Living Room",
                      "Skills In The Washroom",
                      "And Much More..."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 3: Cognitive & Table Activities (Span 4) */}
              <div className="lg:col-span-4 bg-gradient-to-br from-white via-[#FBF9F5] to-[#E8F0EC]/40 rounded-3xl p-5 sm:p-7 border border-[#4A7C64]/20 hover:border-[#4A7C64]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#4A7C64]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#E8F0EC] to-[#D5E5DC] text-[#4A7C64] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#4A7C64]/20 shadow-xs">
                      Cognitive Focus
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 03</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#1B3B48] flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-[#4A7C64] shrink-0" />
                    <span>Cognitive & Table Games</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Puzzles, focus & cognitive learning
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A7C64]/25 via-[#2A5243]/15 to-[#EAA85E]/15 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-12.webp"
                        alt="Cognitive & Table Games"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Jigsaw Puzzles & Problem Solving",
                      "Tabletop Games & Strategy",
                      "Individual Worksheets & Books",
                      "Classroom Learning Stations",
                      "Functional Reading & Math"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                        <span className="text-xs font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 4: Recreation & Outings (Span 8) */}
              <div className="lg:col-span-8 bg-gradient-to-br from-white via-[#FBF9F5] to-[#FFF0EB]/50 rounded-3xl p-5 sm:p-7 border border-[#F57A54]/20 hover:border-[#F57A54]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F57A54]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#FFF0EB] to-[#FFE0D6] text-[#F57A54] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#F57A54]/20 shadow-xs">
                      Community Outings
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 04</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] flex items-center gap-2.5 mb-2">
                    <Music className="w-6 h-6 text-[#F57A54] shrink-0" />
                    <span>Recreation & Bowling Trips</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Splitsville bowling, outings & community fun
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F57A54]/25 via-[#EAA85E]/20 to-[#4A7C64]/15 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-07.webp"
                        alt="Recreation & Bowling Trips"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {[
                      "Splitsville Bowling Trips",
                      "Farm Visits & Pet Therapy",
                      "Indoor Play Yards",
                      "Shopping Outings",
                      "Theatre & Movie Trips",
                      "Games & Puzzles",
                      "Arts & Crafts",
                      "Books & Smart Stories",
                      "Music & Rhythm Sessions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                        <span className="text-xs font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 5: Physical Fitness Program (Span 6) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white via-[#FBF9F5] to-[#E8F0EC]/40 rounded-3xl p-5 sm:p-7 border border-[#2A5243]/20 hover:border-[#2A5243]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2A5243]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#E8F0EC] to-[#D5E5DC] text-[#2A5243] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#4A7C64]/20 shadow-xs">
                      Active Health & Exercise
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 05</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] flex items-center gap-2.5 mb-2">
                    <Dumbbell className="w-6 h-6 text-[#2A5243] shrink-0" />
                    <span>Physical Fitness & Exercise</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Elliptical fitness, sports & active health
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A5243]/25 via-[#4A7C64]/20 to-[#F57A54]/15 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-03.webp"
                        alt="Physical Fitness & Exercise"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Elliptical Machine Workout",
                      "Gymnasium Games & Sports",
                      "Swimming Sessions",
                      "Outdoor Parks & Trails",
                      "Fitness & Movement Classes",
                      "Physiotherapy / Exercise"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 6: Social Skills Program (Span 6) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white via-[#FBF9F5] to-[#FFF0EB]/50 rounded-3xl p-5 sm:p-7 border border-[#F57A54]/20 hover:border-[#F57A54]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F57A54]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-gradient-to-r from-[#FFF0EB] to-[#FFE0D6] text-[#F57A54] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#F57A54]/20 shadow-xs">
                      Peer Connection & Circles
                    </span>
                    <span className="text-xs font-bold text-slate-400">Activity Track 06</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] flex items-center gap-2.5 mb-2">
                    <Users className="w-6 h-6 text-[#F57A54] shrink-0" />
                    <span>Group Social Connections</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium mb-5">
                    Circle discussions, peer bonds & guided social time
                  </p>

                  {/* 100% Full Width Uncropped Photo with Luminous Ambient Light Glow */}
                  <div className="w-full mb-6 relative group/img">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F57A54]/25 via-[#2A5243]/20 to-[#EAA85E]/15 rounded-2.5xl blur-xs opacity-75 group-hover/img:opacity-100 transition duration-300" />
                    <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-sm">
                      <Image
                        src="/images/adult-01.webp"
                        alt="Group Social Connections"
                        width={800}
                        height={533}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="w-full h-auto rounded-xl group-hover/img:scale-[1.01] transition-transform duration-300 block"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Social Communication Practice",
                      "Lifelong Friendships Development",
                      "Big Brother/Big Sister Program",
                      "Game Day Competitions",
                      "Guided Social Interactions",
                      "And much, much more..."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hero Bento Feature Card 7: Community Involvement Program */}
        <section className="py-16 sm:py-24 bg-[#FAFDFB] text-[#1B3B48] relative overflow-hidden border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#4A7C64]/30 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                    <Image
                      src="/images/adult-04.webp"
                      alt="Community Involvement Program Participant"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                      <span className="text-xs font-bold text-[#2A5243] uppercase tracking-wider block">Community Transferable Skills</span>
                      <p className="text-sm font-bold text-[#1B3B48] mt-0.5">Real-World Outings Across York Region & Simcoe County</p>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-extrabold uppercase tracking-wider border border-[#4A7C64]/20">
                    <Compass className="w-3.5 h-3.5 text-[#4A7C64]" />
                    <span>Bento Spotlight Track</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48] leading-tight">
                    Community Involvement Program
                  </h2>

                  <blockquote className="p-5 rounded-2xl bg-[#FBF9F5] border-l-4 border-[#2A5243] text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;THE NEXT LEVEL Centre prides itself on encouraging participants to be active in our community. Recreation, leisure and volunteering experiences are explored within the community with the intention that the skills learned by this exposure to the community will transfer outside the program setting of THE NEXT LEVEL.&rdquo;
                  </blockquote>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold text-[#2A5243] uppercase tracking-wider">
                      Through THE NEXT LEVEL participants are involved and exposed to the community in the following ways:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                      {communityDestinations.map((dest, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-[#E8F0EC]/50 p-3 rounded-xl border border-slate-200/80 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                          <span className="text-xs font-semibold text-slate-700">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Adult Program FAQs */}
        <AdultFAQSection />

        {/* CTA Enrolment Banner */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-[#E8F0EC] via-[#F4F9F6] to-[#FAFDFB] text-[#1B3B48] relative overflow-hidden border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B3B48]">
              Ready to Experience The Next Level?
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We accept Passport Funding & private payment options. Schedule a personal walkthrough of our Concord or Bradford centers today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="/adult-program#funding"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-[#1B3B48] bg-white border-2 border-[#4A7C64]/40 hover:border-[#1B3B48] shadow-xs transition-all duration-300"
              >
                <span>Explore Funding Options</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
