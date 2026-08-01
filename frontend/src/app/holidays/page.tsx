import AcademicCalendar from "@/modules/home-page/holidays/holiday";
import { client } from "@/sanity/client";
import { ACADEMIC_TERMS_QUERY } from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function HolidaysPage() {
  let termsData = null;

  try {
    termsData = await client.fetch(ACADEMIC_TERMS_QUERY).catch(() => null);
  } catch (error) {
    console.error("Failed to fetch academic terms from Sanity:", error);
  }

  return (
    <main>
      <AcademicCalendar
        termsData={termsData || undefined}
        showViewAllButton={false}
        limitToSix={false}
      />
    </main>
  );
}
