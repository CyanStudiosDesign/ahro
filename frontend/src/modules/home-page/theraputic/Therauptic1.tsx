"use client";

import Image from "next/image";
import FlowingMenu from "@/components/react-bits/FlowingMenu";
import { urlFor } from "@/sanity/img";
import { defaultTherapeuticData } from "./index";

interface TherapeuticData {
  therapeuticIntro?: {
    heading?: string;
  };
  therapeuticDescription?: string;
  therapeuticImage?: unknown;
  categories?: string[];
}

interface Therapeutic1Props {
  data?: TherapeuticData;
}

export function Therapeutic1({ data }: Therapeutic1Props) {
  const heading = data?.therapeuticIntro?.heading || "Therapeutic Areas";
  const description =
    data?.therapeuticDescription || defaultTherapeuticData.introText;
  const categories =
    data?.categories && data.categories.length > 0
      ? data.categories
      : defaultTherapeuticData.categories;
  const featuredImage = data?.therapeuticImage
    ? urlFor(data.therapeuticImage)?.width(900).height(600).fit("crop").url()
    : defaultTherapeuticData.mainImageUrl;
  const menuItems = categories.map((category) => ({
    link: "#research",
    text: category,
    image: featuredImage || defaultTherapeuticData.mainImageUrl,
  }));

  return (
    <section
      id="therapeutic-areas"
      className="bg-surface px-section py-14 text-ink md:py-20"
      aria-labelledby="therapeutic-list-title"
    >
      <div className="mx-auto max-w-wide">
        <header className="grid items-start gap-5 md:grid-cols-2 md:gap-10">
          <h2
            id="therapeutic-list-title"
            className="text-section-title font-strong leading-section-title tracking-section-title"
          >
            {heading === "Therapeutic Areas" ? (
              <>
                Therapeutic <span className="text-brand">Areas</span>
              </>
            ) : (
              heading
            )}
          </h2>
          <p className="max-w-therapeutic-intro text-feature-copy leading-feature-copy text-copy">
            {description}
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <div className="h-[min(42rem,75vh)] min-h-[32rem] overflow-hidden  border-line bg-surface ">
            <FlowingMenu
              items={menuItems}
              speed={15}
              textColor="var(--color-ink)"
              bgColor="var(--color-surface)"
              marqueeBgColor="var(--color-brand-deep)"
              marqueeTextColor="var(--color-surface)"
              borderColor="var(--color-line)"
            />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-tint  lg:aspect-auto lg:h-[min(42rem,75vh)] lg:min-h-[32rem]">
            <Image
              src={featuredImage || defaultTherapeuticData.mainImageUrl}
              alt="Healthcare research and community care"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Therapeutic1;
