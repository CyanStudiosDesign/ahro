import { groq } from 'next-sanity'

/**
 * 1. Hero Section Query
 * Pulls the welcome heading, background images, and key floating statistics.
 */
export const HERO_QUERY = groq`
  *[_type == "homePage"][0].heroGroup {
    mainHeading,
    backgroundImage,
    frontalImage,
    stats[] {
      value,
      label
    }
  }
`

/**
 * 2. Research Areas Query
 * Pulls the section intro headers and only active research spotlights.
 */
export const RESEARCH_QUERY = groq`
  {
    "intro": *[_type == "homePage"][0] {
      researchIntro {
        tagLabel,
        heading
      },
      hideResearchSection
    },
    "cards": *[_type == "researchCard" && isDisabled != true] {
      _id,
      title,
      description,
      image,
      categories[]-> {
        _id,
        name
      }
    }
  }
`

/**
 * 3. Therapeutic Areas Query
 * Pulls description narratives, master tags, active video highlight arrays, and section images.
 */
export const THERAPEUTIC_QUERY = groq`
  *[_type == "homePage"][0] {
    therapeuticIntro {
      tagLabel,
      heading
    },
    therapeuticDescription,
    therapeuticImage,
    hideTherapeuticSection,
    "videoHighlights": videoHighlightsList[isDisabled != true] {
      thumbnail,
      title,
      description,
      videoLink
    },
    "categories": *[_type == "therapeuticArea" && isDisabled != true].name
  }
`

/**
 * 4. Academic Schools (Courses Section) Query
 * Pulls all active schools.
 */
export const SCHOOLS_QUERY = groq`
  *[_type == "school" && isDisabled != true] {
    _id,
    title,
    categoryTag,
    icon,
    description,
    isFeatured
  }
`