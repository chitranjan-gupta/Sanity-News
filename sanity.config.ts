import {defineConfig} from 'sanity'
import {structureTool} from "sanity/structure"
import {visionTool} from '@sanity/vision'
import { table } from '@sanity/table';
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'News',

  projectId: '8nutc7ib',
  dataset: 'production',
  server: {
    hostname: "localhost",
    port: 3333,
  },
  plugins: [structureTool(), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
