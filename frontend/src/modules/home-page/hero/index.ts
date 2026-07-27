export { HeroSection as Hero, HeroSection } from "./Hero1";

export const defaultHeroData = {
  mainHeading: "African Health Research Organisation",
  frontalImageUrl: "/content/A5.webp",
  stats: [
    { value: "25+", label: "Research programmes" },
    { value: "18", label: "Partner countries" },
    { value: "120+", label: "Active studies" },
  ] as const,
};
