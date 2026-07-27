import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'academicTerm',
  title: 'Terms & Holidays',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Term or Holiday Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Academic Term', value: 'Term' },
          { title: 'Holiday / Recess', value: 'Holiday' },
          { title: 'Exam Period', value: 'Exam' },
        ],
      },
      initialValue: 'Term',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'dateDisplay',
      title: 'Date Display Label',
      type: 'string',
      description: 'E.g. "Sep 15 - Dec 20, 2024"',
    }),
    defineField({
      name: 'description',
      title: 'Description / Notes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'status',
      title: 'Status Label',
      type: 'string',
      description: 'E.g. "Upcoming", "Active", "Completed"',
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
      subtitle: 'dateDisplay',
      disabled: 'isDisabled',
    },
    prepare(selection) {
      const { title, subtitle, disabled } = selection
      return {
        title: `${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
        subtitle: subtitle || '',
      }
    },
  },
})
