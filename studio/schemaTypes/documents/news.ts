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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide News',
      type: 'boolean',
      description: 'Toggle on to temporarily hide this news article.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      disabled: 'isDisabled',
      media: 'image',
    },
    prepare(selection) {
      const { title, disabled, media } = selection
      return {
        title: `${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
        media,
      }
    },
  },
})
