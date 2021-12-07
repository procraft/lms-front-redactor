import React, { useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { Page } from '../_App'
import App, { RedactorComponent, RedactorComponentObject } from '../../../src'
import { useRedactorStoreDev } from '../../hooks/useRedactorStoreDev'
import { getRedactorObjectComponentProps } from '../../../src/hooks/RedactorObjectRender/interfaces'
import { Section } from '../../../src/components/Section'
import { HtmlTag } from '../../../src/components/HtmlTag'
import { ContentEditor } from '../../../src/components/ContentEditor'
import { linksList } from '../MainPage'

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

/**
 * Пустая редактируемая страница
 */
export const EmptyPage: Page = () => {
  const initialObject = useMemo<RedactorComponentObject>(() => {
    return {
      name: 'Section',
      component: 'Section',
      components: [],
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
    key: 'empty-mainpage-object',
    initialObject,
  })

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Empty page" />

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
              />
            ) : null}
          </div>
        </div>
      </>
    )
  }, [inEditMode, object, objectTemplates, toolbar, updateObject])
}
