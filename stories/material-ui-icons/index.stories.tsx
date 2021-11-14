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

import * as MuiIcons from 'material-ui-icons'
import styled from 'styled-components'
import { SvgIconProps } from 'material-ui/SvgIcon'
import { TextField } from '@procraft/ui/dist/form/TextField'

const title = 'UI/Icons'

type ContainerProps = SvgIconProps

const IconsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  font-size: 14px;

  > * {
    margin: 5px;
  }
`

export const Icons: React.FC<ContainerProps> = ({ ...other }) => {
  const [search, searchSetter] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    searchSetter(value)
  }, [])

  const icons: JSX.Element[] = []

  for (const i in MuiIcons) {
    const Icon = MuiIcons[i as keyof typeof MuiIcons]

    const displayName = Icon.displayName

    if (search && !(displayName && RegExp(search, 'i').test(displayName))) {
      continue
    }

    icons.push(
      <div key={i} title={i}>
        <Icon {...other} /> <br />
        {Icon.displayName}
      </div>
    )
  }

  return (
    <div>
      <div>
        <TextField onChange={onChange} fullWidth helperText="Поиск по имени" />
      </div>
      <IconsStyled>{icons}</IconsStyled>
    </div>
  )
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
