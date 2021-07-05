import React, { useMemo } from 'react'
import NextHead from 'next/head'
import App from '../../../../src'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import { Section } from '../../../../src/components/Section'
import { HtmlTag } from '../../../../src/components/HtmlTag'
import { Head } from '../../../../src/components/Head'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'
import { useRedactorStoreDev } from '../../../hooks/useRedactorStoreDev'

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

    case 'Head':
      Component = Head
      break
  }

  if (!Component) {
    console.error('Unknown component', object.component)
    return null
  }

  return Component
}

const HeadDevPage: Page = (props) => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      components: [
        {
          name: 'Head',
          component: 'Head',
          components: [
            // {
            //   name: 'HtmlTag',
            //   component: 'HtmlTag',
            //   props: {
            //     tag: 'ttttttt',
            //   },
            //   components: [
            //     {
            //       name: 'HtmlTag',
            //       component: 'HtmlTag',
            //       components: [],
            //       props: {
            //         text: 'Custom title',
            //       },
            //     },
            //   ],
            // },
            {
              name: 'HtmlTag',
              component: 'HtmlTag',
              props: {
                tag: 'link',
                rel: 'shortcut icon',
                href: 'https://fs03.getcourse.ru/fileservice/file/download/a/98234/sc/123/h/60822dfd0cb2941dc1024c337af83d02.ico',
              },
              components: [],
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
    key: 'test-section-object',
    initialObject,
  })

  return (
    <>
      <NextHead>
        <title>Head</title>
      </NextHead>
      <NextHead>
        <title>Head2</title>
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
              {...props}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default HeadDevPage
