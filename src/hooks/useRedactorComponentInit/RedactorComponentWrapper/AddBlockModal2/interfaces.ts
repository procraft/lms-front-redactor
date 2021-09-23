import { useAddBlockButtonProps } from '../hooks/useAddBlockButton/interfaces'
import { RedactorComponentWrapperProps } from '../interfaces'

export type AddBlockModal2Props = {
  object: RedactorComponentWrapperProps['object']

  /**
   * Закрытие модалки
   */
  closeHandler: () => void

  // updateObject: RedactorComponentWrapperProps['updateObject']

  parent: RedactorComponentWrapperProps['parent']
  updateParent: RedactorComponentWrapperProps['updateParent']

  direction: useAddBlockButtonProps['direction']
}
