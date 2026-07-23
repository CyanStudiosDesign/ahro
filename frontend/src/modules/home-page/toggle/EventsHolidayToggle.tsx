"use client";

import React, { useState } from "react";
import AcademicCalendar from "../holidays/holiday";
import Events from "../events/Events";

interface EventsHolidayToggleProps {
  eventsData?: any[];
}

export default function EventsHolidayToggle({ eventsData }: EventsHolidayToggleProps) {
  const [activeTab, setActiveTab] = useState<"terms" | "events">("terms");

  const handleTabChange = (tab: "terms" | "events") => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-white">
      {/* Tab Switcher Buttons */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 sm:pt-20 lg:pt-24 flex gap-4">
        <button
          onClick={() => handleTabChange("terms")}
          className={`px-6 py-2.5 rounded-pill font-ui text-sm font-semibold border transition-all duration-200 cursor-pointer ${
            activeTab === "terms"
              ? "bg-forest text-white border-forest"
              : "bg-white text-slate-1 border-mist hover:bg-paper hover:text-forest"
          }`}
        >
          Terms & Holidays
        </button>
        <button
          onClick={() => handleTabChange("events")}
          className={`px-6 py-2.5 rounded-pill font-ui text-sm font-semibold border transition-all duration-200 cursor-pointer ${
            activeTab === "events"
              ? "bg-forest text-white border-forest"
              : "bg-white text-slate-1 border-mist hover:bg-paper hover:text-forest"
          }`}
        >
          Events
        </button>
      </div>

      {/* Render Active Section */}
      {activeTab === "terms" ? (
        <div className="animate-fade-in-up">
          <AcademicCalendar 
            isToggled 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
          />
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <Events data={eventsData} isToggled />
        </div>
      )}
    </div>
  );
}
