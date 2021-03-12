import React from 'react'
import Head from 'next/head'
import App from '../../../src'

const MainPage: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Front Redactor</title>
        <meta
          name="description"
          content="Component boilerplate for prisma-cms"
        />
      </Head>
      <App
        inEditMode={false}
        object={undefined}
        // eslint-disable-next-line no-console
        updateObject={console.log}
        {...props}
      />
    </>
  )
}

export default MainPage
