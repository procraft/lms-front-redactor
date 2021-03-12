import React, { useCallback, useMemo, useState } from 'react'

import { uid } from 'uid'
import { ErrorBar } from '../..'
import { ErrorBarProps } from '../../interfaces'

// type useErrorBarProps = {
//   // items: ErrorBarProps["items"]
// }

const useErrorBar = () => {
  const [items, setItems] = useState<ErrorBarProps['items']>([])

  /**
   * Добавление ошибки
   */
  const addError = useCallback(
    (error: Error) => {
      const newItems = items.slice(0)

      newItems.push({
        error,
        id: uid(),
      })

      setItems(newItems)
    },
    [items]
  )

  const removeError = useCallback<ErrorBarProps['removeError']>(
    (error: Error) => {
      const index = items.findIndex((n) => n.error === error)

      if (index !== -1) {
        const newItems = items.slice(0)
        newItems.splice(index, 1)

        setItems(newItems)
      }
    },
    [items]
  )

  const errorBar = useMemo(() => {
    return <ErrorBar items={items} removeError={removeError}></ErrorBar>
  }, [items, removeError])

  return useMemo(() => {
    return {
      errorBar,
      items,
      setItems,
      addError,
      removeError,
    }
  }, [errorBar, items, addError, removeError])
}

export default useErrorBar
