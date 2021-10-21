import * as React from 'react'
import { Button, View } from 'react-native'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { isBrowser } from 'colay-ui'
import { createAuthSessionManager } from '../utils/Auth'

WebBrowser.maybeCompleteAuthSession()

const useProxy = false

const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
  // scheme: 'your.app',
})

const AuthProviders = {
  callbackURL: 'http://localhost:19006',
  github: {
    discovery: {
      authorizationEndpoint: 'http://localhost:3000/auth-github',
      // authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      revocationEndpoint: 'https://github.com/settings/connections/applications/3b4d51e89cd0216dc26a',
    },
    config: {
      clientId: '3b4d51e89cd0216dc26a',
      scopes: ['identity', 'user', 'email', 'phone'],
    },
    useProxy: false,
  },
} as const
const authSessionManager = createAuthSessionManager({

})

export default function App() {
  React.useEffect(() => {
    if (!isBrowser) {
      WebBrowser.warmUpAsync()
    }

    return () => {
      if (!isBrowser) {
        WebBrowser.coolDownAsync()
      }
    }
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Login!"
        onPress={async () => {
          const authRequest = new AuthSession.AuthRequest({
            ...AuthProviders.github.config,
            redirectUri,
          })
          const result = await authRequest.promptAsync({
            ...AuthProviders.github.discovery,
          }, {
            useProxy: AuthProviders.github.useProxy,
          })
          // const {
          //   url,
          //   type,
          // } = await WebBrowser.openAuthSessionAsync(
          //   AuthProviders.github.discovery.authorizationEndpoint,
          //   AuthProviders.callbackURL,
          //   { showInRecents: false },
          // )
          if (result.type === 'cancel' || result.type === 'dismiss') {
            return { type: result.type }
          }
          return result
        }}
      />
    </View>
  )
}
