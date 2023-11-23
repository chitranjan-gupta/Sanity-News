import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'news',

  projectId: '8nutc7ib',
  dataset: 'production',
  server: {
    hostname: "localhost",
    port: 3333,
  },
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
