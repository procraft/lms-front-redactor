import React, { useMemo } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { Section } from '../../../../src/components/Section'
import { HtmlTag } from '../../../../src/components/HtmlTag'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'
import { useRedactorStoreDev } from '../../../hooks/useRedactorStoreDev'
import { linksList } from '../../MainPage'

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

    case 'HtmlTag':
      Component = HtmlTag
      break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component
}

const RemoveBlockDevPage: Page = (props) => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      props: {},
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
                text: 'Section',
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
                  border: '1px solid green',
                  minHeight: 100,
                },
              },
              components: [
                {
                  name: 'HtmlTag',
                  component: 'HtmlTag',
                  components: [],
                  props: {
                    text: 'Inner Section to be removed',
                  },
                },
              ],
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
                text: 'Section',
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
    }
  }, [])

  const {
    store: object,
    updateObject,
    toolbar,
    inEditMode,
    objectTemplates,
  } = useRedactorStoreDev({
    key: 'test-action-remove-block-object',
    initialObject,
  })

  return (
    <>
      <Head>
        <title>Section</title>
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

export default RemoveBlockDevPage
