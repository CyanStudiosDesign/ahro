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
        defineField({
          name: 'stats',
          title: 'Key Statistics',
          type: 'array',
          description: 'Statistics displayed in the floating card overlay.',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'value', title: 'Value (e.g. 25+)', type: 'string', validation: (Rule) => Rule.required() },
                { name: 'label', title: 'Label (e.g. Partner countries)', type: 'string', validation: (Rule) => Rule.required() }
              ]
            }
          ],
          validation: (Rule) => Rule.max(3).error('Keep statistics to 3 items.')
        })
      ],
    }),

    // --- 2. RESEARCH SECTION ---
    defineField({
      name: 'researchIntro',
      title: 'Research Section Intro Header',
      type: 'sectionIntro',
      description: 'Controls the introductory header text before the dynamic research cards loop.',
    }),
    defineField({
      name: 'hideResearchSection',
      title: 'Hide Entire Research Section',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on to hide the entire `<ResearchAreas />` component from the homepage.',
    }),

    // --- 3. THERAPEUTIC SECTION ---
    defineField({
      name: 'therapeuticIntro',
      title: 'Therapeutic Section Intro Header',
      type: 'sectionIntro',
    }),
    defineField({
      name: 'therapeuticDescription',
      title: 'Therapeutic Section Main Narrative',
      type: 'text',
      rows: 4,
      description: 'The primary contextual description block displaying next to the therapeutic grid layout.',
    }),
    defineField({
      name: 'therapeuticImage',
      title: 'Therapeutic Section Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The featured photo shown next to the therapeutic tags list.'
    }),
    defineField({
      name: 'videoHighlightsList',
      title: 'Featured Video Highlights',
      type: 'array',
      description: 'Add and manage videos showcasing university achievements or healthcare facilities.',
      of: [{ type: 'videoHighlight' }],
      validation: (Rule) => Rule.max(4).error('We recommend capping highlights to 4 videos for visual symmetry.'),
    }),
    defineField({
      name: 'hideTherapeuticSection',
      title: 'Hide Entire Therapeutic Section',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on to hide the entire `<TherapeuticAreas />` component.',
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