import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'applyPage',
  title: 'How to Apply Controls',
  type: 'document',
  fields: [
    defineField({
      name: 'pageIntroGroup',
      title: 'Page Introduction Banner',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'heading',
          title: 'Main Page Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subheading',
          title: 'Introductory Narrative / Subheading',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'stepsTimeline',
      title: 'Application Chronological Steps',
      type: 'array',
      description: 'Create and organize the structural steps needed to fulfill application submittals.',
      of: [{ type: 'applicationStep' }], // Embeds our custom step structure block array natively
      validation: (Rule) => Rule.required().min(1).error('You must define at least one structural application step.'),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'How to Apply Page Configuration' }
    },
  },
})