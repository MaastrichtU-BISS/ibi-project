import * as ChartExamples from '@components/ChartExamples'
import { TextBox } from '@components/TextBox'
import { BRAND_COLORS_MAP } from '@constants'
import {
  colorModeManager, NATIVE_BASE_CONFIG,
} from '@root/config/native-base'
import deepmerge from 'deepmerge'
import {
  Box, NativeBaseProvider,
} from 'native-base'
import React from 'react'
import ReactDOM from 'react-dom'
import * as R from 'colay/ramda'
import { View } from 'react-native'
import './Override.css'
import { html } from './html'

const combineMerge = (target, source, options) => {
  const destination = target.slice()

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
    } else if (options.isMergeableObject(item)) {
      destination[index] = merge(target[index], item, options)
    } else if (target.indexOf(item) === -1) {
      destination.push(item)
    }
  })
  return destination
}

const merge = (val: any, val2: any) => deepmerge(
  val,
  val2,
  { arrayMerge: combineMerge },
)

export const OverrideHTML = (props) => {
  const {
    data,
  } = props
  const containerID = React.useMemo(() => R.uuid(), [])
  React.useEffect(() => {
    const call = async () => {
      // const result = await (await fetch('/report.html')).text()
      const result = html
      const containerNode = document.getElementById(containerID)!
      containerNode.innerHTML = result
      data.forEach((chartList, pageIndex) => {
        const pageNode = document.getElementsByClassName(`pc pc${pageIndex + 1} w0 h0`)[0]!
        const image = pageNode.getElementsByTagName('img')[0]!
        chartList.forEach((chart, chartIndex) => {
          const bindChart = Bind[pageIndex]?.[chartIndex] ?? {}

          const {
            id,
            data: chartData,
            type: chartType,
            extraElements = [],
            ...rest
          } = merge(
            chart,
            bindChart,
          )
          console.log(bindChart, chart, merge(
            chart,
            bindChart,
          ))
          const chartContainer = document.createElement('div')
          chartContainer.id = `${id}Container`
          const chartWrapper = document.createElement('div')
          chartWrapper.id = id
          chartContainer.appendChild(chartWrapper)
          extraElements.map((extraElement, index) => {
            const chartExtraContainer = document.createElement('div')
            chartExtraContainer.id = `${id}ExtraContainer${index}`
            pageNode.insertBefore(chartExtraContainer, image.nextElementSibling)
            ReactDOM.render(
              <NativeBaseProvider
                config={NATIVE_BASE_CONFIG}
                colorModeManager={colorModeManager}
              >
                {extraElement.component()}
              </NativeBaseProvider>,
              chartExtraContainer,
            )
          })
          pageNode.insertBefore(chartContainer, image.nextElementSibling)
          if (chartData && chartContainer) {
            const Chart = ChartExamples[chartType]
            ReactDOM.render(
              <>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <NativeBaseProvider
                    config={NATIVE_BASE_CONFIG}
                    colorModeManager={colorModeManager}
                  >
                    <Box
                      p={2}
                      w="100%"
                      h="100%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Chart
                        data={chartData}
                        {...rest}
                      />
                    </Box>
                  </NativeBaseProvider>
                </View>
              </>,
              chartWrapper,
            )
          }
        })
      })
      // return
    }
    call()
  }, [data])
  return (
    <div
      style={{
        overflow: 'visible',
      }}
      id={containerID}
    />
  )
}
const KEYS = {
  fonds: 'FONDS',
  pension: 'VERGELIJKBARE PENSIOENFONDSEN',
  alle: 'ALLE DEELNEMENDE PENSIOENFONDSEN',
}

const RADAR_CHART_KEYS = {
  costs: 'Costs',
  '1yaring': '1-jaring',
  '5jaring': '5-jaring',
  '10jaring': '10-jaring',
  impleme: 'Impleme',
  alpha: 'Alpha',
  asset: 'Asset',
}

const SPEEDOMETER_SEGMENTS_BIND = [
  {
    color: BRAND_COLORS_MAP.blue,
  },
  {
    color: BRAND_COLORS_MAP.blue,
  },
  {
    color: BRAND_COLORS_MAP.blue,
  },
]
const SPEEDOMETER_SECOND_SEGMENTS = [
  {
    color: BRAND_COLORS_MAP.blue,
  },
  {
    color: BRAND_COLORS_MAP.cream,
  },
  {
    color: BRAND_COLORS_MAP.cream,
  },
]

