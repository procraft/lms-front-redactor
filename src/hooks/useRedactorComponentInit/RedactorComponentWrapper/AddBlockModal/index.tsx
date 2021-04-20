import React, { useCallback, useContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from 'material-ui/Button'
import { AddBlockModalProps } from './interfaces'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import {
  LandingTemplateFragment,
  RedactorComponentObject,
} from '../../../../RedactorComponent/interfaces'
import LmsFrontRedactorModal from '../../../../ui/Modal'
import Context, { RedactorObjectTemplate } from '../../../../Context'

/**
 * Модалка для добавления нового блока
 */
const AddBlockModal: React.FC<AddBlockModalProps> = ({
  object,
  closeAddBlockModal,
  updateObject,
}) => {
  const context = useContext(Context)

  /**
   * Этот контейнер нужен, чтобы рендерить врапперы именно в модалку,
   * а не в боди (иначе перекрывается модалкой)
   */
  const [wrapperContainer, containerRef] = useState<HTMLDivElement | null>(null)

  const [
    componentData,
    setComponentData,
  ] = useState<RedactorObjectTemplate | null>(null)

  const choseComponent = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const index = parseInt(event.currentTarget.value)

      const componentData = (context?.objectTemplates || [])[index]

      if (componentData) {
        setComponentData(componentData)
      }
    },
    [context?.objectTemplates]
  )

  /**
   * Обновляем шаблон нового компонента
   */
  const updateTemplateObject = useCallback(
    (
      _current: Readonly<RedactorComponentObject>,
      data: Partial<LandingTemplateFragment>
    ) => {
      if (!componentData) {
        return
      }

      setComponentData({
        ...componentData,
        template: {
          ...componentData.template,
          ...data,
        },
      })
    },
    [componentData]
  )

  /**
   * Рендерим выбранный блок
   */
  const componentDataContent = useMemo(() => {
    if (!componentData) {
      return null
    }

    const { Component, template } = componentData

    return (
      <div>
        Component:
        {/* <pre>
        {JSON.stringify(template, undefined, 2)}
      </pre> */}
        <Component
          object={template}
          inEditMode={true}
          updateObject={updateTemplateObject}
          wrapperContainer={wrapperContainer || undefined}
        />
      </div>
    )
  }, [componentData, updateTemplateObject, wrapperContainer])

  // TODO Возможно надо будет переделать логику, чтобы новый компонент сразу
  // добавлялся в родительский компонент
  /**
   * Добавляем копонент в родительский блок и закрываем модалку
   */
  const addObjectHandler = useCallback(
    (event: React.MouseEvent) => {
      if (!componentData) {
        return
      }

      event.preventDefault()
      event.stopPropagation()

      const components = [...object.components]

      components.push(componentData.template)

      /**
       * Добавляем новый компонент в родительский
       */
      updateObject(object, {
        components,
      })

      /**
       * Закрываем модалку
       */
      closeAddBlockModal()
    },
    [closeAddBlockModal, componentData, object, updateObject]
  )

  const saveButton = useMemo(() => {
    if (!componentData) {
      return null
    }

    return (
      <IconButton color="secondary" onClick={addObjectHandler} key="save" role="save">
        <SaveIcon />
      </IconButton>
    )
  }, [addObjectHandler, componentData])

  const secondaryButtons = useMemo(() => {
    return (context?.objectTemplates || []).map((n, index) => {
      return (
        <div key={index}>
          <Button
            variant="raised"
            size="small"
            title={n.template.description || ''}
            value={index}
            onClick={choseComponent}
          >
            {n.template.name}
          </Button>
        </div>
      )
    })
  }, [choseComponent, context?.objectTemplates])

  return useMemo(() => {
    const wrapper = document.body

    return ReactDOM.createPortal(
      <LmsFrontRedactorModal
        containerRef={containerRef}
        title={
          <>
            Добавить блок в компонент {object.name}{' '}
            {object.name !== object.component ? `(${object.component})` : null}
          </>
        }
        buttons={[saveButton]}
        close={closeAddBlockModal}
        secondaryButtons={secondaryButtons}
      >
        {componentDataContent}
      </LmsFrontRedactorModal>,
      wrapper
    )
  }, [
    object.name,
    object.component,
    saveButton,
    closeAddBlockModal,
    secondaryButtons,
    componentDataContent,
  ])
}

export default AddBlockModal
