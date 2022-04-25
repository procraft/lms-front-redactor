import React, { useCallback, useContext } from 'react'
import { Button, ButtonProps } from '@procraft/ui/dist/Button'
import { SavedBlockStyled } from './styles'
import { RedactorComponentObject } from '../../../../../../RedactorComponent/interfaces'
import { LandingTemplateFrFragment } from '../../../../../../gql/landingTemplateFr'
import { AddWidgetButtonButtonProps } from '../../../buttons/interfaces'
import { LmsFrontRedactorContext } from '../../../../../../Context'
import { IconButton } from '@procraft/ui/dist/IconButton'
import { useDeleteLandingTemplateMutation } from '../../../../../../gql/deleteLandingTemplate'
import { useApolloClient } from '@apollo/client'

type SavedBlockProps = AddWidgetButtonButtonProps & {
  object: LandingTemplateFrFragment
  templates: LandingTemplateFrFragment[]
}

export const SavedBlock: React.FC<SavedBlockProps> = ({
  object,
  templates,
  addComponent,
  closeHandler,
}) => {
  const apolloClient = useApolloClient()

  const context = useContext(LmsFrontRedactorContext)

  const onClick = useCallback<NonNullable<ButtonProps['onClick']>>(
    (event) => {
      event.stopPropagation()

      const target = event.target as HTMLButtonElement

      const template = templates.find((n) => n.id === target.value)

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
    [addComponent, closeHandler, templates]
  )

  const [deleteMutation] = useDeleteLandingTemplateMutation({})

  const deleteTemplate = useCallback(() => {
    if (window.confirm('Удалить этот шаблон? Это безвозвратно.')) {
      deleteMutation({
        variables: {
          id: object.id,
        },
      }).then(() => {
        apolloClient.resetStore().catch(console.error)
      })
    }
  }, [apolloClient, deleteMutation, object.id])

  const Component = context?.getRedactorObjectComponent({
    object,
  })

  if (!Component) {
    return null
  }

  return (
    <SavedBlockStyled>
      <div className="toolbar">
        <IconButton title="Удалить шаблон" onClick={deleteTemplate}>
          🗑
        </IconButton>
      </div>
      <Button className="addComponent" value={object.id} onClick={onClick}>
        <Component
          object={object}
          inEditMode={false}
          isDirty={undefined}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          updateTemplate={undefined}
          wrapperContainer={undefined}
        />
      </Button>
    </SavedBlockStyled>
  )
}
