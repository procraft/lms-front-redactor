import React, { useCallback, useMemo, useState } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import { RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'

const ContentEditorDevPage: Page = (props) => {
  const object = useMemo<RedactorComponentObject>(() => {
    return {
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
              border: '1px solid blue',
              minHeight: 100,
            },
          },
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
        <title>ContentEditor</title>
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
            {...props}
          />
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
