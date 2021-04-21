import { RedactorComponentWrapperProps } from '../interfaces'

export type AddBlockModalProps = {
  object: RedactorComponentWrapperProps['object']

  /**
   * Закрытие модалки
   */
  closeAddBlockModal: () => void

  updateObject: RedactorComponentWrapperProps['updateObject']

  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']
}
