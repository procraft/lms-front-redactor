import React from 'react'

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

import * as MuiIcons from 'material-ui-icons'
import styled from 'styled-components'
import { SvgIconProps } from 'material-ui/SvgIcon'

const title = 'UI/Icons'

type ContainerProps = SvgIconProps

const IconsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 5px;
  }
`

export const Icons: React.FC<ContainerProps> = ({ ...other }) => {
  const icons: JSX.Element[] = []

  for (const i in MuiIcons) {
    const Icon = MuiIcons[i as keyof typeof MuiIcons]

    icons.push(
      <i key={i} title={i}>
        <Icon {...other} />
      </i>
    )
  }

  return <IconsStyled>{icons}</IconsStyled>
}

const colors: SvgIconProps['color'][] = [
  'default',
  'action',
  'disabled',
  'error',
  'inherit',
  'primary',
  'secondary',
]

const args: React.PropsWithChildren<Partial<ContainerProps>> = {
  color: colors[0],
}

export default {
  title,
  component: Icons,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'radio' },
    },
  },
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle>Иконки</Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
