
"use client";

import React, { useState } from 'react';

interface Area {
  id: string;
  name: string;
}

const areas: Area[] = [
  { id: '1', name: 'MOJAVE' },
  { id: '2', name: 'SONOMA' },
  { id: '3', name: 'MONTEREY' },
  { id: '4', name: 'SEQUOIA' },
  { id: '5', name: 'MOJAVE' },
  { id: '6', name: 'SONOMA' },
  { id: '7', name: 'MONTEREY' },
  { id: '8', name: 'SEQUOIA' },
];

export const Therapeutic1: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('2'); // Default selected 'SONOMA'

  return (
    <div className="w-full max-w-wide mx-auto h-screen max-h-screen bg-surface px-6 py-6 md:px-12 md:py-8 flex flex-col justify-between overflow-hidden font-sans">
      {/* Top Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start shrink-0">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold tracking-tight text-ink">
            Therapeutic <span className="text-brand">Areas</span>
          </h2>
        </div>
        <div className="flex items-end">
          <h4 className="text-copy text-sm md:text-base leading-relaxed max-w-md">
            Our Centre is a resource for researchers, academic professionals,
            students, and organizations working in the field of global health.
          </h4>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center flex-1 min-h-0 py-4">
        {/* Interactive List Column */}
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-2.5 w-full h-full overflow-y-auto max-h-full py-2">
          {areas.map((area) => {
            const isActive = area.id === activeId;

            if (isActive) {
              return (
                <div
                  key={area.id}
                  onClick={() => setActiveId(area.id)}
                  className="w-full max-w-lg bg-ink text-surface py-2.5 px-6 rounded-md flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 transform scale-[1.02]"
                >
                  {/* Title */}
                  <span className="font-bold tracking-widest text-base md:text-4xl ">
                    {area.name}
                  </span>
                </div>
              );
            }

            return (
              <button
                key={area.id}
                onClick={() => setActiveId(area.id)}
                className="w-full max-w-md text-ink font-bold text-base md:text-4xl tracking-widest py-1 md:py-4 hover:text-brand transition-colors duration-200"
              >
                {area.name}
              </button>
            );
          })}
        </div>

        {/* Right Image Display */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-full max-h-[70vh] min-h-[250px] aspect-[4/3] md:aspect-auto">
          <img
            src="/content/A4.webp"
            alt="Global health field work"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay accent circle */}
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-surface/80 rounded-full blur-xs hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Therapeutic1;