import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'school',
  title: 'Academic Schools',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'School Title',
      type: 'string',
      description: 'e.g., School of Medicine, School of Data Sciences',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryTag',
      title: 'Category Tag',
      type: 'string',
      description: 'e.g., Research & Programmes, Undergraduate, Postgraduate',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'icon',
      title: 'School Icon Name (Lucide)',
      type: 'string',
      description: 'The name of a Lucide icon (e.g. HeartPulse, Stethoscope, Dna, Brain, Pill, Globe, Smile). Case-sensitive.',
    }),
    defineField({
      name: 'image',
      title: 'Card Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.required().custom((text) => {
          if (!text) return true;
          const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
          return wordCount <= 500 ? true : 'Description must be 500 words or less.';
        }),
    }),
    defineField({
      name: 'isDisabled',
      title: 'Disable / Hide School',
      type: 'boolean',
      description: 'Toggle on to hide this school from listing views.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'categoryTag',
      media: 'icon',
      disabled: 'isDisabled',
    },
    prepare(selection) {
      const { title, subtitle, media, disabled } = selection
      return {
        title: `${title || 'Untitled'}${disabled ? ' (DISABLED)' : ''}`,
        subtitle,
        media,
      }
    },
  },
})