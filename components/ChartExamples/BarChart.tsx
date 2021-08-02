import React from 'react'
import { ResponsiveBar, BarDatum } from '@nivo/bar'
import { BRAND_COLORS, KEYS } from '@constants'
import { useChartTheme } from './utils'

export default (props) => {
  const { data } = props
  const [chartTheme] = useChartTheme()
  return (
    <ResponsiveBar
      // width: '100%',
      height={250}
      margin={{
        top: 60, right: 110, bottom: 60, left: 80,
      }}
      data={data}
      theme={chartTheme}
      // data={data as BarDatum[]}
      indexBy="country"
      keys={KEYS}
      padding={0.2}
  // labelTextColor={'inherit:darker(1.4)'}
      labelTextColor={{ from: 'theme', theme: 'labels.text.fill' }}
      labelSkipWidth={16}
      labelSkipHeight={16}
      colors={(c) => {
        const {
          id, data,
        } = c
        return data[`${id}Color`]
      }}
      layout="horizontal"
      enableGridY={false}
      enableGridX
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'top-left',
          direction: 'column',
          translateX: -50,
          translateY: -60,
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
    country: 'AD',
    [KEYS[0]]: 24,
    [`${KEYS[0]}Color`]: BRAND_COLORS[0],
    [KEYS[1]]: 187,
    [`${KEYS[1]}Color`]: BRAND_COLORS[1],
    [KEYS[2]]: 86,
    [`${KEYS[2]}Color`]: BRAND_COLORS[2],
  },
]
