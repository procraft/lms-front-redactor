import { RedactorComponentProps } from '../../RedactorComponent/interfaces'
import { RedactorComponentWrapperProps } from '../useRedactorComponentInit/RedactorComponentWrapper/interfaces'

export type useRedactorRenderComponentsProps = {
  object: RedactorComponentProps['object']

  inEditMode: RedactorComponentProps['inEditMode']

  /**
   * Обновление родительского объекта.
   * Внутри хука используется метод-обертка, так как дочерние компоненты
   * выводятся в цикле.
   */
  updateObject: RedactorComponentProps['updateObject']

  wrapperContainer: RedactorComponentWrapperProps['container']
}
