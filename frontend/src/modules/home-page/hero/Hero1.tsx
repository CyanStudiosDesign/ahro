"use client";

import React from "react";
import { ArrowRight, FlaskConical, Handshake, Globe } from "lucide-react";
import { Nav1 } from "@/modules/layout/nav1/Nav1";

export interface HeroSectionProps {
  data?: {
    mainHeading?: string;
    subHeading?: string;
    description?: string;
    bgImageUrl?: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const mainHeading = data?.mainHeading || "AHRO Institute";
  const subHeading = data?.subHeading || "African Health Research Organisation";
  const description =
    data?.description ||
    "Advancing health research and innovation across Africa through evidence, collaboration, and impact.";
  const bgImageUrl = data?.bgImageUrl || "/content/Hero_Bg.jpeg";

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-sans text-white bg-slate-950 flex flex-col justify-between">
      {/* 1. Background Image & Overlay */}
      <div className="absolute  inset-0 z-0">
        <img
          src={bgImageUrl}
          alt="AHRO Hero Background"
          className="h-full w-full object-cover object-center scale-102 transition-transform duration-1000"
        />
        {/* Multi-stage gradient overlay for optimal text contrast & atmospheric lighting */}
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-black/35" />
      </div>

      {/* 2. Top Header Navigation */}
      <div className="relative z-30 pt-4">
        <Nav1 />
      </div>

      {/* 3. Hero Main Content Container */}
      <div className="relative z-20 flex flex-1 flex-col pt-15 px-4 pb-12 md:px-8 lg:px-12 max-w-8xl mx-auto w-full">
        <main className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 w-full">
          {/* Left Column: Typography, CTA, Stats Badges */}
          <div className="space-y-6 lg:col-span-6">
            {/* Title & Description Block */}
            <div className="space-y-2.5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white font-heading drop-shadow-md">
                {mainHeading}
              </h2>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white/95 font-heading tracking-tight drop-shadow">
                {subHeading}
              </h2>
              <h5 className="max-w-84 text-xs sm:text-sm md:text-base leading-relaxed text-slate-100/90 font-body drop-shadow pt-1">
                {description}
              </h5>
            </div>

            {/* 1. Learn More Button */}
            <div className="pt-6">
              <a
                href="#about"
                className="inline-flex items-center gap-3 rounded-full bg-forest hover:bg-forest/90 pl-6 pr-2 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-102 font-ui cursor-pointer no-underline"
              >
                <span>Learn more</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-forest shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* 2. Stats Grid Section - Refined with Global CSS & Premium Aesthetics */}
            <div className="flex flex-col gap-4 pt-2 w-full max-w-xs">
              {/* Stat 1: Research Projects */}
              <div className="flex items-center gap-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <FlaskConical className="h-9 w-9 text-forest stroke-[1.75]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-2xl font-bold text-white font-heading leading-none tracking-tight">
                    100+
                  </span>
                  <span className="text-sm font-medium text-white/90 font-body leading-tight mt-1 whitespace-nowrap">
                    Research Projects
                  </span>
                </div>
              </div>

              {/* Stat 2: Partner Institutions */}
              <div className="flex items-center gap-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Handshake className="h-9 w-9 text-forest stroke-[1.75]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-2xl font-bold text-white font-heading leading-none tracking-tight">
                    50+
                  </span>
                  <span className="text-sm font-medium text-white/90 font-body leading-tight mt-1 whitespace-nowrap">
                    Partner Institutions
                  </span>
                </div>
              </div>

              {/* Stat 3: Countries Impacted */}
              <div className="flex items-center gap-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Globe className="h-9 w-9 text-forest stroke-[1.5]" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-2xl font-bold text-white font-heading leading-none tracking-tight">
                    15+
                  </span>
                  <span className="text-sm font-medium text-white/90 font-body leading-tight mt-1 whitespace-nowrap">
                    Countries Impacted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Spacer */}
          <div className="hidden lg:col-span-2 lg:block" />

          {/* Right Column: Inset Feature Card */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-surface/95 p-6 text-ink shadow-2xl backdrop-blur-md border border-white/80 max-w-sm ml-auto transition-all duration-300 hover:shadow-2xl">
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold leading-snug font-heading text-ink">
                  Driving better health outcomes for Africa
                </h3>
                <a
                  href="#research"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white transition-all hover:bg-meadow hover:scale-110 shadow-md cursor-pointer"
                  aria-label="Read more about health outcomes"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-slate-1 font-body">
                We generate evidence, build capacity, and support innovations
                that improve health and well-being across the continent.
              </p>

              {/* Laboratory Thumbnail */}
              <div className="overflow-hidden rounded-2xl border border-line/60 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
                  alt="Microscope and laboratory testing"
                  className="h-32 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;
