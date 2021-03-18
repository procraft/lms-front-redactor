import React, { useCallback, useMemo, useState } from 'react'
import Head from 'next/head'
import App from '../../../src'
import { RedactorComponentObject } from '../../../src/RedactorComponent/interfaces'
import { Page } from '../_App/interfaces'
import getRedactorObjectComponent from '../../../src/hooks/RedactorObjectRender'

const ContentEditorDevPage: Page = (props) => {
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
              components: [],
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
    }


  }, [])

  const [inEditMode, inEditModeSetter] = useState(false)

  const toggleEditMode = useCallback(() => {
    inEditModeSetter(!inEditMode)
  }, [inEditMode])

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
        <div id="component-toolbar">
          <button onClick={toggleEditMode} id="toggleEditMode">
            inEditMode {inEditMode ? 'On' : 'Off'}
          </button>
        </div>

        <div id="component">
          <App
            inEditMode={inEditMode}
            object={object}
            // eslint-disable-next-line no-console
            updateObject={console.log}
            getRedactorObjectComponent={getRedactorObjectComponent}
            {...props}
          />
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
