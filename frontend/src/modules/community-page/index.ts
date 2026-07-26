export interface ApproachData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  quoteText: string;
}

export interface InitiativeButton {
  label: string;
  variant: "primary" | "outline";
  href?: string;
}

export interface InitiativeCard {
  id: string;
  title: string;
  description: string;
  icon?: "plus-circle" | "megaphone" | "smile" | "microscope" | "globe" | "wrench";
  image?: string;
  imageAlt?: string;
  isWide?: boolean;
  isDark?: boolean;
  buttons?: InitiativeButton[];
}

export const communityApproachData: ApproachData = {
  badge: "OUR APPROACH",
  title: "Working Alongside",
  titleHighlight: "Communities",
  description:
    "Community engagement is central to the AHRO Institute's mission. We do not just conduct research for communities; we work with them. By building strong partnerships with local leaders, governments, and civil society organizations, we ensure our work addresses real-world challenges and respects cultural contexts.",
  heroImage:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
  heroImageAlt: "Outdoor community school",
  quoteText:
    "Our participatory approach empowers individuals to take an active role in their health and well-being, transforming research findings into actionable, community-driven solutions that foster long-term resilience and equitable access to care.",
};

export const communityInitiativesHeader = {
  eyebrow: "OUR PROGRAMS",
  title: "Our Community Engagement Initiatives",
  description:
    "We operate a diverse portfolio of programs designed to address multifaceted health challenges at the grassroots level.",
};

export const communityInitiativesData: InitiativeCard[] = [
  {
    id: "health-education",
    title: "Health Education & Prevention",
    description:
      "Delivering accessible, culturally sensitive information to empower individuals to make informed decisions about their health & lifestyle.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Health Education",
    isWide: true,
  },
  {
    id: "screening-outreach",
    title: "Screening & Outreach",
    description:
      "Mobile clinics and community drives providing essential health checks and early detection services.",
    icon: "plus-circle",
  },
  {
    id: "public-awareness",
    title: "Public Awareness",
    description:
      "Large-scale campaigns tackling stigma and raising profile of pressing public health issues.",
    icon: "megaphone",
  },
  {
    id: "school-youth",
    title: "School & Youth",
    description:
      "Educational programs fostering healthy habits and scientific curiosity in the next generation.",
    icon: "smile",
  },
  {
    id: "community-research",
    title: "Community Research",
    description:
      "Participatory research projects where community members are co-investigators, not just subjects.",
    icon: "microscope",
  },
  {
    id: "one-health",
    title: "One Health Initiatives",
    description:
      "Programs addressing the interconnected health of humans, animals, and shared ecosystems.",
    icon: "globe",
  },
  {
    id: "capacity-building",
    title: "Capacity-Building",
    description:
      "Workshops training local health workers and leaders to strengthen community health infrastructure.",
    icon: "wrench",
  },
  {
    id: "get-involved",
    title: "Get Involved",
    description: "",
    isDark: true,
    buttons: [
      { label: "Volunteer", variant: "primary" },
      { label: "Partner", variant: "outline" },
    ],
  },
];

export { default as CommunityEngagement } from "./Community";
