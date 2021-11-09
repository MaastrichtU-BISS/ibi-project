import React from 'react'
import { Stack } from 'native-base'

export const Section = (props: React.ComponentProps<typeof Stack>) => (
  <Stack
    w="full"
    {...props}
  />
)
