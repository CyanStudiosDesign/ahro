import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsPage',
  title: 'News Page Controls',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionIntro',
      title: 'Page Introduction Header',
      type: 'sectionIntro',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'News Page Setup' }
    },
  },
})