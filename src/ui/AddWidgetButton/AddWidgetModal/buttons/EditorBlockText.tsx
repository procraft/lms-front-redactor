import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconText } from './buttonIcons'

export const EditorBlockTextButton = (props: AddWidgetButtonButtonProps) => {
  const title = useMemo(() => (
    <><IconText/> Текстовый блок</>
  ), [])

  const component: RedactorComponentObject = {
    name: 'HtmlTag',
    component: 'HtmlTag',
    props: {
      tag: 'div',
      role: 'text-block-widget',
    },
    components: [
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'h1',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              text: 'Heading',
            },
            components: [],
          },
        ],
      },
      {
        name: 'HtmlTag',
        component: 'HtmlTag',
        props: {
          tag: 'p',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            components: [],
          },
        ],
      },
    ],
  }

  return <CustomBlockButton {...props} title={title} component={component} />
}

