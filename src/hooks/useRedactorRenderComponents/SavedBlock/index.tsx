/* eslint-disable no-console */
import React, { useMemo } from 'react'
import { useTemplateQuery } from '../../../gql/template'
import { SavedBlockProps } from './interfaces'

export const SavedBlock: React.FC<SavedBlockProps> = ({
  id,
  Component,
  object,
  ...other
}) => {
  console.log('SavedBlock other', other)

  const response = useTemplateQuery({
    variables: {
      where: {
        id,
      },
    },
  })

  return useMemo(() => {
    console.log('SavedBlock response.data', response.data)

    // if (!response.data?.template) {
    //   return null
    // }

    // const { components, props, ...otherObject } = object

    return (
      <Component
        object={
          response.data?.template
            ? {
                ...object,
                ...response.data.template,
              }
            : object
        }
        {...other}
      />
    )
  }, [object, other, response.data])
}
