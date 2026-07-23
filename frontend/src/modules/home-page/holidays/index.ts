export interface AcademicCalendarItem {
  id: string;
  date: string;
  title: string;
  type: "TERM" | "HOLIDAY";
  subtitle?: string;
}

export const holidayData = {
  eyebrow: "ACADEMIC CALENDAR",
  title: "Terms & Holidays",
  description: "Our academic structure is designed to support rigorous research and holistic learning.",
  items: [
    {
      id: "1",
      date: "Sep 2025",
      title: "Autumn Term Begins",
      type: "TERM",
    },
    {
      id: "2",
      date: "Dec 2025",
      title: "Winter Break",
      type: "HOLIDAY",
      subtitle: "Dec 2025 – Jan 2026",
    },
    {
      id: "3",
      date: "Jan 2026",
      title: "Spring Term Begins",
      type: "TERM",
    },
    {
      id: "4",
      date: "Apr 2026",
      title: "Spring Break",
      type: "HOLIDAY",
    },
    {
      id: "5",
      date: "May 2026",
      title: "Summer Term Begins",
      type: "TERM",
    },
    {
      id: "6",
      date: "Jul 2026",
      title: "Summer Break",
      type: "HOLIDAY",
      subtitle: "Jul – Aug 2026",
    },
  ] as AcademicCalendarItem[],
  linkText: "View Full Academic Calendar",
  linkHref: "#",
};
