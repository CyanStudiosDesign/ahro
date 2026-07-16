"use client";

import Image from "next/image";
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

interface NewsItem {
  _id: string;
  category?: string;
  image?: any;
  publishedAt?: string;
  location?: string;
  title: string;
  excerpt?: string;
}

interface NewsProps {
  data?: NewsItem[];
}

interface NewsCardItem {
  category: string;
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

function NewsCard({ item }: { item: NewsCardItem }) {
  return (
    <article className="h-full overflow-hidden rounded-[14px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div className="relative h-[225px] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-1.5 text-[11px] font-normal uppercase tracking-[0.18em] text-[#141719]">
          {item.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-[13px] font-normal text-[#4d524b]">
          <CalendarDays size={14} strokeWidth={1.7} />
          <span>{item.date}</span>
          <span>*</span>
          <MapPin size={14} strokeWidth={1.7} />
          <span>{item.location}</span>
        </div>

        <h2 className="mt-4 text-[18px] font-[700] leading-[1.45] tracking-normal text-[#171a17]">
          {item.title}
        </h2>

        <p className="mt-3 text-[14px] font-normal leading-[1.65] tracking-normal text-[#4f544d]">
          {item.description}
        </p>

        <p className="mt-7 inline-flex items-center gap-2 text-[15px] font-[700] text-[#333832]">
          Read More
          <ArrowRight size={15} strokeWidth={1.8} />
        </p>
      </div>
    </article>
  );
}

export default function News({ data }: NewsProps) {
  const displayItems = data && data.length > 0
    ? data.map((item) => ({
        category: item.category || "News",
        image: item.image ? urlFor(item.image)?.url() : "/content/A1.webp",
        date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Recently",
        location: item.location || "Glasgow",
        title: item.title,
        description: item.excerpt || "",
      }))
    : newsItems;

  const newsSlides = displayItems.map((item) => (
    <NewsCard key={item.title} item={item} />
  ));

  return (
    <main className="min-h-screen bg-[#fbfcf8] px-6 py-16 font-sans">
      <section className="mx-auto max-w-7xl">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d7decf] bg-[#f8fff0] px-4 py-1.5 text-[13px] font-normal uppercase tracking-[0.12em] text-[#202820]">
            <Sparkles size={14} strokeWidth={1.8} className="text-[#315c25]" />
            Latest News
          </p>

          <h1 className="mt-6 max-w-[680px] text-[42px] font-[700] leading-[1.15] tracking-normal text-[#141719]">
            Stay Updated With AHRO&apos;s{" "}
            <span className="block text-[#315c25]">Research And Impact.</span>
          </h1>
        </div>

        <Carousel
          slides={newsSlides}
          perView={3}
          scrollBy={1}
          gap={24}
          navStyle="top"
          indicator="dots"
          speedFactor={0.1}
          className="mt-10"
        />

        <div className="mt-12 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#101510] bg-[#fbfff6] px-8 py-4 text-[16px] font-[700] text-[#3d403b]"
          >
            View All News
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </button>
        </div>
      </section>
    </main>
  );
}
