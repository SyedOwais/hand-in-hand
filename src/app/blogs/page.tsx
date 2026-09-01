"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Sparkles,
  Heart,
  Clock,
  ArrowRight,
  Filter,
  Search,
  Tag,
  Calendar,
  Compass,
  TrendingUp
} from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: "aba" | "speech" | "adult" | "funding" | "parenting";
  track: "pediatric" | "adult" | "both";
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

function BlogsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("track") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const trackParam = searchParams.get("track");
    if (trackParam === "adult" || trackParam === "pediatric") {
      setActiveCategory(trackParam);
    }
  }, [searchParams]);

  const blogPosts: BlogPost[] = [
    {
      id: 11,
      slug: "bradford-life-skills-routines-parent-guide",
      title: "Building Life Skills & Routines at Home: A Parent's Guide",
      excerpt: "Struggling with mornings, self-care, or getting your child ready for school? Learn how structured routines build lasting independence.",
      category: "parenting",
      track: "pediatric",
      author: "Hand In Hand Clinical Team",
      authorRole: "Pediatric & Life Skills Specialists",
      readTime: "8 min read",
      date: "August 28, 2026",
      image: "/images/What Hand in Hand Inc. has to offer.jpg",
      featured: true
    },
    {
      id: 10,
      slug: "adult-speech-therapy-vaughan-guide",
      title: "Adult Speech Therapy in Vaughan: Who It's For and How It Helps",
      excerpt: "Speech therapy isn't just for kids. Learn how adults in Vaughan use speech therapy for stroke recovery, voice, stuttering, accent modification, and more.",
      category: "speech",
      track: "adult",
      author: "Hand In Hand Clinical Team",
      authorRole: "Adult Speech-Language Pathology Team",
      readTime: "7 min read",
      date: "August 25, 2026",
      image: "/images/adult-01.webp",
      featured: false
    },
    {
      id: 9,
      slug: "aba-therapy-vaughan-parent-guide",
      title: "ABA Therapy in Vaughan: What Every Parent Should Know Before Getting Started",
      excerpt: "New to ABA therapy? Learn how it works, what BCBA supervision means, and how to choose an ABA provider in Vaughan for your child.",
      category: "aba",
      track: "pediatric",
      author: "Hand In Hand Clinical Team",
      authorRole: "BCBA & Multidisciplinary Team",
      readTime: "8 min read",
      date: "August 25, 2026",
      image: "/images/aba-therapy-vaughan.png",
      featured: true
    },
    {
      id: 8,
      slug: "vaughan-pediatric-occupational-therapy-signs",
      title: "Does My Child Need Occupational Therapy? Signs Every Vaughan Parent Should Know",
      excerpt: "Struggling with handwriting, sensory overload, or daily routines? Learn the signs your child may benefit from occupational therapy in Vaughan & Bradford.",
      category: "aba",
      track: "pediatric",
      author: "Hand In Hand Clinical Team",
      authorRole: "Occupational Therapy Team",
      readTime: "7 min read",
      date: "August 13, 2026",
      image: "/images/indoor.webp",
      featured: false
    },
    {
      id: 1,
      slug: "vaughan-pediatric-speech-language-delay-signs",
      title: "Signs Your Child May Need Speech Therapy in Vaughan: A Parent's Guide",
      excerpt: "Wondering if your child needs speech therapy? Learn the signs, what to expect, and how Hand in Hand Therapy Centre supports Vaughan & Bradford families.",
      category: "speech",
      track: "pediatric",
      author: "Hand In Hand Clinical Team",
      authorRole: "Speech-Language Pathology Team",
      readTime: "7 min read",
      date: "August 13, 2026",
      image: "/images/signs-child-speech-therapy-vaughan.png",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "pediatric" && (post.track === "pediatric" || post.track === "both")) ||
      (activeCategory === "adult" && (post.track === "adult" || post.track === "both")) ||
      post.category === activeCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="space-y-8">

      {/* Light Gradient Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#E8F0EC] via-[#FBF9F5] to-[#E8F0EC] p-8 sm:p-14 shadow-xl border border-[#2A5243]/20 text-[#1B3B48]">

        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A5243]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F57A54]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A5243]/10 border border-[#2A5243]/20 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-xs">
            <span>Clinical Knowledge Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1B3B48] leading-tight">
            Clinical Insights & Parent Guides
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
            Evidence-based ABA guides, speech milestones, OAP & Passport funding advice, and developmental strategies written by our expert clinical team.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Header */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          {[
            { id: "all", label: "All Insights", icon: Filter },
            { id: "pediatric", label: "Care & Therapy (2–18)", icon: Heart },
            { id: "adult", label: "Adult Programs (18+)", icon: Sparkles },
            { id: "funding", label: "OAP & Passport Funding", icon: Tag },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${isActive
                    ? "bg-[#1B3B48] text-white shadow-lg scale-105"
                    : "bg-[#FBF9F5] text-slate-600 hover:bg-[#E8F0EC] border border-slate-200/80"
                  }`}
              >
                <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-[#6B8E7B]" : "text-[#2A5243]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by keyword or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FBF9F5] border border-slate-200 text-xs sm:text-sm text-[#1B3B48] placeholder-slate-400 focus:outline-none focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 transition-all shadow-xs"
          />
        </div>

      </div>

      {/* Featured Main Hero Article */}
      {!searchQuery && activeCategory === "all" && (
        <Link
          href={`/blogs/${featuredPost.slug}`}
          className="group relative bg-[#0F2530] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0 transform hover:-translate-y-1 transition-all duration-500 block"
        >

          {/* Featured Image */}
          <div className="relative h-72 lg:h-auto lg:col-span-7 overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-extrabold px-4 py-1.5 rounded-full bg-[#F57A54] text-white shadow-lg uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                Featured Clinical Guide
              </span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-[#6B8E7B]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F57A54]" />
                  {featuredPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#6B8E7B]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#6B8E7B] transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>

            {/* Author Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md border border-white/30 bg-white shrink-0">
                  <Image
                    src="/favicon.png"
                    alt={featuredPost.author}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-white">{featuredPost.author}</span>
                  <span className="block text-[10px] text-slate-400">{featuredPost.authorRole}</span>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#F57A54] group-hover:translate-x-1 transition-all shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </Link>
      )}

      {/* Editorial Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 block"
          >
            {/* Header Image */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full text-white shadow-xs uppercase tracking-wider ${post.track === "pediatric" ? "bg-[#2A5243]" : post.track === "adult" ? "bg-[#1B3B48]" : "bg-[#F57A54]"
                  }`}>
                  {post.track === "pediatric" ? "Child Care (2–18)" : post.track === "adult" ? "Adult (18+)" : "Universal"}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500">
                  <span className="flex items-center gap-1 text-[#2A5243]">
                    <Calendar className="w-3.5 h-3.5 text-[#F57A54]" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#6B8E7B]" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-xs border border-slate-200 bg-white shrink-0">
                    <Image
                      src="/favicon.png"
                      alt={post.author}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#1B3B48]">{post.author}</span>
                    <span className="block text-[10px] text-slate-500">{post.authorRole}</span>
                  </div>
                </div>

                <span className="text-xs font-extrabold text-[#2A5243] group-hover:text-[#F57A54] flex items-center gap-1 transition-colors">
                  Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Intake Call CTA Banner */}
      <div className="bg-[#2A5243] rounded-3xl p-8 sm:p-12 text-center text-white space-y-4 shadow-xl border border-[#2A5243]/50">
        <h2 className="text-2xl sm:text-4xl font-extrabold">
          Have Questions About Access OAP or Passport Funding?
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
          Schedule a complimentary consultation with our clinical team at Concord / Vaughan or Bradford.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-52 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-20">
              <span className="text-[#2A5243] font-bold text-lg">Loading Articles...</span>
            </div>
          }>
            <BlogsContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
