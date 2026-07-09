import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sectionIntro',
  title: 'Section Intro',
  type: 'object',
  fields: [
    defineField({
      name: 'tagLabel',
      title: 'Tag / Label',
      type: 'string',
      description: 'The small text above the heading (e.g., "Research Areas", "Latest News")',
      validation: (Rule) => Rule.required().max(50).error('Keep labels brief and punchy.'),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main display title for this section',
      validation: (Rule) => Rule.required().max(120),
    }),
  ],
})