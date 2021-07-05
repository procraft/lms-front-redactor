import React, { useMemo } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'
import { ContentEditor } from '../../../../src/components/ContentEditor'
import { HtmlTag } from '../../../../src/components/HtmlTag'
import useRedactorStoreDev from '../../../hooks/useRedactorStoreDev'
import { Section } from '../../../../src/components/Section'

const getRedactorObjectComponent = (props: getRedactorObjectComponentProps) => {
  const { object } = props

  if (!object) {
    return null
  }

  let Component: RedactorComponent | undefined

  switch (object.component) {
    case 'Section':
      Component = Section
      break

    // case 'LandingLayout':
    //   Component = LandingLayout
    //   break

    // case 'LandingHeader':
    //   Component = LandingHeader
    //   break

    // case 'LandingFooter':
    //   Component = LandingFooter
    //   break

    case 'ContentEditor':
      Component = ContentEditor
      break

    case 'HtmlTag':
      Component = HtmlTag
      break

    // case 'LandingRouter':
    //   Component = LandingRouter
    //   break

    // case 'CourseOrder':
    //   Component = CourseOrder
    //   break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component

  // return <Component
  //   object={object}
  // />;
}

const ContentEditorDevPage: Page = (props) => {
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
                    style: {
                      border: '1px solid blue',
                      minHeight: 100,
                    },
                  },
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

  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: 'test-content-editor-object',
    initialObject,
  })

  return useMemo(() => {
    return (
      <>
        <Head>
          <title>ContentEditor</title>
        </Head>

        <div
          id="component-wrapper"
          style={{
            marginBottom: 20,
          }}
        >
          {toolbar}

          <div id="component">
            {object ? (
              <App
                inEditMode={inEditMode}
                object={object}
                updateObject={updateObject}
                getRedactorObjectComponent={getRedactorObjectComponent}
                objectTemplates={objectTemplates}
                {...props}
              />
            ) : null}
          </div>
        </div>
      </>
    )
  }, [inEditMode, object, props, toolbar, updateObject, objectTemplates])
}

export default ContentEditorDevPage
