import { AddWidgetModalProps } from './AddWidgetModal/interfaces'

export type AddWidgetButtonProps = {
  /**
   * Показываем кнопку только когда на элемент наведена мышька
   */
  hovered: true

  element: HTMLElement

  object: AddWidgetModalProps['object']
  updateObject: AddWidgetModalProps['updateObject']

  activeSetter: React.Dispatch<React.SetStateAction<boolean>>
}
