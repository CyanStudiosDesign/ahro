"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Carousel } from "@/components/ui/carousel/Carousel";
import { urlFor } from "@/sanity/img";
import newsItems from "./index";
import {
  BodyText,
  Chip,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/design-system";
import SplitText from "@/components/react-bits/SplitText";

interface NewsItem {
  _id: string;
  slug?: { current: string };
  category?: string;
  image?: unknown;
  publishedAt?: string;
  location?: string;
  title: string;
  excerpt?: string;
}

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

interface NewsProps {
  data?: NewsItem[];
  intro?: {
    heading?: string;
    description?: string;
  };
  showViewAllButton?: boolean;
  isGridView?: boolean;
}

interface NewsCardItem {
  slug: string;
  category: string;
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

function NewsCard({ item, isGridView = false }: { item: NewsCardItem; isGridView?: boolean }) {
  const authorName = "Demi Wilkinson";
  const authorAvatar = "https://randomuser.me/api/portraits/women/44.jpg";

  return (
    <Link href={item.slug ? `/news/${item.slug}` : "#"} className="block h-full cursor-pointer group">
      <article className="flex flex-col cursor-pointer h-full">
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="w-full h-full object-cover block object-center"
          />
        </div>
        <div className="flex items-start justify-between gap-2">
          <SplitText
            as="h3"
            className="text-xl font-semibold leading-[1.35] text-[#181D27] m-0 group-hover:text-[#358840] transition-colors"
          >
            {item.title}
          </SplitText>
          <ArrowUpRight className="w-5 h-5 text-[#181D27] shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#358840]" />
        </div>
        <p className="text-sm leading-relaxed text-[#535862] mt-3 mb-5 line-clamp-3">{item.description}</p>
        <div className="flex items-center gap-3 mt-auto">
          <img
            src={authorAvatar}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm text-[#414651]">
            <span className="font-semibold text-[#181D27]">{authorName}</span>
            {" • " + item.date}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function News({ data, intro, showViewAllButton = true, isGridView = false }: NewsProps) {
  const [perView, setPerView] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerView(1);
      } else if (window.innerWidth < 1024) {
        setPerView(2);
      } else {
        setPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayItems = data && data.length > 0
    ? data.map((item) => ({
        slug: item.slug?.current || slugify(item.title || ""),
        category: item.category || "News",
        image: (item.image ? urlFor(item.image)?.url() : null) || "/content/A1.webp",
        date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Recently",
        location: item.location || "Glasgow",
        title: item.title,
        description: item.excerpt || "",
      }))
    : newsItems.map(item => ({
        ...item,
        slug: slugify(item.title || ""),
      }));

  const newsSlides = displayItems.map((item) => (
    <NewsCard key={item.title} item={item} isGridView={false} />
  ));

  const headingText = intro?.heading || "Stay Updated With AHRO's Research And Impact.";

  return (
    <section className="min-h-svh bg-white px-5 py-16 md:px-10 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className={isGridView ? "text-center flex flex-col items-center justify-center mb-12" : "mb-10"}>
          <Eyebrow icon={<Sparkles size={14} strokeWidth={1.7} />}>
            Latest News
          </Eyebrow>

          <SectionHeading className={`mt-6 max-w-[680px] ${isGridView ? "mx-auto" : ""}`}>
            {headingText.includes("Research And Impact") ? (
              <>
                Stay Updated With AHRO&apos;s{" "}
                <span className="block text-forest">Research And Impact.</span>
              </>
            ) : (
              headingText
            )}
          </SectionHeading>
        </div>

        {isGridView ? (
          <div className="mt-11 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {displayItems.map((item, index) => (
              <NewsCard key={item.title || index} item={item} isGridView={true} />
            ))}
          </div>
        ) : (
          <Carousel
            slides={newsSlides}
            perView={perView}
            scrollBy={1}
            gap={24}
            navStyle="top"
            indicator="dots"
            speedFactor={0.1}
            className="mt-10"
          />
        )}

        {showViewAllButton && (
          <div className="mt-12 flex justify-end">
            <Link
              href="/news"
              className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-forest bg-white px-6 py-3 font-ui text-body font-semibold text-forest transition-colors hover:bg-paper focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              View All News
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </section>
    </section>
  );
}
