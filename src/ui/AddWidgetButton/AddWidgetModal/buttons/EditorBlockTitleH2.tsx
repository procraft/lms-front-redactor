import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconTitleH2 } from './buttonIcons'

export const EditorBlockTitleH2 = (props: AddWidgetButtonButtonProps) => {
  const title = useMemo(
    () => (
      <>
        <IconTitleH2 /> Второстепенный заголовок
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
          tag: 'h2',
        },
        components: [
          {
            name: 'HtmlTag',
            component: 'HtmlTag',
            props: {
              text: 'Heading 2',
            },
            components: [],
          },
        ],
      },
    ],
  }

  return <CustomBlockButton {...props} title={title} component={component} />
}
