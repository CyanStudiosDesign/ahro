import CardNav, {
  type CardNavItem,
} from "@/components/react-bits/Nav/Navbar";

const navigationItems: CardNavItem[] = [
  {
    label: "About",
    bgColor: "var(--color-brand-deep)",
    textColor: "var(--color-surface)",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home page" },
      { label: "About Us", href: "/about", ariaLabel: "Learn about AHRO" },
      { label: "Contact Us", href: "/contact", ariaLabel: "Get in touch with AHRO" },
      { label: "Sandbox", href: "/sandbox", ariaLabel: "View AHRO sandbox page" },
    ],
  },
  {
    label: "Academics & Research",
    bgColor: "var(--color-brand)",
    textColor: "var(--color-surface)",
    links: [
      {
        label: "Research Areas",
        href: "#research",
        ariaLabel: "Explore AHRO research",
      },
      {
        label: "Schools & Programs",
        href: "/schools",
        ariaLabel: "Explore AHRO schools",
      },
      {
        label: "How to Apply",
        href: "#programs",
        ariaLabel: "Apply to an AHRO program",
      },
    ],
  },
  {
    label: "Explore & Community",
    bgColor: "var(--color-copy)",
    textColor: "var(--color-surface)",
    links: [
      { label: "Faculty & Alumni", href: "/affiliates", ariaLabel: "View AHRO faculty and alumni" },
      { label: "Community & Engagement", href: "/community", ariaLabel: "View AHRO community page" },
      { label: "News & Media", href: "#news", ariaLabel: "Read AHRO news" },
      { label: "Events", href: "#events", ariaLabel: "View AHRO events" },
    ],
  },
];

export function Navbar() {
  return (
    <CardNav
      logo="/content/Logo.png"
      logoAlt="AHRO logo"
      items={navigationItems}
      baseColor="var(--color-surface)"
      menuColor="var(--color-ink)"
      buttonBgColor="var(--color-brand-deep)"
      buttonTextColor="var(--color-surface)"
      buttonLabel="Apply Now"
      buttonHref="#programs"
      ease="power3.out"
      theme="light"
    />
  );
}
