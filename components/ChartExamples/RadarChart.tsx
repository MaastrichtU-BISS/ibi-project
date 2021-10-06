import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { BRAND_COLORS, KEYS } from '@constants'
import { useChartTheme } from './utils'

export default (props) => {
  const { keys, data, colors } = props
  const [chartTheme] = useChartTheme({
    fontSize: 23
  })
  return (
    <ResponsiveRadar
      data={data}
      theme={chartTheme}
      keys={keys}
      indexBy="type"
      maxValue="auto"
      margin={{
        top: 70, right: 100, bottom: 40, left: 100,
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
      // legends={[
      //   {
      //     anchor: 'top-left',
      //     // data: [{}]
      //     direction: 'column',
      //     translateX: -50,
      //     translateY: -40,
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemTextColor: '#999',
      //     symbolSize: 12,
      //     symbolShape: 'circle',
      //     // effects: [
      //     //   {
      //     //     on: 'hover',
      //     //     style: {
      //     //       itemTextColor: '#000',
      //     //     },
      //     //   },
      //     // ],
      //   },
      // ]}
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
