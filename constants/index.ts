export const BRAND_COLORS_MAP = {
  blue: '#18376D',
  orange: '#F57F17',
  lightBlue: '#B8CCE4',
}
// export const BRAND_COLORS_MAP = {
//   blue: '#203c65',
//   orange: '#d58941',
//   lightBlue: '#99a2bd',
// }

export const BRAND_COLORS = Object.values(BRAND_COLORS_MAP).sort()

export const KEYS = ['FONDS', 'VERGELIJKBARE PENSIOENFONDSEN', 'ALLE DEELNEMENDE PENSIOENFONDSEN']

export const DATA = {
  PieChart: [
    {
      id: KEYS[0],
      label: KEYS[0],
      value: 119,
      color: BRAND_COLORS[0],
    },
    {
      id: KEYS[1],
      label: KEYS[1],
      value: 69,
      color: BRAND_COLORS[1],
    },
    {
      id: KEYS[2],
      label: KEYS[2],
      value: 495,
      color: BRAND_COLORS[2],
    },
  ],
  RadarChart: [
    {
      [KEYS[0]]: 10,
      [KEYS[1]]: 60,
      [KEYS[2]]: 32,
      color: BRAND_COLORS[0],
    },
    {
      [KEYS[0]]: 20,
      [KEYS[1]]: 70,
      [KEYS[2]]: 72,
      color: BRAND_COLORS[1],
    },
    {
      [KEYS[0]]: 30,
      [KEYS[1]]: 28,
      [KEYS[2]]: 75,
      color: BRAND_COLORS[2],
    },
  ],
  BarChart: [
    {
      country: 'AD',
      [KEYS[0]]: 24,
      [`${KEYS[0]}Color`]: BRAND_COLORS[0],
      [KEYS[1]]: 187,
      [`${KEYS[1]}Color`]: BRAND_COLORS[1],
      [KEYS[2]]: 86,
      [`${KEYS[2]}Color`]: BRAND_COLORS[2],
    },
  ],
  HalfPieChart: [
    {
      id: KEYS[0],
      label: KEYS[0],
      value: 119,
      color: BRAND_COLORS[0],
    },
    {
      id: KEYS[1],
      label: KEYS[1],
      value: 69,
      color: BRAND_COLORS[1],
    },
    {
      id: KEYS[2],
      label: KEYS[2],
      value: 495,
      color: BRAND_COLORS[2],
    },
  ],
}
