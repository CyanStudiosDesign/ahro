export { Courses } from "./Courses";

export type SchoolIcon = "heart" | "leaf" | "flask" | "sanity";

export const defaultSchools = [
  {
    name: "School of Nursing & Midwifery",
    label: "Nursing",
    description:
      "Advancing clinical standards in nursing and maternal care through rigorous, practice-led academic training.",
    image: "/content/A4.webp",
    icon: "heart" as SchoolIcon,
    iconUrl: null as string | null,
  },
  {
    name: "School of Clinical Nutrition",
    label: "Clinical Nutrition",
    description:
      "Exploring the links between diet, disease, and wellbeing from community nutrition to therapeutic food science.",
    image: "/content/A3.webp",
    icon: "leaf" as SchoolIcon,
    iconUrl: null as string | null,
  },
  {
    name: "School of Pharmaceutical Science",
    label: "Pharmaceutical Science",
    description:
      "From drug discovery to clinical application: a rigorous grounding in pharmacology, formulation, and medicines management.",
    image: "/content/A1.webp",
    icon: "flask" as SchoolIcon,
    iconUrl: null as string | null,
  },
] as const;

export const defaultSpotlightSchool = {
  title: "School of Infectious Diseases",
  categoryTag: "Infectious Diseases",
  description: "Infectious diseases remain one of the greatest threats to human health across Africa and the developing world. Our school brings together clinicians, epidemiologists, and laboratory scientists to investigate transmission, prevention, and treatment from malaria and tuberculosis to emerging viral threats, training specialists to respond at global scale.",
  imageUrl: "/content/A2.webp",
};
