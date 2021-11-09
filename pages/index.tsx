import React from 'react'
import Head from 'next/head'
import {
  Text, Box,
} from 'native-base'
// import { GetStaticProps, GetStaticPaths, GetServerSideProps, } from 'next'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Text>Heyy</Text>
    </Box>
  )
}
