import React, { useCallback } from 'react'
import { action } from '@storybook/addon-actions'

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
// import styled from 'styled-components'

// import { uid } from 'uid'

import { ErrorBarProps as ComponentProps } from '../'
import useErrorBar from '../hooks/useErrorBar'

const title = 'ErrorBar'

export const ErrorBar: React.FC<Partial<ComponentProps>> = () => {
  // const [error, setError] = useState<ComponentProps['error']>(undefined)

  // const close = useCallback(
  //   (error: Error) => {
  //     action('Close error')(error)
  //     setError(undefined)
  //   },
  //   [setError]
  // )

  const { addError, errorBar } = useErrorBar()

  const createError = useCallback(() => {
    const error = new Error('New Error')
    action('Set error')(error)
    addError(error)

    // const newItems = items.slice(0)

    // newItems.push({
    //   error,
    //   id: uid(),
    // })

    // setItems(newItems)
  }, [addError])

  return (
    <>
      <p
        style={{
          marginTop: '30%',
        }}
      >
        <button onClick={createError}>Create error</button>
      </p>

      {errorBar}
    </>
  )
}

const args: Partial<ComponentProps> = {
  // message: 'Test error message',
}

export default {
  title,
  component: ErrorBar,
  argTypes: {},
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle></Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta
