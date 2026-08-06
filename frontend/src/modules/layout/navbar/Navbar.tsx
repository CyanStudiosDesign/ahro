"use client";

import StaggeredMenu from "@/components/react-bits/StaggeredMenu";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet/sheet";
import CollegeApplicationForm from "@/modules/apply-sheet/Application";

const navigationItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about AHRO", link: "/about" },
  { label: "Schools", ariaLabel: "Explore AHRO schools", link: "/schools" },
  {
    label: "Faculty & Alumni",
    ariaLabel: "Meet AHRO faculty and alumni",
    link: "/affiliates",
  },
  {
    label: "Community",
    ariaLabel: "Explore AHRO community engagement",
    link: "/community",
  },
  { label: "Contact", ariaLabel: "Contact AHRO", link: "/contact" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com" },
  { label: "X", link: "https://x.com" },
  { label: "Instagram", link: "https://www.instagram.com" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 24);

      if (currentScrollY <= 24) {
        setIsNavbarVisible(true);
      } else if (delta > 4) {
        setIsNavbarVisible(false);
      } else if (delta < -4) {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  const menuButtonColor =
    isScrolled || pathname !== "/"
      ? "var(--color-ink)"
      : "var(--color-surface)";

  return (
    <Sheet open={isApplyOpen} onOpenChange={setIsApplyOpen} side="right">
      <StaggeredMenu
        position="right"
        items={navigationItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor={menuButtonColor}
        openMenuButtonColor="var(--color-ink)"
        changeMenuColorOnOpen
        colors={["var(--color-brand)", "var(--color-brand-deep)"]}
        logoUrl="/content/AHRO%20logo.png"
        accentColor="var(--color-brand)"
        actionLabel="Apply Now"
        actionOnClick={(e) => {
          e.preventDefault();
          setIsApplyOpen(true);
        }}
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        headerClassName={
          `${isMenuOpen || isNavbarVisible ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+1rem)] opacity-0"} ${
            isMenuOpen
              ? "border-transparent bg-transparent shadow-none"
              : isScrolled
                ? "border-line/60 bg-surface/80 shadow-navbar backdrop-blur-xl"
                : "border-transparent bg-transparent"
          }`
        }
        isFixed
      />

      <SheetContent className="w-full sm:w-[600px] md:rounded-l-[40px] border-l-0 p-8 bg-white text-black">
        <CollegeApplicationForm contactEmail="hello@cyanstudios.com" />
      </SheetContent>
    </Sheet>
  );
}
