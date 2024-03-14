import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconTitleH1 } from './buttonIcons'

export const EditorBlockTitleH1 = (props: AddWidgetButtonButtonProps) => {
  const title = useMemo(() => (
    <><IconTitleH1/> Главный заголовок</>
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
    ],
  }

  return <CustomBlockButton {...props} title={title} component={component} />
}

