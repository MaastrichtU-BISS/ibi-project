import * as ChartExamples from '@components/ChartExamples'
import { TextBox } from '@components/TextBox'
import { TitleBox } from '@components/TitleBox'
import { Title } from '@components/Title'
import { Subtitle } from '@components/Subtitle'
import { BRAND_COLORS_MAP, TITLE_COLOR } from '@constants'
import {
  colorModeManager, NATIVE_BASE_CONFIG,
} from '@root/config/native-base'
import deepmerge from 'deepmerge'
import {
  Box, NativeBaseProvider, Text,
  Stack, Image,
} from 'native-base'
import React from 'react'
import ReactDOM from 'react-dom'
import { View } from 'react-native'
import './Override.css'
import { IBILogo } from '@assets/images/ibi-logo'
import { GoalSVG } from '@assets/images/goal'
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

const FONT_WEIGHT = 600

export const OverrideHTML = (props) => {
  const {
    data,
  } = props
  const containerID = React.useMemo(
    () => 'HTML_CONTAINER', // R.uuid(),
    [],
  )
  React.useEffect(() => {
    const call = async () => {
      // const result = await (await fetch('/report.html')).text()
      const variables = {
        pensionFundName: data.pensionFundName,
        fundName: data.fundName,
      }
      const result = html(variables)
      const containerNode = document.getElementById(containerID)!
      containerNode.innerHTML = result
      data.pages.forEach((chartList, pageIndex) => {
        const pageNode = document.getElementsByClassName(`pc pc${pageIndex + 1} w0 h0`)[0]!
        const image = pageNode.getElementsByTagName('img')[0]!
        chartList.forEach((chart, chartIndex) => {
          const bindChart = Bind[pageIndex]?.[chartIndex] ?? {}

          const {
            id,
            data: chartData,
            type: chartType,
            extraElements = [],
            extraElementsData = [{}],
            ...rest
          } = merge(
            chart,
            bindChart,
          )
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
                {extraElement.component(extraElementsData?.[index] ?? {}, { variables })}
              </NativeBaseProvider>,
              chartExtraContainer,
            )
          })
          // Trademark
          const trademarkContainer = document.createElement('div')
          trademarkContainer.className = 'trademark'
          ReactDOM.render(
            <NativeBaseProvider
              config={NATIVE_BASE_CONFIG}
              colorModeManager={colorModeManager}
            >
              <TrademarkText />
            </NativeBaseProvider>,
            trademarkContainer,
          )
          pageNode.appendChild(trademarkContainer)
          // Divider
          const dividerContainer = document.createElement('div')
          dividerContainer.className = 'divider'
          ReactDOM.render(
            <NativeBaseProvider
              config={NATIVE_BASE_CONFIG}
              colorModeManager={colorModeManager}
            >
              <Box
                borderColor="blue"
                borderLeftWidth="0.1px"
                borderStyle="dotted"
                w={0}
                h="579px"
              />
            </NativeBaseProvider>,
            dividerContainer,
          )
          pageNode.appendChild(dividerContainer)

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
                        chartId={id}
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
  costs: 'Benchmarkkosten Index',
  '1yaring': '1-jaring Rendement Index',
  '5jaring': '5-jaring Rendement Index',
  '10jaring': '10-jaring Rendement Index',
  impleme: 'Implementatie Index',
  alpha: 'Alpha Index',
  asset: 'Asset Allocatie Index',
}

const SPEEDOMETER_SEGMENTS_BIND = [
  {
    color: BRAND_COLORS_MAP.blue,
  },
  {
    color: BRAND_COLORS_MAP.blue,
  },
  // {
  //   color: BRAND_COLORS_MAP.blue,
  // },
]
const SPEEDOMETER_SECOND_SEGMENTS = [
  {
    color: BRAND_COLORS_MAP.blue,
  },
  {
    color: BRAND_COLORS_MAP.cream,
  },
  // {
  //   color: BRAND_COLORS_MAP.grean,
  // },
]

const SEGMENTS = [
  {
    value: 150,
  },
  {
    value: 250,
  },
]
const SECOND_SEGMENTS = [
  {
    value: 100,
  },
  {
    value: 220,
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

const ExplanationText = (props) => (
  <Text
    fontSize="8.3px"
    fontFamily="ff2"
    fontWeight={400}
    color="rgb(0,0,0)"
    {...props}
  />
)

const TrademarkText = (props) => (
  <Text
    fontSize="8.3px"
    fontFamily="ff2"
    fontWeight={100}
    color="rgb(131,140,146)"
    class="trademarktext"
    {...props}
  >
    © Institutional Benchmarking Institute BV
  </Text>
)

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
      extraElements: [
        {
          component: (props) => (
            <Box>
              <Title
                style={{
                  fontSize: 13,
                  fontWeight: FONT_WEIGHT,
                  color: '#18376D',
                  letterSpacing: 0.5,
                }}
                mb={1}
              >
                De kosten van uw pensioen
              </Title>
              <ExplanationText>
                {props.value}
              </ExplanationText>
            </Box>
          ),
        },
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <ExplanationText>
              Kosten van vermogensbeheer en transactiekosten bepalen voor een groot deel de kosten.
            </ExplanationText>
          ),
        },
        {
          component: (_, props) => (
            <Box>
              <Title
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: 'rgb(128,104,60)',
                  letterSpacing: 0.5,
                }}
              >
                {props.variables.pensionFundName}
              </Title>
            </Box>
          ),
        },
        {
          component: (_, props) => (
            <Box alignItems="center">
              <Box
                p={2}
                mb={1}
              >
                <Title
                  style={{
                    fontSize: 13,
                    fontWeight: FONT_WEIGHT,
                    color: 'white',
                    letterSpacing: 0.5,
                  }}
                  mb={1}
                >
                  UNIFORM PENSIOENKOSTENOVERZICHT (UPKO
                  <sup>TM</sup>
                  )
                </Title>
                <Title
                  style={{
                    fontSize: 11,
                    fontWeight: FONT_WEIGHT,
                    color: 'white',
                    letterSpacing: 0.5,
                  }}
                  mb={1}
                >
                  WAT ZIJN DE KOSTEN DIE UW PENSIOENFONDS MAAKT?
                </Title>
                <Title
                  style={{
                    fontSize: 11,
                    fontWeight: FONT_WEIGHT,
                    color: 'white',
                    letterSpacing: 0.5,
                  }}
                  mb="15px"
                >
                  EN WAT KRIJGT U ER VOOR TERUG?
                </Title>
                <Title
                  style={{
                    fontSize: 9,
                    fontWeight: FONT_WEIGHT,
                    color: 'white',
                    letterSpacing: 0.5,
                  }}
                >
                  IBI BENCHMARKING (INFO@INSTITUTIONALBENCHMARKING.ORG)
                </Title>
              </Box>
              <Box
                style={{
                  backgroundColor: '#fff',
                }}
                h="21px"
                w="100%"
              />
            </Box>
          ),
        },
        {
          component: (_, props) => (
            <Box>
              <Title
                style={{
                  fontSize: 13,
                  fontWeight: FONT_WEIGHT,
                  color: '#18376D',
                  letterSpacing: 0.5,
                }}
                mb={1}
              >
                Doel
              </Title>
              <ExplanationText>
                {`Het Institutional Benchmarking Institute benchmarkt sinds 2012 de kosten van Nederlandse pensioenfondsen op basis van wet- en regelgeving. Dit Uniform PensioenKOstenoverzicht (UPKO™) geeft belangrijke informatie over de kosten in relatie tot de prestatie van het ${props.variables.pensionFundName}.` }
              </ExplanationText>
            </Box>

          ),
        },
        {
          component: () => (
            <Box>
              {/* <Image
                w="51px"
                h="51px"
                source={require('@assets/images/goal.png')}
              /> */}
              <GoalSVG
                fill="#F09743"
                width={51}
                height={51}
              />
            </Box>
          ),
        },
        {
          component: () => (
            <TitleBox>
              VERGELIJKBARE PENSIOENFONDSEN
            </TitleBox>
          ),
        },
        {
          component: () => (
            <TitleBox>
              ALLE DEELNEMENDE PENSIOENFONDSEN
            </TitleBox>
          ),
        },
        {
          component: () => (
            <TitleBox>
              VERDELING KOSTEN VAN HET PENSOENFONDS
            </TitleBox>
          ),
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
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <ExplanationText>
              {'Een pensioenfonds dat meer risico neemt bij het beleggen moet een hogere reserve aanhouden om eventuele tegenvallers op te kunnen vangen. Ook heeft de huidige financiële situatie van het fonds invloed op hoeveel risico het fonds kan en mag nemen. Een hoger risico levert in de regel een hoger rendement. '}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <Box>
              {/* <Title
                style={{
                  marginLeft: 142,
                  fontSize: 22,
                  fontWeight: 340,
                  color: 'rgb(108,108,108)',
                  letterSpacing: 0.5,
                  lineHeight: '2.5vh',
                }}
              >
                Institutioneel
              </Title>
              <Title
                style={{
                  marginLeft: 100,
                  fontSize: 22,
                  fontWeight: 340,
                  color: 'rgb(133,104,72)',
                  letterSpacing: 0.5,
                  lineHeight: '2.5vh',
                }}
              >
                Benchmarking
              </Title>
              <Title
                style={{
                  marginLeft: 156,
                  fontSize: 22,
                  fontWeight: 340,
                  color: BRAND_COLORS_MAP.blue,
                  letterSpacing: 0.5,
                  lineHeight: '2.5vh',
                }}
              >
                Instituut
              </Title> */}
              <Box
                alignItems="center"
              >
                {/* <Image
                  w="141px"
                  h="45px"
                  source={require('@assets/images/ibi-logo.png')}
                /> */}
                <Box
                  w="141px"
                  h="45px"
                >
                  <IBILogo
                    width={141}
                    height={45}
                  />
                </Box>
              </Box>
              <Box
                bg={BRAND_COLORS_MAP.cream}
                mt="5px"
                pr={1}
                pl={1}
                pt={1}
              >
                <Title
                  fontSize={14}
                >
                  Achtergrondinformatie: Kostenniveau is het gevolg van keuzes van het pensioenfonds
                </Title>
                <ExplanationText>
                  {'\nSociale partners beslissen over de inhoud van de pensioenregeling en de wijze waarop de regeling wordt uitgevoerd. Binnen deze afspraken beslist het bestuur van het pensioenfonds, bijvoorbeeld, in welke beleggingen wordt geïnvesteerd en hoe dat gebeurt, of welke service en informatie wordt gegeven aan de deelnemers van het pensioenfonds\n\nDe keuzes gemaakt door het bestuur leiden tot verschillen in kosten, maar bepalen ook de prestatie van het pensioenfonds. Tegenover de kosten van beleggen staat wat de beleggingen opleveren (rendement). Bij de pensioenbeheerkosten (o.a. bijhouden van de administratie per deelnemer, het betalen van pensioenen en incasseren van de pensioenpremies bij de werkgever) moeten de kosten afgezet worden tegen het serviceniveau en de complexiteit van de pensioenregeling die moet worden uitgevoerd.\n'}
                </ExplanationText>
                <Title
                  fontSize={14}
                  mt={2}
                  mb={2}
                >
                  Vergelijkbaarheid van kosten en prestatie
                </Title>
                <ExplanationText
                  mb={2}
                >
                  UPKO geeft niet alleen een overzicht van alle kosten, maar laat ook zien hoe de kosten
                  zich verhouden tot de prestatie van het fonds. Verder worden kosten en prestatie
                  afgezet tegen andere pensioenfondsen met vergelijkbaar aantal deelnemers en beheerd
                  vermogen. Hierdoor kan de prestatie van het eigen pensioenfonds beter beoordeeld
                  worden.
                </ExplanationText>
              </Box>
              <Box
                alignItems="center"
                w="full"
                mt="16px"
              >
                <TextBox
                  flexDirection="row"
                  space={2}
                  fontSize={6}
                  width="72px"
                  data={[
                    {
                      text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
                      color: 'white',
                      backgroundColor: BRAND_COLORS_MAP.blue,
                    },
                    {
                      text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
                      backgroundColor: BRAND_COLORS_MAP.cream,
                    },
                  ]}
                />
              </Box>
            </Box>
          ),
        },
        {
          component: () => (
            <TitleBox>
              GENOMEN RISICO BEPAALT OMVANG VAN DE AAN TE HOUDEN RESERVE
            </TitleBox>
          ),
        },
        {
          component: () => (
            <Box />
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
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <TitleBox
              textAlign="center"
              h="20px"
            >
              GEMIDDELD 10 JARIG RENDEMENT
            </TitleBox>
          ),
        },
        {
          component: () => (
            <Title>
              VERMOGENSBEHEER
            </Title>
          ),
        },
        {
          component: () => (
            <Subtitle>
              WAT IS HET RENDEMENT EN WAT ZIJN DE KOSTEN?
            </Subtitle>
          ),
        },
      ],
    },
    {
      id: 'Speedometer2',
      type: 'Speedometer',
      data: {
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TitleBox
              textAlign="center"
              h="20px"
            >
              GEMIDDELD 5 JARIG RENDEMENT
            </TitleBox>
          ),
        },

      ],
    },
    {
      id: 'Speedometer3',
      type: 'Speedometer',
      data: {
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <ExplanationText>
              De hoogte van het rendement wordt voornamelijk bepaald door de beleggingscategorieën waarin belegd wordt. Bij een vergelijking van het rendement met andere pensioenfondsen geeft een periode van 5 en 10 jaar een beter beeld van het rendement in relatie tot het door het bestuur bepaalde beleggingsbeleid.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              RENDEMENT AFGELOPEN VERSLAGJAAR
            </TitleBox>
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
            color: BRAND_COLORS_MAP.green,
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
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <ExplanationText>
              Benchmarkkosten is een door het Institutional Benchmarking Institute onafhankelijk berekende kostennorm die past bij de door het pensioenfonds gekozen wijze van beleggen. Indien de kosten van het pensioenfonds hoger zijn dan de berekende benchmarkkosten, zijn de kosten van het pensioenfonds hoger dan je mag verwachten.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              VERMOGENSBEHEERKOSTEN
            </TitleBox>
          ),
        },

      ],
    },
    {
      id: 'Speedometer5',
      type: 'Speedometer',
      data: {
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <ExplanationText>
              De hoogte van de aan- en verkoopkosten van beleggingen wordt bepaald waarin belegd wordt. Ook indien gedurende het verslagjaar wijzigingen in de beleggingen worden doorgevoerd heeft invloed op de kosten.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              TRANSACTIEKOSTEN
            </TitleBox>
          ),
        },

      ],
    },
    {
      id: 'BarChart0',
      type: 'BarChart',
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
        {
          component: () => (
            <ExplanationText>
              {'Sommige pensioenfondsen beleggen alleen in obligaties en aandelen. Andere beleggen daarnaast ook in bijvoorbeeld hypotheken en vastgoed. Een brede spreiding leidt tot hogere kosten maar een lager risico. De gemiddelde spreiding is 100.\nDe spreiding heeft de grootste invloed op de kosten van beleggen.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <Subtitle>
              WELKE KEUZES HEEFT PENSIOENFONDS GEMAAKT?
            </Subtitle>
          ),
        },
        {
          component: () => (
            <TitleBox>
              HOE GESPREID WORDT HET VERMOGEN BELEGD?
            </TitleBox>
          ),
        },

      ],
    },
    {
      id: 'BarChart1',
      type: 'BarChart',
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
        {
          component: () => (
            <ExplanationText>
              {'Bij actief beleggen verwachten pensioenfondsen een hoger rendement te halen dan het gemiddelde van de markt. Hier tegenover staat passief beheer, waarbij het fonds de markt volgt. De gemiddelde mate waarin actief belegt wordt is 100.\nActief beleggen leidt tot hogere kosten met als doel een hoger rendement.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              IN WELKE MATE WORDT ACTIEF EEN HOGER RENDEMENT NAGESTREEFD?
            </TitleBox>
          ),
        },
      ],
    },
    {
      id: 'BarChart2',
      type: 'BarChart',

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
        {
          component: () => (
            <ExplanationText>
              Beleggingen kunnen alleen voor het pensioenfonds worden gedaan. Dit biedt veel vrijheid. Ook kunnen de beleggingen via een beleggingsfonds worden gedaan hetgeen in de regel leidt tot lagere kosten. Het gemiddelde is 100. Hoe hoger deze waarde, hoe meer het fonds via beleggingsfondsen belegd.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              HOE WORDEN DE BELEGGINGEN GEDAAN?
            </TitleBox>
          ),
        },
      ],
    },
  ],
  [
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
        {
          component: (_, props) => (
            <ExplanationText>
              {`De spingrafiek geeft een overzicht van de behaalde rendementen en kosten en zet deze in verhouding tot de keuzes die het  pensioenfonds  gemaakt  heeft  en die de uitkomsten bepalen.\n\nVoor  de  grafiek  zijn  de  cijfers geïndexeerd.  Dit  betekent  dat  het gemiddelde  van  alle  deelnemende fondsen een waarde van 100 heeft. De grafiek  laat  zien  in  hoeverre vergelijkbare fondsen en het ${props.variables.fundName} hoger  of  lager  scoren  dan  het gemiddelde.`}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <Subtitle>
              KOSTEN VAN BELEGGEN IN CONTEXT
            </Subtitle>
          ),
        },
        {
          component: () => (
            <Box />
          ),
        },
      ],
    },
    {
      id: 'Speedometer6',
      type: 'Speedometer',
      data: {
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <TextBox
              data={[
                {
                  text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
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
        {
          component: () => (
            <ExplanationText
              ml="2px"
              fontSize="7.93"
            >
              Kosten per deelnemer indien uitgegaan wordt van het
              {' '}
              <i>aantal premiebetalende</i>
              {' '}
              deelnemers en
              {' '}
              <i>gepensioneerden</i>
              {' '}
              aan het eind van het verslagjaar. Dit is de afgesproken manier voor het berekenen van de kosten per deelnemer die ook wettelijk gepubliceerd moet worden.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <Box
              pl="2px"
            >
              <Title
                ml="0.8px"
              >
                PENSIOENBEHEER
              </Title>
              <Subtitle
                mb="1px"
              >
                WAT ZIJN DE KOSTEN PER DEELNEMER?
              </Subtitle>
              <ExplanationText
                ml="2px"
                fontSize="7.93"
              >
                Bij pensioenbeheerkosten kan het bestuur niet alles beslissen. Op het aantal deelnemers en de samenstelling van de deelnemers heeft het bestuur geen invloed. Met name de niet actieve deelnemers (slapers) hebben grote invloed op de kosten per deelnemer. Ook het aantal waardeoverdrachten (deelnemers die met reeds opgebouwde vermogen toetreden of vertrekken bij het pensioenfonds) heeft invloed op het kostenniveau.
              </ExplanationText>
            </Box>
          ),
        },
        {
          component: () => (
            <TitleBox>
              PENSIOENBEHEERKOSTEN PER DEELNEMER
            </TitleBox>
          ),
        },
      ],
    },
    {
      id: 'Speedometer7',
      type: 'Speedometer',
      data: {
        // values: SPEEDOMETER_VALUES_BIND,
        segments: SPEEDOMETER_SEGMENTS_BIND,
        secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      },
      extraElements: [
        {
          component: () => (
            <ExplanationText
              ml="2px"
              fontSize="7.93"
            >
              Aanvullend kijken wij ook naar de kosten per deelnemer indien uitgegaan wordt van
              {' '}
              <i>alle</i>
              {' '}
              deelnemers, dus ook de ‘slapers’. Hoewel het bestuur geen invloed heeft op het aantal slapers, hebben deze alsnog invloed op de kosten.
            </ExplanationText>
          ),
        },

      ],
    },
    {
      id: 'BarChart3',
      type: 'BarChart',

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
        {
          component: () => (
            <ExplanationText>
              De mate van service verschilt per pensioenfonds o.a. op het gebied van tijdig verwerken van pensioenbetalingen, openingsuren helpdesk, website mogelijkheden en afwerking van klachten. Het gemiddelde is 100.    Hogere service leidt in de regel tot hogere kosten.
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox
              h="23px"
            >
              {'WELK SERVICE NIVEAU IS AFGESPROKEN MET WERKGEVER EN SOCIALE PARTNERS?\n→ SERVICE INDEX'}
            </TitleBox>
          ),
        },
        {
          component: () => (
            <Subtitle>
              WELKE KEUZES HEEFT PENSIOENFONDS GEMAAKT?
            </Subtitle>
          ),
        },
      ],
    },
  ],
  [
    {
      id: 'BarChart4',
      type: 'BarChart',

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
        {
          component: () => (
            <ExplanationText>
              {'De complexiteit van een uit te voeren pensioenregeling is een gevolg van de afspraken die met de werkgever en sociale partners over het pensioen zijn gemaakt. De gemiddelde complexiteit is 100.\n\nHet uitvoeren van een complexe pensioenregeling maakt het automatiseren van het proces lastig en is daardoor kostbaar.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              HOE COMPLEX IS DE AFGESPROKEN PENSIOENREGELING?
            </TitleBox>
          ),
        },
        {
          component: () => (
            <Box />
          ),
        },

      ],
    },
    {
      id: 'BarChart5',
      type: 'BarChart',

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
        {
          component: () => (
            <ExplanationText>
              {'Indien processen zijn geautomatiseerd, dan zijn de kosten van verwerking lager dan indien een groot gedeelte van de werkzaamheden handmatig moet worden uitgevoerd. Het gemiddelde is 100.\n\nEen hogere automatiseringsgraad leidt in de regel tot lagere kosten.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox>
              IN HOEVERRE ZIJN DE PROCESSEN GEAUTOMATISEERD?
            </TitleBox>
          ),
        },

      ],
    },
    {
      id: 'BarChart6',
      type: 'BarChart',

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
        {
          component: () => (
            <Box />
          ),
        },
        {
          component: () => (
            <ExplanationText>
              {'Bij het veranderen van werkgever is het mogelijk het opgebouwd pensioen mee te nemen naar het pensioenfonds van de nieuwe werkgever. Het gemiddelde aantal overdrachten is 100.\n\nVeel binnen- en uitgaande overdrachten leidt tot hogere kosten.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <TitleBox
              h="34px"
            >
              HOEVEEL DEELNEMERS ZIJN BIJ HET PENSIOENFONDS GEKOMEN EN/OF HEBBEN HET PENSIOENFONDS INCLUSIEF OPGEBOUWD VERMOGEN VERLATEN?
            </TitleBox>
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
        {
          component: () => (
            <ExplanationText>
              {'De spingrafiek geeft een overzicht van de pensioenbeheerkosten per deelnemer.\n\nDeze geïndexeerde kosten per deelnemer worden in relatie gezet tot keuzes van het bestuur die van invloed zijn op de kosten van pensioenbeheer, zoals het serviceniveau, de complexiteit voor het uitvoeren van de pensioenregeling en de mate van automatisering. Op het aantal overdrachten en de samenstelling van de deelnemers heeft het bestuur geen invloed, hoewel deze de kosten alsnog beïnvloeden.\n\nHet gemiddelde van alle deelnemende fondsen heeft een waarde van 100. De grafiek laat zien hoe het pensioenfonds scoort vergleken met andere, en vooral vergelijkbare pensioenfondsen.'}
            </ExplanationText>
          ),
        },
        {
          component: () => (
            <Box>
              <Subtitle>
                PENSIOENBEHEERKOSTEN IN CONTEXT
              </Subtitle>
            </Box>
          ),
        },
        {
          component: () => (
            <Stack
              backgroundColor={BRAND_COLORS_MAP.cream}
              w="full"
              h="full"
              p="2px"
              space={1}
            >
              <ExplanationText>
                De kosten van UPKO (inclusief het benchmarkrapport op basis waarvan die overzicht is opgesteld) bedraagt voor dit fonds € 0,10 per deelnemer.
              </ExplanationText>
              <ExplanationText>
                De informatie in deze rapportage is met de grootst mogelijke zorgvuldigheid vergaard en samengesteld. Aan de inhoud van deze rapportage kunnen geen rechten worden ontleend of aanspraken worden gemaakt. Alle rechten voorbehouden Institutional Benchmarking Institute BV.
              </ExplanationText>
            </Stack>
          ),
        },
      ],
    },
  ],
]

export const Pages = [
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
      extraElementsData: [{
        value: 'Uitvoeringskosten bestaan uit drie categorieën:\n - vermogensbeheerkosten (€ 4.000.000; 0.4% van beheerd vermogen)\n - transactiekosten (€ 1.000.000, 0.1% van beheerd vermogen)\n - en pensioenbeheerkosten (€ 400.000, €170 per deelnemer).',
      }],
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
        min: 7,
        max: 21,
        values: [
          {
            value: 18,
            label: 'ALLE DEELNEMENDE PENSIOENFONDSEN',
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 15,
            label: 'VERGELIJKBARE PENSIOENFONDSEN',
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 14,
            label: 'FONDS',
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: [{ value: 7 }, { value: 21 }],
        secondSegments: [{ value: 7 }, { value: 20 }],
      },
    },
  ],
  [
    {
      id: 'Speedometer1',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 105,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,

      },
    },
    {
      id: 'Speedometer2',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 120,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'Speedometer3',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 120,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'Speedometer4',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'Speedometer5',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 120,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'BarChart0',
      type: 'BarChart',
      min: 49,
      max: 250,
      values: [
        {
          value: 50,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 70,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
    {
      id: 'BarChart1',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
    {
      id: 'BarChart2',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
  ],
  [

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
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 120,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'Speedometer7',
      type: 'Speedometer',
      data: {
        min: 25,
        max: 250,
        values: [
          {
            value: 100,
            label: KEYS.alle,
            color: BRAND_COLORS_MAP.green,
          },
          {
            value: 110,
            label: KEYS.pension,
            color: BRAND_COLORS_MAP.lightBlue,
          },
          {
            value: 120,
            label: KEYS.fonds,
            color: BRAND_COLORS_MAP.orange,
          },
        ],
        segments: SEGMENTS,
        secondSegments: SECOND_SEGMENTS,
      },
    },
    {
      id: 'BarChart3',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
  ],
  [
    {
      id: 'BarChart4',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
    {
      id: 'BarChart5',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
    {
      id: 'BarChart6',
      type: 'BarChart',
      min: 25,
      max: 250,
      values: [
        {
          value: 90,
          color: BRAND_COLORS_MAP.orange,
          label: 'LABEL1',
        },
        {
          value: 50,
          color: BRAND_COLORS_MAP.green,
          label: 'LABEL2',
        },
      ],
      data: BARCHART_VALUES_BIND,
      keys: ['0', '1', '2'],
    },
    {
      id: 'RadarChart1',
      type: 'RadarChart',
      data: [
        {
          type: 'KOSTEN PENSIOENBEHEER DELNEMER(DEF,PF)',
          [KEYS.alle]: 70,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,

        },
        {
          type: 'KOSTEN PENSIOENBEHEER DELNEMER(ALLE)',
          [KEYS.alle]: 10,
          [KEYS.pension]: 70,
          [KEYS.fonds]: 20,

        },
        {
          type: 'SERVICE - INDEX',
          [KEYS.alle]: 50,
          [KEYS.pension]: 60,
          [KEYS.fonds]: 70,

        },
        {
          type: 'COMPLEXITEITS INDEX',
          [KEYS.alle]: 30,
          [KEYS.pension]: 50,
          [KEYS.fonds]: 160,
        },
        {
          type: 'AUTOMATISERINGS INDEX',
          [KEYS.alle]: 130,
          [KEYS.pension]: 10,
          [KEYS.fonds]: 50,
        },
        {
          type: 'OVERDRACHTEN INDEX',
          [KEYS.alle]: 20,
          [KEYS.pension]: 130,
          [KEYS.fonds]: 40,
        },
        {
          type: 'SLAPERS INDEX',
          [KEYS.alle]: 10,
          [KEYS.pension]: 20,
          [KEYS.fonds]: 130,
        },
      ],
    },
  ],
]
