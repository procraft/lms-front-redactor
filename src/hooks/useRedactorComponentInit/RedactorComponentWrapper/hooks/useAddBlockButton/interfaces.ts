import { RedactorComponentObject } from '../../../../..'

export type useAddBlockButtonProps = {
  /**
   * Враппер компонента
   */
  wrapper: HTMLDivElement

  /**
   * Обязательно передавать флаг наведения, так как кнопка только в этом состоянии должна выводиться
   */
  hovered: boolean

  /**
   * Если элемент активный, не выводим кнопки
   */
  active: boolean

  direction: 'Top' | 'Bottom' | undefined

  onClick: (event: MouseEvent) => void

  parent: RedactorComponentObject | undefined
}
