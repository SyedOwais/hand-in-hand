import React from "react";
import TherapyCentreHero from "./TherapyCentreHero";
import WhatWeHelpWith from "./WhatWeHelpWith";
import BeyondTherapy from "./BeyondTherapy";
import LifeBeyondClinic from "./LifeBeyondClinic";
import ParentJourney from "./ParentJourney";
import SocialProofVisual from "./SocialProofVisual";
import SeeLifeCommunity from "./SeeLifeCommunity";
import FinalTherapyCTA from "./FinalTherapyCTA";

export default function TherapyCentreView() {
  return (
    <div id="therapy-centre-view" className="bg-white">
      {/* 02. Path One: Therapy Centre Hero */}
      <TherapyCentreHero />

      {/* 02. Section 2: What We Help With */}
      <WhatWeHelpWith />

      {/* 03. Section 3: The "Beyond Therapy" Section */}
      <BeyondTherapy />

      {/* 04. Section 4: Life Beyond the Clinic */}
      <LifeBeyondClinic />

      {/* 05. Section 5: Parent Journey */}
      <ParentJourney />

      {/* 06. Section 6: Social Proof */}
      <SocialProofVisual />

      {/* 07. Photos Section: See Life at Therapy Centre */}
      <SeeLifeCommunity
        title="See Life at Therapy Centre"
        subtitle="Real children. Real progress. Real moments."
        tagline="Hand in Hand Moments"
      />

      {/* 07. Section 7: Final CTA */}
      <FinalTherapyCTA />
    </div>
  );
}
