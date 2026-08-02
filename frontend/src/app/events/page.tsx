import Events from "@/modules/home-page/events/Events";
import { client } from "@/sanity/client";
import { EVENTS_QUERY, EVENTS_PAGE_QUERY } from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function EventsPage() {
  let eventsData = null;
  let eventsIntro = null;

  try {
    const [events, eIntro] = await Promise.all([
      client.fetch(EVENTS_QUERY).catch(() => null),
      client.fetch(EVENTS_PAGE_QUERY).catch(() => null),
    ]);

    eventsData = events;
    eventsIntro = eIntro;
  } catch (error) {
    console.error("Failed to fetch events from Sanity:", error);
  }

  return (
    <main>
      <Events
        data={eventsData || undefined}
        intro={eventsIntro || undefined}
        showViewAllButton={false}
        limitToFour={false}
      />
    </main>
  );
}
