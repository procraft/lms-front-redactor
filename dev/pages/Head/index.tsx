import React from 'react'
import NextHead from 'next/head'
import App from '../../../src'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../../../src/RedactorComponent/interfaces'
import { Page } from '../_App/interfaces'
import { Section } from '../../../src/components/Section'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { getRedactorObjectComponentProps } from '../../../src/hooks/RedactorObjectRender/interfaces'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'
import { linksList } from '../MainPage'
import { Head } from '../../../src/components/Head'

/**
 * Функция вставки кастомного блока
 */

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

    // case 'ContentEditor':
    //   Component = ContentEditor
    //   break

    case 'HtmlTag':
      Component = HtmlTag
      break

    case 'Head':
      Component = Head
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

const initialObject: RedactorComponentObject = {
  name: 'Section',
  component: 'Section',
  components: [
    {
      name: 'Section',
      component: 'Section',
      components: [
        {
          name: 'HtmlTag',
          component: 'HtmlTag',
          props: {
            tag: 'div',
            id: 'test-content-id',
            style: {
              border: '1px solid blue',
              minHeight: 100,
            },
          },
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
        },
      ],
      props: {},
    },
  ],
  props: {},
}

export const HeadDevPage: Page = (props) => {
  /**
   * Store
   */
  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: 'test-action-insert-block-object',
    initialObject,
  })

  return (
    <>
      <NextHead>
        <title>Section</title>
      </NextHead>
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
              linksList={linksList}
              showHiddenTags={true}
              {...props}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}