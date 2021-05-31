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

export type LmsFrontRedactorContextValue = {
  inEditMode: boolean

  getRedactorObjectComponent: LmsFrontRedactorProps['getRedactorObjectComponent']

  objectTemplates: RedactorObjectTemplate[]
}

const LmsFrontRedactorContext =
  React.createContext<LmsFrontRedactorContextValue | null>(null)

export default LmsFrontRedactorContext
