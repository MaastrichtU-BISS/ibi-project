import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'setimmediate'
import '../screens/HomeScreen/newOverride.css'

const { RootProvider } = true
  ? require('@root/providers/RootProvider')
  : require('@root/providers/RootProvider')

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <RootProvider>
        <Component {...pageProps} />
      </RootProvider>
    </>
  )
}

export default MyApp
