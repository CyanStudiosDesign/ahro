"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      let matched = false;
      if (tab === "events" || tab === "terms") {
        setActiveTab(tab);
        matched = true;
      } else if (window.location.hash === "#events") {
        setActiveTab("events");
        matched = true;
      } else if (window.location.hash === "#holidays" || window.location.hash === "#terms") {
        setActiveTab("terms");
        matched = true;
      }

      if (matched) {
        // Manually scroll smoothly to the section to ensure it runs correctly
        setTimeout(() => {
          const element = document.getElementById("calendar-events-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);

        // Replace history state to clean URL to exactly "/"
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, []);

  const handleTabChange = (tab: "terms" | "events") => {
    setActiveTab(tab);
  };

  return (
    <div id="calendar-events-section" className="w-full bg-white">
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
