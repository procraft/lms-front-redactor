import React from 'react'
import { useContentEditable2 } from '../../../hooks/useRedactorComponentInit/useContentEditable2'
import { HtmlTagContentEditableProps } from './interfaces'

/**
 * Добавляет возможно редактировать в режиме contentEditable
 */
export const HtmlTagContentEditable: React.FC<HtmlTagContentEditableProps> = ({
  active,
  canContentEditable,
  element,
}) => {
  /**
   * Редактирование инлайн
   */
  useContentEditable2({
    element,
    active,
    canContentEditable,
  })

  return null
}
