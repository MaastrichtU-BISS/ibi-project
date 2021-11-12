import { BRAND_COLORS, KEYS } from '@constants'
import { ResponsiveBar } from '@nivo/bar'
import { Box, Text } from 'native-base'
import React from 'react'
import { useChartTheme } from './utils'

const FONT_SIZE = 25
const MARGIN_TOP = '205px'
const HEIGHT = 20

export default (props: any) => {
  const {
    keys, data, values, min, max,
  } = props
  const [chartTheme] = useChartTheme({
    textColor: 'white',
  })
  return (
    <Box
      w="100%"
      h="100%"
      flexDirection="row"
    >
      <Box
        style={[{
          position: 'absolute',
          top: -40,
          left: 132,
          zIndex: 1,
        }]}
      >
        {
          values.map(({ label, color, value }) => (
            <Box
              flexDirection="row"
              alignItems="center"
              mb={2}
            >
              <Box
                width={5}
                height={5}
                borderRadius={5}
                backgroundColor={color}
                mr={2}
              />
              <Text
                fontSize="xl"
                fontFamily="sans-serif"
                justifyContent="center"
              >
                {`${label}: `}
              </Text>
              <Text
                fontSize="xl"
                bold
                justifyContent="center"
                fontFamily="sans-serif"
              >
                {value}
              </Text>
            </Box>
          ))
        }
      </Box>
      <Box
        ml={110}
        mt={MARGIN_TOP}
        h={HEIGHT}
      >
        <Text
          fontSize={FONT_SIZE}
          fontWeight={500}
          color="rgb(0,0,0)"
          fontFamily="sans-serif"
        >
          {min}
        </Text>
      </Box>
      <ResponsiveBar
      // width: '100%',
        height={250}
        margin={{
          top: 90, right: 20, bottom: 60, left: 10,
        }}
        data={data}
        theme={chartTheme}
      // data={data as BarDatum[]}
        indexBy="type"
        keys={keys}
        padding={0.2}
      // {...(min ? { minValue: min } : {})}
      // {...(max ? { maxValue: max } : {})}
  // labelTextColor={'inherit:darker(1.4)'}
        labelTextColor={{ from: 'theme', theme: 'labels.text.fill' }}
        enableLabel={false}
        labelSkipWidth={16}
        labelSkipHeight={16}
        colors={(c) => {
          const {
            id, data,
          } = c
          return data[`${id}Color`]
        }}
        isInteractive={false}
        layout="horizontal"
        enableGridY={false}
        enableGridX
      // legends={[
      //   {
      //     dataFrom: 'keys',
      //     anchor: 'top-left',
      //     direction: 'column',
      //     translateX: -50,
      //     translateY: -60,
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
        markers={values.map(({ value, color }) => ({
          axis: 'x',
          value: value - min,
          lineStyle: {
            stroke: color, // BRAND_COLORS_MAP.orange,
            strokeWidth: 4,
            strokeDasharray: '25, 3',
          },
          textStyle: {
            fontSize: chartTheme.fontSize,
            fontFamily: 'sans-serif',
            fontWeight: 500,
            color: 'rgb(0,0,0)',
          },
          legend: '',
          legendOrientation: 'horizontal',
          legendPosition: 'top',
        }))}
      />
      <Box
        mr={20}
        mt={MARGIN_TOP}
        h={HEIGHT}
      >
        <Text
          fontSize={FONT_SIZE}
          fontWeight={500}
          color="rgb(0,0,0)"
          fontFamily="sans-serif"
        >
          {max}
        </Text>
      </Box>
    </Box>
  )
}

const data = [
  {
    // country: 'AD',
    [KEYS[0]]: 24,
    [`${KEYS[0]}Color`]: BRAND_COLORS[0],
    [KEYS[1]]: 187,
    [`${KEYS[1]}Color`]: BRAND_COLORS[1],
    [KEYS[2]]: 86,
    [`${KEYS[2]}Color`]: BRAND_COLORS[2],
  },
]
