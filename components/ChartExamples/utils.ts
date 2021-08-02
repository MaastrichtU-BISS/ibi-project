import { useTheme, useColorMode } from 'native-base'

export const useChartTheme = () => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return [
    {
      background: theme.colors[colorMode]['50'],
      textColor: theme.colors[colorMode]['900'],
      fontSize: 11,
      axis: {
        domain: {
          line: {
            stroke: theme.colors[colorMode]['900'],
            strokeWidth: 1,
          },
        },
        ticks: {
          line: {
            stroke: theme.colors[colorMode]['900'],
            strokeWidth: 1,
          },
        },
      },
      grid: {
        line: {
          stroke: theme.colors[colorMode]['900'],
          strokeWidth: 1,
        },
      },
    },
    colorMode,
  ]
}

export const BRAND_COLORS_MAP = {
  blue: '#203c65',
  orange: '#d58941',
  lightBlue: '#99a2bd',
}

export const BRAND_COLORS = Object.values(BRAND_COLORS_MAP).sort()

export const KEYS = ['FONDS', 'VERGELIJKBARE PENSIOENFONDSEN', 'ALLE DEELNEMENDE PENSIOENFONDSEN']
