import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'eventsPage',
  title: 'Events Page Controls',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionIntro',
      title: 'Page Introduction Header',
      type: 'sectionIntro',
    }),
    defineField({
      name: 'subheadingQuote',
      title: 'Introductory Subheading / Quote',
      type: 'text',
      rows: 2,
      description: 'A brief prominent quote or welcome hook sentence describing upcoming academic timelines.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Events Page Setup' }
    },
  },
})