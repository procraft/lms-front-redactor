import { RedactorComponentObject } from '../../../../..'
import { useAddBlockButtonProps } from '../../hooks/useAddBlockButton/interfaces'
import { RedactorComponentWrapperProps } from '../../interfaces'

export type AddBlockModal2ButtonProps = {
  /**
   * Исходный объект, относительно которого выполняется действие
   */
  object: RedactorComponentObject

  /**
   * Новый вставляемый объект
   */
  newObject: RedactorComponentObject

  parent: NonNullable<RedactorComponentWrapperProps['parent']>
  updateParent: NonNullable<RedactorComponentWrapperProps['updateParent']>

  direction: useAddBlockButtonProps['direction']

  /**
   * Закрытие модалки
   */
  closeHandler: () => void
}
