import React from 'react'
import type {BlockStyleProps} from 'sanity'
export const TitleStyle = (props: BlockStyleProps) => (
  <span style={{fontFamily: 'Garamond', fontSize: '2em'}}>{props.children} </span>
)
