import { groq } from 'next-sanity'

/**
 * Community Engagement Query
 */
export const COMMUNITY_QUERY = groq`
  *[_type == "communityProgram" && isDisabled != true] | order(order asc) {
    _id,
    title,
    category,
    description,
    image,
    impactStats
  }
`
