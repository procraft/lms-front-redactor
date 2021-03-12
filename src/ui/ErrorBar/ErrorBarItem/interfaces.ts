export type ErrorBarItemProps = {
  id: string
  // opened: boolean
  error: Error

  /**
   * Задержка в милисекундах перед закрытием ошибки.
   * Если undefined, то используется значение по умолчанию 5000 мсек.
   * Если null, то не закрывается вообще.
   */
  delay?: number | null
  /**
   * Удаление ошибки
   */
  removeError: (error: Error) => void
}
