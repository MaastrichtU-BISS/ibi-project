import { StatusBar } from 'expo-status-bar'
import {
  NativeBaseProvider,
} from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import {
  colorModeManager, NATIVE_BASE_CONFIG,
} from '../config/native-base'

type RootProviderProps = {
  children: React.ReactElement
}

export const RootProvider = (props: RootProviderProps) => {
  const {
    children,
  } = props
  return (
    <NativeBaseProvider
      config={NATIVE_BASE_CONFIG}
      colorModeManager={colorModeManager}
    >
      {children}
      <StatusBar />
    </NativeBaseProvider>
  )
}
