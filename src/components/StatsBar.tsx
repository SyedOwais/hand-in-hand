"use client";

import React from "react";
import { Users, Award, MapPin, Smile } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "1:1 Dedicated Support",
      label: "Individualized learning plans",
    },
    {
      icon: Award,
      value: "Certified Clinicians",
      label: "Expert therapists & educators",
    },
    {
      icon: MapPin,
      value: "2 Convenient Locations",
      label: "Serving Vaughan & Bradford",
    },
    {
      icon: Smile,
      value: "100% Family Centered",
      label: "Collaborative goal setting",
    },
  ];

  return (
    <section className="bg-brand-navy-dark py-8 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-coral/20 text-brand-coral flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-white">{stat.value}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
