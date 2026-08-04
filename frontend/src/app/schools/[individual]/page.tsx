import React from "react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PageProps {
  params: Promise<{
    individual: string;
  }>;
}

export default async function SchoolDetailPage({ params }: PageProps) {
  const { individual } = await params;

  // Fetch school document from Sanity matching the slug
  const schoolQuery = groq`
    *[_type == "school" && slug.current == $slug][0] {
      title,
      categoryTag,
      image,
      description
    }
  `;

  const school = await client.withConfig({ useCdn: false }).fetch(schoolQuery, { slug: individual });

  if (!school) {
    notFound();
  }

  const imageUrl = school.image ? urlFor(school.image)?.url() : null;

  return (
    <div className="w-full pt-20 bg-white text-[#14170F] antialiased">
      {/* 1. HERO SECTION */}
      <div className="px-6 md:px-12 pt-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero grid layout matching school-hero-inner */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 pb-11 items-center">
            <div className="space-y-6">
              {/* Badges row */}
              <div className="flex gap-2.5">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#14170F] text-white font-sans text-[11px] font-semibold tracking-wider uppercase">
                  {school.categoryTag || "Postgraduate"}
                </span>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-[#14170F] border border-[#E3E4DC] font-sans text-[11px] font-semibold tracking-wider uppercase">
                  On campus
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-[36px] font-bold font-heading leading-[1.15] text-[#14170F]">
                {school.title}
              </h1>

              {/* Description */}
              <p className="text-base text-[#5B5F55] leading-relaxed">
                {school.description ||
                  "Advancing the frontiers of healthcare through excellence in education, research, and scientific innovation — equipping students to understand the biological basis of health, disease, and modern therapies."}
              </p>
            </div>

            {/* Thumbnail Box */}
            <div
              className="h-[360px] rounded-[20px] bg-cover bg-center overflow-hidden shrink-0"
              style={{
                backgroundImage: imageUrl
                  ? `url(${imageUrl})`
                  : "linear-gradient(160deg, #1c2b1a, #3a5230 60%, #8fae63)",
              }}
            />
          </div>

          {/* 4-column Fact Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E3E4DC] overflow-hidden">
            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Duration
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                2 years, full-time
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Intake
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                Fall &amp; Spring
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Location
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                Accra Campus
              </b>
            </div>

            <div className="bg-white p-5 md:p-6 flex flex-col">
              <span className="block text-[11px] font-sans font-semibold tracking-widest text-[#5B5F55] uppercase mb-2">
                Students Enrolled
              </span>
              <b className="font-heading font-semibold text-lg text-[#14170F]">
                310
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BODY SECTION */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-290 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-[56px]">
            {/* Left Content Area */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#14170F] mb-4">
                About the programme
              </h2>
              <p className="text-base leading-[1.75] text-[#5B5F55] mb-5">
                The school provides a dynamic, interdisciplinary learning
                environment spanning molecular biology, genetics, microbiology,
                immunology, biochemistry, physiology, cell biology, pharmacology,
                and biotechnology — a comprehensive foundation for modern research.
              </p>
              <p className="text-base leading-[1.75] text-[#5B5F55] mb-8">
                Students work alongside active research faculty from their first
                term, with lab placements embedded directly into ongoing clinical
                and translational studies.
              </p>

              {/* Curriculum section with custom Accordion component */}
              <h2 className="text-2xl font-bold font-heading text-[#14170F] mb-4">
                Curriculum
              </h2>
              <Accordion type="single" className="border-t border-b-0 border-x-0 border-[#E3E4DC] bg-transparent rounded-none shadow-none mt-6">
                <AccordionItem value="item-1" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Molecular Biology &amp; Genetics
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Explore molecular pathways, genomic sequencing techniques, and the genetic underpinnings of cellular processes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Immunology &amp; Microbiology
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Study host defense mechanisms, immune responses to infectious pathogens, and modern microbiology methodologies.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Pharmacology &amp; Biotechnology
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Delve into chemical pharmacy, drug discovery models, and biotechnological applications in industrial healthcare.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-[#E3E4DC] py-1">
                  <AccordionTrigger className="font-heading text-[15px] font-semibold text-[#14170F] hover:text-[#358840] hover:bg-transparent px-0 py-4" iconType="chevron">
                    Applied Research Thesis
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5B5F55] text-sm pb-4">
                    Conduct a self-directed, laboratory-based research project guided by direct supervision from key faculty mentors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Apply CTA Card */}
              <div className="bg-[#14170F] text-white rounded-2xl p-7 shadow-sm">
                <h4 className="font-heading text-lg font-semibold text-white mb-2.5">
                  Ready to apply?
                </h4>
                <p className="text-xs text-[#B9BEAE] leading-relaxed mb-5">
                  Applications for the Fall 2026 intake are open through 30
                  September.
                </p>
                <a
                  href="#apply"
                  className="block text-center bg-[#358840] text-white font-sans text-xs font-semibold px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity mb-2.5"
                >
                  Start application
                </a>
                <a
                  href="#prospectus"
                  className="block text-center border border-[#4A4E40] text-white font-sans text-xs font-semibold px-5 py-3.5 rounded-full hover:bg-white/5 transition-colors"
                >
                  Download prospectus
                </a>
              </div>

              {/* Admission Requirements Card */}
              <div className="border border-[#E3E4DC] rounded-2xl p-6 bg-white">
                <h4 className="text-[12px] font-sans font-semibold tracking-wider text-[#358840] uppercase mb-3.5">
                  Admission requirements
                </h4>
                <ul className="space-y-2.5 font-sans text-xs text-[#5B5F55]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#358840]">—</span>
                    Bachelor&apos;s degree in a life science field
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#358840]">—</span>
                    Minimum 3.0 GPA or equivalent
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#358840]">—</span>
                    Two academic references
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#358840]">—</span>
                    Statement of research interest
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
