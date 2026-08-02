import { Courses } from "@/modules/home-page/schools";

import { client } from "@/sanity/client";
import { SCHOOLS_QUERY, SCHOOLS_PAGE_QUERY } from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function Home() {
  let schoolsData = null;
  let schoolsIntro = null;

  try {
    const [schools, sIntro] = await Promise.all([
      client.fetch(SCHOOLS_QUERY).catch(() => null),
      client.fetch(SCHOOLS_PAGE_QUERY).catch(() => null),
    ]);

    schoolsData = schools;
    schoolsIntro = sIntro;
  } catch (error) {
    console.error(
      "Failed to fetch Sanity data, falling back to mockups:",
      error,
    );
  }

  return (
    <main>
      <Courses
        schools={schoolsData?.list || undefined}
        intro={schoolsIntro || undefined}
        showViewAllButton={false}
        hideMainCard={schoolsData?.controls?.hideMainSchoolCard}
        limitToThree={false}
      />
    </main>
  );
}
