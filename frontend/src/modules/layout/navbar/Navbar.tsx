import CardNav, {
  type CardNavItem,
} from "@/components/react-bits/Nav/Navbar";

const navigationItems: CardNavItem[] = [
  {
    label: "About",
    bgColor: "var(--color-brand-deep)",
    textColor: "var(--color-surface)",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to home" },
      { label: "About Us", href: "/about", ariaLabel: "Learn about AHRO" },
      { label: "Contact Us", href: "/contact", ariaLabel: "Get in touch with AHRO" },
    ],
  },
  {
    label: "Research",
    bgColor: "var(--color-brand)",
    textColor: "var(--color-surface)",
    links: [
      {
        label: "Research",
        href: "#research",
        ariaLabel: "Explore AHRO research",
      },
      {
        label: "Programs",
        href: "#programs",
        ariaLabel: "Explore AHRO programs",
      },
    ],
  },
  {
    label: "Explore",
    bgColor: "var(--color-copy)",
    textColor: "var(--color-surface)",
    links: [
      { label: "News", href: "/", ariaLabel: "Read AHRO news" },
      { label: "Events", href: "/", ariaLabel: "View AHRO events" },
      {
        label: "Apply Now",
        href: "#programs",
        ariaLabel: "Apply to an AHRO program",
      },
      { label: "Faculty and Alumni", href: "/crew", ariaLabel: "View AHRO faculty and alumni" },
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
