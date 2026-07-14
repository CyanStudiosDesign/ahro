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
        hotspot: true,
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
          to: [{ type: 'therapeuticArea' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Select at least one category tag.'),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Card',
      type: 'boolean',
      description: 'Toggle on to hide this research spotlight card from frontend.',
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