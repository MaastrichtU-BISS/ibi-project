import { GoalSVG } from '@assets/images/goal'
import {
  Title,
  TrademarkText,
  ExplanationText,
  TitleBox,
  Column,
  Page,
  Section,
} from '@components'
import {
  SIZE,
  FONT_WEIGHT,
  TOP_MARGIN,
  BRAND_COLORS_MAP,
} from '@constants'
import {
  Box,
  Stack,
} from 'native-base'
import React from 'react'

import { PieChart } from '@components/ChartExamples'

export const Page1 = ({ data }) => {
  const PieChart0 = data.pages[0][0]
  const { pensionFundName, fundName } = data
  return (
    <Page
      nativeID="pf1"
    >
      <Column>
        <Title
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgb(128,104,60)',
          // letterSpacing: 0.5,
          }}
        >
          {pensionFundName}
        </Title>
        <Box
          alignItems="center"
          bg={BRAND_COLORS_MAP.blue}
        >
          <Box
            p={2}
            mb={1}
          >
            <Title
              style={{
                fontSize: '13px',
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
                fontSize: '11px',
                fontWeight: FONT_WEIGHT,
                color: 'white',
                letterSpacing: 0.5,
              }}
              mb={1}
            >
              Wat zijn de kosten die uw pensioenfonds maakt?
            </Title>
            <Title
              style={{
                fontSize: '11px',
                fontWeight: FONT_WEIGHT,
                color: 'white',
                letterSpacing: 0.5,
              }}
              mb="15px"
            >
              En wat krijgt u er voor terug?
            </Title>
            <Title
              style={{
                fontSize: '9px',
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
        <Section
          flexDirection="row"
          space={4}
        >
          <Box>
            <GoalSVG
              fill="#F09743"
              width={51}
              height={51}
            />
          </Box>
          <Box flex={1}>
            <Title
              style={{
                fontSize: '13px',
                fontWeight: FONT_WEIGHT,
                color: '#18376D',
                letterSpacing: 0.5,
              }}
              mb={1}
            >
              Doel
            </Title>
            <ExplanationText>
              Het Institutioneel Benchmarking Instituut benchmarkt sinds 2012 de kosten van Nederlandse pensioenfondsen op basis van wet- en regelgeving. Dit Uniform PensioenKOstenoverzicht (UPKO™) geeft belangrijke informatie over de kosten in relatie tot de prestaties van het pensioenfonds.
            </ExplanationText>
          </Box>
        </Section>
        <Section>
          <Title
            style={{
              fontSize: '13px',
              fontWeight: FONT_WEIGHT,
              color: '#18376D',
              letterSpacing: 0.5,
            }}
            mb={1}
          >
            De kosten van uw pensioen
          </Title>
          <ExplanationText>
            {PieChart0.extraElementsData[0].value}
          </ExplanationText>
        </Section>
        <Section>
          <TitleBox>
            VERGELIJKBARE PENSIOENFONDSEN
          </TitleBox>
          <Stack direction="row">
            <Box
              nativeID="PieChart0Container"
            >
              <PieChart
                nativeID="PieChart0"
                data={PieChart0.data}
              />
            </Box>
            <ExplanationText>
              Kosten van vermogensbeheer en transactiekosten bepalen voor een groot deel de kosten.
            </ExplanationText>
          </Stack>

        </Section>

        <TitleBox>
          ALLE DEELNEMENDE PENSIOENFONDSEN
        </TitleBox>
        <TitleBox>
          VERDELING KOSTEN VAN HET PENSOENFONDS (% VAN HET TOTAAL)
        </TitleBox>
        <TrademarkText />
      </Column>
    </Page>
  )
}
