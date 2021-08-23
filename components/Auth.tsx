import * as React from 'react'
import { Button, Text, View } from 'react-native'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { createAuthSessionManager } from '../utils/Auth'

WebBrowser.maybeCompleteAuthSession()

const useProxy = true

const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
  // scheme: 'your.app',
})

const discovery = AuthSession.fetchDiscoveryAsync('https://demo.identityserver.io')

// {
//   authorizationEndpoint: 'https://github.com/login/oauth/authorize',
//   tokenEndpoint: 'https://github.com/login/oauth/access_token',
//   revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
// }


// const authSessionManager = createAuthSessionManager({

// })

export default function App() {
  // Create and load an auth request
  const currentAuthRef = React.useRef()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Login!"
        onPress={async () => {
          currentAuthRef.current = new AuthSession.AuthRequest({
            clientId: 'native.code',
            redirectUri,
            scopes: ['identity'],
          })
          const discovery = await AuthSession.fetchDiscoveryAsync('https://demo.identityserver.io')
          const response = await currentAuthRef.current.promptAsync({
            ...discovery,
            useProxy,
          })
          if (response && response.type === 'success') {
            const authState = response.params
            console.log(authState)
          }
          console.log('A', response)
        }}
      />
      {/* {response && <Text>{JSON.stringify(response, null, 2)}</Text>} */}
    </View>
  )
}
