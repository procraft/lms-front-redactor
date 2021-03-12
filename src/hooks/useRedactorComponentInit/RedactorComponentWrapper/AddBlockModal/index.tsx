import React, { useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from 'material-ui/Button'
import { AddBlockModalProps } from './interfaces'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import { LandingTemplateFragment, RedactorComponent, RedactorComponentObject, RedactorComponentProps } from '../../../../RedactorComponent/interfaces'
import Section from '../../../../components/Section'
import ContentEditor from '../../../../components/ContentEditor'
import LmsFrontRedactorModal from '../../../../ui/Modal'

type ComponentData = {
  Component: RedactorComponent
  template: RedactorComponentProps['object']
}

/**
 * Модалка для добавления нового блока
 */
const AddBlockModal: React.FC<AddBlockModalProps> = ({
  object,
  closeAddBlockModal,
  updateObject,
}) => {
  /**
   * Этот контейнер нужен, чтобы рендерить врапперы именно в модалку,
   * а не в боди (иначе перекрывается модалкой)
   */
  const [wrapperContainer, containerRef] = useState<HTMLDivElement | null>(null)

  const objectTemplates = useMemo<ComponentData[]>(() => {
    // return [{
    //   name: 'Section',
    //   description: "Произвольный блок",
    //   component: 'Section',
    //   props: {
    //     style: {
    //       border: '2px solid red',
    //     },
    //   },
    //   components: [],
    // }]

    return [
      {
        Component: Section,
        template: {
          name: 'Блок',
          description: 'Произвольный блок',
          component: 'Section',
          props: {},
          components: [],
        },
      },
      {
        Component: ContentEditor,
        template: {
          name: 'HTML редактор',
          description: 'HTML редактор',
          component: 'ContentEditor',
          props: {},
          components: [],
        },
      },
      // {
      //   Component: CourseOrder,
      //   template: {
      //     name: 'Виджет заказа курса',
      //     description: 'Виджет заказа курса',
      //     component: 'CourseOrder',
      //     props: {},
      //     components: [],
      //   },
      // },
    ]
  }, [])

  const [componentData, setComponentData] = useState<ComponentData | null>(null)

  const choseComponent = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const index = parseInt(event.currentTarget.value)

      const componentData = objectTemplates[index]

      if (componentData) {
        setComponentData(componentData)
      }
    },
    [objectTemplates]
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

      // components.push({
      //   name: 'New Section',
      //   component: 'Section',
      //   props: {
      //     style: {
      //       border: '2px solid red',
      //     },
      //   },
      //   components: [],
      // })

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
      <IconButton color="secondary" onClick={addObjectHandler} key="save">
        <SaveIcon />
      </IconButton>
    )
  }, [addObjectHandler, componentData])

  const secondaryButtons = useMemo(() => {
    return objectTemplates.map((n, index) => {
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
  }, [choseComponent, objectTemplates])

  return useMemo(() => {
    const wrapper = document.body

    // return ReactDOM.createPortal(
    //   <LmsFrontRedactorModalStyled ref={containerRef}>
    //     <LmsFrontRedactorModalHeaderStyled>
    //       <h2 className="title">
    //         Добавить блок в компонент {object.name}{' '}
    //         {object.name !== object.component ? `(${object.component})` : null}
    //       </h2>

    //       <div className="buttons">
    //         {saveButton}

    //         <IconButton onClick={closeAddBlockModal}>
    //           <CloseIcon />
    //         </IconButton>
    //       </div>
    //     </LmsFrontRedactorModalHeaderStyled>

    //     <LmsFrontRedactorModalComponentsButtonsStyled>
    //       {objectTemplates.map((n, index) => {
    //         return (
    //           <div key={index}>
    //             <Button
    //               variant="raised"
    //               size="small"
    //               title={n.template.description || ''}
    //               value={index}
    //               onClick={choseComponent}
    //             >
    //               {n.template.name}
    //             </Button>
    //           </div>
    //         )
    //       })}
    //     </LmsFrontRedactorModalComponentsButtonsStyled>

    //     {componentDataContent}
    //   </LmsFrontRedactorModalStyled>,
    //   wrapper
    // )

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
