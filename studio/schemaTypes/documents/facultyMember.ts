import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'facultyMember',
  title: 'Faculty Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Designation / Title',
      type: 'string',
      description: 'E.g. "Professor of Global Health" or "Senior Research Fellow"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department / School',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Short Biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
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
      subtitle: 'role',
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
