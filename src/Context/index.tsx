import React from 'react'
import { LmsFrontRedactorProps } from '../interfaces'
import {
  RedactorComponent,
  RedactorComponentObject,
} from '../RedactorComponent/interfaces'

// export type ComponentData = {
//   Component: RedactorComponent
//   template: RedactorComponentProps['object']
// }

/**
 * Шаблон вставляемого блока
 */
export type RedactorObjectTemplate = {
  Component: RedactorComponent
  template: RedactorComponentObject
}

/**
 * Список ссылок, которые можно использовать для вставки (в компоненте создания ссылок)
 */
export type RedactorLinkData = {
  id: string
  uri?: string | null
  name?: string | null
}

export type LmsFrontRedactorContextValue = {
  inEditMode: boolean

  getRedactorObjectComponent: LmsFrontRedactorProps['getRedactorObjectComponent']

  objectTemplates: RedactorObjectTemplate[]

  linksList: RedactorLinkData[] | undefined

  /**
   * Показывать скрытые теги (скрипты, стили, мета и т.п.)
   */
  showHiddenTags: boolean
}

export const LmsFrontRedactorContext =
  React.createContext<LmsFrontRedactorContextValue | null>(null)
