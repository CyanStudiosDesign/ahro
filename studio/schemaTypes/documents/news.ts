import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Click "Generate" to automatically build a clean URL layout from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A unique slug is required for frontend dynamic routing.'),
    }),
    defineField({
      name: 'categoryTag',
      title: 'Category Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Fellowship', value: 'fellowship' },
          { title: 'Summit', value: 'summit' },
          { title: 'Academic', value: 'academic' },
        ],
        layout: 'radio', // Displays as quick select radio buttons instead of a drop-down menu
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location Reference',
      type: 'string',
      description: 'e.g., Main Campus, London Hub, Online',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Exerpt / Short Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
  ],
  // Default sorting so studio users see the freshest news entries first
  orderings: [
    {
      title: 'Publish Date, Newest',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})