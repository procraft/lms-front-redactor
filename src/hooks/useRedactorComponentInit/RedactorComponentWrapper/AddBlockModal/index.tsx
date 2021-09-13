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
import { AddBlockModalStyled } from './styles'
import { InsertPlace } from '../../../useAddComponent/interfaces'
import { useAddComponent } from '../../../useAddComponent'

/**
 * Модалка для добавления нового блока
 */
const AddBlockModal: React.FC<AddBlockModalProps> = ({
  object,
  closeAddBlockModal,
  updateObject,
  parent,
  updateParent,
}) => {
  const context = useContext(Context)

  const [place, placeSetter] = useState<InsertPlace>(InsertPlace.Child)

  /**
   * Этот контейнер нужен, чтобы рендерить врапперы именно в модалку,
   * а не в боди (иначе перекрывается модалкой)
   */
  const [wrapperContainer, containerRef] = useState<HTMLDivElement | null>(null)

  const [componentData, setComponentData] =
    useState<RedactorObjectTemplate | null>(null)

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
      <>
        {/* <div>Component:</div> */}
        {/* <pre>
        {JSON.stringify(template, undefined, 2)}
      </pre> */}
        <Component
          object={template}
          inEditMode={true}
          updateObject={updateTemplateObject}
          wrapperContainer={wrapperContainer || undefined}
        />
      </>
    )
  }, [componentData, updateTemplateObject, wrapperContainer])

  const addComponent = useAddComponent()

  // TODO Возможно надо будет переделать логику, чтобы новый компонент сразу
  // добавлялся в родительский компонент
  /**
   * Добавляем копонент в родительский блок и закрываем модалку
   */
  const addObjectHandler = useCallback(
    (event: React.MouseEvent) => {
      // if (!componentData) {
      //   return
      // }

      event.preventDefault()
      event.stopPropagation()

      /**
       * Если вставка в текущий компонент
       */
      // if (place === InsertPlace.Child) {
      //   const components = [...object.components]

      //   components.push(componentData.template)

      //   /**
      //    * Добавляем новый компонент в родительский
      //    */
      //   updateObject(object, {
      //     components,
      //   })
      // } else {
      //   /**
      //    * Иначе в До или После
      //    */
      //   if (parent && updateParent) {
      //     const components = [...parent.components]

      //     const currentComponentIndex = components.indexOf(object)

      //     // TODO add snackbar
      //     if (currentComponentIndex === -1) {
      //       throw new Error('Can not find current object')
      //     }

      //     if (place === InsertPlace.Before) {
      //       components.splice(
      //         currentComponentIndex > 0 ? currentComponentIndex - 1 : 0,
      //         0,
      //         componentData.template
      //       )
      //     } else if (place === InsertPlace.After) {
      //       components.splice(
      //         currentComponentIndex + 1,
      //         0,
      //         componentData.template
      //       )
      //     }

      //     /**
      //      * Добавляем новый компонент в родительский
      //      */
      //     updateParent(parent, {
      //       components,
      //     })
      //   }
      // }

      addComponent({
        componentData,
        object,
        parent,
        place,
        updateObject,
        updateParent,
      })

      /**
       * Закрываем модалку
       */
      closeAddBlockModal()
    },
    [
      addComponent,
      closeAddBlockModal,
      componentData,
      object,
      parent,
      place,
      updateObject,
      updateParent,
    ]
  )

  const saveButton = useMemo(() => {
    if (!componentData) {
      return null
    }

    return (
      <IconButton
        color="secondary"
        onClick={addObjectHandler}
        key="save"
        role="save"
      >
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

  const changePlace = useCallback(() => {
    /**
     * Делаем следующий индекс
     */
    let nextIndex = place + 1

    /**
     * Если элемента с таким индексом нет, то начинаем с нулевого
     */
    if (!InsertPlace[nextIndex]) {
      nextIndex = 0
    }

    /**
     * Обновляем индекс
     */
    placeSetter(nextIndex)
  }, [place])

  const placeButton = useMemo(() => {
    let title: string | undefined

    switch (InsertPlace[place]) {
      case InsertPlace[InsertPlace.After]:
        title = 'после'
        break

      case InsertPlace[InsertPlace.Before]:
        title = 'перед'
        break

      case InsertPlace[InsertPlace.Child]:
        title = 'в'
        break
    }

    return (
      <button
        onClick={changePlace}
        style={{
          cursor: 'pointer',
        }}
      >
        {title}
      </button>
    )
  }, [changePlace, place])

  return useMemo(() => {
    const wrapper = document.body

    return ReactDOM.createPortal(
      <LmsFrontRedactorModal
        containerRef={containerRef}
        title={
          <>
            Добавить блок {placeButton} {object.name}{' '}
            {object.name !== object.component ? `(${object.component})` : null}
          </>
        }
        buttons={[saveButton]}
        close={closeAddBlockModal}
        secondaryButtons={secondaryButtons}
      >
        <AddBlockModalStyled>{componentDataContent}</AddBlockModalStyled>
      </LmsFrontRedactorModal>,
      wrapper
    )
  }, [
    placeButton,
    object.name,
    object.component,
    saveButton,
    closeAddBlockModal,
    secondaryButtons,
    componentDataContent,
  ])
}

export default AddBlockModal
