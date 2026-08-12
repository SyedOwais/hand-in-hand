import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdultFAQSection from "@/components/AdultFAQSection";
import {
  Utensils,
  Sparkles,
  BookOpen,
  Music,
  Dumbbell,
  Users,
  ArrowRight,
  CheckCircle2,
  Heart,
  Compass,
  Layers
} from "lucide-react";

export const metadata = {
  title: "Programs | The Next Level Adult Day Program (18+)",
  description: "Explore our comprehensive adult day programs in a modern Bento Grid format: Life Skills, Daily Living, Academic, Recreation & Leisure, Physical Fitness, Social Skills, and Community Involvement across York Region & Simcoe County.",
};

export default function AdultProgramsPage() {
  const communityDestinations = [
    "YMCA Fitness & Swim",
    "Snoezelen Room Visits",
    "Grocery Shopping Outings",
    "Movie Theatres",
    "Local Theatre Shows",
    "Public Libraries",
    "Tim Horton's / McDonald's Socials",
    "Shopping Malls",
    "Museums & Animal Farms",
    "Local Restaurants",
    "Home Depot Projects",
    "Community Volunteer Work"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1B3B48]">
      <Header />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#E8F0EC]/80 via-[#FBF9F5] to-[#FBF9F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A5243]/10 text-[#2A5243] text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#F57A54]" />
                <span>The Next Level Adult Day Program (18+)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B3B48] leading-tight">
                Specialized Adult Day Programs
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
                Empowering adults with unique abilities to achieve independence, active community involvement, lifelong friendships, and personal growth through our interactive Bento Grid programming tracks.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="py-12 sm:py-20 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2A5243] bg-[#2A5243]/10 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Comprehensive Bento Matrix
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B3B48]">
                Interactive Skill Building & Enrichment Tracks
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Each program is tailored with dedicated visual environments, hands-on learning spaces, and community connections.
              </p>
            </div>

            {/* Asymmetric Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

              {/* Bento Card 1: Life Skills Program (Span 7) */}
              <div className="lg:col-span-7 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/adult-day-program.png"
                    alt="Life Skills Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2A5243] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Essential Independence
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
                      <Utensils className="w-6 h-6 text-[#EAA85E]" />
                      Life Skills Program
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
                      Menu Planning, Cooking, Budgeting & Household Self-Care
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Menu Planning & Budgeting",
                      "Cooking and Food Preparation",
                      "Baking & Culinary Safety",
                      "Grocery Shopping Outings",
                      "Housekeeping & Organization",
                      "Laundry Routine Skills",
                      "Bathing & Personal Care",
                      "Self-Wellness & Hygiene"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Daily Living Skills / Self Help (Span 5) */}
              <div className="lg:col-span-5 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/therapy-approach.png"
                    alt="Daily Living Skills"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1B3B48] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Self-Help Mastery
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl font-extrabold flex items-center gap-2">
                      <Heart className="w-6 h-6 text-[#F57A54]" />
                      Daily Living / Self Help
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      Hands-on routines for comfortable, confident daily living
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow space-y-3">
                  {[
                    "Learn Their Way Around A Kitchen",
                    "Learn To Make Up A Room",
                    "Learn To Clean Living Room",
                    "Learn Skills In The Washroom",
                    "Personal Hygiene & Grooming",
                    "And Much More..."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#1B3B48] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#1B3B48]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento Card 3: Academic Program (Span 4) */}
              <div className="lg:col-span-4 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/daycare-hero.png"
                    alt="Academic Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4A7C64] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Cognitive Growth
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-xl font-extrabold flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#6B8E7B]" />
                      Academic Program
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">Literacy, tech & journaling</p>
                  </div>
                </div>
                <div className="p-6 flex-grow space-y-2.5">
                  {[
                    "Classroom Activities",
                    "Computer Lab & Emailing",
                    "Library Activities",
                    "Individual Worksheets, Books and Journals",
                    "Functional Reading & Math"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#4A7C64] shrink-0" />
                      <span className="text-xs font-semibold text-[#1B3B48]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento Card 4: Recreation & Leisure Program (Span 8) */}
              <div className="lg:col-span-8 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/camp-community.png"
                    alt="Recreation and Leisure Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F57A54] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Sensory & Creative Discovery
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl font-extrabold flex items-center gap-2">
                      <Music className="w-6 h-6 text-[#EAA85E]" />
                      Recreation & Leisure Program
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">Multi-sensory rooms, pet therapy & creative arts</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "Snoezelen Room Experience",
                      "Farm Visits & Pet Therapy",
                      "Indoor Play Yards",
                      "Shopping Outings",
                      "Theatre & Movie Trips",
                      "Games & Puzzles",
                      "Arts & Crafts (Sensory Art)",
                      "Books & Smart Stories",
                      "Music & Rhythm Therapy"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                        <span className="text-xs font-semibold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 5: Physical Fitness Program (Span 6) */}
              <div className="lg:col-span-6 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/therapy-hero.png"
                    alt="Physical Fitness Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2A5243] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Active Health & Movement
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl font-extrabold flex items-center gap-2">
                      <Dumbbell className="w-6 h-6 text-[#6B8E7B]" />
                      Physical Fitness Program
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">Gym sports, swimming, skating & yoga</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Gymnasium Games & Sports",
                      "Swimming Sessions",
                      "Ice Skating Trips",
                      "Outdoor Parks & Trails",
                      "Fitness & Yoga Classes",
                      "Physiotherapy / Massage"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#2A5243] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bento Card 6: Social Skills Program (Span 6) */}
              <div className="lg:col-span-6 bg-[#FBF9F5] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src="/images/adult-community-trips.png"
                    alt="Social Skills Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F57A54] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Peer Connection & Friendships
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-2xl font-extrabold flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#EAA85E]" />
                      Social Skills Program
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">Communication, game days & mentorship</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Social Communication Practice",
                      "Lifelong Friendships Development",
                      "Big Brother/Big Sister Program",
                      "Game Day Competitions",
                      "Guided Social Interactions",
                      "And much, much more..."
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#F57A54] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#1B3B48]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Hero Bento Feature Card 7: Community Involvement Program */}
        <section className="py-16 sm:py-24 bg-[#0F2530] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-[#1B3B48]/80 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <Image
                      src="/images/adult-community-trips.png"
                      alt="Community Involvement Program Participant"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2530] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                      <span className="text-xs font-bold text-[#EAA85E] uppercase tracking-wider block">Community Transferable Skills</span>
                      <p className="text-sm font-semibold text-white mt-0.5">Real-World Outings Across York Region & Simcoe County</p>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-extrabold uppercase tracking-wider border border-white/10">
                    <Compass className="w-3.5 h-3.5 text-[#EAA85E]" />
                    <span>Bento Spotlight Track</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Community Involvement Program
                  </h2>

                  <blockquote className="p-5 rounded-2xl bg-white/5 border-l-4 border-[#2A5243] text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    &ldquo;THE NEXT LEVEL Centre prides itself on encouraging participants to be active in our community. Recreation, leisure and volunteering experiences are explored within the community with the intention that the skills learned by this exposure to the community will transfer outside the program setting of THE NEXT LEVEL.&rdquo;
                  </blockquote>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-extrabold text-[#6B8E7B] uppercase tracking-wider">
                      Through THE NEXT LEVEL participants are involved and exposed to the community in the following ways:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                      {communityDestinations.map((dest, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#EAA85E] shrink-0" />
                          <span className="text-xs font-semibold text-slate-200">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Adult Program FAQs */}
        <AdultFAQSection />

        {/* CTA Enrolment Banner */}
        <section className="py-16 sm:py-24 bg-[#2A5243] text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Experience The Next Level?
            </h2>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              We accept Passport Funding & private payment options. Schedule a personal walkthrough of our Concord or Bradford centers today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-[#1B3B48] bg-white hover:bg-slate-100 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book a Tour / Enrol</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/adult-program#funding"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <span>Passport Funding Info</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
