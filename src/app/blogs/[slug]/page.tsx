import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  Compass,
  ArrowRight,
  User,
  Heart,
  Sparkles,
  MapPin,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

interface BlogPostDetail {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryBadge: string;
  track: "pediatric" | "adult" | "both";
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string[];
    }[];
    quote?: {
      text: string;
      author: string;
    };
  };
}

const blogData: Record<string, BlogPostDetail> = {
  "oap-funding-guide-2026": {
    slug: "oap-funding-guide-2026",
    title: "Navigating the Ontario Autism Program (OAP) Access Funding in 2026",
    excerpt: "A comprehensive breakdown of core clinical services funding, budget allocations, eligible therapies, and step-by-step guidance for submitting claims through Access OAP.",
    category: "OAP Funding",
    categoryBadge: "bg-[#2A5243] text-white",
    track: "pediatric",
    author: "Nakita & Cassandra",
    authorRole: "Clinical Directors & Therapy Founders",
    readTime: "8 min read",
    date: "August 10, 2026",
    image: "/images/therapy-hero.png",
    content: {
      intro: "Navigating government funding for pediatric autism therapy can often feel overwhelming for families. In Ontario, Access OAP manages core clinical services funding to help children under 18 access evidence-based therapies including ABA (Applied Behavior Analysis), Speech-Language Pathology, and Occupational Therapy.",
      keyTakeaways: [
        "Core Clinical Services funding is allocated based on your child's age and determined funding tier.",
        "Eligible services include 1-on-1 ABA, Speech Therapy, Occupational Therapy, and specialized clinical supervision.",
        "Reimbursements can be claimed directly via the Access OAP online portal with itemized invoices.",
        "Hand In Hand Therapy Centre provides full administrative support for invoice submission in Concord & Bradford."
      ],
      sections: [
        {
          heading: "Understanding Core Clinical Services Tiers",
          body: [
            "Access OAP operates on a funding model designed to give families flexibility in choosing registered clinical service providers. Depending on your child's age group (ages 2–5, 6–11, or 12–17) and intake assessment, your family receives an annual budget allocation.",
            "This funding can be utilized across multidisciplinary therapies to target communication, behavioral regulation, fine and gross motor development, and social pragmatics."
          ]
        },
        {
          heading: "How to Allocate Your Budget Effectively",
          body: [
            "We recommend working closely with your Clinical Supervisor (BCBA) to draft an individualized service plan that prioritizes high-impact goals. For younger children, prioritizing early intensive behavioral intervention (EIBI) and speech articulation yields high long-term developmental gains.",
            "For school-aged children, blending center-based ABA sessions with social skills groups and sensory OT helps maintain classroom focus and peer engagement."
          ]
        },
        {
          heading: "Submitting Invoices and Avoided Common Delays",
          body: [
            "To ensure seamless reimbursement, invoices submitted to Access OAP must include the BCBA or registered therapist's registration number, dates of service, and itemized fee breakdown.",
            "At Hand In Hand Therapy Centre, our administrative team generates Access OAP-compliant receipts for every session so parents never face delayed funding claims."
          ]
        }
      ],
      quote: {
        text: "Empowering parents with clarity on OAP funding allows families to focus on what matters most: watching their children grow, communicate, and thrive.",
        author: "Nakita & Cassandra, Founders"
      }
    }
  },
  "passport-funding-transition-18": {
    slug: "passport-funding-transition-18",
    title: "Transitioning Beyond 18: Maximizing Ontario Passport Funding for Day Programs",
    excerpt: "Essential steps for parents of teens aging out of school systems. Learn how Passport Funding covers adult day programs, community trips, and independent living skills.",
    category: "Adult Passport Funding",
    categoryBadge: "bg-[#1B3B48] text-white",
    track: "adult",
    author: "Cassandra",
    authorRole: "Adult Day Program Director",
    readTime: "7 min read",
    date: "August 4, 2026",
    image: "/images/adult-day-program.png",
    content: {
      intro: "When young adults turn 18 and graduate from high school, families face a significant transition period. In Ontario, Passport Funding provides financial support to adults with a developmental disability to participate in community activities, build life skills, and attend structured day programs.",
      keyTakeaways: [
        "Passport Funding is administered through Developmental Services Ontario (DSO).",
        "Covers fees for structured day programs, vocational workshops, and community field trips.",
        "Supports independent living skill development including culinary training and computer literacy.",
        "Allows parents to purchase caregiver relief and respite services."
      ],
      sections: [
        {
          heading: "Steps to Apply for DSO and Passport Funding",
          body: [
            "Prior to your son or daughter turning 18, it is critical to initiate registration with Developmental Services Ontario (DSO). The DSO assessment determines eligibility for Passport Funding and supportive housing programs.",
            "Once approved, funding can be directed toward community participation support, such as The Next Level Adult Day Program at Hand In Hand."
          ]
        },
        {
          heading: "Utilizing Passport Funding for Life-Skill Kitchens & Tech Labs",
          body: [
            "Passport Funding allows flexibility in choosing programs that foster true adult independence. Participants at our Concord and Bradford centers utilize their funding to practice grocery shopping, meal preparation, banking, and digital resume building.",
            "Engaging in structured daily activities helps maintain social routines, prevents isolation, and builds lifelong friendships."
          ]
        }
      ],
      quote: {
        text: "Adulthood is about dignity, choice, and active community participation. Passport Funding opens the door for young adults to thrive.",
        author: "Cassandra, Adult Program Director"
      }
    }
  },
  "aac-devices-speech-therapy": {
    slug: "aac-devices-speech-therapy",
    title: "Building Early Communication: How AAC Devices Complement Speech Therapy",
    excerpt: "Discover how Augmentative and Alternative Communication (AAC) devices empower non-verbal toddlers to express wants, lower frustration, and expand speech articulation.",
    category: "Pediatric Speech",
    categoryBadge: "bg-[#2A5243] text-white",
    track: "pediatric",
    author: "Nakita",
    authorRole: "Pediatric Therapy Specialist",
    readTime: "5 min read",
    date: "July 28, 2026",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro: "For parents of non-verbal or minimally verbal children, frustration around communication is one of the biggest daily challenges. AAC (Augmentative and Alternative Communication) devices provide a powerful voice for toddlers and young children beginning their communication journey.",
      keyTakeaways: [
        "AAC devices include symbol boards, speech-generating apps (e.g. Proloquo2Go, TouchChat), and eye-gaze systems.",
        "Using an AAC device does NOT prevent a child from developing verbal speech; studies show it actually encourages vocalization.",
        "Speech-Language Pathologists customize vocabulary grids based on the child's daily routines."
      ],
      sections: [
        {
          heading: "Debunking the Myth: Will AAC Replace Verbal Speech?",
          body: [
            "One of the most common concerns parents share is whether introducing an AAC tablet will discourage vocal speech. Clinical research consistently shows that AAC reduces communication frustration, lowering behavioral meltdowns and creating positive neurological feedback for verbal speech development.",
            "Children learn that pressing a button produces immediate rewards, prompting them to imitate sounds alongside the device output."
          ]
        }
      ]
    }
  },
  "culinary-life-skills-adults": {
    slug: "culinary-life-skills-adults",
    title: "Fostering Independence: How Culinary Kitchens Build Vocational Confidence",
    excerpt: "Inside our Bradford life-skills kitchen: how cooking, meal prep, and kitchen safety foster autonomy and self-esteem for adults with developmental delays.",
    category: "Adult Vocational",
    categoryBadge: "bg-[#1B3B48] text-white",
    track: "adult",
    author: "Cassandra",
    authorRole: "Life-Skills & Vocational Lead",
    readTime: "6 min read",
    date: "July 19, 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro: "Cooking is more than just preparing a meal—it is a multi-step cognitive, sensory, and motor exercise that builds confidence. In our life-skills kitchens at Hand In Hand, adult participants master daily culinary routines in a safe, supportive environment.",
      keyTakeaways: [
        "Kitchen routines build sequencing, time management, and fine-motor dexterity.",
        "Participants learn food hygiene, knife safety with adaptive tools, and induction stove operation.",
        "Group cooking fosters teamwork, communication, and shared culinary pride."
      ],
      sections: [
        {
          heading: "Step-by-Step Task Breakdown in the Kitchen",
          body: [
            "We utilize visual recipe cards and color-coded measuring tools to help participants independently follow recipes. From measuring ingredients to setting tables and washing dishes, every step reinforces functional independence."
          ]
        }
      ]
    }
  },
  "sensory-regulation-at-home": {
    slug: "sensory-regulation-at-home",
    title: "Sensory Regulation at Home: Creating a Calming Snoezelen Corner on a Budget",
    excerpt: "Occupational therapy strategies to help children self-regulate sensory overstimulation using light cables, deep pressure, and tactile tools.",
    category: "Sensory & OT",
    categoryBadge: "bg-[#2A5243] text-white",
    track: "pediatric",
    author: "Nakita",
    authorRole: "Sensory & OT Clinical Lead",
    readTime: "6 min read",
    date: "July 12, 2026",
    image: "/images/camp-community.png",
    content: {
      intro: "Children with sensory processing differences often experience sensory overload after a long day at school. Creating a dedicated quiet sensory nook at home gives your child a safe sanctuary to decompress and self-regulate.",
      keyTakeaways: [
        "Dim, warm lighting reduces visual overstimulation.",
        "Weighted blankets and compression vests provide calming deep pressure therapy.",
        "Tactile fiber-optic sensory lights encourage quiet focus."
      ],
      sections: [
        {
          heading: "Setting Up Your Home Sensory Nook",
          body: [
            "Choose a quiet corner of your living room or bedroom away from loud televisions or high-traffic areas. Add a soft pop-up tent, weighted lap pads, and soothing bubble lamps to create a tranquil space."
          ]
        }
      ]
    }
  },
  "adult-social-connections": {
    slug: "adult-social-connections",
    title: "Promoting Meaningful Adult Friendships & Peer Inclusion After Age 18",
    excerpt: "Why social connection is crucial for young adults with special needs and how structured gaming lounges & community outings prevent isolation.",
    category: "Adult Life",
    categoryBadge: "bg-[#1B3B48] text-white",
    track: "adult",
    author: "Nakita & Cassandra",
    authorRole: "Co-Founders & Clinical Leads",
    readTime: "5 min read",
    date: "June 30, 2026",
    image: "/images/adult-community-trips.png",
    content: {
      intro: "Social isolation is one of the most common challenges young adults face after leaving high school. Building peer connections in structured social environments helps adults develop long-lasting friendships, confidence, and emotional well-being.",
      keyTakeaways: [
        "Structured social lounges facilitate natural icebreakers through board games and sports.",
        "Community field trips build shared memories and real-world conversation skills.",
        "Peer mentorship encourages positive role modeling and mutual support."
      ],
      sections: [
        {
          heading: "Creating Inclusive Group Dynamics",
          body: [
            "At The Next Level Adult Day Program, our facilitators design activities around shared participant interests—from gaming tournaments and art projects to weekly community volunteer trips."
          ]
        }
      ]
    }
  }
};

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  const otherPosts = Object.values(blogData).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb & Back Link */}
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#2A5243] hover:text-[#1B3B48] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <span className="text-xs font-semibold text-slate-400">
              Hand In Hand Clinical Journal
            </span>
          </div>

          {/* Article Header Card */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider ${post.categoryBadge}`}>
                {post.category}
              </span>
              <span className="text-xs font-bold text-slate-400">•</span>
              <span className="text-xs font-bold text-[#2A5243] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F57A54]" />
                Concord / Vaughan & Bradford
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B3B48] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              {post.excerpt}
            </p>

            {/* Author Profile Bar */}
            <div className="pt-4 border-t border-b border-slate-200/80 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2A5243] text-white font-bold text-base flex items-center justify-center shadow-md border-2 border-white">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-[#1B3B48]">{post.author}</span>
                  <span className="block text-xs text-slate-500 font-medium">{post.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#F57A54]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-[#2A5243]">
                  <Clock className="w-4 h-4 text-[#6B8E7B]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Introduction Lead */}
              <div className="p-6 rounded-3xl bg-[#E8F0EC]/60 border border-[#2A5243]/20 text-[#1B3B48] text-base leading-relaxed font-medium space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2A5243] block">
                  Clinical Executive Summary
                </span>
                <p>{post.content.intro}</p>
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-extrabold text-[#1B3B48] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2A5243]" />
                  <span>Key Article Takeaways</span>
                </h3>
                <ul className="space-y-3">
                  {post.content.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Content Sections */}
              {post.content.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#1B3B48] pt-2">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-base text-slate-700 leading-relaxed font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {/* Quote Pullout */}
              {post.content.quote && (
                <div className="my-8 p-8 rounded-3xl bg-[#0F2530] text-white space-y-3 shadow-xl border border-[#2A5243]/50">
                  <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-slate-100">
                    &ldquo;{post.content.quote.text}&rdquo;
                  </p>
                  <span className="block text-xs font-extrabold text-[#6B8E7B] uppercase tracking-wider">
                    — {post.content.quote.author}
                  </span>
                </div>
              )}

              {/* Author Bio Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-extrabold text-[#2A5243] uppercase tracking-wider block">
                  About the Authors
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B3B48] text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                    {post.author.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[#1B3B48]">{post.author}</h4>
                    <p className="text-xs text-slate-500 font-medium">{post.authorRole}</p>
                    <p className="text-xs text-slate-600">
                      Co-founders and Directors at Hand In Hand Therapy Centre (2–18) & The Next Level Adult Day Program (18+) in Concord / Vaughan & Bradford.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Sticky Panel (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Intake CTA Box */}
              <div className="bg-[#2A5243] text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl border border-[#2A5243]">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 text-[#F57A54]" />
                </div>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Need Help with Funding or Therapy Intake?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Connect directly with our admissions team to discuss Access OAP or Passport Funding applications for your family.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* More Related Articles */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-extrabold text-[#1B3B48] uppercase tracking-wider">
                  Related Clinical Articles
                </h3>

                <div className="space-y-4">
                  {otherPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blogs/${rel.slug}`}
                      className="group block space-y-1.5 p-3 rounded-2xl hover:bg-[#FBF9F5] transition-colors"
                    >
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F0EC] text-[#2A5243] uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#1B3B48] group-hover:text-[#2A5243] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                      <span className="block text-[10px] text-slate-400">
                        {rel.readTime} • By {rel.author}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
