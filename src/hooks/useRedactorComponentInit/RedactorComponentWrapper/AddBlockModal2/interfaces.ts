// import { RedactorComponentWrapperProps } from '../interfaces'
import { AddBlockModal2ButtonProps } from './Button/interfaces'

export type AddBlockModal2Props = {
  // object: RedactorComponentWrapperProps['object']

  /**
   * Закрытие модалки
   */
  closeHandler: () => void

  // updateObject: RedactorComponentWrapperProps['updateObject']

  parent: AddBlockModal2ButtonProps['parent']
  updateParent: AddBlockModal2ButtonProps['updateParent']

  direction: AddBlockModal2ButtonProps['direction']
}
