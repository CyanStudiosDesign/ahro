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

export const Info: React.FC = () => {
  const categories = [
    { icon: GraduationCap, label: "Education" },
    { icon: FlaskConical, label: "Research" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Scale, label: "Governance" },
    { icon: Leaf, label: "Environment" },
    { icon: Handshake, label: "Partnerships" },
  ];

  return (
    <section className="bg-canvas py-16 px-6 md:py-24 md:px-12 lg:px-24 text-ink font-sans">
      <div className="max-w-wide mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Image & Quote Card */}
        <div className="lg:col-span-5 relative w-full h-162.5 rounded-3xl overflow-hidden shadow-course animate-fade-in-up">
          <Image
            src="/content/A5.webp"
            alt="Lab Research Sustainability"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Green Color Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1b3d2b]/95 via-[#1b3d2b]/50 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 text-white z-10">
            <Quote className="w-10 h-10 mb-5 text-white fill-current opacity-90" />
            <blockquote className="text-xl md:text-2xl font-medium leading-snug mb-8">
              Sustainability is a fundamental principle that underpins the mission, strategy, and operations of AHRO Institute.
            </blockquote>
            <div>
              <h4 className="font-bold text-base tracking-wide">
                Institutional Charter
              </h4>
              <p className="text-xs uppercase tracking-widest text-emerald-300/80 mt-1.5 font-semibold">
                SUSTAINABILITY FRAMEWORK 2024
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Content & Accordions */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up animation-delay-100">
          {/* Main Heading & Intro */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
              Sustainability at <br />
              <span className="text-brand">AHRO Institute</span>
            </h2>
            <p className="text-muted leading-relaxed text-base">
              We are committed to fostering a culture of responsibility, ensuring that our research, education, and institutional practices contribute to a healthier planet and a more equitable society.
            </p>
          </div>

          {/* Accordion Component from UI library */}
          <Accordion type="single" defaultValue="commitment" className="border-none bg-transparent shadow-none rounded-none divide-y divide-line">
            
            {/* Our Commitment */}
            <AccordionItem value="commitment" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Our Commitment
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed space-y-6">
                <p>
                  Our mission focuses on bridging the gap between clinical research and sustainable daily healthcare practices. We empower researchers with the tools and funding necessary to solve Africa&apos;s most pressing challenges.
                </p>

                {/* Staggered grid of categories */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-8 pt-2">
                  {categories.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-full bg-[#f0f7f0] border border-[#e2efe2] flex items-center justify-center text-brand">
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-ink/90">
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
                    className="inline-flex items-center space-x-2 text-sm md:text-base font-bold text-brand hover:text-brand-deep group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Education for Sustainable Development */}
            <AccordionItem value="education" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Education for Sustainable Development
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed">
                Details regarding Education for Sustainable Development go here. We ensure our curriculum integrates global health responsibility and ecological sustainability practices.
              </AccordionContent>
            </AccordionItem>

            {/* Research for Impact */}
            <AccordionItem value="research" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Research for Impact
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed">
                Details regarding Research for Impact go here. Our research initiatives address regional healthcare issues, offering actionable, sustainable solutions for maximum clinical impact.
              </AccordionContent>
            </AccordionItem>

            {/* Environmental Responsibility */}
            <AccordionItem value="environmental" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Environmental Responsibility
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed">
                Details regarding Environmental Responsibility go here. From green laboratory operations to carbon footprint reduction programs across our research facilities.
              </AccordionContent>
            </AccordionItem>

            {/* Community Engagement */}
            <AccordionItem value="community" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Community Engagement
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed">
                Details regarding Community Engagement go here. Working directly with local and regional stakeholders to translate health research into sustainable grassroots impact.
              </AccordionContent>
            </AccordionItem>

            {/* Financial and Institutional Sustainability */}
            <AccordionItem value="financial" className="border-b border-line py-2">
              <AccordionTrigger iconType="chevron" className="text-lg md:text-xl font-bold text-ink hover:text-brand bg-transparent hover:bg-transparent py-4 px-0">
                Financial and Institutional Sustainability
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-6 pt-2 text-muted text-sm md:text-base leading-relaxed">
                Details regarding Financial and Institutional Sustainability go here. Securing long-term institutional growth through transparent financial models and resource efficiency.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default Info;