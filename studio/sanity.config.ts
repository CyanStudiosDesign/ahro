import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Define our singleton type names to check against
const singletonTypes = new Set(['homePage', 'schoolsPage', 'eventsPage', 'newsPage', 'applyPage'])

export default defineConfig({
  name: 'default',
  title: 'AHRO',

  projectId: '37xp2yqh',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content Desk')
          .items([
            // --- 1. CORE SINGLETON PAGES SECTION ---
            S.listItem()
              .title('Core Pages')
              .child(
                S.list()
                  .title('Core Page Controls')
                  .items([
                    S.listItem()
                      .title('Homepage Layout')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('Schools Page Intro')
                      .child(S.document().schemaType('schoolsPage').documentId('schoolsPage')),
                    S.listItem()
                      .title('Events Page Intro')
                      .child(S.document().schemaType('eventsPage').documentId('eventsPage')),
                    S.listItem()
                      .title('News Page Intro')
                      .child(S.document().schemaType('newsPage').documentId('newsPage')),
                    S.listItem()
                      .title('How to Apply Page')
                      .child(S.document().schemaType('applyPage').documentId('applyPage')),
                  ])
              ),
            S.divider(), // Visual divider line in the sidebar

            // --- 2. DYNAMIC CONTENT COLLECTIONS SECTION ---
            // Automatically lists the dynamic collections while filtering out the singleton structures
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() || '')
            ),
          ]),
    }),
    visionTool(), // Retains your development query tool
  ],

  schema: {
    types: schemaTypes,
    // Prevents the "Create New" actions for singletons globally via shortcuts or API calls
    templates: (prev) => prev.filter((template) => !singletonTypes.has(template.schemaType)),
  },

  document: {
    // Strips away layout breaking actions (like Duplicate or Delete) on our singleton document types
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : prev,
  },
})