import React, { useMemo } from 'react'
import Head from 'next/head'
import App from '../../../../src'
import { RedactorComponent, RedactorComponentObject } from '../../../../src/RedactorComponent/interfaces'
import { Page } from '../../_App/interfaces'
import Section from '../../../../src/components/Section'
import HtmlTag from '../../../../src/components/HtmlTag'
import { getRedactorObjectComponentProps } from '../../../../src/hooks/RedactorObjectRender/interfaces'


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


const SectionDevPage: Page = (props) => {
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
        <div id="component">
          <App
            inEditMode={false}
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

export default SectionDevPage
