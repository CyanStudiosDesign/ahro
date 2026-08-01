"use client";

import Image from "next/image";
import FlowingMenu from "@/components/react-bits/FlowingMenu";
import { urlFor } from "@/sanity/img";
import { defaultTherapeuticData } from "./index";
import { BodyText, SectionHeading } from "@/components/ui/design-system";

interface TherapeuticData {
  therapeuticIntro?: {
    heading?: string;
  };
  therapeuticDescription?: string;
  therapeuticImage?: unknown;
  categories?: Array<{
    _id: string;
    name: string;
    slug?: { current: string };
    image?: unknown;
  }>;
}

interface Therapeutic1Props {
  data?: TherapeuticData;
}

export function Therapeutic1({ data }: Therapeutic1Props) {
  const heading = data?.therapeuticIntro?.heading || "Therapeutic Areas";
  const description =
    data?.therapeuticDescription || defaultTherapeuticData.introText;
  const categories = data?.categories || [];
  const featuredImage = data?.therapeuticImage
    ? urlFor(data.therapeuticImage)?.width(900).height(600).fit("crop").url()
    : defaultTherapeuticData.mainImageUrl;

  const menuItems = categories.length > 0
    ? categories.map((category) => {
        const itemImage = (category.image
          ? urlFor(category.image)?.width(900).height(600).fit("crop").url()
          : featuredImage) || defaultTherapeuticData.mainImageUrl;
        return {
          link: category.slug?.current ? `/therapeutic-areas/${category.slug.current}` : "#research",
          text: category.name,
          image: itemImage,
        };
      })
    : defaultTherapeuticData.categories.map((categoryName) => ({
        link: "#research",
        text: categoryName,
        image: featuredImage || defaultTherapeuticData.mainImageUrl,
      }));

  return (
    <section
      id="therapeutic-areas"
      className="overflow-x-clip bg-surface px-section py-14 text-ink md:py-20"
      aria-labelledby="therapeutic-list-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="grid items-start gap-5 md:grid-cols-2 md:gap-10">
          <SectionHeading
            id="therapeutic-list-title"
          >
            {heading === "Therapeutic Areas" ? (
              <>
                Therapeutic <span className="text-brand">Areas</span>
              </>
            ) : (
              heading
            )}
          </SectionHeading>
          <BodyText className="max-w-therapeutic-intro text-body-l">
            {description}
          </BodyText>
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
