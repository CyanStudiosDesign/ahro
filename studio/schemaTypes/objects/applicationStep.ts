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
      description: 'e.g., 1, 2, 3',
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
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Step',
      type: 'boolean',
      description: 'Toggle on to temporarily hide this step in the timeline.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      step: 'stepNumber',
      disabled: 'isDisabled',
    },
    prepare(selection) {
      const { title, step, disabled } = selection
      return {
        title: `Step ${step || '?'}: ${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
      }
    },
  },
})
