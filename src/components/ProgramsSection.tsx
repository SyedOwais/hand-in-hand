"use client";

import React from "react";
import {
  Brain,
  MessageCircle,
  Blocks,
  Users,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      id: "aba",
      title: "ABA Therapy",
      description:
        "Evidence-based strategies that build communication, independence and everyday life skills through positive, measurable steps.",
      linkText: "Learn about ABA",
      icon: Brain,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      accentColor: "group-hover:text-blue-600",
    },
    {
      id: "speech",
      title: "Speech & Language",
      description:
        "Helping children express themselves, understand others and build confidence in verbal and non-verbal communication.",
      linkText: "Explore speech therapy",
      icon: MessageCircle,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accentColor: "group-hover:text-emerald-600",
    },
    {
      id: "ibi",
      title: "IBI Programs",
      description:
        "Structured, intensive support for foundational learning, early social interaction, and cognitive developmental skills.",
      linkText: "Explore IBI",
      icon: Blocks,
      color: "bg-purple-50 text-purple-600 border-purple-200",
      accentColor: "group-hover:text-purple-600",
    },
    {
      id: "social",
      title: "Social Skills",
      description:
        "Guided group practice that makes making friends, turn-taking, and active social communication feel natural and fun.",
      linkText: "View social programs",
      icon: Users,
      color: "bg-orange-50 text-orange-600 border-orange-200",
      accentColor: "group-hover:text-orange-600",
    },
    {
      id: "cbt",
      title: "Behaviour & CBT",
      description:
        "Practical cognitive behavioral strategies for emotional regulation, anxiety, coping mechanisms, and challenging behaviour.",
      linkText: "Discover support",
      icon: HeartHandshake,
      color: "bg-rose-50 text-rose-600 border-rose-200",
      accentColor: "group-hover:text-rose-600",
    },
    {
      id: "academic",
      title: "Academic & Extracurricular Support",
      description:
        "Individualized academic guidance, child counseling, sensory enrichment, and structured extracurricular activities.",
      linkText: "Learn more",
      icon: GraduationCap,
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accentColor: "group-hover:text-amber-600",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-rose text-brand-coral text-xs font-bold tracking-wider uppercase mb-3">
            <span>Specialized Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Comprehensive & Coordinated Care
          </h2>
          <p className="text-slate-600 text-lg">
            One coordinated team, multiple areas of expertise, and a custom plan tailored to your child's personality and development.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${program.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className={`text-xl font-bold text-brand-navy mb-3 transition-colors ${program.accentColor}`}>
                    {program.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-coral transition-colors"
                  >
                    <span>{program.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
