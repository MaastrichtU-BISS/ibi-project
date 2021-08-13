export const INPUT_JSON_SCHEMA = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Generated schema for Root',
  type: 'object',
  properties: {
    PieChart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          label: {
            type: 'string',
          },
          value: {
            type: 'number',
          },
          color: {
            type: 'string',
            format: 'color',
          },
        },
        required: [
          'id',
          'label',
          'value',
          'color',
        ],
      },
    },
    RadarChart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          FONDS: {
            type: 'number',
          },
          'VERGELIJKBARE PENSIOENFONDSEN': {
            type: 'number',
          },
          'ALLE DEELNEMENDE PENSIOENFONDSEN': {
            type: 'number',
          },
          color: {
            type: 'string',
            format: 'color',
          },
        },
        required: [
          'FONDS',
          'VERGELIJKBARE PENSIOENFONDSEN',
          'ALLE DEELNEMENDE PENSIOENFONDSEN',
          'color',
        ],
      },
    },
    BarChart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
          },
          FONDS: {
            type: 'number',
          },
          FONDSColor: {
            type: 'string',
            format: 'color',
          },
          'VERGELIJKBARE PENSIOENFONDSEN': {
            type: 'number',
          },
          'VERGELIJKBARE PENSIOENFONDSENColor': {
            type: 'string',
            format: 'color',
          },
          'ALLE DEELNEMENDE PENSIOENFONDSEN': {
            type: 'number',
          },
          'ALLE DEELNEMENDE PENSIOENFONDSENColor': {
            type: 'string',
            format: 'color',
          },
        },
        required: [
          'country',
          'FONDS',
          'FONDSColor',
          'VERGELIJKBARE PENSIOENFONDSEN',
          'VERGELIJKBARE PENSIOENFONDSENColor',
          'ALLE DEELNEMENDE PENSIOENFONDSEN',
          'ALLE DEELNEMENDE PENSIOENFONDSENColor',
        ],
      },
    },
    HalfPieChart: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          label: {
            type: 'string',
          },
          value: {
            type: 'number',
          },
          color: {
            type: 'string',
            format: 'color',
          },
        },
        required: [
          'id',
          'label',
          'value',
          'color',
        ],
      },
    },
  },
  required: [
    'PieChart',
    'RadarChart',
    'BarChart',
    'HalfPieChart',
  ],
}
