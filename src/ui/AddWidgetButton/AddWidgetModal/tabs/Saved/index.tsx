import React from 'react'
import { Button, ButtonProps } from '@procraft/ui/dist/Button'
import { useCallback } from 'react'
import { useTemplatesQuery } from '../../../../../gql/templates'
import { AddWidgetButtonButtonProps } from '../../buttons/interfaces'
import { RedactorComponentObject } from '../../../../../RedactorComponent/interfaces'

type AddWidgetModalSavedBlocksProps = AddWidgetButtonButtonProps

export const AddWidgetModalSavedBlocks: React.FC<
  AddWidgetModalSavedBlocksProps
> = ({ addComponent, closeHandler }) => {
  const response = useTemplatesQuery({
    variables: {
      where: {
        uri: null,
      },
    },
  })

  const onClick = useCallback<NonNullable<ButtonProps['onClick']>>(
    (event) => {
      const target = event.target as HTMLButtonElement

      const template = response.data?.templates.find(
        (n) => n.id === target.value
      )

      if (template) {
        const { id, name, component } = template

        /**
         * Добавляем только основные поля. Все остальные берутся по API при рендеринге.
         */
        const newComponent: RedactorComponentObject = {
          id,
          name,
          component,
          components: [],
          props: {},
        }

        addComponent(newComponent)

        closeHandler()
      }
    },
    [addComponent, closeHandler, response.data?.templates]
  )

  return (
    <div className="secondaryButtons">
      {response.data?.templates.map((n) => {
        return (
          <Button key={n.id} value={n.id} onClick={onClick}>
            {n.name}
          </Button>
        )
      })}
    </div>
  )
}
