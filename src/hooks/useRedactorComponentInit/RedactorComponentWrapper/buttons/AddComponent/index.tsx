import React, { useCallback, useState } from 'react'
import { Button } from '@procraft/ui/dist/Button'
import { SvgIconPlus } from '../../../../../ui/SvgIcon/Plus'

import { RedactorComponentWrapperAddComponentButtonProps } from './interfaces'
import { AddWidgetModal } from '../../../../../ui/AddWidgetButton/AddWidgetModal'

/**
 * Кнопка вывода окна вставки компонента
 */
export const RedactorComponentWrapperAddComponentButton: React.FC<RedactorComponentWrapperAddComponentButtonProps> =
  ({ object, updateObject }) => {
    const [opened, openedSetter] = useState(false)

    const openModal = useCallback((event: MouseEvent) => {
      event.stopPropagation()

      openedSetter(true)
    }, [])

    const closeHandler = useCallback(() => {
      openedSetter(false)
    }, [])

    return (
      <>
        <Button title="Вставить виджеторрпопр" onClick={openModal}>
          <SvgIconPlus />
        </Button>

        {opened ? (
          <AddWidgetModal
            closeHandler={closeHandler}
            object={object}
            updateObject={updateObject}
          />
        ) : null}
      </>
    )
  }
