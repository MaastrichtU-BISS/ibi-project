import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { BRAND_COLORS, KEYS } from '@constants'
import { useChartTheme } from './utils'

export default (props) => {
  const { data } = props
  const [chartTheme] = useChartTheme()
  return (
    <ResponsiveRadar
      data={data}
      theme={chartTheme}
      keys={KEYS}
      indexBy="taste"
      maxValue="auto"
      margin={{
        top: 70, right: 80, bottom: 40, left: 80,
      }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={5}
      gridShape="circular"
      gridLabelOffset={36}
      enableDots
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel
      dotLabel="value"
      dotLabelYOffset={-12}
      colors={({ index }) => data[index].color}
      fillOpacity={0.25}
      // blendMode="multiply"
      animate
      motionConfig="wobbly"
      isInteractive
      legends={[
        {
          anchor: 'top-left',
          // data: [{}]
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          // effects: [
          //   {
          //     on: 'hover',
          //     style: {
          //       itemTextColor: '#000',
          //     },
          //   },
          // ],
        },
      ]}
    />
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
