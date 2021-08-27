import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import './config'
import {
  colorModeManager, NATIVE_BASE_CONFIG
} from './config/native-base'
import useInitializer from './hooks/useInitializer'
import { HomeScreen } from './screens/HomeScreen'
// import { ApolloProvider } from '@apollo/client'
// import AuthDemo from '@components/Auth'
// import { GraphqlTest } from '@components/GraphqlTest'
// import { apolloClient } from './config/apollo'
// import useColorScheme from './hooks/useColorScheme'
// import Navigation from './navigation'

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
      {/* <GraphqlTest /> */}
      {/* <AuthDemo /> */}
      <StatusBar />
    </NativeBaseProvider>
  // </ApolloProvider>
  )
}
