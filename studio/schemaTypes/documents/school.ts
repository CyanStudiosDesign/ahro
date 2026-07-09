import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'school',
  title: 'Academic Schools',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'School Title',
      type: 'string',
      description: 'e.g., School of Medicine, School of Data Sciences',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'categoryTag',
      title: 'Category Tag',
      type: 'string',
      description: 'e.g., Research & Programmes, Undergraduate, Postgraduate',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'icon',
      title: 'School Icon / Vector',
      type: 'image',
      description: 'Upload a clean SVG or PNG graphic for the card interface.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured School',
      type: 'boolean',
      description: 'Toggle on to highlight or promote this school on the main listing interface.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'categoryTag',
      media: 'icon',
    },
  },
})