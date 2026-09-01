"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Smartphone, MapPin, ChevronRight, Phone, Copy, Check } from "lucide-react";

export default function FloatingTextWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close popover if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const locations = [
    {
      id: "vaughan",
      name: "Vaughan / Concord Clinic",
      subtitle: "Therapy & Adult Day Program",
      address: "750 Millway Avenue unit #5, Concord",
      phone: "647-280-9952",
      rawPhone: "6472809952",
      smsUrl: "sms:+16472809952",
      telUrl: "tel:6472809952",
      badgeColor: "bg-[#1B3B48] text-white",
      hoverBorder: "hover:border-[#1B3B48]",
    },
    {
      id: "bradford",
      name: "Bradford Clinic",
      subtitle: "Therapy & Community Programs",
      address: "465 Holland St W, Unit 3/4, Bradford",
      phone: "(905)-251-4756",
      rawPhone: "9052514756",
      smsUrl: "sms:+19052514756",
      telUrl: "tel:9052514756",
      badgeColor: "bg-[#2A5243] text-white",
      hoverBorder: "hover:border-[#2A5243]",
    },
  ];

  const handleTextClick = (e: React.MouseEvent<HTMLAnchorElement>, smsUrl: string) => {
    // Prevent immediate React unmount cancellation
    e.preventDefault();
    
    // Launch native SMS application
    window.location.href = smsUrl;

    // Delay closing popover so browser completes protocol launch
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const handleCopy = (e: React.MouseEvent, id: string, phone: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phone);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div ref={widgetRef} className="fixed bottom-5 right-5 z-[99] flex flex-col items-end">
      {/* Popover Selection Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl p-5 shadow-2xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-extrabold text-[#1B3B48]">
                Send Us a Text
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Select a location to open your text messaging app:
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close text menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Location Options */}
          <div className="space-y-3 pt-3">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className={`p-3.5 rounded-2xl bg-[#FBF9F5] border border-slate-200/80 ${loc.hoverBorder} hover:shadow-md transition-all duration-200`}
              >
                <div className="space-y-2">
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${loc.badgeColor}`}>
                        {loc.name.split(" ")[0]}
                      </span>
                      <span className="font-extrabold text-sm text-[#1B3B48]">
                        {loc.name}
                      </span>
                    </div>

                    {/* Copy Phone Button */}
                    <button
                      onClick={(e) => handleCopy(e, loc.id, loc.phone)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-[#2A5243] bg-white px-2 py-1 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedId === loc.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{loc.address}</span>
                  </p>

                  {/* Action Buttons: Text & Call */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {/* Send Text Button */}
                    <a
                      href={loc.smsUrl}
                      onClick={(e) => handleTextClick(e, loc.smsUrl)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#2A5243] hover:bg-[#1B3B48] text-white text-xs font-extrabold shadow-sm transition-all text-center"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-[#F57A54]" />
                      <span>Send Text</span>
                      <ChevronRight className="w-3 h-3 opacity-70" />
                    </a>

                    {/* Direct Call Button */}
                    <a
                      href={loc.telUrl}
                      onClick={() => setTimeout(() => setIsOpen(false), 400)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-[#1B3B48] text-xs font-extrabold border border-slate-300 shadow-xs transition-all text-center"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#2A5243]" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p className="text-[11px] text-center text-slate-400 pt-3 font-medium border-t border-slate-100 mt-3">
            On mobile, "Send Text" opens your Messaging app. On desktop, click "Copy" or "Call Now".
          </p>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Send Us a Text"
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#1B3B48] hover:bg-[#2A5243] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 active:scale-95"
      >
        {/* Animated Ping Indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F57A54] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F57A54]"></span>
        </span>

        <MessageSquare className="w-5 h-5 text-[#E8F0EC] group-hover:rotate-12 transition-transform duration-300" />
        
        <span className="text-xs sm:text-sm font-extrabold tracking-wide">
          Send Us a Text
        </span>
      </button>
    </div>
  );
}
