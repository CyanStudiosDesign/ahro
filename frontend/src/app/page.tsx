import { Courses } from "@/modules/home/courses";
import { HowToApply } from "@/modules/home/HowToApply";
import { Hero } from "@/modules/home/hero";
import { Navbar } from "@/modules/layout/navbar";
import { TherapeuticAreas } from "@/modules/home/theraputic";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TherapeuticAreas />
      <Courses />
      <HowToApply />
    </main>
  );
}
