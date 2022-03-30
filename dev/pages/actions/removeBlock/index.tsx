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
      components: [
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
                  border: '1px solid blue',
                  minHeight: 100,
                },
              },
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
            },
          ],
          props: {},
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
      <DevRedactor
        initialObject={initialObject}
        redactorKey="test-removeBlock"
      />
    </>
  )
}

export default RemoveBlockDevPage
