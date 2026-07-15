"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { researchCards as defaultResearchCards, defaultResearchIntro } from "./index";
import { urlFor } from "@/sanity/img";

interface ResearchAreasProps {
  intro?: {
    researchIntro?: {
      tagLabel?: string;
      heading?: string;
    };
  };
  cards?: Array<{
    _id: string;
    image: any;
    title: string;
    description: string;
    categories?: Array<{ name: string }>;
  }>;
}

export default function ResearchAreas({ intro, cards }: ResearchAreasProps) {
  const [activeCategory, setActiveCategory] = useState("Disease");

  const tag = intro?.researchIntro?.tagLabel || defaultResearchIntro.tagLabel;
  const heading = intro?.researchIntro?.heading || defaultResearchIntro.heading;
  
  // Resolve research cards from prop or fallback to default mockup
  const displayCards = cards && cards.length > 0 
    ? cards.map((card) => ({
        id: card._id,
        image: card.image ? urlFor(card.image)?.url() : null,
        title: card.title,
        description: card.description,
      }))
    : defaultResearchCards;

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24 font-sans text-[#1A201C]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="px-4 py-1.5 rounded-full border border-[#D5E2D4] bg-white text-sm font-medium text-[#2E472A] shadow-sm">
            <span>{tag}</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-stat-label mb-10">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {defaultResearchIntro.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-[#2E472A] text-white border-[#2E472A]"
                    : "bg-[#F4F9F3] text-[#2E472A] border-[#E2EFE0] hover:bg-[#EAF3E9]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 text-left items-start">
          {displayCards.map((card, index) => {
            const isOdd = index % 2 === 0;
            if (!card.image) return null;

            return (
              <div
                key={card.id}
                className="flex flex-col group w-full aspect-[3/4.6] bg-transparent"
              >
                <div
                  className={`w-full rounded-4xl overflow-hidden bg-gray-100 shadow-sm transition-all duration-300 flex-1 h-0 ${
                    isOdd ? "mb-4" : ""
                  }`}
                >
                  <Image
                    width={600}
                    height={750}
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {isOdd && (
                  <div className="px-2 flex-none">
                    <h4 className="font-bold text-lg text-[#111] mb-1">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[95%] line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 w-full max-w-xl justify-center mt-4">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 h-1 bg-[#E2E8F0] rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-[30%] bg-[#2E472A] rounded-full" />
          </div>

          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}