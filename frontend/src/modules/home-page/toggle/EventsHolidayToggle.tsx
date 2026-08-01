"use client";

import React, { useState } from "react";
import type { ComponentProps } from "react";
import AcademicCalendar from "../holidays/holiday";
import Events from "../events/Events";
import { ChipButton } from "@/components/ui/design-system";

interface EventsHolidayToggleProps {
  eventsData?: ComponentProps<typeof Events>["data"];
  termsData?: ComponentProps<typeof AcademicCalendar>["termsData"];
  eventsIntro?: ComponentProps<typeof Events>["intro"];
}

export default function EventsHolidayToggle({ eventsData, termsData, eventsIntro }: EventsHolidayToggleProps) {
  const [activeTab, setActiveTab] = useState<"terms" | "events">("terms");

  const handleTabChange = (tab: "terms" | "events") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-white">
      {/* Tab Switcher Buttons */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 sm:pt-20 lg:pt-24 flex gap-4">
        <ChipButton
          onClick={() => handleTabChange("terms")}
          active={activeTab === "terms"}
          className="px-6"
        >
          Terms & Holidays
        </ChipButton>
        <ChipButton
          onClick={() => handleTabChange("events")}
          active={activeTab === "events"}
          className="px-6"
        >
          Events
        </ChipButton>
      </div>

      {/* Render Active Section */}
      {activeTab === "terms" ? (
        <div className="animate-fade-in-up">
          <AcademicCalendar 
            isToggled 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
            termsData={termsData}
          />
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <Events data={eventsData} intro={eventsIntro} isToggled />
        </div>
      )}
    </div>
  );
}
