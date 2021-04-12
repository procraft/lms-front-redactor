/* eslint-disable no-console */
import React from 'react'
import Head from 'next/head'
import App from '../../../src'
import { Page } from '../_App/interfaces'
import getRedactorObjectComponent from '../../../src/hooks/RedactorObjectRender'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'

const ContentEditorDevPage: Page = (props) => {

  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
  } = useRedactorStoreDev({
    key: "test-mainpage-object",
    initialObject: {
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
    }
  })


  console.log('store object', object);


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
          {object ? <App
            {...props}
            inEditMode={inEditMode}
            object={object}
            updateObject={updateObject}
            getRedactorObjectComponent={getRedactorObjectComponent}
          /> : null}
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
