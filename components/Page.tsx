import React from 'react'
import {
  Box,
} from 'native-base'
import {
  SIZE,
  TOP_MARGIN,
} from '@constants'

export const Page = (props: any) => (
  <Box
    w={SIZE.width}
    h={SIZE.height}
    mt={TOP_MARGIN}
    bg="white"
    {...props}
  />

)
