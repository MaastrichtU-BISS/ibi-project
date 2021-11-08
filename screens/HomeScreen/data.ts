export const DATA = {
  pages: [
    [
      {
        id: 'PieChart0',
        data: [
          {
            id: 'Pensioenbeheer',
            label: 'Pensioenbeheer',
            value: 15,
          },
          {
            id: ' Transacties',
            label: ' Transacties',
            value: 10,
          },
          {
            id: 'Vermogensbeheer',
            label: 'Vermogensbeheer',
            value: 75,
          },
        ],
        extraElementsData: [
          {
            value: 'De kosten (exclusief betaalde pensioenpremies) bestaan uit drie categorieën:\n• Vermogensbeheer, kosten van beleggen: € 35 miljoen; 0.35% beheerd vermogen (35 bps)\n• Transacties, aan- en verkoopkosten: € 5 miljoen, 0.05% van beheerd vermogen (5 bps)\n• Pensioenbeheer, kosten voor administratie: € 7.5 miljoen, € 200 per deelnemer',
          },
        ],
      },
      {
        id: 'PieChart1',
        data: [
          {
            id: 'Pensioenbeheer',
            label: 'Pensioenbeheer',
            value: 12.8,
          },
          {
            id: ' Transacties',
            label: ' Transacties',
            value: 23.0,
          },
          {
            id: 'Vermogensbeheer',
            label: 'Vermogensbeheer',
            value: 64.1,
          },
        ],

      },
      {
        id: 'PieChart2',
        data: [
          {
            id: 'Pensioenbeheer',
            label: 'Pensioenbeheer',
            value: 22.1,
          },
          {
            id: ' Transacties',
            label: ' Transacties',
            value: 18.7,
          },
          {
            id: 'Vermogensbeheer',
            label: 'Vermogensbeheer',
            value: 59.3,
          },
        ],

      },
      {
        id: 'Speedometer0',
        type: 'Speedometer',

        data: {
          min: 7,
          max: 21,
          values: [
            { value: 18, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 15, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 14, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 7 }, { value: 21 }],
          secondSegments: [{ value: 9 }, { value: 20 }],

        },
      },

    ],
    [
      {
        id: 'Speedometer1',
        type: 'Speedometer',
        data: {
          min: 4,
          max: 12,
          values: [
            { value: 8.3, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 8.0, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 8.5, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 4 }, { value: 12 }],
          secondSegments: [{ value: 5.5 }, { value: 10.6 }],

        },
      },

      {
        id: 'Speedometer2',
        type: 'Speedometer',
        data: {
          min: 5,
          max: 11,
          values: [
            { value: 8.2, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 7.6, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 7.0, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 5 }, { value: 11 }],
          secondSegments: [{ value: 6 }, { value: 10 }],

        },
      },

      {
        id: 'Speedometer3',
        type: 'Speedometer',
        data: {
          min: 5,
          max: 16.5,
          values: [
            { value: 9.6, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 8.4, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 11.5, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 4.9 }, { value: 16.5 }],
          secondSegments: [{ value: 4.9 }, { value: 15.5 }],

        },
      },

      {
        id: 'Speedometer4',
        type: 'Speedometer',
        data: {
          min: 11,
          max: 63,
          values: [
            { value: 38, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 34, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 37, label: 'FONDS', color: '#F57F17' },
            { value: 35, label: 'BENCHMARKKOSTEN', color: '#800040' },
          ],

          segments: [{ value: 11 }, { value: 63 }],
          secondSegments: [{ value: 24 }, { value: 53 }],

        },
      },
      {
        id: 'Speedometer5',
        type: 'Speedometer',
        data: {
          min: 5,
          max: 24,
          values: [
            { value: 11, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 14, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 9, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 4.8 }, { value: 24 }],
          secondSegments: [{ value: 7.0 }, { value: 18 }],

        },
      },
      {
        id: 'BarChart0',
        type: 'BarChart',
        min: 61,
        max: 172,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 92, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 80, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 12,
            1: 78,
            2: 21,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
      {
        id: 'BarChart1',
        type: 'BarChart',
        min: 0,
        max: 193,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 83, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 114, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 100,
            1: 173,
            2: 10,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
      {
        id: 'BarChart2',
        type: 'BarChart',
        min: 0,
        max: 265,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 142, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 116, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 19,
            1: 206,
            2: 40,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
    ],
    [

      {
        id: 'RadarChart0',
        type: 'RadarChart',
        data: [
          {
            type: 'Benchmarkkosten', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 103, 'VERGELIJKBARE PENSIOENFONDSEN': 103, FONDS: 110,
          },
          {
            type: '1-jarig Rendement Index', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 89, FONDS: 71,
          },
          {
            type: '5-jarig Rendement', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 88, FONDS: 77,
          },
          {
            type: '10-jarig Rendement', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 90, FONDS: 98,
          },
          {
            type: 'Beleggingen via beleggingsfonds ', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 142, FONDS: 116,
          },
          {
            type: 'Mate van actief beheer', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 83, FONDS: 114,
          },
          {
            type: 'Spreiding van de belegggingen', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 98, FONDS: 80,
          },
        ],
      },

      {
        id: 'Speedometer6',
        type: 'Speedometer',
        data: {
          min: 50,
          max: 600,
          values: [
            { value: 300, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 250, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 200, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [
            { value: 50 },
            { value: 600 },
          ],
          secondSegments: [{ value: 100 }, { value: 550 }],

        },
      },
      {
        id: 'Speedometer7',
        type: 'Speedometer',
        data: {
          min: 20,
          max: 400,
          values: [
            { value: 200, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
            { value: 175, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
            { value: 150, label: 'FONDS', color: '#F57F17' },
          ],

          segments: [{ value: 20 }, { value: 400 }],
          secondSegments: [{ value: 80 }, { value: 350 }],

        },
      },
      {
        id: 'BarChart3',
        type: 'BarChart',
        min: 76,
        max: 123,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 111, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 102, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 26,
            1: 21,
            2: 0,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
    ],
    [
      {
        id: 'BarChart4',
        type: 'BarChart',
        min: 65,
        max: 165,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 110, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 90, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 27,
            1: 66,
            2: 23,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },

      {
        id: 'BarChart5',
        type: 'BarChart',
        min: 23,
        max: 146,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 127, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 132, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 84,
            1: 39,
            2: 0,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
      {
        id: 'BarChart6',
        type: 'BarChart',
        min: 77,
        max: 200,
        values: [
          { value: 100, label: 'ALLE DEELNEMENDE PENSIOENFONDSEN', color: '#32a866' },
          { value: 89, label: 'VERGELIJKBARE PENSIOENFONDSEN', color: '#B8CCE4' },
          { value: 102, label: 'FONDS', color: '#F57F17' },
        ],
        data: [
          {
            0: 0,
            1: 30,
            2: 92,
            '0Color': '#18376D',
            '1Color': '#B8CCE4',
            '2Color': '#18376D',
          },
        ],
        keys: ['0', '1', '2'],
      },
      {
        id: 'RadarChart1',
        type: 'RadarChart',
        data: [
          {
            type: 'Kosten per deelnemer volgens Pensioenfederatie', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 100, FONDS: 79,
          },

          {
            type: 'Kosten per deelnemer', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 100, FONDS: 90,
          },

          {
            type: 'Mate van service aan deelnemer', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 111, FONDS: 102,
          },

          {
            type: 'Mate van complexiteit van het pensioenfonds', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 107, FONDS: 81,
          },

          {
            type: 'Mate van automatisering', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 127, FONDS: 132,
          },

          {
            type: 'Aantal overdrachten', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 89, FONDS: 102,
          },

          {
            type: 'Aantal slapers', 'ALLE DEELNEMENDE PENSIOENFONDSEN': 100, 'VERGELIJKBARE PENSIOENFONDSEN': 62, FONDS: 33,
          },
        ],
      },
    ],
  ],
  pensionFundName: 'Pensioenfonds XYZ',
  fundName: 'Pensioenfonds XYZ',
}
