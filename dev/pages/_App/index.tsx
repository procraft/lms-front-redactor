import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import theme from '../../../src/theme'

import { AppProps, MainApp } from './interfaces'
import { useApollo } from '../../lib/apolloClient'

export * from './interfaces'

const App: MainApp<AppProps> = ({ Component, pageProps }) => {

  const apolloClient = useApollo(pageProps.initialApolloState, false)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

export default App
