"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  FlaskConical,
  Lightbulb,
  Scale,
  Leaf,
  Handshake,
  ArrowRight,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BodyText, SectionHeading } from "@/components/ui/design-system";
import SplitText from "@/components/react-bits/SplitText";

interface AccordionItemData {
  id: string;
  title: string;
  content: string;
}

interface InfoProps {
  accordionsData?: AccordionItemData[];
}

export const Info: React.FC<InfoProps> = ({ accordionsData }) => {
  const categories = [
    { icon: GraduationCap, label: "Education" },
    { icon: FlaskConical, label: "Research" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Scale, label: "Governance" },
    { icon: Leaf, label: "Environment" },
    { icon: Handshake, label: "Partnerships" },
  ];

  return (
    <section className="bg-white px-5 py-16 text-ink md:px-10 md:py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
        
        {/* Left Column - Image & Quote Card */}
        <div className="w-full animate-fade-in-up lg:sticky lg:top-28 lg:col-span-5 lg:h-[calc(100svh-9rem)] lg:max-h-[42rem] lg:min-h-[32rem]">
          <div className="relative aspect-[4/5] h-full w-full overflow-hidden rounded-lg lg:aspect-auto">
            <Image
              src="/content/A5.webp"
              alt="Lab Research Sustainability"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest/95 via-forest/50 to-transparent" />

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white md:p-10">
              <Quote className="w-10 h-10 mb-5 text-white fill-current opacity-90" />
              <blockquote className="mb-8 font-heading text-h4 font-semibold leading-[1.3] text-white md:text-h3">
                Sustainability is a fundamental principle that underpins the mission, strategy, and operations of AHRO Institute.
              </blockquote>
              <div>
                <SplitText
                  as="h4"
                  className="font-ui text-caption font-semibold text-white"
                >
                  Institutional Charter
                </SplitText>
                <p className="mt-1.5 font-ui text-eyebrow font-semibold uppercase tracking-[0.08em] text-lime">
                  SUSTAINABILITY FRAMEWORK 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content & Accordions */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up animation-delay-100">
          {/* Main Heading & Intro */}
          <div className="space-y-4">
            <SectionHeading>
              Sustainability at <br />
              <span className="text-brand">AHRO Institute</span>
            </SectionHeading>
            <BodyText>
              We are committed to fostering a culture of responsibility, ensuring that our research, education, and institutional practices contribute to a healthier planet and a more equitable society.
            </BodyText>
          </div>

          {/* Accordion Component from UI library */}
          <Accordion type="multiple" defaultValue={["commitment","education","research","environmental","financial","community"]} className="border-none bg-transparent shadow-none rounded-none divide-y divide-line">
            
            {/* Our Commitment */}
            <AccordionItem value="commitment" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                Our Commitment
              </AccordionTrigger>
              <AccordionContent className="space-y-6 px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                <p>
                  Our mission focuses on bridging the gap between clinical research and sustainable daily healthcare practices. We empower researchers with the tools and funding necessary to solve Africa&apos;s most pressing challenges.
                </p>

                {/* Staggered grid of categories */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-8 pt-2">
                  {categories.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-mist bg-paper text-brand">
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="font-ui text-caption font-semibold text-ink md:text-body">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <a
                    href="#learn-more"
                    className="group inline-flex items-center space-x-2 font-ui text-body font-semibold text-brand hover:text-meadow"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Extra Dynamic Accordion Items from Sanity */}
            {accordionsData && accordionsData.length > 0 ? (
              accordionsData.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <>
                {/* Education for Sustainable Development */}
                <AccordionItem value="education" className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    Education for Sustainable Development
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    Details regarding Education for Sustainable Development go here. We ensure our curriculum integrates global health responsibility and ecological sustainability practices.
                  </AccordionContent>
                </AccordionItem>

                {/* Research for Impact */}
                <AccordionItem value="research" className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    Research for Impact
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    Details regarding Research for Impact go here. Our research initiatives address regional healthcare issues, offering actionable, sustainable solutions for maximum clinical impact.
                  </AccordionContent>
                </AccordionItem>

                {/* Environmental Responsibility */}
                <AccordionItem value="environmental" className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    Environmental Responsibility
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    Details regarding Environmental Responsibility go here. From green laboratory operations to carbon footprint reduction programs across our research facilities.
                  </AccordionContent>
                </AccordionItem>

                {/* Community Engagement */}
                <AccordionItem value="community" className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    Community Engagement
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    Details regarding Community Engagement go here. Working directly with local and regional stakeholders to translate health research into sustainable grassroots impact.
                  </AccordionContent>
                </AccordionItem>

                {/* Financial and Institutional Sustainability */}
                <AccordionItem value="financial" className="border-b border-line py-2">
                  <AccordionTrigger iconType="chevron" className="bg-transparent px-0 py-4 font-heading text-h4 font-semibold text-ink hover:bg-transparent hover:text-brand md:text-[20px]">
                    Financial and Institutional Sustainability
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-2 pb-6 font-body text-[14px] leading-[1.6] text-slate-1 md:text-body">
                    Details regarding Financial and Institutional Sustainability go here. Securing long-term institutional growth through transparent financial models and resource efficiency.
                  </AccordionContent>
                </AccordionItem>
              </>
            )}

          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default Info;
