import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../../../src/theme'

import {
  AppProps,
  MainApp,
} from './interfaces'

export * from './interfaces'


const App: MainApp<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
