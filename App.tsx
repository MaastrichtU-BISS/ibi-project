import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import {
  ColorMode, extendTheme, NativeBaseProvider, StorageManager,
} from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import './config'
// import { apolloClient } from './config/apollo'
import useInitializer from './hooks/useInitializer'
import AuthDemo from '@components/Auth'
// import useColorScheme from './hooks/useColorScheme'
// import Navigation from './navigation'
import { HomeScreen } from './screens/HomeScreen'

const colorModeManager: StorageManager = {
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

export default function App() {
  const isLoadingComplete = useInitializer()
  // const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  }
  return (
  // <ApolloProvider client={apolloClient}>
    <NativeBaseProvider
      config={NATIVE_BASE_CONFIG}
      colorModeManager={colorModeManager}
    >
      {/* <Navigation colorScheme={colorScheme} /> */}
      {/* <Example /> */}
      <HomeScreen />
      {/* <AuthDemo /> */}
      <StatusBar />
    </NativeBaseProvider>
  // </ApolloProvider>
  )
}

const NATIVE_BASE_CONFIG = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
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
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          // rounded: 'md',
        },
        defaultProps: {

        },
        variants: {
          linearGradient: () => ({
            p: 0,
            _stack: {
              p: 2,
              bg: {
                linearGradient: {
                  colors: ['violet.800', 'lightBlue.300'],
                  start: [0, 0],
                  end: [1, 0],
                },
              },
              rounded: 'lg',
            },
            rounded: 'lg',
          }),
        },
      },
    },
  }),
}
