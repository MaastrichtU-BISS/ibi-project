export const BRAND_COLORS_MAP = {
  blue: '#18376D',
  orange: '#F57F17',
  lightBlue: '#B8CCE4',
  cream: 'rgb(245, 239, 228)',
  green: '#32a866',
}
// export const BRAND_COLORS_MAP = {
//   blue: '#203c65',
//   orange: '#d58941',
//   lightBlue: '#99a2bd',
// }

export const BRAND_COLORS = Object.values(BRAND_COLORS_MAP).sort()

export const TITLE_COLOR = 'rgb(24, 55, 109)'

export const KEYS = ['FONDS', 'VERGELIJKBARE PENSIOENFONDSEN', 'ALLE DEELNEMENDE PENSIOENFONDSEN']

export const DATA = {
  html: '',
  Speedometer: {
    values: [
      {
        value: 100,
        label: KEYS[0],
        needleColor: BRAND_COLORS[0],
      },
      {
        value: 200,
        label: KEYS[1],
        needleColor: BRAND_COLORS[1],
      },
      {
        value: 300,
        label: KEYS[2],
        needleColor: BRAND_COLORS[2],
      },
    ],
    segments: [
      {
        // text: KEYS[0],
        value: 119,
        color: BRAND_COLORS[0],
      },
      {
        // text: KEYS[1],
        value: 69,
        color: BRAND_COLORS[1],
      },
      {
        // text: KEYS[2],
        value: 495,
        color: BRAND_COLORS[2],
      },
    ],
  },
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

// html: `<!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// .card {
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
//   width: 500px;
//   height: 500px;
// }

// .card:hover {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }

// .container {
//   padding: 2px 16px;
// }

// .content {
//   max-width: 500px;
//   margin: auto;
// }
// </style>
// </head>
// <body>
// <div class="content">
//   <h2>Speedometer</h2>

//   <div id="Speedometer" class="card">
//   </div>

//   <h2>PieChart</h2>

//   <div id="PieChart" class="card">

//   </div>
//   <h2>RadarChart</h2>

//   <div id="RadarChart" class="card">

//   </div>
//   <h2>BarChart</h2>

//   <div id="BarChart" class="card">

//   </div>
//   <h2>HalfPieChart</h2>

//   <div id="HalfPieChart" class="card">

//   </div>
// </div>

// </body>
// </html> `,
