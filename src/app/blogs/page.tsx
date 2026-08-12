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
      id: 1,
      slug: "oap-funding-guide-2026",
      title: "Navigating the Ontario Autism Program (OAP) Access Funding in 2026",
      excerpt: "A comprehensive breakdown of core clinical services funding, budget allocations, eligible therapies, and step-by-step guidance for submitting claims through Access OAP.",
      category: "funding",
      track: "pediatric",
      author: "Nakita & Cassandra",
      authorRole: "Clinical Directors & Therapy Founders",
      readTime: "8 min read",
      date: "August 10, 2026",
      image: "/images/therapy-hero.png",
      featured: true
    },
    {
      id: 2,
      slug: "passport-funding-transition-18",
      title: "Transitioning Beyond 18: Maximizing Ontario Passport Funding for Day Programs",
      excerpt: "Essential steps for parents of teens aging out of school systems. Learn how Passport Funding covers adult day programs, community trips, and independent living skills.",
      category: "funding",
      track: "adult",
      author: "Cassandra",
      authorRole: "Adult Day Program Director",
      readTime: "7 min read",
      date: "August 4, 2026",
      image: "/images/adult-day-program.png",
      featured: false
    },
    {
      id: 3,
      slug: "aac-devices-speech-therapy",
      title: "Building Early Communication: How AAC Devices Complement Speech Therapy",
      excerpt: "Discover how Augmentative and Alternative Communication (AAC) devices empower non-verbal toddlers to express wants, lower frustration, and expand speech articulation.",
      category: "speech",
      track: "pediatric",
      author: "Nakita",
      authorRole: "Pediatric Therapy Specialist",
      readTime: "5 min read",
      date: "July 28, 2026",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      slug: "culinary-life-skills-adults",
      title: "Fostering Independence: How Culinary Kitchens Build Vocational Confidence",
      excerpt: "Inside our Bradford life-skills kitchen: how cooking, meal prep, and kitchen safety foster autonomy and self-esteem for adults with developmental delays.",
      category: "adult",
      track: "adult",
      author: "Cassandra",
      authorRole: "Life-Skills & Vocational Lead",
      readTime: "6 min read",
      date: "July 19, 2026",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      featured: false
    },
    {
      id: 5,
      slug: "sensory-regulation-at-home",
      title: "Sensory Regulation at Home: Creating a Calming Snoezelen Corner on a Budget",
      excerpt: "Occupational therapy strategies to help children self-regulate sensory overstimulation using light cables, deep pressure, and tactile tools.",
      category: "aba",
      track: "pediatric",
      author: "Nakita",
      authorRole: "Sensory & OT Clinical Lead",
      readTime: "6 min read",
      date: "July 12, 2026",
      image: "/images/camp-community.png",
      featured: false
    },
    {
      id: 6,
      slug: "adult-social-connections",
      title: "Promoting Meaningful Adult Friendships & Peer Inclusion After Age 18",
      excerpt: "Why social connection is crucial for young adults with special needs and how structured gaming lounges & community outings prevent isolation.",
      category: "adult",
      track: "adult",
      author: "Nakita & Cassandra",
      authorRole: "Co-Founders & Clinical Leads",
      readTime: "5 min read",
      date: "June 30, 2026",
      image: "/images/adult-community-trips.png",
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
    <div className="space-y-12">
      
      {/* Luxury Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F2530] via-[#1B3B48] to-[#0F2530] text-white p-8 sm:p-14 shadow-2xl border border-[#2A5243]/40">
        
        {/* Subtle Ambient Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2A5243]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F57A54]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-extrabold uppercase tracking-wider text-[#6B8E7B]">
            <Compass className="w-4 h-4 text-[#F57A54]" />
            <span>Clinical Knowledge Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Clinical Insights & Parent Guides
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Evidence-based ABA guides, speech milestones, OAP & Passport funding advice, and developmental strategies written by Nakita & Cassandra.
          </p>
        </div>
      </div>

      {/* Filter Tabs & Search Header */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          {[
            { id: "all", label: "All Insights", icon: Filter },
            { id: "pediatric", label: "Pediatric Care (2–18)", icon: Heart },
            { id: "adult", label: "Adult Programs (18+)", icon: Sparkles },
            { id: "funding", label: "OAP & Passport Funding", icon: Tag },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                  isActive
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
            placeholder="Search articles by keyword or author..."
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
                <div className="w-10 h-10 rounded-full bg-[#2A5243] text-white font-bold flex items-center justify-center text-sm shadow-md border border-white/20">
                  {featuredPost.author.charAt(0)}
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
            key={post.id}
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
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full text-white shadow-xs uppercase tracking-wider ${
                  post.track === "pediatric" ? "bg-[#2A5243]" : post.track === "adult" ? "bg-[#1B3B48]" : "bg-[#F57A54]"
                }`}>
                  {post.track === "pediatric" ? "Pediatric (2–18)" : post.track === "adult" ? "Adult (18+)" : "Universal"}
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
                  <div className="w-8 h-8 rounded-full bg-[#1B3B48] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    {post.author.charAt(0)}
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

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
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
