import React from "react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{
    individual: string;
  }>;
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { individual } = await params;

  // Fetch research spotlight card document from Sanity matching the slug
  const researchQuery = groq`
    *[_type == "researchCard" && slug.current == $slug][0] {
      title,
      description,
      image,
      categories[]-> {
        name
      }
    }
  `;

  const research = await client.withConfig({ useCdn: false }).fetch(researchQuery, { slug: individual });

  if (!research) {
    notFound();
  }

  const imageUrl = research.image ? urlFor(research.image)?.url() : null;

  return (
    <div className="w-full pt-20 bg-white text-[#14170F] antialiased">
      {/* 1. HERO SECTION */}
      <div className="px-6 md:px-12 pt-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero grid layout matching research-hero */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 pb-11  items-center">
            <div className="space-y-6">
              {/* Badges row */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#14170F] text-white font-sans text-[11px] font-semibold tracking-wider uppercase">
                  Research Area
                </span>
                {research.categories?.map((cat: any) => (
                  <span key={cat.name} className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-[#14170F] border border-[#E3E4DC] font-sans text-[11px] font-semibold tracking-wider uppercase">
                    {cat.name}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-[36px] font-bold font-heading leading-[1.15] text-[#14170F]">
                {research.title}
              </h1>

              {/* Description */}
              <p className="text-base text-[#5B5F55] leading-relaxed">
                {research.description ||
                  "AHRO's oncology programme advances personalised cancer diagnosis and treatment by combining genomics, molecular biology, and AI-driven analysis."}
              </p>
            </div>

            {/* Thumbnail Box */}
            <div
              className="h-[360px] rounded-[20px] bg-cover bg-center overflow-hidden shrink-0"
              style={{
                backgroundImage: imageUrl
                  ? `url(${imageUrl})`
                  : "linear-gradient(135deg, #2a1a3a, #7a1f5c 45%, #e0c341)",
              }}
            />
          </div>

          {/* 4-column Fact Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E3E4DC] overflow-hidden">
            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Active Studies
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                12 ongoing
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Partner Institutions
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                9 across 3 countries
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Focus Since
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                2019
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Publications
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                58 published
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BODY SECTION */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-290 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-[56px]">
            {/* Left Content Area */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#14170F] mb-4">
                About the programme
              </h2>
              <p className="text-base leading-[1.75] text-[#5B5F55] mb-5">
                The oncology and translational biology programme at AHRO focuses on linking laboratory discovery directly to regional clinical application. Researchers utilize genomics, molecular biology, and AI analysis to speed up target identification and therapeutics selection.
              </p>
              <p className="text-base leading-[1.75] text-[#5B5F55] mb-8">
                By designing multi-site clinical trials, our scientific findings translate efficiently from bench to bedside, raising clinical capacity and closing critical diagnostic gaps across institutions.
              </p>

              {/* Key focus areas with custom Accordion component */}
              <h2 className="text-2xl font-bold font-heading text-[#14170F] mb-4">
                Key focus areas
              </h2>
              <Accordion type="single" className="border-t border-b-0 border-x-0 border-[#E3E4DC] bg-transparent rounded-none shadow-none mt-6">
                <AccordionItem value="item-1" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Genomic profiling
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Sequencing tumour samples to identify actionable mutations and match patients to targeted molecular therapies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    AI-assisted diagnostics
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Applying advanced machine learning models trained on pathology imaging to accelerate early disease detection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Immunotherapy trials
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Conducting multi-year clinical research studies to evaluate patient-specific personalized immunotherapy paths.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Collaborate CTA Card */}
              <div className="bg-[#14170F] text-white rounded-2xl p-7 shadow-sm">
                <h4 className="font-heading text-lg font-semibold text-white mb-2.5">
                  Collaborate with us
                </h4>
                <p className="text-xs text-[#B9BEAE] leading-relaxed mb-5">
                  Research partnerships, joint grants, and clinical trial collaborations are open to qualified institutions.
                </p>
                <a
                  href="mailto:research@ahro.org"
                  className="block text-center bg-[#358840] text-white font-sans text-xs font-semibold px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  Get in touch →
                </a>
              </div>

              {/* Stats Card */}
              <div className="border border-[#E3E4DC] rounded-2xl p-6 bg-white">
                <h4 className="text-[12px] font-sans font-semibold tracking-wider text-[#358840] uppercase mb-3.5">
                  Programme at a glance
                </h4>
                <ul className="space-y-2.5 font-sans text-xs text-[#5B5F55]">
                  <li className="flex justify-between border-b border-[#E3E4DC] pb-2">
                    <span>Researchers</span>
                    <b className="text-[#14170F]">34</b>
                  </li>
                  <li className="flex justify-between border-b border-[#E3E4DC] pb-2">
                    <span>Patents Filed</span>
                    <b className="text-[#14170F]">5</b>
                  </li>
                  <li className="flex justify-between border-b border-[#E3E4DC] pb-2">
                    <span>Patients enrolled</span>
                    <b className="text-[#14170F]">2,400+</b>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span>Grant funding</span>
                    <b className="text-[#14170F]">$4.2M</b>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
