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
import {
  BodyText,
  Chip,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/design-system";

interface NewsItem {
  _id: string;
  category?: string;
  image?: unknown;
  publishedAt?: string;
  location?: string;
  title: string;
  excerpt?: string;
}

interface NewsProps {
  data?: NewsItem[];
  intro?: {
    heading?: string;
    description?: string;
  };
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
    <article className="h-full overflow-hidden rounded-lg bg-white">
      <div className="relative h-56.25 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center"
        />

        <Chip className="absolute left-5 top-5 border-0 px-4 py-1.5 text-eyebrow uppercase tracking-[0.08em]">
          {item.category}
        </Chip>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 font-ui text-caption font-normal text-slate-2">
          <CalendarDays size={14} strokeWidth={1.7} />
          <span>{item.date}</span>
          <span>*</span>
          <MapPin size={14} strokeWidth={1.7} />
          <span>{item.location}</span>
        </div>

        <h3 className="mt-4 font-heading text-h4 font-semibold leading-[1.3] text-ink">
          {item.title}
        </h3>

        <BodyText className="mt-3 text-[14px]">
          {item.description}
        </BodyText>

        <p className="mt-7 inline-flex items-center gap-2 font-ui text-body font-semibold text-ink">
          Read More
          <ArrowRight size={15} strokeWidth={1.8} />
        </p>
      </div>
    </article>
  );
}

export default function News({ data, intro }: NewsProps) {
  const displayItems = data && data.length > 0
    ? data.map((item) => ({
        category: item.category || "News",
        image: (item.image ? urlFor(item.image)?.url() : null) || "/content/A1.webp",
        date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : "Recently",
        location: item.location || "Glasgow",
        title: item.title,
        description: item.excerpt || "",
      }))
    : newsItems;

  const newsSlides = displayItems.map((item) => (
    <NewsCard key={item.title} item={item} />
  ));

  const headingText = intro?.heading || "Stay Updated With AHRO's Research And Impact.";

  return (
    <section className="min-h-svh bg-paper px-5 py-16 md:px-10 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div>
          <Eyebrow icon={<Sparkles size={14} strokeWidth={1.7} />}>
            Latest News
          </Eyebrow>

          <SectionHeading className="mt-6 max-w-[680px]">
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
            className="inline-flex cursor-pointer items-center gap-2 rounded-pill border border-forest bg-white px-6 py-3 font-ui text-body font-semibold text-forest transition-colors hover:bg-paper focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            View All News
            <ArrowUpRight size={20} strokeWidth={1.8} />
          </button>
        </div>
      </section>
    </section>
  );
}
