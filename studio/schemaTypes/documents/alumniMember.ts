import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'alumniMember',
  title: 'Alumni Spotlights',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'program',
      title: 'Program / Degree Graduated',
      type: 'string',
      description: 'E.g. "MSc Infectious Diseases (Class of 2021)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'currentRole',
      title: 'Current Role & Institution',
      type: 'string',
      description: 'E.g. "Epidemiologist at WHO"',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'testimonial',
      title: 'Quote / Testimonial',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'graduationYear',
      title: 'Graduation Year',
      type: 'string',
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
      title: 'name',
      subtitle: 'program',
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
