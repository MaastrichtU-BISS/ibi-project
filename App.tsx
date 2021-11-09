import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import './config'
import {
  colorModeManager, NATIVE_BASE_CONFIG,
} from './config/native-base'
import useInitializer from './hooks/useInitializer'
import { HomeScreen } from './screens/HomeScreen'

export default function App() {
  const isLoadingComplete = useInitializer()

  if (!isLoadingComplete) {
    return null
  }
  return (
    <NativeBaseProvider
      config={NATIVE_BASE_CONFIG}
      colorModeManager={colorModeManager}
    >
      <HomeScreen />
      <StatusBar />
    </NativeBaseProvider>
  )
}
