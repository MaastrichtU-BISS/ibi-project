import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { BRAND_COLORS, KEYS, RESPONSIVE_CHARTS } from '@constants'
import { useChartTheme } from './utils'

export default (props) => {
  const { data } = props
  const [chartTheme] = useChartTheme()
  return (
    <ResponsivePie
      data={data}
      theme={chartTheme}
      colors={{ datum: 'data.color' }}
      margin={{
        top: 40, right: 80, bottom: 80, left: 80,
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ theme: 'labels.text.fill' }}
      // arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'top-left',
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
        // {
        //   anchor: 'top',
        //   direction: 'column',
        //   justify: false,
        //   translateX: -250,
        //   translateY: 0,
        //   itemsSpacing: 0,
        //   itemWidth: 100,
        //   itemHeight: 18,
        //   itemTextColor: '#999',
        //   itemDirection: 'left-to-right',
        //   itemOpacity: 1,
        //   symbolSize: 18,
        //   symbolShape: 'circle',
        //   effects: [
        //     {
        //       on: 'hover',
        //       style: {
        //         itemTextColor: '#000',
        //       },
        //     },
        //   ],
        // },
      ]}
    />
  )
}

const data = [
  {
    id: KEYS[0],
    label: KEYS[0],
    value: 119,
    color: BRAND_COLORS[0],
  },
  {
    id: KEYS[1],
    label: KEYS[1],
    value: 69,
    color: BRAND_COLORS[1],
  },
  {
    id: KEYS[2],
    label: KEYS[2],
    value: 495,
    color: BRAND_COLORS[2],
  },
]
