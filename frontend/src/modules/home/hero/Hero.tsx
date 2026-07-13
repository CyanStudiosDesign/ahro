"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "25+", label: "Research programmes" },
  { value: "18", label: "Partner countries" },
  { value: "120+", label: "Active studies" },
] as const;

const TEXT_PARALLAX_DISTANCE = 72;
const DOCTOR_PARALLAX_DISTANCE = 28;

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      if (reduceMotion.matches) {
        hero.style.setProperty("--hero-text-offset", "0px");
        hero.style.setProperty("--hero-doctor-offset", "0px");
        return;
      }

      const bounds = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-bounds.top / bounds.height, 0), 1);

      hero.style.setProperty(
        "--hero-text-offset",
        `${progress * -TEXT_PARALLAX_DISTANCE}px`,
      );
      hero.style.setProperty(
        "--hero-doctor-offset",
        `${progress * DOCTOR_PARALLAX_DISTANCE}px`,
      );
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reduceMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reduceMotion.removeEventListener("change", requestUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-hero overflow-hidden bg-hero text-surface"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 bg-hero-glow" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-hero-horizon bg-hero-horizon" />

      <h1 id="hero-title" className="sr-only">
        African Health Research Organisation
      </h1>

      <div
        className="pointer-events-none absolute inset-x-0 top-hero-wordmark z-0 translate-y-[var(--hero-text-offset)] text-center text-hero-wordmark font-strong leading-none tracking-hero-wordmark text-surface/55 will-change-transform"
        aria-hidden="true"
      >
        AHRO
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto h-hero-doctor max-w-hero-doctor translate-y-[var(--hero-doctor-offset)] will-change-transform">
        <Image
          className="object-contain object-bottom drop-shadow-hero-doctor"
          src="/content/A5.webp"
          alt="Healthcare researcher holding a tablet"
          fill
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 60vw, 38vw"
          priority
        />
      </div>

      <aside
        className="absolute inset-x-section bottom-5 z-20 rounded-3xl border border-surface/60 bg-surface/70 p-2 shadow-stats backdrop-blur-xl sm:inset-x-auto sm:right-stats-inset sm:bottom-stats-inset sm:w-stats"
        aria-label="AHRO statistics"
      >
        <dl className="grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              className="rounded-2xl bg-surface/70 px-2 py-3 text-center text-ink sm:px-3 sm:py-5"
              key={stat.label}
            >
              <dt className="text-stat font-strong leading-none text-brand">
                {stat.value}
              </dt>
              <dd className="mt-2 text-stat-label font-medium leading-stat-label text-copy">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
