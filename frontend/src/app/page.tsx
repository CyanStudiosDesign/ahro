import { Courses } from "@/modules/home/courses";
import { HowToApply } from "@/modules/home/HowToApply";
import { Hero } from "@/modules/home/hero";
import { Navbar } from "@/modules/layout/navbar";
import { TherapeuticAreas } from "@/modules/home/theraputic";
import ResearchAreas from "@/modules/home/research-areas/ResearchAreas";
import News from "@/modules/home/news/News";
import Events from "@/modules/home/events/Events";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ResearchAreas />
      <TherapeuticAreas />
      <Courses />
      <News />
      <Events />
      <HowToApply />

    </main>
  );
}
