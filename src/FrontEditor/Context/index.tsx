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
