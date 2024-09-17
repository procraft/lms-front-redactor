import React, { useMemo } from 'react'
import { CustomBlockButton } from './CustomBlock'
import { AddWidgetButtonButtonProps } from './interfaces'
import { RedactorComponentObject } from '../../../..'
import { IconText } from './buttonIcons'

export const EditorBlockSlider = (props: AddWidgetButtonButtonProps) => {
  const title = useMemo(
    () => (
      <>
        <IconText /> Slider
      </>
    ),
    []
  )

  const component: RedactorComponentObject = {
    name: 'Slider',
    component: 'Slider',
    props: {
    },
    components: [
    ],
  }

  return <CustomBlockButton {...props} title={title} component={component} />
}
