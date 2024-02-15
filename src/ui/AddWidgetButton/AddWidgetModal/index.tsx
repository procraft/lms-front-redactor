import React, { useCallback, useContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../..'
import { AddHeadWidgetButton } from './buttons/AddHead'
import { AddButtonWidgetButton } from './buttons/AddButton'
import { AddWidgetButtonCourse } from './buttons/AddWidgetButtonCourse'
import { AddImageWidgetButton } from './buttons/AddImageWidgetButton'
import { AddVideoWidgetButton } from './buttons/AddVideoWidgetButton'
import { AddWidgetModalContext } from './Context'
import { AddWidgetModalProps } from './interfaces'
import { AddWidgetModalStyled } from './styles'
import { Button, ButtonProps } from '@procraft/ui/dist/Button'
import { AddWidgetModalSavedBlocks } from './tabs/Saved'
import { EditorBlockTextButton } from './buttons/EditorBlockText'
import { EditorBlockAccordionButton } from './buttons/EditorBlockAccordion'

enum TabState {
  default = 'default',
  saved = 'saved',
}

/**
 * Модалка выбора и вставки виджета
 */
export const AddWidgetModal: React.FC<AddWidgetModalProps> = ({
  object,
  updateObject,
  closeHandler,
}) => {
  const context = useContext(AddWidgetModalContext)

  /**
   * Добавляем дочерний компонент
   */
  const addComponent = useCallback(
    (component: RedactorComponentObject) => {
      const components = [...object.components]

      components.push(component)

      return updateObject(object, {
        components,
      })
    },
    [object, updateObject]
  )

  const buttons = useMemo(() => {
    return context?.buttons.map((Button, index) => {
      return (
        <Button
          key={index}
          closeHandler={closeHandler}
          object={object}
          // updateObject={updateObject}
          addComponent={addComponent}
        />
      )
    })
  }, [addComponent, closeHandler, context?.buttons, object])

  const [tab, tabSetter] = useState<TabState>(TabState.default)

  const [showMore, setShowMore] = useState(false)

  const showMoreButton = useCallback<NonNullable<ButtonProps['onClick']>>(
    (event) => {
      if (event.target instanceof HTMLButtonElement) {
        setShowMore(true)
      }
    },
    []
  )

  const onTabClick = useCallback<NonNullable<ButtonProps['onClick']>>(
    (event) => {
      if (event.target instanceof HTMLButtonElement) {
        tabSetter(event.target.value as TabState)
      }
    },
    []
  )

  const tabs = useMemo(() => {
    let tabContent: JSX.Element | null = null
    const props = { addComponent, object, closeHandler }

    switch (tab) {
      case TabState.default:
        tabContent = (
          <div role="secondaryButtons" className="vidgets">
            <EditorBlockTextButton {...props} />
            <AddImageWidgetButton {...props} />
            <AddVideoWidgetButton {...props} />
            <AddHeadWidgetButton {...props} />
            <AddButtonWidgetButton {...props} />
            <AddWidgetButtonCourse {...props} />
            <EditorBlockAccordionButton {...props} />

            <Button
              className={'show-more ' + (showMore && 'hide')}
              onClick={showMoreButton}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33301 7.33331V3.33331H8.66634V7.33331H12.6663V8.66665H8.66634V12.6666H7.33301V8.66665H3.33301V7.33331H7.33301Z"
                  fill="black"
                />
              </svg>
              Показать больше
            </Button>
            {showMore && buttons}
          </div>
        )
        break

      case TabState.saved:
        tabContent = (
          <AddWidgetModalSavedBlocks
            closeHandler={closeHandler}
            object={object}
            addComponent={addComponent}
          />
        )
        break
    }

    return (
      <>
        {/*
        <Tabs value={tab}>
          {[
            {
              value: TabState.default,
              label: 'Системные',
            },
            {
              value: TabState.saved,
              label: 'Блоки',
            },
          ].map((n) => {
            return (
              <Button
                key={n.value}
                value={n.value}
                onClick={onTabClick}
                className={tab === n.value ? 'btn active' : 'btn'}
              >
                {n.label}
              </Button>
            )
          })}
        </Tabs>
        */}
        {tabContent}
      </>
    )
  }, [
    addComponent,
    buttons,
    closeHandler,
    object,
    onTabClick,
    showMore,
    tab,
    showMoreButton,
  ])

  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddWidgetModalStyled
        modal
        preventClickEvent
        title="Добавить виджет"
        closeHandler={closeHandler}
        moveable
        role="redactor--modal"
      >
        {tabs}
      </AddWidgetModalStyled>,
      document.body
    )
  }, [closeHandler, tabs])
}
