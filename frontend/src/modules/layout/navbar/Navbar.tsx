"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/" },
  { label: "Research", href: "#research" },
  { label: "Programs", href: "#programs" },
  { label: "News", href: "/" },
  { label: "Events", href: "/" },
] as const;

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {isOpen ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 14 14 6m-6 0h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateNavbar = () => {
      animationFrame = 0;
      setIsScrolled(window.scrollY > 24);
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateNavbar);
      }
    };

    updateNavbar();
    window.addEventListener("scroll", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-surface/40 bg-hero-glass/80 py-2 shadow-navbar backdrop-blur-xl"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-navbar-gutter">
        <a
          className="relative block h-navbar-logo-mobile w-navbar-logo-mobile shrink-0 sm:h-navbar-logo sm:w-navbar-logo"
          href="#home"
          aria-label="AHRO home"
          onClick={closeMenu}
        >
          <Image
            className="object-contain object-left-top"
            src="/content/Logo.png"
            alt="AHRO"
            fill
            sizes="72px"
            priority
          />
        </a>

        <nav
          className="hidden rounded-full bg-surface/95 px-2 py-1 shadow-navbar backdrop-blur md:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  className="block rounded-full px-4 py-1 text-sm font-medium tracking-nav text-brand transition-colors hover:bg-tint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="hidden items-center gap-1 rounded-full border border-surface bg-brand-deep px-6 py-1 text-sm font-medium text-surface shadow-navbar transition-colors hover:bg-brand md:inline-flex"
          href="#programs"
        >
          Apply Now
          <span className="size-4">
            <ArrowUpRightIcon />
          </span>
        </a>

        <button
          className="grid size-navbar-menu place-items-center rounded-full border border-surface/60 bg-surface/85 text-brand shadow-navbar backdrop-blur md:hidden"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="size-5">
            <MenuIcon isOpen={isMenuOpen} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mx-section mt-3 overflow-hidden rounded-3xl border border-surface/50 bg-hero-glass/90 shadow-navbar backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-navbar-menu-max translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="grid gap-1 p-3">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-brand hover:bg-surface/80 focus-visible:outline-2 focus-visible:outline-brand"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="mt-1 flex items-center justify-center gap-1 rounded-2xl bg-brand-deep px-4 py-3 text-sm font-medium text-surface"
              href="#programs"
              onClick={closeMenu}
            >
              Apply Now
              <span className="size-4">
                <ArrowUpRightIcon />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
