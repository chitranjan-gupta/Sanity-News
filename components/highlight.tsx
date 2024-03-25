import React from 'react'
import type {BlockDecoratorProps} from 'sanity'
export const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>
export const HighlightDecorator = (props: BlockDecoratorProps) => (
  <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
)
