"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Therapy Centre (2–18) Dedicated Social URLs
  const therapyFacebookUrl = "https://www.facebook.com/profile.php?id=100037961153848";
  const therapyInstagramUrl = "https://www.instagram.com/handinhandtherapy/";

  // The Next Level Adult Day Program (18+) Dedicated Social URLs
  const adultFacebookUrl = "https://www.facebook.com/profile.php?id=100076041793102";
  const adultInstagramUrl = "https://www.instagram.com/hand_in_hand_the_next_level/";

  return (
    <footer className="bg-[#0F2530] text-white pt-16 pb-8 border-t border-[#2A5243]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid with balanced column spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Prominent Footer Logo & Brand Info (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative h-20 w-64 sm:h-24 sm:w-72">
              <Image
                src="/images/footer.png"
                alt="Hand In Hand Therapy Centre & Adult Day Program"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to helping children, teens, and adults build independence, social connection, and daily life skills across York Region & Simcoe County.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                Registered ABA & Pediatric Clinicians
              </span>
            </div>
          </div>

          {/* Col 2: Therapy Centre (2–18) + Dedicated Socials (Span 3) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-[#6B8E7B] mb-3">
                Therapy Centre (2–18)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><Link href="/therapy#what-we-help-with" className="hover:text-white transition-colors">ABA Therapy</Link></li>
                <li><Link href="/therapy#what-we-help-with" className="hover:text-white transition-colors">Speech Therapy</Link></li>
                <li><Link href="/therapy#what-we-help-with" className="hover:text-white transition-colors">Occupational Therapy</Link></li>
                <li><Link href="/therapy#what-we-help-with" className="hover:text-white transition-colors">Social Skills Groups</Link></li>
                <li><Link href="/therapy#beyond-therapy" className="hover:text-white transition-colors">Parent Coaching</Link></li>
                <li><Link href="/therapy#beyond-therapy" className="hover:text-white transition-colors">School Advocacy & OAP</Link></li>
              </ul>
            </div>

            {/* Dedicated Socials for Therapy Centre (2–18) */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                Follow Therapy Centre (2–18):
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={therapyFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Therapy Centre Facebook Page"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2A5243] flex items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-md"
                  title="Therapy Centre Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href={therapyInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Therapy Centre Instagram Profile"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2A5243] flex items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-md"
                  title="Therapy Centre Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: The Next Level (18+) + Dedicated Socials (Span 3) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-[#6B8E7B] mb-3">
                Adult Day Program (18+)
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><Link href="/adult-programs" className="hover:text-white transition-colors">Specialized Programs</Link></li>
                <li><Link href="/adult-program#what-next-level-provides" className="hover:text-white transition-colors">Day Programming</Link></li>
                <li><Link href="/adult-program#what-next-level-provides" className="hover:text-white transition-colors">Community Outings</Link></li>
                <li><Link href="/adult-program#what-next-level-provides" className="hover:text-white transition-colors">Independent Life Skills</Link></li>
                <li><Link href="/adult-program#funding" className="hover:text-white transition-colors">Transition Out of School</Link></li>
                <li><Link href="/adult-program#funding" className="hover:text-white transition-colors">Passport Funding Guidance</Link></li>
              </ul>
            </div>

            {/* Dedicated Socials for Next Level Adult Day Program (18+) */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                Follow Next Level (18+):
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={adultFacebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Next Level Adult Day Program Facebook Page"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2A5243] flex items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-md"
                  title="Next Level Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href={adultInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Next Level Adult Day Program Instagram Profile"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#2A5243] flex items-center justify-center text-white border border-white/10 transition-all duration-300 hover:scale-110 shadow-md"
                  title="Next Level Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Locations (Span 3 - Ample Width) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-[#6B8E7B] text-sm uppercase tracking-wider">
              Offices & Contact
            </h4>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="space-y-1">
                <span className="font-bold text-white block text-[11px] uppercase tracking-wider">Concord / Vaughan:</span>
                <span className="block text-slate-400">665 Millway Ave, Unit 38, Concord, ON</span>
                <a href="tel:4169305293" className="text-[#6B8E7B] font-bold hover:underline block">(416)-930-5293</a>
                <a href="mailto:handinhandtherapycentre@yahoo.com" className="text-blue-400 hover:underline block text-[11px] sm:text-xs break-all leading-snug">
                  handinhandtherapycentre@yahoo.com
                </a>
              </li>
              
              <li className="space-y-1 pt-3 border-t border-white/10">
                <span className="font-bold text-white block text-[11px] uppercase tracking-wider">Bradford:</span>
                <span className="block text-slate-400">465 Holland St W, Unit 3/4, Bradford, ON</span>
                <a href="tel:9052514756" className="text-[#4A7C64] font-bold hover:underline block">(905)-251-4756</a>
                <a href="mailto:handinhandtherapycentrebradford@aol.com" className="text-blue-400 hover:underline block text-[11px] sm:text-xs break-all leading-snug">
                  handinhandtherapycentrebradford@aol.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits - Responsive Single Line Container */}
        <div className="pt-8 flex flex-col xl:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center xl:text-left">
          {/* Left: Copyright */}
          <div className="whitespace-nowrap">
            <p>© 2026 Hand In Hand Therapy Centre. All rights reserved.</p>
          </div>

          {/* Center: Developer Attribution */}
          <div className="flex items-center justify-center gap-1 font-medium whitespace-nowrap">
            <span>Developed by</span>
            <a
              href="https://launchflowinc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B8E7B] font-extrabold hover:text-white hover:underline transition-colors"
            >
              Launch Flow Inc
            </a>
          </div>

          {/* Right: Legal & Back to Top */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center xl:justify-end whitespace-nowrap">
            <Link href="/privacy-policy" className="hover:text-white transition-colors font-semibold">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors font-semibold">
              Terms & Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/sitemap" className="hover:text-white transition-colors font-semibold">
              Sitemap
            </Link>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-3 py-1.5 rounded-full bg-white/5 border border-white/10 ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#6B8E7B]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
