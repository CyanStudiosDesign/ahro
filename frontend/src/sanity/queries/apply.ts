import { groq } from 'next-sanity'

/**
 * 5. How to Apply Page Query
 * Pulls the application landing banner texts and the step timeline sorted chronologically.
 */
export const APPLY_PAGE_QUERY = groq`
  *[_type == "applyPage"][0] {
    pageIntroGroup {
      heading,
      subheading
    },
    "steps": stepsTimeline[isDisabled != true] | order(stepNumber asc) {
      stepNumber,
      title,
      description
    }
  }
`