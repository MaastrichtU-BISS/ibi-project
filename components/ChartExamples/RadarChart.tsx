import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { BRAND_COLORS, KEYS } from '@constants'
import {
  View,
  Box,
  Text,
} from 'native-base'
import { useChartTheme } from './utils'

export default (props) => {
  const { keys, data, colors } = props
  const [chartTheme] = useChartTheme({
    fontSize: 23,
  })
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <View
        style={[{
          position: 'absolute',
          top: 0,
          left: 30,
          zIndex: 100,
        }]}
      >
        {
          keys.map((key, index) => (
            <Box
              flexDirection="row"
              alignItems="center"
              mb={2}
            >
              <Box
                width={5}
                height={5}
                borderRadius={5}
                backgroundColor={colors[index]}
                mr={2}
              />
              <Text
                fontSize="xl"
                justifyContent="center"
              >
                {key}
              </Text>
            </Box>
          ))
        }
      </View>
      <ResponsiveRadar
        data={data}
        theme={chartTheme}
        keys={keys}
        indexBy="type"
        maxValue="auto"
        margin={{
          top: 110, right: 100, bottom: 40, left: 100,
        }}
        curve="linearClosed"
        gridLabel={LabelComponent}
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={50}
        enableDots
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={(params) => {
          const {
            index,
          } = params
          return colors[index]
        }}
        fillOpacity={0.5}
      // blendMode="multiply"
        animate
        motionConfig="wobbly"
        isInteractive
      />
    </View>
  )
}

const data = [
  {
    [KEYS[0]]: 10,
    [KEYS[1]]: 60,
    [KEYS[2]]: 32,
    color: BRAND_COLORS[0],
  },
  {
    [KEYS[0]]: 20,
    [KEYS[1]]: 70,
    [KEYS[2]]: 72,
    color: BRAND_COLORS[1],
  },
  {
    [KEYS[0]]: 30,
    [KEYS[1]]: 28,
    [KEYS[2]]: 75,
    color: BRAND_COLORS[2],
  },
]

const LabelComponent = ({ id, anchor }) => (
  <g transform={`translate(${anchor === 'end' ? -60 : anchor === 'middle' ? -30 : 0}, -20)`}>
    <text>{id}</text>
    <text
      y={24}
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        fill: '#3a9896',
      }}
    >
      {/* +
      {Math.round(Math.random() * 100)}
      % */}
    </text>
  </g>
)
