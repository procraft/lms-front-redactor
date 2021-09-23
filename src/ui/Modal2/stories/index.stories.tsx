import React, { useCallback, useState } from 'react'

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

import { Modal2 as Component } from '..'
import { Modal2Props as ComponentProps } from '../interfaces'

const title = 'UI/Modal2'

interface ContainerProps extends ComponentProps {}

export const Modal2: React.FC<Partial<ContainerProps>> = ({
  children,
  modal,
  preventClickEvent,
  ...other
}) => {
  const [opened, openedSetter] = useState(true)

  const closeHandler = useCallback(() => {
    openedSetter(false)
  }, [])

  return opened ? (
    <Component
      closeHandler={closeHandler}
      modal={modal || false}
      preventClickEvent={preventClickEvent || false}
      {...other}
    >
      {children}
    </Component>
  ) : null
}

const args: React.PropsWithChildren<Partial<ContainerProps>> = {
  title: 'Title',
  children: 'Some content',
  modal: true,
  preventClickEvent: true,
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
