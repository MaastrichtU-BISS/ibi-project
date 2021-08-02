import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Icon, IIconProps } from 'native-base'
import React from 'react'

export const IconSet = React.forwardRef((props: IIconProps, forwardedRef) => {
  const { name, ...rest } = props
  return (
    <Icon
      ref={forwardedRef}
      as={<MaterialCommunityIcons name={name} />}
      {...rest}
    />
  )
})
