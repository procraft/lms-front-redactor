import {
  RedactorComponentObject,
  RedactorComponentProps,
} from '../../RedactorComponent/interfaces'

/**
 * Событие клика элемента
 */
export type RedactorComponentClickEventDetail<
  T extends HTMLElement = HTMLElement
> = { element: T }

export type RedactorComponentClickEvent =
  CustomEvent<RedactorComponentClickEventDetail>

/**
 * Мышь наведена
 */
export type RedactorComponentHoveredEventDetail<
  T extends HTMLElement = HTMLElement
> = { element: T; hovered: boolean }

export type RedactorComponentHoveredEvent =
  CustomEvent<RedactorComponentHoveredEventDetail>

/**
 * Элемент был установлен активным
 */
export type RedactorComponentActiveEventDetail<
  T extends HTMLElement = HTMLElement
> = { element: T }

export type RedactorComponentActiveEvent =
  CustomEvent<RedactorComponentActiveEventDetail>

/**
 * Сохранить все элементы.
 * Сейчас выполняется только в @procraft/lms-redactor
 */
export type RedactorComponentSaveAllEvent = CustomEvent

/**
 * Выбрасываем событие обновления блока.
 * Требуется для перехвата обновления сохраняемого блока.
 * Сейчас выполняется только в @procraft/lms-redactor
 */
export type RedactorComponentUpdateObjectEventDetail = {
  object: RedactorComponentProps['object']
  data: Partial<RedactorComponentObject>
}
export type RedactorComponentUpdateObjectEvent =
  CustomEvent<RedactorComponentUpdateObjectEventDetail>

/**
 * Этот ивент нам нужен, чтобы сообщить, что шаблон успешно сохранен,
 * чтобы убрать из списка измененных шаблонов для кнопки "Сохранить все"
 */
export type RedactorComponentUpdatedObjectEventDetail = {
  object: RedactorComponentProps['object']
}
export type RedactorComponentUpdatedObjectEvent =
  CustomEvent<RedactorComponentUpdatedObjectEventDetail>
