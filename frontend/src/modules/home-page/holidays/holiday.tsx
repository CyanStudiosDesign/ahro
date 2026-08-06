"use client";

import React from "react";
import Link from "next/link";
import { holidayData } from "./index";
import {
  BodyText,
  Chip,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/design-system";
import SplitText from "@/components/react-bits/SplitText";

interface SanityTermItem {
  _id: string;
  title: string;
  category?: string;
  dateDisplay?: string;
  description?: string;
  status?: string;
}

interface AcademicCalendarProps {
  isToggled?: boolean;
  activeTab?: "terms" | "events";
  onTabChange?: (tab: "terms" | "events") => void;
  termsData?: SanityTermItem[];
  showViewAllButton?: boolean;
  limitToSix?: boolean;
}

function formatShortDateRange(dateStr: string): string {
  const yearRegex = /\b20\d{2}\b/g;
  const years = dateStr.match(yearRegex);

  if (years && years.length > 1) {
    const firstYear = years[0];
    const secondYear = years[1];
    if (firstYear !== secondYear) {
      const commaYearRegex = new RegExp(
        `,\\s*${firstYear}\\b|\\s*${firstYear}\\b`,
      );
      return dateStr.replace(commaYearRegex, "");
    }
  }
  return dateStr;
}

export default function AcademicCalendar({
  isToggled,
  termsData,
  showViewAllButton = true,
  limitToSix = true,
}: AcademicCalendarProps) {
  const {
    eyebrow,
    title,
    description,
    items: defaultItems,
    linkText,
    linkHref,
  } = holidayData;

  const displayItems =
    termsData && termsData.length > 0
      ? termsData.map((term) => ({
          id: term._id,
          date: formatShortDateRange(term.dateDisplay || "Upcoming"),
          title: term.title,
          type: (term.category || "TERM").toUpperCase(),
          subtitle: term.description || term.status,
        }))
      : defaultItems.map((item) => ({
          ...item,
          date: formatShortDateRange(item.date),
        }));

  const visibleItems = limitToSix ? displayItems.slice(0, 6) : displayItems;

  return (
    <section
      className={`w-full bg-white ${isToggled ? "pb-16 sm:pb-20 lg:pb-24 pt-8" : "py-16 sm:py-20 lg:py-24"} font-sans text-ink`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className=" text-left mb-12">
          <div className="w-full flex justify-between items-center">
            <Eyebrow>{eyebrow}</Eyebrow>

            {!showViewAllButton && (
              <Link
                href="/?tab=terms#calendar-events-section"
                className="inline-flex items-center gap-2 font-ui text-body font-semibold text-forest transition-colors duration-200 hover:text-meadow"
              >
                Back to Homepage <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>

          <SectionHeading className="mt-3">{title}</SectionHeading>
          <BodyText className="mt-3 italic">
            &ldquo;{description}&rdquo;
          </BodyText>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-2xl">
          {visibleItems.map((item, index) => {
            const isTerm = item.type === "TERM";
            const totalItems = visibleItems.length;
            const opacity = totalItems > 1 ? 0.2 + (0.8 * (index / (totalItems - 1))) : 1.0;

            return (
              <div key={item.id} className="flex items-baseline gap-5 sm:gap-6">
                {/* Date column */}
                <div className="w-20 sm:w-32 flex-shrink-0 text-left font-ui text-caption font-medium text-slate-3 whitespace-nowrap">
                  {item.date}
                </div>

                {/* Dot indicator */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block bg-forest"
                    style={{ opacity }}
                  />
                </div>

                {/* Content details */}
                <div className="flex-1 flex flex-col items-start">
                  <SplitText
                    as="h3"
                    className="font-heading text-h5 font-medium text-ink sm:text-h4"
                  >
                    {item.title}
                  </SplitText>

                  <span className="border-0  py-1 text-eyebrow font-semibold uppercase text-forest">
                    {item.type}
                  </span>

                  {item.subtitle && (
                    <span className="mt-1 font-ui text-caption text-slate-3">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        {showViewAllButton && (
          <div className="mt-12 pl-[108px] sm:pl-[128px]">
            <Link
              href="/holidays"
              className="inline-flex items-center gap-2 font-ui text-body font-semibold text-forest transition-colors duration-200 hover:text-meadow"
            >
              {linkText} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
