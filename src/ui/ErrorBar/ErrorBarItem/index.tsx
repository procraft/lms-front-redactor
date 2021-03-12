import React, { useCallback, useEffect, useMemo } from 'react'
import { ErrorBarItemProps } from './interfaces'
import {
  ErrorBarItemButtonStyled,
  ErrorBarItemMessageStyled,
  ErrorBarItemStyled,
} from './styles'

/**
 * Задержка по умолчанию
 */
const defaultDelay = 5000

const ErrorBarItem: React.FC<ErrorBarItemProps> = ({
  // opened,
  error,
  removeError,
  delay,
  ...other
}) => {
  const closeError = useCallback(() => {
    removeError(error)
  }, [error, removeError])

  // TODO: Сейчас useEffect срабатывает каждый раз при обновлении
  // списка ошибок. В итоге нарушается таймер (пересоздается вновь)
  /**
   * Закрытие сообщения по таймауту
   */
  useEffect(() => {
    if (delay === null) {
      return
    }

    const timeout = setTimeout(closeError, delay || defaultDelay)

    return () => {
      clearTimeout(timeout)
    }
  }, [closeError, delay])

  return useMemo(() => {
    return (
      <ErrorBarItemStyled
        // open={opened}
        {...other}
      >
        <ErrorBarItemMessageStyled>{error.message}</ErrorBarItemMessageStyled>
        <ErrorBarItemButtonStyled onClick={closeError}>
          X
        </ErrorBarItemButtonStyled>
      </ErrorBarItemStyled>
    )
  }, [closeError, error.message, other])
}

export default ErrorBarItem
