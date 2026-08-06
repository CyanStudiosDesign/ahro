"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FlaskConical, Handshake, Globe } from "lucide-react";
import { BodyText } from "@/components/ui/design-system";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import SplitText from "@/components/react-bits/SplitText";
import Magnet from "@/components/react-bits/Magnet";
import { TiltedCard } from "./TiltedCard";

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
    <section className="relative flex h-svh w-full flex-col overflow-hidden bg-ink font-sans text-white lg:h-screen">
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
      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl items-center px-5 pb-8 pt-24 md:px-10 md:pb-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-10">
        <main className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          {/* Left Column: Typography, CTA, Stats Badges */}
          <div className="space-y-7 lg:col-span-7 xl:space-y-8">
            {/* Title & Description Block */}
            <div className="space-y-3">
              <TiltedCard rotateAmplitude={7} scaleOnHover={1.025}>
                <SplitText
                  as="h1"
                  splitBy="chars"
                  className="font-heading text-[clamp(2rem,6vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-md lg:text-h1 xl:text-[3rem]"
                >
                  {mainHeading}
                </SplitText>
              </TiltedCard>
              <TiltedCard rotateAmplitude={6} scaleOnHover={1.02}>
                <SplitText
                  as="h2"
                  delay={0.12}
                  className="font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.005em] text-white/95 drop-shadow sm:text-[26px] lg:text-h2"
                >
                  {subHeading}
                </SplitText>
              </TiltedCard>
              <TiltedCard rotateAmplitude={5} scaleOnHover={1.015}>
                <AnimatedContent delay={0.2} distance={24}>
                  <BodyText className="max-w-[36rem] pt-1 text-white/90 drop-shadow">
                    {description}
                  </BodyText>
                </AnimatedContent>
              </TiltedCard>
            </div>

            {/* 1. Learn More Button */}
            <AnimatedContent delay={0.28} distance={20}>
              <Magnet padding={90} magnetStrength={3} wrapperClassName="w-fit">
                <TiltedCard
                  wrapperClassName="w-fit pt-1"
                  rotateAmplitude={7}
                  scaleOnHover={1.04}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 rounded-full bg-forest hover:bg-forest/90 pl-6 pr-2 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors duration-200 font-ui cursor-pointer no-underline"
                  >
                    <span>Learn more</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-forest shadow-sm">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </TiltedCard>
              </Magnet>
            </AnimatedContent>

            {/* 2. Stats Grid Section - Refined with Global CSS & Premium Aesthetics */}
            <div className="grid w-full max-w-[38rem] grid-cols-3 gap-3 pt-1 sm:gap-6">
              {/* Stat 1: Research Projects */}
              <div className="group flex h-full flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <TiltedCard rotateAmplitude={10} scaleOnHover={1.08}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                    <FlaskConical className="h-7 w-7 text-forest stroke-[1.75] sm:h-8 sm:w-8" />
                  </div>
                </TiltedCard>
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.04}>
                  <div className="flex flex-col justify-center">
                    <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                      100+
                    </span>
                    <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                      Research Projects
                    </span>
                  </div>
                </TiltedCard>
              </div>

              {/* Stat 2: Partner Institutions */}
              <div className="group flex h-full flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <TiltedCard rotateAmplitude={10} scaleOnHover={1.08}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Handshake className="h-7 w-7 text-forest stroke-[1.75] sm:h-8 sm:w-8" />
                  </div>
                </TiltedCard>
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.04}>
                  <div className="flex flex-col justify-center">
                    <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                      50+
                    </span>
                    <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                      Partner Institutions
                    </span>
                  </div>
                </TiltedCard>
              </div>

              {/* Stat 3: Countries Impacted */}
              <div className="group flex h-full flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                <TiltedCard rotateAmplitude={10} scaleOnHover={1.08}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Globe className="h-7 w-7 text-forest stroke-[1.5] sm:h-8 sm:w-8" />
                  </div>
                </TiltedCard>
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.04}>
                  <div className="flex flex-col justify-center">
                    <span className="font-heading text-xl font-bold leading-none tracking-tight text-white sm:text-2xl">
                      15+
                    </span>
                    <span className="mt-1 text-xs font-medium leading-tight text-white/90 sm:text-sm">
                      Countries Impacted
                    </span>
                  </div>
                </TiltedCard>
              </div>
            </div>
          </div>

          {/* Right Column: Inset Feature Card */}
          <div className="hidden lg:col-span-5 lg:block">
            <TiltedCard className="ml-auto max-w-sm rounded-3xl border border-white/80 bg-surface/95 p-6 text-ink shadow-2xl backdrop-blur-md will-change-transform xl:p-7">
              <div className="[transform:translateZ(28px)]">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <SplitText
                    as="h3"
                    delay={0.2}
                    className="text-lg font-bold leading-snug font-heading text-ink"
                  >
                    Driving better health outcomes for Africa
                  </SplitText>
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
            </TiltedCard>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;
