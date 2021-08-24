import React from 'react'
import * as Linking from 'expo-linking'

export const LinkingHandler = () => {
  React.useEffect(() => {
    const listener = (event) => {
      console.log('RESS', event)
    }
    Linking.addEventListener('url', listener)
    return () => Linking.removeEventListener('url', listener)
  }, [])
  return null
}
