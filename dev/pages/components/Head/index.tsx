import React, { useMemo } from 'react'
import NextHead from 'next/head'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { DevRedactor } from '../../../Redactor'

const HeadDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      components: [
        {
          name: 'Head',
          component: 'Head',
          components: [
            // {
            //   name: 'HtmlTag',
            //   component: 'HtmlTag',
            //   props: {
            //     tag: 'ttttttt',
            //   },
            //   components: [
            //     {
            //       name: 'HtmlTag',
            //       component: 'HtmlTag',
            //       components: [],
            //       props: {
            //         text: 'Custom title',
            //       },
            //     },
            //   ],
            // },
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'link',
                rel: 'shortcut icon',
                href: 'https://fs03.getcourse.ru/fileservice/file/download/a/98234/sc/123/h/60822dfd0cb2941dc1024c337af83d02.ico',
              },
              components: [],
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
      props: {},
    }
  }, [])

  return (
    <>
      <NextHead>
        <title>Head</title>
      </NextHead>
      <NextHead>
        <title>Head2</title>
      </NextHead>
      <DevRedactor initialObject={initialObject} redactorKey="test-head" />
    </>
  )
}

export default HeadDevPage
