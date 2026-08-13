import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OccupationalTherapyFAQSection from "@/components/OccupationalTherapyFAQSection";
import {
  Sparkles,
  Users,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Heart,
  Layers,
  ChevronRight,
  HelpCircle,
  Calendar,
  Activity,
  Smile,
  Compass,
  Zap,
  BookOpen
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Occupational Therapy Vaughan | Hand in Hand Therapy Centre"
  },
  description:
    "Pediatric occupational therapy in Vaughan (Concord) & Bradford. Personalized, multidisciplinary care for fine motor, sensory & daily living skills.",
  keywords: [
    "occupational therapist Vaughan",
    "occupational therapy near me",
    "pediatric occupational therapy Vaughan",
    "fine motor skills therapy Vaughan",
    "sensory processing therapy Vaughan",
    "occupational therapy Bradford",
    "handwriting therapy Vaughan",
    "autism occupational therapist"
  ],
  alternates: {
    canonical: "https://handinhandtherapy.ca/occupational-therapy-vaughan",
  },
  openGraph: {
    title: "Occupational Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Pediatric occupational therapy in Vaughan (Concord) & Bradford. Personalized, multidisciplinary care for fine motor, sensory & daily living skills.",
    url: "https://handinhandtherapy.ca/occupational-therapy-vaughan",
    siteName: "Hand In Hand Therapy Centre",
    images: [
      {
        url: "/images/therapy-hero.png",
        width: 1200,
        height: 630,
        alt: "Occupational Therapy in Vaughan at Hand In Hand Therapy Centre",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Occupational Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Pediatric occupational therapy in Vaughan (Concord) & Bradford. Personalized, multidisciplinary care for fine motor, sensory & daily living skills.",
    images: ["/images/therapy-hero.png"],
  },
};

export default function OccupationalTherapyVaughanPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "name": "Hand In Hand Therapy Centre - Occupational Therapy Vaughan",
    "image": "https://handinhandtherapy.ca/images/therapy-hero.png",
    "url": "https://handinhandtherapy.ca/occupational-therapy-vaughan",
    "telephone": "(416)-930-5293",
    "email": "info@handinhandtherapy.ca",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "65 Millway Ave, Unit 38",
        "addressLocality": "Concord",
        "addressRegion": "ON",
        "postalCode": "L4K 3V7",
        "addressCountry": "CA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "465 Holland Street West, Unit 3/4",
        "addressLocality": "Bradford",
        "addressRegion": "ON",
        "postalCode": "L3Z 0A2",
        "addressCountry": "CA"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": 43.7915,
        "longitude": -79.5272
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 44.1168,
        "longitude": -79.5786
      }
    ],
    "areaServed": [
      "Vaughan",
      "Concord",
      "Woodbridge",
      "Maple",
      "Thornhill",
      "Kleinburg",
      "Bradford West Gwillimbury",
      "Newmarket",
      "York Region",
      "Simcoe County"
    ],
    "medicalSpecialty": ["PediatricOccupationalTherapy", "SensoryProcessingTherapy"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between occupational therapy and physical therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Physical therapy focuses on gross motor movement, strength, and mobility. Occupational therapy focuses on the skills needed for daily activities - fine motor coordination, sensory processing, self-care, and functional independence. Many children benefit from OT specifically for handwriting, sensory sensitivities, and daily routines."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my child needs occupational therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common signs include difficulty with handwriting or using scissors, strong reactions to certain sounds, textures, or clothing tags, trouble with buttons/zippers/shoelaces, or seeming behind peers in coordination and self-care skills. An assessment is the clearest way to know for sure."
        }
      },
      {
        "@type": "Question",
        "name": "Do you need a doctor's referral for occupational therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No referral is required to book an initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Is occupational therapy covered by insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many extended health plans include coverage for occupational therapy. We recommend checking directly with your provider for your specific plan."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer occupational therapy in Bradford as well as Vaughan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes - we have a dedicated clinic in Bradford in addition to our Vaughan (Concord) location."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-38">

        {/* HERO SECTION */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">

          {/* Background Lighting Blur */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

              {/* Left Column: Heading & Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
                  <Activity className="w-4 h-4 text-[#F57A54]" />
                  <span>Occupational Therapy in Vaughan & Bradford</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-tight">
                  Occupational Therapy in Vaughan
                </h1>

                <p className="text-xl sm:text-2xl font-black text-[#F57A54] leading-snug">
                  Helping children build the fine motor, sensory, and daily living skills they need to thrive - right here in Vaughan.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  If your child struggles with handwriting, gets overwhelmed by everyday sounds or textures, has trouble with buttons and zippers, or seems clumsier than other kids their age, an occupational therapist can help.
                </p>

                {/* Hero CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <BookOpen className="w-5 h-5 text-white" />
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </Link>

                  <a
                    href="tel:4169305293"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-[#1B3B48] bg-white hover:bg-slate-100 border border-slate-300/80 shadow-md transition-all duration-300"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                    <span>(416) 930-5293</span>
                  </a>
                </div>

                {/* Location Quick Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-600">
                  <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                    <MapPin className="w-4 h-4 text-[#F57A54]" />
                    Concord / Vaughan Clinic
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                    <MapPin className="w-4 h-4 text-[#2A5243]" />
                    Bradford Clinic
                  </span>
                </div>

              </div>

              {/* Right Column: Hero Visual Media */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <Image
                    src="/images/therapy-hero.png"
                    alt="Occupational Therapy session at Hand In Hand Therapy Centre Vaughan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[#1B3B48] space-y-1 shadow-lg">
                    <span className="text-xs font-black text-[#F57A54] uppercase tracking-wider block">
                      Individualized Occupational Therapy
                    </span>
                    <p className="text-sm font-bold leading-tight">
                      Multidisciplinary OT + SLP + ABA Collaboration in Concord & Bradford
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MULTIDISCIPLINARY CARE COORDINATION SECTION */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8F0EC] via-[#FBF9F5] to-[#E8F0EC] p-8 sm:p-12 border border-[#2A5243]/20 shadow-lg space-y-6">

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#F57A54]" />
                    <span>Multidisciplinary Care Coordination</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#1B3B48] leading-tight">
                    Integrated Support Coordinated Under One Roof
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                    At <strong>Hand in Hand Therapy Centre</strong>, our occupational therapy program is delivered by a team that also works closely with our registered{" "}
                    <Link href="/speech-therapy-vaughan/" className="text-[#2A5243] font-extrabold underline decoration-[#F57A54] underline-offset-4 hover:text-[#F57A54] transition-colors">
                      speech-language pathologists
                    </Link>
                    ,{" "}
                    <Link href="/therapy#what-we-help-with" className="text-[#2A5243] font-extrabold underline decoration-[#F57A54] underline-offset-4 hover:text-[#F57A54] transition-colors">
                      ABA/IBI therapists
                    </Link>
                    , and{" "}
                    <Link href="/therapy#what-we-help-with" className="text-[#2A5243] font-extrabold underline decoration-[#F57A54] underline-offset-4 hover:text-[#F57A54] transition-colors">
                      social skills groups
                    </Link>{" "}
                    - so if your child needs support in more than one area, everything is coordinated under one roof, not spread across separate providers who never talk to each other.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book Coordinated Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#F57A54]" />
                </Link>
              </div>

              {/* Service Pillars Grid */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-center space-y-1 shadow-xs">
                  <span className="text-xs font-black text-[#2A5243] block uppercase">Occupational Therapy</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Fine Motor & Sensory</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-center space-y-1 shadow-xs">
                  <span className="text-xs font-black text-[#2A5243] block uppercase">Speech Therapy</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Articulation & Language</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-center space-y-1 shadow-xs">
                  <span className="text-xs font-black text-[#2A5243] block uppercase">ABA / IBI Therapy</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Functional Skills</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 text-center space-y-1 shadow-xs">
                  <span className="text-xs font-black text-[#2A5243] block uppercase">Social Skills Groups</span>
                  <span className="text-[11px] text-slate-500 font-medium block">Peer Integration</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE HAND IN HAND SECTION */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#F57A54]" />
              <span>The Hand In Hand Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
              Why Families Search for &ldquo;Occupational Therapy Near Me&rdquo; - and Choose Hand in Hand
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6 text-[#F57A54]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">
                Local and Easy to Get To
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Our Concord clinic serves Vaughan, Woodbridge, Maple, Thornhill, and Kleinburg; our Bradford clinic serves Bradford West Gwillimbury and southern Simcoe County.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                <Users className="w-6 h-6 text-[#2A5243]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">
                True Multidisciplinary Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Occupational therapy goals are coordinated with <Link href="/speech-therapy-vaughan/" className="text-[#2A5243] font-bold underline">speech therapy</Link> and <Link href="/therapy#what-we-help-with" className="text-[#2A5243] font-bold underline">ABA/IBI programming</Link> when a child receives more than one service - so skills reinforce each other instead of being worked on in isolation.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                <Award className="w-6 h-6 text-[#F57A54]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">
                Individualized, Not Templated
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Every plan starts with a hands-on assessment of your child&apos;s fine motor, gross motor, sensory processing, and daily living skills.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6 text-[#6B8E7B]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">
                Experience with Complex Needs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Particular strength supporting children with autism spectrum disorder, sensory processing differences, and developmental delays.
              </p>
            </div>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
                <Layers className="w-4 h-4 text-[#F57A54]" />
                <span>Specialized Interventions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
                Our Occupational Therapy Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs hover:border-[#2A5243]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3B48]">
                  Fine Motor Skill Development
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Handwriting, cutting with scissors, buttoning, zipping, and the small-muscle coordination kids need for school and self-care.
                </p>
              </div>

              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs hover:border-[#2A5243]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3B48]">
                  Sensory Processing Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Helping children who are over- or under-sensitive to sound, touch, movement, or textures manage daily environments - classrooms, mealtimes, and busy public spaces - more comfortably.
                </p>
              </div>

              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs hover:border-[#2A5243]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3B48]">
                  Daily Living Skills (Self-Care)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Dressing, feeding, toileting routines, and other activities of daily living, broken into achievable steps.
                </p>
              </div>

              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs hover:border-[#2A5243]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center font-bold">
                  4
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3B48]">
                  Gross Motor & Coordination
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Balance, body awareness, and coordination - often connected to a child&apos;s confidence in gym class, on the playground, and in sports.
                </p>
              </div>

              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200 space-y-4 shadow-xs hover:border-[#2A5243]/40 transition-colors md:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#F57A54] text-white flex items-center justify-center font-bold">
                  5
                </div>
                <h3 className="text-xl font-extrabold text-[#1B3B48]">
                  Occupational Therapy Integrated with ABA & Speech
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  For children already in our <Link href="/therapy#what-we-help-with" className="text-[#2A5243] font-bold underline">ABA therapy</Link> or <Link href="/speech-therapy-vaughan/" className="text-[#2A5243] font-bold underline">speech programs</Link>, OT goals are built into the same overall plan rather than treated as a separate track.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* WHAT TO EXPECT SECTION */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#F57A54]" />
              <span>Step-by-Step Care Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-black text-[#2A5243]">01</span>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">Initial Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                We discuss your concerns and what daily routines look like at home and at school.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-black text-[#2A5243]">02</span>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">Assessment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                An occupational therapist evaluates fine motor, sensory, and daily living skills through observation and standardized tools.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-black text-[#2A5243]">03</span>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">Individualized Plan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Goals are set collaboratively with you and coordinated with any other therapy (speech, ABA/IBI) your child receives with us.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-black text-[#2A5243]">04</span>
              <h3 className="text-lg font-extrabold text-[#1B3B48]">Ongoing Therapy & Progress Reviews</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Regular sessions with clear updates on progress and home practice strategies.
              </p>
            </div>

          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <OccupationalTherapyFAQSection />

        {/* LOCATIONS MAP SECTION */}
        <section id="locations" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20">
              <MapPin className="w-4 h-4 text-[#F57A54]" />
              <span>Two Convenient Locations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
              Serving Vaughan & Bradford
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vaughan (Concord) Clinic */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-extrabold">
                  <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Vaughan / Concord Center</span>
                </div>
                <h3 className="text-2xl font-black text-[#1B3B48]">
                  Vaughan / Concord Clinic
                </h3>
                <p className="text-sm font-bold text-slate-700">
                  65 Millway Ave, Unit 38, Concord, Ontario
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Serving Vaughan, Woodbridge, Maple, Thornhill, Kleinburg, and surrounding areas.
                </p>
              </div>

              {/* Google Map Iframe */}
              <div className="h-64 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner">
                <iframe
                  title="Hand In Hand Therapy Centre Vaughan Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.808018610574!2d-79.5293889234685!3d43.7975878710957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f6b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s65%20Millway%20Ave%20%2338%2C%20Concord%2C%20ON%20L4K%203V7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Bradford Clinic */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-extrabold">
                  <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                  <span>Bradford West Gwillimbury</span>
                </div>
                <h3 className="text-2xl font-black text-[#1B3B48]">
                  Bradford Clinic
                </h3>
                <p className="text-sm font-bold text-slate-700">
                  465 Holland Street West, Unit 3/4, Bradford, Ontario
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Serving Bradford West Gwillimbury, Newmarket, and southern Simcoe County.
                </p>
              </div>

              {/* Google Map Iframe */}
              <div className="h-64 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner">
                <iframe
                  title="Hand In Hand Therapy Centre Bradford Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.808018610574!2d-79.5808889234685!3d44.1185878710957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad86b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s465%20Holland%20St%20W%20Unit%203%2C%20Bradford%2C%20ON%20L3Z%200A2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </section>

        {/* FINAL LIGHT GRADIENT CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#E8F0EC] via-[#FBF9F5] to-[#E8F0EC] border border-[#2A5243]/20 shadow-xl space-y-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-4xl font-black text-[#1B3B48]">
                Ready to Get Started?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                If your child is struggling with fine motor skills, sensory sensitivities, or everyday routines, our team is here to help. Reach out to our Vaughan or Bradford clinic to book an assessment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#F57A54]" />
              </Link>

              <a
                href="tel:4169305293"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-extrabold text-[#1B3B48] bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-[#2A5243]" />
                <span>Call (416)-930-5293</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
