import {defineType, defineField} from 'sanity'
import InstagramPreview from '../components/InstagramPreview'

export default defineType({
  name: 'instagram',
  type: 'object',
  title: 'Instagram Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Post URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: InstagramPreview,
  },
})
