import React from 'react'
import {
  Box,
  Text,
} from 'native-base'
import {
  BRAND_COLORS_MAP,
  TITLE_COLOR,
} from '@constants'

export const TitleBox = (props: any) => {
  const {
    textAlign = 'start',
    h = '20px',
    children,
    ...rest
  } = props
  return (
    <Box
      bg={BRAND_COLORS_MAP.cream}
      h={h}
      justifyContent="center"
      {...rest}
    >
      <Text
        fontSize={7}
        color={TITLE_COLOR}
        textAlign={textAlign}
        bold
        ml={2}
      >
        {children}
      </Text>
    </Box>
  )
}
