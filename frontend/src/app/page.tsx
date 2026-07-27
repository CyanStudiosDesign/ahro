import { Courses } from "@/modules/home-page/schools";
import { HowToApply } from "@/modules/home-page/partnerships";
import { Hero } from "@/modules/home-page/hero";
import { Navbar } from "@/modules/layout/navbar";
import { TherapeuticAreas } from "@/modules/home-page/theraputic";
import ResearchAreas from "@/modules/home-page/research-areas/ResearchAreas";

import { client } from "@/sanity/client";
import {
  HERO_QUERY,
  RESEARCH_QUERY,
  THERAPEUTIC_QUERY,
  SCHOOLS_QUERY,
  APPLY_PAGE_QUERY,
  NEWS_QUERY,
  EVENTS_QUERY,
  ACADEMIC_TERMS_QUERY,
  SUSTAINABILITY_QUERY,
  SCHOOLS_PAGE_QUERY,
  NEWS_PAGE_QUERY,
  EVENTS_PAGE_QUERY,
} from "@/sanity/queries";
import News from "@/modules/home-page/news/News";
import EventsHolidayToggle from "@/modules/home-page/toggle/EventsHolidayToggle";
import Info from "@/modules/home-page/information/Info";
import TeamSection from "@/modules/faculty-alumni-page/Faculty";
import { HeroSection } from "@/modules/home-page/hero/Hero1";
import Therapeutic1 from "@/modules/home-page/theraputic/Therauptic1";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function Home() {
  let heroData = null;
  let researchData = null;
  let therapeuticData = null;
  let schoolsData = null;
  let schoolsIntro = null;
  let applyData = null;
  let newsData = null;
  let newsIntro = null;
  let eventsData = null;
  let eventsIntro = null;
  let termsData = null;
  let sustainabilityData = null;

  try {
    const [hero, research, therapeutic, schools, sIntro, apply, news, nIntro, events, eIntro, terms, sustainability] = await Promise.all([
      client.fetch(HERO_QUERY).catch(() => null),
      client.fetch(RESEARCH_QUERY).catch(() => null),
      client.fetch(THERAPEUTIC_QUERY).catch(() => null),
      client.fetch(SCHOOLS_QUERY).catch(() => null),
      client.fetch(SCHOOLS_PAGE_QUERY).catch(() => null),
      client.fetch(APPLY_PAGE_QUERY).catch(() => null),
      client.fetch(NEWS_QUERY).catch(() => null),
      client.fetch(NEWS_PAGE_QUERY).catch(() => null),
      client.fetch(EVENTS_QUERY).catch(() => null),
      client.fetch(EVENTS_PAGE_QUERY).catch(() => null),
      client.fetch(ACADEMIC_TERMS_QUERY).catch(() => null),
      client.fetch(SUSTAINABILITY_QUERY).catch(() => null),
    ]);

    heroData = hero;
    researchData = research;
    therapeuticData = therapeutic;
    schoolsData = schools;
    schoolsIntro = sIntro;
    applyData = apply;
    newsData = news;
    newsIntro = nIntro;
    eventsData = events;
    eventsIntro = eIntro;
    termsData = terms;
    sustainabilityData = sustainability;
  } catch (error) {
    console.error("Failed to fetch Sanity data, falling back to mockups:", error);
  }

  const hideResearch = researchData?.intro?.hideResearchSection ?? false;
  const hideTherapeutic = therapeuticData?.hideTherapeuticSection ?? false;


  return (
    <main>
      {/* <Navbar1 /> */}
      <HeroSection  />
      
      {!hideResearch && (
        <ResearchAreas 
          intro={researchData?.intro || undefined} 
          cards={researchData?.cards || undefined} 
        />
      )}

      <Therapeutic1 />

      

      <Courses schools={schoolsData || undefined} intro={schoolsIntro || undefined} limit={3} />

      
      <News data={newsData || undefined} intro={newsIntro || undefined} />
      <EventsHolidayToggle eventsData={eventsData || undefined} termsData={termsData || undefined} eventsIntro={eventsIntro || undefined} />

      <Info accordionsData={sustainabilityData || undefined} />

      
      <HowToApply data={applyData || undefined} />
   

    </main>
  );
}