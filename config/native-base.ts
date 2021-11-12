import { extendTheme } from 'native-base'
import 'react-native-gesture-handler'

export const NATIVE_BASE_CONFIG = {
  theme: extendTheme({
    config: { initialColorMode: 'light' },
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
