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
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})