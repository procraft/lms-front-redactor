/* eslint-disable no-console */
import React, { useCallback } from 'react'
import { Button } from '@procraft/ui/dist/Button'
import { SvgIconSave } from '../../../../../ui/SvgIcon/Save'

import { RedactorComponentWrapperSaveButtonProps } from './interfaces'
import { useCreateLandingTemplateMutation } from '../../../../../gql/createLandingTemplate'
import { useApolloClient } from '@apollo/client'

/**
 * Кнопка сохранения блока
 */
export const RedactorComponentWrapperSaveButton: React.FC<RedactorComponentWrapperSaveButtonProps> =
  ({ object, parent, updateParent }) => {
    console.log('object', object)

    const client = useApolloClient()

    const [createTemplate, { loading: createTemplateLoading }] =
      useCreateLandingTemplateMutation()

    const inRequest = createTemplateLoading

    const saveBlock = useCallback(
      (event: MouseEvent) => {
        event.stopPropagation()

        /**
         * Если уже есть id, то просто обновляем.
         * Если нету, то надо сохранить в базу как новый самостоятельный блок
         * и обновить текущий объект (сохранить id нового блока).
         */

        const { component, components, name, props } = object

        if (object.id) {
          //
        } else {
          createTemplate({
            variables: {
              input: {
                patch: {
                  component,
                  name,
                  props: JSON.stringify(props),
                  components: JSON.stringify(components),
                },
              },
            },
          })
            .then(async (response) => {
              console.log('response', response.data)

              if (response.data?.createLandingTemplate) {
                await client.resetStore().catch(console.error)

                /**
                 * Обновляем родителя
                 */
                if (parent && updateParent) {
                  const parentComponentsNew = [...parent.components]

                  const index = parentComponentsNew.findIndex(
                    (n) => n === object
                  )

                  if (index !== -1) {
                    parentComponentsNew[index] = {
                      id: response.data.createLandingTemplate.landingTemplate
                        .id,
                      component,
                      name,
                      props: {},
                      components: [],
                    }

                    updateParent(parent, {
                      components: parentComponentsNew,
                    })
                  }
                }
              }
            })
            .catch((error) => {
              console.error(error)
              alert('Ошибка выполнения запроса')
            })
        }
      },
      [client, createTemplate, object, parent, updateParent]
    )

    return (
      <>
        <Button title="Сохранить блок" onClick={saveBlock} disabled={inRequest}>
          <SvgIconSave />
        </Button>
      </>
    )
  }
