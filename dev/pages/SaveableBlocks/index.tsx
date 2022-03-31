import React, { useMemo } from 'react'
import NextHead from 'next/head'
import { RedactorComponentObject } from '../../../src'
import { Page } from '../_App/interfaces'
import { DevRedactor } from '../../Redactor'

export const SaveableBlocksDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Root section',
      component: 'Section',
      props: {},
      components: [
        {
          name: 'HtmlTag',
          description: null,
          component: 'HtmlTag',
          props: {
            tag: 'div',
            id: 'test-content-id',
            style: {
              border: '1px solid orange',
              margin: '10px',
            },
          },
          components: [],
        },
      ],
    }
  }, [])

  return (
    <>
      <NextHead>
        <title>Saveable Blocks</title>
      </NextHead>

      <DevRedactor
        initialObject={initialObject}
        redactorKey="test-saveable-blocks"
      />
    </>
  )
}
