"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Handshake, Globe } from "lucide-react";
import { BodyText } from "@/components/ui/design-system";

export interface HeroSectionProps {
  data?: {
    mainHeading?: string;
    subHeading?: string;
    description?: string;
    bgImageUrl?: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const suppliedHeading = data?.mainHeading?.trim();
  const mainHeading =
    suppliedHeading && suppliedHeading.length >= 3
      ? suppliedHeading
      : "AHRO Institute";
  const subHeading = data?.subHeading || "African Health Research Organisation";
  const description =
    data?.description ||
    "Advancing health research and innovation across Africa through evidence, collaboration, and impact.";
  const bgImageUrl = data?.bgImageUrl || "/content/Hero_Bg.jpeg";

  return (
    <section className="relative flex h-[85svh] min-h-0 w-full flex-col justify-between overflow-hidden bg-ink font-sans text-white lg:h-[85vh] lg:min-h-[42rem]">
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

      {/* Hero Main Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-28 pb-12 md:px-10 md:pt-32 lg:px-20">
        <main className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 w-full">
          {/* Left Column: Typography, CTA, Stats Badges */}
          <div className="space-y-6 lg:col-span-6">
            {/* Title & Description Block */}
            <div className="space-y-2.5">
              <h1 className="whitespace-nowrap font-heading text-[26px] font-bold leading-[1.15] tracking-[-0.01em] text-white drop-shadow-md sm:text-[32px] lg:text-h1">
                {mainHeading}
              </h1>
              <h2 className="font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.005em] text-white/95 drop-shadow sm:text-[26px] lg:text-h2">
                {subHeading}
              </h2>
              <BodyText className="max-w-[38rem] pt-1 text-white/90 drop-shadow">
                {description}
              </BodyText>
            </div>

            {/* 1. Learn More Button */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-forest hover:bg-forest/90 pl-6 pr-2 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-102 font-ui cursor-pointer no-underline"
              >
                <span>Learn more</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-forest shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* 2. Stats Grid Section - Refined with Global CSS & Premium Aesthetics */}
            <div className="grid w-full max-w-lg grid-cols-3 gap-3 pt-2 sm:gap-5">
              {/* Stat 1: Research Projects */}
              <div className="group flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <FlaskConical className="h-7 w-7 text-forest stroke-[1.75] sm:h-8 sm:w-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                    100+
                  </span>
                  <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                    Research Projects
                  </span>
                </div>
              </div>

              {/* Stat 2: Partner Institutions */}
              <div className="group flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Handshake className="h-7 w-7 text-forest stroke-[1.75] sm:h-8 sm:w-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                    50+
                  </span>
                  <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                    Partner Institutions
                  </span>
                </div>
              </div>

              {/* Stat 3: Countries Impacted */}
              <div className="group flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Globe className="h-7 w-7 text-forest stroke-[1.5] sm:h-8 sm:w-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                    15+
                  </span>
                  <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                    Countries Impacted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Spacer */}
          <div className="hidden lg:col-span-2 lg:block" />

          {/* Right Column: Inset Feature Card */}
          <div className="hidden lg:col-span-4 lg:block">
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
