import React from 'react'
import ReactDom from 'react-dom'
import { MonacoEditorModalProps } from './interfaces'
import { MonacoEditorModalStyled } from './styles'

/**
 * Редактор кода в модальном окне
 */
export const MonacoEditorModal: React.FC<MonacoEditorModalProps> = ({
  children,
  ...other
}) => {
  return ReactDom.createPortal(
    <MonacoEditorModalStyled {...other}>{children}</MonacoEditorModalStyled>,
    document.body
  )
}
