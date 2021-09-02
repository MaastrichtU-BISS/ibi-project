import React from 'react'
import * as R from 'colay/ramda'
import GaugeChart from './GaugeChart/lib2'

export default (props) => {
  const {

  } = props
  const arcsLength = React.useMemo(() => {
    const total = R.reduce((acc, item) => item.value + acc, 0, segments)
    return segments.map((item) => item.value / total)
  }, [segments])
  console.log('A', arcsLength)
  return (
    <GaugeChart
      style={{
        width: '100%',
        height: '100%',
      }}
      needles={values}
      customSegmentLabels={segments}
      segments={segments.length}
      arcsLength={arcsLength}
    />
  )
}

const values = [
  {
    percent: 0.4,
    needleColor: '#5BE12C',
    value: 400,
    label: 'A',
  },
  {
    percent: 0.8,
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
