/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import App, { LmsFrontRedactorProps } from '../../../../src'
import { RedactorComponent, RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'
import ContentEditor from '../../../../src/components/ContentEditor'
import HtmlTag from '../../../../src/components/HtmlTag'
import useStore from '@prisma-cms/react-hooks/dist/hooks/useStore'


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

  const localStorageKey = 'test-content-editor-object'


  const {
    store: object,
    updateStore,
  } = useStore<RedactorComponentObject>(null);


  /**
   * Если сразу отдавать значение из локального хранилища (которого нет на стороне сервера),
   * то вознивает ошибка разницы HTML-документа. 
   * Поэтому надо обновить хранилище через useEffect, но только при первом рендеринге.
   */
  useEffect(() => {

    console.log('useEffect', useEffect);

    let initialObject: RedactorComponentObject | undefined;

    try {

      const item = global.localStorage?.getItem(localStorageKey)

      if (item) {

        console.log('item', item);

        initialObject = JSON.parse(item)

      }

    }
    catch (error) {
      console.error;
    }

    initialObject = initialObject || {
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
    };

    updateStore(initialObject)

    /**
     * Этот метод должен вызываться только один раз
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log('store object', object);


  const updateObject: LmsFrontRedactorProps["updateObject"] = useCallback((current, data) => {

    console.log('ContentEditorDevPage updateObject current', current);
    console.log('ContentEditorDevPage updateObject data', data);

    const store = {
      ...current,
      ...data,
    }

    /**
     * Сохраняем значение в локальное хранилище
     */
    global.localStorage?.setItem(localStorageKey, JSON.stringify(store))

    updateStore(store);
    // 
  }, [updateStore]);

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
          {object ? <App
            inEditMode={inEditMode}
            object={object}
            updateObject={updateObject}
            getRedactorObjectComponent={getRedactorObjectComponent}
            {...props}
          /> : null}
        </div>
      </div>
    </>
  )
}

export default ContentEditorDevPage
