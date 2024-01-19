import {defineType, defineField} from 'sanity'
import YoutubePreview from '../components/YoutubePreview'

export default defineType({
  name: 'youtube',
  type: 'object',
  title: 'Youtube Embed',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Youtube Video URL',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YoutubePreview,
  },
})
