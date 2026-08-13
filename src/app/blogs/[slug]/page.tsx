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
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import type { Metadata } from "next";

interface BlogPostDetail {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
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
    faqs?: { q: string; a: string }[];
    quote?: {
      text: string;
      author: string;
    };
  };
}

const blogData: Record<string, BlogPostDetail> = {
  "signs-your-child-needs-speech-therapy-vaughan": {
    slug: "signs-your-child-needs-speech-therapy-vaughan",
    title: "Signs Your Child May Need Speech Therapy in Vaughan: A Parent's Guide",
    metaTitle: "Signs Your Child May Need Speech Therapy in Vaughan | Hand in Hand Therapy",
    metaDescription: "Wondering if your child needs speech therapy? Learn the signs, what to expect, and how Hand in Hand Therapy Centre supports Vaughan & Bradford families.",
    excerpt: "Learn the common signs of speech delay in toddlers and children, what to expect during an SLP assessment, and how early intervention supports Vaughan and Bradford families.",
    category: "Pediatric Speech",
    categoryBadge: "bg-[#2A5243] text-white",
    track: "pediatric",
    author: "Hand In Hand Clinical Team",
    authorRole: "Pediatric Speech-Language Pathology Team",
    readTime: "7 min read",
    date: "August 13, 2026",
    image: "/images/signs-child-speech-therapy-vaughan.png",
    content: {
      intro: "Every child develops at their own pace, which is exactly why so many Vaughan parents find themselves asking the same question: is this just a phase, or does my child actually need help? It's one of the most common concerns we hear at Hand in Hand Therapy Centre, and it's a good one to ask early. Speech and language delays are highly treatable, and the earlier they're addressed, the more smoothly a child tends to catch up - academically, socially, and emotionally.\n\nThis guide walks through the most common signs that a child may benefit from [speech therapy in Vaughan](/speech-therapy-vaughan), what a typical evaluation looks like, and how to find the right support for your family in Vaughan, Concord, Woodbridge, or Bradford.",
      keyTakeaways: [
        "Early intervention during toddler and preschool years generally produces faster, more durable speech and language progress.",
        "Common red flags include having fewer than 50 words by age 2, difficulty being understood by age 3, or communication frustration.",
        "Multidisciplinary care coordinates speech-language pathology with ABA and occupational therapy under one plan.",
        "No doctor referral is required to book an initial SLP consultation in Concord (Vaughan) or Bradford."
      ],
      sections: [
        {
          heading: "Why Early Intervention Matters",
          body: [
            "Speech and language are the foundation for almost everything else a child does - following instructions at school, making friends, expressing frustration instead of acting it out, and eventually, learning to read. When a child struggles to communicate, it often shows up in other areas first: tantrums that seem to come from nowhere, reluctance to play with other kids, or falling behind in preschool or kindergarten.",
            "The research is consistent on this point: children who receive support during the toddler and preschool years generally make faster, more durable progress than children who start therapy later. That doesn't mean it's ever 'too late' to start - it simply means that noticing the signs early and acting on them gives your child the biggest head start."
          ]
        },
        {
          heading: "Common Signs Your Child May Need Speech Therapy",
          body: [
            "Every child is different, and a single item on this list isn't necessarily cause for alarm. But if you're noticing several of these, it's worth a conversation with a speech-language pathologist.",
            "**By 12–18 Months:**\n• Not babbling or using consistent sounds to communicate\n• Not responding to their name or familiar sounds\n• Limited or no use of gestures like pointing or waving",
            "**By 2 Years:**\n• Fewer than 50 words in their vocabulary\n• Not yet combining two words together ('more milk,' 'go car')\n• Difficulty following simple, one-step directions",
            "**By 3 Years:**\n• Speech that's difficult for family members to understand\n• Frequent dropping or substitution of sounds (e.g., 'wabbit' for 'rabbit')\n• Limited sentence structure compared to same-age peers\n• Frustration or behavioural outbursts that seem tied to communication struggles",
            "**School-Age Children:**\n• Difficulty following multi-step directions or classroom instructions\n• Trouble telling a story in order, or organizing thoughts when speaking\n• Struggles with reading, spelling, or written expression\n• Social difficulties - trouble reading social cues, taking turns in conversation, or maintaining friendships\n• Noticeable stuttering or disfluency that causes distress",
            "**At Any Age:**\n• A sudden loss of speech or language skills that were previously present\n• Speech that's noticeably behind that of siblings or peers at the same age\n• Ongoing difficulty being understood by people outside the immediate family",
            "If any of this sounds familiar, know that you're not alone - and that a proper assessment is the clearest way to know what's actually going on, rather than guessing."
          ]
        },
        {
          heading: "What Happens During a Speech Therapy Assessment?",
          body: [
            "A lot of parents put off booking an assessment simply because they're not sure what to expect. Here's the general process, whether you're coming to our Vaughan (Concord) clinic or our [Bradford speech therapy clinic](/speech-therapy-vaughan#bradford):",
            "1. **Initial consultation:** We talk with you about your concerns, your child's developmental history, and what communication looks like at home, at school, and in social settings.\n2. **Formal assessment:** A registered Speech-Language Pathologist evaluates speech sound production, language comprehension, expression, and - where relevant - social communication skills.\n3. **Individualized plan:** Rather than a generic program, your child's plan is built around their specific strengths and challenges. If your child is also receiving ABA or occupational therapy with us, speech goals are coordinated across the whole team rather than treated separately.\n4. **Ongoing therapy with regular check-ins:** You'll always know what's being worked on and how your child is progressing.",
            "There's no need for a doctor's referral to book an initial consultation - you can reach out directly."
          ]
        },
        {
          heading: "Speech Therapy vs. 'Just Being a Late Talker'",
          body: [
            "One of the hardest parts of this decision is that some children genuinely are late talkers who catch up on their own - and others have a delay that benefits significantly from professional support. A few things tend to distinguish the two:",
            "• **Late talkers** typically understand more than they say, use gestures to communicate, and show steady (even if slow) progress month to month.\n• **Children who may need therapy** often show limited understanding and limited speech, plateau rather than progress, or show frustration and behavioural changes tied to communication difficulty.",
            "This distinction is exactly why an assessment - rather than a 'wait and see' approach - is worth doing. A speech-language pathologist can tell you fairly quickly which category your child falls into, and either way, you'll have a clear answer instead of months of uncertainty."
          ]
        },
        {
          heading: "Why Choose a Multidisciplinary Approach",
          body: [
            "Speech doesn't develop in isolation, and for many children - particularly those with autism spectrum disorder or other developmental differences - communication challenges are connected to behaviour, sensory processing, and social skills all at once. That's the thinking behind our approach at Hand in Hand Therapy Centre: our speech-language pathologists work alongside our [ABA/IBI therapists and occupational therapists](/therapy#what-we-help-with), so your child's communication goals are reinforced across every part of their program, not treated as a separate track.",
            "This kind of coordinated care is one of the biggest reasons families across Vaughan, Woodbridge, Maple, Thornhill, and Bradford West Gwillimbury choose to work with a multidisciplinary clinic rather than a single therapist working alone."
          ]
        },
        {
          heading: "Next Steps",
          body: [
            "If you've recognized a few of these signs in your own child, the best next step isn't to wait and worry - it's to book an assessment and get real answers. Our team at Hand in Hand Therapy Centre provides individualized [speech therapy in Vaughan](/speech-therapy-vaughan) and Bradford, integrated with ABA, occupational therapy, and social skills support when it's needed."
          ]
        }
      ],
      faqs: [
        {
          q: "How do I know if my child's speech delay is serious?",
          a: "Look for combinations of signs - limited vocabulary and limited understanding, or a plateau rather than gradual progress - rather than a single missed milestone. A formal assessment is the most reliable way to know for certain."
        },
        {
          q: "What age is too late to start speech therapy?",
          a: "There's no age where therapy stops being helpful. Children, teens, and even adults can make meaningful progress with the right support - though starting early generally means faster results."
        },
        {
          q: "How long does speech therapy usually take?",
          a: "This varies widely depending on the specific goals and the child. Some children make significant progress within months; others, particularly those with more complex needs, benefit from a longer-term, coordinated program."
        },
        {
          q: "Do you offer speech therapy in Bradford as well as Vaughan?",
          a: "Yes - Hand in Hand Therapy Centre has a dedicated clinic in Bradford serving Bradford West Gwillimbury and the surrounding area, in addition to our Vaughan (Concord) location."
        }
      ]
    }
  },
  "oap-funding-guide-2026": {
    slug: "oap-funding-guide-2026",
    title: "Navigating the Ontario Autism Program (OAP) Access Funding in 2026",
    excerpt: "A comprehensive breakdown of core clinical services funding, budget allocations, eligible therapies, and step-by-step guidance for submitting claims through Access OAP.",
    category: "OAP Funding",
    categoryBadge: "bg-[#2A5243] text-white",
    track: "pediatric",
    author: "Hand In Hand Clinical Team",
    authorRole: "Multidisciplinary Clinical Specialists",
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
          heading: "Submitting Invoices and Avoiding Common Delays",
          body: [
            "To ensure seamless reimbursement, invoices submitted to Access OAP must include the BCBA or registered therapist's registration number, dates of service, and itemized fee breakdown.",
            "At Hand In Hand Therapy Centre, our administrative team generates Access OAP-compliant receipts for every session so parents never face delayed funding claims."
          ]
        }
      ],
      quote: {
        text: "Empowering parents with clarity on OAP funding allows families to focus on what matters most: watching their children grow, communicate, and thrive.",
        author: "Hand In Hand Clinical Team"
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
    author: "Hand In Hand Clinical Team",
    authorRole: "Adult Program Specialists",
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
        author: "Hand In Hand Adult Program Team"
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
    author: "Hand In Hand Clinical Team",
    authorRole: "Pediatric Therapy Specialists",
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
    author: "Hand In Hand Clinical Team",
    authorRole: "Life-Skills & Vocational Team",
    readTime: "6 min read",
    date: "July 19, 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    content: {
      intro: "Cooking is more than just preparing a meal - it is a multi-step cognitive, sensory, and motor exercise that builds confidence. In our life-skills kitchens at Hand In Hand, adult participants master daily culinary routines in a safe, supportive environment.",
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
    author: "Hand In Hand Clinical Team",
    authorRole: "Sensory & OT Clinical Team",
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
    author: "Hand In Hand Clinical Team",
    authorRole: "Adult Program Specialists",
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
            "At The Next Level Adult Day Program, our facilitators design activities around shared participant interests - from gaming tournaments and art projects to weekly community volunteer trips."
          ]
        }
      ]
    }
  }
};

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];
  if (!post) {
    return {
      title: {
        absolute: "Article Not Found | Hand in Hand Therapy",
      },
    };
  }

  const titleText = post.metaTitle || `${post.title} | Hand in Hand Therapy`;

  return {
    title: {
      absolute: titleText,
    },
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://handinhandtherapy.ca/blogs/${post.slug}`,
    },
    openGraph: {
      title: titleText,
      description: post.metaDescription || post.excerpt,
      url: `https://handinhandtherapy.ca/blogs/${post.slug}`,
      siteName: "Hand In Hand Therapy Centre",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_CA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: post.metaDescription || post.excerpt,
      images: [post.image],
    },
  };
}

