import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import * as R from 'colay/ramda'

type OptionsType = {
  storageKey?: string
  paths: {
    accessTokenExpirationDate: string;
  }
  revokeAsync: (authState: AuthState) => Promise<any | void>
  refreshAsync: (authState: AuthState) => Promise<any | void>
}

type AuthState = any

export const createAuthSessionManager = (options: OptionsType) => {
  const {
    storageKey = '@MyApp:CustomOAuthKey',
    paths,
    refreshAsync,
    revokeAsync,
  } = options

  const signInAsync = async (authState: AuthState) => {
    await cacheAuthAsync(authState)
    return authState
  }
  const cacheAuthAsync = async (authState: AuthState) => {
    ref.currentAuthState = authState
    const storageValue = JSON.stringify(authState)
    let result
    if (Platform.OS !== 'web') {
      // Securely store the auth on your device
      result = await SecureStore.setItemAsync(storageKey, storageValue)
    } else {
      result = await AsyncStorage.setItem(storageKey, JSON.stringify(authState))
    }
    return result
  }
  const getCachedAuthAsync = async () => {
    let value
    if (Platform.OS !== 'web') {
      // Securely store the auth on your device
      value = await SecureStore.getItemAsync(storageKey)
    } else {
      value = await AsyncStorage.getItem(storageKey)
    }
    const authState = JSON.parse(value)
    if (authState) {
      if (checkIfTokenExpired(authState)) {
        return refreshAuthAsync(authState)
      }
      return authState
    }
    return null
  }
  const removeCachedAuthAsync = async () => {
    let result
    if (Platform.OS !== 'web') {
      // Securely store the auth on your device
      result = await SecureStore.deleteItemAsync(storageKey)
    } else {
      result = await AsyncStorage.getItem(storageKey)
    }
    return result
  }
  const checkIfTokenExpired = (authState: AuthState) => {
    const accessTokenExpirationDate: string = R.path(
      paths.accessTokenExpirationDate,
      authState,
    ) as string
    return new Date(accessTokenExpirationDate) < new Date()
  }

  const refreshAuthAsync = async (authState: AuthState) => {
    const newAuthState = await refreshAsync?.(authState)
    await cacheAuthAsync(newAuthState)
    return newAuthState
  }

  const signOutAsync = async (authState: AuthState) => {
    try {
      await revokeAsync?.(authState)
      await removeCachedAuthAsync()
      return null
    } catch (e) {
      alert(`Failed to revoke token: ${e.message}`)
    }
  }
  const ref = {
    signInAsync,
    signOutAsync,
    cacheAuthAsync,
    getCachedAuthAsync,
    removeCachedAuthAsync,
    checkIfTokenExpired,
    refreshAuthAsync,
    currentAuthState: getCachedAuthAsync(),
    isReady: false,
  }
  setTimeout(async () => {
    ref.currentAuthState = await getCachedAuthAsync()
    ref.isReady = true
  }, 0)
  return ref
}
