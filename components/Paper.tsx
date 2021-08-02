import React from 'react'
import {
  Box,
} from 'native-base'

export type PaperProps = React.ComponentPropsWithRef<typeof Box>

export const Paper = (props: PaperProps) => {
  const {
    children,
    _light = {},
    _dark = {},
    ...rest
  } = props
  return (
    <Box
      {...rest}
      _light={{
        backgroundColor: 'light.50',
        ..._light,
      }}
      _dark={{
        backgroundColor: 'dark.50', // 'gray.700',
        ..._dark,
      }}
    >
      {children}
    </Box>
  )
}