function headingToId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function findSectionIdForTakeaway(item: string, sections: { heading: string }[]): string | null {
  const lower = item.toLowerCase();
  if (lower.includes("early intervention") || lower.includes("toddler")) {
    const s = sections.find(sec => sec.heading.toLowerCase().includes("early intervention"));
    if (s) return headingToId(s.heading);
  }
  if (lower.includes("red flag") || lower.includes("50 words") || lower.includes("common")) {
    const s = sections.find(sec => sec.heading.toLowerCase().includes("signs"));
    if (s) return headingToId(s.heading);
  }
  if (lower.includes("multidisciplinary") || lower.includes("co-plan") || lower.includes("coordinates")) {
    const s = sections.find(sec => sec.heading.toLowerCase().includes("multidisciplinary"));
    if (s) return headingToId(s.heading);
  }
  if (lower.includes("doctor referral") || lower.includes("assessment") || lower.includes("consultation")) {
    const s = sections.find(sec => sec.heading.toLowerCase().includes("assessment"));
    if (s) return headingToId(s.heading);
  }
  return null;
}

function getTargetIdForTakeaway(idx: number, item: string, sections: { heading: string }[]): string | undefined {
  const matchedId = findSectionIdForTakeaway(item, sections);
  if (matchedId) return matchedId;
  if (sections[idx]) return headingToId(sections[idx].heading);
  return undefined;
}

