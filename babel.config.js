const IS_NEXT = process.env.npm_lifecycle_script.includes('next ')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: IS_NEXT
      ? ['@expo/next-adapter/babel']
      : ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.es',
            '.es6',
            '.mjs',
            '.ts',
            '.tsx',
          ],
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@hooks': './hooks',
            '@utils': './utils',
            '@root': './',
            '@core': './core',
            '@constants': './constants',
            '@type': './type',
          },
        },
      ],
    ],
  }
}