const SPEEDOMETER_VALUES_BIND = [
  {
    color: BRAND_COLORS_MAP.grean,
  },
  {
    color: BRAND_COLORS_MAP.lightBlue,
  },
  {
    color: BRAND_COLORS_MAP.orange,
  },
]

const SEGMENTS = [
  {
    value: 50,
  },
  {
    value: 150,
  },
  {
    value: 200,
  },
]

const BARCHART_VALUES_BIND = [
  {
    // country: 'AD',
    0: 48,
    '0Color': BRAND_COLORS_MAP.blue,
    1: 67,
    '1Color': BRAND_COLORS_MAP.lightBlue,
    2: 85,
    '2Color': BRAND_COLORS_MAP.blue,
  },
]

const Bind = [
  [
    {
      id: 'PieChart0',
      type: 'PieChart',
      data: [
        {
          color: BRAND_COLORS_MAP.orange,
        },
        {
          color: BRAND_COLORS_MAP.lightBlue,
        },
        {
          color: BRAND_COLORS_MAP.blue,
        },
      ],
    },
    {
      id: 'PieChart1',
      type: 'PieChart',
      data: [
        {
          color: BRAND_COLORS_MAP.orange,
        },
        {
          color: BRAND_COLORS_MAP.lightBlue,
        },
        {
          color: BRAND_COLORS_MAP.blue,
        },
      ],
    },
    {
      id: 'PieChart2',
      type: 'PieChart',
      data: [
        {
          color: BRAND_COLORS_MAP.orange,
        },
        {
          color: BRAND_COLORS_MAP.lightBlue,
        },
        {
          color: BRAND_COLORS_MAP.blue,
        },
      ],
    },
    {
      id: 'Speedometer0',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
  ],
  [
    {
      id: 'Speedometer1',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'Speedometer2',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
    },
    {
      id: 'Speedometer3',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'Speedometer4',
      type: 'Speedometer',
      data: {
        values: [
          {
            color: BRAND_COLORS_MAP.grean,
          },
          {
            color: BRAND_COLORS_MAP.lightBlue,
          },
        ],
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'Speedometer5',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'BarChart0',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
  ],
  [
    {
      id: 'BarChart1',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'BarChart2',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'RadarChart0',
      type: 'RadarChart',
      keys: [KEYS.alle, KEYS.pension, KEYS.fonds],
      colors: [BRAND_COLORS_MAP.blue, BRAND_COLORS_MAP.lightBlue, BRAND_COLORS_MAP.orange],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
                {
                  text: 'FONDS',
                  backgroundColor: BRAND_COLORS_MAP.orange,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'Speedometer6',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGEALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.cream,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'Speedometer7',
      type: 'Speedometer',
      data: {
        values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
    },
    {
      id: 'BarChart3',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
  ],
  [
    {
      id: 'BarChart4',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'BarChart5',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'BarChart6',
      type: 'BarChart',
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
              ]}
            />
          ),
        },
      ],
    },
    {
      id: 'RadarChart1',
      type: 'RadarChart',
      keys: [KEYS.alle, KEYS.pension, KEYS.fonds],
      colors: [BRAND_COLORS_MAP.blue, BRAND_COLORS_MAP.lightBlue, BRAND_COLORS_MAP.orange],
      extraElements: [
        {
          component: () => (
            <TextBox
              flexDirection="row"
              data={[
                {
                  text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                  color: 'white',
                  backgroundColor: BRAND_COLORS_MAP.blue,
                },
                {
                  text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
                  backgroundColor: BRAND_COLORS_MAP.lightBlue,
                },
                {
                  text: 'FONDS',
                  backgroundColor: BRAND_COLORS_MAP.orange,
                },
              ]}
            />
          ),
        },
      ],
    },
  ],
]

const Pages = [
  [
    {
      id: 'PieChart0',
      data: [
        {
          id: 'Pensioenbeheerkosten',
          label: 'Pensioenbeheerkosten',
          value: 11,
        },
        {
          id: 'Transactiekosten',
          label: 'Transactiekosten',
          value: 16.2,
        },
        {
          id: 'Vermogensbeheerkosten',
          label: 'Vermogensbeheerkosten',
          value: 72.8,
        },
      ],
    },
    {
      id: 'PieChart1',
      data: [
        {
          id: 'Pensioenbeheerkosten',
          label: 'Pensioenbeheerkosten',
          value: 11,
        },
        {
          id: 'Transactiekosten',
          label: 'Transactiekosten',
          value: 16.2,
        },
        {
          id: 'Vermogensbeheerkosten',
          label: 'Vermogensbeheerkosten',
          value: 72.8,
        },
      ],
    },
    {
      id: 'PieChart2',
      data: [
        {
          id: 'Pensioenbeheerkosten',
          label: 'Pensioenbeheerkosten',
          value: 11,
        },
        {
          id: 'Transactiekosten',
          label: 'Transactiekosten',
          value: 16.2,
        },
        {
          id: 'Vermogensbeheerkosten',
          label: 'Vermogensbeheerkosten',
          value: 72.8,
        },
      ],
    },
    {
      id: 'Speedometer0',
      data: {
        values: [
          {
            value: 200,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
  ],
  [
    {
      id: 'Speedometer1',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'Speedometer2',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'Speedometer3',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'Speedometer4',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'Speedometer5',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'BarChart0',
      type: 'BarChart',
      value: 90,
    },
  ],
  [
    {
      id: 'BarChart1',
      type: 'BarChart',
      value: 90,
    },
    {
      id: 'BarChart2',
      type: 'BarChart',
      value: 90,
    },
    {
      id: 'RadarChart0',
      type: 'RadarChart',
      data: [
        {
          type: RADAR_CHART_KEYS.costs,
          [KEYS.alle]: 70,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,

        },
        {
          type: RADAR_CHART_KEYS['1yaring'],
          [KEYS.alle]: 10,
          [KEYS.pension]: 70,
          [KEYS.fonds]: 20,

        },
        {
          type: RADAR_CHART_KEYS['5jaring'],
          [KEYS.alle]: 50,
          [KEYS.pension]: 60,
          [KEYS.fonds]: 70,

        },
        {
          type: RADAR_CHART_KEYS['10jaring'],
          [KEYS.alle]: 30,
          [KEYS.pension]: 50,
          [KEYS.fonds]: 160,
        },
        {
          type: RADAR_CHART_KEYS.impleme,
          [KEYS.alle]: 130,
          [KEYS.pension]: 10,
          [KEYS.fonds]: 50,
        },
        {
          type: RADAR_CHART_KEYS.alpha,
          [KEYS.alle]: 20,
          [KEYS.pension]: 130,
          [KEYS.fonds]: 40,
        },
        {
          type: RADAR_CHART_KEYS.asset,
          [KEYS.alle]: 10,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,
        },
      ],
    },
    {
      id: 'Speedometer6',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'Speedometer7',
      type: 'Speedometer',
      data: {
        values: [
          {
            value: 100,
            label: KEYS.alle,
          },
          {
            value: 110,
            label: KEYS.pension,
          },
          {
            value: 120,
            label: KEYS.fonds,
          },
        ],
        segments: SEGMENTS,
      },
    },
    {
      id: 'BarChart3',
      type: 'BarChart',
      value: 90,
    },
  ],
  [
    {
      id: 'BarChart4',
      type: 'BarChart',
      value: 90,
    },
    {
      id: 'BarChart5',
      type: 'BarChart',
      value: 90,
    },
    {
      id: 'BarChart6',
      type: 'BarChart',
      value: 90,
    },
    {
      id: 'RadarChart1',
      type: 'RadarChart',
      data: [
        {
          type: 'KOSTEN PENSIOENBEHEER\nPER DELNEMER(DEF, PF)',
          [KEYS.alle]: 70,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,

        },
        {
          type: 'KOSTEN PENSIOENBEHEER\nPER DELNEMER(ALLE)',
          [KEYS.alle]: 10,
          [KEYS.pension]: 70,
          [KEYS.fonds]: 20,

        },
        {
          type: 'SERVICE INDEX',
          [KEYS.alle]: 50,
          [KEYS.pension]: 60,
          [KEYS.fonds]: 70,

        },
        {
          type: 'COMPLEXITEITS\nINDEX',
          [KEYS.alle]: 30,
          [KEYS.pension]: 50,
          [KEYS.fonds]: 160,
        },
        {
          type: 'AUTOMATISERINGS\nINDEX',
          [KEYS.alle]: 130,
          [KEYS.pension]: 10,
          [KEYS.fonds]: 50,
        },
        {
          type: 'OVERDRACHTEN\nINDEX',
          [KEYS.alle]: 20,
          [KEYS.pension]: 130,
          [KEYS.fonds]: 40,
        },
        {
          type: 'SLAPERS\nINDEX',
          [KEYS.alle]: 10,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,
        },
      ],
    },
  ],
]
