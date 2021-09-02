import React from 'react'
import * as R from 'colay/ramda'
import GaugeChart from './GaugeChart/lib2'

export default (props) => {
  const {
    data: {
      values,
      segments,
    },
  } = props
  const arcsLength = React.useMemo(() => {
    const total = R.reduce((acc, item) => item.value + acc, 0, segments)
    return segments.map((item) => item.value / total)
  }, [segments])
  const segmentColors = React.useMemo(() => segments.map((item) => item.color), [segments])
  return (
    <GaugeChart
      width={350}
      height={350}
      paddingVertical={70}
      paddingHorizontal={70}
      needleLabelFontSize={10}
      needles={values}
      customSegmentLabels={segments}
      segments={segments.length}
      segmentColors={segmentColors}
      arcsLength={arcsLength}
    />
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
