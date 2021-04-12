/* eslint-disable no-console */
import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import App, { LmsFrontRedactorProps } from '../../../src'
import { RedactorComponentObject } from '../../../src/RedactorComponent/interfaces'
import { Page } from '../_App/interfaces'
import getRedactorObjectComponent from '../../../src/hooks/RedactorObjectRender'
import useStore from '@prisma-cms/react-hooks/dist/hooks/useStore'

const ContentEditorDevPage: Page = (props) => {

  const {
    store: object,
    updateStore,
  } = useStore<RedactorComponentObject>({
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
            components: [{
              name: 'HtmlTag',
              component: 'HtmlTag',
              components: [],
              props: {
                text: 'Some text',
              },
            },],
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
  });


  console.log('store object',  object);


  const updateObject: LmsFrontRedactorProps["updateObject"] = useCallback((current, data) => {

    console.log('updateObject current', current);
    console.log('updateObject data', data);

    updateStore({
      ...current,
      ...data,
    });
    // 
  }, [updateStore]);


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
            {...props}
            inEditMode={inEditMode}
            object={object}
            updateObject={updateObject}
            getRedactorObjectComponent={getRedactorObjectComponent}
          />
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
