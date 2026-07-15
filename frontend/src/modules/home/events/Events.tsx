// components/Events/Events.tsx

import Link from "next/link";
import TimelineItem from "./TimelineItem";
import { eventsData } from "./index";

/**
 * Events & Milestones Section
 *
 * - Fully responsive
 * - Data-driven
 * - Uses reusable TimelineItem component
 * - Matches the Figma layout
 */

const Events = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ========================= */}
        {/* Section Header */}
        {/* ========================= */}

        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-[#F3F8EE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4B6B2B]">
            Events & Conferences
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Events & Milestones
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            From international symposiums to global summits — AHRO has been
            convening health leaders since 2012.&quot;
          </p>
        </div>

        {/* ========================= */}
        {/* Timeline */}
        {/* ========================= */}

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-24">
          {eventsData.map((event, index) => (
            <TimelineItem
              key={event.id}
              event={event}
              isLast={index === eventsData.length - 1}
            />
          ))}
        </div>

        {/* ========================= */}
        {/* View All Events */}
        {/* ========================= */}

        <div className="mt-16 lg:ml-[120px]">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-lg font-medium text-[#3F4A7D] transition-colors duration-300 hover:text-[#2F6B2D]"
          >
            View All Events
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;