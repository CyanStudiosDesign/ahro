import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'researchCategory',
  title: 'Research Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'e.g., Biology, Disease, Clinical Research, Innovation',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Category',
      type: 'boolean',
      description: 'Toggle on to hide this research category from lists and tags.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      disabled: 'isDisabled',
    },
    prepare(selection) {
      const { title, disabled } = selection
      return {
        title: `${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
      }
    },
  },
})
