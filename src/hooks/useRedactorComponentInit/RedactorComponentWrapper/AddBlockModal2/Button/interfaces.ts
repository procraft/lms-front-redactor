import { RedactorComponentObject } from '../../../../..'
import { useAddBlockButtonProps } from '../../hooks/useAddBlockButton/interfaces'
import { RedactorComponentWrapperProps } from '../../interfaces'

export type AddBlockModal2ButtonProps = {
  object: RedactorComponentObject

  parent: NonNullable<RedactorComponentWrapperProps['parent']>
  updateParent: NonNullable<RedactorComponentWrapperProps['updateParent']>

  direction: useAddBlockButtonProps['direction']

  /**
   * Закрытие модалки
   */
  closeHandler: () => void
}
