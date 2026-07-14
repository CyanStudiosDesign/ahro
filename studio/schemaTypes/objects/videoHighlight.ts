import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'videoHighlight',
  title: 'Video Highlight',
  type: 'object',
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Video Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videoLink',
      title: 'Video Link / URL',
      type: 'url',
      description: 'URL of the video (YouTube, Vimeo, or CDN link)',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Video',
      type: 'boolean',
      description: 'Toggle on to temporarily hide this video highlight.',
      initialValue: false,
    }),
  ],
})