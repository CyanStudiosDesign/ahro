"use client";

import React from "react";
import Link from "next/link";
import { holidayData } from "./index";

interface AcademicCalendarProps {
  isToggled?: boolean;
  activeTab?: "terms" | "events";
  onTabChange?: (tab: "terms" | "events") => void;
}

export default function AcademicCalendar({
  isToggled,
  activeTab = "terms",
  onTabChange,
}: AcademicCalendarProps) {
  const { eyebrow, title, description, items, linkText, linkHref } = holidayData;

  return (
    <section className={`w-full bg-white ${isToggled ? "pb-16 sm:pb-20 lg:pb-24 pt-8" : "py-16 sm:py-20 lg:py-24"} font-sans text-ink`}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        
       

        {/* Header */}
        <div className="max-w-2xl text-left mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.1em] uppercase text-[#3F6A35]">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-3 text-base italic text-slate-500 font-serif">
            &ldquo;{description}&rdquo;
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-2xl">
          {items.map((item) => {
            const isTerm = item.type === "TERM";
            return (
              <div key={item.id} className="flex items-baseline gap-5 sm:gap-6">
                {/* Date column */}
                <div className="w-20 sm:w-24 text-right flex-shrink-0 text-sm font-medium text-slate-400">
                  {item.date}
                </div>

                {/* Dot indicator */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <span
                    className={`w-2.5 h-2.5 rounded-full inline-block ${
                      isTerm ? "bg-[#2D4A27]" : "bg-[#9EC186]"
                    }`}
                  />
                </div>

                {/* Content details */}
                <div className="flex-1 flex flex-col items-start">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider rounded-full uppercase bg-[#EAEFE9] text-[#2D4A27]">
                      {item.type}
                    </span>
                  </div>
                  {item.subtitle && (
                    <span className="text-xs sm:text-sm text-slate-400 mt-1">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 pl-[108px] sm:pl-[128px]">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A27] hover:text-[#3F6A35] transition-colors duration-200"
          >
            {linkText} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}