import React from 'react'
import * as R from 'colay/ramda'
import {
  useLayout,
} from 'colay-ui'
import { View, Box, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import { BRAND_COLORS_MAP } from '@constants'
import GaugeChart from './GaugeChart/lib2'

const MARGIN = 100

export default (props) => {
  const {
    data: {
      values,
      segments,
      secondSegments: secondSegments_,
      min,
      max,
    },
  } = props
  const segmentsTotalValue = React.useMemo(() => R.reduce((acc, item) => item.value + acc, 0, segments), [segments])

  const secondSegmentsTotalValue_ = React.useMemo(() => R.reduce((acc, item) => item.value + acc, 0, secondSegments_), [secondSegments_])
  const maxValue = React.useMemo(
    () => R.reduce(
      (acc, item) => (item.value > acc ? item.value : acc), 0, segments,
    ),
    [segments],
  )
  const secondSegments = React.useMemo(() => [
    ...secondSegments_,
    {
      value: max ?? maxValue,
      color: BRAND_COLORS_MAP.blue,
    },
  ], [secondSegments_])
  const secondSegmentsTotalValue = React.useMemo(() => R.reduce((acc, item) => item.value + acc, 0, secondSegments), [secondSegments])
  const arcsLength = React.useMemo(() => segments.map((item) => item.value / segmentsTotalValue), [segments])
  const segmentColors = React.useMemo(() => segments.map((item) => item.color), [segments])
  const customSegmentStops = React.useMemo(
    () => [0, ...segments.map((item) => item.value)],
    [segments],
  )

  const secondArcsLength = React.useMemo(() => secondSegments.map((item) => item.value / segmentsTotalValue), [secondSegments])
  const secondSegmentColors = React.useMemo(
    () => secondSegments.map((item) => item.color),
    [secondSegments],
  )
  const secondCustomSegmentStops = React.useMemo(
    () => {
      let total = 0
      return [0, ...secondSegments.map((item) => {
        total += item.value
        return item.value
      })]
    },
    [secondSegments],
  )
  const {
    onLayout,
    height,
    width,
    initialized,
  } = useLayout()
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
      onLayout={onLayout}
    >
      <View
        style={[{
          position: 'absolute',
          top: 0,
          left: 30,
          zIndex: -1,
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
                justifyContent="center"
                fontFamily="ff2"
              >
                {`${label}: `}
              </Text>
              <Text
                fontSize="xl"
                bold
                justifyContent="center"
                fontFamily="ff2"
              >
                {value}
              </Text>
            </Box>
          ))
        }
      </View>
      {
        initialized && (
          <View
            style={{
              marginTop: values.length > 3 ? 35 : 0,
            }}
          >
            <GaugeChart
              width={width - 50}
              height={height}
              paddingVertical={70}
              paddingHorizontal={70}
              needleLabelFontSize={10}
              needles={values}
              customSegmentLabels={segments}
              segments={segments.length}
              segmentColors={segmentColors}
              arcsLength={arcsLength}
              customSegmentStops={customSegmentStops}
              minValue={0}
              maxValue={max ?? maxValue}
              minLabel={min ?? 0}
              maxLabel={max ?? maxValue}
              labelsEnabled={false}
              labelFormat={() => ''}
              currentValue={0}
              valueTextFontSize={25}
              valueTextFontFamily="ff2"
              needleHeightRatio={1}
            />
            <View
              style={[StyleSheet.absoluteFillObject, {
                top: MARGIN / 2,
                left: MARGIN / 2,
                zIndex: -1,
              }]}
            >
              {
                secondSegments && (
                  <GaugeChart
                    width={width - 50 - MARGIN}
                    height={height}
                    paddingVertical={70}
                    paddingHorizontal={70}
                    needleLabelFontSize={10}
                    needles={[]}
                    customSegmentStops={secondCustomSegmentStops}
                    customSegmentLabels={secondSegments}
                    segments={secondSegments.length}
                    segmentColors={secondSegmentColors}
                    arcsLength={secondArcsLength}
                    minValue={0}
                    maxValue={max ?? maxValue}
                    minLabel={min ?? 0}
                    maxLabel={max ?? maxValue}
                    labelsEnabled={false}
                    labelFormat={() => ''}
                    currentValue={0}
                    valueTextFontSize={25}
                  />
                )
              }
            </View>
          </View>
        )
      }
    </View>
  )
}

const values = [
  {
    needleColor: '#5BE12C',
    value: 400,
    label: 'A',
  },
  {
    needleColor: '#5BE12C',
    value: 100,
    label: 'BB',
  },
]
const segments = [
  {
    // text: 'Very Bad',
    position: 'INSIDE',
    color: '#555',
    value: 100,
  },
  {
    // text: 'Bad',
    position: 'INSIDE',
    color: '#555',
    value: 200,
  },
  {
    // text: 'Ok',
    position: 'INSIDE',
    color: '#555',
    fontSize: '19px',
    value: 300,
  },
]
