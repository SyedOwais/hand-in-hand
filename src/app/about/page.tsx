import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ABATherapyFAQSection from "@/components/ABATherapyFAQSection";
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
  Camera,
  BookOpen,
  HelpCircle,
  Clock,
  UserCheck,
  Smile,
  Shield,
  Layers,
  Award
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hand In Hand Therapy Centre",
  description: "Learn about Hand In Hand Therapy Centre (est. 2010). Dedicated clinicians offering ABA therapy, speech-language pathology, and occupational therapy (ages 2–18) across Vaughan & Bradford.",
  openGraph: {
    title: "About Us | Hand In Hand Therapy Centre (Established 2010)",
    description: "Our story, mission, and clinical leadership. Transformative pediatric & adolescent therapy in Vaughan & Bradford.",
    url: "https://handinhandtherapy.ca/about",
    siteName: "Hand In Hand Therapy Centre",
    images: [
      {
        url: "/images/interaction.webp",
        width: 1200,
        height: 630,
        alt: "Hand In Hand Therapy Centre Leadership Team",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Hand In Hand Therapy Centre",
    description: "Learn about our mission, 10+ years of clinical excellence, and founder leadership.",
    images: ["/images/interaction.webp"],
  },
};

export default function AboutPage() {
  const stats = [
    { label: "Years of Specialized Care", value: "10+" },
    { label: "Clinical Leadership", value: "Since 2010" },
    { label: "Personalized Support", value: "1:1 Available" },
    { label: "Dedicated Community Hubs", value: "2 Centers" },
  ];

  const diagnosesServed = [
    "Autism Spectrum Disorder (ASD)",
    "Global Development Delay",
    "Intellectual Learning Disabilities",
    "Down Syndrome",
    "High Needs Profiles",
    "Other Developmental Diagnoses"
  ];

  const coreStrugglesAddressed = [
    "Language & Expressive Skills",
    "Behavioural Support & Coping",
    "Communication & Social Interaction",
    "Mobility & Motor Coordination",
    "Learning & Cognitive Growth",
    "Self-Help & Independent Living"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-38">

        {/* Luxury Hero Section with Subtle Faded Banner Background */}
        <section className="relative py-14 sm:py-24 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">

          {/* Faded Background Image Banner */}
          <div className="absolute inset-0 z-0 opacity-20 sm:opacity-25 pointer-events-none overflow-hidden">
            <Image
              src="/images/interaction.webp"
              alt="Hand in Hand Hero Background"
              fill
              className="object-cover object-center scale-105"
              priority
            />
            {/* Soft Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5]/85 to-[#FBF9F5]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5]/90 via-transparent to-[#FBF9F5]/90" />
          </div>

          {/* Ambient Lighting Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">

              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-sm backdrop-blur-md">
                <span>Our Story, Mission & Leadership</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-none mb-3">
                Hand in Hand
              </h1>
              <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F57A54] tracking-tight mb-4">
                Together We Can!
              </p>

              <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
                A dedicated group of professional educators and clinicians providing compassionate, effective therapy services for children and youth with developmental special needs.
              </p>

              {/* Founder Tagline Banner */}
              <div className="pt-3 inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200 shadow-md text-xs sm:text-sm font-bold text-[#1B3B48]">
                <Award className="w-4 h-4 text-[#F57A54]" />
                <span>Founded & Established in 2010</span>
              </div>

            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-md text-center transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#2A5243]">
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

              {/* Image Column */}
              <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/Professional Educators and Experienced Clinicians.jpg"
                  alt="Professional Educators and Experienced Clinicians"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1">
                  <span className="text-xs font-bold text-[#EAA85E] uppercase tracking-wider block">Clinical & Educational Leadership</span>
                  <h3 className="text-lg font-extrabold">Over 10 Years of Specialized Developmental Therapy</h3>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-6 space-y-6">

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs font-extrabold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-[#2A5243]" />
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48] leading-tight">
                  Professional Educators & Experienced Clinicians
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  <strong>Hand in Hand</strong> consists of a group of professional educators and clinicians who are dedicated to providing efficient and effective therapeutic services for children and youth (ages 2–18). The team at Hand in Hand has specialized in providing therapy for children and adolescents with developmental disabilities for over ten years.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  Developmental disabilities include those living with autism spectrum disorders, global development delay, intellectual learning disabilities, down syndrome and other diagnoses causing difficulties in certain areas of life.
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

              {/* Card 1: Key Life Areas Supported (6 Columns) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-white via-[#FBF9F5] to-white p-8 sm:p-10 rounded-[32px] border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
                      <Target className="w-3.5 h-3.5 text-[#F57A54]" />
                      <span>Tailored Growth Domains</span>
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48]">
                      Key Life Areas Supported
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Our multidisciplinary programs target essential daily domains for continuous developmental progress:
                    </p>
                  </div>
                </div>

                {/* 6 Interactive Skill Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Language & Expressive Skills", desc: "Communication & vocabulary", icon: BookOpen, color: "text-[#F57A54]", bg: "bg-[#F57A54]/10" },
                    { title: "Behavioural Support & Coping", desc: "Regulation & emotional health", icon: Heart, color: "text-[#2A5243]", bg: "bg-[#2A5243]/10" },
                    { title: "Communication & Socializing", desc: "Peer inclusion & relationships", icon: Users, color: "text-[#1B3B48]", bg: "bg-[#1B3B48]/10" },
                    { title: "Mobility & Motor Skills", desc: "Fine & gross motor dexterity", icon: Target, color: "text-[#F57A54]", bg: "bg-[#F57A54]/10" },
                    { title: "Cognitive Growth", desc: "Task sequencing & learning", icon: Sparkles, color: "text-[#2A5243]", bg: "bg-[#2A5243]/10" },
                    { title: "Independent Living", desc: "Culinary & self-help skills", icon: ShieldCheck, color: "text-[#1B3B48]", bg: "bg-[#1B3B48]/10" }
                  ].map((tile, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#2A5243]/40 hover:shadow-md transition-all duration-300 flex items-start gap-3"
                    >
                      <div className={`w-8 h-8 rounded-xl ${tile.bg} ${tile.color} flex items-center justify-center shrink-0 mt-0.5`}>
                        <tile.icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-xs font-extrabold text-[#1B3B48] leading-snug">{tile.title}</span>
                        <span className="block text-[10px] text-slate-500 font-medium">{tile.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Complete Open-Door Policy (6 Columns) */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#E8F0EC]/80 via-white to-[#FBF9F5] p-8 sm:p-10 rounded-[32px] border border-[#2A5243]/20 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Family & Agency Partnership</span>
                    </div>
                    <div className="w-9 h-9 rounded-2xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center font-bold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48]">
                      Complete Open-Door Policy
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Collectively, the Hand in Hand team thoroughly understands diverse therapy styles and values total transparency for peace of mind. We also partner closely with local schools and outside agencies—including Occupational Therapists, Speech Pathologists, Psychologists, Psychotherapists, and Social Workers—to provide cohesive, multidisciplinary support for every client.
                    </p>
                  </div>
                </div>

                {/* Styled Quote Box */}
                <div className="p-5 rounded-2xl bg-white border border-[#2A5243]/20 shadow-md space-y-2 relative">
                  <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#2A5243] text-white text-[10px] font-black uppercase rounded-full">
                    Parent & Multidisciplinary Assurance
                  </div>
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium pt-1">
                    &ldquo;Our open-door policy empowers parents and external clinical partners to observe sessions, collaborate on goals, witness daily developmental breakthroughs, and seamlessly align strategies.&rdquo;
                  </blockquote>
                </div>

                {/* Family Partnership Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    "👁️ Live Observation Welcomed",
                    "🏫 School & Agency Partnering",
                    "🤝 Occupational Therapists & SLPs",
                    "🧠 Psychologists, Psychotherapists & Social Workers"
                  ].map((chip, cIdx) => (
                    <span key={cIdx} className="text-xs font-extrabold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-[#2A5243] shadow-sm">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Founder Spotlight Card (State-of-the-Art Luxury Showcase) */}
            <div className="relative rounded-[40px] bg-gradient-to-r from-[#1B3B48] via-[#0F2530] to-[#1B3B48] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-[#2A5243]/50 overflow-hidden">

              {/* Ambient Glow Effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A7C64]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

                {/* Left Column: Monogram Badge & Legacy Milestones */}
                <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#2A5243] via-[#1B3B48] to-[#F57A54] text-white font-black text-4xl sm:text-5xl flex items-center justify-center shadow-2xl border-4 border-white/30">
                      HIH
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#F57A54] text-white p-2 rounded-full shadow-lg border-2 border-white">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-white">Hand in Hand Leadership</h3>
                    <span className="text-xs font-black text-[#EAA85E] uppercase tracking-wider block">Multidisciplinary Clinical Team</span>
                    <span className="text-xs text-slate-300 block font-medium">Hand in Hand Therapy Centre (Established 2010)</span>
                  </div>

                  <div className="w-full pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-left">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                      <span className="block font-black text-[#EAA85E]">15+ Years</span>
                      <span className="block text-[10px] text-slate-300 font-medium">Clinical Advocacy</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 text-xs">
                      <span className="block font-black text-[#6B8E7B]">2 Locations</span>
                      <span className="block text-[10px] text-slate-300 font-medium">Vaughan & Bradford</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Visionary Story & Inspiring Quote */}
                <div className="lg:col-span-7 space-y-6">

                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-black uppercase tracking-wider border border-white/15">
                      <Sparkles className="w-3.5 h-3.5 text-[#F57A54]" />
                      <span>Visionary Leadership</span>
                    </div>

                    <h4 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                      Our Visionary Foundation & Story
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      <strong>Hand in Hand Therapy Centre</strong> was created in 2010 to provide transformative care for individuals with special needs.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      Driven by a passionate commitment to break down barriers that isolate individuals with developmental delays, our clinical team collaborates with leading specialists across Ontario to build inclusive environments where clients gain true independence.
                    </p>
                  </div>

                  {/* Inspiring Founder Quote Card */}
                  <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-1">
                    <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                      &ldquo;My life&rsquo;s purpose is breaking down the developmental and social barriers that isolate individuals with special needs, giving every client the dignity, tools, and freedom to thrive.&rdquo;
                    </p>
                    <span className="block text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider pt-1">— Nakita Medeiros, Founder</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 2: What Hand in Hand Therapy Inc. Does (Light Luxury Bento Box Showcase) */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-[40px] sm:rounded-[56px] bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#E8F0EC]/80 text-[#1B3B48] p-6 sm:p-14 lg:p-16 shadow-xl border border-slate-200/90 overflow-hidden">

            {/* Ambient Soft Lighting Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2A5243]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-12 sm:space-y-16">

              {/* Creative Section Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#F57A54]" />
                  <span>Core Program Purpose & Impact</span>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1B3B48] tracking-tight leading-none">
                  What Hand in Hand Therapy Inc. Does
                </h2>

                <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                  An innovative sanctuary offering inclusive peer connection, sensory-friendly &ldquo;chill zones&rdquo;, hands-on life skills, and family respite.
                </p>
              </div>

              {/* Asymmetric Bento Box Grid (12 Columns) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                {/* Bento Card A: Safe Atmosphere & Chill Zone (Spans 7 Columns) */}
                <div className="lg:col-span-7 group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/90 hover:border-[#F57A54]/50 transition-all duration-500 flex flex-col justify-between shadow-lg hover:shadow-2xl overflow-hidden">

                  {/* Subtle Background Image Overlay with Gradient */}
                  <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none hidden sm:block">
                    <Image
                      src="/images/aboutus-main.webp"
                      alt="Chill Zone Atmosphere"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-md">
                        <Smile className="w-3.5 h-3.5" />
                        High Behavioural Needs Support
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#F57A54]/10 flex items-center justify-center text-[#F57A54] border border-[#F57A54]/20">
                        <Sparkles className="w-5 h-5 text-[#F57A54]" />
                      </div>
                    </div>

                    <div className="space-y-4 max-w-xl">
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight">
                        Safe Atmosphere & Dedicated &ldquo;Chill Zone&rdquo;
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                        We understand that children with high behavioural needs may require a level of support, structure, and individualized care that can be difficult to accommodate in traditional program settings. Our dedicated space allows us to meet each child where they are, providing the individualized support they need while working toward meaningful participation in a structured day program.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Rather than allowing challenging behaviours to become a barrier to participation, our team works collaboratively to understand each child&rsquo;s needs, break challenges down into manageable steps, and build the skills needed to move forward. Through consistency, patience, and individualized strategies, we support children in developing greater regulation, independence, communication, and the ability to successfully participate in daily routines and activities.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        We are committed to working through challenges alongside each child and family, with the goal of creating opportunities for growth, inclusion, and greater independence.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Feature Pills */}
                  <div className="relative z-10 pt-6 border-t border-slate-100 mt-6">
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "✨ High Behavioural Needs Support",
                        "🎮 Safe Chill Zone & Structure",
                        "🤝 Individualized Regulation Strategies",
                        "🎨 Growth, Inclusion & Independence"
                      ].map((pill, pIdx) => (
                        <span key={pIdx} className="text-xs font-extrabold px-3.5 py-1.5 rounded-xl bg-[#FBF9F5] border border-slate-200 text-[#1B3B48] shadow-sm">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bento Card B: Motor & Valuable Life Skills (Spans 5 Columns) */}
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
                        Motor & Practical Life Skills
                      </h3>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                        We actively aid individuals in building gross and fine motor coordination, culinary independence, and essential daily living tasks.
                      </p>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        Specially tailored to support high-needs individuals and those with behavioral challenges who require structured, compassionate guidance to thrive.
                      </p>
                    </div>
                  </div>

                  {/* Visual Image Card Badge */}
                  <div className="relative z-10 pt-6 mt-6">
                    <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src="/images/aba-therapy-vaughan.png"
                        alt="Life Skills & Program Engagement"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top sm:object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-extrabold text-white">
                        <span>Community & Kitchen Mastery</span>
                        <ArrowRight className="w-4 h-4 text-[#F57A54]" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bento Card C: Full-Width Parent Relief & Support (Spans 12 Columns) */}
                <div className="lg:col-span-12 group relative bg-gradient-to-r from-[#E8F0EC] via-white to-[#E8F0EC] rounded-3xl p-6 sm:p-10 border border-[#2A5243]/20 transition-all duration-500 shadow-xl overflow-hidden">

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* Visual Media Frame */}
                    <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl">
                      <Image
                        src="/images/interaction.webp"
                        alt="Caregiver Relief & Peer Interaction"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-75" />
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white">
                        <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Caregiver Peace of Mind</span>
                        <p className="text-xs text-white mt-0.5 font-medium">Reliable care and therapeutic support for high-needs children.</p>
                      </div>
                    </div>

                    {/* Content & Micro-Stat Cards */}
                    <div className="lg:col-span-7 space-y-6">

                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F57A54] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                          <Heart className="w-3.5 h-3.5" />
                          <span>Parent Relief & Support</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-[#1B3B48] tracking-tight">
                          Essential Respite for Families
                        </h3>

                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                          Hand in Hand is a safe haven where parents feel completely comfortable bringing their children. It provides essential respite and therapeutic support tailored to each child&apos;s unique developmental goals.
                        </p>
                      </div>

                      {/* Stat Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#2A5243]">Focused Support</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Small Group Care</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#1B3B48]">1:1 Support</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Available on Need Basis</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                          <span className="block text-xl font-black text-[#F57A54]">Open-Door</span>
                          <span className="block text-[11px] text-slate-600 font-bold">Parent Transparency</span>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 3: What Hand in Hand Has To Offer */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="bg-[#0F2530] text-white p-8 sm:p-14 rounded-3xl shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-extrabold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Bridging the Community Gap</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  What Hand in Hand Has To Offer
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Every child deserves a nurturing space to grow, connect, and discover their full potential. At Hand in Hand Therapy Centre, we focus on helping younger children build essential life skills, express themselves with confidence, and foster meaningful, lasting friendships in a supportive, fun environment.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Our main objective is to empower children by teaching functional communication, social interaction, and daily living skills tailored to their unique learning styles. We provide child-centered therapy programs that seamlessly integrate learning with play and active exploration.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  By partnering closely with families and connecting children with the surrounding community, Hand in Hand creates a welcoming space where children of all abilities feel valued, included, and inspired to achieve every milestone.
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

              <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/images/What Hand in Hand Inc. has to offer.jpg"
                  alt="What Hand in Hand Inc. Has To Offer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Childhood Development & Friendship</span>
                  <p className="text-xs text-slate-200 mt-0.5 font-medium">Empowering children with essential skills, friendship, and community connection.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ABA Therapy FAQs */}
        <ABATherapyFAQSection />

      </main>

      <Footer />
    </div>
  );
}
