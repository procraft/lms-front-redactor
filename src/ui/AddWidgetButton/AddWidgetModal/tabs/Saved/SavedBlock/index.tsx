import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SavedBlockButtonStyled, SavedBlockStyled } from './styles'
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

  /**
   * Хотя целевой блок - див, все же считаем, что он кнопка.
   * Просто чтобы меньше всяких стилей было примешено.
   */
  const [button, buttonSetter] = useState<HTMLDivElement | null>(null)

  /**
   * Навешиваем событие по клику, чтобы вставить выбранный шаблон
   */
  useEffect(() => {
    if (!button) {
      return
    }

    const onClick = (event: MouseEvent) => {
      event.stopPropagation()

      const template = templates.find((n) => n.id === object.id)

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
    }

    button.addEventListener('click', onClick)

    return () => {
      button.removeEventListener('click', onClick)
    }
  }, [addComponent, button, closeHandler, object.id, templates])

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

  /**
   * Адаптация компонента по ширине.
   * Дело в том, что некоторые блоки могут быть слишком большие и не помещаться в
   * родительский блок.
   * Делаем тогда скейл.
   */
  useEffect(() => {
    if (!button) {
      return
    }

    const width = button.offsetWidth

    button.childNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        const nodeWidth = node.offsetWidth

        if (nodeWidth > width) {
          const scale = width / nodeWidth

          node.style.transform = `scale(${scale})`
          node.style.transformOrigin = 'left'
        }
      }
    })
  }, [button])

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
      <SavedBlockButtonStyled ref={buttonSetter}>
        <Component
          object={object}
          inEditMode={false}
          isDirty={undefined}
          // eslint-disable-next-line no-console
          updateObject={console.log}
          updateTemplate={undefined}
          wrapperContainer={undefined}
        />
      </SavedBlockButtonStyled>
    </SavedBlockStyled>
  )
}
