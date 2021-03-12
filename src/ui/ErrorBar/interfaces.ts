import { ErrorBarItemProps } from './ErrorBarItem/interfaces'

export interface ErrorBarProps {
  // message: string | undefined

  // opened: boolean

  // error: Error | undefined

  // close?: (error: Error) => void

  /**
   * Массив ошибок
   */
  items: Omit<ErrorBarItemProps, 'removeError'>[]

  /**
   * Закрытие ошибки
   */
  removeError: ErrorBarItemProps['removeError']
}
