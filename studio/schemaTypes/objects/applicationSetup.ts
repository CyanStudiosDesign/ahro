import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'applicationStep',
  title: 'Application Step',
  type: 'object',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      description: 'e.g., 1, 2, 3...',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      step: 'stepNumber',
    },
    prepare(selection) {
      const { title, step } = selection
      return {
        title: `Step ${step || '?'}: ${title || 'Untitled'}`,
      }
    },
  },
})