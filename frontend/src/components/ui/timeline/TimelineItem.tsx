import Image from "next/image";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  date: string;
  description?: string;
  location?: string;
  image?: string;
  isLast?: boolean;
  isFirst?: boolean;
}

export default function TimelineItem({
  title,
  date,
  description,
  location,
  image,
  isLast = false,
  isFirst = false,
}: TimelineItemProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[90px_30px_1fr_360px] lg:gap-10 text-left w-full">
      {/* Year / Date */}
      <div className={cn("hidden lg:flex justify-end pt-1", !isLast && "pb-12 lg:pb-16")}>
        <span className="text-sm font-semibold text-gray-500">
          {date}
        </span>
      </div>

      {/* Visual Indicator Layer */}
      <div className={cn("relative hidden lg:flex justify-center", !isLast && "pb-12 lg:pb-16")}>
        {/* Vertical Line */}
        {!isLast && (
          <div className="absolute top-6 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gray-300" />
        )}

        {/* Green Dot */}
        <div className="z-10 mt-2 h-3 w-3 rounded-full border-2 border-white bg-[#2F6B2D]" />
      </div>

      {/* Content Layer */}
      <div className={cn("flex flex-col justify-start", !isLast && "pb-12 lg:pb-16")}>
        {/* Mobile Timeline */}
        <div className="mb-3 flex items-center gap-3 lg:hidden">
          <div className="h-3 w-3 rounded-full bg-[#2F6B2D]" />

          <span className="text-sm font-semibold text-gray-500">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        {/* Location */}
        {location && (
          <p className="mt-1 text-sm text-gray-500">
            {location}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm font-normal text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Image */}
      {image && (
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            width={520}
            height={320}
            className="h-[220px] w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105 lg:h-[210px]"
            priority={isFirst}
          />
        </div>
      )}
    </div>
  );
}
