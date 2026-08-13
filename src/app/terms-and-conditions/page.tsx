import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileCheck, AlertCircle, HelpCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Hand In Hand Therapy Centre & Adult Day Program",
  description: "Terms & Conditions governing website usage, contact form submissions, and consultation requests for Hand In Hand Therapy Centre and The Next Level Adult Day Program.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-44 sm:pt-48 lg:pt-52 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-10 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B3B48]/10 text-[#1B3B48] text-xs font-extrabold uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-[#1B3B48]" />
              <span>Terms of Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48]">
              Terms & Conditions
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: August 2026 | Hand In Hand Therapy Centre & The Next Level Adult Day Program
            </p>
          </div>

          {/* Terms Content Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#2A5243]" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website of <strong>Hand In Hand Therapy Centre</strong> and <strong>The Next Level Adult Day Program</strong>, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any portion of these terms, please refrain from using our website forms or digital services.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#2A5243]" />
                2. Use of Contact Forms & Inquiry Submissions
              </h2>
              <p>
                Our website provides digital contact forms to facilitate initial program inquiries, tour bookings, and consultation requests for pediatric therapy (ages 2–18) and adult day programming (18+):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Accurate Submissions:</strong> You agree to provide accurate, current, and truthful information (such as your name, email, phone number, and participant age) when completing any website inquiry form.</li>
                <li><strong>Non-Binding Requests:</strong> Submitting a contact form inquiry or requesting a tour does not constitute a binding contract or formal clinical admission until intake assessments are completed and service agreements are signed.</li>
                <li><strong>Prohibited Use:</strong> You agree not to submit fraudulent inquiries, spam, malicious code, or unauthorized promotional content through our contact form mechanisms.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#F57A54]" />
                3. Clinical & Medical Disclaimer
              </h2>
              <p>
                Website content and digital contact forms are intended solely for general informational and scheduling purposes.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Form submissions do not establish a formal clinician-patient relationship.</li>
                <li>Website contact forms are not monitored for emergency or crisis response. If a participant requires urgent medical attention, please dial 911 or visit your nearest emergency healthcare facility immediately.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#2A5243]" />
                4. Intellectual Property & Brand Assets
              </h2>
              <p>
                All text, graphics, logos, program names, imagery, and software functionality displayed on this website are the exclusive property of Hand In Hand Therapy Centre & The Next Level Adult Day Program and are protected under Canadian trademark and copyright laws.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#2A5243]" />
                5. Governing Law & Contact Details
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of the Province of Ontario and the federal laws of Canada. For questions regarding these terms, please contact us:
              </p>
              <div className="bg-[#FBF9F5] p-5 rounded-2xl border border-slate-200 space-y-2">
                <p className="font-bold text-[#1B3B48]">Hand In Hand Therapy Centre & Adult Day Program</p>
                <p className="text-xs text-slate-600">Vaughan Center: 665 Millway Ave, Unit 38, Concord, ON | (416)-930-5293</p>
                <p className="text-xs text-slate-600">Bradford Center: 465 Holland St W, Unit 3/4, Bradford, ON | (905)-251-4756</p>
                <p className="text-xs text-blue-600 font-semibold">Email: handinhandtherapycentre@yahoo.com</p>
              </div>
            </section>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2A5243] hover:underline"
            >
              <span>Return to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
