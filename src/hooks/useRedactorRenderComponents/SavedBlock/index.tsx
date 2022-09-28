import React, { useCallback, useEffect, useMemo } from 'react'
import { useState } from 'react'
import {
  RedactorComponentUpdatedObjectEventDetail,
  RedactorComponentUpdateObjectEventDetail,
} from '../../../FrontEditor/Context'
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

  const unsetDirty = useCallback(() => {
    /**
     * При сбросе измененных данных надо выкинуть событие,
     * чтобы в самом лендинге удалить шаблон из списка измененных в кнопке "Сохранить все"
     */
    const updateEvent =
      new CustomEvent<RedactorComponentUpdatedObjectEventDetail>(
        'redactorComponentUpdatedObjectEvent',
        {
          detail: {
            object,
          },
        }
      )

    global.document.dispatchEvent(updateEvent)

    dirtySetter(undefined)
  }, [object])

  const onSave = unsetDirty

  const updateObject = useCallback<RedactorComponentProps['updateObject']>(
    (current, data) => {
      const updateEvent =
        new CustomEvent<RedactorComponentUpdateObjectEventDetail>(
          'redactorComponentUpdateObjectEvent',
          {
            detail: {
              object: current,
              data,
            },
          }
        )

      global.document.dispatchEvent(updateEvent)

      dirtySetter({
        ...(dirty ?? current),
        ...data,
      })
    },
    [dirty]
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
        onSave()
      }

      return r
    })
  }, [client, dirty, object.id, onSave, updateTemplateMutation])

  /**
   * В @procraft/landing у нас есть единая кнопка сохранения всех измененных шаблонов.
   * src/components/Landing/RootTemplate/RedactorHelpers/ControlsModal/Controls/SaveTemplates/index.tsx
   * При клике по ней надо сохранить шаблон, если он изменный, так как кнопку самостоятельную не видно.
   */
  useEffect(() => {
    const onCallSave = updateTemplate

    document.addEventListener('redactorComponentSaveAllEvent', onCallSave)

    return () => {
      document.removeEventListener('redactorComponentSaveAllEvent', onCallSave)
    }
  }, [updateTemplate])

  return useMemo(() => {
    if (!response.data?.template) {
      return null
    }

    // const { components, props, ...otherObject } = object

    return (
      <Component
        {...other}
        object={savedBlock}
        updateObject={updateObject}
        isDirty={!!dirty}
        updateTemplate={updateTemplate}
      />
    )
  }, [
    dirty,
    other,
    response.data?.template,
    savedBlock,
    updateObject,
    updateTemplate,
  ])
}
