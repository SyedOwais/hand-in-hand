import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdultFAQSection from "@/components/AdultFAQSection";
import {
  Heart,
  Target,
  Sparkles,
  ShieldCheck,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Compass,
  BookOpen,
  UserCheck,
  Smile,
  Shield,
  Layers,
  Award
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Next Level | Adult Day Program (Ages 18+)",
  description: "Learn about Hand in Hand - The Next Level, our dedicated adult day program created by Nakita Medeiros. Providing life skills, peer community, sensory chill zones, and respite care for teenagers & adults 18+ in Vaughan & Bradford.",
  openGraph: {
    title: "About The Next Level | Adult Day Program (18+)",
    description: "Our story, mission, and founder vision for teenagers and adults with special needs across Vaughan & Bradford.",
    url: "https://handinhandtherapy.ca/about-the-next-level",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/Adults-Hero.webp",
        width: 1200,
        height: 630,
        alt: "Hand in Hand - The Next Level Adult Day Program",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About The Next Level | Adult Day Program (18+)",
    description: "Dedicated adult day programming, life skills, and caregiver respite in Vaughan & Bradford.",
    images: ["/images/Adults-Hero.webp"],
  },
};

export default function AboutTheNextLevelPage() {
  const stats = [
    { label: "Founder Leadership", value: "Since 2010" },
    { label: "Target Age Focus", value: "Teens & Adults 18+" },
    { label: "Support Ratios", value: "Flexible Ratios" },
    { label: "Community Locations", value: "Vaughan & Bradford" },
  ];

  const diagnosesServed = [
    "Autism Spectrum Disorder (ASD)",
    "Global Development Delay",
    "Intellectual Learning Disabilities",
    "Down Syndrome",
    "High Needs Profiles",
    "Other Developmental Diagnoses"
  ];

  const strugglesAddressed = [
    "Language & Expressive Skills",
    "Behaviours & Emotional Support",
    "Communication & Socialization",
    "Mobility & Motor Coordination",
    "Learning & Cognitive Growth",
    "Self-Help & Independent Living"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-38">

        {/* Hero Section */}
        <section className="relative py-14 sm:py-24 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          
          {/* Faded Background Image Banner (Adult Image Only) */}
          <div className="absolute inset-0 z-0 opacity-20 sm:opacity-25 pointer-events-none overflow-hidden">
            <Image
              src="/images/Adults-Hero.webp"
              alt="Hand in Hand - The Next Level Adult Day Program Hero"
              fill
              className="object-cover object-center scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5]/85 to-[#FBF9F5]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/90 via-transparent to-[#FBF9F5]/90" />
          </div>

          {/* Ambient Lighting Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-sm backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>About Our Adult Day Program</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-none mb-3">
                Hand in Hand - The Next Level
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-4">
                Together We Can!
              </p>

              <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
                A dedicated group of professional educators and clinicians providing efficient and effective educational services for adults and young individuals with developmental special needs.
              </p>

              {/* Founder Tagline Banner */}
              <div className="pt-3 inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200 shadow-md text-xs sm:text-sm font-bold text-[#1B3B48]">
                <Award className="w-4 h-4 text-[#F57A54]" />
                <span>Established 2010 • Professional Educational & Clinical Leadership</span>
              </div>

            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-md text-center transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#2A5243]">
                    {stat.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-700 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 1: Who We Are */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Image Column (Adult Image Only) */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/adult-01.webp"
                  alt="Hand in Hand - The Next Level Adult Program Group Social Connections"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1">
                  <span className="text-xs font-bold text-[#EAA85E] uppercase tracking-wider block">Clinical & Educational Excellence</span>
                  <h3 className="text-lg font-extrabold">Specializing in Developmental Support for Over 10 Years</h3>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-6 space-y-6">

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs font-extrabold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-[#2A5243]" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48] leading-tight">
                  Hand in Hand - The Next Level
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  <strong>Hand in Hand - The Next Level</strong> consists of a group of professional educators and clinicians who are dedicated to providing efficient and effective educational services for all adults/young. The team at Hand in Hand - The Next Level has specialized in providing therapy for individuals with developmental disabilities for over ten years.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  Developmental disabilities include those living with autism spectrum disorders, global development delay, intellectual learning disabilities, down syndrome and other diagnoses causing difficulties in certain areas in life. The areas most struggle with include language, behaviours, communication, social skills mobility, learning, self-help, and independent living.
                </p>

                {/* Diagnoses Pills */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#2A5243] block">Diagnoses Served:</span>
                  <div className="flex flex-wrap gap-2">
                    {diagnosesServed.map((diag, i) => (
                      <span key={i} className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] border border-[#2A5243]/20">
                        {diag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Struggles Addressed & Open Door Policy Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-stretch">

              {/* Card 1: Key Life Areas (6 Columns) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white via-[#FBF9F5] to-white p-8 sm:p-10 rounded-[32px] border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
                      <Target className="w-3.5 h-3.5 text-[#F57A54]" />
                      <span>Growth Domains</span>
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48]">
                      Areas Most Struggle With
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Our structured programming targets essential daily domains for continuous growth:
                    </p>
                  </div>
                </div>

                {/* 6 Skill Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {strugglesAddressed.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-extrabold text-[#1B3B48] leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Open-Door Policy (6 Columns) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#E8F0EC]/80 via-white to-[#FBF9F5] p-8 sm:p-10 rounded-[32px] border border-[#2A5243]/20 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Complete Open-Door Policy</span>
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48]">
                      Total Transparency & Parent Involvement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Collectively, the Hand in Hand - The Next Level team has experienced the ins and outs of many treatment clinics and thoroughly understand a vast variety of therapy styles. At Hand in Hand - The Next Level there is a complete open-door policy.
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#2A5243]/20 shadow-md space-y-2 relative">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#2A5243] text-white text-[10px] font-black uppercase rounded-full">
                    Parent Partnership
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium pt-1">
                    &ldquo;This not only allows for parents to take part and watch their loved ones grow day by day, but also gives them the opportunity to learn and continue therapy exercises at home.&rdquo;
                  </blockquote>
                </div>

                {/* Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    "👁️ Open-Door Observation",
                    "📊 Daily Progress Tracking",
                    "🏠 Home Therapy Integration"
                  ].map((chip, cIdx) => (
                    <span key={cIdx} className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-[#2A5243] shadow-sm">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: What Hand in Hand - The Next Level Does */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-[40px] sm:rounded-[56px] bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#E8F0EC]/80 text-[#1B3B48] p-6 sm:p-14 lg:p-16 shadow-xl border border-slate-200/90 overflow-hidden">

            {/* Ambient Lighting Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2A5243]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-12 sm:space-y-16">

              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#F57A54]" />
                  <span>Core Program Purpose & Impact</span>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1B3B48] tracking-tight leading-none">
                  What Hand in Hand - The Next Level Does
                </h2>

                <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                  A day program specifically catering to teenagers and adults with special needs in a safe, inclusive, and empowering environment.
                </p>
              </div>

              {/* Bento Box Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                {/* Bento Card A: Safe Atmosphere & Chill Zone (7 Columns) */}
                <div className="lg:col-span-7 group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/90 hover:border-[#F57A54]/50 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl overflow-hidden">

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-md">
                        <Smile className="w-3.5 h-3.5" />
                        Safe Atmosphere & Nook
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#F57A54]/10 flex items-center justify-center text-[#F57A54] border border-[#F57A54]/20">
                        <Sparkles className="w-5 h-5 text-[#F57A54]" />
                      </div>
                    </div>

                    <div className="space-y-3 max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight">
                        Safe Atmosphere & Dedicated &ldquo;Chill Zone&rdquo;
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                        Hand in Hand - The Next Level is a day program specifically catering to teenagers and adults with special needs. The atmosphere that Hand in Hand - The Next Level provides all attendees, is a safe and inclusive environment where teenagers and adults will be able to express themselves.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Hand in Hand - The Next Level intended to provide their clients with a safe &ldquo;chill zone&rdquo; that was previously not available. Hand in Hand - The Next Level is a place where teenagers and adults with special needs are encouraged to explore and meet new friends, hang out and feel comfort among peers. The legal business structure of Hand in Hand - The Next Level is a corporation.
                      </p>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="relative z-10 pt-6 border-t border-slate-100 mt-6">
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "✨ Inclusive Environment",
                        "🎮 Safe Chill Zone",
                        "🤝 Genuine Peer Friendship",
                        "🎨 Creative Self-Expression"
                      ].map((pill, pIdx) => (
                        <span key={pIdx} className="text-xs font-extrabold px-3.5 py-1.5 rounded-xl bg-[#FBF9F5] border border-slate-200 text-[#1B3B48] shadow-sm">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bento Card B: Motor & Valuable Life Skills (5 Columns) */}
                <div className="lg:col-span-5 group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/90 hover:border-[#2A5243]/50 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl overflow-hidden">

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A5243] text-white text-xs font-black uppercase tracking-wider shadow-md">
                        <Compass className="w-3.5 h-3.5" />
                        Autonomy & Skills
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#2A5243]/10 flex items-center justify-center text-[#2A5243] border border-[#2A5243]/20">
                        <Layers className="w-5 h-5 text-[#2A5243]" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight">
                        Gross, Fine Motor & Life Skills
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                        Hand in Hand - The Next Level will also aid these individuals in learning new skills such as gross motor skills, fine motor skills, and valuable life skills.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Hand in Hand - The Next Level aims to meet the needs of high needs individuals, and individuals with behavioural issues who may need extra support in other day program environments.
                      </p>
                    </div>
                  </div>

                  {/* Image Badge (Adult Image Only) */}
                  <div className="relative z-10 pt-6 mt-6">
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src="/images/Adults-Hero.webp"
                        alt="Life Skills & Program Engagement"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top sm:object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-extrabold text-white">
                        <span>High Needs & Behavioural Support</span>
                        <ArrowRight className="w-4 h-4 text-[#F57A54]" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bento Card C: Full-Width Parent Relief & Flexible Support Ratios (12 Columns) */}
                <div className="lg:col-span-12 group relative bg-gradient-to-r from-[#E8F0EC] via-white to-[#E8F0EC] rounded-3xl p-6 sm:p-10 border border-[#2A5243]/20 transition-all duration-500 shadow-xl overflow-hidden">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Media Frame (Adult Image Only) */}
                    <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl">
                      <Image
                        src="/images/adult-07.webp"
                        alt="Adult Day Program Caregiver Relief & Community Recreation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-75" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white">
                        <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Caregiver Relief</span>
                        <p className="text-xs text-white mt-0.5 font-medium">Safe haven for high needs individuals & families.</p>
                      </div>
                    </div>

                    {/* Content & Micro-Stat Cards */}
                    <div className="lg:col-span-7 space-y-6">

                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                          <Heart className="w-3.5 h-3.5" />
                          <span>Parent Relief & Support Ratios</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight">
                          Essential Relief for Families
                        </h3>

                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                          Hand in Hand - The Next Level is a space where parents will feel comfortable bringing their loved ones. Hand in Hand - The Next Level allows parents to receive relief that was not accessible previously due to a serious lack of such programs, specifically for high needs individuals. Hand in Hand - The Next Level operates with flexible support ratios tailored to individual participant needs, offering small group support as well as one on one guidance on a need base.
                        </p>
                      </div>

                      {/* Stat Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#2A5243]">Flexible Ratios</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Tailored to Client Needs</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#1B3B48]">1:1 Support</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Offered On Need Base</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#F57A54]">Corporation</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Legal Business Structure</span>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 3: What Hand in Hand - The Next Level Has To Offer */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="bg-[#0F2530] text-white p-8 sm:p-14 rounded-3xl shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Bridging the Community Gap</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  What Hand in Hand - The Next Level Has To Offer
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  The transition to independence throughout young adulthood is a challenging and pivotal time for everybody. For young adults with developmental disabilities, these periods can be particularly difficult. Hand in Hand- The Next Level understands this difficulty that many teens and young adults with special needs are simply unprepared to experience.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  The main objective of Hand in Hand- The Next Level is to help ease individuals adjusting to having fewer and less structured support programs by providing a service to the community that is practically non-existent, especially to those with high needs.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  There are very few programs available for teenagers and adults with special needs that allow them to have the experiences in a safe and controlled environment catering specially to their needs. This demand will specifically allow Hand in Hand- The Next Level to excel as an organization.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-lg transition-all"
                  >
                    <UserCheck className="w-4 h-4 text-[#2A5243]" />
                    <span>View Admissions Process</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#F57A54] hover:bg-[#e06843] border border-white/20 transition-all"
                  >
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>

              {/* Adult Image Only */}
              <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/images/adult-06.webp"
                  alt="Adult Day Program Environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Life Skills & Community Connection</span>
                  <p className="text-xs text-slate-200 mt-0.5 font-medium">Empowering teenagers and adults with developmental special needs.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Adult Program FAQs */}
        <AdultFAQSection />

      </main>

      <Footer />
    </div>
  );
}
