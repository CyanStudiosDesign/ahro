// components/Events/eventsData.ts

/**
 * Type definition for a single timeline event.
 */
export interface EventItem {
  id: number | string;
  year: string;
  title: string;
  location: string;
  image: string;
}

/**
 * Timeline data.
 * Add more events here and the UI updates automatically.
 */

export const eventsData: EventItem[] = [
  {
    id: 1,
    year: "2019",
    title: "International TB Drug Conference",
    location: "Glasgow, UK",
    image: "/content/A1.webp",
  },
  {
    id: 2,
    year: "Oct 2024",
    title: "Africa Climate & One Health Summit",
    location: "Glasgow, UK",
    image: "/content/A1.webp",
  },
  {
    id: 3,
    year: "Jan 2025",
    title: "Academic Programmes — First Cohort",
    location: "Glasgow, UK & Online",
    image: "/content/A1.webp",
  },
  {
    id: 4,
    year: "2025",
    title: "AHRO Fellowship Launch",
    location: "Multi-site · Global",
    image: "/content/A1.webp",
  },
];