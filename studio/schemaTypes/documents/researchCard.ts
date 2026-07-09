import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'researchCard',
  title: 'Research Spotlight / Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Research Image',
      type: 'image',
      options: {
        hotspot: true, // Crucial for visual card balance on the UI
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Research Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'categories',
      title: 'Therapeutic Area Categories',
      type: 'array',
      description: 'Link this research to one or more therapeutic classifications.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'therapeuticArea' }], // Restricts array strictly to elements from the master list
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Select at least one category tag.'),
    }),
  ],
})