import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Timeline Date Label',
      type: 'string',
      description: 'E.g., "2019" or "Oct 2024". Displayed on the timeline path.',
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide Event',
      type: 'boolean',
      description: 'Toggle on to temporarily hide this event.',
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
