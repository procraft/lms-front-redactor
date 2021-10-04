import React, { useEffect, useMemo, useState } from 'react'
import IconButton from 'material-ui/IconButton'
import { UiIconButtonProps } from './interfaces'

/**
 * Кнопка с нативным обработчиком по клику.
 * Решаемая проблема: реакт все события навешивает на документ.
 * В итоге, если где-то на уровне нативных событий оборвали распространение
 * через event.stopPropagation(), то до обработчика просто не доходит дело.
 * Здесь я использую нативный хэндлер.
 */
export const UiIconButton: React.FC<UiIconButtonProps> = ({
  callback,
  children,
  name,
  ...other
}) => {
  const elementState = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!elementState[0] || !callback) {
      return
    }

    const onClick = (event: MouseEvent) => {
      // event.preventDefault()
      event.stopPropagation()

      callback(event)
    }

    elementState[0].addEventListener('click', onClick)

    return () => {
      elementState[0]?.removeEventListener('click', onClick)
    }
  }, [callback, elementState])

  return useMemo(() => {
    return (
      <IconButton {...other}>
        <div
          ref={elementState[1]}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          // TODO событие здесь навешивается не на кнопку, а на див,
          // поэтому в коллбэках не получается просто так name получить.
          // Будем пробрасывать data-name атрибут
          data-name={name}
        >
          {children}
        </div>
      </IconButton>
    )
  }, [children, elementState, name, other])
}
