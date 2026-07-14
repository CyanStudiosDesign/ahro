import { Courses } from "@/modules/home/courses";
import { HowToApply } from "@/modules/home/HowToApply";
import { Hero } from "@/modules/home/hero";
import { Navbar } from "@/modules/layout/navbar";
import { TherapeuticAreas } from "@/modules/home/theraputic";
import ResearchAreas from "@/modules/home/research-areas/ResearchAreas";

import { client } from "@/sanity/client";
import {
  HERO_QUERY,
  RESEARCH_QUERY,
  THERAPEUTIC_QUERY,
  SCHOOLS_QUERY,
  APPLY_PAGE_QUERY,
} from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function Home() {
  let heroData = null;
  let researchData = null;
  let therapeuticData = null;
  let schoolsData = null;
  let applyData = null;

  try {
    const [hero, research, therapeutic, schools, apply] = await Promise.all([
      client.fetch(HERO_QUERY).catch(() => null),
      client.fetch(RESEARCH_QUERY).catch(() => null),
      client.fetch(THERAPEUTIC_QUERY).catch(() => null),
      client.fetch(SCHOOLS_QUERY).catch(() => null),
      client.fetch(APPLY_PAGE_QUERY).catch(() => null),
    ]);

    heroData = hero;
    researchData = research;
    therapeuticData = therapeutic;
    schoolsData = schools;
    applyData = apply;
  } catch (error) {
    console.error("Failed to fetch Sanity data, falling back to mockups:", error);
  }

  const hideResearch = researchData?.intro?.hideResearchSection ?? false;
  const hideTherapeutic = therapeuticData?.hideTherapeuticSection ?? false;

  return (
    <main>
      <Navbar />
      <Hero data={heroData || undefined} />
      
      {!hideResearch && (
        <ResearchAreas 
          intro={researchData?.intro || undefined} 
          cards={researchData?.cards || undefined} 
        />
      )}

      {!hideTherapeutic && (
        <TherapeuticAreas data={therapeuticData || undefined} />
      )}

      <Courses schools={schoolsData || undefined} />
      <HowToApply data={applyData || undefined} />
    </main>
  );
}