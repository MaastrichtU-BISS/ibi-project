import React from 'react'
import GaugeChart from './GaugeChart/lib'

// Resolves charts dependancy

const dataSource = {
  chart: {
    caption: 'Walmart\'s Customer Satisfaction Score',
    subcaption: '2017',
    lowerlimit: '0',
    upperlimit: '100',
    showvalue: '1',
    numbersuffix: '%',
    theme: 'fusion',
  },
  colorrange: {
    color: [
      {
        minvalue: '0',
        maxvalue: '50',
        code: '#F2726F',
      },
      {
        minvalue: '50',
        maxvalue: '75',
        code: '#FFC533',
      },
      {
        minvalue: '75',
        maxvalue: '100',
        code: '#62B58F',
      },
    ],
  },
  dials: {
    dial: [
      {
        value: '71',
        tooltext: '<b>9%</b> lesser that target',
      },
    ],
  },
  trendpoints: {
    point: [
      {
        startvalue: '80',
        displayvalue: 'Target',
        thickness: '2',
        color: '#E15A26',
        usemarker: '1',
        markerbordercolor: '#E15A26',
        markertooltext: '80%',
      },
    ],
  },
}

export default (props) => {
  const {

  } = props
  return (
    <GaugeChart
      id="gauge-chart5"
      style={{
        width: '100%',
        height: '100%',
        // height: 250,
        // width: 250,
      }}
      needles={[
        {
          percent: 0.4, needleColor: '#5BE12C',
        },
        {
          percent: 0.8, needleColor: '#5BE12C',
        },
      ]}
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2]}
      colors={['#5BE12C', '#F5CD19', '#EA4228']}
      percent={0.37}
      arcPadding={0.02}
    />
  )
}
