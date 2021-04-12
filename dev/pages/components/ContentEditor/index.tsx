/* eslint-disable no-console */
import React, { useMemo } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import { RedactorComponent } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'
import ContentEditor from '../../../../src/components/ContentEditor'
import HtmlTag from '../../../../src/components/HtmlTag'
import useRedactorStoreDev from '../../../hooks/useRedactorStoreDev'


const getRedactorObjectComponent = (props: getRedactorObjectComponentProps) => {
  const { object } = props

  if (!object) {
    return null
  }

  let Component: RedactorComponent | undefined

  switch (object.component) {
    // case 'Section':
    //   Component = Section
    //   break

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


  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
  } = useRedactorStoreDev({
    key: "test-content-editor-object",
    initialObject: {
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
      props: {
        id: "test-content-id",
      },
    }
  })


  console.log('store object', object);
 
  return useMemo(() => {

    return <>
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
          {object ? <App
            inEditMode={inEditMode}
            object={object}
            updateObject={updateObject}
            getRedactorObjectComponent={getRedactorObjectComponent}
            {...props}
          /> : null}
        </div>
      </div>
    </>;
  }, [inEditMode, object, props, toolbar, updateObject])
}

export default ContentEditorDevPage
