import React, { useMemo } from 'react'
import NextHead from 'next/head'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { DevRedactor } from '../../../Redactor'

const SectionDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
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
      <NextHead>
        <title>Section</title>
      </NextHead>
      <DevRedactor initialObject={initialObject} redactorKey="test-section" />
    </>
  )
}

export default SectionDevPage
