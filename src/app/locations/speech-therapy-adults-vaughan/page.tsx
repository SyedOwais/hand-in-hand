import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AdultSpeechFAQSection from "@/components/AdultSpeechFAQSection";
import {
  MessageSquare,
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
  ChevronRight,
  HelpCircle,
  Calendar,
  Activity,
  Brain,
  Mic,
  Zap,
  RefreshCw,
  Target
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Adult Speech Therapy Vaughan | Hand in Hand Therapy Centre"
  },
  description:
    "Adult speech therapy in Vaughan (Concord) & Bradford - stroke recovery, voice, stuttering, accent modification & swallowing. Book a consultation today.",
  keywords: [
    "speech therapy for adults Vaughan",
    "adult speech therapy Vaughan",
    "stroke speech therapy Vaughan",
    "aphasia speech therapist Concord",
    "voice therapy adults Vaughan",
    "stuttering speech therapy adults",
    "accent modification Vaughan",
    "swallowing therapy dysphagia Vaughan",
    "adult speech therapy Bradford"
  ],
  alternates: {
    canonical: "https://handinhandtherapy.ca/locations/speech-therapy-adults-vaughan",
  },
  openGraph: {
    title: "Adult Speech Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Adult speech therapy in Vaughan (Concord) & Bradford - stroke recovery, voice, stuttering, accent modification & swallowing. Book a consultation today.",
    url: "https://handinhandtherapy.ca/locations/speech-therapy-adults-vaughan",
    siteName: "Hand In Hand Therapy Centre",
    images: [
      {
        url: "/images/speech-therapy-adults-vaughan.png",
        width: 1200,
        height: 630,
        alt: "Adult Speech Therapy in Vaughan at Hand In Hand Therapy Centre",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Speech Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Adult speech therapy in Vaughan (Concord) & Bradford - stroke recovery, voice, stuttering, accent modification & swallowing. Book a consultation today.",
    images: ["/images/speech-therapy-adults-vaughan.png"],
  },
};

export default function AdultSpeechTherapyVaughanPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness", "SpeechLanguagePathologist"],
        "@id": "https://handinhandtherapy.ca/locations/speech-therapy-adults-vaughan#clinic",
        "name": "Hand In Hand Therapy Centre - Adult Speech Therapy Vaughan",
        "url": "https://handinhandtherapy.ca/locations/speech-therapy-adults-vaughan",
        "telephone": "(416)-930-5293",
        "email": "handinhandtherapycentre@yahoo.com",
        "image": "https://handinhandtherapy.ca/images/speech-therapy-adults-vaughan.png",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "65 Millway Ave, Unit 38",
          "addressLocality": "Concord",
          "addressRegion": "ON",
          "postalCode": "L4K 3V7",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.7915,
          "longitude": -79.5273
        },
        "areaServed": [
          "Vaughan",
          "Concord",
          "Woodbridge",
          "Maple",
          "Thornhill",
          "Kleinburg",
          "Bradford",
          "Bradford West Gwillimbury",
          "Simcoe County"
        ],
        "medicalSpecialty": "SpeechTherapy",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:30",
            "closes": "18:30"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://handinhandtherapy.ca/locations/speech-therapy-adults-vaughan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need a doctor's referral for adult speech therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No referral is required to book an initial consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you treat adults recovering from a stroke or brain injury?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our team supports adults working through aphasia, dysarthria, apraxia, and other communication changes following a stroke or brain injury."
            }
          },
          {
            "@type": "Question",
            "name": "Can speech therapy help with a lifelong stutter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many adults seek support for a stutter that's been present since childhood or one that has resurfaced or intensified - for example, in high-pressure work situations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer accent modification services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for adults looking to adjust pronunciation and clarity for professional or personal communication goals."
            }
          },
          {
            "@type": "Question",
            "name": "Is adult speech therapy covered by insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many extended health plans include coverage for speech-language pathology. We recommend checking directly with your provider for your specific plan."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer speech therapy for adults in Bradford as well as Vaughan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes - we have a dedicated clinic in Bradford in addition to our Vaughan (Concord) location."
            }
          },
          {
            "@type": "Question",
            "name": "Looking for speech therapy for a child instead?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Visit our pediatric speech therapy page for information on speech and language support for children."
            }
          }
        ]
      }
    ]
  };

  const adultServices = [
    {
      title: "Stroke & Brain Injury Recovery",
      subtitle: "Aphasia, Dysarthria, Apraxia",
      desc: "Support for adults regaining language, speech clarity, and communication confidence after a stroke, traumatic brain injury, or neurological event.",
      icon: Brain,
      color: "bg-[#2A5243]"
    },
    {
      title: "Voice Disorders",
      subtitle: "Vocal Fatigue & Hoarseness",
      desc: "Treatment for hoarseness, vocal fatigue, and other voice concerns - including support for professionals who rely heavily on their voice at work.",
      icon: Mic,
      color: "bg-[#1B3B48]"
    },
    {
      title: "Stuttering & Fluency",
      subtitle: "Professional & Personal Fluency",
      desc: "Support for adults managing a lifelong stutter or fluency challenges that have resurfaced or intensified, including in high-stakes professional settings.",
      icon: RefreshCw,
      color: "bg-[#F57A54]"
    },
    {
      title: "Accent Modification",
      subtitle: "Clarity & Pronunciation",
      desc: "Work on pronunciation, clarity, and communication confidence for adults looking to adjust or soften an accent for professional or personal goals.",
      icon: Target,
      color: "bg-[#2A5243]"
    },
    {
      title: "Swallowing Support",
      subtitle: "Dysphagia Management",
      desc: "Assessment and treatment for adults experiencing swallowing difficulties, often connected to stroke, neurological conditions, or other medical events.",
      icon: Activity,
      color: "bg-[#1B3B48]"
    },
    {
      title: "General Communication Refinement",
      subtitle: "Clarity & Confidence",
      desc: "For adults who simply want to communicate more clearly and confidently - no diagnosis or referral required.",
      icon: MessageSquare,
      color: "bg-[#F57A54]"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "We discuss your communication history, current challenges, and personal or medical goals in a comfortable, confidential setting."
    },
    {
      num: "02",
      title: "Clinical Assessment",
      desc: "A registered Speech-Language Pathologist evaluates speech clarity, voice, language, and - where relevant - swallowing function."
    },
    {
      num: "03",
      title: "Individualized Plan",
      desc: "Goals and therapy techniques are tailored specifically to you, whether the focus is medical recovery or communication refinement."
    },
    {
      num: "04",
      title: "Ongoing Therapy & Progress Reviews",
      desc: "Regular 1-on-1 therapy sessions with clear check-ins on your progress, adjusting strategies as you achieve your milestones."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDFB]">
      {/* Structural Metadata Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main className="flex-1 pt-32 sm:pt-36">
        
        {/* PEDIATRIC CROSS-LINK HEADER ALERT BANNER */}
        <div className="bg-[#1B3B48] text-white py-3.5 px-4 shadow-sm border-b border-[#F57A54]/30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F57A54] animate-pulse" />
              <span className="font-medium">Looking for speech therapy for a child instead?</span>
            </div>
            <Link
              href="/speech-therapy-vaughan"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full text-xs font-extrabold text-white bg-[#F57A54] hover:bg-[#e06843] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 min-w-[240px] text-center"
            >
              <span>Explore Pediatric Speech Therapy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/70 via-[#FAFDFB] to-[#FAFDFB] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#F57A54]" />
                  <span>Speech-Language Pathology for Adults</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B3B48] tracking-tight leading-tight">
                  Speech Therapy for Adults in Vaughan
                </h1>

                <p className="text-lg sm:text-xl font-bold text-[#2A5243] leading-snug">
                  Personalized speech-language pathology for adults - stroke and brain injury recovery, voice disorders, stuttering, accent modification, and swallowing support.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full text-base font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 min-w-[260px]"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 text-[#F57A54]" />
                  </a>

                  <a
                    href="tel:4169305293"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-full text-base font-bold text-[#1B3B48] bg-white border border-slate-300 hover:border-[#2A5243] hover:bg-slate-50 transition-all shadow-xs min-w-[220px]"
                  >
                    <PhoneCall className="w-4 h-4 text-[#2A5243]" />
                    <span>Call (416) 930-5293</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/speech-therapy-adults-vaughan.png"
                    alt="Adult Speech Therapy Session at Hand In Hand Therapy Centre in Vaughan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B48]/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-[#F57A54]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-extrabold text-[#1B3B48] uppercase tracking-wider">
                          Registered SLPs in Vaughan & Bradford
                        </h3>
                        <p className="text-xs text-slate-600 font-medium">
                          1-on-1 Adult Speech & Swallowing Rehabilitation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION BELOW HERO: ADULT COMMUNICATION APPROACH */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#E8F0EC]/80 via-[#FAFDFB] to-white border border-[#2A5243]/20 shadow-md space-y-4 text-center sm:text-left relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#2A5243]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Client-Centered Speech Pathology</span>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                Communication challenges aren't only a childhood concern. Adults across Vaughan, Concord, and Bradford come to Hand in Hand Therapy Centre for support after a stroke or brain injury, to manage a voice or swallowing disorder, to work through a lifelong stutter, or to refine their communication clarity for professional and personal goals. Our speech-language pathologists build an individualized plan around your specific communication history and goals - not a generic program.
              </p>
            </div>
          </div>
        </section>

        {/* WHY VAUGHAN ADULTS CHOOSE HAND IN HAND */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>The Hand in Hand Difference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
                Why Vaughan Adults Choose Hand in Hand for Speech Therapy
              </h2>
              <p className="text-slate-600 text-base font-medium">
                Comprehensive, patient-centered care designed around your life, routine, and communication priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-3xl bg-[#FAFDFB] border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[#2A5243]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1B3B48]">Broad Clinical Scope</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  From stroke and brain injury recovery to voice disorders, stuttering, accent modification, and swallowing support - our team is equipped for a wide range of adult communication needs.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAFDFB] border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#1B3B48]/10 text-[#1B3B48] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#1B3B48]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1B3B48]">Individualized, Goal-Driven Plans</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Whether you're recovering communication skills after a medical event or refining your speech for work and daily life, your plan is built around your specific goals.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAFDFB] border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#F57A54]/10 text-[#F57A54] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#F57A54]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1B3B48]">Multidisciplinary Team</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Our speech-language pathologists work alongside our <Link href="/occupational-therapy-vaughan" className="text-[#2A5243] font-bold underline">occupational therapy</Link> and <Link href="/aba-therapy-vaughan" className="text-[#2A5243] font-bold underline">ABA therapy</Link> teams when recovery involves both communication and daily-living skills.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAFDFB] border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2A5243]" />
                </div>
                <h3 className="text-lg font-extrabold text-[#1B3B48]">Local & Accessible</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Serving Vaughan, Concord, Woodbridge, Maple, and Thornhill, with a second location in Bradford for Bradford West Gwillimbury and southern Simcoe County.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* OUR ADULT SPEECH THERAPY SERVICES */}
        <section className="py-16 sm:py-24 bg-[#FAFDFB] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Specialized Adult Programs</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                Our Adult Speech Therapy Services
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                Comprehensive assessment and evidence-based interventions tailored for adults at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adultServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 transform hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl ${service.color} text-white flex items-center justify-center shadow-md`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                          {service.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#1B3B48]">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2A5243] hover:text-[#F57A54] transition-colors"
                      >
                        <span>Book Consultation for {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Your Care Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
                What to Expect
              </h2>
              <p className="text-slate-600 text-base font-medium">
                A clear, transparent process focused on your comfort, progress, and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#FAFDFB] border border-slate-200/90 shadow-sm relative space-y-3"
                >
                  <span className="text-4xl font-black text-[#2A5243]/20 block">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#1B3B48]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SERVING VAUGHAN & BRADFORD LOCATIONS */}
        <section className="py-16 sm:py-20 bg-[#FAFDFB] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>Convenient Locations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight">
                Serving Vaughan & Bradford
              </h2>
              <p className="text-slate-600 text-base font-medium">
                Two fully equipped clinics serving York Region, Simcoe County, and surrounding communities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* VAUGHAN / CONCORD CLINIC */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2A5243] text-white flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#F57A54]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1B3B48]">Vaughan / Concord Clinic</h3>
                      <p className="text-xs text-slate-500 font-medium">Primary Therapy Centre</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <strong className="text-[#1B3B48]">Address:</strong> 65 Millway Ave, Unit 38, Concord, Ontario<br />
                    <strong className="text-[#1B3B48]">Serving:</strong> Vaughan, Concord, Woodbridge, Maple, Thornhill, Kleinburg, and surrounding areas.
                  </p>

                  <div className="pt-2 text-xs font-bold text-[#2A5243] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                    <span>Phone: (416) 930-5293</span>
                  </div>
                </div>

                {/* Vaughan Map Embed */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Hand in Hand Therapy Centre Vaughan Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.871146206121!2d-79.5273!3d43.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f835b62b1ed%3A0x8673a388b1b59ecb!2s65%20Millway%20Ave%20%2338%2C%20Concord%2C%20ON%20L4K%203V7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* BRADFORD CLINIC */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3B48] text-white flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#F57A54]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1B3B48]">Bradford Clinic</h3>
                      <p className="text-xs text-slate-500 font-medium">Simcoe County Location</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    <strong className="text-[#1B3B48]">Address:</strong> 465 Holland Street West, Unit 3/4, Bradford, Ontario<br />
                    <strong className="text-[#1B3B48]">Serving:</strong> Bradford West Gwillimbury, Newmarket, and southern Simcoe County.
                  </p>

                  <div className="pt-2 text-xs font-bold text-[#1B3B48] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                    <span>Phone: (905) 251-4756</span>
                  </div>
                </div>

                {/* Bradford Map Embed */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 relative">
                  <iframe
                    title="Hand in Hand Therapy Centre Bradford Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.553251214041!2d-79.5841!3d44.1147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad34a2e555555%3A0x123456789abcdef!2s465%20Holland%20St%20W%2C%20Bradford%2C%20ON%20L3Z%200A2!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
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

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <AdultSpeechFAQSection />

        {/* READY TO GET STARTED / CONTACT CTA SECTION */}
        <div id="contact">
          <ContactSection />
        </div>

      </main>

      <Footer />
    </div>
  );
}
