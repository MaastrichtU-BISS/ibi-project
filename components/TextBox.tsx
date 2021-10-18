import React from 'react'
import {
  Box,
  Text,
  Stack,
} from 'native-base'

export const TextBox = (props) => {
  const {
    data,
    flexDirection = 'column',
    space = 0,
    fontSize = 5,
    width = '61px',
  } = props
  return (
    <Stack
      direction={flexDirection}
      space={space}
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
              width={width}
            >
              <Text
                fontSize={fontSize}
                color={color}
                textAlign="center"
              >
                {text}
              </Text>
            </Box>
          ))
        }
    </Stack>
  )
}
