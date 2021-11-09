import React from 'react'
import {
  Text,
} from 'native-base'

export const TrademarkText = (props) => (
  <Text
    fontSize="8.3px"
    fontFamily="sans-serif"
    fontWeight={100}
    color="rgb(131,140,146)"
    class="trademarktext"
    {...props}
  >
    © Institutional Benchmarking Institute BV
  </Text>
)
