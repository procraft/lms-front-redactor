import React, { useMemo, useState } from 'react'

import { Meta } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import { RedactorComponentWrapper as Component } from '..'
import { RedactorComponentWrapperProps as ComponentProps } from '../interfaces'
import { RedactorComponentObject } from '../../../..'

const title = 'Redactor/RedactorComponentWrapper'

interface ContainerProps extends ComponentProps {}

type Args = React.PropsWithChildren<Partial<ContainerProps>> & {
  active: boolean
  hovered: boolean
  allowChildComponents: boolean
}

export const Modal2: React.FC<Args> = ({ children, ...other }) => {
  // const [opened, openedSetter] = useState(true)

  // const closeHandler = useCallback(() => {
  //   openedSetter(false)
  // }, [])

  const [element, elementSetter] = useState<HTMLDivElement | null>(null)

  const object: RedactorComponentObject = useMemo(() => {
    return {
      component: 'Section',
      name: 'Section',
      props: {},
      components: [],
    }
  }, [])

  return (
    <div>
      <div
        ref={elementSetter}
        style={{
          border: '1px solid #ddd',
          minHeight: 50,
          margin: 50,
        }}
      ></div>
      {element ? (
        <Component
          element={element}
          // eslint-disable-next-line no-console
          closeEditor={console.log}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          // eslint-disable-next-line no-console
          updateParent={console.log}
          container={document.body}
          object={object}
          parent={undefined}
          canEditHTML={false}
          isDirty={undefined}
          updateTemplate={undefined}
          {...other}
        >
          {children}
        </Component>
      ) : null}
    </div>
  )
}

const args: Args = {
  active: false,
  hovered: true,
  allowChildComponents: true,
}

export default {
  title,
  component: Component,
  argTypes: {},
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle>Всплывашка для редактора</Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
