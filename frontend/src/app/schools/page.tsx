import { Courses } from "@/modules/home-page/schools";

import { client } from "@/sanity/client";
import { SCHOOLS_QUERY } from "@/sanity/queries";

export const revalidate = 10; // revalidate page every 10 seconds for dynamic content updates

export default async function Home() {
  let schoolsData = null;

  try {
    const [schools] = await Promise.all([
      client.fetch(SCHOOLS_QUERY).catch(() => null),
    ]);

    schoolsData = schools;
  } catch (error) {
    console.error(
      "Failed to fetch Sanity data, falling back to mockups:",
      error,
    );
  }

  return (
    <main>
      <Courses schools={schoolsData || undefined} showViewAllButton={false} />
    </main>
  );
}
