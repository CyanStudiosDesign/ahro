import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'schoolsPage',
  title: 'Schools Page Intro',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
  ],
})
