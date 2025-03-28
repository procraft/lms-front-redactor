import { RedactorComponentProps } from './RedactorComponent/interfaces'
import getRedactorObjectComponent from './hooks/RedactorObjectRender'
import { LmsFrontRedactorContextValue } from './Context'

export type LmsFrontRedactorProps = {
  inEditMode: boolean
  // object: EditorComponentProps['object'] | undefined
  object: RedactorComponentProps['object'] | undefined
  updateObject: RedactorComponentProps['updateObject']
  // onChangeState: Function

  getRedactorObjectComponent: typeof getRedactorObjectComponent

  objectTemplates: LmsFrontRedactorContextValue['objectTemplates']

  /**
   * Список возможных ссылок
   */
  linksList: LmsFrontRedactorContextValue['linksList']

  showHiddenTags: boolean

  tagsDisabled?: Set<string>
}
