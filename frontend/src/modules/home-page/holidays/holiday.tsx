"use client";

import React from "react";
import Link from "next/link";
import { holidayData } from "./index";
import { BodyText, Chip, Eyebrow, SectionHeading } from "@/components/ui/design-system";

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
}

export default function AcademicCalendar({
  isToggled,
  termsData,
}: AcademicCalendarProps) {
  const { eyebrow, title, description, items: defaultItems, linkText, linkHref } = holidayData;

  const displayItems = termsData && termsData.length > 0
    ? termsData.map((term) => ({
        id: term._id,
        date: term.dateDisplay || "Upcoming",
        title: term.title,
        type: (term.category || "TERM").toUpperCase(),
        subtitle: term.description || term.status,
      }))
    : defaultItems;

  return (
    <section className={`w-full bg-white ${isToggled ? "pb-16 sm:pb-20 lg:pb-24 pt-8" : "py-16 sm:py-20 lg:py-24"} font-sans text-ink`}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        
       

        {/* Header */}
        <div className="max-w-2xl text-left mb-12">
          <Eyebrow>
            {eyebrow}
          </Eyebrow>
          <SectionHeading className="mt-3">
            {title}
          </SectionHeading>
          <BodyText className="mt-3 italic">
            &ldquo;{description}&rdquo;
          </BodyText>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 max-w-2xl">
          {displayItems.map((item) => {
            const isTerm = item.type === "TERM";
            return (
              <div key={item.id} className="flex items-baseline gap-5 sm:gap-6">
                {/* Date column */}
                <div className="w-20 flex-shrink-0 text-right font-ui text-caption font-medium text-slate-3 sm:w-24">
                  {item.date}
                </div>

                {/* Dot indicator */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <span
                    className={`w-2.5 h-2.5 rounded-full inline-block ${
                      isTerm ? "bg-forest" : "bg-lime"
                    }`}
                  />
                </div>

                {/* Content details */}
                <div className="flex-1 flex flex-col items-start">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-h5 font-medium text-ink sm:text-h4">
                      {item.title}
                    </h3>
                    <Chip className="border-0 bg-mist-light px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-forest">
                      {item.type}
                    </Chip>
                  </div>
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
        <div className="mt-12 pl-[108px] sm:pl-[128px]">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-2 font-ui text-body font-semibold text-forest transition-colors duration-200 hover:text-meadow"
          >
            {linkText} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
