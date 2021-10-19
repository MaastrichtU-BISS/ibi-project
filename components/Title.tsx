import React from 'react'
import {
  Box,
  Text,
} from 'native-base'
import {
  BRAND_COLORS_MAP,
  TITLE_COLOR,
} from '@constants'

export const Title = (props: any) => {
  const {
    children,
    ...rest
  } = props
  return (
    <Text
      fontSize={17}
      color={TITLE_COLOR}
      bold
      {...rest}
    >
      {children}
    </Text>
  )
}
