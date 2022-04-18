import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import { useTemplateQuery } from '../../../gql/template'
import { useUpdateLandingTemplateMutation } from '../../../gql/updateLandingTemplate'
import { RedactorComponentProps } from '../../../RedactorComponent/interfaces'
import { SavedBlockProps } from './interfaces'

export const SavedBlock: React.FC<SavedBlockProps> = ({
  id,
  Component,
  object,
  ...other
}) => {
  const [dirty, dirtySetter] = useState<typeof object>()

  const updateObject = useCallback<RedactorComponentProps['updateObject']>(
    (_current, data) => {
      dirtySetter({
        ...(dirty ?? object),
        ...data,
      })
    },
    [dirty, object]
  )

  const response = useTemplateQuery({
    variables: {
      where: {
        id,
      },
    },
    // onCompleted: (r) => {
    //   if (r.template) {
    //     dirtySetter(r.template)
    //   }
    // },
  })

  const savedBlock = useMemo(() => {
    return dirty || response.data?.template || object
  }, [dirty, object, response.data?.template])

  const [updateTemplateMutation, { client }] = useUpdateLandingTemplateMutation(
    {}
  )

  const updateTemplate = useCallback(() => {
    if (!object.id || !dirty) {
      return
    }

    const { component, components, name, props, description, uri } = dirty

    return updateTemplateMutation({
      variables: {
        input: {
          id: object.id,
          patch: {
            component,
            name,
            description,
            uri,
            props: JSON.stringify(props),
            components: JSON.stringify(components),
          },
        },
      },
    }).then(async (r) => {
      if (r.data?.updateLandingTemplate) {
        await client.resetStore().catch(console.error)
        dirtySetter(undefined)
      }

      return r
    })
  }, [client, dirty, object.id, updateTemplateMutation])

  return useMemo(() => {
    // if (!response.data?.template) {
    //   return null
    // }

    // const { components, props, ...otherObject } = object

    return (
      <Component
        object={savedBlock}
        {...other}
        updateObject={updateObject}
        isDirty={!!dirty}
        updateTemplate={updateTemplate}
      />
    )
  }, [dirty, other, savedBlock, updateObject, updateTemplate])
}
