module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
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
