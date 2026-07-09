import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Homepage Controls',
  type: 'document',
  fields: [
    // --- 1. HERO SECTION ---
    defineField({
      name: 'heroGroup',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Background Image Banner',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'frontalImage',
          title: 'Frontal Featured Image / Cutout',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'mainHeading',
          title: 'Main Welcome Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // --- 2. RESEARCH SECTION ---
    defineField({
      name: 'researchIntro',
      title: 'Research Section Intro Header',
      type: 'sectionIntro', // Injects our reusable Tag + Heading object cleanly
      description: 'Controls the introductory header text before the dynamic research cards loop.',
    }),

    // --- 3. THERAPEUTIC SECTION ---
    defineField({
      name: 'therapeuticIntro',
      title: 'Therapeutic Section Intro Header',
      type: 'sectionIntro', // Reuses the exact same visual structure
    }),
    defineField({
      name: 'therapeuticDescription',
      title: 'Therapeutic Section Main Narrative',
      type: 'text',
      rows: 4,
      description: 'The primary contextual description block displaying next to the therapeutic grid layout.',
    }),
    defineField({
      name: 'videoHighlightsList',
      title: 'Featured Video Highlights',
      type: 'array',
      description: 'Add and manage videos showcasing university achievements or healthcare facilities.',
      of: [{ type: 'videoHighlight' }], // Embeds our custom video structure block array
      validation: (Rule) => Rule.max(4).error('We recommend capping highlights to 4 videos for visual symmetry.'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Homepage Layout Configurations',
      }
    },
  },
})