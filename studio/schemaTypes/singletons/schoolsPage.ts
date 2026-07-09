import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'schoolsPage',
  title: 'Schools Page Controls',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionIntro',
      title: 'Page Introduction Header',
      type: 'sectionIntro', // Reuses the custom Tag + Heading combination
      description: 'Manages the title configuration displaying above the school grids.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Schools Page Setup' }
    },
  },
})