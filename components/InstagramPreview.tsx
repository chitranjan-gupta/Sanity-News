import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'

interface PreviewInstagramProps extends PreviewProps {
  selection?: {
    url: string
  }
}

export default function InstagramPreview(props: PreviewInstagramProps) {
  const {selection} = props
  const url = selection?.url
  return (
    <Flex padding={4} justify={'center'}>
      {url ? <Text>Added Post</Text> : <Text>Add a Post</Text>}
    </Flex>
  )
}
