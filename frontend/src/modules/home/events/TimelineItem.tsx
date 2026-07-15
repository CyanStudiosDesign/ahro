// components/Events/TimelineItem.tsx

import Image from "next/image";
import { EventItem } from "./index";

interface TimelineItemProps {
  event: EventItem;
  isLast: boolean;
}

/**
 * Reusable Timeline Item
 *
 * Desktop:
 * Year | Timeline | Content | Image
 *
 * Mobile:
 * Timeline | Content
 *                 Image
 */

const TimelineItem = ({ event, isLast }: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[90px_30px_1fr_360px] lg:gap-10">
      {/* ========================= */}
      {/* Year */}
      {/* ========================= */}
      <div className="hidden lg:flex justify-end pt-1">
        <span className="text-sm font-semibold text-gray-500">
          {event.year}
        </span>
      </div>

      {/* ========================= */}
      {/* Timeline */}
      {/* ========================= */}
      <div className="relative hidden lg:flex justify-center">
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-3 left-1/2 h-full w-px -translate-x-1/2 bg-gray-300" />
        )}

        {/* Green Dot */}
        <div className="z-10 mt-2 h-3 w-3 rounded-full border-2 border-white bg-[#2F6B2D]" />
      </div>

      {/* ========================= */}
      {/* Content */}
      {/* ========================= */}
      <div className="flex flex-col justify-start">
        {/* Mobile Timeline */}
        <div className="mb-3 flex items-center gap-3 lg:hidden">
          <div className="h-3 w-3 rounded-full bg-[#2F6B2D]" />

          <span className="text-sm font-semibold text-gray-500">
            {event.year}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="text-xl font-semibold leading-snug text-gray-900">
          {event.title}
        </h3>

        {/* Location */}
        <p className="mt-1 text-sm text-gray-500">
          {event.location}
        </p>
      </div>

      {/* ========================= */}
      {/* Image */}
      {/* ========================= */}
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={event.image}
          alt={event.title}
          width={520}
          height={320}
          className="
            h-[220px]
            w-full
            rounded-2xl
            object-cover
            transition-transform
            duration-500
            hover:scale-105
            lg:h-[210px]
          "
          priority={event.id === 1}
        />
      </div>
    </div>
  );
};

export default TimelineItem;