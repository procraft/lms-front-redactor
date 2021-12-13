import React, { useMemo } from 'react'
import Head from 'next/head'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { DevRedactor } from '../../../Redactor'

const RemoveBlockDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      props: {},
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
        {
          name: 'Section',
          component: 'Section',
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'div',
                id: 'test-content-id',
                style: {
                  border: '1px solid green',
                  minHeight: 100,
                },
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  components: [],
                  props: {
                    text: 'Inner Section to be removed',
                  },
                },
              ],
            },
          ],
          props: {},
        },
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
    }
  }, [])

  return (
    <>
      <Head>
        <title>Section</title>
      </Head>
      <DevRedactor
        initialObject={initialObject}
        redactorKey="test-removeBlock"
      />
    </>
  )
}

export default RemoveBlockDevPage
