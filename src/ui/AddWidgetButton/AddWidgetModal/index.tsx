import React, { useCallback, useContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../..'
import { AddContentEditorWidgetButton } from './buttons/AddContentEditorWidgetButton'
import { AddHeadWidgetButton } from './buttons/AddHead'
import { AddButtonWidgetButton } from './buttons/AddButton'
import { AddImageWidgetButton } from './buttons/AddImageWidgetButton'
import { AddVideoWidgetButton } from './buttons/AddVideoWidgetButton'
import { AddWidgetModalContext } from './Context'
import { AddWidgetModalProps } from './interfaces'
import { AddWidgetModalStyled } from './styles'
import { Tabs } from '../../Tabs'
import { Button, ButtonProps } from '@procraft/ui/dist/Button'
import { AddWidgetModalSavedBlocks } from './tabs/Saved'

// type TabState = 'default' | 'saved'
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

    switch (tab) {
      case TabState.default:
        tabContent = (
          <div role="secondaryButtons" className='vidgets'>
            <AddContentEditorWidgetButton
              closeHandler={closeHandler}
              object={object}
              // updateObject={updateObject}
              addComponent={addComponent}
            />
            <AddImageWidgetButton
              closeHandler={closeHandler}
              object={object}
              // updateObject={updateObject}
              addComponent={addComponent}
            />
            <AddVideoWidgetButton
              closeHandler={closeHandler}
              object={object}
              // updateObject={updateObject}
              addComponent={addComponent}
            />
            <AddHeadWidgetButton
              closeHandler={closeHandler}
              object={object}
              addComponent={addComponent}
            />
            <AddButtonWidgetButton
              closeHandler={closeHandler}
              object={object}
              addComponent={addComponent}
            />
            {buttons}
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
        {tabContent}
      </>
    )
  }, [addComponent, buttons, closeHandler, object, onTabClick, tab])

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
