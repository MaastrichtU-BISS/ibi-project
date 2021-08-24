import {
  ApolloClient, createHttpLink, InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { Auth } from 'aws-amplify'
// import awsExports from '../aws-exports'
const awsExports = {
  aws_appsync_graphqlEndpoint: 'http://localhost:3000/graphql',
  aws_appsync_apiKey: '123aws_appsync_apiKey',
}

const URI = awsExports.aws_appsync_graphqlEndpoint

const httpLink = createHttpLink({
  uri: URI,
})

const authLink = setContext(async (_, { headers }) => {
  let token
  let session
  try {
    session = await Auth.currentSession()
    token = session.getIdToken().getJwtToken()
  } catch (error) {
    token = awsExports.aws_appsync_apiKey
  }
  return {
    headers: {
      ...headers,
      ...(
        session
          ? {
            authorization: token,
          }
          : {
            'x-api-key': token,
          }
      ),
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
