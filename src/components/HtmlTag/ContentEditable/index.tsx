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
  activeSetter,
}) => {
  /**
   * Редактирование инлайн
   */
  const toolbar = useContentEditable2({
    element,
    active,
    canContentEditable,
    activeSetter,
  })

  return toolbar
}
