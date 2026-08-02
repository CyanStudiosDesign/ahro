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
          // validation: (Rule) => Rule.required(),
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
      name: 'therapeuticDescription',
      title: 'Therapeutic Section Intro Narrative',
      type: 'text',
      rows: 4,
      description: 'The introductory narrative/paragraph displayed at the top right of the section.',
    }),
    defineField({
      name: 'therapeuticImage',
      title: 'Therapeutic Section Side Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The large cover photo displayed on the right side of the flowing menu.'
    }),
    defineField({
      name: 'hideTherapeuticSection',
      title: 'Hide Entire Therapeutic Section',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on to hide the entire Therapeutic section from the homepage.',
    }),

    // --- 4. SCHOOLS / COURSES SECTION CONTROLS ---
    defineField({
      name: 'spotlightSchool',
      title: 'Homepage Spotlight School',
      type: 'reference',
      to: [{ type: 'school' }],
      description: 'Select the main spotlight school to show at the top of the homepage.',
    }),
    defineField({
      name: 'homepageSchools',
      title: 'Homepage Grid Schools (Exactly 3)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'school' }],
          options: {
            filter: ({ document }) => {
              const spotlightId = (document?.spotlightSchool as any)?._ref;
              if (spotlightId) {
                return {
                  filter: '!(_id in [$spotlightId])',
                  params: { spotlightId }
                };
              }
              return {};
            }
          }
        }
      ],
      description: 'Select exactly 3 schools to show in the grid below the spotlight school on the homepage.',
      validation: (Rule) => Rule.length(3).unique().error('You must select exactly 3 unique schools for the homepage grid.'),
    }),

    // --- 5. SUSTAINABILITY / INFO SECTION ---
    defineField({
      name: 'sustainabilityAccordions',
      title: 'Sustainability Accordion Items',
      type: 'array',
      description: 'Manage the accordion items in the Sustainability Info section.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'id', title: 'Value ID (e.g. commitment)', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'title', title: 'Accordion Header', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'content', title: 'Accordion Description / Text', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
          ],
        },
      ],
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