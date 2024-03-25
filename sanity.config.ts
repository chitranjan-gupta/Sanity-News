import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {table} from '@sanity/table'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'News',

  projectId: String(process.env.SANITY_STUDIO_PROJECT_ID),
  dataset: String(process.env.SANITY_STUDIO_DATASET),
  server: {
    hostname: 'localhost',
    port: 3333,
  },
  plugins: [structureTool(), visionTool(), table(), media()],

  schema: {
    types: schemaTypes,
  },
})
