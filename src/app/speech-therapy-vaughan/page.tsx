import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Layers,
  ChevronRight,
  HelpCircle,
  Calendar,
  Volume2
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Therapy Vaughan | Hand in Hand Therapy Centre",
  description:
    "Speech therapy in Vaughan (Concord) & Bradford for children and adults. Personalized, multidisciplinary care. Book your consultation today.",
  keywords: [
    "speech therapy Vaughan",
    "speech therapy Concord",
    "speech therapy Bradford",
    "speech language pathologist Vaughan",
    "pediatric speech therapy Vaughan",
    "autism speech therapy Vaughan"
  ],
  alternates: {
    canonical: "https://handinhandtherapy.ca/speech-therapy-vaughan",
  },
  openGraph: {
    title: "Speech Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Speech therapy in Vaughan (Concord) & Bradford for children and adults. Personalized, multidisciplinary care. Book your consultation today.",
    url: "https://handinhandtherapy.ca/speech-therapy-vaughan",
    siteName: "Hand In Hand Therapy Centre",
    images: [
      {
        url: "/images/speech-therapy-vaughan.png",
        width: 1200,
        height: 630,
        alt: "Speech Therapy in Vaughan at Hand In Hand Therapy Centre",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speech Therapy Vaughan | Hand in Hand Therapy Centre",
    description:
      "Speech therapy in Vaughan (Concord) & Bradford for children and adults. Personalized, multidisciplinary care.",
    images: ["/images/speech-therapy-vaughan.png"],
  },
};

export default function SpeechTherapyVaughanPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://handinhandtherapy.ca/speech-therapy-vaughan#clinic",
        "name": "Hand In Hand Therapy Centre - Speech Therapy Vaughan",
        "url": "https://handinhandtherapy.ca/speech-therapy-vaughan",
        "telephone": "(416)-930-5293",
        "email": "handinhandtherapycentre@yahoo.com",
        "image": "https://handinhandtherapy.ca/images/speech-therapy-vaughan.png",
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
        "@id": "https://handinhandtherapy.ca/speech-therapy-vaughan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "At what age should my child start speech therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earlier is generally better. If your toddler isn't using words by 18 months, or their speech is hard for family members to understand by age 3, it's worth an assessment — early intervention tends to produce stronger, faster results."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with adults, or only children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our primary focus is pediatric speech and language therapy, though we assess on a case-by-case basis. Contact us to discuss your specific situation."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a doctor's referral?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No referral is required to book an initial consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Is speech therapy covered by insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many extended health plans cover speech-language pathology services. We recommend checking directly with your provider for your specific coverage."
            }
          }
        ]
      }
    ]
  };

  const whyChoosePillars = [
    {
      title: "A True Multidisciplinary Team",
      desc: "Speech-language pathologists, behaviour therapists, and occupational therapists collaborate on one plan — so speech goals reinforce ABA goals, and vice versa.",
      icon: Users,
      color: "text-[#2A5243]",
      bg: "bg-[#2A5243]/10"
    },
    {
      title: "Individualized Programming",
      desc: "No templated worksheets. Every plan starts with a full assessment of how your child communicates, learns, and engages.",
      icon: Sparkles,
      color: "text-[#F57A54]",
      bg: "bg-[#F57A54]/10"
    },
    {
      title: "Local & Accessible Locations",
      desc: "Conveniently located in Concord, serving families across Vaughan, Woodbridge, Maple, Thornhill, and Kleinburg — with a second location in Bradford for families in Bradford West Gwillimbury and Simcoe County.",
      icon: MapPin,
      color: "text-[#1B3B48]",
      bg: "bg-[#1B3B48]/10"
    },
    {
      title: "Experience with Complex Needs",
      desc: "Our team has particular strength supporting children with autism spectrum disorder and other developmental differences, alongside general speech and articulation delays.",
      icon: ShieldCheck,
      color: "text-[#2A5243]",
      bg: "bg-[#2A5243]/10"
    }
  ];

  const speechServices = [
    {
      title: "Speech Sound & Articulation Therapy",
      desc: "Support for children who are difficult to understand or who substitute, drop, or distort sounds.",
      icon: Volume2,
      tag: "Speech Sounds"
    },
    {
      title: "Language Development Therapy",
      desc: "Building vocabulary, sentence structure, and the ability to understand and follow directions — for late talkers through school-age children.",
      icon: MessageSquare,
      tag: "Expressive & Receptive"
    },
    {
      title: "Social Communication (Pragmatics)",
      desc: "Turn-taking, conversation skills, reading social cues, and building the language tools needed for friendships — often delivered alongside our Social Skills Groups.",
      icon: Users,
      tag: "Social Connection"
    },
    {
      title: "Fluency Support (Stuttering)",
      desc: "Strategies to build confident, fluent speech at a pace that respects the child.",
      icon: Sparkles,
      tag: "Fluency & Confidence"
    },
    {
      title: "Speech Therapy Integrated with ABA & OT",
      desc: "For children already receiving ABA or occupational therapy with us, speech goals are built directly into the broader program rather than treated as a separate silo.",
      icon: Layers,
      tag: "Integrated Care"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We learn about your concerns, your child's history, and what communication looks like day to day."
    },
    {
      step: "02",
      title: "Assessment",
      desc: "A qualified Speech-Language Pathologist evaluates speech sounds, language comprehension, expression, and social communication."
    },
    {
      step: "03",
      title: "Individualized Plan",
      desc: "Goals are set collaboratively with you, and — where relevant — coordinated with your child's ABA or OT team."
    },
    {
      step: "04",
      title: "Ongoing Therapy & Progress Reviews",
      desc: "Regular sessions with check-ins so you always know how your child is progressing."
    }
  ];

  const faqs = [
    {
      q: "At what age should my child start speech therapy?",
      a: "Earlier is generally better. If your toddler isn't using words by 18 months, or their speech is hard for family members to understand by age 3, it's worth an assessment — early intervention tends to produce stronger, faster results."
    },
    {
      q: "Do you work with adults, or only children?",
      a: "Our primary focus is pediatric speech and language therapy, though we assess on a case-by-case basis. Contact us to discuss your specific situation."
    },
    {
      q: "Do I need a doctor's referral?",
      a: "No referral is required to book an initial consultation."
    },
    {
      q: "Is speech therapy covered by insurance?",
      a: "Many extended health plans cover speech-language pathology services. We recommend checking directly with your provider for your specific coverage."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main className="flex-grow pt-32 sm:pt-36">
        
        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/90 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          
          {/* Background Lighting Blur */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4A7C64]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-[#2A5243]/20 shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#F57A54]" />
                  <span>Speech Therapy in Vaughan & Bradford</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1B3B48] leading-tight">
                  Speech Therapy in Vaughan
                </h1>

                <p className="text-xl sm:text-2xl font-black text-[#F57A54] leading-snug">
                  Personalized, multidisciplinary speech and language support for children and adults — right here in Vaughan.
                </p>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  At <strong>Hand in Hand Therapy Centre</strong>, we believe every child and family deserves a plan built around how they actually learn, not a one-size-fits-all program. Our Vaughan clinic (located in Concord, at <strong>65 Millway Ave, Unit 38</strong>) brings speech-language pathology together with ABA/IBI therapy, occupational therapy, and social skills groups — so your child gets coordinated care from a team that talks to each other, not a single therapist working in isolation.
                </p>

                {/* Hero CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-[#2A5243] hover:bg-[#1B3B48] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
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
                    src="/images/speech-therapy-vaughan.png"
                    alt="Speech Therapy Session in Vaughan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[#1B3B48] space-y-1 shadow-lg">
                    <span className="text-xs font-black text-[#F57A54] uppercase tracking-wider block">
                      Individualized Speech Care
                    </span>
                    <p className="text-sm font-bold leading-tight">
                      Multidisciplinary SLP + ABA + OT Collaboration in Concord & Bradford
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Families Choose Hand in Hand */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <ShieldCheck className="w-4 h-4 text-[#F57A54]" />
                <span>The Hand in Hand Difference</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                Why Families in Vaughan Choose Hand in Hand
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                Integrated care designed around your child&rsquo;s total communication profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {whyChoosePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#FBF9F5] via-white to-[#E8F0EC]/30 p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2A5243]/30 transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center font-bold shadow-xs`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-[#2A5243] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3B48] group-hover:text-[#2A5243] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Our Speech Therapy Services in Vaughan */}
        <section className="py-16 sm:py-24 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <Layers className="w-4 h-4 text-[#F57A54]" />
                <span>Specialized SLP Offerings</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                Our Speech Therapy Services in Vaughan
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                Comprehensive speech-language programs tailored for early learners, school-age children, and teens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speechServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#F57A54]/40 transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#E8F0EC] text-[#2A5243] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-[#2A5243]/20">
                        {service.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F57A54]/10 text-[#F57A54] flex items-center justify-center">
                        <service.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-[#1B3B48] leading-snug group-hover:text-[#F57A54] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-extrabold text-[#2A5243] group-hover:text-[#F57A54] transition-colors">
                    <span>Learn More in Consultation</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* What to Expect Timeline */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <Clock className="w-4 h-4 text-[#F57A54]" />
                <span>Step-by-Step Care Journey</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                What to Expect
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                A seamless, supportive pathway from intake to ongoing progress evaluations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBF9F5] p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 relative group hover:border-[#2A5243]/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#2A5243] text-white text-xl font-black flex items-center justify-center shadow-md">
                    {stepItem.step}
                  </div>

                  <h3 className="text-xl font-black text-[#1B3B48]">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {stepItem.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Serving Vaughan & Bradford (Location Cards & Embedded Maps) */}
        <section className="py-16 sm:py-24 bg-[#FBF9F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <MapPin className="w-4 h-4 text-[#F57A54]" />
                <span>Our Therapy Centres</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                Serving Vaughan & Bradford
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                Two convenient locations equipped with modern therapy suites, OT gyms, and sensory spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Vaughan / Concord Clinic Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-lg space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    Vaughan / Concord Clinic
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3B48]">
                    65 Millway Ave, Unit 38, Concord, Ontario
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Serving Vaughan, Woodbridge, Maple, Thornhill, Kleinburg, and surrounding York Region communities.
                  </p>

                  <div className="space-y-2 pt-2 text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                      <span>Phone: (416)-930-5293</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2A5243]" />
                      <span>Email: handinhandtherapycentre@yahoo.com</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Map Container */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner mt-4 relative">
                  <iframe
                    title="Vaughan Concord Speech Therapy Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.479590823485!2d-79.52985!3d43.7915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fc3040e3f2d%3A0x8817a3a89e924a4d!2s65%20Millway%20Ave%20%2338%2C%20Concord%2C%20ON%20L4K%203V7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Bradford Clinic Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-lg space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                    Bradford Clinic
                  </div>

                  <h3 className="text-2xl font-black text-[#1B3B48]">
                    465 Holland Street West, Unit 3/4, Bradford, Ontario
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    Serving Bradford West Gwillimbury, Newmarket, and southern Simcoe County.
                  </p>

                  <div className="space-y-2 pt-2 text-xs font-bold text-slate-700">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#F57A54]" />
                      <span>Phone: (416)-930-5293</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2A5243]" />
                      <span>Email: handinhandtherapycentre@yahoo.com</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Map Container */}
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner mt-4 relative">
                  <iframe
                    title="Bradford Speech Therapy Clinic Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.341142273891!2d-79.6548!3d44.1147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad5b922222223%3A0x123456789abcdef!2s465%20Holland%20St%20W%2C%20Bradford%2C%20ON%20L3Z%200C1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
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

        {/* Frequently Asked Questions */}
        <section className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-[#2A5243]/20">
                <HelpCircle className="w-4 h-4 text-[#F57A54]" />
                <span>Common Inquiries</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1B3B48] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBF9F5] p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs space-y-3"
                >
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#1B3B48] flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#2A5243] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{faq.q}</span>
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium pl-10">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Ready to Get Started CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-[#0F2530] via-[#1B3B48] to-[#0F2530] text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-black uppercase tracking-wider border border-white/15">
              <Sparkles className="w-4 h-4 text-[#F57A54]" />
              <span>Take the First Step</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Get Started?
            </h2>

            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
              If you&rsquo;re noticing signs your child might benefit from speech therapy, don&rsquo;t wait — early support makes a real difference. Reach out to our Vaughan or Bradford team today.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-black text-[#1B3B48] bg-white hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#2A5243]" />
                <span>Contact Us / Book a Consultation</span>
                <ArrowRight className="w-5 h-5 text-[#F57A54]" />
              </Link>

              <a
                href="tel:4169305293"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5 text-[#F57A54]" />
                <span>Call (416) 930-5293</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
