"use client";

import Image from "next/image";
import FlowingMenu from "@/components/react-bits/FlowingMenu";
import { urlFor } from "@/sanity/img";
import { defaultTherapeuticData } from "./index";
import { BodyText } from "@/components/ui/design-system";
import SplitText from "@/components/react-bits/SplitText";
import { TiltedCard } from "@/modules/home-page/hero/TiltedCard";

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
          link: "#",
          text: category.name,
          image: itemImage,
        };
      })
    : defaultTherapeuticData.categories.map((categoryName) => ({
        link: "#",
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
        <header className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
          <SplitText
            as="h2"
            id="therapeutic-list-title"
            className="text-center sm:text-left text-3xl sm:text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight"
          >
            Therapeutic <span className="text-brand">Areas</span>
          </SplitText>
          <BodyText className="text-center sm:text-left max-w-therapeutic-description text-body-l">
            {description}
          </BodyText>
        </header>

        <div className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          <div className="h-[min(42rem,75vh)] min-h-128 overflow-hidden  border-line bg-surface ">
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

          <TiltedCard
            wrapperClassName="h-full"
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-tint shadow-media will-change-transform lg:aspect-auto lg:h-[min(42rem,75vh)] lg:min-h-[32rem]"
            rotateAmplitude={8}
            scaleOnHover={1.025}
          >
            <Image
              src={featuredImage || defaultTherapeuticData.mainImageUrl}
              alt="Healthcare research and community care"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 50vw"
            />
          </TiltedCard>
        </div>
      </div>
    </section>
  );
}

export default Therapeutic1;
