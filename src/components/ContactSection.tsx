"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, HeartHandshake, Compass, Users } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lookingFor: "Therapy" as "Therapy" | "Respite" | "Day Program",
    situation: "",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const optionCards = [
    {
      id: "Therapy" as const,
      label: "Therapy",
      subText: "ABA, Speech, OT & Social Skills",
      icon: HeartHandshake,
    },
    {
      id: "Respite" as const,
      label: "Respite",
      subText: "Caregiver & Relief Support",
      icon: Compass,
    },
    {
      id: "Day Program" as const,
      label: "Day Program",
      subText: "Adult Day Programming (18+)",
      icon: Users,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#FBF9F5] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Heading & Subheading Only */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#E8F0EC] text-[#2A5243] text-xs font-extrabold tracking-wider uppercase border border-[#4A7C64]/20">
              <span>Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B3B48] tracking-tight leading-tight">
              Start the conversation today.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Whether you are looking for therapy, respite support, or our adult day program, fill out the form and our clinical team will reach out promptly to discuss your goals.
            </p>
          </div>

          {/* Right Side: 5-Field Contact Form + Privacy Consent Checkbox */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#E8F0EC] text-[#2A5243] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1B3B48]">
                    Message Received!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, {formData.name || "friend"}. We've received your request for <span className="font-bold text-[#2A5243]">{formData.lookingFor}</span> support. A member of our Hand In Hand team will contact you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        lookingFor: "Therapy",
                        situation: "",
                        consent: true,
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-[#1B3B48] bg-[#FBF9F5] border border-slate-300 hover:bg-slate-100 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 text-red-700 text-sm font-semibold rounded-xl border border-red-200 shadow-xs">
                      {errorMessage}
                    </div>
                  )}
                  
                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1B3B48] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* 2 & 3. Email Address & Phone Number Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1B3B48] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1B3B48] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="647-280-9952"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* 4. What are you looking for? (Therapy, Respite, Day Program) */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1B3B48] mb-2">
                      What are you looking for? *
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {optionCards.map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = formData.lookingFor === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, lookingFor: opt.id })}
                            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                              isSelected
                                ? "bg-[#1B3B48] text-white border-[#1B3B48] shadow-md scale-[1.02]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-extrabold text-sm">{opt.label}</span>
                              <Icon className={`w-4 h-4 ${isSelected ? "text-[#E8F0EC]" : "text-[#4A7C64]"}`} />
                            </div>
                            <span className={`text-[11px] ${isSelected ? "text-slate-200" : "text-slate-500"}`}>
                              {opt.subText}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 5. Situation / What they are looking for */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1B3B48] mb-1.5">
                      Tell us about your situation / what you're looking for *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share any specific details about your child/adult, current goals, preferred location, or questions you have..."
                      value={formData.situation}
                      onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-[#2A5243] focus:ring-2 focus:ring-[#2A5243]/20 outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Consent Checkmark Field */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded text-[#2A5243] focus:ring-[#2A5243] border-slate-300 cursor-pointer accent-[#2A5243]"
                      />
                      <span className="text-xs text-slate-600 leading-normal group-hover:text-slate-800 transition-colors">
                        We respect your privacy. Information shared is strictly confidential and used only to assist your inquiry. *
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-extrabold text-white bg-[#1B3B48] hover:bg-[#2A5243] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 border border-white/10"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Contact Us</span>
                        <Send className="w-5 h-5 text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
