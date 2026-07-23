import Link from "next/link";
import Timeline from "@/components/ui/timeline/Timeline";
import TimelineItem from "@/components/ui/timeline/TimelineItem";
import { eventsData } from "./index";
import { urlFor } from "@/sanity/img";

interface SanityEventItem {
  _id: string;
  title: string;
  year?: string;
  location?: string;
  image?: any;
  description?: string;
}

interface EventsProps {
  data?: SanityEventItem[];
  isToggled?: boolean;
}

const Events = ({ data, isToggled }: EventsProps) => {
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

  return (
    <section className={`bg-white ${isToggled ? "pb-16 sm:pb-20 lg:pb-28 pt-8" : "py-16 sm:py-20 lg:py-28"}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
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

        <div className="mt-16 lg:mt-24">
          <Timeline className="space-y-0">
            {displayItems.map((event, index) => (
              <TimelineItem
                key={event.id}
                title={event.title}
                date={event.year}
                location={event.location}
                image={event.image}
                description={event.description}
                isFirst={index === 0}
                isLast={index === displayItems.length - 1}
              />
            ))}
          </Timeline>
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