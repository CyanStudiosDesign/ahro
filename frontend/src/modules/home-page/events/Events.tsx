import React from "react";
import Link from "next/link";
import Timeline from "@/components/ui/timeline/Timeline";
import TimelineItem from "@/components/ui/timeline/TimelineItem";
import { eventsData } from "./index";
import { urlFor } from "@/sanity/img";
import { BodyText, Eyebrow, SectionHeading } from "@/components/ui/design-system";

interface SanityEventItem {
  _id: string;
  title: string;
  year?: string;
  location?: string;
  image?: unknown;
  description?: string;
}

interface EventsProps {
  data?: SanityEventItem[];
  isToggled?: boolean;
  intro?: {
    heading?: string;
    description?: string;
  };
  showViewAllButton?: boolean;
  limitToFour?: boolean;
}

const Events = ({ data, isToggled, intro, showViewAllButton = true, limitToFour = true }: EventsProps) => {
  const displayItems = data && data.length > 0
    ? data.map((item) => ({
        id: item._id,
        year: item.year || "Upcoming",
        title: item.title,
        location: item.location || "Glasgow, UK",
        image: item.image ? urlFor(item.image)?.url() : "/content/A1.webp",
        description: item.description,
      }))
    : eventsData.map(item => ({
        ...item,
        description: undefined, // Mock event items do not have descriptions in the mock dataset
      }));

  const visibleItems = limitToFour ? displayItems.slice(0, 4) : displayItems;

  const headingText = intro?.heading || "Events & Milestones";
  const descText = intro?.description || "From international symposiums to global summits — AHRO has been convening health leaders since 2012.";

  return (
    <section className={`bg-white ${isToggled ? "pb-16 sm:pb-20 lg:pb-28 pt-8" : "py-16 sm:py-20 lg:py-28"}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* ========================= */}
        {/* Section Header */}
        {/* ========================= */}

        <div className="max-w-2xl">
          <Eyebrow>
            Events & Conferences
          </Eyebrow>

          <SectionHeading className="mt-6">
            {headingText}
          </SectionHeading>

          <BodyText className="mt-5 max-w-xl text-body-l">
            {descText}
          </BodyText>
        </div>

        {/* ========================= */}
        {/* Timeline */}
        {/* ========================= */}

        <div className="mt-16 lg:mt-24">
          <Timeline className="space-y-0">
            {visibleItems.map((event, index) => (
              <TimelineItem
                key={event.id}
                title={event.title}
                date={event.year}
                location={event.location}
                image={event.image}
                description={event.description}
                isFirst={index === 0}
                isLast={index === visibleItems.length - 1}
              />
            ))}
          </Timeline>
        </div>

        {/* ========================= */}
        {/* View All Events */}
        {/* ========================= */}

        {showViewAllButton && (
          <div className="mt-16 lg:ml-[120px]">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 font-ui text-body font-semibold text-forest transition-colors duration-300 hover:text-meadow"
            >
              View All Events
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
