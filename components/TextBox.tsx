import React from 'react'
import {
  Box,
  Text,
} from 'native-base'

export const TextBox = (props) => {
  const {
    data,
    flexDirection = 'column',
  } = props
  return (
    <Box
      flexDirection={flexDirection}
    >
      {
          data.map(({ text, color = 'black', backgroundColor }) => (
            <Box
              backgroundColor={backgroundColor}
              justifyContent="center"
              mb={1}
              mr={1}
              py={1}
              px={1}
              width={'61px'}
            >
              <Text
                fontSize={5}
                color={color}
                textAlign="center"
              >
                {text}
              </Text>
            </Box>
          ))
        }
    </Box>
  )
}
