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
      secondSegments,
    },
  } = props
  const maxValue = React.useMemo(
    () => R.reduce(
      (acc, item) => (item.value > acc ? item.value : acc), 0, segments,
    ),
    [segments],
  )
  const arcsLength = React.useMemo(() => {
    const total = R.reduce((acc, item) => item.value + acc, 0, segments)
    return segments.map((item) => item.value / total)
  }, [segments])
  const segmentColors = React.useMemo(() => segments.map((item) => item.color), [segments])
  const secondArcsLength = React.useMemo(() => {
    const total = R.reduce((acc, item) => item.value + acc, 0, secondSegments)
    return secondSegments.map((item) => item.value / total)
  }, [secondSegments])
  const secondSegmentColors = React.useMemo(
    () => secondSegments.map((item) => item.color),
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
          values.map(({ label, color }) => (
            <Box
              flexDirection="row"
              alignItems="center"
            >
              <Box
                width={5}
                height={5}
                borderRadius={5}
                backgroundColor={color}
                mr={2}
                mb={2}
              />
              <Text>{label}</Text>
            </Box>
          ))
        }
      </View>
      {
        initialized && (
          <>
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
              minValue={0}
              maxValue={maxValue}
              labelsEnabled={false}
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
                    needles={values}
                    customSegmentLabels={secondSegments}
                    segments={secondSegments.length}
                    segmentColors={secondSegmentColors}
                    arcsLength={secondArcsLength}
                    minValue={0}
                    maxValue={maxValue}
                    labelsEnabled={false}
                  />
                )
              }
            </View>
          </>
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
