import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import { AppContext, AppInitialProps } from 'next/app'

/**
 * Extended App context
 */
export interface NextPageContextCustom extends NextPageContext {}

export interface PageProps extends React.PropsWithChildren<{}> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialApolloState?: any

  /**
   * Apollo-client API query result
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryResult?: any

  /**
   * Server-side status code
   */
  statusCode?: number

  /**
   * Разрешает анонимный доступ к странице
   */
  allowAnonimouse?: boolean
}

/**
 * Main App props
 */
export type AppProps = {
  Component: Page
  pageProps: PageProps
}

/**
 * Pages custom props
 */
export type Page<P extends PageProps = PageProps, IP = P> = NextComponentType<
  NextPageContextCustom,
  IP,
  P
>

/**
 * App custopm initial props
 */
export interface AppInitialPropsCustom extends AppInitialProps {
  pageProps: PageProps
}

/**
 * Custom App
 */
export type MainApp<P = AppProps> = React.FC<P> & {
  getInitialProps?(context: AppContext): Promise<AppInitialPropsCustom>
}
