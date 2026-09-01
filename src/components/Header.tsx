"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MapPin,
  PhoneCall,
  Mail,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Heart,
  ArrowRight,
  Camera,
  BookOpen,
  HelpCircle,
  Compass
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insightsHovered, setInsightsHovered] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAdult = pathname.startsWith("/adult") || pathname.startsWith("/about-the-next-level");

  const currentEmail = "info@handinhandtherapycentre.ca";

  const servicesDropdownItems = [
    {
      name: "ABA Therapy",
      href: "/aba-therapy-vaughan",
      desc: "BCBA-supervised ABA & early intervention in Vaughan",
      icon: Sparkles
    },
    {
      name: "Speech Therapy",
      href: "/speech-therapy-vaughan",
      desc: "SLP assessment, articulation & language therapy",
      icon: Sparkles
    },
    {
      name: "Occupational Therapy",
      href: "/occupational-therapy-vaughan",
      desc: "Fine motor, sensory processing & daily living skills",
      icon: Heart
    },
    {
      name: "All Therapy Services",
      href: "/therapy#what-we-help-with",
      desc: "Multidisciplinary ABA, OT & Social Skills",
      icon: Heart
    }
  ];

  // Dynamic Insights Dropdown Items based on active Track (Therapy 2–18 vs Adult 18+)
  const therapyInsightsItems = [
    {
      name: "Gallery",
      href: "/gallery?track=pediatric",
      desc: "Therapy suites, OT gym & sensory rooms"
    },
    {
      name: "Blogs",
      href: "/blogs?track=pediatric",
      desc: "ABA, Speech & OT guides"
    },
    {
      name: "FAQs",
      href: "/faqs?track=pediatric",
      desc: "OAP funding & therapy answers"
    },
  ];

  const adultInsightsItems = [
    {
      name: "Gallery",
      href: "/gallery?track=adult",
      desc: "Life-skill kitchens, computer lab & lounges"
    },
    {
      name: "Blogs",
      href: "/blogs?track=adult",
      desc: "Passport funding & transition guides"
    },
    {
      name: "FAQs",
      href: "/faqs?track=adult",
      desc: "18+ Adult Day Program, RESP & Passport FAQs"
    },
  ];

  const insightsDropdownItems = isAdult ? adultInsightsItems : therapyInsightsItems;

  type NavLink = {
    name: string;
    href?: string;
    isDropdown?: boolean;
    isServicesDropdown?: boolean;
  };

  // Navigation Links for Therapy Centre (2–18) — Includes Services Dropdown
  const therapyNavLinks: NavLink[] = [
    { name: "About Us", href: "/about" },
    { name: "Services", isServicesDropdown: true },
    { name: "Admission", href: "/admissions" },
    { name: "Insights", isDropdown: true },
    { name: "Locations", href: "/therapy#locations" },
  ];

  // Navigation Links for Adult Day Program (18+)
  const adultNavLinks: NavLink[] = [
    { name: "Programs", href: "/adult-programs" },
    { name: "About Us", href: "/about-the-next-level" },
    { name: "Admission", href: "/admissions" },
    { name: "Insights", isDropdown: true },
    { name: "Locations", href: "/adult-program#locations" },
  ];

  const navLinks = isAdult ? adultNavLinks : therapyNavLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-[#0F2530] text-slate-200 text-xs py-2.5 sm:py-3.5 px-3 sm:px-6 border-b border-[#2A5243]/50 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start text-xs">
            <span className="flex items-center gap-1.5 font-semibold">
              <MapPin className="w-4 h-4 text-[#F57A54]" />
              <span>Concord / Vaughan & Bradford, ON</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <a
              href="tel:6472809952"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold"
            >
              <PhoneCall className="w-4 h-4 text-[#6B8E7B]" />
              <span>647-280-9952</span>
            </a>
            <span className="hidden md:inline text-slate-500">•</span>
            <a
              href={`mailto:${currentEmail}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors text-xs font-medium"
            >
              <Mail className="w-4 h-4 text-[#6B8E7B]" />
              <span>{currentEmail}</span>
            </a>
          </div>

          {/* Age Group Selector Toggle Switch */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-[#EAA85E] font-extrabold uppercase tracking-wider text-[11px] sm:text-xs flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#EAA85E]" />
              <span>Select Program:</span>
            </span>
            <div className="inline-flex p-1 rounded-full bg-white/15 border border-white/20 shadow-inner">
              <Link
                href="/therapy"
                className={`px-3 sm:px-4 py-1 rounded-full text-xs font-black transition-all duration-200 flex items-center gap-1.5 ${
                  !isAdult
                    ? "bg-[#2A5243] text-white shadow-md ring-2 ring-[#2A5243]/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Heart className="w-3.5 h-3.5 text-[#F57A54]" />
                <span>ABA Therapy</span>
              </Link>
              <Link
                href="/adult-program"
                className={`px-3 sm:px-4 py-1 rounded-full text-xs font-black transition-all duration-200 flex items-center gap-1.5 ${
                  isAdult
                    ? "bg-[#1B3B48] text-white shadow-md ring-2 ring-[#1B3B48]/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#6B8E7B]" />
                <span>Adult Day Program</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-md py-2 border-b border-[#2A5243]/20"
            : "bg-[#FBF9F5]/90 backdrop-blur-sm py-2 sm:py-3 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Prominent Logo */}
          <Link href="/" className="group inline-flex items-center" title="Return to Entry Choice Portal">
            <div className="relative h-14 w-56 sm:h-16 sm:w-64 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/hand-in-hand-v2.png"
                alt="Hand In Hand Therapy Centre & Adult Day Program"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.isServicesDropdown) {
                return (
                  <div
                    key="services-dropdown"
                    className="relative"
                    onMouseEnter={() => setServicesHovered(true)}
                    onMouseLeave={() => setServicesHovered(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 text-sm font-extrabold transition-all duration-200 py-2 px-3 rounded-full ${
                        servicesHovered
                          ? "bg-[#0F2530] text-white shadow-md"
                          : "text-[#1B3B48] hover:text-[#4A7C64]"
                      }`}
                      onClick={() => setServicesHovered(!servicesHovered)}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesHovered ? "rotate-180 text-[#6B8E7B]" : "text-[#2A5243]"
                        }`}
                      />
                    </button>

                    {/* Light Palette Desktop Dropdown Card for Services */}
                    {servicesHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                        <div className="bg-[#FBF9F5] rounded-3xl p-3.5 shadow-2xl border border-[#2A5243]/20 text-[#1B3B48] space-y-2">
                          
                          {/* Items Grid */}
                          <div className="space-y-1 pt-1">
                            {servicesDropdownItems.map((item, idx) => {
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setServicesHovered(false)}
                                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#E8F0EC] border border-slate-200/80 hover:border-[#2A5243]/40 transition-all duration-200 group shadow-xs"
                                >
                                  <div className="space-y-0.5">
                                    <span className="block text-sm font-black text-[#1B3B48] group-hover:text-[#2A5243] transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="block text-[11px] text-slate-600 font-medium leading-tight">
                                      {item.desc}
                                    </span>
                                  </div>

                                  <ArrowRight className="w-4 h-4 text-[#F57A54] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                                </Link>
                              );
                            })}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isDropdown) {
                return (
                  <div
                    key="insights-dropdown"
                    className="relative"
                    onMouseEnter={() => setInsightsHovered(true)}
                    onMouseLeave={() => setInsightsHovered(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1 text-sm font-extrabold transition-all duration-200 py-2 px-3 rounded-full ${
                        insightsHovered
                          ? "bg-[#0F2530] text-white shadow-md"
                          : "text-[#1B3B48] hover:text-[#4A7C64]"
                      }`}
                      onClick={() => setInsightsHovered(!insightsHovered)}
                    >
                      <span>Insights</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          insightsHovered ? "rotate-180 text-[#6B8E7B]" : "text-[#2A5243]"
                        }`}
                      />
                    </button>

                    {/* Light Palette Desktop Dropdown Card for Insights */}
                    {insightsHovered && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                        <div className="bg-[#FBF9F5] rounded-3xl p-3.5 shadow-2xl border border-[#2A5243]/20 text-[#1B3B48] space-y-2">
                          
                          {/* Items Grid */}
                          <div className="space-y-1 pt-1">
                            {insightsDropdownItems.map((item, idx) => {
                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={() => setInsightsHovered(false)}
                                  className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-[#E8F0EC] border border-slate-200/80 hover:border-[#2A5243]/40 transition-all duration-200 group shadow-xs"
                                >
                                  <div className="space-y-0.5">
                                    <span className="block text-sm font-black text-[#1B3B48] group-hover:text-[#2A5243] transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="block text-[11px] text-slate-600 font-medium leading-tight">
                                      {item.desc}
                                    </span>
                                  </div>

                                  <ArrowRight className="w-4 h-4 text-[#F57A54] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                                </Link>
                              );
                            })}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className="text-sm font-extrabold text-[#1B3B48] hover:text-[#4A7C64] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-[#1B3B48]"
            >
              <span className="text-white font-extrabold">Contact Us</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#1B3B48] hover:bg-[#E8F0EC] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-t border-slate-200 shadow-xl px-4 pt-4 pb-6 mt-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                if (link.isServicesDropdown) {
                  return (
                    <div key="mobile-services" className="space-y-2">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center justify-between text-base font-extrabold py-2.5 px-3.5 rounded-2xl transition-all ${
                          mobileServicesOpen ? "bg-[#0F2530] text-white" : "bg-[#E8F0EC] text-[#1B3B48]"
                        }`}
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#6B8E7B]" : "text-[#2A5243]"
                          }`}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="bg-[#E8F0EC]/60 rounded-2xl p-2.5 space-y-1.5 border border-[#2A5243]/20">
                          {servicesDropdownItems.map((sub, i) => {
                            return (
                              <Link
                                key={i}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#E8F0EC] border border-slate-200/80 transition-colors shadow-xs"
                              >
                                <div>
                                  <span className="block text-xs font-black text-[#1B3B48]">{sub.name}</span>
                                  <span className="block text-[10px] text-slate-600 font-medium">{sub.desc}</span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-[#F57A54] shrink-0 ml-2" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.isDropdown) {
                  return (
                    <div key="mobile-insights" className="space-y-2">
                      <button
                        onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                        className={`w-full flex items-center justify-between text-base font-extrabold py-2.5 px-3.5 rounded-2xl transition-all ${
                          mobileInsightsOpen ? "bg-[#0F2530] text-white" : "bg-[#E8F0EC] text-[#1B3B48]"
                        }`}
                      >
                        <span>Insights</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileInsightsOpen ? "rotate-180 text-[#6B8E7B]" : "text-[#2A5243]"
                          }`}
                        />
                      </button>

                      {mobileInsightsOpen && (
                        <div className="bg-[#E8F0EC]/60 rounded-2xl p-2.5 space-y-1.5 border border-[#2A5243]/20">
                          {insightsDropdownItems.map((sub, i) => {
                            return (
                              <Link
                                key={i}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#E8F0EC] border border-slate-200/80 transition-colors shadow-xs"
                              >
                                <div>
                                  <span className="block text-xs font-black text-[#1B3B48]">{sub.name}</span>
                                  <span className="block text-[10px] text-slate-600 font-medium">{sub.desc}</span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-[#F57A54] shrink-0 ml-2" />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-extrabold text-[#1B3B48] hover:text-[#4A7C64] py-2 px-3 rounded-xl hover:bg-[#E8F0EC] transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold text-[#1B3B48] bg-white border border-[#1B3B48] hover:bg-[#2A5243] hover:text-white shadow-md transition-colors"
                >
                  <span className="font-extrabold">Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
