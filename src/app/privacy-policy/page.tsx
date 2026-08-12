import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, FileText, Mail, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Hand In Hand Therapy Centre & Adult Day Program",
  description: "Privacy Policy detailing how Hand In Hand Therapy Centre and The Next Level Adult Day Program collect, use, and safeguard personal information submitted through website contact forms.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-10 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#2A5243]" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B48]">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: August 2026 | Compliant with PIPEDA & Ontario Health Information Privacy Principles
            </p>
          </div>

          {/* Privacy Content Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#2A5243]" />
                1. Introduction & Our Commitment
              </h2>
              <p>
                At <strong>Hand In Hand Therapy Centre</strong> and <strong>The Next Level Adult Day Program</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to protecting the privacy, confidentiality, and security of personal information provided by families, clients, and website visitors across York Region and Simcoe County.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2A5243]" />
                2. Information Collected Via Our Contact Forms
              </h2>
              <p>
                When you interact with our website contact forms, intake inquiry forms, or tour scheduling widgets, we collect personal information that you voluntarily provide to us. This information includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 font-medium">
                <li><strong>Contact Details:</strong> Parent/Caregiver Name, Email Address, and Phone Number.</li>
                <li><strong>Participant Information:</strong> Participant or Child Name, Age/Age Group (Pediatric 2–18 or Adult 18+).</li>
                <li><strong>Program Interest:</strong> Therapy services required (ABA, Speech, Occupational Therapy, Social Skills) or Adult Day Program tracks.</li>
                <li><strong>Preferred Location:</strong> Concord / Vaughan Center or Bradford Center.</li>
                <li><strong>Consultation Messages & Funding Details:</strong> Specific care requirements, OAP (Ontario Autism Program) status, or Passport Funding inquiries submitted in message fields.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2A5243]" />
                3. How We Use Contact Form Information
              </h2>
              <p>
                The information gathered through our contact forms is strictly used to deliver responsive, compassionate clinical and administrative support:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>To contact you directly regarding your inquiry, schedule center tours, or answer questions about service availability.</li>
                <li>To evaluate participant needs and match your family with the appropriate clinical coordinator or program team.</li>
                <li>To assist with OAP (Ontario Autism Program) or Passport Funding guidance based on your selected criteria.</li>
                <li>To communicate administrative updates regarding enrollment, initial consultations, and facility walkthroughs.</li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#2A5243]" />
                4. Data Confidentiality & Non-Disclosure
              </h2>
              <p>
                We maintain strict confidentiality protocols. <strong>We do not sell, rent, trade, or share your contact form information or personal details with third-party marketers or commercial entities under any circumstances.</strong>
              </p>
              <p>
                Information submitted via contact forms is accessible only to authorized clinical coordinators and administrative staff responsible for handling client inquiries.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#2A5243]" />
                5. Data Storage & Security
              </h2>
              <p>
                We implement physical, electronic, and procedural safeguards to protect personal information submitted online against unauthorized access, loss, alteration, or disclosure. Standard SSL encryption is active across all web forms.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-lg font-bold text-[#1B3B48] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#2A5243]" />
                6. Contacting Our Privacy Officer
              </h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or your contact form submission data, please contact our administrative privacy team:
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
