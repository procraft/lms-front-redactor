import React, { useMemo } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'

const SectionDevPage: Page = (props) => {
  const object = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      components: [
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              components: [],
              props: {
                text: 'Section',
              },
            },
          ],
          props: {
            tag: 'div',
            style: {
              border: '1px solid blue',
              minHeight: 100,
            },
          },
        },
      ],
      props: {},
    }
  }, [])

  return (
    <>
      <Head>
        <title>Section</title>
      </Head>
      <div
        id="component-wrapper"
        style={{
          marginBottom: 20,
        }}
      >
        <div id="component">
          <App
            inEditMode={false}
            object={object}
            // eslint-disable-next-line no-console
            updateObject={console.log}
            {...props}
          />
        </div>
      </div>
    </>
  )
}

export default SectionDevPage
