import React, { useCallback, useContext, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { RedactorComponentObject } from '../../..'
import { AddWidgetModalContext } from './Context'
import { AddWidgetModalProps } from './interfaces'
import { AddWidgetModalStyled } from './styles'
import { Tabs } from '../../Tabs'
import { Button, ButtonProps } from '@procraft/ui/dist/Button'
import { AddWidgetModalSavedBlocks } from './tabs/Saved'
import { AddWidgetModalDefaultBlocks } from './tabs/Default'

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
          <AddWidgetModalDefaultBlocks
            closeHandler={closeHandler}
            object={object}
            addComponent={addComponent}
            context={context}
          />
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
              label: 'Пользовательские',
            },
          ].map((n) => {
            return (
              <Button
                key={n.value}
                value={n.value}
                onClick={onTabClick}
                color={tab === n.value ? 'primary' : undefined}
              >
                {n.label}
              </Button>
            )
          })}
        </Tabs>
        {tabContent}
      </>
    )
  }, [addComponent, closeHandler, context, object, onTabClick, tab])

  return useMemo(() => {
    return ReactDOM.createPortal(
      <AddWidgetModalStyled
        modal
        preventClickEvent
        title="Вставить виджет"
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
