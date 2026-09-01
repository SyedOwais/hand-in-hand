"use client";

import React from "react";
import { MapPin, Phone, Mail, ExternalLink, Clock, Navigation, Building2 } from "lucide-react";

export default function LocationsSection() {
  const locations = [
    {
      id: "vaughan",
      title: "Hand in Hand Therapy Centre",
      subTitle: "ABA Therapy & Adult Day Program",
      address: "750 Millway Avenue unit #5",
      cityPostal: "Concord, Ontario",
      phone: "647-280-9952",
      tel: "tel:6472809952",
      email: "info@handinhandtherapycentre.ca",
      mail: "mailto:info@handinhandtherapycentre.ca",
      mapsQuery: "https://maps.app.goo.gl/aYmEFDPCPa3dv5zV8",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM",
      features: ["ABA Therapy Centre", "Unit #5 Suite", "Free On-Site Parking"],
      badgeColor: "bg-[#1B3B48] text-white",
    },
    {
      id: "bradford",
      title: "Hand in Hand Therapy Centre Bradford",
      subTitle: "Therapy & Community Programs",
      address: "465 Holland Street West, Unit 3/4",
      cityPostal: "Bradford, Ontario",
      phone: "(905)-251-4756",
      tel: "tel:9052514756",
      email: "info@handinhandtherapycentre.ca",
      mail: "mailto:info@handinhandtherapycentre.ca",
      mapsQuery: "https://www.google.com/maps/search/?api=1&query=465+Holland+Street+West+Unit+3/4+Bradford+ON",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM",
      features: ["Speech & OT Suites", "Unit 3/4 Facilities", "Social Skills Halls"],
      badgeColor: "bg-[#2A5243] text-white",
    },
  ];

  return (
    <section id="locations" className="py-20 bg-[#E8F0EC]/50 relative border-t border-[#4A7C64]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#1B3B48] text-white text-xs font-black tracking-wider uppercase mb-3 shadow-xs">
            <span>Our Two Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3B48] tracking-tight mb-3">
            Our Clinic & Program Locations
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Serving families across York Region & Simcoe County with two fully equipped facilities.
          </p>
        </div>

        {/* 2 Distinct Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, index) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-slate-200/80 hover:border-[#4A7C64]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${loc.badgeColor}`}>
                    Location #{index + 1}
                  </span>
                  
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F0EC] text-[#2A5243] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#4A7C64]" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#1B3B48] tracking-tight mb-1">
                  {loc.title}
                </h3>
                <p className="text-xs font-extrabold text-[#4A7C64] uppercase tracking-wider mb-6">
                  {loc.subTitle}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-8 text-slate-700">
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-[#4A7C64] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-base text-[#1B3B48]">{loc.address}</p>
                      <p className="text-slate-600 text-sm font-semibold">{loc.cityPostal}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#4A7C64] shrink-0" />
                    <div>
                      <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">Phone</span>
                      <a href={loc.tel} className="font-extrabold text-[#1B3B48] hover:text-[#4A7C64] text-base transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#4A7C64] shrink-0" />
                    <div>
                      <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">Email</span>
                      <a href={loc.mail} className="font-extrabold text-[#1B3B48] hover:text-[#4A7C64] text-sm break-all transition-colors">
                        {loc.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 pt-1">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-slate-100">
                  {loc.features.map((feat, f) => (
                    <span key={f} className="text-xs font-bold px-3 py-1 rounded-lg bg-[#E8F0EC] text-[#2A5243]">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={loc.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm bg-[#1B3B48] text-white hover:bg-[#2A5243] transition-colors shadow-md border border-white/10"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
