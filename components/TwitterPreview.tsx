import type {PreviewProps} from 'sanity'
import {Flex, Text} from '@sanity/ui'
import {Tweet} from 'react-tweet'

interface PreviewTwitterProps extends PreviewProps {
  selection?: {
    id: string
  }
}

export default function TwitterPreview(props: PreviewTwitterProps) {
  const {selection} = props
  const id = selection?.id
  return (
    <Flex padding={4} justify={'center'}>
      {id ? <Tweet id={id} /> : <Text>Add a Tweet</Text>}
    </Flex>
  )
}
