import {defineType, defineField} from 'sanity'
import TwitterPreview from '../components/TwitterPreview'

export default defineType({
  name: 'twitter',
  type: 'object',
  title: 'Twitter Embed',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Tweet ID',
    }),
  ],
  preview: {
    select: {
      id: 'id',
    },
  },
  components: {
    preview: TwitterPreview,
  },
})
