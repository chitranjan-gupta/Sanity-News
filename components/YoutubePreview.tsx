import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import YoutubePlayer from 'react-player/youtube'

interface PreviewYoutubeProps extends PreviewProps {
  selection?: {
    url: string
  }
}

export default function YoutubePreview(props: PreviewYoutubeProps) {
  const {selection} = props
  const url = selection?.url
  return (
    <Flex padding={4} justify={'center'}>
      {url ? <YoutubePlayer url={url} /> : <Text>Add a Youtube URL</Text>}
    </Flex>
  )
}
