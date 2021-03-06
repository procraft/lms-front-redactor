import React, { useMemo } from 'react'
import Head from 'next/head'
import App, { RedactorComponent, RedactorComponentObject } from '../../../src'
import { Page } from '../_App/interfaces'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'
import { getRedactorObjectComponentProps } from '../../../src/hooks/RedactorObjectRender/interfaces'
import { Section } from '../../../src/components/Section'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { ContentEditor } from '../../../src/components/ContentEditor'

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

    case 'HtmlTag':
      Component = HtmlTag
      break

    case 'ContentEditor':
      Component = ContentEditor
      break
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
      name: 'Section',
      component: 'Section',
      components: [
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'div',
            style: {
              display: 'flex',
              marginBottom: 20,
            },
          },
          components: [
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'a',
                href: '/components/contenteditor',
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  components: [],
                  props: {
                    text: 'Content Editor',
                  },
                },
              ],
            },
          ],
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
                text: 'body {color: purple;}',
              },
            },
          ],
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
                text: 'console.log("Test... Script console");',
              },
            },
          ],
        },
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'link',
            rel: 'stylesheet',
            href: 'style.css',
          },
          components: [],
        },
        {
          name: 'ContentEditor',
          component: 'ContentEditor',
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
                    text: 'Some text',
                  },
                },
              ],
              props: {
                tag: 'div',
                style: {
                  border: '1px solid green',
                  minHeight: 100,
                },
              },
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
                text: 'HtmlTag content',
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
          name: 'ContentEditor',
          component: 'ContentEditor',
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
                    text: 'Some text',
                  },
                },
              ],
              props: {
                tag: 'div',
                style: {
                  border: '1px solid green',
                  minHeight: 100,
                },
              },
            },
          ],
          props: {},
        },
        {
          name: 'Section',
          component: 'Section',
          components: [
            {
              name: 'ContentEditor',
              component: 'ContentEditor',
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
                        text: 'Some text',
                      },
                    },
                  ],
                  props: {
                    tag: 'div',
                    style: {
                      border: '1px solid green',
                      minHeight: 100,
                    },
                  },
                },
              ],
              props: {},
            },
          ],
          props: {},
        },
      ],
      props: {},
    }
  }, [])

  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: 'test-mainpage-object',
    initialObject,
  })

  return (
    <>
      <Head>
        <title>FrontRedactor all components</title>
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
              {...props}
              inEditMode={inEditMode}
              object={object}
              updateObject={updateObject}
              getRedactorObjectComponent={getRedactorObjectComponent}
              objectTemplates={objectTemplates}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
