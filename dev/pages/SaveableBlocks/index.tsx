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
            style: {
              border: '1px solid orange',
              margin: '10px',
            },
          },
          components: [
            {
              component: 'HtmlTag',
              name: 'HtmlTag',
              props: {
                text: '\n  ',
              },
              components: [],
            },
            {
              component: 'HtmlTag',
              name: 'HtmlTag',
              props: {
                tag: 'style',
              },
              components: [
                {
                  component: 'HtmlTag',
                  name: 'HtmlTag',
                  props: {
                    text: '\n    .outer {\n      border: 1px solid blue;\n      margin: 10px;\n    }\n\n    .inner {\n      border: 1px solid green;\n      margin: 10px;\n    }\n  ',
                  },
                  components: [],
                },
              ],
            },
            {
              component: 'HtmlTag',
              name: 'HtmlTag',
              props: {
                text: '\n  ',
              },
              components: [],
            },
            {
              component: 'HtmlTag',
              name: 'HtmlTag',
              props: {
                className: 'outer',
                tag: 'div',
              },
              components: [
                {
                  component: 'HtmlTag',
                  name: 'HtmlTag',
                  props: {
                    text: '\n    ',
                  },
                  components: [],
                },
                {
                  id: 'TGFuZGluZ1RlbXBsYXRlOjE4Mg==',
                  component: 'HtmlTag',
                  name: 'HtmlTag',
                  props: {},
                  components: [],
                },
                {
                  id: 'TGFuZGluZ1RlbXBsYXRlOjE4Mg==',
                  component: 'HtmlTag',
                  name: 'HtmlTag',
                  props: {},
                  components: [],
                },
              ],
            },
          ],
        },
        {
          id: 'TGFuZGluZ1RlbXBsYXRlOjE4Mw==',
          component: 'HtmlTag',
          name: 'HtmlTag',
          description: null,
          uri: null,
          props: {
            tag: 'div',
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
