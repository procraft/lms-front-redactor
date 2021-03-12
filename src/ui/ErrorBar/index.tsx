import React, { memo, useMemo } from 'react'

import ReactDOM from 'react-dom'
import ErrorBarItem from './ErrorBarItem'

import { ErrorBarProps } from './interfaces'
import { ErrorBarStyled } from './styles'

export * from './interfaces'

// TODO: Имеет смысл перенести в корень сайта и прокинуть контекст для вывода ошибок.
// Сейчас, если на странице будет два компонента, они будут накладываться один на другой.
/**
 * Вывод ошибок на странице.
 */
export const ErrorBar: React.FC<ErrorBarProps> = (props) => {
  // if (typeof window === "undefined") {
  //   return null;
  // }

  const { items, removeError, ...other } = props

  // const onClick = useCallback(
  //   (event) => {
  //     event.stopPropagation()
  //     event.preventDefault()
  //     close && error && close(error)
  //   },
  //   [close, error]
  // )

  const messages = useMemo(() => {
    return items.map((n, index) => (
      <ErrorBarItem key={n.id || index} removeError={removeError} {...n} />
    ))
  }, [items, removeError])

  if (typeof window === 'undefined') {
    return null
  }

  return ReactDOM.createPortal(
    <ErrorBarStyled {...other}>{messages}</ErrorBarStyled>,
    window.document.body
  )
}

export default memo(ErrorBar)
