import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'therapeuticArea',
  title: 'Therapeutic Areas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name',
      type: 'string',
      description: 'e.g., Drug Discovery, Vaccines, Mental Health, Oncology',
      validation: (Rule) => Rule.required().min(2).max(50),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Area',
      type: 'boolean',
      description: 'Toggle on to hide this therapeutic area from lists and tags.',
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