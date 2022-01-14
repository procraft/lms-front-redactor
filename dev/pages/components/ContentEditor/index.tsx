import React, { useMemo } from 'react'
import Head from 'next/head'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { DevRedactor } from '../../../Redactor'

const ContentEditorDevPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'ContentEditor',
      component: 'ContentEditor',
      props: {
        id: 'test-content-id',
      },
      components: [
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [],
          props: {
            tag: 'script',
            src: './test.js',
          },
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'script',
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              components: [],
              props: {
                text: 'console.log("test")',
              },
            },
          ],
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [],
          props: {
            tag: 'style',
            src: './test.css',
          },
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'style',
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              components: [],
              props: {
                text: 'body {color: #333;}',
              },
            },
          ],
        },
        // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&amp;subset=latin,cyrillic"/>
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [],
          props: {
            tag: 'link',
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&amp;subset=latin,cyrillic',
          },
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
                text: 'P content',
              },
            },
          ],
          props: {
            tag: 'p',
            style: {
              border: '1px dashed blue',
              minHeight: 50,
            },
          },
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          components: [
            {
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
                        text: 'Section content',
                      },
                    },
                  ],
                  props: {
                    tag: 'div',
                    role: 'sectionBox',
                    style: {
                      border: '1px solid blue',
                      minHeight: 100,
                    },
                  },
                },
                {
                  name: 'CourseOrderDev',
                  component: 'CourseOrderDev',
                  props: {
                    className: 'test',
                  },
                  components: [],
                },
              ],
              props: {},
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

  return useMemo(() => {
    return (
      <>
        <Head>
          <title>ContentEditor</title>
        </Head>
        <DevRedactor
          initialObject={initialObject}
          redactorKey="test-components-contentEditor"
        />
      </>
    )
  }, [initialObject])
}

export default ContentEditorDevPage
