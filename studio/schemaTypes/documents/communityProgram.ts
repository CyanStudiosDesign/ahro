import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'communityProgram',
  title: 'Community Engagement Programs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      description: 'E.g. "Public Outreach", "Youth Health", "Rural Support"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Program Banner / Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Metrics (Optional)',
      type: 'string',
      description: 'E.g. "10,000+ Individuals Served across 5 Regions"',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      disabled: 'isDisabled',
    },
    prepare(selection) {
      const { title, subtitle, media, disabled } = selection
      return {
        title: `${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
        subtitle: subtitle || '',
        media,
      }
    },
  },
})
