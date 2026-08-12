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

export const metadata = {
  title: "About Us | Hand In Hand - The Next Level",
  description: "Learn about Hand In Hand - The Next Level, created by Nakita Medeiros in 2010. Dedicated educators and clinicians offering ABA therapy and adult day programming across Vaughan & Bradford.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years of Specialized Care", value: "10+" },
    { label: "Founder Leadership", value: "Since 2010" },
    { label: "Standard Program Ratio", value: "1:5" },
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

      <main className="flex-grow pt-28 sm:pt-36">
        
        {/* Luxury Hero Section */}
        <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>Our Story, Mission & Leadership</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B3B48] leading-tight">
                Hand in Hand - The Next Level
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                A dedicated group of professional educators and clinicians providing compassionate, effective educational services for teenagers and adults with developmental special needs.
              </p>

              {/* Founder Tagline Banner */}
              <div className="pt-3 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm text-xs sm:text-sm font-bold text-[#1B3B48]">
                <Award className="w-4 h-4 text-[#F57A54]" />
                <span>Created by Founder & Owner <strong>Nakita Medeiros</strong> (Established 2010)</span>
              </div>

            </div>

            {/* Stats Row */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#2A5243]">
                    {stat.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-slate-600 mt-1">
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
                  src="/images/therapy-hero.png"
                  alt="Nakita Medeiros Hand in Hand Therapy Centre Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <strong>Hand in Hand - The Next Level</strong> consists of a group of professional educators and clinicians who are dedicated to providing efficient and effective educational services for all adults and young individuals. The team at Hand in Hand - The Next Level has specialized in providing therapy for individuals with developmental disabilities for over ten years.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              
              {/* Areas Most Struggle With */}
              <div className="bg-[#FBF9F5] p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-xl font-extrabold text-[#1B3B48] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2A5243]" />
                  <span>Key Life Areas Supported</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Our tailored programs specifically assist individuals struggling in essential everyday domains:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {coreStrugglesAddressed.map((struggle, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60 text-xs font-bold text-[#1B3B48]">
                      <span className="w-2 h-2 rounded-full bg-[#F57A54]" />
                      <span>{struggle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Open-Door Policy */}
              <div className="bg-[#0F2530] text-white p-8 rounded-3xl border border-white/10 shadow-xl space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#6B8E7B] text-xs font-extrabold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-[#F57A54]" />
                    <span>Family Partnership</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Complete Open-Door Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Collectively, the Hand in Hand - The Next Level team has experienced the ins and outs of many treatment clinics and thoroughly understand a vast variety of therapy styles.
                  </p>
                  <blockquote className="p-4 rounded-2xl bg-white/10 border-l-4 border-[#2A5243] text-xs text-slate-200 italic">
                    &ldquo;At Hand in Hand - The Next Level there is a complete open-door policy. This not only allows for parents to take part and watch their loved ones grow day by day, but also gives them the opportunity to learn and continue therapy exercises at home.&rdquo;
                  </blockquote>
                </div>
              </div>

            </div>

            {/* Founder Spotlight Card: Nakita Medeiros */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1B3B48] via-[#0F2530] to-[#1B3B48] text-white shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#2A5243] text-white font-black text-3xl sm:text-4xl flex items-center justify-center shadow-xl border-4 border-white/20">
                  N
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">Nakita Medeiros</h3>
                  <span className="text-xs font-extrabold text-[#6B8E7B] uppercase tracking-wider block mt-0.5">Founder & Owner</span>
                  <span className="text-xs text-slate-300 block">Hand in Hand Therapy Centre (Est. 2010)</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  The Visionary Creation of Nakita Medeiros
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <strong>Hand in Hand - The Next Level</strong> is the creation of Nakita Medeiros and is an expansion of the existing business, Hand in Hand Therapy Centre. Nakita is the founder and owner of Hand in Hand Therapy Centre since 2010. Nakita opened the doors to Hand in Hand Therapy Centre to care for children with special needs.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Over the years, Hand in Hand Therapy Center has focused on using educational and clinical expertise to teach children with a variety of learning styles in their homes, schools, communities, and at our center. Nakita has been collaborating with professionals of the field and continues to collectively learn. Nakita is extremely passionate about breaking down the barriers that isolate all individuals with special needs from the world around them. Nakita’s passion for inclusion is what led her to create Hand in Hand Therapy Centre.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: What Hand in Hand - The Next Level Does */}
        <section className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-3.5 py-1 rounded-full">
                Core Program Purpose
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3B48]">
                What Hand in Hand - The Next Level Does
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                A safe, inclusive environment providing a dedicated &ldquo;chill zone&rdquo;, peer connection, and essential life skill building.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Safe Atmosphere & Chill Zone */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#2A5243]/10 text-[#2A5243] flex items-center justify-center font-bold">
                    <Smile className="w-6 h-6 text-[#2A5243]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1B3B48]">
                    Safe Environment & &ldquo;Chill Zone&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Hand in Hand - The Next Level is a day program specifically catering to teenagers and adults with special needs. The atmosphere that Hand in Hand - The Next Level provides all attendees is a safe and inclusive environment where teenagers and adults will be able to express themselves.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hand in Hand - The Next Level intended to provide their clients with a safe &ldquo;chill zone&rdquo; that was previously not available. Hand in Hand - The Next Level is a place where teenagers and adults with special needs are encouraged to explore and meet new friends, hang out, and feel comfort among peers.
                  </p>
                </div>
              </div>

              {/* Card 2: Skill Building & High Needs Support */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B3B48]/10 text-[#1B3B48] flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6 text-[#1B3B48]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1B3B48]">
                    Motor & Valuable Life Skills
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Hand in Hand - The Next Level will also aid these individuals in learning new skills such as gross motor skills, fine motor skills, and valuable life skills.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Hand in Hand - The Next Level aims to meet the needs of high needs individuals, and individuals with behavioural issues who may need extra support in other day program environments.
                  </p>
                </div>
              </div>

              {/* Card 3: Parent Relief & Ratios */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F57A54]/10 text-[#F57A54] flex items-center justify-center font-bold">
                    <Heart className="w-6 h-6 text-[#F57A54]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1B3B48]">
                    Parent Relief & Flexible Ratios
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    Hand in Hand - The Next Level is a space where parents will feel comfortable bringing their loved ones. It allows parents to receive relief that was not accessible previously due to a serious lack of such programs, specifically for high needs individuals.
                  </p>
                  <div className="p-3 rounded-2xl bg-[#E8F0EC] border border-[#2A5243]/20 text-xs font-bold text-[#2A5243]">
                    <span>Standard Ratio: 1:5 (Instructor:Client)</span>
                    <span className="block text-[10px] text-slate-600 font-normal mt-0.5">1:1 support provided on a need basis.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: What Hand in Hand - The Next Level Has To Offer */}
        <section className="py-16 sm:py-24 bg-white">
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

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The transition to independence throughout young adulthood is a challenging and pivotal time for everybody. For young adults with developmental disabilities, these periods can be particularly difficult. Hand in Hand - The Next Level understands this difficulty that many teens and young adults with special needs are simply unprepared to experience.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  The main objective of Hand in Hand - The Next Level is to help ease individuals adjusting to having fewer and less structured support programs by providing a service to the community that is practically non-existent, especially to those with high needs.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  There are very few programs available for teenagers and adults with special needs that allow them to have the experiences in a safe and controlled environment catering specially to their needs. This demand will specifically allow Hand in Hand - The Next Level to excel as an organization.
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <span>Contact Nakita Medeiros</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/images/adult-day-program.png"
                  alt="The Next Level Adult Day Program Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                  <span className="text-[11px] font-extrabold text-[#EAA85E] uppercase tracking-wider block">Life Skills & Community Connection</span>
                  <p className="text-xs text-slate-200 mt-0.5">Empowering young adults with developmental special needs.</p>
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
