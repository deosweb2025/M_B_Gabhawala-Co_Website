import React from "react";
import { HeroSlider } from "../components/home/HeroSlider";
import { StatsOverview } from "../components/home/StatsOverview";
import { HomeAbout } from "../components/home/HomeAbout";
import { PillarsSection } from "../components/home/PillarsSection";
import { PracticeAreasOverview } from "../components/home/PracticeAreasOverview";
import { GalleryGlimpse } from "../components/home/GalleryGlimpse";
import { HomeCTA } from "../components/home/HomeCTA";

export const Home: React.FC = () => {
  return (
    <>
      {/* 3-Second Auto-Cycling Hero Section */}
      <HeroSlider />

      {/* Numerical Credentials (Stats Overview) */}
      <StatsOverview />

      {/* Institutional About Us Section */}
      <HomeAbout />

      {/* The 3 Core Pillars: Integrity, Knowledge, Speed */}
      <PillarsSection />

      {/* Specialized Practice Areas Overview */}
      <PracticeAreasOverview />

      {/* Visual Portfolio: Industry Practice Gallery Glimpse */}
      <GalleryGlimpse />

      {/* Final Action CTA */}
      <HomeCTA />
    </>
  );
};

export default Home;
