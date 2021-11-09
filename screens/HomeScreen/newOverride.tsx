import React from 'react'
import deepmerge from 'deepmerge'
import {
  BRAND_COLORS_MAP,
} from '@constants'
import {
  Page1,
} from './pages/Page1'
// import './Override.css'

export const OverrideHTML = ({ data: _data }) => {
  const data = React.useMemo(() => merge(
    _data,
    Bind,
  ), [_data])
  return (
    <>
      <Page1
        data={data}
      />
    </>
  )
}

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

const Bind = {
  pages: [
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
      // {
      //   id: 'Speedometer0',
      //   type: 'Speedometer',
      //   data: {
      //     // values: SPEEDOMETER_VALUES_BIND,
      //     segments: SPEEDOMETER_SEGMENTS_BIND,
      //     secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
      //   },
      //   extraElements: [
      //     {
      //       component: () => (
      //         <TextBox
      //           data={[
      //             {
      //               text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
      //               color: 'white',
      //               backgroundColor: BRAND_COLORS_MAP.blue,
      //             },
      //             {
      //               text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
      //               backgroundColor: BRAND_COLORS_MAP.cream,
      //             },
      //           ]}
      //         />
      //       ),
      //     },
      //     {
      //       component: () => (
      //         <Box />
      //       ),
      //     },
      //     {
      //       component: () => (
      //         <Box />
      //       ),
      //     },
      //     {
      //       component: () => (
      //         <ExplanationText>
      //           {'Een pensioenfonds dat meer risico neemt bij het beleggen moet een hogere reserve aanhouden om eventuele tegenvallers op te kunnen vangen. Ook heeft de huidige financiële situatie van het fonds invloed op hoeveel risico het fonds kan en mag nemen. Een hoger risico levert in de regel een hoger rendement. '}
      //         </ExplanationText>
      //       ),
      //     },
      //     {
      //       component: () => (
      //         <Box />
      //       ),
      //     },
      //   {
      //     component: () => (
      //       <Box>
      //         <Box
      //           alignItems="center"
      //         >
      //           <Box
      //             w="141px"
      //             h="45px"
      //           >
      //             <IBILogo
      //               width={141}
      //               height={45}
      //             />
      //           </Box>
      //         </Box>
      //         <Box
      //           bg={BRAND_COLORS_MAP.cream}
      //           mt="5px"
      //           pr={1}
      //           pl={1}
      //           pt={1}
      //         >
      //           <Title
      //             fontSize="14px"
      //           >
      //             Achtergrondinformatie: kostenniveau is het gevolg van keuzes van het pensioenfonds
      //           </Title>
      //           <ExplanationText>
      //             {'\nSociale partners beslissen over de inhoud van de pensioenregeling en de wijze waarop de regeling wordt uitgevoerd. Binnen deze afspraken beslist het bestuur van het pensioenfonds, bijvoorbeeld, in welke beleggingen wordt geïnvesteerd en hoe dat gebeurt, of welke service en informatie wordt gegeven aan de deelnemers van het pensioenfonds\n\nDe keuzes gemaakt door het bestuur leiden tot verschillen in kosten, maar bepalen ook de prestatie van het pensioenfonds. Tegenover de kosten van beleggen staat wat de beleggingen opleveren (rendement). Bij de pensioenbeheerkosten (o.a. bijhouden van de administratie per deelnemer, het betalen van pensioenen en incasseren van de pensioenpremies bij de werkgever) moeten de kosten afgezet worden tegen het serviceniveau en de complexiteit van de pensioenregeling die moet worden uitgevoerd.\n'}
      //           </ExplanationText>
      //           <Title
      //             fontSize="14px"
      //             mt={2}
      //             mb={2}
      //           >
      //             Vergelijkbaarheid van kosten en prestaties
      //           </Title>
      //           <ExplanationText
      //             mb={2}
      //           >
      //             UPKO geeft niet alleen een overzicht van alle kosten, maar laat ook zien hoe de kosten
      //             zich verhouden tot de prestaties van het fonds. Verder worden kosten en prestaties
      //             afgezet tegen andere pensioenfondsen met vergelijkbaar aantal deelnemers en beheerd
      //             vermogen. Hierdoor kunnen de prestaties van het eigen pensioenfonds beter beoordeeld
      //             worden.
      //           </ExplanationText>
      //         </Box>
      //         <Box
      //           alignItems="center"
      //           w="full"
      //           mt="16px"
      //         >
      //           <TextBox
      //             flexDirection="row"
      //             space={2}
      //             fontSize="6px"
      //             width="72px"
      //             data={[
      //               {
      //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
      //                 color: 'white',
      //                 backgroundColor: BRAND_COLORS_MAP.blue,
      //               },
      //               {
      //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
      //                 backgroundColor: BRAND_COLORS_MAP.cream,
      //               },
      //             ]}
      //           />
      //         </Box>
      //       </Box>
      //     ),
      //   },
      //   {
      //     component: () => (
      //       <TitleBox>
      //         GENOMEN RISICO BEPAALT OMVANG VAN DE AAN TE HOUDEN RESERVE
      //       </TitleBox>
      //     ),
      //   },
      //   {
      //     component: () => (
      //       <Box />
      //     ),
      //   },
      // ],
      // },
    ],
    // [
    //   {
    //     id: 'Speedometer1',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             data={[
    //               {
    //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox
    //             textAlign="center"
    //             h="20px"
    //           >
    //             GEMIDDELD 10-JARIG RENDEMENT (%)
    //           </TitleBox>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Title>
    //             VERMOGENSBEHEER
    //           </Title>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Subtitle>
    //             WAT IS HET RENDEMENT EN WAT ZIJN DE KOSTEN?
    //           </Subtitle>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     id: 'Speedometer2',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TitleBox
    //             textAlign="center"
    //             h="20px"
    //           >
    //             GEMIDDELD 5-JARIG RENDEMENT (%)
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'Speedometer3',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             data={[
    //               {
    //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             De hoogte van het rendement wordt voornamelijk bepaald door de beleggingscategorieën waarin belegd wordt. Bij een vergelijking van het rendement met andere pensioenfondsen geeft een periode van 5 en 10 jaar een beter beeld van het behaalde rendement in relatie tot het beleggingsbeleid waarvoor het bestuur gekozen heeft.
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             RENDEMENT AFGELOPEN VERSLAGJAAR (%)
    //           </TitleBox>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     id: 'Speedometer4',
    //     type: 'Speedometer',
    //     data: {
    //       values: [
    //         {
    //           color: BRAND_COLORS_MAP.green,
    //         },
    //         {
    //           color: BRAND_COLORS_MAP.lightBlue,
    //         },
    //       ],
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             data={[
    //               {
    //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             Benchmarkkosten is een door het Institutioneel Benchmarking Instituut onafhankelijk berekende kostennorm die past bij de door het pensioenfonds gekozen wijze van beleggen. Indien de kosten van het pensioenfonds hoger zijn dan de berekende benchmarkkosten, dan zijn de kosten van het pensioenfonds hoger dan pensioenfondsen die beleggin in dezelfde beleggingscatgorieën. /n/n* 100 basispunten is 1%
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             VERMOGENSBEHEERKOSTEN (IN BASISPUNTEN<sup>*</sup>)
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'Speedometer5',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             data={[
    //               {
    //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             De ontvangen pensioenpremie wordt belegd hierdoor ontstaan transactiekosten. Ook herschikkingen en prijsveranderingen zorgen voor transacties.\nDe hoogte van de aan- en verkoopkosten van beleggingen wordt bepaald door het aantal transacties en het type belegging waarin belegd wordt.
  
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             TRANSACTIEKOSTEN (IN BASISPUNTEN)
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'BarChart0',
    //     type: 'BarChart',
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'Sommige pensioenfondsen beleggen alleen in obligaties en aandelen. Andere beleggen daarnaast ook in bijvoorbeeld hypotheken en vastgoed. Een brede spreiding leidt tot hogere kosten maar een lager risico. Het gemiddelde  is 100.\nDe spreiding heeft de grootste invloed op de kosten van beleggen.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Subtitle>
    //             WELKE KEUZES HEEFT PENSIOENFONDS GEMAAKT?
    //           </Subtitle>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             HOE GESPREID WORDT HET VERMOGEN BELEGD?
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'BarChart1',
    //     type: 'BarChart',
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'Door actief te beleggen proberen pensioenfondsen een hoger rendement te halen dan het gemiddelde van de markt. Hier tegenover staat passief beheer, waarbij het fonds de markt volgt.\nActief beleggen leidt tot hogere kosten met als doel een hoger rendement.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             IN WELKE MATE WORDT ACTIEF EEN HOGER RENDEMENT NAGESTREEFD?
    //           </TitleBox>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     id: 'BarChart2',
    //     type: 'BarChart',
  
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             Beleggingen kunnen alleen voor het pensioenfonds worden gedaan of worden belegd in bestaande fondsen. Zelf houden is duurder, maar biedt meer vrijheid.\nHoe hoger deze waarde, hoe meer het fonds via beleggingsfondsen belegd.
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             HOE WORDEN DE BELEGGINGEN GEDAAN?
    //           </TitleBox>
    //         ),
    //       },
    //     ],
    //   },
    // ],
    // [
    //   {
    //     id: 'RadarChart0',
    //     type: 'RadarChart',
    //     keys: [KEYS.alle, KEYS.pension, KEYS.fonds],
    //     colors: [BRAND_COLORS_MAP.blue, BRAND_COLORS_MAP.lightBlue, BRAND_COLORS_MAP.orange],
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.lightBlue,
    //               },
    //               {
    //                 text: 'FONDS',
    //                 backgroundColor: BRAND_COLORS_MAP.orange,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: (_, props) => (
    //           <ExplanationText>
    //             {`Onderstaande spingrafiek geeft een overzicht van de behaalde rendementen en kosten en zet deze in verhouding tot de keuzes die het pensioenfonds gemaakt heeft en die de uitkomsten bepalen.\n\nVoor de grafiek zijn de cijfers geïndexeerd. Dit betekent dat het gemiddelde van alle deelnemende fondsen een waarde van 100 heeft. De grafiek laat zien hoe het pensioenfonds scoort vergeleken met andere, en vooral vergelijkbare pensioenfondsen. Benchmarkkosten hoger dan 100 betekent dat kosten hoger zijn dan verwacht.`}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Subtitle>
    //             KOSTEN VAN BELEGGEN IN CONTEXT
    //           </Subtitle>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box />
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     id: 'Speedometer6',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             data={[
    //               {
    //                 text: 'RANGE ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'RANGE VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText
    //             ml="2px"
    //             fontSize="7.93px"
    //           >
    //             Kosten per deelnemer indien uitgegaan wordt van het
    //             {' '}
    //             <i>aantal premiebetalende</i>
    //             {' '}
    //             deelnemers en
    //             {' '}
    //             <i>gepensioneerden</i>
    //             {' '}
    //             aan het eind van het verslagjaar. Dit is de afgesproken manier voor het berekenen van de kosten per deelnemer die ook wettelijk gepubliceerd moet worden.
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box
    //             pl="2px"
    //           >
    //             <Title
    //               ml="0.8px"
    //             >
    //               PENSIOENBEHEER
    //             </Title>
    //             <Subtitle
    //               mb="1px"
    //             >
    //               WAT ZIJN DE KOSTEN PER DEELNEMER?
    //             </Subtitle>
    //             <ExplanationText
    //               ml="2px"
    //               fontSize="7.93px"
    //             >
    //               Bij pensioenbeheerkosten kan het bestuur niet alles beslissen. Op het aantal deelnemers en de samenstelling van de deelnemers heeft het bestuur geen invloed. Met name de niet actieve deelnemers (slapers) hebben grote invloed op de kosten per deelnemer. Ook het aantal waardeoverdrachten (deelnemers die met reeds opgebouwde vermogen toetreden of vertrekken bij het pensioenfonds) heeft invloed op het kostenniveau.
    //             </ExplanationText>
    //           </Box>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             PENSIOENBEHEERKOSTEN PER DEELNEMER
    //           </TitleBox>
    //         ),
    //       },
    //     ],
    //   },
    //   {
    //     id: 'Speedometer7',
    //     type: 'Speedometer',
    //     data: {
    //       // values: SPEEDOMETER_VALUES_BIND,
    //       segments: SPEEDOMETER_SEGMENTS_BIND,
    //       secondSegments: SPEEDOMETER_SECOND_SEGMENTS,
    //     },
    //     extraElements: [
    //       {
    //         component: () => (
    //           <ExplanationText
    //             ml="2px"
    //             fontSize="7.93px"
    //           >
    //             Aanvullend kijken wij ook naar de kosten per deelnemer indien uitgegaan wordt van
    //             {' '}
    //             <i>alle</i>
    //             {' '}
    //             deelnemers, dus ook de ‘slapers’. Hoewel het bestuur geen invloed heeft op het aantal slapers, hebben deze alsnog invloed op de kosten.
    //           </ExplanationText>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'BarChart3',
    //     type: 'BarChart',
  
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             De mate van service verschilt per pensioenfonds o.a. op het gebied van tijdig verwerken van pensioenbetalingen, openingsuren helpdesk, website mogelijkheden en afwerking van klachten. Het gemiddelde is 100./n/nHogere service leidt in de regel tot hogere kosten.
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox
    //             h="23px"
    //           >
    //             {'WELKE SERVICE IS AFGESPROKEN MET WERKGEVER EN SOCIALE PARTNERS?'}
    //           </TitleBox>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Subtitle>
    //             WELKE KEUZES HEEFT PENSIOENFONDS GEMAAKT?
    //           </Subtitle>
    //         ),
    //       },
    //     ],
    //   },
    // ],
    // [
    //   {
    //     id: 'BarChart4',
    //     type: 'BarChart',
  
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'De complexiteit van een uit te voeren pensioenregeling is een gevolg van de afspraken die met de werkgever en sociale partners over het pensioen zijn gemaakt. Ook het type pensioenfonds beïnvloedt de complexiteit. De gemiddelde complexiteit is 100.\n\nEen complexere pensioenadministratie is kostbaarder.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             HOE COMPLEX IS DE PENSIOENADMINISTRATIE?
    //           </TitleBox>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box />
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'BarChart5',
    //     type: 'BarChart',
  
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'Indien processen zijn geautomatiseerd, dan zijn de kosten van verwerking lager dan indien een groot gedeelte van de werkzaamheden handmatig moet worden uitgevoerd. Het gemiddelde is 100.\n\nEen hogere automatiseringsgraad leidt in de regel tot lagere kosten.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox>
    //             IN HOEVERRE ZIJN DE PROCESSEN GEAUTOMATISEERD?
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'BarChart6',
    //     type: 'BarChart',
  
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.cream,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'Bij het veranderen van werkgever is het mogelijk het opgebouwd pensioen mee te nemen naar het pensioenfonds van de nieuwe werkgever. Het gemiddelde aantal overdrachten is 100.\n\nVeel binnen- en uitgaande overdrachten leidt tot hogere kosten.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <TitleBox
    //             h="34px"
    //           >
    //             HOEVEEL DEELNEMERS ZIJN BIJ HET PENSIOENFONDS GEKOMEN EN/OF HEBBEN HET PENSIOENFONDS INCLUSIEF OPGEBOUWD VERMOGEN VERLATEN?
    //           </TitleBox>
    //         ),
    //       },
  
    //     ],
    //   },
    //   {
    //     id: 'RadarChart1',
    //     type: 'RadarChart',
    //     keys: [KEYS.alle, KEYS.pension, KEYS.fonds],
    //     colors: [BRAND_COLORS_MAP.blue, BRAND_COLORS_MAP.lightBlue, BRAND_COLORS_MAP.orange],
    //     extraElements: [
    //       {
    //         component: () => (
    //           <TextBox
    //             flexDirection="row"
    //             data={[
    //               {
    //                 text: 'ALLE DEELNEMENDE\nPENSIOENFONDSEN',
    //                 color: 'white',
    //                 backgroundColor: BRAND_COLORS_MAP.blue,
    //               },
    //               {
    //                 text: 'VERGELIJKBARE\nPENSIOENFONDSEN',
    //                 backgroundColor: BRAND_COLORS_MAP.lightBlue,
    //               },
    //               {
    //                 text: 'FONDS',
    //                 backgroundColor: BRAND_COLORS_MAP.orange,
    //               },
    //             ]}
    //           />
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <ExplanationText>
    //             {'De spingrafiek geeft een overzicht van de pensioenbeheerkosten per deelnemer.\n\nDeze geïndexeerde kosten per deelnemer worden in relatie gezet tot keuzes van het bestuur die van invloed zijn op de kosten van pensioenbeheer, zoals het serviceniveau, de complexiteit voor het uitvoeren van de pensioenregeling en de mate van automatisering. Op het aantal overdrachten en de samenstelling van de deelnemers heeft het bestuur geen invloed, hoewel deze de kosten alsnog beïnvloeden.\n\nHet gemiddelde van alle deelnemende fondsen heeft een waarde van 100. De grafiek laat zien hoe het pensioenfonds scoort vergeleken met andere, en vooral vergelijkbare pensioenfondsen.'}
    //           </ExplanationText>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Box>
    //             <Subtitle>
    //               PENSIOENBEHEERKOSTEN IN CONTEXT
    //             </Subtitle>
    //           </Box>
    //         ),
    //       },
    //       {
    //         component: () => (
    //           <Stack
    //             backgroundColor={BRAND_COLORS_MAP.cream}
    //             w="full"
    //             h="full"
    //             p="2px"
    //             space={1}
    //           >
    //             <ExplanationText>
    //               De kosten van UPKO (inclusief het benchmarkrapport op basis waarvan die overzicht is opgesteld) bedraagt voor dit fonds € 0,10 per deelnemer.
    //             </ExplanationText>
    //             <ExplanationText>
    //               De informatie in deze rapportage is met de grootst mogelijke zorgvuldigheid vergaard en samengesteld. Aan de inhoud van deze rapportage kunnen geen rechten worden ontleend of aanspraken worden gemaakt. Alle rechten voorbehouden Institutional Benchmarking Institute BV.
    //             </ExplanationText>
    //           </Stack>
    //         ),
    //       },
    //     ],
    //   },
    // ],
  ]
}