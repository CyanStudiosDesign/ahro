import React from 'react'
import FacultySection from '@/modules/faculty-alumni-page/Faculty'
import AlumniSection from '@/modules/faculty-alumni-page/Alumni'
import { client } from '@/sanity/client'
import { FACULTY_QUERY, ALUMNI_QUERY } from '@/sanity/queries'

export const revalidate = 10;

async function Affiliates() {
  let facultyData = null;
  let alumniData = null;

  try {
    const [faculty, alumni] = await Promise.all([
      client.fetch(FACULTY_QUERY).catch(() => null),
      client.fetch(ALUMNI_QUERY).catch(() => null),
    ]);
    facultyData = faculty;
    alumniData = alumni;
  } catch (error) {
    console.error("Failed to fetch Affiliates Sanity data:", error);
  }

  return (
    <main className="pt-20 sm:pt-24">
      <FacultySection data={facultyData || undefined} />
      <AlumniSection data={alumniData || undefined} />
    </main>
  )
}

export default Affiliates
