"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { researchCards as defaultResearchCards, defaultResearchIntro } from "./index";
import { urlFor } from "@/sanity/img";
import Carousel from "@/components/ui/carousel/Carousel";
import Link from "next/link";
import {
  BodyText,
  ChipButton,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/design-system";
import SplitText from "@/components/react-bits/SplitText";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

interface ResearchAreasProps {
  intro?: {
    researchIntro?: {
      tagLabel?: string;
      heading?: string;
    };
  };
  cards?: Array<{
    _id: string;
    slug?: { current: string };
    image: unknown;
    title: string;
    description: string;
    categories?: Array<{ name: string }>;
  }>;
  categories?: string[];
}

export default function ResearchAreas({ intro, cards, categories }: ResearchAreasProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerView(1);
      } else if (window.innerWidth < 1024) {
        setPerView(2);
      } else {
        setPerView(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tag = intro?.researchIntro?.tagLabel || defaultResearchIntro.tagLabel;
  const heading = intro?.researchIntro?.heading || defaultResearchIntro.heading;

  const categoryList = [
    "All",
    ...(categories && categories.length > 0 ? categories : defaultResearchIntro.categories),
  ];
  
  // Resolve research cards from prop or fallback to default mockup
  const rawCards = cards && cards.length > 0 
    ? cards.map((card) => ({
        id: card._id,
        slug: card.slug?.current || slugify(card.title || ""),
        image: card.image ? urlFor(card.image)?.url() : null,
        title: card.title,
        description: card.description,
        categories: card.categories?.map(c => c.name) || [],
      }))
    : defaultResearchCards.map(c => ({ ...c, categories: [], slug: slugify(c.title || "") }));

  // Filter cards by category if active category is selected and not 'All'
  const filteredCards = activeCategory === "All" || !activeCategory
    ? rawCards
    : rawCards.filter(card => 
        card.categories.some(cat => cat.toLowerCase().includes(activeCategory.toLowerCase())) ||
        card.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        card.description.toLowerCase().includes(activeCategory.toLowerCase())
      );

  const displayCards = filteredCards.length > 0 ? filteredCards : rawCards;

  const slides = displayCards
    .filter((card) => !!card.image)
    .map((card, index) => {
      const isOdd = index % 2 === 0;
      return (
        <Link
          key={card.id}
          href={card.slug ? `/research/${card.slug}` : "#"}
          className="flex flex-col group w-full aspect-[3/4.6] bg-transparent text-left cursor-pointer"
        >
          <div
            className={`h-0 w-full flex-1 overflow-hidden rounded-lg bg-mist-light transition-all duration-300 ${
              isOdd ? "mb-4" : ""
            }`}
          >
            <Image
              width={600}
              height={750}
              src={card.image!}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {isOdd && (
            <div className="px-2 flex-none">
              <SplitText
                as="h4"
                className="mb-1 font-heading text-h4 font-semibold leading-[1.3] text-ink group-hover:text-[#358840] transition-colors"
              >
                {card.title}
              </SplitText>
              <BodyText className="max-w-[95%] line-clamp-2 text-[14px]">
                {card.description}
              </BodyText>
            </div>
          )}
        </Link>
      );
    });

  return (
    <section className="flex min-h-svh w-full items-center bg-white px-5 py-16 text-ink md:px-10 lg:px-20">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center text-center">
        <Eyebrow className="mb-6">{tag}</Eyebrow>

        <SectionHeading className="mb-10 max-w-4xl">
          {heading}
        </SectionHeading>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categoryList.map((category) => {
            const isActive = activeCategory === category;
            return (
              <ChipButton
                key={category}
                onClick={() => setActiveCategory(category)}
                active={isActive}
                className="px-5"
              >
                {category}
              </ChipButton>
            );
          })}
        </div>

        <div className="w-full mb-12 relative px-4">
          <Carousel
            slides={slides}
            perView={perView}
            scrollBy={1}
            gap={24}
            navStyle="bottom"
            indicator="progress"
            className="w-full"
          />
        </div>
      </div>
      
      
    </section>
  );
}
