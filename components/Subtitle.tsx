import React from 'react'
import {
  Text,
} from 'native-base'
import {
  TITLE_COLOR,
} from '@constants'

export const Subtitle = (props: any) => {
  const {
    children,
    ...rest
  } = props
  return (
    <Text
      fontSize={14}
      color={TITLE_COLOR}
      italic
      bold
      mb={1}
      {...rest}
    >
      {children}
    </Text>
  )
}