function parseFormattedText(text: string): React.ReactNode[] {
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-extrabold text-[#1B3B48]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <Link
          key={index}
          href={href}
          className="text-[#2A5243] font-extrabold underline decoration-[#F57A54] underline-offset-4 hover:text-[#F57A54] transition-colors"
        >
          {label}
        </Link>
      );
    }
    return part;
  });
}

function renderRichText(text: string) {
  const lines = text.split("\n");
  return (
    <div className="space-y-3">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        const isBullet = trimmed.startsWith("• ") || trimmed.startsWith("- ");
        const isNumbered = /^\d+\.\s/.test(trimmed);

        const content = trimmed.replace(/^•\s+|^-\s+|^\d+\.\s+/, "");
        const parts = parseFormattedText(content);

        if (isBullet || isNumbered) {
          return (
            <div key={lIdx} className="flex items-start gap-3 pl-3 py-1 text-slate-700 text-base leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-[#F57A54] shrink-0 mt-2.5" />
              <span>{parts}</span>
            </div>
          );
        }

        return (
          <p key={lIdx} className="text-base text-slate-700 leading-relaxed font-normal">
            {parts}
          </p>
        );
      })}
    </div>
  );
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  const otherPosts = Object.values(blogData).filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://handinhandtherapy.ca${post.image.startsWith("/") ? post.image : "/" + post.image}`,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hand In Hand Therapy Centre",
      "logo": {
        "@type": "ImageObject",
        "url": "https://handinhandtherapy.ca/icon.png"
      }
    },
    "datePublished": "2026-08-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://handinhandtherapy.ca/blogs/${post.slug}`
    }
  };

  const faqSchema = post.content.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.content.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-52 pb-16 sm:pb-24">
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
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-[#2A5243] bg-white shrink-0">
                  <Image
                    src="/favicon.png"
                    alt={post.author}
                    fill
                    className="object-contain p-1"
                  />
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4 items-start">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Introduction Lead */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#E8F0EC]/60 border border-[#2A5243]/20 text-[#1B3B48] text-base leading-relaxed font-medium space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#2A5243] block">
                  Clinical Executive Summary
                </span>
                {renderRichText(post.content.intro)}
              </div>

              {/* Key Takeaways Box with Clickable Section Navigator */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-extrabold text-[#1B3B48] flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#2A5243]" />
                    <span>Key Article Takeaways</span>
                  </h3>
                  <span className="text-[10px] font-bold text-[#2A5243] bg-[#E8F0EC] px-3 py-1 rounded-full uppercase tracking-wider">
                    Click item to jump
                  </span>
                </div>

                <ul className="space-y-2">
                  {post.content.keyTakeaways.map((item, idx) => {
                    const targetId = getTargetIdForTakeaway(idx, item, post.content.sections);
                    return (
                      <li key={idx}>
                        {targetId ? (
                          <a
                            href={`#${targetId}`}
                            className="group flex items-start gap-3 text-sm text-slate-700 hover:text-[#2A5243] leading-relaxed p-3 rounded-2xl hover:bg-[#E8F0EC]/60 border border-transparent hover:border-[#2A5243]/20 transition-all cursor-pointer block"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#F57A54] group-hover:scale-110 shrink-0 mt-0.5 transition-transform" />
                            <span className="group-hover:underline decoration-[#2A5243] underline-offset-4 font-medium">
                              {item}
                            </span>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed p-3">
                            <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0 mt-0.5" />
                            <span className="font-medium">{item}</span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Content Sections with Heading Anchors */}
              {post.content.sections.map((section, sIdx) => {
                const sectionId = headingToId(section.heading);
                return (
                  <div key={sIdx} className="space-y-4">
                    <h2
                      id={sectionId}
                      className="text-2xl font-extrabold text-[#1B3B48] pt-2 scroll-mt-48"
                    >
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph, pIdx) => (
                      <div key={pIdx}>
                        {renderRichText(paragraph)}
                      </div>
                    ))}
                  </div>
                );
              })}

              {/* Quote Pullout */}
              {post.content.quote && (
                <div className="my-8 p-8 rounded-3xl bg-[#0F2530] text-white space-y-3 shadow-xl border border-[#2A5243]/50">
                  <p className="text-lg sm:text-xl font-bold italic leading-relaxed text-slate-100">
                    &ldquo;{post.content.quote.text}&rdquo;
                  </p>
                  <span className="block text-xs font-extrabold text-[#6B8E7B] uppercase tracking-wider">
                    - {post.content.quote.author}
                  </span>
                </div>
              )}

              {/* In-article FAQs section if present */}
              {post.content.faqs && post.content.faqs.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#F57A54]" />
                    <h3 className="text-xl font-extrabold text-[#1B3B48]">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {post.content.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="p-5 rounded-2xl bg-[#FBF9F5] border border-slate-200/80 space-y-2">
                        <h4 className="text-base font-extrabold text-[#1B3B48]">
                          {faq.q}
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article CTA Banner */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-[#2A5243] to-[#1B3B48] text-white space-y-4 shadow-xl">
                <h3 className="text-2xl font-black text-white">
                  Ready to Book a Speech & Language Consultation?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  Connect with our registered Speech-Language Pathologists in Concord (Vaughan) or Bradford today.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2A5243]" />
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#F57A54]" />
                  </Link>
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-extrabold text-[#2A5243] uppercase tracking-wider block">
                  About the Clinical Team
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-[#1B3B48] bg-white shrink-0">
                    <Image
                      src="/favicon.png"
                      alt={post.author}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-[#1B3B48]">{post.author}</h4>
                    <p className="text-xs text-slate-500 font-medium">{post.authorRole}</p>
                    <p className="text-xs text-slate-600">
                      Multidisciplinary clinical specialists, BCBAs, speech therapists, and adult day leads at Hand In Hand Therapy Centre (2–18) & The Next Level Adult Day Program (18+) in Concord / Vaughan & Bradford.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar Sticky Panel (4 cols - Stays fixed on viewport while scrolling) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-48 self-start">
              
              {/* Intake CTA Box */}
              <div className="bg-[#2A5243] text-[#FBF9F5] p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl border border-[#2A5243]">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5 text-[#F57A54]" />
                </div>
                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Need Help with Speech Therapy Intake?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Connect directly with our admissions team to discuss SLP assessments, OAP funding claims, and consultation dates.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-md transition-all"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Service Quick Link Card */}
              <div className="bg-[#FBF9F5] p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <span className="text-[10px] font-extrabold text-[#F57A54] uppercase tracking-wider block">
                  Service Directory
                </span>
                <h4 className="text-base font-extrabold text-[#1B3B48]">
                  Speech Therapy in Vaughan
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore our dedicated Speech & Language Pathology programs located in Concord (Vaughan) & Bradford.
                </p>
                <Link
                  href="/speech-therapy-vaughan"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2A5243] hover:text-[#F57A54] transition-colors pt-1"
                >
                  <span>Visit Vaughan SLP Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
                        {rel.readTime} • {rel.author}
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
