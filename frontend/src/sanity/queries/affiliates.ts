import { groq } from 'next-sanity'

/**
 * Faculty and Alumni Query
 */
export const FACULTY_QUERY = groq`
  *[_type == "facultyMember" && isDisabled != true] | order(order asc) {
    _id,
    name,
    role,
    department,
    image,
    bio,
    email
  }
`

export const ALUMNI_QUERY = groq`
  *[_type == "alumniMember" && isDisabled != true] | order(order asc) {
    _id,
    name,
    program,
    currentRole,
    image,
    testimonial,
    graduationYear
  }
`
