import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { BRAND_COLORS, KEYS } from '@constants'
import {
  View,
  Box,
  Text,
} from 'native-base'
import * as R from 'colay/ramda'
import { useChartTheme } from './utils'

const DEFAULT_MARGIN = 0
export default (props) => {
  const {
    keys, data, colors, chartId,
  } = props
  const [chartTheme] = useChartTheme({
    fontSize: 24,
    textColor: '#52525b',
  })
  const MARGIN = DEFAULT_MARGIN
  // chartId === 'RadarChart1'
  //   ? DEFAULT_MARGIN + 50
  //   : DEFAULT_MARGIN
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
                fontSize={20}
                justifyContent="center"
              >
                {key}
              </Text>
            </Box>
          ))
        }
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          marginTop: 15,
        }}
      >
        <ResponsiveRadar
          data={data}
          theme={chartTheme}
          keys={keys}
          indexBy="type"
          maxValue="auto"
          margin={{
            top: 40 + MARGIN,
            right: 153 + MARGIN,
            bottom: 40 + MARGIN,
            left: 100 + MARGIN,
          }}
          isInteractive={false}
          curve="linearClosed"
          gridLabel={(props) => (
            <LabelComponent
              {...props}
              theme={chartTheme}
              chartId={chartId}
            />
          )}
          borderWidth={2}
          borderColor={{ from: 'color' }}
          gridLevels={5}
          gridShape="circular"
          gridLabelOffset={30}
          enableDots
          dotSize={5}
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
        />
      </View>
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

const LabelComponent = (props) => {
  const {
    id, anchor, theme, chartId,
  } = props
  const isChart1 = chartId === 'RadarChart1'
  const width = (R.reduce(
    (acc, val) => acc || val.length > 9,
    false,
    id.split(' '),
  )
    ? 223
    : 173) - (isChart1 ? 0 : 13)
  const height = id.split(' ').length > 3
    ? 200
    : 150
  const fontSize = isChart1
    ? 23
    : 26
  return (
    <g transform={`translate(${(anchor === 'end' ? -60 : anchor === 'middle' ? -30 : 0) + 25}, -20)`}>
      <foreignObject
        width={width}
        height={height}
        // padding-right:25px;
      >
        <p
          style={{
            fontSize,
            // fontWeight: 'bold',
            fontFamily: 'sans-serif',
            textAlign: 'center',
          }}
          xmlns="http://www.w3.org/1999/xhtml"
        >
          {id}
        </p>
      </foreignObject>
      {/* <text
        style={{
          fontSize: theme.axis?.text?.fontSize ?? 20,
          // fontWeight: 'bold',
          fontFamily: 'sans-serif',
          width: 10,
        }}
      >
        {id}
      </text> */}

      {/* <text
        y={24}
        style={{
          fontSize: theme.axis?.text?.fontSize ?? 20,
          fontWeight: 'bold',
          fill: '#3a9896',
        }}
      >
        +
        {Math.round(Math.random() * 100)}
        %
      </text> */}
    </g>
  )
}
