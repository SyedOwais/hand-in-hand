import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import {
  MapPin,
  PhoneCall,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Compass,
  BookOpen,
  Calendar,
  HelpCircle,
  Building2,
  Brain,
  Smile,
  ChevronRight,
  Check,
  UserCheck
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Skills & Routines Program in Bradford | Hand in Hand",
  description:
    "Practical life skills, self-care, and classroom readiness support for kids in Bradford, ON. Coordinated with OT, ABA & speech therapy. Book today.",
  keywords: [
    "life skills program Bradford",
    "daily living skills therapy Bradford Ontario",
    "classroom readiness program Bradford",
    "occupational therapy Bradford",
    "ABA therapy Bradford",
    "child life skills Simcoe County",
    "Bradford West Gwillimbury special needs"
  ],
  alternates: {
    canonical: "https://handinhandtherapy.ca/locations/bradford/life-skills-routines",
  },
  openGraph: {
    title: "Life Skills & Routines Program in Bradford | Hand in Hand",
    description:
      "Practical life skills, self-care, and classroom readiness support for kids at 465 Holland St W, Bradford, ON.",
    url: "https://handinhandtherapy.ca/locations/bradford/life-skills-routines",
    siteName: "Hand In Hand Therapy Centre & Adult Day Program",
    images: [
      {
        url: "/images/Childhood-Outside.webp",
        width: 1200,
        height: 630,
        alt: "Life Skills & Routines Program at Bradford Clinic",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Skills & Routines Program in Bradford | Hand in Hand",
    description:
      "Practical life skills, self-care, and classroom readiness support for kids in Bradford, ON.",
    images: ["/images/Childhood-Outside.webp"],
  },
};

export default function BradfordLifeSkillsPage() {
  // LocalBusiness Schema for Bradford Location
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Hand In Hand Therapy Centre - Bradford Clinic",
    "image": "https://handinhandtherapy.ca/images/aboutus-main.webp",
    "@id": "https://handinhandtherapy.ca/locations/bradford/life-skills-routines#localbusiness",
    "url": "https://handinhandtherapy.ca/locations/bradford/life-skills-routines",
    "telephone": "+19052514756",
    "email": "info@handinhandtherapycentre.ca",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "465 Holland Street West, Unit 3/4",
      "addressLocality": "Bradford",
      "addressRegion": "ON",
      "postalCode": "L3Z 0A2",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.1147,
      "longitude": -79.5786
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Bradford West Gwillimbury" },
      { "@type": "City", "name": "Newmarket" },
      { "@type": "AdministrativeArea", "name": "Simcoe County" }
    ],
    "medicalSpecialty": [
      "Occupational Therapy",
      "Applied Behavior Analysis",
      "Pediatric Therapy",
      "Life Skills & Self-Care Rehabilitation"
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this a stand-alone program, or does it need to be paired with another therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be either. Some families use Life Skills & Routines support as a stand-alone focus; others build it directly into an existing ABA or occupational therapy plan. We'll discuss what fits your child during your initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What age range is this program for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with children across a range of ages, from early self-care foundations through classroom-readiness skills for school-age children."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with our child's school or daycare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can coordinate with teachers and school staff where appropriate to help routines carry over consistently between the clinic, home, and classroom."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a diagnosis for my child to join this program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No diagnosis is required. This program is designed for any child who would benefit from extra, structured support building daily routines and independence skills."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer this program at your Vaughan (Concord) location too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our full multidisciplinary team, including life skills and routines support, is available from our Concord clinic as well."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "Is this a stand-alone program, or does it need to be paired with another therapy?",
      a: "It can be either. Some families use Life Skills & Routines support as a stand-alone focus; others build it directly into an existing ABA or occupational therapy plan. We'll discuss what fits your child during your initial consultation."
    },
    {
      q: "What age range is this program for?",
      a: "We work with children across a range of ages, from early self-care foundations through classroom-readiness skills for school-age children."
    },
    {
      q: "Do you work with our child's school or daycare?",
      a: "We can coordinate with teachers and school staff where appropriate to help routines carry over consistently between the clinic, home, and classroom."
    },
    {
      q: "Do I need a diagnosis for my child to join this program?",
      a: "No diagnosis is required. This program is designed for any child who would benefit from extra, structured support building daily routines and independence skills."
    },
    {
      q: "Do you offer this program at your Vaughan (Concord) location too?",
      a: "Yes, our full multidisciplinary team, including life skills and routines support, is available from our Concord clinic as well."
    }
  ];

  const stepsToExpect = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We discuss your family's daily routines, what's working, and what's causing friction at home or school."
    },
    {
      num: "02",
      title: "Comprehensive Assessment",
      desc: "Our clinical team evaluates your child's current self-care, routine, and classroom-readiness skills."
    },
    {
      num: "03",
      title: "Individualized Plan",
      desc: "Specific routines and skills are prioritized based on what matters most for your family, and coordinated with any other therapy your child receives with us."
    },
    {
      num: "04",
      title: "Ongoing Support & Parent Coaching",
      desc: "Regular check-ins with practical strategies for reinforcing routines consistently at home and school."
    }
  ];

  const coreDomains = [
    {
      title: "Daily Self-Care Routines",
      desc: "Dressing, hygiene, mealtime routines, and toileting, broken into manageable, repeatable steps rather than taught all at once."
    },
    {
      title: "Morning & Evening Routines",
      desc: "Reducing daily friction around getting ready for school, bedtime routines, and transitions between activities, which are the moments that tend to cause the most stress for families."
    },
    {
      title: "Classroom Readiness",
      desc: "Following multi-step instructions, staying organized, managing transitions between activities, and building the independence skills that support a smoother start to the school day."
    },
    {
      title: "Community & Independence Skills",
      desc: "Age-appropriate independence goals, from packing a backpack to navigating simple errands, built gradually and practiced consistently."
    },
    {
      title: "Carryover Between Clinic, Home, and School",
      desc: "Our team works directly with parents (and, where appropriate, coordinates with teachers) so that routines practiced at the clinic are reinforced consistently everywhere your child spends their day, not just during a therapy session."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      {/* Inject Structured Data JSON-LD */}
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

        {/* Hero Section */}
        <section className="relative py-14 sm:py-24 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7 space-y-6">

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
                  <MapPin className="w-4 h-4 text-[#F57A54]" />
                  <span>Bradford Clinic Specialty • 465 Holland St W</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1B3B48] leading-tight">
                  Life Skills & Routines Program in Bradford, Ontario
                </h1>

                <p className="text-lg sm:text-xl font-bold text-[#F57A54] leading-relaxed">
                  Practical daily routines, self-care habits, and classroom readiness built at our Bradford clinic and carried home into everyday life.
                </p>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  <strong>Hand in Hand Therapy Centre&apos;s Bradford location</strong>, at <strong>465 Holland Street West, Unit 3/4</strong>, offers a dedicated Life Skills & Routines program for children who need extra support turning big goals (independence, self-care, being ready for the classroom) into small, practiced, everyday habits. Rather than teaching a skill once and hoping it sticks, our program is built around repetition, real-life routines, and consistency between our clinic, your home, and your child&apos;s classroom.
                </p>

                {/* Internal Links Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-extrabold text-[#2A5243]">
                  <span>Coordinated with:</span>
                  <Link href="/occupational-therapy-vaughan" className="underline hover:text-[#F57A54]">
                    Occupational Therapy
                  </Link>
                  <span>•</span>
                  <Link href="/aba-therapy-vaughan" className="underline hover:text-[#F57A54]">
                    ABA Therapy
                  </Link>
                  <span>•</span>
                  <Link href="/speech-therapy-vaughan" className="underline hover:text-[#F57A54]">
                    Speech Therapy
                  </Link>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#F57A54] hover:bg-[#e06843] shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:9052514756"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-[#2A5243]" />
                    <span>Call Bradford: (905) 251-4756</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Bradford Image & Quick NAP Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/images/Childhood-Outside.webp"
                    alt="Children building life skills & outdoor play at Bradford Clinic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-1">
                    <span className="text-xs font-bold text-[#EAA85E] uppercase tracking-wider block">Bradford Location</span>
                    <h3 className="text-lg font-extrabold">465 Holland Street West, Unit 3/4</h3>
                    <p className="text-xs text-slate-200 font-medium">Serving Bradford West Gwillimbury, Newmarket & Simcoe County</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Serving Families & Map Embed */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs font-extrabold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-[#2A5243]" />
                  <span>Regional Coverage</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48] leading-tight">
                  Serving Families Across Bradford & Simcoe County
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  Our Bradford clinic serves families throughout <strong>Bradford West Gwillimbury</strong>, <strong>Newmarket</strong>, and <strong>southern Simcoe County</strong>. If your family is closer to our Concord location, our full multidisciplinary team (including <Link href="/occupational-therapy-vaughan" className="text-[#2A5243] font-bold underline">occupational therapy</Link>, <Link href="/aba-therapy-vaughan" className="text-[#2A5243] font-bold underline">ABA therapy</Link>, and <Link href="/speech-therapy-vaughan" className="text-[#2A5243] font-bold underline">speech therapy</Link>) is also available to support life skills goals from our <Link href="/contact" className="text-[#2A5243] font-bold underline">Vaughan clinic</Link>.
                </p>

                <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#F57A54] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-extrabold text-[#1B3B48]">Bradford Clinic Address:</h4>
                      <p className="text-xs text-slate-600 font-semibold">465 Holland Street West, Unit 3/4, Bradford, Ontario L3Z 0A2</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-200 text-xs font-bold text-slate-700">
                    <PhoneCall className="w-4 h-4 text-[#2A5243]" />
                    <span>Phone: (905) 251-4756</span>
                  </div>
                </div>
              </div>

              {/* Map Embed Column */}
              <div className="lg:col-span-6 h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative">
                <iframe
                  title="Hand In Hand Therapy Centre Bradford Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.534298101416!2d-79.58078892380183!3d44.1147048710839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad3178c7a6e1d%3A0x6bfa3386e810a955!2s465%20Holland%20St%20W%20Unit%203%2F4%2C%20Bradford%2C%20ON%20L3Z%200A2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </section>

        {/* What Life Skills & Routines Covers */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-12">

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>Program Scope & Curriculum</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                What &ldquo;Life Skills & Routines&rdquo; Actually Covers
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                This program sits at the intersection of everything our team already does (including <Link href="/occupational-therapy-vaughan" className="text-[#2A5243] underline font-bold">occupational therapy</Link>, <Link href="/aba-therapy-vaughan" className="text-[#2A5243] underline font-bold">ABA therapy</Link>, and <Link href="/speech-therapy-vaughan" className="text-[#2A5243] underline font-bold">speech therapy</Link>) focused specifically on the practical, everyday skills that make daily life at home and school run more smoothly.
              </p>
            </div>

            {/* 5 Core Domain Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreDomains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#2A5243]/30 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center font-extrabold">
                      <CheckCircle2 className="w-5 h-5 text-[#2A5243]" />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#1B3B48]">
                      {domain.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {domain.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* How It's Delivered */}
        <section className="py-16 sm:py-24 bg-[#0F2530] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-extrabold uppercase tracking-wider">
                <Brain className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Integrated Clinical Delivery</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How It&apos;s Delivered
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                Life Skills & Routines is not a stand-alone, isolated program; it is woven into the coordinated care your child may already be receiving:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F57A54]/20 text-[#F57A54] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">Alongside ABA Therapy</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Daily living and routine-building goals are built directly into your child&apos;s behavioural program.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#2A5243]/30 text-[#6B8E7B] flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">Alongside Occupational Therapy</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Fine motor and sensory strategies are applied directly to real self-care and classroom tasks.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EAA85E]/20 text-[#EAA85E] flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-white">As Parent Coaching</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Strategies and tools you can use consistently at home, so progress doesn&apos;t depend on the clinic alone.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* What to Expect (4 Steps) */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs font-extrabold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Family Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48]">
                What to Expect
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stepsToExpect.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBF9F5] p-6 rounded-3xl border border-slate-200 space-y-3 relative overflow-hidden"
                >
                  <span className="text-3xl font-black text-[#2A5243]/30 block">{step.num}</span>
                  <h3 className="text-lg font-extrabold text-[#1B3B48]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#F57A54]" />
                <span>Bradford Program FAQs</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2"
                >
                  <h3 className="text-base sm:text-lg font-black text-[#1B3B48] flex items-start gap-2">
                    <span className="text-[#F57A54] shrink-0">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Ready to Get Started CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-[#1B3B48] via-[#0F2530] to-[#1B3B48] text-white text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Ready to Get Started?
            </h2>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              If mornings, self-care routines, or classroom readiness have been a daily struggle, our Bradford team is here to help build practical, lasting routines together with your family.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl transition-all"
              >
                <span>Contact Us / Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#2A5243]" />
              </Link>
              <a
                href="tel:9052514756"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#F57A54] hover:bg-[#e06843] shadow-xl transition-all border border-white/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call (905) 251-4756</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
