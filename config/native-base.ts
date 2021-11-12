import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  ColorMode, extendTheme, StorageManager,
} from 'native-base'
import 'react-native-gesture-handler'

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value)
    } catch (e) {
      console.log(e)
    }
  },
}

export const NATIVE_BASE_CONFIG = {
  // dependencies: {
  //   'linear-gradient': require('expo-linear-gradient').LinearGradient,
  // },
  theme: extendTheme({
    config: { initialColorMode: 'dark' },
    colors: {
      primary: {
        50: '#dff1ff',
        100: '#b1d2ff',
        200: '#81b4fd',
        300: '#5197f9',
        400: '#2279f6',
        500: '#095fdd',
        600: '#014aad',
        700: '#00357d',
        800: '#00204e',
        900: '#000b20',
      },
    },
  }),
}
