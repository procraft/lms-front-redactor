import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconText } from './buttonIcons'

export const EditorBlockText = (props: AddWidgetButtonButtonProps) => {
  const title = useMemo(
    () => (
      <>
        <IconText /> Текст
      </>
    ),
    []
  )

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
          tag: 'p',
          style: {
            fontSize: '16px',
            fontWeight: '400',
          }
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
